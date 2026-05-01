<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import TokenTreeNode from './TokenTreeNode.vue';
import type {
  TokenBranchNode,
  TokenEntry,
  TokenTreeNode as ExplorerNode,
} from './token-explorer.types';

type BrowserTab = 'main' | 'advanced';

const props = defineProps<{
  tokens: TokenEntry[];
}>();

const CATEGORY_ORDER = [
  'Color',
  'Space',
  'Font',
  'Typography',
  'Shape',
  'Elevation',
  'Motion',
  'Sizing',
  'Opacity',
  'Breakpoint',
  'Focus',
  'Control',
  'Layout',
  'Component',
];

const CATEGORY_LABELS: Record<string, string> = {
  color: 'Color',
  space: 'Space',
  font: 'Font',
  typography: 'Typography',
  shape: 'Shape',
  elevation: 'Elevation',
  motion: 'Motion',
  sizing: 'Sizing',
  opacity: 'Opacity',
  breakpoint: 'Breakpoint',
  focus: 'Focus',
  control: 'Control',
  layout: 'Layout',
  component: 'Component',
};

const collator = new Intl.Collator('en-US', { numeric: true, sensitivity: 'base' });
const countFormatter = new Intl.NumberFormat('en-US');

const query = ref('');
const activeCategory = ref<string | null>(null);
const activeTab = ref<BrowserTab>('main');
const copiedName = ref<string | null>(null);
const selectedTokenName = ref<string | null>(null);
const expandedIds = ref<Set<string>>(new Set());
const advancedExpandedIds = ref<Set<string>>(new Set());
const isMobile = ref(false);
const navPaneRef = ref<HTMLElement | null>(null);

const normalizedQuery = computed(() => query.value.toLowerCase().trim());
const isSearching = computed(() => normalizedQuery.value.length > 0);

function displayCategory(category: string): string {
  return CATEGORY_LABELS[category] ?? category;
}

