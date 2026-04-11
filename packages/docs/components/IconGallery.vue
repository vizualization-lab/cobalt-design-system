<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { iconNames, getIcon, customIconNames, overrideIconNames } from '@cobalt/icons';

const pngSizes = [16, 20, 24, 32, 48, 96, 192];

const searchQuery = ref('');
const fillToggle = ref(false);
const selectedIcon = ref<string | null>(null);
const visibleCount = ref(120);
const sentinelRef = ref<HTMLElement | null>(null);
const detailRef = ref<HTMLElement | null>(null);
const pngSize = ref(32);
const activeSnippetTab = ref(0);

const snippetTabs = ['Web Component', 'React', 'Vue', 'Angular'];

const filteredIcons = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return iconNames;
  const terms = q.split(/\s+/);
  return iconNames.filter((name) => {
    return terms.every((term) => name.includes(term));
  });
});

const visibleIcons = computed(() => filteredIcons.value.slice(0, visibleCount.value));
const totalCount = computed(() => filteredIcons.value.length);

function getSvgForGrid(name: string): string {
  const content = getIcon(name, 'rounded', fillToggle.value);
  if (!content) return '';
  const viewBox =
    customIconNames.has(name) || overrideIconNames.has(name) ? '0 0 24 24' : '0 -960 960 960';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="${viewBox}" fill="currentColor">${content}</svg>`;
}

function getRenderedSvg(size: number, fill?: boolean): string {
  if (!selectedIcon.value) return '';
  const content = getIcon(selectedIcon.value, 'rounded', fill ?? fillToggle.value);
  if (!content) return '';
  const viewBox =
    customIconNames.has(selectedIcon.value) || overrideIconNames.has(selectedIcon.value)
      ? '0 0 24 24'
      : '0 -960 960 960';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}" fill="currentColor">${content}</svg>`;
}

// Infinite scroll
let observer: IntersectionObserver | null = null;

const isMobile = ref(false);

function checkMobile() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting && visibleCount.value < filteredIcons.value.length) {
        visibleCount.value += 60;
      }
    },
    { rootMargin: '200px' },
  );
  if (sentinelRef.value) observer.observe(sentinelRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
  window.removeEventListener('resize', checkMobile);
  document.body.style.overflow = '';
});

watch(sentinelRef, (el) => {
  if (el && observer) observer.observe(el);
});

// Reset visible count on filter change
watch([searchQuery, fillToggle], () => {
  visibleCount.value = 120;
});

function selectIcon(name: string) {
  selectedIcon.value = name;
  if (isMobile.value) {
    document.body.style.overflow = 'hidden';
  }
}

function closeDetail() {
  selectedIcon.value = null;
  document.body.style.overflow = '';
}

const copyLabel = ref('Copy SVG');

async function copySvg() {
  if (!selectedIcon.value) return;
  const svg = getRenderedSvg(24, fillToggle.value);
  if (svg) {
    await navigator.clipboard.writeText(svg);
    copyLabel.value = 'Copied!';
    setTimeout(() => (copyLabel.value = 'Copy SVG'), 1500);
  }
}

