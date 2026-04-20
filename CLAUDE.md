# Cobalt Design System

Cobalt is a web component design system built with **Lit**, with framework wrappers for React, Vue, and Angular. It uses design tokens managed via Style Dictionary.

## Repository Structure

```
packages/
  components/   # Lit web components (@cobalt/components)
  tokens/       # Design tokens via Style Dictionary (@cobalt/tokens)
  react/        # React wrappers (@cobalt/react)
  vue/          # Vue wrappers (@cobalt/vue)
  angular/      # Angular wrappers (@cobalt/angular)
  icons/        # Icon set (@cobalt/icons)
  docs/         # VitePress documentation site (@cobalt/docs)
```

**Monorepo tooling:** pnpm workspaces, Changesets for versioning, Husky + lint-staged for pre-commit.

## Commands

```bash
pnpm build          # Build all packages
pnpm dev            # Run docs dev server
pnpm test           # Run component tests (Vitest + @open-wc/testing)
pnpm test:watch     # Watch mode
pnpm lint           # ESLint across all packages
pnpm format         # Prettier
pnpm clean          # Remove build artifacts
pnpm rebuild        # Clean + build
pnpm pack:local     # Pack tarballs for local testing in external apps
```

## Design Tokens

Tokens live in `packages/tokens/` and are built to multiple formats:

| Format                 | File                       | Import                               |
| ---------------------- | -------------------------- | ------------------------------------ |
| CSS custom properties  | `dist/css/tokens.css`      | `@cobalt/tokens/css/tokens.css`      |
| Base element styles    | `dist/css/base.css`        | `@cobalt/tokens/css/base`            |
| Self-hosted fonts      | `dist/css/fonts.css`       | `@cobalt/tokens/css/fonts`           |
| Dark theme overrides   | `dist/css/tokens-dark.css` | `@cobalt/tokens/css/tokens-dark.css` |
| SCSS variables         | `dist/scss/_tokens.scss`   | `@cobalt/tokens/scss/_tokens.scss`   |
| JS/TS exports          | `dist/js/tokens.js`        | `@cobalt/tokens`                     |
| Flat JSON (all tokens) | `dist/tokens.json`         | Machine-readable reference           |

### Token naming convention

All CSS tokens use the `--co-` prefix. In JSON/JS they use `Co` prefix in camelCase.

**Categories:** color, space, shape, elevation, font, motion, sizing, opacity, breakpoint.

**Three-tier architecture:**

- **Primitive:** `--co-color-primitive-blue-500` — raw palette values (avoid direct use)
- **Semantic:** `--co-color-primary-base`, `--co-color-surface-default`, `--co-color-interactive-hover` — intent-based mappings
- **Component:** `--co-button-primary-background`, `--co-button-border-radius` — component-specific decisions referencing semantic tokens

**Token categories and patterns:**

| Category  | Pattern                                            | Examples                                                     |
| --------- | -------------------------------------------------- | ------------------------------------------------------------ |
| Color     | `--co-color-{group}-{variant}`                     | `--co-color-surface-default`, `--co-color-interactive-hover` |
| Space     | `--co-space-{scale}` or `--co-space-{role}-{size}` | `--co-space-4`, `--co-space-gap-md`, `--co-space-inset-lg`   |
| Shape     | `--co-shape-{property}-{size}`                     | `--co-shape-radius-md`, `--co-shape-border-width-thin`       |
| Elevation | `--co-elevation-{type}-{size}`                     | `--co-elevation-shadow-lg`, `--co-elevation-z-modal`         |
| Font      | `--co-font-{property}-{value}`                     | `--co-font-size-p`, `--co-font-weight-semibold`              |
| Motion    | `--co-motion-{property}-{value}`                   | `--co-motion-duration-fast`, `--co-motion-easing-default`    |
| Sizing    | `--co-sizing-{element}-{size}`                     | `--co-sizing-icon-md`                                        |
| Opacity   | `--co-opacity-{role}`                              | `--co-opacity-disabled`, `--co-opacity-overlay`              |

When writing CSS, always prefer contextual/semantic tokens over primitives:

```css
/* Good — self-documenting, theme-safe */
background: var(--co-color-interactive-default);
color: var(--co-color-text-on-primary);
padding: var(--co-space-4);
border-radius: var(--co-shape-radius-md);
box-shadow: var(--co-elevation-shadow-md);
transition: background var(--co-motion-duration-fast) var(--co-motion-easing-default);

/* Avoid — hard-coded values or primitives */
background: #154bcc;
color: var(--co-color-primitive-neutral-900);
```

For the full token list, read `packages/tokens/dist/tokens.json`.

## Components

Components are Lit-based web components in `packages/components/src/components/`. Each component registers a `<co-*>` custom element.

