// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltSelectStyles = css`
  /* ── Base ── */
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    font-weight: var(--co-font-weight-regular);
    line-height: var(--co-font-line-height-normal);
    color: var(--co-color-text-default);
  }

  .form-field__label {
    color: var(--co-color-text-default);
    font-size: var(--co-typography-label-size);
    font-weight: var(--co-typography-label-weight);
    line-height: var(--co-typography-label-line-height);
    margin-block-end: var(--co-space-1);
  }

  .form-field__help-text {
    color: var(--co-color-text-tertiary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .form-field__group-two {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
    position: relative;
  }

  /* ── Input group (invoker container) ── */

  .input-group {
    display: flex;
    flex-direction: column;
    inline-size: 100%;
  }

  .input-group__container {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    inline-size: 100%;
    min-block-size: var(--co-control-height-md);
    gap: var(--co-space-gap-sm);
    padding-inline: var(--co-space-inset-md);
    border: var(--co-border-width-default) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      outline var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .input-group__container {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-raised);
  }

  /* Suppress Lion's default focus ring on the invoker — we draw our own on the container */
  slot[name='invoker']::slotted(lion-select-invoker) {
    outline: none !important;
  }

  :host(:focus-within) .input-group__container {
    border-color: var(--co-color-border-focus);
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-border-width-default));
  }

  :host([danger]) .input-group__container,
  :host([shows-feedback-for~='error']) .input-group__container {
    border-color: var(--co-color-border-danger);
  }

  :host([danger]:focus-within) .input-group__container,
  :host([shows-feedback-for~='error']:focus-within) .input-group__container {
    border-color: var(--co-color-border-danger);
    outline: var(--co-focus-ring-width) solid var(--co-color-border-danger);
    outline-offset: calc(-1 * var(--co-border-width-default));
  }

  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    pointer-events: none;
  }

  :host([readonly]) .input-group__container {
    background: var(--co-color-surface-sunken);
    cursor: default;
  }

  /* ── Sizes ── */

  :host([size='sm']) {
    font-size: var(--co-font-size-small);
  }
  :host([size='sm']) .input-group__container {
    min-block-size: var(--co-control-height-sm);
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-h6);
  }
  :host([size='lg']) .input-group__container {
    min-block-size: var(--co-control-height-lg);
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
  }
  :host([size='xl']) .input-group__container {
    min-block-size: var(--co-control-height-xl);
    padding-inline: var(--co-space-inset-sm);
  }

  /* ── Invoker ── */

  slot[name='invoker']::slotted(*) {
    flex: 1 1 auto;
    min-inline-size: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    padding: 0;
    cursor: pointer;
    text-align: start;
    /* Keep selected text on a single line in narrow containers */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ── Chevron ── */

  /* Chevron rotation is managed via JS in _syncChevronRotation
     because the icon is in the invoker's light DOM, unreachable by shadow CSS. */
  .select__chevron {
    color: var(--co-color-text-default);
    flex: 0 0 auto;
    pointer-events: none;
    transition: transform var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  /* ── Overlay ── */

  [data-overlay-outer-wrapper] {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    inline-size: 0;
    block-size: 0;
    max-inline-size: none;
    max-block-size: none;
    margin: 0;
    border: 0;
    padding: 0;
    overflow: visible;
    background: transparent;
    color: inherit;
  }

  [part='overlay'] {
    /* Width is set by Lion's inheritsReferenceWidth: 'full' (writes
       style="width: <invoker>px" inline). We don't constrain inline-size
       here — fighting Lion's value produces an overlay much wider than
       the trigger, which contradicts the standard select pattern (Radix,
       Material, Polaris, native <select>). Cap height so very long lists
       get a scrollbar instead of running off-screen. */
    max-block-size: min(60vh, 24rem);
    overflow-y: auto;
    border: var(--co-border-width-panel) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    box-shadow: var(--co-shadow-lg, 0 12px 24px rgb(15 23 42 / 18%));
  }

  /* ── Feedback ── */

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal, 1.25em);
  }
`;
