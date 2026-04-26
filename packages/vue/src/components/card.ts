import { defineComponent, h, ref, onMounted } from 'vue';
import '@cobalt/components';

export type CoCardProps = {
  label?: string;
};

export const CoCard = defineComponent({
  name: 'CoCard',
  props: {
    label: { type: String, default: '' },
  },
  setup(props, { attrs, slots }) {
    const elRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      const el = elRef.value as any;
      if (!el) return;
      el.label = props.label;
    });

    return () =>
      h(
        'co-card',
        {
          ...attrs,
          ref: elRef,
          label: props.label || undefined,
        },
        slots.default?.(),
      );
  },
});