For the full machine-readable API (props, events, slots, CSS parts), read `packages/components/custom-elements.json`.

## Framework Usage Patterns

### Web Component (vanilla)

```html
<script type="module">
  import '@cobalt/components/co-button';
</script>
<co-button variant="primary">Save</co-button>
<co-button variant="error" loading>Deleting…</co-button>
```

### React (`@cobalt/react`)

```tsx
import { CoButton } from '@cobalt/react';

<CoButton variant="primary" onClick={handleSave}>Save</CoButton>
<CoButton variant="error" onCoFocus={() => log('focused')}>Delete</CoButton>
```

### Vue (`@cobalt/vue`)

```vue
<script setup>
import { CoButton } from '@cobalt/vue';
</script>
<template>
  <CoButton variant="primary" @click="handleSave">Save</CoButton>
  <CoButton variant="error" @co-focus="onFocus">Delete</CoButton>
</template>
```

### Angular (`@cobalt/angular`)

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoButton } from '@cobalt/angular';

@Component({
  standalone: true,
  imports: [CoButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // ...
})
export class AppComponent {}
```

```html
<co-button variant="primary" (click)="handleSave()">Save</co-button>
<co-button variant="error" (coFocus)="onFocus($event)">Delete</co-button>
```

### Import strategy

Use per-component entry points for tree-shaking:

```js
import '@cobalt/components/co-button'; // Good — registers only co-button
// import '@cobalt/components';          // Bad — registers everything
```

## Theming

Apply `data-theme="dark"` on the `<html>` element. Custom themes override CSS custom properties under a scoped selector.

### CSS Cascade Layers

All global CSS output uses `@layer` to provide a structured cascade hierarchy:

```
@layer co.reset, co.base, co.tokens, co.theme, co.overrides;
```

| Layer          | Purpose                  | Source                                     |
| -------------- | ------------------------ | ------------------------------------------ |
| `co.reset`     | CSS resets               | Empty — consumers place their resets here  |
| `co.base`      | Base element styles      | `base.css` (opt-in via `[data-co-base]`)   |
| `co.tokens`    | Design token definitions | `tokens.css` (`:root` custom properties)   |
| `co.theme`     | Theme overrides          | `tokens-dark.css`, custom themes           |
| `co.overrides` | Consumer customizations  | Empty — consumers put brand overrides here |

**Override tokens example:**

```css
@layer co.overrides {
  :root {
    --co-color-primary-base: #8b5cf6;
  }
}
```

**Base element styles (opt-in):**

Import `@cobalt/tokens/css/base` and add `data-co-base` to scope base typography/element styles:

```html
<html data-co-base data-theme="light"></html>
```

```js
import '@cobalt/tokens/css';
import '@cobalt/tokens/css/fonts';
import '@cobalt/tokens/css/base';
```

For gradual migration, scope to a section: `<div data-co-base>...</div>`.

**Import order requirement:** `@cobalt/tokens/css` must be imported first — it declares the layer order.

## Coding Conventions

### File naming (kebab-case)

- Component: `co-{name}.ts`
- Styles: `co-{name}.styles.ts`
- Tests: `co-{name}.test.ts`
- A11y tests: `co-{name}.a11y.test.ts`

### Component patterns

- Extend `CobaltElement` base class (from `@cobalt/core`)
- Set `reflect: true` on properties that affect styling or a11y
- Custom events use `co-` prefix: `co-change`, `co-open`, `co-focus`
- Never manipulate light DOM from within the component

### CSS custom property naming

```
--co-{component}-{property}-{variant}-{state}
```

Example: `--co-button-background-primary-hover`

Always reference design tokens rather than hard-coded values.

### TypeScript

- Strict mode enabled
- Prefer `interface` over `type` for extendable shapes
- Export public types from `index.ts`
- Avoid `any` — use `unknown` + type guards

### Commits (Conventional Commits)

```
type(scope): description
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
Examples: `feat(co-button): add ghost variant`, `fix(co-input): resolve focus ring`
Validated by commitlint hook.

### Testing

- Unit tests + a11y tests for every component
- Use `@open-wc/testing` and `axe-core`
- 90% line coverage target
- Test all public props, methods, events, slots, keyboard interactions

## Key Files for Detailed Lookups

| What                         | Where                                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| Full component API manifest  | `packages/components/custom-elements.json`                                                                |
| All 174 design tokens        | `packages/tokens/dist/tokens.json`                                                                        |
| Component docs with examples | `packages/docs/components/*.md`                                                                           |
| Coding standards             | `packages/docs/contributing/coding-standards.md`                                                          |
| Developer setup guide        | `packages/docs/getting-started/developers.md`                                                             |
| Token source definitions     | `packages/tokens/tokens/*.json` (primitives, primitives.color, semantic.light, semantic.dark, components) |
