import { defineComponent, h, ref, onMounted } from 'vue';
import '@cobalt/components';

export type CoNavHeaderBarProps = {
  label?: string;
};

export const CoNavHeaderBar = defineComponent({
  name: 'CoNavHeaderBar',
  props: {
    label: { type: String, default: 'Header' },
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
        'co-nav-header-bar',
        {
          ...attrs,
          ref: elRef,
          label: props.label,
        },
        slots.default?.(),
      );
  },
});
