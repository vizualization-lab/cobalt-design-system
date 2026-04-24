<script setup lang="ts">
import { useData, useRoute, useRouter, withBase } from 'vitepress';
import { ref, computed, onMounted, watch, onUnmounted } from 'vue';
import CobaltRail from './CobaltRail.vue';
import CobaltSidebar from './CobaltSidebar.vue';
import CobaltHome from './CobaltHome.vue';
import CobaltPrevNext from './CobaltPrevNext.vue';
import CobaltToc from './CobaltToc.vue';
import { navigation, type NavItem } from '../navigation';
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue';

const { frontmatter, theme, page } = useData();
const route = useRoute();
const router = useRouter();

const editUrl = computed(() => {
  const filePath = page.value.relativePath;
  const githubUrl = theme.value.github?.url;
  if (!filePath || !githubUrl) return null;
  return `${githubUrl}/edit/main/packages/docs/${filePath}`;
});

const isDark = ref(false);
const sidebarOpen = ref(false);

function normalizePath(p: string) {
  return p.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}

function hasLink(items: NavItem[], path: string): boolean {
  return items.some(
    (item) =>
      (item.link && normalizePath(withBase(item.link)) === path) ||
      (item.children && hasLink(item.children, path)),
  );
}

// Which category contains the current route?
const routeCategoryIndex = computed(() => {
  const currentPath = normalizePath(route.path);
  const idx = navigation.findIndex((g) => hasLink(g.items, currentPath));
  return idx === -1 ? 0 : idx;
});

// User's explicit rail selection — null means "follow the route".
const selectedCategoryIndex = ref<number | null>(null);

// The effective active category.
const activeCategoryIndex = computed(() => selectedCategoryIndex.value ?? routeCategoryIndex.value);

function selectCategory(i: number) {
  selectedCategoryIndex.value = i;
  const firstLink = navigation[i].items.find((item) => item.link)?.link;
  if (firstLink) {
    router.go(withBase(firstLink));
  }
}

onMounted(() => {
  const saved = localStorage.getItem('cobalt-theme');
  if (saved === 'dark') {
    isDark.value = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    isDark.value = document.documentElement.getAttribute('data-theme') === 'dark';
  }

  // Copy heading anchor URL to clipboard on click
  const article = document.querySelector('.cobalt-article');
  if (article) {
    article.addEventListener('click', (e) => {
      const anchor = (e.target as HTMLElement).closest?.(
        '.header-anchor',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      e.preventDefault();
      const url = anchor.href;
      navigator.clipboard.writeText(url);

      // Brief visual feedback — swap # with checkmark
      anchor.dataset.copied = 'true';
      setTimeout(() => delete anchor.dataset.copied, 1500);
    });
  }
});

// Close sidebar on route change (mobile) + clear user's rail override so rail re-syncs.
watch(
  () => route.path,
  () => {
    sidebarOpen.value = false;
    selectedCategoryIndex.value = null;
  },
);

function toggleTheme() {
  isDark.value = !isDark.value;
  const theme = isDark.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('cobalt-theme', theme);
}

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}
</script>

