# Select

<ComponentStatus component="co-select" />

The `co-select` component provides a themed, accessible dropdown select built on Lion's `LionSelectRich`. It uses `co-option` for fully customizable option items with keyboard navigation, focus management, and validation support.

## Interactive Demo

<ComponentDemo
  tag="co-select"
  :defaults="{ size: 'md' }"
  :options="{ size: ['sm', 'md', 'lg', 'xl'] }"
  :booleans="['disabled', 'danger', 'required']"
  :slotHtml="'<co-option value=&quot;apple&quot;>Apple</co-option><co-option value=&quot;banana&quot;>Banana</co-option>'"
/>

## Sizes

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 320px; margin: 16px 0 24px;">
  <co-select label="Small" name="demo-sm" size="sm">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="cherry">Cherry</co-option>
  </co-select>
  <co-select label="Medium (default)" name="demo-md" size="md">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="cherry">Cherry</co-option>
  </co-select>
  <co-select label="Large" name="demo-lg" size="lg">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="cherry">Cherry</co-option>
  </co-select>
  <co-select label="Extra large" name="demo-xl" size="xl">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="cherry">Cherry</co-option>
  </co-select>
</div>
</ClientOnly>

## States

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 320px; margin: 16px 0 24px;">
  <co-select label="Default" name="state-default">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="cherry">Cherry</co-option>
  </co-select>
  <co-select label="Disabled" name="state-disabled" disabled>
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="cherry">Cherry</co-option>
  </co-select>
  <co-select label="Danger" name="state-danger" danger>
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="cherry">Cherry</co-option>
  </co-select>
</div>
</ClientOnly>

## Option icons

`co-option` exposes a `prefix` slot so you can add a leading icon (or any other content) to each option. The default radio indicator is suppressed inside `co-select` so the slot starts empty — anything you slot in shows in two places:

