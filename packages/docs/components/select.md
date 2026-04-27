# Select

<ComponentStatus component="co-select" />

The `co-select` component provides a themed, accessible dropdown select built on Lion's `LionSelectRich`. It uses `co-option` for fully customizable option items with keyboard navigation, focus management, and validation support.

## Interactive Demo

<ComponentDemo
  tag="co-select"
  :defaults="{ size: 'md' }"
  :options="{ size: ['sm', 'md', 'lg', 'xl'] }"
  :booleans="['disabled', 'danger', 'required']"
  :slotHtml="'<co-option value=&quot;apple&quot;>Apple</co-option><co-option value=&quot;banana&quot;>Banana</co-option><co-option value=&quot;cherry&quot;>Cherry</co-option>'"
/>

## Sizes

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 320px; margin: 16px 0 24px;">
  <co-select label="Small" name="demo-sm" size="sm">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-select>
  <co-select label="Medium (default)" name="demo-md" size="md">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-select>
  <co-select label="Large" name="demo-lg" size="lg">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-select>
  <co-select label="Extra large" name="demo-xl" size="xl">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-select>
</div>
</ClientOnly>

## States

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 320px; margin: 16px 0 24px;">
  <co-select label="Default" name="state-default">
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-select>
  <co-select label="Disabled" name="state-disabled" disabled>
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-select>
  <co-select label="Danger" name="state-danger" danger>
    <co-option value="apple">Apple</co-option>
    <co-option value="banana">Banana</co-option>
  </co-select>
</div>
</ClientOnly>

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
</co-select>

<co-select label="Fruit" (coChange)="onChange($event)">
  <co-option value="apple">Apple</co-option>
</co-select>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Predefined choices** — use when the user must pick from a fixed set of options
- **Space-constrained forms** — compact alternative to radio groups or list boxes
- **Single selection** — when only one value can be chosen at a time

### When NOT to use

- **Searchable options** — use [Combo Box](/components/combobox) when users need to filter/search
- **Few options (2-3)** — consider radio buttons for better visibility
- **Multiple selection** — use [List Box](/components/listbox) with `multiple-choice`
- **Free-text input** — use [Input](/components/input) or [Text Area](/components/textarea)

### Content guidelines

- Keep option labels concise and scannable
- Order options logically (alphabetical, frequency, or semantic grouping)
- Use a placeholder or `has-no-default-selected` when no default makes sense

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

### Keyboard interaction

| Key               | Action                                           |
| ----------------- | ------------------------------------------------ |
| `Enter` / `Space` | Opens dropdown or selects focused option         |
| `ArrowDown`       | Opens dropdown or moves to next option           |
| `ArrowUp`         | Opens dropdown or moves to previous option       |
| `Escape`          | Closes dropdown, returns focus to invoker        |
| `Tab`             | Closes dropdown, moves to next focusable element |
| `Home`            | Moves to first option                            |
| `End`             | Moves to last option                             |

### ARIA notes

- The invoker has `role="button"` with `aria-haspopup="listbox"` and `aria-expanded`
- The listbox has `role="listbox"` with `aria-orientation`
- Options have `role="option"` with `aria-selected` managed by Lion
- `aria-labelledby` and `aria-describedby` are connected automatically
- Disabled state is reflected via `aria-disabled`

## Changelog

<ComponentChangelog component="co-select" />
