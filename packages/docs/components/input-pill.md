# Input Pill

<ComponentStatus component="co-input-pill" />

The `co-input-pill` is a stylized standalone input with a pill shape, designed for prominent call-to-action contexts like search bars and chat inputs. It extends `co-input` with all its form capabilities while hiding the label, help text, and feedback for a clean standalone appearance.

## Interactive Demo

<ComponentDemo
  tag="co-input-pill"
  :defaults="{ variant: 'default', size: 'md' }"
  :options="{ variant: ['default', 'search', 'chat'], size: ['sm', 'md', 'lg', 'xl'] }"
  :booleans="['disabled']"
  :textInputs="['placeholder', 'prefix-icon', 'action-icon']"
/>

## Variants

### Search

The `search` variant adds a search icon prefix.

<ClientOnly>
<div style="max-width: 480px; margin: 16px 0 24px;">
  <co-input-pill variant="search" placeholder="Search..."></co-input-pill>
</div>
</ClientOnly>

### Chat

The `chat` variant adds a circular send button on the right.

<ClientOnly>
<div style="max-width: 480px; margin: 16px 0 24px;">
  <co-input-pill variant="chat" placeholder="Message"></co-input-pill>
</div>
</ClientOnly>

### Custom Icons

Override the default icons with `prefix-icon` and `action-icon` properties.

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 480px; margin: 16px 0 24px;">
  <co-input-pill prefix-icon="star" action-icon="send" placeholder="Favorite and send"></co-input-pill>
  <co-input-pill prefix-icon="location-on" placeholder="Find nearby"></co-input-pill>
  <co-input-pill action-icon="add" placeholder="Add item"></co-input-pill>
</div>
</ClientOnly>

## Sizes

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 480px; margin: 16px 0 24px;">
  <co-input-pill variant="search" size="sm" placeholder="Small"></co-input-pill>
  <co-input-pill variant="search" size="md" placeholder="Medium (default)"></co-input-pill>
  <co-input-pill variant="search" size="lg" placeholder="Large"></co-input-pill>
  <co-input-pill variant="search" size="xl" placeholder="Extra large"></co-input-pill>
</div>
</ClientOnly>

## States

<ClientOnly>
<div style="display: grid; gap: 16px; max-width: 480px; margin: 16px 0 24px;">
  <co-input-pill variant="chat" placeholder="Default"></co-input-pill>
  <co-input-pill variant="chat" placeholder="Disabled" disabled></co-input-pill>
</div>
</ClientOnly>

## Validation

`co-input-pill` inherits `co-input` validation, including `required`, `pattern`, custom messages, and the Lion `validators` property. It intentionally hides label, help text, and feedback, so use [`co-input`](/components/input) inside [`co-form`](/components/form) when users need visible inline validation. See the [Form validation guide](/components/form#validation) for the full validation API.

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<script type="module">
  import '@cobalt/components/input-pill';
</script>

<!-- Search -->
<co-input-pill variant="search" placeholder="Search..."></co-input-pill>

<!-- Chat with action button -->
<co-input-pill variant="chat" placeholder="Message"></co-input-pill>

<!-- Custom icons -->
<co-input-pill prefix-icon="star" action-icon="send" placeholder="Send"></co-input-pill>

<!-- Listen for action button clicks -->
<co-input-pill id="chat" variant="chat" placeholder="Message"></co-input-pill>
<script>
  document.getElementById('chat').addEventListener('co-action', (e) => {
    console.log('Send:', e.detail.value);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoInputPill } from '@cobalt/react';

function App() {
  return (
    <>
      <CoInputPill variant="search" placeholder="Search..." />
      <CoInputPill
        variant="chat"
        placeholder="Message"
        onCoAction={(e) => console.log('Send:', e.detail.value)}
      />
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoInputPill } from '@cobalt/vue';

function onAction(e) {
  console.log('Send:', e.detail.value);
}
</script>

<template>
  <CoInputPill variant="search" placeholder="Search..." />
  <CoInputPill variant="chat" placeholder="Message" @co-action="onAction" />
</template>
```

</template>

<template #angular>

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoInputPill } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoInputPill],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onAction(event: CustomEvent) {
    console.log('Send:', event.detail.value);
  }
}
```

```html
<co-input-pill variant="search" placeholder="Search..."></co-input-pill>
<co-input-pill variant="chat" placeholder="Message" (coAction)="onAction($event)"></co-input-pill>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Search bars** — prominent, standalone search inputs
- **Chat/messaging** — inline message composition with a send action
- **Quick actions** — any standalone input with a single call-to-action
- **Hero sections** — large, attention-grabbing input fields

### When NOT to use

- **Form fields** — use `co-input` inside `co-form` for standard forms
- **Multiple actions** — if the input needs multiple buttons, use a custom layout
- **Validation feedback** — action inputs hide feedback; use `co-input` if validation messages are needed

### Content guidelines

- Use clear, action-oriented placeholder text: "Search...", "Message", "Ask a question"
- Keep the action icon recognizable: search, send, add
- Match the variant to the use case — don't use `chat` for a search bar

## API

### Properties

| Property          | Type                              | Default     | Description                             |
| ----------------- | --------------------------------- | ----------- | --------------------------------------- |
| `variant`         | `'default' \| 'search' \| 'chat'` | `'default'` | Configures default prefix/action icons  |
| `action-icon`     | `string`                          | —           | Override the action button icon         |
| `prefix-icon`     | `string`                          | —           | Override the prefix icon                |
| `placeholder`     | `string`                          | `''`        | Input placeholder text                  |
| `size`            | `'sm' \| 'md' \| 'lg' \| 'xl'`    | `'md'`      | Controls height, padding, and icon size |
| `disabled`        | `boolean`                         | `false`     | Prevents interaction                    |
| `required`        | `boolean`                         | `false`     | Inherited required validation           |
| `requiredMessage` | `string`                          | -           | Custom required message                 |
| `pattern`         | `string`                          | -           | Whole-value regular expression          |
| `patternMessage`  | `string`                          | -           | Custom pattern message                  |
| `validators`      | `Validator[]`                     | -           | Custom Lion validators                  |

### Events

| Event       | Detail      | Description                             |
| ----------- | ----------- | --------------------------------------- |
| `co-action` | `{ value }` | Fired when the action button is clicked |
| `co-focus`  | —           | Inherited from co-input                 |
| `co-blur`   | —           | Inherited from co-input                 |
| `co-input`  | `{ value }` | Inherited from co-input                 |
| `co-change` | `{ value }` | Inherited from co-input                 |

### Slots

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| `prefix` | Custom prefix content (replaces default icon)  |
| `suffix` | Custom suffix content (replaces action button) |

### CSS Parts

| Part            | Description                |
| --------------- | -------------------------- |
| `input-group`   | The input group wrapper    |
| `control`       | The visual input control   |
| `prefix`        | The prefix icon container  |
| `suffix`        | The suffix container       |
| `action-button` | The circular action button |

## Accessibility

<ClientOnly>
<A11yReport component="co-input-pill" />
</ClientOnly>

### Keyboard interaction

| Key     | Action                                          |
| ------- | ----------------------------------------------- |
| `Enter` | Activates the action button (if present)        |
| `Tab`   | Moves focus between the input and action button |

### ARIA notes

- The action button has `aria-label="Submit"` for screen readers.
- The native input inherits all ARIA attributes from `co-input` via Lion.
- When `disabled`, `aria-disabled` is propagated to both the input and the action button.

## Changelog

<ComponentChangelog component="co-input-pill" />
