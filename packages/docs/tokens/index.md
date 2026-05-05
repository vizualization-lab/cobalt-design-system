# Token Reference

<script setup>
import { data } from './tokens.data';
</script>

Browse and search Cobalt design tokens in a contained browser. `Main` focuses on semantic tokens and direct-use primitives, `Color Palettes` holds the primitive color scales, and global search lets you jump straight to a token before opening its full details.

> Need a quick explanation of how the token system is organized? Start with [Token Structure](./structure.md).

<TokenTable :tokens="data.tokens" />

## Categories

### Semantic

Semantic tokens reference other tokens via `var()` and express design intent — use these in product code for theme-safe, self-documenting styles.

| Category       | Prefix                            | What it covers                                                                                             |
| -------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Color**      | <nobr>`--co-color-`</nobr>        | Semantic roles (primary, neutral, ...) and contextual usage (surface, interactive, feedback)               |
| **Border**     | <nobr>`--co-border-width-`</nobr> | Semantic border-width intents for default, action, divider, container, panel, and emphasized frames        |
| **Space**      | <nobr>`--co-space-`</nobr>        | Semantic aliases for gaps, insets, section, and page margins                                               |
| **Typography** | <nobr>`--co-typography-`</nobr>   | Semantic role presets (display, heading, title, subtitle, eyebrow, body-lg, body, body-sm, label, caption) |
| **Focus**      | <nobr>`--co-focus-`</nobr>        | Shared focus ring width and offset                                                                         |
| **Control**    | <nobr>`--co-control-`</nobr>      | Shared control radius referencing shape tokens                                                             |
| **Layout**     | <nobr>`--co-layout-`</nobr>       | Shared layout constraints such as content max widths                                                       |
| **Component**  | <nobr>`--co-component-`</nobr>    | Component-specific contracts such as avatar sizes and nav rail state tokens                                |

### Primitive

Primitive tokens hold raw, hard-coded values — the foundational scales that semantic tokens reference. Prefer semantic tokens in product code; use primitives only for building new semantic mappings.

| Category       | Prefix                          | What it covers                                                                    |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------- |
| **Color**      | <nobr>`--co-color-`</nobr>      | Direct color values not covered by the Color Palettes tab                         |
| **Space**      | <nobr>`--co-space-`</nobr>      | Base spacing scale (`--co-space-0` through `--co-space-24`)                       |
| **Font**       | <nobr>`--co-font-`</nobr>       | Font families (sans, mono), size scale, weights, line-heights, and letter-spacing |
| **Shape**      | <nobr>`--co-shape-`</nobr>      | Border-radius scale and raw border-width values                                   |
| **Elevation**  | <nobr>`--co-elevation-`</nobr>  | Box-shadow depths (sm–xl) and z-index layers for stacking contexts                |
| **Motion**     | <nobr>`--co-motion-`</nobr>     | Transition durations and easing curves                                            |
| **Sizing**     | <nobr>`--co-sizing-`</nobr>     | Fixed dimensions for icons across four sizes                                      |
| **Opacity**    | <nobr>`--co-opacity-`</nobr>    | Alpha values for disabled elements, overlays, and placeholder text                |
| **Breakpoint** | <nobr>`--co-breakpoint-`</nobr> | Responsive viewport widths for media queries                                      |
| **Control**    | <nobr>`--co-control-`</nobr>    | Shared control height values (sm through xl)                                      |
| **Component**  | <nobr>`--co-component-`</nobr>  | Component-specific hard-coded values such as avatar sizes and nav rail dimensions |

## Available Formats

Tokens are available in multiple formats via the `@cobalt/tokens` package:

| Format                      | Import                               |
| --------------------------- | ------------------------------------ |
| CSS Custom Properties       | `@cobalt/tokens/css`                 |
| Base Element Styles + Reset | `@cobalt/tokens/css/base`            |
| Theme Bundle (light + dark) | `@cobalt/tokens/themes/<theme>`      |
| Self-Hosted Fonts           | `@cobalt/tokens/css/fonts`           |
| Utility Classes             | `@cobalt/tokens/css/utilities`       |
| SCSS Helpers + Variables    | `@cobalt/tokens/scss`                |
| SCSS Token CSS              | `@cobalt/tokens/scss/css`            |
| SCSS Theme Bundle           | `@cobalt/tokens/scss/themes/<theme>` |
| JS/TS Constants             | `@cobalt/tokens`                     |
| Flat JSON                   | `@cobalt/tokens/json`                |
| DTCG Export                 | `@cobalt/tokens/dtcg`                |
| Tailwind Preset             | `@cobalt/tokens/tailwind`            |
| Tailwind Theme CSS          | `@cobalt/tokens/tailwind/css`        |

### CSS

Each theme is available as a single import that includes both light and dark modes:

```css
@import '@cobalt/tokens/css'; /* layer order + base tokens */
@import '@cobalt/tokens/css/fonts'; /* self-hosted fonts */
@import '@cobalt/tokens/themes/purple'; /* purple theme (light + dark) */
```

To switch themes, swap the theme import — no other code changes needed. Use the `setTheme` utility to activate a theme at runtime:

```js
import { setTheme } from '@cobalt/tokens/theme';

setTheme('purple'); // purple light
setTheme('purple', 'dark'); // purple dark
setTheme('default', 'dark'); // default dark
```

For the default theme, use `@cobalt/tokens/themes/default` or import light and dark separately:

```css
@import '@cobalt/tokens/css'; /* default light (always required) */
@import '@cobalt/tokens/css/dark'; /* default dark overrides */
```

Per-mode imports are also available at `@cobalt/tokens/css/themes/<theme>-<mode>` for advanced use cases where you only need one mode.

```css
.card {
  padding: var(--co-space-inset-md);
  border: var(--co-border-width-container) solid var(--co-color-border-default);
  border-radius: var(--co-shape-radius-md);
  background: var(--co-color-surface-raised);
}
```

### JavaScript / TypeScript

```js
import { CoBorderWidthDefault, CoSpaceInsetMd, CoShapeRadiusMd } from '@cobalt/tokens';
```

### SCSS

The SCSS API provides theme-safe authoring helpers. Helpers and variables emit `var(--co-*)`, so compiled Sass responds to the same runtime theme changes as plain CSS.

```scss
@use '@cobalt/tokens/scss' as co;
@use '@cobalt/tokens/scss/css';
@use '@cobalt/tokens/scss/themes/purple';

.card {
  padding: co.space('inset.md');
  color: co.color('text.default');
  background: co.color('surface.raised');
  border-radius: co.$co-shape-radius-md;

  @include co.type('body');
}

@include co.media-up('lg') {
  .card {
    padding: co.space('inset.lg');
  }
}
```

See [SCSS Integration](../foundations/scss.md) for helper details and theming guidance.

### Tailwind

```js
// tailwind.config.js
import cobaltPreset from '@cobalt/tokens/tailwind';

export default {
  presets: [cobaltPreset],
};
```

## Authoring vs Export Files

Cobalt maintains a distinction between **authoring files** and **export artifacts**.

- `packages/tokens/tokens/*.json` are the source token files. These stay intentionally simple so they round-trip cleanly through Tokens Studio.
- `dist/tokens-merged.json` is the Token Studio export/import artifact. It preserves the authoring shape and includes `$themes` and `$metadata`.
- `dist/tokens-dtcg.json` is a generated DTCG-style export. It normalizes values into a more standards-friendly structure for downstream tooling, but it is not the primary authoring or Token Studio sync file.

Use this rule:

- edit the source files in `packages/tokens/tokens`
- use `tokens-merged.json` for Token Studio workflows
- use `tokens-dtcg.json` when a consumer needs a more DTCG-aligned JSON export
