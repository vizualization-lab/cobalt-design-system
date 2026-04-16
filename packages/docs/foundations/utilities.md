# Utility Classes

Cobalt ships an optional set of CSS utility classes that enforce consistent use of design tokens. Every class maps directly to a `--co-*` token, so your markup stays aligned with the design system by default.

For full layout utilities (display, flexbox, grid, positioning), use [Tailwind CSS with the Cobalt preset](./tailwind.md).

## Installation

Import the utilities stylesheet **after** the main token stylesheet:

```js
import '@cobalt/tokens/css'; // required first — declares layer order + tokens
import '@cobalt/tokens/css/utilities'; // opt-in utility classes
```

The utilities are placed in the `co.utilities` cascade layer, which sits between `co.theme` and `co.overrides`:

```
@layer co.reset, co.base, co.tokens, co.theme, co.utilities, co.overrides;
```

This means token values and theme overrides are resolved before utilities apply, and consumers can still override anything via `co.overrides`.

## Spacing

All spacing utilities map to `--co-space-*` tokens, keeping values consistent with the design system's 4 px base unit. See [Spacing](./spacing.md) for the full token scale.

### Gap

`co-gap-{n}` maps to `--co-space-{n}`. Available steps: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`.

### Padding

| Class         | CSS                             |
| ------------- | ------------------------------- |
| `co-p-{0–8}`  | `padding` (all sides)           |
| `co-px-{0–8}` | `padding-inline` (left + right) |
| `co-py-{0–8}` | `padding-block` (top + bottom)  |

Available sizes: `0`, `1`, `2`, `3`, `4`, `6`, `8`

### Margin

| Class         | CSS                   |
| ------------- | --------------------- |
| `co-m-0`      | `margin: 0`           |
| `co-m-auto`   | `margin: auto`        |
| `co-mx-auto`  | `margin-inline: auto` |
| `co-my-auto`  | `margin-block: auto`  |
| `co-mt-{0–8}` | `margin-top`          |
| `co-mb-{0–8}` | `margin-bottom`       |

Available sizes for `mt` / `mb`: `0`, `2`, `4`, `6`, `8`

## Sizing

### Content max-width

| Class                | Token                              | Max width |
| -------------------- | ---------------------------------- | --------- |
| `co-max-w-screen-sm` | `--co-layout-content-max-width-sm` | 640 px    |
| `co-max-w-screen-md` | `--co-layout-content-max-width-md` | 768 px    |
| `co-max-w-screen-lg` | `--co-layout-content-max-width-lg` | 1024 px   |
| `co-max-w-screen-xl` | `--co-layout-content-max-width-xl` | 1280 px   |

## Typography

### Role presets

The `.co-type-*` classes are the fastest way to apply a full typography treatment. Each class bundles size, weight, letter-spacing, and line-height from the matching semantic role. Reach for these before dropping down to the individual primitives below.

| Class              | Role       | Size  | Weight  | Notes                                            |
| ------------------ | ---------- | ----- | ------- | ------------------------------------------------ |
| `co-type-display`  | `display`  | 48 px | regular | Hero moments. Utility-only (not mapped to `h1`). |
| `co-type-heading`  | `heading`  | 36 px | regular | Page title (`<h1>` equivalent).                  |
| `co-type-title`    | `title`    | 24 px | regular | Card / section titles.                           |
| `co-type-subtitle` | `subtitle` | 20 px | medium  | Subsection heads.                                |
| `co-type-eyebrow`  | `eyebrow`  | 12 px | medium  | Small-caps kicker. Automatically uppercase.      |
| `co-type-body-lg`  | `body-lg`  | 18 px | regular | Lead paragraphs.                                 |
| `co-type-body`     | `body`     | 16 px | regular | Default body text.                               |
| `co-type-body-sm`  | `body-sm`  | 14 px | regular | Compact body, table rows.                        |
| `co-type-label`    | `label`    | 14 px | medium  | Form labels, active nav, tab labels.             |
| `co-type-caption`  | `caption`  | 12 px | regular | Metadata, timestamps, hints.                     |

See [Typography](./typography.md) for the full role reference, including tracking and line-height values.

```html
<section>
  <p class="co-type-eyebrow">Monday, January 1</p>
  <h1 class="co-type-display">Good afternoon, Jane</h1>
  <p class="co-type-body-lg">Your week at a glance.</p>
