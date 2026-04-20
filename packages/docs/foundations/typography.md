# Typography

Cobalt's typography system is built around an **editorial, regular-weight-first** philosophy: hierarchy comes from size, letter-spacing, and line-height — not from heavy weights. Medium (500) is reserved for UI emphasis (form labels, active nav items, tabs). Semibold and bold are effectively absent from the default ramp.

The system has three layers:

1. **Primitives** — raw font-family, size, weight, line-height, and tracking values in `primitives.json`.
2. **Semantic roles** — ten named typography presets in `semantic.shared.json` (`display`, `heading`, `title`, …) that bundle size + weight + tracking + line-height into a single intent.
3. **Element mappings** — `base.css` maps HTML elements to semantic roles so that opting into `[data-co-base]` produces editorial typography out of the box.

## Philosophy

Hierarchy comes from size, letter-spacing, and line-height — not weight. Regular (400) is the default at every size; medium (500) is reserved for UI emphasis (labels, active nav, tabs). This produces an editorial feel: a 48 px display headline at regular weight reads as airy, not dense.

Practical consequences:

- **Tracking compensates for size.** Negative tracking (`-0.015em` to `-0.025em`) above ~24 px; zero or slightly positive below 16 px.
- **Line-height inverts.** Large type wants tight leading (1.1–1.25); body wants comfortable leading (1.5); captions want just enough to breathe (1.4).
- **Three weights is enough.** `regular` for everything, `medium` for labels/subtitles, with `semibold` and `bold` available as escape hatches but not part of the default ramp.

## Font families

| Token                   | Stack                                                           | Usage                          |
| ----------------------- | --------------------------------------------------------------- | ------------------------------ |
| `--co-font-family-sans` | `'Inter Variable', 'Noto Sans Variable', system-ui, sans-serif` | Body text, UI labels, headings |
| `--co-font-family-mono` | `'JetBrains Mono Variable', 'Fira Code', monospace`             | Code blocks, technical values  |

Import the self-hosted variable fonts from `@cobalt/tokens`:

```css
@import '@cobalt/tokens/css/fonts';
```

> **Variable fonts.** All three families ship as variable fonts via `@fontsource-variable/*`, so any weight from 100 to 900 is available natively — no synthesized weights, no additional downloads per weight.

### International script support

Inter covers **Latin**, **Cyrillic**, **Greek**, and **Vietnamese**. Noto Sans is included as a fallback and adds **Devanagari** (Hindi, Marathi, Nepali), the one major script family that Inter doesn't support. Both fonts use `unicode-range` descriptors in their `@font-face` rules, so the browser only downloads the subsets it actually needs. A Latin-only page never fetches Devanagari glyphs.

For scripts beyond what Inter and Noto Sans provide, install additional `@fontsource-variable/noto-sans-*` packages:

| Package                                  | Script              | Languages             |
| ---------------------------------------- | ------------------- | --------------------- |
| `@fontsource-variable/noto-sans-arabic`  | Arabic              | Arabic, Farsi, Urdu   |
| `@fontsource-variable/noto-sans-bengali` | Bengali             | Bengali, Assamese     |
| `@fontsource-variable/noto-sans-thai`    | Thai                | Thai                  |
| `@fontsource-variable/noto-sans-jp`      | Japanese            | Japanese              |
| `@fontsource-variable/noto-sans-sc`      | Simplified Chinese  | Mandarin (mainland)   |
| `@fontsource-variable/noto-sans-tc`      | Traditional Chinese | Mandarin (Taiwan, HK) |
| `@fontsource-variable/noto-sans-kr`      | Korean              | Korean                |

To add support for a script (Arabic and Japanese shown here):

1. Import `fonts-international`. This adds all supported Noto Sans script names to the `--co-font-family-sans` stack so they are picked up automatically when installed:

   ```css
   @import '@cobalt/tokens/css';
   @import '@cobalt/tokens/css/fonts';
   @import '@cobalt/tokens/css/fonts-international';
   ```

2. Install the packages you need:

   ```sh
   pnpm add @fontsource-variable/noto-sans-arabic @fontsource-variable/noto-sans-jp
   ```

3. Import them inside the `co.base` layer:

   ```css
   @import '@fontsource-variable/noto-sans-arabic' layer(co.base);
   @import '@fontsource-variable/noto-sans-jp' layer(co.base);
   ```

That's it. No token overrides needed. The `fonts-international` import pre-registers all seven script names in the font stack. Names that don't match an installed `@font-face` are silently skipped by the browser, so there is no download or performance penalty for scripts you haven't installed.

