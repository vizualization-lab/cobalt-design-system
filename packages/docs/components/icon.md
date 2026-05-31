# Icon

<ComponentStatus component="co-icon" />

The `co-icon` component renders Material Symbols icons as inline SVGs. It supports a fill toggle, 5 sizes, and built-in accessibility for both decorative and informative use cases.

## Interactive Demo

<ComponentDemo
  tag="co-icon"
  :defaults="{ name: 'home', size: 'md', fill: false }"
  :options="{ size: ['xs', 'sm', 'md', 'lg', 'xl'] }"
  :booleans="['fill', 'animated']"
  :textInputs="['name', 'label']"
/>

## Fill Toggle

Set the `fill` boolean property to render the filled version of any icon. Use filled icons for active or selected states.

<ClientOnly>
<div style="display: flex; gap: 16px; align-items: center; margin: 16px 0 24px;">
  <co-icon name="home" size="lg"></co-icon>
  <co-icon name="home" size="lg" fill></co-icon>
  <co-icon name="star" size="lg"></co-icon>
  <co-icon name="star" size="lg" fill></co-icon>
</div>
</ClientOnly>

## Sizes

<ClientOnly>
<div style="display: flex; gap: 16px; align-items: center; margin: 16px 0 24px;">
  <co-icon name="star" size="xs"></co-icon>
  <co-icon name="star" size="sm"></co-icon>
  <co-icon name="star" size="md"></co-icon>
  <co-icon name="star" size="lg"></co-icon>
  <co-icon name="star" size="xl"></co-icon>
</div>
</ClientOnly>

| Size | Token                 | Pixels | Typical use                        |
| ---- | --------------------- | ------ | ---------------------------------- |
| `xs` | `--co-sizing-icon-xs` | 16 px  | Inline indicators, badges, tags    |
| `sm` | `--co-sizing-icon-sm` | 20 px  | Inside buttons, form controls      |
| `md` | `--co-sizing-icon-md` | 24 px  | Standalone icons, navigation items |
| `lg` | `--co-sizing-icon-lg` | 32 px  | Empty states, feature highlights   |
| `xl` | `--co-sizing-icon-xl` | 48 px  | Hero sections, prominent actions   |

## Registering icons

`co-icon` resolves names against a runtime registry that is empty by default. You opt each icon in with a per-icon import — only the icons your app actually imports are bundled. A small starter app typically ships ~10 KB of icon code rather than pulling in the entire ~8 MB library.

### Three ways to import an icon

```ts
// 1. Side-effect — registers the icon with no value binding.
//    Use this when you only reference the icon by name in templates.
import '@cobalt/icons/home';
import '@cobalt/icons/arrow-forward';

<co-icon name="home"></co-icon>
<co-icon name="arrow-forward"></co-icon>
```

```ts
// 2. Named (camelCase) — registers the icon and exposes the descriptor as a
//    value you can pass via the `icon` JS property. Same module as the
//    side-effect form; the camelCase identifier is the JS-safe form of the
//    canonical kebab-case name.
import { home } from '@cobalt/icons/home';
import { arrowForward } from '@cobalt/icons/arrow-forward';

<CoIcon icon={home} />
<CoIcon icon={arrowForward} />
```

```ts
// 3. Default — same descriptor, but you pick the local name at the import
//    site. Useful when the camelCase form is awkward, or when you want to
//    alias to something more readable in context.
import home from '@cobalt/icons/home';
import myArrow from '@cobalt/icons/arrow-forward';

<CoIcon icon={home} />
<CoIcon icon={myArrow} />
```

All three forms run the same registration side-effect, so once you've imported an icon any way, `<co-icon name="…">` finds it too.

### Naming convention

The canonical icon name is **kebab-case** and appears everywhere except the JavaScript named-export binding:

| Where it appears                | Form       | Example                            |
| ------------------------------- | ---------- | ---------------------------------- |
| File path / import specifier    | kebab-case | `@cobalt/icons/arrow-forward`      |
| `<co-icon name="…">` attribute  | kebab-case | `<co-icon name="arrow-forward">`   |
| Descriptor's `name` field       | kebab-case | `{ name: 'arrow-forward', … }`     |
| Registry key                    | kebab-case | `getIcon('arrow-forward')`         |
| **JS named export (camelCase)** | camelCase  | `import { arrowForward } from '…'` |

A few extra mappings for the surprising cases:

| Kebab name         | Named export         | Notes                              |
| ------------------ | -------------------- | ---------------------------------- |
| `home`             | `home`               | Single word — no change            |
| `arrow-forward`    | `arrowForward`       |                                    |
| `home-fill`        | `homeFill`           | The fill variant is its own module |
| `co-logo`          | `coLogo`             | Custom Cobalt icons                |
| `10k`, `360`       | `_10k`, `_360`       | Digit-leading names get `_` prefix |
| `delete`, `switch` | `_delete`, `_switch` | Reserved words get `_` prefix      |

