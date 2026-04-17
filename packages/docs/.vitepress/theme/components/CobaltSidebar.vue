<script setup lang="ts">
import { useData, useRoute, withBase } from 'vitepress';
import type { NavGroup } from '../navigation';

const { theme } = useData();
const route = useRoute();

defineProps<{
  category: NavGroup;
  categoryIndex: number;
}>();

function isActive(link: string | undefined): boolean {
  if (!link) return false;
  const currentPath = route.path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const targetPath = withBase(link).replace(/\/$/, '') || '/';
  return currentPath === targetPath;
}
</script>

<template>
  <aside
    class="cobalt-sidebar"
    id="cobalt-subnav"
    :aria-labelledby="`subnav-title-${categoryIndex}`"
  >
    <h2 class="subnav-title" :id="`subnav-title-${categoryIndex}`">
      {{ category.label }}
    </h2>
    <nav class="subnav-nav">
      <ul class="subnav-list">
        <li v-for="item in category.items" :key="item.link ?? item.text">
          <a
            v-if="item.link"
            :href="withBase(item.link)"
            class="nav-item"
            :class="{ 'is-active': isActive(item.link) }"
            :aria-current="isActive(item.link) ? 'page' : undefined"
          >
            <span class="nav-item-indicator" aria-hidden="true"></span>
            <co-icon
              class="nav-item-marker"
              name="fiber-manual-record"
              size="xs"
              :fill="isActive(item.link) || undefined"
              aria-hidden="true"
            ></co-icon>
            <span class="nav-item-text">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="sidebar-footer">
      <div class="sidebar-badge">
        <span class="badge-version">v{{ theme.cobaltVersion }}</span>
        <span class="badge-label">alpha</span>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.cobalt-sidebar {
  position: fixed;
  top: calc(var(--co-topbar-height) + var(--co-panel-gap));
  left: calc(var(--co-panel-gap) + var(--co-rail-width) + var(--co-panel-gap));
  bottom: var(--co-panel-gap);
  width: var(--co-sidebar-width);
  z-index: 50;
  display: flex;
  flex-direction: column;
  background: var(--co-color-surface-default);
  border: 1px solid var(--co-color-border-subtle);
  border-radius: var(--co-shape-radius-md);
  box-shadow: var(--co-elevation-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.08));
  overflow-y: auto;
  overflow-x: hidden;
}

.subnav-title {
  padding: 20px 20px 12px;
  margin: 0;
  font-size: var(--co-typography-title-size);
  font-weight: var(--co-typography-title-weight);
  letter-spacing: var(--co-typography-title-tracking);
  line-height: var(--co-typography-title-line-height);
  color: var(--co-text-primary);
}

.subnav-nav {
  flex: 1;
  padding: 4px 12px 16px;
}

.subnav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

/* ── Nav Item ──────────────────────────────── */
.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  margin: 1px 0;
  border-radius: 9px;
  color: var(--co-color-text-default);
  text-decoration: none;
  font-size: var(--co-typography-body-sm-size);
  font-weight: var(--co-typography-body-sm-weight);
  letter-spacing: var(--co-typography-body-sm-tracking);
  line-height: var(--co-typography-body-sm-line-height);
  position: relative;
  cursor: pointer;
}

.nav-item:hover {
  color: var(--co-text-primary);
  background: var(--co-shimmer);
}

/* Active indicator pill */
.nav-item-indicator {
  position: absolute;
  inset: 0;
  border-radius: 9px;
  background: transparent;
  border: 1px solid transparent;
  z-index: -1;
}

.nav-item.is-active .nav-item-indicator {
  background: var(--co-color-interactive-subtle-selected);
  border-color: var(--co-color-border-selected);
}

.nav-item-marker {
  flex-shrink: 0;
  color: var(--co-color-text-tertiary);
  opacity: 0.5;
  transition: all var(--co-duration) var(--co-ease);
}

.nav-item:hover .nav-item-marker {
  opacity: 0.85;
}

.nav-item.is-active .nav-item-marker {
  color: var(--co-color-interactive-primary-default);
  opacity: 1;
}

.nav-item.is-active {
  color: var(--co-code-color);
  font-weight: var(--co-typography-label-weight);
}

.nav-item-text {
  line-height: var(--co-typography-label-line-height);
}

/* ── Footer ────────────────────────────────── */
.sidebar-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--co-color-border-subtle);
  flex-shrink: 0;
}

.sidebar-badge {
  display: flex;
  align-items: center;
  gap: 8px;
}

.badge-version {
  font-family: var(--co-font-mono);
  font-size: var(--co-typography-caption-size);
  font-weight: var(--co-typography-caption-weight);
  letter-spacing: var(--co-typography-caption-tracking);
  line-height: var(--co-typography-caption-line-height);
  color: var(--co-color-text-tertiary);
}

.badge-label {
  font-size: var(--co-typography-eyebrow-size);
  font-weight: var(--co-typography-eyebrow-weight);
  letter-spacing: var(--co-typography-eyebrow-tracking);
  line-height: var(--co-typography-eyebrow-line-height);
  text-transform: uppercase;
  color: var(--co-blue-400);
  background: var(--co-blue-alpha-12);
  padding: 2px 7px;
  border-radius: 4px;
  border: 1px solid var(--co-blue-alpha-15);
}

/* ── Mobile: slide-in overlay ──────────────────────────── */
@media (max-width: 768px) {
  .cobalt-sidebar {
    left: calc(var(--co-panel-gap) + var(--co-rail-width) + var(--co-panel-gap));
    transform: translateX(calc(-100% - var(--co-rail-width) - var(--co-panel-gap) * 3));
    transition: transform 0.3s var(--co-ease);
    z-index: 70;
  }

  .cobalt-sidebar.is-open {
    transform: translateX(0);
  }
}
</style>
