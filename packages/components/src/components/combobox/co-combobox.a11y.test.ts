/**
 * ARIA APG Combobox compliance tests.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
 */
import { fixture, html, expect } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-combobox.js';
import type { CoCombobox, CoOption } from './co-combobox.js';

/* ── Helpers ────────────────────────────────── */

/** The wrapper div with role="combobox" (ARIA 1.1 pattern) */
function getComboboxNode(el: CoCombobox): HTMLElement {
  return el.querySelector('[slot="input"]') as HTMLElement;
}

/** The actual <input> element inside the combobox wrapper */
function getInput(el: CoCombobox): HTMLInputElement {
  const node = getComboboxNode(el);
  return (
    node instanceof HTMLInputElement ? node : node?.querySelector('input')
  ) as HTMLInputElement;
}

function getListbox(el: CoCombobox): HTMLElement {
  return el.querySelector('[slot="listbox"]') as HTMLElement;
}

/** aria-activedescendant may be on the input or the combobox wrapper */
function getActiveDescendant(el: CoCombobox): string | null {
  return (
    getInput(el).getAttribute('aria-activedescendant') ||
    getComboboxNode(el).getAttribute('aria-activedescendant') ||
    null
  );
}

function getOptions(el: CoCombobox): CoOption[] {
  return Array.from(el.querySelectorAll('co-option'));
}

async function openAndWait(el: CoCombobox) {
  const input = getInput(el);
  input.focus();
  input.value = '';
  input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  el.opened = true;
  await el.updateComplete;
  await el.updateComplete;
}

async function typeAndWait(el: CoCombobox, value: string) {
  const input = getInput(el);
  input.focus();
  input.value = value;
  input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  await el.updateComplete;
  await el.updateComplete;
}

/* ── Fixtures ───────────────────────────────── */

function basicCombobox() {
  return fixture<CoCombobox>(html`
    <co-combobox label="Fruit" show-all-on-empty>
      <co-option value="apple">Apple</co-option>
      <co-option value="banana">Banana</co-option>
      <co-option value="cherry">Cherry</co-option>
    </co-combobox>
  `);
}

function disabledCombobox() {
  return fixture<CoCombobox>(html`
    <co-combobox label="Fruit" disabled>
      <co-option value="apple">Apple</co-option>
    </co-combobox>
  `);
}

function multiCombobox() {
  return fixture<CoCombobox>(html`
    <co-combobox label="Fruits" multiple show-all-on-empty>
      <co-option value="apple">Apple</co-option>
      <co-option value="banana">Banana</co-option>
    </co-combobox>
  `);
}

/* ── 1. ARIA Roles & Properties ─────────────── */

