import { html, nothing, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionOption } from '@lion/ui/listbox.js';
import type { IconSize } from '../icon/co-icon.js';
import { cobaltOptionStyles } from './co-option.styles.js';
import '../icon/co-icon.js';

type OptionParentTag = 'co-select' | 'co-listbox' | 'co-combobox';

/**
 * @tag co-option
 * @summary A shared option component for Cobalt listbox, select, and combobox controls.
 *
 * The default radio/checkbox indicator is rendered only when the option lives
 * inside a context where it adds value: `co-listbox` (always visible options),
 * or a multi-select `co-combobox`. Inside `co-select` and single-select
 * `co-combobox`, the indicator is suppressed so the option list reads like a
 * traditional dropdown. Slotted `prefix` content is always honored.
 *
 * @slot - Option label content
 * @slot prefix - Custom prefix indicator (replaces default radio/checkbox icon)
 * @slot suffix - Trailing status indicator (icon, badge, etc.)
 *
 * @csspart base - The option wrapper
 * @csspart prefix - The prefix indicator container
 * @csspart label - The option label wrapper
 * @csspart suffix - The suffix container
 */
@customElement('co-option')
export class CoOption extends LionOption {
  static get styles() {
    return [cobaltOptionStyles];
  }

  /**
   * Intercept the checked attribute so that the string "false"
   * (set by frameworks like Vue) is treated as falsy.  Lit's default
   * Boolean converter treats any present attribute as truthy.
   */
  override attributeChangedCallback(name: string, old: string | null, value: string | null): void {
    if (name === 'checked' && value === 'false') {
      this.removeAttribute('checked');
      return;
    }
    super.attributeChangedCallback(name, old, value);
  }

  /** String value alias mapped to Lion's choiceValue. */
  @property({ reflect: true })
  override get value(): string {
    return typeof this.choiceValue === 'string' ? this.choiceValue : '';
  }

  override set value(value: string) {
    const oldValue = this.value;
    if (this.choiceValue !== value) {
      this.choiceValue = value;
    }
    this.requestUpdate('value', oldValue);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this._syncMultipleAttribute();
    // _parentFormGroup is set after registration, which happens after
    // connectedCallback. Re-sync once registration completes.
    this.updateComplete.then(() => this._syncMultipleAttribute());
  }

  override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);
    this._syncMultipleAttribute();
    this.toggleAttribute('data-no-indicator', !this._shouldRenderIndicator);
    // slotchange doesn't fire reliably for slots whose content is
    // already assigned at first paint, so check manually too.
    this._syncPrefixSlotState();
  }

  private _syncPrefixSlotState(): void {
    const slot = this.shadowRoot?.querySelector('slot[name="prefix"]') as HTMLSlotElement | null;
    if (!slot) return;
    const hasAssigned = slot.assignedNodes({ flatten: true }).length > 0;
    this.toggleAttribute('data-has-prefix-slot', hasAssigned);
  }

  private get _indicatorIconName(): string {
    const isMultiple = this.hasAttribute('multiple');
    if (isMultiple) {
      return this.checked ? 'check-box' : 'check-box-outline-blank';
    }
    return this.checked ? 'radio-button-checked' : 'radio-button-unchecked';
  }

  private get _parentTag(): OptionParentTag | null {
    const parent = this.closest('co-select, co-listbox, co-combobox') as HTMLElement | null;
    return (parent?.localName as OptionParentTag) ?? null;
  }

  /**
   * The default indicator only adds value where selection clarity matters:
   * always-visible listboxes and multi-select comboboxes. Single-select
   * dropdowns (co-select, single-mode co-combobox) read better without it.
   */
  private get _shouldRenderIndicator(): boolean {
    const tag = this._parentTag;
    const isMulti = this.hasAttribute('multiple');
    if (tag === 'co-select') return false;
    if (tag === 'co-combobox' && !isMulti) return false;
    return true;
  }

  private get _iconSize(): IconSize {
    const parent = this.closest('co-select, co-listbox, co-combobox') as HTMLElement | null;
    const parentSize = parent?.getAttribute('size') ?? 'md';
    return ({ sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }[parentSize] ?? 'sm') as IconSize;
  }

  private _onPrefixSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    this.toggleAttribute('data-has-prefix-slot', slot.assignedNodes({ flatten: true }).length > 0);
  };

  override render() {
    return html`
      <div part="base" class="option">
        <span part="prefix" class="option__prefix" aria-hidden="true">
          <slot name="prefix" @slotchange=${this._onPrefixSlotChange}>
            ${this._shouldRenderIndicator
              ? html`<co-icon
                  name=${this._indicatorIconName}
                  size=${this._iconSize}
                  ?fill=${this.checked}
                ></co-icon>`
              : nothing}
          </slot>
        </span>
        <span part="label" class="option__label">
          <slot></slot>
        </span>
        <span part="suffix" class="option__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `;
  }

  private _syncMultipleAttribute() {
    const parent = (this as unknown as { _parentFormGroup?: { multipleChoice?: boolean } })
      ._parentFormGroup;
    const wasMultiple = this.hasAttribute('multiple');
    if (parent?.multipleChoice) {
      this.setAttribute('multiple', '');
    } else {
      this.removeAttribute('multiple');
    }
    if (wasMultiple !== this.hasAttribute('multiple')) {
      this.requestUpdate();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-option': CoOption;
  }
}
