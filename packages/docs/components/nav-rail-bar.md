# Navigation Rail Bar

The `co-nav-rail-bar` component is a layout-focused vertical navigation container for app shells and workspace navigation. It manages a single selected `co-nav-rail-item` at all times and provides arrow-key navigation between items.

## Interactive Demo

<ComponentDemo
  tag="co-nav-rail-bar"
  :defaults="{ label: 'Primary app navigation' }"
  :textInputs="['label']"
  :slotHtml="'<co-nav-rail-item value=&quot;dashboard&quot; icon=&quot;dashboard&quot; href=&quot;#dashboard&quot; selected>Dashboard</co-nav-rail-item><co-nav-rail-item value=&quot;activity&quot; icon=&quot;sync&quot; href=&quot;#activity&quot;>Activity</co-nav-rail-item><co-nav-rail-item value=&quot;analytics&quot; icon=&quot;monitoring&quot; href=&quot;#analytics&quot;>Analytics</co-nav-rail-item><co-nav-rail-item value=&quot;settings&quot; icon=&quot;settings&quot; href=&quot;#settings&quot;>Settings</co-nav-rail-item>'"
/>

## Managed Selection

`co-nav-rail-bar` owns selection across its child `co-nav-rail-item` elements:

- If no child starts selected, the first enabled item becomes selected.
- If multiple children start selected, the first selected item wins.
- Clicking or arrowing to a new item updates the selected item and emits `co-change`.

## Keyboard Navigation

<ClientOnly>
<div style="margin: 16px 0 24px;">
  <co-nav-rail-bar label="Keyboard demo">
    <co-nav-rail-item value="home" icon="home" href="#home" selected>Home</co-nav-rail-item>
    <co-nav-rail-item value="team" icon="groups" href="#team">Team</co-nav-rail-item>
    <co-nav-rail-item value="billing" icon="credit-card" href="#billing" disabled>Billing</co-nav-rail-item>
    <co-nav-rail-item value="support" icon="help" href="#support">Support</co-nav-rail-item>
  </co-nav-rail-bar>
</div>
</ClientOnly>

Use `ArrowUp`, `ArrowDown`, `Home`, and `End` to move between enabled items. Disabled items are skipped.

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/nav-rail-bar';
  import '@cobalt/components/nav-rail-item';
</script>

<co-nav-rail-bar label="Primary app navigation">
  <co-nav-rail-item value="dashboard" icon="dashboard" href="/dashboard" selected>
    Dashboard
  </co-nav-rail-item>
  <co-nav-rail-item value="activity" icon="sync" href="/activity"> Activity </co-nav-rail-item>
  <co-nav-rail-item value="analytics" icon="monitoring" href="/analytics">
    Analytics
  </co-nav-rail-item>
</co-nav-rail-bar>

<script>
  document.querySelector('co-nav-rail-bar').addEventListener('co-change', (event) => {
    console.log(event.detail.value);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoNavRailBar, CoNavRailItem } from '@cobalt/react';

function App() {
  return (
    <CoNavRailBar
      label="Primary app navigation"
      onCoChange={(event) => console.log(event.detail.value)}
    >
      <CoNavRailItem value="dashboard" icon="dashboard" href="/dashboard" selected>
        Dashboard
      </CoNavRailItem>
      <CoNavRailItem value="activity" icon="sync" href="/activity">
        Activity
      </CoNavRailItem>
      <CoNavRailItem value="analytics" icon="monitoring" href="/analytics">
        Analytics
      </CoNavRailItem>
    </CoNavRailBar>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoNavRailBar, CoNavRailItem } from '@cobalt/vue';

function onChange(event: CustomEvent) {
  console.log(event.detail.value);
}
</script>

<template>
  <CoNavRailBar label="Primary app navigation" @co-change="onChange">
    <CoNavRailItem value="dashboard" icon="dashboard" href="/dashboard" selected>
      Dashboard
    </CoNavRailItem>
    <CoNavRailItem value="activity" icon="sync" href="/activity"> Activity </CoNavRailItem>
    <CoNavRailItem value="analytics" icon="monitoring" href="/analytics"> Analytics </CoNavRailItem>
  </CoNavRailBar>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoNavRailBar, CoNavRailItem } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoNavRailBar, CoNavRailItem],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onChange(event: CustomEvent) {
    console.log(event.detail.value);
  }
}
```

```html
<!-- app.component.html -->
<co-nav-rail-bar label="Primary app navigation" (coChange)="onChange($event)">
  <co-nav-rail-item value="dashboard" icon="dashboard" href="/dashboard" selected>
    Dashboard
  </co-nav-rail-item>
  <co-nav-rail-item value="activity" icon="sync" href="/activity"> Activity </co-nav-rail-item>
  <co-nav-rail-item value="analytics" icon="monitoring" href="/analytics">
    Analytics
  </co-nav-rail-item>
</co-nav-rail-bar>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- Use for primary workspace or app-shell navigation that stays visible across views.
- Use when users need a persistent set of destinations with one active location.
- Pair with route-aware `href` values so the selected item matches the current view.

### When NOT to use

- Don’t use for temporary local tabs or step-based workflows.
- Don’t overload the bar with long labels or secondary metadata.
- Don’t use it as a generic list of actions that aren’t true destinations.

### Content guidelines

- Keep the item count focused so scanning remains fast.
- Use short destination labels and stable icon metaphors.
- Ensure exactly one item maps to the current page or route.

## API

### Properties

| Property | Type     | Default             | Description                              |
| -------- | -------- | ------------------- | ---------------------------------------- |
| `value`  | `string` | `''`                | Value of the currently selected nav item |
| `label`  | `string` | `'Side navigation'` | Accessible label for the nav landmark    |

### Events

| Event       | Detail              | Description                              |
| ----------- | ------------------- | ---------------------------------------- |
| `co-change` | `{ value: string }` | Fired when the selected nav item changes |

### Slots

| Slot | Description                        |
| ---- | ---------------------------------- |
| —    | Nested `co-nav-rail-item` children |

### CSS Parts

| Part    | Description               |
| ------- | ------------------------- |
| `base`  | The nav landmark wrapper  |
| `items` | The items stack container |

## Accessibility

<ClientOnly>
<A11yReport component="co-nav-rail-bar" />
</ClientOnly>

### Keyboard interaction

| Key         | Action                                     |
| ----------- | ------------------------------------------ |
| `Tab`       | Moves focus to the selected nav item       |
| `ArrowUp`   | Moves selection/focus to the previous item |
| `ArrowDown` | Moves selection/focus to the next item     |
| `Home`      | Moves selection/focus to the first item    |
| `End`       | Moves selection/focus to the last item     |

### ARIA notes

- The component renders a `nav` landmark and requires an accessible `label`.
- Selected link items expose `aria-current="page"` through the child `co-nav-rail-item`.
- Disabled items are skipped by keyboard navigation and removed from the tab order.

## Changelog

<ComponentChangelog component="co-nav-rail-bar" />
