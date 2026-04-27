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
              <a :href="componentLink(name)"
                ><code>{{ name }}</code></a
              >
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
.status-overview {
  font-size: 0.92rem;
  color: var(--co-color-text-secondary);
  margin-bottom: 16px;
}

.status-overview strong {
  color: var(--co-color-text-default);
}

.matrix-scroll {
  overflow-x: auto;
  margin: 0 0 24px;
}

.matrix-table {
  border-collapse: collapse;
  font-size: 0.75rem;
  width: 100%;
}

.matrix-table th,
.matrix-table td {
  padding: 4px 6px;
  border: 1px solid var(--co-color-border-subtle);
  text-align: center;
}

.matrix-th--component,
.matrix-component {
  text-align: left;
  font-weight: 600;
  position: sticky;
  left: 0;
  background: var(--co-color-surface-default);
  z-index: 1;
  white-space: nowrap;
}

.matrix-th--phase {
  font-weight: 600;
  font-size: 0.68rem;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  padding: 8px 4px;
}

.matrix-th--phase a {
  color: inherit;
  text-decoration: none;
}

.matrix-th--phase a:hover {
  text-decoration: underline;
}

.matrix-component {
  text-align: left;
}

.matrix-component a {
  text-decoration: none;
  color: var(--co-color-text-link);
}

.matrix-component code {
  font-size: 0.78rem;
  background: none;
  padding: 0;
}

.matrix-cell {
  font-weight: 700;
  font-size: 0.85rem;
}

.matrix-cell--pass {
  background: var(--co-color-feedback-success-background, #e6f6eb);
  color: var(--co-color-feedback-success-text, #193b2d);
}

.matrix-cell--fail {
  background: var(--co-color-feedback-danger-background, #fff7f7);
  color: var(--co-color-feedback-danger-text, #641723);
}

.matrix-cell--pending {
  background: var(--co-color-feedback-warning-background, #fefbe9);
  color: var(--co-color-feedback-warning-text, #4f3422);
}

.matrix-cell--na {
  background: var(--co-color-feedback-neutral-background, #f9f9fb);
  color: var(--co-color-feedback-neutral-text, #62636c);
}
</style>
