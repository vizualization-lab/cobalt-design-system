import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionButton } from '@lion/ui/button.js';
import { cobaltButtonStyles } from './co-button.styles.js';
import '../icon/co-icon.js';
import '@cobalt/icons/animated/progress-activity';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const spinnerIconSizeMap: Record<ButtonSize, 'xs' | 'sm' | 'md'> = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

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
  @property({ reflect: true })
  href?: string;

  /** Where to open the link (when href is set). */
  @property({ reflect: true })
  target?: '_blank' | '_self' | '_parent' | '_top';

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.hasAttribute('tabindex')) {
      this.tabIndex = 0;
    }
    this.addEventListener('focus', this._handleFocus);
    this.addEventListener('blur', this._handleBlur);
    this.addEventListener('click', this._handleClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('focus', this._handleFocus);
    this.removeEventListener('blur', this._handleBlur);
    this.removeEventListener('click', this._handleClick);
  }

  private _handleFocus = () => {
    this.dispatchEvent(new CustomEvent('co-focus', { bubbles: true, composed: true }));
  };

  private _handleBlur = () => {
    this.dispatchEvent(new CustomEvent('co-blur', { bubbles: true, composed: true }));
  };

  private _handleClick = (event: Event) => {
    if (event.defaultPrevented) return;
    if (this.disabled) return;

    if (!this.href) {
      this._handleNativeFormClick(event);
      return;
    }

    if (this.target && this.target !== '_self') {
      window.open(this.href, this.target, this.target === '_blank' ? 'noopener,noreferrer' : '');
    } else {
      window.location.href = this.href;
    }
  };

  private _handleNativeFormClick(event: Event) {
    if (this.type !== 'submit' && this.type !== 'reset') return;

    const form = this.closest('form');
    if (!form) return;

    event.preventDefault();
    if (this.type === 'reset') {
      form.reset();
      return;
    }

    const requestSubmit = (form as HTMLFormElement & { requestSubmit?: () => void }).requestSubmit;
    if (typeof requestSubmit === 'function') {
      requestSubmit.call(form);
      return;
    }

    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  }

  render() {
    if (this.href) {
      return html`
        <a
          part="base"
          class="button"
          href=${this.href}
          target=${this.target ?? '_self'}
          rel=${this.target === '_blank' ? 'noopener noreferrer' : ''}
          tabindex="-1"
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
              size=${spinnerIconSizeMap[this.size]}
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
