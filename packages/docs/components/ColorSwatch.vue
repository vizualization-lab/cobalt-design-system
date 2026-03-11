<script setup lang="ts">
defineProps<{
  colors: {
    scale: string;
    blue: string;
    gray: string;
    green: string;
    red: string;
    amber: string;
  }[];
}>();
</script>

<template>
  <div class="swatch-table">
    <div class="swatch-header">
      <span class="swatch-col swatch-col-scale">Scale</span>
      <span class="swatch-col">Blue</span>
      <span class="swatch-col">Gray</span>
      <span class="swatch-col">Green</span>
      <span class="swatch-col">Red</span>
      <span class="swatch-col">Amber</span>
    </div>
    <div v-for="row in colors" :key="row.scale" class="swatch-row">
      <span class="swatch-col swatch-col-scale">{{ row.scale }}</span>
      <span v-for="key in ['blue', 'gray', 'green', 'red', 'amber']" :key="key" class="swatch-col">
        <span class="swatch-chip" :style="{ background: (row as any)[key] }"></span>
        <code class="swatch-hex">{{ (row as any)[key] }}</code>
      </span>
    </div>
  </div>
</template>

<style scoped>
.swatch-table {
  border: 1px solid var(--co-border, rgba(99, 155, 255, 0.12));
  border-radius: 12px;
  overflow: hidden;
  margin: 16px 0 24px;
  font-size: 0.84rem;
}

.swatch-header {
  display: grid;
  grid-template-columns: 60px repeat(5, 1fr);
  gap: 0;
  padding: 10px 16px;
  background: var(--co-surface, rgba(15, 29, 50, 0.5));
  border-bottom: 1px solid var(--co-border-strong, rgba(99, 155, 255, 0.2));
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--co-text-secondary, #9badc6);
}

.swatch-row {
  display: grid;
  grid-template-columns: 60px repeat(5, 1fr);
  gap: 0;
  padding: 8px 16px;
  border-bottom: 1px solid var(--co-border, rgba(99, 155, 255, 0.08));
  align-items: center;
}

.swatch-row:last-child {
  border-bottom: none;
}

.swatch-col {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.swatch-col-scale {
  font-weight: 600;
  color: var(--co-text-muted, #6d84a3);
  font-variant-numeric: tabular-nums;
}

.swatch-chip {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.swatch-hex {
  font-family: var(--co-font-mono, monospace);
  font-size: 0.75rem;
  color: var(--co-text-secondary, #9badc6);
  background: none;
  padding: 0;
  border: none;
}

@media (max-width: 768px) {
  .swatch-table {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .swatch-header,
  .swatch-row {
    min-width: 600px;
  }
}
</style>
