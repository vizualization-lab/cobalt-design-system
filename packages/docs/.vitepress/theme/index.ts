import type { Theme } from 'vitepress';
import CobaltLayout from './components/CobaltLayout.vue';
import ComponentDemo from '../../components/ComponentDemo.vue';
import AppShellDemo from '../../components/AppShellDemo.vue';
import AppShellComposition from '../../components/AppShellComposition.vue';
import CodeTabs from '../../components/CodeTabs.vue';
import ColorSwatch from '../../components/ColorSwatch.vue';
import IconGallery from '../../components/IconGallery.vue';
import A11yReport from '../../components/A11yReport.vue';
import ComponentChangelog from '../../components/ComponentChangelog.vue';
import ChangelogPage from '../../components/ChangelogPage.vue';
import TokenTable from '../../components/TokenTable.vue';
import ArchitectureFlow from '../../components/ArchitectureFlow.vue';
import ComponentStatus from '../../components/ComponentStatus.vue';
import StatusMatrix from '../../components/StatusMatrix.vue';
import LayerStack from '../../components/LayerStack.vue';
import ArtifactDownload from '../../components/ArtifactDownload.vue';
import { installMatomoAnalytics } from './analytics';

// Cobalt design tokens
import '@cobalt/tokens/css';
import '@cobalt/tokens/themes/default';
import '@cobalt/tokens/themes/purple';
import '@cobalt/tokens/themes/brick';
import '@cobalt/tokens/themes/forest';

// VitePress icons (needed for local search component)
import 'vitepress/dist/client/theme-default/styles/icons.css';

import './cobalt.css';
import './mermaid.css';

let cobaltComponentsRegistration: Promise<void> | undefined;
let cobaltComponentsRegistrationAttempts = 0;
let docsRouterInstalled = false;
let nextSiblingRecoveryInstalled = false;

const nextSiblingRecoveryKey = 'cobalt:vitepress-next-sibling-recovery';

type VitePressRouter = {
  go: (href?: string) => Promise<void> | void;
  onAfterRouteChange?: (to: string) => Promise<void> | void;
  onAfterRouteChanged?: (to: string) => Promise<void> | void;
};

const cobaltComponentImports = [
  { tag: 'co-app-shell', load: () => import('@cobalt/components/app-shell') },
  { tag: 'co-banner', load: () => import('@cobalt/components/banner') },
  { tag: 'co-button', load: () => import('@cobalt/components/button') },
  { tag: 'co-button-icon', load: () => import('@cobalt/components/button-icon') },
  { tag: 'co-card', load: () => import('@cobalt/components/card') },
  { tag: 'co-checkbox', load: () => import('@cobalt/components/checkbox') },
  { tag: 'co-checkbox-group', load: () => import('@cobalt/components/checkbox-group') },
  {
    tag: 'co-checkbox-indeterminate',
    load: () => import('@cobalt/components/checkbox-indeterminate'),
  },
  { tag: 'co-combobox', load: () => import('@cobalt/components/combobox') },
  { tag: 'co-form', load: () => import('@cobalt/components/form') },
  { tag: 'co-icon', load: () => import('@cobalt/components/icon') },
  { tag: 'co-input', load: () => import('@cobalt/components/input') },
  { tag: 'co-input-pill', load: () => import('@cobalt/components/input-pill') },
  { tag: 'co-input-stepper', load: () => import('@cobalt/components/input-stepper') },
  { tag: 'co-label', load: () => import('@cobalt/components/label') },
  { tag: 'co-listbox', load: () => import('@cobalt/components/listbox') },
  { tag: 'co-mode-toggle', load: () => import('@cobalt/components/mode-toggle') },
  { tag: 'co-nav-drawer', load: () => import('@cobalt/components/nav-drawer') },
  { tag: 'co-nav-drawer-group', load: () => import('@cobalt/components/nav-drawer-group') },
  { tag: 'co-nav-drawer-item', load: () => import('@cobalt/components/nav-drawer-item') },
  { tag: 'co-nav-header-bar', load: () => import('@cobalt/components/nav-header-bar') },
  { tag: 'co-nav-rail-bar', load: () => import('@cobalt/components/nav-rail-bar') },
  { tag: 'co-nav-rail-item', load: () => import('@cobalt/components/nav-rail-item') },
  { tag: 'co-nav-separator', load: () => import('@cobalt/components/nav-separator') },
  { tag: 'co-option', load: () => import('@cobalt/components/option') },
  { tag: 'co-radio', load: () => import('@cobalt/components/radio') },
  { tag: 'co-radio-group', load: () => import('@cobalt/components/radio-group') },
  { tag: 'co-select', load: () => import('@cobalt/components/select') },
  { tag: 'co-textarea', load: () => import('@cobalt/components/textarea') },
];

let navigationInFlight = false;
let queuedNavigation: string | undefined;

