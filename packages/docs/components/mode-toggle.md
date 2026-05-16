# Mode Toggle

<ComponentStatus component="co-mode-toggle" />

The `co-mode-toggle` component switches Cobalt color mode between light and dark. It preserves the active theme and persists the selected mode with a namespace-aware local storage key by default.

## Interactive Demo

<ComponentDemo
  tag="co-mode-toggle"
  :defaults="{ mode: 'auto', size: 'md', persist: true, 'storage-namespace': 'cobalt' }"
  :options="{ mode: ['light', 'dark', 'auto'], size: ['xs', 'sm', 'md', 'lg', 'xl'] }"
  :booleans="['persist', 'disabled']"
  :textInputs="['label', 'storage-namespace']"
/>

## Persistence

Mode selections are persisted by default. Use `storage-namespace` to avoid collisions between apps hosted on the same domain.

```html
<co-mode-toggle storage-namespace="admin"></co-mode-toggle>
```

Instances with the same namespace read and write `admin-mode` and stay in sync after user interaction.
Initial renders and declarative `mode` updates do not overwrite storage; persistence happens when the user changes the control.

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/mode-toggle';
</script>

<co-mode-toggle storage-namespace="docs"></co-mode-toggle>

<script>
  document.querySelector('co-mode-toggle').addEventListener('co-change', (event) => {
    console.log(event.detail.mode, event.detail.resolvedMode);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoModeToggle } from '@cobalt/react';

function App() {
  return (
    <>
      <CoModeToggle storageNamespace="docs" onCoChange={(event) => console.log(event.detail)} />
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoModeToggle } from '@cobalt/vue';

function onModeChange(event) {
  console.log(event.detail);
}
</script>

<template>
  <CoModeToggle storageNamespace="docs" @co-change="onModeChange" />
</template>
```

</template>

<template #angular>

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoModeToggle } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoModeToggle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onModeChange(event: CustomEvent) {
    console.log(event.detail);
  }
}
```

```html
<co-mode-toggle [storageNamespace]="'docs'" (coChange)="onModeChange($event)"> </co-mode-toggle>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- Use the mode toggle in application headers, toolbars, and navigation bars.
- Keep persistence enabled for user-facing preferences that should survive reloads.
- Set `storage-namespace` for apps that may share a domain with other Cobalt-powered apps.

### When NOT to use

- Do not use it to switch brand themes or accent palettes.
- Do not rely on it as the only place users can discover system color mode behavior.
- Do not leave persistence enabled for transient demos unless stored state is intentional.

### Content guidelines

- Keep the default label unless the surrounding UI needs more specific wording.
- Use the same storage namespace for all mode controls in one app.

## API

### Properties

| Property           | Type                                   | Default        | Description                                                 |
| ------------------ | -------------------------------------- | -------------- | ----------------------------------------------------------- |
| `mode`             | `'light' \| 'dark' \| 'auto'`          | `'auto'`       | Selected mode preference. `auto` follows system preference. |
| `size`             | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`         | Icon size passed to internal `co-icon` elements.            |
| `persist`          | `boolean`                              | `true`         | Whether user changes are written to local storage.          |
| `storageNamespace` | `string`                               | `'cobalt'`     | Namespace used for the `${namespace}-mode` storage key.     |
| `label`            | `string`                               | `'Color mode'` | Accessible label for the control.                           |
| `disabled`         | `boolean`                              | `false`        | Prevents user interaction.                                  |

### Events

| Event       | Detail                   | Description                                                   |
| ----------- | ------------------------ | ------------------------------------------------------------- |
| `co-change` | `ModeToggleChangeDetail` | Emitted when the selected mode changes from user interaction. |

### CSS Parts

| Part     | Description                  |
| -------- | ---------------------------- |
| `base`   | The toggle wrapper.          |
| `button` | The toggle button.           |
| `icon`   | Internal `co-icon` elements. |

## Accessibility

<ClientOnly>
<A11yReport component="co-mode-toggle" />
</ClientOnly>

### Keyboard interaction

| Key                | Action                            |
| ------------------ | --------------------------------- |
| `Tab`              | Moves focus to the toggle button. |
| `Enter` or `Space` | Activates the focused button.     |

### ARIA notes

- The component renders a native `<button>` with an action label.
- Internal icons are decorative because labels are provided by the host controls.

### Manual testing checklist

- [ ] Toggle from light to dark and back with a keyboard.
- [ ] Verify auto mode follows the OS color scheme.
- [ ] Verify persisted controls reload with the saved mode.
- [ ] Verify separate `storage-namespace` values do not affect each other.

## Changelog

<ComponentChangelog component="co-mode-toggle" />
