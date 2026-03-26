import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/design-system-poc/',
  title: 'Cobalt Design System',
  description: 'A design system built with Lit + Lion',
  markdown: {
    theme: {
      dark: 'tokyo-night',
      light: 'github-light',
    },
  },
  head: [
    [
      'script',
      {},
      `(function(){var t=localStorage.getItem('cobalt-theme');if(t)document.documentElement.setAttribute('data-theme',t)})()`,
    ],
  ],
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Get Started', link: '/getting-started/' },
      { text: 'Foundations', link: '/foundations/' },
      { text: 'Components', link: '/components/button' },
      { text: 'Patterns', link: '/patterns/' },
      { text: 'Guidance', link: '/guidance/' },
    ],
    sidebar: [
      { text: 'Introduction', items: [{ text: 'Home', link: '/' }] },
      {
        text: 'Get Started',
        items: [
          { text: 'Overview', link: '/getting-started/' },
          { text: 'For Designers', link: '/getting-started/designers' },
          { text: 'For Developers', link: '/getting-started/developers' },
          { text: 'For Product Managers', link: '/getting-started/product-managers' },
        ],
      },
      {
        text: 'Design Foundations',
        items: [
          { text: 'Overview', link: '/foundations/' },
          { text: 'Colors', link: '/foundations/colors' },
          { text: 'Typography', link: '/foundations/typography' },
          { text: 'Spacing', link: '/foundations/spacing' },
          { text: 'Elevation', link: '/foundations/elevation' },
          { text: 'Motion', link: '/foundations/motion' },
          { text: 'Breakpoints', link: '/foundations/breakpoints' },
          { text: 'Iconography', link: '/foundations/iconography' },
          { text: 'Accessibility', link: '/foundations/accessibility' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Icon', link: '/components/icon' },
        ],
      },
      {
        text: 'Patterns',
        items: [
          { text: 'Overview', link: '/patterns/' },
          { text: 'Forms & Validation', link: '/patterns/forms' },
          { text: 'Navigation', link: '/patterns/navigation' },
          { text: 'Data Display', link: '/patterns/data-display' },
          { text: 'Feedback & Status', link: '/patterns/feedback' },
          { text: 'Layout', link: '/patterns/layout' },
        ],
      },
      {
        text: 'Guidance',
        items: [
          { text: 'Overview', link: '/guidance/' },
          { text: 'Design Principles', link: '/guidance/principles' },
          { text: 'Content & Writing', link: '/guidance/content' },
          { text: 'Migration Guides', link: '/guidance/migration' },
        ],
      },
      {
        text: 'Contributing',
        items: [
          { text: 'Overview', link: '/contributing/' },
          { text: 'How to Contribute', link: '/contributing/how-to-contribute' },
          { text: 'Component Proposals', link: '/contributing/component-proposal' },
          { text: 'Development Setup', link: '/contributing/development-setup' },
          { text: 'Coding Standards', link: '/contributing/coding-standards' },
          { text: 'Design Contributions', link: '/contributing/design-contribution' },
          { text: 'Versioning & Releases', link: '/contributing/versioning' },
        ],
      },
      { text: 'Changelog', items: [{ text: 'Release Notes', link: '/changelog' }] },
    ],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag.startsWith('co-') || tag.startsWith('lion-'),
      },
    },
  },
  vite: {
    optimizeDeps: {
      include: ['lit', '@lion/ui/button.js', '@cobalt/components', '@cobalt/icons'],
    },
  },
});
