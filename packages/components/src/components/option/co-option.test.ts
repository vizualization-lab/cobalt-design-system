import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import '../listbox/co-listbox.js';
import '../select/co-select.js';
import '../combobox/co-combobox.js';
import './co-option.js';
import type { CoOption } from './co-option.js';

/**
 * Helper: render options inside a listbox so Lion's registration and
 * role plumbing works correctly.
 */
async function fixtureInListbox(
  optionsHtml: ReturnType<typeof html>,
  attrs: { multipleChoice?: boolean } = {},
) {
  const el = await fixture(html`
    <co-listbox label="Test" ?multiple-choice=${attrs.multipleChoice}>${optionsHtml}</co-listbox>
  `);
  await (el as any).updateComplete;
  return el as HTMLElement;
}

async function fixtureInSelect(
  optionsHtml: ReturnType<typeof html>,
  attrs: { size?: string } = {},
) {
  const el = await fixture(html`
    <co-select label="Test" size=${attrs.size ?? 'md'}>${optionsHtml}</co-select>
  `);
  await (el as any).updateComplete;
  // Allow Lion form-group registration to complete before reading
  // option state (which depends on _parentFormGroup).
  await (el as any).updateComplete;
  return el as HTMLElement;
}

async function fixtureInCombobox(
  optionsHtml: ReturnType<typeof html>,
  attrs: { multiple?: boolean } = {},
) {
  const el = await fixture(html`
    <co-combobox label="Test" ?multiple=${attrs.multiple}>${optionsHtml}</co-combobox>
  `);
  await (el as any).updateComplete;
  await (el as any).updateComplete;
  return el as HTMLElement;
}

