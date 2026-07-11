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

<p>
  <a :href="withBase('/release-notes')">← All release lines</a>
</p>

<ChangelogPage v-if="line" :releases="line.releases" />
