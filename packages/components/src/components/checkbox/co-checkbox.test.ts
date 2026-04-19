import { fixture, html, expect } from '@open-wc/testing';
import './co-checkbox.js';
import type { CoCheckbox } from './co-checkbox.js';

describe('co-checkbox', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoCheckbox>(html`
      <co-checkbox label="Accept terms" value="accept"></co-checkbox>
    `);
    expect(el).to.exist;
    expect(el.value).to.equal('accept');
    expect(el.checked).to.be.false;
    expect(el.disabled).to.be.false;
  });

  it('renders co-icon indicator', async () => {
    const el = await fixture<CoCheckbox>(html`
      <co-checkbox label="Accept" value="accept"></co-checkbox>
    `);
    const icon = el.shadowRoot!.querySelector('co-icon');
    expect(icon).to.exist;
    expect(icon!.getAttribute('name')).to.equal('check-box-outline-blank');
  });

  it('shows checked icon when checked', async () => {
    const el = await fixture<CoCheckbox>(html`
      <co-checkbox label="Accept" value="accept" checked></co-checkbox>
    `);
    const icon = el.shadowRoot!.querySelector('co-icon');
    expect(icon!.getAttribute('name')).to.equal('check-box');
  });

  it('reflects value property', async () => {
    const el = await fixture<CoCheckbox>(html`
      <co-checkbox label="Terms" value="terms"></co-checkbox>
    `);
    expect(el.value).to.equal('terms');
    expect(el.getAttribute('value')).to.equal('terms');
  });
});
