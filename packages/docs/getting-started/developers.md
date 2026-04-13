# Getting Started for Developers

This guide covers everything you need to start building with Cobalt — from setting up your environment to rendering your first component, consuming design tokens, and writing tests.

## Prerequisites

### Tooling

| Tool    | Minimum Version | Check Command    |
| ------- | --------------- | ---------------- |
| Node.js | 18.x            | `node --version` |
| pnpm    | 9.x             | `pnpm --version` |
| Git     | 2.x             | `git --version`  |

> **Tip:** We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node versions. The repository includes an `.nvmrc` file.

### Browser support

| Browser       | Minimum Version |
| ------------- | --------------- |
| Chrome / Edge | 90+             |
| Firefox       | 100+            |
| Safari        | 15.4+           |

### Framework compatibility

Framework wrappers are optional but recommended for better DX (typed props, native event binding, IDE autocompletion).

| Framework | Package              | Minimum Version                |
| --------- | -------------------- | ------------------------------ |
| React     | `@cobalt/react`      | React 18.0+ (supports 18 & 19) |
| Vue       | `@cobalt/vue`        | Vue 3.4+                       |
| Angular   | `@cobalt/angular`    | Angular 17.3+ (supports 17–21) |
| None      | `@cobalt/components` | Any (standard web components)  |

> **No framework?** Cobalt components are standard web components built with Lit. They work in any environment that supports custom elements — just import and use.

## Environment Setup

### For consumers

Install the core packages into your project:

```bash
npm install @cobalt/components @cobalt/tokens
```

Then add the wrapper for your framework:

```bash
# Pick one (or none — vanilla web components work everywhere)
npm install @cobalt/react
npm install @cobalt/vue
npm install @cobalt/angular
```

Then import the design tokens stylesheet in your app's global CSS (e.g., `styles.css`):

```css
@import '@cobalt/tokens/css'; /* tokens (required) */
@import '@cobalt/tokens/css/fonts'; /* self-hosted fonts (recommended) */
```

The first import provides all `--co-*` CSS custom properties that components need for colors, spacing, typography, and more. Without it, components will render without visual styles. The second import loads self-hosted Inter, Noto Sans, and JetBrains Mono fonts — if omitted, the font-family tokens fall back to system fonts.

If your organization uses a private registry, configure it first:

```bash
pnpm config set @cobalt:registry https://registry.your-org.com
```

### For contributors

Clone the monorepo and build all packages:

```bash
git clone %GITHUB_URL%.git
cd cobalt-design-system
pnpm install
pnpm build         # build all packages
pnpm dev            # starts docs dev server at http://localhost:5173
```

## Project Structure

```
cobalt-design-system/
├── packages/
│   ├── tokens/       # Design tokens (JSON → CSS, SCSS, JS)
│   ├── components/   # Lit web components (co-button, co-input, etc.)
│   ├── react/        # React wrapper components (@cobalt/react)
│   ├── vue/          # Vue wrapper components (@cobalt/vue)
│   ├── angular/      # Angular standalone directives (@cobalt/angular)
│   ├── icons/        # Icon set (@cobalt/icons)
│   ├── mcp/          # MCP server for AI-assisted development
│   └── docs/         # Documentation site — you are here
├── package.json      # Root workspace configuration
└── pnpm-workspace.yaml
```

## Framework Setup

### Vanilla HTML

Import the token stylesheet and the component module. No build step required.

```html
<link rel="stylesheet" href="node_modules/@cobalt/tokens/dist/css/tokens.css" />
<script type="module">
  import '@cobalt/components/button';
</script>

<co-button variant="primary">Save Changes</co-button>
```

### React

The `@cobalt/react` package provides typed wrapper components with proper React event handling.

```tsx
import { CoButton } from '@cobalt/react';

function LoginForm() {
  return (
    <form>
      <CoButton variant="primary" onCoFocus={() => console.log('focused')}>
        Sign In
      </CoButton>
    </form>
  );
}
```

React wrappers handle the web-component-to-React bridge automatically — no `ref` hacks or manual event listeners needed.

### Vue

The `@cobalt/vue` package provides typed components with native Vue event handling.

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

The `@cobalt/angular` package provides standalone directives with Angular inputs and outputs.

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoButton } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<!-- app.component.html -->
<co-button variant="primary" (coFocus)="onFocus($event)"> Sign In </co-button>
```

> **Why `CUSTOM_ELEMENTS_SCHEMA`?** Angular needs this schema to allow `<co-*>` tags in templates. Add it to any standalone component that uses Cobalt elements.

Make sure your global `styles.css` imports the design tokens — Angular does not automatically process CSS imports from component libraries:

```css
/* styles.css */
@import '@cobalt/tokens/css';
```

## Importing Components

Cobalt uses per-component entry points for tree-shaking:

```js
import '@cobalt/components/button';
import '@cobalt/components/icon';
```

Additional components follow the same `@cobalt/components/<name>` pattern as they are published.

> [!WARNING]
> Avoid importing the barrel export (`@cobalt/components`) in production. It registers every component and increases bundle size significantly.

## Using Design Tokens

Import the main token stylesheet to make all tokens available as CSS custom properties on `:root`:

```css
.card {
  background: var(--co-color-surface-default);
  padding: var(--co-space-inset-md);
  border-radius: var(--co-shape-radius-md);
}
```

| Category   | Example Token              | Default Value                                                      |
| ---------- | -------------------------- | ------------------------------------------------------------------ |
| Color      | `--co-color-primary-base`  | `#154bcc`                                                          |
| Spacing    | `--co-space-inset-md`      | `16px`                                                             |
| Typography | `--co-font-size-md`        | `1rem`                                                             |
| Radius     | `--co-shape-radius-md`     | `6px`                                                              |
| Shadow     | `--co-elevation-shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` |

