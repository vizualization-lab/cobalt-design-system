<script setup lang="ts">
import { useData, useRoute, withBase } from 'vitepress';
import { ref, watch } from 'vue';
import type { NavGroup, NavItem } from '../navigation';

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

function hasActiveChild(children: NavItem[]): boolean {
  return children.some(
    (child) => isActive(child.link) || (child.children && hasActiveChild(child.children)),
  );
}

// Track which groups the user has explicitly toggled. Maps group text to open/closed.
const toggledGroups = ref(new Map<string, boolean>());

function toggleGroup(text: string) {
  const current = toggledGroups.value.get(text);
  // If never toggled, it's currently in its default state — flip it
  if (current === undefined) {
    toggledGroups.value.set(text, false);
  } else {
    toggledGroups.value.set(text, !current);
  }
}

function isGroupOpen(item: NavItem): boolean {
  const explicit = toggledGroups.value.get(item.text);
  if (explicit !== undefined) return explicit;
  if (item.children && hasActiveChild(item.children)) return true;
  return !!item.defaultOpen;
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
        <template v-for="item in category.items" :key="item.link ?? item.text">
          <!-- Sub-group with children -->
          <li v-if="item.children" class="nav-group">
            <button
              class="nav-group-toggle"
              :class="{ 'is-open': isGroupOpen(item) }"
              @click="toggleGroup(item.text)"
              :aria-expanded="isGroupOpen(item)"
            >
              <svg
                class="nav-group-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="4 2 8 6 4 10" />
              </svg>
              <span class="nav-group-text">{{ item.text }}</span>
            </button>
            <ul v-show="isGroupOpen(item)" class="nav-group-children">
              <li v-for="child in item.children" :key="child.link ?? child.text">
                <a
                  v-if="child.link"
                  :href="withBase(child.link)"
                  class="nav-item nav-item--nested"
                  :class="{ 'is-active': isActive(child.link) }"
                  :aria-current="isActive(child.link) ? 'page' : undefined"
                >
                  <span class="nav-item-indicator" aria-hidden="true"></span>
                  <co-icon
                    class="nav-item-marker"
                    name="fiber-manual-record"
                    size="xs"
                    :fill="isActive(child.link) || undefined"
                    aria-hidden="true"
                  ></co-icon>
                  <span class="nav-item-text">{{ child.text }}</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- Regular nav item -->
          <li v-else>
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
        </template>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.cobalt-sidebar {
  position: fixed;
  top: calc(var(--co-topbar-offset, var(--co-topbar-height)) + var(--co-panel-gap));
  left: calc(var(--co-panel-gap) + var(--co-rail-width) + var(--co-panel-gap));
  bottom: var(--co-panel-gap);
  width: var(--co-sidebar-width);
  z-index: 50;
  display: flex;
  flex-direction: column;
  background: var(--co-color-surface-static-raised);
  border-radius: var(--co-shape-radius-lg);
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

/* ── Nav Group (collapsible sub-section) ───── */
.nav-group {
  margin: 4px 0 0;
}

.nav-group-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: var(--co-shape-radius-lg);
  background: none;
  color: var(--co-color-text-default);
  font-size: var(--co-typography-body-sm-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-body-sm-tracking);
  line-height: var(--co-typography-body-sm-line-height);
  cursor: pointer;
  transition: color 0.15s ease;
}

.nav-group-toggle:hover {
  color: var(--co-text-primary);
}

.nav-group-chevron {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.nav-group-toggle.is-open .nav-group-chevron {
  transform: rotate(90deg);
}

.nav-group-text {
  line-height: var(--co-typography-eyebrow-line-height);
}

.nav-group-children {
  list-style: none;
  padding: 0 0 0 8px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.nav-item--nested {
  padding-left: 20px;
}

/* ── Nav Item ──────────────────────────────── */
.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  margin: 1px 0;
  border-radius: var(--co-shape-radius-lg);
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
  color: var(--co-component-nav-drawer-item-foreground-hover, var(--co-color-text-link));
  background: var(
    --co-component-nav-drawer-item-background-hover,
    color-mix(in srgb, var(--co-color-surface-interactive-primary-default) 8%, transparent)
  );
}

.nav-item:active {
  color: var(--co-component-nav-drawer-item-foreground-active, var(--co-color-text-link));
  background: var(
    --co-component-nav-drawer-item-background-active,
    color-mix(in srgb, var(--co-color-surface-interactive-primary-default) 20%, transparent)
  );
}

/* Active indicator pill */
.nav-item-indicator {
  position: absolute;
  inset: 0;
  border-radius: var(--co-shape-radius-lg);
  background: transparent;
  border: 1px solid transparent;
  z-index: -1;
}

.nav-item.is-active .nav-item-indicator {
  background: var(
    --co-component-nav-drawer-item-background-selected,
    color-mix(in srgb, var(--co-color-surface-interactive-primary-default) 12%, transparent)
  );
}

.nav-item-marker {
  flex-shrink: 0;
  color: var(--co-color-text-tertiary);
  opacity: 0.5;
  transition: all var(--co-duration) var(--co-ease);
}

.nav-item:hover .nav-item-marker {
  color: var(--co-component-nav-drawer-item-foreground-hover, var(--co-color-text-link));
  opacity: 0.85;
}

.nav-item:active .nav-item-marker {
  color: var(--co-component-nav-drawer-item-foreground-active, var(--co-color-text-link));
}

.nav-item.is-active .nav-item-marker {
  color: var(--co-component-nav-drawer-item-foreground-selected, var(--co-color-text-link));
  opacity: 1;
}

.nav-item.is-active {
  color: var(--co-component-nav-drawer-item-foreground-selected, var(--co-color-text-link));
  font-weight: var(--co-typography-label-weight);
}

.nav-item-text {
  line-height: var(--co-typography-label-line-height);
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