The same `unicode-range` optimization applies: each script's glyphs are only downloaded when characters from that script appear on the page.

## Primitives

### Type scale

| Token                   | Size  | Rem       | Role that uses it    |
| ----------------------- | ----- | --------- | -------------------- |
| `--co-font-size-xsmall` | 12 px | 0.75 rem  | `caption`, `eyebrow` |
| `--co-font-size-small`  | 14 px | 0.875 rem | `body-sm`, `label`   |
| `--co-font-size-p`      | 16 px | 1 rem     | `body`               |
| `--co-font-size-h6`     | 18 px | 1.125 rem | `body-lg`            |
| `--co-font-size-h5`     | 20 px | 1.25 rem  | `subtitle`           |
| `--co-font-size-h4`     | 24 px | 1.5 rem   | `title`              |
| `--co-font-size-h3`     | 30 px | 1.875 rem | —                    |
| `--co-font-size-h2`     | 36 px | 2.25 rem  | `heading`            |
| `--co-font-size-h1`     | 48 px | 3 rem     | `display`            |

### Font weights

| Token                       | Value | When to reach for it                                                           |
| --------------------------- | ----- | ------------------------------------------------------------------------------ |
| `--co-font-weight-regular`  | 400   | The default. Body, display, headings, titles.                                  |
| `--co-font-weight-medium`   | 500   | UI emphasis: form labels, selected nav items, active tabs, subtitles.          |
| `--co-font-weight-semibold` | 600   | Escape hatch for emphasis in dense UI. Not used by any default role.           |
| `--co-font-weight-bold`     | 700   | Rare — strong inline emphasis (e.g. `<strong>`). Not used by any default role. |

### Line heights

| Token                           | Value | Pairing                      |
| ------------------------------- | ----- | ---------------------------- |
| `--co-font-line-height-display` | 1.1   | 36 px+ display/heading type  |
| `--co-font-line-height-tight`   | 1.25  | Titles, subtitles, labels    |
| `--co-font-line-height-normal`  | 1.5   | Body text at every size      |
| `--co-font-line-height-relaxed` | 1.75  | Long-form reading, help text |

### Letter-spacing (tracking)

Negative tracking tightens large type to match Inter's optical sizing. Positive tracking opens small caps for the `eyebrow` role.

| Token                        | Value      | Pairing                        |
| ---------------------------- | ---------- | ------------------------------ |
| `--co-font-tracking-tighter` | `-0.025em` | Display (48 px+)               |
| `--co-font-tracking-tight`   | `-0.015em` | Heading, title, subtitle       |
| `--co-font-tracking-normal`  | `0`        | Body text, labels, captions    |
| `--co-font-tracking-wide`    | `0.05em`   | Escape hatch                   |
| `--co-font-tracking-widest`  | `0.08em`   | Eyebrow (uppercase small caps) |

## Semantic role tokens

The ten roles below are the canonical way to apply typography. Each role bundles `size` + `weight` + `tracking` + `line-height` into a single intent, so you reach for one concept instead of four primitives.

| Role           | Size      | Weight  | Tracking | Line-height | Use it for                                                                                 |
| -------------- | --------- | ------- | -------- | ----------- | ------------------------------------------------------------------------------------------ |
| **`display`**  | 3 rem     | regular | tighter  | display     | Hero moments only — dashboard greetings, marketing banners. One per page.                  |
| **`heading`**  | 2.25 rem  | regular | tight    | display     | Page title (`<h1>`). The "what am I looking at" anchor.                                    |
| **`title`**    | 1.5 rem   | regular | tight    | tight       | Card titles, section titles (`<h2>`).                                                      |
| **`subtitle`** | 1.25 rem  | medium  | tight    | tight       | Subsection heads (`<h3>`, `<h4>`), group labels.                                           |
| **`eyebrow`**  | 0.75 rem  | medium  | widest   | tight       | Small-caps kicker above a heading ("Monday, January 1"–style metadata). Applies uppercase. |
| **`body-lg`**  | 1.125 rem | regular | normal   | normal      | Lead paragraphs, hero subtitles, article intros.                                           |
| **`body`**     | 1 rem     | regular | normal   | normal      | Default reading text.                                                                      |
| **`body-sm`**  | 0.875 rem | regular | normal   | normal      | Compact body: table rows, dense cards.                                                     |
| **`label`**    | 0.875 rem | medium  | normal   | tight       | Form labels, active nav items, tab labels, button text.                                    |
| **`caption`**  | 0.75 rem  | regular | normal   | normal      | Metadata, timestamps, hints, auxiliary text.                                               |

