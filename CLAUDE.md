# Cobalt Design System

Cobalt is a web component design system built with **Lit** on top of **Shoelace**, with framework wrappers for React, Vue, and Angular. It uses design tokens managed via Style Dictionary.

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
```

## Design Tokens

Tokens live in `packages/tokens/` and are built to multiple formats:

| Format                 | File                            | Import                                    |
| ---------------------- | ------------------------------- | ----------------------------------------- |
| CSS custom properties  | `dist/css/tokens.css`           | `@cobalt/tokens/css/tokens.css`           |
| Dark theme overrides   | `dist/css/tokens-dark.css`      | `@cobalt/tokens/css/tokens-dark.css`      |
| Shoelace mapping       | `dist/css/shoelace-mapping.css` | `@cobalt/tokens/css/shoelace-mapping.css` |
| SCSS variables         | `dist/scss/_tokens.scss`        | `@cobalt/tokens/scss/_tokens.scss`        |
| JS/TS exports          | `dist/js/tokens.js`             | `@cobalt/tokens`                          |
| Flat JSON (all tokens) | `dist/tokens.json`              | Machine-readable reference                |

### Token naming convention

All CSS tokens use the `--co-` prefix. In JSON/JS they use `Co` prefix in camelCase.

**Categories:** color, spacing, radius, shadow, font, z-index, transition, breakpoint.

**Semantic layers:**

- **Primitive:** `--co-color-primitive-blue-500` — raw palette values
- **Semantic:** `--co-color-primary-500`, `--co-color-danger-600` — role-based aliases
- **Contextual:** `--co-color-background-default`, `--co-color-foreground-muted` — usage-specific

When writing CSS, always prefer semantic/contextual tokens over primitives:

```css
/* Good */
background: var(--co-color-background-default);
color: var(--co-color-foreground-default);
padding: var(--co-spacing-4);
border-radius: var(--co-radius-md);

/* Avoid */
background: #ffffff;
color: var(--co-color-primitive-gray-900);
```

For the full token list, read `packages/tokens/dist/tokens.json` (174 tokens).

## Components

Components are Lit-based web components in `packages/components/src/components/`. Each component registers a `<co-*>` custom element.

For the full machine-readable API (props, events, slots, CSS parts), read `packages/components/custom-elements.json`.

### co-button

A themed button wrapping Shoelace's sl-button.

**Properties:**

| Property   | Type                                              | Default     | Description                         |
| ---------- | ------------------------------------------------- | ----------- | ----------------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'danger' \| 'ghost'` | `'primary'` | Visual style                        |
| `size`     | `'sm' \| 'md' \| 'lg'`                            | `'md'`      | Controls padding and font size      |
| `disabled` | `boolean`                                         | `false`     | Prevents interaction                |
| `loading`  | `boolean`                                         | `false`     | Shows spinner, disables interaction |
| `type`     | `'submit' \| 'reset' \| 'button'`                 | `'button'`  | HTML button type                    |
| `href`     | `string`                                          | —           | Renders as anchor element           |
| `target`   | `'_blank' \| '_self' \| '_parent' \| '_top'`      | —           | Link target (when href is set)      |

**Events:** `co-focus`, `co-blur`

**Slots:** default (label), `prefix`, `suffix`

**CSS Parts:** `base`, `label`, `prefix`, `suffix`

## Framework Usage Patterns

### Web Component (vanilla)

```html
<script type="module">
  import '@cobalt/components/co-button';
</script>
<co-button variant="primary">Save</co-button>
<co-button variant="danger" loading>Deleting…</co-button>
```

### React (`@cobalt/react`)

```tsx
import { Button } from '@cobalt/react';

<Button variant="primary" onClick={handleSave}>Save</Button>
<Button variant="danger" onCoFocus={() => log('focused')}>Delete</Button>
```

### Vue (`@cobalt/vue`)

```vue
<script setup>
import { CoButton } from '@cobalt/vue';
</script>
<template>
  <CoButton variant="primary" @click="handleSave">Save</CoButton>
  <CoButton variant="danger" @co-focus="onFocus">Delete</CoButton>
</template>
```

### Angular (`@cobalt/angular`)

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoButtonDirective } from '@cobalt/angular';

@Component({
  standalone: true,
  imports: [CoButtonDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // ...
})
export class AppComponent {}
```

```html
<co-button variant="primary" (click)="handleSave()">Save</co-button>
<co-button variant="danger" (coFocus)="onFocus($event)">Delete</co-button>
```

### Import strategy

Use per-component entry points for tree-shaking:

```js
import '@cobalt/components/co-button'; // Good — registers only co-button
// import '@cobalt/components';          // Bad — registers everything
```

## Theming

Apply `data-theme="dark"` on the `<html>` element. Custom themes override CSS custom properties under a scoped selector.

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

| What                         | Where                                            |
| ---------------------------- | ------------------------------------------------ |
| Full component API manifest  | `packages/components/custom-elements.json`       |
| All 174 design tokens        | `packages/tokens/dist/tokens.json`               |
| Component docs with examples | `packages/docs/components/*.md`                  |
| Coding standards             | `packages/docs/contributing/coding-standards.md` |
| Developer setup guide        | `packages/docs/getting-started/developers.md`    |
| Token source definitions     | `packages/tokens/tokens/*.json`                  |