async function downloadPng() {
  if (!selectedIcon.value) return;
  const size = pngSize.value;
  const svg = getRenderedSvg(size, fillToggle.value);
  if (!svg) return;

  const canvas = document.createElement('canvas');
  const scale = 2;
  canvas.width = size * scale;
  canvas.height = size * scale;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(scale, scale);

  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const img = new Image();

  img.onload = () => {
    ctx.drawImage(img, 0, 0, size, size);
    URL.revokeObjectURL(url);

    const link = document.createElement('a');
    const fillSuffix = fillToggle.value ? '-fill' : '';
    link.download = `${selectedIcon.value!}-rounded${fillSuffix}-${size}px.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  img.src = url;
}

function webComponentSnippet(name: string): string {
  const fillAttr = fillToggle.value ? ' fill' : '';
  return `<co-icon name="${name}"${fillAttr}></co-icon>`;
}

function reactSnippet(name: string): string {
  const fillProp = fillToggle.value ? ' fill' : '';
  return `<CoIcon name="${name}"${fillProp} />`;
}

function vueSnippet(name: string): string {
  const fillProp = fillToggle.value ? ' fill' : '';
  return `<CoIcon name="${name}"${fillProp} />`;
}

function angularSnippet(name: string): string {
  const fillAttr = fillToggle.value ? ' fill' : '';
  return `<co-icon name="${name}"${fillAttr}></co-icon>`;
}

function getSnippet(name: string, tabIndex: number): string {
  switch (tabIndex) {
    case 0:
      return webComponentSnippet(name);
    case 1:
      return reactSnippet(name);
    case 2:
      return vueSnippet(name);
    case 3:
      return angularSnippet(name);
    default:
      return '';
  }
}
</script>

<template>
  <div class="icon-gallery">
    <!-- Toolbar -->
    <div class="gallery-toolbar">
      <div class="search-wrap">
        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="Search icons…"
          aria-label="Search icons"
        />
        <span class="search-count">{{ totalCount }} of {{ iconNames.length }}</span>
      </div>
      <label class="fill-toggle">
        <input v-model="fillToggle" type="checkbox" class="fill-checkbox" />
        <span class="fill-label">Fill</span>
      </label>
    </div>

    <!-- Main content -->
    <div class="gallery-content" :class="{ 'has-detail': selectedIcon && !isMobile }">
      <!-- Icon grid -->
      <div class="icon-grid-wrap">
        <div class="icon-grid">
          <button
            v-for="name in visibleIcons"
            :key="name"
            class="icon-cell"
            :class="{ selected: selectedIcon === name }"
            :title="name"
            @click="selectIcon(name)"
          >
            <span class="icon-svg" v-html="getSvgForGrid(name)" />
            <span class="icon-label">{{ name }}</span>
          </button>
        </div>
        <div ref="sentinelRef" class="sentinel" />
        <p v-if="filteredIcons.length === 0" class="no-results">
          No icons match "<strong>{{ searchQuery }}</strong
          >"
        </p>
      </div>

      <!-- Detail panel — desktop sidebar (stays in grid, scoped styles apply) -->
      <Transition v-if="!isMobile" name="detail-panel">
        <div v-if="selectedIcon" ref="detailRef" class="detail-panel">
          <div class="detail-header">
            <h3 class="detail-title">{{ selectedIcon }}</h3>
            <button class="detail-close" aria-label="Close" @click="closeDetail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </button>
          </div>
          <div class="detail-section">
            <div class="detail-label">Preview</div>
            <div class="detail-sizes">
              <span
                v-for="s in [16, 20, 24, 32, 48]"
                :key="s"
                class="size-preview"
                :title="`${s}px`"
              >
                <span v-html="getRenderedSvg(s)" />
                <span class="size-label">{{ s }}</span>
              </span>
            </div>
          </div>
          <div class="detail-section">
            <div class="detail-label">Export</div>
            <div class="detail-actions">
              <button class="action-btn" @click="copySvg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                  />
                </svg>
                {{ copyLabel }}
              </button>
              <div class="png-export">
                <select v-model="pngSize" class="size-select" aria-label="PNG size">
                  <option v-for="s in pngSizes" :key="s" :value="s">{{ s }}px</option>
                </select>
                <button class="action-btn" @click="downloadPng">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                  Download PNG
                </button>
              </div>
            </div>
          </div>
          <div class="detail-section">
            <div class="detail-label">Code</div>
            <div class="code-snippets">
              <div class="snippet-tabs">
                <button
                  v-for="(tab, i) in snippetTabs"
                  :key="tab"
                  class="snippet-tab"
                  :class="{ active: activeSnippetTab === i }"
                  @click="activeSnippetTab = i"
                >
                  {{ tab }}
                </button>
              </div>
              <div class="snippet">
                <code class="snippet-code">{{ getSnippet(selectedIcon, activeSnippetTab) }}</code>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Mobile bottom sheet — teleported to body to escape VitePress transform containing block -->
    <Teleport to="body">
      <Transition name="ig-backdrop">
        <div v-if="isMobile && selectedIcon" class="ig-detail-backdrop" @click.self="closeDetail" />
      </Transition>
      <Transition name="ig-sheet">
        <div v-if="isMobile && selectedIcon" ref="detailRef" class="ig-detail-sheet">
          <div class="ig-sheet-header">
            <h3 class="ig-sheet-title">{{ selectedIcon }}</h3>
            <button class="ig-sheet-close" aria-label="Close" @click="closeDetail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </button>
          </div>
          <div class="ig-sheet-section">
            <div class="ig-sheet-label">Preview</div>
            <div class="ig-sheet-sizes">
              <span
                v-for="s in [16, 20, 24, 32, 48]"
                :key="s"
                class="ig-size-preview"
                :title="`${s}px`"
              >
                <span v-html="getRenderedSvg(s)" />
                <span class="ig-size-label">{{ s }}</span>
              </span>
            </div>
          </div>
          <div class="ig-sheet-section">
            <div class="ig-sheet-label">Export</div>
            <div class="ig-sheet-actions">
              <button class="ig-action-btn" @click="copySvg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                  />
                </svg>
                {{ copyLabel }}
              </button>
              <div class="ig-png-export">
                <select v-model="pngSize" class="ig-size-select" aria-label="PNG size">
                  <option v-for="s in pngSizes" :key="s" :value="s">{{ s }}px</option>
                </select>
                <button class="ig-action-btn" @click="downloadPng">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                  Download PNG
                </button>
              </div>
            </div>
          </div>
          <div class="ig-sheet-section">
            <div class="ig-sheet-label">Code</div>
            <div class="ig-code-snippets">
              <div class="ig-snippet-tabs">
                <button
                  v-for="(tab, i) in snippetTabs"
                  :key="tab"
                  class="ig-snippet-tab"
                  :class="{ active: activeSnippetTab === i }"
                  @click="activeSnippetTab = i"
                >
                  {{ tab }}
                </button>
              </div>
              <div class="ig-snippet">
                <code class="ig-snippet-code">{{
                  getSnippet(selectedIcon, activeSnippetTab)
                }}</code>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.icon-gallery {
  --gallery-radius: 10px;
  --gallery-border: var(--vp-c-divider);
  --gallery-surface: var(--vp-c-bg-soft);
  --gallery-text: var(--vp-c-text-1);
  --gallery-text-secondary: var(--vp-c-text-2);
  --gallery-text-muted: var(--vp-c-text-3);
  --gallery-accent: var(--vp-c-brand-1);
  --gallery-accent-soft: var(--vp-c-brand-soft);
  font-size: 0.875rem;
}

/* Toolbar */
.gallery-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
}

.search-wrap {
  flex: 1;
  min-width: 220px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: var(--gallery-text-muted);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 8px 80px 8px 36px;
  border: 1px solid var(--gallery-border);
  border-radius: var(--gallery-radius);
  background: var(--gallery-surface);
  color: var(--gallery-text);
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.15s;
}

.search-input:focus {
  border-color: var(--gallery-accent);
}

.search-input::placeholder {
  color: var(--gallery-text-muted);
}

.search-count {
  position: absolute;
  right: 12px;
  font-size: 0.75rem;
  color: var(--gallery-text-muted);
  pointer-events: none;
  white-space: nowrap;
}

.weight-selector {
  display: flex;
  gap: 2px;
  border: 1px solid var(--gallery-border);
  border-radius: var(--gallery-radius);
  padding: 2px;
  background: var(--gallery-surface);
}

.weight-btn {
  padding: 6px 10px;
  border: none;
  border-radius: calc(var(--gallery-radius) - 2px);
  background: transparent;
  color: var(--gallery-text-secondary);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  text-transform: capitalize;
  transition: all 0.15s;
  white-space: nowrap;
}

.weight-btn:hover {
  color: var(--gallery-text);
  background: var(--gallery-accent-soft);
}

.weight-btn.active {
  background: var(--gallery-accent);
  color: #fff;
}

.fill-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border: 1px solid var(--gallery-border);
  border-radius: var(--gallery-radius);
  background: var(--gallery-surface);
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--gallery-text-secondary);
  white-space: nowrap;
  transition: all 0.15s;
}

.fill-toggle:hover {
  color: var(--gallery-text);
  background: var(--gallery-accent-soft);
}

.fill-checkbox {
  accent-color: var(--gallery-accent);
  cursor: pointer;
}

.fill-label {
  user-select: none;
}

/* Content layout */
.gallery-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  transition: grid-template-columns 0.2s;
}

.gallery-content.has-detail {
  grid-template-columns: 1fr 320px;
}

/* Icon grid */
.icon-grid-wrap {
  min-width: 0;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 2px;
}

.icon-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 6px 10px;
  border: 1px solid transparent;
  border-radius: var(--gallery-radius);
  background: none;
  color: var(--gallery-text);
  cursor: pointer;
  transition: all 0.12s;
  text-align: center;
}

.icon-cell:hover {
  background: var(--gallery-accent-soft);
  border-color: var(--gallery-border);
}

.icon-cell.selected {
  background: var(--gallery-accent-soft);
  border-color: var(--gallery-accent);
}

.icon-svg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--vp-c-text-1, var(--gallery-text));
}

.icon-svg :deep(svg) {
  width: 24px;
  height: 24px;
}

.icon-label {
  font-size: 0.68rem;
  color: var(--gallery-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  line-height: 1.3;
}

.sentinel {
  height: 1px;
}

.no-results {
  text-align: center;
  padding: 48px 16px;
  color: var(--gallery-text-muted);
}

/* Detail panel — desktop sidebar */
.detail-panel {
  border: 1px solid var(--gallery-border);
  border-radius: var(--gallery-radius);
  background: var(--gallery-surface);
  padding: 20px;
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.detail-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--gallery-text);
}

.detail-close {
  background: none;
  border: none;
  color: var(--gallery-text-muted);
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  transition: all 0.12s;
}

.detail-close:hover {
  color: var(--gallery-text);
  background: var(--gallery-accent-soft);
}

.detail-section {
  margin-bottom: 18px;
}

.detail-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--gallery-text-muted);
  margin-bottom: 8px;
}

/* Size previews */
.detail-sizes {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
}

.size-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--gallery-text);
}

.size-preview :deep(svg) {
  display: block;
}

.size-label {
  font-size: 0.65rem;
  color: var(--gallery-text-muted);
}

/* Style comparison */
.detail-weights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}

.weight-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 4px 6px;
  border: 1px solid var(--gallery-border);
  border-radius: 8px;
  background: transparent;
  color: var(--gallery-text);
  cursor: pointer;
  transition: all 0.12s;
}

.weight-preview :deep(svg) {
  width: 32px;
  height: 32px;
}

.weight-preview:hover {
  background: var(--gallery-accent-soft);
}

.weight-preview.active {
  border-color: var(--gallery-accent);
  background: var(--gallery-accent-soft);
}

.weight-label {
  font-size: 0.65rem;
  color: var(--gallery-text-muted);
  text-transform: capitalize;
}

/* Actions */
.detail-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border: 1px solid var(--gallery-border);
  border-radius: 8px;
  background: transparent;
  color: var(--gallery-text);
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.12s;
  white-space: nowrap;
}

.action-btn:hover {
  background: var(--gallery-accent-soft);
  border-color: var(--gallery-accent);
}

.png-export {
  display: flex;
  gap: 6px;
  align-items: center;
}

.size-select {
  padding: 7px 8px;
  border: 1px solid var(--gallery-border);
  border-radius: 8px;
  background: var(--gallery-surface);
  color: var(--gallery-text);
  font-size: 0.78rem;
  outline: none;
  cursor: pointer;
}

.size-select:focus {
  border-color: var(--gallery-accent);
}

/* Code snippets */
.code-snippets {
  border: 1px solid var(--gallery-border);
  border-radius: 8px;
  overflow: hidden;
}

.snippet-tabs {
  display: flex;
  border-bottom: 1px solid var(--gallery-border);
  background: var(--vp-c-bg-soft);
}

.snippet-tab {
  flex: 1;
  padding: 5px 6px;
  border: none;
  background: transparent;
  color: var(--gallery-text-muted);
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: all 0.12s;
  white-space: nowrap;
}

.snippet-tab:hover {
  color: var(--gallery-text);
}

.snippet-tab.active {
  color: var(--gallery-accent);
  box-shadow: inset 0 -2px 0 var(--gallery-accent);
}

.snippet {
  overflow: hidden;
}

.snippet-code {
  display: block;
  padding: 8px 10px;
  font-size: 0.72rem;
  line-height: 1.5;
  font-family: var(--co-font-mono);
  color: var(--gallery-text);
  overflow-x: auto;
  white-space: pre;
  background: none;
  border: none;
}

/* Transitions — desktop detail panel */
.detail-panel-enter-active,
.detail-panel-leave-active {
  transition:
    opacity 0.15s,
    transform 0.15s;
}
.detail-panel-enter-from,
.detail-panel-leave-to {
  opacity: 0;
  transform: translateX(12px);
}

@media (max-width: 767px) {
  .gallery-toolbar {
    flex-direction: column;
  }

  .weight-selector {
    flex-wrap: wrap;
  }

  .icon-grid {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
}
</style>

<!-- Unscoped styles for mobile bottom sheet (teleported to body, outside scoped DOM) -->
<style>
.ig-detail-backdrop {
  position: fixed;
  inset: 0;
  background: color-mix(in srgb, var(--co-color-surface-overlay) 40%, transparent);
  z-index: 100;
}

.ig-detail-sheet {
  --ig-radius: 10px;
  --ig-border: var(--vp-c-divider);
  --ig-surface: var(--vp-c-bg);
  --ig-text: var(--vp-c-text-1);
  --ig-text-muted: var(--vp-c-text-3);
  --ig-accent: var(--vp-c-brand-1);
  --ig-accent-soft: var(--vp-c-brand-soft);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 70vh;
  border-radius: var(--ig-radius) var(--ig-radius) 0 0;
  border: 1px solid var(--ig-border);
  border-bottom: none;
  background: var(--ig-surface);
  padding: 20px;
  overflow-y: auto;
  z-index: 101;
  font-size: 0.875rem;
  color: var(--ig-text);
}

.ig-sheet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.ig-sheet-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--ig-text);
}

.ig-sheet-close {
  background: none;
  border: none;
  color: var(--ig-text-muted);
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  transition: all 0.12s;
}

.ig-sheet-close:hover {
  color: var(--ig-text);
  background: var(--ig-accent-soft);
}

.ig-sheet-section {
  margin-bottom: 18px;
}

.ig-sheet-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ig-text-muted);
  margin-bottom: 8px;
}

.ig-sheet-sizes {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
}

.ig-size-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--ig-text);
}

.ig-size-preview svg {
  display: block;
}

.ig-size-label {
  font-size: 0.65rem;
  color: var(--ig-text-muted);
}

.ig-sheet-weights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}

.ig-weight-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 4px 6px;
  border: 1px solid var(--ig-border);
  border-radius: 8px;
  background: transparent;
  color: var(--ig-text);
  cursor: pointer;
  transition: all 0.12s;
}

.ig-weight-preview svg {
  width: 32px;
  height: 32px;
}

.ig-weight-preview:hover {
  background: var(--ig-accent-soft);
}

.ig-weight-preview.active {
  border-color: var(--ig-accent);
  background: var(--ig-accent-soft);
}

.ig-weight-label {
  font-size: 0.65rem;
  color: var(--ig-text-muted);
  text-transform: capitalize;
}

.ig-sheet-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ig-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border: 1px solid var(--ig-border);
  border-radius: 8px;
  background: transparent;
  color: var(--ig-text);
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.12s;
  white-space: nowrap;
}

.ig-action-btn:hover {
  background: var(--ig-accent-soft);
  border-color: var(--ig-accent);
}

.ig-png-export {
  display: flex;
  gap: 6px;
  align-items: center;
}

.ig-size-select {
  padding: 7px 8px;
  border: 1px solid var(--ig-border);
  border-radius: 8px;
  background: var(--ig-surface);
  color: var(--ig-text);
  font-size: 0.78rem;
  outline: none;
  cursor: pointer;
}

.ig-size-select:focus {
  border-color: var(--ig-accent);
}

.ig-code-snippets {
  border: 1px solid var(--ig-border);
  border-radius: 8px;
  overflow: hidden;
}

.ig-snippet-tabs {
  display: flex;
  border-bottom: 1px solid var(--ig-border);
  background: var(--vp-c-bg-soft);
}

.ig-snippet-tab {
  flex: 1;
  padding: 5px 6px;
  border: none;
  background: transparent;
  color: var(--ig-text-muted);
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: all 0.12s;
  white-space: nowrap;
}

.ig-snippet-tab:hover {
  color: var(--ig-text);
}

.ig-snippet-tab.active {
  color: var(--ig-accent);
  box-shadow: inset 0 -2px 0 var(--ig-accent);
}

.ig-snippet {
  overflow: hidden;
}

.ig-snippet-code {
  display: block;
  padding: 8px 10px;
  font-size: 0.72rem;
  line-height: 1.5;
  font-family: var(--co-font-mono);
  color: var(--ig-text);
  overflow-x: auto;
  white-space: pre;
  background: none;
  border: none;
}

/* Transitions — backdrop */
.ig-backdrop-enter-active,
.ig-backdrop-leave-active {
  transition: opacity 0.2s;
}
.ig-backdrop-enter-from,
.ig-backdrop-leave-to {
  opacity: 0;
}

/* Transitions — bottom sheet */
.ig-sheet-enter-active,
.ig-sheet-leave-active {
  transition:
    opacity 0.2s,
    transform 0.25s ease-out;
}
.ig-sheet-enter-from,
.ig-sheet-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