### Top-level paths

`@cobalt/icons` exposes a handful of non-per-icon modules for runtime, listing, and metadata:

| Import path                     | When to use                                                               |
| ------------------------------- | ------------------------------------------------------------------------- |
| `@cobalt/icons/<name>`          | Register and/or import an individual icon (the common case)               |
| `@cobalt/icons/animated/<name>` | Register the animated variant of an icon (only 3 today)                   |
| `@cobalt/icons/registry`        | `getIcon`, `getAnimatedIcon`, `hasIcon`, `registerIcon` — for power users |
| `@cobalt/icons/manifest`        | Cheap arrays/Sets of names (`iconNames`, `customIconNames`, …) — small    |
| `@cobalt/icons/metadata`        | Categories, search terms, and curated descriptions — **large**, lazy-load |
| `@cobalt/icons/all`             | Side-effect import that registers every icon and animated variant         |

### When to use `@cobalt/icons/all`

`@cobalt/icons/all` registers every icon in the library in a single side-effect import — convenient but expensive (~8 MB unminified). Reach for it only when:

- **Prototyping** and you don't yet know which icons will stick.
- **Storybook, workbench, or documentation** demos render arbitrary icons by name.
- **Icon-picker UIs** browse the full set.

Production application code should always use per-icon imports.

### Where to register icons in your app

There are two common places to put per-icon imports — register icons inside the component that renders them, or list them in a single top-level file. Both produce the same bundle; the choice is about how you want to organize ownership.

**Per-component (the modular default).** Put the imports at the top of the file that uses the icon:

```ts
// src/components/save-button.tsx
import '@cobalt/icons/save';

export function SaveButton() {
  return <CoButton><CoIcon slot="prefix" name="save" /> Save</CoButton>;
}
```

This is the recommended pattern for most application code. Each component file is self-contained: drop it into another project and its icon dependencies travel with it. Delete the component and its icon imports go with it resulting in no orphaned entries in a central manifest. Reading the imports at the top of the file tells you exactly what the component renders.

ES modules are singletons, so importing the same icon from many files costs nothing extra. The module evaluates once, `registerIcon` runs once, and the bundler includes the SVG content once regardless of how many places reference it.

**Central `src/icons.ts` (the right tool for a few specific cases).** A single barrel file that the entry point imports once:

```ts
// src/icons.ts
import '@cobalt/icons/home';
import '@cobalt/icons/settings';
import '@cobalt/icons/dashboard';

// src/main.tsx (or main.ts)
import './icons';
```

Prefer this pattern when:

- **Icons come from runtime/config values rather than a hardcoded source.** A nav drawer driven by a config object (such as `{ icon: 'dashboard', label: 'Reports' }` ) has no single component file that "owns" each name. Registering the icons alongside the config (or in a sibling `icons.ts`) is more honest than scattering imports across files that never literally type the name.
- **You want a single audit point.** Brand or design-system teams that need to police icon usage (limit which icons are allowed, run an annual "is this still used?" review, or gate adoption of new icons through a PR template) benefit from one file to grep, lint, or code-review.
- **The app is small enough that a single file is genuinely clearer** — a one-screen tool, an internal admin page, a demo. The modularity argument is weaker when there's nothing to move the component into.

You can mix both patterns in the same app: register most icons next to their components, and use `src/icons.ts` only for the dynamic / config-driven set. Tree-shaking and ES module deduplication keep the bundle identical regardless of where the imports live.

### Bundle impact

A minimal React app rendering a `<CoAppShell>` with a logo and a couple of nav icons:

| Setup                            | JS bundle (minified) |
| -------------------------------- | -------------------- |
| Old: monolithic `@cobalt/icons`  | ~8.2 MB              |
| New: per-icon imports (~5 icons) | ~250 KB              |

