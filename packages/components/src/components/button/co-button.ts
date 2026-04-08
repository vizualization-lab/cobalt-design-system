import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionButton } from '@lion/ui/button.js';
import { cobaltButtonStyles } from './co-button.styles.js';
import '../icon/co-icon.js';

export type ButtonVariant = 'primary' | 'secondary' | 'error' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * @tag co-button
 * @summary A button component extending Lion's LionButton with Cobalt theming.
 *
 * @slot - Default slot for button content
 * @slot prefix - Content before the label
 * @slot suffix - Content after the label
 *
 * @csspart base - The button wrapper
 * @csspart label - The label slot
 * @csspart prefix - The prefix slot container
 * @csspart suffix - The suffix slot container
 * @csspart spinner - The loading spinner
 *
 * @fires co-focus - Emitted when the button gains focus
 * @fires co-blur - Emitted when the button loses focus
 */
@customElement('co-button')
export class CoButton extends LionButton {
  static get styles() {
    return [...super.styles, cobaltButtonStyles];
  }

  /** The button variant. */
  @property({ reflect: true })
  variant: ButtonVariant = 'primary';

  /** The button size. */
  @property({ reflect: true })
  size: ButtonSize = 'md';

  /** Shows a loading spinner. */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /** An optional href to render the button as a link. */
  @property()
  href?: string;

  /** Where to open the link (when href is set). */
  @property()
  target?: '_blank' | '_self' | '_parent' | '_top';

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('focus', this._handleFocus);
    this.addEventListener('blur', this._handleBlur);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('focus', this._handleFocus);
    this.removeEventListener('blur', this._handleBlur);
  }

  private _handleFocus = () => {
    this.dispatchEvent(new CustomEvent('co-focus', { bubbles: true, composed: true }));
  };

  private _handleBlur = () => {
    this.dispatchEvent(new CustomEvent('co-blur', { bubbles: true, composed: true }));
  };

  render() {
    if (this.href) {
      return html`
        <a
          part="base"
          class="button"
          href=${this.href}
          target=${this.target ?? '_self'}
          rel=${this.target === '_blank' ? 'noopener noreferrer' : ''}
          tabindex=${this.disabled ? -1 : 0}
          aria-disabled=${this.disabled}
        >
          <slot name="prefix" part="prefix"></slot>
          <slot part="label"></slot>
          <slot name="suffix" part="suffix"></slot>
        </a>
      `;
    }

    return html`
      <div part="base" class="button">
        <slot name="prefix" part="prefix"></slot>
        <slot part="label"></slot>
        <slot name="suffix" part="suffix"></slot>
        ${this.loading
          ? html`<co-icon
              part="spinner"
              name="progress-activity"
              size=${{ sm: 'xs', md: 'sm', lg: 'md' }[this.size]}
              animated
              aria-hidden="true"
            ></co-icon>`
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-button': CoButton;
  }
}
