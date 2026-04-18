import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

type CobaltStorybookLogo = 'angular' | 'react' | 'vue' | 'web-components';

type CobaltStorybookBrandOptions = {
  title: string;
  logo: CobaltStorybookLogo;
};

const wordmarks: Record<CobaltStorybookLogo, string> = {
  'web-components': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 48" role="img" aria-label="Cobalt Web Components">
      <rect width="252" height="48" rx="8" fill="#ffffff"/>
      <path d="M24 8 38 16v16L24 40 10 32V16L24 8Z" fill="#2563eb"/>
      <path d="m19 18-5 6 5 6M29 18l5 6-5 6" fill="none" stroke="#ffffff" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m26 16-4 16" fill="none" stroke="#bfdbfe" stroke-width="2.75" stroke-linecap="round"/>
      <text x="52" y="23" fill="#0f172a" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="700">Cobalt</text>
      <text x="52" y="37" fill="#475569" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="600">Web Components</text>
    </svg>
  `,
  react: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188 48" role="img" aria-label="Cobalt React">
      <rect width="188" height="48" rx="8" fill="#ffffff"/>
      <circle cx="24" cy="24" r="3.5" fill="#087ea4"/>
      <ellipse cx="24" cy="24" rx="17" ry="6.5" fill="none" stroke="#087ea4" stroke-width="2.5"/>
      <ellipse cx="24" cy="24" rx="17" ry="6.5" fill="none" stroke="#087ea4" stroke-width="2.5" transform="rotate(60 24 24)"/>
      <ellipse cx="24" cy="24" rx="17" ry="6.5" fill="none" stroke="#087ea4" stroke-width="2.5" transform="rotate(120 24 24)"/>
      <text x="52" y="23" fill="#0f172a" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="700">Cobalt</text>
      <text x="52" y="37" fill="#475569" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="600">React</text>
    </svg>
  `,
  vue: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 48" role="img" aria-label="Cobalt Vue">
      <rect width="176" height="48" rx="8" fill="#ffffff"/>
      <path d="M7 10h10l7 12 7-12h10L24 40 7 10Z" fill="#41b883"/>
      <path d="M17 10h7l7 12 7-12h7L24 36 17 10Z" fill="#35495e"/>
      <text x="52" y="23" fill="#0f172a" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="700">Cobalt</text>
      <text x="52" y="37" fill="#475569" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="600">Vue</text>
    </svg>
  `,
  angular: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 48" role="img" aria-label="Cobalt Angular">
      <rect width="196" height="48" rx="8" fill="#ffffff"/>
      <path d="M24 6 42 14 39 37 24 45 9 37 6 14 24 6Z" fill="#dd0031"/>
      <path d="M24 6v39l15-8 3-23L24 6Z" fill="#c3002f"/>
      <path d="M24 13 13.5 37h5.25l2.1-5.25h6.3L29.25 37h5.25L24 13Zm0 7.2 3.5 7.6h-7l3.5-7.6Z" fill="#ffffff"/>
      <text x="52" y="23" fill="#0f172a" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="700">Cobalt</text>
      <text x="52" y="37" fill="#475569" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="600">Angular</text>
    </svg>
  `,
};

function svgDataUrl(svg: string) {
  return `data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}`;
}

export function setCobaltStorybookBrand({ title, logo }: CobaltStorybookBrandOptions) {
  addons.setConfig({
    theme: create({
      base: 'light',
      brandTitle: title,
      brandUrl: './',
      brandImage: svgDataUrl(wordmarks[logo]),
      brandTarget: '_self',
    }),
  });
}
