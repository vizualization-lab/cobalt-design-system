# Form

<ComponentStatus component="co-form" />

The `co-form` component wraps Lion's `LionForm` to provide form-level features: grouped validation, serialization (`modelValue` as an object of all field values), submit/reset handling, interaction state tracking, and automatic focus-on-first-error. It renders a `<form>` element internally so you can nest form fields directly.

## Interactive Demo

<ComponentDemo
  tag="co-form"
  :defaults="{ label: 'Contact form' }"
  :booleans="['disabled']"
  :textInputs="['label']"
  :slotHtml="'<co-input label=&quot;Full name&quot; name=&quot;fullName&quot;></co-input><co-select label=&quot;Role&quot; name=&quot;role&quot;><co-option value=&quot;developer&quot;>Developer</co-option><co-option value=&quot;designer&quot;>Designer</co-option></co-select><co-textarea label=&quot;Comment&quot; name=&quot;comment&quot;></co-textarea><co-button type=&quot;submit&quot; variant=&quot;primary&quot;>Submit</co-button>'"
/>

## Basic Form

<ClientOnly>
<div style="max-width: 420px; margin: 16px 0 24px;">
  <co-form label="Contact">
    <co-input label="Full name" name="fullName"></co-input>
    <co-input label="Email address" name="email" type="email"></co-input>
    <co-textarea label="Message" name="message"></co-textarea>
    <co-button type="submit" variant="primary">Submit</co-button>
  </co-form>
</div>
</ClientOnly>

## Form with Validation

When the form is submitted, Lion validates all child fields. If any field has errors, the first erroneous field receives focus automatically.

<ClientOnly>
<div style="max-width: 420px; margin: 16px 0 24px;">
  <co-form label="Required fields">
    <co-input label="Username" name="username" required></co-input>
    <co-input label="Email" name="email" type="email" required></co-input>
    <co-button type="submit" variant="primary">Submit</co-button>
  </co-form>
</div>
</ClientOnly>

## Form Serialization

Access `modelValue` and `serializedValue` on the form element to read all named field values as a flat object.

```js
const form = document.querySelector('co-form');
form.addEventListener('co-submit', (event) => {
  console.log(event.detail.modelValue);
  // { fullName: 'Ada', email: 'ada@example.com', message: 'Hello!' }
});
```

## Reset

Use a `<co-button type="reset">` or call `form.reset()` to restore all fields to their initial values.

<ClientOnly>
<div style="max-width: 420px; margin: 16px 0 24px;">
  <co-form label="Resettable form">
    <co-input label="Name" name="name"></co-input>
    <co-input label="Email" name="email" type="email"></co-input>
    <div style="display: flex; gap: 8px;">
      <co-button type="submit" variant="primary">Submit</co-button>
      <co-button type="reset" variant="secondary">Reset</co-button>
    </div>
  </co-form>
</div>
</ClientOnly>

## Form with All Field Types

<ClientOnly>
<div style="max-width: 420px; margin: 16px 0 24px;">
  <co-form label="Full example">
    <co-input label="Name" name="name"></co-input>
    <co-input label="Email" name="email" type="email"></co-input>
    <co-select label="Department" name="department">
      <co-option value="engineering">Engineering</co-option>
      <co-option value="design">Design</co-option>
      <co-option value="product">Product</co-option>
    </co-select>
    <co-combobox label="Skills" name="skills" show-all-on-empty multiple>
      <co-option value="javascript">JavaScript</co-option>
      <co-option value="typescript">TypeScript</co-option>
      <co-option value="css">CSS</co-option>
      <co-option value="figma">Figma</co-option>
    </co-combobox>
    <co-listbox label="Role" name="role" has-no-default-selected>
      <co-option value="developer">Developer</co-option>
      <co-option value="designer">Designer</co-option>
      <co-option value="manager">Manager</co-option>
    </co-listbox>
    <co-textarea label="Bio" name="bio"></co-textarea>
    <div style="display: flex; gap: 8px;">
      <co-button type="submit" variant="primary">Submit</co-button>
      <co-button type="reset" variant="secondary">Reset</co-button>
    </div>
  </co-form>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/form';
  import '@cobalt/components/input';
  import '@cobalt/components/select';
  import '@cobalt/components/combobox';
  import '@cobalt/components/listbox';
  import '@cobalt/components/option';
  import '@cobalt/components/textarea';
</script>

