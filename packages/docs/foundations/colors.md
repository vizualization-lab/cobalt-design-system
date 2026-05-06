# Colors

<script setup>
import { computed, ref } from 'vue';
import { data } from './colors.data';

const paletteMode = ref('light');
const selectedThemeId = ref('default');
const isDarkPalette = computed(() => paletteMode.value === 'dark');
const availableThemes = computed(() => data.themes);
const selectedTheme = computed(
  () =>
    availableThemes.value.find((entry) => entry.id === selectedThemeId.value) ??
    availableThemes.value[0],
);

const selectedAccentPalette = computed(() => {
  const theme = selectedTheme.value;
  if (!theme) return null;

  const accentFamily = theme.accentFamily.replace(/-dark$/, '');
  return (
    theme.palettes.find((palette) => palette.rows.some((row) => row.family === accentFamily)) ??
    null
  );
});

const selectedAccentValues = computed(() => {
  const palette = selectedAccentPalette.value;
  if (!palette) return null;

  const lightRow = palette.rows.find((row) => row.id === 'light');
  const darkRow = palette.rows.find((row) => row.id === 'dark');

  return {
    lightReference: lightRow ? `${lightRow.family}.700` : '',
    lightValue: lightRow?.shades.find((shade) => shade.label === '700')?.value ?? '',
    darkReference: darkRow ? `${darkRow.family}.700` : '',
    darkValue: darkRow?.shades.find((shade) => shade.label === '700')?.value ?? '',
  };
});

const selectedThemeSummary = computed(() => {
  const theme = selectedTheme.value;
  if (!theme) return '';

  if (theme.id === 'default') {
    return 'The default theme pairs the custom blue brand scale with gray neutrals.';
  }

  return `${theme.name} keeps the same neutral, surface, border, and status structure while swapping the accent family from the default blue scale to ${theme.name.toLowerCase()}.`;
});

const themeAttributes = computed(() => {
  const theme = selectedTheme.value?.id ?? 'default';
  return {
    light: `data-theme="${theme}" data-mode="light"`,
    dark: `data-theme="${theme}" data-mode="dark"`,
  };
});

const selectedThemeCodeSnippets = computed(
  () =>
    data.themeCodeSnippets[selectedTheme.value?.id ?? 'default'] ?? data.themeCodeSnippets.default,
);

function togglePaletteMode() {
  paletteMode.value = isDarkPalette.value ? 'light' : 'dark';
}

function selectTheme(themeId) {
  selectedThemeId.value = themeId;
}

function onThemeKeydown(event, index) {
  const last = availableThemes.value.length - 1;
  let next = index;

  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      next = index === last ? 0 : index + 1;
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      next = index === 0 ? last : index - 1;
      break;
    case 'Home':
      next = 0;
      break;
    case 'End':
      next = last;
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      selectedThemeId.value = availableThemes.value[index].id;
      return;
    default:
      return;
  }

  event.preventDefault();
  selectedThemeId.value = availableThemes.value[next].id;
}
</script>

