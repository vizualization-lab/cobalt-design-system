import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-listbox.js';
import type { CoListbox, CoOption } from './co-listbox.js';

function getListboxNode(el: CoListbox) {
  return el.querySelector('[slot="input"]') as HTMLElement;
}

function getOptions(el: CoListbox) {
  return Array.from(el.querySelectorAll('co-option')) as CoOption[];
}

describe('co-listbox', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox label="Fruit">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-listbox>
    `);

    expect(el).to.exist;
    expect(el.orientation).to.equal('vertical');
    expect(el.multipleChoice).to.be.false;
    expect(el.selectionFollowsFocus).to.be.false;
    expect(el.rotateKeyboardNavigation).to.be.false;
    expect(el.hasNoDefaultSelected).to.be.false;
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
  });

  it('moves default option children into the internal listbox node', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox label="Fruit">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-listbox>
    `);

    const listboxNode = getListboxNode(el);
    expect(listboxNode.getAttribute('role')).to.equal('listbox');
    expect(listboxNode.querySelectorAll('co-option')).to.have.length(2);
  });

  it('reflects behavior attributes', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox
        label="Fruit"
        orientation="horizontal"
        multiple-choice
        selection-follows-focus
        rotate-keyboard-navigation
        has-no-default-selected
      >
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-listbox>
    `);

    expect(el.orientation).to.equal('horizontal');
    expect(el.multipleChoice).to.be.true;
    expect(el.selectionFollowsFocus).to.be.true;
    expect(el.rotateKeyboardNavigation).to.be.true;
    expect(el.hasNoDefaultSelected).to.be.true;
    expect(getListboxNode(el).getAttribute('aria-orientation')).to.equal('horizontal');
    expect(getListboxNode(el).getAttribute('aria-multiselectable')).to.equal('true');
  });

  it('maps co-option value to choiceValue', async () => {
    const option = await fixture<CoOption>(html`<co-option value="apple">Apple</co-option>`);
    expect(option.value).to.equal('apple');
    expect(option.choiceValue).to.equal('apple');
  });

  it('supports non-string choiceValue on co-option', async () => {
    const choiceValue = { id: 'apple' };
    const option = await fixture<CoOption>(
      html`<co-option .choiceValue=${choiceValue}>Apple</co-option>`,
    );

    expect(option.choiceValue).to.deep.equal(choiceValue);
    expect(option.value).to.equal('');
  });

  it('selects a single option and unchecks siblings', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox label="Fruit">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-listbox>
    `);

    const [apple, banana] = getOptions(el);
    apple.click();
    await el.updateComplete;
    banana.click();
    await el.updateComplete;

    expect(el.modelValue).to.equal('banana');
    expect(apple.checked).to.be.false;
    expect(banana.checked).to.be.true;
  });

  it('supports multiple selection', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox label="Fruit" multiple-choice>
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
        <co-option value="carrot">Carrot</co-option>
      </co-listbox>
    `);

    const [apple, banana] = getOptions(el);
    apple.click();
    banana.click();
    await el.updateComplete;

    expect(el.modelValue).to.deep.equal(['apple', 'banana']);
    expect(el.checkedIndex).to.deep.equal([0, 1]);
  });

  it('does not select disabled options', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox label="Fruit">
        <co-option value="apple" disabled>Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-listbox>
    `);

    const [apple] = getOptions(el);
    apple.click();
    await el.updateComplete;

    expect(el.modelValue).to.equal('');
    expect(apple.checked).to.be.false;
  });

  it('disables options when the listbox is disabled', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox label="Fruit" disabled>
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-listbox>
    `);

    expect(getOptions(el).every((option) => option.disabled)).to.be.true;
  });

  it('adds aria-required when required', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox label="Fruit" required>
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-listbox>
    `);

    await el.updateComplete;
    expect(getListboxNode(el).getAttribute('aria-required')).to.equal('true');
  });

  it('supports keyboard navigation and selection', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox label="Fruit">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-listbox>
    `);

    const listboxNode = getListboxNode(el);
    listboxNode.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    listboxNode.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await el.updateComplete;

    expect(el.activeIndex).to.equal(0);
    expect(el.modelValue).to.equal('apple');
  });

  it('dispatches co-change with selected value detail', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox label="Fruit">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-listbox>
    `);
    const [apple] = getOptions(el);

    const eventPromise = oneEvent(el, 'co-change') as Promise<CustomEvent>;
    apple.click();
    const event = await eventPromise;

    expect(event.detail.value).to.equal('apple');
    expect(event.detail.modelValue).to.equal('apple');
    expect(event.detail.checkedIndex).to.equal(0);
  });

  it('dispatches co-change with multiple selected values', async () => {
    const el = await fixture<CoListbox>(html`
      <co-listbox label="Fruit" multiple-choice>
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-listbox>
    `);
    const [apple] = getOptions(el);

    const eventPromise = oneEvent(el, 'co-change') as Promise<CustomEvent>;
    apple.click();
    const event = await eventPromise;

    expect(event.detail.value).to.deep.equal(['apple']);
    expect(event.detail.modelValue).to.deep.equal(['apple']);
    expect(event.detail.checkedIndex).to.deep.equal([0]);
  });

  describe('accessibility', () => {
    it('is accessible in default state', async () => {
      const el = await fixture(html`
        <co-listbox label="Fruit">
          <co-option value="apple">Apple</co-option>
          <co-option value="banana">Banana</co-option>
        </co-listbox>
      `);
      await runA11yAudit(el, { component: 'co-listbox', state: 'default' });
    });

    it('is accessible in multiple selection state', async () => {
      const el = await fixture(html`
        <co-listbox label="Fruit" multiple-choice>
          <co-option value="apple" checked>Apple</co-option>
          <co-option value="banana">Banana</co-option>
        </co-listbox>
      `);
      await runA11yAudit(el, { component: 'co-listbox', state: 'multiple' });
    });

    it('is accessible when disabled', async () => {
      const el = await fixture(html`
        <co-listbox label="Fruit" disabled>
          <co-option value="apple">Apple</co-option>
          <co-option value="banana">Banana</co-option>
        </co-listbox>
      `);
      await runA11yAudit(el, { component: 'co-listbox', state: 'disabled' });
    });

    it('is accessible when required with feedback', async () => {
      const el = await fixture(html`
        <co-listbox label="Fruit" required shows-feedback-for="error">
          <co-option value="apple">Apple</co-option>
          <co-option value="banana">Banana</co-option>
          <span slot="feedback">Select a fruit.</span>
        </co-listbox>
      `);
      await runA11yAudit(el, { component: 'co-listbox', state: 'required-feedback' });
    });
  });
});
