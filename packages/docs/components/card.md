# Card

<ComponentStatus component="co-card" />

A layout container with rounded corners, subtle shadow, and structured header, body, and footer regions. Cards group related content and actions into a visually distinct surface.

## Demo

<ClientOnly>
<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 16px 0 24px;">
  <co-card style="max-width: 480px;">
    <h3 slot="header" style="margin: 0; font-weight: 600;">Dashboard</h3>
    <p style="margin: 0;">Track live operational health. Compose page-level structure inside the body slot.</p>
    <div slot="footer" style="display: flex; gap: 8px;">
      <co-button variant="primary" size="sm">View</co-button>
      <co-button variant="ghost" size="sm">Dismiss</co-button>
    </div>
  </co-card>
</div>
</ClientOnly>

```html
<co-card>
  <h3 slot="header">Dashboard</h3>
  <p>Track live operational health.</p>
  <div slot="footer">
    <co-button variant="primary" size="sm">View</co-button>
    <co-button variant="ghost" size="sm">Dismiss</co-button>
  </div>
</co-card>
```

## Slots

### Body only

<ClientOnly>
<co-card style="max-width: 480px; margin: 16px 0 24px;">
  <p style="margin: 0;">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
</co-card>
</ClientOnly>

### Header + body + footer

<ClientOnly>
<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 16px 0 24px;">
  <co-card style="flex: 1; min-width: 200px;">
    <h4 slot="header" style="margin: 0;">Incidents</h4>
    <p style="margin: 0; font-size: 2rem; font-weight: 700;">12</p>
    <span slot="footer" style="font-size: 0.85rem; color: var(--co-color-text-tertiary);">Last 24 hours</span>
  </co-card>
  <co-card style="flex: 1; min-width: 200px;">
    <h4 slot="header" style="margin: 0;">Uptime</h4>
    <p style="margin: 0; font-size: 2rem; font-weight: 700;">99.9%</p>
    <span slot="footer" style="font-size: 0.85rem; color: var(--co-color-text-tertiary);">Last 30 days</span>
  </co-card>
  <co-card style="flex: 1; min-width: 200px;">
    <h4 slot="header" style="margin: 0;">Alerts</h4>
    <p style="margin: 0; font-size: 2rem; font-weight: 700;">3</p>
    <span slot="footer" style="font-size: 0.85rem; color: var(--co-color-text-tertiary);">Active now</span>
  </co-card>
</div>
</ClientOnly>

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<script type="module">
  import '@cobalt/components/card';
</script>

<co-card label="Summary">
  <h3 slot="header">Title</h3>
  <p>Body content goes here.</p>
  <button slot="footer">Action</button>
</co-card>
```

</template>

<template #react>

```tsx
import { CoCard } from '@cobalt/react';

function App() {
  return (
    <CoCard label="Summary">
      <h3 slot="header">Title</h3>
      <p>Body content goes here.</p>
      <button slot="footer">Action</button>
    </CoCard>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoCard } from '@cobalt/vue';
</script>

<template>
  <CoCard label="Summary">
    <h3 slot="header">Title</h3>
    <p>Body content goes here.</p>
    <button slot="footer">Action</button>
  </CoCard>
</template>
```

</template>

<template #angular>

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoCard } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoCard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<!-- app.component.html -->
<co-card label="Summary">
  <h3 slot="header">Title</h3>
  <p>Body content goes here.</p>
  <button slot="footer">Action</button>
</co-card>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- To group related content and actions into a contained surface
- For dashboard widgets, summary panels, and content previews
- When content needs visual separation from the page background

### When NOT to use

- For full-width sections — use a `<section>` or `co-banner` instead
- As a button or clickable surface — cards are layout containers, not interactive elements
- For modal or dialog content — use a dedicated dialog component

### Content guidelines

- Use the header slot for a concise title or label
- Place the primary content in the default slot
- Reserve the footer slot for actions (buttons, links) or metadata

## API

### Properties

| Property | Type     | Default | Description                                      |
| -------- | -------- | ------- | ------------------------------------------------ |
| `label`  | `string` | `''`    | Accessible label (adds `role="region"` when set) |

### Slots

| Name        | Description                        |
| ----------- | ---------------------------------- |
| `header`    | Optional header area at the top    |
| _(default)_ | Main body content                  |
| `footer`    | Optional footer area at the bottom |

### CSS Parts

| Part     | Description              |
| -------- | ------------------------ |
| `base`   | The card container       |
| `header` | The header slot wrapper  |
| `body`   | The default slot wrapper |
| `footer` | The footer slot wrapper  |

### Design Tokens

| Token                            | Default                          | Description          |
| -------------------------------- | -------------------------------- | -------------------- |
| `--co-component-card-padding`    | `var(--co-space-inset-lg)`       | Internal padding     |
| `--co-component-card-gap`        | `var(--co-space-gap-sm)`         | Gap between sections |
| `--co-component-card-radius`     | `var(--co-shape-radius-lg)`      | Corner radius        |
| `--co-component-card-background` | `var(--co-color-surface-raised)` | Background color     |
| `--co-component-card-shadow`     | `var(--co-elevation-shadow-sm)`  | Elevation shadow     |

## Accessibility

<ClientOnly>
<A11yReport component="co-card" />
</ClientOnly>

### Keyboard interaction

| Key   | Action                                                   |
| ----- | -------------------------------------------------------- |
| `Tab` | Moves focus through interactive elements within the card |

### ARIA notes

- When `label` is provided, the card renders with `role="region"` and `aria-label` for landmark identification
- Without a label, the card is a generic container with no ARIA role
- Ensure slotted interactive content has its own accessible labels

### Manual testing checklist

- [ ] Card renders with rounded corners and subtle shadow
- [ ] Header, body, and footer slots display in correct order
- [ ] Content is centered within the card
- [ ] Shadow visible in both light and dark modes
- [ ] Card works without header or footer slots

## Changelog

<ComponentChangelog component="co-card" />
