# Combo Box

The `co-combobox` component provides a themed, accessible searchable selection field built on top of Lion Web Components. It supports filtering, inline autocomplete, optional multiple choice, optional custom values, validation feedback, and Cobalt option styling through [`co-option`](/components/option).

## Interactive Demo

<ComponentDemo
  tag="co-combobox"
  :defaults="{ label: 'Favorite fruit', name: 'favorite-fruit', size: 'md', autocomplete: 'both', 'match-mode': 'all' }"
  :options="{ size: ['sm', 'md', 'lg', 'xl'], autocomplete: ['none', 'list', 'inline', 'both'], 'match-mode': ['begin', 'all'] }"
  :booleans="['multiple', 'allow-custom-choice', 'show-all-on-empty', 'disabled', 'required', 'danger']"
  :textInputs="['label', 'name', 'value']"
  :slotHtml="`<co-option value='apple'>Apple</co-option><co-option value='banana'>Banana</co-option><co-option value='carrot'>Carrot</co-option><co-option value='date'>Date</co-option>`"
/>

## Selection

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-combobox label="Single selection" name="single-fruit">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="carrot">Carrot</co-option>
  </co-combobox>
  <co-combobox label="Multiple selection" name="multiple-fruit" multiple>
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="carrot">Carrot</co-option>
  </co-combobox>
</div>
</ClientOnly>

| Mode     | Value shape | Typical use                              |
| -------- | ----------- | ---------------------------------------- |
| Single   | `string`    | Choose one item from a searchable set    |
| Multiple | `string[]`  | Choose several items from the same set   |
| Custom   | `string`    | Accept a value not present in the option |

Use `multiple` for Cobalt code. `multiple-choice` remains available for Lion compatibility.

## Filtering

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-combobox label="Match from beginning" name="begin-fruit" autocomplete="list" match-mode="begin">
    <co-option value="apple">Apple</co-option>
    <co-option value="pineapple">Pineapple</co-option>
    <co-option value="pear">Pear</co-option>
  </co-combobox>
  <co-combobox label="Match anywhere" name="all-fruit" autocomplete="list" match-mode="all">
    <co-option value="apple">Apple</co-option>
    <co-option value="pineapple">Pineapple</co-option>
    <co-option value="pear">Pear</co-option>
  </co-combobox>
  <co-combobox label="Show all when empty" name="all-empty-fruit" show-all-on-empty>
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <co-option value="carrot">Carrot</co-option>
  </co-combobox>
</div>
</ClientOnly>

| Property         | Values                           | Behavior                                       |
| ---------------- | -------------------------------- | ---------------------------------------------- |
| `autocomplete`   | `none`, `list`, `inline`, `both` | Controls filtering and inline completion       |
| `matchMode`      | `begin`, `all`                   | Matches from the start or anywhere in labels   |
| `showAllOnEmpty` | `boolean`                        | Opens with all options when the field is empty |

## States

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-combobox label="Default" name="default-fruit">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-combobox>
  <co-combobox label="Disabled" name="disabled-fruit" disabled>
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-combobox>
  <co-combobox label="Readonly" name="readonly-fruit" value="Apple" readonly>
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-combobox>
  <co-combobox label="Custom value" name="custom-fruit" allow-custom-choice>
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-combobox>
  <co-combobox label="Invalid" name="invalid-fruit" required shows-feedback-for="error">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
    <span slot="feedback">Choose a fruit.</span>
  </co-combobox>
</div>
</ClientOnly>

Use `danger` for visual emphasis that does not change validity. Use Lion validation feedback for invalid/error states so assistive technology receives the right `aria-invalid` and feedback relationships.

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/combobox';
</script>

<!-- Basic usage -->
<co-combobox label="Favorite fruit" name="favorite-fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
  <co-option value="carrot">Carrot</co-option>
</co-combobox>

<!-- Multiple selection -->
<co-combobox label="Available produce" name="produce" multiple>
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
  <co-option value="carrot">Carrot</co-option>
