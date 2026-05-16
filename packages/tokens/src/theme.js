const DEFAULT_STORAGE_NAMESPACE = 'cobalt';
const VALID_MODE_PREFERENCES = new Set(['light', 'dark', 'auto']);

function getStorageKey(options = {}) {
  const namespace = options.storageNamespace || DEFAULT_STORAGE_NAMESPACE;
  return `${namespace}-mode`;
}

function hasLocalStorage() {
  try {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  } catch {
    return false;
  }
}

function normalizeMode(mode) {
  return VALID_MODE_PREFERENCES.has(mode) ? mode : 'auto';
}

/**
 * Resolves a mode preference to the concrete light or dark mode.
 *
 * @param {'light' | 'dark' | 'auto'} [mode='auto'] - Preferred color mode
 * @returns {'light' | 'dark'}
 */
export function resolveMode(mode = 'auto') {
  const normalizedMode = normalizeMode(mode);
  if (normalizedMode === 'light' || normalizedMode === 'dark') return normalizedMode;

  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Returns the stored mode preference for a namespace.
 *
 * @param {{ storageNamespace?: string }} [options]
 * @returns {'light' | 'dark' | 'auto' | null}
 */
export function getStoredMode(options = {}) {
  if (!hasLocalStorage()) return null;
  try {
    const storedMode = window.localStorage.getItem(getStorageKey(options));
    return VALID_MODE_PREFERENCES.has(storedMode) ? storedMode : null;
  } catch {
    return null;
  }
}

/**
 * Persists a mode preference for a namespace.
 *
 * @param {'light' | 'dark' | 'auto'} mode - Preferred color mode
 * @param {{ storageNamespace?: string }} [options]
 */
export function setStoredMode(mode, options = {}) {
  if (!hasLocalStorage()) return;
  try {
    window.localStorage.setItem(getStorageKey(options), normalizeMode(mode));
  } catch {
    // Ignore storage failures so theme switching still works in restricted contexts.
  }
}

/**
 * Clears the stored mode preference for a namespace.
 *
 * @param {{ storageNamespace?: string }} [options]
 */
export function clearStoredMode(options = {}) {
  if (!hasLocalStorage()) return;
  try {
    window.localStorage.removeItem(getStorageKey(options));
  } catch {
    // Ignore storage failures so callers can safely clear best-effort preferences.
  }
}

/**
 * Sets the active Cobalt theme and color mode on the document root.
 *
 * @param {string} theme - Theme name (e.g. 'default', 'purple')
 * @param {'light' | 'dark' | 'auto'} [mode='light'] - Color mode preference
 * @param {{ persist?: boolean, storageNamespace?: string }} [options] - Persistence options
 *
 * @example
 * import { setTheme } from '@cobalt/tokens/theme';
 *
 * setTheme('purple');          // purple light
 * setTheme('purple', 'dark');  // purple dark
 * setTheme('default', 'auto'); // default follows system mode
 */
export function setTheme(theme, mode = 'light', options = {}) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const resolvedTheme = theme || root.getAttribute('data-theme') || 'default';
  const resolvedMode = resolveMode(mode);

  root.setAttribute('data-theme', resolvedTheme);
  root.setAttribute('data-mode', resolvedMode);

  if (options.persist) {
    setStoredMode(normalizeMode(mode), options);
  }
}

/**
 * Returns the currently active theme and resolved mode.
 *
 * @returns {{ theme: string, mode: 'light' | 'dark' }}
 */
export function getTheme() {
  if (typeof document === 'undefined') return { theme: 'default', mode: 'light' };
  const root = document.documentElement;
  const legacyTheme = root.getAttribute('data-theme');
  const mode =
    root.getAttribute('data-mode') === 'dark' || legacyTheme === 'dark' ? 'dark' : 'light';
  const theme =
    legacyTheme === 'dark' || legacyTheme === 'light' ? 'default' : legacyTheme || 'default';

  return { theme, mode };
}
