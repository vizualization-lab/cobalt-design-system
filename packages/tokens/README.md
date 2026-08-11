# @cobalt/tokens

Design tokens for the Cobalt Design System.

The single source of truth for colors, typography, spacing, elevation, motion, sizing, opacity, and breakpoints. Style Dictionary drives multi-format output (CSS custom properties, SCSS, JavaScript, JSON, plus theme bundles). Every other Cobalt package — `@cobalt/components` and the framework wrappers downstream of it — consumes these tokens.

## Evaluating Figma variable exports

Raw Figma variable exports can be converted into the DTCG authoring shape supported by the repository's current Style Dictionary pipeline:

```bash
pnpm tokens:convert-figma
```

The command reads `exports/*.tokens.json` and writes generated files with matching names to `exports/tokens/`. It restores exported aliases, adds units and token types that Figma variables cannot express, and converts structured Figma colors into CSS-compatible color values.

These files are staging artifacts for evaluation. The source of truth for the published package remains `packages/tokens/tokens/` until the Figma pipeline is adopted explicitly.

## Install

```bash
npm install @cobalt/tokens
```

See the Cobalt docs site for the full token reference, theming guide, and per-format import paths.

## License

MIT
