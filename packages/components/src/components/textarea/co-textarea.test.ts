import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import { Validator } from '@lion/ui/form-core.js';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-textarea.js';
import type { CoTextarea } from './co-textarea.js';

function getNativeTextarea(el: CoTextarea) {
  return el.querySelector('textarea[slot="input"]') as HTMLTextAreaElement;
}

function validatorNames(el: CoTextarea) {
  return (el.validators as Validator[]).map(
    (validator) => (validator.constructor as typeof Validator).validatorName,
  );
}

function firstFeedbackMessage(el: CoTextarea) {
  return (el as unknown as { _feedbackNode: { feedbackData?: Array<{ message?: string | Node }> } })
    ._feedbackNode.feedbackData?.[0]?.message;
}

describe('co-textarea', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoTextarea>(html`<co-textarea label="Comment"></co-textarea>`);
    expect(el).to.exist;
    expect(el.size).to.equal('md');
    expect(el.resize).to.equal('auto');
    expect(el.rows).to.equal(2);
    expect(el.maxRows).to.equal(6);
    expect(el.danger).to.be.false;
    expect(el.disabled).to.be.false;
    expect(el.readOnly).to.be.false;
  });

  it('reflects size and resize attributes', async () => {
    const el = await fixture<CoTextarea>(
      html`<co-textarea size="lg" resize="vertical" label="Comment"></co-textarea>`,
    );
    expect(el.size).to.equal('lg');
    expect(el.resize).to.equal('vertical');
    expect(el.getAttribute('size')).to.equal('lg');
    expect(el.getAttribute('resize')).to.equal('vertical');
  });

  it('reflects danger attribute without changing validity', async () => {
    const el = await fixture<CoTextarea>(html`<co-textarea danger label="Comment"></co-textarea>`);
    expect(el.danger).to.be.true;
    expect(el.hasAttribute('danger')).to.be.true;
    expect(getNativeTextarea(el).getAttribute('aria-invalid')).to.not.equal('true');
  });

  it('delegates placeholder, rows, and maxRows to the native textarea', async () => {
    const el = await fixture<CoTextarea>(
      html`<co-textarea
        placeholder="Write a note"
        rows="4"
        max-rows="8"
        label="Comment"
      ></co-textarea>`,
    );
    const textarea = getNativeTextarea(el);
    expect(textarea.placeholder).to.equal('Write a note');
    expect(textarea.rows).to.equal(4);
    expect(el.maxRows).to.equal(8);
  });

  it('delegates disabled and readonly to the native textarea', async () => {
    const el = await fixture<CoTextarea>(
      html`<co-textarea disabled readonly label="Comment"></co-textarea>`,
    );
    const textarea = getNativeTextarea(el);
    expect(el.disabled).to.be.true;
    expect(el.readOnly).to.be.true;
    expect(textarea.disabled).to.be.true;
    expect(textarea.readOnly).to.be.true;
  });

  it('delegates name to the native textarea', async () => {
    const el = await fixture<CoTextarea>(
      html`<co-textarea name="comment" label="Comment"></co-textarea>`,
    );
    expect(getNativeTextarea(el).name).to.equal('comment');
  });

  it('delegates minlength and maxlength to the native textarea', async () => {
    const el = await fixture<CoTextarea>(
      html`<co-textarea minlength="3" maxlength="12" label="Comment"></co-textarea>`,
    );
    const textarea = getNativeTextarea(el);
    expect(textarea.minLength).to.equal(3);
    expect(textarea.maxLength).to.equal(12);
  });

  it('renders a character counter when maxlength is set', async () => {
    const el = await fixture<CoTextarea>(
      html`<co-textarea maxlength="12" value="hello" label="Comment"></co-textarea>`,
    );
    expect(el.shadowRoot!.querySelector('[part="counter"]')!.textContent!.trim()).to.equal(
      '5 / 12',
    );
  });

  it('updates the character counter on input', async () => {
    const el = await fixture<CoTextarea>(
      html`<co-textarea maxlength="12" label="Comment"></co-textarea>`,
    );
    const textarea = getNativeTextarea(el);
    textarea.value = 'hello';
    textarea.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    await el.updateComplete;

    expect(el.shadowRoot!.querySelector('[part="counter"]')!.textContent!.trim()).to.equal(
      '5 / 12',
    );
  });

  it('renders Lion field structure in shadow DOM', async () => {
    const el = await fixture<CoTextarea>(
      html`<co-textarea label="Comment" help-text="Add relevant context"></co-textarea>`,
    );
    expect(el.shadowRoot!.querySelector('[part="label"]')).to.exist;
    expect(el.shadowRoot!.querySelector('[part="help-text"]')).to.exist;
    expect(el.shadowRoot!.querySelector('[part="control"]')).to.exist;
    expect(el.shadowRoot!.querySelector('[part="input"]')).to.exist;
    expect(getNativeTextarea(el)).to.exist;
  });

  it('renders prefix and suffix slots', async () => {
    const el = await fixture<CoTextarea>(html`
      <co-textarea label="Comment">
        <span slot="prefix">start</span>
        <span slot="suffix">end</span>
      </co-textarea>
    `);
    expect(el.querySelector('[slot="prefix"]')!.textContent).to.equal('start');
    expect(el.querySelector('[slot="suffix"]')!.textContent).to.equal('end');
    expect(el.shadowRoot!.querySelector('[part="prefix"]')).to.exist;
    expect(el.shadowRoot!.querySelector('[part="suffix"]')).to.exist;
  });

  it('dispatches co-focus and co-blur events from the native textarea', async () => {
    const el = await fixture<CoTextarea>(html`<co-textarea label="Comment"></co-textarea>`);
    const textarea = getNativeTextarea(el);

    const focusPromise = oneEvent(el, 'co-focus');
    textarea.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    const focusEvent = await focusPromise;
    expect(focusEvent).to.exist;

    const blurPromise = oneEvent(el, 'co-blur');
    textarea.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    const blurEvent = await blurPromise;
    expect(blurEvent).to.exist;
  });

  it('dispatches co-input with current value detail', async () => {
    const el = await fixture<CoTextarea>(html`<co-textarea label="Comment"></co-textarea>`);
    const textarea = getNativeTextarea(el);
    textarea.value = 'Ada';

    const eventPromise = oneEvent(el, 'co-input') as Promise<CustomEvent>;
    textarea.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    const event = await eventPromise;
    expect(event.detail.value).to.equal('Ada');
  });

  it('dispatches co-change with current value detail', async () => {
    const el = await fixture<CoTextarea>(html`<co-textarea label="Comment"></co-textarea>`);
    const textarea = getNativeTextarea(el);
    textarea.value = 'Grace';

    const eventPromise = oneEvent(el, 'co-change') as Promise<CustomEvent>;
    textarea.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    const event = await eventPromise;
    expect(event.detail.value).to.equal('Grace');
  });

  it('projects validation feedback slot content', async () => {
    const el = await fixture<CoTextarea>(html`
      <co-textarea label="Comment">
        <span slot="feedback">Add more detail.</span>
      </co-textarea>
    `);
    expect(el.querySelector('[slot="feedback"]')!.textContent).to.equal('Add more detail.');
    expect(el.shadowRoot!.querySelector('[part="feedback"]')).to.exist;
  });

  it('adds required, pattern, and length validators in stable order', async () => {
    const el = await fixture<CoTextarea>(html`
      <co-textarea
        label="Comment"
        required
        pattern="[a-z ]+"
        minlength="5"
        maxlength="80"
      ></co-textarea>
    `);

    expect(validatorNames(el)).to.deep.equal(['Required', 'Pattern', 'MinLength', 'MaxLength']);
  });

  it('validates minlength with a custom message', async () => {
    const el = await fixture<CoTextarea>(html`
      <co-textarea
        label="Comment"
        minlength="10"
        minlength-message="Enter at least ten characters."
        .modelValue=${'short'}
      ></co-textarea>
    `);

    el.submitted = true;
    await el.validateComplete;
    await el.updateComplete;
    await el.feedbackComplete;

    expect(el.validationStates.error.MinLength).to.equal(true);
    expect(firstFeedbackMessage(el)).to.equal('Enter at least ten characters.');
  });

  describe('accessibility', () => {
    it('is accessible in default state', async () => {
      const el = await fixture(html`<co-textarea label="Comment"></co-textarea>`);
      await runA11yAudit(el, { component: 'co-textarea', state: 'default' });
    });

    it('is accessible when disabled', async () => {
      const el = await fixture(html`<co-textarea label="Comment" disabled></co-textarea>`);
      await runA11yAudit(el, { component: 'co-textarea', state: 'disabled' });
    });

    it('is accessible when readonly', async () => {
      const el = await fixture(
        html`<co-textarea label="Review notes" value="Approved" readonly></co-textarea>`,
      );
      await runA11yAudit(el, { component: 'co-textarea', state: 'readonly' });
    });

    it('is accessible with danger styling', async () => {
      const el = await fixture(html`<co-textarea label="Comment" danger></co-textarea>`);
      await runA11yAudit(el, { component: 'co-textarea', state: 'danger' });
    });

    it('is accessible with feedback and a counter', async () => {
      const el = await fixture(html`
        <co-textarea label="Comment" help-text="Add relevant context" maxlength="120">
          <span slot="feedback">Add more detail.</span>
        </co-textarea>
      `);
      await runA11yAudit(el, { component: 'co-textarea', state: 'feedback-counter' });
    });
  });
});