function categorySortValue(category: string): number {
  const display = displayCategory(category);
  const index = CATEGORY_ORDER.indexOf(display);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function compareCategories(a: string, b: string): number {
  const order = categorySortValue(a) - categorySortValue(b);
  if (order !== 0) return order;
  return collator.compare(displayCategory(a), displayCategory(b));
}

function isPrimitiveColorToken(token: TokenEntry): boolean {
  return token.name.startsWith('--co-color-primitive-');
}

function matchesQuery(token: TokenEntry): boolean {
  if (!normalizedQuery.value) return true;

  return [token.name, token.value, token.resolvedValue ?? '', token.category, token.tier].some(
    (value) => value.toLowerCase().includes(normalizedQuery.value),
  );
}

function sortTokens(tokens: TokenEntry[]): TokenEntry[] {
  return [...tokens].sort((a, b) => collator.compare(a.name, b.name));
}

function cloneExpandedSet(source: Set<string>): Set<string> {
  return new Set(source);
}

function leafCount(nodes: ExplorerNode[]): number {
  return nodes.reduce((total, node) => total + node.count, 0);
}

function mainTreeSegments(token: TokenEntry): string[] {
  return token.name
    .replace(/^--co-/, '')
    .split('-')
    .slice(1);
}

function primitiveTreeSegments(token: TokenEntry): string[] {
  return token.name.replace(/^--co-color-primitive-/, '').split('-');
}

function breadcrumbForToken(token: TokenEntry): string[] {
  if (isPrimitiveColorToken(token)) {
    return ['Color Palettes', ...primitiveTreeSegments(token)];
  }

  return [displayCategory(token.category), ...mainTreeSegments(token)];
}

function tokenSource(token: TokenEntry): 'Main' | 'Color Palettes' {
  return isPrimitiveColorToken(token) ? 'Color Palettes' : 'Main';
}

function tokenTierLabel(token: TokenEntry): string {
  return token.tier === 'primitive' ? 'Primitive' : 'Semantic';
}

function tokenSwatchColor(token: TokenEntry): string | null {
  const candidate = token.resolvedValue ?? token.value;
  if (/^#[0-9a-f]{3,8}$/i.test(candidate)) return candidate;
  if (candidate.startsWith('rgb') || candidate.startsWith('hsl')) return candidate;
  return null;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function highlightCssValue(value: string): string {
  const pattern =
    /(color-mix|rgba?|hsla?|var|calc)|(--[\w-]+)|#[0-9a-fA-F]{3,8}|\b(in|srgb)\b|(-?\d*\.?\d+(?:px|rem|em|%)?)|([(),/])/g;
  let result = '';
  let lastIndex = 0;

  for (const match of value.matchAll(pattern)) {
    const index = match.index ?? 0;
    result += escapeHtml(value.slice(lastIndex, index));

    if (match[1]) {
      result += `<span class="syntax-fn">${escapeHtml(match[1])}</span>`;
    } else if (match[2]) {
      result += `<span class="syntax-var">${escapeHtml(match[2])}</span>`;
    } else if (match[0].startsWith('#')) {
      result += `<span class="syntax-color">${escapeHtml(match[0])}</span>`;
    } else if (match[3]) {
      result += `<span class="syntax-keyword">${escapeHtml(match[3])}</span>`;
    } else if (match[4]) {
      result += `<span class="syntax-number">${escapeHtml(match[4])}</span>`;
    } else if (match[5]) {
      result += `<span class="syntax-punc">${escapeHtml(match[5])}</span>`;
    }

    lastIndex = index + match[0].length;
  }

  result += escapeHtml(value.slice(lastIndex));
  return result;
}

function finalizeNodes(nodes: ExplorerNode[]): ExplorerNode[] {
  const branches: TokenBranchNode[] = [];
  const leaves = [];

  for (const node of nodes) {
    if (node.type === 'branch') {
      node.children = finalizeNodes(node.children);
      node.count = leafCount(node.children);
      branches.push(node);
    } else {
      leaves.push(node);
    }
  }

  branches.sort((a, b) => collator.compare(a.label, b.label));
  leaves.sort((a, b) => collator.compare(a.label, b.label));

  return [...branches, ...leaves];
}

function buildTree(
  tokens: TokenEntry[],
  pathForToken: (token: TokenEntry) => string[],
  scope: string,
): ExplorerNode[] {
  const roots: ExplorerNode[] = [];

  for (const token of sortTokens(tokens)) {
    const segments = pathForToken(token).filter(Boolean);

    if (segments.length === 0) {
      roots.push({
        type: 'leaf',
        id: `${scope}:leaf:${token.name}`,
        label: token.name,
        token,
        count: 1,
      });
      continue;
    }

    let currentNodes = roots;
    let currentPath = '';

    for (const [index, segment] of segments.entries()) {
      currentPath = currentPath ? `${currentPath}/${segment}` : segment;
      const isLeaf = index === segments.length - 1;

      if (isLeaf) {
        currentNodes.push({
          type: 'leaf',
          id: `${scope}:leaf:${token.name}`,
          label: segment,
          token,
          count: 1,
        });
        continue;
      }

      let branch = currentNodes.find(
        (node): node is TokenBranchNode => node.type === 'branch' && node.label === segment,
      );

      if (!branch) {
        branch = {
          type: 'branch',
          id: `${scope}:branch:${currentPath}`,
          label: segment,
          count: 0,
          children: [],
        };
        currentNodes.push(branch);
      }

      currentNodes = branch.children;
    }
  }

  return finalizeNodes(roots);
}

function buildCategoryRoots(tokens: TokenEntry[]): TokenBranchNode[] {
  const groups = new Map<string, TokenEntry[]>();

  for (const token of tokens) {
    const bucket = groups.get(token.category) ?? [];
    bucket.push(token);
    groups.set(token.category, bucket);
  }

  return [...groups.entries()]
    .sort(([a], [b]) => compareCategories(a, b))
    .map(([category, entries]) => {
      const display = displayCategory(category);
      const children = buildTree(entries, mainTreeSegments, `main:${display.toLowerCase()}`);

      return {
        type: 'branch' as const,
        id: `main:category:${display}`,
        label: display,
        count: leafCount(children),
        children,
      };
    });
}

function buildPrimitiveRoots(tokens: TokenEntry[]): ExplorerNode[] {
  return buildTree(tokens, primitiveTreeSegments, 'advanced');
}

const allMainTokens = computed(() => props.tokens.filter((token) => !isPrimitiveColorToken(token)));
const allAdvancedTokens = computed(() => props.tokens.filter(isPrimitiveColorToken));

const categoryEntries = computed(() => {
  const counts = new Map<string, number>();

  for (const token of allMainTokens.value) {
    counts.set(token.category, (counts.get(token.category) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort(([a], [b]) => compareCategories(a, b))
    .map(([id, count]) => ({
      id,
      label: displayCategory(id),
      count,
    }));
});

const scopedMainBrowseTokens = computed(() => {
  if (!activeCategory.value) return allMainTokens.value;
  return allMainTokens.value.filter((token) => token.category === activeCategory.value);
});

const mainTreeRoots = computed(() => {
  const roots = buildCategoryRoots(scopedMainBrowseTokens.value);
  if (!activeCategory.value) return roots;
  return roots[0]?.children ?? [];
});

const advancedTreeRoots = computed(() => buildPrimitiveRoots(allAdvancedTokens.value));
const searchResults = computed(() => sortTokens(props.tokens.filter(matchesQuery)));

const selectedToken = computed(
  () => props.tokens.find((token) => token.name === selectedTokenName.value) ?? null,
);

const browseCount = computed(() => {
  if (activeTab.value === 'advanced') return allAdvancedTokens.value.length;
  return scopedMainBrowseTokens.value.length;
});

const countSummary = computed(() => {
  if (isSearching.value) {
    const label = searchResults.value.length === 1 ? 'match' : 'matches';
    return `${countFormatter.format(searchResults.value.length)} ${label} across ${countFormatter.format(props.tokens.length)} tokens`;
  }

  if (activeTab.value === 'advanced') {
    return `${countFormatter.format(allAdvancedTokens.value.length)} color palette tokens`;
  }

  if (activeCategory.value) {
    return `${countFormatter.format(scopedMainBrowseTokens.value.length)} ${displayCategory(activeCategory.value)} tokens`;
  }

  return `${countFormatter.format(browseCount.value)} tokens in Main`;
});

const toolbarNote = computed(() => {
  if (isSearching.value) {
    return 'Search spans Main and Color Palettes. Select a token to inspect its full path and value.';
  }

  if (activeTab.value === 'advanced') {
    return 'Color palettes live here for advanced reference. Most product code should prefer semantic color tokens from Main.';
  }

  return 'Browse compact token paths on the left. Select a token to inspect its value, resolved value, and copy the CSS variable name.';
});

const paneTitle = computed(() => {
  if (isSearching.value) return 'Search Results';
  return activeTab.value === 'advanced' ? 'Color Palettes' : 'Token Browser';
});

const paneDescription = computed(() => {
  if (isSearching.value) return countSummary.value;
  if (activeTab.value === 'advanced') return 'Palette families and modes';
  return activeCategory.value
    ? `${displayCategory(activeCategory.value)} category`
    : 'All Main tokens';
});

const selectedTokenVisible = computed(() => {
  const token = selectedToken.value;
  if (!token) return false;

  if (isSearching.value) {
    return searchResults.value.some((entry) => entry.name === token.name);
  }

  if (activeTab.value === 'advanced') {
    return isPrimitiveColorToken(token);
  }

  return (
    !isPrimitiveColorToken(token) &&
    (!activeCategory.value || token.category === activeCategory.value)
  );
});

const detailPath = computed(() =>
  selectedToken.value ? breadcrumbForToken(selectedToken.value).join(' / ') : '',
);
const highlightedRawValue = computed(() =>
  selectedToken.value ? highlightCssValue(selectedToken.value.value) : '',
);

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

watch([query, activeTab, activeCategory], async () => {
  await nextTick();
  navPaneRef.value?.scrollTo({ top: 0, behavior: 'auto' });
});

watch([isMobile, selectedTokenName], ([mobile, name]) => {
  document.body.style.overflow = mobile && name ? 'hidden' : '';
});

watch(selectedTokenVisible, (visible) => {
  if (!visible) {
    selectedTokenName.value = null;
  }
});

function setActiveTab(tab: BrowserTab) {
  activeTab.value = tab;
}

function toggleCategory(category: string) {
  activeCategory.value = activeCategory.value === category ? null : category;
}

function toggleExpanded(id: string) {
  const next = cloneExpandedSet(expandedIds.value);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  expandedIds.value = next;
}

function toggleAdvancedExpanded(id: string) {
  const next = cloneExpandedSet(advancedExpandedIds.value);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  advancedExpandedIds.value = next;
}

function isExpanded(id: string): boolean {
  return expandedIds.value.has(id);
}

function isAdvancedExpanded(id: string): boolean {
  return advancedExpandedIds.value.has(id);
}

function selectToken(name: string) {
  selectedTokenName.value = name;
}

function closeDetail() {
  selectedTokenName.value = null;
}

async function copyToken(name: string) {
  await navigator.clipboard.writeText(name);
  copiedName.value = name;
  setTimeout(() => {
    if (copiedName.value === name) copiedName.value = null;
  }, 1500);
}
</script>

<template>
  <div class="token-browser-wrapper">
    <div class="token-browser-shell">
      <div class="browser-toolbar">
        <div class="toolbar-top-row">
          <input
            v-model="query"
            type="text"
            class="token-search-input"
            placeholder="Search tokens by name, value, resolved value, category, or tier..."
          />
          <span class="token-count">{{ countSummary }}</span>
        </div>

        <div class="toolbar-secondary-row">
          <div class="browser-toggle" role="tablist" aria-label="Token browser mode">
            <button
              type="button"
              class="browser-toggle-btn"
              :class="{ active: activeTab === 'main' }"
              :aria-selected="activeTab === 'main'"
              @click="setActiveTab('main')"
            >
              Main
            </button>
            <button
              type="button"
              class="browser-toggle-btn"
              :class="{ active: activeTab === 'advanced' }"
              :aria-selected="activeTab === 'advanced'"
              @click="setActiveTab('advanced')"
            >
              Color Palettes
            </button>
          </div>

          <div v-if="activeTab === 'main' && !isSearching" class="category-filters">
            <button
              type="button"
              class="filter-pill"
              :class="{ active: activeCategory === null }"
              @click="activeCategory = null"
            >
              All
              <span class="pill-count">{{ allMainTokens.length }}</span>
            </button>
            <button
              v-for="category in categoryEntries"
              :key="category.id"
              type="button"
              class="filter-pill"
              :class="{ active: activeCategory === category.id }"
              @click="toggleCategory(category.id)"
            >
              {{ category.label }}
              <span class="pill-count">{{ category.count }}</span>
            </button>
          </div>
        </div>

        <p class="toolbar-note">{{ toolbarNote }}</p>
      </div>

      <div class="browser-body" :class="{ 'has-detail': selectedToken && !isMobile }">
        <section class="browser-pane browser-pane-nav">
          <div class="pane-header">
            <h3 class="pane-title">{{ paneTitle }}</h3>
            <p class="pane-description">{{ paneDescription }}</p>
          </div>

          <div ref="navPaneRef" class="browser-scroll">
            <div v-if="isSearching" class="search-results">
              <div v-if="searchResults.length === 0" class="empty-state">
                No tokens match "{{ query }}".
              </div>

              <div v-else class="result-list">
                <div
                  v-for="token in searchResults"
                  :key="token.name"
                  class="result-row"
                  :class="{ selected: selectedTokenName === token.name }"
                >
                  <button type="button" class="result-main" @click="selectToken(token.name)">
                    <div class="result-heading">
                      <code class="result-name">{{ token.name }}</code>
                      <span class="result-badges">
                        <span class="result-badge">{{ tokenSource(token) }}</span>
                        <span class="result-badge subtle">{{ tokenTierLabel(token) }}</span>
                      </span>
                    </div>
                    <div class="result-meta">
                      <span class="result-path">{{ breadcrumbForToken(token).join(' / ') }}</span>
                      <span
                        v-if="tokenSwatchColor(token)"
                        class="result-swatch"
                        :style="{ background: tokenSwatchColor(token)! }"
                      ></span>
                    </div>
                  </button>

                  <button
                    type="button"
                    class="result-copy"
                    :title="copiedName === token.name ? 'Copied!' : 'Copy token name'"
                    @click.stop="copyToken(token.name)"
                  >
                    {{ copiedName === token.name ? 'Copied' : 'Copy' }}
                  </button>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'main'" class="tree-surface">
              <TokenTreeNode
                v-for="node in mainTreeRoots"
                :key="node.id"
                :node="node"
                :selected-name="selectedTokenName"
                :is-expanded="isExpanded"
                @toggle="toggleExpanded"
                @select="selectToken"
              />
            </div>

            <div v-else class="tree-surface">
              <TokenTreeNode
                v-for="node in advancedTreeRoots"
                :key="node.id"
                :node="node"
                :selected-name="selectedTokenName"
                :is-expanded="isAdvancedExpanded"
                @toggle="toggleAdvancedExpanded"
                @select="selectToken"
              />
            </div>
          </div>
        </section>

        <Transition v-if="!isMobile" name="detail-panel">
          <aside v-if="selectedToken" class="browser-pane browser-pane-detail">
            <div class="detail-scroll">
              <div class="detail-header">
                <button type="button" class="detail-close" aria-label="Close" @click="closeDetail">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    />
                  </svg>
                </button>
              </div>

              <code class="detail-name">{{ selectedToken.name }}</code>
              <p class="detail-path">{{ detailPath }}</p>

              <div v-if="tokenSwatchColor(selectedToken)" class="detail-swatch-card">
                <span
                  class="detail-swatch"
                  :style="{ background: tokenSwatchColor(selectedToken)! }"
                ></span>
                <div>
                  <div class="detail-swatch-label">Resolved color</div>
                  <code>{{ tokenSwatchColor(selectedToken) }}</code>
                </div>
              </div>

              <div class="detail-actions">
                <button type="button" class="detail-copy" @click="copyToken(selectedToken.name)">
                  {{ copiedName === selectedToken.name ? 'Copied' : 'Copy token name' }}
                </button>
              </div>

              <div class="detail-section">
                <div class="detail-label">Raw value</div>
                <code class="detail-value detail-value--syntax" v-html="highlightedRawValue"></code>
              </div>

              <div v-if="selectedToken.resolvedValue" class="detail-section">
                <div class="detail-label">Resolved value</div>
                <code class="detail-value">{{ selectedToken.resolvedValue }}</code>
              </div>

              <dl class="detail-meta-grid">
                <div class="detail-meta-item">
                  <dt>Category</dt>
                  <dd>{{ displayCategory(selectedToken.category) }}</dd>
                </div>
                <div class="detail-meta-item">
                  <dt>Tier</dt>
                  <dd>{{ tokenTierLabel(selectedToken) }}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </Transition>
      </div>
    </div>

    <Transition name="detail-sheet">
      <div v-if="selectedToken && isMobile" class="mobile-detail-overlay">
        <button
          type="button"
          class="mobile-detail-backdrop"
          aria-label="Close token details"
          @click="closeDetail"
        ></button>

        <section class="mobile-detail-sheet">
          <div class="detail-scroll">
            <div class="detail-header">
              <button type="button" class="detail-close" aria-label="Close" @click="closeDetail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </button>
            </div>

            <code class="detail-name">{{ selectedToken.name }}</code>
            <p class="detail-path">{{ detailPath }}</p>

            <div v-if="tokenSwatchColor(selectedToken)" class="detail-swatch-card">
              <span
                class="detail-swatch"
                :style="{ background: tokenSwatchColor(selectedToken)! }"
              ></span>
              <div>
                <div class="detail-swatch-label">Resolved color</div>
                <code>{{ tokenSwatchColor(selectedToken) }}</code>
              </div>
            </div>

            <div class="detail-actions">
              <button type="button" class="detail-copy" @click="copyToken(selectedToken.name)">
                {{ copiedName === selectedToken.name ? 'Copied' : 'Copy token name' }}
              </button>
            </div>

            <div class="detail-section">
              <div class="detail-label">Raw value</div>
              <code class="detail-value detail-value--syntax" v-html="highlightedRawValue"></code>
            </div>

            <div v-if="selectedToken.resolvedValue" class="detail-section">
              <div class="detail-label">Resolved value</div>
              <code class="detail-value">{{ selectedToken.resolvedValue }}</code>
            </div>

            <dl class="detail-meta-grid">
              <div class="detail-meta-item">
                <dt>Category</dt>
                <dd>{{ displayCategory(selectedToken.category) }}</dd>
              </div>
              <div class="detail-meta-item">
                <dt>Tier</dt>
                <dd>{{ tokenTierLabel(selectedToken) }}</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.token-browser-wrapper {
  margin: 16px 0 24px;
  font-family: var(--co-font-family-sans);
  color: var(--co-color-text-default);
}

.token-browser-shell {
  border: 1px solid var(--co-color-border-default);
  border-radius: var(--co-shape-radius-2xl);
  background: var(--co-color-surface-default);
  overflow: hidden;
}

.browser-toolbar {
  padding: 18px 18px 14px;
  border-bottom: 1px solid var(--co-color-border-subtle);
  background: var(--co-color-surface-default);
}

.toolbar-top-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.token-search-input {
  flex: 1;
  min-width: 240px;
  padding: 9px 13px;
  border: 1px solid var(--co-color-border-default);
  border-radius: var(--co-shape-radius-lg);
  font-size: var(--co-font-size-small);
  font-family: var(--co-font-family-sans);
  line-height: var(--co-font-line-height-tight);
  background: var(--co-color-surface-raised);
  color: var(--co-color-text-default);
  outline: none;
  transition: border-color 0.2s;
}

.token-search-input:focus {
  border-color: var(--co-color-border-focus);
}

.token-search-input::placeholder {
  color: var(--co-color-text-tertiary);
}

.token-count {
  font-size: var(--co-font-size-xsmall);
  color: var(--co-color-text-secondary);
  white-space: nowrap;
}

.toolbar-secondary-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.browser-toggle {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--co-color-border-default);
  border-radius: var(--co-shape-radius-lg);
  background: var(--co-color-surface-sunken);
  padding: 3px;
  gap: 2px;
}

.browser-toggle-btn {
  border: none;
  border-radius: var(--co-shape-radius-md);
  padding: 7px 14px;
  background: transparent;
  color: var(--co-color-text-secondary);
  font-family: var(--co-font-family-sans);
  font-size: var(--co-font-size-xsmall);
  font-weight: var(--co-font-weight-medium);
  cursor: pointer;
  transition:
    background-color 0.15s,
    color 0.15s,
    box-shadow 0.15s;
}

.browser-toggle-btn:hover:not(.active) {
  color: var(--co-color-text-default);
  background: color-mix(in srgb, var(--co-color-surface-default) 50%, transparent);
}

.browser-toggle-btn.active {
  background: var(--co-color-interactive-primary-default);
  color: var(--co-color-text-on-primary);
  font-weight: var(--co-font-weight-semibold);
  box-shadow: 0 1px 3px color-mix(in srgb, var(--co-color-surface-overlay) 16%, transparent);
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex: 1;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 12px;
  border: 1px solid var(--co-color-border-subtle);
  border-radius: var(--co-shape-radius-full);
  background: var(--co-color-surface-raised);
  color: var(--co-color-text-secondary);
  font-size: var(--co-font-size-xsmall);
  font-family: var(--co-font-family-sans);
  font-weight: var(--co-font-weight-medium);
  cursor: pointer;
  transition:
    background 0.15s,
    border-color 0.15s,
    color 0.15s;
}

.filter-pill:hover {
  border-color: var(--co-color-border-active);
  color: var(--co-color-text-link);
}

.filter-pill.active {
  background: color-mix(in srgb, var(--co-color-interactive-primary-default) 12%, transparent);
  border-color: var(--co-color-border-selected);
  color: var(--co-color-text-link);
}

.pill-count {
  font-size: 0.7rem;
  opacity: 0.72;
}

.toolbar-note {
  margin: 12px 0 0;
  color: var(--co-color-text-secondary);
  font-size: var(--co-font-size-small);
  line-height: var(--co-font-line-height-normal);
}

.browser-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  height: clamp(420px, 68vh, 720px);
}

.browser-body.has-detail {
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
}

.browser-pane {
  min-width: 0;
  min-height: 0;
}

.browser-pane-nav {
  display: flex;
  flex-direction: column;
  border-right: 1px solid transparent;
}

.browser-body.has-detail .browser-pane-nav {
  border-right-color: var(--co-color-border-subtle);
}

.pane-header {
  padding: 16px 18px 12px;
  border-bottom: 1px solid var(--co-color-border-subtle);
  background: var(--co-color-surface-default);
}

.pane-title {
  margin: 0;
  font-size: var(--co-font-size-small);
  font-weight: var(--co-font-weight-semibold);
  color: var(--co-color-text-default);
}

.pane-description {
  margin: 4px 0 0;
  font-size: var(--co-font-size-xsmall);
  color: var(--co-color-text-secondary);
}

.browser-scroll,
.detail-scroll {
  min-height: 0;
  overflow: auto;
}

.browser-scroll {
  padding: 16px 18px 18px;
  background: var(--co-color-surface-page);
}

.tree-surface {
  border: 1px solid var(--co-color-border-subtle);
  border-radius: var(--co-shape-radius-2xl);
  background: var(--co-color-surface-raised);
  overflow: hidden;
}

.search-results,
.result-list {
  min-width: 0;
}

.empty-state {
  padding: 28px 18px;
  border: 1px dashed var(--co-color-border-default);
  border-radius: var(--co-shape-radius-2xl);
  background: var(--co-color-surface-raised);
  color: var(--co-color-text-secondary);
  text-align: center;
}

.result-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.result-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
  align-items: stretch;
  padding: 10px;
  border: 1px solid var(--co-color-border-subtle);
  border-radius: var(--co-shape-radius-xl);
  background: var(--co-color-surface-raised);
}

.result-row.selected {
  border-color: var(--co-color-border-selected);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--co-color-border-selected) 18%, transparent);
}

.result-main {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  border: none;
  background: transparent;
  color: inherit;
  text-align: left;
  font: inherit;
  cursor: pointer;
}

.result-heading {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
}

.result-name {
  min-width: 0;
  font-family: var(--co-font-family-mono);
  font-size: var(--co-font-size-xsmall);
  color: var(--co-color-text-default);
  overflow-wrap: anywhere;
}

.result-badges {
  display: inline-flex;
  gap: 6px;
  flex-shrink: 0;
}

.result-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: var(--co-shape-radius-full);
  background: color-mix(in srgb, var(--co-color-interactive-primary-default) 12%, transparent);
  color: var(--co-color-text-link);
  font-size: 0.68rem;
  font-weight: var(--co-font-weight-semibold);
  letter-spacing: 0.01em;
}

