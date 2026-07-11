---
title: Release Notes
---

<script setup>
import { withBase } from 'vitepress';
import { data } from './changelog.data';

const latest = data.releases[0] ?? null;
const lines = data.lines;

function dateSpan(line) {
  if (!line.firstDate) return '—';
  if (!line.lastDate || line.firstDate === line.lastDate) return line.firstDate;
  return `${line.firstDate} → ${line.lastDate}`;
}
</script>

# Release Notes

All notable changes to Cobalt are documented here. Every release line
(minor or major) has its own page collecting the initial release and all
of its patches.

## Latest Release

<ChangelogPage v-if="latest" :releases="[latest]" />

## All Release Lines

<table class="release-lines-table">
  <thead>
    <tr>
      <th>Line</th>
      <th>Latest</th>
      <th>Releases</th>
      <th>Dates</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="line in lines" :key="line.id">
      <td><a :href="withBase(`/release-notes/${line.id}`)">{{ line.label }}</a></td>
      <td><code>{{ line.latestVersion }}</code></td>
      <td>{{ line.releaseCount }}</td>
      <td class="release-lines-dates">{{ dateSpan(line) }}</td>
    </tr>
  </tbody>
</table>

<style scoped>
.release-lines-table {
  width: 100%;
  margin: 16px 0 24px;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.release-lines-table th {
  padding: 8px 12px;
  border-bottom: 2px solid var(--co-color-border-default);
  color: var(--co-color-text-secondary);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: left;
  text-transform: uppercase;
}

.release-lines-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--co-color-border-subtle);
}

.release-lines-dates {
  color: var(--co-color-text-secondary);
  font-variant-numeric: tabular-nums;
}
</style>
