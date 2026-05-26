<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import { CoNavRailBar } from '@cobalt/vue/nav-rail-bar';
import { CoNavRailItem } from '@cobalt/vue/nav-rail-item';
import { navigation } from '../navigation';

const { theme } = useData();
const props = defineProps<{ activeIndex: number }>();
const emit = defineEmits<{ (e: 'select', index: number): void }>();

const activeValue = computed(
  () => navigation[props.activeIndex]?.label ?? navigation[0]?.label ?? '',
);

function onRailChange(event: Event) {
  const value = (event as CustomEvent<{ value: string }>).detail?.value;
  const index = navigation.findIndex((group) => group.label === value);
  if (index !== -1) {
    emit('select', index);
  }
}
</script>

<template>
  <CoNavRailBar class="cobalt-rail" label="Sections" :value="activeValue" @co-change="onRailChange">
    <CoNavRailItem
      v-for="(group, i) in navigation"
      :key="group.label"
      :value="group.label"
      :icon="group.icon"
      :selected="i === props.activeIndex || undefined"
    >
      {{ group.railLabel ?? group.label }}
    </CoNavRailItem>

    <div slot="footer" class="rail-footer">
      <span class="rail-version">v{{ theme.cobaltVersion }}</span>
      <span class="rail-badge">{{ theme.cobaltVersionState }}</span>
    </div>
  </CoNavRailBar>
</template>

<style scoped>
.cobalt-rail {
  position: fixed;
  top: calc(var(--co-topbar-offset, var(--co-topbar-height)) + var(--co-panel-gap));
  left: var(--co-panel-gap);
  bottom: var(--co-panel-gap);
  width: var(--co-rail-width);
  z-index: 55;
}

.rail-footer {
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
  color: var(--co-color-text-secondary);
}

.rail-badge {
  font-size: var(--co-typography-eyebrow-size);
  font-weight: var(--co-typography-eyebrow-weight);
  letter-spacing: var(--co-typography-eyebrow-tracking);
  line-height: var(--co-typography-eyebrow-line-height);
  text-transform: uppercase;
  color: var(--co-color-text-on-primary);
  background: var(--co-color-surface-interactive-theme-default);
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
