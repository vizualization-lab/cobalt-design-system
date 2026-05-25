# Input Stepper

<ComponentStatus component="co-input-stepper" />

The `co-input-stepper` component provides a themed, accessible numeric input built on top of Lion Web Components. It supports labels, help text, validation feedback, size variants, min/max/step behavior, keyboard arrow controls, and stacked increment/decrement buttons.

## Interactive Demo

<ComponentDemo
  tag="co-input-stepper"
  :defaults="{ label: 'Quantity', placeholder: '0', size: 'md', min: 0, max: 10, step: 1 }"
  :options="{ size: ['sm', 'md', 'lg', 'xl'] }"
  :booleans="['disabled', 'readOnly', 'required', 'danger']"
  :textInputs="['label', 'placeholder', 'value', 'name']"
/>

## Sizes

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-input-stepper size="sm" label="Small" value="1"></co-input-stepper>
  <co-input-stepper size="md" label="Medium" value="2"></co-input-stepper>
  <co-input-stepper size="lg" label="Large" value="3"></co-input-stepper>
  <co-input-stepper size="xl" label="Extra large" value="4"></co-input-stepper>
</div>
</ClientOnly>

| Size | Token                    | Typical use                       |
| ---- | ------------------------ | --------------------------------- |
| `sm` | `--co-control-height-sm` | Dense forms, filters, table tools |
| `md` | `--co-control-height-md` | Default forms                     |
| `lg` | `--co-control-height-lg` | Prominent form sections           |
| `xl` | `--co-control-height-xl` | Spacious or touch-first layouts   |

## Numeric Behavior

Use `min`, `max`, and `step` to constrain the numeric range. The stacked controls use `keyboard-arrow-up` to increment and `keyboard-arrow-down` to decrement.

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-input-stepper label="Quantity" min="0" max="10" step="1" value="3"></co-input-stepper>
  <co-input-stepper label="Team size" min="5" max="50" step="5" value="15"></co-input-stepper>
  <co-input-stepper label="Rate" min="0" max="1" step="0.05" value="0.25"></co-input-stepper>
</div>
</ClientOnly>

## States

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-input-stepper label="Default" value="2"></co-input-stepper>
  <co-input-stepper label="Disabled" value="2" disabled></co-input-stepper>
  <co-input-stepper label="Readonly" value="2" readonly></co-input-stepper>
  <co-input-stepper label="Danger" value="2" danger></co-input-stepper>
  <co-input-stepper label="Invalid" value="12" max="10" shows-feedback-for="error">
    <span slot="feedback">Enter a value from 0 to 10.</span>
  </co-input-stepper>
</div>
</ClientOnly>

Use `danger` for visual emphasis that does not change validity. Use Lion validation feedback for invalid/error states so assistive technology receives the right `aria-invalid` and feedback relationships.

## Validation

`co-input-stepper` supports numeric validation through Lion's `IsNumber`, `MinNumber`, and `MaxNumber` validators. Use `required` for required values and `validators` for custom Lion validators. See the [Form validation guide](/components/form#validation) for complete examples, custom validators, invalid submit handling, and message guidance.

```html
<co-input-stepper
  label="Seats"
  name="seats"
  min="1"
  max="100"
  step="1"
  required
  required-message="Enter the number of seats."
></co-input-stepper>
```

## Slots

Use the `leading` slot for compact context before the numeric value. The right side of the control is reserved for the stacked stepper buttons.

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-input-stepper label="Price" value="125" min="0" step="5">
    <span slot="leading">$</span>
  </co-input-stepper>
  <co-input-stepper label="Capacity" value="8" min="0" max="20">
    <co-icon slot="leading" name="group" size="sm"></co-icon>
  </co-input-stepper>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/input-stepper';
  import '@cobalt/components/icon';
</script>

<!-- Basic usage -->
<co-input-stepper label="Quantity" name="quantity" min="0" max="10"></co-input-stepper>

<!-- Custom step -->
<co-input-stepper label="Team size" min="5" max="50" step="5" value="15"></co-input-stepper>

