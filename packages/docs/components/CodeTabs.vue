<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  tabs: string[];
}>();

const activeTab = ref(props.tabs[0]);
</script>

<template>
  <div class="code-tabs">
    <div class="code-tabs-bar">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="code-tab"
        :class="{ 'is-active': activeTab === tab }"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="code-tabs-panels">
      <div v-for="tab in tabs" :key="tab" v-show="activeTab === tab" class="code-tab-panel">
        <slot :name="tab.toLowerCase().replace(/\s+/g, '-')" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-tabs {
  border: 1px solid var(--co-border);
  border-radius: 12px;
  margin: 16px 0 24px;
  overflow: hidden;
  background: var(--co-color-surface-static-sunken);
}

.code-tabs-bar {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--co-border);
  background: var(--co-color-surface-static-raised);
  overflow-x: auto;
}

.code-tab {
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  font-family: var(--co-font-body);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--co-color-text-secondary);
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
}

.code-tab:hover {
  color: var(--co-text-primary);
}

.code-tab.is-active {
  color: var(--co-code-color);
}

.code-tab.is-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 12px;
  right: 12px;
  height: 2px;
  background: var(--co-blue-500);
  border-radius: 2px 2px 0 0;
}

.code-tabs-panels {
  overflow: hidden;
}

.code-tab-panel :deep(div[class*='language-']) {
  margin: 0 !important;
  border: none !important;
  border-radius: 0 !important;
}
</style>
