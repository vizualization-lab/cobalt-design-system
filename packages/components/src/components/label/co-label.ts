import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * @tag co-label
 * @summary A styled label for external field layouts and form associations.
 *
 * @slot - The visible label content
 * @slot prefix - Optional content shown before the label text
 * @slot suffix - Optional content shown after the label text
 */
@customElement('co-label')
export class CoLabel extends LitElement {
  private static _nextGeneratedId = 0;

  @property({ attribute: 'for', reflect: true })
  htmlFor?: string;

  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: Boolean, reflect: true })
  optional = false;

  @property({ attribute: 'optional-label' })
  optionalLabel = '(optional)';

  private _labelledTarget?: HTMLElement;
  private _labelledTargetToken?: string;
  private _addedLabelledByToken = false;

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', this._handleClick);
  }

  override disconnectedCallback(): void {
    this.removeEventListener('click', this._handleClick);
    this._clearTargetLabelling();
    super.disconnectedCallback();
  }

  override firstUpdated(): void {
    this._syncTargetLabelling();
  }

  override updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('htmlFor')) {
      this._syncTargetLabelling();
    }
  }

  override render() {
    return html`
      <style data-co-label-internal="true">
        .co-label__root {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-gap-sm);
          color: var(--co-color-text-default);
          cursor: default;
          font-family: var(--co-font-family-sans);
          font-size: var(--co-typography-label-size);
          font-weight: var(--co-typography-label-weight);
          letter-spacing: var(--co-typography-label-tracking);
          line-height: var(--co-typography-label-line-height);
        }

        .co-label__root--interactive {
          cursor: pointer;
        }

        .co-label__required {
          color: var(--co-color-feedback-danger-text);
        }

        .co-label__text-group {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-1);
          min-inline-size: 0;
        }

        .co-label__content,
        .co-label__content > * {
          min-inline-size: 0;
        }

        .co-label__content {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-gap-sm);
          color: inherit;
        }

        .co-label__content:empty {
          display: none;
        }

        .co-label__optional {
          color: var(--co-color-text-secondary);
          font-weight: var(--co-font-weight-regular);
        }
      </style>
      <label
        data-co-label-internal="true"
        class=${`co-label__root${this.htmlFor ? ' co-label__root--interactive' : ''}`}
        for=${ifDefined(this.htmlFor || undefined)}
      >
        ${this.required
          ? html`<span class="co-label__required" aria-hidden="true">*</span>`
          : nothing}
        <span
          data-co-label-internal="true"
          class="co-label__content co-label__content--prefix"
        >
          <slot name="prefix"></slot>
        </span>
        <span data-co-label-internal="true" class="co-label__text-group">
          <span
            data-co-label-internal="true"
            class="co-label__content co-label__content--default"
          >
            <slot></slot>
          </span>
          ${this._optionalTemplate()}
        </span>
        <span
          data-co-label-internal="true"
          class="co-label__content co-label__content--suffix"
        >
          <slot name="suffix"></slot>
        </span>
      </label>
    `;
  }

  private _optionalTemplate() {
    if (this.required || !this.optional || !this.optionalLabel) {
      return nothing;
    }

    return html`<span class="co-label__optional">${this.optionalLabel}</span>`;
  }

  private _handleClick = () => {
    if (!this.htmlFor) return;

    const target = this.ownerDocument?.getElementById(this.htmlFor);
    if (!(target instanceof HTMLElement)) return;

    queueMicrotask(() => {
      if (this._hasFocusWithin(target)) return;

      target.focus();
      if (this._hasFocusWithin(target)) return;

      this._findFocusableDescendant(target)?.focus();
    });
  };

  private _syncTargetLabelling() {
    this._clearTargetLabelling();
    if (!this.htmlFor) return;

    const target = this.ownerDocument?.getElementById(this.htmlFor);
    if (!(target instanceof HTMLElement)) return;

    const token = this._labelId();
    const tokens = this._ariaLabelledByTokens(target);
    const alreadyPresent = tokens.includes(token);

    if (!alreadyPresent) {
      target.setAttribute('aria-labelledby', [...tokens, token].join(' '));
    }

    this._labelledTarget = target;
    this._labelledTargetToken = token;
    this._addedLabelledByToken = !alreadyPresent;
  }

  private _clearTargetLabelling() {
    if (!this._labelledTarget || !this._labelledTargetToken || !this._addedLabelledByToken) {
      this._labelledTarget = undefined;
      this._labelledTargetToken = undefined;
      this._addedLabelledByToken = false;
      return;
    }

    const remainingTokens = this._ariaLabelledByTokens(this._labelledTarget).filter(
      (token) => token !== this._labelledTargetToken,
    );

    if (remainingTokens.length > 0) {
      this._labelledTarget.setAttribute('aria-labelledby', remainingTokens.join(' '));
    } else {
      this._labelledTarget.removeAttribute('aria-labelledby');
    }

    this._labelledTarget = undefined;
    this._labelledTargetToken = undefined;
    this._addedLabelledByToken = false;
  }

  private _labelId() {
    if (!this.id) {
      CoLabel._nextGeneratedId += 1;
      this.id = `co-label-${CoLabel._nextGeneratedId}`;
    }

    return this.id;
  }

  private _ariaLabelledByTokens(target: HTMLElement) {
    return (target.getAttribute('aria-labelledby') ?? '').split(/\s+/).filter(Boolean);
  }

  private _hasFocusWithin(target: HTMLElement) {
    return target.matches(':focus-within') || this.ownerDocument?.activeElement === target;
  }

  private _findFocusableDescendant(target: HTMLElement) {
    const selector =
      '[slot="input"], input, textarea, select, button, [tabindex]:not([tabindex="-1"])';

    return (
      target.querySelector<HTMLElement>(selector) ??
      target.shadowRoot?.querySelector<HTMLElement>(selector) ??
      null
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-label': CoLabel;
  }
}
