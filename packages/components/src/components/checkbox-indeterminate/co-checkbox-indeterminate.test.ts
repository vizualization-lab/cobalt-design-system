import { fixture, html, expect } from '@open-wc/testing';
import './co-checkbox-indeterminate.js';
import '../checkbox/co-checkbox.js';
import type { CoCheckboxIndeterminate } from './co-checkbox-indeterminate.js';

describe('co-checkbox-indeterminate', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoCheckboxIndeterminate>(html`
      <co-checkbox-indeterminate label="Select all">
        <co-checkbox label="Option A" value="a"></co-checkbox>
        <co-checkbox label="Option B" value="b"></co-checkbox>
      </co-checkbox-indeterminate>
    `);
    expect(el).to.exist;
    expect(el.checked).to.be.false;
    expect(el.indeterminate).to.be.false;
  });

  it('renders co-icon indicator', async () => {
    const el = await fixture<CoCheckboxIndeterminate>(html`
      <co-checkbox-indeterminate label="Select all">
        <co-checkbox label="A" value="a"></co-checkbox>
      </co-checkbox-indeterminate>
    `);
    const icon = el.shadowRoot!.querySelector('co-icon');
    expect(icon).to.exist;
    expect(icon!.getAttribute('name')).to.equal('check-box-outline-blank');
  });

  it('renders nested children container', async () => {
    const el = await fixture<CoCheckboxIndeterminate>(html`
      <co-checkbox-indeterminate label="Select all">
        <co-checkbox label="A" value="a"></co-checkbox>
      </co-checkbox-indeterminate>
    `);
    const nested = el.shadowRoot!.querySelector('[part="children"]');
    expect(nested).to.exist;
  });
});
