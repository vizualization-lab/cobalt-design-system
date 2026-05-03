import { fixture, html, expect } from '@open-wc/testing';
import './co-select.js';
import type { CoSelect } from './co-select.js';
import type { CoOption } from '../option/co-option.js';

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

  // ── Focus events ───────────────────────────────────

  it('dispatches co-focus when the invoker gains focus', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit">
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);

    const invoker = el.querySelector('[slot="invoker"]') as HTMLElement;
    expect(invoker, 'invoker should exist').to.exist;

    let fired = false;
    el.addEventListener('co-focus', () => {
      fired = true;
    });

    invoker.dispatchEvent(new FocusEvent('focus'));
    expect(fired).to.be.true;
  });

  it('dispatches co-blur when the invoker loses focus', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit">
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);

    const invoker = el.querySelector('[slot="invoker"]') as HTMLElement;
    let fired = false;
    el.addEventListener('co-blur', () => {
      fired = true;
    });

    invoker.dispatchEvent(new FocusEvent('blur'));
    expect(fired).to.be.true;
  });

  // ── Slots ──────────────────────────────────────────

  it('renders label slot content', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select>
        <span slot="label">Custom label</span>
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);

    const slotted = el.querySelector('[slot="label"]');
    expect(slotted).to.exist;
    expect(slotted!.textContent).to.equal('Custom label');
  });

  it('renders help-text slot content', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit">
        <span slot="help-text">Pick one</span>
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);

    const slotted = el.querySelector('[slot="help-text"]');
    expect(slotted).to.exist;
    expect(slotted!.textContent).to.equal('Pick one');
  });

  it('renders feedback slot content', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit">
        <span slot="feedback">Required</span>
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);

    const slotted = el.querySelector('[slot="feedback"]');
    expect(slotted).to.exist;
    expect(slotted!.textContent).to.equal('Required');
  });

  // ── State / behavior ───────────────────────────────

  it('respects has-no-default-selected (no checked option after init)', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit" has-no-default-selected>
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
    `);

    const checked = el.querySelector('co-option[checked]');
    expect(checked).to.be.null;
  });

  it('reflects readonly attribute', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit" readonly>
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);

    expect(el.hasAttribute('readonly')).to.be.true;
    expect(el.readOnly).to.be.true;
  });

  it('syncs the Required validator when required toggles', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit">
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);
    expect(el.required).to.be.false;

    el.required = true;
    await el.updateComplete;
    const validatorsAfterEnable = el.validators as Array<{ constructor: { name: string } }>;
    const hasRequired = validatorsAfterEnable.some((v) => v.constructor.name === 'Required');
    expect(hasRequired).to.be.true;

    el.required = false;
    await el.updateComplete;
    const validatorsAfterDisable = el.validators as Array<{ constructor: { name: string } }>;
    const stillHasRequired = validatorsAfterDisable.some((v) => v.constructor.name === 'Required');
    expect(stillHasRequired).to.be.false;
  });

  // ── Chevron ────────────────────────────────────────

  it('scales the chevron icon size with the size prop', async () => {
    const sizes: Array<['sm' | 'md' | 'lg' | 'xl', string]> = [
      ['sm', 'xs'],
      ['md', 'sm'],
      ['lg', 'md'],
      ['xl', 'lg'],
    ];

    for (const [hostSize, expectedIconSize] of sizes) {
      const el = await fixture<CoSelect>(html`
        <co-select label="Fruit" size=${hostSize}>
          <co-option value="apple">Apple</co-option>
        </co-select>
      `);
      const chevron = el.querySelector('.select__chevron');
      expect(chevron).to.exist;
      expect(chevron!.getAttribute('size'), `host size=${hostSize}`).to.equal(expectedIconSize);
    }
  });

  it('rotates the chevron when opened', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit" has-no-default-selected>
        <co-option value="apple">Apple</co-option>
      </co-select>
    `);
    const chevron = el.querySelector('.select__chevron') as HTMLElement;

    expect(chevron.style.transform).to.not.include('180deg');

    el.opened = true;
    await el.updateComplete;
    await el.updateComplete;
    expect(chevron.style.transform).to.include('180deg');

    el.opened = false;
    await el.updateComplete;
    await el.updateComplete;
    expect(chevron.style.transform).to.not.include('180deg');
  });

  // ── Custom prefix on options + invoker mirroring ──

  it('renders a custom co-icon prefix slotted onto an option', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit">
        <co-option value="apple">
          <co-icon slot="prefix" name="star" size="xs"></co-icon>
          Apple
        </co-option>
      </co-select>
    `);

    const option = el.querySelector<CoOption>('co-option[value="apple"]')!;
    const slotted = option.querySelector('[slot="prefix"]');
    expect(slotted).to.exist;
    expect(slotted!.tagName.toLowerCase()).to.equal('co-icon');
    // The wrapper attr drives our :empty CSS and signals "render the slot"
    expect(option.hasAttribute('data-has-prefix-slot')).to.be.true;
  });

  it('mirrors the option prefix into the invoker when the option is selected', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit">
        <co-option value="apple" checked>
          <co-icon slot="prefix" name="star" size="xs"></co-icon>
          Apple
        </co-option>
      </co-select>
    `);
    await el.updateComplete;
    await el.updateComplete;

    const invoker = el.querySelector('[slot="invoker"]') as HTMLElement;
    // Lion's _contentTemplate clones the selected option's childNodes into
    // the invoker's content wrapper — that includes our slotted co-icon.
    const invokerIcon = invoker.shadowRoot?.querySelector('co-icon[name="star"]');
    expect(invokerIcon, 'invoker should mirror the selected option prefix').to.exist;
  });

  // ── Option indicator regression (cross-component) ──

  it('options inside co-select do not render the default radio indicator', async () => {
    const el = await fixture<CoSelect>(html`
      <co-select label="Fruit">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
    `);
    const options = el.querySelectorAll<CoOption>('co-option');
    for (const option of options) {
      const icon = option.shadowRoot!.querySelector('co-icon');
      expect(icon, `option "${option.getAttribute('value')}" should have no indicator icon`).to.be
        .null;
    }
  });

  // ── Accessibility — see co-select.a11y.test.ts for full ARIA coverage ──
});
