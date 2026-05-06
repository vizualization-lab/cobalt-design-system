<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const props = defineProps<{
  tag: string;
  label?: string;
  slotHtml?: string;
  defaults?: Record<string, string | boolean>;
  options?: Record<string, string[]>;
  booleans?: string[];
  textInputs?: string[];
  /** Override the preview area minimum height (default 100px). Useful for
   *  components that open content below — selects, comboboxes, popovers. */
  previewMinHeight?: number | string;
}>();

const state = ref<Record<string, string | boolean>>({
  ...props.defaults,
  ...(props.textInputs || []).reduce(
    (acc, t) => ({ ...acc, [t]: props.defaults?.[t] ?? '' }),
    {} as Record<string, string>,
  ),
  ...(props.booleans || []).reduce(
    (acc, b) => ({ ...acc, [b]: false }),
    {} as Record<string, boolean>,
  ),
});

const attrString = computed(() => {
  return Object.entries(state.value)
    .filter(([, v]) => v !== false && v !== '' && v !== undefined)
    .map(([k, v]) => (v === true ? k : `${k}="${v}"`))
    .join(' ');
});

const previewHtml = computed(() => {
  const attrs = attrString.value ? ' ' + attrString.value : '';
  const text = props.slotHtml || props.label || 'Button';
  return `<${props.tag}${attrs}>${text}</${props.tag}>`;
});

const previewStyle = computed(() => {
  if (props.previewMinHeight == null) return undefined;
  const value =
    typeof props.previewMinHeight === 'number'
      ? `${props.previewMinHeight}px`
      : props.previewMinHeight;
  return { minHeight: value };
});

// Force re-render key when state changes
const renderKey = ref(0);
watch(state, () => renderKey.value++, { deep: true });
</script>

<template>
  <div class="demo-block">
    <div class="demo-controls" v-if="options || booleans || textInputs">
      <div v-if="options" v-for="(values, key) in options" :key="key" class="demo-field">
        <label class="demo-label">{{ key }}</label>
        <div class="demo-select-wrap">
          <select v-model="state[key]" class="demo-select">
            <option v-for="val in values" :key="val" :value="val">{{ val }}</option>
          </select>
        </div>
      </div>
      <div v-if="textInputs" v-for="t in textInputs" :key="t" class="demo-field">
        <label class="demo-label">{{ t }}</label>
        <input type="text" v-model="state[t]" :placeholder="t" class="demo-text-input" />
      </div>
      <div v-if="booleans" v-for="b in booleans" :key="b" class="demo-field">
        <label class="demo-toggle">
          <input type="checkbox" v-model="state[b]" />
          <span class="demo-toggle-track">
            <span class="demo-toggle-thumb"></span>
          </span>
          <span class="demo-toggle-label">{{ b }}</span>
        </label>
      </div>
    </div>
    <div class="demo-preview" :style="previewStyle">
      <ClientOnly>
        <div :key="renderKey" v-html="previewHtml"></div>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
.demo-block {
  border: 1px solid var(--co-border);
  border-radius: 12px;
  margin: 16px 0 24px;
  overflow: hidden;
  background: var(--co-color-surface-static-raised);
}

.demo-controls {
  padding: 14px 20px;
  background: var(--co-color-surface-static-raised);
  border-bottom: 1px solid var(--co-border);
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.demo-field {
  display: flex;
  align-items: center;
  gap: 8px;
}

.demo-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--co-color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.demo-select-wrap {
  position: relative;
}

.demo-select {
  appearance: none;
  padding: 5px 28px 5px 10px;
  border: 1px solid var(--co-border-strong);
  border-radius: 8px;
  background: var(--co-deep);
  color: var(--co-text-primary);
  font-family: var(--co-font-mono);
  font-size: 0.78rem;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.demo-select:hover {
  border-color: var(--co-blue-500);
}

.demo-select:focus {
  outline: none;
  border-color: var(--co-blue-500);
  box-shadow: 0 0 0 2px var(--co-blue-alpha-15);
}

.demo-select-wrap::after {
  content: '▾';
  position: absolute;
  right: 9px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  color: var(--co-color-text-secondary);
  pointer-events: none;
}

.demo-text-input {
  padding: 5px 10px;
  border: 1px solid var(--co-border-strong);
  border-radius: 8px;
  background: var(--co-deep);
  color: var(--co-text-primary);
  font-family: var(--co-font-mono);
  font-size: 0.78rem;
  width: 120px;
  transition: border-color 0.2s ease;
}

.demo-text-input:hover {
  border-color: var(--co-blue-500);
}

.demo-text-input:focus {
  outline: none;
  border-color: var(--co-blue-500);
  box-shadow: 0 0 0 2px var(--co-blue-alpha-15);
}

.demo-text-input::placeholder {
  color: var(--co-color-text-secondary);
  opacity: 0.6;
}

/* Toggle switch */
.demo-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.demo-toggle input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.demo-toggle-track {
  position: relative;
  width: 32px;
  height: 18px;
  background: var(--co-border-strong);
  border-radius: 9px;
  transition: background 0.2s ease;
}

.demo-toggle input:checked + .demo-toggle-track {
  background: var(--co-blue-600);
}

.demo-toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  background: var(--co-text-primary);
  border-radius: 50%;
  transition: transform 0.2s ease;
}

.demo-toggle input:checked + .demo-toggle-track .demo-toggle-thumb {
  transform: translateX(14px);
}

.demo-toggle-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--co-color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Preview area — follows the page's active theme/mode via the cascade */
.demo-preview {
  padding: 40px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 100px;
  background-color: var(--co-color-surface-static-default);
  color: var(--co-color-text-default);
}
</style>
