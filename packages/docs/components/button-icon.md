# Button Icon

<ComponentStatus component="co-button-icon" />

The `co-button-icon` component provides a button icon with an optional text label. It supports the same variants and sizes as `co-button`, with a compact square shape when used icon-only.

## Interactive Demo

<ComponentDemo
  tag="co-button-icon"
  :defaults="{ name: 'star', variant: 'primary', size: 'md', 'label-position': 'bottom' }"
  :options="{ variant: ['primary', 'secondary', 'danger', 'success', 'ghost'], size: ['sm', 'md', 'lg', 'xl'], 'label-position': ['bottom', 'top'] }"
  :booleans="['disabled', 'circle']"
  :textInputs="['name', 'label']"
/>

## Variants

<ClientOnly>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0 24px;">
  <co-button-icon name="star" variant="primary" aria-label="Primary"></co-button-icon>
  <co-button-icon name="star" variant="secondary" aria-label="Secondary"></co-button-icon>
  <co-button-icon name="star" variant="danger" aria-label="Danger"></co-button-icon>
  <co-button-icon name="star" variant="success" aria-label="Success"></co-button-icon>
  <co-button-icon name="star" variant="ghost" aria-label="Ghost"></co-button-icon>
</div>
</ClientOnly>

| Variant     | Purpose                                            |
| ----------- | -------------------------------------------------- |
| `primary`   | Main call-to-action button icons.                  |
| `secondary` | Supporting actions alongside primary buttons.      |
| `danger`    | Destructive actions like delete or remove.         |
| `success`   | Confirmation or positive actions.                  |
| `ghost`     | Low-emphasis actions with no background or border. |

## Sizes

<ClientOnly>
<div style="display: flex; gap: 12px; align-items: center; margin: 16px 0 24px;">
  <co-button-icon name="star" size="sm" aria-label="Small"></co-button-icon>
  <co-button-icon name="star" size="md" aria-label="Medium"></co-button-icon>
  <co-button-icon name="star" size="lg" aria-label="Large"></co-button-icon>
  <co-button-icon name="star" size="xl" aria-label="Extra Large"></co-button-icon>
</div>
</ClientOnly>

## With Label

Add a visible text label below (default) or above the icon using the `label` and `label-position` properties.

<ClientOnly>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0 24px;">
  <co-button-icon name="star" label="Favorite" variant="primary"></co-button-icon>
  <co-button-icon name="delete" label="Delete" variant="danger"></co-button-icon>
  <co-button-icon name="settings" label="Settings" variant="secondary"></co-button-icon>
  <co-button-icon name="add" label="Add" variant="success"></co-button-icon>
</div>
</ClientOnly>

### Label Position

<ClientOnly>
<div style="display: flex; gap: 24px; flex-wrap: wrap; margin: 16px 0 24px;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
    <co-button-icon name="star" label="Bottom" variant="primary"></co-button-icon>
    <small>bottom (default)</small>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
    <co-button-icon name="star" label="Top" label-position="top" variant="primary"></co-button-icon>
    <small>top</small>
  </div>
</div>
</ClientOnly>

## States

<ClientOnly>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0 24px;">
  <co-button-icon name="star" aria-label="Default"></co-button-icon>
  <co-button-icon name="star" disabled aria-label="Disabled"></co-button-icon>
</div>
</ClientOnly>

## Circle

Use the `circle` attribute for a fully rounded icon-only button. The `label` property is ignored when `circle` is set — use `aria-label` for accessibility.

<ClientOnly>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0 24px;">
  <co-button-icon name="star" circle variant="primary" aria-label="Primary"></co-button-icon>
  <co-button-icon name="star" circle variant="secondary" aria-label="Secondary"></co-button-icon>
  <co-button-icon name="star" circle variant="danger" aria-label="Danger"></co-button-icon>
  <co-button-icon name="star" circle variant="success" aria-label="Success"></co-button-icon>
  <co-button-icon name="star" circle variant="ghost" aria-label="Ghost"></co-button-icon>
</div>
</ClientOnly>

### Circle Sizes

<ClientOnly>
<div style="display: flex; gap: 12px; align-items: center; margin: 16px 0 24px;">
  <co-button-icon name="star" circle size="sm" aria-label="Small"></co-button-icon>
  <co-button-icon name="star" circle size="md" aria-label="Medium"></co-button-icon>
  <co-button-icon name="star" circle size="lg" aria-label="Large"></co-button-icon>
  <co-button-icon name="star" circle size="xl" aria-label="Extra Large"></co-button-icon>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/button-icon';
</script>

<!-- Icon-only (requires aria-label) -->
<co-button-icon name="star" aria-label="Favorite"></co-button-icon>

<!-- With visible label -->
<co-button-icon name="delete" label="Delete" variant="danger"></co-button-icon>

