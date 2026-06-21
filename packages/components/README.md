# @cobalt/components

Cobalt Design System web components.

Framework-agnostic web components built with Lit. Each `<co-*>` element is themed by `@cobalt/tokens` and uses iconography from `@cobalt/icons`. The React, Vue, and Angular wrappers (`@cobalt/react`, `@cobalt/vue`, `@cobalt/angular`) are thin layers over this package — if you can import web components directly, this is all you need.

## Install

```bash
npm install @cobalt/components
```

See the Cobalt docs site for the full component catalog, props, slots, events, and CSS parts.

## Contributing — three-file component convention

Each Cobalt component directory under `src/components/<name>/` holds three sibling files:

| File                        | Lives in            | Purpose                                                                                                                                       |
| --------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `co-<name>.ts`              | shadow DOM behavior | Lit class, decorators, render, events                                                                                                         |
| `co-<name>.styles.css`      | shadow DOM styles   | `:host` and shadow-tree selectors (compiled into a Lit `css\`\``template by`npm run generate-styles`)                                         |
| `co-<name>.pre-upgrade.css` | document scope      | One `co-<name>:not(:defined) { … }` rule that reserves layout and hides slotted content until the element is `:defined` — the FOUC mitigation |

The aggregator at `scripts/build-pre-upgrade.js` concatenates every per-component `co-<name>.pre-upgrade.css` into the published `dist/pre-upgrade.css` (the `@cobalt/components/pre-upgrade.css` export). Consumers import the assembled file once; they should never import the per-component fragments.

When you add a new component, `npm run pre-upgrade:check` fails until the fragment exists. Run `npm run pre-upgrade:check -- --fix` to scaffold a starter derived from the component's `:host` layout properties — review and hand-tune, then commit.

## License

MIT
