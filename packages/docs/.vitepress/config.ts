import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Cobalt Design System',
  description: 'A design system built with Lit + Shoelace',
  head: [
    [
      'script',
      {},
      `(function(){var t=localStorage.getItem('cobalt-theme');if(t)document.documentElement.setAttribute('data-theme',t)})()`,
    ],
  ],
  themeConfig: {
    nav: [
      { text: 'Components', link: '/components/button' },
      { text: 'Tokens', link: '/tokens/' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [{ text: 'Introduction', link: '/' }],
      },
      {
        text: 'Components',
        items: [{ text: 'Button', link: '/components/button' }],
      },
      {
        text: 'Tokens',
        items: [{ text: 'Overview', link: '/tokens/' }],
      },
    ],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag.startsWith('cb-') || tag.startsWith('sl-'),
      },
    },
  },
  vite: {
    optimizeDeps: {
      include: ['lit', '@shoelace-style/shoelace'],
    },
  },
});
