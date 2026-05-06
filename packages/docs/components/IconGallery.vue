<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { customIconNames, getIcon, iconNames, overrideIconNames } from '@cobalt/icons';

const pngSizes = [16, 20, 24, 32, 48, 96, 192];
const snippetTabs = ['Web Component', 'React', 'Vue', 'Angular'];
const browseBuckets = ['0-9', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
const iconCountFormatter = new Intl.NumberFormat('en-US');

const searchQuery = ref('');
const fillToggle = ref(false);
const activeBucket = ref<string | null>(null);
const selectedIcon = ref<string | null>(null);
const resultsPaneRef = ref<HTMLElement | null>(null);
const pngSize = ref(32);
const activeSnippetTab = ref(0);
const isMobile = ref(false);
const copyLabel = ref('Copy SVG');

const trimmedSearchQuery = computed(() => searchQuery.value.toLowerCase().trim());
const isSearching = computed(() => trimmedSearchQuery.value.length > 0);
const totalIconCount = iconNames.length;

function bucketForIcon(name: string): string {
  const first = name[0]?.toUpperCase() ?? '';
  if (first >= 'A' && first <= 'Z') return first;
  return '0-9';
}

const bucketedIcons = computed(() => {
  const buckets = new Map<string, string[]>();
  for (const bucket of browseBuckets) {
    buckets.set(bucket, []);
  }

  for (const name of iconNames) {
    buckets.get(bucketForIcon(name))?.push(name);
  }

  return buckets;
});

const filteredIcons = computed(() => {
  if (isSearching.value) {
    const terms = trimmedSearchQuery.value.split(/\s+/);
    return iconNames.filter((name) => terms.every((term) => name.includes(term)));
  }

  if (activeBucket.value) {
    return bucketedIcons.value.get(activeBucket.value) ?? [];
  }

  return [];
});

const showPromptState = computed(() => !isSearching.value && activeBucket.value === null);
const totalCount = computed(() => filteredIcons.value.length);

const resultsSummary = computed(() => {
  if (isSearching.value) {
    const label = totalCount.value === 1 ? 'match' : 'matches';
    return `${iconCountFormatter.format(totalCount.value)} ${label}`;
  }

  if (activeBucket.value) {
    const label = totalCount.value === 1 ? 'icon' : 'icons';
    return `${iconCountFormatter.format(totalCount.value)} ${label} in ${activeBucket.value}`;
  }

  return `${iconCountFormatter.format(totalIconCount)} total icons`;
});

const searchModeHint = computed(() => {
  if (!isSearching.value) return '';
  if (activeBucket.value) {
    return `Search is matching across all icons. Clear the field to return to the ${activeBucket.value} bucket.`;
  }

  return 'Search is matching across all icons. Clear the field to browse by starting character.';
});

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

function checkMobile() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
  document.body.style.overflow = '';
});

watch(isMobile, (mobile) => {
  document.body.style.overflow = mobile && selectedIcon.value ? 'hidden' : '';
});

watch([searchQuery, activeBucket], async () => {
  await nextTick();
  resultsPaneRef.value?.scrollTo({ top: 0, behavior: 'auto' });
});

watch(filteredIcons, (icons) => {
  if (selectedIcon.value && !icons.includes(selectedIcon.value)) {
    closeDetail();
  }
});

function selectBucket(bucket: string) {
  if (isSearching.value) {
    searchQuery.value = '';
    activeBucket.value = bucket;
    return;
  }

  activeBucket.value = activeBucket.value === bucket ? null : bucket;
}

function selectIcon(name: string) {
  selectedIcon.value = name;
  activeSnippetTab.value = 0;
  copyLabel.value = 'Copy SVG';

  if (isMobile.value) {
    document.body.style.overflow = 'hidden';
  }
}

function closeDetail() {
  selectedIcon.value = null;
  document.body.style.overflow = '';
}

