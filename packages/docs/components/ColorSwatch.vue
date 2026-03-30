<script setup lang="ts">
import { ref } from 'vue';

export interface ColorPalette {
  name: string;
  shades: { scale: string; value: string }[];
}

defineProps<{
  palettes: ColorPalette[];
}>();

const copiedKey = ref<string | null>(null);

function toToken(palette: string, scale: string): string {
  return `--co-color-primitive-${palette.toLowerCase()}-${scale}`;
}

async function copyToken(palette: string, scale: string) {
  const key = `${palette}-${scale}`;
  await navigator.clipboard.writeText(toToken(palette, scale));
  copiedKey.value = key;
  setTimeout(() => {
    if (copiedKey.value === key) copiedKey.value = null;
  }, 1500);
}
</script>

<template>
  <div class="swatch-grid">
    <p class="swatch-hint">Click any swatch to copy its CSS token.</p>
    <div v-for="palette in palettes" :key="palette.name" class="palette">
      <div class="palette-label">{{ palette.name }}</div>
      <div class="palette-chips">
        <div v-for="shade in palette.shades" :key="shade.scale" class="chip-cell">
          <button
            class="chip"
            :class="{ copied: copiedKey === `${palette.name}-${shade.scale}` }"
            :style="{ background: shade.value }"
            :title="toToken(palette.name, shade.scale)"
            @click="copyToken(palette.name, shade.scale)"
          >
            <svg
              v-if="copiedKey === `${palette.name}-${shade.scale}`"
              class="chip-icon"
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
          <span class="chip-scale">{{ shade.scale }}</span>
          <code class="chip-hex">{{ shade.value }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swatch-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 16px 0 24px;
}

.swatch-hint {
  font-size: 0.8rem;
  color: var(--co-text-muted, #6d84a3);
  margin: 0;
}

.palette {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.palette-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--co-text-secondary, #9badc6);
  text-transform: capitalize;
}

.palette-chips {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
}

.chip-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 56px;
  flex: 1;
}

.chip {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 0;
  transition: transform 0.15s ease;
}

.chip:hover {
  transform: scale(1.05);
}

.chip:active {
  transform: scale(0.98);
}

.chip-icon {
  width: 16px;
  height: 16px;
  color: #fff;
}

.chip-scale {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--co-text-muted, #6d84a3);
  font-variant-numeric: tabular-nums;
}

.chip-hex {
  font-family: var(--co-font-mono, monospace);
  font-size: 0.62rem;
  color: var(--co-text-muted, #6d84a3);
  background: none;
  padding: 0;
  border: none;
  opacity: 0.8;
}
</style>
