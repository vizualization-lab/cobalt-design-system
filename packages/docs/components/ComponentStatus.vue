<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { data } from '../component-status.data';
import type { PhaseStatus } from '../component-status.data';

const props = defineProps<{
  component: string;
}>();

const phases = computed(() => data.phases);
const statuses = computed(() => data.components[props.component] ?? {});

function statusIcon(status: PhaseStatus): string {
  switch (status) {
    case 'pass':
      return '\u2713';
    case 'fail':
      return '\u2717';
    case 'pending':
      return '\u2022';
    case 'na':
      return '\u2014';
    default:
      return '?';
  }
}

const passCount = computed(() => {
  const s = statuses.value;
  return Object.values(s).filter((v) => v === 'pass').length;
});

const totalCount = computed(() => {
  const s = statuses.value;
  return Object.values(s).filter((v) => v !== 'na').length;
});
</script>

<template>
  <div class="component-status" v-if="Object.keys(statuses).length">
    <a
      v-for="phase in phases"
      :key="phase.key"
      :href="withBase('/components/status#' + phase.key)"
      class="status-badge"
      :class="'status-badge--' + (statuses[phase.key as keyof typeof statuses] || 'pending')"
      :title="phase.label + ': ' + (statuses[phase.key as keyof typeof statuses] || 'pending')"
    >
      <span class="status-badge__icon">{{
        statusIcon(statuses[phase.key as keyof typeof statuses] || 'pending')
      }}</span>
      <span class="status-badge__label">{{ phase.label }}</span>
    </a>
    <span class="status-summary">{{ passCount }}/{{ totalCount }}</span>
  </div>
</template>

<style scoped>
.component-status {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  margin: 8px 0 20px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.4;
  transition: opacity 0.15s ease;
}

.status-badge:hover {
  opacity: 0.8;
}

.status-badge--pass {
  background: var(--co-color-feedback-success-background, #e6f6eb);
  color: var(--co-color-feedback-success-text, #193b2d);
}

.status-badge--fail {
  background: var(--co-color-feedback-danger-background, #fff7f7);
  color: var(--co-color-feedback-danger-text, #641723);
}

.status-badge--pending {
  background: var(--co-color-feedback-warning-background, #fefbe9);
  color: var(--co-color-feedback-warning-text, #4f3422);
}

.status-badge--na {
  background: var(--co-color-feedback-neutral-background, #f9f9fb);
  color: var(--co-color-feedback-neutral-text, #62636c);
}

.status-badge__icon {
  font-size: 0.75rem;
}

.status-summary {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--co-color-text-tertiary);
  margin-inline-start: 4px;
}
</style>