<template>
  <div class="cobalt-shell">
    <!-- Ambient background grain -->
    <div class="cobalt-grain" aria-hidden="true"></div>

    <!-- Top bar -->
    <header class="cobalt-topbar">
      <button
        class="topbar-hamburger"
        @click="toggleSidebar"
        :aria-label="sidebarOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="sidebarOpen"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <template v-if="!sidebarOpen">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </template>
          <template v-else>
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </template>
        </svg>
      </button>
      <a :href="withBase('/')" class="topbar-brand">
        <div class="brand-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="2" width="24" height="24" rx="6" fill="currentColor" />
            <path
              class="gem-outline"
              d="M14 7L20 11V17L14 21L8 17V11L14 7Z"
              fill="none"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path class="gem-inner" d="M14 7V21M8 11L20 17M20 11L8 17" stroke-width="1" />
          </svg>
        </div>
        <span class="brand-name">Cobalt</span>
        <span class="brand-tag">The design system for tools and apps</span>
      </a>
      <nav class="topbar-nav">
        <VPNavBarSearch />
        <button
          class="topbar-toggle"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg
            v-if="isDark"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <!-- Moon icon (shown in light mode) -->
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
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>
        <a :href="theme.github.url" class="topbar-link" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
        </a>
      </nav>
    </header>

    <div class="cobalt-body" :class="{ 'is-home': frontmatter.layout === 'home' }">
      <!-- Mobile overlay backdrop -->
      <div
        v-if="sidebarOpen"
        class="sidebar-backdrop"
        @click="sidebarOpen = false"
        aria-hidden="true"
      ></div>

      <!-- Primary rail + section subnav -->
      <CobaltRail
        :active-index="activeCategoryIndex"
        :class="{ 'is-open': sidebarOpen }"
        @select="selectCategory"
      />
      <CobaltSidebar
        :category="navigation[activeCategoryIndex]"
        :category-index="activeCategoryIndex"
        :class="{ 'is-open': sidebarOpen }"
      />

      <!-- Main content -->
      <main class="cobalt-main">
        <div class="cobalt-content" v-if="frontmatter.layout === 'home'">
          <CobaltHome />
        </div>
        <article class="cobalt-content cobalt-article vp-doc" v-else>
          <div class="edit-link edit-link--top" v-if="editUrl">
            <a :href="editUrl" target="_blank" rel="noopener noreferrer">
              <co-icon name="edit" size="xs" aria-hidden="true"></co-icon>
              Edit this page on GitHub
            </a>
          </div>
          <Content />
          <div class="edit-link edit-link--bottom" v-if="editUrl">
            <a :href="editUrl" target="_blank" rel="noopener noreferrer">
              <co-icon name="edit" size="xs" aria-hidden="true"></co-icon>
              Edit this page on GitHub
            </a>
          </div>
          <CobaltPrevNext />
        </article>
        <CobaltToc v-if="frontmatter.layout !== 'home'" />
      </main>
    </div>
  </div>
</template>

<style>
@import '@cobalt/tokens/css/fonts';