1. Next to the option in the dropdown list.
2. Inside the invoker, mirrored from the selected option (Lion clones the option's child nodes into the invoker, so a single source of truth drives both).

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 320px; margin: 16px 0 24px;">
  <co-select label="Fruit with icons" name="fruit-icons">
    <co-option value="apple">
      <co-icon slot="prefix" name="favorite" size="xs"></co-icon>
      Apple
    </co-option>
    <co-option value="banana">
      <co-icon slot="prefix" name="star" size="xs"></co-icon>
      Banana
    </co-option>
    <co-option value="cherry">
      <co-icon slot="prefix" name="circle" size="xs"></co-icon>
      Cherry
    </co-option>
  </co-select>
</div>
</ClientOnly>

```html
<co-select label="Fruit">
  <co-option value="apple">
    <co-icon slot="prefix" name="favorite" size="xs"></co-icon>
    Apple
  </co-option>
  <co-option value="banana">
    <co-icon slot="prefix" name="star" size="xs"></co-icon>
    Banana
  </co-option>
  <co-option value="cherry">
    <co-icon slot="prefix" name="circle" size="xs"></co-icon>
    Cherry
  </co-option>
</co-select>
```

The prefix wrapper is marked `aria-hidden="true"`, so use icons that are decorative or whose meaning is also conveyed by the option label.

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/select';
  import '@cobalt/components/option';
</script>

<!-- Basic usage -->
<co-select label="Favorite fruit" name="fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
  <co-option value="cherry">Cherry</co-option>
</co-select>

<!-- With sizes -->
<co-select label="Size" name="size" size="lg">
  <co-option value="sm">Small</co-option>
  <co-option value="md">Medium</co-option>
  <co-option value="lg">Large</co-option>
</co-select>

<!-- Disabled -->
<co-select label="Disabled" disabled>
  <co-option value="apple">Apple</co-option>
</co-select>

<!-- Listen to events -->
<co-select id="my-select" label="Fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
  <co-option value="cherry">Cherry</co-option>
</co-select>
<script>
  document.getElementById('my-select').addEventListener('co-change', (e) => {
    console.log('Selected:', e.detail.value);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoSelect, CoOption } from '@cobalt/react';

function App() {
  return (
    <>
      {/* Basic */}
      <CoSelect label="Favorite fruit" name="fruit">
        <CoOption value="apple">Apple</CoOption>
        <CoOption value="banana">Banana</CoOption>
        <CoOption value="cherry">Cherry</CoOption>
      </CoSelect>

      {/* Events */}
      <CoSelect label="Fruit" onCoChange={(e) => console.log(e.detail.value)}>
        <CoOption value="apple">Apple</CoOption>
      </CoSelect>
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoSelect, CoOption } from '@cobalt/vue';
</script>

<template>
  <!-- Basic -->
  <CoSelect label="Favorite fruit" name="fruit">
    <CoOption value="apple">Apple</CoOption>
    <CoOption value="banana">Banana</CoOption>
    <CoOption value="cherry">Cherry</CoOption>
  </CoSelect>

  <!-- Events -->
  <CoSelect label="Fruit" @co-change="onChange">
    <CoOption value="apple">Apple</CoOption>
  </CoSelect>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoSelect, CoOption } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoSelect, CoOption],
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
<!-- app.component.html -->
<co-select label="Favorite fruit" name="fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
  <co-option value="cherry">Cherry</co-option>
</co-select>

<co-select label="Fruit" (coChange)="onChange($event)">
  <co-option value="apple">Apple</co-option>
</co-select>
```

</template>

</CodeTabs>

## Best Practices

Use the built-in `label` API for most selects. Reach for [`co-label`](/components/label) only when the visible label needs to be a separate native element in the layout.

### When to use

`co-select` is a **single-select dropdown** for fixed predefined options. Pick the right component for the job:

| Component                                   | Use when                                                         |
| ------------------------------------------- | ---------------------------------------------------------------- |
| **`co-select`**                             | Single value, fixed predefined options, compact form             |
| [`co-combobox`](/components/combobox)       | User needs to type to filter, or custom values are allowed       |
| [`co-listbox`](/components/listbox)         | Multiple values, or always-visible options                       |
| [`co-radio-group`](/components/radio-group) | 2–5 mutually exclusive options that benefit from full visibility |

### Content guidelines

- Keep option labels concise and scannable
- Order options logically (alphabetical, frequency, or semantic grouping)
- Use `has-no-default-selected` when no default makes sense — the invoker shows a placeholder until the user picks
- The option list inside `co-select` reads like a native `<select>`: no radio/checkbox indicators are shown next to options. Slot custom `prefix` content per option only when meaningful (e.g. a country flag, a status icon)

## API

### Properties

| Property               | Type                                 | Default  | Description                             |
| ---------------------- | ------------------------------------ | -------- | --------------------------------------- |
| `size`                 | `'sm' \| 'md' \| 'lg' \| 'xl'`       | `'md'`   | Controls height, padding, and font size |
| `danger`               | `boolean`                            | `false`  | Applies danger border styling           |
| `disabled`             | `boolean`                            | `false`  | Prevents interaction                    |
| `readOnly`             | `boolean`                            | `false`  | Prevents changes but allows focus       |
| `required`             | `boolean`                            | `false`  | Adds required validation                |
| `hasNoDefaultSelected` | `boolean`                            | `false`  | No option is pre-selected               |
| `interactionMode`      | `'auto' \| 'windows/linux' \| 'mac'` | `'auto'` | Keyboard behavior mode                  |

### Events

| Event       | Detail                                | Description                   |
| ----------- | ------------------------------------- | ----------------------------- |
| `co-change` | `{ value, modelValue, checkedIndex }` | Fired when selection changes  |
| `co-focus`  | —                                     | Fired when select gains focus |
| `co-blur`   | —                                     | Fired when select loses focus |

### Slots

| Name        | Description                              |
| ----------- | ---------------------------------------- |
| _(default)_ | co-option elements                       |
| `label`     | Label content                            |
| `help-text` | Help text below the label                |
| `invoker`   | Custom invoker button (replaces default) |
| `feedback`  | Validation feedback content              |

### CSS Parts

| Part        | Description                     |
| ----------- | ------------------------------- |
| `label`     | The label wrapper               |
| `help-text` | The help text wrapper           |
| `invoker`   | The invoker button area         |
| `overlay`   | The dropdown overlay            |
| `feedback`  | The validation feedback wrapper |

## Accessibility

`co-select` follows the WAI-ARIA [Listbox button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/): a button with `aria-haspopup="listbox"` opens a `role="listbox"` overlay, and DOM focus moves to the listbox while the dropdown is open.

### Keyboard interaction

| Key                     | Action                                               |
| ----------------------- | ---------------------------------------------------- |
| `ArrowDown` / `ArrowUp` | Opens the dropdown when closed; navigates options    |
| `Home` / `End`          | Moves to the first / last option (when open)         |
| `Escape`                | Closes the dropdown and returns focus to the invoker |
| `Tab`                   | Closes the dropdown and moves to the next focusable  |
| Printable characters    | Type-ahead — jump to the matching option (when open) |

> **Note:** Lion's underlying implementation does not currently open the dropdown on `Enter` or `Space` (only `ArrowDown`/`ArrowUp` and type-ahead). Tracked as a residual gap in the [co-select audit](https://github.com/anthropics/cobalt/blob/main/audits/2026-05-co-select-audit.md).

### ARIA notes

- The invoker has `role="button"` with `aria-haspopup="listbox"` and `aria-expanded`
- The invoker is wired to the listbox via `aria-controls` (set by Cobalt; not provided by Lion)
- The listbox has `role="listbox"` with `aria-orientation`
- Options have `role="option"` with `aria-selected` managed by Lion
- `aria-labelledby` and `aria-describedby` are connected automatically
- External native label layouts are supported through [`co-label`](/components/label) plus the select `id`
- Disabled state is reflected via `aria-disabled`
- The option list omits the default radio indicator (a single-select dropdown isn't aided by a redundant marker); the same `co-option` element shows radio/checkbox indicators when used inside [`co-listbox`](/components/listbox) or a multi-select [`co-combobox`](/components/combobox)

## Changelog

<ComponentChangelog component="co-select" />
