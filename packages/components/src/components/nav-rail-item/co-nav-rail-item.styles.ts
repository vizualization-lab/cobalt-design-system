// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltNavRailItemStyles = css`
  :host {
    display: block;
    inline-size: 100%;
    box-sizing: border-box;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    inline-size: 100%;
    min-block-size: 0;
    margin: 0;
    padding: var(--co-component-nav-rail-item-padding-y, var(--co-space-2))
      var(--co-component-nav-rail-item-padding-x, var(--co-space-2));
    gap: var(--co-component-nav-rail-item-gap, var(--co-space-3));
    border: none;
    border-radius: var(--co-component-nav-rail-item-radius, var(--co-control-radius-interactive));
    background: var(
      --co-component-nav-rail-item-background-default,
      var(--co-color-surface-interactive-subtle-default)
    );
    appearance: none;
    -webkit-appearance: none;
    color: var(--co-component-nav-rail-item-foreground-default, var(--co-color-text-secondary));
    text-decoration: none;
    font: inherit;
    text-align: center;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  .nav-item__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
    inline-size: var(--co-component-nav-rail-item-icon-size, 22px);
    block-size: var(--co-component-nav-rail-item-icon-size, 22px);
  }

  .nav-item__label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-inline-size: 100%;
    inline-size: 100%;
    color: currentColor;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-xsmall);
    font-weight: var(--co-typography-body-sm-weight);
    letter-spacing: var(--co-typography-body-sm-tracking);
    line-height: var(--co-typography-body-sm-line-height);
    text-wrap: balance;
    overflow-wrap: anywhere;
  }

  :host(:not([selected]):not([disabled])) .nav-item:active {
    background: var(
      --co-component-nav-rail-item-background-active,
      var(--co-color-surface-interactive-subtle-active)
    );
  }

  :host(:not([selected])) .nav-item:hover {
    background: var(
      --co-component-nav-rail-item-background-hover,
      var(--co-color-surface-interactive-subtle-hover)
    );
    color: var(--co-color-surface-interactive-primary-default);
  }

  :host([selected]) .nav-item {
    background: var(
      --co-component-nav-rail-item-background-selected,
      var(--co-color-surface-interactive-subtle-selected)
    );
    color: var(--co-color-surface-interactive-primary-default);
  }

  .nav-item:focus-visible {
    outline: var(--co-focus-ring-width) solid
      var(--co-component-nav-rail-item-focus-ring, var(--co-color-border-focus));
    outline-offset: var(--co-focus-ring-offset);
  }

  :host([disabled]) .nav-item {
    background: transparent;
    opacity: var(--co-opacity-disabled);
    cursor: not-allowed;
  }
`;
