<script setup lang="ts">
import { withBase } from 'vitepress';
import type { NavItem } from '../navigation';

defineOptions({ name: 'CobaltSidebarItems' });

const props = withDefaults(
  defineProps<{
    items: NavItem[];
    parentKey?: string;
    isActive: (link: string | undefined) => boolean;
    isGroupOpen: (item: NavItem, key: string) => boolean;
    toggleGroup: (key: string, open: boolean) => void;
    navigate: (link: string, event: Event) => void;
  }>(),
  {
    parentKey: '',
  },
);

function itemKey(item: NavItem, index: number): string {
  return item.link ?? `${props.parentKey}/${index}-${item.text}`;
}

function onGroupToggle(event: Event, key: string) {
  const detail = (event as CustomEvent<{ open: boolean }>).detail;
  props.toggleGroup(key, detail.open);
}
</script>

<template>
  <template v-for="(item, index) in items" :key="itemKey(item, index)">
    <co-nav-drawer-group
      v-if="item.children"
      class="cobalt-sidebar-group"
      :label="item.text"
      :value="itemKey(item, index)"
      :open="isGroupOpen(item, itemKey(item, index))"
      @co-toggle="onGroupToggle($event, itemKey(item, index))"
    >
      <CobaltSidebarItems
        :items="item.children"
        :parent-key="itemKey(item, index)"
        :is-active="isActive"
        :is-group-open="isGroupOpen"
        :toggle-group="toggleGroup"
        :navigate="navigate"
      />
    </co-nav-drawer-group>

    <co-nav-drawer-item
      v-else-if="item.link"
      class="cobalt-sidebar-item"
      :value="withBase(item.link)"
      :href="withBase(item.link)"
      :selected="isActive(item.link)"
      @click="navigate(item.link, $event)"
    >
      <co-icon
        slot="prefix"
        class="cobalt-sidebar-marker"
        name="fiber-manual-record"
        size="xs"
        :fill="isActive(item.link) || undefined"
        aria-hidden="true"
      ></co-icon>
      {{ item.text }}
    </co-nav-drawer-item>
  </template>
</template>

<style scoped>
.cobalt-sidebar-marker {
  flex-shrink: 0;
  color: var(--co-color-text-tertiary);
  opacity: var(--co-opacity-placeholder);
  transition:
    color var(--co-duration) var(--co-ease),
    opacity var(--co-duration) var(--co-ease);
}

.cobalt-sidebar-item:hover .cobalt-sidebar-marker,
.cobalt-sidebar-item[selected] .cobalt-sidebar-marker {
  color: var(--co-component-nav-drawer-item-foreground-selected);
  opacity: 1;
}
</style>
