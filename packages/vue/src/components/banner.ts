import { defineComponent, h, ref, onMounted } from 'vue';
import { registerElement } from '../register-element.js';

registerElement(() => import('@cobalt/components/banner'));

export type CoBannerProps = {
  label?: string;
};

export const CoBanner = defineComponent({
  name: 'CoBanner',
  props: {
    label: { type: String, default: 'Banner' },
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
        'co-banner',
        {
          ...attrs,
          ref: elRef,
          label: props.label,
        },
        slots.default?.(),
      );
  },
});
