import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionForm } from '@lion/ui/form.js';
import { cobaltFormStyles } from './co-form.styles.js';
import { hasOwnValidationError } from '../../utils/validation.js';

export interface FormSubmitDetail {
  modelValue: Record<string, unknown>;
  serializedValue: Record<string, unknown>;
}

export interface FormValidationError {
  element: HTMLElement;
  name: string;
  fieldName: string;
  messages: string[];
  validationStates: Record<string, Record<string, unknown>>;
}

export interface FormInvalidSubmitDetail extends FormSubmitDetail {
  errors: FormValidationError[];
}

type FeedbackData = Array<{ message?: string | Node; type?: string }>;

type CobaltFormControl = HTMLElement & {
  fieldName?: string;
  formElements?: Iterable<CobaltFormControl>;
  feedbackComplete?: Promise<unknown>;
  hasFeedbackFor?: string[];
  validationStates?: Record<string, Record<string, unknown>>;
  _feedbackNode?: { feedbackData?: FeedbackData };
};

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
 * @fires co-submit - Emitted when the form is submitted with no validation errors
 * @fires co-invalid-submit - Emitted when a submit attempt contains validation errors
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

    this._syncNoValidate();
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

  protected override async _submit(ev: Event) {
    super._submit(ev);

    const baseDetail = {
      modelValue: this.modelValue as Record<string, unknown>,
      serializedValue: this.serializedValue as Record<string, unknown>,
    };

    if (this.hasFeedbackFor?.includes('error')) {
      await this._waitForFeedback();
      this.dispatchEvent(
        new CustomEvent<FormInvalidSubmitDetail>('co-invalid-submit', {
          detail: {
            ...baseDetail,
            errors: this._collectValidationErrors(),
          },
          bubbles: true,
          composed: true,
        }),
      );
      return;
    }

    this.dispatchEvent(
      new CustomEvent<FormSubmitDetail>('co-submit', {
        detail: baseDetail,
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

  private _syncNoValidate() {
    const form = this.querySelector('form');
    if (form) {
      form.setAttribute('novalidate', '');
      form.noValidate = true;
    }
  }

  private async _waitForFeedback() {
    await Promise.all(
      this._collectFormControls()
        .map((element) => element.feedbackComplete)
        .filter(Boolean),
    );
  }

  private _collectValidationErrors(): FormValidationError[] {
    return this._collectFormControls()
      .filter((element) => element.hasFeedbackFor?.includes('error'))
      .filter((element) => hasOwnValidationError(element))
      .map((element) => ({
        element,
        name: element.getAttribute('name') ?? '',
        fieldName: element.fieldName ?? element.getAttribute('label') ?? '',
        messages: this._getFeedbackMessages(element),
        validationStates: element.validationStates ?? {},
      }));
  }

  private _collectFormControls() {
    const controls: CobaltFormControl[] = [];
    const visit = (element: CobaltFormControl) => {
      controls.push(element);
      for (const child of Array.from(element.formElements ?? [])) {
        visit(child);
      }
    };

    for (const child of Array.from(this.formElements ?? []) as CobaltFormControl[]) {
      visit(child);
    }

    return controls;
  }

  private _getFeedbackMessages(element: CobaltFormControl) {
    return (
      element._feedbackNode?.feedbackData
        ?.filter((feedback) => feedback.type === 'error')
        .map((feedback) => this._messageToText(feedback.message))
        .filter((message) => message.length > 0) ?? []
    );
  }

  private _messageToText(message: string | Node | undefined) {
    if (typeof message === 'string') return message;
    return message?.textContent?.trim() ?? '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-form': CoForm;
  }
}
