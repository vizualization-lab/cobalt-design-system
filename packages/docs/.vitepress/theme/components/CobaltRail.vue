<script setup lang="ts">
import { ref } from 'vue';
import { useData } from 'vitepress';
import { navigation } from '../navigation';

const { theme } = useData();
const props = defineProps<{ activeIndex: number }>();
const emit = defineEmits<{ (e: 'select', index: number): void }>();

const railRef = ref<HTMLElement | null>(null);

function focusItem(i: number) {
  const el = railRef.value?.querySelectorAll<HTMLButtonElement>('.rail-item')[i];
  el?.focus();
}

function onKey(event: KeyboardEvent, i: number) {
  const last = navigation.length - 1;
  let next = i;
  switch (event.key) {
    case 'ArrowDown':
      next = i === last ? 0 : i + 1;
      break;
    case 'ArrowUp':
      next = i === 0 ? last : i - 1;
      break;
    case 'Home':
      next = 0;
      break;
    case 'End':
      next = last;
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      emit('select', i);
      return;
    default:
      return;
  }
  event.preventDefault();
  emit('select', next);
  focusItem(next);
}
</script>

<template>
  <aside class="cobalt-rail" ref="railRef" role="tablist" aria-label="Sections">
    <button
      v-for="(group, i) in navigation"
      :key="group.label"
      type="button"
      role="tab"
      :aria-selected="i === props.activeIndex"
      aria-controls="cobalt-subnav"
      :tabindex="i === props.activeIndex ? 0 : -1"
      class="rail-item"
      :class="{ 'is-active': i === props.activeIndex }"
      @click="emit('select', i)"
      @keydown="onKey($event, i)"
    >
      <co-icon
        :name="group.icon"
        size="md"
        :fill="i === props.activeIndex || undefined"
        aria-hidden="true"
      ></co-icon>
      <span class="rail-item-label">{{ group.railLabel ?? group.label }}</span>
    </button>

    <div class="rail-footer">
      <span class="rail-version">v{{ theme.cobaltVersion }}</span>
      <span class="rail-badge">alpha</span>
    </div>
  </aside>
</template>

<style scoped>
.cobalt-rail {
  position: fixed;
  top: calc(var(--co-topbar-height) + var(--co-panel-gap));
  left: var(--co-panel-gap);
  bottom: var(--co-panel-gap);
  width: var(--co-rail-width);
  z-index: 55;
  display: flex;
  flex-direction: column;
  gap: var(--co-component-nav-rail-bar-gap, var(--co-space-2));
  padding: var(--co-component-nav-rail-bar-padding, var(--co-space-2));
  background: var(--co-component-nav-rail-bar-background, var(--co-color-surface-sunken));
  border-radius: var(--co-component-nav-rail-bar-radius, var(--co-shape-radius-lg));
  box-shadow: var(--co-elevation-shadow-md, 0 4px 12px rgba(0, 0, 0, 0.12));
  overflow-y: auto;
  overflow-x: hidden;
}

.rail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--co-component-nav-rail-item-gap, var(--co-space-3));
  width: 100%;
  padding: var(--co-component-nav-rail-item-padding-y, var(--co-space-2))
    var(--co-component-nav-rail-item-padding-x, var(--co-space-2));
  border: none;
  background: var(
    --co-component-nav-rail-item-background-default,
    var(--co-color-interactive-subtle-default)
  );
  border-radius: var(--co-component-nav-rail-item-radius, var(--co-shape-radius-2xl));
  cursor: pointer;
  color: var(--co-component-nav-rail-item-foreground-default, var(--co-color-text-secondary));
  font-family: var(--co-font-body);
  font-size: var(--co-font-size-xsmall);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-caption-tracking);
  line-height: 1.2;
  text-align: center;
  transition:
    background var(--co-duration) var(--co-ease),
    color var(--co-duration) var(--co-ease),
    box-shadow var(--co-duration) var(--co-ease),
    transform var(--co-duration) var(--co-ease);
}

.rail-item co-icon {
  --icon-size: var(--co-component-nav-rail-item-icon-size, 22px);
  color: currentColor;
  font-size: var(--co-component-nav-rail-item-icon-size, 22px);
  width: var(--co-component-nav-rail-item-icon-size, 22px);
  height: var(--co-component-nav-rail-item-icon-size, 22px);
  flex-shrink: 0;
}

.rail-item:hover {
  background: var(
    --co-component-nav-rail-item-background-hover,
    var(--co-color-interactive-subtle-hover)
  );
}

.rail-item:hover co-icon,
.rail-item:active co-icon,
.rail-item.is-active co-icon {
  color: var(--co-color-interactive-primary-default);
}

.rail-item:active {
  background: var(
    --co-component-nav-rail-item-background-active,
    var(--co-color-interactive-subtle-active)
  );
}

.rail-item:focus-visible {
  outline: 2px solid var(--co-component-nav-rail-item-focus-ring, var(--co-color-border-focus));
  outline-offset: 2px;
}

.rail-item.is-active {
  background: var(
    --co-component-nav-rail-item-background-selected,
    var(--co-color-interactive-subtle-selected)
  );
}

.rail-item-label {
  display: block;
  max-width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
}

.rail-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--co-space-1);
  padding: var(--co-space-2) 0;
}

.rail-version {
  font-family: var(--co-font-mono);
  font-size: var(--co-typography-caption-size);
  font-weight: var(--co-typography-caption-weight);
  letter-spacing: var(--co-typography-caption-tracking);
  line-height: var(--co-typography-caption-line-height);
  color: var(--co-color-text-tertiary);
}

.rail-badge {
  font-size: var(--co-typography-eyebrow-size);
  font-weight: var(--co-typography-eyebrow-weight);
  letter-spacing: var(--co-typography-eyebrow-tracking);
  line-height: var(--co-typography-eyebrow-line-height);
  text-transform: uppercase;
  color: var(--co-color-primary-base);
  background: var(--co-color-interactive-subtle-selected);
  padding: 2px 7px;
  border-radius: var(--co-shape-radius-sm);
}

@media (max-width: 768px) {
  .cobalt-rail {
    transform: translateX(calc(-100% - var(--co-panel-gap) - 4px));
    transition: transform 0.3s var(--co-ease);
    z-index: 70;
  }

  .cobalt-rail.is-open {
    transform: translateX(0);
  }
}
</style>
