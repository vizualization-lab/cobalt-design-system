# Getting Started for Developers

This guide covers installation, framework integration, component usage, and design token consumption for engineers working with Cobalt.

## Installation

Install the core packages with pnpm:

```bash
pnpm add @cobalt/components @cobalt/tokens
```

> **Tip:** Cobalt components are built as standard web components using Lit. They work in any environment that supports custom elements — no framework adapter required.

## Framework Setup

### Vanilla HTML

```html
<link rel="stylesheet" href="node_modules/@cobalt/tokens/css/global.css" />
<script type="module">
  import '@cobalt/components/co-button';
</script>

<co-button variant="primary">Save Changes</co-button>
```

### React

Install the React wrapper for ergonomic props and event binding:

```bash
pnpm add @cobalt/react
```

```tsx
import { Button } from '@cobalt/react';

function LoginForm() {
  return (
    <form>
      <Button variant="primary" onCoFocus={() => console.log('focused')}>
        Sign In
      </Button>
    </form>
  );
}
```

### Vue

Install the Vue wrapper for typed components with native Vue event handling:

```bash
pnpm add @cobalt/vue
```

```vue
<script setup>
import { CoButton } from '@cobalt/vue';
</script>

<template>
  <CoButton variant="primary" @co-focus="onFocus"> Sign In </CoButton>
</template>
```

> **Tip:** You can also use `co-button` directly as a custom element in Vue — just configure `isCustomElement` in your Vite config to recognize `co-*` tags.

### Angular

Install the Angular wrapper for typed directives with `@Input`/`@Output` bindings:

```bash
pnpm add @cobalt/angular
```

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoButtonDirective } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoButtonDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<!-- app.component.html -->
<co-button variant="primary" (coFocus)="onFocus($event)"> Sign In </co-button>
```

## Importing Components

Cobalt uses per-component entry points for tree-shaking:

```js
import '@cobalt/components/co-button';
import '@cobalt/components/co-dialog';
import '@cobalt/components/co-tooltip';
```

> **Warning:** Avoid importing the barrel export (`@cobalt/components`) in production. It registers every component and increases bundle size significantly.

## Using Design Tokens

After importing `global.css`, all tokens are available as CSS custom properties on `:root`:

```css
.card {
  background: var(--co-color-surface-default);
  padding: var(--co-spacing-lg);
  border-radius: var(--co-radius-md);
}
```

| Category   | Example Token             | Default Value                |
| ---------- | ------------------------- | ---------------------------- |
| Color      | `--co-color-primary-base` | `#0057FF`                    |
| Spacing    | `--co-spacing-md`         | `16px`                       |
| Typography | `--co-font-size-body`     | `14px`                       |
| Radius     | `--co-radius-md`          | `8px`                        |
| Shadow     | `--co-shadow-md`          | `0 4px 12px rgba(0,0,0,0.1)` |

Tokens are also available as JavaScript exports via `import { colorPrimaryBase } from '@cobalt/tokens'`.

## Theming

Cobalt supports light and dark themes via a `data-theme` attribute:

```html
<html data-theme="dark"></html>
```

Custom themes can override any token by redefining CSS custom properties under a scoped selector. See the [Tokens documentation](../tokens/) for the full theming guide.

## Troubleshooting

| Problem                    | Solution                                                                          |
| -------------------------- | --------------------------------------------------------------------------------- |
| Component not rendering    | Ensure the import runs before the parser encounters the tag. Use `type="module"`. |
| Styles missing             | Verify `global.css` is imported and not stripped by your bundler.                 |
| Events not firing in React | Use `@cobalt/react` wrappers or attach listeners via `ref`.                       |

For further help, browse the [Component documentation](/components/button), the [Tokens reference](/tokens/), or join `#cobalt-engineering` on Slack.
