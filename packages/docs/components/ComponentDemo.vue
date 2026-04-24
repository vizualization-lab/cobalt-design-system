<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  tag: string;
  label?: string;
  slotHtml?: string;
  defaults?: Record<string, string | boolean>;
  options?: Record<string, string[]>;
  booleans?: string[];
  textInputs?: string[];
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

const previewDark = ref(false);

function syncThemeFromPage() {
  previewDark.value = document.documentElement.getAttribute('data-mode') === 'dark';
}

let observer: MutationObserver | null = null;

onMounted(() => {
  syncThemeFromPage();
  observer = new MutationObserver(syncThemeFromPage);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode'] });
});

onUnmounted(() => {
  observer?.disconnect();
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
      <div class="demo-field demo-theme-toggle">
        <button
          class="demo-theme-btn"
          :class="{ 'is-dark': previewDark }"
          @click="previewDark = !previewDark"
          :title="previewDark ? 'Switch to light mode' : 'Switch to dark mode'"
          aria-label="Toggle preview theme"
        >
          <svg v-if="previewDark" width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
            <path
              d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,135.21,232.4a104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM135.21,216.4A88,88,0,0,1,65.66,67.33,89,89,0,0,1,96,49.21,104.11,104.11,0,0,0,206.79,160,89,89,0,0,1,135.21,216.4Z"
            />
          </svg>
          <svg v-else width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
            <path
              d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="demo-preview"
      :class="previewDark ? 'demo-preview--dark' : 'demo-preview--light'"
      :data-mode="previewDark ? 'dark' : undefined"
    >
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
  background: var(--co-color-surface-raised);
}

.demo-controls {
  padding: 14px 20px;
  background: var(--co-color-surface-raised);
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

.demo-theme-toggle {
  margin-left: auto;
}

.demo-theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--co-border);
  border-radius: 8px;
  background: transparent;
  color: var(--co-color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.demo-theme-btn:hover {
  border-color: var(--co-border-strong);
  color: var(--co-text-primary);
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

/* Preview area */
.demo-preview {
  padding: 40px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 100px;
  transition: background-color 0.3s ease;
}

.demo-preview--dark {
  background-color: #0f1d32;
  color: #e8eef6;
}

.demo-preview--light {
  background-color: #ffffff;
  color: #1a2332;
}
</style>
