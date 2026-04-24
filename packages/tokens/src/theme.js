/**
 * Sets the active Cobalt theme and color mode on the document root.
 *
 * @param {string} theme - Theme name (e.g. 'default', 'purple')
 * @param {'light' | 'dark'} [mode='light'] - Color mode
 *
 * @example
 * import { setTheme } from '@cobalt/tokens/theme';
 *
 * setTheme('purple');          // purple light
 * setTheme('purple', 'dark');  // purple dark
 * setTheme('default', 'dark'); // default dark
 */
export function setTheme(theme, mode = 'light') {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  root.setAttribute('data-mode', mode);
}

/**
 * Returns the currently active theme and mode.
 *
 * @returns {{ theme: string, mode: string }}
 */
export function getTheme() {
  if (typeof document === 'undefined') return { theme: 'default', mode: 'light' };
  const root = document.documentElement;
  return {
    theme: root.getAttribute('data-theme') || 'default',
    mode: root.getAttribute('data-mode') || 'light',
  };
}
