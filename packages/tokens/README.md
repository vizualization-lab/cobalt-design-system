# @cobalt/tokens

Design tokens for the Cobalt Design System.

The single source of truth for colors, typography, spacing, elevation, motion, sizing, opacity, and breakpoints. Style Dictionary drives the core output (CSS custom properties, JavaScript, JSON, and theme bundles). Every other Cobalt package — `@cobalt/components` and the framework wrappers downstream of it — consumes these tokens.

## Evaluating Figma variable exports

Raw Figma variable exports can be converted into the DTCG authoring shape supported by the repository's current Style Dictionary pipeline:

```bash
pnpm tokens:convert-figma
```

The command reads `exports/*.tokens-figma.json` and writes corresponding `*.tokens-dtcg.json` files to `exports/tokens/`. It restores exported aliases, adds units and token types that Figma variables cannot express, and converts structured Figma colors into CSS-compatible color values.

Both generations are tracked while the Figma pipeline is evaluated: the `-figma` files preserve the raw handoff and the `-dtcg` files are the Style Dictionary build inputs.

## Legacy Tokens Studio workflow

The earlier Tokens Studio for Figma workflow is retained for reference under `tokens-tokstd/`. Its scripts and commands use the `tokstd-` or `tokstd:` prefix. Those files are not consumed by the current native Figma Variables export build.

## Install

```bash
npm install @cobalt/tokens
```

See the Cobalt docs site for the full token reference, theming guide, and per-format import paths.

## License

MIT
