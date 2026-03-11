<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  component: string;
  defaults?: Record<string, string | boolean>;
  options?: Record<string, string[]>;
}>();

const state = ref<Record<string, string | boolean>>({ ...props.defaults });

const attrString = computed(() => {
  return Object.entries(state.value)
    .filter(([, v]) => v !== false && v !== '' && v !== undefined)
    .map(([k, v]) => (v === true ? k : `${k}="${v}"`))
    .join(' ');
});

const codeSnippet = computed(() => {
  const attrs = attrString.value ? ' ' + attrString.value : '';
  return `<${props.component}${attrs}>Button</${props.component}>`;
});
</script>

<template>
  <div class="cb-demo">
    <div class="cb-demo-controls" v-if="options">
      <div v-for="(values, key) in options" :key="key" class="cb-demo-control">
        <label>{{ key }}</label>
        <select v-model="state[key]">
          <option v-for="val in values" :key="val" :value="val">{{ val }}</option>
        </select>
      </div>
    </div>
    <div class="cb-demo-preview">
      <ClientOnly>
        <div v-html="codeSnippet"></div>
      </ClientOnly>
    </div>
    <details class="cb-demo-code">
      <summary>View code</summary>
      <pre><code>{{ codeSnippet }}</code></pre>
    </details>
  </div>
</template>

<style scoped>
.cb-demo {
  border: 1px solid var(--co-border, rgba(99, 155, 255, 0.1));
  border-radius: 12px;
  margin: 16px 0 24px;
  overflow: hidden;
  background: var(--co-surface, rgba(15, 29, 50, 0.6));
}

.cb-demo-controls {
  padding: 12px 20px;
  background: var(--co-surface, rgba(15, 29, 50, 0.5));
  border-bottom: 1px solid var(--co-border, rgba(99, 155, 255, 0.1));
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.cb-demo-control {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cb-demo-control label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--co-text-muted, #5a6d8a);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.cb-demo-control select {
  padding: 4px 10px;
  border: 1px solid var(--co-border-strong, rgba(99, 155, 255, 0.18));
  border-radius: 6px;
  background: var(--co-deep, #0f1d32);
  color: var(--co-text-primary, #e8edf5);
  font-family: var(--co-font-body);
  font-size: 0.82rem;
}

.cb-demo-preview {
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.cb-demo-code {
  border-top: 1px solid var(--co-border, rgba(99, 155, 255, 0.1));
}

.cb-demo-code summary {
  padding: 10px 20px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--co-text-muted, #5a6d8a);
  letter-spacing: 0.02em;
  transition: color 0.2s;
}

.cb-demo-code summary:hover {
  color: var(--co-inline-link, #60a5fa);
}

.cb-demo-code pre {
  margin: 0;
  padding: 16px 20px;
  background: var(--co-deep, #0f1d32);
  font-size: 0.84rem;
}
</style>
