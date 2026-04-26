// Auto-generated from .styles.css — do not edit directly
import { css } from 'lit';

export const cobaltBannerStyles = css`
  :host {
    display: block;
    inline-size: 100%;
    box-sizing: border-box;
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    inline-size: 100%;
    min-block-size: var(--co-component-banner-height, 44px);
    padding: var(--co-component-banner-padding, var(--co-space-1));
    box-sizing: border-box;
    background: var(--co-component-banner-background, var(--co-color-surface-raised));
    color: var(--co-component-banner-foreground, var(--co-color-text-default));
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    line-height: var(--co-font-line-height-normal);
  }

  .banner__title {
    font-weight: var(--co-component-banner-title-weight, var(--co-font-weight-medium));
    text-transform: uppercase;
    letter-spacing: var(--co-font-tracking-wide, 0.04em);
  }

  .banner__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