Components that need an icon internally (e.g. `<co-button>`'s loading spinner uses `progress-activity`) self-register that icon when you import the component meaning you don't need to add it to any registration file.

### Components that swap to the filled variant

A few components render the filled version of an icon when a state flips — for example, `<co-nav-rail-item>` shows the `-fill` variant of its `icon` prop when `selected`. The component can't know which icons you'll pass it, so register both modules wherever you register the outline:

```ts
// register alongside the rest of your nav icons (per-component or in src/icons.ts)
import '@cobalt/icons/home';
import '@cobalt/icons/home-fill'; // for the selected state
import '@cobalt/icons/dashboard';
import '@cobalt/icons/dashboard-fill'; // for the selected state
```

Components that hardcode their own icon names (checkbox, radio, option, etc.) handle their own fill variants so you don't need to register those yourself.

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/icon';
  // Register each icon used below. See "Registering icons" above.
  import '@cobalt/icons/arrow-forward';
  import '@cobalt/icons/star';
  import '@cobalt/icons/check';
  import '@cobalt/icons/warning';
  import '@cobalt/icons/save';
</script>

<!-- Basic usage -->
<co-icon name="arrow-forward"></co-icon>

<!-- Filled icon -->
<co-icon name="star" fill></co-icon>

<!-- Different sizes -->
<co-icon name="check" size="xs"></co-icon>
<co-icon name="check" size="sm"></co-icon>
<co-icon name="check" size="md"></co-icon>
<co-icon name="check" size="lg"></co-icon>

<!-- Informative icon with accessible label -->
<co-icon name="warning" label="Warning"></co-icon>

<!-- Inside a button -->
<co-button variant="primary">
  <co-icon slot="prefix" name="save" size="sm"></co-icon>
  Save changes
</co-button>
```

</template>

<template #react>

```tsx
import { CoIcon } from '@cobalt/react';
import { CoButton } from '@cobalt/react';
// Register each icon used below. See "Registering icons" above.
import '@cobalt/icons/arrow-forward';
import '@cobalt/icons/star';
import '@cobalt/icons/check';
import '@cobalt/icons/warning';
import '@cobalt/icons/save';

function App() {
  return (
    <>
      {/* Basic */}
      <CoIcon name="arrow-forward" />

      {/* Filled */}
      <CoIcon name="star" fill />

      {/* Different sizes */}
      <CoIcon name="check" size="xs" />
      <CoIcon name="check" size="lg" />

      {/* Informative */}
      <CoIcon name="warning" label="Warning" />

      {/* Inside a button */}
      <CoButton variant="primary">
        <CoIcon slot="prefix" name="save" size="sm" />
        Save changes
      </CoButton>
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoIcon, CoButton } from '@cobalt/vue';
// Register each icon used below. See "Registering icons" above.
import '@cobalt/icons/arrow-forward';
import '@cobalt/icons/star';
import '@cobalt/icons/check';
import '@cobalt/icons/warning';
import '@cobalt/icons/save';
</script>

<template>
  <!-- Basic -->
  <CoIcon name="arrow-forward" />

  <!-- Filled -->
  <CoIcon name="star" fill />

  <!-- Different sizes -->
  <CoIcon name="check" size="xs" />
  <CoIcon name="check" size="lg" />

  <!-- Informative -->
  <CoIcon name="warning" label="Warning" />

  <!-- Inside a button -->
  <CoButton variant="primary">
    <CoIcon slot="prefix" name="save" size="sm" />
    Save changes
  </CoButton>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoIcon } from '@cobalt/angular';
import { CoButton } from '@cobalt/angular';
// Register each icon used below. See "Registering icons" above.
import '@cobalt/icons/arrow-forward';
import '@cobalt/icons/star';
import '@cobalt/icons/check';
import '@cobalt/icons/warning';
import '@cobalt/icons/save';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoIcon, CoButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<!-- app.component.html -->

<!-- Basic -->
<co-icon name="arrow-forward"></co-icon>

<!-- Filled -->
<co-icon name="star" fill></co-icon>

<!-- Different sizes -->
<co-icon name="check" size="xs"></co-icon>
<co-icon name="check" size="lg"></co-icon>

<!-- Informative -->
<co-icon name="warning" label="Warning"></co-icon>

<!-- Inside a button -->
<co-button variant="primary">
  <co-icon slot="prefix" name="save" size="sm"></co-icon>
  Save changes
</co-button>
```

</template>

</CodeTabs>

## Animated Icons

A curated set of icons support microanimations. Set the `animated` boolean to activate the animated variant. Icons without an animated variant simply render their static version.

<ClientOnly>
<div style="display: flex; gap: 24px; align-items: center; margin: 16px 0 24px;">
  <co-icon name="progress-activity" size="lg" animated></co-icon>
</div>
</ClientOnly>

```html
<!-- Progress spinner -->
<co-icon name="progress-activity" animated></co-icon>
```

### Available animated icons

| Icon name           | Continuous | Animation description |
| ------------------- | ---------- | --------------------- |
| `check-circle`      | no         | checkmark scales in   |
| `notifications`     | no         | bell rings            |
| `progress-activity` | yes        | spinner rotates       |

> **NOTE:** Animations automatically respect `prefers-reduced-motion: reduce` — all animations are disabled when the user's OS is configured to reduce motion.

### Replaying animations

One-shot animations, such as `bell-ring`, or `check-circle`, play once on mount. Call `replay()` to restart them at any time which is useful for reacting to events like incoming notifications.

<ClientOnly>
<div style="display: flex; gap: 24px; align-items: center; margin: 16px 0 24px;">
  <co-icon id="demo-bell" name="notifications" size="lg" animated></co-icon>
  <co-icon id="demo-check" name="check-circle" size="lg" animated></co-icon>
  <co-button  size="sm" onclick="document.getElementById('demo-bell').replay(); document.getElementById('demo-check').replay();">
    Replay
  </co-button>
</div>
</ClientOnly>

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```js
// Trigger or restart animation on an event
const icon = document.querySelector('co-icon[name="notifications"]');
icon.replay();

// Also works if animated wasn't set yet — replay() enables it automatically
icon.replay(); // sets animated = true and plays the animation

// Stop animation
icon.animated = false;
```

</template>

<template #react>

```tsx
import { useRef } from 'react';
import { CoIcon } from '@cobalt/react';

type CoIconElement = HTMLElement & { replay(): void; animated: boolean };

function NotificationBell() {
  const bellRef = useRef<CoIconElement>(null);

  function handleNewMessage() {
    // Trigger or restart animation on an event
    bellRef.current?.replay();
  }

  function stopAnimation() {
    if (bellRef.current) bellRef.current.animated = false;
  }

  return (
    <>
      <CoIcon ref={bellRef} name="notifications" animated />
      <button onClick={handleNewMessage}>New message</button>
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { ref } from 'vue';
import { CoIcon } from '@cobalt/vue';

const bellRef = ref(null);

function handleNewMessage() {
  // Trigger or restart animation on an event
  bellRef.value?.replay();
}

function stopAnimation() {
  if (bellRef.value) bellRef.value.animated = false;
}
</script>

<template>
  <CoIcon ref="bellRef" name="notifications" animated />
  <button @click="handleNewMessage">New message</button>
</template>
```

</template>

<template #angular>

```typescript
// notifications.component.ts
import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoIcon } from '@cobalt/angular';

type CoIconElement = HTMLElement & { replay(): void; animated: boolean };

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CoIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-icon #bell name="notifications" animated></co-icon>
    <button (click)="handleNewMessage()">New message</button>
  `,
})
export class NotificationsComponent {
  @ViewChild('bell') bell!: ElementRef<CoIconElement>;

  handleNewMessage() {
    // Trigger or restart animation on an event
    this.bell.nativeElement.replay();
  }

  stopAnimation() {
    this.bell.nativeElement.animated = false;
  }
}
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Navigation items** — icons next to text labels to aid scanning
- **Button prefixes/suffixes** — action cues alongside button text
- **Status indicators** — success, warning, error states with labels
- **Empty states** — large decorative icons to illustrate the situation

### When NOT to use

- **Icon-only buttons without labels** — always set `label` or use `aria-label` on the parent
- **Excessive icon use** — too many icons create visual noise; use sparingly
- **Custom graphics** — for illustrations or logos, use `<img>` or inline SVG directly

### Content guidelines

- Use `fill` for active/selected states to provide visual feedback
- Stick to one size per context — don't mix `xs` and `md` in the same row
- Always provide a `label` for icon-only controls

## API

### Properties

| Property   | Type                                   | Default     | Description                                    |
| ---------- | -------------------------------------- | ----------- | ---------------------------------------------- |
| `name`     | `string`                               | `''`        | Icon name in kebab-case (e.g. `arrow-forward`) |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`      | Icon size                                      |
| `fill`     | `boolean`                              | `false`     | Whether to render the filled version           |
| `animated` | `boolean`                              | `false`     | Use animated variant if available              |
| `label`    | `string \| undefined`                  | `undefined` | Accessible label — makes the icon informative  |

### Methods

| Method     | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `replay()` | Restart the animation from the beginning. Enables `animated` if not set. |

### CSS Parts

| Part  | Description           |
| ----- | --------------------- |
| `svg` | The inner SVG element |

## Accessibility

<ClientOnly>
<A11yReport component="co-icon" />
</ClientOnly>

### Decorative icons

By default, `co-icon` sets `aria-hidden="true"` and `role="presentation"`. Use this when the icon is next to visible text:

```html
<co-button>
  <co-icon slot="prefix" name="delete"></co-icon>
  Delete
</co-button>
```

### Informative icons

When the icon conveys meaning on its own, set the `label` property:

```html
<co-icon name="warning" label="Warning: unsaved changes"></co-icon>
```

This sets `role="img"` and `aria-label` on the SVG, making it accessible to screen readers.

| Scenario                   | Approach                                  |
| -------------------------- | ----------------------------------------- |
| Icon next to visible label | No `label` needed (decorative by default) |
| Icon-only button           | Set `aria-label` on the button            |
| Icon conveying status      | Set `label` on `co-icon`                  |

## Changelog

<ComponentChangelog component="co-icon" />
