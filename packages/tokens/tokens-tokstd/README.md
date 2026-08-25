# Legacy Tokens Studio workflow

This directory contains the retained token project for the third-party **Tokens Studio for Figma** plugin. It is not consumed by the current native Figma Variables export build in `config.js`.

## Files

- `primitives*.json`, `semantic*.json`, and `components.json` are Tokens Studio token sets.
- `$themes.json` defines the Tokens Studio theme and token-set selections.
- `$metadata.json` defines Tokens Studio token-set ordering.

## Commands

Run these commands from the repository root:

```bash
pnpm --filter @cobalt/tokens tokstd:validate
pnpm --filter @cobalt/tokens tokstd:merge
pnpm --filter @cobalt/tokens tokstd:export-dtcg
pnpm --filter @cobalt/tokens tokstd:test-tooling
```

- `tokstd:merge` writes `dist/tokens-tokstd-merged.json` for Tokens Studio round trips.
- `tokstd:export-dtcg` writes `dist/tokens-tokstd-dtcg.json` from these retained sources.

## Current Figma Variables workflow

The active build uses normalized native Figma Variables exports from `exports/tokens/*.tokens-dtcg.json`. Refresh those inputs with `pnpm tokens:convert-figma`; do not add native Figma export files to this directory.
