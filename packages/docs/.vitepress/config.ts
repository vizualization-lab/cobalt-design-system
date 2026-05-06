import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
import taskLists from 'markdown-it-task-lists';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';
import {
  CoColorStatePrimarySubtle,
  CoColorTextDefault,
  CoColorStatePrimaryBase,
  CoColorTextSecondary,
  CoColorSurfaceStaticSunken,
  CoColorBorderStrong,
  CoColorSurfaceStaticPage,
  CoColorBorderDefault,
  CoColorSurfaceStaticDefault,
  CoColorStateWarningSubtle,
} from '@cobalt/tokens';
import { toVitePressNav, toVitePressSidebar } from './theme/navigation';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../components/package.json'), 'utf-8'),
);

const repoRoot = path.resolve(__dirname, '../../..');
const env = loadEnv('production', repoRoot, 'COBALT_');

const githubOrg = env.COBALT_GITHUB_ORG || 'vizualization-lab';
const githubRepo = env.COBALT_GITHUB_REPO || 'cobalt-design-system';
const githubUrl = env.COBALT_GITHUB_URL || `https://github.com/${githubOrg}/${githubRepo}`;
const registryUrl = env.COBALT_REGISTRY_URL || 'https://registry.your-org.com';
const caBundlePath = env.COBALT_CA_BUNDLE || './path/to/ca/bundle';
const contactEmail = env.COBALT_CONTACT_EMAIL || 'DESIGN_SYSTEM';

/**
 * Markdown-it plugin that replaces %GITHUB_URL% placeholders in the raw
 * markdown source before parsing, so replacements work everywhere — including
 * fenced code blocks and link hrefs.
 */
function replacePlaceholders(md: any) {
  const replacements: Record<string, string> = {
    '%GITHUB_URL%': githubUrl,
    '%REGISTRY_URL%': registryUrl,
    '%CA_BUNDLE_PATH%': caBundlePath,
    '%CONTACT_EMAIL%': contactEmail,
  };

  const originalParse = md.parse.bind(md);
  md.parse = (src: string, env: any) => {
    let processed = src;
    for (const [key, value] of Object.entries(replacements)) {
      processed = processed.replaceAll(key, value);
    }
    return originalParse(processed, env);
  };
}

export default withMermaid(
  defineConfig({
    base: '/cobalt-design-system/',
    title: 'Cobalt Design System',
    description: 'A design system built with Lit + Lion',
    markdown: {
      theme: {
        dark: 'github-dark-high-contrast',
        light: 'github-light',
      },
      config: (md) => {
        md.use(taskLists);
        md.use(replacePlaceholders);
      },
    },
    head: [
      [
        'script',
        {},
        `(function(){var m=localStorage.getItem('cobalt-mode');if(m==='dark')document.documentElement.setAttribute('data-mode','dark')})()`,
      ],
    ],
    mermaid: {
      theme: 'base',
      themeVariables: {
        // Core palette — light-mode token values as defaults
        primaryColor: CoColorStatePrimarySubtle,
        primaryTextColor: CoColorTextDefault,
        primaryBorderColor: CoColorStatePrimaryBase,
        lineColor: CoColorTextSecondary,
        secondaryColor: CoColorSurfaceStaticSunken,
        secondaryTextColor: CoColorTextDefault,
        secondaryBorderColor: CoColorBorderStrong,
        tertiaryColor: CoColorSurfaceStaticPage,
        tertiaryTextColor: CoColorTextSecondary,
        tertiaryBorderColor: CoColorBorderDefault,

        // General
        background: CoColorSurfaceStaticDefault,

        // Flowchart
        nodeBorder: CoColorStatePrimaryBase,
        clusterBkg: CoColorSurfaceStaticPage,
        clusterBorder: CoColorBorderDefault,
        defaultLinkColor: CoColorTextSecondary,
        edgeLabelBackground: CoColorSurfaceStaticDefault,
        nodeTextColor: CoColorTextDefault,

        // Sequence diagram
        actorBkg: CoColorStatePrimarySubtle,
        actorBorder: CoColorStatePrimaryBase,
        actorTextColor: CoColorTextDefault,
        signalColor: CoColorTextSecondary,
        activationBkgColor: CoColorStatePrimarySubtle,
        activationBorderColor: CoColorStatePrimaryBase,

        // Notes
        noteBkgColor: CoColorStateWarningSubtle,
        noteTextColor: CoColorTextDefault,
        noteBorderColor: CoColorBorderDefault,

        // Text
        textColor: CoColorTextDefault,

        // Font — must match --co-font-family-sans so Mermaid measures and
        // renders with the same font, preventing text overflow in nodes.
        fontFamily: '"Inter Variable", "Noto Sans Variable", system-ui, sans-serif',
      },
      flowchart: {
        useMaxWidth: false,
        padding: 16,
        subGraphTitleMargin: { top: 12, bottom: 4 },
      },
      sequence: {
        useMaxWidth: false,
      },
      state: {
        useMaxWidth: false,
      },
    },
    mermaidPlugin: {
      class: 'cobalt-mermaid',
    },
    themeConfig: {
      cobaltVersion: pkg.version,
      cobaltVersionState: 'alpha',
      github: {
        url: githubUrl,
        org: githubOrg,
        repo: githubRepo,
      },
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
        include: [
          'mermaid',
          'lit',
          '@lion/ui/button.js',
          '@lion/ui/checkbox-group.js',
          '@lion/ui/combobox.js',
          '@lion/ui/input.js',
          '@lion/ui/listbox.js',
          '@lion/ui/radio-group.js',
          '@lion/ui/select-rich.js',
          '@lion/ui/textarea.js',
          '@cobalt/components',
          '@cobalt/icons',
        ],
      },
    },
  }),
);