describe('co-option', () => {
  // ── Value / choiceValue ──────────────────────────

  it('reflects the value property to an attribute', async () => {
    const listbox = await fixtureInListbox(html`
      <co-option value="apple">Apple</co-option>
      <co-option value="banana">Banana</co-option>
    `);

    const option = listbox.querySelector<CoOption>('co-option[value="apple"]')!;
    expect(option.value).to.equal('apple');
    expect(option.getAttribute('value')).to.equal('apple');
  });

  it('syncs value to Lion choiceValue', async () => {
    const listbox = await fixtureInListbox(html` <co-option value="cherry">Cherry</co-option> `);

    const option = listbox.querySelector<CoOption>('co-option')!;
    expect(option.choiceValue).to.equal('cherry');
  });

  // ── Rendering ────────────────────────────────────

  it('renders the default slot content as the label', async () => {
    const listbox = await fixtureInListbox(html` <co-option value="a">Apple</co-option> `);

    const option = listbox.querySelector<CoOption>('co-option')!;
    const label = option.shadowRoot!.querySelector('.option__label');
    expect(label).to.exist;
    expect(option.textContent!.trim()).to.equal('Apple');
  });

  it('renders a prefix indicator icon', async () => {
    const listbox = await fixtureInListbox(html` <co-option value="a">Apple</co-option> `);

    const option = listbox.querySelector<CoOption>('co-option')!;
    const icon = option.shadowRoot!.querySelector('co-icon');
    expect(icon).to.exist;
    expect(icon!.getAttribute('name')).to.be.oneOf([
      'radio-button-unchecked',
      'radio-button-checked',
      'check-box-outline-blank',
      'check-box',
    ]);
  });

  it('renders suffix slot content', async () => {
    const listbox = await fixtureInListbox(html`
      <co-option value="a">
        Apple
        <co-icon slot="suffix" name="star" size="xs"></co-icon>
      </co-option>
    `);

    const option = listbox.querySelector<CoOption>('co-option')!;
    const suffix = option.querySelector('[slot="suffix"]');
    expect(suffix).to.exist;
  });

  // ── Checked state ────────────────────────────────

  it('shows radio-button-unchecked icon when not checked', async () => {
    const listbox = await fixtureInListbox(html`
      <co-option value="a">Apple</co-option>
      <co-option value="b">Banana</co-option>
    `);

    const options = listbox.querySelectorAll<CoOption>('co-option');
    // Second option should not be checked
    const unchecked = options[1];
    const icon = unchecked.shadowRoot!.querySelector('co-icon');
    expect(icon!.getAttribute('name')).to.equal('radio-button-unchecked');
    expect(icon!.hasAttribute('fill')).to.be.false;
  });

  it('shows radio-button-checked icon with fill when checked', async () => {
    const listbox = await fixtureInListbox(html`
      <co-option value="a" checked>Apple</co-option>
      <co-option value="b">Banana</co-option>
    `);

    const option = listbox.querySelector<CoOption>('co-option[checked]')!;
    const icon = option.shadowRoot!.querySelector('co-icon');
    expect(icon!.getAttribute('name')).to.equal('radio-button-checked');
    expect(icon!.hasAttribute('fill')).to.be.true;
  });

  // ── Disabled state ───────────────────────────────

  it('reflects disabled attribute', async () => {
    const listbox = await fixtureInListbox(html` <co-option value="a" disabled>Apple</co-option> `);

    const option = listbox.querySelector<CoOption>('co-option')!;
    expect(option.disabled).to.be.true;
  });

  // ── CSS Parts ────────────────────────────────────

  it('exposes base, prefix, label, and suffix CSS parts', async () => {
    const listbox = await fixtureInListbox(html` <co-option value="a">Apple</co-option> `);

    const option = listbox.querySelector<CoOption>('co-option')!;
    const root = option.shadowRoot!;
    expect(root.querySelector('[part="base"]')).to.exist;
    expect(root.querySelector('[part="prefix"]')).to.exist;
    expect(root.querySelector('[part="label"]')).to.exist;
    expect(root.querySelector('[part="suffix"]')).to.exist;
  });

  // ── Accessibility ────────────────────────────────

  it('has role="option" from Lion', async () => {
    const listbox = await fixtureInListbox(html` <co-option value="a">Apple</co-option> `);

    const option = listbox.querySelector<CoOption>('co-option')!;
    expect(option.getAttribute('role')).to.equal('option');
  });

  it('sets aria-selected when checked', async () => {
    const listbox = await fixtureInListbox(html`
      <co-option value="a" checked>Apple</co-option>
      <co-option value="b">Banana</co-option>
    `);

    const checked = listbox.querySelector<CoOption>('co-option[checked]')!;
    const unchecked = listbox.querySelectorAll<CoOption>('co-option')[1];
    expect(checked.getAttribute('aria-selected')).to.equal('true');
    expect(unchecked.getAttribute('aria-selected')).to.equal('false');
  });

  it('marks prefix as aria-hidden', async () => {
    const listbox = await fixtureInListbox(html` <co-option value="a">Apple</co-option> `);

    const option = listbox.querySelector<CoOption>('co-option')!;
    const prefix = option.shadowRoot!.querySelector('.option__prefix');
    expect(prefix!.getAttribute('aria-hidden')).to.equal('true');
  });

  it('passes accessibility audit', async () => {
    const listbox = await fixtureInListbox(html`
      <co-option value="apple">Apple</co-option>
      <co-option value="banana">Banana</co-option>
      <co-option value="cherry" disabled>Cherry</co-option>
    `);

    await runA11yAudit(listbox, { component: 'co-option', state: 'default' });
  });

  // ── Context-aware indicator ──────────────────────

  describe('context-aware indicator', () => {
    it('does not render the default indicator inside co-select', async () => {
      const select = await fixtureInSelect(html`
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      `);

      const option = select.querySelector<CoOption>('co-option')!;
      const icon = option.shadowRoot!.querySelector('co-icon');
      expect(icon).to.be.null;
      expect(option.hasAttribute('data-no-indicator')).to.be.true;
    });

    it('does not render the default indicator inside single-mode co-combobox', async () => {
      const combobox = await fixtureInCombobox(html` <co-option value="apple">Apple</co-option> `);

      const option = combobox.querySelector<CoOption>('co-option')!;
      const icon = option.shadowRoot!.querySelector('co-icon');
      expect(icon).to.be.null;
      expect(option.hasAttribute('data-no-indicator')).to.be.true;
    });

    it('renders a checkbox indicator inside multi-mode co-combobox', async () => {
      const combobox = await fixtureInCombobox(
        html`
          <co-option value="apple">Apple</co-option>
          <co-option value="banana">Banana</co-option>
        `,
        { multiple: true },
      );

      const option = combobox.querySelector<CoOption>('co-option')!;
      const icon = option.shadowRoot!.querySelector('co-icon');
      expect(icon).to.exist;
      expect(icon!.getAttribute('name')).to.be.oneOf(['check-box', 'check-box-outline-blank']);
      expect(option.hasAttribute('data-no-indicator')).to.be.false;
    });

    it('renders a checkbox indicator inside multi-choice co-listbox', async () => {
      const listbox = await fixtureInListbox(
        html`
          <co-option value="apple">Apple</co-option>
          <co-option value="banana">Banana</co-option>
        `,
        { multipleChoice: true },
      );

      const option = listbox.querySelector<CoOption>('co-option')!;
      const icon = option.shadowRoot!.querySelector('co-icon');
      expect(icon).to.exist;
      expect(icon!.getAttribute('name')).to.be.oneOf(['check-box', 'check-box-outline-blank']);
    });

    it('keeps rendering the radio indicator inside single-mode co-listbox', async () => {
      // Regression: listbox is the "always-visible options" pattern, so the
      // selection indicator stays even in single-select mode.
      const listbox = await fixtureInListbox(html` <co-option value="apple">Apple</co-option> `);

      const option = listbox.querySelector<CoOption>('co-option')!;
      const icon = option.shadowRoot!.querySelector('co-icon');
      expect(icon).to.exist;
      expect(icon!.getAttribute('name')).to.be.oneOf([
        'radio-button-unchecked',
        'radio-button-checked',
      ]);
    });

    it('still renders custom slotted prefix content inside co-select', async () => {
      const select = await fixtureInSelect(html`
        <co-option value="apple">
          <co-icon slot="prefix" name="star" size="xs"></co-icon>
          Apple
        </co-option>
      `);

      const option = select.querySelector<CoOption>('co-option')!;
      const slotted = option.querySelector('[slot="prefix"]');
      expect(slotted).to.exist;
      expect(option.hasAttribute('data-has-prefix-slot')).to.be.true;
    });

    it('resolves _iconSize from a co-select parent', async () => {
      const select = await fixtureInSelect(html` <co-option value="apple">Apple</co-option> `, {
        size: 'lg',
      });

      // Slot a custom prefix icon so we can read the size lookup output.
      const option = select.querySelector<CoOption>('co-option')!;
      // _iconSize is private, but we can verify the mapping indirectly via
      // a scoped helper. Just assert _iconSize maps lg → md per the table.
      const computed = (option as unknown as { _iconSize: string })._iconSize;
      expect(computed).to.equal('md');
    });
  });
});
