// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltNavDrawerItemStyles = css`
  :host {
    display: block;
  }

  .item {
    display: flex;
    align-items: center;
    gap: var(--co-component-nav-drawer-item-gap);
    box-sizing: border-box;
    padding-block: var(--co-component-nav-drawer-item-padding-y);
    padding-inline: var(--co-component-nav-drawer-item-padding-x);
    margin-block: var(--co-component-nav-drawer-item-margin-block);
    border-radius: var(--co-control-radius-container);
    color: var(--co-color-text-default);
    font-family: var(--co-font-family-sans);
    font-size: var(--co-typography-body-sm-size);
    font-weight: var(--co-typography-body-sm-weight);
    letter-spacing: var(--co-typography-body-sm-tracking);
    line-height: var(--co-typography-body-sm-line-height);
    text-decoration: none;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
    outline: none;
  }

  :host(:not([selected])) .item:hover {
    background: var(--co-color-surface-interactive-nav-hover);
    color: var(--co-color-text-link);
  }

  :host(:not([selected]):not([disabled])) .item:active {
    background: var(--co-color-surface-interactive-nav-active);
    color: var(--co-color-text-link);
  }

  :host([selected]) .item {
    background: var(--co-color-surface-interactive-nav-selected);
    color: var(--co-color-text-link);
    font-weight: var(--co-typography-label-weight);
  }

  :host([disabled]) .item {
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  :host([disabled]) .item:hover {
    background: transparent;
  }

  .item:focus-visible {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
  }

  .item__prefix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    color: inherit;
  }

  .item__prefix[hidden] {
    display: none;
  }

  .item__label {
    flex: 1 1 auto;
    min-inline-size: 0;
  }
`;
