# Colors

<script setup>
import { ref } from 'vue';
import { data } from './colors.data';

const paletteMode = ref('light');
</script>

Cobalt color families are organized as ordered shade scales from `50` to `950`. Their progression is influenced by [Radix Colors](https://www.radix-ui.com/colors/docs/overview): the lightest shades support quiet page and component backgrounds, the middle shades support fills and borders, `700`–`800` carry solid accents, and `900`–`950` provide readable same-hue text.

<div class="color-preview-toolbar">
  <p class="color-preview-note">
    Toggle <strong>{{ paletteMode === 'light' ? 'Light' : 'Dark' }}</strong> mode to compare the palettes, and click any swatch to copy its CSS token.
  </p>
  <div class="color-mode-toggle" role="group" aria-label="Palette preview mode">
    <button
      type="button"
      class="color-mode-button"
      :class="{ 'is-active': paletteMode === 'light' }"
      :aria-pressed="paletteMode === 'light'"
      @click="paletteMode = 'light'"
    >
      Light
    </button>
    <button
      type="button"
      class="color-mode-button"
      :class="{ 'is-active': paletteMode === 'dark' }"
      :aria-pressed="paletteMode === 'dark'"
      @click="paletteMode = 'dark'"
    >
      Dark
    </button>
  </div>
</div>

## Default Theme

The default theme pairs the custom `blue` brand scale with `gray` neutrals.

<template v-for="theme in data.themes.filter((entry) => entry.id === 'default')" :key="theme.id">
  <ColorSwatch :modes="theme.modes" :usage-groups="data.usageGroups" :active-mode="paletteMode" />
</template>

## Alternate Accent Theme

Purple is the shipped alternate accent theme. It keeps the same neutral, surface, border, and status structure, and swaps the accent family from the default blue scale to stock Radix `purple`.

See [Using the Purple Theme](#using-the-purple-theme) below for the stylesheet imports and the `data-theme` / `data-mode` toggle pattern.

<template v-for="theme in data.themes.filter((entry) => entry.id === 'purple')" :key="theme.id">
  <ColorSwatch :modes="theme.modes" :usage-groups="data.usageGroups" :active-mode="paletteMode" />
</template>

## How the Scale Works

Each family follows the same numeric progression:

| Shade | Typical use                         |
| ----- | ----------------------------------- |
| `50`  | App and page backgrounds            |
| `75`  | Subtle background tints             |
| `100` | Component backgrounds               |
| `200` | Pressed and selected subtle fills   |
| `300` | Stronger subtle fills               |
| `400` | Quiet borders and separators        |
| `500` | Active borders and selection edges  |
| `600` | Focus rings and strong borders      |
| `700` | Solid accents and interactive fills |
| `800` | Hovered or reinforced solids        |
| `900` | Low-contrast text on the same hue   |
| `950` | High-contrast text on the same hue  |

For the default accent family, `blue.700` is `#1a5eff` in both light and dark mode. That keeps the core brand accent stable while the surrounding shades adapt to each surface context.

## Semantic Examples

These examples come from the source theme mappings, so you can compare how the same semantic token resolves across the default and purple themes without changing component code.

<table>
  <thead>
    <tr>
      <th>Token</th>
      <th>Usage</th>
      <th>Default Light</th>
      <th>Default Dark</th>
      <th>Purple Light</th>
      <th>Purple Dark</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="example in data.semanticExamples" :key="example.token">
      <td><code>{{ example.token }}</code></td>
      <td>{{ example.usage }}</td>
      <td>
        <code>{{ example.values['default.light'].value }}</code><br />
        <span>{{ example.values['default.light'].reference }}</span>
      </td>
      <td>
        <code>{{ example.values['default.dark'].value }}</code><br />
        <span>{{ example.values['default.dark'].reference }}</span>
      </td>
      <td>
        <code>{{ example.values['purple.light'].value }}</code><br />
        <span>{{ example.values['purple.light'].reference }}</span>
      </td>
      <td>
        <code>{{ example.values['purple.dark'].value }}</code><br />
        <span>{{ example.values['purple.dark'].reference }}</span>
      </td>
    </tr>
  </tbody>
</table>

## Using the Purple Theme

Default light values still come from `@cobalt/tokens/css`, and default dark values still come from `@cobalt/tokens/css/dark`. The purple theme is opt-in and ships as two scoped stylesheets, one for each mode:

```css
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/css/dark';
@import '@cobalt/tokens/css/themes/purple-light';
@import '@cobalt/tokens/css/themes/purple-dark';
```

After those files are loaded, switch themes by updating `data-theme` and `data-mode` on the document root:

```js
const root = document.documentElement;

export function applyCobaltTheme(theme = 'default', mode = 'light') {
  root.dataset.theme = theme;
  root.dataset.mode = mode;
}

applyCobaltTheme('purple', 'light');
applyCobaltTheme('purple', 'dark');
applyCobaltTheme('default', 'dark');
```

Example markup:

```html
<html data-theme="purple" data-mode="light"></html>
<html data-theme="purple" data-mode="dark"></html>
```

The selector model stays the same:

- `data-theme="default" data-mode="light"` for the default light theme
- `data-theme="default" data-mode="dark"` for the default dark theme
- `data-theme="purple" data-mode="light"` or `data-theme="purple" data-mode="dark"` for the alternate accent theme
- `data-theme="dark"` still works as a backward-compatible alias for the default dark theme only

If you are building a theme toggle, load the purple stylesheets once and then only switch the data attributes at runtime. Component code should keep using semantic tokens such as `--co-color-primary-base` and `--co-color-interactive-primary-default`.

## Practical Rules

- Prefer semantic tokens such as `--co-color-surface-default` or `--co-color-interactive-primary-default` in components and app code.
- Reach for primitive tokens only when you are extending the system itself, building documentation, or deliberately creating a non-semantic illustration or data-vis palette.
- Think in `50`–`950`: lower shades for backgrounds, middle shades for borders and subtle fills, `700`–`800` for solid accents, and `900`–`950` for readable same-hue text.

## Related

- [Accessibility Standards](./accessibility.md)
- [Token Structure](../tokens/structure.md)
- [Token Reference](../tokens/index.md)

<style scoped>
.color-preview-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: 20px 0 24px;
  padding: 12px 14px;
  border: 1px solid var(--co-color-border-subtle);
  border-radius: var(--co-shape-radius-md);
  background: var(--co-color-surface-raised);
}

.color-preview-note {
  margin: 0;
  color: var(--co-color-text-secondary);
  font-size: 0.9rem;
}

.color-mode-toggle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border: 1px solid var(--co-color-border-subtle);
  border-radius: 999px;
  background: var(--co-color-surface-default);
  flex-shrink: 0;
}

.color-mode-button {
  border: none;
  background: transparent;
  color: var(--co-color-text-secondary);
  font: inherit;
  font-size: 0.85rem;
  font-weight: var(--co-typography-label-weight);
  line-height: 1;
  padding: 0.55rem 0.95rem;
  border-radius: 999px;
  cursor: pointer;
  transition:
    background var(--co-motion-duration-fast) var(--co-motion-easing-default),
    color var(--co-motion-duration-fast) var(--co-motion-easing-default),
    box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
}

.color-mode-button:hover {
  color: var(--co-color-text-default);
}

.color-mode-button.is-active {
  background: var(--co-color-interactive-subtle-selected);
  color: var(--co-color-text-link);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, currentColor 16%, transparent);
}

@media (max-width: 720px) {
  .color-preview-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
