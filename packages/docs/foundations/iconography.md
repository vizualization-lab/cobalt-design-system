# Iconography

Cobalt uses [Material Symbols](https://fonts.google.com/icons) — 2,500+ icons in the rounded style with an optional fill toggle. Icons are rendered via the `<co-icon>` web component, which uses inline SVGs with `currentColor` for full control over color, size, and animation via CSS.

## Icon Gallery

Browse, search, and export any icon. Click an icon to see all styles, copy SVG, or download PNG.

<ClientOnly>
  <IconGallery />
</ClientOnly>

## Icon Sizes

All icons are designed on a 24 px grid but scale cleanly to the four supported sizes:

| Token                 | Size  | Usage                                 |
| --------------------- | ----- | ------------------------------------- |
| `--co-sizing-icon-xs` | 16 px | Inline indicators inside badges, tags |
| `--co-sizing-icon-sm` | 20 px | Inside buttons, form controls         |
| `--co-sizing-icon-md` | 24 px | Standalone icons, navigation items    |
| `--co-sizing-icon-lg` | 32 px | Empty states, feature highlights      |

## Usage with the `co-icon` Component

The recommended way to use icons is through the `<co-icon>` component, which handles SVG rendering, sizing, and accessibility automatically.

### Web Component

```html
<script type="module">
  import '@cobalt/components/icon';
</script>

<co-icon name="arrow-forward"></co-icon>
<co-icon name="check" size="sm"></co-icon>
<co-icon name="home" fill></co-icon>
```

### React

```tsx
import { CoIcon } from '@cobalt/react';

function Example() {
  return (
    <>
      <CoIcon name="arrow-forward" />
      <CoIcon name="check" size="sm" />
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
  <CoIcon name="arrow-forward" />
  <CoIcon name="check" size="sm" />
  <CoIcon name="home" fill />
</template>
```

### Angular

```html
<co-icon name="arrow-forward"></co-icon>
<co-icon name="check" size="sm"></co-icon>
<co-icon name="home" fill></co-icon>
```

## Styling with CSS

Icons inherit `currentColor` by default, so they match the surrounding text color automatically:

```css
/* Icon inherits color from parent */
.nav-item {
  color: var(--co-color-text-default);
}

/* Override color independently */
.status-icon--success {
  color: var(--co-color-success-base);
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

## Custom Icons

When the Material Symbols library doesn't cover your use case, Cobalt supports custom SVG icons that render through the same `<co-icon>` component with full fill support.

### The `co-` naming convention

Custom icons are namespaced with a **`co-` prefix** (e.g., `co-chart`, `co-brand-logo`) to clearly differentiate them from the Material Symbols collection. This prefix is required — the build pipeline validates it and skips files without it.

### Adding custom icons

Place SVG files in the `packages/icons/custom/rounded/` directory:

```
packages/icons/custom/
  rounded/
    co-chart.svg          # unfilled
    co-chart-fill.svg     # filled
```

Each icon can have up to 2 variants (unfilled/filled). Custom icons use `viewBox="0 0 24 24"` (the standard 24×24 grid), while Material Symbols use their native `0 -960 960 960` viewBox — the component handles this automatically.

After adding SVGs, run `pnpm build` in the icons package. Custom icons will appear in the icon gallery alongside Material Symbols.

### Usage

```html
<co-icon name="co-chart"></co-icon> <co-icon name="co-chart" fill></co-icon>
```

```tsx
<CoIcon name="co-chart" fill />
```

### Designing Custom Icons

When designing custom icons, follow these specifications to ensure visual consistency with the existing icon set.

### Grid & Layout

All icons are built on a **24×24dp canvas** with a **20×20dp live area** centered within it (2dp padding on each side). Content must stay within the live area — the padding zone acts as clear space and ensures consistent alignment when icons sit next to each other.

Fill the live area as fully as possible to maintain consistent optical weight across the icon set.

### Keyline Shapes

Icons should align to one of four keyline shapes. These ensure consistent optical sizing — a circle and a square of the same pixel dimensions look different in weight, so keylines compensate.

| Shape                | Dimensions | Use for                                  |
| -------------------- | ---------- | ---------------------------------------- |
| Circle               | 20×20dp    | Circular subjects (globe, face, clock)   |
| Square               | 18×18dp    | Square subjects (calendar, card, stop)   |
| Vertical rectangle   | 16×20dp    | Tall subjects (document, phone, bottle)  |
| Horizontal rectangle | 20×16dp    | Wide subjects (landscape, laptop, video) |

Pick the keyline shape closest to your icon's silhouette and design within its bounds.

### Stroke & Fill

- **Stroke weight:** 2dp — consistent across all paths (matches weight-300 icons)
- **Corner radius:** 2dp on exterior corners; interior corners may be sharp when space is tight
- **Stroke terminals:** Rounded caps and joins (matching the `rounded` variant)
- **Fill rule:** `evenodd` for predictable rendering of overlapping paths
- **Filled variants:** all enclosed areas should be solid; maintain the 2dp corner radius

### Optical Adjustments

- Circular and triangular shapes should extend **~1dp beyond the keyline** to appear optically equal in size to square shapes
- Diagonal strokes may need **+0.5dp width** to match the perceived weight of orthogonal strokes
- Center of gravity should sit at the **geometric center** of the 24dp canvas

### SVG Export Requirements

- **Canvas:** 24×24 (or 960×960 matching Material Symbols native grid — we handle normalization)
- `viewBox="0 0 24 24"` if using 24-unit paths, or `viewBox="0 -960 960 960"` if exporting from the Material Symbols grid
- Use **`<path>` elements only** — no `<circle>`, `<rect>`, `<line>` (simplifies rendering and the icon registry)
- Flatten all transforms, merge overlapping paths
- Remove metadata, comments, editor artifacts (Illustrator/Figma cruft)
- `fill="currentColor"` on paths (or no fill attribute, letting inheritance work)
- **No `stroke` attributes** — icons are expressed as filled outlines, not stroked paths
- No embedded `<style>`, `<defs>`, or `<clipPath>` elements
- File naming: **kebab-case** (e.g., `custom-chart.svg`)

### Keyline Template Downloads

Use these templates as a starting layer in your vector editor:

- **SVG Keyline Template** — [Download SVG template](/assets/icon-keyline-template.svg) — lightweight, opens in any vector editor
- **Illustrator Keyline Template** — [Download .ai template](/assets/gm_icon_template.ai.zip) — original Google template

> The Illustrator template is provided by Google under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0). Original source: [Material Design icon template](https://storage.googleapis.com/material-io-design/downloads/gm_icon_template.ai.zip).

### Checklist Before Submission

Use this checklist before handing off a custom icon:

- [ ] 24×24dp canvas, content within 20×20dp live area
- [ ] Aligned to the closest keyline shape
- [ ] 2dp stroke weight, 2dp corner radius
- [ ] Paths only (no strokes, no clip paths, no transforms)
- [ ] `fill="currentColor"` or no fill attribute
- [ ] Works at all four sizes (16, 20, 24, 32px) — no details lost at small sizes
- [ ] Filled variant provided alongside the default
- [ ] File name in kebab-case
- [ ] Tested in light and dark themes

## Icon Overrides

Occasionally, a Material Symbols icon doesn't meet Cobalt's visual standards — for example, `picture-as-pdf` has small, hard-to-read "PDF" lettering. Rather than creating a separate custom icon with a `co-` prefix, you can **override** the original icon so that every existing usage automatically picks up the improved version.

### When to use overrides vs custom icons

| Scenario                                                       | Use                                                            |
| -------------------------------------------------------------- | -------------------------------------------------------------- |
| Replacing a Material Symbols icon with a better version        | **Override** — keeps the same name, no consumer changes needed |
| Adding a brand-new icon that doesn't exist in Material Symbols | **Custom icon** — use the `co-` prefix                         |

### Directory structure

Override SVGs live in `packages/icons/overrides/rounded/` and must use the **exact Material Symbols name** (kebab-case):

```
packages/icons/overrides/
  rounded/
    picture-as-pdf.svg        # unfilled override
    picture-as-pdf-fill.svg   # filled override
```

The build warns if an override name doesn't match any existing Material Symbols icon (typo protection).

### SVG requirements

Override icons follow the same export rules as custom icons:

- `viewBox="0 0 24 24"` (24×24 grid)
- `<path>` elements only, `fill="currentColor"`
- No `<style>`, `<defs>`, `<clipPath>`, or stroke attributes
- The `co-icon` component automatically uses the correct viewBox for overrides

### Build

After adding or updating override SVGs, rebuild the icon registry:

```bash
cd packages/icons
pnpm build
```

The build log will report the override count (e.g., "1 overrides").

### Example

The `picture-as-pdf` icon is overridden with larger, bolder "PDF" lettering for better readability at small sizes:

```html
<!-- Uses the override automatically — no code changes needed -->
<co-icon name="picture-as-pdf"></co-icon>
<co-icon name="picture-as-pdf" fill></co-icon>
```

## Animated Icons

Cobalt supports CSS microanimations on a curated set of icons. Animated variants are separate SVG files that wrap path groups in semantic `<g class="co-anim-*">` elements, which the `co-icon` component's stylesheet targets with CSS keyframes. Reduced motion is respected automatically.

### How It Works

Setting the `animated` attribute on `<co-icon>` swaps the static SVG for the animated variant. CSS keyframes defined in the component's shadow DOM drive the animation. When `prefers-reduced-motion: reduce` is active, all animations are disabled.

```html
<co-icon name="progress-activity" animated></co-icon>
```

See the [Icon component docs](../components/icon.md) for full usage examples across frameworks.

### File Placement & Naming

- **Directory:** `packages/icons/animated/rounded/`
- File name must match the static icon's kebab-case name exactly (e.g., `progress-activity.svg`)
- After adding a file, run `pnpm build` in `packages/icons`

### Available Animation Classes

| Class               | Keyframe       | Behavior                    | Duration | Easing        | Iterations     |
| ------------------- | -------------- | --------------------------- | -------- | ------------- | -------------- |
| `co-anim-rotate`    | `co-spin`      | 360° rotation               | 1200 ms  | `linear`      | infinite       |
| `co-anim-bell-body` | `co-bell-ring` | Damped swing from top pivot | 400 ms   | `ease-in-out` | 2              |
| `co-anim-check`     | `co-check-in`  | Scale 0→1 + fade in         | 300 ms   | `ease-out`    | 1 (`forwards`) |

Static companion classes (`co-anim-bell-clapper`, `co-anim-check-bg`) don't animate — they exist to separate parts so only specific groups move.

### SVG Structure

#### Single-part animation

Wrap the entire icon in one animated group. Used when the whole icon shares a single motion (e.g., a spinner):

```xml
<!-- progress-activity.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
  <g class="co-anim-rotate">
    <path fill="currentColor" d="M331.32-129.4q-69.29..."/>
  </g>
</svg>
```

#### Multi-part animation

Split paths into separate `<g>` groups so each part can animate independently (or stay static):

```xml
<!-- check-circle.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
  <g class="co-anim-check-bg">
    <!-- circle outline — static -->
    <path fill="currentColor" d="M480.07-100q-78.22..."/>
  </g>
  <g class="co-anim-check">
    <!-- checkmark — scales in -->
    <path fill="currentColor" d="M421-380.15 319.54..."/>
  </g>
</svg>
```

### Adding a New Animation Class

If none of the existing classes fit your icon, you can add a new one:

1. Add `<g class="co-anim-{name}">` wrapper(s) in the SVG
2. Add the matching CSS rule in `co-icon.styles.css` under `:host([animated]) .co-anim-{name}` with a `@keyframes` block
3. The existing `@media (prefers-reduced-motion: reduce)` block already blanket-disables all animations — no extra work needed

### Design Guidelines for Animation

- **Keep durations short** (200–1200 ms). Reference `--co-motion-duration-*` and `--co-motion-easing-*` tokens where possible.
- Use `transform-box: fill-box` and `transform-origin` for correct pivot points on SVG groups.
- **Continuous animations** (infinite iterations) should be reserved for loading/progress states.
- **One-shot animations** should have clear start and end states.
- Test at all four icon sizes (xs / sm / md / lg).
- Always verify with `prefers-reduced-motion: reduce` enabled.

### Animated Icon Checklist

- [ ] SVG placed in `packages/icons/animated/rounded/{icon-name}.svg`
- [ ] File name matches the existing static icon name exactly
- [ ] Paths wrapped in `<g class="co-anim-*">` using an existing animation class (or new class added to `co-icon.styles.css`)
- [ ] `fill="currentColor"` on all paths
- [ ] `viewBox="0 -960 960 960"` (Material Symbols grid)
- [ ] Animation works at all four sizes (16, 20, 24, 32 px)
- [ ] Animation disabled under `prefers-reduced-motion: reduce`
- [ ] `pnpm build` in `packages/icons` succeeds and the icon appears in the animated registry
- [ ] Tested in light and dark themes

## Best Practices

1. **Use a single size per context.** Don't mix 16 px and 20 px icons in the same button.
2. **Use `fill` for active/selected states** to provide visual feedback.
3. **Avoid icon overload.** If a row of actions has more than four icon-only buttons, add visible labels.
4. **Align icons optically.** Some icons (e.g., play triangles) may need 1-2 px nudges to look visually centered.

## Related

- [Icon Component](../components/icon.md) — full API reference and framework usage
- [Accessibility](./accessibility.md) — ARIA patterns and screen reader support
- [Colors](./colors.md) — icon color tokens
- [M3 Icon Design Guidelines](https://m3.material.io/styles/icons/designing-icons) — Google's full specification
