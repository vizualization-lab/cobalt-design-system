# Getting Started for Developers

This guide walks through the first Cobalt integration milestone: installing the packages, loading the required styles, rendering a `Success` button, and confirming that Cobalt's `co-focus` event logs to the browser console.

By the end, you should be able to focus a Cobalt button and see `Success` printed in DevTools. That confirms your package setup, token styles, component registration, and framework-specific event wiring are working correctly.

## Prerequisites

### Tooling

| Tool    | Minimum Version | Check Command    |
| ------- | --------------- | ---------------- |
| Node.js | 20.x            | `node --version` |
| pnpm    | 9.x             | `pnpm --version` |
| Git     | 2.x             | `git --version`  |

> **Tip:** Node 20.x is the contributor baseline. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node versions, and the repository includes an `.nvmrc` file.

### Browser support

| Browser       | Minimum Version |
| ------------- | --------------- |
| Chrome / Edge | 90+             |
| Firefox       | 100+            |
| Safari        | 15.4+           |

### Framework compatibility

Framework wrappers are optional but recommended for better developer experience: typed props, framework-friendly custom events, and IDE autocompletion.

| Framework | Package              | Minimum Version                      |
| --------- | -------------------- | ------------------------------------ |
| React     | `@cobalt/react`      | React 18.0+ (supports 18 & 19)       |
| Vue       | `@cobalt/vue`        | Vue 3.4+                             |
| Angular   | `@cobalt/angular`    | Angular 17.3+ (supports 17–21)       |
| None      | `@cobalt/components` | Any environment with custom elements |

> **No framework?** Cobalt components are standard web components built with Lit. They work in any environment that supports custom elements.

## Install Cobalt

Cobalt packages are hosted in a private npm registry. Configure npm to use the Cobalt registry for packages under the `@cobalt` scope.

### Start from a template

Use the starter generator when you want Cobalt dependencies, global styles, and a working framework shell created for you:

```bash
npm create cobalt
```

The generator prompts for a framework template, whether to use SCSS, whether to include the Cobalt app shell pattern, where Cobalt packages should be installed from, and whether to configure the Cobalt npm registry. You can also pass flags to skip prompts:

```bash
npm create cobalt my-app -- --template react --scss --app-shell --configure-registry --registry-url %REGISTRY_URL% --ca-bundle %CA_BUNDLE_PATH%
```

If you configure the registry during scaffolding, the generator writes a project `.npmrc` and removes `.npmrc.example`. If you skip registry configuration, the generated project keeps `.npmrc.example` with the private registry settings you need to copy into your project or global npm configuration before installing dependencies.

For local testing with unpublished tarballs, choose local package mode:

```bash
npm create cobalt my-app -- --cobalt-source local
```

Local package mode points Cobalt dependencies at `./cobalt-packages/*.tgz` and writes copy instructions in `cobalt-packages/README.md`.

### Project-level registry configuration

Add the following lines to your project's `.npmrc` file:

```ini
@cobalt:registry=%REGISTRY_URL%
cafile=%CA_BUNDLE_PATH%
```

> **Note:** If you are having issues with the CA bundle, you can add `strict-ssl=false` to your `.npmrc` file while debugging, but this is not recommended for ongoing use.

### Global registry configuration

If you work across several Cobalt projects on the same machine, you can configure the registry globally:

```bash
npm config set @cobalt:registry %REGISTRY_URL%
```

Install the core packages:

```bash
npm install @cobalt/components @cobalt/tokens
```

Then install the wrapper for your framework, if you use one:

```bash
# Pick one, or skip this step for vanilla web components
npm install @cobalt/react
npm install @cobalt/vue
npm install @cobalt/angular
```

## Load Styles

Import the required Cobalt token stylesheet in your app's global CSS:

```css
@import '@cobalt/tokens/css';
```

You can also load Cobalt's self-hosted fonts and base styles:

```css
@import '@cobalt/tokens/css/fonts';
@import '@cobalt/tokens/css/base';
```

The token stylesheet defines the `--co-*` CSS custom properties that components need for color, spacing, typography, and other visual styles. Without it, components can render without the intended Cobalt appearance.

## Render the Success Button

Choose the example for your application stack. The milestone is the same in every framework: render a Cobalt button with the label `Success`, focus it, and confirm that the browser console logs `Success`.

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import the component module before using `<co-button>`: -->
<link rel="stylesheet" href="node_modules/@cobalt/tokens/dist/css/tokens.css" />

