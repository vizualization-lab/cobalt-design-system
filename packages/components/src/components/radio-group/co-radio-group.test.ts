import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-radio-group.js';
import type { CoRadioGroup } from './co-radio-group.js';

describe('co-radio-group', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoRadioGroup>(html`
      <co-radio-group label="Fruit" name="fruit">
        <co-radio label="Apple" value="apple"></co-radio>
        <co-radio label="Banana" value="banana"></co-radio>
      </co-radio-group>
    `);
    expect(el).to.exist;
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
  });

  it('renders radio group container', async () => {
    const el = await fixture<CoRadioGroup>(html`
      <co-radio-group label="Fruit" name="fruit">
        <co-radio label="Apple" value="apple"></co-radio>
        <co-radio label="Banana" value="banana"></co-radio>
      </co-radio-group>
    `);
    const group = el.shadowRoot!.querySelector('[part="group"]');
    expect(group).to.exist;
  });

  it('applies disabled state', async () => {
    const el = await fixture<CoRadioGroup>(html`
      <co-radio-group label="Fruit" name="fruit" disabled>
        <co-radio label="Apple" value="apple"></co-radio>
      </co-radio-group>
    `);
    expect(el.disabled).to.be.true;
    expect(el.hasAttribute('disabled')).to.be.true;
  });

  describe('accessibility', () => {
    it('is accessible in default state', async () => {
      const el = await fixture(html`
        <co-radio-group label="Fruit" name="fruit">
          <co-radio label="Apple" value="apple"></co-radio>
          <co-radio label="Banana" value="banana"></co-radio>
        </co-radio-group>
      `);
      await runA11yAudit(el, { component: 'co-radio-group', state: 'default' });
    });

    it('is accessible when disabled', async () => {
      const el = await fixture(html`
        <co-radio-group label="Fruit" name="fruit" disabled>
          <co-radio label="Apple" value="apple"></co-radio>
        </co-radio-group>
      `);
      await runA11yAudit(el, { component: 'co-radio-group', state: 'disabled' });
    });
  });
});