<!-- Form with all field types -->
<co-form label="Full example" id="full-form">
  <co-input label="Name" name="name"></co-input>
  <co-input label="Email" name="email" type="email"></co-input>
  <co-select label="Department" name="department">
    <co-option value="engineering">Engineering</co-option>
    <co-option value="design">Design</co-option>
    <co-option value="product">Product</co-option>
  </co-select>
  <co-combobox label="Skills" name="skills" show-all-on-empty multiple>
    <co-option value="javascript">JavaScript</co-option>
    <co-option value="typescript">TypeScript</co-option>
    <co-option value="css">CSS</co-option>
    <co-option value="figma">Figma</co-option>
  </co-combobox>
  <co-listbox label="Role" name="role" has-no-default-selected>
    <co-option value="developer">Developer</co-option>
    <co-option value="designer">Designer</co-option>
    <co-option value="manager">Manager</co-option>
  </co-listbox>
  <co-textarea label="Bio" name="bio"></co-textarea>
  <co-button type="submit" variant="primary">Submit</co-button>
  <co-button type="reset" variant="secondary">Reset</co-button>
</co-form>

<!-- Listen to submit -->
<script>
  document.getElementById('full-form').addEventListener('co-submit', (event) => {
    console.log(event.detail.modelValue);
  });
</script>
```

</template>

<template #react>

```tsx
import {
  CoForm,
  CoInput,
  CoSelect,
  CoCombobox,
  CoListbox,
  CoOption,
  CoTextarea,
  CoButton,
} from '@cobalt/react';

function App() {
  const handleSubmit = (event) => {
    console.log(event.detail.modelValue);
  };

  return (
    <CoForm label="Full example" onCoSubmit={handleSubmit}>
      <CoInput label="Name" name="name" />
      <CoInput label="Email" name="email" type="email" />
      <CoSelect label="Department" name="department">
        <CoOption value="engineering">Engineering</CoOption>
        <CoOption value="design">Design</CoOption>
        <CoOption value="product">Product</CoOption>
      </CoSelect>
      <CoCombobox label="Skills" name="skills" showAllOnEmpty multiple>
        <CoOption value="javascript">JavaScript</CoOption>
        <CoOption value="typescript">TypeScript</CoOption>
        <CoOption value="css">CSS</CoOption>
        <CoOption value="figma">Figma</CoOption>
      </CoCombobox>
      <CoListbox label="Role" name="role" hasNoDefaultSelected>
        <CoOption value="developer">Developer</CoOption>
        <CoOption value="designer">Designer</CoOption>
        <CoOption value="manager">Manager</CoOption>
      </CoListbox>
      <CoTextarea label="Bio" name="bio" />
      <CoButton type="submit" variant="primary">
        Submit
      </CoButton>
      <CoButton type="reset" variant="secondary">
        Reset
      </CoButton>
    </CoForm>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import {
  CoForm,
  CoInput,
  CoSelect,
  CoCombobox,
  CoListbox,
  CoOption,
  CoTextarea,
  CoButton,
} from '@cobalt/vue';

function onSubmit(event) {
  console.log(event.detail.modelValue);
}
</script>

<template>
  <CoForm label="Full example" @co-submit="onSubmit">
    <CoInput label="Name" name="name" />
    <CoInput label="Email" name="email" type="email" />
    <CoSelect label="Department" name="department">
      <CoOption value="engineering">Engineering</CoOption>
      <CoOption value="design">Design</CoOption>
      <CoOption value="product">Product</CoOption>
    </CoSelect>
    <CoCombobox label="Skills" name="skills" show-all-on-empty multiple>
      <CoOption value="javascript">JavaScript</CoOption>
      <CoOption value="typescript">TypeScript</CoOption>
      <CoOption value="css">CSS</CoOption>
      <CoOption value="figma">Figma</CoOption>
    </CoCombobox>
    <CoListbox label="Role" name="role" has-no-default-selected>
      <CoOption value="developer">Developer</CoOption>
      <CoOption value="designer">Designer</CoOption>
      <CoOption value="manager">Manager</CoOption>
    </CoListbox>
    <CoTextarea label="Bio" name="bio" />
    <CoButton type="submit" variant="primary">Submit</CoButton>
    <CoButton type="reset" variant="secondary">Reset</CoButton>
  </CoForm>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  CoForm,
  CoInput,
  CoSelect,
  CoCombobox,
  CoListbox,
  CoOption,
  CoTextarea,
  CoButton,
} from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoForm, CoInput, CoSelect, CoCombobox, CoListbox, CoOption, CoTextarea, CoButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onSubmit(event: CustomEvent) {
    console.log(event.detail.modelValue);
  }
}
```

```html
<!-- app.component.html -->
<co-form label="Full example" (coSubmit)="onSubmit($event)">
  <co-input label="Name" name="name"></co-input>
  <co-input label="Email" name="email" type="email"></co-input>
  <co-select label="Department" name="department">
    <co-option value="engineering">Engineering</co-option>
    <co-option value="design">Design</co-option>
    <co-option value="product">Product</co-option>
  </co-select>
  <co-combobox label="Skills" name="skills" show-all-on-empty multiple>
    <co-option value="javascript">JavaScript</co-option>
    <co-option value="typescript">TypeScript</co-option>
    <co-option value="css">CSS</co-option>
    <co-option value="figma">Figma</co-option>
  </co-combobox>
  <co-listbox label="Role" name="role" has-no-default-selected>
    <co-option value="developer">Developer</co-option>
    <co-option value="designer">Designer</co-option>
    <co-option value="manager">Manager</co-option>
  </co-listbox>
  <co-textarea label="Bio" name="bio"></co-textarea>
  <co-button type="submit" variant="primary">Submit</co-button>
  <co-button type="reset" variant="secondary">Reset</co-button>
