<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { data } from '../component-status.data';
import type { PhaseStatus } from '../component-status.data';

const phases = computed(() => data.phases);
const components = computed(() =>
  Object.entries(data.components).sort(([a], [b]) => a.localeCompare(b)),
);

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

function componentLink(name: string): string {
  const slug = name.replace(/^co-/, '');
  return withBase(`/components/${slug}`);
}

function componentDisplayName(name: string): string {
  return name
    .replace(/^co-/, '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const summary = computed(() => {
  let total = 0;
  let passed = 0;
  for (const [, statuses] of components.value) {
    for (const v of Object.values(statuses)) {
      if (v !== 'na') {
        total++;
        if (v === 'pass') passed++;
      }
    }
  }
  return { total, passed, pct: total > 0 ? Math.round((passed / total) * 100) : 0 };
});
</script>

<template>
  <div class="status-matrix">
    <div class="status-overview">
      <strong>{{ summary.passed }}</strong> / {{ summary.total }} checks passing ({{
        summary.pct
      }}%)
    </div>

    <div class="matrix-scroll">
      <table class="matrix-table">
        <thead>
          <tr>
            <th class="matrix-th--component">Component</th>
            <th v-for="phase in phases" :key="phase.key" class="matrix-th--phase">
              <a :href="'#' + phase.key">{{ phase.label }}</a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="[name, statuses] in components" :key="name">
            <td class="matrix-component">
              <a :href="componentLink(name)">{{ componentDisplayName(name) }}</a>
            </td>
            <td
              v-for="phase in phases"
              :key="phase.key"
              class="matrix-cell"
              :class="'matrix-cell--' + (statuses[phase.key as keyof typeof statuses] || 'pending')"
              :title="
                phase.label + ': ' + (statuses[phase.key as keyof typeof statuses] || 'pending')
              "
            >
              {{ statusIcon(statuses[phase.key as keyof typeof statuses] || 'pending') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.status-matrix {
  background: var(--co-color-primary-subtle);
  border-radius: var(--co-shape-radius-md);
  box-shadow: var(--co-elevation-shadow-sm);
  padding: var(--co-space-3);
}

.status-overview {
  font-family: var(--co-font-family-sans);
  font-size: var(--co-typography-body-sm-size);
  color: var(--co-color-text-secondary);
  margin-bottom: var(--co-space-3);
}

.status-overview strong {
  color: var(--co-color-text-default);
}

.matrix-scroll {
  overflow-x: auto;
}

.matrix-table {
  border-collapse: collapse;
  font-family: var(--co-font-family-sans);
  font-size: var(--co-typography-caption-size);
  width: 100%;
}

.matrix-table th,
.matrix-table td {
  padding: var(--co-space-1) var(--co-space-2);
  border: var(--co-shape-border-width-thin) solid var(--co-color-border-subtle);
  text-align: center;
}

/* Remove top and left outer borders only */
.matrix-table tr:first-child th {
  border-block-start: none;
}
.matrix-table th:first-child,
.matrix-table td:first-child {
  border-inline-start: none;
}

.matrix-th--component,
.matrix-component {
  text-align: right;
  font-weight: var(--co-typography-label-weight);
  position: sticky;
  left: 0;
  background: var(--co-color-primary-subtle);
  z-index: 1;
  white-space: nowrap;
}

.matrix-th--phase {
  font-weight: var(--co-typography-label-weight);
  font-size: var(--co-typography-eyebrow-size);
  writing-mode: vertical-lr;
  text-orientation: mixed;
  padding: var(--co-space-2) var(--co-space-1);
  color: var(--co-color-text-tertiary);
}

.matrix-th--phase a {
  color: inherit;
  text-decoration: none;
}

.matrix-th--phase a:hover {
  text-decoration: underline;
}

.matrix-component a {
  text-decoration: none;
  color: var(--co-color-text-link);
}

.matrix-component code {
  font-family: var(--co-font-family-mono);
  font-size: var(--co-typography-caption-size);
  background: none;
  padding: 0;
}

.matrix-cell {
  font-weight: 700;
  font-size: var(--co-typography-body-sm-size);
}

.matrix-cell--pass {
  background: var(--co-color-success-subtle);
  color: var(--co-color-success-base);
}

.matrix-cell--fail {
  background: var(--co-color-danger-subtle);
  color: var(--co-color-danger-base);
}

.matrix-cell--pending {
  background: var(--co-color-surface-raised);
  color: var(--co-color-text-tertiary);
}

.matrix-cell--na {
  background: transparent;
  color: var(--co-color-text-tertiary);
  opacity: 0.6;
}
</style>
