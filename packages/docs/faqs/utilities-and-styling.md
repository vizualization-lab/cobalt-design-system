---
title: Utilities & Styling FAQ
description: Common questions about utility classes, Tailwind, import order, and styling pitfalls.
---

# Utilities & Styling FAQ

These questions cover how to choose between Cobalt’s utility layers, Tailwind integration, and custom CSS.

## Should I use `@cobalt/tokens/css/utilities` or Tailwind?

Choose based on the stack you already have:

- Use `@cobalt/tokens/css/utilities` when you want a lightweight, token-backed utility layer without Tailwind
- Use the Tailwind preset when Tailwind is already part of your stack and you want standard Tailwind class names backed by Cobalt tokens

If Tailwind is already established in your app, the Tailwind preset is usually the better fit.

## Can I use both utilities and Tailwind?

Yes, but in most apps it is redundant.

Both layers exist to apply token-backed utility styling. Using both is reasonable during migration or in mixed environments, but for long-term app code it is usually clearer to standardize on one utility vocabulary.

## What utilities are intentionally not included in Cobalt’s utility stylesheet?

The standalone Cobalt utilities do **not** try to replace a full layout framework.

Notably absent:

- display utilities
- flexbox/grid layout primitives
- positioning helpers
- complex selector/state logic
- animation authoring helpers

For those needs, use Tailwind or write scoped CSS.

## What import order is required?

The safe order is:

```css
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/css/fonts'; /* optional */
@import '@cobalt/tokens/css/base'; /* optional */
@import '@cobalt/tokens/themes/default'; /* optional theme bundle */
@import '@cobalt/tokens/css/utilities'; /* optional */
```

The important rule is that `@cobalt/tokens/css` comes first so the cascade layer order and base token variables exist before later stylesheets try to use them.

## Why are my tokens or styles not applying?

Check these first:

1. `@cobalt/tokens/css` is loaded
2. component modules are actually imported
3. your theme bundle is loaded if you are expecting non-default theme behavior
4. your import order is not creating a different cascade-layer order
5. you are overriding token values, not bypassing them with hardcoded CSS

If styles still look wrong, the [CSS Layers](/foundations/css-layers) and [Utilities](/foundations/utilities) pages are the best next step.

## When should I write custom CSS instead of utilities?

Write custom CSS when you need:

- component-specific selectors
- pseudo-classes such as `:hover` or `:focus-visible`
- layout logic beyond spacing/sizing/typography helpers
- one-off rules that do not justify a reusable utility class

Utilities are best for applying token values quickly, not for expressing every styling concern in a product.

## Do I still need base styles and fonts if I use Tailwind?

Usually yes.

- `@cobalt/tokens/css` is still required
- `@cobalt/tokens/css/fonts` is still useful if you want the Cobalt font stack
- `@cobalt/tokens/css/base` remains an opt-in reset/base layer decision

Tailwind integration does not replace the core token layer.

## Related

- [Utility Classes](/foundations/utilities)
- [Tailwind Integration](/foundations/tailwind)
- [CSS Layers](/foundations/css-layers)
- [Getting Started for Developers](/getting-started/developers)
