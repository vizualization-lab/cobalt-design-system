import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { cobaltNavSeparatorStyles } from './co-nav-separator.styles.js';

/**
 * @tag co-nav-separator
 * @summary A horizontal separator for use inside navigation drawers and menus.
 *
 * @csspart separator - The hr element
 */
@customElement('co-nav-separator')
export class CoNavSeparator extends LitElement {
  static override styles = [cobaltNavSeparatorStyles];

  override render() {
    return html`<hr part="separator" class="separator" aria-hidden="true" />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-nav-separator': CoNavSeparator;
  }
}
