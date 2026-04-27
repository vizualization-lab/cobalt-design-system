# Radio Group

<ComponentStatus component="co-radio-group" />

The `co-radio-group` and `co-radio` components provide a themed, accessible radio button group built on Lion Web Components. Use radio groups for single-choice selection where all options should be visible.

## Interactive Demo

<ClientOnly>
<div style="max-width: 420px; margin: 16px 0 24px;">
  <co-radio-group label="Favorite fruit" name="demo-fruit">
    <co-radio label="Apple" value="apple"></co-radio>
    <co-radio label="Banana" value="banana"></co-radio>
    <co-radio label="Cherry" value="cherry"></co-radio>
  </co-radio-group>
</div>
</ClientOnly>

## Pre-selected

<ClientOnly>
<div style="max-width: 420px; margin: 16px 0 24px;">
  <co-radio-group label="Default selection" name="preselected">
    <co-radio label="Option A" value="a" checked></co-radio>
    <co-radio label="Option B" value="b"></co-radio>
    <co-radio label="Option C" value="c"></co-radio>
  </co-radio-group>
</div>
</ClientOnly>

## States

<ClientOnly>
<div style="display: grid; gap: 24px; max-width: 420px; margin: 16px 0 24px;">
  <co-radio-group label="Disabled group" name="state-disabled" disabled>
    <co-radio label="Option A" value="a" checked></co-radio>
    <co-radio label="Option B" value="b"></co-radio>
  </co-radio-group>
  <co-radio-group label="Individual disabled" name="state-mixed">
    <co-radio label="Available" value="a"></co-radio>
    <co-radio label="Sold out" value="b" disabled></co-radio>
    <co-radio label="Available" value="c"></co-radio>
  </co-radio-group>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/radio-group';
  import '@cobalt/components/radio';
</script>

<!-- Basic radio group -->
<co-radio-group label="Favorite fruit" name="fruit">
  <co-radio label="Apple" value="apple"></co-radio>
  <co-radio label="Banana" value="banana"></co-radio>
  <co-radio label="Cherry" value="cherry"></co-radio>
</co-radio-group>

<!-- Pre-selected -->
<co-radio-group label="Size" name="size">
  <co-radio label="Small" value="sm"></co-radio>
  <co-radio label="Medium" value="md" checked></co-radio>
  <co-radio label="Large" value="lg"></co-radio>
</co-radio-group>

<!-- Listen to events -->
<co-radio-group id="my-radios" label="Color" name="color">
  <co-radio label="Red" value="red"></co-radio>
  <co-radio label="Blue" value="blue"></co-radio>
</co-radio-group>
<script>
  document.getElementById('my-radios').addEventListener('co-change', (e) => {
    console.log('Selected:', e.detail.value);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoRadioGroup, CoRadio } from '@cobalt/react';

function App() {
  return (
    <CoRadioGroup label="Favorite fruit" name="fruit" onCoChange={(e) => console.log(e.detail)}>
      <CoRadio label="Apple" value="apple" />
      <CoRadio label="Banana" value="banana" />
      <CoRadio label="Cherry" value="cherry" />
    </CoRadioGroup>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoRadioGroup, CoRadio } from '@cobalt/vue';

function onChange(e) {
  console.log('Selected:', e.detail.value);
}
</script>

<template>
  <CoRadioGroup label="Favorite fruit" name="fruit" @co-change="onChange">
    <CoRadio label="Apple" value="apple" />
    <CoRadio label="Banana" value="banana" />
    <CoRadio label="Cherry" value="cherry" />
  </CoRadioGroup>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoRadioGroup, CoRadio } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoRadioGroup, CoRadio],
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
<co-radio-group label="Favorite fruit" name="fruit" (coChange)="onChange($event)">
  <co-radio label="Apple" value="apple"></co-radio>
  <co-radio label="Banana" value="banana"></co-radio>
  <co-radio label="Cherry" value="cherry"></co-radio>
</co-radio-group>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Single selection from visible options** — all choices should be seen at once
- **2-5 options** — radio groups work best with a small number of choices
- **Mutually exclusive choices** — only one option can be selected at a time
- **Default selection recommended** — pre-select the most common or safest option

### When NOT to use

