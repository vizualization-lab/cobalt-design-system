import { defineComponent, h, ref, onMounted, onUnmounted, type PropType } from 'vue';
import type { ButtonVariant, ButtonSize } from '@cobalt/components/button';
import type { ButtonIconLabelPosition } from '@cobalt/components/button-icon';
import '@cobalt/components/button-icon';

export type CoButtonIconProps = {
  name?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  labelPosition?: ButtonIconLabelPosition;
  disabled?: boolean;
};

export const CoButtonIcon = defineComponent({
  name: 'CoButtonIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'primary',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'md',
    },
    label: {
      type: String,
      default: undefined,
    },
    labelPosition: {
      type: String as PropType<ButtonIconLabelPosition>,
      default: 'bottom',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['co-focus', 'co-blur'],
  setup(props, { emit }) {
    const elRef = ref<HTMLElement | null>(null);

    const handlers: Array<[string, (e: Event) => void]> = [
      ['co-focus', (e: Event) => emit('co-focus', e)],
      ['co-blur', (e: Event) => emit('co-blur', e)],
    ];

    onMounted(() => {
      const el = elRef.value;
      if (!el) return;
      for (const [event, handler] of handlers) {
        el.addEventListener(event, handler);
      }
    });

    onUnmounted(() => {
      const el = elRef.value;
      if (!el) return;
      for (const [event, handler] of handlers) {
        el.removeEventListener(event, handler);
      }
    });

    return () =>
      h('co-button-icon', {
        ref: elRef,
        name: props.name,
        variant: props.variant,
        size: props.size,
        label: props.label,
        'label-position': props.labelPosition,
        disabled: props.disabled || undefined,
      });
  },
});
