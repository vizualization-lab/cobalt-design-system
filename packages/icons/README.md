# @cobalt/icons

Material Symbols registry for the Cobalt Design System.

Pre-bundled icon set used by the `<co-icon>` component. Self-contained — does not depend on other Cobalt packages — but is consumed by `@cobalt/components` and indirectly by every framework wrapper.

The package also exports local icon category and search metadata for docs and tooling. Metadata is captured in the repository and included in the generated package output, so consumers never fetch external website endpoints at runtime.

## Install

```bash
npm install @cobalt/icons
```

See the Cobalt docs site for the icon gallery and usage patterns.

## Maintenance

Refresh Material Symbols metadata only when intentionally updating the local snapshot:

```bash
pnpm --filter @cobalt/icons refresh-categories
pnpm --filter @cobalt/icons build
```

The refresh command contacts the upstream Material Symbols metadata endpoint and writes the local snapshot in `src/icon-categories.json`. Normal builds, docs usage, and package consumers read only from committed files and must not depend on that endpoint.

### Core icon metadata

The curated Core icon collection is maintained in `src/core-icons.json`. Add entries with the base icon name and a short use-case description:

```json
{
  "name": "edit",
  "description": "Use for editing, modifying content, authoring, or opening source changes."
}
```

The build validates that each Core icon exists, preserves the file order, and exports both `coreIconNames` and `iconDescriptionsByIconName` for docs and tooling.

## License

MIT
