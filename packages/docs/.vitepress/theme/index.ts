import type { Theme } from 'vitepress';
import CobaltLayout from './components/CobaltLayout.vue';
import ComponentDemo from '../../components/ComponentDemo.vue';
import CodeTabs from '../../components/CodeTabs.vue';
import ColorSwatch from '../../components/ColorSwatch.vue';
import IconGallery from '../../components/IconGallery.vue';

// Shoelace base theme (required for sl-* component styles)
import '@shoelace-style/shoelace/dist/themes/light.css';

// Cobalt design tokens + Shoelace mapping
import '@cobalt/tokens/css';
import '@cobalt/tokens/css/dark';
import '@cobalt/tokens/css/shoelace';

// VitePress icons (needed for local search component)
import 'vitepress/dist/client/theme-default/styles/icons.css';

import './cobalt.css';

export default {
  Layout: CobaltLayout,
  enhanceApp({ app }) {
    app.component('ComponentDemo', ComponentDemo);
    app.component('CodeTabs', CodeTabs);
    app.component('ColorSwatch', ColorSwatch);
    app.component('IconGallery', IconGallery);

    // Register Cobalt web components (client-side only)
    if (typeof window !== 'undefined') {
      import('@shoelace-style/shoelace/dist/utilities/base-path.js').then(({ setBasePath }) => {
        setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.1/cdn/');
      });
      import('@cobalt/components');
    }
  },
} satisfies Theme;
