# Navigation Drawer

<ComponentStatus component="co-nav-drawer" />

The `co-nav-drawer`, `co-nav-drawer-group`, `co-nav-drawer-item`, and `co-nav-separator` components provide a collapsible side navigation menu. The drawer manages selection state across nested items and supports keyboard navigation.

## Interactive Demo

<ComponentDemo
  tag="co-nav-drawer"
  :defaults="{ label: 'Main navigation' }"
  :booleans="['open']"
  :textInputs="['value']"
  :slotHtml="'<co-nav-drawer-item value=&quot;dashboard&quot; icon=&quot;dashboard&quot; selected>Dashboard</co-nav-drawer-item><co-nav-drawer-item value=&quot;activity&quot; icon=&quot;sync&quot;>Activity</co-nav-drawer-item><co-nav-drawer-item value=&quot;analytics&quot; icon=&quot;monitoring&quot;>Analytics</co-nav-drawer-item><co-nav-separator></co-nav-separator><co-nav-drawer-item value=&quot;settings&quot; icon=&quot;settings&quot;>Settings</co-nav-drawer-item>'"
/>

## Sections with Separators

Use `co-nav-separator` to visually divide groups of items. Add headings as plain HTML elements between separators.

<ClientOnly>
<div style="height: 400px; position: relative; border: 1px solid var(--co-color-border-default); border-radius: 8px; overflow: hidden; margin: 16px 0 24px;">
  <co-nav-drawer label="App navigation">
    <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 600; padding: 0 4px;">Workspace</h3>
    <co-nav-drawer-item value="projects" icon="folder" selected>Projects</co-nav-drawer-item>
    <co-nav-drawer-item value="tasks" icon="task-alt">Tasks</co-nav-drawer-item>
    <co-nav-drawer-item value="calendar" icon="calendar-today">Calendar</co-nav-drawer-item>
    <co-nav-separator></co-nav-separator>
    <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 600; padding: 0 4px;">Team</h3>
    <co-nav-drawer-item value="members" icon="groups">Members</co-nav-drawer-item>
    <co-nav-drawer-item value="channels" icon="forum">Channels</co-nav-drawer-item>
    <co-nav-separator></co-nav-separator>
    <co-nav-drawer-item value="help" icon="help">Help & Support</co-nav-drawer-item>
  </co-nav-drawer>
</div>
</ClientOnly>

## Disabled Items

<ClientOnly>
<div style="height: 250px; position: relative; border: 1px solid var(--co-color-border-default); border-radius: 8px; overflow: hidden; margin: 16px 0 24px;">
  <co-nav-drawer label="Navigation">
    <co-nav-drawer-item value="home" icon="home" selected>Home</co-nav-drawer-item>
    <co-nav-drawer-item value="billing" icon="credit-card" disabled>Billing (locked)</co-nav-drawer-item>
    <co-nav-drawer-item value="settings" icon="settings">Settings</co-nav-drawer-item>
  </co-nav-drawer>
</div>
</ClientOnly>

## Nested Groups

Use `co-nav-drawer-group` for collapsible sections inside a drawer. Groups are not selectable destinations; place `co-nav-drawer-item` children inside the group for actual navigation links.

<ClientOnly>
<div style="height: 320px; position: relative; border: 1px solid var(--co-color-border-default); border-radius: 8px; overflow: hidden; margin: 16px 0 24px;">
  <co-nav-drawer label="Documentation navigation" value="nav-drawer">
    <co-nav-drawer-group label="Layout" value="layout">
      <co-nav-drawer-item value="app-shell">App Shell</co-nav-drawer-item>
      <co-nav-drawer-item value="card">Card</co-nav-drawer-item>
    </co-nav-drawer-group>
    <co-nav-drawer-group label="Navigation" value="navigation" open>
      <co-nav-drawer-item value="nav-drawer" selected>Navigation Drawer</co-nav-drawer-item>
      <co-nav-drawer-item value="nav-rail">Navigation Rail</co-nav-drawer-item>
    </co-nav-drawer-group>
  </co-nav-drawer>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<script type="module">
  import '@cobalt/components/nav-drawer';
  import '@cobalt/components/nav-drawer-group';
  import '@cobalt/components/nav-drawer-item';
  import '@cobalt/components/nav-separator';
</script>

