# Label

<ComponentStatus component="co-label" />

The `co-label` component provides a styled native `<label>` element for layouts where the label must live outside a field component. It is additive to Cobalt's built-in field `label` APIs and preserves browser-native click and focus behavior.

## Interactive Demo

<ComponentDemo
  tag="co-label"
  :defaults="{ for: 'demo-field', 'optional-label': '(optional)' }"
  :booleans="['required', 'optional']"
  :textInputs="['for', 'optional-label']"
  :slotHtml="'Customer name'"
/>

## States

<ClientOnly>
<div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center; margin: 16px 0 24px;">
  <co-label>Label</co-label>
  <co-label required>Label</co-label>
  <co-label optional>Label</co-label>
</div>
</ClientOnly>

## Prefix And Suffix

Use `prefix` and `suffix` for compact decorative or contextual content around the label text.

```html
<co-label for="summary">
  <co-icon slot="prefix" name="description" size="sm" aria-hidden="true"></co-icon>
  Summary
</co-label>
<co-textarea id="summary" rows="3"></co-textarea>
```

<ClientOnly>
<div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center; margin: 16px 0 24px;">
  <co-label>
    <co-icon slot="prefix" name="arrow-back" size="sm" aria-hidden="true"></co-icon>
    Previous step
  </co-label>
  <co-label>
    Continue
    <co-icon slot="suffix" name="arrow-forward" size="sm" aria-hidden="true"></co-icon>
  </co-label>
</div>
</ClientOnly>

## Field Examples

Use `co-label` when the label must be a separate DOM element. Omit the field component's own `label` prop or slot when you do this, otherwise the field will render a second visible label.

<ClientOnly>
<div style="display: grid; gap: 20px; max-width: 420px; margin: 16px 0 24px;">
  <div style="display: grid; gap: 8px;">
    <co-label for="native-email" required>Email address</co-label>
    <input
      id="native-email"
      type="email"
      placeholder="name@example.com"
      style="padding: 10px 12px; border: 1px solid var(--co-color-border-default); border-radius: var(--co-control-radius-interactive); font: inherit;"
    />
  </div>

  <div style="display: grid; gap: 8px;">
    <co-label for="external-input">Project name</co-label>
    <co-input id="external-input" placeholder="Atlas"></co-input>
  </div>

  <div style="display: grid; gap: 8px;">
    <co-label for="external-textarea" optional>Summary</co-label>
    <co-textarea id="external-textarea" rows="3" placeholder="Add rollout notes"></co-textarea>
  </div>

  <div style="display: grid; gap: 8px;">
    <co-label for="external-select" required>Deployment region</co-label>
    <co-select id="external-select">
      <co-option value="us-east-1">US East 1</co-option>
      <co-option value="us-west-2">US West 2</co-option>
      <co-option value="eu-west-1">EU West 1</co-option>
    </co-select>
  </div>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/label';
  import '@cobalt/components/input';
  import '@cobalt/components/textarea';
  import '@cobalt/components/select';
  import '@cobalt/components/option';
  import '@cobalt/components/icon';
</script>

<!-- Native input -->
<co-label for="email" required>Email address</co-label>
<input id="email" type="email" placeholder="name@example.com" />

<!-- External label for a Cobalt field -->
<co-label for="project-name">Project name</co-label>
<co-input id="project-name" placeholder="Atlas"></co-input>

<!-- Optional override copy -->
<co-label for="summary" optional optional-label="(recommended)">
  <co-icon slot="prefix" name="description" size="sm" aria-hidden="true"></co-icon>
  Summary
</co-label>
<co-textarea id="summary" rows="3"></co-textarea>
```

</template>

<template #react>

```tsx
import { CoIcon, CoInput, CoLabel, CoOption, CoSelect, CoTextarea } from '@cobalt/react';