<!-- Label on top -->
<co-button-icon name="settings" label="Settings" label-position="top"></co-button-icon>

<!-- Disabled -->
<co-button-icon name="star" aria-label="Favorite" disabled></co-button-icon>
```

</template>

<template #react>

```tsx
import { CoButtonIcon } from '@cobalt/react';

function App() {
  return (
    <>
      {/* Icon-only */}
      <CoButtonIcon name="star" aria-label="Favorite" />

      {/* With label */}
      <CoButtonIcon name="delete" label="Delete" variant="danger" />

      {/* Label on top */}
      <CoButtonIcon name="settings" label="Settings" labelPosition="top" />

      {/* Events */}
      <CoButtonIcon name="star" aria-label="Favorite" onCoFocus={() => console.log('focused')} />
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoButtonIcon } from '@cobalt/vue';
</script>

<template>
  <!-- Icon-only -->
  <CoButtonIcon name="star" aria-label="Favorite" />

  <!-- With label -->
  <CoButtonIcon name="delete" label="Delete" variant="danger" />

  <!-- Label on top -->
  <CoButtonIcon name="settings" label="Settings" label-position="top" />

  <!-- Events -->
  <CoButtonIcon name="star" aria-label="Favorite" @co-focus="onFocus" />
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoButtonIcon } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoButtonIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onFocus(event: CustomEvent) {
    console.log('focused');
  }
}
```

```html
<!-- app.component.html -->

<!-- Icon-only -->
<co-button-icon name="star" aria-label="Favorite"></co-button-icon>

<!-- With label -->
<co-button-icon name="delete" label="Delete" variant="danger"></co-button-icon>

<!-- Label on top -->
<co-button-icon name="settings" label="Settings" labelPosition="top"></co-button-icon>

<!-- Events -->
<co-button-icon name="star" aria-label="Favorite" (coFocus)="onFocus($event)"></co-button-icon>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Toolbar actions** — compact button icons in toolbars or action bars
- **Repeated row actions** — edit, delete, or expand actions in lists or tables
- **Toggle controls** — favorite, bookmark, or pin actions
- **Space-constrained UI** — when a full text button would take too much space

### When NOT to use

- **Primary page actions** — use `co-button` with a text label for main calls-to-action
- **Actions that need explanation** — if the icon meaning isn't universally clear, use a labeled button
- **Navigation** — use links or navigation components instead

### Content guidelines

- Always provide `aria-label` when using icon-only buttons (no visible `label`)
- Choose universally recognizable icons — "delete" (trash), "star" (favorite), "settings" (gear)
- Keep visible labels to 1-2 words maximum
- Use `label-position="top"` sparingly — bottom labels are more conventional

## API

### Properties

| Property         | Type                                                           | Default     | Description                                |
| ---------------- | -------------------------------------------------------------- | ----------- | ------------------------------------------ |
| `name`           | `string`                                                       | `''`        | Icon name passed to internal co-icon       |
| `variant`        | `'primary' \| 'secondary' \| 'danger' \| 'success' \| 'ghost'` | `'primary'` | Visual style of the button                 |
| `size`           | `'sm' \| 'md' \| 'lg' \| 'xl'`                                 | `'md'`      | Controls dimensions and icon size          |
| `label`          | `string`                                                       | —           | Optional visible text label                |
| `label-position` | `'top' \| 'bottom'`                                            | `'bottom'`  | Position of the label relative to the icon |
| `circle`         | `boolean`                                                      | `false`     | Renders as a circle; label is ignored      |
| `disabled`       | `boolean`                                                      | `false`     | Prevents interaction                       |

### Events

| Event      | Detail | Description                          |
| ---------- | ------ | ------------------------------------ |
| `co-focus` | —      | Fired when the button receives focus |
| `co-blur`  | —      | Fired when the button loses focus    |

### CSS Parts

| Part    | Description               |
| ------- | ------------------------- |
| `base`  | The button wrapper        |
| `icon`  | The co-icon element       |
| `label` | The label text (if shown) |

## Accessibility

<ClientOnly>
<A11yReport component="co-button-icon" />
</ClientOnly>

### Keyboard interaction

| Key               | Action                                        |
| ----------------- | --------------------------------------------- |
| `Enter` / `Space` | Activates the button                          |
| `Tab`             | Moves focus to the next focusable element     |
| `Shift+Tab`       | Moves focus to the previous focusable element |

### ARIA notes

- When no visible `label` is provided, you **must** set `aria-label` on the host element to provide an accessible name.
- When a visible `label` is set, it provides the accessible name automatically.
- The internal `co-icon` is marked `aria-hidden="true"` since it is decorative — the button's accessible name comes from the label or `aria-label`.
- When `disabled` is set, `aria-disabled="true"` is applied automatically by Lion.

## Changelog

<ComponentChangelog component="co-button-icon" />