.result-badge.subtle {
  background: var(--co-color-surface-sunken);
  color: var(--co-color-text-secondary);
}

.result-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.result-path {
  min-width: 0;
  font-size: var(--co-font-size-xsmall);
  color: var(--co-color-text-secondary);
  overflow-wrap: anywhere;
}

.result-swatch {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1px solid var(--co-color-border-subtle);
  flex-shrink: 0;
}

.result-copy,
.detail-copy {
  border: 1px solid var(--co-color-border-default);
  border-radius: var(--co-shape-radius-lg);
  background: var(--co-color-surface-raised);
  color: var(--co-color-text-default);
  font-family: var(--co-font-family-sans);
  font-size: var(--co-font-size-xsmall);
  font-weight: var(--co-font-weight-medium);
  cursor: pointer;
  transition:
    border-color 0.15s,
    color 0.15s,
    background-color 0.15s;
}

.result-copy {
  align-self: flex-start;
  padding: 8px 10px;
}

.result-copy:hover,
.detail-copy:hover {
  border-color: var(--co-color-border-active);
  color: var(--co-color-text-link);
}

.browser-pane-detail {
  background: var(--co-color-surface-raised);
}

.detail-scroll {
  padding: 18px 18px 22px;
}

.detail-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.detail-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--co-color-border-default);
  border-radius: var(--co-shape-radius-full);
  background: var(--co-color-surface-raised);
  color: var(--co-color-text-secondary);
  cursor: pointer;
}