Cobalt color families are organized as ordered shade scales from `50` to `950`. Their progression is influenced by [Radix Colors](https://www.radix-ui.com/colors/docs/overview): the lightest shades support quiet page and component backgrounds, the middle shades support fills and borders, `700`–`800` carry solid accents, and `900`–`950` provide readable same-hue text.

<div class="color-preview-toolbar">
  <p class="color-preview-note">
    Use the theme and mode controls to compare palettes, and click any swatch to copy its CSS token.
  </p>
  <div class="color-preview-controls">
    <div class="color-theme-control">
      <span class="color-control-label">Theme</span>
      <div class="color-theme-selector" role="radiogroup" aria-label="Color theme preview">
        <button
          v-for="(theme, index) in availableThemes"
          :key="theme.id"
          type="button"
          role="radio"
          class="color-theme-pill"
          :class="{ 'is-active': selectedThemeId === theme.id }"
          :aria-checked="selectedThemeId === theme.id"
          :tabindex="selectedThemeId === theme.id ? 0 : -1"
          @click="selectTheme(theme.id)"
          @keydown="onThemeKeydown($event, index)"
        >
          {{ theme.name }}
        </button>
      </div>
    </div>
    <div class="color-mode-control">
      <span class="color-control-label">Palette Mode</span>
      <button
        type="button"
        class="color-mode-toggle"
        :class="{ 'is-dark': isDarkPalette }"
        role="switch"
        :aria-checked="isDarkPalette"
        :title="isDarkPalette ? 'Switch to light palette' : 'Switch to dark palette'"
        :aria-label="isDarkPalette ? 'Switch to light palette' : 'Switch to dark palette'"
        @click="togglePaletteMode"
      >
        <span class="color-mode-option" :class="{ 'is-active': !isDarkPalette }">Light</span>
        <span class="color-mode-switch" aria-hidden="true">
          <span class="color-mode-thumb"></span>
        </span>
        <span class="color-mode-option" :class="{ 'is-active': isDarkPalette }">Dark</span>
      </button>
    </div>
  </div>
</div>

## Theme Preview

<p class="color-theme-summary">{{ selectedThemeSummary }}</p>

<ColorSwatch
  v-if="selectedTheme"
  :modes="selectedTheme.modes"
  :usage-groups="data.usageGroups"
  :active-mode="paletteMode"
/>

## Using Themes

These examples update to match the currently selected <code>{{ selectedTheme.name }}</code>
theme. Each theme is available as a single import that includes both light and dark modes.

<CodeTabs :tabs="['CSS', 'JavaScript']">
  <template #css>
    <div class="theme-code-block" v-html="selectedThemeCodeSnippets.css"></div>
  </template>
  <template #javascript>
    <div class="theme-code-block" v-html="selectedThemeCodeSnippets.javascript"></div>
  </template>
</CodeTabs>

This sets `data-theme` and `data-mode` on `<html>`:

<ul class="theme-attribute-list">
  <li><code>{{ themeAttributes.light }}</code> for the selected light theme</li>
  <li><code>{{ themeAttributes.dark }}</code> for the selected dark theme</li>
</ul>

Component code should keep using semantic tokens such as `--co-color-state-primary-base` and `--co-color-surface-interactive-primary-default`.

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

<p v-if="selectedAccentValues" class="color-scale-note">
  For the {{ selectedTheme.id === 'default' ? 'default' : selectedTheme.name.toLowerCase() }}
  accent family, <code>{{ selectedAccentValues.lightReference }}</code> is
  <code>{{ selectedAccentValues.lightValue }}</code> in light mode and
  <code>{{ selectedAccentValues.darkReference }}</code> is
  <code>{{ selectedAccentValues.darkValue }}</code> in dark mode. That keeps the accent
  recognizable while the surrounding shades adapt to each surface context.
</p>

## Semantic Examples

These semantic token names stay stable across themes even as their resolved color values change.

<table class="semantic-table">
  <thead>
    <tr>
      <th>Token</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="example in data.semanticExamples" :key="example.token">
      <td class="semantic-token-cell"><code>{{ example.token }}</code></td>
      <td>{{ example.usage }}</td>
    </tr>
  </tbody>
</table>

## Practical Rules

- Prefer semantic tokens such as `--co-color-surface-static-default` or `--co-color-surface-interactive-primary-default` in components and app code.
- Reach for primitive tokens only when you are extending the system itself, building documentation, or deliberately creating a non-semantic illustration or data-vis palette.
- Think in `50`–`950`: lower shades for backgrounds, middle shades for borders and subtle fills, `700`–`800` for solid accents, and `900`–`950` for readable same-hue text.

## Related

- [Accessibility Standards](./accessibility.md)
- [Token Structure](../tokens/structure.md)
- [Token Reference](../tokens/index.md)

<style scoped>
.color-preview-toolbar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  margin: 20px 0 24px;
  padding: 16px 18px;
  border: 1px solid var(--co-color-border-subtle);
  border-radius: var(--co-shape-radius-md);
  background: var(--co-color-surface-static-raised);
  z-index: 6;
}

