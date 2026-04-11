<script setup lang="ts">
import { data } from '../changelog.data';

const TYPE_BADGES: Record<string, { label: string; color: string }> = {
  Added: { label: 'Added', color: '#34d399' },
  Changed: { label: 'Changed', color: '#60a5fa' },
  Fixed: { label: 'Fixed', color: '#f59e0b' },
  Removed: { label: 'Removed', color: '#f87171' },
  Deprecated: { label: 'Deprecated', color: '#a78bfa' },
};

function extractSections(content: string): { type: string; items: string[] }[] {
  if (!content) return [];
  const sections: { type: string; items: string[] }[] = [];
  let currentType = '';
  let currentItems: string[] = [];

  for (const line of content.split('\n')) {
    const headingMatch = line.match(/^### (.+)/);
    if (headingMatch) {
      if (currentType && currentItems.length) {
        sections.push({ type: currentType, items: [...currentItems] });
      }
      currentType = headingMatch[1].trim();
      currentItems = [];
      continue;
    }
    const itemMatch = line.match(/^- (.+)/);
    if (itemMatch) {
      currentItems.push(itemMatch[1].trim());
    }
  }

  if (currentType && currentItems.length) {
    sections.push({ type: currentType, items: currentItems });
  }

  return sections;
}
</script>

<template>
  <div class="changelog-page">
    <div v-if="!data.releases.length" class="changelog-empty">
      No releases yet. Changes will appear here after the first version bump.
    </div>

    <div v-for="release in data.releases" :key="release.version" class="release">
      <div class="release-header">
        <span class="release-version">v{{ release.version }}</span>
        <span v-if="release.date" class="release-date">{{ release.date }}</span>
      </div>

      <!-- Editorial highlights -->
      <div v-if="release.highlights" class="release-highlights">
        <div class="highlights-summary">{{ release.highlights.summary }}</div>
        <ul class="highlights-list">
          <li v-for="hl in release.highlights.highlights" :key="hl">{{ hl }}</li>
        </ul>
      </div>

      <!-- Auto-generated content from CHANGELOG.md -->
      <div v-if="release.content" class="release-content">
        <div
          v-for="section in extractSections(release.content)"
          :key="section.type"
          class="content-section"
        >
          <span
            class="section-badge"
            :style="{
              color: TYPE_BADGES[section.type]?.color || 'var(--co-color-text-tertiary)',
              borderColor: TYPE_BADGES[section.type]?.color || 'var(--co-border)',
            }"
          >
            {{ section.type }}
          </span>
          <ul class="section-items">
            <li v-for="(item, i) in section.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.changelog-page {
  max-width: 720px;
}

.changelog-empty {
  color: var(--co-color-text-tertiary);
  font-size: 0.92rem;
  padding: 24px 0;
}

.release {
  padding: 24px 0;
  border-bottom: 1px solid var(--co-border);
}

.release:last-child {
  border-bottom: none;
}

.release-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
}

.release-version {
  font-family: var(--co-font-mono);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--co-text-primary);
}

.release-date {
  font-family: var(--co-font-mono);
  font-size: 0.82rem;
  color: var(--co-color-text-tertiary);
}

.release-highlights {
  background: var(--co-blue-alpha-8);
  border: 1px solid var(--co-blue-alpha-15);
  border-radius: 10px;
  padding: 14px 18px;
  margin-bottom: 16px;
}

.highlights-summary {
  font-weight: 600;
  color: var(--co-text-primary);
  margin-bottom: 8px;
  font-size: 0.92rem;
}

.highlights-list {
  margin: 0;
  padding-left: 18px;
  color: var(--co-text-secondary);
  font-size: 0.88rem;
  line-height: 1.6;
}

.release-content {
  margin-top: 12px;
}

.content-section {
  margin-bottom: 14px;
}

.section-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid;
  margin-bottom: 6px;
}

.section-items {
  margin: 6px 0 0;
  padding-left: 18px;
  color: var(--co-text-secondary);
  font-size: 0.88rem;
  line-height: 1.7;
}
</style>
