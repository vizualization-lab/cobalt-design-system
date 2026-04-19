import { fixture, html, expect } from '@open-wc/testing';
import './co-radio.js';
import type { CoRadio } from './co-radio.js';

describe('co-radio', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoRadio>(html` <co-radio label="Apple" value="apple"></co-radio> `);
    expect(el).to.exist;
    expect(el.value).to.equal('apple');
    expect(el.checked).to.be.false;
    expect(el.disabled).to.be.false;
  });

  it('renders co-icon indicator', async () => {
    const el = await fixture<CoRadio>(html` <co-radio label="Apple" value="apple"></co-radio> `);
    const icon = el.shadowRoot!.querySelector('co-icon');
    expect(icon).to.exist;
    expect(icon!.getAttribute('name')).to.equal('radio-button-unchecked');
  });

  it('shows checked icon when checked', async () => {
    const el = await fixture<CoRadio>(html`
      <co-radio label="Apple" value="apple" checked></co-radio>
    `);
    const icon = el.shadowRoot!.querySelector('co-icon');
    expect(icon!.getAttribute('name')).to.equal('radio-button-checked');
  });

  it('reflects value property', async () => {
    const el = await fixture<CoRadio>(html` <co-radio label="Banana" value="banana"></co-radio> `);
    expect(el.value).to.equal('banana');
    expect(el.getAttribute('value')).to.equal('banana');
  });
});
