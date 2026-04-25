<script setup lang="ts">
import { useData } from 'vitepress';
import { ref, watch, onMounted, onUnmounted } from 'vue';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const { page } = useData();
const headings = ref<TocItem[]>([]);
const activeId = ref('');

function buildToc() {
  const article = document.querySelector('.cobalt-article');
  if (!article) {
    headings.value = [];
    return;
  }
  const els = article.querySelectorAll('h2, h3');
  headings.value = Array.from(els)
    .filter((el) => el.id)
    .map((el) => ({
      id: el.id,
      text: el.textContent?.trim() ?? '',
      level: parseInt(el.tagName[1]),
    }));
}

let observer: IntersectionObserver | null = null;

function observeHeadings() {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(
    (entries) => {
      // Find the topmost visible heading
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id;
          break;
        }
      }
    },
    { rootMargin: '-64px 0px -70% 0px', threshold: 0 },
  );

  headings.value.forEach((h) => {
    const el = document.getElementById(h.id);
    if (el) observer!.observe(el);
  });
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    activeId.value = id;
  }
}

onMounted(() => {
  buildToc();
  observeHeadings();
});

watch(
  () => page.value.relativePath,
  () => {
    // Wait for DOM update after route change
    setTimeout(() => {
      buildToc();
      observeHeadings();
    }, 100);
  },
);

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <nav v-if="headings.length > 0" class="cobalt-toc" aria-label="Table of contents">
    <div class="toc-title">On this page</div>
    <ul class="toc-list">
      <li
        v-for="h in headings"
        :key="h.id"
        :class="['toc-item', `toc-level-${h.level}`, { 'is-active': activeId === h.id }]"
      >
        <a :href="`#${h.id}`" @click.prevent="scrollTo(h.id)" :title="h.text">
          {{ h.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.cobalt-toc {
  position: fixed;
  top: calc(var(--co-topbar-height) + 32px);
  right: 24px;
  width: 220px;
  max-height: calc(100vh - var(--co-topbar-height) - 64px);
  overflow-y: auto;
  z-index: 10;
}

.toc-title {
  font-size: var(--co-typography-eyebrow-size);
  font-weight: var(--co-typography-eyebrow-weight);
  letter-spacing: var(--co-typography-eyebrow-tracking);
  line-height: var(--co-typography-eyebrow-line-height);
  text-transform: uppercase;
  color: var(--co-color-text-default);
  margin-bottom: 10px;
  padding-left: 12px;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 1px solid var(--co-border);
}

.toc-item a {
  display: block;
  padding: 4px 12px;
  font-size: var(--co-typography-body-sm-size);
  font-weight: var(--co-typography-body-sm-weight);
  letter-spacing: var(--co-typography-body-sm-tracking);
  line-height: var(--co-typography-body-sm-line-height);
  color: var(--co-color-text-secondary);
  text-decoration: none;
  border-left: 2px solid transparent;
  margin-left: -1px;
  transition: all var(--co-duration) var(--co-ease);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.toc-level-3 a {
  padding-left: 24px;
  font-size: var(--co-typography-caption-size);
}

.toc-item a:hover {
  color: var(--co-color-text-link);
}

.toc-item.is-active a {
  color: var(--co-color-text-link);
  border-left-color: var(--co-color-text-link);
}

/* Hide on narrow viewports where there's no room */
@media (max-width: 1280px) {
  .cobalt-toc {
    display: none;
  }
}
</style>
