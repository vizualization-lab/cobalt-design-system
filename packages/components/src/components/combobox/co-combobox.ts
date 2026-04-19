import { html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionCombobox, MatchesOption } from '@lion/ui/combobox.js';
import { Required, Validator } from '@lion/ui/form-core.js';
import type { OverlayConfig } from '@lion/ui/types/overlays.js';
import { cobaltComboboxStyles } from './co-combobox.styles.js';
import '../icon/co-icon.js';

class CobaltMatchesOption extends MatchesOption {
  static async getMessage(data: { config: { getMessage?: () => string } }) {
    return data?.config?.getMessage ? data.config.getMessage() : 'Please select a valid option.';
  }
}

export { CoOption } from '../option/co-option.js';

export type ComboboxSize = 'sm' | 'md' | 'lg' | 'xl';
export type ComboboxAutocomplete = 'none' | 'list' | 'inline' | 'both';
export type ComboboxMatchMode = 'begin' | 'all';
export type ComboboxValue = string | string[];

export interface ComboboxInputDetail {
  value: string;
  modelValue: unknown;
}

export interface ComboboxChangeDetail {
  value: string;
  modelValue: unknown;
  checkedIndex: number | number[];
}

/**
 * @tag co-combobox
 * @summary A searchable combobox component extending Lion's LionCombobox with Cobalt theming.
 *
 * @slot label - Label content for the combobox
 * @slot help-text - Help text shown below the label
 * @slot input - Native combobox input managed by Lion
 * @slot selection-display - Optional selected value display managed by Lion
 * @slot prefix - Content before the combobox value
 * @slot suffix - Content after the combobox value
 * @slot listbox - Internal options container managed by Lion
 * @slot - Option content moved into the internal listbox container
 * @slot feedback - Validation feedback rendered by Lion
 *
 * @csspart label - The label wrapper
 * @csspart help-text - The help text wrapper
 * @csspart input-group - The input group wrapper
 * @csspart control - The visual combobox control
 * @csspart input - The native input wrapper
 * @csspart prefix - The prefix slot container
 * @csspart suffix - The suffix slot container
 * @csspart overlay - The options overlay wrapper
 * @csspart feedback - The validation feedback wrapper
 *
 * @fires co-focus - Emitted when the native combobox input gains focus
 * @fires co-blur - Emitted when the native combobox input loses focus
 * @fires co-input - Emitted when the native combobox input value changes during editing
 * @fires co-change - Emitted when the combobox model value changes
 */
@customElement('co-combobox')
export class CoCombobox extends LionCombobox {
  static get styles() {
    return [...super.styles, cobaltComboboxStyles];
  }

  /** Controls field height, padding, and font size. */
  @property({ reflect: true })
  size: ComboboxSize = 'md';

  /** Applies danger styling without changing validation state. */
  @property({ type: Boolean, reflect: true })
  danger = false;

  /** Controls Lion combobox autocomplete behavior. */
  @property({ reflect: true })
  override autocomplete: ComboboxAutocomplete = 'both';

  /** Controls whether filtering matches from the beginning or anywhere in options. */
  @property({ attribute: 'match-mode', reflect: true })
  override matchMode: ComboboxMatchMode = 'all';

  /** Shows all options when the textbox is empty and the overlay is open. */
  @property({ type: Boolean, attribute: 'show-all-on-empty', reflect: true })
  override showAllOnEmpty = false;

  /** Selects the active option while arrowing through options. */
  @property({ type: Boolean, attribute: 'selection-follows-focus', reflect: true })
  override selectionFollowsFocus = true;

  /** Allows keyboard navigation to wrap from last to first option. */
  @property({ type: Boolean, attribute: 'rotate-keyboard-navigation', reflect: true })
  override rotateKeyboardNavigation = true;

  /** Prevents Lion from selecting a default option on initialization. */
  @property({ type: Boolean, attribute: 'has-no-default-selected', reflect: true })
  override hasNoDefaultSelected = false;

  /** Allows multiple options to be selected. */
  @property({ type: Boolean, attribute: 'multiple-choice', reflect: true })
  override multipleChoice = false;

  /** Cobalt alias for Lion's multipleChoice property. */
  @property({ type: Boolean, reflect: true })
  multiple = false;

  /** Allows values that do not match an existing option. */
  @property({ type: Boolean, attribute: 'allow-custom-choice', reflect: true })
  override allowCustomChoice = false;

