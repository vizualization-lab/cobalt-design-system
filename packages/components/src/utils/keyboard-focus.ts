/**
 * Tracks whether the user's last interaction was via keyboard.
 * Sets `_keyboard-focus` attribute on the host when focus arrives
 * via keyboard, removes it on blur or mouse-driven focus.
 *
 * Why not `:focus-visible`? The native input lives in light DOM but
 * component styles live in shadow DOM. `:host(:has(:focus-visible))`
 * cannot cross the shadow boundary to see slotted light-DOM children,
 * so the CSS rule never matches. This utility bridges that gap.
 *
 * Usage: call `trackKeyboardFocus(this)` in `connectedCallback()`.
 */

let lastInputWasKeyboard = false;

if (typeof document !== 'undefined') {
  document.addEventListener('keydown', () => {
    lastInputWasKeyboard = true;
  });
  document.addEventListener('mousedown', () => {
    lastInputWasKeyboard = false;
  });
}

export function trackKeyboardFocus(host: HTMLElement): void {
  host.addEventListener('focusin', () => {
    if (lastInputWasKeyboard) {
      host.setAttribute('_keyboard-focus', '');
    }
  });
  host.addEventListener('focusout', () => {
    host.removeAttribute('_keyboard-focus');
  });
}