function registerCobaltComponents(): Promise<void> | undefined {
  if (typeof window === 'undefined') return undefined;
  if (cobaltComponentsRegistration) return cobaltComponentsRegistration;

  cobaltComponentsRegistrationAttempts += 1;
  const attempt = cobaltComponentsRegistrationAttempts;

  cobaltComponentsRegistration = Promise.allSettled(
    cobaltComponentImports
      .filter(({ tag }) => !window.customElements.get(tag))
      .map(({ load }) => load()),
  )
    .then(() => {
      const missingTags = cobaltComponentImports
        .filter(({ tag }) => !window.customElements.get(tag))
        .map(({ tag }) => tag);
      if (missingTags.length) {
        throw new Error(`Missing Cobalt component registrations: ${missingTags.join(', ')}`);
      }
    })
    .catch((error) => {
      cobaltComponentsRegistration = undefined;

      if (attempt < 3) {
        window.setTimeout(registerCobaltComponents, 250 * attempt);
        return;
      }

      if (import.meta.env.DEV) {
        console.error('Failed to register Cobalt components', error);
      }
    });
  return cobaltComponentsRegistration;
}

function installDocsRouter(router: VitePressRouter) {
  if (typeof document === 'undefined' || docsRouterInstalled) return;

  docsRouterInstalled = true;
  document.addEventListener(
    'click',
    (event) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
        return;
      }

      const linkTarget = routeTargetFromEvent(event);
      if (!linkTarget) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      navigateSafely(router, linkTarget);
    },
    { capture: true },
  );
}

function routeTargetFromEvent(event: MouseEvent) {
  const target = event
    .composedPath()
    .find(
      (item): item is HTMLAnchorElement | HTMLElement =>
        item instanceof HTMLAnchorElement ||
        (item instanceof HTMLElement &&
          item.localName === 'co-button' &&
          item.hasAttribute('href')),
    );
  if (!target) return undefined;

  if (target instanceof HTMLAnchorElement && target.classList.contains('header-anchor')) {
    return undefined;
  }

  const href = target.getAttribute('href');
  const targetFrame = target.getAttribute('target');
  if (!href || (targetFrame && targetFrame !== '_self') || target.hasAttribute('download')) {
    return undefined;
  }

  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return undefined;
  if (url.pathname === window.location.pathname && url.search === window.location.search) {
    return undefined;
  }

  return `${url.pathname}${url.search}${url.hash}`;
}

function navigateSafely(router: VitePressRouter, href: string) {
  if (navigationInFlight) {
    queuedNavigation = href;
    return;
  }

  navigationInFlight = true;
  Promise.resolve(router.go(href))
    .catch(() => {
      window.location.href = href;
    })
    .finally(() => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          navigationInFlight = false;
          const nextNavigation = queuedNavigation;
          queuedNavigation = undefined;
          if (
            nextNavigation &&
            nextNavigation !==
              `${window.location.pathname}${window.location.search}${window.location.hash}`
          ) {
            navigateSafely(router, nextNavigation);
          }
        });
      });
    });
}

function isVueNextSiblingCrash(reason: unknown) {
  const text =
    reason instanceof Error ? `${reason.message}\n${reason.stack ?? ''}` : String(reason ?? '');
  return text.includes('nextSibling') && text.includes('framework.');
}

function installNextSiblingRecovery() {
  if (typeof window === 'undefined' || nextSiblingRecoveryInstalled) return;

  nextSiblingRecoveryInstalled = true;
  window.addEventListener('unhandledrejection', (event) => {
    if (!isVueNextSiblingCrash(event.reason)) return;

    event.preventDefault();
    const currentUrl = window.location.href;
    if (window.sessionStorage.getItem(nextSiblingRecoveryKey) === currentUrl) return;

    window.sessionStorage.setItem(nextSiblingRecoveryKey, currentUrl);
    window.location.reload();
  });

  window.addEventListener(
    'load',
    () => {
      window.setTimeout(() => {
        window.sessionStorage.removeItem(nextSiblingRecoveryKey);
      }, 3000);
    },
    { once: true },
  );
}

export default {
  Layout: CobaltLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('ComponentDemo', ComponentDemo);
    app.component('AppShellDemo', AppShellDemo);
    app.component('AppShellComposition', AppShellComposition);
    app.component('CodeTabs', CodeTabs);
    app.component('ColorSwatch', ColorSwatch);
    app.component('IconGallery', IconGallery);
    app.component('A11yReport', A11yReport);
    app.component('ComponentChangelog', ComponentChangelog);
    app.component('ChangelogPage', ChangelogPage);
    app.component('TokenTable', TokenTable);
    app.component('ArchitectureFlow', ArchitectureFlow);
    app.component('ComponentStatus', ComponentStatus);
    app.component('LayerStack', LayerStack);
    app.component('StatusMatrix', StatusMatrix);
    app.component('ArtifactDownload', ArtifactDownload);

    installNextSiblingRecovery();
    installMatomoAnalytics(router, siteData.value.themeConfig.matomo);
    installDocsRouter(router);

    // Register Cobalt web components for markdown-authored web component examples.
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        void registerCobaltComponents();
      });
    }
  },
} satisfies Theme;