  /** Marks the combobox as required for validation and assistive technology. */
  @property({ type: Boolean, reflect: true })
  required = false;

  /** Custom error message shown when the entered value does not match any option. */
  @property({ attribute: 'match-error' })
  matchError = '';

  /** Lion-compatible inverse of allowCustomChoice. */
  @property({ type: Boolean, attribute: 'require-option-match' })
  override get requireOptionMatch(): boolean {
    return super.requireOptionMatch;
  }

  override set requireOptionMatch(value: boolean) {
    super.requireOptionMatch = value;
  }

  private readonly _requiredValidator = new Required();
  private readonly _matchesOptionValidator = new CobaltMatchesOption();

  override connectedCallback(): void {
    super.connectedCallback();
    this._replaceMatchesOptionValidator();
    this.addEventListener('focusin', this._handleFocusIn);
    this.addEventListener('focusout', this._handleFocusOut);
    this.addEventListener('input', this._handleNativeInput);
    this.addEventListener('model-value-changed', this._handleModelValueChanged);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('focusin', this._handleFocusIn);
    this.removeEventListener('focusout', this._handleFocusOut);
    this.removeEventListener('input', this._handleNativeInput);
    this.removeEventListener('model-value-changed', this._handleModelValueChanged);
  }

  override firstUpdated(changedProperties: PropertyValues<this>): void {
    super.firstUpdated(changedProperties);
    this._syncMultipleAlias();
    this._syncRequiredValidator();
  }

  override updated(changedProperties: PropertyValues<this>): void {
    this._syncMultipleAlias(changedProperties);
    super.updated(changedProperties);

    if (changedProperties.has('required')) {
      this._syncRequiredValidator();
    }

    if (changedProperties.has('allowCustomChoice')) {
      this.requestUpdate('requireOptionMatch', !this.allowCustomChoice);
    }

    if (changedProperties.has('matchError')) {
      this._syncMatchErrorMessage();
    }

    if (
      changedProperties.has('multiple') ||
      changedProperties.has('multipleChoice') ||
      changedProperties.has('required')
    ) {
      this._syncListboxAttributes();
    }
  }

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

  protected override _inputGroupTemplate() {
    return html`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `;
  }

  protected override _inputGroupPrefixTemplate(): TemplateResult | typeof nothing {
    return !Array.from(this.children).find((child) => child.slot === 'prefix')
      ? nothing
      : html`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `;
  }

  protected override _inputGroupInputTemplate() {
    return html`
      <div part="input" class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `;
  }

  protected override _inputGroupSuffixTemplate(): TemplateResult {
    const iconSize = { sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }[this.size] ?? 'sm';
    return html`
      <div
        part="suffix"
        class="input-group__suffix"
        @mousedown=${this._onSuffixMousedown}
        @click=${this._onSuffixClick}
      >
        <slot name="suffix">
          <co-icon
            class="combobox__chevron"
            name="keyboard-arrow-down"
            size=${iconSize}
            aria-hidden="true"
          ></co-icon>
        </slot>
      </div>
    `;
  }

  /** Prevent mousedown from stealing focus away from the input. */
  private _preventFocusShift(e: Event) {
    e.preventDefault();
  }

  private _onSuffixMousedown(e: Event) {
    this._preventFocusShift(e);
  }

  private _onOverlayMousedown(e: Event) {
    this._preventFocusShift(e);
  }

  private _onSuffixClick() {
    if (this.disabled || this.readOnly) return;
    this._inputNode?.focus();
    if (this.opened) {
      this.opened = false;
    } else if (this._hasVisibleOptions()) {
      this.opened = true;
    }
  }

  /** Hide the overlay when no options are visible to prevent an empty dropdown box. */
  private _hasVisibleOptions(): boolean {
    const options = this.formElements ?? [];
    return options.some((el: HTMLElement) => el.style.display !== 'none');
  }

  protected override _overlayListboxTemplate() {
    return html`
      <div
        id="overlay-content-node-wrapper"
        part="overlay"
        role="dialog"
        aria-label="Options"
        @mousedown=${this._onOverlayMousedown}
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `;
  }

  protected override _feedbackTemplate() {
    return html`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `;
  }

