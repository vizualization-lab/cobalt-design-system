# Button

<ComponentStatus component="co-button" />

The `co-button` component provides a themed, accessible button built on top of Lion Web Components. It supports multiple variants, sizes, loading states, and slot-based content composition.

## Interactive Demo

<ComponentDemo
  tag="co-button"
  label="Click me"
  :defaults="{ variant: 'primary', size: 'md' }"
  :options="{ variant: ['primary', 'secondary', 'danger', 'success', 'ghost'], size: ['sm', 'md', 'lg', 'xl'] }"
  :booleans="['disabled', 'loading']"
/>

## Variants

<ClientOnly>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0 24px;">
  <co-button variant="primary">Primary</co-button>
  <co-button variant="secondary">Secondary</co-button>
  <co-button variant="danger">Danger</co-button>
  <co-button variant="success">Success</co-button>
  <co-button variant="ghost">Ghost</co-button>
</div>
</ClientOnly>

| Variant     | Purpose                                                |
| ----------- | ------------------------------------------------------ |
| `primary`   | Main call-to-action. Use sparingly — one per section.  |
| `secondary` | Supporting actions alongside a primary button.         |
| `danger`    | Destructive actions like delete or remove.             |
| `success`   | Confirmation or positive actions like save or approve. |
| `ghost`     | Low-emphasis actions with no background or border.     |

## Sizes

<ClientOnly>
<div style="display: flex; gap: 12px; align-items: center; margin: 16px 0 24px;">
  <co-button size="sm">Small</co-button>
  <co-button size="md">Medium</co-button>
  <co-button size="lg">Large</co-button>
  <co-button size="xl">Extra Large</co-button>
</div>
</ClientOnly>

## States

<ClientOnly>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0 24px;">
  <co-button disabled>Disabled</co-button>
  <co-button loading>Loading</co-button>
</div>
</ClientOnly>

## Slots

Use named slots to add icons or other content before or after the button label.

<ClientOnly>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0 24px;">
  <co-button><co-icon slot="prefix" name="star" size="sm"></co-icon> With Prefix</co-button>
  <co-button>With Suffix <co-icon slot="suffix" name="east" size="sm"></co-icon></co-button>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/button';
  import '@cobalt/components/icon';
</script>

<!-- Basic usage -->
<co-button variant="primary">Save changes</co-button>

<!-- With slots: use <co-icon> for prefix/suffix content -->
<co-button variant="secondary" size="lg">
  <co-icon slot="prefix" name="attachment" size="sm"></co-icon>
  Attach file
</co-button>

<!-- Disabled + loading states -->
<co-button disabled>Can't touch this</co-button>
<co-button loading>Submitting…</co-button>

<!-- As a link -->
<co-button href="https://example.com" target="_blank"> Visit site </co-button>

<!-- Listen to events -->
<co-button id="my-btn">Click me</co-button>
<script>
  document.getElementById('my-btn').addEventListener('co-focus', () => console.log('focused'));
</script>
```

</template>

<template #react>

```tsx
import { CoButton, CoIcon } from '@cobalt/react';

function App() {
  return (
    <>
      {/* Basic usage */}
      <CoButton variant="primary">Save changes</CoButton>

      {/* With slots: use CoIcon for prefix/suffix content */}
      <CoButton variant="secondary" size="lg">
        <CoIcon slot="prefix" name="attachment" size="sm" />
        Attach file
      </CoButton>

      {/* Disabled + loading states */}
      <CoButton disabled>Can't touch this</CoButton>
      <CoButton loading>Submitting…</CoButton>

      {/* As a link */}
      <CoButton href="https://example.com" target="_blank">
        Visit site
      </CoButton>

      {/* Listen to events */}
      <CoButton onCoFocus={() => console.log('focused')}>Click me</CoButton>
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoButton, CoIcon } from '@cobalt/vue';

function onFocus() {
  console.log('focused');
}
</script>

<template>
  <!-- Basic usage -->
  <CoButton variant="primary">Save changes</CoButton>

  <!-- With slots: use CoIcon for prefix/suffix content -->
  <CoButton variant="secondary" size="lg">
    <CoIcon slot="prefix" name="attachment" size="sm" />
    Attach file
  </CoButton>

  <!-- Disabled + loading states -->
  <CoButton disabled>Can't touch this</CoButton>
  <CoButton loading>Submitting…</CoButton>

  <!-- As a link -->
  <CoButton href="https://example.com" target="_blank">Visit site</CoButton>

  <!-- Listen to events -->
  <CoButton @co-focus="onFocus">Click me</CoButton>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts — standalone component with CoButton + CoIcon
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoButton, CoIcon } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoButton, CoIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onFocus(event: CustomEvent) {
    console.log('focused');
  }
}
```

```html
<!-- app.component.html -->

