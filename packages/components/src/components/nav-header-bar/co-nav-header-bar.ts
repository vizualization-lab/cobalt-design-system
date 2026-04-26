import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cobaltNavHeaderBarStyles } from './co-nav-header-bar.styles.js';

/**
 * @tag co-nav-header-bar
 * @summary A horizontal header bar for app-level navigation with logo, content, and avatar regions.
 *
 * @slot logo - Optional logo or brand area on the left
 * @slot - Main content area (nav items, search, actions) with space-between alignment
 * @slot avatar - Avatar or user icon area on the right
 *
 * @csspart base - The header container
 * @csspart logo - The logo slot wrapper
 * @csspart content - The default slot wrapper
 * @csspart avatar - The avatar slot wrapper
 */
@customElement('co-nav-header-bar')
export class CoNavHeaderBar extends LitElement {
  static override styles = [cobaltNavHeaderBarStyles];

  /** Accessible label for the header landmark. */
  @property({ reflect: true })
  label = 'Header';

  override render() {
    return html`
      <header part="base" class="nav-header-bar" aria-label=${this.label}>
        <div part="logo" class="nav-header-bar__logo">
          <slot name="logo"></slot>
        </div>
        <div part="content" class="nav-header-bar__content">
          <slot></slot>
        </div>
        <div part="avatar" class="nav-header-bar__avatar">
          <slot name="avatar"></slot>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-nav-header-bar': CoNavHeaderBar;
  }
}
