export interface MatomoAnalyticsConfig {
  siteId: string;
  scriptUrl: string;
  trackerUrl: string;
}

type MatomoCommand = [string, ...unknown[]];
type MatomoQueue = MatomoCommand[];

interface VitePressRouter {
  onAfterRouteChange?: (to: string) => Promise<void> | void;
  onAfterRouteChanged?: (to: string) => Promise<void> | void;
}

declare global {
  interface Window {
    _paq?: MatomoQueue;
  }
}

const SEARCH_TRACK_DEBOUNCE_MS = 700;
const MATOMO_SCRIPT_ID = 'cobalt-matomo-script';

let analyticsEnabled = false;
let matomoInitialized = false;
let routerTrackingInstalled = false;
let globalSearchTrackingInstalled = false;

function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function isMatomoConfig(config: unknown): config is MatomoAnalyticsConfig {
  if (!config || typeof config !== 'object') return false;
  const candidate = config as Partial<MatomoAnalyticsConfig>;
  return Boolean(candidate.siteId && candidate.scriptUrl && candidate.trackerUrl);
}

function getMatomoQueue(): MatomoQueue | undefined {
  if (!isBrowser() || !analyticsEnabled) return undefined;
  window._paq = window._paq ?? [];
  return window._paq;
}

function pushMatomoCommand(command: MatomoCommand) {
  getMatomoQueue()?.push(command);
}

function loadMatomoScript(scriptUrl: string) {
  if (document.getElementById(MATOMO_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = MATOMO_SCRIPT_ID;
  script.async = true;
  script.src = scriptUrl;
  document.head.appendChild(script);
}

function initializeMatomo(config: MatomoAnalyticsConfig) {
  if (!isBrowser() || matomoInitialized) return;

  matomoInitialized = true;
  analyticsEnabled = true;

  const queue = getMatomoQueue();
  queue?.push(['setTrackerUrl', config.trackerUrl]);
  queue?.push(['setSiteId', config.siteId]);
  queue?.push(['enableLinkTracking']);

  loadMatomoScript(config.scriptUrl);
}

function schedulePageView() {
  if (!isBrowser()) return;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      trackPageView();
    });
  });
}

function installPageViewTracking(router: VitePressRouter) {
  if (!isBrowser() || routerTrackingInstalled) return;

  routerTrackingInstalled = true;
  const previousAfterRouteChange = router.onAfterRouteChange ?? router.onAfterRouteChanged;

  router.onAfterRouteChange = async (to: string) => {
    await previousAfterRouteChange?.(to);
    schedulePageView();
  };
}

function countGlobalSearchResults() {
  return document.querySelectorAll('.VPLocalSearchBox .result').length;
}

function installGlobalSearchTracking() {
  if (!isBrowser() || globalSearchTrackingInstalled) return;

  globalSearchTrackingInstalled = true;
  const trackGlobalSearch = createSearchTracker('global');

  document.addEventListener(
    'input',
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement) || target.id !== 'localsearch-input') return;

      if (!target.value.trim()) {
        trackGlobalSearch.cancel();
        return;
      }

      trackGlobalSearch(() => countGlobalSearchResults());
    },
    { capture: true },
  );
}

export function installMatomoAnalytics(router: VitePressRouter, config: unknown) {
  if (!isMatomoConfig(config)) return;

  initializeMatomo(config);
  installPageViewTracking(router);
  installGlobalSearchTracking();
}

export function trackPageView() {
  if (!isBrowser()) return;

  pushMatomoCommand(['setCustomUrl', window.location.href]);
  pushMatomoCommand(['setDocumentTitle', document.title]);
  pushMatomoCommand(['trackPageView']);
}

export function trackEvent(category: string, action: string, name?: string, value?: number) {
  const command: MatomoCommand = ['trackEvent', category, action];

  if (name !== undefined) {
    command.push(name);
  }

  if (value !== undefined && Number.isFinite(value)) {
    command.push(Math.max(0, Math.round(value)));
  }

  pushMatomoCommand(command);
}

export function trackSearch(scope: string, resultCount: number) {
  trackEvent('Search', 'Query', scope, resultCount);
}

export function createSearchTracker(scope: string) {
  let timeoutId: number | undefined;

  const cancel = () => {
    if (timeoutId === undefined || !isBrowser()) return;
    window.clearTimeout(timeoutId);
    timeoutId = undefined;
  };

  const track = (resultCount: number | (() => number)) => {
    if (!isBrowser() || !analyticsEnabled) return;

    cancel();
    timeoutId = window.setTimeout(() => {
      const resolvedCount = typeof resultCount === 'function' ? resultCount() : resultCount;
      trackSearch(scope, resolvedCount);
      timeoutId = undefined;
    }, SEARCH_TRACK_DEBOUNCE_MS);
  };

  track.cancel = cancel;
  return track;
}
