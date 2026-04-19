// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltRadioGroupStyles = css`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    color: var(--co-color-text-default);
  }

  .form-field__label {
    font-weight: var(--co-font-weight-medium);
    margin-block-end: var(--co-space-1);
  }

  .form-field__help-text {
    color: var(--co-color-text-tertiary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .radio-group__options {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
    padding-block: var(--co-space-2);
  }

  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    pointer-events: none;
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal, 1.25em);
  }
`;
