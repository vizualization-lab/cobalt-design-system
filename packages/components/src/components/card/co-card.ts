import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cobaltCardStyles } from './co-card.styles.js';

/**
 * @tag co-card
 * @summary A layout card container with optional header, body, and footer regions.
 *
 * @slot header - Optional header area at the top of the card
 * @slot - Main body content
 * @slot footer - Optional footer area at the bottom of the card
 *
 * @csspart base - The card container
 * @csspart header - The header slot wrapper
 * @csspart body - The default slot wrapper
 * @csspart footer - The footer slot wrapper
 */
@customElement('co-card')
export class CoCard extends LitElement {
  static override styles = [cobaltCardStyles];

  /** Accessible label for the card region. */
  @property({ reflect: true })
  label = '';

  override render() {
    return html`
      <div
        part="base"
        class="card"
        role=${this.label ? 'region' : nothing}
        aria-label=${this.label || nothing}
      >
        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>
        <div part="body" class="card__body">
          <slot></slot>
        </div>
        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-card': CoCard;
  }
}
