---
title: Release Notes
---

<script setup>
import { useData, withBase } from 'vitepress';
import { computed } from 'vue';
import { data } from '../changelog.data';

const { params } = useData();

const line = computed(
  () => data.lines.find((entry) => entry.id === params.value.line) ?? null,
);
</script>

# {{ line?.label }} Release Notes

<p v-if="line" class="line-meta">
  {{ line.releaseCount }} release{{ line.releaseCount === 1 ? '' : 's' }}
  <template v-if="line.firstDate">
    · {{ line.firstDate }}<template v-if="line.lastDate && line.lastDate !== line.firstDate"> → {{ line.lastDate }}</template>
  </template>
</p>

<p>
  <a :href="withBase('/release-notes')">← All release lines</a>
</p>

<style scoped>
.line-meta {
  color: var(--co-color-text-secondary);
  font-variant-numeric: tabular-nums;
}
</style>

<ChangelogPage v-if="line" :releases="line.releases" />