</co-form>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Grouped form fields** — wrap related inputs for grouped validation and serialization
- **Submit handling** — use `co-submit` to get all field values in one event detail
- **Validation flows** — Lion automatically focuses the first invalid field on submit
- **Reset support** — provide a reset button to restore fields to initial values

### When NOT to use

- **Single field** — a lone input does not need a form wrapper
- **Search bars** — use a simple input with an event handler instead
- **Non-interactive displays** — forms are for data entry, not data display

### Content guidelines

- Use a descriptive label that summarizes the form purpose, like "Contact information".
- Keep help text concise and relevant to the overall form.
- Write form-level validation messages to guide users toward fixing specific fields.

### Layout guidelines

- Stack fields vertically for most form layouts.
- Group related fields together and use consistent widths within a section.
- Place submit and reset buttons at the end of the form.

## API

### Properties

| Property   | Type      | Default | Description                      |
| ---------- | --------- | ------- | -------------------------------- |
| `label`    | `string`  | `''`    | Label text for the form          |
| `helpText` | `string`  | `''`    | Help text shown below the label  |
| `disabled` | `boolean` | `false` | Disables all child form elements |
| `name`     | `string`  | `''`    | Form name                        |

### Events

| Event       | Detail                                                                              | Description                                       |
| ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| `co-submit` | `{ modelValue: Record<string, unknown>; serializedValue: Record<string, unknown> }` | Fired when the form is submitted after validation |
| `co-reset`  | —                                                                                   | Fired when the form is reset                      |

### Slots

| Name        | Description                                                                          |
| ----------- | ------------------------------------------------------------------------------------ |
| (default)   | Form field content (co-input, co-select, co-combobox, co-listbox, co-textarea, etc.) |
| `label`     | Label content                                                                        |
| `help-text` | Help text content                                                                    |
| `feedback`  | Validation feedback content                                                          |

### CSS Parts

| Part        | Description                     |
| ----------- | ------------------------------- |
| `label`     | The label wrapper               |
| `help-text` | The help text wrapper           |
| `fields`    | The fields container            |
| `feedback`  | The validation feedback wrapper |

### Methods

| Method     | Description                                         |
| ---------- | --------------------------------------------------- |
| `submit()` | Programmatically submit the form                    |
| `reset()`  | Programmatically reset all fields to initial values |

## Accessibility

<ClientOnly>
<A11yReport component="co-form" />
</ClientOnly>

### Keyboard interaction

| Key     | Action                                           |
| ------- | ------------------------------------------------ |
| `Tab`   | Moves focus between form fields                  |
| `Enter` | Submits the form when a submit button is focused |

### ARIA notes

- Lion removes the `role` attribute from the form wrapper so the native `<form>` element provides semantics.
- Lion connects `label`, `help-text`, and `feedback` content through ARIA relationships.
- On submit with validation errors, focus moves to the first erroneous field automatically.
- `disabled` cascades to all child form elements, preventing interaction.

## Changelog

<ComponentChangelog component="co-form" />
