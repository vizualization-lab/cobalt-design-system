<script setup lang="ts">
import { ref, computed } from 'vue';

export interface TokenEntry {
  name: string;
  value: string;
  resolvedValue: string | null;
  category: string;
  tier: 'primitive' | 'semantic';
}

const props = defineProps<{
  tokens: TokenEntry[];
}>();

const query = ref('');
const activeCategory = ref<string | null>(null);
const copiedName = ref<string | null>(null);

const categories = computed(() => {
  const counts: Record<string, number> = {};
  for (const t of props.tokens) {
    counts[t.category] = (counts[t.category] ?? 0) + 1;
  }
  return counts;
});

const filtered = computed(() => {
  let result = props.tokens;

  if (activeCategory.value) {
    result = result.filter((t) => t.category === activeCategory.value);
  }

  const q = query.value.toLowerCase();
  if (q) {
    result = result.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.value.toLowerCase().includes(q) ||
        (t.resolvedValue && t.resolvedValue.toLowerCase().includes(q)) ||
        t.category.toLowerCase().includes(q) ||
        t.tier.toLowerCase().includes(q),
    );
  }

  return result;
});

function isColor(value: string): boolean {
  return /^#[0-9a-f]{3,8}$/i.test(value) || value.startsWith('rgb') || value.startsWith('hsl');
}

function displayValue(token: TokenEntry): string {
  return token.value;
}

function swatchColor(token: TokenEntry): string | null {
  if (isColor(token.value)) return token.value;
  if (token.resolvedValue && isColor(token.resolvedValue)) return token.resolvedValue;
  return null;
}

function referenceToken(token: TokenEntry): string | null {
  const varMatch = token.value.match(/^var\((--[\w-]+)\)$/);
  return varMatch ? varMatch[1] : null;
}

function toggleCategory(cat: string) {
  activeCategory.value = activeCategory.value === cat ? null : cat;
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
  <div class="token-table-wrapper">
    <div class="token-search">
      <input
        v-model="query"
        type="text"
        class="token-search-input"
        placeholder="Search tokens by name, value, category, or tier..."
      />
      <span class="token-count"> {{ filtered.length }} of {{ tokens.length }} tokens </span>
    </div>

    <div class="category-filters">
      <button
        class="filter-pill"
        :class="{ active: activeCategory === null }"
        @click="activeCategory = null"
      >
        All
      </button>
      <button
        v-for="(count, cat) in categories"
        :key="cat"
        class="filter-pill"
        :class="{ active: activeCategory === cat }"
        @click="toggleCategory(cat as string)"
      >
        {{ cat }}
        <span class="pill-count">{{ count }}</span>
      </button>
    </div>

    <table class="token-table">
      <thead>
        <tr>
          <th class="col-token">Token</th>
          <th class="col-value">Value</th>
          <th class="col-meta">Category / Tier</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="token in filtered" :key="token.name">
          <td class="col-token">
            <button
              class="token-name"
              :class="{ copied: copiedName === token.name }"
              :title="copiedName === token.name ? 'Copied!' : 'Click to copy'"
              @click="copyToken(token.name)"
            >
              <code>{{ token.name }}</code>
              <svg
                v-if="copiedName === token.name"
                class="copy-icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
              </svg>
            </button>
          </td>
          <td class="col-value">
            <div class="value-row">
              <span
                v-if="swatchColor(token)"
                class="color-swatch"
                :style="{ background: swatchColor(token)! }"
              ></span>
              <div class="value-stack">
                <code class="token-value">{{ displayValue(token) }}</code>
                <span v-if="token.resolvedValue" class="resolved-value">
                  → <code>{{ token.resolvedValue }}</code>
                </span>
              </div>
            </div>
          </td>
          <td class="col-meta">
            <span class="category-badge">{{ token.category }}</span>
            <span class="tier-badge" :class="token.tier">{{ token.tier }}</span>
          </td>
        </tr>
        <tr v-if="filtered.length === 0">
          <td colspan="3" class="no-results">No tokens match "{{ query }}"</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.token-table-wrapper {
  margin: 16px 0 24px;
}

.token-search {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.token-search-input {
  flex: 1;
  min-width: 240px;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  font-size: 0.9rem;
  font-family: inherit;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  outline: none;
  transition: border-color 0.2s;
}

.token-search-input:focus {
  border-color: var(--vp-c-brand-1);
}

.token-search-input::placeholder {
  color: var(--vp-c-text-3);
}

.token-count {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}

/* ── Category filter pills ── */

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.78rem;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.15s,
    border-color 0.15s,
    color 0.15s;
}

.filter-pill:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.filter-pill.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}

.pill-count {
  font-size: 0.7rem;
  opacity: 0.7;
}

/* ── Table ── */

.token-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}

.token-table th {
  text-align: left;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-3);
  padding: 8px 12px;
  border-bottom: 2px solid var(--vp-c-border);
}

.token-table td {
  padding: 6px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  vertical-align: middle;
}

.token-table tbody tr:hover {
  background: var(--vp-c-bg-soft);
}

.col-token {
  min-width: 280px;
}

.col-value {
  min-width: 180px;
}

.col-meta {
  width: 180px;
}

/* ── Token name button ── */

.token-name {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 2px 4px;
  margin: -2px -4px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s;
  font-family: inherit;
  color: inherit;
}

.token-name:hover {
  background: var(--vp-c-bg-soft);
}

.token-name.copied {
  color: var(--co-color-success-base);
}

.token-name code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.82rem;
  background: none;
  padding: 0;
  color: inherit;
}

.copy-icon {
  width: 14px;
  height: 14px;
  color: var(--co-color-success-base);
  flex-shrink: 0;
}

/* ── Value column ── */

.value-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.value-stack {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.token-value {
  font-family: var(--vp-font-family-mono);
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  word-break: break-all;
}

.resolved-value {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}

.resolved-value code {
  font-family: var(--vp-font-family-mono);
  font-size: inherit;
  background: none;
  padding: 0;
  color: inherit;
}

.color-swatch {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid var(--co-color-border-subtle);
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── Category + tier badges ── */

.category-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  margin-right: 4px;
}

.tier-badge {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.tier-badge.primitive {
  background: var(--vp-c-yellow-soft, #fef3cd);
  color: var(--vp-c-yellow-dark, #8a6d00);
}

.tier-badge.semantic {
  background: var(--vp-c-green-soft, #d1fae5);
  color: var(--vp-c-green-dark, #166534);
}

.no-results {
  text-align: center;
  color: var(--vp-c-text-3);
  padding: 24px 12px !important;
  font-style: italic;
}
</style>
