# Button

The `cb-button` component provides a themed, accessible button built on top of Shoelace. It supports multiple variants, sizes, loading states, and slot-based content composition.

## Interactive Demo

<ComponentDemo
  tag="cb-button"
  label="Click me"
  :defaults="{ variant: 'primary', size: 'md' }"
  :options="{ variant: ['primary', 'secondary', 'danger', 'ghost'], size: ['sm', 'md', 'lg'] }"
  :booleans="['disabled', 'loading']"
/>

## Variants

<ClientOnly>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0 24px;">
  <cb-button variant="primary">Primary</cb-button>
  <cb-button variant="secondary">Secondary</cb-button>
  <cb-button variant="danger">Danger</cb-button>
  <cb-button variant="ghost">Ghost</cb-button>
</div>
</ClientOnly>

| Variant     | Purpose                                               |
| ----------- | ----------------------------------------------------- |
| `primary`   | Main call-to-action. Use sparingly — one per section. |
| `secondary` | Supporting actions alongside a primary button.        |
| `danger`    | Destructive actions like delete or remove.            |
| `ghost`     | Low-emphasis actions, toolbars, or inline links.      |

## Sizes

<ClientOnly>
<div style="display: flex; gap: 12px; align-items: center; margin: 16px 0 24px;">
  <cb-button size="sm">Small</cb-button>
  <cb-button size="md">Medium</cb-button>
  <cb-button size="lg">Large</cb-button>
</div>
</ClientOnly>

## States

<ClientOnly>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0 24px;">
  <cb-button disabled>Disabled</cb-button>
  <cb-button loading>Loading</cb-button>
</div>
</ClientOnly>

## Slots

Use named slots to add icons or other content before or after the button label.

<ClientOnly>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0 24px;">
  <cb-button><span slot="prefix">★</span> With Prefix</cb-button>
  <cb-button>With Suffix <span slot="suffix">→</span></cb-button>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/button';
</script>

<!-- Basic usage -->
<cb-button variant="primary">Save changes</cb-button>

<!-- With slots -->
<cb-button variant="secondary" size="lg">
  <span slot="prefix">📎</span>
  Attach file
</cb-button>

<!-- Disabled + loading states -->
<cb-button disabled>Can't touch this</cb-button>
<cb-button loading>Submitting…</cb-button>

<!-- As a link -->
<cb-button href="https://example.com" target="_blank"> Visit site </cb-button>

<!-- Listen to events -->
<cb-button id="my-btn">Click me</cb-button>
<script>
  document.getElementById('my-btn').addEventListener('cb-focus', () => console.log('focused'));
</script>
```

</template>

<template #react>

```tsx
import { Button } from '@cobalt/react';

function App() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    await saveChanges();
    setLoading(false);
  }

  return (
    <>
      {/* Basic */}
      <Button variant="primary" onClick={handleClick}>
        Save changes
      </Button>

      {/* With loading state */}
      <Button loading={loading}>Submitting…</Button>

      {/* Danger variant */}
      <Button variant="danger" onCbFocus={() => console.log('focused')}>
        Delete account
      </Button>

      {/* Sizes */}
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { ref } from 'vue';
import { CbButton } from '@cobalt/vue';

const loading = ref(false);

async function handleClick() {
  loading.value = true;
  await saveChanges();
  loading.value = false;
}
</script>

<template>
  <!-- Basic -->
  <CbButton variant="primary" @click="handleClick"> Save changes </CbButton>

  <!-- With loading state -->
  <CbButton :loading="loading">Submitting…</CbButton>

  <!-- Danger variant -->
  <CbButton variant="danger" @cb-focus="onFocus"> Delete account </CbButton>

  <!-- Sizes -->
  <CbButton size="sm">Small</CbButton>
  <CbButton size="lg">Large</CbButton>
</template>
```

</template>

<template #angular>

```typescript
// app.module.ts — import CobaltButtonModule
import { NgModule } from '@angular/core';
import { CobaltButtonModule } from '@cobalt/angular';

@NgModule({
  imports: [CobaltButtonModule],
  // ...
})
export class AppModule {}
```

```html
<!-- app.component.html -->

<!-- Basic -->
<cb-button variant="primary" (click)="handleClick()"> Save changes </cb-button>

<!-- Bound properties -->
<cb-button [variant]="variant" [loading]="isLoading"> Submitting… </cb-button>

<!-- Danger variant with events -->
<cb-button variant="danger" (cbFocus)="onFocus($event)"> Delete account </cb-button>

<!-- Sizes -->
<cb-button size="sm">Small</cb-button>
<cb-button size="lg">Large</cb-button>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Form submissions** — primary actions like "Save", "Submit", "Create"
- **Calls to action** — directing users toward a key task
- **Dialogs and modals** — confirm/cancel action pairs
- **Toolbars** — grouped actions using `ghost` or `secondary` variants
- **Destructive confirmations** — use `danger` for delete, remove, or revoke actions

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

| Property   | Type                                              | Default     | Description                         |
| ---------- | ------------------------------------------------- | ----------- | ----------------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'danger' \| 'ghost'` | `'primary'` | Visual style of the button          |
| `size`     | `'sm' \| 'md' \| 'lg'`                            | `'md'`      | Controls padding and font size      |
| `disabled` | `boolean`                                         | `false`     | Prevents interaction                |
| `loading`  | `boolean`                                         | `false`     | Shows spinner, disables interaction |
| `type`     | `'submit' \| 'reset' \| 'button'`                 | `'button'`  | HTML button type                    |
| `href`     | `string`                                          | —           | Renders as an anchor element        |
| `target`   | `'_blank' \| '_self' \| '_parent' \| '_top'`      | —           | Link target (when `href` is set)    |

### Events

| Event      | Detail | Description                          |
| ---------- | ------ | ------------------------------------ |
| `cb-focus` | —      | Fired when the button receives focus |
| `cb-blur`  | —      | Fired when the button loses focus    |

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
