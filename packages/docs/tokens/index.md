# Token Reference

<script setup>
import { data } from './tokens.data';
</script>

Browse and search all Cobalt design tokens. Click any token name to copy it to your clipboard. Use the category pills or the search bar to narrow down tokens — search works across names, values, categories, and tiers.

## Categories

| Category       | Prefix                          | What it covers                                                                                                             |
| -------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Color**      | <nobr>`--co-color-`</nobr>      | Primitive palettes and hues, semantic roles (primary, neutral, ...), and contextual usage (surface, interactive, feedback) |
| **Space**      | <nobr>`--co-space-`</nobr>      | Base spacing scale and semantic aliases for gaps, insets, section, and page margins                                        |
| **Font**       | <nobr>`--co-font-`</nobr>       | Font families (sans, mono), size scale, weights, and line-heights                                                          |
| **Shape**      | <nobr>`--co-shape-`</nobr>      | Border-radius scale and border-width values                                                                                |
| **Elevation**  | <nobr>`--co-elevation-`</nobr>  | Box-shadow depths (sm–xl) and z-index layers for stacking contexts (dropdown through tooltip)                              |
| **Motion**     | <nobr>`--co-motion-`</nobr>     | Transition durations and easing curves                                                                                     |
| **Sizing**     | <nobr>`--co-sizing-`</nobr>     | Fixed dimensions for icons across four sizes                                                                               |
| **Opacity**    | <nobr>`--co-opacity-`</nobr>    | Alpha values for disabled elements, overlays, and placeholder text                                                         |
| **Breakpoint** | <nobr>`--co-breakpoint-`</nobr> | Responsive viewport widths for media queries                                                                               |

<TokenTable :tokens="data.tokens" />

## Available Formats

Tokens are available in multiple formats via the `@cobalt/tokens` package:

| Format                | Import                         |
| --------------------- | ------------------------------ |
| CSS Custom Properties | `@cobalt/tokens/css`           |
| Base Element Styles   | `@cobalt/tokens/css/base`      |
| Dark Theme            | `@cobalt/tokens/css/dark`      |
| Self-Hosted Fonts     | `@cobalt/tokens/css/fonts`     |
| Utility Classes       | `@cobalt/tokens/css/utilities` |
| SCSS Variables        | `@cobalt/tokens/scss`          |
| JS/TS Constants       | `@cobalt/tokens`               |
| Flat JSON             | `@cobalt/tokens/json`          |
| Tailwind Preset       | `@cobalt/tokens/tailwind`      |
| Tailwind Theme CSS    | `@cobalt/tokens/tailwind/css`  |

### CSS

```css
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/css/dark'; /* opt-in dark theme */

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