function App() {
  return (
    <>
      <CoLabel htmlFor="email" required>
        Email address
      </CoLabel>
      <input id="email" type="email" placeholder="name@example.com" />

      <CoLabel htmlFor="project-name">Project name</CoLabel>
      <CoInput id="project-name" placeholder="Atlas" />

      <CoLabel htmlFor="summary" optional optionalLabel="(recommended)">
        <CoIcon slot="prefix" name="description" size="sm" aria-hidden="true" />
        Summary
      </CoLabel>
      <CoTextarea id="summary" rows={3} />

      <CoLabel htmlFor="region" required>
        Deployment region
      </CoLabel>
      <CoSelect id="region">
        <CoOption value="us-east-1">US East 1</CoOption>
        <CoOption value="us-west-2">US West 2</CoOption>
      </CoSelect>
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoIcon, CoInput, CoLabel, CoOption, CoSelect, CoTextarea } from '@cobalt/vue';
</script>

<template>
  <CoLabel htmlFor="email" required>Email address</CoLabel>
  <input id="email" type="email" placeholder="name@example.com" />

  <CoLabel htmlFor="project-name">Project name</CoLabel>
  <CoInput id="project-name" placeholder="Atlas" />

  <CoLabel htmlFor="summary" optional optionalLabel="(recommended)">
    <CoIcon slot="prefix" name="description" size="sm" aria-hidden="true" />
    Summary
  </CoLabel>
  <CoTextarea id="summary" :rows="3" />

  <CoLabel htmlFor="region" required>Deployment region</CoLabel>
  <CoSelect id="region">
    <CoOption value="us-east-1">US East 1</CoOption>
    <CoOption value="us-west-2">US West 2</CoOption>
  </CoSelect>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoIcon, CoInput, CoLabel, CoOption, CoSelect, CoTextarea } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoIcon, CoInput, CoLabel, CoOption, CoSelect, CoTextarea],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<!-- app.component.html -->
<co-label [htmlFor]="'email'" [required]="true">Email address</co-label>
<input id="email" type="email" placeholder="name@example.com" />

<co-label [htmlFor]="'project-name'">Project name</co-label>
<co-input id="project-name" placeholder="Atlas"></co-input>

<co-label [htmlFor]="'summary'" [optional]="true" [optionalLabel]="'(recommended)'">
  <co-icon slot="prefix" name="description" size="sm" aria-hidden="true"></co-icon>
  Summary
</co-label>
<co-textarea id="summary" [rows]="3"></co-textarea>

<co-label [htmlFor]="'region'" [required]="true">Deployment region</co-label>
<co-select id="region">
  <co-option value="us-east-1">US East 1</co-option>
  <co-option value="us-west-2">US West 2</co-option>
</co-select>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **External form layouts** - when labels need to sit in their own grid column, stack, or definition-list style layout
- **Mixed native and Cobalt forms** - when one screen combines native controls with Cobalt fields
- **Native label semantics** - when you want the browser's built-in `for` click and focus behavior
- **Label adornments** - when you need compact prefix or suffix icons around the label text

### When NOT to use

- **Standard Lion field layouts** - prefer the built-in `label` prop or slot on `co-input`, `co-textarea`, `co-select`, and `co-combobox`
- **Duplicate labels** - do not provide both `co-label` and a field's own visible `label` prop unless you intentionally want two labels
- **Interactive label content** - avoid placing buttons or links inside the label text flow
- **Placeholder-only forms** - placeholder text is not a substitute for a visible label

### Content guidelines

- Keep label text concise and specific, like "Deployment region" instead of "Region".
- Use `required` for the built-in asterisk instead of typing a literal `*` into the label content.
- Use `optional` for the default `(optional)` suffix, or `optionalLabel` when the visible copy needs to change.
- Mark decorative prefix and suffix icons with `aria-hidden="true"`.

## API

### Properties

| Property        | Type      | Default        | Description                                                       |
| --------------- | --------- | -------------- | ----------------------------------------------------------------- |
| `htmlFor`       | `string`  | —              | Target control id. Reflected to the native `for` attribute.       |
| `required`      | `boolean` | `false`        | Renders the leading required marker and suppresses optional text. |
| `optional`      | `boolean` | `false`        | Renders optional suffix text when `required` is not set.          |
| `optionalLabel` | `string`  | `'(optional)'` | Visible optional suffix copy when `optional` is set.              |

### Slots

| Name        | Description                       |
| ----------- | --------------------------------- |
| _(default)_ | The visible label content         |
| `prefix`    | Optional content before the label |
| `suffix`    | Optional content after the label  |

## Accessibility

<ClientOnly>
<A11yReport component="co-label" />
</ClientOnly>

### Keyboard interaction

`co-label` does not introduce custom keyboard behavior. It delegates interaction to the native label association for the target control.

### ARIA notes

- `co-label` relies on native `<label>` semantics instead of ARIA-only naming.
- Use `htmlFor` or the `for` attribute with a native labelable control or a form-associated custom element.
- Keep helper text and validation feedback on the target field component; `co-label` only owns the visible label.
- Avoid extra interactive content inside the label flow because it makes the associated control harder to activate.

## Changelog

<ComponentChangelog component="co-label" />
