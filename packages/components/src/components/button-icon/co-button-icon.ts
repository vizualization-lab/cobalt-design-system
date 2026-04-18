import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionButtonSubmit } from '@lion/ui/button.js';
import type { ButtonVariant, ButtonSize } from '../button/co-button.js';
import type { IconSize } from '../icon/co-icon.js';
import { cobaltButtonIconStyles } from './co-button-icon.styles.js';
import '../icon/co-icon.js';

export type ButtonIconLabelPosition = 'top' | 'bottom';

const iconSizeMap: Record<ButtonSize, IconSize> = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
  xl: 'lg',
};

/**
 * @tag co-button-icon
 * @summary A button icon component with an optional text label.
 *
 * @csspart base - The button wrapper
 * @csspart icon - The co-icon element
 * @csspart label - The label text (when present)
 *
 * @fires co-focus - Emitted when the button gains focus
 * @fires co-blur - Emitted when the button loses focus
 */
@customElement('co-button-icon')
export class CoButtonIcon extends LionButtonSubmit {
  static get styles() {
    return [...super.styles, cobaltButtonIconStyles];
  }

  /** The icon name passed to the internal co-icon. */
  @property({ reflect: true })
  name = '';

  /** The button variant. */
  @property({ reflect: true })
  variant: ButtonVariant = 'primary';

  /** The button size. */
  @property({ reflect: true })
  size: ButtonSize = 'md';

  /** Optional visible text label. */
  @property()
  label?: string;

  /** Position of the label relative to the icon. */
  @property({ reflect: true, attribute: 'label-position' })
  labelPosition: ButtonIconLabelPosition = 'bottom';

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
    const iconSize = iconSizeMap[this.size];
    const hasLabel = !!this.label;

    const labelTemplate = hasLabel
      ? html`<span part="label" class="label">${this.label}</span>`
      : nothing;

    return html`
      <div part="base" class="button-icon ${hasLabel ? 'has-label' : ''}">
        ${this.labelPosition === 'top' ? labelTemplate : nothing}
        <co-icon part="icon" name=${this.name} size=${iconSize} aria-hidden="true"></co-icon>
        ${this.labelPosition === 'bottom' ? labelTemplate : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-button-icon': CoButtonIcon;
  }
}
