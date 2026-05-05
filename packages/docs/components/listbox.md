# List Box

<ComponentStatus component="co-listbox" />

The `co-listbox` component provides a themed, accessible list box built on top of Lion Web Components. It supports single and multiple selection, keyboard navigation, orientation, validation feedback, and Cobalt option styling through [`co-option`](/components/option).

## Interactive Demo

<ComponentDemo
  tag="co-listbox"
  :defaults="{ label: 'Favorite fruit', name: 'favorite-fruit' }"
  :options="{ orientation: ['vertical', 'horizontal'] }"
  :booleans="['multiple-choice', 'disabled', 'selection-follows-focus', 'rotate-keyboard-navigation']"
  :textInputs="['label', 'name']"
  :slotHtml="`<co-option value='apple' checked>Apple</co-option><co-option value='banana'>Banana</co-option><co-option value='carrot'>Carrot</co-option><co-option value='date'>Date</co-option>`"
/>

## Selection

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-listbox label="Single selection" name="single-fruit">
    <co-option value="apple" checked>Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="carrot">Carrot</co-option>
  </co-listbox>
  <co-listbox label="Multiple selection" name="multiple-fruit" multiple-choice>
    <co-option value="apple" checked>Apple</co-option>
    <co-option value="banana" checked>Banana</co-option>
    <co-option value="carrot">Carrot</co-option>
  </co-listbox>
</div>
</ClientOnly>

| Mode     | Value shape | Typical use                    |
| -------- | ----------- | ------------------------------ |
| Single   | `string`    | Choose one item from a set     |
| Multiple | `string[]`  | Choose several related options |

## Orientation

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 520px; margin: 16px 0 24px;">
  <co-listbox label="Vertical" name="vertical-fruit" orientation="vertical">
    <co-option value="apple" checked>Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="carrot">Carrot</co-option>
  </co-listbox>
  <co-listbox label="Horizontal" name="horizontal-fruit" orientation="horizontal">
    <co-option value="apple" checked>Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="carrot">Carrot</co-option>
  </co-listbox>
</div>
</ClientOnly>

Use vertical orientation for most lists. Use horizontal orientation for short, compact option sets where left and right arrow keys match the visual layout.

## States

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-listbox label="Default" name="default-fruit">
    <co-option value="apple" checked>Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-listbox>
  <co-listbox label="Disabled" name="disabled-fruit" disabled>
    <co-option value="apple" checked>Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-listbox>
  <co-listbox label="Disabled option" name="disabled-option-fruit">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana" disabled>Banana</co-option>
    <co-option value="carrot">Carrot</co-option>
  </co-listbox>
  <co-listbox label="Invalid" name="invalid-fruit" required shows-feedback-for="error">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <span slot="feedback">Select a fruit.</span>
  </co-listbox>
</div>
</ClientOnly>

Use validation feedback for invalid/error states so assistive technology receives the right `aria-invalid` and feedback relationships.

## Validation

