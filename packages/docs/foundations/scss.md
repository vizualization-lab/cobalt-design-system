# SCSS Integration

Cobalt ships a first-class SCSS API for teams that author styles in Sass. The SCSS layer is runtime-first: helpers and variables resolve to the same `--co-*` CSS custom properties used by the CSS, component, and Tailwind outputs.

That means SCSS improves authoring ergonomics, while runtime theming still works through CSS custom properties and `setTheme`.

## Installation

Install the token package and Sass:

```sh
npm install @cobalt/tokens
npm install -D sass
```

Import the helper module in any SCSS file:

```scss
@use '@cobalt/tokens/scss' as co;
```

This helper entrypoint does not emit CSS. It provides token variables, functions, and mixins.

## Loading Tokens And Themes

Use the SCSS CSS shims when your Sass entrypoint is responsible for loading Cobalt styles:

```scss
@use '@cobalt/tokens/scss/css';
@use '@cobalt/tokens/scss/themes/purple';
```

The SCSS style shims are generated from the CSS bundles, so these imports emit the same output as:

```css
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/themes/purple';
```

Activate a theme at runtime with the existing theme utility:

```js
import { setTheme } from '@cobalt/tokens/theme';

setTheme('purple', 'dark');
```

## Token Helpers

Use helper functions when writing component or app SCSS:

```scss
@use '@cobalt/tokens/scss' as co;

.card {
  padding: co.space('inset.md');
  color: co.color('text.default');
  background: co.color('surface.raised');
  border: co.token('border.width.container') solid co.color('border.default');
  border-radius: co.$co-shape-radius-md;
}
```

The helpers validate token names at compile time. Unknown tokens fail the Sass build instead of silently producing broken CSS.

| Helper            | Example                          | Output                           |
| ----------------- | -------------------------------- | -------------------------------- |
| `co.token()`      | `co.token('color.text.default')` | `var(--co-color-text-default)`   |
| `co.space()`      | `co.space('inset.md')`           | `var(--co-space-inset-md)`       |
| `co.color()`      | `co.color('surface.raised')`     | `var(--co-color-surface-raised)` |
| `co.font()`       | `co.font('family.sans')`         | `var(--co-font-family-sans)`     |
| `co.breakpoint()` | `co.breakpoint('lg')`            | `1024px`                         |
| `co.$co-*-*` vars | `co.$co-control-height-md`       | `var(--co-control-height-md)`    |

## Typography

Use `co.type()` to apply a full semantic typography role:

```scss
.page-title {
  @include co.type('heading');
}

.metadata {
  @include co.type('caption');
}
```

The mixin emits size, weight, letter-spacing, and line-height together. The `eyebrow` role also emits `text-transform: uppercase`, matching the `.co-type-eyebrow` utility.

Use `co.font-family()` when you only need a font stack:

```scss
code {
  @include co.font-family('mono');
}
```

## Breakpoints

CSS custom properties cannot be used in media query conditions, so `co.breakpoint()` returns raw compile-time values from the token scale:

```scss
.dashboard {
  display: grid;
  gap: co.space(4);
}

@include co.media-up('lg') {
  .dashboard {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: co.space(6);
  }
}
```

## Runtime Behavior

Most SCSS helpers emit `var(--co-*)`, not hard-coded values. This is intentional:

- theme changes update compiled SCSS output at runtime
- component styles, CSS utilities, Tailwind mappings, and SCSS helpers share one token contract
- the design system avoids static Sass theme maps that could drift from CSS

Use raw Sass values only when Sass requires compile-time values, such as media query breakpoints.

## Related

- [Token Reference](/tokens/) - full token list and CSS import options
- [Token Structure](/tokens/structure) - source token organization and generated outputs
- [CSS Layers](./css-layers.md) - cascade layer order used by CSS and SCSS style shims
- [Typography](./typography.md) - semantic type role definitions