- **Many options (6+)** — use [Select](/components/select) or [Combo Box](/components/combobox) instead
- **Multiple selection** — use checkboxes or [List Box](/components/listbox) with `multiple-choice`
- **On/off toggle** — use a switch or checkbox instead
- **Navigation** — use tabs or a navigation component

### Content guidelines

- Keep labels concise and parallel in structure
- Start each label with a capital letter
- Don't use punctuation at the end of labels
- Order options logically (most common first, alphabetically, or by severity)

## API

### Properties

#### co-radio-group Properties

| Property   | Type      | Default | Description               |
| ---------- | --------- | ------- | ------------------------- |
| `name`     | `string`  | `''`    | Form field name           |
| `disabled` | `boolean` | `false` | Disables all child radios |
| `required` | `boolean` | `false` | Adds required validation  |

#### co-radio Properties

| Property   | Type      | Default | Description                                |
| ---------- | --------- | ------- | ------------------------------------------ |
| `value`    | `string`  | `''`    | Value submitted when this radio is checked |
| `checked`  | `boolean` | `false` | Whether this radio is selected             |
| `disabled` | `boolean` | `false` | Disables this individual radio             |

### Events

| Event       | Detail                  | Description                      |
| ----------- | ----------------------- | -------------------------------- |
| `co-change` | `{ value, modelValue }` | Fired when the selection changes |

### Slots

#### co-radio-group Slots

| Name        | Description                 |
| ----------- | --------------------------- |
| _(default)_ | co-radio children           |
| `label`     | Label content               |
| `help-text` | Help text below the label   |
| `feedback`  | Validation feedback content |

#### co-radio Slots

| Name    | Description         |
| ------- | ------------------- |
| `label` | Radio label content |

### CSS Parts

#### co-radio-group CSS Parts

| Part        | Description                     |
| ----------- | ------------------------------- |
| `label`     | The label wrapper               |
| `help-text` | The help text wrapper           |
| `group`     | The radio options container     |
| `feedback`  | The validation feedback wrapper |

#### co-radio CSS Parts

| Part    | Description           |
| ------- | --------------------- |
| `base`  | The radio wrapper     |
| `icon`  | The co-icon indicator |
| `label` | The label wrapper     |

## Accessibility

<ClientOnly>
<A11yReport component="co-radio-group" />
</ClientOnly>

### Keyboard interaction

| Key                        | Action                                                  |
| -------------------------- | ------------------------------------------------------- |
| `Tab`                      | Moves focus to the radio group (first or checked radio) |
| `ArrowDown` / `ArrowRight` | Moves focus to and selects the next radio               |
| `ArrowUp` / `ArrowLeft`    | Moves focus to and selects the previous radio           |
| `Space`                    | Selects the focused radio (if not already selected)     |

### ARIA notes

- `co-radio-group` sets `role="radiogroup"` on the group container, providing semantic grouping for assistive technology.
- Each `co-radio` contains a native `<input type="radio">` that is visually hidden but remains in the DOM for form participation. The native input carries `role="radio"` and `aria-checked` automatically.
- When `disabled` is set on the group, all child radios inherit the disabled state and `aria-disabled` is propagated.
- The group label is associated via `aria-labelledby` through Lion's form field infrastructure.
- Focus management follows the [WAI-ARIA Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) — only one radio in the group is in the tab order at a time.

### WCAG criteria

| Criterion                    | Level | Status | Notes                                                                |
| ---------------------------- | ----- | ------ | -------------------------------------------------------------------- |
| 1.3.1 Info and Relationships | A     | Passes | `role="radiogroup"` + native `<input type="radio">` convey structure |
| 1.4.1 Use of Color           | A     | Passes | Icon shape (filled vs unfilled) indicates state, not color alone     |
| 1.4.3 Contrast (Minimum)     | AA    | Passes | Text and icons meet 4.5:1 ratio against surface                      |
| 2.1.1 Keyboard               | A     | Passes | Full arrow-key navigation + Tab/Space interaction                    |
| 2.4.7 Focus Visible          | AA    | Passes | Focus ring shown on the active radio icon                            |
| 3.2.2 On Input               | A     | Passes | Selecting a radio does not trigger unexpected context changes        |
| 4.1.2 Name, Role, Value      | A     | Passes | Native radio input provides name, role, and checked state            |

## Changelog

<ComponentChangelog component="co-radio-group" />