<!-- Leading slot -->
<co-input-stepper label="Price" min="0" step="5">
  <span slot="leading">$</span>
</co-input-stepper>

<!-- Listen to value events -->
<co-input-stepper id="quantity-stepper" label="Quantity"></co-input-stepper>
<script>
  document.getElementById('quantity-stepper').addEventListener('co-input', (event) => {
    console.log(event.detail.value, event.detail.modelValue);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoInputStepper } from '@cobalt/react';

function App() {
  return (
    <>
      {/* Basic usage */}
      <CoInputStepper label="Quantity" name="quantity" min={0} max={10} />

      {/* Custom step */}
      <CoInputStepper label="Team size" min={5} max={50} step={5} value="15" />

      {/* Leading slot */}
      <CoInputStepper label="Price" min={0} step={5}>
        <span slot="leading">$</span>
      </CoInputStepper>

      {/* Listen to value events */}
      <CoInputStepper
        label="Quantity"
        onCoInput={(event) => console.log(event.detail.modelValue)}
      />
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoInputStepper } from '@cobalt/vue';

function onInput(event) {
  console.log(event.detail.modelValue);
}
</script>

<template>
  <!-- Basic usage -->
  <CoInputStepper label="Quantity" name="quantity" :min="0" :max="10" />

  <!-- Custom step -->
  <CoInputStepper label="Team size" :min="5" :max="50" :step="5" value="15" />

  <!-- Leading slot -->
  <CoInputStepper label="Price" :min="0" :step="5">
    <span slot="leading">$</span>
  </CoInputStepper>

  <!-- Listen to value events -->
  <CoInputStepper label="Quantity" @co-input="onInput" />
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoInputStepper } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoInputStepper],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onInput(event: CustomEvent) {
    console.log(event.detail.modelValue);
  }
}
```

```html
<!-- app.component.html -->

<!-- Basic usage -->
<co-input-stepper label="Quantity" name="quantity" [min]="0" [max]="10"></co-input-stepper>

<!-- Custom step -->
<co-input-stepper label="Team size" [min]="5" [max]="50" [step]="5" value="15"></co-input-stepper>

<!-- Leading slot -->
<co-input-stepper label="Price" [min]="0" [step]="5">
  <span slot="leading">$</span>
</co-input-stepper>

<!-- Listen to value events -->
<co-input-stepper label="Quantity" (coInput)="onInput($event)"></co-input-stepper>
```

</template>

</CodeTabs>

Use the built-in `label` and `help-text` APIs for most forms. If your layout needs the label to live outside the field, omit `co-input-stepper`'s visible label and pair the control with [`co-label`](/components/label) instead.

## Best Practices

### When to use

- **Small numeric adjustments** - quantities, counts, seats, and other values users may nudge up or down
- **Bounded numeric ranges** - values with clear minimums, maximums, and step increments
- **Operational forms** - compact controls where mouse, touch, and keyboard adjustment should all be available
- **Values with nearby context** - use the `leading` slot for currency symbols, units, or icons

### When NOT to use

- **Free-form text** - use [`co-input`](/components/input) for text, email, URLs, and identifiers
- **Long numeric entry** - use a standard input pattern when users usually paste or type long values
- **Known option sets** - use select, radio, checkbox, or combobox patterns instead
- **Units that need complex formatting** - use a dedicated field type when available

### Content guidelines

- Use labels that name the value, like "Quantity" or "Seats".
- Set `min`, `max`, and `step` whenever the valid range is known.
- Write help text when the step size is not obvious.
- Write validation messages as specific fixes: "Enter a value from 1 to 100."

### Layout guidelines

- Keep input stepper widths consistent within the same form section.
- Use one column for most forms.
- Keep leading slot content compact so it does not crowd the numeric value.
- Do not place additional controls on the right side; that space belongs to the stepper buttons.

## API

### Properties

| Property           | Type                           | Default    | Description                                                        |
| ------------------ | ------------------------------ | ---------- | ------------------------------------------------------------------ |
| `size`             | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`     | Controls field height, padding, and font size                      |
| `danger`           | `boolean`                      | `false`    | Applies danger styling without changing validity or `aria-invalid` |
| `label`            | `string`                       | `''`       | Label text for the input stepper                                   |
| `helpText`         | `string`                       | `''`       | Help text shown below the label                                    |
| `placeholder`      | `string`                       | `''`       | Placeholder text for the native input                              |
| `value`            | `string`                       | `''`       | Current formatted view value                                       |
| `modelValue`       | `unknown`                      | `''`       | Lion form model value, usually a number after valid input          |
| `name`             | `string`                       | `''`       | Form field name                                                    |
| `min`              | `number`                       | `Infinity` | Minimum numeric value                                              |
| `max`              | `number`                       | `Infinity` | Maximum numeric value                                              |
| `step`             | `number`                       | `1`        | Numeric increment/decrement amount                                 |
| `valueTextMapping` | `Record<number, string>`       | `{}`       | Maps numeric values to ARIA value text                             |
| `required`         | `boolean`                      | `false`    | Marks the input stepper as required                                |
| `requiredMessage`  | `string`                       | `''`       | Message shown when required validation fails                       |
| `validators`       | `Validator[]`                  | `[]`       | Custom Lion validators merged after Cobalt-generated validators    |
| `disabled`         | `boolean`                      | `false`    | Prevents interaction and removes the field from submission         |
| `readOnly`         | `boolean`                      | `false`    | Prevents editing while keeping the field focusable                 |

