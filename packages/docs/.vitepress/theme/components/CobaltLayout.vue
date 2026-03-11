<script setup lang="ts">
import { useData, useRoute } from 'vitepress';
import { ref, onMounted, watch } from 'vue';
import CobaltSidebar from './CobaltSidebar.vue';
import CobaltHome from './CobaltHome.vue';

const { frontmatter } = useData();
const route = useRoute();

const isDark = ref(true);

onMounted(() => {
  const saved = localStorage.getItem('cobalt-theme');
  if (saved === 'light') {
    isDark.value = false;
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

function toggleTheme() {
  isDark.value = !isDark.value;
  const theme = isDark.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('cobalt-theme', theme);
}
</script>

<template>
  <div class="cobalt-shell">
    <!-- Ambient background grain -->
    <div class="cobalt-grain" aria-hidden="true"></div>

    <!-- Top bar -->
    <header class="cobalt-topbar">
      <div class="topbar-brand">
        <div class="brand-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="2" width="24" height="24" rx="6" fill="url(#cobalt-gem)" />
            <path
              d="M14 7L20 11V17L14 21L8 17V11L14 7Z"
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M14 7V21M8 11L20 17M20 11L8 17"
              stroke="rgba(255,255,255,0.3)"
              stroke-width="1"
            />
            <defs>
              <linearGradient id="cobalt-gem" x1="2" y1="2" x2="26" y2="26">
                <stop stop-color="#2563eb" />
                <stop offset="1" stop-color="#1e3a8a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span class="brand-name">Cobalt</span>
        <span class="brand-tag">Design System</span>
      </div>
      <nav class="topbar-nav">
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
        <a href="https://github.com" class="topbar-link" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
        </a>
      </nav>
    </header>

    <div class="cobalt-body">
      <!-- M3-style sidebar -->
      <CobaltSidebar />

      <!-- Main content -->
      <main class="cobalt-main">
        <div class="cobalt-content" v-if="frontmatter.layout === 'home'">
          <CobaltHome />
        </div>
        <article class="cobalt-content cobalt-article" v-else>
          <Content />
        </article>
      </main>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap');

/* ── Reset & Globals ──────────────────────────────────────────── */
:root {
  /* Cobalt palette — Dark (default) */
  --co-midnight: #0a1628;
  --co-deep: #0f1d32;
  --co-navy: #152238;
  --co-slate: #1b2d4a;
  --co-steel: #243b5c;
  --co-blue-900: #1e3a8a;
  --co-blue-700: #1d4ed8;
  --co-blue-600: #2563eb;
  --co-blue-500: #3b82f6;
  --co-blue-400: #60a5fa;
  --co-blue-300: #93c5fd;
  --co-blue-200: #bfdbfe;
  --co-blue-100: #dbeafe;
  --co-electric: #4f8fff;
  --co-glow: #6ba1ff;
  --co-shimmer: rgba(99, 155, 255, 0.08);
  --co-text-primary: #e8edf5;
  --co-text-secondary: #8899b4;
  --co-text-muted: #5a6d8a;
  --co-border: rgba(99, 155, 255, 0.1);
  --co-border-strong: rgba(99, 155, 255, 0.18);
  --co-surface: rgba(15, 29, 50, 0.6);
  --co-surface-raised: rgba(21, 34, 56, 0.8);

  /* Semantic colors for themed alpha values */
  --co-topbar-bg: linear-gradient(180deg, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.85) 100%);
  --co-sidebar-bg: linear-gradient(180deg, rgba(10, 22, 40, 0.7) 0%, rgba(10, 22, 40, 0.5) 100%);
  --co-blue-alpha-8: rgba(37, 99, 235, 0.08);
  --co-blue-alpha-10: rgba(37, 99, 235, 0.1);
  --co-blue-alpha-12: rgba(37, 99, 235, 0.12);
  --co-blue-alpha-15: rgba(37, 99, 235, 0.15);
  --co-blue-alpha-18: rgba(37, 99, 235, 0.18);
  --co-blue-alpha-20: rgba(37, 99, 235, 0.2);
  --co-blue-alpha-25: rgba(37, 99, 235, 0.25);
  --co-blue-alpha-40: rgba(37, 99, 235, 0.4);
  --co-blue-alpha-50: rgba(37, 99, 235, 0.5);
  --co-code-bg: rgba(37, 99, 235, 0.1);
  --co-code-border: rgba(37, 99, 235, 0.12);
  --co-code-color: var(--co-blue-300);
  --co-inline-link: var(--co-blue-400);
  --co-h3-color: var(--co-blue-300);
  --co-selection-bg: rgba(37, 99, 235, 0.3);
  --co-selection-color: white;
  --co-grain-opacity: 0.035;
  --co-icon-glow: drop-shadow(0 0 8px rgba(37, 99, 235, 0.3));
  --co-hero-glow: radial-gradient(
    ellipse at center,
    rgba(37, 99, 235, 0.12) 0%,
    rgba(37, 99, 235, 0.04) 40%,
    transparent 70%
  );
  --co-scrollbar-thumb: var(--co-steel);
  --co-scrollbar-hover: var(--co-blue-600);

  /* Typography */
  --co-font-body: 'DM Sans', system-ui, sans-serif;
  --co-font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Layout */
  --co-sidebar-width: 280px;
  --co-topbar-height: 56px;

  /* Transitions */
  --co-ease: cubic-bezier(0.2, 0, 0, 1);
  --co-duration: 200ms;
}

/* ── Light Mode ──────────────────────────────────────────────── */
[data-theme='light'] {
  --co-midnight: #f8fafd;
  --co-deep: #f1f5fb;
  --co-navy: #e8eef6;
  --co-slate: #dce4f0;
  --co-steel: #c5d1e3;
  --co-shimmer: rgba(37, 99, 235, 0.06);
  --co-text-primary: #0f1d32;
  --co-text-secondary: #3d5274;
  --co-text-muted: #6b82a6;
  --co-border: rgba(37, 99, 235, 0.1);
  --co-border-strong: rgba(37, 99, 235, 0.16);
  --co-surface: rgba(226, 234, 248, 0.6);
  --co-surface-raised: rgba(240, 245, 253, 0.9);
  --co-topbar-bg: linear-gradient(
    180deg,
    rgba(248, 250, 253, 0.95) 0%,
    rgba(248, 250, 253, 0.88) 100%
  );
  --co-sidebar-bg: linear-gradient(
    180deg,
    rgba(241, 245, 251, 0.85) 0%,
    rgba(248, 250, 253, 0.7) 100%
  );
  --co-blue-alpha-8: rgba(37, 99, 235, 0.06);
  --co-blue-alpha-10: rgba(37, 99, 235, 0.08);
  --co-blue-alpha-12: rgba(37, 99, 235, 0.08);
  --co-blue-alpha-15: rgba(37, 99, 235, 0.1);
  --co-blue-alpha-18: rgba(37, 99, 235, 0.12);
  --co-blue-alpha-20: rgba(37, 99, 235, 0.14);
  --co-blue-alpha-25: rgba(37, 99, 235, 0.18);
  --co-blue-alpha-40: rgba(37, 99, 235, 0.3);
  --co-blue-alpha-50: rgba(37, 99, 235, 0.4);
  --co-code-bg: rgba(37, 99, 235, 0.07);
  --co-code-border: rgba(37, 99, 235, 0.1);
  --co-code-color: var(--co-blue-700);
  --co-inline-link: var(--co-blue-600);
  --co-h3-color: var(--co-blue-700);
  --co-selection-bg: rgba(37, 99, 235, 0.2);
  --co-selection-color: #0f1d32;
  --co-grain-opacity: 0.02;
  --co-icon-glow: drop-shadow(0 0 6px rgba(37, 99, 235, 0.15));
  --co-hero-glow: radial-gradient(
    ellipse at center,
    rgba(37, 99, 235, 0.08) 0%,
    rgba(37, 99, 235, 0.02) 40%,
    transparent 70%
  );
  --co-scrollbar-thumb: var(--co-slate);
  --co-scrollbar-hover: var(--co-blue-500);
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
  background: var(--co-topbar-bg);
  backdrop-filter: blur(16px) saturate(1.4);
  border-bottom: 1px solid var(--co-border);
}

.topbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-icon {
  display: flex;
  filter: var(--co-icon-glow);
}

.brand-name {
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--co-text-primary);
}

.brand-tag {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--co-text-muted);
  padding-left: 10px;
  border-left: 1px solid var(--co-border-strong);
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
  color: var(--co-text-secondary);
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
  margin-left: var(--co-sidebar-width);
  min-width: 0;
}

.cobalt-content {
  max-width: 820px;
  margin: 0 auto;
  padding: 48px 56px 80px;
}

/* ── Article Styles ─────────────────────────────────────────── */
.cobalt-article {
  animation: contentFadeIn 0.4s var(--co-ease) both;
}

@keyframes contentFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cobalt-article h1 {
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.15;
  color: var(--co-text-primary);
  margin-bottom: 8px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--co-border);
}

