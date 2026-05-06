<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, withBase } from 'vitepress';
import { flatNavItems } from '../navigation';

const route = useRoute();

const currentIndex = computed(() => {
  const currentPath = route.path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  return flatNavItems.findIndex((item) => {
    const targetPath = withBase(item.link).replace(/\/$/, '') || '/';
    return currentPath === targetPath;
  });
});

const prev = computed(() => (currentIndex.value > 0 ? flatNavItems[currentIndex.value - 1] : null));
const next = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < flatNavItems.length - 1
    ? flatNavItems[currentIndex.value + 1]
    : null,
);
</script>

<template>
  <nav v-if="prev || next" class="prev-next" aria-label="Page navigation">
    <a v-if="prev" :href="withBase(prev.link)" class="prev-next-link prev-next-prev">
      <span class="prev-next-group">{{ prev.group }}</span>
      <span class="prev-next-title">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        {{ prev.text }}
      </span>
    </a>
    <span v-else></span>
    <a v-if="next" :href="withBase(next.link)" class="prev-next-link prev-next-next">
      <span class="prev-next-group">{{ next.group }}</span>
      <span class="prev-next-title">
        {{ next.text }}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </a>
    <span v-else></span>
  </nav>
</template>

<style scoped>
.prev-next {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid var(--co-border);
}

.prev-next-link {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid var(--co-border);
  text-decoration: none;
  transition: all var(--co-duration) var(--co-ease);
}

.prev-next-link:hover {
  border-color: var(--co-border-strong);
  background: var(--co-shimmer);
}

.prev-next-link:hover .prev-next-title {
  color: var(--co-color-text-link);
}

.prev-next-link:hover .prev-next-title svg {
  transform: translateX(-3px);
}

.prev-next-next:hover .prev-next-title svg {
  transform: translateX(3px);
}

.prev-next-prev {
  align-items: flex-start;
}

.prev-next-next {
  align-items: flex-end;
  margin-left: auto;
}

.prev-next-group {
  font-size: var(--co-typography-eyebrow-size);
  font-weight: var(--co-typography-eyebrow-weight);
  letter-spacing: var(--co-typography-eyebrow-tracking);
  line-height: var(--co-typography-eyebrow-line-height);
  text-transform: uppercase;
  color: var(--co-text-secondary);
}

.prev-next-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
  color: var(--co-text-primary);
  transition: color var(--co-duration) var(--co-ease);
}

.prev-next-title svg {
  color: var(--co-text-secondary);
  transition: transform var(--co-duration) var(--co-ease);
  flex-shrink: 0;
}
</style>
