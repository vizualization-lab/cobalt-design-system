import { fixture, html, expect, aTimeout } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-label.js';
import '../input/co-input.js';
import type { CoLabel } from './co-label.js';

describe('co-label', () => {
  it('reflects the for attribute to htmlFor and the internal label', async () => {
    const el = await fixture<CoLabel>(html`<co-label for="email">Email address</co-label>`);
    const label = el.shadowRoot!.querySelector('label');

    expect(el.htmlFor).to.equal('email');
    expect(el.getAttribute('for')).to.equal('email');
    expect(label?.getAttribute('for')).to.equal('email');
  });

  it('projects prefix, default, and suffix content without moving light DOM', async () => {
    const el = await fixture<CoLabel>(html`
      <co-label>
        <span slot="prefix">Prefix</span>
        Label
        <span slot="suffix">Suffix</span>
      </co-label>
    `);

    const prefix = el.querySelector('[slot="prefix"]');
    const suffix = el.querySelector('[slot="suffix"]');
    const defaultSlot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
    const prefixSlot = el.shadowRoot!.querySelector('slot[name="prefix"]') as HTMLSlotElement;
    const suffixSlot = el.shadowRoot!.querySelector('slot[name="suffix"]') as HTMLSlotElement;

    expect(prefix?.parentElement).to.equal(el);
    expect(suffix?.parentElement).to.equal(el);
    expect(prefixSlot.assignedElements()[0]).to.equal(prefix);
    expect(defaultSlot.assignedNodes().some((node) => node.textContent?.trim() === 'Label')).to.be
      .true;
    expect(suffixSlot.assignedElements()[0]).to.equal(suffix);
  });

  it('does not mutate host light DOM after connecting', async () => {
    const el = document.createElement('co-label') as CoLabel;
    el.textContent = 'Label';
    const mutations: MutationRecord[] = [];
    const observer = new MutationObserver((records) => mutations.push(...records));
    observer.observe(el, { childList: true });

    const parent = document.createElement('div');
    document.body.append(parent);
    parent.append(el);
    await el.updateComplete;
    await aTimeout(0);
    observer.disconnect();
    parent.remove();

    expect(mutations).to.have.length(0);
    expect(el.textContent?.trim()).to.equal('Label');
  });

  it('renders the required marker', async () => {
    const el = await fixture<CoLabel>(html`<co-label required>Label</co-label>`);
    const marker = el.shadowRoot!.querySelector('.co-label__required');

    expect(marker).to.exist;
    expect(marker?.textContent).to.equal('*');
  });

  it('renders the default optional suffix and allows custom copy', async () => {
    const defaultEl = await fixture<CoLabel>(html`<co-label optional>Label</co-label>`);
    expect(defaultEl.shadowRoot!.querySelector('.co-label__optional')?.textContent).to.equal(
      '(optional)',
    );

    const customEl = await fixture<CoLabel>(
      html`<co-label optional optional-label="Not required">Label</co-label>`,
    );
    expect(customEl.shadowRoot!.querySelector('.co-label__optional')?.textContent).to.equal(
      'Not required',
    );
  });

  it('suppresses optional text when required is present', async () => {
    const el = await fixture<CoLabel>(html`
      <co-label required optional optional-label="Not required">Label</co-label>
    `);

    expect(el.shadowRoot!.querySelector('.co-label__required')).to.exist;
    expect(el.shadowRoot!.querySelector('.co-label__optional')).to.not.exist;
  });

  it('keeps a single native label across property updates', async () => {
    const el = await fixture<CoLabel>(html`<co-label>Label</co-label>`);

    el.required = true;
    await el.updateComplete;
    el.required = false;
    el.optional = true;
    await el.updateComplete;

    expect(el.shadowRoot!.querySelectorAll('label')).to.have.length(1);
  });

  it('focuses a native input when the label is clicked', async () => {
    const container = await fixture<HTMLElement>(html`
      <div>
        <co-label for="native-email">Email address</co-label>
        <input id="native-email" type="email" />
      </div>
    `);
    const label = container.querySelector('co-label') as CoLabel;
    const input = container.querySelector('input') as HTMLInputElement;

    label.click();
    await aTimeout(0);

    expect(container.ownerDocument.activeElement).to.equal(input);
    expect(input.getAttribute('aria-labelledby')).to.equal(label.id);
  });

  it('works with an externally labelled co-input', async () => {
    const container = await fixture<HTMLElement>(html`
      <div>
        <co-label for="project-name">Project name</co-label>
        <co-input id="project-name"></co-input>
      </div>
    `);
    const label = container.querySelector('co-label') as CoLabel;
    const input = container.querySelector('co-input') as HTMLElement & {
      updateComplete: Promise<unknown>;
    };

    await input.updateComplete;
    label.click();
    await aTimeout(0);

    expect(input.matches(':focus-within') || container.ownerDocument.activeElement === input).to.be
      .true;
    expect(input.getAttribute('aria-labelledby')).to.equal(label.id);
  });

  describe('accessibility', () => {
    it('is accessible when paired with a native input', async () => {
      const container = await fixture<HTMLElement>(html`
        <div>
          <co-label for="audit-email">Email address</co-label>
          <input id="audit-email" type="email" />
        </div>
      `);

      await runA11yAudit(container, { component: 'co-label', state: 'native-input' });
    });
  });
});
