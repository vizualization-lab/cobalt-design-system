# Iconography

Cobalt uses the [Phosphor](https://phosphoricons.com/) icon set — 1,512 icons across 6 weight variants (thin, light, regular, bold, fill, duotone). Icons are delivered as inline SVGs using `currentColor`, giving you full control over color, size, and animation via CSS.

## Icon Gallery

Browse, search, and export any icon. Click an icon to see all weights, copy SVG, or download PNG.

<ClientOnly>
  <IconGallery />
</ClientOnly>

## Icon Sizes

All icons are designed on a 24 px grid but scale cleanly to the four supported sizes:

| Token          | Size  | Usage                                 |
| -------------- | ----- | ------------------------------------- |
| `--cb-icon-xs` | 16 px | Inline indicators inside badges, tags |
| `--cb-icon-sm` | 20 px | Inside buttons, form controls         |
| `--cb-icon-md` | 24 px | Standalone icons, navigation items    |
| `--cb-icon-lg` | 32 px | Empty states, feature highlights      |

## Usage with Vue

```vue
<script setup>
import { PhArrowRight, PhCheck } from '@phosphor-icons/vue';
</script>

<template>
  <PhArrowRight :size="24" weight="regular" />
  <PhCheck :size="16" weight="bold" />
</template>
```

## Usage with React

```tsx
import { ArrowRight, Check } from '@phosphor-icons/react';

function Example() {
  return (
    <>
      <ArrowRight size={24} weight="regular" />
      <Check size={16} weight="bold" />
    </>
  );
}
```

## Usage in HTML

When not using a framework package, embed SVGs directly:

```html
<button class="cb-button cb-button--primary">
  <svg
    class="cb-icon"
    width="20"
    height="20"
    viewBox="0 0 256 256"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
    />
  </svg>
  Continue
</button>
```

## Styling with CSS

Icons inherit `currentColor` by default, so they match the surrounding text color automatically:

```css
.cb-icon {
  width: var(--cb-icon-md);
  height: var(--cb-icon-md);
  flex-shrink: 0;
  fill: currentColor;
}

.cb-button .cb-icon {
  width: var(--cb-icon-sm);
  height: var(--cb-icon-sm);
}
```

To override color independently of text:

```css
.cb-status-icon--success {
  color: var(--cb-color-success-600);
}
```

## Accessibility

Icons fall into two categories — **decorative** and **informative** — and each requires different accessibility treatment.

### Decorative icons

Decorative icons sit next to visible text that already conveys the meaning. Hide them from assistive technology:

```html
<button>
  <svg aria-hidden="true"><!-- icon --></svg>
  Delete
</button>
```

### Informative icons

Informative icons are the only way the meaning is communicated (e.g., an icon-only button). They need a text alternative:

```html
<button aria-label="Close dialog">
  <svg aria-hidden="true"><!-- close icon --></svg>
</button>
```

| Scenario                   | Attribute                          | Example                   |
| -------------------------- | ---------------------------------- | ------------------------- |
| Icon next to visible label | `aria-hidden="true"` on SVG        | Button with text + icon   |
| Icon-only button           | `aria-label` on button             | Close button with X icon  |
| Icon conveying status      | `role="img"` + `aria-label` on SVG | Warning icon without text |

> **Tip:** Always test icon-only controls with a screen reader. If the announced label doesn't make sense without seeing the icon, you need a better `aria-label`.

## Best Practices

1. **Use a single size per context.** Don't mix 16 px and 20 px icons in the same button.
2. **Match weight to context.** Use `regular` for most UI, `bold` for emphasis, `fill` for active/selected states, and `light`/`thin` for decorative uses.
3. **Avoid icon overload.** If a row of actions has more than four icon-only buttons, add visible labels.
4. **Align icons optically.** Some icons (e.g., play triangles) may need 1-2 px nudges to look visually centered.

## Related

- [Accessibility](./accessibility.md) — ARIA patterns and screen reader support
- [Colors](./colors.md) — icon color tokens
