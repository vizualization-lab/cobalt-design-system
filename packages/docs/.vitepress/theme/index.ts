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
};

let navigationInFlight = false;
let queuedNavigation: string | undefined;

function registerCobaltComponents(): Promise<void> | undefined {
  if (typeof window === 'undefined') return undefined;
  if (window.customElements.get('co-button')) return undefined;
  if (cobaltComponentsRegistration) return cobaltComponentsRegistration;

  cobaltComponentsRegistrationAttempts += 1;
  const attempt = cobaltComponentsRegistrationAttempts;

  cobaltComponentsRegistration = import('@cobalt/components')
    .then(() => undefined)
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
          if (nextNavigation && nextNavigation !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
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
  enhanceApp({ app, router }) {
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

    installNextSiblingRecovery();
    installDocsRouter(router);
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        void registerCobaltComponents();
      });
    }
  },
} satisfies Theme;
