import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-select.js';
import type { CoSelect } from './co-select.js';

describe('co-select', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
    `);

    expect(el).to.exist;
    expect(el.size).to.equal('md');
    expect(el.danger).to.be.false;
    expect(el.required).to.be.false;
    expect(el.disabled).to.be.false;
  });

  it('reflects size attribute', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit" size="lg">
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);

    expect(el.size).to.equal('lg');
    expect(el.getAttribute('size')).to.equal('lg');
  });

  it('reflects danger attribute', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit" danger>
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);

    expect(el.danger).to.be.true;
    expect(el.hasAttribute('danger')).to.be.true;
  });

  it('applies disabled state', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit" disabled>
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);

    expect(el.disabled).to.be.true;
    expect(el.hasAttribute('disabled')).to.be.true;
  });

  it('renders chevron icon in invoker', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit">
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);

    const invoker = el.querySelector('[slot="invoker"]');
    expect(invoker).to.exist;
    const chevron = invoker!.querySelector('co-icon');
    expect(chevron).to.exist;
    expect(chevron!.getAttribute('name')).to.equal('keyboard-arrow-down');
  });

  it('dispatches co-change event on selection', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit" has-no-default-selected>
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
    `);

    let changeFired = false;
    el.addEventListener('co-change', () => {
      changeFired = true;
    });

    const options = el.querySelectorAll('co-option');
    options[0].checked = true;
    el.dispatchEvent(new Event('model-value-changed', { bubbles: true }));
    expect(changeFired).to.be.true;
  });

  describe('accessibility', () => {
    it('is accessible in default state', async () => {
      const el = await fixture(html`
        <co-select label="Fruit">
          <co-option value="apple">Apple</co-option>
          <co-option value="banana">Banana</co-option>
        </co-select>
      `);
      await runA11yAudit(el, { component: 'co-select', state: 'default' });
    });

    it('is accessible when disabled', async () => {
      const el = await fixture(html`
        <co-select label="Fruit" disabled>
          <co-option value="apple">Apple</co-option>
        </co-select>
      `);
      await runA11yAudit(el, { component: 'co-select', state: 'disabled' });
    });
  });
});