.detail-name {
  display: block;
  margin-top: 14px;
  font-family: var(--co-font-family-mono);
  font-size: var(--co-font-size-small);
  color: var(--co-color-text-default);
  overflow-wrap: anywhere;
}

.detail-path {
  margin: 8px 0 0;
  color: var(--co-color-text-secondary);
  font-size: var(--co-font-size-small);
  line-height: var(--co-font-line-height-normal);
  overflow-wrap: anywhere;
}

.detail-swatch-card {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
  padding: 14px;
  border: 1px solid var(--co-color-border-subtle);
  border-radius: var(--co-shape-radius-2xl);
  background: var(--co-color-surface-sunken);
}

.detail-swatch {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--co-color-border-subtle);
  flex-shrink: 0;
}

.detail-swatch-label,
.detail-label,
.detail-meta-item dt {
  margin-bottom: 6px;
  font-size: var(--co-font-size-xsmall);
  font-weight: var(--co-font-weight-medium);
  letter-spacing: var(--co-font-tracking-wide);
  text-transform: uppercase;
  color: var(--co-color-text-secondary);
}

.detail-actions {
  margin-top: 18px;
}

.detail-copy {
  padding: 10px 14px;
}

.detail-section {
  margin-top: 18px;
}

.detail-value {
  display: block;
  padding: 12px 14px;
  border: 1px solid var(--co-color-border-subtle);
  border-radius: var(--co-shape-radius-xl);
  background: var(--co-color-surface-bold);
  font-family: var(--co-font-family-mono);
  font-size: var(--co-font-size-small);
  color: var(--co-color-text-default);
  line-height: var(--co-font-line-height-normal);
  overflow-wrap: anywhere;
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--co-color-surface-overlay) 6%, transparent);
}

