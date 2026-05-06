<script setup lang="ts">
import { computed, ref } from 'vue';
import { withBase } from 'vitepress';
import { data } from '../component-status.data';
import type { PhaseStatus } from '../component-status.data';

const props = defineProps<{
  component: string;
}>();

const phases = computed(() => data.phases);
const statuses = computed(() => data.components[props.component] ?? {});
const showLegend = ref(false);

const STATUS_META: Record<PhaseStatus, { icon: string; label: string }> = {
  pass: { icon: 'check-circle', label: 'Pass' },
  fail: { icon: 'cancel', label: 'Fail' },
  pending: { icon: 'pending', label: 'Pending' },
  na: { icon: 'remove-circle-outline', label: 'N/A' },
};

const categories = computed(() => {
  const map = new Map<string, typeof data.phases>();
  for (const phase of phases.value) {
    const cat = phase.category;
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(phase);
  }
  return [...map.entries()];
});

function getStatus(key: string): PhaseStatus {
  return (statuses.value as Record<string, PhaseStatus>)[key] || 'pending';
}

const passCount = computed(() => {
  return Object.values(statuses.value).filter((v) => v === 'pass').length;
});

const totalCount = computed(() => {
  return Object.values(statuses.value).filter((v) => v !== 'na').length;
});
</script>

<template>
  <div class="component-status" v-if="Object.keys(statuses).length">
    <a class="status-title" :href="withBase('/components/status')">Component Status</a>
    <div class="status-matrix">
      <div v-for="[category, items] in categories" :key="category" class="status-group">
        <span class="status-group__label">{{ category }}</span>
        <div class="status-group__pills">
          <a
            v-for="phase in items"
            :key="phase.key"
            :href="withBase('/components/status#' + phase.key)"
            class="status-pill"
            :class="'status-pill--' + getStatus(phase.key)"
            :title="phase.description"
          >
            <co-icon
              class="status-pill__icon"
              :name="STATUS_META[getStatus(phase.key)].icon"
              size="xs"
              :fill="
                getStatus(phase.key) === 'pass' || getStatus(phase.key) === 'fail' || undefined
              "
              aria-hidden="true"
            ></co-icon>
            <span class="status-pill__label">{{ phase.label }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="status-footer">
      <span class="status-count">{{ passCount }}/{{ totalCount }} passing</span>
      <button
        class="status-legend-toggle"
        :aria-expanded="showLegend"
        @click="showLegend = !showLegend"
      >
        <co-icon name="info" size="xs" aria-hidden="true"></co-icon>
        Legend
      </button>
    </div>

    <div v-if="showLegend" class="status-legend">
      <div v-for="(meta, key) in STATUS_META" :key="key" class="status-legend__item">
        <co-icon
          class="status-legend__icon"
          :class="'status-legend__icon--' + key"
          :name="meta.icon"
          size="xs"
          :fill="key === 'pass' || key === 'fail' || undefined"
          aria-hidden="true"
        ></co-icon>
        <span>{{ meta.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-status {
  display: flex;
  flex-direction: column;
  gap: var(--co-space-2);
  margin: var(--co-space-2) 0 var(--co-space-5);
  padding: var(--co-space-3);
  background: var(--co-color-state-primary-subtle);
  border-radius: var(--co-shape-radius-md);
  box-shadow: var(--co-elevation-shadow-md);
}

.status-title {
  font-family: var(--co-font-family-sans);
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  line-height: var(--co-typography-label-line-height);
  color: var(--co-color-text-secondary);
  text-decoration: none;
}

.status-title:hover {
  color: var(--co-color-text-default);
}

.status-matrix {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--co-space-1) var(--co-space-3);
  align-items: center;
}

.status-group {
  display: contents;
}

.status-group__label {
  font-family: var(--co-font-family-sans);
  font-size: var(--co-typography-eyebrow-size);
  font-weight: var(--co-typography-eyebrow-weight);
  letter-spacing: var(--co-typography-eyebrow-tracking);
  line-height: var(--co-typography-eyebrow-line-height);
  text-transform: uppercase;
  color: var(--co-color-text-tertiary);
}

.status-group__pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--co-space-1);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px var(--co-space-2);
  border-radius: var(--co-shape-radius-sm);
  font-family: var(--co-font-family-sans);
  font-size: var(--co-typography-caption-size);
  font-weight: var(--co-typography-caption-weight);
  line-height: var(--co-typography-caption-line-height);
  text-decoration: none;
  transition: opacity var(--co-motion-duration-fast) var(--co-motion-easing-default);
}

.status-pill:hover {
  opacity: 0.75;
}

.status-pill--pass {
  background: var(--co-color-state-success-subtle);
  color: var(--co-color-state-success-base);
}

.status-pill--fail {
  background: var(--co-color-state-danger-subtle);
  color: var(--co-color-state-danger-base);
}

.status-pill--pending {
  background: var(--co-color-surface-static-raised);
  color: var(--co-color-text-tertiary);
}

.status-pill--na {
  background: transparent;
  color: var(--co-color-text-tertiary);
  opacity: 0.6;
}

.status-footer {
  display: flex;
  align-items: center;
  gap: var(--co-space-3);
  padding-block-start: var(--co-space-1);
  border-block-start: var(--co-shape-border-width-thin) solid var(--co-color-border-subtle);
}

.status-count {
  font-family: var(--co-font-family-mono);
  font-size: var(--co-typography-caption-size);
  font-weight: var(--co-typography-label-weight);
  color: var(--co-color-text-secondary);
}

.status-legend-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--co-space-1);
  padding: 0;
  border: none;
  background: none;
  font-family: var(--co-font-family-sans);
  font-size: var(--co-typography-caption-size);
  color: var(--co-color-text-tertiary);
  cursor: pointer;
}

.status-legend-toggle:hover {
  color: var(--co-color-text-secondary);
}

.status-legend {
  display: flex;
  gap: var(--co-space-4);
  font-size: var(--co-typography-caption-size);
  color: var(--co-color-text-secondary);
}

.status-legend__item {
  display: inline-flex;
  align-items: center;
  gap: var(--co-space-1);
}

.status-legend__icon--pass {
  color: var(--co-color-state-success-base);
}

.status-legend__icon--fail {
  color: var(--co-color-state-danger-base);
}

.status-legend__icon--pending,
.status-legend__icon--na {
  color: var(--co-color-text-tertiary);
}
</style>