`co-listbox` supports group-level `required`, `required-message`, and the Lion `validators` property. See the [Form validation guide](/components/form#validation) for feedback timing, custom validators, and submit-time error summaries.

```html
<co-listbox label="Role" name="role" required required-message="Select a role.">
  <co-option value="developer">Developer</co-option>
  <co-option value="designer">Designer</co-option>
</co-listbox>
```

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/listbox';
</script>

<!-- Basic usage -->
<co-listbox label="Favorite fruit" name="favorite-fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana" checked>Banana</co-option>
  <co-option value="carrot">Carrot</co-option>
</co-listbox>

<!-- Multiple selection -->
<co-listbox label="Available produce" name="produce" multiple-choice>
  <co-option value="apple" checked>Apple</co-option>
  <co-option value="banana" checked>Banana</co-option>
  <co-option value="carrot">Carrot</co-option>
</co-listbox>

<!-- Listen to selection changes -->
<co-listbox id="fruit-listbox" label="Favorite fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
</co-listbox>
<script>
  document.getElementById('fruit-listbox').addEventListener('co-change', (event) => {
    console.log(event.detail.value);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoListbox, CoOption } from '@cobalt/react';

function App() {
  return (
    <>
      {/* Basic usage */}
      <CoListbox label="Favorite fruit" name="favorite-fruit">
        <CoOption value="apple">Apple</CoOption>
        <CoOption value="banana" checked>
          Banana
        </CoOption>
        <CoOption value="carrot">Carrot</CoOption>
      </CoListbox>

      {/* Multiple selection */}
      <CoListbox label="Available produce" name="produce" multipleChoice>
        <CoOption value="apple" checked>
          Apple
        </CoOption>
        <CoOption value="banana" checked>
          Banana
        </CoOption>
        <CoOption value="carrot">Carrot</CoOption>
      </CoListbox>

      {/* Listen to selection changes */}
      <CoListbox label="Favorite fruit" onCoChange={(event) => console.log(event.detail.value)}>
        <CoOption value="apple">Apple</CoOption>
        <CoOption value="banana">Banana</CoOption>
      </CoListbox>
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoListbox, CoOption } from '@cobalt/vue';

function onChange(event) {
  console.log(event.detail.value);
}
</script>

<template>
  <!-- Basic usage -->
  <CoListbox label="Favorite fruit" name="favorite-fruit">
    <CoOption value="apple">Apple</CoOption>
    <CoOption value="banana" checked>Banana</CoOption>
    <CoOption value="carrot">Carrot</CoOption>
  </CoListbox>

  <!-- Multiple selection -->
  <CoListbox label="Available produce" name="produce" multipleChoice>
    <CoOption value="apple" checked>Apple</CoOption>
    <CoOption value="banana" checked>Banana</CoOption>
    <CoOption value="carrot">Carrot</CoOption>
  </CoListbox>

  <!-- Listen to selection changes -->
  <CoListbox label="Favorite fruit" @co-change="onChange">
    <CoOption value="apple">Apple</CoOption>
    <CoOption value="banana">Banana</CoOption>
  </CoListbox>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoListbox, CoOption } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoListbox, CoOption],
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

<!-- Basic usage -->
<co-listbox label="Favorite fruit" name="favorite-fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana" checked>Banana</co-option>
  <co-option value="carrot">Carrot</co-option>
</co-listbox>

<!-- Multiple selection -->
<co-listbox label="Available produce" name="produce" multipleChoice>
  <co-option value="apple" checked>Apple</co-option>
  <co-option value="banana" checked>Banana</co-option>
  <co-option value="carrot">Carrot</co-option>
</co-listbox>

<!-- Listen to selection changes -->
<co-listbox label="Favorite fruit" (coChange)="onChange($event)">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
</co-listbox>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Visible option sets** - choices should remain visible without opening a menu
- **Single or multiple selection** - use `multiple-choice` when more than one value can apply
- **Keyboard-first workflows** - users need arrow-key navigation and typeahead
- **Short to medium lists** - options are scannable without filtering

### When NOT to use

- **Long searchable lists** - use combobox or autocomplete patterns instead
- **Compact forms** - use select when showing all options would take too much space
- **Binary choices** - use checkbox, switch, or radio patterns
- **Actions or navigation** - use buttons, links, menus, or tabs instead

### Content guidelines

- Use concise option labels that are easy to scan.
- Keep option labels unique so typeahead and screen reader announcements are clear.
- Use `help-text` for selection rules, especially with multiple selection.
- Write validation messages as specific fixes: "Select a fruit."

### Layout guidelines

- Use vertical orientation by default.
- Use horizontal orientation only for short, related option groups.
- Keep list box width aligned with surrounding form controls.
- Avoid nesting complex interactive content inside options.

## API

### List Box Properties

| Property                   | Type                         | Default      | Description                                                     |
| -------------------------- | ---------------------------- | ------------ | --------------------------------------------------------------- |
| `label`                    | `string`                     | `''`         | Label text for the list box                                     |
| `helpText`                 | `string`                     | `''`         | Help text shown below the label                                 |
| `name`                     | `string`                     | `''`         | Form field name                                                 |
| `disabled`                 | `boolean`                    | `false`      | Prevents interaction and disables registered options            |
| `required`                 | `boolean`                    | `false`      | Marks the list box as required for validation and ARIA          |
| `requiredMessage`          | `string`                     | -            | Custom message for required validation                          |
| `validators`               | `Validator[]`                | -            | Custom Lion validators                                          |
| `multipleChoice`           | `boolean`                    | `false`      | Allows multiple options to be selected                          |
| `orientation`              | `'vertical' \| 'horizontal'` | `'vertical'` | Controls arrow-key direction and `aria-orientation`             |
| `selectionFollowsFocus`    | `boolean`                    | `false`      | Selects the active option while arrowing through options        |
| `rotateKeyboardNavigation` | `boolean`                    | `false`      | Wraps keyboard navigation from last to first option             |
| `hasNoDefaultSelected`     | `boolean`                    | `false`      | Prevents Lion from selecting a default option on initialization |
| `modelValue`               | `string \| string[]`         | `''`         | Current selected value or values                                |
| `checkedIndex`             | `number \| number[]`         | `-1`         | Selected option index or indexes                                |
| `activeIndex`              | `number`                     | `-1`         | Active option index                                             |

### Option Properties

See the [Option documentation](/components/option) for standalone option guidance.

| Property      | Type      | Default | Description                                           |
| ------------- | --------- | ------- | ----------------------------------------------------- |
| `value`       | `string`  | `''`    | String value alias mapped to Lion's `choiceValue`     |
| `choiceValue` | `unknown` | `''`    | Value registered with the parent list box             |
| `checked`     | `boolean` | `false` | Marks the option as selected                          |
| `disabled`    | `boolean` | `false` | Prevents the option from being selected               |
| `active`      | `boolean` | `false` | Marks the option as active during keyboard navigation |

### Events

| Event       | Detail                                | Description                       |
| ----------- | ------------------------------------- | --------------------------------- |
| `co-change` | `{ value; modelValue; checkedIndex }` | Fired when selected value changes |

### Slots

| Component    | Name        | Description                                |
| ------------ | ----------- | ------------------------------------------ |
| `co-listbox` | `label`     | Label content                              |
| `co-listbox` | `help-text` | Help text content                          |
| `co-listbox` | _(default)_ | Option content moved into the list box     |
| `co-listbox` | `input`     | Internal options container managed by Lion |
| `co-listbox` | `feedback`  | Validation feedback content                |
| `co-option`  | _(default)_ | Option label content                       |

### CSS Parts

| Component    | Part          | Description                     |
| ------------ | ------------- | ------------------------------- |
| `co-listbox` | `label`       | The label wrapper               |
| `co-listbox` | `help-text`   | The help text wrapper           |
| `co-listbox` | `input-group` | The input group wrapper         |
| `co-listbox` | `control`     | The visual list box control     |
| `co-listbox` | `input`       | The list box input wrapper      |
| `co-listbox` | `feedback`    | The validation feedback wrapper |
| `co-option`  | `base`        | The option wrapper              |
| `co-option`  | `indicator`   | The selection indicator         |
| `co-option`  | `label`       | The option label wrapper        |

## Accessibility

<ClientOnly>
<A11yReport component="co-listbox" />
</ClientOnly>

### Keyboard interaction

| Key                    | Action                                                |
| ---------------------- | ----------------------------------------------------- |
| `Tab`                  | Moves focus to or away from the list box              |
| `ArrowUp/ArrowDown`    | Moves active option in vertical orientation           |
| `ArrowLeft/ArrowRight` | Moves active option in horizontal orientation         |
| `Home/End`             | Moves active option to the first or last option       |
| `Enter` or `Space`     | Selects the active option                             |
| Text input             | Moves active option to the next matching option label |

### ARIA notes

- Lion connects `label`, `help-text`, and `feedback` content to the list box through ARIA relationships.
- `orientation` updates `aria-orientation`.
- `multiple-choice` updates `aria-multiselectable`.
- `required` adds `aria-required` through Lion's required validator.
- Disabled options are skipped by keyboard navigation.

## Changelog

<ComponentChangelog component="co-listbox" />
