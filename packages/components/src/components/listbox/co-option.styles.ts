// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltOptionStyles = css`
  :host {
    display: block;
    color: var(--co-color-text-default);
    cursor: default;
    outline: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .option {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    min-block-size: var(--co-control-height-sm);
    padding-block: var(--co-space-1);
    padding-inline: var(--co-space-inset-sm);
    border-radius: var(--co-control-radius);
    color: inherit;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .option,
  :host([active]) .option {
    background: var(--co-color-surface-raised);
  }

  :host([checked]) .option {
    background: var(--co-color-interactive-subtle-selected);
    color: var(--co-color-text-default);
  }

  :host([active][checked]) .option {
    background: var(--co-color-interactive-subtle-selected);
  }

  :host([disabled]) {
    color: var(--co-color-text-disabled);
    cursor: not-allowed;
  }

  .option__indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    inline-size: 0.75em;
    block-size: 0.75em;
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-strong);
    border-radius: 999px;
  }

  :host([checked]) .option__indicator {
    border-color: var(--co-color-border-active);
    background: var(--co-color-border-active);
    box-shadow: inset 0 0 0 2px var(--co-color-surface-default);
  }

  :host([disabled]) .option__indicator {
    border-color: var(--co-color-border-subtle);
    background: transparent;
    box-shadow: none;
  }

  .option__label {
    min-inline-size: 0;
  }
`;