.cobalt-article h2 {
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.02em;
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
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--co-h3-color);
  margin-top: 36px;
  margin-bottom: 12px;
}

.cobalt-article p {
  color: var(--co-text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
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
  background: var(--co-deep) !important;
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
  font-size: 0.84rem;
  color: var(--co-text-secondary);
  line-height: 1.75;
}

/* Table styles */
.cobalt-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 24px;
  font-size: 0.88rem;
}

.cobalt-article thead th {
  text-align: left;
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--co-text-muted);
  padding: 10px 16px;
  border-bottom: 1px solid var(--co-border-strong);
  background: var(--co-surface);
}

.cobalt-article thead th:first-child {
  border-radius: 8px 0 0 0;
}

.cobalt-article thead th:last-child {
  border-radius: 0 8px 0 0;
}

.cobalt-article tbody td {
  padding: 10px 16px;
  border-bottom: 1px solid var(--co-border);
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
  color: var(--co-blue-200);
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
  font-size: 0.95rem;
  margin-bottom: 6px;
  line-height: 1.65;
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

/* Demo containers — inline component previews */
.cobalt-article .client-only-wrapper,
.cobalt-article client-only {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  padding: 24px;
  margin: 12px 0 20px;
  background: var(--co-surface);
  border: 1px solid var(--co-border);
  border-radius: 12px;
}

/* Override VitePress defaults that leak through */
.vp-doc a {
  color: var(--co-inline-link) !important;
  text-decoration: none !important;
}

.vp-doc div[class*='language-'] {
  background: var(--co-deep) !important;
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
  color: var(--co-text-secondary) !important;
}

.vp-doc div[class*='language-'] span.lang {
  color: var(--co-text-muted) !important;
  font-size: 0.7rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
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
</style>
