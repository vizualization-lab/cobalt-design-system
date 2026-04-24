# Token Reference

<script setup>
import { data } from './tokens.data';
</script>

Browse and search all Cobalt design tokens. Click any token name to copy it to your clipboard. Use the category pills or the search bar to narrow down tokens — search works across names, values, categories, and tiers.

Need a quick explanation of how the token system is organized? Start with [Token Structure](./structure.md).

## Authoring vs Export Files

Cobalt maintains a distinction between **authoring files** and **export artifacts**.

- `packages/tokens/tokens/*.json` are the source token files. These stay intentionally simple so they round-trip cleanly through Tokens Studio.
- `dist/tokens-merged.json` is the Token Studio export/import artifact. It preserves the authoring shape and includes `$themes` and `$metadata`.
- `dist/tokens-dtcg.json` is a generated DTCG-style export. It normalizes values into a more standards-friendly structure for downstream tooling, but it is not the primary authoring or Token Studio sync file.

Use this rule:

- edit the source files in `packages/tokens/tokens`
- use `tokens-merged.json` for Token Studio workflows
- use `tokens-dtcg.json` when a consumer needs a more DTCG-aligned JSON export

## Categories

| Category       | Prefix                          | What it covers                                                                                                             |
| -------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Color**      | <nobr>`--co-color-`</nobr>      | Primitive palettes and hues, semantic roles (primary, neutral, ...), and contextual usage (surface, interactive, feedback) |
| **Space**      | <nobr>`--co-space-`</nobr>      | Base spacing scale and semantic aliases for gaps, insets, section, and page margins                                        |
| **Font**       | <nobr>`--co-font-`</nobr>       | Font families (sans, mono), size scale, weights, line-heights, and letter-spacing (tracking)                               |
| **Typography** | <nobr>`--co-typography-`</nobr> | Semantic role presets (display, heading, title, subtitle, eyebrow, body-lg, body, body-sm, label, caption)                 |
| **Shape**      | <nobr>`--co-shape-`</nobr>      | Border-radius scale and border-width values                                                                                |
| **Elevation**  | <nobr>`--co-elevation-`</nobr>  | Box-shadow depths (sm–xl) and z-index layers for stacking contexts (dropdown through tooltip)                              |
| **Motion**     | <nobr>`--co-motion-`</nobr>     | Transition durations and easing curves                                                                                     |
| **Sizing**     | <nobr>`--co-sizing-`</nobr>     | Fixed dimensions for icons across four sizes                                                                               |
| **Opacity**    | <nobr>`--co-opacity-`</nobr>    | Alpha values for disabled elements, overlays, and placeholder text                                                         |
| **Breakpoint** | <nobr>`--co-breakpoint-`</nobr> | Responsive viewport widths for media queries                                                                               |
| **Focus**      | <nobr>`--co-focus-`</nobr>      | Shared focus ring width and offset                                                                                         |
| **Control**    | <nobr>`--co-control-`</nobr>    | Shared control sizing values such as height and radius                                                                     |
| **Layout**     | <nobr>`--co-layout-`</nobr>     | Shared layout constraints such as content max widths                                                                       |
| **Component**  | <nobr>`--co-component-`</nobr>  | Component-specific contracts such as avatar sizes and nav rail layout or state tokens                                      |

<TokenTable :tokens="data.tokens" />

## Available Formats

Tokens are available in multiple formats via the `@cobalt/tokens` package:

| Format                | Import                                     |
| --------------------- | ------------------------------------------ |
| CSS Custom Properties | `@cobalt/tokens/css`                       |
| Base Element Styles   | `@cobalt/tokens/css/base`                  |
| Dark Theme            | `@cobalt/tokens/css/dark`                  |
| Named Theme CSS       | `@cobalt/tokens/css/themes/<theme>-<mode>` |
| Self-Hosted Fonts     | `@cobalt/tokens/css/fonts`                 |
| Utility Classes       | `@cobalt/tokens/css/utilities`             |
| SCSS Variables        | `@cobalt/tokens/scss`                      |
| JS/TS Constants       | `@cobalt/tokens`                           |
| Flat JSON             | `@cobalt/tokens/json`                      |
| DTCG Export           | `@cobalt/tokens/dtcg`                      |
| Tailwind Preset       | `@cobalt/tokens/tailwind`                  |
| Tailwind Theme CSS    | `@cobalt/tokens/tailwind/css`              |

### CSS

```css
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/css/dark'; /* opt-in default dark theme */
@import '@cobalt/tokens/css/themes/purple-light';
@import '@cobalt/tokens/css/themes/purple-dark';

.card {
  padding: var(--co-space-inset-md);
  border-radius: var(--co-shape-radius-md);
  background: var(--co-color-surface-raised);
}
```

### JavaScript / TypeScript

```js
import { CoSpaceInsetMd, CoShapeRadiusMd } from '@cobalt/tokens';
```

### Tailwind

```js
// tailwind.config.js
import cobaltPreset from '@cobalt/tokens/tailwind';

export default {
  presets: [cobaltPreset],
};
```