/* ── Reset & Globals ──────────────────────────────────────────── */
:root {
  /* Surfaces — aliased onto real semantic tokens */
  --co-midnight: var(--co-color-surface-page);
  --co-deep: var(--co-color-surface-default);
  --co-navy: var(--co-color-surface-raised);
  --co-slate: var(--co-color-surface-sunken);
  --co-steel: var(--co-color-border-strong);

  /* Brand blues → interactive/primary semantics */
  --co-blue-900: var(--co-color-primary-dark);
  --co-blue-700: var(--co-color-primary-base);
  --co-blue-600: var(--co-color-interactive-primary-default);
  --co-blue-500: var(--co-color-interactive-primary-hover);
  --co-blue-400: var(--co-color-interactive-primary-active);
  --co-blue-300: var(--co-color-primary-light);
  --co-blue-200: var(--co-color-primary-light);
  --co-blue-100: var(--co-color-primary-subtle);
  --co-electric: var(--co-color-interactive-primary-hover);
  --co-glow: var(--co-color-interactive-primary-active);
  --co-shimmer: color-mix(in srgb, var(--co-color-primary-base) 6%, transparent);

  /* Text */
  --co-text-primary: var(--co-color-text-default);
  --co-text-secondary: var(--co-color-text-secondary);
  --co-text-muted: var(--co-color-text-secondary);

  /* Borders */
  --co-border: var(--co-color-border-default);
  --co-border-strong: var(--co-color-border-strong);

  /* Topbar/sidebar gradient backgrounds derived from page surface */
  --co-topbar-bg: linear-gradient(
    180deg,
    color-mix(in srgb, var(--co-color-surface-page) 95%, transparent) 0%,
    color-mix(in srgb, var(--co-color-surface-page) 85%, transparent) 100%
  );
  --co-sidebar-bg: linear-gradient(
    180deg,
    color-mix(in srgb, var(--co-color-surface-page) 70%, transparent) 0%,
    color-mix(in srgb, var(--co-color-surface-page) 50%, transparent) 100%
  );

  /* Alpha overlays derived from primary color */
  --co-blue-alpha-8: color-mix(in srgb, var(--co-color-primary-base) 8%, transparent);
  --co-blue-alpha-10: color-mix(in srgb, var(--co-color-primary-base) 10%, transparent);
  --co-blue-alpha-12: color-mix(in srgb, var(--co-color-primary-base) 12%, transparent);
  --co-blue-alpha-15: color-mix(in srgb, var(--co-color-primary-base) 15%, transparent);
  --co-blue-alpha-18: color-mix(in srgb, var(--co-color-primary-base) 18%, transparent);
  --co-blue-alpha-20: color-mix(in srgb, var(--co-color-primary-base) 20%, transparent);
  --co-blue-alpha-25: color-mix(in srgb, var(--co-color-primary-base) 25%, transparent);
  --co-blue-alpha-40: color-mix(in srgb, var(--co-color-primary-base) 40%, transparent);
  --co-blue-alpha-50: color-mix(in srgb, var(--co-color-primary-base) 50%, transparent);

  /* Code & link treatments */
  --co-code-bg: color-mix(in srgb, var(--co-color-primary-base) 8%, transparent);
  --co-code-border: color-mix(in srgb, var(--co-color-primary-base) 10%, transparent);
  --co-code-color: var(--co-color-text-link);
  --co-inline-link: var(--co-color-text-link);
  --co-h3-color: var(--co-color-text-link);

  /* Selection */
  --co-selection-bg: color-mix(in srgb, var(--co-color-primary-base) 30%, transparent);
  --co-selection-color: var(--co-color-primary-contrast);

  /* Ambient effects */
  --co-grain-opacity: 0.03;
  --co-icon-glow: drop-shadow(
    0 0 8px color-mix(in srgb, var(--co-color-primary-base) 30%, transparent)
  );
  --co-hero-glow: radial-gradient(
    ellipse at center,
    color-mix(in srgb, var(--co-color-primary-base) 12%, transparent) 0%,
    color-mix(in srgb, var(--co-color-primary-base) 4%, transparent) 40%,
    transparent 70%
  );

  /* Scrollbar */
  --co-scrollbar-thumb: var(--co-color-border-strong);
  --co-scrollbar-hover: var(--co-color-interactive-primary-default);

  /* Typography */
  --co-font-body: var(--co-font-family-sans);
  --co-font-mono: var(--co-font-family-mono);

  /* Layout metrics (not theme) */
  --co-rail-width: var(--co-component-nav-rail-bar-width, 115px);
  --co-sidebar-width: 260px;
  --co-topbar-height: 56px;
  --co-panel-gap: 12px;

  /* Transitions */
  --co-ease: var(--co-motion-easing-default);
  --co-duration: var(--co-motion-duration-fast);

  /* VitePress local search — map to Cobalt semantic tokens */
  --vp-local-search-bg: var(--co-color-surface-default);
  --vp-local-search-result-bg: var(--co-color-surface-default);
  --vp-local-search-result-border: var(--co-color-border-default);
  --vp-local-search-result-selected-bg: var(--co-color-surface-raised);
  --vp-local-search-result-selected-border: var(--co-color-border-focus);
  --vp-local-search-highlight-bg: var(--co-color-primary-base);
  --vp-local-search-highlight-text: var(--co-color-primary-contrast);
  --vp-c-brand-1: var(--co-color-primary-base);
  --vp-c-divider: var(--co-color-border-default);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: var(--co-font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: var(--co-midnight);
  color: var(--co-text-primary);
  line-height: 1.65;
}

/* ── Shell ──────────────────────────────────────────────────── */
.cobalt-shell {
  min-height: 100vh;
  position: relative;
}

.cobalt-grain {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: var(--co-grain-opacity);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}

/* ── Top Bar ────────────────────────────────────────────────── */
.cobalt-topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--co-topbar-height);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: var(--co-color-surface-default);
  border-bottom: 1px solid var(--co-color-border-default);
}

.topbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

.brand-icon {
  display: flex;
  color: var(--co-color-interactive-primary-default);
  filter: var(--co-icon-glow);
}

.brand-icon .gem-outline {
  stroke: var(--co-color-text-on-primary);
  opacity: 0.9;
}

.brand-icon .gem-inner {
  stroke: var(--co-color-text-on-primary);
  opacity: 0.3;
}

.brand-name {
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
  color: var(--co-text-primary);
}

.brand-tag {
  font-size: var(--co-typography-caption-size);
  font-weight: var(--co-typography-caption-weight);
  letter-spacing: var(--co-typography-caption-tracking);
  line-height: var(--co-typography-caption-line-height);
  color: var(--co-color-text-secondary);
  padding-left: 10px;
  border-left: 1px solid var(--co-border-strong);
}

