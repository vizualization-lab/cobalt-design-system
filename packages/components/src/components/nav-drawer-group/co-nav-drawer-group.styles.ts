// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltNavDrawerGroupStyles = css`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: var(--co-component-nav-drawer-group-gap);
    margin-block-start: var(--co-component-nav-drawer-group-margin-block-start);
  }

  .group__trigger {
    display: flex;
    align-items: center;
    inline-size: 100%;
    gap: var(--co-component-nav-drawer-group-trigger-gap);
    box-sizing: border-box;
    padding-block: var(--co-component-nav-drawer-group-trigger-padding-y);
    padding-inline: var(--co-component-nav-drawer-group-trigger-padding-x);
    border: none;
    border-radius: var(--co-control-radius-container);
    background: transparent;
    color: var(--co-color-text-default);
    font: inherit;
    font-size: var(--co-typography-body-sm-size);
    font-weight: var(--co-typography-label-weight);
    letter-spacing: var(--co-typography-body-sm-tracking);
    line-height: var(--co-typography-body-sm-line-height);
    text-align: start;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  .group__trigger:hover {
    background: var(--co-color-surface-interactive-nav-hover);
    color: var(--co-color-text-link);
  }

  .group__trigger:active {
    background: var(--co-color-surface-interactive-nav-active);
    color: var(--co-color-text-link);
  }

  .group__trigger:focus-visible {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
  }

  .group__chevron {
    flex: 0 0 auto;
    transition: transform var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host([open]) .group__chevron {
    transform: rotate(90deg);
  }

  .group__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .group__content {
    display: flex;
    flex-direction: column;
    gap: var(--co-component-nav-drawer-group-content-gap);
    padding-inline-start: var(--co-component-nav-drawer-group-content-indent);
  }

  .group__content[hidden] {
    display: none;
  }
`;
