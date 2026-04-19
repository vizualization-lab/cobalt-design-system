import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-checkbox-group.js';
import type { CoCheckboxGroup } from './co-checkbox-group.js';

describe('co-checkbox-group', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoCheckboxGroup>(html`
      <co-checkbox-group label="Toppings" name="toppings">
        <co-checkbox label="Cheese" value="cheese"></co-checkbox>
        <co-checkbox label="Pepperoni" value="pepperoni"></co-checkbox>
      </co-checkbox-group>
    `);
    expect(el).to.exist;
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
  });

  it('renders group container', async () => {
    const el = await fixture<CoCheckboxGroup>(html`
      <co-checkbox-group label="Toppings" name="toppings">
        <co-checkbox label="Cheese" value="cheese"></co-checkbox>
      </co-checkbox-group>
    `);
    const group = el.shadowRoot!.querySelector('[part="group"]');
    expect(group).to.exist;
  });

  it('applies disabled state', async () => {
    const el = await fixture<CoCheckboxGroup>(html`
      <co-checkbox-group label="Toppings" name="toppings" disabled>
        <co-checkbox label="Cheese" value="cheese"></co-checkbox>
      </co-checkbox-group>
    `);
    expect(el.disabled).to.be.true;
  });

  describe('accessibility', () => {
    it('is accessible in default state', async () => {
      const el = await fixture(html`
        <co-checkbox-group label="Toppings" name="toppings">
          <co-checkbox label="Cheese" value="cheese"></co-checkbox>
          <co-checkbox label="Pepperoni" value="pepperoni"></co-checkbox>
        </co-checkbox-group>
      `);
      await runA11yAudit(el, { component: 'co-checkbox-group', state: 'default' });
    });

    it('is accessible when disabled', async () => {
      const el = await fixture(html`
        <co-checkbox-group label="Toppings" name="toppings" disabled>
          <co-checkbox label="Cheese" value="cheese"></co-checkbox>
        </co-checkbox-group>
      `);
      await runA11yAudit(el, { component: 'co-checkbox-group', state: 'disabled' });
    });
  });
});
