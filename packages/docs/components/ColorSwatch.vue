<script setup lang="ts">
import { computed, ref } from 'vue';

export interface ColorShade {
  label: string;
  value: string;
  usage: string;
  token: string;
}

export interface ColorPalette {
  name: string;
  family: string;
  description?: string;
  shades: ColorShade[];
}

export interface ThemeModeGroup {
  id: string;
  label: string;
  palettes: ColorPalette[];
}

export interface UsageGroup {
  label: string;
  description: string;
  span: number;
}

const props = defineProps<{
  modes: ThemeModeGroup[];
  usageGroups: UsageGroup[];
  activeMode?: string;
}>();

const copiedKey = ref<string | null>(null);

const shadeColumns = computed(() => props.modes[0]?.palettes[0]?.shades ?? []);
const visibleModes = computed(() =>
  props.activeMode ? props.modes.filter((mode) => mode.id === props.activeMode) : props.modes,
);

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

function chipIconColor(hex: string): string {
  return luminance(hex) > 0.35 ? 'var(--co-color-text-inverse)' : '#fff';
}

function swatchTitle(palette: string, shade: ColorShade) {
  return `${palette} ${shade.label}\n${shade.usage}\n${shade.token}\n${shade.value}`;
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
  <div class="scale-stack">
    <section
      v-for="mode in visibleModes"
      :key="mode.id"
      class="mode-section"
      :class="{ 'mode-section--compact': Boolean(props.activeMode) }"
    >
      <header v-if="!props.activeMode" class="mode-header">
        <h3 class="mode-title">{{ mode.label }}</h3>
      </header>

      <div class="scale-scroll">
        <div class="scale-table">
          <div class="scale-grid usage-band">
            <div class="corner-cell" aria-hidden="true"></div>
            <div
              v-for="group in usageGroups"
              :key="group.label"
              class="usage-group"
              :style="{ gridColumn: `span ${group.span}` }"
            >
              <span class="usage-label">{{ group.label }}</span>
              <span class="usage-description">{{ group.description }}</span>
            </div>
          </div>

          <div class="scale-grid steps-row">
            <div class="corner-cell" aria-hidden="true"></div>
            <div v-for="shade in shadeColumns" :key="shade.label" class="step-cell">
              <span class="shade-label">{{ shade.label }}</span>
            </div>
          </div>

          <div
            v-for="palette in mode.palettes"
            :key="`${mode.id}-${palette.family}`"
            class="scale-grid palette-row"
          >
            <div class="palette-name" :title="palette.description">{{ palette.name }}</div>

            <button
              v-for="shade in palette.shades"
              :key="`${palette.family}-${shade.label}`"
              class="swatch"
              :class="{ copied: copiedKey === `${palette.family}-${shade.label}` }"
              :style="{ background: shade.value, color: chipIconColor(shade.value) }"
              :title="swatchTitle(palette.name, shade)"
              @click="copyToken(`${palette.family}-${shade.label}`, shade.token)"
            >
              <svg
                v-if="copiedKey === `${palette.family}-${shade.label}`"
                class="swatch-icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.scale-stack {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 16px 0 24px;
}

.mode-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mode-section--compact {
  gap: 6px;
}

.mode-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.mode-title {
  margin: 0;
  font-size: 0.95rem;
  color: var(--co-color-text-default);
}

.scale-scroll {
  overflow-x: visible;
}

.scale-table {
  width: 100%;
}

.scale-grid {
  display: grid;
  grid-template-columns: minmax(64px, 96px) repeat(12, minmax(0, 1fr));
  gap: 6px;
  align-items: center;
}

.corner-cell {
  min-width: 0;
}

.usage-band {
  margin-bottom: 8px;
}

.usage-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--co-color-border-subtle);
  text-align: center;
  min-width: 0;
}

.usage-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--co-color-text-secondary);
  line-height: 1.2;
}

.usage-description {
  font-size: 0.66rem;
  color: var(--co-color-text-tertiary);
  line-height: 1.2;
}

.steps-row {
  margin-bottom: 10px;
}

.step-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4px;
}

.shade-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--co-color-text-secondary);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.palette-row {
  margin-top: 6px;
}

.palette-name {
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--co-color-text-secondary);
  white-space: nowrap;
}

.swatch {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: clamp(28px, 2.8vw, 40px);
  border: 1px solid var(--co-color-border-subtle);
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  transition:
    transform 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.swatch:hover {
  transform: translateY(-1px);
  border-color: var(--co-color-border-strong);
  box-shadow: 0 1px 0 rgb(0 0 0 / 0.04);
}

.swatch.copied {
  border-color: var(--co-color-border-focus);
  box-shadow: 0 0 0 1px var(--co-color-border-focus);
}

.swatch-icon {
  width: 14px;
  height: 14px;
  color: currentColor;
}

@media (max-width: 960px) {
  .scale-scroll {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .scale-table {
    min-width: 760px;
  }

  .scale-grid {
    grid-template-columns: 64px repeat(12, minmax(36px, 1fr));
  }
}
</style>
