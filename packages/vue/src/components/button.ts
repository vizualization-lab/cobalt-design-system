import { defineComponent, h, ref, onMounted, onUnmounted, type PropType } from 'vue';
import type { ButtonVariant, ButtonSize } from '@cobalt/components/button';
import { registerElement } from '../register-element.js';

registerElement(() => import('@cobalt/components/button'));

export type CoButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  type?: 'submit' | 'reset' | 'button';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export const CoButton = defineComponent({
  name: 'CoButton',
  props: {
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'primary',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<'submit' | 'reset' | 'button'>,
      default: 'button',
    },
    href: {
      type: String,
      default: undefined,
    },
    target: {
      type: String as PropType<'_blank' | '_self' | '_parent' | '_top'>,
      default: undefined,
    },
  },
  emits: ['co-focus', 'co-blur'],
  setup(props, { attrs, emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);
    const focusHandler = (event: Event) => emit('co-focus', event);
    const blurHandler = (event: Event) => emit('co-blur', event);

    onMounted(() => {
      const el = elRef.value;
      if (!el) return;

      el.addEventListener('co-focus', focusHandler);
      el.addEventListener('co-blur', blurHandler);
    });

    onUnmounted(() => {
      const el = elRef.value;
      if (!el) return;

      el.removeEventListener('co-focus', focusHandler);
      el.removeEventListener('co-blur', blurHandler);
    });

    return () =>
      h(
        'co-button',
        {
          ...attrs,
          ref: elRef,
          variant: props.variant,
          size: props.size,
          disabled: props.disabled || undefined,
          loading: props.loading || undefined,
          type: props.type,
          href: props.href,
          target: props.target,
        },
        slots.default?.(),
      );
  },
});
