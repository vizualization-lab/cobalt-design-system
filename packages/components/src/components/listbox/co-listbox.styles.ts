// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltListboxStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
    inline-size: 100%;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    font-weight: var(--co-font-weight-regular);
    line-height: var(--co-font-line-height-normal);
    color: var(--co-color-text-default);
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  .form-field__group-one {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
    margin-block-end: var(--co-space-1);
  }

  .form-field__label {
    color: var(--co-color-text-default);
    font-size: var(--co-typography-label-size);
    font-weight: var(--co-typography-label-weight);
    line-height: var(--co-typography-label-line-height);
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
  }

  .input-group {
    display: flex;
    align-items: stretch;
    inline-size: 100%;
  }

  .input-group__container {
    display: flex;
    inline-size: 100%;
  }

  .input-group__input {
    display: flex;
    inline-size: 100%;
    min-inline-size: 0;
  }

  :host([orientation='horizontal']) .input-group__input {
    inline-size: auto;
  }

  slot[name='input']::slotted([role='listbox']) {
    display: grid;
    inline-size: 100%;
    max-block-size: 18rem;
    overflow: auto;
    gap: var(--co-space-1);
    padding: var(--co-space-1);
    border: var(--co-border-width-default) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    outline: 0;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host([orientation='horizontal']) slot[name='input']::slotted([role='listbox']) {
    display: flex;
    inline-size: auto;
    flex-wrap: wrap;
  }

  :host(:hover:not([disabled])) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-raised);
  }

  :host(:focus-within) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-focus);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-focus);
  }

  :host([has-feedback-for~='error']) slot[name='input']::slotted([role='listbox']),
  :host([shows-feedback-for~='error']) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-danger);
  }

  :host([has-feedback-for~='error']:focus-within) slot[name='input']::slotted([role='listbox']),
  :host([shows-feedback-for~='error']:focus-within) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-danger);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-danger);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) slot[name='input']::slotted([role='listbox']) {
    opacity: var(--co-opacity-disabled);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal, 1.25em);
  }
`;
