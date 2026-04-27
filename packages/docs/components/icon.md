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

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/icon';
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
