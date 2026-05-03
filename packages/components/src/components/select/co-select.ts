import { html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionSelectRich } from '@lion/ui/select-rich.js';
import { Required, type Validator } from '@lion/ui/form-core.js';
import { CoSpaceGapXs } from '@cobalt/tokens';
import { cobaltSelectStyles } from './co-select.styles.js';
import '../icon/co-icon.js';

export { CoOption } from '../option/co-option.js';

export type SelectSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SelectChangeDetail {
  value: unknown;
  modelValue: unknown;
  checkedIndex: number;
}

/**
 * @tag co-select
 * @summary A themed select dropdown built on LionSelectRich with Cobalt styling.
 *
 * @slot - Option content (co-option elements)
 * @slot label - Label content for the select
 * @slot help-text - Help text shown below the label
 * @slot invoker - Custom invoker (replaces default)
 * @slot feedback - Validation feedback rendered by Lion
 *
 * @csspart label - The label wrapper
 * @csspart help-text - The help text wrapper
 * @csspart invoker - The invoker button area
 * @csspart overlay - The dropdown overlay
 * @csspart feedback - The validation feedback wrapper
 *
 * @fires co-change - Emitted when the selected option changes
 * @fires co-focus - Emitted when the select gains focus
 * @fires co-blur - Emitted when the select loses focus
 */
@customElement('co-select')
export class CoSelect extends LionSelectRich {
  static get styles() {
    return [...super.styles, cobaltSelectStyles];
  }

  private static _instances = 0;

  /** Controls field height, padding, and font size. */
  @property({ reflect: true })
  size: SelectSize = 'md';

  /** Applies danger styling without changing validation state. */
  @property({ type: Boolean, reflect: true })
  danger = false;

  /** Marks the select as required for validation. */
  @property({ type: Boolean, reflect: true })
  required = false;

  /** Stable id for the overlay node, referenced by the invoker's aria-controls. */
  private readonly _overlayId = `co-select-overlay-${++CoSelect._instances}`;

