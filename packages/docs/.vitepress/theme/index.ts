import type { Theme } from 'vitepress';
import CobaltLayout from './components/CobaltLayout.vue';
import ComponentDemo from '../../components/ComponentDemo.vue';

import './cobalt.css';

export default {
  Layout: CobaltLayout,
  enhanceApp({ app }) {
    app.component('ComponentDemo', ComponentDemo);
  },
} satisfies Theme;
