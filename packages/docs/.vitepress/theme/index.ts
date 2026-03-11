import type { Theme } from 'vitepress';
import CobaltLayout from './components/CobaltLayout.vue';
import ComponentDemo from '../../components/ComponentDemo.vue';
import CodeTabs from '../../components/CodeTabs.vue';
import ColorSwatch from '../../components/ColorSwatch.vue';

// Shoelace base theme (required for sl-* component styles)
import '@shoelace-style/shoelace/dist/themes/light.css';

// Cobalt design tokens + Shoelace mapping
import '@cobalt/tokens/css';
import '@cobalt/tokens/css/dark';
import '@cobalt/tokens/css/shoelace';

import './cobalt.css';

export default {
  Layout: CobaltLayout,
  enhanceApp({ app }) {
    app.component('ComponentDemo', ComponentDemo);
    app.component('CodeTabs', CodeTabs);
    app.component('ColorSwatch', ColorSwatch);

    // Register Cobalt web components (client-side only)
    if (typeof window !== 'undefined') {
      import('@shoelace-style/shoelace/dist/utilities/base-path.js').then(({ setBasePath }) => {
        setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.1/cdn/');
      });
      import('@cobalt/components');
    }
  },
} satisfies Theme;
