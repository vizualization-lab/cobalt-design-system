# Text Area

<ComponentStatus component="co-textarea" />

The `co-textarea` component provides a themed, accessible multi-line text field built on top of Lion Web Components. It supports labels, help text, validation feedback, prefix and suffix slots, size variants, resize modes, and character counting.

## Interactive Demo

<ComponentDemo
  tag="co-textarea"
  :defaults="{ label: 'Comment', placeholder: 'Add relevant context', size: 'md', resize: 'auto', maxLength: 120 }"
  :options="{ size: ['sm', 'md', 'lg', 'xl'], resize: ['auto', 'none', 'vertical'] }"
  :booleans="['disabled', 'readOnly', 'required', 'danger']"
  :textInputs="['label', 'placeholder', 'value', 'name']"
/>

## Sizes

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 480px; margin: 16px 0 24px;">
  <co-textarea size="sm" label="Small" placeholder="Small text area"></co-textarea>
  <co-textarea size="md" label="Medium" placeholder="Medium text area"></co-textarea>
  <co-textarea size="lg" label="Large" placeholder="Large text area"></co-textarea>
  <co-textarea size="xl" label="Extra large" placeholder="Extra large text area"></co-textarea>
</div>
</ClientOnly>

| Size | Typical use                       |
| ---- | --------------------------------- |
| `sm` | Dense forms, filters, table tools |
| `md` | Default forms                     |
| `lg` | Prominent form sections           |
| `xl` | Spacious or touch-first layouts   |

## Resize

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 480px; margin: 16px 0 24px;">
  <co-textarea label="Auto resize" resize="auto" rows="2" max-rows="6" value="The field grows as the content grows."></co-textarea>
  <co-textarea label="Fixed height" resize="none" rows="4" placeholder="Manual resize is disabled."></co-textarea>
  <co-textarea label="Vertical resize" resize="vertical" rows="4" placeholder="Drag the native handle to resize vertically."></co-textarea>
</div>
</ClientOnly>

| Resize     | Behavior                                             |
| ---------- | ---------------------------------------------------- |
| `auto`     | Grows with content until `maxRows` is reached        |
| `none`     | Uses the native `rows` height with resizing disabled |
| `vertical` | Allows browser-native vertical drag resizing         |

## Character Counter

Set `maxlength` to render a counter and apply the native character limit.

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 480px; margin: 16px 0 24px;">
  <co-textarea label="Message" maxlength="120" placeholder="Write a short message"></co-textarea>
  <co-textarea label="Internal note" maxlength="80" value="Follow up with the partner team before the release review."></co-textarea>
</div>
</ClientOnly>

The counter is visual guidance and is also attached to the text area description. Use validation feedback for required minimum length or business rules.

## States

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 480px; margin: 16px 0 24px;">
  <co-textarea label="Default" placeholder="Enter text"></co-textarea>
  <co-textarea label="Disabled" placeholder="Not available" disabled></co-textarea>
  <co-textarea label="Readonly" value="Reviewed by compliance." readonly></co-textarea>
  <co-textarea label="Danger" placeholder="Review before continuing" danger></co-textarea>
  <co-textarea label="Invalid" value="Too short" shows-feedback-for="error">
    <span slot="feedback">Add enough detail for the reviewer.</span>
  </co-textarea>
</div>
</ClientOnly>

Use `danger` for visual emphasis that does not change validity. Use Lion validation feedback for invalid/error states so assistive technology receives the right `aria-invalid` and feedback relationships.

## Validation

