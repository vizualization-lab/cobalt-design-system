import { defineComponent, h, ref, onMounted, type PropType } from 'vue';
import type { ButtonVariant, ButtonSize } from '@cobalt/components/button';
import '@cobalt/components/button';

export type CbButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  type?: 'submit' | 'reset' | 'button';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export const CbButton = defineComponent({
  name: 'CbButton',
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
  emits: ['cb-focus', 'cb-blur'],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      const el = elRef.value;
      if (!el) return;

      el.addEventListener('cb-focus', (e: Event) => {
        emit('cb-focus', e);
      });
      el.addEventListener('cb-blur', (e: Event) => {
        emit('cb-blur', e);
      });
    });

    return () =>
      h(
        'cb-button',
        {
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
