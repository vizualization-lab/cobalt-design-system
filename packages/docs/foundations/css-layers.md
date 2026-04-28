# CSS Cascade Layers

Cobalt uses [CSS cascade layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) to give consumers predictable control over style overrides — no specificity battles required.

## What are cascade layers?

[`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) groups CSS rules into named layers with a declared priority order. Rules in a higher-priority layer always beat rules in a lower-priority layer, regardless of selector specificity — eliminating the need for increasingly specific selectors or `!important` when overriding library styles.

## Cobalt's layer stack

Cobalt declares six layers in a fixed order. Later layers always take priority over earlier ones:

<LayerStack />

| Priority    | Layer          | Purpose                                       | Who edits         |
| ----------- | -------------- | --------------------------------------------- | ----------------- |
| 1 (lowest)  | `co.reset`     | Global reset defaults                         | System / Consumer |
| 2           | `co.base`      | Opt-in base element styles (`[data-co-base]`) | System            |
| 3           | `co.tokens`    | Light-mode token definitions (`:root`)        | System            |
| 4           | `co.theme`     | Dark-mode + custom theme overrides            | System / Consumer |
| 5           | `co.utilities` | Utility classes (`.co-*`)                     | System            |
| 6 (highest) | `co.overrides` | Consumer brand customizations                 | Consumer          |

The layer order is declared by `@cobalt/tokens/css`:

```css
@layer co.reset, co.base, co.tokens, co.theme, co.utilities, co.overrides;
```

## Import order

`@cobalt/tokens/css` **must be imported first** because it declares the layer order. All subsequent Cobalt stylesheets place their rules into the appropriate layer.

```js
import '@cobalt/tokens/css'; // 1. Layer order + token definitions
import '@cobalt/tokens/css/fonts'; // 2. Self-hosted font faces
import '@cobalt/tokens/css/base'; // 3. Global reset + opt-in base element styles
import '@cobalt/tokens/css/utilities'; // 4. Optional utility classes
```

If you import another stylesheet before `@cobalt/tokens/css`, the browser may create a different layer order and Cobalt's overrides won't work as intended.

## Customizing with the override layer

Need to change a token value for your brand? Place your overrides in `co.overrides` and they'll beat every other Cobalt layer — no `!important`, no specificity tricks:

```css
@layer co.overrides {
  :root {
    --co-color-primary-base: #8b5cf6;
    --co-shape-radius-md: 8px;
  }
}
```

This works because `co.overrides` is the highest-priority layer in the stack. Even if Cobalt's internal styles use a more specific selector, your override layer wins.

## Extending the reset

Cobalt ships a default reset in `co.reset` as part of `@cobalt/tokens/css/base`. If you need to extend or override that reset, add your own rules to the same layer after the base import:

```css
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/css/base';

@layer co.reset {
  :where(ul, ol) {
    padding-inline-start: 1.5rem;
  }
}
```

Because `co.reset` is the lowest-priority layer, it will never accidentally override Cobalt's token values or component styles. If you want to beat both the shipped reset and base styles, use a higher layer such as `co.overrides`.

## Related

- [Colors](/foundations/colors) — Theming and color tokens
- [Utility Classes](/foundations/utilities) — Token-mapped CSS utility classes
- [Tailwind Integration](/foundations/tailwind) — Using Tailwind alongside Cobalt