`co-textarea` supports `required`, `pattern`, `minlength`, `maxlength`, custom messages, and the Lion `validators` property. See the [Form validation guide](/components/form#validation) for rule details, feedback timing, custom validators, and submit-time error summaries.

```html
<co-textarea
  label="Release note"
  name="releaseNote"
  required
  minlength="20"
  maxlength="240"
  required-message="Enter a release note."
  minlength-message="Enter at least 20 characters."
  maxlength-message="Enter no more than 240 characters."
></co-textarea>
```

## Slots

Use `prefix` and `suffix` slots for compact context around the text value.

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 480px; margin: 16px 0 24px;">
  <co-textarea label="Release note" placeholder="Summarize the change">
    <co-icon slot="prefix" name="description" size="sm"></co-icon>
  </co-textarea>
  <co-textarea label="Support reply" value="Thanks for the details.">
    <co-icon slot="prefix" name="support-agent" size="sm"></co-icon>
    <co-icon slot="suffix" name="send" size="sm"></co-icon>
  </co-textarea>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/textarea';
  import '@cobalt/components/icon';
</script>

<!-- Basic usage -->
<co-textarea label="Comment" name="comment" placeholder="Add relevant context"></co-textarea>

<!-- Help text -->
<co-textarea label="Release note" help-text="Keep this short and specific."></co-textarea>

<!-- Auto resize with a character counter -->
<co-textarea label="Message" rows="2" max-rows="6" maxlength="120"></co-textarea>

<!-- Prefix and suffix slots -->
<co-textarea label="Support reply" placeholder="Write a reply">
  <co-icon slot="prefix" name="support-agent" size="sm"></co-icon>
</co-textarea>

<!-- Visual danger state -->
<co-textarea label="Reviewer notes" danger></co-textarea>

<!-- Listen to value events -->
<co-textarea id="comment-textarea" label="Comment"></co-textarea>
<script>
  document.getElementById('comment-textarea').addEventListener('co-input', (event) => {
    console.log(event.detail.value);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoTextarea, CoIcon } from '@cobalt/react';

function App() {
  return (
    <>
      {/* Basic usage */}
      <CoTextarea label="Comment" name="comment" placeholder="Add relevant context" />

      {/* Help text */}
      <CoTextarea label="Release note" helpText="Keep this short and specific." />

      {/* Auto resize with a character counter */}
      <CoTextarea label="Message" rows={2} maxRows={6} maxLength={120} />

      {/* Prefix and suffix slots */}
      <CoTextarea label="Support reply" placeholder="Write a reply">
        <CoIcon slot="prefix" name="support-agent" size="sm" />
      </CoTextarea>

      {/* States */}
      <CoTextarea label="Reviewer notes" value="Approved" readOnly />
      <CoTextarea label="Disabled" disabled />
      <CoTextarea label="Review" danger />

      {/* Listen to value events */}
      <CoTextarea label="Comment" onCoInput={(event) => console.log(event.detail.value)} />
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoTextarea, CoIcon } from '@cobalt/vue';

function onInput(event) {
  console.log(event.detail.value);
}
</script>

<template>
  <!-- Basic usage -->
  <CoTextarea label="Comment" name="comment" placeholder="Add relevant context" />

  <!-- Help text -->
  <CoTextarea label="Release note" helpText="Keep this short and specific." />

  <!-- Auto resize with a character counter -->
  <CoTextarea label="Message" :rows="2" :maxRows="6" :maxLength="120" />

  <!-- Prefix and suffix slots -->
  <CoTextarea label="Support reply" placeholder="Write a reply">
    <CoIcon slot="prefix" name="support-agent" size="sm" />
  </CoTextarea>

  <!-- States -->
  <CoTextarea label="Reviewer notes" value="Approved" readOnly />
  <CoTextarea label="Disabled" disabled />
  <CoTextarea label="Review" danger />

  <!-- Listen to value events -->
  <CoTextarea label="Comment" @co-input="onInput" />
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoTextarea, CoIcon } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoTextarea, CoIcon],
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
<co-textarea label="Comment" name="comment" placeholder="Add relevant context"></co-textarea>

<!-- Help text -->
<co-textarea label="Release note" helpText="Keep this short and specific."></co-textarea>

<!-- Auto resize with a character counter -->
<co-textarea label="Message" [rows]="2" [maxRows]="6" [maxLength]="120"></co-textarea>

<!-- Prefix and suffix slots -->
<co-textarea label="Support reply" placeholder="Write a reply">
  <co-icon slot="prefix" name="support-agent" size="sm"></co-icon>
</co-textarea>

<!-- States -->
<co-textarea label="Reviewer notes" value="Approved" readOnly></co-textarea>
<co-textarea label="Disabled" disabled></co-textarea>
<co-textarea label="Review" danger></co-textarea>

<!-- Listen to value events -->
<co-textarea label="Comment" (coInput)="onInput($event)"></co-textarea>
```

</template>

</CodeTabs>

Use the built-in `label` and `help-text` APIs for most text areas. If the label needs to live in a separate layout column or stack, omit the field's visible label and pair the control with [`co-label`](/components/label).

## Best Practices

### When to use

- **Long-form text entry** - comments, notes, descriptions, and free-form messages
- **Multi-line review content** - feedback, release notes, summaries, and support replies
- **Growing content** - use `resize="auto"` with `rows` and `maxRows`
- **Bounded writing** - use `maxlength` when storage or display limits matter

### When NOT to use

- **Single-line values** - use `co-input` for names, emails, URLs, and short identifiers
- **Formatted rich text** - use an editor pattern when users need formatting controls
- **Known option sets** - use select, radio, checkbox, or combobox patterns instead
- **Validation-only emphasis** - use Lion validation feedback instead of the visual-only `danger` prop

### Content guidelines

- Use clear labels that describe the expected content, like "Release note" instead of "Text".
- Keep placeholder text as an example, not a replacement for the label.
- Use helper text for format, privacy, or length expectations.
- Write validation messages as specific fixes: "Add enough detail for the reviewer."

### Layout guidelines

- Use one column for most forms.
- Keep text area widths consistent within the same form section.
- Match sizes within a field group unless hierarchy requires a larger field.
- Use `maxRows` to keep auto-growing text areas from pushing important actions off screen.

## API

### Properties

| Property           | Type                             | Default  | Description                                                        |
| ------------------ | -------------------------------- | -------- | ------------------------------------------------------------------ |
| `size`             | `'sm' \| 'md' \| 'lg' \| 'xl'`   | `'md'`   | Controls field padding and font size                               |
| `resize`           | `'auto' \| 'none' \| 'vertical'` | `'auto'` | Controls automatic or browser-native resizing                      |
| `danger`           | `boolean`                        | `false`  | Applies danger styling without changing validity or `aria-invalid` |
| `label`            | `string`                         | `''`     | Label text for the text area                                       |
| `helpText`         | `string`                         | `''`     | Help text shown below the label                                    |
| `placeholder`      | `string`                         | `''`     | Placeholder text for the native text area                          |
| `value`            | `string`                         | `''`     | Current view value                                                 |
| `modelValue`       | `unknown`                        | `''`     | Lion form model value                                              |
| `name`             | `string`                         | `''`     | Form field name                                                    |
| `rows`             | `number`                         | `2`      | Initial visible text rows                                          |
| `maxRows`          | `number`                         | `6`      | Maximum auto-resize rows when `resize="auto"`                      |
| `maxLength`        | `number`                         | -        | Native maximum character count and maximum length validation       |
| `maxLengthMessage` | `string`                         | -        | Custom message for maximum length validation                       |
| `minLength`        | `number`                         | -        | Native minimum character count and minimum length validation       |
| `minLengthMessage` | `string`                         | -        | Custom message for minimum length validation                       |
| `required`         | `boolean`                        | `false`  | Marks the text area as required                                    |
| `requiredMessage`  | `string`                         | -        | Custom message for required validation                             |
| `pattern`          | `string`                         | -        | Whole-value regular expression validation                          |
| `patternMessage`   | `string`                         | -        | Custom message for pattern validation                              |
| `validators`       | `Validator[]`                    | -        | Custom Lion validators appended after Cobalt validators            |
| `disabled`         | `boolean`                        | `false`  | Prevents interaction and removes the field from submission         |
| `readOnly`         | `boolean`                        | `false`  | Prevents editing while keeping the field focusable                 |

### Events

| Event       | Detail                                   | Description                                    |
| ----------- | ---------------------------------------- | ---------------------------------------------- |
| `co-focus`  | -                                        | Fired when the native text area receives focus |
| `co-blur`   | -                                        | Fired when the native text area loses focus    |
| `co-input`  | `{ value: string; modelValue: unknown }` | Fired while the user edits the value           |
| `co-change` | `{ value: string; modelValue: unknown }` | Fired when the user commits the current value  |

### Slots

| Name        | Description                              |
| ----------- | ---------------------------------------- |
| `label`     | Label content                            |
| `help-text` | Help text content                        |
| `input`     | Native text area element managed by Lion |
| `prefix`    | Content before the text area value       |
| `suffix`    | Content after the text area value        |
| `feedback`  | Validation feedback content              |

### CSS Parts

| Part          | Description                     |
| ------------- | ------------------------------- |
| `label`       | The label wrapper               |
| `help-text`   | The help text wrapper           |
| `input-group` | The input group wrapper         |
| `control`     | The visual text area control    |
| `input`       | The native text area wrapper    |
| `prefix`      | The prefix slot container       |
| `suffix`      | The suffix slot container       |
| `meta`        | The feedback and counter row    |
| `feedback`    | The validation feedback wrapper |
| `counter`     | The character counter           |

## Accessibility

<ClientOnly>
<A11yReport component="co-textarea" />
</ClientOnly>

### Keyboard interaction

| Key         | Action                                   |
| ----------- | ---------------------------------------- |
| `Tab`       | Moves focus to the text area             |
| `Shift+Tab` | Moves focus to the previous focus target |
| Text input  | Updates the value and emits `co-input`   |
| `Enter`     | Adds a line break inside the text area   |

### ARIA notes

- Lion connects `label`, `help-text`, and `feedback` content to the native text area through ARIA relationships.
- External native label layouts are supported through [`co-label`](/components/label) plus the text area's `id`.
- Lion sets `aria-invalid` when validation feedback is visible.
- The `danger` property is visual only and does not set `aria-invalid`.
- The character counter is connected through `aria-describedby` when `maxlength` is set.
- `readonly` text areas remain focusable; `disabled` text areas do not participate in normal interaction.

## Changelog

<ComponentChangelog component="co-textarea" />
