import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import { Validator } from '@lion/ui/form-core.js';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-input-stepper.js';
import type { CoInputStepper } from './co-input-stepper.js';

function getNativeInput(el: CoInputStepper) {
  return el.querySelector('input[slot="input"]') as HTMLInputElement;
}

function getIncrementButton(el: CoInputStepper) {
  return el.querySelector('[slot="suffix"]') as HTMLButtonElement;
}

function getDecrementButton(el: CoInputStepper) {
  return el.querySelector('[slot="prefix"]') as HTMLButtonElement;
}

class AlwaysValid extends Validator {
  static override get validatorName() {
    return 'AlwaysValid';
  }

  override execute() {
    return false;
  }
}

function validatorNames(el: CoInputStepper) {
  return (el.validators as Validator[]).map(
    (validator) => (validator.constructor as typeof Validator).validatorName,
  );
}

describe('co-input-stepper', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity"></co-input-stepper>`,
    );
    expect(el).to.exist;
    expect(el.size).to.equal('md');
    expect(el.danger).to.be.false;
    expect(el.step).to.equal(1);
    expect(el.min).to.equal(Infinity);
    expect(el.max).to.equal(Infinity);
    expect(getNativeInput(el).getAttribute('role')).to.equal('spinbutton');
  });

  it('reflects numeric attributes', async () => {
    const el = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity" min="1" max="9" step="2"></co-input-stepper>`,
    );
    expect(el.min).to.equal(1);
    expect(el.max).to.equal(9);
    expect(el.step).to.equal(2);
    expect(getNativeInput(el).min).to.equal('1');
    expect(getNativeInput(el).max).to.equal('9');
    expect(getNativeInput(el).step).to.equal('2');
  });

  it('renders stacked icon stepper controls', async () => {
    const el = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity"></co-input-stepper>`,
    );
    expect(el.shadowRoot!.querySelector('[part="stepper-group"]')).to.exist;
    expect(getIncrementButton(el).querySelector('co-icon')!.getAttribute('name')).to.equal(
      'keyboard-arrow-up',
    );
    expect(getDecrementButton(el).querySelector('co-icon')!.getAttribute('name')).to.equal(
      'keyboard-arrow-down',
    );
  });

  it('renders leading slot content', async () => {
    const el = await fixture<CoInputStepper>(html`
      <co-input-stepper label="Price">
        <span slot="leading">$</span>
      </co-input-stepper>
    `);
    expect(el.querySelector('[slot="leading"]')!.textContent).to.equal('$');
    expect(el.shadowRoot!.querySelector('[part="leading"]')).to.exist;
  });

  it('increments and decrements with the step buttons', async () => {
    const el = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity" min="0" max="10" step="2"></co-input-stepper>`,
    );

    getIncrementButton(el).click();
    await el.updateComplete;
    expect(el.modelValue).to.equal(2);
    expect(el.value).to.equal('2');

    getDecrementButton(el).click();
    await el.updateComplete;
    expect(el.modelValue).to.equal(0);
    expect(el.value).to.equal('0');
  });

  it('increments and decrements with arrow keys', async () => {
    const el = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity" min="0" max="10"></co-input-stepper>`,
    );

    el.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
    await el.updateComplete;
    expect(el.modelValue).to.equal(1);

    el.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    await el.updateComplete;
    expect(el.modelValue).to.equal(0);
  });

  it('disables stepper buttons at min and max', async () => {
    const el = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity" min="0" max="2" .modelValue=${0}></co-input-stepper>`,
    );
    await el.updateComplete;
    expect(getDecrementButton(el).disabled).to.be.true;

    el.modelValue = 2;
    await el.updateComplete;
    expect(getIncrementButton(el).disabled).to.be.true;
  });

  it('disables stepper buttons when disabled or readonly', async () => {
    const disabled = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity" disabled></co-input-stepper>`,
    );
    expect(getIncrementButton(disabled).disabled).to.be.true;
    expect(getDecrementButton(disabled).disabled).to.be.true;

    const readOnly = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity" readonly></co-input-stepper>`,
    );
    expect(getIncrementButton(readOnly).disabled).to.be.true;
    expect(getDecrementButton(readOnly).disabled).to.be.true;
  });

  it('dispatches co-input with current value detail', async () => {
    const el = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity"></co-input-stepper>`,
    );

    setTimeout(() => getIncrementButton(el).click());
    const event = (await oneEvent(el, 'co-input')) as CustomEvent;
    expect(event.detail.value).to.equal('1');
    expect(event.detail.modelValue).to.equal(1);
  });

  it('dispatches co-change with current value detail', async () => {
    const el = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity"></co-input-stepper>`,
    );
    const input = getNativeInput(el);
    input.value = '4';

    setTimeout(() => input.dispatchEvent(new Event('change', { bubbles: true, composed: true })));
    const event = (await oneEvent(el, 'co-change')) as CustomEvent;
    expect(event.detail.value).to.equal('4');
  });

  it('merges required validation before user supplied validators', async () => {
    const el = await fixture<CoInputStepper>(
      html`<co-input-stepper label="Quantity" required></co-input-stepper>`,
    );
    const customValidator = new AlwaysValid();

    el.validators = [customValidator];
    await el.updateComplete;
    await el.updateComplete;

    expect(validatorNames(el)).to.deep.equal(['Required', 'AlwaysValid']);
  });

  describe('accessibility', () => {
    it('is accessible in default state', async () => {
      const el = await fixture(html`<co-input-stepper label="Quantity"></co-input-stepper>`);
      await runA11yAudit(el, { component: 'co-input-stepper', state: 'default' });
    });
  });
});
