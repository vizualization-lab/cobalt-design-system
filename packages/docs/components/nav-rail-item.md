# Navigation Rail Item

The `co-nav-rail-item` component is the vertically stacked building block used inside `co-nav-rail-bar`. It renders an icon above a short label and can behave as either a link destination or a managed navigation action.

## Interactive Demo

<ComponentDemo
  tag="co-nav-rail-item"
  label="Dashboard"
  :defaults="{ value: 'dashboard', icon: 'dashboard', label: 'Dashboard' }"
  :booleans="['selected', 'disabled']"
  :textInputs="['value', 'icon', 'href', 'label']"
/>

## States

<ClientOnly>
<div style="display: flex; gap: 24px; flex-wrap: wrap; margin: 16px 0 24px;">
  <div style="width: 160px;">
    <co-nav-rail-item value="dashboard" icon="dashboard" selected>Dashboard</co-nav-rail-item>
  </div>
  <div style="width: 160px;">
    <co-nav-rail-item value="activity" icon="sync">Activity</co-nav-rail-item>
  </div>
  <div style="width: 160px;">
    <co-nav-rail-item value="settings" icon="settings" disabled>Settings</co-nav-rail-item>
  </div>
</div>
</ClientOnly>

## Links

Use `href` when the item represents route navigation. The selected item exposes current-page semantics through `aria-current="page"`.

<ClientOnly>
<div style="display: flex; gap: 24px; flex-wrap: wrap; margin: 16px 0 24px;">
  <div style="width: 160px;">
    <co-nav-rail-item value="dashboard" icon="dashboard" href="/dashboard" selected>Dashboard</co-nav-rail-item>
  </div>
  <div style="width: 160px;">
    <co-nav-rail-item value="analytics" icon="monitoring" href="/analytics">Analytics</co-nav-rail-item>
  </div>
</div>
</ClientOnly>

## Slots

### Custom icon

<ClientOnly>
<div style="width: 160px; margin: 16px 0 24px;">
  <co-nav-rail-item value="reports">
    <co-icon slot="icon" name="progress-activity" animated></co-icon>
    Reports
  </co-nav-rail-item>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/nav-rail-item';
</script>

<!-- Inside a side nav -->
<co-nav-rail-item value="dashboard" icon="dashboard" href="/dashboard" selected>
  Dashboard
</co-nav-rail-item>

<!-- Custom icon -->
<co-nav-rail-item value="reports" href="/reports">
  <co-icon slot="icon" name="progress-activity" animated></co-icon>
  Reports
</co-nav-rail-item>
```

</template>

<template #react>

```tsx
import { CoNavRailItem, CoIcon } from '@cobalt/react';

function App() {
  return (
    <>
      <CoNavRailItem value="dashboard" icon="dashboard" href="/dashboard" selected>
        Dashboard
      </CoNavRailItem>

      <CoNavRailItem value="reports" href="/reports">
        <CoIcon slot="icon" name="progress-activity" animated />
        Reports
      </CoNavRailItem>
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoNavRailItem, CoIcon } from '@cobalt/vue';
</script>

<template>
  <CoNavRailItem value="dashboard" icon="dashboard" href="/dashboard" selected>
    Dashboard
  </CoNavRailItem>

  <CoNavRailItem value="reports" href="/reports">
    <CoIcon slot="icon" name="progress-activity" animated />
    Reports
  </CoNavRailItem>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoNavRailItem, CoIcon } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoNavRailItem, CoIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<!-- app.component.html -->
<co-nav-rail-item value="dashboard" icon="dashboard" href="/dashboard" selected>
  Dashboard
</co-nav-rail-item>

<co-nav-rail-item value="reports" href="/reports">
  <co-icon slot="icon" name="progress-activity" animated></co-icon>
  Reports
</co-nav-rail-item>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- Use inside `co-nav-rail-bar` for app-level vertical navigation.
- Keep labels short so the icon and text read as a single destination.
- Use `href` when the item maps to a real route or page.

### When NOT to use

- Don’t use as a generic action button outside a navigation context.
- Don’t use long labels or multi-line descriptions inside the item.
- Don’t rely on icon meaning alone without a visible label.

### Content guidelines

- Use concise destination labels like “Dashboard”, “Reports”, or “Settings”.
- Pair each label with a recognizable icon that reinforces the destination.
- Mark only the current destination as `selected`.

## API

### Properties

| Property   | Type                                         | Default | Description                                     |
| ---------- | -------------------------------------------- | ------- | ----------------------------------------------- |
| `value`    | `string`                                     | `''`    | Stable value used by the parent navigation      |
| `icon`     | `string`                                     | `''`    | Icon name passed to the internal `co-icon`      |
| `href`     | `string`                                     | —       | Optional link destination                       |
| `target`   | `'_blank' \| '_self' \| '_parent' \| '_top'` | —       | Target for link navigation                      |
| `label`    | `string`                                     | —       | Fallback label when no default slot is provided |
| `selected` | `boolean`                                    | `false` | Reflects the selected/current state             |
| `disabled` | `boolean`                                    | `false` | Prevents interaction and selection              |

### Slots

| Slot   | Description                        |
| ------ | ---------------------------------- |
| —      | Label content shown below the icon |
| `icon` | Optional custom icon content       |

### CSS Parts

| Part      | Description                              |
| --------- | ---------------------------------------- |
| `control` | The interactive anchor or button element |
| `icon`    | The icon container                       |
| `label`   | The label container                      |

## Accessibility

<ClientOnly>
<A11yReport component="co-nav-rail-item" />
</ClientOnly>

### Keyboard interaction

| Key               | Action                               |
| ----------------- | ------------------------------------ |
| `Tab`             | Moves focus to the selected nav item |
| `Enter` / `Space` | Activates the focused item           |

### ARIA notes

- When `href` is provided, the selected item sets `aria-current="page"` on the internal link.
- The visible label provides the accessible name for the item.
- Disabled items are removed from keyboard focus and cannot be selected by the parent navigation.

## Changelog

<ComponentChangelog component="co-nav-rail-item" />