/* ── Search ─────────────────────────────────────────────────── */
.topbar-nav :deep(.VPNavBarSearch) {
  display: flex;
  align-items: center;
  flex-grow: 0;
  padding: 0;
}

.topbar-nav :deep(.DocSearch-Button) {
  background: var(--co-color-surface-raised) !important;
  border: 1px solid var(--co-border) !important;
  border-radius: 10px !important;
  color: var(--co-text-secondary);
  height: 36px;
  width: auto;
}

.topbar-nav :deep(.DocSearch-Button:hover) {
  border-color: var(--co-border-strong) !important;
  background: var(--co-color-surface-sunken) !important;
}

.topbar-nav :deep(.DocSearch-Search-Icon) {
  color: var(--co-color-text-tertiary) !important;
}

.topbar-nav :deep(.DocSearch-Button-Placeholder) {
  color: var(--co-color-text-tertiary) !important;
  font-family: var(--co-font-body) !important;
}

.topbar-nav :deep(.DocSearch-Button-Key) {
  border-color: var(--co-border) !important;
  color: var(--co-color-text-tertiary) !important;
  font-family: var(--co-font-body) !important;
}

/* ── Local Search Modal ──────────────────────────────────────
   VitePress uses <style scoped> so class selectors won't match.
   Target elements via the unscoped root class + element/attribute
   selectors that pierce the scoped boundary. */
.VPLocalSearchBox {
  --vp-backdrop-bg-color: color-mix(in srgb, var(--co-color-surface-overlay) 50%, transparent);
}

.VPLocalSearchBox > div:last-of-type {
  /* .shell */
  background: var(--co-color-surface-default) !important;
  border: none !important;
  border-radius: 12px !important;
}

.VPLocalSearchBox form {
  /* .search-bar */
  border: 1px solid var(--co-color-border-default) !important;
  background: var(--co-color-surface-sunken) !important;
  border-radius: 8px !important;
}

.VPLocalSearchBox form:focus-within {
  border-color: var(--co-color-border-focus) !important;
}

.VPLocalSearchBox input[type='search'] {
  /* .search-input */
  background: transparent !important;
  border: none !important;
  outline: none !important;
  color: var(--co-color-text-default) !important;
  font-family: var(--co-font-body) !important;
}

.VPLocalSearchBox input[type='search']::placeholder {
  color: var(--co-color-text-tertiary) !important;
}

.VPLocalSearchBox label {
  color: var(--co-color-text-tertiary) !important;
}

.VPLocalSearchBox a[href] {
  /* .result */
  border-color: var(--co-color-border-default) !important;
  background: var(--co-color-surface-default) !important;
}

.VPLocalSearchBox a[aria-selected='true'] {
  /* .result.selected */
  border-color: var(--co-color-border-focus) !important;
  background: var(--co-color-surface-raised) !important;
}

.VPLocalSearchBox ul + div {
  /* .search-keyboard-shortcuts */
  color: var(--co-color-text-tertiary) !important;
}

.VPLocalSearchBox button {
  color: var(--co-color-text-tertiary) !important;
}

.topbar-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.topbar-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  color: var(--co-text-primary);
  transition: all var(--co-duration) var(--co-ease);
}

.topbar-link:hover {
  color: var(--co-text-primary);
  background: var(--co-shimmer);
}

.topbar-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: none;
  background: none;
  color: var(--co-text-secondary);
  cursor: pointer;
  transition: all var(--co-duration) var(--co-ease);
}

.topbar-toggle:hover {
  color: var(--co-text-primary);
  background: var(--co-shimmer);
}

/* ── Body ───────────────────────────────────────────────────── */
.cobalt-body {
  display: flex;
  padding-top: var(--co-topbar-height);
  min-height: 100vh;
}

/* ── Main Content ───────────────────────────────────────────── */
.cobalt-main {
  flex: 1;
  margin-left: calc(
    var(--co-panel-gap) + var(--co-rail-width) + var(--co-panel-gap) + var(--co-sidebar-width) +
      var(--co-panel-gap)
  );
  min-width: 0;
}

.cobalt-content {
  max-width: 820px;
  margin: 0 auto;
  padding: 48px 56px 80px;
}

