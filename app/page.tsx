"use client";

import { useEffect, useMemo, useState, type CSSProperties, type UIEvent } from "react";
import { Check, Database, Grid2X2, Plus, RefreshCw, Search, WifiOff, X } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RULESETS, TYPE_COLORS, loadPokemon, loadSpeciesIndex, loadTypeGraph, type PokemonSummary, type RulesetId, type SpeciesOption, type TypeRelationGraph } from "@/lib/pokeapi";
import { formatMultiplier, formatType, groupEffectiveness, recommendParty } from "@/lib/matchup";

type Mode = "basic" | "advanced";
type OpponentInput = "pokemon" | "types";
type PickerTarget = { kind: "opponent" } | { kind: "party"; slot: number };
const PARTY_KEY = "typedex:party:v1";
const RULESET_KEY = "typedex:ruleset:v1";
const APP_STATE_KEY = "typedex:state:v2";
const SPECIES_PAGE_SIZE = 60;
const MODERN_RULESET: RulesetId = "gen-vi-present";

function typeColor(type: string) { return TYPE_COLORS[type] ?? "#687178"; }
function TypeChip({ type, iconUrl, multiplier }: { type: string; iconUrl?: string | null; multiplier?: number }) {
  return <span className="type-chip" style={{ "--type-color": typeColor(type) } as CSSProperties}>{iconUrl && <img src={iconUrl} alt="" />}{formatType(type)}{multiplier !== undefined && <b>{formatMultiplier(multiplier)}</b>}</span>;
}
function ScreenLabel({ children }: { children: React.ReactNode }) { return <p className="screen-label">{children}</p>; }