async function copySvg() {
  if (!selectedIcon.value) return;

  const svg = getRenderedSvg(24, fillToggle.value);
  if (svg) {
    await navigator.clipboard.writeText(svg);
    copyLabel.value = 'Copied!';
    setTimeout(() => {
      copyLabel.value = 'Copy SVG';
    }, 1500);
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
    <div class="gallery-shell">
      <div class="gallery-toolbar">
        <div class="toolbar-top-row">
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
              placeholder="Search all icons…"
              aria-label="Search icons"
            />
          </div>
          <label class="fill-toggle">
            <input v-model="fillToggle" type="checkbox" class="fill-checkbox" />
            <span class="fill-label">Fill</span>
          </label>
        </div>

        <div class="browse-toolbar">
          <div class="browse-header">
            <div>
              <div class="browse-label">Browse by prefix</div>
              <p class="browse-help">Search all icons or jump straight to a starting character.</p>
            </div>
            <span class="browse-summary">{{ resultsSummary }}</span>
          </div>

          <div class="bucket-row" role="toolbar" aria-label="Browse icons by starting character">
            <button
              v-for="bucket in browseBuckets"
              :key="bucket"
              type="button"
              class="bucket-chip"
              :class="{ active: !isSearching && activeBucket === bucket }"
              :aria-pressed="!isSearching && activeBucket === bucket"
              @click="selectBucket(bucket)"
            >
              {{ bucket }}
            </button>
          </div>

          <p v-if="isSearching" class="browse-note">{{ searchModeHint }}</p>
        </div>
      </div>

      <div
        class="gallery-content"
        :class="{ 'is-mobile': isMobile, 'has-detail': selectedIcon && !isMobile }"
      >
        <div class="icon-browser">
          <div ref="resultsPaneRef" class="icon-results">
            <div v-if="showPromptState" class="gallery-empty-state">
              <h3 class="gallery-state-title">Search all icons or browse by starting character</h3>
              <p class="gallery-state-copy">
                The icon library contains {{ iconCountFormatter.format(totalIconCount) }} rounded
                symbols. Type a name like <code>arrow</code> or <code>account</code>, or choose a
                prefix above to browse one slice at a time.
              </p>
            </div>

            <p v-else-if="filteredIcons.length === 0" class="no-results">
              No icons match "<strong>{{ searchQuery }}</strong
              >"
            </p>

            <div v-else class="icon-grid">
              <button
                v-for="name in filteredIcons"
                :key="name"
                type="button"
                class="icon-cell"
                :class="{ selected: selectedIcon === name }"
                :title="name"
                @click="selectIcon(name)"
              >
                <span class="icon-svg" v-html="getSvgForGrid(name)" />
                <span class="icon-label">{{ name }}</span>
              </button>
            </div>
          </div>
        </div>

        <Transition v-if="!isMobile" name="detail-panel">
          <div v-if="selectedIcon" class="detail-slot">
            <div class="detail-panel">
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
                    <code class="snippet-code">{{
                      getSnippet(selectedIcon, activeSnippetTab)
                    }}</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="ig-backdrop">
        <div v-if="isMobile && selectedIcon" class="ig-detail-backdrop" @click.self="closeDetail" />
      </Transition>
      <Transition name="ig-sheet">
        <div v-if="isMobile && selectedIcon" class="ig-detail-sheet">
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
  --gallery-surface-strong: var(--vp-c-bg);
  --gallery-text: var(--vp-c-text-1);
  --gallery-text-secondary: var(--vp-c-text-2);
  --gallery-text-muted: var(--vp-c-text-3);
  --gallery-accent: var(--vp-c-brand-1);
  --gallery-accent-soft: var(--vp-c-brand-soft);
  font-size: 0.875rem;
}

.gallery-shell {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--gallery-border);
  border-radius: 16px;
  background: var(--gallery-surface-strong);
}

.gallery-toolbar {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.toolbar-top-row {
  display: flex;
  gap: 12px;
  align-items: center;
}

.search-wrap {
  flex: 1;
  min-width: 220px;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gallery-text-muted);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 9px 12px 9px 36px;
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

.fill-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid var(--gallery-border);
  border-radius: var(--gallery-radius);
  background: var(--gallery-surface);
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
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

.browse-toolbar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.browse-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: end;
}

.browse-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gallery-text-secondary);
}

.browse-help {
  margin: 4px 0 0;
  color: var(--gallery-text-muted);
  font-size: 0.8rem;
}

.browse-summary {
  color: var(--gallery-text-secondary);
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.bucket-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.bucket-chip {
  min-width: 38px;
  padding: 6px 10px;
  border: 1px solid var(--gallery-border);
  border-radius: 999px;
  background: var(--gallery-surface);
  color: var(--gallery-text-secondary);
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
}

.bucket-chip:hover {
  background: var(--gallery-accent-soft);
  color: var(--gallery-text);
}

.bucket-chip.active {
  background: var(--gallery-accent);
  border-color: var(--gallery-accent);
  color: #fff;
}

.browse-note {
  margin: 0;
  color: var(--gallery-text-muted);
  font-size: 0.78rem;
}

.gallery-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  height: clamp(520px, 68vh, 720px);
}

.gallery-content.has-detail {
  grid-template-columns: minmax(0, 1fr) 320px;
}

.icon-browser,
.detail-slot {
  min-height: 0;
}

.icon-results,
.detail-panel {
  height: 100%;
  min-height: 0;
  border: 1px solid var(--gallery-border);
  border-radius: 14px;
  background: var(--gallery-surface);
}

.icon-results {
  overflow-y: auto;
  padding: 14px;
}

.gallery-empty-state,
.no-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  box-sizing: border-box;
}

.gallery-empty-state {
  align-items: flex-start;
  gap: 10px;
  padding: 24px;
}

.gallery-state-title {
  margin: 0;
  color: var(--gallery-text);
  font-size: 1rem;
  font-weight: 600;
}

.gallery-state-copy {
  margin: 0;
  color: var(--gallery-text-secondary);
  line-height: 1.6;
}

.gallery-state-copy code {
  white-space: nowrap;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 6px;
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

.no-results {
  align-items: center;
  padding: 48px 16px;
  color: var(--gallery-text-muted);
  text-align: center;
}

.detail-panel {
  padding: 20px;
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

@media (max-width: 959px) {
  .gallery-content.has-detail {
    grid-template-columns: minmax(0, 1fr) 280px;
  }
}

@media (max-width: 767px) {
  .gallery-shell {
    padding: 14px;
  }

  .toolbar-top-row,
  .browse-header {
    flex-direction: column;
    align-items: stretch;
  }

  .browse-summary {
    white-space: normal;
  }

  .gallery-content {
    display: block;
    height: auto;
  }

  .icon-results {
    height: min(56vh, 520px);
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
  background: color-mix(in srgb, var(--co-color-surface-static-overlay) 40%, transparent);
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

.ig-backdrop-enter-active,
.ig-backdrop-leave-active {
  transition: opacity 0.16s ease;
}

.ig-backdrop-enter-from,
.ig-backdrop-leave-to {
  opacity: 0;
}

.ig-sheet-enter-active,
.ig-sheet-leave-active {
  transition:
    transform 0.18s ease,
    opacity 0.18s ease;
}

.ig-sheet-enter-from,
.ig-sheet-leave-to {
  transform: translateY(16px);
  opacity: 0;
}
</style>