  private readonly _requiredValidator = new Required(undefined, {
    getMessage: async () => 'Please select an option.',
  });

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('model-value-changed', this._handleModelValueChanged);
    this.addEventListener('opened-changed', this._syncChevronRotation);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('model-value-changed', this._handleModelValueChanged);
    this.removeEventListener('opened-changed', this._syncChevronRotation);
    const invoker = this.querySelector('[slot="invoker"]') as HTMLElement | null;
    if (invoker) {
      invoker.removeEventListener('focus', this._handleInvokerFocus);
      invoker.removeEventListener('blur', this._handleInvokerBlur);
    }
  }

  override firstUpdated(changedProperties: PropertyValues<this>): void {
    super.firstUpdated(changedProperties);
    this._syncRequiredValidator();
    this._wireInvokerFocusEvents();
  }

  /**
   * Listen for focus/blur on the invoker directly. The invoker is a custom
   * element with shadow DOM that's slotted into co-select's shadow DOM, so
   * focus events retarget twice on their way to the host listener (which
   * makes target/composedPath unusable for filtering). Attaching to the
   * invoker bypasses that.
   */
  private _wireInvokerFocusEvents(): void {
    const invoker = this.querySelector('[slot="invoker"]') as HTMLElement | null;
    if (!invoker) return;
    invoker.addEventListener('focus', this._handleInvokerFocus);
    invoker.addEventListener('blur', this._handleInvokerBlur);
  }

  override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (changedProperties.has('required')) {
      this._syncRequiredValidator();
    }

    this._syncChevronRotation();
    this._syncAriaControls();
  }

  /**
   * Wire the invoker's aria-controls to the listbox's id so screen readers
   * announce the relationship. Lion sets aria-haspopup, aria-expanded, and
   * aria-labelledby on the invoker — but not aria-controls. The listbox
   * lives in light DOM (slotted as [slot="input"] by Lion), so the IDREF
   * is resolvable from the invoker (also light DOM).
   */
  private _syncAriaControls(): void {
    const invoker = this.querySelector('[slot="invoker"]') as HTMLElement | null;
    const listbox = this.querySelector('[slot="input"]') as HTMLElement | null;
    if (!invoker || !listbox) return;

    if (!listbox.id) {
      listbox.id = this._overlayId;
    }

    if (invoker.getAttribute('aria-controls') !== listbox.id) {
      invoker.setAttribute('aria-controls', listbox.id);
    }
  }

  private _syncChevronRotation = () => {
    const chevron = this.querySelector('.select__chevron') as HTMLElement | null;
    if (chevron) {
      chevron.style.transform = this.opened ? 'rotate(180deg)' : '';
    }
  };

  protected override _labelTemplate() {
    return html`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `;
  }

  protected override _helpTextTemplate() {
    return html`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `;
  }

  override get slots() {
    return {
      ...super.slots,
      invoker: () => {
        const invoker = document.createElement('lion-select-invoker') as HTMLElement;
        // Replace the default ▼ text with a co-icon chevron
        const icon = document.createElement('co-icon') as HTMLElement;
        icon.setAttribute('slot', 'after');
        icon.setAttribute('name', 'keyboard-arrow-down');
        icon.setAttribute('size', { sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }[this.size] ?? 'sm');
        icon.setAttribute('aria-hidden', 'true');
        icon.classList.add('select__chevron');
        icon.style.transition =
          'transform var(--co-motion-duration-fast, 0.15s) var(--co-motion-easing-default, ease)';
        invoker.appendChild(icon);
        return invoker;
      },
    };
  }

  protected override _inputGroupTemplate() {
    return html`
      <div part="input-group" class="input-group">
        <div part="invoker" class="input-group__container">
          <slot name="invoker"></slot>
        </div>
        <div id=${this._overlayId} part="overlay" @mousedown=${this._onOverlayMousedown}>
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `;
  }

  /** Set overlay reference to the full container so width and position align. */
  protected override _setupOverlayCtrl() {
    super._setupOverlayCtrl();
    const container = this.shadowRoot?.querySelector('.input-group__container');
    if (container && this._overlayCtrl) {
      this._overlayCtrl.updateConfig({
        referenceNode: container as HTMLElement,
      });
    }
  }

  /** Always match the container width, even with no default selected. */
  protected override _noDefaultSelectedInheritsWidth() {
    // no-op: we always use 'full' via referenceNode
  }

  /** Skip Lion's invoker width alignment — we use referenceNode instead. */
  protected override async _alignInvokerWidth() {
    // no-op: overlay width is controlled by referenceNode
  }

  protected override _feedbackTemplate() {
    return html`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `;
  }

  protected override _defineOverlayConfig() {
    const config = super._defineOverlayConfig();
    const popperConfig = ((config as Record<string, unknown>).popperConfig ?? {}) as Record<
      string,
      unknown
    >;
    return {
      ...config,
      inheritsReferenceWidth: 'full',
      popperConfig: {
        ...popperConfig,
        modifiers: [
          {
            name: 'offset',
            enabled: true,
            options: { offset: [0, parseInt(CoSpaceGapXs, 10)] },
          },
        ],
      },
    } as ReturnType<LionSelectRich['_defineOverlayConfig']>;
  }

  private _onOverlayMousedown(e: Event) {
    e.preventDefault();
  }

  /** Re-emit invoker focus as a composed `co-focus` event on the host. */
  private _handleInvokerFocus = () => {
    this.dispatchEvent(new CustomEvent('co-focus', { bubbles: true, composed: true }));
  };

  private _handleInvokerBlur = () => {
    this.dispatchEvent(new CustomEvent('co-blur', { bubbles: true, composed: true }));
  };

  private _handleModelValueChanged = (event: Event) => {
    const customEvent = event as CustomEvent<{ initialize?: boolean }>;
    if (customEvent.target !== this || customEvent.detail?.initialize) return;

    this.dispatchEvent(
      new CustomEvent<SelectChangeDetail>('co-change', {
        detail: {
          value: this.modelValue,
          modelValue: this.modelValue,
          checkedIndex: this.checkedIndex as number,
        },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _syncRequiredValidator() {
    const validators = this.validators as Validator[];
    const hasRequiredValidator = validators.includes(this._requiredValidator);

    if (this.required && !hasRequiredValidator) {
      this.validators = [...validators, this._requiredValidator];
      return;
    }

    if (!this.required && hasRequiredValidator) {
      this.validators = validators.filter((validator) => validator !== this._requiredValidator);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-select': CoSelect;
  }
}
