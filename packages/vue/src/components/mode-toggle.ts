import { defineComponent, h, ref, onMounted, onUnmounted, type PropType } from 'vue';
import type { ModeToggleMode } from '@cobalt/components/mode-toggle';
import type { IconSize } from '@cobalt/components/icon';
import { registerElement } from '../register-element.js';

registerElement(() => import('@cobalt/components/mode-toggle'));

export type CoModeToggleProps = {
  mode?: ModeToggleMode;
  size?: IconSize;
  persist?: boolean;
  storageNamespace?: string;
  label?: string;
  disabled?: boolean;
};

export const CoModeToggle = defineComponent({
  name: 'CoModeToggle',
  props: {
    mode: {
      type: String as PropType<ModeToggleMode>,
      default: undefined,
    },
    size: {
      type: String as PropType<IconSize>,
      default: 'md',
    },
    persist: {
      type: Boolean,
      default: true,
    },
    storageNamespace: {
      type: String,
      default: 'cobalt',
    },
    label: {
      type: String,
      default: 'Color mode',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['co-change'],
  setup(props, { attrs, emit }) {
    const elRef = ref<HTMLElement | null>(null);
    const handler = (event: Event) => emit('co-change', event);

    onMounted(() => {
      const el = elRef.value;
      if (!el) return;
      el.addEventListener('co-change', handler);
    });

    onUnmounted(() => {
      const el = elRef.value;
      if (!el) return;
      el.removeEventListener('co-change', handler);
    });

    return () =>
      h('co-mode-toggle', {
        ...attrs,
        ref: elRef,
        ...(props.mode ? { mode: props.mode } : {}),
        size: props.size,
        persist: props.persist,
        'storage-namespace': props.storageNamespace,
        label: props.label,
        disabled: props.disabled || undefined,
      });
  },
});
