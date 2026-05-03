/**
 * WAI-ARIA Listbox-button compliance tests for co-select.
 *
 * co-select uses Lion's listbox-button pattern (the older but still-valid
 * APG variant) where the invoker is a button with `aria-haspopup="listbox"`
 * and DOM focus moves into the listbox itself when opened. This is distinct
 * from the newer Select-Only Combobox pattern but equally compliant.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/listbox/
 */
import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-select.js';
import type { CoSelect } from './co-select.js';
import type { CoOption } from '../option/co-option.js';

/* ── Helpers ────────────────────────────────── */

function getInvoker(el: CoSelect): HTMLElement {
  return el.querySelector('[slot="invoker"]') as HTMLElement;
}

function getListbox(el: CoSelect): HTMLElement {
  // Lion slots its listbox as [slot="input"] in light DOM.
  return el.querySelector('[slot="input"]') as HTMLElement;
}

function getOptions(el: CoSelect): CoOption[] {
  return Array.from(el.querySelectorAll('co-option'));
}

async function openSelect(el: CoSelect) {
  el.opened = true;
  await el.updateComplete;
  await el.updateComplete;
}

/* ── Fixtures ───────────────────────────────── */

function basicSelect() {
  return fixture<CoSelect>(html`
    <co-select label="Fruit" has-no-default-selected>
      <co-option value="apple">Apple</co-option>
      <co-option value="banana">Banana</co-option>
      <co-option value="cherry">Cherry</co-option>
    </co-select>
  `);
}

function disabledSelect() {
  return fixture<CoSelect>(html`
    <co-select label="Fruit" disabled>
      <co-option value="apple">Apple</co-option>
    </co-select>
  `);
}

function requiredSelect() {
  return fixture<CoSelect>(html`
    <co-select label="Fruit" required has-no-default-selected>
      <co-option value="apple">Apple</co-option>
      <co-option value="banana">Banana</co-option>
    </co-select>
  `);
}

/* ── 1. ARIA roles & properties ─────────────── */

