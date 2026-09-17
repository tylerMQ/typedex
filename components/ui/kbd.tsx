import { cn } from "@/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background…81718 tokens truncated….3.3':
    optional: true

  '@img/sharp-libvips-darwin-x64@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-arm64@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-arm@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-ppc64@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-riscv64@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-s390x@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-x64@1.3.3':
    optional: true

  '@img/sharp-libvips-linuxmusl-arm64@1.3.3':
    optional: true

  '@img/sharp-libvips-linuxmusl-x64@1.3.3':
    optional: true

  '@img/sharp-linux-arm64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm64': 1.3.3
    optional: true

  '@img/sharp-linux-arm@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm': 1.3.3
    optional: true

  '@img/sharp-linux-ppc64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-ppc64': 1.3.3
    optional: true

  '@img/sharp-linux-riscv64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-riscv64': 1.3.3
    optional: true

  '@img/sharp-linux-s390x@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-s390x': 1.3.3
    optional: true

  '@img/sharp-linux-x64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-x64': 1.3.3
    optional: true

  '@img/sharp-linuxmusl-arm64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-arm64': 1.3.3
    optional: true

  '@img/sharp-linuxmusl-x64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-x64': 1.3.3
    optional: true

  '@img/sharp-wasm32@0.35.4':
    dependencies:
      '@emnapi/runtime': 1.11.3
    optional: true

  '@img/sharp-webcontainers-wasm32@0.35.4':
    dependencies:
      '@img/sharp-wasm32': 0.35.4
    optional: true

  '@img/sharp-win32-arm64@0.35.4':
    optional: true

  '@img/sharp-win32-ia32@0.35.4':
    optional: true

  '@img/sharp-win32-x64@0.35.4':
    optional: true

  '@jridgewell/gen-mapping@0.3.13':
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/remapping@2.3.5':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/source-map@0.3.11':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/sourcemap-codec@1.5.5': {}

  '@jridgewell/trace-mapping@0.3.31':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.5

  '@jridgewell/trace-mapping@0.3.9':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.5

  '@napi-rs/wasm-runtime@0.2.12':
    dependencies:
      '@emnapi/core': 1.10.0
      '@emnapi/runtime': 1.11.3
      '@tybys/wasm-util': 0.10.2
    optional: true

  '@napi-rs/wasm-runtime@1.1.4(@emnapi/core@1.10.0)(@emnapi/runtime@1.10.0)':
    dependencies:
      '@emnapi/core': 1.10.0
      '@emnapi/runtime': 1.10.0
      '@tybys/wasm-util': 0.10.2
    optional: true

  '@next/env@16.3.4': {}

  '@next/eslint-plugin-next@16.3.4(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))':
    dependencies:
      '@eslint-community/eslint-utils': 4.9.1(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))
      fast-glob: 3.3.1
    transitivePeerDependencies:
      - eslint

  '@next/swc-darwin-arm64@16.3.4':
    optional: true

  '@next/swc-darwin-x64@16.3.4':
    optional: true

  '@next/swc-linux-arm64-gnu@16.3.4':
    optional: true

  '@next/swc-linux-arm64-musl@16.3.4':
    optional: true

  '@next/swc-linux-x64-gnu@16.3.4':
    optional: true

  '@next/swc-linux-x64-musl@16.3.4':
    optional: true

  '@next/swc-win32-arm64-msvc@16.3.4':
    optional: true

  '@next/swc-win32-x64-msvc@16.3.4':
    optional: true

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.20.1

  '@nolyfill/is-core-module@1.0.39': {}

  '@oxc-project/types@0.130.0': {}

  '@poppinss/colors@4.1.6':
    dependencies:
      kleur: 4.1.5

  '@poppinss/dumper@0.6.5':
    dependencies:
      '@poppinss/colors': 4.1.6
      '@sindresorhus/is': 7.2.0
      supports-color: 10.2.2

  '@poppinss/exception@1.2.3': {}

  '@radix-ui/number@1.1.3': {}

  '@radix-ui/primitive@1.1.7': {}

  '@radix-ui/react-accessible-icon@1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-visually-hidden': 1.2.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-accordion@1.2.20(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-collapsible': 1.1.20(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-collection': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-alert-dialog@1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dialog': 1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-arrow@1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-aspect-ratio@1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-avatar@1.2.6(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-is-hydrated': 0.1.3(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-checkbox@1.3.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-size': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-collapsible@1.1.20(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-collection@1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.3.3(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-compose-refs@1.1.5(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-context-menu@2.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-menu': 2.1.24(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-context@1.2.2(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-dialog@1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-focus-guards': 1.1.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-focus-scope': 1.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-portal': 1.1.17(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.3.3(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      aria-hidden: 1.2.6
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      react-remove-scroll: 2.7.2(@types/react@19.2.14)(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-direction@1.1.4(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-dismissable-layer@1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-effect-event': 0.0.5(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-dropdown-menu@2.1.24(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-menu': 2.1.24(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-focus-guards@1.1.6(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-focus-scope@1.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-form@0.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-label': 2.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-hover-card@1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-popper': 1.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-portal': 1.1.17(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-id@1.1.4(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-label@2.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-menu@2.1.24(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-collection': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-focus-guards': 1.1.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-focus-scope': 1.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-popper': 1.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-portal': 1.1.17(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-roving-focus': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.3.3(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      aria-hidden: 1.2.6
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      react-remove-scroll: 2.7.2(@types/react@19.2.14)(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-menubar@1.1.24(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-collection': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-menu': 2.1.24(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-roving-focus': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-navigation-menu@1.2.22(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-collection': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-previous': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-visually-hidden': 1.2.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-one-time-password-field@0.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/number': 1.1.3
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-collection': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-roving-focus': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-effect-event': 0.0.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-is-hydrated': 0.1.3(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-password-toggle-field@0.1.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-effect-event': 0.0.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-is-hydrated': 0.1.3(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-popover@1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-focus-guards': 1.1.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-focus-scope': 1.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-popper': 1.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-portal': 1.1.17(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.3.3(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      aria-hidden: 1.2.6
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      react-remove-scroll: 2.7.2(@types/react@19.2.14)(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-popper@1.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@floating-ui/react-dom': 2.1.9(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-arrow': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-rect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-size': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/rect': 1.1.3
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-portal@1.1.17(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-presence@1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-primitive@2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-slot': 1.3.3(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-progress@1.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-radio-group@1.4.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-roving-focus': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-size': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-roving-focus@1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-collection': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-is-hydrated': 0.1.3(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-scroll-area@1.2.18(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/number': 1.1.3
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-select@2.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/number': 1.1.3
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-collection': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-focus-guards': 1.1.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-focus-scope': 1.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-popper': 1.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-portal': 1.1.17(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.3.3(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-previous': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-visually-hidden': 1.2.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      aria-hidden: 1.2.6
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      react-remove-scroll: 2.7.2(@types/react@19.2.14)(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-separator@1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-slider@1.4.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/number': 1.1.3
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-collection': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-previous': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-size': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-slot@1.3.3(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-switch@1.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-size': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-tabs@1.1.21(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-roving-focus': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-toast@1.2.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-collection': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-portal': 1.1.17(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-visually-hidden': 1.2.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-toggle-group@1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-roving-focus': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-toggle': 1.1.18(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-toggle@1.1.18(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-toolbar@1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-roving-focus': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-separator': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-toggle-group': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-tooltip@1.2.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-popper': 1.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-portal': 1.1.17(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.3.3(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-visually-hidden': 1.2.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/react-use-callback-ref@1.1.4(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-use-controllable-state@1.2.6(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-use-effect-event': 0.0.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-use-effect-event@0.0.5(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-use-escape-keydown@1.1.5(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-use-is-hydrated@0.1.3(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-use-layout-effect@1.1.4(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-use-previous@1.1.4(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-use-rect@1.1.4(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      '@radix-ui/rect': 1.1.3
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-use-size@1.1.4(@types/react@19.2.14)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  '@radix-ui/react-visually-hidden@1.2.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  '@radix-ui/rect@1.1.3': {}

  '@reduxjs/toolkit@2.12.0(react-redux@9.3.0(@types/react@19.2.14)(react@19.2.6)(redux@5.0.1))(react@19.2.6)':
    dependencies:
      '@standard-schema/spec': 1.1.0
      '@standard-schema/utils': 0.3.0
      immer: 11.1.16
      redux: 5.0.1
      redux-thunk: 3.1.0(redux@5.0.1)
      reselect: 5.2.0
    optionalDependencies:
      react: 19.2.6
      react-redux: 9.3.0(@types/react@19.2.14)(react@19.2.6)(redux@5.0.1)

  '@resvg/resvg-wasm@2.4.0': {}

  '@rolldown/binding-android-arm64@1.0.1':
    optional: true

  '@rolldown/binding-darwin-arm64@1.0.1':
    optional: true

  '@rolldown/binding-darwin-x64@1.0.1':
    optional: true

  '@rolldown/binding-freebsd-x64@1.0.1':
    optional: true

  '@rolldown/binding-linux-arm-gnueabihf@1.0.1':
    optional: true

  '@rolldown/binding-linux-arm64-gnu@1.0.1':
    optional: true

  '@rolldown/binding-linux-arm64-musl@1.0.1':
    optional: true

  '@rolldown/binding-linux-ppc64-gnu@1.0.1':
    optional: true

  '@rolldown/binding-linux-s390x-gnu@1.0.1':
    optional: true

  '@rolldown/binding-linux-x64-gnu@1.0.1':
    optional: true

  '@rolldown/binding-linux-x64-musl@1.0.1':
    optional: true

  '@rolldown/binding-openharmony-arm64@1.0.1':
    optional: true

  '@rolldown/binding-wasm32-wasi@1.0.1':
    dependencies:
      '@emnapi/core': 1.10.0
      '@emnapi/runtime': 1.10.0
      '@napi-rs/wasm-runtime': 1.1.4(@emnapi/core@1.10.0)(@emnapi/runtime@1.10.0)
    optional: true

  '@rolldown/binding-win32-arm64-msvc@1.0.1':
    optional: true

  '@rolldown/binding-win32-x64-msvc@1.0.1':
    optional: true

  '@rolldown/pluginutils@1.0.0-rc.18': {}

  '@rolldown/pluginutils@1.0.1': {}

  '@rtsao/scc@1.1.0': {}

  '@shadcn/react@0.3.0(@types/react@19.2.14)(react@19.2.6)':
    optionalDependencies:
      '@types/react': 19.2.14
      react: 19.2.6

  '@shuding/opentype.js@1.4.0-beta.0':
    dependencies:
      fflate: 0.7.4
      string.prototype.codepointat: 0.2.1

  '@sindresorhus/is@7.2.0': {}

  '@speed-highlight/core@1.2.15': {}

  '@standard-schema/spec@1.1.0': {}

  '@standard-schema/utils@0.3.0': {}

  '@swc/helpers@0.5.23':
    dependencies:
      tslib: 2.8.1

  '@tailwindcss/node@4.2.1':
    dependencies:
      '@jridgewell/remapping': 2.3.5
      enhanced-resolve: 5.21.3
      jiti: 2.7.0
      lightningcss: 1.31.1
      magic-string: 0.30.21
      source-map-js: 1.2.1
      tailwindcss: 4.2.1

  '@tailwindcss/oxide-android-arm64@4.2.1':
    optional: true

  '@tailwindcss/oxide-darwin-arm64@4.2.1':
    optional: true

  '@tailwindcss/oxide-darwin-x64@4.2.1':
    optional: true

  '@tailwindcss/oxide-freebsd-x64@4.2.1':
    optional: true

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.2.1':
    optional: true

  '@tailwindcss/oxide-linux-arm64-gnu@4.2.1':
    optional: true

  '@tailwindcss/oxide-linux-arm64-musl@4.2.1':
    optional: true

  '@tailwindcss/oxide-linux-x64-gnu@4.2.1':
    optional: true

  '@tailwindcss/oxide-linux-x64-musl@4.2.1':
    optional: true

  '@tailwindcss/oxide-wasm32-wasi@4.2.1':
    optional: true

  '@tailwindcss/oxide-win32-arm64-msvc@4.2.1':
    optional: true

  '@tailwindcss/oxide-win32-x64-msvc@4.2.1':
    optional: true

  '@tailwindcss/oxide@4.2.1':
    optionalDependencies:
      '@tailwindcss/oxide-android-arm64': 4.2.1
      '@tailwindcss/oxide-darwin-arm64': 4.2.1
      '@tailwindcss/oxide-darwin-x64': 4.2.1
      '@tailwindcss/oxide-freebsd-x64': 4.2.1
      '@tailwindcss/oxide-linux-arm-gnueabihf': 4.2.1
      '@tailwindcss/oxide-linux-arm64-gnu': 4.2.1
      '@tailwindcss/oxide-linux-arm64-musl': 4.2.1
      '@tailwindcss/oxide-linux-x64-gnu': 4.2.1
      '@tailwindcss/oxide-linux-x64-musl': 4.2.1
      '@tailwindcss/oxide-wasm32-wasi': 4.2.1
      '@tailwindcss/oxide-win32-arm64-msvc': 4.2.1
      '@tailwindcss/oxide-win32-x64-msvc': 4.2.1

  '@tailwindcss/postcss@4.2.1':
    dependencies:
      '@alloc/quick-lru': 5.2.0
      '@tailwindcss/node': 4.2.1
      '@tailwindcss/oxide': 4.2.1
      postcss: 8.5.23
      tailwindcss: 4.2.1

  '@tybys/wasm-util@0.10.2':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@types/d3-array@3.2.2': {}

  '@types/d3-color@3.1.3': {}

  '@types/d3-ease@3.0.2': {}

  '@types/d3-interpolate@3.0.4':
    dependencies:
      '@types/d3-color': 3.1.3

  '@types/d3-path@3.1.1': {}

  '@types/d3-scale@4.0.9':
    dependencies:
      '@types/d3-time': 3.0.4

  '@types/d3-shape@3.1.8':
    dependencies:
      '@types/d3-path': 3.1.1

  '@types/d3-time@3.0.4': {}

  '@types/d3-timer@3.0.2': {}

  '@types/eslint-scope@3.7.7':
    dependencies:
      '@types/eslint': 9.6.1
      '@types/estree': 1.0.9

  '@types/eslint@9.6.1':
    dependencies:
      '@types/estree': 1.0.9
      '@types/json-schema': 7.0.15

  '@types/estree@1.0.9': {}

  '@types/json-schema@7.0.15': {}

  '@types/json5@0.0.29': {}

  '@types/node@22.19.19':
    dependencies:
      undici-types: 6.21.0

  '@types/react-dom@19.2.3(@types/react@19.2.14)':
    dependencies:
      '@types/react': 19.2.14

  '@types/react@19.2.14':
    dependencies:
      csstype: 3.2.3

  '@types/use-sync-external-store@0.0.6': {}

  '@typescript-eslint/eslint-plugin@8.59.3(@typescript-eslint/parser@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3))(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)':
    dependencies:
      '@eslint-community/regexpp': 4.12.2
      '@typescript-eslint/parser': 8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)
      '@typescript-eslint/scope-manager': 8.59.3
      '@typescript-eslint/type-utils': 8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)
      '@typescript-eslint/utils': 8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)
      '@typescript-eslint/visitor-keys': 8.59.3
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      ignore: 7.0.5
      natural-compare: 1.4.0
      ts-api-utils: 2.5.0(typescript@5.9.3)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/parser@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/scope-manager': 8.59.3
      '@typescript-eslint/types': 8.59.3
      '@typescript-eslint/typescript-estree': 8.59.3(supports-color@10.2.2)(typescript@5.9.3)
      '@typescript-eslint/visitor-keys': 8.59.3
      debug: 4.4.3(supports-color@10.2.2)
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/project-service@8.59.3(supports-color@10.2.2)(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/tsconfig-utils': 8.59.3(typescript@5.9.3)
      '@typescript-eslint/types': 8.59.3
      debug: 4.4.3(supports-color@10.2.2)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/scope-manager@8.59.3':
    dependencies:
      '@typescript-eslint/types': 8.59.3
      '@typescript-eslint/visitor-keys': 8.59.3

  '@typescript-eslint/tsconfig-utils@8.59.3(typescript@5.9.3)':
    dependencies:
      typescript: 5.9.3

  '@typescript-eslint/type-utils@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/types': 8.59.3
      '@typescript-eslint/typescript-estree': 8.59.3(supports-color@10.2.2)(typescript@5.9.3)
      '@typescript-eslint/utils': 8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)
      debug: 4.4.3(supports-color@10.2.2)
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      ts-api-utils: 2.5.0(typescript@5.9.3)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/types@8.59.3': {}

  '@typescript-eslint/typescript-estree@8.59.3(supports-color@10.2.2)(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/project-service': 8.59.3(supports-color@10.2.2)(typescript@5.9.3)
      '@typescript-eslint/tsconfig-utils': 8.59.3(typescript@5.9.3)
      '@typescript-eslint/types': 8.59.3
      '@typescript-eslint/visitor-keys': 8.59.3
      debug: 4.4.3(supports-color@10.2.2)
      minimatch: 10.2.5
      semver: 7.8.5
      tinyglobby: 0.2.16
      ts-api-utils: 2.5.0(typescript@5.9.3)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/utils@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)':
    dependencies:
      '@eslint-community/eslint-utils': 4.9.1(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))
      '@typescript-eslint/scope-manager': 8.59.3
      '@typescript-eslint/types': 8.59.3
      '@typescript-eslint/typescript-estree': 8.59.3(supports-color@10.2.2)(typescript@5.9.3)
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/visitor-keys@8.59.3':
    dependencies:
      '@typescript-eslint/types': 8.59.3
      eslint-visitor-keys: 5.0.1

  '@unpic/core@1.0.3':
    dependencies:
      unpic: 4.2.2

  '@unpic/react@1.0.2(next@16.3.4(@babel/core@7.29.0(supports-color@10.2.2))(@types/node@22.19.19)(react-dom@19.2.6(react@19.2.6))(react@19.2.6))(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@unpic/core': 1.0.3
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      next: 16.3.4(@babel/core@7.29.0(supports-color@10.2.2))(@types/node@22.19.19)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)

  '@unrs/resolver-binding-android-arm-eabi@1.11.1':
    optional: true

  '@unrs/resolver-binding-android-arm64@1.11.1':
    optional: true

  '@unrs/resolver-binding-darwin-arm64@1.11.1':
    optional: true

  '@unrs/resolver-binding-darwin-x64@1.11.1':
    optional: true

  '@unrs/resolver-binding-freebsd-x64@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm-gnueabihf@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm-musleabihf@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm64-musl@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-ppc64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-riscv64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-riscv64-musl@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-s390x-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-x64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-x64-musl@1.11.1':
    optional: true

  '@unrs/resolver-binding-wasm32-wasi@1.11.1':
    dependencies:
      '@napi-rs/wasm-runtime': 0.2.12
    optional: true

  '@unrs/resolver-binding-win32-arm64-msvc@1.11.1':
    optional: true

  '@unrs/resolver-binding-win32-ia32-msvc@1.11.1':
    optional: true

  '@unrs/resolver-binding-win32-x64-msvc@1.11.1':
    optional: true

  '@vercel/og@0.8.6':
    dependencies:
      '@resvg/resvg-wasm': 2.4.0
      satori: 0.16.0

  '@vinext/types@1.0.0-beta.2': {}

  '@vitejs/plugin-react@6.0.2(vite@8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1))':
    dependencies:
      '@rolldown/pluginutils': 1.0.1
      vite: 8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1)

  '@vitejs/plugin-rsc@0.5.26(react-dom@19.2.6(react@19.2.6))(react-server-dom-webpack@19.2.6(react-dom@19.2.6(react@19.2.6))(react@19.2.6)(webpack@5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23)))(react@19.2.6)(vite@8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1))':
    dependencies:
      '@rolldown/pluginutils': 1.0.0-rc.18
      es-module-lexer: 2.1.0
      estree-walker: 3.0.3
      magic-string: 0.30.21
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      srvx: 0.11.15
      strip-literal: 3.1.0
      turbo-stream: 3.2.0
      vite: 8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1)
      vitefu: 1.1.3(vite@8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1))
    optionalDependencies:
      react-server-dom-webpack: 19.2.6(react-dom@19.2.6(react@19.2.6))(react@19.2.6)(webpack@5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23))

  '@webassemblyjs/ast@1.14.1':
    dependencies:
      '@webassemblyjs/helper-numbers': 1.13.2
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2

  '@webassemblyjs/floating-point-hex-parser@1.13.2': {}

  '@webassemblyjs/helper-api-error@1.13.2': {}

  '@webassemblyjs/helper-buffer@1.14.1': {}

  '@webassemblyjs/helper-numbers@1.13.2':
    dependencies:
      '@webassemblyjs/floating-point-hex-parser': 1.13.2
      '@webassemblyjs/helper-api-error': 1.13.2
      '@xtuc/long': 4.2.2

  '@webassemblyjs/helper-wasm-bytecode@1.13.2': {}

  '@webassemblyjs/helper-wasm-section@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-buffer': 1.14.1
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/wasm-gen': 1.14.1

  '@webassemblyjs/ieee754@1.13.2':
    dependencies:
      '@xtuc/ieee754': 1.2.0

  '@webassemblyjs/leb128@1.13.2':
    dependencies:
      '@xtuc/long': 4.2.2

  '@webassemblyjs/utf8@1.13.2': {}

  '@webassemblyjs/wasm-edit@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-buffer': 1.14.1
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/helper-wasm-section': 1.14.1
      '@webassemblyjs/wasm-gen': 1.14.1
      '@webassemblyjs/wasm-opt': 1.14.1
      '@webassemblyjs/wasm-parser': 1.14.1
      '@webassemblyjs/wast-printer': 1.14.1

  '@webassemblyjs/wasm-gen@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/ieee754': 1.13.2
      '@webassemblyjs/leb128': 1.13.2
      '@webassemblyjs/utf8': 1.13.2

  '@webassemblyjs/wasm-opt@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-buffer': 1.14.1
      '@webassemblyjs/wasm-gen': 1.14.1
      '@webassemblyjs/wasm-parser': 1.14.1

  '@webassemblyjs/wasm-parser@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-api-error': 1.13.2
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/ieee754': 1.13.2
      '@webassemblyjs/leb128': 1.13.2
      '@webassemblyjs/utf8': 1.13.2

  '@webassemblyjs/wast-printer@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@xtuc/long': 4.2.2

  '@xtuc/ieee754@1.2.0': {}

  '@xtuc/long@4.2.2': {}

  acorn-import-phases@1.0.4(acorn@8.16.0):
    dependencies:
      acorn: 8.16.0

  acorn-jsx@5.3.2(acorn@8.16.0):
    dependencies:
      acorn: 8.16.0

  acorn-loose@8.5.2:
    dependencies:
      acorn: 8.16.0

  acorn@8.16.0: {}

  ajv-formats@2.1.1(ajv@8.20.0):
    optionalDependencies:
      ajv: 8.20.0

  ajv-keywords@5.1.0(ajv@8.20.0):
    dependencies:
      ajv: 8.20.0
      fast-deep-equal: 3.1.3

  ajv@6.15.0:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  ajv@8.20.0:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-uri: 3.1.7
      json-schema-traverse: 1.0.0
      require-from-string: 2.0.2

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  argparse@2.0.1: {}

  aria-hidden@1.2.6:
    dependencies:
      tslib: 2.8.1

  aria-query@5.3.2: {}

  array-buffer-byte-length@1.0.2:
    dependencies:
      call-bound: 1.0.4
      is-array-buffer: 3.0.5

  array-includes@3.1.9:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      is-string: 1.1.1
      math-intrinsics: 1.1.0

  array.prototype.findlast@1.2.5:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-shim-unscopables: 1.1.0

  array.prototype.findlastindex@1.2.6:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-shim-unscopables: 1.1.0

  array.prototype.flat@1.3.3:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-shim-unscopables: 1.1.0

  array.prototype.flatmap@1.3.3:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-shim-unscopables: 1.1.0

  array.prototype.tosorted@1.1.4:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-shim-unscopables: 1.1.0

  arraybuffer.prototype.slice@1.0.4:
    dependencies:
      array-buffer-byte-length: 1.0.2
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      is-array-buffer: 3.0.5

  ast-types-flow@0.0.8: {}

  async-function@1.0.0: {}

  available-typed-arrays@1.0.7:
    dependencies:
      possible-typed-array-names: 1.1.0

  axe-core@4.11.4: {}

  axobject-query@4.1.0: {}

  balanced-match@1.0.2: {}

  balanced-match@4.0.4: {}

  base64-js@0.0.8: {}

  baseline-browser-mapping@2.10.30: {}

  blake3-wasm@2.1.5: {}

  brace-expansion@1.1.14:
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  brace-expansion@5.0.6:
    dependencies:
      balanced-match: 4.0.4

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  browserslist@4.28.2:
    dependencies:
      baseline-browser-mapping: 2.10.30
      caniuse-lite: 1.0.30001793
      electron-to-chromium: 1.5.358
      node-releases: 2.0.44
      update-browserslist-db: 1.2.3(browserslist@4.28.2)

  buffer-from@1.1.2: {}

  call-bind-apply-helpers@1.0.2:
    dependencies:
      es-errors: 1.3.0
      function-bind: 1.1.2

  call-bind@1.0.9:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      get-intrinsic: 1.3.0
      set-function-length: 1.2.2

  call-bound@1.0.4:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      get-intrinsic: 1.3.0

  callsites@3.1.0: {}

  camelize@1.0.1: {}

  caniuse-lite@1.0.30001793: {}

  chalk@4.1.2:
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  chrome-trace-event@1.0.4: {}

  class-variance-authority@0.7.1:
    dependencies:
      clsx: 2.1.1

  client-only@0.0.1: {}

  clsx@2.1.1: {}

  cmdk@1.1.1(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6):
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dialog': 1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-id': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    transitivePeerDependencies:
      - '@types/react'
      - '@types/react-dom'

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  commander@2.20.3: {}

  concat-map@0.0.1: {}

  convert-source-map@2.0.0: {}

  cookie@1.1.1: {}

  cross-spawn@7.0.6:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  css-background-parser@0.1.0: {}

  css-box-shadow@1.0.0-3: {}

  css-color-keywords@1.0.0: {}

  css-gradient-parser@0.0.16: {}

  css-to-react-native@3.2.0:
    dependencies:
      camelize: 1.0.1
      css-color-keywords: 1.0.0
      postcss-value-parser: 4.2.0

  csstype@3.2.3: {}

  d3-array@3.2.4:
    dependencies:
      internmap: 2.0.3

  d3-color@3.1.0: {}

  d3-ease@3.0.1: {}

  d3-format@3.1.2: {}

  d3-interpolate@3.0.1:
    dependencies:
      d3-color: 3.1.0

  d3-path@3.1.0: {}

  d3-scale@4.0.2:
    dependencies:
      d3-array: 3.2.4
      d3-format: 3.1.2
      d3-interpolate: 3.0.1
      d3-time: 3.1.0
      d3-time-format: 4.1.0

  d3-shape@3.2.0:
    dependencies:
      d3-path: 3.1.0

  d3-time-format@4.1.0:
    dependencies:
      d3-time: 3.1.0

  d3-time@3.1.0:
    dependencies:
      d3-array: 3.2.4

  d3-timer@3.0.1: {}

  damerau-levenshtein@1.0.8: {}

  data-view-buffer@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  data-view-byte-length@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  data-view-byte-offset@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  date-fns@4.4.0: {}

  debug@3.2.7(supports-color@10.2.2):
    dependencies:
      ms: 2.1.3
    optionalDependencies:
      supports-color: 10.2.2

  debug@4.4.3(supports-color@10.2.2):
    dependencies:
      ms: 2.1.3
    optionalDependencies:
      supports-color: 10.2.2

  decimal.js-light@2.5.1: {}

  deep-is@0.1.4: {}

  define-data-property@1.1.4:
    dependencies:
      es-define-property: 1.0.1
      es-errors: 1.3.0
      gopd: 1.2.0

  define-properties@1.2.1:
    dependencies:
      define-data-property: 1.1.4
      has-property-descriptors: 1.0.2
      object-keys: 1.1.1

  detect-libc@2.1.2: {}

  detect-node-es@1.1.0: {}

  doctrine@2.1.0:
    dependencies:
      esutils: 2.0.3

  drizzle-kit@0.31.10:
    dependencies:
      '@drizzle-team/brocli': 0.10.2
      '@esbuild-kit/esm-loader': 2.6.5
      esbuild: 0.25.12
      tsx: 4.22.1

  drizzle-orm@0.45.2(@cloudflare/workers-types@4.20260515.1):
    optionalDependencies:
      '@cloudflare/workers-types': 4.20260515.1

  dunder-proto@1.0.1:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-errors: 1.3.0
      gopd: 1.2.0

  electron-to-chromium@1.5.358: {}

  embla-carousel-react@8.6.0(react@19.2.6):
    dependencies:
      embla-carousel: 8.6.0
      embla-carousel-reactive-utils: 8.6.0(embla-carousel@8.6.0)
      react: 19.2.6

  embla-carousel-reactive-utils@8.6.0(embla-carousel@8.6.0):
    dependencies:
      embla-carousel: 8.6.0

  embla-carousel@8.6.0: {}

  emoji-regex-xs@2.0.1: {}

  emoji-regex@9.2.2: {}

  enhanced-resolve@5.21.3:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.3.3

  error-stack-parser-es@1.0.5: {}

  es-abstract@1.24.2:
    dependencies:
      array-buffer-byte-length: 1.0.2
      arraybuffer.prototype.slice: 1.0.4
      available-typed-arrays: 1.0.7
      call-bind: 1.0.9
      call-bound: 1.0.4
      data-view-buffer: 1.0.2
      data-view-byte-length: 1.0.2
      data-view-byte-offset: 1.0.1
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-set-tostringtag: 2.1.0
      es-to-primitive: 1.3.0
      function.prototype.name: 1.1.8
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      get-symbol-description: 1.1.0
      globalthis: 1.0.4
      gopd: 1.2.0
      has-property-descriptors: 1.0.2
      has-proto: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.3
      internal-slot: 1.1.0
      is-array-buffer: 3.0.5
      is-callable: 1.2.7
      is-data-view: 1.0.2
      is-negative-zero: 2.0.3
      is-regex: 1.2.1
      is-set: 2.0.3
      is-shared-array-buffer: 1.0.4
      is-string: 1.1.1
      is-typed-array: 1.1.15
      is-weakref: 1.1.1
      math-intrinsics: 1.1.0
      object-inspect: 1.13.4
      object-keys: 1.1.1
      object.assign: 4.1.7
      own-keys: 1.0.1
      regexp.prototype.flags: 1.5.4
      safe-array-concat: 1.1.4
      safe-push-apply: 1.0.0
      safe-regex-test: 1.1.0
      set-proto: 1.0.0
      stop-iteration-iterator: 1.1.0
      string.prototype.trim: 1.2.10
      string.prototype.trimend: 1.0.9
      string.prototype.trimstart: 1.0.8
      typed-array-buffer: 1.0.3
      typed-array-byte-length: 1.0.3
      typed-array-byte-offset: 1.0.4
      typed-array-length: 1.0.7
      unbox-primitive: 1.1.0
      which-typed-array: 1.1.20

  es-define-property@1.0.1: {}

  es-errors@1.3.0: {}

  es-iterator-helpers@1.3.2:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-set-tostringtag: 2.1.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      globalthis: 1.0.4
      gopd: 1.2.0
      has-property-descriptors: 1.0.2
      has-proto: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      iterator.prototype: 1.1.5
      math-intrinsics: 1.1.0

  es-module-lexer@1.7.0: {}

  es-module-lexer@2.1.0: {}

  es-object-atoms@1.1.1:
    dependencies:
      es-errors: 1.3.0

  es-set-tostringtag@2.1.0:
    dependencies:
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      has-tostringtag: 1.0.2
      hasown: 2.0.3

  es-shim-unscopables@1.1.0:
    dependencies:
      hasown: 2.0.3

  es-to-primitive@1.3.0:
    dependencies:
      is-callable: 1.2.7
      is-date-object: 1.1.0
      is-symbol: 1.1.1

  es-toolkit@1.50.0: {}

  esbuild@0.18.20:
    optionalDependencies:
      '@esbuild/android-arm': 0.18.20
      '@esbuild/android-arm64': 0.18.20
      '@esbuild/android-x64': 0.18.20
      '@esbuild/darwin-arm64': 0.18.20
      '@esbuild/darwin-x64': 0.18.20
      '@esbuild/freebsd-arm64': 0.18.20
      '@esbuild/freebsd-x64': 0.18.20
      '@esbuild/linux-arm': 0.18.20
      '@esbuild/linux-arm64': 0.18.20
      '@esbuild/linux-ia32': 0.18.20
      '@esbuild/linux-loong64': 0.18.20
      '@esbuild/linux-mips64el': 0.18.20
      '@esbuild/linux-ppc64': 0.18.20
      '@esbuild/linux-riscv64': 0.18.20
      '@esbuild/linux-s390x': 0.18.20
      '@esbuild/linux-x64': 0.18.20
      '@esbuild/netbsd-x64': 0.18.20
      '@esbuild/openbsd-x64': 0.18.20
      '@esbuild/sunos-x64': 0.18.20
      '@esbuild/win32-arm64': 0.18.20
      '@esbuild/win32-ia32': 0.18.20
      '@esbuild/win32-x64': 0.18.20

  esbuild@0.25.12:
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.25.12
      '@esbuild/android-arm': 0.25.12
      '@esbuild/android-arm64': 0.25.12
      '@esbuild/android-x64': 0.25.12
      '@esbuild/darwin-arm64': 0.25.12
      '@esbuild/darwin-x64': 0.25.12
      '@esbuild/freebsd-arm64': 0.25.12
      '@esbuild/freebsd-x64': 0.25.12
      '@esbuild/linux-arm': 0.25.12
      '@esbuild/linux-arm64': 0.25.12
      '@esbuild/linux-ia32': 0.25.12
      '@esbuild/linux-loong64': 0.25.12
      '@esbuild/linux-mips64el': 0.25.12
      '@esbuild/linux-ppc64': 0.25.12
      '@esbuild/linux-riscv64': 0.25.12
      '@esbuild/linux-s390x': 0.25.12
      '@esbuild/linux-x64': 0.25.12
      '@esbuild/netbsd-arm64': 0.25.12
      '@esbuild/netbsd-x64': 0.25.12
      '@esbuild/openbsd-arm64': 0.25.12
      '@esbuild/openbsd-x64': 0.25.12
      '@esbuild/openharmony-arm64': 0.25.12
      '@esbuild/sunos-x64': 0.25.12
      '@esbuild/win32-arm64': 0.25.12
      '@esbuild/win32-ia32': 0.25.12
      '@esbuild/win32-x64': 0.25.12

  esbuild@0.27.3:
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.27.3
      '@esbuild/android-arm': 0.27.3
      '@esbuild/android-arm64': 0.27.3
      '@esbuild/android-x64': 0.27.3
      '@esbuild/darwin-arm64': 0.27.3
      '@esbuild/darwin-x64': 0.27.3
      '@esbuild/freebsd-arm64': 0.27.3
      '@esbuild/freebsd-x64': 0.27.3
      '@esbuild/linux-arm': 0.27.3
      '@esbuild/linux-arm64': 0.27.3
      '@esbuild/linux-ia32': 0.27.3
      '@esbuild/linux-loong64': 0.27.3
      '@esbuild/linux-mips64el': 0.27.3
      '@esbuild/linux-ppc64': 0.27.3
      '@esbuild/linux-riscv64': 0.27.3
      '@esbuild/linux-s390x': 0.27.3
      '@esbuild/linux-x64': 0.27.3
      '@esbuild/netbsd-arm64': 0.27.3
      '@esbuild/netbsd-x64': 0.27.3
      '@esbuild/openbsd-arm64': 0.27.3
      '@esbuild/openbsd-x64': 0.27.3
      '@esbuild/openharmony-arm64': 0.27.3
      '@esbuild/sunos-x64': 0.27.3
      '@esbuild/win32-arm64': 0.27.3
      '@esbuild/win32-ia32': 0.27.3
      '@esbuild/win32-x64': 0.27.3

  esbuild@0.28.0:
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.28.0
      '@esbuild/android-arm': 0.28.0
      '@esbuild/android-arm64': 0.28.0
      '@esbuild/android-x64': 0.28.0
      '@esbuild/darwin-arm64': 0.28.0
      '@esbuild/darwin-x64': 0.28.0
      '@esbuild/freebsd-arm64': 0.28.0
      '@esbuild/freebsd-x64': 0.28.0
      '@esbuild/linux-arm': 0.28.0
      '@esbuild/linux-arm64': 0.28.0
      '@esbuild/linux-ia32': 0.28.0
      '@esbuild/linux-loong64': 0.28.0
      '@esbuild/linux-mips64el': 0.28.0
      '@esbuild/linux-ppc64': 0.28.0
      '@esbuild/linux-riscv64': 0.28.0
      '@esbuild/linux-s390x': 0.28.0
      '@esbuild/linux-x64': 0.28.0
      '@esbuild/netbsd-arm64': 0.28.0
      '@esbuild/netbsd-x64': 0.28.0
      '@esbuild/openbsd-arm64': 0.28.0
      '@esbuild/openbsd-x64': 0.28.0
      '@esbuild/openharmony-arm64': 0.28.0
      '@esbuild/sunos-x64': 0.28.0
      '@esbuild/win32-arm64': 0.28.0
      '@esbuild/win32-ia32': 0.28.0
      '@esbuild/win32-x64': 0.28.0

  escalade@3.2.0: {}

  escape-html@1.0.3: {}

  escape-string-regexp@4.0.0: {}

  eslint-config-next@16.3.4(@typescript-eslint/parser@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3))(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3):
    dependencies:
      '@next/eslint-plugin-next': 16.3.4(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      eslint-import-resolver-node: 0.3.10(supports-color@10.2.2)
      eslint-import-resolver-typescript: 3.10.1(eslint-plugin-import@2.32.0)(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)
      eslint-plugin-import: 2.32.0(@typescript-eslint/parser@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)
      eslint-plugin-jsx-a11y: 6.10.2(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))
      eslint-plugin-react: 7.37.5(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))
      eslint-plugin-react-hooks: 7.1.1(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)
      globals: 16.4.0
      typescript-eslint: 8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)
    optionalDependencies:
      typescript: 5.9.3
    transitivePeerDependencies:
      - '@typescript-eslint/parser'
      - eslint-import-resolver-webpack
      - eslint-plugin-import-x
      - supports-color

  eslint-import-resolver-node@0.3.10(supports-color@10.2.2):
    dependencies:
      debug: 3.2.7(supports-color@10.2.2)
      is-core-module: 2.16.2
      resolve: 2.0.0-next.7
    transitivePeerDependencies:
      - supports-color

  eslint-import-resolver-typescript@3.10.1(eslint-plugin-import@2.32.0)(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2):
    dependencies:
      '@nolyfill/is-core-module': 1.0.39
      debug: 4.4.3(supports-color@10.2.2)
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      get-tsconfig: 4.14.0
      is-bun-module: 2.0.0
      stable-hash: 0.0.5
      tinyglobby: 0.2.16
      unrs-resolver: 1.11.1
    optionalDependencies:
      eslint-plugin-import: 2.32.0(@typescript-eslint/parser@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)
    transitivePeerDependencies:
      - supports-color

  eslint-module-utils@2.12.1(@typescript-eslint/parser@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3))(eslint-import-resolver-node@0.3.10(supports-color@10.2.2))(eslint-import-resolver-typescript@3.10.1)(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2):
    dependencies:
      debug: 3.2.7(supports-color@10.2.2)
    optionalDependencies:
      '@typescript-eslint/parser': 8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      eslint-import-resolver-node: 0.3.10(supports-color@10.2.2)
      eslint-import-resolver-typescript: 3.10.1(eslint-plugin-import@2.32.0)(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)
    transitivePeerDependencies:
      - supports-color

  eslint-plugin-import@2.32.0(@typescript-eslint/parser@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2):
    dependencies:
      '@rtsao/scc': 1.1.0
      array-includes: 3.1.9
      array.prototype.findlastindex: 1.2.6
      array.prototype.flat: 1.3.3
      array.prototype.flatmap: 1.3.3
      debug: 3.2.7(supports-color@10.2.2)
      doctrine: 2.1.0
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      eslint-import-resolver-node: 0.3.10(supports-color@10.2.2)
      eslint-module-utils: 2.12.1(@typescript-eslint/parser@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3))(eslint-import-resolver-node@0.3.10(supports-color@10.2.2))(eslint-import-resolver-typescript@3.10.1)(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)
      hasown: 2.0.3
      is-core-module: 2.16.2
      is-glob: 4.0.3
      minimatch: 3.1.5
      object.fromentries: 2.0.8
      object.groupby: 1.0.3
      object.values: 1.2.1
      semver: 6.3.1
      string.prototype.trimend: 1.0.9
      tsconfig-paths: 3.15.0
    optionalDependencies:
      '@typescript-eslint/parser': 8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)
    transitivePeerDependencies:
      - eslint-import-resolver-typescript
      - eslint-import-resolver-webpack
      - supports-color

  eslint-plugin-jsx-a11y@6.10.2(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2)):
    dependencies:
      aria-query: 5.3.2
      array-includes: 3.1.9
      array.prototype.flatmap: 1.3.3
      ast-types-flow: 0.0.8
      axe-core: 4.11.4
      axobject-query: 4.1.0
      damerau-levenshtein: 1.0.8
      emoji-regex: 9.2.2
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      hasown: 2.0.3
      jsx-ast-utils: 3.3.5
      language-tags: 1.0.9
      minimatch: 3.1.5
      object.fromentries: 2.0.8
      safe-regex-test: 1.1.0
      string.prototype.includes: 2.0.1

  eslint-plugin-react-hooks@7.1.1(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2):
    dependencies:
      '@babel/core': 7.29.0(supports-color@10.2.2)
      '@babel/parser': 7.29.3
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      hermes-parser: 0.25.1
      zod: 3.25.76
      zod-validation-error: 4.0.2(zod@3.25.76)
    transitivePeerDependencies:
      - supports-color

  eslint-plugin-react@7.37.5(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2)):
    dependencies:
      array-includes: 3.1.9
      array.prototype.findlast: 1.2.5
      array.prototype.flatmap: 1.3.3
      array.prototype.tosorted: 1.1.4
      doctrine: 2.1.0
      es-iterator-helpers: 1.3.2
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      estraverse: 5.3.0
      hasown: 2.0.3
      jsx-ast-utils: 3.3.5
      minimatch: 3.1.5
      object.entries: 1.1.9
      object.fromentries: 2.0.8
      object.values: 1.2.1
      prop-types: 15.8.1
      resolve: 2.0.0-next.7
      semver: 6.3.1
      string.prototype.matchall: 4.0.12
      string.prototype.repeat: 1.0.0

  eslint-scope@5.1.1:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 4.3.0

  eslint-scope@8.4.0:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0

  eslint-visitor-keys@3.4.3: {}

  eslint-visitor-keys@4.2.1: {}

  eslint-visitor-keys@5.0.1: {}

  eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2):
    dependencies:
      '@eslint-community/eslint-utils': 4.9.1(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))
      '@eslint-community/regexpp': 4.12.2
      '@eslint/config-array': 0.21.2(supports-color@10.2.2)
      '@eslint/config-helpers': 0.4.2
      '@eslint/core': 0.17.0
      '@eslint/eslintrc': 3.3.5(supports-color@10.2.2)
      '@eslint/js': 9.39.4
      '@eslint/plugin-kit': 0.4.1
      '@humanfs/node': 0.16.8
      '@humanwhocodes/module-importer': 1.0.1
      '@humanwhocodes/retry': 0.4.3
      '@types/estree': 1.0.9
      ajv: 6.15.0
      chalk: 4.1.2
      cross-spawn: 7.0.6
      debug: 4.4.3(supports-color@10.2.2)
      escape-string-regexp: 4.0.0
      eslint-scope: 8.4.0
      eslint-visitor-keys: 4.2.1
      espree: 10.4.0
      esquery: 1.7.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 8.0.0
      find-up: 5.0.0
      glob-parent: 6.0.2
      ignore: 5.3.2
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      json-stable-stringify-without-jsonify: 1.0.1
      lodash.merge: 4.6.2
      minimatch: 3.1.5
      natural-compare: 1.4.0
      optionator: 0.9.4
    optionalDependencies:
      jiti: 2.7.0
    transitivePeerDependencies:
      - supports-color

  espree@10.4.0:
    dependencies:
      acorn: 8.16.0
      acorn-jsx: 5.3.2(acorn@8.16.0)
      eslint-visitor-keys: 4.2.1

  esquery@1.7.0:
    dependencies:
      estraverse: 5.3.0

  esrecurse@4.3.0:
    dependencies:
      estraverse: 5.3.0

  estraverse@4.3.0: {}

  estraverse@5.3.0: {}

  estree-walker@3.0.3:
    dependencies:
      '@types/estree': 1.0.9

  esutils@2.0.3: {}

  eventemitter3@5.0.4: {}

  events@3.3.0: {}

  fast-deep-equal@3.1.3: {}

  fast-glob@3.3.1:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-glob@3.3.3:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-json-stable-stringify@2.1.0: {}

  fast-levenshtein@2.0.6: {}

  fast-uri@3.1.7: {}

  fastq@1.20.1:
    dependencies:
      reusify: 1.1.0

  fdir@6.5.0(picomatch@4.0.4):
    optionalDependencies:
      picomatch: 4.0.4

  fflate@0.7.4: {}

  file-entry-cache@8.0.0:
    dependencies:
      flat-cache: 4.0.1

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  find-up@5.0.0:
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0

  flat-cache@4.0.1:
    dependencies:
      flatted: 3.4.2
      keyv: 4.5.4

  flatted@3.4.2: {}

  for-each@0.3.5:
    dependencies:
      is-callable: 1.2.7

  fsevents@2.3.3:
    optional: true

  function-bind@1.1.2: {}

  function.prototype.name@1.1.8:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      functions-have-names: 1.2.3
      hasown: 2.0.3
      is-callable: 1.2.7

  functions-have-names@1.2.3: {}

  generator-function@2.0.1: {}

  gensync@1.0.0-beta.2: {}

  get-intrinsic@1.3.0:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      function-bind: 1.1.2
      get-proto: 1.0.1
      gopd: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.3
      math-intrinsics: 1.1.0

  get-nonce@1.0.1: {}

  get-proto@1.0.1:
    dependencies:
      dunder-proto: 1.0.1
      es-object-atoms: 1.1.1

  get-symbol-description@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0

  get-tsconfig@4.14.0:
    dependencies:
      resolve-pkg-maps: 1.0.0

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-parent@6.0.2:
    dependencies:
      is-glob: 4.0.3

  glob-to-regexp@0.4.1: {}

  globals@14.0.0: {}

  globals@16.4.0: {}

  globalthis@1.0.4:
    dependencies:
      define-properties: 1.2.1
      gopd: 1.2.0

  gopd@1.2.0: {}

  graceful-fs@4.2.11: {}

  has-bigints@1.1.0: {}

  has-flag@4.0.0: {}

  has-property-descriptors@1.0.2:
    dependencies:
      es-define-property: 1.0.1

  has-proto@1.2.0:
    dependencies:
      dunder-proto: 1.0.1

  has-symbols@1.1.0: {}

  has-tostringtag@1.0.2:
    dependencies:
      has-symbols: 1.1.0

  hasown@2.0.3:
    dependencies:
      function-bind: 1.1.2

  hermes-estree@0.25.1: {}

  hermes-parser@0.25.1:
    dependencies:
      hermes-estree: 0.25.1

  hex-rgb@4.3.0: {}

  ignore@5.3.2: {}

  ignore@7.0.5: {}

  image-size@2.0.2: {}

  immer@10.2.0: {}

  immer@11.1.16: {}

  import-fresh@3.3.1:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  imurmurhash@0.1.4: {}

  input-otp@1.4.2(react-dom@19.2.6(react@19.2.6))(react@19.2.6):
    dependencies:
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)

  internal-slot@1.1.0:
    dependencies:
      es-errors: 1.3.0
      hasown: 2.0.3
      side-channel: 1.1.0

  internmap@2.0.3: {}

  ipaddr.js@2.4.0: {}

  is-array-buffer@3.0.5:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      get-intrinsic: 1.3.0

  is-async-function@2.1.1:
    dependencies:
      async-function: 1.0.0
      call-bound: 1.0.4
      get-proto: 1.0.1
      has-tostringtag: 1.0.2
      safe-regex-test: 1.1.0

  is-bigint@1.1.0:
    dependencies:
      has-bigints: 1.1.0

  is-boolean-object@1.2.2:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-bun-module@2.0.0:
    dependencies:
      semver: 7.8.5

  is-callable@1.2.7: {}

  is-core-module@2.16.2:
    dependencies:
      hasown: 2.0.3

  is-data-view@1.0.2:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      is-typed-array: 1.1.15

  is-date-object@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-extglob@2.1.1: {}

  is-finalizationregistry@1.1.1:
    dependencies:
      call-bound: 1.0.4

  is-generator-function@1.1.2:
    dependencies:
      call-bound: 1.0.4
      generator-function: 2.0.1
      get-proto: 1.0.1
      has-tostringtag: 1.0.2
      safe-regex-test: 1.1.0

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-map@2.0.3: {}

  is-negative-zero@2.0.3: {}

  is-number-object@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-number@7.0.0: {}

  is-regex@1.2.1:
    dependencies:
      call-bound: 1.0.4
      gopd: 1.2.0
      has-tostringtag: 1.0.2
      hasown: 2.0.3

  is-set@2.0.3: {}

  is-shared-array-buffer@1.0.4:
    dependencies:
      call-bound: 1.0.4

  is-string@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-symbol@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-symbols: 1.1.0
      safe-regex-test: 1.1.0

  is-typed-array@1.1.15:
    dependencies:
      which-typed-array: 1.1.20

  is-weakmap@2.0.2: {}

  is-weakref@1.1.1:
    dependencies:
      call-bound: 1.0.4

  is-weakset@2.0.4:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0

  isarray@2.0.5: {}

  isexe@2.0.0: {}

  iterator.prototype@1.1.5:
    dependencies:
      define-data-property: 1.1.4
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      has-symbols: 1.1.0
      set-function-name: 2.0.2

  jest-worker@27.5.1:
    dependencies:
      '@types/node': 22.19.19
      merge-stream: 2.0.0
      supports-color: 8.1.1

  jiti@2.7.0: {}

  js-tokens@4.0.0: {}

  js-tokens@9.0.1: {}

  js-yaml@4.1.1:
    dependencies:
      argparse: 2.0.1

  jsesc@3.1.0: {}

  json-buffer@3.0.1: {}

  json-schema-traverse@0.4.1: {}

  json-schema-traverse@1.0.0: {}

  json-stable-stringify-without-jsonify@1.0.1: {}

  json5@1.0.2:
    dependencies:
      minimist: 1.2.8

  json5@2.2.3: {}

  jsx-ast-utils@3.3.5:
    dependencies:
      array-includes: 3.1.9
      array.prototype.flat: 1.3.3
      object.assign: 4.1.7
      object.values: 1.2.1

  keyv@4.5.4:
    dependencies:
      json-buffer: 3.0.1

  kleur@4.1.5: {}

  language-subtag-registry@0.3.23: {}

  language-tags@1.0.9:
    dependencies:
      language-subtag-registry: 0.3.23

  levn@0.4.1:
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0

  lightningcss-android-arm64@1.31.1:
    optional: true

  lightningcss-android-arm64@1.32.0:
    optional: true

  lightningcss-darwin-arm64@1.31.1:
    optional: true

  lightningcss-darwin-arm64@1.32.0:
    optional: true

  lightningcss-darwin-x64@1.31.1:
    optional: true

  lightningcss-darwin-x64@1.32.0:
    optional: true

  lightningcss-freebsd-x64@1.31.1:
    optional: true

  lightningcss-freebsd-x64@1.32.0:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.31.1:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.32.0:
    optional: true

  lightningcss-linux-arm64-gnu@1.31.1:
    optional: true

  lightningcss-linux-arm64-gnu@1.32.0:
    optional: true

  lightningcss-linux-arm64-musl@1.31.1:
    optional: true

  lightningcss-linux-arm64-musl@1.32.0:
    optional: true

  lightningcss-linux-x64-gnu@1.31.1:
    optional: true

  lightningcss-linux-x64-gnu@1.32.0:
    optional: true

  lightningcss-linux-x64-musl@1.31.1:
    optional: true

  lightningcss-linux-x64-musl@1.32.0:
    optional: true

  lightningcss-win32-arm64-msvc@1.31.1:
    optional: true

  lightningcss-win32-arm64-msvc@1.32.0:
    optional: true

  lightningcss-win32-x64-msvc@1.31.1:
    optional: true

  lightningcss-win32-x64-msvc@1.32.0:
    optional: true

  lightningcss@1.31.1:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.31.1
      lightningcss-darwin-arm64: 1.31.1
      lightningcss-darwin-x64: 1.31.1
      lightningcss-freebsd-x64: 1.31.1
      lightningcss-linux-arm-gnueabihf: 1.31.1
      lightningcss-linux-arm64-gnu: 1.31.1
      lightningcss-linux-arm64-musl: 1.31.1
      lightningcss-linux-x64-gnu: 1.31.1
      lightningcss-linux-x64-musl: 1.31.1
      lightningcss-win32-arm64-msvc: 1.31.1
      lightningcss-win32-x64-msvc: 1.31.1

  lightningcss@1.32.0:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.32.0
      lightningcss-darwin-arm64: 1.32.0
      lightningcss-darwin-x64: 1.32.0
      lightningcss-freebsd-x64: 1.32.0
      lightningcss-linux-arm-gnueabihf: 1.32.0
      lightningcss-linux-arm64-gnu: 1.32.0
      lightningcss-linux-arm64-musl: 1.32.0
      lightningcss-linux-x64-gnu: 1.32.0
      lightningcss-linux-x64-musl: 1.32.0
      lightningcss-win32-arm64-msvc: 1.32.0
      lightningcss-win32-x64-msvc: 1.32.0

  linebreak@1.1.0:
    dependencies:
      base64-js: 0.0.8
      unicode-trie: 2.0.0

  loader-runner@4.3.2: {}

  locate-path@6.0.0:
    dependencies:
      p-locate: 5.0.0

  lodash.merge@4.6.2: {}

  loose-envify@1.4.0:
    dependencies:
      js-tokens: 4.0.0

  lru-cache@5.1.1:
    dependencies:
      yallist: 3.1.1

  lucide-react@1.31.0(react@19.2.6):
    dependencies:
      react: 19.2.6

  magic-string@0.30.21:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5

  math-intrinsics@1.1.0: {}

  merge-stream@2.0.0: {}

  merge2@1.4.1: {}

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.2

  mime-db@1.54.0: {}

  miniflare@4.20260515.0(@types/node@22.19.19):
    dependencies:
      '@cspotcode/source-map-support': 0.8.1
      sharp: 0.35.4(@types/node@22.19.19)
      undici: 7.24.8
      workerd: 1.20260515.1
      ws: 8.18.0
      youch: 4.1.0-beta.10
    transitivePeerDependencies:
      - '@types/node'
      - bufferutil
      - utf-8-validate

  minimatch@10.2.5:
    dependencies:
      brace-expansion: 5.0.6

  minimatch@3.1.5:
    dependencies:
      brace-expansion: 1.1.14

  minimist@1.2.8: {}

  ms@2.1.3: {}

  nanoid@3.3.18: {}

  napi-postinstall@0.3.4: {}

  natural-compare@1.4.0: {}

  neo-async@2.6.2: {}

  next-themes@0.4.6(react-dom@19.2.6(react@19.2.6))(react@19.2.6):
    dependencies:
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)

  next@16.3.4(@babel/core@7.29.0(supports-color@10.2.2))(@types/node@22.19.19)(react-dom@19.2.6(react@19.2.6))(react@19.2.6):
    dependencies:
      '@next/env': 16.3.4
      '@swc/helpers': 0.5.23
      baseline-browser-mapping: 2.10.30
      caniuse-lite: 1.0.30001793
      postcss: 8.5.23
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      styled-jsx: 5.1.6(@babel/core@7.29.0(supports-color@10.2.2))(react@19.2.6)
    optionalDependencies:
      '@next/swc-darwin-arm64': 16.3.4
      '@next/swc-darwin-x64': 16.3.4
      '@next/swc-linux-arm64-gnu': 16.3.4
      '@next/swc-linux-arm64-musl': 16.3.4
      '@next/swc-linux-x64-gnu': 16.3.4
      '@next/swc-linux-x64-musl': 16.3.4
      '@next/swc-win32-arm64-msvc': 16.3.4
      '@next/swc-win32-x64-msvc': 16.3.4
      sharp: 0.35.4(@types/node@22.19.19)
    transitivePeerDependencies:
      - '@babel/core'
      - '@types/node'
      - babel-plugin-macros

  node-exports-info@1.6.0:
    dependencies:
      array.prototype.flatmap: 1.3.3
      es-errors: 1.3.0
      object.entries: 1.1.9
      semver: 6.3.1

  node-releases@2.0.44: {}

  object-assign@4.1.1: {}

  object-inspect@1.13.4: {}

  object-keys@1.1.1: {}

  object.assign@4.1.7:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1
      has-symbols: 1.1.0
      object-keys: 1.1.1

  object.entries@1.1.9:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  object.fromentries@2.0.8:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-object-atoms: 1.1.1

  object.groupby@1.0.3:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2

  object.values@1.2.1:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  optionator@0.9.4:
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.5

  own-keys@1.0.1:
    dependencies:
      get-intrinsic: 1.3.0
      object-keys: 1.1.1
      safe-push-apply: 1.0.0

  p-limit@3.1.0:
    dependencies:
      yocto-queue: 0.1.0

  p-locate@5.0.0:
    dependencies:
      p-limit: 3.1.0

  pako@0.2.9: {}

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  parse-css-color@0.2.1:
    dependencies:
      color-name: 1.1.4
      hex-rgb: 4.3.0

  path-exists@4.0.0: {}

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  path-to-regexp@6.3.0: {}

  pathe@2.0.3: {}

  picocolors@1.1.1: {}

  picomatch@2.3.2: {}

  picomatch@4.0.4: {}

  possible-typed-array-names@1.1.0: {}

  postcss-value-parser@4.2.0: {}

  postcss@8.5.23:
    dependencies:
      nanoid: 3.3.18
      picocolors: 1.1.1
      source-map-js: 1.2.1

  prelude-ls@1.2.1: {}

  prop-types@15.8.1:
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  punycode@2.3.1: {}

  queue-microtask@1.2.3: {}

  radix-ui@1.6.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6):
    dependencies:
      '@radix-ui/primitive': 1.1.7
      '@radix-ui/react-accessible-icon': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-accordion': 1.2.20(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-alert-dialog': 1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-arrow': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-aspect-ratio': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-avatar': 1.2.6(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-checkbox': 1.3.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-collapsible': 1.1.20(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-collection': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context': 1.2.2(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-context-menu': 2.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-dialog': 1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-direction': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-dropdown-menu': 2.1.24(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-focus-guards': 1.1.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-focus-scope': 1.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-form': 0.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-hover-card': 1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-label': 2.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-menu': 2.1.24(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-menubar': 1.1.24(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-navigation-menu': 1.2.22(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-one-time-password-field': 0.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-password-toggle-field': 0.1.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-popover': 1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-popper': 1.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-portal': 1.1.17(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.10(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-progress': 1.1.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-radio-group': 1.4.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-roving-focus': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-scroll-area': 1.2.18(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-select': 2.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-separator': 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slider': 1.4.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.3.3(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-switch': 1.3.7(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-tabs': 1.1.21(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-toast': 1.2.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-toggle': 1.1.18(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-toggle-group': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-toolbar': 1.1.19(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-tooltip': 1.2.16(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.6(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-effect-event': 0.0.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-escape-keydown': 1.1.5(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-is-hydrated': 0.1.3(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-use-size': 1.1.4(@types/react@19.2.14)(react@19.2.6)
      '@radix-ui/react-visually-hidden': 1.2.11(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      '@types/react-dom': 19.2.3(@types/react@19.2.14)

  react-day-picker@10.0.1(@types/react@19.2.14)(react@19.2.6):
    dependencies:
      '@date-fns/tz': 1.5.0
      date-fns: 4.4.0
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.14

  react-dom@19.2.6(react@19.2.6):
    dependencies:
      react: 19.2.6
      scheduler: 0.27.0

  react-hook-form@7.85.0(react@19.2.6):
    dependencies:
      react: 19.2.6

  react-is@16.13.1: {}

  react-redux@9.3.0(@types/react@19.2.14)(react@19.2.6)(redux@5.0.1):
    dependencies:
      '@types/use-sync-external-store': 0.0.6
      react: 19.2.6
      use-sync-external-store: 1.6.0(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14
      redux: 5.0.1

  react-remove-scroll-bar@2.3.8(@types/react@19.2.14)(react@19.2.6):
    dependencies:
      react: 19.2.6
      react-style-singleton: 2.2.3(@types/react@19.2.14)(react@19.2.6)
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.14

  react-remove-scroll@2.7.2(@types/react@19.2.14)(react@19.2.6):
    dependencies:
      react: 19.2.6
      react-remove-scroll-bar: 2.3.8(@types/react@19.2.14)(react@19.2.6)
      react-style-singleton: 2.2.3(@types/react@19.2.14)(react@19.2.6)
      tslib: 2.8.1
      use-callback-ref: 1.3.3(@types/react@19.2.14)(react@19.2.6)
      use-sidecar: 1.1.3(@types/react@19.2.14)(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14

  react-resizable-panels@4.12.2(react-dom@19.2.6(react@19.2.6))(react@19.2.6):
    dependencies:
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)

  react-server-dom-webpack@19.2.6(react-dom@19.2.6(react@19.2.6))(react@19.2.6)(webpack@5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23)):
    dependencies:
      acorn-loose: 8.5.2
      neo-async: 2.6.2
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      webpack: 5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23)
      webpack-sources: 3.4.1

  react-style-singleton@2.2.3(@types/react@19.2.14)(react@19.2.6):
    dependencies:
      get-nonce: 1.0.1
      react: 19.2.6
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.14

  react@19.2.6: {}

  recharts@3.8.0(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react-is@16.13.1)(react@19.2.6)(redux@5.0.1):
    dependencies:
      '@reduxjs/toolkit': 2.12.0(react-redux@9.3.0(@types/react@19.2.14)(react@19.2.6)(redux@5.0.1))(react@19.2.6)
      clsx: 2.1.1
      decimal.js-light: 2.5.1
      es-toolkit: 1.50.0
      eventemitter3: 5.0.4
      immer: 10.2.0
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      react-is: 16.13.1
      react-redux: 9.3.0(@types/react@19.2.14)(react@19.2.6)(redux@5.0.1)
      reselect: 5.1.1
      tiny-invariant: 1.3.3
      use-sync-external-store: 1.6.0(react@19.2.6)
      victory-vendor: 37.3.6
    transitivePeerDependencies:
      - '@types/react'
      - redux

  redux-thunk@3.1.0(redux@5.0.1):
    dependencies:
      redux: 5.0.1

  redux@5.0.1: {}

  reflect.getprototypeof@1.0.10:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      which-builtin-type: 1.2.1

  regexp.prototype.flags@1.5.4:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-errors: 1.3.0
      get-proto: 1.0.1
      gopd: 1.2.0
      set-function-name: 2.0.2

  require-from-string@2.0.2: {}

  reselect@5.1.1: {}

  reselect@5.2.0: {}

  resolve-from@4.0.0: {}

  resolve-pkg-maps@1.0.0: {}

  resolve@2.0.0-next.7:
    dependencies:
      es-errors: 1.3.0
      is-core-module: 2.16.2
      node-exports-info: 1.6.0
      object-keys: 1.1.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  reusify@1.1.0: {}

  rolldown@1.0.1:
    dependencies:
      '@oxc-project/types': 0.130.0
      '@rolldown/pluginutils': 1.0.1
    optionalDependencies:
      '@rolldown/binding-android-arm64': 1.0.1
      '@rolldown/binding-darwin-arm64': 1.0.1
      '@rolldown/binding-darwin-x64': 1.0.1
      '@rolldown/binding-freebsd-x64': 1.0.1
      '@rolldown/binding-linux-arm-gnueabihf': 1.0.1
      '@rolldown/binding-linux-arm64-gnu': 1.0.1
      '@rolldown/binding-linux-arm64-musl': 1.0.1
      '@rolldown/binding-linux-ppc64-gnu': 1.0.1
      '@rolldown/binding-linux-s390x-gnu': 1.0.1
      '@rolldown/binding-linux-x64-gnu': 1.0.1
      '@rolldown/binding-linux-x64-musl': 1.0.1
      '@rolldown/binding-openharmony-arm64': 1.0.1
      '@rolldown/binding-wasm32-wasi': 1.0.1
      '@rolldown/binding-win32-arm64-msvc': 1.0.1
      '@rolldown/binding-win32-x64-msvc': 1.0.1

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-array-concat@1.1.4:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      has-symbols: 1.1.0
      isarray: 2.0.5

  safe-push-apply@1.0.0:
    dependencies:
      es-errors: 1.3.0
      isarray: 2.0.5

  safe-regex-test@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-regex: 1.2.1

  satori@0.16.0:
    dependencies:
      '@shuding/opentype.js': 1.4.0-beta.0
      css-background-parser: 0.1.0
      css-box-shadow: 1.0.0-3
      css-gradient-parser: 0.0.16
      css-to-react-native: 3.2.0
      emoji-regex-xs: 2.0.1
      escape-html: 1.0.3
      linebreak: 1.1.0
      parse-css-color: 0.2.1
      postcss-value-parser: 4.2.0
      yoga-layout: 3.2.1

  scheduler@0.27.0: {}

  schema-utils@4.3.3:
    dependencies:
      '@types/json-schema': 7.0.15
      ajv: 8.20.0
      ajv-formats: 2.1.1(ajv@8.20.0)
      ajv-keywords: 5.1.0(ajv@8.20.0)

  semver@6.3.1: {}

  semver@7.8.5: {}

  set-function-length@1.2.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-property-descriptors: 1.0.2

  set-function-name@2.0.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      functions-have-names: 1.2.3
      has-property-descriptors: 1.0.2

  set-proto@1.0.0:
    dependencies:
      dunder-proto: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1

  sharp@0.35.4(@types/node@22.19.19):
    dependencies:
      '@img/colour': 1.1.0
      detect-libc: 2.1.2
      semver: 7.8.5
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.35.4
      '@img/sharp-darwin-x64': 0.35.4
      '@img/sharp-freebsd-wasm32': 0.35.4
      '@img/sharp-libvips-darwin-arm64': 1.3.3
      '@img/sharp-libvips-darwin-x64': 1.3.3
      '@img/sharp-libvips-linux-arm': 1.3.3
      '@img/sharp-libvips-linux-arm64': 1.3.3
      '@img/sharp-libvips-linux-ppc64': 1.3.3
      '@img/sharp-libvips-linux-riscv64': 1.3.3
      '@img/sharp-libvips-linux-s390x': 1.3.3
      '@img/sharp-libvips-linux-x64': 1.3.3
      '@img/sharp-libvips-linuxmusl-arm64': 1.3.3
      '@img/sharp-libvips-linuxmusl-x64': 1.3.3
      '@img/sharp-linux-arm': 0.35.4
      '@img/sharp-linux-arm64': 0.35.4
      '@img/sharp-linux-ppc64': 0.35.4
      '@img/sharp-linux-riscv64': 0.35.4
      '@img/sharp-linux-s390x': 0.35.4
      '@img/sharp-linux-x64': 0.35.4
      '@img/sharp-linuxmusl-arm64': 0.35.4
      '@img/sharp-linuxmusl-x64': 0.35.4
      '@img/sharp-webcontainers-wasm32': 0.35.4
      '@img/sharp-win32-arm64': 0.35.4
      '@img/sharp-win32-ia32': 0.35.4
      '@img/sharp-win32-x64': 0.35.4
      '@types/node': 22.19.19

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  side-channel-list@1.0.1:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4

  side-channel-map@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4

  side-channel-weakmap@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4
      side-channel-map: 1.0.1

  side-channel@1.1.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4
      side-channel-list: 1.0.1
      side-channel-map: 1.0.1
      side-channel-weakmap: 1.0.2

  sonner@2.0.8(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6):
    dependencies:
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.14

  source-map-js@1.2.1: {}

  source-map-support@0.5.21:
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1

  source-map@0.6.1: {}

  srvx@0.11.15: {}

  stable-hash@0.0.5: {}

  stop-iteration-iterator@1.1.0:
    dependencies:
      es-errors: 1.3.0
      internal-slot: 1.1.0

  string.prototype.codepointat@0.2.1: {}

  string.prototype.includes@2.0.1:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2

  string.prototype.matchall@4.0.12:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      regexp.prototype.flags: 1.5.4
      set-function-name: 2.0.2
      side-channel: 1.1.0

  string.prototype.repeat@1.0.0:
    dependencies:
      define-properties: 1.2.1
      es-abstract: 1.24.2

  string.prototype.trim@1.2.10:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-data-property: 1.1.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-object-atoms: 1.1.1
      has-property-descriptors: 1.0.2

  string.prototype.trimend@1.0.9:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  string.prototype.trimstart@1.0.8:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  strip-bom@3.0.0: {}

  strip-json-comments@3.1.1: {}

  strip-literal@3.1.0:
    dependencies:
      js-tokens: 9.0.1

  styled-jsx@5.1.6(@babel/core@7.29.0(supports-color@10.2.2))(react@19.2.6):
    dependencies:
      client-only: 0.0.1
      react: 19.2.6
    optionalDependencies:
      '@babel/core': 7.29.0(supports-color@10.2.2)

  supports-color@10.2.2: {}

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-color@8.1.1:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  tailwind-merge@3.6.0: {}

  tailwindcss@4.2.1: {}

  tapable@2.3.3: {}

  terser-webpack-plugin@5.6.0(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23)(webpack@5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23)):
    dependencies:
      '@jridgewell/trace-mapping': 0.3.31
      jest-worker: 27.5.1
      schema-utils: 4.3.3
      terser: 5.47.1
      webpack: 5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23)
    optionalDependencies:
      esbuild: 0.28.0
      lightningcss: 1.32.0
      postcss: 8.5.23

  terser@5.47.1:
    dependencies:
      '@jridgewell/source-map': 0.3.11
      acorn: 8.16.0
      commander: 2.20.3
      source-map-support: 0.5.21

  tiny-inflate@1.0.3: {}

  tiny-invariant@1.3.3: {}

  tinyglobby@0.2.16:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.4)
      picomatch: 4.0.4

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  ts-api-utils@2.5.0(typescript@5.9.3):
    dependencies:
      typescript: 5.9.3

  tsconfig-paths@3.15.0:
    dependencies:
      '@types/json5': 0.0.29
      json5: 1.0.2
      minimist: 1.2.8
      strip-bom: 3.0.0

  tslib@2.8.1: {}

  tsx@4.22.1:
    dependencies:
      esbuild: 0.28.0
    optionalDependencies:
      fsevents: 2.3.3

  turbo-stream@3.2.0: {}

  tw-animate-css@1.4.0: {}

  type-check@0.4.0:
    dependencies:
      prelude-ls: 1.2.1

  typed-array-buffer@1.0.3:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-typed-array: 1.1.15

  typed-array-byte-length@1.0.3:
    dependencies:
      call-bind: 1.0.9
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15

  typed-array-byte-offset@1.0.4:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.9
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15
      reflect.getprototypeof: 1.0.10

  typed-array-length@1.0.7:
    dependencies:
      call-bind: 1.0.9
      for-each: 0.3.5
      gopd: 1.2.0
      is-typed-array: 1.1.15
      possible-typed-array-names: 1.1.0
      reflect.getprototypeof: 1.0.10

  typescript-eslint@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3):
    dependencies:
      '@typescript-eslint/eslint-plugin': 8.59.3(@typescript-eslint/parser@8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3))(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)
      '@typescript-eslint/parser': 8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)
      '@typescript-eslint/typescript-estree': 8.59.3(supports-color@10.2.2)(typescript@5.9.3)
      '@typescript-eslint/utils': 8.59.3(eslint@9.39.4(jiti@2.7.0)(supports-color@10.2.2))(supports-color@10.2.2)(typescript@5.9.3)
      eslint: 9.39.4(jiti@2.7.0)(supports-color@10.2.2)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  typescript@5.9.3: {}

  unbox-primitive@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-bigints: 1.1.0
      has-symbols: 1.1.0
      which-boxed-primitive: 1.1.1

  undici-types@6.21.0: {}

  undici@7.24.8: {}

  unenv@2.0.0-rc.24:
    dependencies:
      pathe: 2.0.3

  unicode-trie@2.0.0:
    dependencies:
      pako: 0.2.9
      tiny-inflate: 1.0.3

  unpic@4.2.2: {}

  unrs-resolver@1.11.1:
    dependencies:
      napi-postinstall: 0.3.4
    optionalDependencies:
      '@unrs/resolver-binding-android-arm-eabi': 1.11.1
      '@unrs/resolver-binding-android-arm64': 1.11.1
      '@unrs/resolver-binding-darwin-arm64': 1.11.1
      '@unrs/resolver-binding-darwin-x64': 1.11.1
      '@unrs/resolver-binding-freebsd-x64': 1.11.1
      '@unrs/resolver-binding-linux-arm-gnueabihf': 1.11.1
      '@unrs/resolver-binding-linux-arm-musleabihf': 1.11.1
      '@unrs/resolver-binding-linux-arm64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-arm64-musl': 1.11.1
      '@unrs/resolver-binding-linux-ppc64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-riscv64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-riscv64-musl': 1.11.1
      '@unrs/resolver-binding-linux-s390x-gnu': 1.11.1
      '@unrs/resolver-binding-linux-x64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-x64-musl': 1.11.1
      '@unrs/resolver-binding-wasm32-wasi': 1.11.1
      '@unrs/resolver-binding-win32-arm64-msvc': 1.11.1
      '@unrs/resolver-binding-win32-ia32-msvc': 1.11.1
      '@unrs/resolver-binding-win32-x64-msvc': 1.11.1

  update-browserslist-db@1.2.3(browserslist@4.28.2):
    dependencies:
      browserslist: 4.28.2
      escalade: 3.2.0
      picocolors: 1.1.1

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  use-callback-ref@1.3.3(@types/react@19.2.14)(react@19.2.6):
    dependencies:
      react: 19.2.6
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.14

  use-sidecar@1.1.3(@types/react@19.2.14)(react@19.2.6):
    dependencies:
      detect-node-es: 1.1.0
      react: 19.2.6
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.14

  use-sync-external-store@1.6.0(react@19.2.6):
    dependencies:
      react: 19.2.6

  vaul@1.1.2(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6):
    dependencies:
      '@radix-ui/react-dialog': 1.1.23(@types/react-dom@19.2.3(@types/react@19.2.14))(@types/react@19.2.14)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    transitivePeerDependencies:
      - '@types/react'
      - '@types/react-dom'

  victory-vendor@37.3.6:
    dependencies:
      '@types/d3-array': 3.2.2
      '@types/d3-ease': 3.0.2
      '@types/d3-interpolate': 3.0.4
      '@types/d3-scale': 4.0.9
      '@types/d3-shape': 3.1.8
      '@types/d3-time': 3.0.4
      '@types/d3-timer': 3.0.2
      d3-array: 3.2.4
      d3-ease: 3.0.1
      d3-interpolate: 3.0.1
      d3-scale: 4.0.2
      d3-shape: 3.2.0
      d3-time: 3.1.0
      d3-timer: 3.0.1

  vinext@1.0.0-beta.5(@vitejs/plugin-react@6.0.2(vite@8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1)))(@vitejs/plugin-rsc@0.5.26(react-dom@19.2.6(react@19.2.6))(react-server-dom-webpack@19.2.6(react-dom@19.2.6(react@19.2.6))(react@19.2.6)(webpack@5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23)))(react@19.2.6)(vite@8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1)))(next@16.3.4(@babel/core@7.29.0(supports-color@10.2.2))(@types/node@22.19.19)(react-dom@19.2.6(react@19.2.6))(react@19.2.6))(react-dom@19.2.6(react@19.2.6))(react-server-dom-webpack@19.2.6(react-dom@19.2.6(react@19.2.6))(react@19.2.6)(webpack@5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23)))(react@19.2.6)(vite@8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1)):
    dependencies:
      '@unpic/react': 1.0.2(next@16.3.4(@babel/core@7.29.0(supports-color@10.2.2))(@types/node@22.19.19)(react-dom@19.2.6(react@19.2.6))(react@19.2.6))(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@vercel/og': 0.8.6
      '@vinext/types': 1.0.0-beta.2
      '@vitejs/plugin-react': 6.0.2(vite@8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1))
      image-size: 2.0.2
      ipaddr.js: 2.4.0
      magic-string: 0.30.21
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      vite: 8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1)
      vite-plugin-commonjs: 0.10.4
      web-vitals: 4.2.4
    optionalDependencies:
      '@vitejs/plugin-rsc': 0.5.26(react-dom@19.2.6(react@19.2.6))(react-server-dom-webpack@19.2.6(react-dom@19.2.6(react@19.2.6))(react@19.2.6)(webpack@5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23)))(react@19.2.6)(vite@8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1))
      react-server-dom-webpack: 19.2.6(react-dom@19.2.6(react@19.2.6))(react@19.2.6)(webpack@5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23))
    transitivePeerDependencies:
      - next

  vite-plugin-commonjs@0.10.4:
    dependencies:
      acorn: 8.16.0
      magic-string: 0.30.21
      vite-plugin-dynamic-import: 1.6.0

  vite-plugin-dynamic-import@1.6.0:
    dependencies:
      acorn: 8.16.0
      es-module-lexer: 1.7.0
      fast-glob: 3.3.3
      magic-string: 0.30.21

  vite@8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1):
    dependencies:
      lightningcss: 1.32.0
      picomatch: 4.0.4
      postcss: 8.5.23
      rolldown: 1.0.1
      tinyglobby: 0.2.16
    optionalDependencies:
      '@types/node': 22.19.19
      esbuild: 0.28.0
      fsevents: 2.3.3
      jiti: 2.7.0
      terser: 5.47.1
      tsx: 4.22.1

  vitefu@1.1.3(vite@8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1)):
    optionalDependencies:
      vite: 8.0.13(@types/node@22.19.19)(esbuild@0.28.0)(jiti@2.7.0)(terser@5.47.1)(tsx@4.22.1)

  watchpack@2.5.1:
    dependencies:
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.11

  web-vitals@4.2.4: {}

  webpack-sources@3.4.1: {}

  webpack@5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23):
    dependencies:
      '@types/eslint-scope': 3.7.7
      '@types/estree': 1.0.9
      '@types/json-schema': 7.0.15
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/wasm-edit': 1.14.1
      '@webassemblyjs/wasm-parser': 1.14.1
      acorn: 8.16.0
      acorn-import-phases: 1.0.4(acorn@8.16.0)
      browserslist: 4.28.2
      chrome-trace-event: 1.0.4
      enhanced-resolve: 5.21.3
      es-module-lexer: 2.1.0
      eslint-scope: 5.1.1
      events: 3.3.0
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.11
      loader-runner: 4.3.2
      mime-db: 1.54.0
      neo-async: 2.6.2
      schema-utils: 4.3.3
      tapable: 2.3.3
      terser-webpack-plugin: 5.6.0(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23)(webpack@5.106.2(esbuild@0.28.0)(lightningcss@1.32.0)(postcss@8.5.23))
      watchpack: 2.5.1
      webpack-sources: 3.4.1
    transitivePeerDependencies:
      - '@minify-html/node'
      - '@swc/core'
      - '@swc/css'
      - '@swc/html'
      - clean-css
      - cssnano
      - csso
      - esbuild
      - html-minifier-terser
      - lightningcss
      - postcss
      - uglify-js

  which-boxed-primitive@1.1.1:
    dependencies:
      is-bigint: 1.1.0
      is-boolean-object: 1.2.2
      is-number-object: 1.1.1
      is-string: 1.1.1
      is-symbol: 1.1.1

  which-builtin-type@1.2.1:
    dependencies:
      call-bound: 1.0.4
      function.prototype.name: 1.1.8
      has-tostringtag: 1.0.2
      is-async-function: 2.1.1
      is-date-object: 1.1.0
      is-finalizationregistry: 1.1.1
      is-generator-function: 1.1.2
      is-regex: 1.2.1
      is-weakref: 1.1.1
      isarray: 2.0.5
      which-boxed-primitive: 1.1.1
      which-collection: 1.0.2
      which-typed-array: 1.1.20

  which-collection@1.0.2:
    dependencies:
      is-map: 2.0.3
      is-set: 2.0.3
      is-weakmap: 2.0.2
      is-weakset: 2.0.4

  which-typed-array@1.1.20:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.9
      call-bound: 1.0.4
      for-each: 0.3.5
      get-proto: 1.0.1
      gopd: 1.2.0
      has-tostringtag: 1.0.2

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  word-wrap@1.2.5: {}

  workerd@1.20260515.1:
    optionalDependencies:
      '@cloudflare/workerd-darwin-64': 1.20260515.1
      '@cloudflare/workerd-darwin-arm64': 1.20260515.1
      '@cloudflare/workerd-linux-64': 1.20260515.1
      '@cloudflare/workerd-linux-arm64': 1.20260515.1
      '@cloudflare/workerd-windows-64': 1.20260515.1

  wrangler@4.92.0(@cloudflare/workers-types@4.20260515.1)(@types/node@22.19.19):
    dependencies:
      '@cloudflare/kv-asset-handler': 0.5.0
      '@cloudflare/unenv-preset': 2.16.1(unenv@2.0.0-rc.24)(workerd@1.20260515.1)
      blake3-wasm: 2.1.5
      esbuild: 0.27.3
      miniflare: 4.20260515.0(@types/node@22.19.19)
      path-to-regexp: 6.3.0
      unenv: 2.0.0-rc.24
      workerd: 1.20260515.1
    optionalDependencies:
      '@cloudflare/workers-types': 4.20260515.1
      fsevents: 2.3.3
    transitivePeerDependencies:
      - '@types/node'
      - bufferutil
      - utf-8-validate

  ws@8.18.0: {}

  yallist@3.1.1: {}

  yocto-queue@0.1.0: {}

  yoga-layout@3.2.1: {}

  youch-core@0.3.3:
    dependencies:
      '@poppinss/exception': 1.2.3
      error-stack-parser-es: 1.0.5

  youch@4.1.0-beta.10:
    dependencies:
      '@poppinss/colors': 4.1.6
      '@poppinss/dumper': 0.6.5
      '@speed-highlight/core': 1.2.15
      cookie: 1.1.1
      youch-core: 0.3.3

  zod-validation-error@4.0.2(zod@3.25.76):
    dependencies:
      zod: 3.25.76

  zod@3.25.76: {}