.color-preview-note {
  margin: 0;
  max-width: 42rem;
  color: var(--co-color-text-secondary);
  font-size: 0.9rem;
}

.color-preview-controls {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 18px 24px;
  width: 100%;
}

.color-theme-control,
.color-mode-control {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
}

.color-control-label {
  color: var(--co-color-text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1;
  text-transform: uppercase;
}

.color-theme-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.color-theme-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border: 1px solid var(--co-color-border-default);
  border-radius: 999px;
  background: var(--co-color-surface-static-default);
  color: var(--co-color-text-secondary);
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.2;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
  white-space: nowrap;
}

.color-theme-pill:hover {
  border-color: var(--co-color-border-strong);
  color: var(--co-color-text-default);
}

.color-theme-pill:focus-visible {
  outline: none;
  border-color: var(--co-color-border-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--co-color-state-primary-base) 15%, transparent);
}

.color-theme-pill.is-active {
  background: var(--co-color-surface-interactive-primary-default);
  border-color: var(--co-color-surface-interactive-primary-default);
  color: var(--co-color-text-on-primary);
}

.color-mode-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 32px;
  border: 1px solid var(--co-color-border-default);
  border-radius: 8px;
  background: transparent;
  color: var(--co-color-text-secondary);
  cursor: pointer;
  flex-shrink: 0;
  padding: 0.35rem 0.65rem;
  transition: all 0.2s ease;
}

.color-mode-toggle:hover {
  border-color: var(--co-color-border-strong);
  color: var(--co-color-text-default);
}

.color-mode-toggle:focus-visible {
  outline: none;
  border-color: var(--co-color-border-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--co-color-state-primary-base) 15%, transparent);
}

.color-mode-option {
  color: var(--co-color-text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.color-mode-option.is-active {
  color: var(--co-color-text-default);
}

.color-mode-switch {
  position: relative;
  width: 32px;
  height: 18px;
  background: var(--co-color-border-strong);
  border-radius: 9px;
  transition: background 0.2s ease;
}

.color-mode-toggle.is-dark .color-mode-switch {
  background: var(--co-color-surface-interactive-primary-default);
}

.color-mode-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  background: var(--co-color-surface-static-page);
  border-radius: 999px;
  transition: transform 0.2s ease;
}

.color-mode-toggle.is-dark .color-mode-thumb {
  transform: translateX(14px);
}

.color-theme-summary,
.color-scale-note {
  color: var(--co-color-text-secondary);
  max-width: 720px;
}

.color-theme-summary {
  margin: 0 0 16px;
}

.color-scale-note {
  margin-top: 12px;
}

.semantic-table {
  width: 100%;
  margin: 16px 0 24px;
  border-collapse: collapse;
  font-size: 0.88rem;
}

.semantic-table th {
  padding: 8px 12px;
  border-bottom: 2px solid var(--co-color-border-default);
  color: var(--co-color-text-secondary);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: left;
  text-transform: uppercase;
}

.semantic-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--co-color-border-subtle);
  vertical-align: top;
}

.semantic-token-cell,
.semantic-token-cell code,
.theme-attribute-list code {
  white-space: nowrap;
}

.theme-attribute-list {
  margin: 0 0 24px;
  padding-left: 20px;
  color: var(--co-color-text-secondary);
}

.theme-attribute-list li + li {
  margin-top: 6px;
}

@media (min-width: 961px) {
  .color-preview-toolbar {
    position: sticky;
    top: calc(var(--co-topbar-height) + 20px);
  }
}

@media (max-width: 720px) {
  .color-preview-controls,
  .color-theme-control,
  .color-mode-control {
    width: 100%;
  }

  .color-preview-controls {
    align-items: stretch;
    flex-direction: column;
  }

  .color-mode-toggle {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