<co-nav-drawer label="Main navigation">
  <h3>Menu</h3>
  <co-nav-drawer-item value="dashboard" icon="dashboard" selected>Dashboard</co-nav-drawer-item>
  <co-nav-drawer-item value="activity" icon="sync">Activity</co-nav-drawer-item>
  <co-nav-drawer-group label="Reports" value="reports">
    <co-nav-drawer-item value="weekly">Weekly</co-nav-drawer-item>
    <co-nav-drawer-item value="monthly">Monthly</co-nav-drawer-item>
  </co-nav-drawer-group>
  <co-nav-separator></co-nav-separator>
  <co-nav-drawer-item value="settings" icon="settings">Settings</co-nav-drawer-item>
</co-nav-drawer>

<script>
  document.querySelector('co-nav-drawer').addEventListener('co-change', (e) => {
    console.log('Selected:', e.detail.value);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoNavDrawer, CoNavDrawerGroup, CoNavDrawerItem, CoNavSeparator } from '@cobalt/react';

function App() {
  return (
    <CoNavDrawer label="Main navigation" onCoChange={(e) => console.log(e.detail.value)}>
      <h3>Menu</h3>
      <CoNavDrawerItem value="dashboard" icon="dashboard" selected>
        Dashboard
      </CoNavDrawerItem>
      <CoNavDrawerItem value="activity" icon="sync">
        Activity
      </CoNavDrawerItem>
      <CoNavDrawerGroup label="Reports" value="reports">
        <CoNavDrawerItem value="weekly">Weekly</CoNavDrawerItem>
        <CoNavDrawerItem value="monthly">Monthly</CoNavDrawerItem>
      </CoNavDrawerGroup>
      <CoNavSeparator />
      <CoNavDrawerItem value="settings" icon="settings">
        Settings
      </CoNavDrawerItem>
    </CoNavDrawer>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoNavDrawer, CoNavDrawerGroup, CoNavDrawerItem, CoNavSeparator } from '@cobalt/vue';
</script>

<template>
  <CoNavDrawer label="Main navigation" @co-change="(e) => console.log(e.detail.value)">
    <h3>Menu</h3>
    <CoNavDrawerItem value="dashboard" icon="dashboard" selected>Dashboard</CoNavDrawerItem>
    <CoNavDrawerItem value="activity" icon="sync">Activity</CoNavDrawerItem>
    <CoNavDrawerGroup label="Reports" value="reports">
      <CoNavDrawerItem value="weekly">Weekly</CoNavDrawerItem>
      <CoNavDrawerItem value="monthly">Monthly</CoNavDrawerItem>
    </CoNavDrawerGroup>
    <CoNavSeparator />
    <CoNavDrawerItem value="settings" icon="settings">Settings</CoNavDrawerItem>
  </CoNavDrawer>
</template>
```

</template>

<template #angular>

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoNavDrawer, CoNavDrawerGroup, CoNavDrawerItem, CoNavSeparator } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoNavDrawer, CoNavDrawerGroup, CoNavDrawerItem, CoNavSeparator],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onChange(event: CustomEvent) {
    console.log('Selected:', event.detail.value);
  }
}
```

```html
<co-nav-drawer label="Main navigation" (coChange)="onChange($event)">
  <h3>Menu</h3>
  <co-nav-drawer-item value="dashboard" icon="dashboard" selected>Dashboard</co-nav-drawer-item>
  <co-nav-drawer-item value="activity" icon="sync">Activity</co-nav-drawer-item>
  <co-nav-drawer-group label="Reports" value="reports">
    <co-nav-drawer-item value="weekly">Weekly</co-nav-drawer-item>
    <co-nav-drawer-item value="monthly">Monthly</co-nav-drawer-item>
  </co-nav-drawer-group>
  <co-nav-separator></co-nav-separator>
  <co-nav-drawer-item value="settings" icon="settings">Settings</co-nav-drawer-item>
</co-nav-drawer>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **App-level navigation** — persistent sidebar for main destinations
- **Multi-section menus** — group items with headings and separators
- **Collapsible layouts** — toggle with the `open` prop for responsive designs

### When NOT to use

- **Compact icon-only nav** — use [Nav Rail Bar](/components/nav-rail-bar) instead
- **Temporary menus** — use a dropdown or popover for contextual actions
- **Tab-like switching** — use tabs for in-page content switching

### Content guidelines

- Group related items with headings and separators
- Use drawer groups for nested, collapsible sections
- Place the most important destinations at the top
- Limit the total number of top-level items for scannability
- See [`co-nav-drawer-item`](/components/nav-drawer-item) for item-specific guidelines

## API

### Properties

| Property | Type      | Default        | Description                   |
| -------- | --------- | -------------- | ----------------------------- |
| `open`   | `boolean` | `true`         | Controls drawer visibility    |
| `value`  | `string`  | `''`           | Currently selected item value |
| `label`  | `string`  | `'Navigation'` | Accessible nav label          |

### Group Properties

| Property | Type      | Default | Description                     |
| -------- | --------- | ------- | ------------------------------- |
| `label`  | `string`  | `''`    | Text shown in the group trigger |
| `value`  | `string`  | `''`    | Value included in toggle events |
| `open`   | `boolean` | `false` | Controls nested content         |

### Events

| Event       | Detail              | Description                  |
| ----------- | ------------------- | ---------------------------- |
| `co-change` | `{ value: string }` | Fired when selection changes |

### Group Events

| Event       | Detail                             | Description                         |
| ----------- | ---------------------------------- | ----------------------------------- |
| `co-toggle` | `{ value: string, open: boolean }` | Fired when group visibility changes |

### Slots

| Name        | Description                                  |
| ----------- | -------------------------------------------- |
| _(default)_ | Drawer content (items, separators, headings) |

### Group Slots

| Name        | Description           |
| ----------- | --------------------- |
| _(default)_ | Nested drawer content |

### CSS Parts

| Part      | Description                      |
| --------- | -------------------------------- |
| `base`    | The nav landmark wrapper         |
| `content` | The scrollable content container |

### Group CSS Parts

| Part      | Description                       |
| --------- | --------------------------------- |
| `base`    | The group wrapper                 |
| `trigger` | The toggle button                 |
| `chevron` | The disclosure chevron            |
| `label`   | The group label                   |
| `content` | The collapsible content container |

## Design Tokens

`co-nav-drawer-group` consumes the `component.nav.drawer.group.*` token family for trigger layout, typography, and nested content indentation.

- `--co-component-nav-drawer-group-gap`
- `--co-component-nav-drawer-group-margin-block-start`
- `--co-component-nav-drawer-group-trigger-padding-x`
- `--co-component-nav-drawer-group-trigger-padding-y`
- `--co-component-nav-drawer-group-trigger-gap`
- `--co-component-nav-drawer-group-trigger-radius`
- `--co-component-nav-drawer-group-trigger-font-size`
- `--co-component-nav-drawer-group-trigger-font-weight`
- `--co-component-nav-drawer-group-trigger-font-tracking`
- `--co-component-nav-drawer-group-trigger-font-line-height`
- `--co-component-nav-drawer-group-content-gap`
- `--co-component-nav-drawer-group-content-indent`

### Related Components

- [`co-nav-drawer-item`](/components/nav-drawer-item) — navigation items with icon + label
- `co-nav-drawer-group` — collapsible nested drawer sections
- `co-nav-separator` — horizontal divider between sections (no props, renders a styled `<hr>`)

## Accessibility

<ClientOnly>
<A11yReport component="co-nav-drawer" />
</ClientOnly>

### Keyboard interaction

| Key         | Action                                                    |
| ----------- | --------------------------------------------------------- |
| `Tab`       | Moves focus into/out of the drawer                        |
| `ArrowDown` | Moves focus to the next visible item or group trigger     |
| `ArrowUp`   | Moves focus to the previous visible item or group trigger |
| `Home`      | Moves focus to the first visible item or group trigger    |
| `End`       | Moves focus to the last visible item or group trigger     |
| `Enter`     | Activates the focused item or toggles a focused group     |
| `Space`     | Toggles a focused drawer group trigger                    |

### ARIA notes

- The drawer renders a `<nav>` landmark with an accessible `label`.
- Items without `href` use `role="link"` for assistive technology.
- Selected items expose `aria-current="page"` when `href` is set.
- Group triggers are native buttons with `aria-expanded`.
- Disabled items have `aria-disabled="true"` and are removed from keyboard navigation.
- The separator uses `aria-hidden="true"` since it is purely decorative.

## Changelog

<ComponentChangelog component="co-nav-drawer" />
