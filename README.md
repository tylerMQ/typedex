# TypeDex

A retro, mobile-first Pokémon type effectiveness guide powered by PokéAPI.

## Run locally

Requirements: Node.js 22+ and pnpm 11+.

```sh
pnpm install
pnpm dev
```

Open the local URL printed by the dev server. Build with `pnpm build`.

## What it does

- Basic mode: choose one or two opposing types and see the best and worst attacking types.
- Advanced mode: choose an exact Pokémon or types, select grouped game eras, and optionally save a party.
- Pokémon and type data come from PokéAPI. Sprite URLs are supplied by PokéAPI and hosted by the official PokeAPI/sprites repository.
- Party and matchup settings persist in browser storage.

The app is a Next.js/Vinext client application and can be hosted on a compatible Node or Cloudflare deployment platform.