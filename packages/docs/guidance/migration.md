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
```

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
