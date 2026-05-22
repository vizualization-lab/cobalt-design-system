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
    min-block-size: var(--co-component-banner-min-height);
    padding: var(--co-component-banner-padding-block) var(--co-component-banner-padding-inline);
    gap: var(--co-component-banner-gap);
    box-sizing: border-box;
    background: var(--co-component-banner-background);
    color: var(--co-component-banner-content-color);
    font-family: var(--co-font-family-sans);
    font-size: var(--co-component-banner-content-font-size);
    font-weight: var(--co-component-banner-content-font-weight);
    letter-spacing: var(--co-component-banner-content-tracking);
    line-height: var(--co-component-banner-content-line-height);
    text-align: center;
  }

  .banner__title {
    color: var(--co-component-banner-title-color);
    font-size: var(--co-component-banner-title-font-size);
    font-weight: var(--co-component-banner-title-font-weight);
    letter-spacing: var(--co-component-banner-title-tracking);
    line-height: var(--co-component-banner-title-line-height);
    text-transform: uppercase;
  }

  .banner__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--co-component-banner-content-color);
    font-size: var(--co-component-banner-content-font-size);
    font-weight: var(--co-component-banner-content-font-weight);
    letter-spacing: var(--co-component-banner-content-tracking);
    line-height: var(--co-component-banner-content-line-height);
  }

  .banner__slot::slotted(*) {
    margin-block: 0;
  }
`;
