<script setup lang="ts">
import { computed, ref } from 'vue';

export interface ColorShade {
  label: string;
  value: string;
  usage: string;
  token: string;
}

export interface PaletteModeRow {
  id: string;
  label: string;
  family: string;
  shades: ColorShade[];
}

export interface ThemePalette {
  name: string;
  description: string;
  rows: PaletteModeRow[];
}

export interface UsageGroup {
  label: string;
  description: string;
  span: number;
}

const props = defineProps<{
  palette: ThemePalette;
  activeMode: string;
  usageGroups: UsageGroup[];
}>();

const copiedKey = ref<string | null>(null);

const activeRow = computed(
  () => props.palette.rows.find((row) => row.id === props.activeMode) ?? props.palette.rows[0],
);

const shadeGroups = computed(() => {
  const groups: Array<UsageGroup & { shades: ColorShade[] }> = [];
  let start = 0;

  for (const group of props.usageGroups) {
    groups.push({
      ...group,
      shades: activeRow.value?.shades.slice(start, start + group.span) ?? [],
    });
    start += group.span;
  }

  return groups;
});

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.replace('#', '');
  const full =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized;
  const numeric = Number.parseInt(full, 16);
  return [(numeric >> 16) & 255, (numeric >> 8) & 255, numeric & 255];
}

function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(foreground: string, background: string): number {
  const foregroundLuminance = luminance(foreground);
  const backgroundLuminance = luminance(background);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);
  return (lighter + 0.05) / (darker + 0.05);
}

function chipTextColor(hex: string): string {
  const darkText = '#151a20';
  const lightText = '#ffffff';

  return contrastRatio(darkText, hex) >= contrastRatio(lightText, hex) ? darkText : lightText;
}

function shadeTitle(shade: ColorShade) {
  return `${props.palette.name} ${activeRow.value?.label ?? ''} ${shade.label}\n${shade.usage}\n${shade.token}\n${shade.value}`;
}

async function copyToken(key: string, token: string) {
  await navigator.clipboard.writeText(token);
  copiedKey.value = key;
  setTimeout(() => {
    if (copiedKey.value === key) copiedKey.value = null;
  }, 1500);
}
</script>

<template>
  <section class="theme-color-preview" :aria-label="`${palette.name} theme color preview`">
    <header class="preview-header">
      <div>
        <p class="preview-kicker">{{ activeRow?.label }} accent ramp</p>
        <h3 class="preview-title">{{ palette.name }}</h3>
      </div>
      <code v-if="activeRow" class="preview-family">{{ activeRow.family }}</code>
    </header>

    <div class="category-grid">
      <article v-for="group in shadeGroups" :key="group.label" class="category-card">
        <header class="category-header">
          <h4 class="category-title">{{ group.label }}</h4>
          <span class="category-range">{{ group.description }}</span>
        </header>

        <div class="shade-list">
          <button
            v-for="shade in group.shades"
            :key="`${activeRow?.family}-${shade.label}`"
            type="button"
            class="shade-chip"
            :class="{ copied: copiedKey === `${activeRow?.family}-${shade.label}` }"
            :style="{ background: shade.value, color: chipTextColor(shade.value) }"
            :title="shadeTitle(shade)"
            @click="copyToken(`${activeRow?.family}-${shade.label}`, shade.token)"
          >
            <span class="shade-label">{{ shade.label }}</span>
            <span class="shade-value">{{ shade.value }}</span>
            <svg
              v-if="copiedKey === `${activeRow?.family}-${shade.label}`"
              class="shade-icon"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
            </svg>
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.theme-color-preview {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 0 28px;
}

.preview-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}

.preview-kicker {
  margin: 0 0 4px;
  color: var(--co-color-text-secondary);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1.2;
  text-transform: uppercase;
}

.preview-title {
  margin: 0;
  color: var(--co-color-text-default);
  font-size: 1.05rem;
  line-height: 1.25;
}

.preview-family {
  color: var(--co-color-text-secondary);
  font-size: 0.78rem;
  white-space: nowrap;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}

.category-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border: 1px solid var(--co-color-border-subtle);
  border-radius: 8px;
  background: var(--co-color-surface-static-raised);
  overflow: hidden;
}

.category-header {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-height: 64px;
  padding: 12px;
  border-bottom: 1px solid var(--co-color-border-subtle);
}

.category-title {
  margin: 0;
  color: var(--co-color-text-default);
  font-size: 0.84rem;
  line-height: 1.2;
}

.category-range {
  color: var(--co-color-text-secondary);
  font-size: 0.72rem;
  line-height: 1.2;
}

.shade-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(76px, 1fr));
  gap: 1px;
  background: var(--co-color-border-subtle);
}

.shade-chip {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 4px;
  min-height: 88px;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  padding: 10px;
  text-align: left;
  transition:
    box-shadow 0.15s ease,
    transform 0.15s ease;
}

.shade-chip:hover {
  z-index: 1;
  box-shadow: inset 0 0 0 1px var(--co-color-border-strong);
}

.shade-chip:focus-visible {
  outline: none;
  z-index: 1;
  box-shadow: inset 0 0 0 2px var(--co-color-border-focus);
}

.shade-chip.copied {
  z-index: 1;
  box-shadow: inset 0 0 0 2px currentColor;
}

.shade-label,
.shade-value {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shade-label {
  font-size: 0.82rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.shade-value {
  font-size: 0.68rem;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.shade-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 14px;
  height: 14px;
}

@media (max-width: 1100px) {
  .category-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .preview-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .category-header {
    min-height: 0;
  }

  .shade-chip {
    min-height: 72px;
  }
}
</style>
