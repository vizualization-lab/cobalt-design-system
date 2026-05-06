// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltInputPillStyles = css`
  /* ── Input Pill — pill-shaped standalone input ── */

  /* Override co-input's border-radius and padding per Figma spec:
     border-radius: 9px, padding: 6px 6px 6px 16px, border: 1px */
  .input-group__container {
    border-radius: var(--co-shape-radius-full);
    padding: 6px 6px 6px var(--co-space-4);
    /* padding: 6px var(--co-space-4); */
  }

  :host(:focus-within) .input-group__container {
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-shape-radius-full);
  }

  /* Hide label, help-text, feedback — standalone component */
  .form-field__label,
  .form-field__help-text,
  .form-field__feedback {
    display: none;
  }

  /* ── Prefix icon ── */

  .input-group__prefix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    color: var(--co-color-text-default);
  }

  /* ── Suffix (action button container) ── */

  .input-group__suffix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    margin-inline-start: 6px;
  }
`;