</section>
```

### Font size

Use font-size utilities when composing a one-off treatment that doesn't match any role. Prefer the role presets above whenever possible. Classes follow the pattern `co-text-{size}` (e.g., `co-text-xs`, `co-text-base`, `co-text-5xl`) and map to `--co-font-size-*` tokens. See [Typography](./typography.md) for the full size scale.

### Font weight

| Class              | Token                       | Value |
| ------------------ | --------------------------- | ----- |
| `co-font-normal`   | `--co-font-weight-regular`  | 400   |
| `co-font-medium`   | `--co-font-weight-medium`   | 500   |
| `co-font-semibold` | `--co-font-weight-semibold` | 600   |
| `co-font-bold`     | `--co-font-weight-bold`     | 700   |

### Line height

| Class                | Token                                  |
| -------------------- | -------------------------------------- |
| `co-leading-display` | `--co-font-line-height-display` (1.1)  |
| `co-leading-tight`   | `--co-font-line-height-tight` (1.25)   |
| `co-leading-normal`  | `--co-font-line-height-normal` (1.5)   |
| `co-leading-relaxed` | `--co-font-line-height-relaxed` (1.75) |

### Letter spacing

| Class                 | Token                        | Value     |
| --------------------- | ---------------------------- | --------- |
| `co-tracking-tighter` | `--co-font-tracking-tighter` | -0.025 em |
| `co-tracking-tight`   | `--co-font-tracking-tight`   | -0.015 em |
| `co-tracking-normal`  | `--co-font-tracking-normal`  | 0         |
| `co-tracking-wide`    | `--co-font-tracking-wide`    | 0.05 em   |
| `co-tracking-widest`  | `--co-font-tracking-widest`  | 0.08 em   |

### Font family

| Class          | Token                   |
| -------------- | ----------------------- |
| `co-font-sans` | `--co-font-family-sans` |
| `co-font-mono` | `--co-font-family-mono` |

## Helpers

### Text overflow

`co-truncate` applies `overflow: hidden`, `text-overflow: ellipsis`, and `white-space: nowrap` as a single class.

### Screen reader only

`co-sr-only` visually hides an element while keeping it accessible to screen readers.

```html
<button>
  <co-icon name="close"></co-icon>
  <span class="co-sr-only">Close dialog</span>
</button>
```

## Responsive Gap

The gap utilities support responsive prefixes that follow the mobile-first breakpoint scale. See [Breakpoints](./breakpoints.md) for the full breakpoint definitions.

| Prefix   | Min width | Target        |
| -------- | --------- | ------------- |
| _(none)_ | 0 px      | Base / mobile |
| `sm:`    | 640 px    | Large phones  |
| `md:`    | 768 px    | Tablets       |
| `lg:`    | 1024 px   | Small laptops |
| `xl:`    | 1280 px   | Desktops      |

Available responsive variants: `{sm,md,lg,xl}:co-gap-{2,4,6,8}`

```html
<!-- Tighter gap on mobile, wider on desktop -->
<div style="display: grid; grid-template-columns: repeat(3, 1fr)" class="co-gap-2 lg:co-gap-6">
  <div class="co-p-4">Card 1</div>
  <div class="co-p-4">Card 2</div>
  <div class="co-p-4">Card 3</div>
</div>
```

## When to use utilities vs. custom CSS

Utilities are ideal for **applying token values** — spacing, typography, and sizing — without writing custom CSS:

```html
<div class="co-gap-4 co-p-6">
  <div>
    <h3 class="co-text-lg co-font-semibold">Jane Doe</h3>
    <p class="co-text-sm co-leading-normal">Product Designer</p>
  </div>
  <co-button variant="secondary" size="sm">Follow</co-button>
</div>
```

Reach for custom CSS (or [Tailwind](./tailwind.md)) when you need:

- **Layout primitives** — display, flexbox, grid, and positioning are not included in token utilities. Use Tailwind or write CSS directly.
- **Complex selectors** — `:hover`, `:focus-visible`, `::before`, or child combinators.
- **Animations** — transitions and keyframe animations.
- **One-off values** — if a token doesn't exist for the value you need, write CSS rather than using `style=""`.

> **Tip:** If you find yourself chaining more than 5–6 utility classes on a single element, it may be a sign that the pattern deserves its own component or a scoped CSS class.

## Related

- [Spacing](./spacing.md) — the token scale behind gap, padding, and margin utilities
- [Typography](./typography.md) — font size, weight, and line-height tokens
- [Breakpoints](./breakpoints.md) — the responsive breakpoint scale
- [CSS Layers](./css-layers.md) — the cascade layer order that utilities depend on
- [Tailwind Integration](./tailwind.md) — using Tailwind classes backed by Cobalt tokens (includes layout utilities)
- [Layout Patterns](../patterns/layout.md) — higher-level layout guidance and page structure
