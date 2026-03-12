<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { icons as phosphorIcons } from '@phosphor-icons/core';

type Weight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

interface IconEntry {
  name: string;
  pascal_name: string;
  categories: string[];
  tags: string[];
}

const weights: Weight[] = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];
const pngSizes = [16, 20, 24, 32, 48, 96, 192];

const searchQuery = ref('');
const selectedWeight = ref<Weight>('regular');
const selectedIcon = ref<IconEntry | null>(null);
const visibleCount = ref(120);
const sentinelRef = ref<HTMLElement | null>(null);
const detailRef = ref<HTMLElement | null>(null);
const pngSize = ref(32);

// SVG cache: weight -> name -> svg string
const svgCache = new Map<string, Map<string, string>>();

const allIcons: IconEntry[] = phosphorIcons
  .map((icon: any) => ({
    name: icon.name,
    pascal_name: icon.pascal_name,
    categories: icon.categories || [],
    tags: icon.tags || [],
  }))
  .sort((a: IconEntry, b: IconEntry) => a.name.localeCompare(b.name));

const filteredIcons = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return allIcons;
  const terms = q.split(/\s+/);
  return allIcons.filter((icon) => {
    const haystack = [icon.name, ...icon.categories, ...icon.tags].join(' ').toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
});

const visibleIcons = computed(() => filteredIcons.value.slice(0, visibleCount.value));
const totalCount = computed(() => filteredIcons.value.length);

function getSvgSuffix(weight: Weight): string {
  return weight === 'regular' ? '' : `-${weight}`;
}

// Glob all SVG files from @phosphor-icons/core at build time
const svgModules: Record<Weight, Record<string, () => Promise<string>>> = {
  thin: import.meta.glob('../node_modules/@phosphor-icons/core/assets/thin/*.svg', {
    query: '?raw',
    import: 'default',
  }) as any,
  light: import.meta.glob('../node_modules/@phosphor-icons/core/assets/light/*.svg', {
    query: '?raw',
    import: 'default',
  }) as any,
  regular: import.meta.glob('../node_modules/@phosphor-icons/core/assets/regular/*.svg', {
    query: '?raw',
    import: 'default',
  }) as any,
  bold: import.meta.glob('../node_modules/@phosphor-icons/core/assets/bold/*.svg', {
    query: '?raw',
    import: 'default',
  }) as any,
  fill: import.meta.glob('../node_modules/@phosphor-icons/core/assets/fill/*.svg', {
    query: '?raw',
    import: 'default',
  }) as any,
  duotone: import.meta.glob('../node_modules/@phosphor-icons/core/assets/duotone/*.svg', {
    query: '?raw',
    import: 'default',
  }) as any,
};

async function loadSvg(name: string, weight: Weight): Promise<string> {
  const cacheKey = weight;
  if (!svgCache.has(cacheKey)) svgCache.set(cacheKey, new Map());
  const weightCache = svgCache.get(cacheKey)!;
  if (weightCache.has(name)) return weightCache.get(name)!;

  const suffix = getSvgSuffix(weight);
  const modules = svgModules[weight];
  // Find the matching key (path may vary based on resolution)
  const fileName = `${name}${suffix}.svg`;
  const matchingKey = Object.keys(modules).find((k) => k.endsWith(`/${fileName}`));

  if (matchingKey) {
    const svg = await modules[matchingKey]();
    weightCache.set(name, svg);
    return svg;
  }
  return '';
}

// Preload visible SVGs for current weight
const svgMap = ref<Map<string, string>>(new Map());

async function preloadVisible() {
  const icons = visibleIcons.value;
  const weight = selectedWeight.value;
  const newMap = new Map<string, string>();

  // Copy existing cached entries
  for (const icon of icons) {
    const cached = svgCache.get(weight)?.get(icon.name);
    if (cached) newMap.set(icon.name, cached);
  }
  svgMap.value = new Map(newMap);

  // Load missing ones
  const missing = icons.filter((i) => !newMap.has(i.name));
  if (missing.length === 0) return;

  const batchSize = 30;
  for (let i = 0; i < missing.length; i += batchSize) {
    const batch = missing.slice(i, i + batchSize);
    const results = await Promise.all(
      batch.map(async (icon) => {
        const svg = await loadSvg(icon.name, weight);
        return [icon.name, svg] as [string, string];
      }),
    );
    for (const [name, svg] of results) {
      newMap.set(name, svg);
    }
    svgMap.value = new Map(newMap);
  }
}

watch(
  [visibleIcons, selectedWeight],
  () => {
    preloadVisible();
  },
  { immediate: true },
);

