import { defineConfig } from 'vitepress';
import taskLists from 'markdown-it-task-lists';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { toVitePressNav, toVitePressSidebar } from './theme/navigation';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../components/package.json'), 'utf-8'),
);

export default defineConfig({
  base: '/cobalt-design-system/',
  title: 'Cobalt Design System',
  description: 'A design system built with Lit + Lion',
  markdown: {
    theme: {
      dark: 'tokyo-night',
      light: 'github-light',
    },
    config: (md) => {
      md.use(taskLists);
    },
  },
  head: [
    [
      'script',
      {},
      `(function(){var t=localStorage.getItem('cobalt-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark')})()`,
    ],
  ],
  themeConfig: {
    cobaltVersion: pkg.version,
    search: {
      provider: 'local',
    },
    nav: toVitePressNav(),
    sidebar: toVitePressSidebar(),
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
