import { defineComponent, h } from 'vue';
import '@cobalt/components/nav-separator';

export const CoNavSeparator = defineComponent({
  name: 'CoNavSeparator',
  setup() {
    return () => h('co-nav-separator');
  },
});
