# Utility Classes

Cobalt ships an optional set of CSS utility classes that encourage consistent use of design tokens without writing custom CSS. Every class maps directly to a `--co-*` token, so your markup stays aligned with the design system by default.

Class names follow [Tailwind CSS](https://tailwindcss.com/docs) naming conventions, prefixed with `co-`. If your team later adopts Tailwind, migration is a find-and-replace of `co-` — every class has a 1:1 Tailwind equivalent.

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

## Layout

### Display

| Class             | CSS                     |
| ----------------- | ----------------------- |
| `co-block`        | `display: block`        |
| `co-inline-block` | `display: inline-block` |
| `co-inline`       | `display: inline`       |
| `co-flex`         | `display: flex`         |
| `co-inline-flex`  | `display: inline-flex`  |
| `co-grid`         | `display: grid`         |
| `co-inline-grid`  | `display: inline-grid`  |
| `co-hidden`       | `display: none`         |

### Flex direction

| Class                 | CSS                              |
| --------------------- | -------------------------------- |
| `co-flex-row`         | `flex-direction: row`            |
| `co-flex-row-reverse` | `flex-direction: row-reverse`    |
| `co-flex-col`         | `flex-direction: column`         |
| `co-flex-col-reverse` | `flex-direction: column-reverse` |

### Flex wrap

| Class            | CSS                 |
| ---------------- | ------------------- |
| `co-flex-wrap`   | `flex-wrap: wrap`   |
| `co-flex-nowrap` | `flex-wrap: nowrap` |

### Flex grow / shrink

| Class          | CSS              | Use case                                       |
| -------------- | ---------------- | ---------------------------------------------- |
| `co-flex-1`    | `flex: 1 1 0%`   | Grow and shrink equally, ignoring initial size |
| `co-flex-auto` | `flex: 1 1 auto` | Grow and shrink, respecting initial size       |
| `co-flex-none` | `flex: none`     | Prevent growing or shrinking                   |

### Justify content

| Class                | CSS                              |
| -------------------- | -------------------------------- |
| `co-justify-start`   | `justify-content: flex-start`    |
| `co-justify-center`  | `justify-content: center`        |
| `co-justify-end`     | `justify-content: flex-end`      |
| `co-justify-between` | `justify-content: space-between` |
| `co-justify-around`  | `justify-content: space-around`  |
| `co-justify-evenly`  | `justify-content: space-evenly`  |

### Align items

| Class               | CSS                       |
| ------------------- | ------------------------- |
| `co-items-start`    | `align-items: flex-start` |
| `co-items-center`   | `align-items: center`     |
| `co-items-end`      | `align-items: flex-end`   |
| `co-items-stretch`  | `align-items: stretch`    |
| `co-items-baseline` | `align-items: baseline`   |

### Align self

| Class             | CSS                      |
| ----------------- | ------------------------ |
| `co-self-start`   | `align-self: flex-start` |
| `co-self-center`  | `align-self: center`     |
| `co-self-end`     | `align-self: flex-end`   |
| `co-self-stretch` | `align-self: stretch`    |

## Grid

### Grid columns

| Class             | CSS                                                 |
| ----------------- | --------------------------------------------------- |
| `co-grid-cols-1`  | `grid-template-columns: repeat(1, minmax(0, 1fr))`  |
| `co-grid-cols-2`  | `grid-template-columns: repeat(2, minmax(0, 1fr))`  |
| `co-grid-cols-3`  | `grid-template-columns: repeat(3, minmax(0, 1fr))`  |
| `co-grid-cols-4`  | `grid-template-columns: repeat(4, minmax(0, 1fr))`  |
| `co-grid-cols-6`  | `grid-template-columns: repeat(6, minmax(0, 1fr))`  |
| `co-grid-cols-12` | `grid-template-columns: repeat(12, minmax(0, 1fr))` |

### Column span

| Class              | CSS                              |
| ------------------ | -------------------------------- |
| `co-col-span-1`    | `grid-column: span 1 / span 1`   |
| `co-col-span-2`    | `grid-column: span 2 / span 2`   |
| `co-col-span-3`    | `grid-column: span 3 / span 3`   |
| `co-col-span-4`    | `grid-column: span 4 / span 4`   |
| `co-col-span-6`    | `grid-column: span 6 / span 6`   |
| `co-col-span-8`    | `grid-column: span 8 / span 8`   |
| `co-col-span-12`   | `grid-column: span 12 / span 12` |
| `co-col-span-full` | `grid-column: 1 / -1`            |

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

| Class             | CSS                 |
| ----------------- | ------------------- |
| `co-w-full`       | `width: 100%`       |
| `co-w-auto`       | `width: auto`       |
| `co-w-screen`     | `width: 100vw`      |
| `co-h-full`       | `height: 100%`      |
| `co-h-auto`       | `height: auto`      |
| `co-h-screen`     | `height: 100vh`     |
| `co-min-h-screen` | `min-height: 100vh` |

### Max-width (breakpoint-based)

| Class                | Max width |
| -------------------- | --------- |
| `co-max-w-screen-sm` | 640 px    |
| `co-max-w-screen-md` | 768 px    |
| `co-max-w-screen-lg` | 1024 px   |
| `co-max-w-screen-xl` | 1280 px   |

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

### Text alignment

| Class            | CSS                  |
| ---------------- | -------------------- |
| `co-text-left`   | `text-align: left`   |
| `co-text-center` | `text-align: center` |
| `co-text-right`  | `text-align: right`  |

### Font family

| Class          | Token                   |
| -------------- | ----------------------- |
| `co-font-sans` | `--co-font-family-sans` |
| `co-font-mono` | `--co-font-family-mono` |

### Text overflow

`co-truncate` applies `overflow: hidden`, `text-overflow: ellipsis`, and `white-space: nowrap` as a single class.

## Overflow

| Class                | CSS                |
| -------------------- | ------------------ |
| `co-overflow-hidden` | `overflow: hidden` |
| `co-overflow-auto`   | `overflow: auto`   |
| `co-overflow-scroll` | `overflow: scroll` |

## Position

| Class         | CSS                  |
| ------------- | -------------------- |
| `co-relative` | `position: relative` |
| `co-absolute` | `position: absolute` |
| `co-fixed`    | `position: fixed`    |
| `co-sticky`   | `position: sticky`   |

## Accessibility

`co-sr-only` visually hides an element while keeping it accessible to screen readers.

```html
<button>
  <co-icon name="close"></co-icon>
  <span class="co-sr-only">Close dialog</span>
</button>
```

## Responsive Prefixes

All layout and grid utilities support responsive prefixes that follow the mobile-first breakpoint scale. See [Breakpoints](./breakpoints.md) for the full breakpoint definitions.

| Prefix   | Min width | Target        |
| -------- | --------- | ------------- |
| _(none)_ | 0 px      | Base / mobile |
| `sm:`    | 640 px    | Large phones  |
| `md:`    | 768 px    | Tablets       |
| `lg:`    | 1024 px   | Small laptops |
| `xl:`    | 1280 px   | Desktops      |

### Available responsive variants

The following classes have `sm:`, `md:`, `lg:`, and `xl:` prefixed variants:

- **Display:** `hidden`, `block`, `flex`, `grid`
- **Flex direction:** `flex-row`, `flex-col`
- **Grid columns:** `grid-cols-1` through `grid-cols-6`
- **Column span:** `col-span-1` through `col-span-6`, `col-span-full`
- **Gap:** `gap-2`, `gap-4`, `gap-6`, `gap-8`

### Example: responsive card grid

```html
<div class="co-grid co-grid-cols-1 sm:co-grid-cols-2 lg:co-grid-cols-3 co-gap-4 lg:co-gap-6">
  <div class="co-p-4">Card 1</div>
  <div class="co-p-4">Card 2</div>
  <div class="co-p-4">Card 3</div>
</div>
```

This renders a single column on mobile, two columns from 640 px, and three columns with wider gap from 1024 px.

### Example: responsive sidebar layout

```html
<div class="co-flex co-flex-col md:co-flex-row co-gap-4 md:co-gap-6">
  <aside class="co-w-full md:co-max-w-screen-sm">Sidebar</aside>
  <main class="co-flex-1">Content</main>
</div>
```

### Example: show / hide by breakpoint

```html
<nav class="co-hidden md:co-flex co-gap-4">
  <!-- Desktop navigation — hidden on mobile, flex on tablet+ -->
</nav>
<button class="co-block md:co-hidden">
  <!-- Mobile menu toggle — visible on mobile, hidden on tablet+ -->
</button>
```

> **Migrating to Tailwind?** See [Tailwind Integration](./tailwind.md) for the Cobalt preset and migration path.

## When to use utilities vs. custom CSS

Utilities are ideal for **layout composition** — the structural glue between components:

```html
<!-- Good: utilities for layout, component handles its own styling -->
<div class="co-flex co-items-center co-gap-4 co-p-6">
  <co-avatar></co-avatar>
  <div class="co-flex-1">
    <h3 class="co-text-lg co-font-semibold">Jane Doe</h3>
    <p class="co-text-sm co-leading-normal">Product Designer</p>
  </div>
  <co-button variant="secondary" size="sm">Follow</co-button>
</div>
```

Reach for custom CSS when you need:

- **Component-specific styles** — internal component styling belongs in the component, not in utility classes.
- **Complex selectors** — `:hover`, `:focus-visible`, `::before`, or child combinators.
- **Animations** — transitions and keyframe animations.
- **One-off values** — if a token doesn't exist for the value you need, write CSS rather than using `style=""`.

> **Tip:** If you find yourself chaining more than 5–6 utility classes on a single element, it may be a sign that the pattern deserves its own component or a scoped CSS class.

## Best practices

1. **Always import tokens first.** The layer order declared in `@cobalt/tokens/css` must precede the utilities import.
2. **Use responsive prefixes instead of media queries in markup.** They keep responsive logic co-located with the element it affects.
3. **Prefer semantic tokens.** Utilities reference tokens, but if you need a color or shadow, use the token directly in CSS rather than creating a utility for it.
4. **Don't fight the system.** If a layout is complex enough to need grid-area, template-rows, or named lines, write CSS Grid directly — utilities are not meant to replace every CSS feature.

## Related

- [Spacing](./spacing.md) — the token scale behind gap, padding, and margin utilities
- [Typography](./typography.md) — font size, weight, and line-height tokens
- [Breakpoints](./breakpoints.md) — the responsive breakpoint scale
- [CSS Layers](./css-layers.md) — the cascade layer order that utilities depend on
- [Tailwind Integration](./tailwind.md) — using Tailwind classes backed by Cobalt tokens
- [Layout Patterns](../patterns/layout.md) — higher-level layout guidance and page structure
