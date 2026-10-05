# @cobalt/tokens

Design tokens for the Cobalt Design System.

The single source of truth for colors, typography, spacing, elevation, motion, sizing, opacity, and breakpoints. Style Dictionary drives the core output (CSS custom properties, JavaScript, JSON, and theme bundles). Every other Cobalt package — `@cobalt/components` and the framework wrappers downstream of it — consumes these tokens.

## Evaluating Figma variable exports

Raw Figma variable exports can be converted into the DTCG authoring shape supported by the repository's current Style Dictionary pipeline:

```bash
pnpm tokens:convert-figma
```

Place the Figma variable export ZIPs in `exports/`, then run the command. It reads the archives, saves renamed `*.tokens-figma.json` files in `exports/`, and writes corresponding `*.tokens-dtcg.json` files to `exports/tokens/`. This replaces the separate Bash extraction and renaming step and works on macOS, Linux, and Windows without `unzip`.

ZIP filenames do not matter. Within the archives, `Value.tokens.json` becomes `primitives.tokens-figma.json`, `light-mode.tokens.json` and `dark-mode.tokens.json` become semantic files, and other modes become `theme.<name>.tokens-figma.json`. Theme names are lowercased, with spaces and underscores converted to hyphens. Nested entries are supported; directories, macOS metadata, and unrelated files are ignored.

When any ZIPs are present, their contents are the complete source of truth; existing renamed JSON files are not merged in. The ZIP batch must include primitives, both semantic modes, and the default theme. Additional themes are optional. All inputs are validated before files are replaced, and stale raw and DTCG exports are removed after successful validation. Original ZIPs and unrelated files are preserved. Remove or move ZIPs out of `exports/` to convert the existing renamed JSON files instead.

The conversion restores exported aliases, adds units and token types that Figma variables cannot express, and converts structured Figma colors into CSS-compatible color values. The raw JSON retains its original values and metadata, with repository formatting applied.

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
