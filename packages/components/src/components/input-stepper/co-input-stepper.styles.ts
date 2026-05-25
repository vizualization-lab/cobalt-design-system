// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltInputStepperStyles = css`
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
    color: var(--co-color-text-secondary);
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
    align-items: stretch;
    inline-size: 100%;
    min-block-size: var(--co-control-height-md);
    overflow: hidden;
    border: var(--co-border-width-default) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius-interactive);
    background: var(--co-color-surface-static-default);
    color: var(--co-color-text-default);
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .input-group__container {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-static-raised);
  }

  :host(:focus-within) .input-group__container {
    border-color: var(--co-color-border-focus);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-focus);
  }

  :host([danger]) .input-group__container,
  :host([has-feedback-for~='error']) .input-group__container,
  :host([shows-feedback-for~='error']) .input-group__container {
    border-color: var(--co-color-border-danger);
  }

  :host([danger]:focus-within) .input-group__container,
  :host([has-feedback-for~='error']:focus-within) .input-group__container,
  :host([shows-feedback-for~='error']:focus-within) .input-group__container {
    border-color: var(--co-color-border-danger);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-danger);
  }

  :host([readonly]) .input-group__container {
    background: var(--co-color-surface-static-sunken);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) .input-group__container {
    opacity: var(--co-opacity-disabled);
  }

  :host([size='sm']) {
    font-size: var(--co-font-size-small);
  }

  :host([size='sm']) .input-group__container {
    min-block-size: var(--co-control-height-sm);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-h6);
  }

  :host([size='lg']) .input-group__container {
    min-block-size: var(--co-control-height-lg);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
  }

  :host([size='xl']) .input-group__container {
    min-block-size: var(--co-control-height-xl);
  }

  .input-group__input {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    min-inline-size: 0;
    padding-inline: var(--co-space-inset-md);
  }

  :host([size='sm']) .input-group__input {
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='lg']) .input-group__input {
    padding-inline: var(--co-space-inset-lg);
  }

  :host([size='xl']) .input-group__input {
    padding-inline: var(--co-space-inset-xl);
  }

  .input-group__leading {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding-inline-start: var(--co-space-inset-md);
    color: var(--co-color-text-secondary);
  }

  :host([size='sm']) .input-group__leading {
    padding-inline-start: var(--co-space-inset-sm);
  }

  :host([size='lg']) .input-group__leading {
    padding-inline-start: var(--co-space-inset-lg);
  }

  :host([size='xl']) .input-group__leading {
    padding-inline-start: var(--co-space-inset-xl);
  }

  .input-group__leading + .input-group__input {
    padding-inline-start: var(--co-space-gap-sm);
  }

  .input-stepper__group {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    inline-size: var(--co-control-height-md);
    border-inline-start: var(--co-border-width-default) solid var(--co-color-border-default);
    color: var(--co-color-text-secondary);
  }

  :host([size='sm']) .input-stepper__group {
    inline-size: var(--co-control-height-sm);
  }

  :host([size='lg']) .input-stepper__group {
    inline-size: var(--co-control-height-lg);
  }

  :host([size='xl']) .input-stepper__group {
    inline-size: var(--co-control-height-xl);
  }

  .input-stepper__button-slot {
    display: flex;
    flex: 1 1 0;
    min-block-size: 0;
  }

  .input-stepper__button-slot--increment {
    border-block-end: var(--co-border-width-default) solid var(--co-color-border-default);
  }

  slot[name='suffix']::slotted(button),
  slot[name='prefix']::slotted(button) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    inline-size: 100%;
    block-size: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
    line-height: 1;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  slot[name='suffix']::slotted(button:hover:not(:disabled)),
  slot[name='prefix']::slotted(button:hover:not(:disabled)) {
    background: var(--co-color-surface-static-sunken);
    color: var(--co-color-text-default);
  }

  slot[name='suffix']::slotted(button:focus-visible),
  slot[name='prefix']::slotted(button:focus-visible) {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-focus-ring-width));
  }

  slot[name='suffix']::slotted(button:disabled),
  slot[name='prefix']::slotted(button:disabled) {
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal);
  }

  slot[name='input']::slotted(input) {
    display: block;
    inline-size: 100%;
    min-inline-size: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: inherit;
  }

  slot[name='input']::slotted(input:disabled) {
    cursor: not-allowed;
  }

  slot[name='input']::slotted(input:read-only) {
    cursor: default;
  }
`;
