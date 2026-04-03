# Token Reference

<script setup>
import { data } from './tokens.data';
</script>

Browse and search all Cobalt design tokens. Click any token name to copy it to your clipboard. Use the category pills or the search bar to narrow down tokens — search works across names, values, categories, and tiers.

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