/* ── Home splash mode ────────────────────────────────────────
   Hide the primary rail + contextual sidebar on desktop so the
   landing page reads as a splash. Mobile keeps its existing
   hamburger/slide-in behavior untouched. */
@media (min-width: 769px) {
  .cobalt-body.is-home .cobalt-rail,
  .cobalt-body.is-home .cobalt-sidebar {
    display: none;
  }

  .cobalt-body.is-home .cobalt-main {
    margin-left: 0;
  }

  .cobalt-body.is-home .cobalt-content {
    max-width: 1080px;
  }
}

/* At ≥1281px the article layout reserves 268px on the right for the
   TOC. Home has no TOC, so cancel that reserve and let .cobalt-content
   (max-width: 820px, margin: 0 auto) center naturally across the full
   viewport width. */
@media (min-width: 1281px) {
  .cobalt-body.is-home .cobalt-main {
    padding-right: 0;
  }
}

/* ── Article Styles ─────────────────────────────────────────── */
.cobalt-article {
  animation: contentFadeIn 0.4s var(--co-ease) backwards;
}

@keyframes contentFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}

.cobalt-article h1 {
  font-size: var(--co-typography-heading-size);
  font-weight: var(--co-typography-heading-weight);
  letter-spacing: var(--co-typography-heading-tracking);
  line-height: var(--co-typography-heading-line-height);
  color: var(--co-text-primary);
  margin-bottom: 8px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--co-border);
}

.cobalt-article h2 {
  font-size: var(--co-typography-title-size);
  font-weight: var(--co-typography-title-weight);
  letter-spacing: var(--co-typography-title-tracking);
  line-height: var(--co-typography-title-line-height);
  color: var(--co-text-primary);
  margin-top: 56px;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--co-border);
  position: relative;
}

.cobalt-article h2::before {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 48px;
  height: 2px;
  background: var(--co-blue-600);
  border-radius: 1px;
}

.cobalt-article h3 {
  font-size: var(--co-typography-subtitle-size);
  font-weight: var(--co-typography-subtitle-weight);
  letter-spacing: var(--co-typography-subtitle-tracking);
  line-height: var(--co-typography-subtitle-line-height);
  color: var(--co-h3-color);
  margin-top: 36px;
  margin-bottom: 12px;
}

/* ── Heading anchor links ─────────────────────────────────── */
.cobalt-article :is(h1, h2, h3) .header-anchor {
  position: relative;
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  font-weight: 500;
  opacity: 0;
  transition: opacity var(--co-duration) var(--co-ease);
  text-decoration: none;
  border-bottom: none;
}

.cobalt-article :is(h1, h2, h3) .header-anchor::after {
  content: '#';
  color: var(--co-color-text-tertiary);
}

.cobalt-article :is(h1, h2, h3):hover .header-anchor,
.cobalt-article :is(h1, h2, h3) .header-anchor:focus-visible {
  opacity: 1;
}

.cobalt-article :is(h1, h2, h3) .header-anchor:hover::after {
  color: var(--co-color-interactive-primary-default);
}

.cobalt-article .header-anchor[data-copied]::after {
  content: '✓';
  color: var(--co-color-success-base);
}

.cobalt-article p {
  color: var(--co-text-secondary);
  font-size: var(--co-typography-body-size);
  font-weight: var(--co-typography-body-weight);
  letter-spacing: var(--co-typography-body-tracking);
  line-height: var(--co-typography-body-line-height);
  margin-bottom: 16px;
}

.cobalt-article a {
  color: var(--co-inline-link);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color var(--co-duration) var(--co-ease);
}

.cobalt-article a:hover {
  border-bottom-color: var(--co-inline-link);
}

.cobalt-article code {
  font-family: var(--co-font-mono);
  font-size: 0.85em;
  background: var(--co-code-bg);
  color: var(--co-code-color);
  padding: 2px 7px;
  border-radius: 5px;
  border: 1px solid var(--co-code-border);
}

.cobalt-article pre {
  background: var(--co-color-surface-sunken) !important;
  border: 1px solid var(--co-border);
  border-radius: 12px;
  padding: 20px 24px;
  margin: 16px 0 24px;
  overflow-x: auto;
  position: relative;
}

.cobalt-article pre code {
  background: none;
  border: none;
  padding: 0;
  font-size: var(--co-typography-body-sm-size);
  line-height: var(--co-font-line-height-relaxed);
}

