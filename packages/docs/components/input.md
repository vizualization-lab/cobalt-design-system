# Input

<ComponentStatus component="co-input" />

The `co-input` component provides a themed, accessible text input built on top of Lion Web Components. It supports labels, help text, validation feedback, prefix and suffix slots, size variants, and Cobalt form states.

## Interactive Demo

<ComponentDemo
  tag="co-input"
  :defaults="{ label: 'Email address', placeholder: 'name@example.com', size: 'md' }"
  :options="{ size: ['sm', 'md', 'lg', 'xl'] }"
  :booleans="['disabled', 'readOnly', 'required', 'danger']"
  :textInputs="['label', 'placeholder', 'value', 'name']"
/>

## Sizes

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-input size="sm" label="Small" placeholder="Small input"></co-input>
  <co-input size="md" label="Medium" placeholder="Medium input"></co-input>
  <co-input size="lg" label="Large" placeholder="Large input"></co-input>
  <co-input size="xl" label="Extra large" placeholder="Extra large input"></co-input>
</div>
</ClientOnly>

| Size | Token                    | Typical use                       |
| ---- | ------------------------ | --------------------------------- |
| `sm` | `--co-control-height-sm` | Dense forms, filters, table tools |
| `md` | `--co-control-height-md` | Default forms                     |
| `lg` | `--co-control-height-lg` | Prominent form sections           |
| `xl` | `--co-control-height-xl` | Spacious or touch-first layouts   |

## States

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-input label="Default" placeholder="Enter text"></co-input>
  <co-input label="Disabled" placeholder="Not available" disabled></co-input>
  <co-input label="Readonly" value="INV-1048" readonly></co-input>
  <co-input label="Danger" placeholder="Review before continuing" danger></co-input>
  <co-input label="Invalid" value="not-an-email" shows-feedback-for="error">
    <span slot="feedback">Enter a valid email address.</span>
  </co-input>
</div>
</ClientOnly>

Use `danger` for visual emphasis that does not change validity. Use Lion validation feedback for invalid/error states so assistive technology receives the right `aria-invalid` and feedback relationships.

## Validation