Tokens are also available as JavaScript exports:

```js
import { CoColorPrimaryBase } from '@cobalt/tokens';
```

## Theming

Cobalt ships default light values in `@cobalt/tokens/css` and a default dark override in `@cobalt/tokens/css/dark`.

The recommended selector model is:

```html
<html data-theme="default" data-mode="dark"></html>
```

For backward compatibility, the published dark stylesheet also supports:

```html
<html data-theme="dark"></html>
```

Override any token at the root level or scope overrides to a specific subtree:

```css
/* Global override */
:root {
  --co-color-primary-base: #7c3aed;
}

/* Scoped override for a section */
.marketing-hero {
  --co-color-primary-base: #7c3aed;
  --co-color-surface-default: #1a1025;
}
```

> **Important:** Only override token values — never replace the token names themselves. This ensures forward compatibility when upgrading Cobalt.

See the [Colors documentation](../foundations/colors) for the full theming guide.

## Testing

Cobalt uses **Vitest** with **@open-wc/testing** for component tests. To test Cobalt components in your own project:

```bash
pnpm add -D vitest @open-wc/testing
```

```js
import { html, fixture, expect } from '@open-wc/testing';
import '@cobalt/components/co-button';

describe('co-button', () => {
  it('renders with the correct label', async () => {
    const el = await fixture(html`<co-button>Click me</co-button>`);
    expect(el.shadowRoot.querySelector('button').textContent).to.equal('Click me');
  });
});
```

Within the monorepo, run all tests with:

```bash
pnpm test              # run all component tests
pnpm test:watch        # watch mode
```

## Local Testing in External Apps

When developing Cobalt, you often need to test your changes in an external application before publishing. There are two approaches depending on your workflow.

### Using `pack:local` (recommended)

The `pack:local` script builds all packages and produces tarballs identical to what `npm publish` would create. This is the most reliable method because it validates package exports, `files` configuration, and build output — catching issues that symlinks would hide.

```bash
# In the cobalt monorepo
pnpm pack:local
```

This creates `.tgz` files in `./local-packs/`. Then install them in your app:

```bash
# Install all Cobalt packages at once
npm install /path/to/cobalt/local-packs/*.tgz

# Or install only what you need
npm install /path/to/cobalt/local-packs/cobalt-components-0.0.1.tgz \
            /path/to/cobalt/local-packs/cobalt-tokens-0.0.1.tgz
```

If you already ran `pnpm build` separately, skip the build step:

```bash
pnpm pack:local --skip-build
```

After making changes in the monorepo, re-run `pnpm pack:local` and reinstall in your app to pick up the updates.

### Using `pnpm link` (faster iteration)

For rapid development where you are making frequent changes, symlinks avoid the pack-reinstall cycle:

```bash
# In the cobalt monorepo — register a package globally
cd packages/components
pnpm link --global

# In your external app — link the package
pnpm link --global @cobalt/components
```

Changes are reflected after running `pnpm build` in the monorepo — no reinstall needed. Repeat for each package you want to link.

::: warning
Linked packages can cause duplicate dependency issues at runtime (e.g., two copies of Lit or Vue). If you encounter unexpected errors, switch to `pack:local` instead.
:::

### When you don't need an external app

For most development work, the monorepo itself provides full integration testing:

- **`pnpm build`** — verifies all packages compile and interoperate
- **`pnpm test`** — runs component unit tests and accessibility checks
- **`pnpm dev`** — the docs site imports every `@cobalt` package and serves as a live integration environment

## Troubleshooting

| Problem                                          | Solution                                                                          |
| ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Component not rendering                          | Ensure the import runs before the parser encounters the tag. Use `type="module"`. |
| Styles missing                                   | Verify `@cobalt/tokens/css` is imported and not stripped by your bundler.         |
| Events not firing in React                       | Use `@cobalt/react` wrappers or attach listeners via `ref`.                       |
| FOUC on page load                                | Import component modules in your app entry point, not lazily in templates.        |
| Bundle size too large                            | Use per-component imports instead of the barrel export.                           |
| Angular unknown element error                    | Add `CUSTOM_ELEMENTS_SCHEMA` to your standalone component's `schemas` array.      |
| Styles leak into or out of components            | Cobalt uses Shadow DOM. Use CSS custom properties (tokens) to style from outside. |
| Tests fail with "custom element already defined" | Run each test file in its own browser context or use `--isolation` flag.          |

## Next Steps

- Browse the [Component documentation](/components/button) for API details, demos, and best practices
- Review the [Coding Standards](../contributing/coding-standards) before submitting a PR
- Join `#cobalt-engineering` on Slack for questions and discussion