/* Let Shiki syntax highlighting colors show through */
.cobalt-article pre code span {
  color: var(--shiki-light) !important;
}

[data-theme='dark'] .cobalt-article pre code span {
  color: var(--shiki-dark) !important;
}

/* Table styles */
.cobalt-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 24px;
  font-size: var(--co-typography-body-sm-size);
  line-height: var(--co-typography-body-sm-line-height);
}

.cobalt-article thead th {
  text-align: left;
  font-size: var(--co-typography-eyebrow-size);
  font-weight: var(--co-typography-eyebrow-weight);
  letter-spacing: var(--co-typography-eyebrow-tracking);
  line-height: var(--co-typography-eyebrow-line-height);
  text-transform: uppercase;
  color: var(--co-text-secondary);
  padding: 10px 16px;
  border-bottom: 1px solid var(--co-border-strong);
  background: var(--co-color-surface-raised);
}

.cobalt-article thead th:first-child {
  border-radius: 8px 0 0 0;
}

.cobalt-article thead th:last-child {
  border-radius: 0 8px 0 0;
}

.cobalt-article tbody td {
  padding: 10px 16px;
  border-bottom: 1px solid var(--co-border-strong);
  color: var(--co-text-secondary);
  vertical-align: top;
}

.cobalt-article tbody tr:last-child td {
  border-bottom: none;
}

.cobalt-article tbody td code {
  font-size: 0.82em;
}

/* Blockquote */
.cobalt-article blockquote {
  border-left: 3px solid var(--co-blue-600);
  padding: 12px 20px;
  margin: 16px 0;
  background: var(--co-shimmer);
  border-radius: 0 8px 8px 0;
}

.cobalt-article blockquote p {
  color: var(--co-text-secondary);
  margin: 0;
}

/* Lists */
.cobalt-article ul,
.cobalt-article ol {
  padding-left: 24px;
  margin-bottom: 16px;
}

.cobalt-article li {
  color: var(--co-text-secondary);
  font-size: var(--co-typography-body-size);
  font-weight: var(--co-typography-body-weight);
  letter-spacing: var(--co-typography-body-tracking);
  line-height: var(--co-typography-body-line-height);
  margin-bottom: 6px;
}

.cobalt-article li::marker {
  color: var(--co-blue-500);
}

/* Horizontal rule */
.cobalt-article hr {
  border: none;
  border-top: 1px solid var(--co-border);
  margin: 40px 0;
}

/* Edit link */
.edit-link--top {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}

.edit-link--bottom {
  margin-top: 48px;
  padding-top: 20px;
  border-top: 1px solid var(--co-border);
}

.edit-link a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--co-typography-body-sm-size);
  color: var(--co-color-text-tertiary);
  text-decoration: none;
  transition: color var(--co-duration) var(--co-ease);
}

.edit-link a:hover {
  color: var(--co-color-interactive-primary-default);
}

/* Demo containers — inline component previews */
.cobalt-article .client-only-wrapper,
.cobalt-article client-only {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  padding: 24px;
  margin: 12px 0 20px;
  background: var(--co-color-surface-raised);
  border: 1px solid var(--co-border);
  border-radius: 12px;
}

/* Override VitePress defaults that leak through */
.vp-doc a {
  color: var(--co-inline-link) !important;
  text-decoration: none !important;
}

.vp-doc div[class*='language-'] {
  background: var(--co-color-surface-sunken) !important;
  border: 1px solid var(--co-border) !important;
  border-radius: 12px !important;
  margin: 16px 0 24px !important;
}

.vp-doc div[class*='language-'] pre {
  background: transparent !important;
  border: none !important;
  margin: 0 !important;
}

.vp-doc div[class*='language-'] code {
  color: inherit !important;
}

.vp-doc div[class*='language-'] code span {
  color: var(--shiki-light) !important;
}

[data-theme='dark'] .vp-doc div[class*='language-'] code span {
  color: var(--shiki-dark) !important;
}

.vp-doc div[class*='language-'] span.lang {
  position: absolute !important;
  top: 8px !important;
  right: 52px !important;
  color: var(--co-color-text-secondary) !important;
  font-size: var(--co-typography-eyebrow-size) !important;
  font-weight: var(--co-typography-eyebrow-weight) !important;
  letter-spacing: var(--co-typography-eyebrow-tracking) !important;
  line-height: var(--co-typography-eyebrow-line-height) !important;
  text-transform: uppercase !important;
}