.detail-value--syntax :deep(.syntax-fn) {
  color: var(--co-color-text-link);
}

.detail-value--syntax :deep(.syntax-var) {
  color: var(--co-color-primary-base);
}

.detail-value--syntax :deep(.syntax-color) {
  color: var(--co-color-warning-base);
}

.detail-value--syntax :deep(.syntax-keyword) {
  color: var(--co-color-danger-base);
}

.detail-value--syntax :deep(.syntax-number) {
  color: var(--co-color-success-base);
}

.detail-value--syntax :deep(.syntax-punc) {
  color: var(--co-color-text-tertiary);
}

.detail-meta-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 20px 0 0;
}

.detail-meta-item {
  padding: 14px;
  border: 1px solid var(--co-color-border-subtle);
  border-radius: var(--co-shape-radius-xl);
  background: var(--co-color-surface-sunken);
}

.detail-meta-item dt {
  margin: 0 0 6px;
}

.detail-meta-item dd {
  margin: 0;
  color: var(--co-color-text-default);
  font-size: var(--co-font-size-small);
}

.mobile-detail-overlay {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  align-items: flex-end;
}

.mobile-detail-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  background: rgba(0, 0, 0, 0.4);
}

.mobile-detail-sheet {
  position: relative;
  width: 100%;
  max-height: 82vh;
  border-radius: var(--co-shape-radius-2xl) var(--co-shape-radius-2xl) 0 0;
  background: var(--co-color-surface-raised);
  box-shadow: 0 -12px 32px rgba(0, 0, 0, 0.18);
  overflow: hidden;
}

.detail-panel-enter-active,
.detail-panel-leave-active,
.detail-sheet-enter-active,
.detail-sheet-leave-active {
  transition: all 0.18s ease;
}

.detail-panel-enter-from,
.detail-panel-leave-to {
  opacity: 0;
  transform: translateX(12px);
}

.detail-sheet-enter-from,
.detail-sheet-leave-to {
  opacity: 0;
}

.detail-sheet-enter-from .mobile-detail-sheet,
.detail-sheet-leave-to .mobile-detail-sheet {
  transform: translateY(18px);
}

@media (max-width: 767px) {
  .browser-toolbar {
    padding: 16px 16px 12px;
  }

  .browser-body {
    height: clamp(360px, 62vh, 560px);
  }

  .toolbar-secondary-row {
    flex-direction: column;
    align-items: stretch;
  }

  .category-filters {
    width: 100%;
  }

  .browser-scroll {
    padding: 14px 16px 16px;
  }

  .result-row {
    grid-template-columns: 1fr;
  }

  .result-copy {
    justify-self: flex-start;
  }

  .detail-meta-grid {
    grid-template-columns: 1fr;
  }
}
</style>
