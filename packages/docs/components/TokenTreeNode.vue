<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { TokenBranchNode, TokenTreeNode } from './token-explorer.types';

defineOptions({ name: 'TokenTreeNode' });

const props = defineProps({
  node: {
    type: Object as PropType<TokenTreeNode>,
    required: true,
  },
  depth: {
    type: Number,
    default: 0,
  },
  selectedName: {
    type: String,
    default: null,
  },
  isExpanded: {
    type: Function as PropType<(id: string) => boolean>,
    required: true,
  },
});

const emit = defineEmits<{
  toggle: [id: string];
  select: [name: string];
}>();

const isBranch = computed(() => props.node.type === 'branch');
const expanded = computed(() =>
  props.node.type === 'branch' ? props.isExpanded(props.node.id) : false,
);

function toggleBranch() {
  if (props.node.type !== 'branch') return;
  emit('toggle', props.node.id);
}
</script>

<template>
  <div class="token-tree-node">
    <button
      v-if="isBranch"
      type="button"
      class="branch-toggle"
      :class="{ expanded }"
      :style="{ '--node-depth': depth }"
      :aria-expanded="expanded"
      @click="toggleBranch"
    >
      <co-icon name="chevron-right" size="xs" class="branch-chevron" aria-hidden="true"></co-icon>
      <span class="branch-label">{{ node.label }}</span>
      <span class="branch-count">{{ node.count }}</span>
    </button>

    <button
      v-else
      type="button"
      class="token-leaf"
      :class="{ selected: selectedName === node.token.name }"
      :style="{ '--node-depth': depth }"
      :title="node.token.name"
      @click="emit('select', node.token.name)"
    >
      <span class="leaf-label">{{ node.label }}</span>
    </button>

    <div v-if="isBranch && expanded" class="branch-children">
      <TokenTreeNode
        v-for="child in (node as TokenBranchNode).children"
        :key="child.id"
        :node="child"
        :depth="depth + 1"
        :selected-name="selectedName"
        :is-expanded="isExpanded"
        @toggle="emit('toggle', $event)"
        @select="emit('select', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.token-tree-node {
  min-width: 0;
  font-family: var(--co-font-family-sans);
}

.branch-toggle,
.token-leaf {
  width: 100%;
  /* Depth step matches the chevron column (16px icon + 8px gap) so leaves
     and branch chevrons share a column at the same depth, and nested
     children sit under the parent's label. */
  padding-left: calc(var(--node-depth) * 24px + 14px);
}

.branch-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 10px;
  padding-right: 14px;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid var(--co-color-border-subtle);
  background: transparent;
  color: var(--co-color-text-default);
  text-align: left;
  font-family: var(--co-font-family-sans);
  cursor: pointer;
  transition:
    background-color 0.15s,
    color 0.15s;
}

.branch-toggle:hover {
  background: var(--co-color-surface-static-sunken);
}

.branch-chevron {
  color: var(--co-color-text-tertiary);
  transition: transform 0.15s ease;
  flex-shrink: 0;
}

.branch-toggle.expanded .branch-chevron {
  transform: rotate(90deg);
}

.branch-label {
  min-width: 0;
  font-size: var(--co-font-size-small);
  font-weight: var(--co-font-weight-medium);
  overflow-wrap: anywhere;
}

.branch-count {
  margin-left: auto;
  font-size: var(--co-font-size-xsmall);
  color: var(--co-color-text-secondary);
  white-space: nowrap;
}

.branch-children {
  min-width: 0;
}

.token-leaf {
  display: flex;
  align-items: center;
  min-height: 42px;
  padding-top: 10px;
  padding-right: 14px;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid var(--co-color-border-subtle);
  background: transparent;
  color: var(--co-color-text-secondary);
  text-align: left;
  font-family: var(--co-font-family-sans);
  cursor: pointer;
  transition:
    background-color 0.15s,
    color 0.15s;
}

.token-leaf:hover {
  background: var(--co-color-surface-static-sunken);
  color: var(--co-color-text-default);
}

.token-leaf.selected {
  background: color-mix(
    in srgb,
    var(--co-color-surface-interactive-primary-default) 12%,
    transparent
  );
  color: var(--co-color-text-link);
}

.leaf-label {
  min-width: 0;
  font-size: var(--co-font-size-small);
  overflow-wrap: anywhere;
}

@media (max-width: 767px) {
  .branch-toggle,
  .token-leaf {
    padding-left: calc(var(--node-depth) * 20px + 12px);
  }
}
</style>