### Events

| Event       | Detail                                   | Description                                           |
| ----------- | ---------------------------------------- | ----------------------------------------------------- |
| `co-focus`  | —                                        | Fired when the native input receives focus            |
| `co-blur`   | —                                        | Fired when the native input loses focus               |
| `co-input`  | `{ value: string; modelValue: unknown }` | Fired while the user edits or steps the numeric value |
| `co-change` | `{ value: string; modelValue: unknown }` | Fired when the native input commits the current value |

### Slots

| Name        | Description                          |
| ----------- | ------------------------------------ |
| `label`     | Label content                        |
| `help-text` | Help text content                    |
| `input`     | Native input element managed by Lion |
| `leading`   | Content before the numeric value     |
| `before`    | Content before the visual control    |
| `after`     | Content after the visual control     |
| `feedback`  | Validation feedback content          |

### CSS Parts

| Part               | Description                      |
| ------------------ | -------------------------------- |
| `label`            | The label wrapper                |
| `help-text`        | The help text wrapper            |
| `input-group`      | The input group wrapper          |
| `control`          | The visual input control         |
| `input`            | The native input wrapper         |
| `leading`          | The leading slot container       |
| `stepper-group`    | The stacked stepper button group |
| `increment-button` | The increment button wrapper     |
| `decrement-button` | The decrement button wrapper     |
| `feedback`         | The validation feedback wrapper  |

## Accessibility

<ClientOnly>
<A11yReport component="co-input-stepper" />
</ClientOnly>

### Keyboard interaction

| Key         | Action                                   |
| ----------- | ---------------------------------------- |
| `Tab`       | Moves focus to the input                 |
| `Shift+Tab` | Moves focus to the previous focus target |
| `ArrowUp`   | Increments by the configured `step`      |
| `ArrowDown` | Decrements by the configured `step`      |
| Text input  | Updates the value and emits `co-input`   |

### ARIA notes

- Lion sets the native input role to `spinbutton`.
- Lion connects `label`, `help-text`, and `feedback` content to the native input through ARIA relationships.
- Lion sets `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext` when the corresponding values are available.
- Lion sets `aria-invalid` when validation feedback is visible.
- The `danger` property is visual only and does not set `aria-invalid`.
- `readonly` inputs remain focusable; `disabled` inputs do not participate in normal interaction.

## Changelog

<ComponentChangelog component="co-input-stepper" />
