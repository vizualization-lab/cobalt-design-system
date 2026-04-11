<script setup lang="ts">
import { computed } from 'vue';
import { data } from './component-changelogs.data';

const props = defineProps<{ component: string }>();

const changelog = computed(() => data[props.component]);

const TYPE_LABELS: Record<string, string> = {
  feat: 'Features',
  fix: 'Fixes',
  refactor: 'Refactors',
  perf: 'Performance',
  test: 'Tests',
  docs: 'Documentation',
  style: 'Styling',
  chore: 'Chores',
};

const TYPE_COLORS: Record<string, string> = {
  feat: 'var(--co-blue-400)',
  fix: '#f59e0b',
  refactor: '#a78bfa',
  perf: '#34d399',
  test: '#60a5fa',
  docs: 'var(--co-color-text-tertiary)',
  style: 'var(--co-color-text-tertiary)',
  chore: 'var(--co-color-text-tertiary)',
};

interface GroupedEntries {
  type: string;
  label: string;
  color: string;
  entries: { hash: string; description: string; date: string }[];
}

const grouped = computed<GroupedEntries[]>(() => {
  if (!changelog.value?.entries.length) return [];

  const groups: Record<string, GroupedEntries> = {};

  for (const entry of changelog.value.entries) {
    if (!groups[entry.type]) {
      groups[entry.type] = {
        type: entry.type,
        label: TYPE_LABELS[entry.type] || entry.type,
        color: TYPE_COLORS[entry.type] || 'var(--co-color-text-tertiary)',
        entries: [],
      };
    }
    groups[entry.type].entries.push(entry);
  }

  // Sort: feat first, fix second, then alphabetical
  const order = ['feat', 'fix', 'refactor', 'perf'];
  return Object.values(groups).sort((a, b) => {
    const ai = order.indexOf(a.type);
    const bi = order.indexOf(b.type);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.type.localeCompare(b.type);
  });
});
</script>

<template>
  <div class="component-changelog">
    <div v-if="!changelog || !changelog.entries.length" class="changelog-empty">
      No changelog entries found for <code>{{ component }}</code
      >.
    </div>
    <div v-else>
      <div v-for="group in grouped" :key="group.type" class="changelog-group">
        <h4 class="group-label" :style="{ color: group.color }">{{ group.label }}</h4>
        <ul class="group-entries">
          <li v-for="entry in group.entries" :key="entry.hash" class="changelog-entry">
            <code class="entry-hash">{{ entry.hash }}</code>
            <span class="entry-desc">{{ entry.description }}</span>
            <span class="entry-date">{{ entry.date }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-changelog {
  margin-top: 16px;
}

.changelog-empty {
  color: var(--co-color-text-tertiary);
  font-size: 0.88rem;
  padding: 12px 0;
}

.changelog-group {
  margin-bottom: 20px;
}

.group-label {
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}

.group-entries {
  list-style: none;
  padding: 0;
  margin: 0;
}

.changelog-entry {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 6px 0;
  font-size: 0.88rem;
  border-bottom: 1px solid var(--co-border);
}

.changelog-entry:last-child {
  border-bottom: none;
}

.entry-hash {
  font-family: var(--co-font-mono);
  font-size: 0.76rem;
  color: var(--co-blue-400);
  background: var(--co-blue-alpha-8);
  padding: 1px 6px;
  border-radius: 4px;
  flex-shrink: 0;
}

.entry-desc {
  flex: 1;
  color: var(--co-text-secondary);
}

.entry-date {
  font-family: var(--co-font-mono);
  font-size: 0.76rem;
  color: var(--co-color-text-tertiary);
  flex-shrink: 0;
}
</style>
