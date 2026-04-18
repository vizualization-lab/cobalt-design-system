# Option

The `co-option` component provides Cobalt option styling for selection controls. Use it inside [`co-listbox`](/components/listbox) and [`co-combobox`](/components/combobox).

## Interactive Demo

<ComponentDemo
  tag="co-option"
  label="Apple"
  :defaults="{ value: 'apple' }"
  :booleans="['checked', 'disabled', 'active']"
  :textInputs="['value']"
/>

## Selection indicator

The selection indicator automatically adapts to the parent context — a **radio circle** in single-select controls and a **checkbox** with checkmark in multi-select controls.

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-listbox label="Single selection (radio)" name="indicator-single">
    <co-option value="apple" checked>Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="carrot">Carrot</co-option>
  </co-listbox>
  <co-listbox label="Multiple selection (checkbox)" name="indicator-multi" multiple-choice>
    <co-option value="apple" checked>Apple</co-option>
    <co-option value="banana" checked>Banana</co-option>
    <co-option value="carrot">Carrot</co-option>
  </co-listbox>
</div>
</ClientOnly>

| Context         | Indicator style        | Behavior                       |
| --------------- | ---------------------- | ------------------------------ |
| Single-select   | Radio circle           | Filled dot when checked        |
| Multiple-select | Checkbox square        | Checkmark when checked         |
| Custom (slot)   | Consumer-provided icon | Replaces the default indicator |

## Custom indicator

### Icon indicator

Use the `indicator-icon` slot to replace the default indicator with a `co-icon`. The option **automatically manages the `fill` attribute** based on checked state — no consumer logic needed.

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-listbox label="With check-circle icon" name="custom-indicator">
    <co-option value="apple" checked>
      <co-icon slot="indicator-icon" name="check-circle" size="sm"></co-icon>
      Apple
    </co-option>
    <co-option value="banana">
      <co-icon slot="indicator-icon" name="check-circle" size="sm"></co-icon>
      Banana
    </co-option>
    <co-option value="carrot">
      <co-icon slot="indicator-icon" name="check-circle" size="sm"></co-icon>
      Carrot
    </co-option>
  </co-listbox>
  <co-listbox label="With star icon" name="star-indicator">
    <co-option value="apple" checked>
      <co-icon slot="indicator-icon" name="star" size="sm"></co-icon>
      Apple
    </co-option>
    <co-option value="banana">
      <co-icon slot="indicator-icon" name="star" size="sm"></co-icon>
      Banana
    </co-option>
    <co-option value="carrot">
      <co-icon slot="indicator-icon" name="star" size="sm"></co-icon>
      Carrot
    </co-option>
  </co-listbox>
</div>
</ClientOnly>

```html
<!-- Icon indicator — fill is auto-managed -->
<co-option value="apple">
  <co-icon slot="indicator-icon" name="check-circle" size="sm"></co-icon>
  Apple
</co-option>

<!-- Default indicator (no slot content needed) -->
<co-option value="banana">Banana</co-option>
```

### Generic indicator

Use the `indicator` slot for fully custom indicator content that doesn't fit the icon pattern. No automatic state management is applied — the consumer controls the visual state.

```html
<co-option value="apple">
  <my-custom-indicator slot="indicator"></my-custom-indicator>
  Apple
</co-option>
```

### Planned slots

Future indicator slots will be added as their underlying components ship:

| Slot                 | Status  | Auto-managed state          |
| -------------------- | ------- | --------------------------- |
| `indicator-icon`     | Current | `fill` attribute on co-icon |
| `indicator-radio`    | Planned | `checked` on co-radio       |
| `indicator-checkbox` | Planned | `checked` on co-checkbox    |
| `indicator`          | Current | None (generic fallback)     |

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/listbox';
  import '@cobalt/components/combobox';
  import '@cobalt/components/option';
</script>

<!-- Inside a list box -->
<co-listbox label="Favorite fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
</co-listbox>

<!-- Inside a combobox -->
<co-combobox label="Favorite fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
</co-combobox>
```

</template>

<template #react>

```tsx
import { CoCombobox, CoOption } from '@cobalt/react';

function App() {
  return (
    <CoCombobox label="Favorite fruit">
      <CoOption value="apple">Apple</CoOption>
      <CoOption value="banana">Banana</CoOption>
    </CoCombobox>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoCombobox, CoOption } from '@cobalt/vue';
</script>

<template>
  <CoCombobox label="Favorite fruit">
    <CoOption value="apple">Apple</CoOption>
    <CoOption value="banana">Banana</CoOption>
  </CoCombobox>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoCombobox, CoOption } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoCombobox, CoOption],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<!-- app.component.html -->
<co-combobox label="Favorite fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
</co-combobox>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **List box options** - use inside `co-listbox` for visible option sets.
- **Combobox options** - use inside `co-combobox` for searchable option sets.
- **Simple labels** - use concise text labels that are easy to scan.

### When NOT to use

- **Standalone actions** - use button or link components.
- **Navigation choices** - use menu, tabs, or navigation patterns.
- **Complex interactive rows** - keep option content non-interactive.

### Content guidelines

- Keep labels unique within the same selection control.
- Match `value` to the submitted value, not necessarily the visible label.
- Use `disabled` only when an option must remain visible but unavailable.

## API

### Properties

| Property      | Type      | Default | Description                                       |
| ------------- | --------- | ------- | ------------------------------------------------- |
| `value`       | `string`  | `''`    | String value alias mapped to Lion's `choiceValue` |
| `choiceValue` | `unknown` | `''`    | Value registered with the parent selection group  |
| `checked`     | `boolean` | `false` | Marks the option as selected                      |
| `disabled`    | `boolean` | `false` | Prevents the option from being selected           |
| `active`      | `boolean` | `false` | Marks the option during keyboard navigation       |

### Slots

| Name             | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| _(default)_      | Option label content                                                          |
| `indicator-icon` | Icon indicator — auto-manages `fill` attribute from checked state             |
| `indicator`      | Generic custom indicator (no auto state management, fallback for any content) |

### CSS Parts

| Part        | Description              |
| ----------- | ------------------------ |
| `base`      | The option wrapper       |
| `indicator` | The selection indicator  |
| `label`     | The option label wrapper |

## Accessibility

### ARIA notes

- Lion sets `role="option"` when the option connects.
- Lion updates `aria-selected` from `checked`.
- Lion updates `aria-disabled` from `disabled`.
- Parent controls manage active descendant and option registration.

## Changelog

<ComponentChangelog component="co-option" />
