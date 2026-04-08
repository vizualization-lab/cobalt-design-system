# Cobalt Design System — Copilot Instructions

This is the Cobalt Design System, a Lit + Shoelace web component library with React, Vue, and Angular wrappers.

## Component Usage

Components use the `<co-*>` tag prefix. Import per-component entry points for tree-shaking:

```js
import '@cobalt/components/co-button';
```

### Framework Patterns

**Web Component:**

```html
<co-button variant="primary" size="md">Save</co-button>
<co-button variant="error" disabled>Delete</co-button>
```

**React** (`@cobalt/react`):

```tsx
import { CoButton } from '@cobalt/react';
<CoButton variant="primary" onClick={handleSave}>Save</CoButton>
<CoButton variant="error" onCoFocus={() => log('focused')}>Delete</CoButton>
```

**Vue** (`@cobalt/vue`):

```vue
<script setup>
import { CoButton } from '@cobalt/vue';
</script>
<template>
  <CoButton variant="primary" @click="handleSave">Save</CoButton>
</template>
```

**Angular** (`@cobalt/angular`):

```typescript
import { CobaltButtonModule } from '@cobalt/angular';
@NgModule({ imports: [CobaltButtonModule] })
```

```html
<co-button variant="primary" (click)="handleSave()">Save</co-button>
```

## co-button API

| Property   | Type                                               | Default     |
| ---------- | -------------------------------------------------- | ----------- |
| `variant`  | `'primary' \| 'secondary' \| 'error' \| 'success'` | `'primary'` |
| `size`     | `'sm' \| 'md' \| 'lg'`                             | `'md'`      |
| `disabled` | `boolean`                                          | `false`     |
| `loading`  | `boolean`                                          | `false`     |
| `type`     | `'submit' \| 'reset' \| 'button'`                  | `'button'`  |
| `href`     | `string`                                           | —           |
| `target`   | `'_blank' \| '_self' \| '_parent' \| '_top'`       | —           |

Events: `co-focus`, `co-blur`. Slots: default, `prefix`, `suffix`.

## Design Tokens

All tokens use `--co-` prefix as CSS custom properties. Import `@cobalt/tokens/css/tokens.css`.

Prefer semantic tokens over primitives:

```css
/* Good */
background: var(--co-color-primary-600);
padding: var(--co-spacing-4);
border-radius: var(--co-radius-md);

/* Bad */
background: #2563eb;
padding: 1rem;
```

Token categories: color, spacing, radius, shadow, font, z-index, transition, breakpoint.

## Coding Conventions

- **Files:** kebab-case. Components: `co-{name}.ts`, styles: `co-{name}.styles.ts`, tests: `co-{name}.test.ts`
- **Events:** always use `co-` prefix (`co-change`, `co-focus`)
- **CSS properties:** `--co-{component}-{property}-{variant}-{state}`
- **TypeScript:** strict mode, prefer `interface` over `type`, avoid `any`
- **Commits:** Conventional Commits — `feat(co-button): add ghost variant`
- **Properties:** set `reflect: true` when property affects styling or a11y
- **Imports:** per-component entry points, never barrel import in production
