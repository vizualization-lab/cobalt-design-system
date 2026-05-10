<script setup lang="ts">
import { useRoute, useRouter, withBase } from 'vitepress';
import { computed, ref } from 'vue';
import type { NavGroup, NavItem } from '../navigation';
import CobaltSidebarItems from './CobaltSidebarItems.vue';

const route = useRoute();
const router = useRouter();

const props = defineProps<{
  category: NavGroup;
  categoryIndex: number;
}>();

function normalizePath(path: string): string {
  return path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}

function isActive(link: string | undefined): boolean {
  if (!link) return false;
  return normalizePath(route.path) === normalizePath(withBase(link));
}

function hasActiveChild(children: NavItem[]): boolean {
  return children.some(
    (child) => isActive(child.link) || (child.children && hasActiveChild(child.children)),
  );
}

function findActiveLink(items: NavItem[]): string {
  for (const item of items) {
    if (item.link && isActive(item.link)) return withBase(item.link);
    if (item.children) {
      const active = findActiveLink(item.children);
      if (active) return active;
    }
  }
  return '';
}

const activeValue = computed(() => findActiveLink(props.category.items));
const toggledGroups = ref(new Map<string, boolean>());

function onToggleGroup(key: string, open: boolean) {
  toggledGroups.value.set(key, open);
}

function isGroupOpen(item: NavItem, key: string): boolean {
  if (item.children && hasActiveChild(item.children)) return true;
  const explicit = toggledGroups.value.get(key);
  if (explicit !== undefined) return explicit;
  return !!item.defaultOpen;
}

function navigate(link: string, event: Event) {
  if (event instanceof MouseEvent) {
    const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.button !== 0 || isModifiedClick) return;
  }

  event.preventDefault();
  router.go(withBase(link));
}
</script>

<template>
  <co-nav-drawer
    class="cobalt-sidebar"
    id="cobalt-subnav"
    :label="category.label"
    :value="activeValue"
  >
    <h2 class="subnav-title" :id="`subnav-title-${categoryIndex}`">
      {{ category.label }}
    </h2>

    <CobaltSidebarItems
      :items="category.items"
      :is-active="isActive"
      :is-group-open="isGroupOpen"
      :toggle-group="onToggleGroup"
      :navigate="navigate"
    />
  </co-nav-drawer>
</template>

<style scoped>
.cobalt-sidebar {
  position: fixed;
  top: calc(var(--co-topbar-offset) + var(--co-panel-gap));
  left: calc(var(--co-panel-gap) + var(--co-rail-width) + var(--co-panel-gap));
  bottom: var(--co-panel-gap);
  width: var(--co-sidebar-width);
  max-width: var(--co-sidebar-width);
  z-index: 50;
  display: block;
  background: var(--co-color-surface-static-raised);
  border-radius: var(--co-shape-radius-lg);
  box-shadow: var(--co-elevation-shadow-sm);
}

.subnav-title {
  padding: var(--co-space-5) var(--co-space-5) var(--co-space-3);
  margin: 0;
  font-size: var(--co-typography-title-size);
  font-weight: var(--co-typography-title-weight);
  letter-spacing: var(--co-typography-title-tracking);
  line-height: var(--co-typography-title-line-height);
  color: var(--co-text-primary);
}

@media (max-width: 768px) {
  .cobalt-sidebar {
    left: calc(var(--co-panel-gap) + var(--co-rail-width) + var(--co-panel-gap));
    transform: translateX(calc(-100% - var(--co-rail-width) - var(--co-panel-gap) * 3));
    transition: transform var(--co-motion-duration-slow) var(--co-ease);
    z-index: 70;
  }

  .cobalt-sidebar.is-open {
    transform: translateX(0);
  }
}
</style>
