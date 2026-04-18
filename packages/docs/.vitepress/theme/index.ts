import type { Theme } from 'vitepress';
import CobaltLayout from './components/CobaltLayout.vue';
import ComponentDemo from '../../components/ComponentDemo.vue';
import CodeTabs from '../../components/CodeTabs.vue';
import ColorSwatch from '../../components/ColorSwatch.vue';
import IconGallery from '../../components/IconGallery.vue';
import A11yReport from '../../components/A11yReport.vue';
import ComponentChangelog from '../../components/ComponentChangelog.vue';
import ChangelogPage from '../../components/ChangelogPage.vue';
import TokenTable from '../../components/TokenTable.vue';
import ArchitectureFlow from '../../components/ArchitectureFlow.vue';

// Cobalt design tokens
import '@cobalt/tokens/css';
import '@cobalt/tokens/css/dark';

// VitePress icons (needed for local search component)
import 'vitepress/dist/client/theme-default/styles/icons.css';

import './cobalt.css';
import './mermaid.css';

export default {
  Layout: CobaltLayout,
  enhanceApp({ app }) {
    app.component('ComponentDemo', ComponentDemo);
    app.component('CodeTabs', CodeTabs);
    app.component('ColorSwatch', ColorSwatch);
    app.component('IconGallery', IconGallery);
    app.component('A11yReport', A11yReport);
    app.component('ComponentChangelog', ComponentChangelog);
    app.component('ChangelogPage', ChangelogPage);
    app.component('TokenTable', TokenTable);
    app.component('ArchitectureFlow', ArchitectureFlow);

    // Register Cobalt web components (client-side only)
    if (typeof window !== 'undefined') {
      import('@cobalt/components');
    }
  },
} satisfies Theme;
