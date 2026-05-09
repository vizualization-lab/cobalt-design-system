# @cobalt/icons

Material Symbols registry for the Cobalt Design System.

Pre-bundled icon set used by the `<co-icon>` component. Self-contained — does not depend on other Cobalt packages — but is consumed by `@cobalt/components` and indirectly by every framework wrapper.

The package also exports local icon category metadata for docs and tooling. Category data is captured in the repository and included in the generated package output, so consumers never fetch external metadata at runtime.

## Install

```bash
npm install @cobalt/icons
```

See the Cobalt docs site for the icon gallery and usage patterns.

## Maintenance

Refresh category metadata only when updating the Material Symbols source set:

```bash
pnpm --filter @cobalt/icons refresh-categories
pnpm --filter @cobalt/icons build
```

The refresh command contacts the upstream Material Symbols metadata endpoint and writes the local snapshot in `src/icon-categories.json`. Normal builds and package usage read from that committed snapshot.

## License

MIT