<co-button id="success-button" variant="success">Success</co-button>

<script type="module">
  import '@cobalt/components/button';

  document.querySelector('#success-button')?.addEventListener('co-focus', () => {
    console.log('Success');
  });
</script>
```

</template>

<template #react>

```tsx
import { CoButton } from '@cobalt/react';

export function App() {
  return (
    <CoButton variant="success" onCoFocus={() => console.log('Success')}>
      Success
    </CoButton>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoButton } from '@cobalt/vue';

function handleSuccess() {
  console.log('Success');
}
</script>

<template>
  <CoButton variant="success" @co-focus="handleSuccess">Success</CoButton>
</template>
```

> **Tip:** You can also use `co-button` directly as a custom element in Vue. Configure `isCustomElement` in your Vite config to recognize `co-*` tags.

</template>

<template #angular>

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
export class AppComponent {
  handleSuccess() {
    console.log('Success');
  }
}
```

```html
<!-- app.component.html -->
<co-button variant="success" (coFocus)="handleSuccess()">Success</co-button>
```

> **Why `CUSTOM_ELEMENTS_SCHEMA`?** Angular needs this schema to allow `<co-*>` tags in templates. Add it to any standalone component that uses Cobalt elements.

</template>

</CodeTabs>

When you use a bundler, prefer the package import path in your global CSS:

```css
@import '@cobalt/tokens/css';
```

## Confirm It Worked

Open your app in a supported browser, then open DevTools and focus the Cobalt button. You can click the button or tab to it from the keyboard.

You have completed the first Cobalt integration milestone when:

- The button renders with Cobalt styling.
- The button label reads `Success`.
- Focusing the button prints `Success` in the browser console.

If all three are true, your app can resolve Cobalt packages, load Cobalt styles, register a Cobalt component, and receive Cobalt custom events.

## Importing More Components

Cobalt uses per-component entry points for tree-shaking:

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```js
import '@cobalt/components/button';
import '@cobalt/components/icon';
```

</template>

<template #react>

```tsx
import { CoButton, CoIcon } from '@cobalt/react';
```

</template>

<template #vue>

```ts
import { CoButton, CoIcon } from '@cobalt/vue';
```

</template>

<template #angular>

```typescript
import { Component } from '@angular/core';
import { CoButton, CoIcon } from '@cobalt/angular';

@Component({
  standalone: true,
  imports: [CoButton, CoIcon],
})
export class AppComponent {}
```

</template>

</CodeTabs>

Additional web components follow the `@cobalt/components/<name>` pattern as they are published. Framework packages expose wrapper exports from their package entry point.

> [!WARNING]
> Avoid importing the barrel export (`@cobalt/components`) in production. A barrel import is a single package entry point that re-exports the whole component library. It is convenient for quick experiments, but it registers every component and increases bundle size. Prefer per-component imports like `@cobalt/components/button` in application code.

## Troubleshooting

| Problem                       | Solution                                                                                                                         |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Component not rendering       | Ensure the component import runs before the parser encounters the tag. Use `type="module"` for vanilla HTML.                     |
| Styles missing                | Verify `@cobalt/tokens/css` is imported in global CSS and not stripped by your bundler.                                          |
| Focus handler not logging     | Confirm the framework-specific `co-focus` handler is attached to the Cobalt button and that DevTools is open to the Console tab. |
| FOUC on page load             | Import component modules in your app entry point instead of lazily in templates.                                                 |
| Bundle size too large         | Use per-component imports instead of the barrel export.                                                                          |
| Angular unknown element error | Add `CUSTOM_ELEMENTS_SCHEMA` to your standalone component's `schemas` array.                                                     |

## Next Steps

- Browse the [Button documentation](/components/button) for API details, demos, variants, and accessibility notes.
- Explore the [Token Reference](/tokens/) for available CSS custom properties and package outputs.
- Read [Colors](/foundations/colors) for theming guidance and light/dark color behavior.
- Use [SCSS Integration](/foundations/scss) if your app authors styles with Sass.
- Review [Development Setup](/contributing/development-setup) for monorepo setup, local builds, and testing workflows.
- Visit [Developer Resources](/resources/developers) for tools, extensions, and debugging references.
