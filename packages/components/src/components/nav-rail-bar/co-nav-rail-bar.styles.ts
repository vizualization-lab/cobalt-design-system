// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltNavRailBarStyles = css`
  :host {
    display: block;
    inline-size: min(100%, var(--co-component-nav-rail-bar-width, 115px));
    max-inline-size: var(--co-component-nav-rail-bar-width-max, 200px);
    block-size: 100%;
    box-sizing: border-box;
  }

  .nav-rail-bar {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
    padding: var(--co-component-nav-rail-bar-padding-y) var(--co-component-nav-rail-bar-padding-x);
    border-radius: var(--co-component-nav-rail-bar-radius);
    background: var(--co-component-nav-rail-bar-background, var(--co-color-surface-sunken));
    box-shadow: var(--co-elevation-shadow-md);
  }

  .nav-rail-bar__items {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: var(--co-component-nav-rail-bar-gap, var(--co-space-2));
  }
`;
