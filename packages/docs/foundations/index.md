# Foundations

Foundations are the visual and structural building blocks of the Cobalt Design System. They ensure consistency across every component and layout by defining shared rules for color, typography, spacing, and more.

## Overview

Each foundation category provides a set of **design tokens** — named values that you use in CSS, JavaScript, or design tools instead of hard-coded literals. Tokens make it easy to update the entire system from a single source of truth.

| Foundation                          | Purpose                                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| [Colors](./colors.md)               | Primitive palette and semantic color tokens for the default light and dark themes |
| [Typography](./typography.md)       | Font families, type scale, weights, and line heights                              |
| [Spacing](./spacing.md)             | Consistent spacing units based on a 4 px grid                                     |
| [Elevation](./elevation.md)         | Shadow levels that convey depth and hierarchy                                     |
| [Motion](./motion.md)               | Duration and easing tokens for animations and transitions                         |
| [Breakpoints](./breakpoints.md)     | Responsive viewport breakpoints for layout adaptation                             |
| [Iconography](./iconography.md)     | Icon sizing, usage patterns, and accessibility                                    |
| [Accessibility](./accessibility.md) | WCAG 2.1 AA standards, focus management, and ARIA patterns                        |
| [SCSS Integration](./scss.md)       | Sass helpers, mixins, and theme-safe token authoring                              |

## Using tokens

All foundation tokens are distributed via the `@cobalt/tokens` package and are available as CSS custom properties prefixed with `--co-`.

```bash
npm install @cobalt/tokens
```

Import the tokens stylesheet at the root of your application:

```css
@import '@cobalt/tokens/css';
```

Then reference any token in your styles:

```css
.card {
  background: var(--co-color-surface-static-default);
  padding: var(--co-space-inset-md);
  border-radius: var(--co-shape-radius-md);
  box-shadow: var(--co-elevation-shadow-md);
}
```

> **Tip:** Prefer semantic tokens (e.g. `--co-color-state-primary-base`, `--co-control-height-md`) over raw values where they exist. This ensures your UI adapts correctly to theme changes and shared system rules.

If your project uses Sass, import the SCSS helper module and keep runtime theming through CSS custom properties:

```scss
@use '@cobalt/tokens/scss' as co;

.card {
  padding: co.space('inset.md');
  background: co.color('surface.static.default');
  @include co.type('body');
}
```

## Guiding principles

1. **Consistency** — Use tokens everywhere; avoid magic numbers.
2. **Scalability** — Foundations are designed to grow. New primitives can be added without breaking existing usage.
3. **Accessibility** — Every foundation decision accounts for WCAG 2.1 AA compliance. Color contrast, focus visibility, and motion sensitivity are first-class concerns.
4. **Themability** — Tokens map to CSS custom properties, making runtime theme switching straightforward.

## Further reading

- [Getting Started](/getting-started/) — installation and setup
- [Components](/components/button) — UI components built on these foundations
- [Tokens reference](/tokens/) — full list of available design tokens