export default function Home() {
  const [mode, setMode] = useState<Mode>("basic");
  const [opponentInput, setOpponentInput] = useState<OpponentInput>("pokemon");
  const [partyEnabled, setPartyEnabled] = useState(false);
  const [advancedRuleset, setAdvancedRuleset] = useState<RulesetId>("gen-ii-v");
  const effectiveRuleset = mode === "basic" ? MODERN_RULESET : advancedRuleset;
  const [graph, setGraph] = useState<TypeRelationGraph | null>(null);
  const [graphError, setGraphError] = useState<string | null>(null);
  const [graphLoading, setGraphLoading] = useState(true);
  const [graphReload, setGraphReload] = useState(0);
  const [party, setParty] = useState<Array<PokemonSummary | null>>(Array(6).fill(null));
  const [partyBusy, setPartyBusy] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [opponentTypes, setOpponentTypes] = useState<string[]>([]);
  const [opponentPokemon, setOpponentPokemon] = useState<PokemonSummary | null>(null);
  const [pickerTarget, setPickerTarget] = useState<PickerTarget | null>(null);
  const [species, setSpecies] = useState<SpeciesOption[]>([]);
  const [speciesRuleset, setSpeciesRuleset] = useState<RulesetId | null>(null);
  const [speciesLoading, setSpeciesLoading] = useState(false);
  const [pickerLoading, setPickerLoading] = useState(false);
  const [pickerError, setPickerError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [speciesLimit, setSpeciesLimit] = useState(SPECIES_PAGE_SIZE);
  const [online, setOnline] = useState(true);

  useEffect(() => {
    try {
      const savedState = window.localStorage.getItem(APP_STATE_KEY);
      if (savedState) {
        const parsed = JSON.parse(savedState) as Partial<{ mode: Mode; opponentInput: OpponentInput; partyEnabled: boolean; advancedRuleset: RulesetId; party: Array<PokemonSummary | null>; opponentTypes: string[]; opponentPokemon: PokemonSummary | null }>;
        if (parsed.mode === "basic" || parsed.mode === "advanced") setMode(parsed.mode);
        if (parsed.opponentInput === "pokemon" || parsed.opponentInput === "types") setOpponentInput(parsed.opponentInput);
        if (typeof parsed.partyEnabled === "boolean") setPartyEnabled(parsed.partyEnabled);
        if (parsed.advancedRuleset && RULESETS.some((item) => item.id === parsed.advancedRuleset)) setAdvancedRuleset(parsed.advancedRuleset);
        if (Array.isArray(parsed.party)) setParty([...parsed.party.slice(0, 6), ...Array(6).fill(null)].slice(0, 6));
        if (Array.isArray(parsed.opponentTypes)) setOpponentTypes(parsed.opponentTypes.slice(0, 2));
        if (parsed.opponentPokemon) setOpponentPokemon(parsed.opponentPokemon);
      } else {
        const savedRuleset = window.localStorage.getItem(RULESET_KEY) as RulesetId | null;
        if (savedRuleset && RULESETS.some((item) => item.id === savedRuleset)) setAdvancedRuleset(savedRuleset);
        const savedParty = window.localStorage.getItem(PARTY_KEY);
        if (savedParty) {
          const parsed = JSON.parse(savedParty) as Array<PokemonSummary | null>;
          setParty([...parsed.slice(0, 6), ...Array(6).fill(null)].slice(0, 6));
          setPartyEnabled(parsed.some(Boolean));
        }
      }
    } catch { /* Start clean if saved data is malformed. */ }
    setOnline(window.navigator.onLine);
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    // Let restored state render before enabling the persistence effect. Otherwise a
    // freshly mounted page can overwrite saved choices with the default state.
    const hydrationTimer = window.setTimeout(() => setHydrated(true), 0);
    return () => { window.clearTimeout(hydrationTimer); window.removeEventListener("online", goOnline); window.removeEventListener("offline", goOffline); };
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(RULESET_KEY, advancedRuleset);
    window.localStorage.setItem(PARTY_KEY, JSON.stringify(party));
    window.localStorage.setItem(APP_STATE_KEY, JSON.stringify({ mode, opponentInput, partyEnabled, advancedRuleset, party, opponentTypes, opponentPokemon }));
  }, [advancedRuleset, hydrated, mode, opponentInput, opponentPokemon, opponentTypes, party, partyEnabled]);

  useEffect(() => {
    let cancelled = false;
    setGraphLoading(true); setGraphError(null);
    loadTypeGraph(effectiveRuleset).then((loaded) => {
      if (cancelled) return;
      setGraph(loaded);
      setOpponentTypes((current) => current.filter((type) => loaded.activeTypes.includes(type)));
    }).catch((error: unknown) => {
      if (!cancelled) setGraphError(error instanceof Error ? error.message : "Type data could not be loaded.");
    }).finally(() => { if (!cancelled) setGraphLoading(false); });
    return () => { cancelled = true; };
  }, [effectiveRuleset, graphReload]);

  const effectiveness = useMemo(() => graph && opponentTypes.length ? groupEffectiveness(graph, opponentTypes) : [], [graph, opponentTypes]);
  const usefulGroups = effectiveness.filter((group) => group.multiplier > 1);
  const weakGroups = effectiveness.filter((group) => group.multiplier < 1);
  const recommendations = useMemo(() => {
    if (!graph || opponentTypes.length === 0 || mode !== "advanced" || !partyEnabled) return [];
    return recommendParty(party.filter((item): item is PokemonSummary => item !== null), graph, opponentTypes);
  }, [graph, mode, opponentTypes, party, partyEnabled]);
  const filteredSpecies = useMemo(() => {
    const normalized = query.toLowerCase().replace(/[\s.'’_-]/g, "");
    return species.filter((item) => {
      if (!normalized) return true;
      const display = item.displayName.toLowerCase().replace(/[\s.'’_-]/g, "");
      return display.includes(normalized) || item.name.replace(/-/g, "").includes(normalized);
    });
  }, [query, species]);
  const visibleSpecies = filteredSpecies.slice(0, speciesLimit);

  async function changeRuleset(nextRuleset: RulesetId) {
    if (nextRuleset === advancedRuleset) return;
    setAdvancedRuleset(nextRuleset); setSpecies([]); setSpeciesRuleset(null); setQuery(""); setSpeciesLimit(SPECIES_PAGE_SIZE); setPartyBusy(true);
    const [refreshedParty, refreshedOpponent] = await Promise.all([
      Promise.all(party.map(async (pokemon) => { if (!pokemon) return null; try { return await loadPokemon(pokemon.name, nextRuleset); } catch { return null; } })),
      opponentPokemon ? loadPokemon(opponentPokemon.name, nextRuleset).catch(() => null) : Promise.resolve(null),
    ]);
    setParty(refreshedParty); setOpponentPokemon(refreshedOpponent);
    if (refreshedOpponent) setOpponentTypes(refreshedOpponent.types);
    setPartyBusy(false);
  }

  function toggleOpponentType(type: string) {
    setOpponentPokemon(null);
    setOpponentTypes((current) => current.includes(type) ? current.filter((item) => item !== type) : current.length < 2 ? [...current, type] : current);
  }

  function changeMode(nextMode: Mode) {
    setMode(nextMode);
    setOpponentPokemon(null);
    setOpponentTypes([]);
    if (nextMode === "advanced") setOpponentInput("pokemon");
  }

  function changeOpponentInput(nextInput: OpponentInput) {
    if (nextInput === opponentInput) return;
    setOpponentInput(nextInput);
    setOpponentPokemon(null);
    setOpponentTypes([]);
  }

  async function openPicker(target: PickerTarget) {
    setPickerTarget(target); setPickerError(null); setQuery(""); setSpeciesLimit(SPECIES_PAGE_SIZE);
    if (species.length && speciesRuleset === effectiveRuleset) return;
    setSpeciesLoading(true);
    try { setSpecies(await loadSpeciesIndex(effectiveRuleset)); setSpeciesRuleset(effectiveRuleset); }
    catch (error: unknown) { setPickerError(error instanceof Error ? error.message : "Pokémon could not be loaded."); }
    finally { setSpeciesLoading(false); }
  }

  function updateQuery(nextQuery: string) {
    setQuery(nextQuery);
    setSpeciesLimit(SPECIES_PAGE_SIZE);
  }

  function loadMoreSpecies(event: UIEvent<HTMLDivElement>) {
    const list = event.currentTarget;
    if (list.scrollHeight - list.scrollTop - list.clientHeight > 48) return;
    setSpeciesLimit((current) => Math.min(current + SPECIES_PAGE_SIZE, filteredSpecies.length));
  }

  async function choosePokemon(option: SpeciesOption) {
    if (!pickerTarget) return;
    setPickerLoading(true); setPickerError(null);
    try {
      const pokemon = await loadPokemon(option.name, effectiveRuleset);
      if (pickerTarget.kind === "opponent") {
        setOpponentPokemon(pokemon); setOpponentTypes(pokemon.types);
      } else setParty((current) => current.map((item, index) => index === pickerTarget.slot ? pokemon : item));
      setPickerTarget(null);
    } catch (error: unknown) { setPickerError(error instanceof Error ? error.message : "That Pokémon could not be added."); }
    finally { setPickerLoading(false); }
  }

  useEffect(() => {
    type ToolDefinition = { name: string; title: string; description: string; inputSchema: object; annotations: { readOnlyHint: boolean; untrustedContentHint: boolean }; execute: (input: unknown) => Promise<unknown> };
    type ModelContext = { registerTool: (tool: ToolDefinition, options?: { signal?: AbortSignal }) => void | Promise<void> };
    const context = (document as Document & { modelContext?: ModelContext }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const register = (tool: ToolDefinition) => { try { void Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => undefined); } catch { /* Visible controls remain authoritative. */ } };
    register({
      name: "configure_matchup", title: "Configure matchup", description: "Choose battle rules and one or two opponent types in TypeDex.",
      inputSchema: { type: "object", properties: { ruleset: { type: "string", enum: RULESETS.map((item) => item.id) }, opponentTypes: { type: "array", minItems: 1, maxItems: 2, items: { type: "string" } } }, required: ["ruleset", "opponentTypes"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      async execute(input) {
        if (!input || typeof input !== "object") throw new Error("Expected a matchup configuration object.");
        const value = input as { ruleset?: unknown; opponentTypes?: unknown };
        if (typeof value.ruleset !== "string" || !RULESETS.some((item) => item.id === value.ruleset)) throw new Error("Invalid ruleset.");
        if (!Array.isArray(value.opponentTypes) || value.opponentTypes.length < 1 || value.opponentTypes.length > 2 || value.opponentTypes.some((type) => typeof type !== "string")) throw new Error("Choose one or two opponent types.");
        const nextRuleset = value.ruleset as RulesetId; const nextGraph = await loadTypeGraph(nextRuleset); const nextTypes = value.opponentTypes as string[];
        if (nextTypes.some((type) => !nextGraph.activeTypes.includes(type))) throw new Error("A selected type is unavailable in that era.");
        setMode("advanced"); setAdvancedRuleset(nextRuleset); setOpponentPokemon(null); setOpponentTypes(nextTypes);
        return { ruleset: nextRuleset, opponentTypes: nextTypes };
      },
    });
    register({
      name: "set_party", title: "Set party", description: "Set up to six Pokémon in the TypeDex party.",
      inputSchema: { type: "object", properties: { pokemonNames: { type: "array", maxItems: 6, items: { type: "string", minLength: 1 } } }, required: ["pokemonNames"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      async execute(input) {
        if (!input || typeof input !== "object") throw new Error("Expected a party configuration object.");
        const names = (input as { pokemonNames?: unknown }).pokemonNames;
        if (!Array.isArray(names) || names.length > 6 || names.some((name) => typeof name !== "string" || !name.trim())) throw new Error("Provide up to six Pokémon names.");
        const loaded = await Promise.all(names.map((name) => loadPokemon(String(name).trim().toLowerCase().replace(/\s+/g, "-"), advancedRuleset)));
        setMode("advanced"); setParty([...loaded, ...Array(6).fill(null)].slice(0, 6));
        return { ruleset: advancedRuleset, party: loaded.map((pokemon) => pokemon.name) };
      },
    });
    return () => lifecycle.abort();
  }, [advancedRuleset]);

  return <main className="app-shell"><div className="dex-shell">
    <header className="dex-header"><div className="brand-lockup"><span className="power-light" aria-hidden="true" /><div><ScreenLabel>FIELD GUIDE</ScreenLabel><h1>TypeDex</h1></div></div>{!online && <span className="offline-label"><WifiOff size={14} /> Offline</span>}</header>
    <Tabs value={mode} onValueChange={(value) => changeMode(value as Mode)} className="mode-tabs"><TabsList aria-label="TypeDex mode"><TabsTrigger value="basic">Basic</TabsTrigger><TabsTrigger value="advanced">Advanced</TabsTrigger></TabsList></Tabs>

    {mode === "advanced" && <section className="advanced-setup pixel-panel" aria-label="Advanced setup">
      <div className="setup-row"><div><ScreenLabel>RULES</ScreenLabel><h2>Game era</h2></div>{partyBusy && <RefreshCw size={16} className="spin" aria-label="Updating Pokémon" />}</div>
      <RadioGroup value={advancedRuleset} onValueChange={(value) => void changeRuleset(value as RulesetId)} className="era-selector" aria-label="Game era">{RULESETS.map((item) => <label className={advancedRuleset === item.id ? "era-option is-active" : "era-option"} key={item.id}><RadioGroupItem value={item.id} /><span>{item.label}</span></label>)}</RadioGroup>
      <div className="setup-divider" />
      <div className="setup-row"><div><ScreenLabel>OPPONENT</ScreenLabel><h2>How do you want to choose?</h2></div></div>
      <div className="opponent-mode" role="group" aria-label="Opponent input method">
        <button className={opponentInput === "pokemon" ? "is-active" : ""} aria-pressed={opponentInput === "pokemon"} onClick={() => changeOpponentInput("pokemon")}><Search size={17} /> Pokémon</button>
        <button className={opponentInput === "types" ? "is-active" : ""} aria-pressed={opponentInput === "types"} onClick={() => changeOpponentInput("types")}><Grid2X2 size={17} /> Types</button>
      </div>
      {opponentInput === "pokemon" && <div className="opponent-search">
        {opponentPokemon ? <div className="opponent-card"><img src={opponentPokemon.spriteUrl ?? ""} alt="" /><strong>{opponentPokemon.displayName}</strong><span>{opponentPokemon.types.map((type) => <TypeChip type={type} iconUrl={graph?.iconByType[type]} key={type} />)}</span><button onClick={() => { setOpponentPokemon(null); setOpponentTypes([]); }} aria-label="Clear opponent"><X size={16} /></button></div> : <button className="search-opponent-button" onClick={() => void openPicker({ kind: "opponent" })}><Search size={20} /><span><strong>Search Pokémon</strong><small>Automatically uses its type or dual type</small></span></button>}
      </div>}
      {opponentInput === "types" && <div className="opponent-types">
        <div className="type-picker-heading"><p className="short-help">Choose one, or two for a dual type.</p>{opponentTypes.length > 0 && <button className="quiet-button" onClick={() => { setOpponentTypes([]); setOpponentPokemon(null); }}>Clear</button>}</div>
        {graphLoading ? <div className="type-grid">{Array.from({ length: 18 }, (_, i) => <Skeleton className="type-skeleton" key={i} />)}</div> : graphError || !graph ? <div className="data-error"><Database size={24} /><strong>Couldn’t load type data</strong><button onClick={() => setGraphReload((value) => value + 1)}>Retry</button></div> : <div className="type-grid">{graph.activeTypes.map((type) => { const selected = opponentTypes.includes(type); const locked = opponentTypes.length === 2 && !selected; return <button key={type} className={`${selected ? "is-selected" : ""} ${locked ? "is-locked" : ""} type-button`} style={{ "--type-color": typeColor(type) } as CSSProperties} aria-pressed={selected} disabled={locked} onClick={() => toggleOpponentType(type)}>{graph.iconByType[type] ? <img src={graph.iconByType[type] ?? undefined} alt="" /> : <span className="type-icon-fallback" aria-hidden="true" />}{formatType(type)}{selected && <Check size={15} />}</button>; })}</div>}
      </div>}
      <div className="setup-divider" />
      <div className="setup-row"><div><ScreenLabel>OPTIONAL</ScreenLabel><h2>Use my party</h2></div><Switch checked={partyEnabled} onCheckedChange={setPartyEnabled} aria-label="Use my party" /></div>
      {partyEnabled && <><div className="party-actions">Your best matchup will be highlighted.{party.some(Boolean) && <button className="quiet-button" onClick={() => setParty(Array(6).fill(null))}>Clear</button>}</div><div className="party-grid">{party.map((pokemon, index) => <div className="party-slot" key={index}>{pokemon ? <><button className="pokemon-main" onClick={() => void openPicker({ kind: "party", slot: index })} aria-label={`Replace ${pokemon.displayName}`}><span className="slot-number">{index + 1}</span>{pokemon.spriteUrl && <img src={pokemon.spriteUrl} alt="" />}<strong>{pokemon.displayName}</strong></button><button className="remove-pokemon" onClick={() => setParty((current) => current.map((item, i) => i === index ? null : item))} aria-label={`Remove ${pokemon.displayName}`}><X size={13} /></button></> : <button className="empty-slot" onClick={() => void openPicker({ kind: "party", slot: index })}><span className="slot-number">{index + 1}</span><Plus size={20} /><span>Add</span></button>}</div>)}</div></>}
    </section>}

    {mode === "basic" && <section className="matchup-panel pixel-panel" aria-labelledby="target-heading">
      <div className="panel-heading"><div><ScreenLabel>QUICK MATCH</ScreenLabel><h2 id="target-heading">Pick the opposing type</h2></div>{opponentTypes.length > 0 && <button className="quiet-button" onClick={() => { setOpponentTypes([]); setOpponentPokemon(null); }}>Clear</button>}</div>
      <p className="short-help">Choose one, or two for a dual type.</p>
      {graphLoading ? <div className="type-grid">{Array.from({ length: 18 }, (_, i) => <Skeleton className="type-skeleton" key={i} />)}</div> : graphError || !graph ? <div className="data-error"><Database size={24} /><strong>Couldn’t load type data</strong><button onClick={() => setGraphReload((value) => value + 1)}>Retry</button></div> : <div className="type-grid">{graph.activeTypes.map((type) => { const selected = opponentTypes.includes(type); const locked = opponentTypes.length === 2 && !selected; return <button key={type} className={`${selected ? "is-selected" : ""} ${locked ? "is-locked" : ""} type-button`} style={{ "--type-color": typeColor(type) } as CSSProperties} aria-pressed={selected} disabled={locked} onClick={() => toggleOpponentType(type)}>{graph.iconByType[type] ? <img src={graph.iconByType[type] ?? undefined} alt="" /> : <span className="type-icon-fallback" aria-hidden="true" />}{formatType(type)}{selected && <Check size={15} />}</button>; })}</div>}
    </section>}

    {opponentTypes.length > 0 && <section className="result-panel pixel-panel" aria-live="polite">
      <div className="target-line"><ScreenLabel>AGAINST</ScreenLabel><div>{opponentTypes.map((type) => <TypeChip type={type} iconUrl={graph?.iconByType[type]} key={type} />)}</div></div>
      {mode === "advanced" && recommendations.length > 0 && <section className="best-party"><ScreenLabel>BEST FROM PARTY</ScreenLabel><div>{recommendations[0].pokemon.spriteUrl && <img src={recommendations[0].pokemon.spriteUrl} alt="" />}<span><strong>{recommendations[0].pokemon.displayName}</strong><small>{recommendations[0].explanation}</small></span><b>{formatMultiplier(recommendations[0].offensiveMultiplier)}</b></div></section>}
      <div className="answer-grid"><section className="answer-card answer-good"><ScreenLabel>USE</ScreenLabel><h3>Most effective</h3>{usefulGroups.length ? usefulGroups.map((group) => <div className="answer-row" key={group.multiplier}><strong>{formatMultiplier(group.multiplier)}</strong><span>{group.types.map((type) => <TypeChip type={type} iconUrl={graph?.iconByType[type]} key={type} />)}</span></div>) : <p>No super-effective types.</p>}</section><section className="answer-card answer-bad"><ScreenLabel>AVOID</ScreenLabel><h3>Least effective</h3>{weakGroups.length ? weakGroups.slice().reverse().map((group) => <div className="answer-row" key={group.multiplier}><strong>{formatMultiplier(group.multiplier)}</strong><span>{group.types.map((type) => <TypeChip type={type} iconUrl={graph?.iconByType[type]} key={type} />)}</span></div>) : <p>No resisted types.</p>}</section></div>
    </section>}
    <footer><span>{mode === "basic" ? "Modern rules" : RULESETS.find((item) => item.id === advancedRuleset)?.label}</span><a href="https://pokeapi.co" target="_blank" rel="noreferrer">PokéAPI</a></footer>
  </div>

  <Dialog open={pickerTarget !== null} onOpenChange={(open) => { if (!open && !pickerLoading) setPickerTarget(null); }}><DialogContent className="pokemon-dialog" showCloseButton={!pickerLoading} onOpenAutoFocus={(event) => event.preventDefault()}><DialogHeader className="picker-header"><ScreenLabel>POKÉDEX</ScreenLabel><DialogTitle>{pickerTarget?.kind === "opponent" ? "Find opponent" : "Choose party Pokémon"}</DialogTitle><DialogDescription>Search Pokémon available in these battle rules.</DialogDescription></DialogHeader><Command shouldFilter={false} className="pokemon-command"><CommandInput placeholder="Search by name…" value={query} onValueChange={updateQuery} disabled={speciesLoading || pickerLoading} /><CommandList className="pokemon-list" onScroll={loadMoreSpecies}>{speciesLoading ? <div className="picker-loading"><RefreshCw className="spin" /> Loading…</div> : pickerError ? <div className="picker-error"><p>{pickerError}</p><button onClick={() => pickerTarget && void openPicker(pickerTarget)}>Retry</button></div> : <><CommandEmpty>No Pokémon found.</CommandEmpty><CommandGroup>{visibleSpecies.map((option) => <CommandItem key={option.name} value={option.name} onSelect={() => void choosePokemon(option)} disabled={pickerLoading} className="pokemon-option"><span className="dex-number">#{String(option.id).padStart(4, "0")}</span><span>{option.displayName}</span></CommandItem>)}</CommandGroup></>}</CommandList></Command></DialogContent></Dialog>
  </main>;
}
