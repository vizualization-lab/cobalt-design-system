# Iconography

Cobalt uses [Material Symbols](https://fonts.google.com/icons) — 2,500+ icons in 2 style variants (outlined, rounded) with an optional fill toggle. Icons are rendered via the `<co-icon>` web component, which uses inline SVGs with `currentColor` for full control over color, size, and animation via CSS.

## Icon Gallery

Browse, search, and export any icon. Click an icon to see all styles, copy SVG, or download PNG.

<ClientOnly>
  <IconGallery />
</ClientOnly>

## Icon Sizes

All icons are designed on a 24 px grid but scale cleanly to the four supported sizes:

| Token          | Size  | Usage                                 |
| -------------- | ----- | ------------------------------------- |
| `--co-icon-xs` | 16 px | Inline indicators inside badges, tags |
| `--co-icon-sm` | 20 px | Inside buttons, form controls         |
| `--co-icon-md` | 24 px | Standalone icons, navigation items    |
| `--co-icon-lg` | 32 px | Empty states, feature highlights      |

## Usage with the `co-icon` Component

The recommended way to use icons is through the `<co-icon>` component, which handles SVG rendering, sizing, and accessibility automatically.

### Web Component

```html
<script type="module">
  import '@cobalt/components/icon';
</script>

<co-icon name="arrow-forward" variant="outlined"></co-icon>
<co-icon name="check" variant="rounded" size="sm"></co-icon>
<co-icon name="home" fill></co-icon>
```

### React

```tsx
import { CoIcon } from '@cobalt/react';

function Example() {
  return (
    <>
      <CoIcon name="arrow-forward" variant="outlined" />
      <CoIcon name="check" variant="rounded" size="sm" />
      <CoIcon name="home" fill />
    </>
  );
}
```

### Vue

```vue
<script setup>
import { CoIcon } from '@cobalt/vue';
</script>

<template>
  <CoIcon name="arrow-forward" variant="outlined" />
  <CoIcon name="check" variant="rounded" size="sm" />
  <CoIcon name="home" fill />
</template>
```

### Angular

```html
<co-icon name="arrow-forward" variant="outlined"></co-icon>
<co-icon name="check" variant="rounded" size="sm"></co-icon>
<co-icon name="home" fill></co-icon>
```

## Styling with CSS

Icons inherit `currentColor` by default, so they match the surrounding text color automatically:

```css
/* Icon inherits color from parent */
.nav-item {
  color: var(--co-color-foreground-default);
}

/* Override color independently */
.status-icon--success {
  color: var(--co-color-success-600);
}
```

## Accessibility

Icons fall into two categories — **decorative** and **informative** — and each requires different accessibility treatment.

### Decorative icons

Decorative icons sit next to visible text that already conveys the meaning. The `co-icon` component hides them from assistive technology by default (`aria-hidden="true"`):

```html
<co-button>
  <co-icon slot="prefix" name="delete"></co-icon>
  Delete
</co-button>
```

### Informative icons

Informative icons are the only way the meaning is communicated (e.g., a status indicator). Set the `label` property to make them accessible:

```html
<co-icon name="warning" label="Warning: unsaved changes"></co-icon>
```

For icon-only buttons, set `aria-label` on the button rather than the icon:

```html
<co-button aria-label="Close dialog">
  <co-icon name="close"></co-icon>
</co-button>
```

| Scenario                   | Approach                            | Example                   |
| -------------------------- | ----------------------------------- | ------------------------- |
| Icon next to visible label | Default (decorative, `aria-hidden`) | Button with text + icon   |
| Icon-only button           | `aria-label` on the button          | Close button with X icon  |
| Icon conveying status      | `label` prop on `co-icon`           | Warning icon without text |

> **Tip:** Always test icon-only controls with a screen reader. If the announced label doesn't make sense without seeing the icon, you need a better `aria-label`.

## Best Practices

1. **Use a single size per context.** Don't mix 16 px and 20 px icons in the same button.
2. **Use outlined for most UI.** Add `fill` for active/selected states to provide visual feedback. Use `rounded` for a softer feel.
3. **Avoid icon overload.** If a row of actions has more than four icon-only buttons, add visible labels.
4. **Align icons optically.** Some icons (e.g., play triangles) may need 1-2 px nudges to look visually centered.

## Related

- [Icon Component](../components/icon.md) — full API reference and framework usage
- [Accessibility](./accessibility.md) — ARIA patterns and screen reader support
- [Colors](./colors.md) — icon color tokens
