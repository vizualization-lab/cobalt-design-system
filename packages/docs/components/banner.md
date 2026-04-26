# Banner

A persistent, full-width banner that sits above page content. Content is centered both vertically and horizontally.

## Interactive Demo

<ClientOnly>
<div style="margin: 16px 0 24px;">
  <co-banner>
    <span slot="title" id="banner-demo-title">System Maintenance</span>
    Scheduled downtime Saturday 2–4 AM EST.
  </co-banner>
  <div style="margin-top: 12px;">
    <label style="font-size: 0.85rem; font-weight: 500; display: block; margin-bottom: 4px;">title</label>
    <input type="text" value="System Maintenance" style="width: 100%; max-width: 400px; padding: 6px 10px; border: 1px solid var(--co-color-border-default); border-radius: var(--co-shape-radius-md); font-size: 0.85rem;" oninput="document.getElementById('banner-demo-title').textContent = this.value" />
  </div>
</div>
</ClientOnly>

```html
<co-banner>
  <span slot="title">System Maintenance</span>
  Scheduled downtime Saturday 2–4 AM EST.
</co-banner>
```

## Stacked Content

The default slot uses a vertical flex layout, so additional content stacks below the title:

<ClientOnly>
<co-banner label="Release Notes" style="margin: 16px 0 24px;">
  <span slot="title">Version 2.0 Released</span>
  <span>New dashboard, improved performance, and bug fixes.</span>
  <a href="#" style="color: inherit;">View release notes</a>
</co-banner>
</ClientOnly>

```html
<co-banner label="Release Notes">
  <span slot="title">Version 2.0 Released</span>
  <span>New dashboard, improved performance, and bug fixes.</span>
  <a href="#" style="color: inherit;">View release notes</a>
</co-banner>
```

## Title Only

The banner works with just a title slot for simple one-line announcements:

<ClientOnly>
<co-banner style="margin: 16px 0 24px;">
  <span slot="title">New Feature Available</span>
</co-banner>
</ClientOnly>

```html
<co-banner>
  <span slot="title">New Feature Available</span>
</co-banner>
```

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<script type="module">
  import '@cobalt/components/banner';
</script>

<co-banner label="Announcement">
  <span slot="title">Scheduled Maintenance</span>
  Systems will be unavailable Saturday 2-4 AM EST.
</co-banner>
```

</template>

<template #react>

```tsx
import { CoBanner } from '@cobalt/react';

function App() {
  return (
    <CoBanner label="Announcement">
      <span slot="title">Scheduled Maintenance</span>
      Systems will be unavailable Saturday 2-4 AM EST.
    </CoBanner>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoBanner } from '@cobalt/vue';
</script>

<template>
  <CoBanner label="Announcement">
    <span slot="title">Scheduled Maintenance</span>
    Systems will be unavailable Saturday 2-4 AM EST.
  </CoBanner>
</template>
```

</template>

<template #angular>

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoBanner } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoBanner],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<!-- app.component.html -->
<co-banner label="Announcement">
  <span slot="title">Scheduled Maintenance</span>
  Systems will be unavailable Saturday 2-4 AM EST.
</co-banner>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- System-wide announcements that apply to all users (maintenance, outages)
- Persistent notifications that should not be dismissed
- Brand or promotional messaging at the top of a page

### When NOT to use

- For dismissible alerts — use a toast or alert component instead
- For inline feedback within a form — use field-level validation messages
- For content that only applies to a specific section of the page

### Content guidelines

- Keep the title short and scannable — uppercase transform makes long text harder to read
- Use the default slot for supporting details when the title alone is not sufficient
- Ensure links in the banner have sufficient contrast against the bold background

## API

### Properties

| Property | Type     | Default    | Description                            |
| -------- | -------- | ---------- | -------------------------------------- |
| `title`  | `string` | `''`       | Title text displayed in uppercase      |
| `label`  | `string` | `'Banner'` | Accessible label for the banner region |

### Slots

| Name        | Description                                           |
| ----------- | ----------------------------------------------------- |
| `title`     | Title text — uppercase transform, medium font weight  |
| _(default)_ | Additional content stacked vertically below the title |

### CSS Parts

| Part      | Description              |
| --------- | ------------------------ |
| `base`    | The banner container     |
| `title`   | The title slot wrapper   |
| `content` | The default slot wrapper |

### Design Tokens

| Token                                | Default                          | Description           |
| ------------------------------------ | -------------------------------- | --------------------- |
| `--co-component-banner-height`       | `44px`                           | Minimum banner height |
| `--co-component-banner-padding`      | `var(--co-space-1)`              | Internal padding      |
| `--co-component-banner-background`   | `var(--co-color-surface-raised)` | Background color      |
| `--co-component-banner-foreground`   | `var(--co-color-text-default)`   | Text color            |
| `--co-component-banner-title-weight` | `var(--co-font-weight-medium)`   | Title font weight     |

## Accessibility

<ClientOnly>
<A11yReport component="co-banner" />
</ClientOnly>

### Keyboard interaction

| Key   | Action                                                     |
| ----- | ---------------------------------------------------------- |
| `Tab` | Moves focus through interactive elements within the banner |

### ARIA notes

- Uses `role="banner"` with `aria-label` for landmark identification
- The banner itself is not focusable — focus passes to slotted interactive children
- Ensure any links or buttons within the banner have accessible labels

### Manual testing checklist

- [ ] Banner spans the full viewport width
- [ ] Content is centered horizontally and vertically
- [ ] Title renders in uppercase with medium font weight
- [ ] Stacked content aligns vertically in the center
- [ ] Minimum height of 44px is maintained with minimal content
- [ ] Works in both light and dark modes
- [ ] Screen reader announces the banner as a landmark

## Changelog

<ComponentChangelog component="co-banner" />