`co-input` supports common validation attributes directly: `required`, `type="email"`, `pattern`, `minlength`, and `maxlength`. For custom rules, set the Lion `validators` property. See the [Form validation guide](/components/form#validation) for complete examples, custom validators, invalid submit handling, and message guidance.

```html
<co-input
  label="Invite code"
  name="inviteCode"
  pattern="[A-Z0-9]{6}"
  pattern-message="Enter a 6-character uppercase invite code."
></co-input>
```

## Slots

Use `prefix` and `suffix` slots for icons or compact affordances around the text value.

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 420px; margin: 16px 0 24px;">
  <co-input label="Search" placeholder="Search projects">
    <co-icon slot="prefix" name="search" size="sm"></co-icon>
  </co-input>
  <co-input label="Amount" value="125.00">
    <span slot="prefix">$</span>
    <co-icon slot="suffix" name="payments" size="sm"></co-icon>
  </co-input>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/input';
  import '@cobalt/components/icon';
</script>

<!-- Basic usage -->
<co-input label="Email address" name="email" type="email" placeholder="name@example.com"></co-input>

<!-- Help text -->
<co-input label="Company" help-text="Use the legal company name."></co-input>

<!-- Prefix and suffix slots -->
<co-input label="Search" placeholder="Search projects">
  <co-icon slot="prefix" name="search" size="sm"></co-icon>
</co-input>

<!-- Visual danger state -->
<co-input label="Account id" danger></co-input>

<!-- Listen to value events -->
<co-input id="email-input" label="Email address"></co-input>
<script>
  document.getElementById('email-input').addEventListener('co-input', (event) => {
    console.log(event.detail.value);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoInput, CoIcon } from '@cobalt/react';

function App() {
  return (
    <>
      {/* Basic usage */}
      <CoInput label="Email address" name="email" type="email" placeholder="name@example.com" />

      {/* Help text */}
      <CoInput label="Company" helpText="Use the legal company name." />

      {/* Prefix and suffix slots */}
      <CoInput label="Search" placeholder="Search projects">
        <CoIcon slot="prefix" name="search" size="sm" />
      </CoInput>

      {/* States */}
      <CoInput label="Account id" value="INV-1048" readOnly />
      <CoInput label="Disabled" disabled />
      <CoInput label="Review" danger />

      {/* Listen to value events */}
      <CoInput label="Email address" onCoInput={(event) => console.log(event.detail.value)} />
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoInput, CoIcon } from '@cobalt/vue';

function onInput(event) {
  console.log(event.detail.value);
}
</script>

<template>
  <!-- Basic usage -->
  <CoInput label="Email address" name="email" type="email" placeholder="name@example.com" />

  <!-- Help text -->
  <CoInput label="Company" helpText="Use the legal company name." />

  <!-- Prefix and suffix slots -->
  <CoInput label="Search" placeholder="Search projects">
    <CoIcon slot="prefix" name="search" size="sm" />
  </CoInput>

  <!-- States -->
  <CoInput label="Account id" value="INV-1048" readOnly />
  <CoInput label="Disabled" disabled />
  <CoInput label="Review" danger />

  <!-- Listen to value events -->
  <CoInput label="Email address" @co-input="onInput" />
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoInput, CoIcon } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoInput, CoIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onInput(event: CustomEvent) {
    console.log(event.detail.value);
  }
}
```

```html
<!-- app.component.html -->

<!-- Basic usage -->
<co-input label="Email address" name="email" type="email" placeholder="name@example.com"></co-input>

<!-- Help text -->
<co-input label="Company" helpText="Use the legal company name."></co-input>

<!-- Prefix and suffix slots -->
<co-input label="Search" placeholder="Search projects">
  <co-icon slot="prefix" name="search" size="sm"></co-icon>
</co-input>

<!-- States -->
<co-input label="Account id" value="INV-1048" readOnly></co-input>
<co-input label="Disabled" disabled></co-input>
<co-input label="Review" danger></co-input>

<!-- Listen to value events -->
<co-input label="Email address" (coInput)="onInput($event)"></co-input>
```

</template>

</CodeTabs>

Use the built-in `label` and `help-text` APIs for most forms. If your layout needs the label to live outside the field, omit `co-input`'s visible label and pair the control with [`co-label`](/components/label) instead.

## Best Practices

### When to use

- **Single-line text entry** - names, emails, URLs, search terms, and short identifiers
- **Structured forms** - pair with the built-in `label`, `help-text`, and validation feedback, or use [`co-label`](/components/label) when the label must sit outside the field
- **Search and filters** - use prefix icons for scanability when space is tight
- **Readonly identifiers** - show generated values that can be selected but not edited

### When NOT to use

- **Long-form content** - use a text area for multi-line writing
- **Known option sets** - use select, radio, checkbox, or combobox patterns instead
- **Dates and numbers with special formatting** - use dedicated field types when available
- **Validation-only emphasis** - use Lion validation feedback instead of the visual-only `danger` prop

### Content guidelines

- Use clear labels that describe the expected value, like "Email address" instead of "Email".
- Keep placeholder text as an example, not a replacement for the label.
- Place helper text below the label when users need format or privacy context.
- Write validation messages as specific fixes: "Enter a valid email address."

### Layout guidelines

- Use one column for most forms.
- Keep input widths consistent within the same form section.
- Match sizes within a field group unless hierarchy requires a larger field.
- Keep prefix and suffix content compact so it does not crowd the typed value.

## API

### Properties

| Property           | Type                           | Default  | Description                                                        |
| ------------------ | ------------------------------ | -------- | ------------------------------------------------------------------ |
| `size`             | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`   | Controls field height, padding, and font size                      |
| `danger`           | `boolean`                      | `false`  | Applies danger styling without changing validity or `aria-invalid` |
| `label`            | `string`                       | `''`     | Label text for the input                                           |
| `helpText`         | `string`                       | `''`     | Help text shown below the label                                    |
| `placeholder`      | `string`                       | `''`     | Placeholder text for the native input                              |
| `value`            | `string`                       | `''`     | Current view value                                                 |
| `modelValue`       | `unknown`                      | `''`     | Lion form model value                                              |
| `name`             | `string`                       | `''`     | Form field name                                                    |
| `type`             | `string`                       | `'text'` | Native input type                                                  |
| `required`         | `boolean`                      | `false`  | Marks the input as required                                        |
| `requiredMessage`  | `string`                       | `''`     | Message shown when required validation fails                       |
| `emailMessage`     | `string`                       | `''`     | Message shown when `type="email"` validation fails                 |
| `pattern`          | `string`                       | `''`     | Regular expression the complete value must match                   |
| `patternMessage`   | `string`                       | `''`     | Message shown when pattern validation fails                        |
| `minLength`        | `number`                       | -        | Minimum character count validated by Lion and delegated natively   |
| `minLengthMessage` | `string`                       | `''`     | Message shown when minlength validation fails                      |
| `maxLength`        | `number`                       | -        | Maximum character count validated by Lion and delegated natively   |
| `maxLengthMessage` | `string`                       | `''`     | Message shown when maxlength validation fails                      |
| `validators`       | `Validator[]`                  | `[]`     | Custom Lion validators merged after Cobalt-generated validators    |
| `disabled`         | `boolean`                      | `false`  | Prevents interaction and removes the field from submission         |
| `readOnly`         | `boolean`                      | `false`  | Prevents editing while keeping the field focusable                 |

### Events

| Event       | Detail                                   | Description                                   |
| ----------- | ---------------------------------------- | --------------------------------------------- |
| `co-focus`  | —                                        | Fired when the native input receives focus    |
| `co-blur`   | —                                        | Fired when the native input loses focus       |
| `co-input`  | `{ value: string; modelValue: unknown }` | Fired while the user edits the value          |
| `co-change` | `{ value: string; modelValue: unknown }` | Fired when the user commits the current value |

### Slots

| Name        | Description                          |
| ----------- | ------------------------------------ |
| `label`     | Label content                        |
| `help-text` | Help text content                    |
| `input`     | Native input element managed by Lion |
| `prefix`    | Content before the input value       |
| `suffix`    | Content after the input value        |
| `feedback`  | Validation feedback content          |

### CSS Parts

| Part          | Description                     |
| ------------- | ------------------------------- |
| `label`       | The label wrapper               |
| `help-text`   | The help text wrapper           |
| `input-group` | The input group wrapper         |
| `control`     | The visual input control        |
| `input`       | The native input wrapper        |
| `prefix`      | The prefix slot container       |
| `suffix`      | The suffix slot container       |
| `feedback`    | The validation feedback wrapper |

## Accessibility

<ClientOnly>
<A11yReport component="co-input" />
</ClientOnly>

### Keyboard interaction

| Key         | Action                                   |
| ----------- | ---------------------------------------- |
| `Tab`       | Moves focus to the input                 |
| `Shift+Tab` | Moves focus to the previous focus target |
| Text input  | Updates the value and emits `co-input`   |

### ARIA notes

- Lion connects `label`, `help-text`, and `feedback` content to the native input through ARIA relationships.
- External native label layouts are supported through [`co-label`](/components/label) plus the field `id`.
- Lion sets `aria-invalid` when validation feedback is visible.
- The `danger` property is visual only and does not set `aria-invalid`.
- `readonly` inputs remain focusable; `disabled` inputs do not participate in normal interaction.

## Changelog

<ComponentChangelog component="co-input" />