// Detail panel SVGs for all weights
const detailSvgs = ref<Map<Weight, string>>(new Map());

async function loadDetailSvgs(name: string) {
  const map = new Map<Weight, string>();
  await Promise.all(
    weights.map(async (w) => {
      const svg = await loadSvg(name, w);
      map.set(w, svg);
    }),
  );
  detailSvgs.value = map;
}

watch(selectedIcon, (icon) => {
  if (icon) loadDetailSvgs(icon.name);
  else detailSvgs.value = new Map();
});

// Infinite scroll
let observer: IntersectionObserver | null = null;

onMounted(() => {
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
});

watch(sentinelRef, (el) => {
  if (el && observer) observer.observe(el);
});

// Reset visible count on filter change
watch([searchQuery, selectedWeight], () => {
  visibleCount.value = 120;
});

function selectIcon(icon: IconEntry) {
  selectedIcon.value = icon;
  nextTick(() => {
    if (detailRef.value && window.innerWidth < 768) {
      detailRef.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

function closeDetail() {
  selectedIcon.value = null;
}

function getRenderedSvg(weight: Weight, size: number): string {
  const raw = detailSvgs.value.get(weight);
  if (!raw) return '';
  // Replace viewBox dimensions but set width/height
  return raw.replace(/<svg/, `<svg width="${size}" height="${size}"`).replace(/\n/g, '');
}

async function copySvg() {
  if (!selectedIcon.value) return;
  const svg = getRenderedSvg(selectedWeight.value, 24);
  if (svg) {
    await navigator.clipboard.writeText(svg);
    copyLabel.value = 'Copied!';
    setTimeout(() => (copyLabel.value = 'Copy SVG'), 1500);
  }
}

const copyLabel = ref('Copy SVG');

async function downloadPng() {
  if (!selectedIcon.value) return;
  const size = pngSize.value;
  const svg = getRenderedSvg(selectedWeight.value, size);
  if (!svg) return;

  const canvas = document.createElement('canvas');
  const scale = 2; // 2x for retina
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
    link.download = `${selectedIcon.value!.name}-${selectedWeight.value}-${size}px.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  img.src = url;
}

function vueSnippet(icon: IconEntry): string {
  return `<Ph${icon.pascal_name} :size="24" weight="${selectedWeight.value}" />`;
}

function reactSnippet(icon: IconEntry): string {
  return `<${icon.pascal_name} size={24} weight="${selectedWeight.value}" />`;
}
</script>

<template>
  <div class="icon-gallery">
    <!-- Toolbar -->
    <div class="gallery-toolbar">
      <div class="search-wrap">
        <svg class="search-icon" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
          <path
            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
          />
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="Search 1,512 icons…"
          aria-label="Search icons"
        />
        <span class="search-count">{{ totalCount }} of {{ allIcons.length }}</span>
      </div>
      <div class="weight-selector">
        <button
          v-for="w in weights"
          :key="w"
          class="weight-btn"
          :class="{ active: selectedWeight === w }"
          @click="selectedWeight = w"
        >
          {{ w }}
        </button>
      </div>
    </div>

    <!-- Main content -->
    <div class="gallery-content" :class="{ 'has-detail': selectedIcon }">
      <!-- Icon grid -->
      <div class="icon-grid-wrap">
        <div class="icon-grid">
          <button
            v-for="icon in visibleIcons"
            :key="icon.name"
            class="icon-cell"
            :class="{ selected: selectedIcon?.name === icon.name }"
            :title="icon.name"
            @click="selectIcon(icon)"
          >
            <span class="icon-svg" v-html="svgMap.get(icon.name) || ''" />
            <span class="icon-label">{{ icon.name }}</span>
          </button>
        </div>
        <div ref="sentinelRef" class="sentinel" />
        <p v-if="filteredIcons.length === 0" class="no-results">
          No icons match "<strong>{{ searchQuery }}</strong
          >"
        </p>
      </div>

      <!-- Detail panel -->
      <Transition name="detail">
        <div v-if="selectedIcon" ref="detailRef" class="detail-panel">
          <div class="detail-header">
            <h3 class="detail-title">{{ selectedIcon.name }}</h3>
            <button class="detail-close" aria-label="Close" @click="closeDetail">
              <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                <path
                  d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
                />
              </svg>
            </button>
          </div>

          <!-- Size previews -->
          <div class="detail-section">
            <div class="detail-label">Preview</div>
            <div class="detail-sizes">
              <span
                v-for="s in [16, 20, 24, 32, 48]"
                :key="s"
                class="size-preview"
                :title="`${s}px`"
              >
                <span v-html="getRenderedSvg(selectedWeight, s)" />
                <span class="size-label">{{ s }}</span>
              </span>
            </div>
          </div>

          <!-- Weight comparison -->
          <div class="detail-section">
            <div class="detail-label">Weights</div>
            <div class="detail-weights">
              <button
                v-for="w in weights"
                :key="w"
                class="weight-preview"
                :class="{ active: selectedWeight === w }"
                @click="selectedWeight = w"
              >
                <span
                  v-html="
                    detailSvgs
                      .get(w)
                      ?.replace('<svg', '<svg width=&quot;32&quot; height=&quot;32&quot;') || ''
                  "
                />
                <span class="weight-label">{{ w }}</span>
              </button>
            </div>
          </div>

          <!-- Actions -->
          <div class="detail-section">
            <div class="detail-label">Export</div>
            <div class="detail-actions">
              <button class="action-btn" @click="copySvg">
                <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                  <path
                    d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"
                  />
                </svg>
                {{ copyLabel }}
              </button>
              <div class="png-export">
                <select v-model="pngSize" class="size-select" aria-label="PNG size">
                  <option v-for="s in pngSizes" :key="s" :value="s">{{ s }}px</option>
                </select>
                <button class="action-btn" @click="downloadPng">
                  <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                    <path
                      d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"
                    />
                  </svg>
                  Download PNG
                </button>
              </div>
            </div>
          </div>

          <!-- Code snippets -->
          <div class="detail-section">
            <div class="detail-label">Code</div>
            <div class="code-snippets">
              <div class="snippet">
                <div class="snippet-lang">Vue</div>
                <code class="snippet-code">{{ vueSnippet(selectedIcon) }}</code>
              </div>
              <div class="snippet">
                <div class="snippet-lang">React</div>
                <code class="snippet-code">{{ reactSnippet(selectedIcon) }}</code>
              </div>
            </div>
          </div>

          <!-- Categories & tags -->
          <div
            v-if="selectedIcon.categories.length || selectedIcon.tags.length"
            class="detail-section"
          >
            <div class="detail-label">Tags</div>
            <div class="detail-tags">
              <span
                v-for="tag in [
                  ...selectedIcon.categories,
                  ...selectedIcon.tags.filter((t) => t !== '*new*'),
                ]"
                :key="tag"
                class="tag"
                @click="searchQuery = tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.icon-gallery {
  --gallery-radius: 10px;
  --gallery-border: var(--vp-c-divider, var(--co-border, #e2e8f0));
  --gallery-surface: var(--vp-c-bg-soft, var(--co-surface, #f6f6f7));
  --gallery-text: var(--vp-c-text-1, var(--co-text, #213547));
  --gallery-text-secondary: var(--vp-c-text-2, var(--co-text-secondary, #476582));
  --gallery-text-muted: var(--vp-c-text-3, var(--co-text-muted, #8e99a4));
  --gallery-accent: var(--vp-c-brand-1, var(--co-accent, #639bff));
  --gallery-accent-soft: var(--vp-c-brand-soft, var(--co-accent-soft, rgba(99, 155, 255, 0.14)));
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

@media (max-width: 768px) {
  .gallery-content.has-detail {
    grid-template-columns: 1fr;
  }
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

/* Detail panel */
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

@media (max-width: 768px) {
  .detail-panel {
    position: static;
    max-height: none;
  }
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

/* Weight comparison */
.detail-weights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.snippet {
  border: 1px solid var(--gallery-border);
  border-radius: 8px;
  overflow: hidden;
}

.snippet-lang {
  padding: 4px 10px;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gallery-text-muted);
  background: var(--vp-c-bg-soft, rgba(0, 0, 0, 0.06));
  border-bottom: 1px solid var(--gallery-border);
}

.snippet-code {
  display: block;
  padding: 8px 10px;
  font-size: 0.72rem;
  line-height: 1.5;
  font-family: var(--co-font-mono, monospace);
  color: var(--gallery-text);
  overflow-x: auto;
  white-space: pre;
  background: none;
  border: none;
}

/* Tags */
.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tag {
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--gallery-accent-soft);
  color: var(--gallery-text-secondary);
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.12s;
}

.tag:hover {
  background: var(--gallery-accent);
  color: #fff;
}

/* Transitions */
.detail-enter-active,
.detail-leave-active {
  transition:
    opacity 0.15s,
    transform 0.15s;
}
.detail-enter-from,
.detail-leave-to {
  opacity: 0;
  transform: translateX(12px);
}

@media (max-width: 768px) {
  .detail-enter-from,
  .detail-leave-to {
    transform: translateY(12px);
  }

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
