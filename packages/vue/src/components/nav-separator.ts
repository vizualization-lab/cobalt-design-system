import { defineComponent, h } from 'vue';
import { registerElement } from '../register-element.js';

registerElement(() => import('@cobalt/components/nav-separator'));

export const CoNavSeparator = defineComponent({
  name: 'CoNavSeparator',
  setup() {
    return () => h('co-nav-separator');
  },
});