div[class*='language-'] {
  position: relative !important;
}

div[class*='language-'] > button.copy {
  position: absolute !important;
  top: 8px !important;
  right: 8px !important;
  z-index: 3 !important;
  border: 1px solid var(--co-border) !important;
  border-radius: 6px !important;
  width: 32px !important;
  height: 32px !important;
  padding: 0 !important;
  cursor: pointer !important;
  background-color: transparent !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 256 256' fill='none'%3E%3Crect x='40' y='72' width='132' height='144' rx='8' stroke='%236d84a3' stroke-width='16' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Cpath d='M84,72V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H172' stroke='%236d84a3' stroke-width='16' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E") !important;
  background-size: 16px !important;
  background-position: 50% !important;
  background-repeat: no-repeat !important;
  opacity: 1 !important;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease !important;
}

div[class*='language-'] > button.copy:hover {
  background-color: var(--co-blue-alpha-8) !important;
  border-color: var(--co-blue-400) !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 256 256' fill='none'%3E%3Crect x='40' y='72' width='132' height='144' rx='8' stroke='%2360a5fa' stroke-width='16' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Cpath d='M84,72V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H172' stroke='%2360a5fa' stroke-width='16' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E") !important;
}

div[class*='language-'] > button.copy.copied,
div[class*='language-'] > button.copy:hover.copied {
  border-radius: 6px !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 256 256' fill='none'%3E%3Cpolyline points='88 136 112 160 168 104' stroke='%2360a5fa' stroke-width='16' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E") !important;
  background-color: transparent !important;
  border-color: var(--co-blue-400) !important;
  opacity: 1 !important;
}

div[class*='language-'] > button.copy.copied::before {
  display: none !important;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--co-scrollbar-thumb);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--co-scrollbar-hover);
}

/* ── Hamburger Button ────────────────────────────────────────── */
.topbar-hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: none;
  border-radius: 8px;
  color: var(--co-text-secondary);
  cursor: pointer;
  transition: all var(--co-duration) var(--co-ease);
  flex-shrink: 0;
}

.topbar-hamburger:hover {
  color: var(--co-text-primary);
  background: var(--co-shimmer);
}

/* ── Mobile Overlay Backdrop ─────────────────────────────────── */
.sidebar-backdrop {
  display: none;
}

/* ── Responsive ──────────────────────────────────────────────── */

/* When TOC is visible, reserve space so centered content doesn't overlap it */
@media (min-width: 1281px) {
  .cobalt-main {
    padding-right: 268px;
  }
}

/* Tablet: narrower content padding */
@media (max-width: 1024px) {
  .cobalt-content {
    padding: 36px 32px 64px;
  }
}

/* Mobile: sidebar becomes overlay, content goes full-width */
@media (max-width: 768px) {
  .topbar-hamburger {
    display: flex;
  }

  .cobalt-topbar {
    padding: 0 16px;
  }

  .brand-tag {
    display: none;
  }

  .cobalt-main {
    margin-left: 0;
  }

  .cobalt-content {
    padding: 24px 16px 64px;
    max-width: 100%;
  }

  /* Step each heading down one role on mobile for a denser hierarchy. */
  .cobalt-article h1 {
    font-size: var(--co-typography-title-size);
    letter-spacing: var(--co-typography-title-tracking);
    line-height: var(--co-typography-title-line-height);
  }

  .cobalt-article h2 {
    font-size: var(--co-typography-subtitle-size);
    letter-spacing: var(--co-typography-subtitle-tracking);
    line-height: var(--co-typography-subtitle-line-height);
  }

  .cobalt-article h3 {
    font-size: var(--co-typography-body-lg-size);
    letter-spacing: var(--co-typography-body-lg-tracking);
    line-height: var(--co-typography-body-lg-line-height);
  }

  .cobalt-article table {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .cobalt-article pre {
    margin: 12px -16px 20px;
    border-radius: 0;
  }

  /* Sidebar as overlay */
  .sidebar-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 60;
    background: color-mix(in srgb, var(--co-color-surface-overlay) 50%, transparent);
    backdrop-filter: blur(4px);
  }
}
</style>
