<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vitepress';

const route = useRoute();

interface NavItem {
  text: string;
  link?: string;
  icon?: string;
}

interface NavGroup {
  label: string;
  icon: string;
  items: NavItem[];
  defaultOpen?: boolean;
}

const navigation: NavGroup[] = [
  {
    label: 'Overview',
    icon: 'home',
    defaultOpen: true,
    items: [{ text: 'Introduction', link: '/', icon: 'spark' }],
  },
  {
    label: 'Design Tokens',
    icon: 'palette',
    defaultOpen: true,
    items: [{ text: 'Token Reference', link: '/tokens/', icon: 'tokens' }],
  },
  {
    label: 'Components',
    icon: 'components',
    defaultOpen: true,
    items: [{ text: 'Button', link: '/components/button', icon: 'button' }],
  },
];

// Track open groups
const openGroups = ref<Set<string>>(
  new Set(navigation.filter((g) => g.defaultOpen).map((g) => g.label)),
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
  const targetPath = link.replace(/\/$/, '') || '/';
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
            <!-- Home icon -->
            <svg
              v-if="group.icon === 'home'"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <!-- Palette icon -->
            <svg
              v-else-if="group.icon === 'palette'"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
              <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
              <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
              <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
              />
            </svg>
            <!-- Components icon -->
            <svg
              v-else
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
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
              :href="item.link"
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
        <span class="badge-version">v0.0.1</span>
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
  background: linear-gradient(180deg, rgba(10, 22, 40, 0.7) 0%, rgba(10, 22, 40, 0.5) 100%);
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
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: all var(--co-duration) var(--co-ease);
  position: relative;
}

.group-header:hover {
  color: var(--co-text-primary);
  background: var(--co-shimmer);
}

.group-header.is-active {
  color: var(--co-blue-300);
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
  background: rgba(37, 99, 235, 0.15);
}

.group-header.is-active .group-icon {
  background: rgba(37, 99, 235, 0.18);
  color: var(--co-blue-300);
}

.group-label {
  flex: 1;
  text-align: left;
}

.group-chevron {
  color: var(--co-text-muted);
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
  color: var(--co-text-muted);
  text-decoration: none;
  font-size: 0.84rem;
  font-weight: 400;
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
  background: rgba(37, 99, 235, 0.15);
  box-shadow:
    inset 0 0 0 1px rgba(37, 99, 235, 0.2),
    0 0 16px -4px rgba(37, 99, 235, 0.2);
}

.nav-item-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--co-text-muted);
  flex-shrink: 0;
  transition: all var(--co-duration) var(--co-ease);
  opacity: 0.5;
}

.nav-item.is-active .nav-item-dot {
  background: var(--co-blue-400);
  opacity: 1;
  box-shadow: 0 0 8px rgba(37, 99, 235, 0.5);
}

.nav-item:hover .nav-item-dot {
  opacity: 0.8;
}

.nav-item.is-active {
  color: var(--co-blue-300);
  font-weight: 500;
}

.nav-item-text {
  line-height: 1.3;
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
  font-size: 0.72rem;
  color: var(--co-text-muted);
}

.badge-label {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--co-blue-400);
  background: rgba(37, 99, 235, 0.12);
  padding: 2px 7px;
  border-radius: 4px;
  border: 1px solid rgba(37, 99, 235, 0.15);
}
</style>
