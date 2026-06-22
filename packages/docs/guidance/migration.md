# Migrating an Existing Application

Migration to Cobalt should be scoped and incremental. Bootstrap, Angular, MUI, custom CSS, and local component libraries can all coexist with Cobalt while the design system matures.

This is not a full Bootstrap or Angular transition guide. It is a practical path for moving one workflow or route at a time.

## Recommended Path

1. **Choose a slice.** Pick one route, workflow, or page region with manageable risk.
2. **Install foundations.** Add `@cobalt/tokens`, import token CSS, and verify import order.
3. **Tokenize local CSS.** Replace obvious hard-coded colors, spacing, type, radius, and focus values with semantic tokens.
4. **Apply element mapping.** Add `@cobalt/tokens/css/base` and scope `[data-co-base]` to the slice.
5. **Adopt ready components.** Replace only components that have acceptable docs, status, wrapper behavior, and accessibility support.
6. **Verify and expand.** Test the slice, document gaps, then repeat on the next surface.

## Setup

::: tip Using agentic coding tools?
Install the Cobalt agent skill so Claude Code and OpenAI Codex query the `co` CLI as the source of truth during migration: `co skill add`. See [Manage the Cobalt Skill](/resources/cli#manage-the-cobalt-skill).
:::

```bash
npm install @cobalt/tokens @cobalt/components
```

Add a framework wrapper when useful:

```bash
npm install @cobalt/react
npm install @cobalt/vue
npm install @cobalt/angular
```

Load foundations in order:

```css
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/css/fonts';
@import '@cobalt/tokens/css/base';
@import '@cobalt/components/pre-upgrade.css';
```

The order matters: tokens must be parsed first so the `var(--co-*)` references inside `pre-upgrade.css` resolve at first paint.

### Suppressing flash-of-unstyled-content

Cobalt components are built with Lit, which means each `<co-*>` element only acquires its styles after the browser parses the HTML, downloads the component bundle, runs `customElements.define()`, and attaches the element's shadow DOM. During a fresh-project bootstrap the user typically does not notice the gap — the whole page is loading. During an incremental migration the gap is far more visible: the host application is already painted and styled, then individual `<co-*>` tags inside the migrated slice appear with `display: inline` and no styling for tens to hundreds of milliseconds before snapping into their upgraded shape. The result reads as a layout shift on every navigation into the slice.

`@cobalt/components/pre-upgrade.css` ships one `:not(:defined)` rule per Cobalt tag in the `co.reset` cascade layer. Each rule does two things:

- **Reserves the layout** the upgraded `:host` will occupy (`display`, `inline-size`/`block-size`, `vertical-align` — sourced from each component's `:host` block).
- **Hides slotted content** via `visibility: hidden;` so plain-text fallback inside `<co-button>Loading</co-button>` is not painted before the component renders it.

When the browser registers each element, `:not(:defined)` stops matching and the shadow-DOM `:host` styles take over with no visible shift.

#### Integrating into your build

Pick the path that matches the migrated slice's existing entrypoint:

- **Plain CSS or a global stylesheet** — keep the `@import` shown above.
- **SCSS** — keep `@use '@cobalt/tokens/scss' as co;` for the Sass helpers, then add `@import '@cobalt/components/pre-upgrade.css';` next to the other token CSS imports. (Sass passes `@import` of a plain `.css` file through as a CSS `@import url(...)`, which the bundler resolves through `node_modules`.)
- **JavaScript entrypoint (Vite, Webpack, Rollup, Parcel)** — `import '@cobalt/components/pre-upgrade.css';` once at the top of the entry alongside other token imports. The bundler extracts it into the page's preloaded stylesheet.
- **Angular** — list the import in `src/styles.css` or `src/styles.scss` so the application builder picks it up via `angular.json`.
- **CSS-in-JS hosts (styled-components, Emotion, Stitches)** — load `pre-upgrade.css` as a global side-effect from your JS entrypoint (same as the Vite/Webpack form). Do not feed the file through the CSS-in-JS pipeline; the runtime might strip `:not(:defined)` rules thinking nothing in the rendered tree matches them.
- **Server-rendered or critical-CSS extracted bundles** — make sure your tooling does not drop `:not(:defined)` selectors during purge passes. Allowlist the `co-*:not(:defined)` pattern in your PurgeCSS / Critters / similar configuration if it runs over the migrated slice.

#### Common gotchas

- **Lazy-loaded routes.** If the import only lives in a per-route chunk, the flash returns the first time the user navigates into that chunk. Load `pre-upgrade.css` from the application shell, not per-route.
- **Stripped during purge.** Aggressive unused-CSS removal can delete `:not(:defined)` rules because the live DOM contains zero matching elements when the purger runs. Add `co-*:not(:defined)` to your safelist.
- **Load order regression.** If `pre-upgrade.css` is moved before `@cobalt/tokens/css`, every `var(--co-*)` reference inside the pre-upgrade rules silently falls back to `initial` and reservations collapse. Keep tokens first.
- **Per-route SPA navigation.** Pre-upgrade hides the element until `:defined`, but the moment the route renders new `<co-*>` tags from already-registered classes they are already defined — no flash. The mitigation only matters for elements whose component module has not yet been imported. If you lazy-load Cobalt components by route, expect the first navigation into a slice to use the reservation; subsequent navigations are flash-free regardless.

#### Verifying it works

- Open DevTools → Sources → search the loaded CSS for `:not(:defined)`. You should see 28 selectors (one per Cobalt component).
- Throttle the network to "Slow 3G" in DevTools and hard-refresh a migrated page. The chrome reserves space without painting un-styled `<co-*>` tags, then appears fully styled in a single frame.
- Inspect a `<co-button>` during the upgrade window. Its computed `min-block-size` should resolve to a real `px` value (e.g. `40px`) sourced from `var(--co-control-height-md)`. If it does not, your token CSS is loading after the pre-upgrade rules — fix the import order.

Scope base styles:

```html
<main data-co-base>
  <!-- migrated slice -->
</main>
```

## Component Adoption

Start with lower-risk components such as buttons, icons, labels, simple fields, banners, and cards. Keep local or legacy implementations for unsupported app patterns such as dialogs, data grids, date pickers, menus, tabs, pagination, and complex overlays.

Before replacing a component, check:

- the component page documents the API you need
- [Component Status](/components/status) does not show a blocker for your workflow
- wrapper events and controlled state work in your framework
- keyboard, focus, validation, and accessibility behavior match the current workflow
- there is a fallback if the component is not ready

## Framework Examples

### Bootstrap

Keep Bootstrap in place while migrating a route or region. Tokenize local CSS first, then replace simple leaf components. Remove Bootstrap CSS or JavaScript only from bundles that no longer use it.

### Angular

Treat Cobalt as targeted adoption inside the Angular app, not an Angular rewrite. Use `@cobalt/angular` where wrapper directives help, add `CUSTOM_ELEMENTS_SCHEMA` where needed, and keep existing Angular Material or local components for unsupported patterns.

### React, Vue, and MUI

Use `@cobalt/react` or `@cobalt/vue` when wrappers improve event handling. For MUI or other React libraries, replace a small set of components inside one feature slice instead of attempting a full library swap.

## Verification Checklist

Before calling a slice migrated, verify:

- token and base CSS imports load once and in order
- `@cobalt/components/pre-upgrade.css` is imported alongside the token CSS so `co-*` elements do not flash unstyled while Lit upgrades them
- `co doctor` returns a clean `cobalt.styles.pre-upgrade` pass for the migrated slice (run from the project root after wiring the import)
- `[data-co-base]` is scoped to the intended area
- visual review passes against before and after screenshots
- keyboard navigation and focus states work
- labels, descriptions, errors, and required states remain connected
- unit or component tests cover changed state and event behavior
- integration or end-to-end tests cover the migrated workflow
- supported browsers and themes are checked
- unsupported patterns are documented as deferred or roadmap gaps

## Related

- [Adoption Plan](/guidance/adoption)
- [Element Mapping](/guidance/element-mapping)
- [Token Reference](/tokens/)
- [CSS Cascade Layers](/foundations/css-layers)
- [Component Status](/components/status)
- [Manage the Cobalt Skill](/resources/cli#manage-the-cobalt-skill)