</co-combobox>

<!-- Custom values -->
<co-combobox label="Other fruit" name="other-fruit" allow-custom-choice>
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
</co-combobox>

<!-- Listen to value changes -->
<co-combobox id="fruit-combobox" label="Favorite fruit">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
</co-combobox>
<script>
  document.getElementById('fruit-combobox').addEventListener('co-change', (event) => {
    console.log(event.detail.modelValue);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoCombobox, CoOption } from '@cobalt/react';

function App() {
  return (
    <>
      <CoCombobox label="Favorite fruit" name="favorite-fruit">
        <CoOption value="apple">Apple</CoOption>
        <CoOption value="banana">Banana</CoOption>
        <CoOption value="carrot">Carrot</CoOption>
      </CoCombobox>

      <CoCombobox
        label="Available produce"
        multiple
        onCoChange={(event) => console.log(event.detail.modelValue)}
      >
        <CoOption value="apple">Apple</CoOption>
        <CoOption value="banana">Banana</CoOption>
      </CoCombobox>
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoCombobox, CoOption } from '@cobalt/vue';

function handleChange(event) {
  console.log(event.detail.modelValue);
}
</script>

<template>
  <CoCombobox label="Favorite fruit" name="favorite-fruit" @co-change="handleChange">
    <CoOption value="apple">Apple</CoOption>
    <CoOption value="banana">Banana</CoOption>
    <CoOption value="carrot">Carrot</CoOption>
  </CoCombobox>

  <CoCombobox label="Other fruit" allow-custom-choice>
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
export class AppComponent {
  onChange(event: CustomEvent) {
    console.log(event.detail.modelValue);
  }
}
```

```html
<!-- app.component.html -->
<co-combobox label="Favorite fruit" name="favorite-fruit" (coChange)="onChange($event)">
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
  <co-option value="carrot">Carrot</co-option>
</co-combobox>

<co-combobox label="Available produce" multiple>
  <co-option value="apple">Apple</co-option>
  <co-option value="banana">Banana</co-option>
</co-combobox>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Searchable option sets** - use when users need to narrow a longer known list.
- **Single or multiple selection** - use `multiple` when users can select more than one item.
- **Progressive entry** - use `allow-custom-choice` when users can add values outside the list.
- **Forms with validation** - pair with `label`, `help-text`, and validation feedback.

### When NOT to use

- **Short visible lists** - use list box, radio, or checkbox patterns instead.
- **Plain text entry** - use input when suggestions are not part of the task.
- **Long-form content** - use text area for multi-line writing.
- **Actions or navigation** - use buttons, links, menus, or tabs instead.

### Content guidelines

- Use concise option labels that match the terms users type.
- Keep option labels unique so filtering and announcements are clear.
- Use help text for custom value rules or multiple selection limits.
- Write validation messages as specific fixes: "Choose a fruit."

### Layout guidelines

- Keep combobox width aligned with surrounding form controls.
- Match sizes within a field group unless hierarchy requires a larger field.
- Use `show-all-on-empty` only when the option list is short enough to scan.
- Avoid complex interactive content inside options.

## API

### Combobox Properties

| Property                   | Type                                     | Default  | Description                                                     |
| -------------------------- | ---------------------------------------- | -------- | --------------------------------------------------------------- |
| `size`                     | `'sm' \| 'md' \| 'lg' \| 'xl'`           | `'md'`   | Controls field height, padding, and font size                   |
| `danger`                   | `boolean`                                | `false`  | Applies danger styling without changing validity                |
| `label`                    | `string`                                 | `''`     | Label text for the combobox                                     |
| `helpText`                 | `string`                                 | `''`     | Help text shown below the label                                 |
| `name`                     | `string`                                 | `''`     | Form field name                                                 |
| `value`                    | `string`                                 | `''`     | Current textbox value                                           |
| `modelValue`               | `unknown`                                | `''`     | Lion form model value                                           |
| `autocomplete`             | `'none' \| 'list' \| 'inline' \| 'both'` | `'both'` | Controls filtering and inline completion                        |
| `matchMode`                | `'begin' \| 'all'`                       | `'all'`  | Controls option matching                                        |
| `showAllOnEmpty`           | `boolean`                                | `false`  | Shows all options when the textbox is empty                     |
| `multiple`                 | `boolean`                                | `false`  | Cobalt alias for multiple selection                             |
| `multipleChoice`           | `boolean`                                | `false`  | Lion-compatible multiple selection property                     |
| `allowCustomChoice`        | `boolean`                                | `false`  | Allows values that do not match an option                       |
| `requireOptionMatch`       | `boolean`                                | `true`   | Lion-compatible inverse of `allowCustomChoice`                  |
| `selectionFollowsFocus`    | `boolean`                                | `true`   | Selects the active option while arrowing through options        |
| `rotateKeyboardNavigation` | `boolean`                                | `true`   | Wraps keyboard navigation from last to first option             |
| `hasNoDefaultSelected`     | `boolean`                                | `false`  | Prevents Lion from selecting a default option on initialization |
| `required`                 | `boolean`                                | `false`  | Marks the combobox as required for validation and ARIA          |
| `disabled`                 | `boolean`                                | `false`  | Prevents interaction and removes the field from submission      |
| `readOnly`                 | `boolean`                                | `false`  | Prevents editing while keeping the field focusable              |

### Events

| Event       | Detail                                   | Description                                  |
| ----------- | ---------------------------------------- | -------------------------------------------- |
| `co-focus`  | -                                        | Fired when the native input receives focus   |
| `co-blur`   | -                                        | Fired when the native input loses focus      |
| `co-input`  | `{ value: string; modelValue: unknown }` | Fired while the user edits the textbox value |
| `co-change` | `{ value; modelValue; checkedIndex }`    | Fired when the combobox model value changes  |

### Slots

| Name                | Description                                |
| ------------------- | ------------------------------------------ |
| `label`             | Label content                              |
| `help-text`         | Help text content                          |
| `input`             | Native input element managed by Lion       |
| `selection-display` | Optional selected value display            |
| `prefix`            | Content before the input value             |
| `suffix`            | Content after the input value              |
| `listbox`           | Internal options container managed by Lion |
| _(default)_         | Option content moved into the list box     |
| `feedback`          | Validation feedback content                |

### CSS Parts

| Part          | Description                     |
| ------------- | ------------------------------- |
| `label`       | The label wrapper               |
| `help-text`   | The help text wrapper           |
| `input-group` | The input group wrapper         |
| `control`     | The visual combobox control     |
| `input`       | The native input wrapper        |
| `prefix`      | The prefix slot container       |
| `suffix`      | The suffix slot container       |
| `overlay`     | The options overlay wrapper     |
| `feedback`    | The validation feedback wrapper |

## Accessibility

<ClientOnly>
<A11yReport component="co-combobox" />
</ClientOnly>

### Keyboard interaction

| Key                 | Action                                              |
| ------------------- | --------------------------------------------------- |
| `Tab`               | Moves focus to or away from the combobox            |
| Text input          | Filters options and emits `co-input`                |
| `ArrowUp/ArrowDown` | Moves active option                                 |
| `Home/End`          | Moves active option to the first or last option     |
| `Enter`             | Selects the active option or commits a custom value |
| `Escape`            | Closes the option list                              |

### ARIA notes

- Lion applies the WAI-ARIA combo box and list box relationships.
- Lion connects `label`, `help-text`, and `feedback` content to the native input.
- `multiple` updates `aria-multiselectable` on the internal list box.
- `required` adds required validation and `aria-required`.
- The `danger` property is visual only and does not set `aria-invalid`.

## Changelog

<ComponentChangelog component="co-combobox" />
