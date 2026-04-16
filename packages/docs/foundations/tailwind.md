---
title: Tailwind Integration
description: Use Tailwind CSS utility classes backed by Cobalt design tokens.
---

# Tailwind Integration

The `@cobalt/tokens` package includes an opt-in Tailwind CSS preset that maps standard Tailwind utility classes to Cobalt design tokens via CSS custom properties. This means classes like `bg-primary`, `p-4`, and `rounded-lg` resolve to `var(--co-*)` values, so dark mode, theming, and runtime overrides propagate automatically.

## Why CSS variables?

The preset binds Tailwind theme values to `var(--co-*)` references rather than static hex/rem values. This gives you:

- **Automatic dark mode** — load `@cobalt/tokens/css/dark` and toggle `data-theme="default" data-mode="dark"` for the recommended default-dark selector. `data-theme="dark"` is still supported for backward compatibility.
- **Runtime theming** — override any `--co-*` variable in CSS and every Tailwind utility that references it updates.
- **Single source of truth** — tokens are defined once in the design system. Tailwind reads from the same variables as web components.

## Tailwind v3 Setup

### 1. Install

Your project needs `tailwindcss` (v3.x) and `@cobalt/tokens`:

```bash
npm install -D tailwindcss
npm install @cobalt/tokens
```

### 2. Configure

Add the Cobalt preset to your `tailwind.config.js`:

```js
// tailwind.config.js
import cobaltPreset from '@cobalt/tokens/tailwind';

export default {
  presets: [cobaltPreset],
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
};
```

### 3. Import tokens

In your main CSS file, import Cobalt tokens **before** Tailwind directives:

```css
@import '@cobalt/tokens/css'; /* required: defines --co-* variables */
@import '@cobalt/tokens/css/fonts'; /* optional: self-hosted fonts */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Tailwind v4 Setup

Tailwind v4 uses CSS-first configuration with `@theme` blocks.

### 1. Install

```bash
npm install -D tailwindcss@next
npm install @cobalt/tokens
```

### 2. Import

In your main CSS file:

```css
@import 'tailwindcss';
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/tailwind/css';
@import '@cobalt/tokens/css/fonts'; /* optional */
```

No JavaScript config file needed.

## Token Mapping Reference

The preset maps every Cobalt token category to standard Tailwind theme keys:

### Colors

| Tailwind class                           | Cobalt token                                  |
| ---------------------------------------- | --------------------------------------------- |
| `bg-primary`, `text-primary`             | `var(--co-color-primary-base)`                |
| `bg-neutral-light`                       | `var(--co-color-neutral-light)`               |
| `bg-danger`, `text-danger`               | `var(--co-color-danger-base)`                 |
| `bg-success`                             | `var(--co-color-success-base)`                |
| `bg-warning`                             | `var(--co-color-warning-base)`                |
| `bg-surface`, `bg-surface-raised`        | `var(--co-color-surface-{default,raised})`    |
| `text-text`, `text-text-secondary`       | `var(--co-color-text-{default,secondary})`    |
| `border-border`, `border-border-strong`  | `var(--co-color-border-{default,strong})`     |
| `bg-interactive`, `bg-interactive-hover` | `var(--co-color-interactive-{default,hover})` |
| `bg-primitive-blue-500`                  | `var(--co-color-primitive-blue-500)`          |

Color roles (primary, neutral, danger, success, warning) use variant `base` as the `DEFAULT`, so `bg-primary` is equivalent to `bg-primary-base`.

### Spacing

Spacing classes (`p-*`, `m-*`, `gap-*`) map to `var(--co-space-*)` tokens. Available steps: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, px. See [Spacing](./spacing.md) for the full scale.

### Border Radius

| Tailwind class      | Cobalt token                  |
| ------------------- | ----------------------------- |
| `rounded-none`      | `var(--co-shape-radius-none)` |
| `rounded-sm`        | `var(--co-shape-radius-sm)`   |
| `rounded` (default) | `var(--co-shape-radius-md)`   |
| `rounded-lg`        | `var(--co-shape-radius-lg)`   |
| `rounded-xl`        | `var(--co-shape-radius-xl)`   |
| `rounded-2xl`       | `var(--co-shape-radius-2xl)`  |
| `rounded-full`      | `var(--co-shape-radius-full)` |

### Typography

Font size (`text-*`), weight (`font-*`), line-height (`leading-*`), and tracking (`tracking-*`) classes map to `var(--co-font-*)` tokens. Cobalt's `md` font size maps to Tailwind's `base` (`text-base`), and Cobalt's `regular` weight maps to Tailwind's `normal` (`font-normal`). See [Typography](./typography.md) for the full type scale and semantic roles.

#### Semantic typography roles

Cobalt also exposes ten semantic role presets under `--co-typography-*` (display, heading, title, subtitle, eyebrow, body-lg, body, body-sm, label, caption). These aren't part of Tailwind's default class set, but you can surface them as plugin utilities or use the `.co-type-*` utility classes from `@cobalt/tokens/css/utilities` directly. See [Typography](./typography.md) for the full role reference.

### Shadows

| Tailwind class                  | Cobalt token                    |
| ------------------------------- | ------------------------------- |
| `shadow-sm`                     | `var(--co-elevation-shadow-sm)` |
| `shadow` (default), `shadow-md` | `var(--co-elevation-shadow-md)` |
| `shadow-lg`                     | `var(--co-elevation-shadow-lg)` |
| `shadow-xl`                     | `var(--co-elevation-shadow-xl)` |
| `shadow-none`                   | `none`                          |

### Z-Index

| Tailwind class     | Cobalt token                           |
| ------------------ | -------------------------------------- |
| `z-dropdown`       | `var(--co-elevation-z-dropdown)`       |
| `z-sticky`         | `var(--co-elevation-z-sticky)`         |
| `z-fixed`          | `var(--co-elevation-z-fixed)`          |
| `z-modal-backdrop` | `var(--co-elevation-z-modal-backdrop)` |
| `z-modal`          | `var(--co-elevation-z-modal)`          |
| `z-popover`        | `var(--co-elevation-z-popover)`        |
| `z-tooltip`        | `var(--co-elevation-z-tooltip)`        |

### Transitions

Duration (`duration-fast`, `duration-normal`, `duration-slow`) and easing (`ease`, `ease-in`, `ease-out`, `ease-in-out`) classes map to `var(--co-motion-*)` tokens. See [Motion](./motion.md) for the full token reference.

### Breakpoints

Tailwind prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) map to the Cobalt breakpoint scale. See [Breakpoints](./breakpoints.md) for values and device targets.

## Dark Mode

Dark mode works automatically. Import the dark theme tokens and toggle the recommended default-dark selector:

```html
<html data-theme="default" data-mode="dark"></html>
```

```css
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/css/dark';
```

Because the Tailwind preset references `var(--co-*)` values, when dark theme overrides those variables, every Tailwind utility updates. No `darkMode` configuration is needed in `tailwind.config.js`.

If you are migrating older consumers, `data-theme="dark"` still works for the default dark theme.

## Relationship to Utility Classes

The `@cobalt/tokens/css/utilities` export provides a standalone set of utility classes with `co-` prefixes (e.g., `.co-flex`, `.co-gap-4`). These are useful when Tailwind is not part of your stack.

If you are using the Tailwind preset, **you do not need** `@cobalt/tokens/css/utilities` — Tailwind's own utility classes cover the same functionality with the standard Tailwind naming convention.

## Known Limitations

1. **Breakpoints use raw pixel values** — CSS `@media` queries cannot evaluate `var()` expressions, so the `screens` config contains literal values (`640px`, `768px`, etc.) instead of CSS variable references. If you change breakpoint tokens, rebuild the preset.

2. **Shadow color modifiers don't work** — Tailwind's `shadow-primary-500` syntax requires decomposed shadow values. Cobalt shadow tokens are full expressions, so use them as-is: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`.

3. **Z-index in JS plugins** — The `var()` references work in CSS output but not in Tailwind plugins that expect numeric values for JavaScript calculations.

4. **`fontFamily` wrapping (v3)** — Font families are wrapped as single-element arrays (`['var(--co-font-family-sans)']`). The browser resolves the CSS variable to the full font stack at runtime.
