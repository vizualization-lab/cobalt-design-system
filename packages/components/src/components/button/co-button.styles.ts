// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltButtonStyles = css`
  /* ── Base ── */
  :host {
    display: inline-flex;
    vertical-align: middle;
    box-sizing: border-box;
    min-block-size: var(--co-control-height-md);
    padding: 0;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    font-weight: var(--co-font-weight-medium);
    line-height: var(--co-font-line-height-tight);
    border-radius: var(--co-control-radius);
    border: none;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  /* Padding is on the inner element so external resets (e.g. * { padding: 0 })
     cannot override it — light DOM styles always beat :host rules. */
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    inline-size: 100%;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-2) var(--co-space-4);
    /* Reset UA anchor defaults when rendered as a link (href variant) */
    color: inherit;
    text-decoration: none;
  }

  /* ── Sizes ── */
  :host([size='sm']) {
    font-size: var(--co-font-size-small);
    min-block-size: var(--co-control-height-sm);
  }
  :host([size='sm']) .button {
    padding: var(--co-space-1) var(--co-space-3);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-h6);
    min-block-size: var(--co-control-height-lg);
  }
  :host([size='lg']) .button {
    padding: var(--co-space-3) var(--co-space-6);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
    min-block-size: var(--co-control-height-xl);
  }
  :host([size='xl']) .button {
    padding: var(--co-space-4) var(--co-space-8);
  }

  /* ── Primary variant (default) ── */
  :host,
  :host([variant='primary']) {
    background: var(--co-color-interactive-primary-default);
    color: var(--co-color-text-on-primary);
  }
  :host([variant='primary']:hover),
  :host(:not([variant]):hover) {
    background: var(--co-color-interactive-primary-hover);
  }
  :host([variant='primary']:active),
  :host(:not([variant]):active) {
    background: var(--co-color-interactive-primary-active);
  }

  /* ── Secondary variant ── */
  :host([variant='secondary']) {
    background: var(--co-color-interactive-secondary-default);
    color: var(--co-color-interactive-primary-default);
    box-shadow: inset 0 0 0 var(--co-border-width-action)
      var(--co-color-interactive-primary-default);
  }
  :host([variant='secondary']:hover) {
    background: var(--co-color-interactive-secondary-hover);
    color: var(--co-color-interactive-primary-hover);
    box-shadow: inset 0 0 0 var(--co-border-width-action) var(--co-color-interactive-primary-hover);
  }
  :host([variant='secondary']:active) {
    background: var(--co-color-interactive-secondary-active);
    color: var(--co-color-interactive-primary-active);
    box-shadow: inset 0 0 0 var(--co-border-width-action) var(--co-color-interactive-primary-active);
  }

  /* ── Danger variant ── */
  :host([variant='danger']) {
    background: var(--co-color-interactive-danger-default);
    color: var(--co-color-text-on-danger);
  }
  :host([variant='danger']:hover) {
    background: var(--co-color-interactive-danger-hover);
  }
  :host([variant='danger']:active) {
    background: var(--co-color-interactive-danger-active);
  }

  /* ── Success variant ── */
  :host([variant='success']) {
    background: var(--co-color-interactive-success-default);
    color: var(--co-color-text-on-success);
  }
  :host([variant='success']:hover) {
    background: var(--co-color-interactive-success-hover);
  }
  :host([variant='success']:active) {
    background: var(--co-color-interactive-success-active);
  }

  /* ── Ghost variant ── */
  :host([variant='ghost']) {
    background: transparent;
    color: var(--co-color-text-default);
  }
  :host([variant='ghost']:hover) {
    color: var(--co-color-text-secondary);
  }
  :host([variant='ghost']:active) {
    color: var(--co-color-text-default);
  }

  /* ── Focus ── */
  /* Override Lion's base focus styles — match its specificity */
  :host(:focus),
  :host(:focus:not([disabled])),
  :host(:focus:not(:focus-visible)) {
    outline: none;
  }

  :host(:focus-visible:not([disabled])) {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: var(--co-focus-ring-offset);
  }

  /* ── Disabled ── */
  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    cursor: not-allowed;
    pointer-events: none;
  }

  /* ── Loading ── */
  :host([loading]) {
    cursor: wait;
    pointer-events: none;
  }
`;