  /**
   * Hides the overlay after autocompletion when no options are visible.
   * Scheduled via rAF to avoid conflicting with Lion's opened sync in updated().
   */
  protected override _handleAutocompletion(): void {
    super._handleAutocompletion();

    const hasVisible = this.formElements.some((el: HTMLElement) => el.style.display !== 'none');

    if (!hasVisible && this.opened) {
      requestAnimationFrame(() => {
        if (
          this.opened &&
          !this.formElements.some((el: HTMLElement) => el.style.display !== 'none')
        ) {
          this.opened = false;
        }
      });
    }
  }

  /**
   * Extends Lion's condition to also open the overlay when the input text
   * matches at least one option (fixes autocomplete="list" where `filled`
   * stays false until a selection is committed) and to block opening when
   * no options would match.
   */
  protected override _showOverlayCondition(options: {
    lastKey?: string;
    currentValue?: string;
  }): boolean {
    if (!this._hasVisibleOptions()) return false;

    const shouldShow = super._showOverlayCondition(options);
    const inputValue = this._inputNode?.value;

    // Respect Lion's explicit close decisions (Enter, Escape, Tab)
    const closeKeys = ['Enter', 'Escape', 'Tab'];
    if (!shouldShow && options.lastKey && closeKeys.includes(options.lastKey)) {
      return false;
    }

    if (!shouldShow && inputValue && this.formElements.length > 0) {
      // Lion returned false (e.g. filled=false in list mode), but the user
      // has typed text that matches options — allow opening.
      return this.formElements.some((option: unknown) =>
        this.matchCondition(option as Parameters<typeof this.matchCondition>[0], inputValue),
      );
    }

    if (shouldShow && inputValue && this.formElements.length > 0) {
      // Lion wants to open, but block if nothing would match.
      return this.formElements.some((option: unknown) =>
        this.matchCondition(option as Parameters<typeof this.matchCondition>[0], inputValue),
      );
    }

    return shouldShow;
  }

  protected override _defineOverlayConfig(): OverlayConfig {
    return {
      ...super._defineOverlayConfig(),
      _noDialogEl: true,
    };
  }

  private _handleFocusIn = (event: Event) => {
    if (event.target !== this._inputNode) return;
    this.dispatchEvent(new CustomEvent('co-focus', { bubbles: true, composed: true }));
  };

  private _handleFocusOut = (event: Event) => {
    if (event.target !== this._inputNode) return;
    this.dispatchEvent(new CustomEvent('co-blur', { bubbles: true, composed: true }));
  };

  private _handleNativeInput = (event: Event) => {
    if (event.target !== this._inputNode) return;
    this.dispatchEvent(
      new CustomEvent<ComboboxInputDetail>('co-input', {
        detail: {
          value: this._inputNode.value,
          modelValue: this.modelValue,
        },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _handleModelValueChanged = (event: Event) => {
    const customEvent = event as CustomEvent<{ initialize?: boolean }>;
    if (customEvent.target !== this || customEvent.detail?.initialize) return;

    this.dispatchEvent(
      new CustomEvent<ComboboxChangeDetail>('co-change', {
        detail: {
          value: this.value,
          modelValue: this.modelValue,
          checkedIndex: this.checkedIndex,
        },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _syncMultipleAlias(changedProperties?: PropertyValues<this>) {
    if (changedProperties?.has('multiple') && this.multipleChoice !== this.multiple) {
      this.multipleChoice = this.multiple;
      return;
    }

    if (changedProperties?.has('multipleChoice') && this.multiple !== this.multipleChoice) {
      this.multiple = this.multipleChoice;
      return;
    }

    if (!changedProperties && this.multiple !== this.multipleChoice) {
      this.multipleChoice = this.multiple || this.multipleChoice;
      this.multiple = this.multipleChoice;
    }
  }

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

  private _replaceMatchesOptionValidator() {
    this.defaultValidators = this.defaultValidators.map((v: Validator) =>
      v instanceof MatchesOption ? this._matchesOptionValidator : v,
    );
    this._syncMatchErrorMessage();
  }

  private _syncMatchErrorMessage() {
    if (this.matchError) {
      this._matchesOptionValidator.config = {
        ...this._matchesOptionValidator.config,
        getMessage: () => this.matchError,
      };
    }
  }

  private _syncListboxAttributes() {
    const listboxNode = this.querySelector('[slot="listbox"]');
    if (!listboxNode) return;

    listboxNode.setAttribute('aria-multiselectable', `${this.multipleChoice}`);
    if (this.required) {
      listboxNode.setAttribute('aria-required', 'true');
    } else {
      listboxNode.removeAttribute('aria-required');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-combobox': CoCombobox;
  }
}
