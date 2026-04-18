import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionForm } from '@lion/ui/form.js';
import { cobaltFormStyles } from './co-form.styles.js';

export interface FormSubmitDetail {
  modelValue: Record<string, unknown>;
  serializedValue: Record<string, unknown>;
}

/**
 * @tag co-form
 * @summary A form component extending Lion's LionForm with Cobalt theming.
 *
 * @slot - Form field content (co-input, co-listbox, co-textarea, etc.)
 * @slot label - Label content for the form
 * @slot help-text - Help text shown below the label
 * @slot feedback - Validation feedback rendered by Lion
 *
 * @csspart label - The label wrapper
 * @csspart help-text - The help text wrapper
 * @csspart fields - The fields container
 * @csspart feedback - The validation feedback wrapper
 *
 * @fires co-submit - Emitted when the form is submitted (after validation)
 * @fires co-reset - Emitted when the form is reset
 */
@customElement('co-form')
export class CoForm extends LionForm {
  static get styles() {
    return [...super.styles, cobaltFormStyles];
  }

  /** Whether the form is disabled. Cascades to all child form elements. */
  @property({ type: Boolean, reflect: true })
  override disabled = false;

  private _createdInternalForm = false;

  override connectedCallback(): void {
    if (!this.querySelector('form')) {
      const form = document.createElement('form');
      // Move all existing children into the form element
      while (this.firstChild) {
        form.appendChild(this.firstChild);
      }
      this.appendChild(form);
      this._createdInternalForm = true;
    }
    super.connectedCallback();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._createdInternalForm) {
      const form = this.querySelector('form');
      if (form) {
        // Move children back out before removing the form
        while (form.firstChild) {
          this.appendChild(form.firstChild);
        }
        form.remove();
      }
      this._createdInternalForm = false;
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

  protected override _feedbackTemplate() {
    return html`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `;
  }

  protected override _submit(ev: Event) {
    super._submit(ev);
    this.dispatchEvent(
      new CustomEvent<FormSubmitDetail>('co-submit', {
        detail: {
          modelValue: this.modelValue as Record<string, unknown>,
          serializedValue: this.serializedValue as Record<string, unknown>,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  protected override _reset(ev: Event) {
    super._reset(ev);

    // Lion's _reset calls preventDefault on the native reset event and only
    // resets Lion-registered form elements via resetGroup(). Manually reset
    // any native form controls that aren't managed by Lion.
    const form = this._formNode;
    if (form) {
      for (const el of Array.from(form.elements)) {
        if ('resetGroup' in el) continue;
        if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
          el.value = el.defaultValue;
        } else if (el instanceof HTMLSelectElement) {
          el.selectedIndex = 0;
        }
      }
    }

    this.dispatchEvent(
      new CustomEvent('co-reset', {
        bubbles: true,
        composed: true,
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-form': CoForm;
  }
}