describe('co-combobox ARIA compliance', () => {
  describe('roles and properties', () => {
    it('combobox wrapper has role="combobox"', async () => {
      const el = await basicCombobox();
      const combobox = getComboboxNode(el);
      expect(combobox.getAttribute('role')).to.equal('combobox');
    });

    it('listbox has role="listbox"', async () => {
      const el = await basicCombobox();
      const listbox = getListbox(el);
      expect(listbox.getAttribute('role')).to.equal('listbox');
    });

    it('each option has role="option"', async () => {
      const el = await basicCombobox();
      for (const option of getOptions(el)) {
        expect(option.getAttribute('role')).to.equal('option');
      }
    });

    it('combobox has aria-haspopup="listbox"', async () => {
      const el = await basicCombobox();
      const combobox = getComboboxNode(el);
      expect(combobox.getAttribute('aria-haspopup')).to.equal('listbox');
    });

    it('combobox aria-controls references the listbox', async () => {
      const el = await basicCombobox();
      const combobox = getComboboxNode(el);
      const listbox = getListbox(el);
      const controlsId =
        combobox.getAttribute('aria-controls') || combobox.getAttribute('aria-owns');
      expect(controlsId).to.be.a('string').and.not.empty;
      expect(listbox.id).to.equal(controlsId);
    });

    it('input has aria-autocomplete matching config', async () => {
      const el = await basicCombobox();
      const input = getInput(el);
      expect(input.getAttribute('aria-autocomplete')).to.be.oneOf([
        'none',
        'list',
        'inline',
        'both',
      ]);
    });

    it('combobox is labelled', async () => {
      const el = await basicCombobox();
      const input = getInput(el);
      const combobox = getComboboxNode(el);
      const labelledBy =
        input.getAttribute('aria-labelledby') || combobox.getAttribute('aria-labelledby');
      expect(labelledBy).to.be.a('string').and.not.empty;
    });
  });

  /* ── 2. Dynamic States ────────────────────── */

  describe('dynamic states', () => {
    it('aria-expanded is false when closed', async () => {
      const el = await basicCombobox();
      const combobox = getComboboxNode(el);
      expect(combobox.getAttribute('aria-expanded')).to.equal('false');
    });

    it('aria-expanded is true when open', async () => {
      const el = await basicCombobox();
      await openAndWait(el);
      const combobox = getComboboxNode(el);
      expect(combobox.getAttribute('aria-expanded')).to.equal('true');
    });

    it('aria-activedescendant updates during keyboard navigation', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;

      const activeId = getActiveDescendant(el);
      expect(activeId).to.be.a('string').and.not.empty;

      // The referenced element should exist and be an option
      const activeOption = el.querySelector(`#${activeId}`);
      expect(activeOption).to.exist;
      expect(activeOption!.getAttribute('role')).to.equal('option');
    });

    it('aria-activedescendant is cleared when dropdown closes', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;
      expect(getActiveDescendant(el)).to.not.be.empty;

      await sendKeys({ press: 'Escape' });
      await el.updateComplete;

      const activeId = getActiveDescendant(el);
      expect(!activeId || activeId === '').to.be.true;
    });

    it('selected option has aria-selected="true"', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;

      const options = getOptions(el);
      const selected = options.find((o) => o.getAttribute('aria-selected') === 'true');
      expect(selected).to.exist;
    });

    it('non-selected options have aria-selected="false"', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;

      const options = getOptions(el);
      const notSelected = options.filter((o) => o.getAttribute('aria-selected') === 'false');
      expect(notSelected.length).to.equal(options.length - 1);
    });

    it('disabled combobox has aria-disabled', async () => {
      const el = await disabledCombobox();
      const input = getInput(el);
      expect(input.getAttribute('aria-disabled')).to.equal('true');
    });

    it('multiple-select listbox has aria-multiselectable', async () => {
      const el = await multiCombobox();
      const listbox = getListbox(el);
      expect(listbox.getAttribute('aria-multiselectable')).to.equal('true');
    });

    it('filtered-out options have aria-hidden="true"', async () => {
      const el = await basicCombobox();
      await typeAndWait(el, 'app');
      await el.updateComplete;

      const options = getOptions(el);
      const hidden = options.filter((o) => o.getAttribute('aria-hidden') === 'true');
      // At least some options should be hidden when filtering
      expect(hidden.length).to.be.greaterThan(0);
    });
  });

  /* ── 3. Keyboard Interaction ──────────────── */

  describe('keyboard interaction', () => {
    it('ArrowDown opens popup', async () => {
      const el = await basicCombobox();
      getInput(el).focus();
      await el.updateComplete;

      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;
      await el.updateComplete;

      expect(el.opened).to.be.true;
    });

    it('ArrowDown moves active descendant through options', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;
      const firstId = getActiveDescendant(el);

      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;
      const secondId = getActiveDescendant(el);

      expect(firstId).to.not.equal(secondId);
    });

    it('ArrowUp moves active descendant upward', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      // Navigate down twice
      await sendKeys({ press: 'ArrowDown' });
      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;
      const secondId = getActiveDescendant(el);

      // Navigate up
      await sendKeys({ press: 'ArrowUp' });
      await el.updateComplete;
      const backToFirst = getActiveDescendant(el);

      expect(backToFirst).to.not.equal(secondId);
    });

    it('Enter accepts focused option and closes popup', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;

      await sendKeys({ press: 'Enter' });
      await el.updateComplete;

      expect(el.opened).to.be.false;
      expect(getInput(el).value).to.not.be.empty;
    });

    it('Enter does not reopen popup after selection (showAllOnEmpty)', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;
      await el.updateComplete;

      expect(el.opened).to.be.false;
    });

    it('Escape closes popup and focus stays on input', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'Escape' });
      await el.updateComplete;

      expect(el.opened).to.be.false;
      expect(document.activeElement).to.equal(getInput(el));
    });

    it('typing filters the option list', async () => {
      const el = await basicCombobox();
      await typeAndWait(el, 'ban');

      const options = getOptions(el);
      const visible = options.filter((o) => o.style.display !== 'none');
      expect(visible.length).to.be.lessThan(options.length);
    });
  });

  /* ── 4. Focus Management ──────────────────── */

  describe('focus management', () => {
    it('DOM focus stays on input during keyboard navigation', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;

      // DOM focus should be on the input, not on an option
      expect(document.activeElement).to.equal(getInput(el));
    });

    it('visual focus uses aria-activedescendant, not DOM focus', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;

      const input = getInput(el);
      // DOM focus on input
      expect(document.activeElement).to.equal(input);
      // Visual focus via aria-activedescendant
      expect(getActiveDescendant(el)).to.be.a('string').and.not.empty;
    });

    it('focus stays on input after selecting an option', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;

      expect(document.activeElement).to.equal(getInput(el));
    });
  });

  /* ── 5. Selection & Value ─────────────────── */

  describe('selection and value', () => {
    it('single select updates input value to match selected option', async () => {
      const el = await basicCombobox();
      await openAndWait(el);

      await sendKeys({ press: 'ArrowDown' });
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;

      const input = getInput(el);
      const options = getOptions(el);
      const selected = options.find((o) => o.checked);
      expect(selected).to.exist;
      expect(input.value).to.equal(selected!.choiceValue);
    });
  });

  /* ── 6. Axe-core audit ────────────────────── */

  describe('automated a11y audit', () => {
    it('passes axe-core in default state', async () => {
      const el = await fixture(html`
        <co-combobox label="Fruit">
          <co-option value="apple">Apple</co-option>
          <co-option value="banana">Banana</co-option>
        </co-combobox>
      `);
      await runA11yAudit(el, { component: 'co-combobox', state: 'default' });
    });

    it('passes axe-core when disabled', async () => {
      const el = await fixture(html`
        <co-combobox label="Fruit" disabled>
          <co-option value="apple">Apple</co-option>
        </co-combobox>
      `);
      await runA11yAudit(el, { component: 'co-combobox', state: 'disabled' });
    });
  });
});
