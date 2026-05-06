// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltNavDrawerItemStyles = css`
  :host {
    display: block;
  }

  .item {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-2);
    border-radius: var(--co-control-radius-interactive);
    color: var(--co-color-text-default);
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    font-weight: var(--co-font-weight-regular);
    line-height: var(--co-font-line-height-tight);
    text-decoration: none;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
    outline: none;
  }

  :host(:not([selected])) .item:hover {
    background: var(--co-component-nav-drawer-item-background-hover);
    color: var(--co-component-nav-drawer-item-foreground-hover);
  }

  :host(:not([selected]):not([disabled])) .item:active {
    background: var(--co-component-nav-drawer-item-background-active);
    color: var(--co-component-nav-drawer-item-foreground-active);
  }

  :host([selected]) .item {
    background: var(--co-component-nav-drawer-item-background-selected);
    color: var(--co-component-nav-drawer-item-foreground-selected);
    font-weight: var(--co-font-weight-medium);
  }

  :host([disabled]) .item {
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  :host([disabled]) .item:hover {
    background: transparent;
  }

  .item:focus-visible {
    outline: var(--co-focus-ring-width) solid var(--co-component-nav-drawer-item-focus-ring);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
  }

  .item__prefix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    color: inherit;
  }

  .item__label {
    flex: 1 1 auto;
    min-inline-size: 0;
  }
`;
