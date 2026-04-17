import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import '../input/co-input.js';
import './co-form.js';
import type { CoForm } from './co-form.js';

function getInternalForm(el: CoForm) {
  return el.querySelector('form') as HTMLFormElement;
}

describe('co-form', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoForm>(html`<co-form label="My form"></co-form>`);
    expect(el).to.exist;
    expect(el.disabled).to.be.false;
  });

  it('creates an internal <form> element automatically', async () => {
    const el = await fixture<CoForm>(html`
      <co-form label="My form">
        <co-input label="Name" name="name"></co-input>
      </co-form>
    `);
    const form = getInternalForm(el);
    expect(form).to.exist;
    expect(form.tagName).to.equal('FORM');
  });

  it('projects child form elements into the form', async () => {
    const el = await fixture<CoForm>(html`
      <co-form label="My form">
        <co-input label="Name" name="name"></co-input>
        <co-input label="Email" name="email"></co-input>
      </co-form>
    `);
    const form = getInternalForm(el);
    const inputs = form.querySelectorAll('co-input');
    expect(inputs.length).to.equal(2);
  });

  it('does not create a second form if one already exists', async () => {
    const el = await fixture<CoForm>(html`
      <co-form label="My form">
        <form>
          <co-input label="Name" name="name"></co-input>
        </form>
      </co-form>
    `);
    const forms = el.querySelectorAll('form');
    expect(forms.length).to.equal(1);
  });

  it('returns modelValue as an object of named field values', async () => {
    const el = await fixture<CoForm>(html`
      <co-form label="My form">
        <co-input label="Name" name="name" .modelValue=${'Ada'}></co-input>
        <co-input label="Email" name="email" .modelValue=${'ada@example.com'}></co-input>
      </co-form>
    `);
    await el.updateComplete;
    const modelValue = el.modelValue as Record<string, unknown>;
    expect(modelValue).to.have.property('name', 'Ada');
    expect(modelValue).to.have.property('email', 'ada@example.com');
  });

  it('returns serializedValue matching modelValue structure', async () => {
    const el = await fixture<CoForm>(html`
      <co-form label="My form">
        <co-input label="Name" name="name" .modelValue=${'Ada'}></co-input>
      </co-form>
    `);
    await el.updateComplete;
    const serializedValue = el.serializedValue as Record<string, unknown>;
    expect(serializedValue).to.have.property('name', 'Ada');
  });

  it('dispatches co-submit event with modelValue detail on submit', async () => {
    const el = await fixture<CoForm>(html`
      <co-form label="My form">
        <co-input label="Name" name="name" .modelValue=${'Ada'}></co-input>
      </co-form>
    `);
    await el.updateComplete;

    setTimeout(() => el.submit());
    const event = (await oneEvent(el, 'co-submit')) as CustomEvent;
    expect(event.detail.modelValue).to.have.property('name', 'Ada');
    expect(event.detail.serializedValue).to.have.property('name', 'Ada');
  });

  it('prevents default form submission', async () => {
    const el = await fixture<CoForm>(html`
      <co-form label="My form">
        <co-input label="Name" name="name"></co-input>
      </co-form>
    `);
    const form = getInternalForm(el);

    let defaultPrevented = false;
    form.addEventListener('submit', (ev: Event) => {
      defaultPrevented = ev.defaultPrevented;
    });

    setTimeout(() => el.submit());
    await oneEvent(el, 'co-submit');
    expect(defaultPrevented).to.be.true;
  });

  it('dispatches co-reset event on reset', async () => {
    const el = await fixture<CoForm>(html`
      <co-form label="My form">
        <co-input label="Name" name="name" .modelValue=${'Ada'}></co-input>
      </co-form>
    `);
    await el.updateComplete;

    setTimeout(() => el.reset());
    const event = await oneEvent(el, 'co-reset');
    expect(event).to.exist;
  });

  it('renders Lion field structure in shadow DOM', async () => {
    const el = await fixture<CoForm>(
      html`<co-form label="My form" help-text="Fill out all fields"></co-form>`,
    );
    expect(el.shadowRoot!.querySelector('[part="label"]')).to.exist;
    expect(el.shadowRoot!.querySelector('[part="help-text"]')).to.exist;
    expect(el.shadowRoot!.querySelector('[part="feedback"]')).to.exist;
  });

  it('projects validation feedback slot content', async () => {
    const el = await fixture<CoForm>(html`
      <co-form label="My form">
        <span slot="feedback">Please fix the errors above.</span>
      </co-form>
    `);
    expect(el.querySelector('[slot="feedback"]')!.textContent).to.equal(
      'Please fix the errors above.',
    );
    expect(el.shadowRoot!.querySelector('[part="feedback"]')).to.exist;
  });

  describe('accessibility', () => {
    it('is accessible in default state', async () => {
      const el = await fixture(html`
        <co-form label="Contact form">
          <co-input label="Name" name="name"></co-input>
        </co-form>
      `);
      await runA11yAudit(el, { component: 'co-form', state: 'default' });
    });

    it('is accessible when disabled', async () => {
      const el = await fixture(html`
        <co-form label="Contact form" disabled>
          <co-input label="Name" name="name"></co-input>
        </co-form>
      `);
      await runA11yAudit(el, { component: 'co-form', state: 'disabled' });
    });

    it('is accessible with feedback content', async () => {
      const el = await fixture(html`
        <co-form label="Contact form" help-text="All fields are required">
          <co-input label="Name" name="name"></co-input>
          <span slot="feedback">Please fix the errors above.</span>
        </co-form>
      `);
      await runA11yAudit(el, { component: 'co-form', state: 'feedback' });
    });
  });
});