Each role emits four CSS custom properties under the `--co-typography-*` prefix:

```css
--co-typography-display-size
--co-typography-display-weight
--co-typography-display-tracking
--co-typography-display-line-height
```

### `display` is not mapped to an element

`display` is intentionally left out of `base.css`. Reach for it via the utility class (`.co-type-display`) or by consuming the semantic tokens directly when you need a hero moment. This keeps `<h1>` from accidentally rendering at 48 px across the whole site.

## Element mappings

When you opt into `[data-co-base]`, elements are mapped to semantic roles as follows:

| Element      | Role                           | Rendered size |
| ------------ | ------------------------------ | ------------- |
| `h1`         | `heading`                      | 36 px         |
| `h2`         | `title`                        | 24 px         |
| `h3`         | `subtitle`                     | 20 px         |
| `h4`         | `subtitle`                     | 20 px         |
| `h5`         | `label`                        | 14 px         |
| `h6`         | `label` weight, `caption` size | 12 px         |
| `p`, root    | `body`                         | 16 px         |
| `table` body | `body-sm`                      | 14 px         |
| `th`         | `label`                        | 14 px         |
| `small`      | `caption`                      | 12 px         |

```html
<html data-co-base data-theme="light">
  <article>
    <h1>Page title</h1>
    <!-- heading -->
    <p>Lead paragraph…</p>
    <!-- body -->
    <h2>Section title</h2>
    <!-- title -->
  </article>
</html>
```

## Usage patterns

### Consume a role via utility class

The fastest way to apply a role is the matching `.co-type-*` utility class. Import utilities **after** the main token stylesheet:

```js
import '@cobalt/tokens/css';
import '@cobalt/tokens/css/utilities';
```

```html
<section>
  <p class="co-type-eyebrow">Monday, January 1</p>
  <h1 class="co-type-display">Good afternoon, Jane</h1>
  <p class="co-type-body-lg">Your week at a glance.</p>
</section>
```

`co-type-eyebrow` automatically applies `text-transform: uppercase` — the other utilities do not transform case.

### Consume a role in component CSS

Reach for the `--co-typography-*` tokens directly when you're writing component CSS. Pull the full set so size, weight, tracking, and leading stay in sync:

```css
.hero-title {
  font-size: var(--co-typography-display-size);
  font-weight: var(--co-typography-display-weight);
  letter-spacing: var(--co-typography-display-tracking);
  line-height: var(--co-typography-display-line-height);
}

.card-title {
  font-size: var(--co-typography-title-size);
  font-weight: var(--co-typography-title-weight);
  letter-spacing: var(--co-typography-title-tracking);
  line-height: var(--co-typography-title-line-height);
}

.form-label {
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
}
```

### Reach for primitives only when roles don't fit

Primitives (`--co-font-size-*`, `--co-font-weight-*`, `--co-font-tracking-*`, `--co-font-line-height-*`) are still available, but prefer semantic roles. Primitives are appropriate when:

- You're composing a one-off type treatment that genuinely doesn't fit any role (rare — reconsider the role set before adding one).
- You're building a new semantic role on top of primitives.
- You need to match an external system's type scale exactly.

```css
/* Prefer this */
font-size: var(--co-typography-body-size);

/* Over this */
font-size: var(--co-font-size-p);
```

## Best practices

- **Start with a role.** If you're writing `font-size: var(--co-font-size-h4)`, you probably meant `title` — use the role instead.
- **Don't split the pieces.** If you apply a role's `size`, apply its `weight`, `tracking`, and `line-height` too. Mixing primitives across roles is how type hierarchies drift.
- **Use `display` sparingly.** At most once per page, for the single most important element.
- **Never use `bold` for display.** The editorial look depends on `regular` at display sizes. If the design ever calls for display-weight bold, add a new role for it rather than one-off'ing the primitive.
- **Respect the uppercase convention for `eyebrow`.** The role is named after the typographic pattern (all caps, wide tracking, small size); the utility class applies the transform automatically, but direct token usage should do the same.
- **Honor user font-size preferences.** Use `rem` values exclusively (all the primitives do). Avoid `px` for font-size in component CSS.

## Related

- [Utility Classes](./utilities.md) — `.co-type-*` role classes and `co-text-*` size utilities
- [Tailwind preset](./tailwind.md) — how typography maps to Tailwind class names
- [Colors](./colors.md) — text color tokens
- [Accessibility](./accessibility.md) — readable font sizes and contrast