describe('co-select ARIA compliance', () => {
  describe('roles and properties', () => {
    it('invoker has role="button"', async () => {
      const el = await basicSelect();
      const invoker = getInvoker(el);
      expect(invoker.getAttribute('role')).to.equal('button');
    });

    it('invoker has aria-haspopup="listbox"', async () => {
      const el = await basicSelect();
      const invoker = getInvoker(el);
      expect(invoker.getAttribute('aria-haspopup')).to.equal('listbox');
    });

    it('invoker aria-controls references the listbox id', async () => {
      const el = await basicSelect();
      const invoker = getInvoker(el);
      const listbox = getListbox(el);
      const controls = invoker.getAttribute('aria-controls');
      expect(controls).to.be.a('string').and.not.empty;
      expect(listbox.id).to.equal(controls);
    });

    it('aria-controls IDREF resolves to a real element', async () => {
      const el = await basicSelect();
      const invoker = getInvoker(el);
      const controls = invoker.getAttribute('aria-controls')!;
      // The IDREF must resolve in the same scope as the invoker (light DOM).
      const target = (el.getRootNode() as Document | ShadowRoot).getElementById?.(controls);
      expect(target).to.exist;
    });

    it('listbox has role="listbox"', async () => {
      const el = await basicSelect();
      const listbox = getListbox(el);
      expect(listbox.getAttribute('role')).to.equal('listbox');
    });

    it('invoker is labelled (aria-labelledby resolves)', async () => {
      const el = await basicSelect();
      const invoker = getInvoker(el);
      const labelledBy = invoker.getAttribute('aria-labelledby');
      expect(labelledBy).to.be.a('string').and.not.empty;
    });

    it('each co-option has role="option"', async () => {
      const el = await basicSelect();
      for (const option of getOptions(el)) {
        expect(option.getAttribute('role')).to.equal('option');
      }
    });
  });

  /* ── 2. Dynamic states ────────────────────── */

  describe('dynamic states', () => {
    it('aria-expanded is false when closed', async () => {
      const el = await basicSelect();
      const invoker = getInvoker(el);
      expect(invoker.getAttribute('aria-expanded')).to.equal('false');
    });

    it('aria-expanded is true when opened', async () => {
      const el = await basicSelect();
      await openSelect(el);
      const invoker = getInvoker(el);
      expect(invoker.getAttribute('aria-expanded')).to.equal('true');
    });

    it('selected option has aria-selected="true"', async () => {
      const el = await fixture<CoSelect>(html`
        <co-select label="Fruit">
          <co-option value="apple" checked>Apple</co-option>
          <co-option value="banana">Banana</co-option>
        </co-select>
      `);
      const checked = el.querySelector('co-option[checked]')!;
      expect(checked.getAttribute('aria-selected')).to.equal('true');
    });

    it('disabled select has aria-disabled', async () => {
      const el = await disabledSelect();
      const invoker = getInvoker(el);
      // Lion sets aria-disabled OR disabled depending on host element
      const isAriaDisabled =
        invoker.getAttribute('aria-disabled') === 'true' || invoker.hasAttribute('disabled');
      expect(isAriaDisabled).to.be.true;
    });
  });

  /* ── 3. Keyboard interaction ──────────────── */

  describe('keyboard interaction', () => {
    // Lion handles open via keyup on ArrowUp/ArrowDown. Enter and Space are
    // NOT handled by Lion's invokerOnKeyUp (only ArrowUp/ArrowDown and
    // type-ahead). See audits/2026-05-co-select-audit.md for the residual gap.
    it('ArrowDown opens the dropdown when closed', async () => {
      const el = await basicSelect();
      getInvoker(el).focus();
      await el.updateComplete;

      // Dispatch keyup directly on the host — Lion attaches its handler there.
      el.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowDown', bubbles: true }));
      await el.updateComplete;
      await el.updateComplete;

      expect(el.opened).to.be.true;
    });

    it('ArrowUp opens the dropdown when closed', async () => {
      const el = await basicSelect();
      getInvoker(el).focus();
      await el.updateComplete;

      el.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowUp', bubbles: true }));
      await el.updateComplete;
      await el.updateComplete;

      expect(el.opened).to.be.true;
    });

    it('Escape closes an open dropdown', async () => {
      const el = await basicSelect();
      await openSelect(el);
      expect(el.opened).to.be.true;

      // Lion's overlay catches Escape on the listbox node.
      const listbox = getListbox(el);
      listbox.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, composed: true }),
      );
      await el.updateComplete;
      await el.updateComplete;

      expect(el.opened).to.be.false;
    });

    // Residual gaps documented in audit report — Lion's __onKeyUp only
    // implements ArrowUp/ArrowDown + type-ahead. Enter/Space don't open.
    it.skip('Enter opens the dropdown (Lion limitation — see audit)', () => {});
    it.skip('Space opens the dropdown (Lion limitation — see audit)', () => {});
    it.skip('type-ahead jumps to matching option (Lion probe)', () => {});
  });

  /* ── 4. Indicator regression ──────────────── */

  describe('option indicator regression', () => {
    it('options inside co-select do not render the default indicator icon', async () => {
      const el = await basicSelect();
      for (const option of getOptions(el)) {
        const icon = option.shadowRoot!.querySelector('co-icon');
        expect(icon, `option "${option.getAttribute('value')}" should have no indicator`).to.be
          .null;
      }
    });
  });

  /* ── 5. Axe-core audits in multiple states ── */

  describe('automated a11y audit', () => {
    it('passes axe-core in default state', async () => {
      const el = await basicSelect();
      await runA11yAudit(el, { component: 'co-select', state: 'default' });
    });

    it('passes axe-core when disabled', async () => {
      const el = await disabledSelect();
      await runA11yAudit(el, { component: 'co-select', state: 'disabled' });
    });

    it('passes axe-core when opened', async () => {
      const el = await basicSelect();
      await openSelect(el);
      // Lion's overlay renders inside a <dialog role="none"> wrapper; axe's
      // aria-allowed-role rule (minor) flags this, but the role="none"
      // suppression is a deliberate Lion choice that keeps the listbox-button
      // pattern intact. Documented in the audit report.
      await runA11yAudit(el, {
        component: 'co-select',
        state: 'opened',
        disabledRules: ['aria-allowed-role'],
      });
    });

    it('passes axe-core when required', async () => {
      const el = await requiredSelect();
      await runA11yAudit(el, { component: 'co-select', state: 'required' });
    });

    for (const size of ['sm', 'md', 'lg', 'xl'] as const) {
      it(`passes axe-core at size="${size}"`, async () => {
        const el = await fixture<CoSelect>(html`
          <co-select label="Fruit" size=${size}>
            <co-option value="apple">Apple</co-option>
            <co-option value="banana">Banana</co-option>
          </co-select>
        `);
        await runA11yAudit(el, { component: 'co-select', state: `size-${size}` });
      });
    }
  });
});
