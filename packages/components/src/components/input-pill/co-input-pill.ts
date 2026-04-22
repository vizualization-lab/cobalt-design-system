import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CoInput } from '../input/co-input.js';
import { cobaltInputPillStyles } from './co-input-pill.styles.js';
import '../icon/co-icon.js';
import '../button-icon/co-button-icon.js';

export type InputPillVariant = 'default' | 'search' | 'chat';

const VARIANT_DEFAULTS: Record<
  InputPillVariant,
  { prefixIcon?: string; actionIcon?: string; placeholder?: string }
> = {
  default: {},
  search: { prefixIcon: 'search', placeholder: 'Search' },
  chat: { actionIcon: 'arrow-forward' },
};

export interface InputPillActionDetail {
  value: string;
}

/**
 * @tag co-input-pill
 * @summary A stylized standalone input with pill shape and optional action button.
 *
 * @slot prefix - Custom prefix content (replaces default prefix icon)
 * @slot suffix - Custom suffix content (replaces default action button)
 *
 * @csspart input-group - The input group wrapper
 * @csspart control - The visual input control
 * @csspart prefix - The prefix icon container
 * @csspart suffix - The suffix container
 * @csspart action-button - The circular action button
 *
 * @fires co-action - Emitted when the action button is clicked
 * @fires co-focus - Inherited from CoInput
 * @fires co-blur - Inherited from CoInput
 * @fires co-input - Inherited from CoInput
 * @fires co-change - Inherited from CoInput
 */
@customElement('co-input-pill')
export class CoInputPill extends CoInput {
  static get styles() {
    return [...super.styles, cobaltInputPillStyles];
  }

  /** The action input variant. Configures default prefix and action icons. */
  @property({ reflect: true })
  variant: InputPillVariant = 'default';

  /** Override the action button icon name. */
  @property({ attribute: 'action-icon' })
  actionIcon?: string;

  /** Override the prefix icon name. */
  @property({ attribute: 'prefix-icon' })
  prefixIcon?: string;

  private get _resolvedPrefixIcon(): string | undefined {
    return this.prefixIcon ?? VARIANT_DEFAULTS[this.variant]?.prefixIcon;
  }

  private get _resolvedActionIcon(): string | undefined {
    return this.actionIcon ?? VARIANT_DEFAULTS[this.variant]?.actionIcon;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    // Apply default placeholder from variant if not explicitly set
    if (!this.hasAttribute('placeholder')) {
      const defaultPlaceholder = VARIANT_DEFAULTS[this.variant]?.placeholder;
      if (defaultPlaceholder) {
        this.setAttribute('placeholder', defaultPlaceholder);
      }
    }
  }

  private get _iconSize(): string {
    return { sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }[this.size] ?? 'sm';
  }

  protected override _inputGroupPrefixTemplate() {
    const icon = this._resolvedPrefixIcon;
    if (!icon) return nothing;
    return html`
      <div part="prefix" class="input-group__prefix">
        <slot name="prefix">
          <co-icon name=${icon} size=${this._iconSize} aria-hidden="true"></co-icon>
        </slot>
      </div>
    `;
  }

  protected override _inputGroupSuffixTemplate() {
    const icon = this._resolvedActionIcon;
    if (!icon) return nothing;
    return html`
      <div part="suffix" class="input-group__suffix">
        <slot name="suffix">
          <co-button-icon
            part="action-button"
            name=${icon}
            size=${{ sm: 'sm', md: 'sm', lg: 'md', xl: 'lg' }[this.size] ?? 'sm'}
            variant="primary"
            circle
            ?disabled=${this.disabled}
            aria-label="Submit"
            @click=${this._onActionClick}
          ></co-button-icon>
        </slot>
      </div>
    `;
  }

  /** Hide label, help-text, and feedback for standalone usage. */
  protected override _labelTemplate() {
    return html``;
  }

  protected override _helpTextTemplate() {
    return html``;
  }

  protected override _feedbackTemplate() {
    return html``;
  }

  private _onActionClick() {
    if (this.disabled) return;
    const value = this._inputNode?.value ?? '';
    this.dispatchEvent(
      new CustomEvent<InputPillActionDetail>('co-action', {
        detail: { value },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-input-pill': CoInputPill;
  }
}