<!-- Basic usage -->
<co-button variant="primary">Save changes</co-button>

<!-- With slots: use <co-icon> for prefix/suffix content -->
<co-button variant="secondary" size="lg">
  <co-icon slot="prefix" name="attachment" size="sm"></co-icon>
  Attach file
</co-button>

<!-- Disabled + loading states -->
<co-button disabled>Can't touch this</co-button>
<co-button loading>Submitting…</co-button>

<!-- As a link -->
<co-button href="https://example.com" target="_blank">Visit site</co-button>

<!-- Listen to events -->
<co-button (coFocus)="onFocus($event)">Click me</co-button>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Form submissions** — primary actions like "Save", "Submit", "Create"
- **Calls to action** — directing users toward a key task
- **Dialogs and modals** — confirm/cancel action pairs
- **Toolbars** — grouped actions using `secondary` variant
- **Destructive confirmations** — use `danger` for delete, remove, or revoke actions
- **Positive confirmations** — use `success` for approve, confirm, or complete actions

### When NOT to use

- **Navigation** — use `<a>` links or a router link instead; buttons are for actions, not page transitions. Exception: use `href` prop for download links or external targets.
- **Inline text links** — use an anchor tag styled as a link, not a button
- **Toggle states** — consider a switch, checkbox, or toggle button group instead
- **Repeating list actions** — if every row in a table has a button, consider icon buttons or a contextual menu to reduce visual noise

### Content guidelines

- Use **clear, concise verbs**: "Save", "Delete", "Upload" — not "Click here" or "Submit form"
- **Sentence case** for labels: "Save changes" not "Save Changes"
- Avoid long labels — if you need more than 3 words, reconsider the UX
- Pair `danger` buttons with a confirmation step (dialog or undo)
- Show `loading` state when an action takes more than ~300ms

### Layout guidelines

- Place the **primary action on the right** in button groups (LTR layouts)
- Limit to **one primary button per visible section**
- Use consistent sizing within a button group — don't mix `sm` and `lg`
- Maintain at least 8px gap between adjacent buttons

## API

### Properties

| Property   | Type                                                           | Default     | Description                                 |
| ---------- | -------------------------------------------------------------- | ----------- | ------------------------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'danger' \| 'success' \| 'ghost'` | `'primary'` | Visual style of the button                  |
| `size`     | `'sm' \| 'md' \| 'lg' \| 'xl'`                                 | `'md'`      | Controls min-height, padding, and font size |
| `disabled` | `boolean`                                                      | `false`     | Prevents interaction                        |
| `loading`  | `boolean`                                                      | `false`     | Shows spinner, disables interaction         |
| `type`     | `'submit' \| 'reset' \| 'button'`                              | `'button'`  | HTML button type                            |
| `href`     | `string`                                                       | —           | Renders as an anchor element                |
| `target`   | `'_blank' \| '_self' \| '_parent' \| '_top'`                   | —           | Link target (when `href` is set)            |

### Events

| Event      | Detail | Description                          |
| ---------- | ------ | ------------------------------------ |
| `co-focus` | —      | Fired when the button receives focus |
| `co-blur`  | —      | Fired when the button loses focus    |

### Slots

| Name        | Description              |
| ----------- | ------------------------ |
| _(default)_ | The button label         |
| `prefix`    | Content before the label |
| `suffix`    | Content after the label  |

### CSS Parts

| Part     | Description                                |
| -------- | ------------------------------------------ |
| `base`   | The underlying `<button>` or `<a>` element |
| `label`  | The label wrapper                          |
| `prefix` | The prefix slot container                  |
| `suffix` | The suffix slot container                  |

## Accessibility

<ClientOnly>
<A11yReport component="co-button" />
</ClientOnly>

### Keyboard interaction

| Key               | Action                                        |
| ----------------- | --------------------------------------------- |
| `Enter` / `Space` | Activates the button                          |
| `Tab`             | Moves focus to the next focusable element     |
| `Shift+Tab`       | Moves focus to the previous focusable element |

### ARIA notes

- The `<co-button>` element inherits its role from Lion's `LionButton` base class, which sets `role="button"` on the host.
- When `disabled` is set, the component sets `aria-disabled="true"` and removes the element from the tab order.
- When `loading` is set, the spinner is hidden from assistive technology via `aria-hidden="true"` and the button label remains accessible.
- When using `href`, the component renders as an `<a>` element, inheriting link semantics automatically.

## Changelog

<ComponentChangelog component="co-button" />
