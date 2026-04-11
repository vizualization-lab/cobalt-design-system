<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useData, useRoute, withBase } from 'vitepress';

const { theme } = useData();
import { navigation } from '../navigation';
import type { NavGroup } from '../navigation';

const route = useRoute();

// Track open groups — auto-open groups that contain the active page
const openGroups = ref<Set<string>>(
  new Set(
    navigation
      .filter((g) => g.defaultOpen || g.items.some((item) => isActive(item.link)))
      .map((g) => g.label),
  ),
);

// Auto-expand the group containing the active page on route change
watch(
  () => route.path,
  () => {
    const activeGroup = navigation.find((g) => g.items.some((item) => isActive(item.link)));
    if (activeGroup && !openGroups.value.has(activeGroup.label)) {
      const next = new Set(openGroups.value);
      next.add(activeGroup.label);
      openGroups.value = next;
    }
  },
);

function toggleGroup(label: string) {
  const next = new Set(openGroups.value);
  if (next.has(label)) {
    next.delete(label);
  } else {
    next.add(label);
  }
  openGroups.value = next;
}

function isActive(link: string | undefined): boolean {
  if (!link) return false;
  const currentPath = route.path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const targetPath = withBase(link).replace(/\/$/, '') || '/';
  return currentPath === targetPath;
}

function isGroupActive(group: NavGroup): boolean {
  return group.items.some((item) => isActive(item.link));
}
</script>

<template>
  <aside class="cobalt-sidebar">
    <!-- Decorative top gradient line -->
    <div class="sidebar-accent" aria-hidden="true"></div>

    <nav class="sidebar-nav">
      <div v-for="group in navigation" :key="group.label" class="nav-group">
        <!-- Group header (collapsible) -->
        <button
          class="group-header"
          :class="{ 'is-active': isGroupActive(group) }"
          @click="toggleGroup(group.label)"
          :aria-expanded="openGroups.has(group.label)"
        >
          <div class="group-icon">
            <co-icon
              :name="group.icon"
              size="sm"
              :fill="isGroupActive(group) || undefined"
            ></co-icon>
          </div>
          <span class="group-label">{{ group.label }}</span>
          <svg
            class="group-chevron"
            :class="{ 'is-open': openGroups.has(group.label) }"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 4 10 8 6 12" />
          </svg>
        </button>

        <!-- Group items (collapsible) -->
        <div class="group-items" :class="{ 'is-open': openGroups.has(group.label) }">
          <div class="group-items-inner">
            <a
              v-for="item in group.items"
              :key="item.text"
              :href="withBase(item.link || '')"
              class="nav-item"
              :class="{ 'is-active': isActive(item.link) }"
            >
              <!-- Active indicator pill -->
              <div class="nav-item-indicator" aria-hidden="true"></div>
              <span class="nav-item-dot" aria-hidden="true"></span>
              <span class="nav-item-text">{{ item.text }}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Bottom section -->
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
  top: var(--co-topbar-height);
  left: 0;
  bottom: 0;
  width: var(--co-sidebar-width);
  z-index: 50;
  display: flex;
  flex-direction: column;
  background: var(--co-sidebar-bg);
  border-right: 1px solid var(--co-border);
  overflow-y: auto;
  overflow-x: hidden;
}

.sidebar-accent {
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--co-blue-600) 0%,
    var(--co-blue-400) 40%,
    transparent 100%
  );
  opacity: 0.6;
  flex-shrink: 0;
}

.sidebar-nav {
  flex: 1;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* ── Group ─────────────────────────────────── */
.nav-group {
  margin-bottom: 4px;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: none;
  border-radius: 10px;
  cursor: pointer;
  color: var(--co-text-secondary);
  font-family: var(--co-font-body);
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
  transition: all var(--co-duration) var(--co-ease);
  position: relative;
}

.group-header:hover {
  color: var(--co-text-primary);
  background: var(--co-shimmer);
}

.group-header.is-active {
  color: var(--co-code-color);
}

.group-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--co-shimmer);
  color: var(--co-blue-400);
  flex-shrink: 0;
  transition: all var(--co-duration) var(--co-ease);
}

.group-header:hover .group-icon {
  background: var(--co-blue-alpha-15);
}

.group-header.is-active .group-icon {
  background: var(--co-blue-alpha-18);
  color: var(--co-code-color);
}

.group-label {
  flex: 1;
  text-align: left;
}

.group-chevron {
  color: var(--co-color-text-tertiary);
  transition: transform 0.3s var(--co-ease);
  flex-shrink: 0;
}

.group-chevron.is-open {
  transform: rotate(90deg);
}

/* ── Group Items (collapsible) ─────────────── */
.group-items {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s var(--co-ease);
}

.group-items.is-open {
  grid-template-rows: 1fr;
}

.group-items-inner {
  overflow: hidden;
  padding-left: 22px;
}

.group-items.is-open .group-items-inner {
  padding-top: 2px;
  padding-bottom: 4px;
}

/* ── Nav Item ──────────────────────────────── */
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 1px 0;
  border-radius: 9px;
  color: var(--co-color-text-tertiary);
  text-decoration: none;
  font-size: var(--co-typography-body-sm-size);
  font-weight: var(--co-typography-body-sm-weight);
  letter-spacing: var(--co-typography-body-sm-tracking);
  line-height: var(--co-typography-body-sm-line-height);
  position: relative;
  transition: all var(--co-duration) var(--co-ease);
  cursor: pointer;
}

.nav-item:hover {
  color: var(--co-text-primary);
  background: var(--co-shimmer);
}

/* Active indicator — M3-style pill */
.nav-item-indicator {
  position: absolute;
  inset: 0;
  border-radius: 9px;
  background: transparent;
  transition: all 0.35s var(--co-ease);
  z-index: -1;
}

.nav-item.is-active .nav-item-indicator {
  background: var(--co-color-interactive-subtle-selected);
  border: 1px solid var(--co-color-border-selected);
}

.nav-item-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--co-color-text-tertiary);
  flex-shrink: 0;
  transition: all var(--co-duration) var(--co-ease);
  opacity: 0.5;
}

.nav-item.is-active .nav-item-dot {
  background: var(--co-blue-400);
  opacity: 1;
  box-shadow: 0 0 8px var(--co-blue-alpha-50);
}

.nav-item:hover .nav-item-dot {
  opacity: 0.8;
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
  padding: 16px;
  border-top: 1px solid var(--co-border);
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
    transform: translateX(-100%);
    transition: transform 0.3s var(--co-ease);
    z-index: 70;
    background: var(--co-midnight);
  }

  .cobalt-sidebar.is-open {
    transform: translateX(0);
  }
}
</style>
