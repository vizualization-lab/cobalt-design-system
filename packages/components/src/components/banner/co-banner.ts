import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cobaltBannerStyles } from './co-banner.styles.js';

/**
 * @tag co-banner
 * @summary A persistent, full-width banner for announcements that sits above page content.
 *
 * @slot title - Title text styled with uppercase transform and medium font weight (overrides the title property)
 * @slot - Additional banner content stacked vertically below the title
 *
 * @csspart base - The banner container
 * @csspart title - The title slot wrapper
 * @csspart content - The default slot wrapper
 */
@customElement('co-banner')
export class CoBanner extends LitElement {
  static override styles = [cobaltBannerStyles];

  /** Accessible label for the banner region. */
  @property({ reflect: true })
  label = 'Banner';

  /** Title text displayed in uppercase. Can also be set via the title slot for rich content. */
  @property({ reflect: true })
  override set title(value: string) {
    const old = this._title;
    this._title = value;
    this.requestUpdate('title', old);
  }

  override get title(): string {
    return this._title;
  }

  private _title = '';

  override render() {
    return html`
      <div part="base" class="banner" role="banner" aria-label=${this.label}>
        <span part="title" class="banner__title">
          <slot name="title">${this._title}</slot>
        </span>
        <div part="content" class="banner__content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-banner': CoBanner;
  }
}
