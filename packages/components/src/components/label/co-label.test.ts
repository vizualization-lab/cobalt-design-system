import { fixture, html, expect, aTimeout } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-label.js';
import '../input/co-input.js';
import type { CoLabel } from './co-label.js';

describe('co-label', () => {
  it('reflects the for attribute to htmlFor and the internal label', async () => {
    const el = await fixture<CoLabel>(html`<co-label for="email">Email address</co-label>`);
    const label = el.querySelector('label');

    expect(el.htmlFor).to.equal('email');
    expect(el.getAttribute('for')).to.equal('email');
    expect(label?.getAttribute('for')).to.equal('email');
  });

  it('moves prefix, default, and suffix content into the native label', async () => {
    const el = await fixture<CoLabel>(html`
      <co-label>
        <span slot="prefix">Prefix</span>
        Label
        <span slot="suffix">Suffix</span>
      </co-label>
    `);

    expect(el.querySelector('.co-label__content--prefix')?.textContent?.trim()).to.equal('Prefix');
    expect(el.querySelector('.co-label__content--default')?.textContent?.trim()).to.equal('Label');
    expect(el.querySelector('.co-label__content--suffix')?.textContent?.trim()).to.equal('Suffix');
  });

  it('renders the required marker', async () => {
    const el = await fixture<CoLabel>(html`<co-label required>Label</co-label>`);
    const marker = el.querySelector('.co-label__required');

    expect(marker).to.exist;
    expect(marker?.textContent).to.equal('*');
  });

  it('renders the default optional suffix and allows custom copy', async () => {
    const defaultEl = await fixture<CoLabel>(html`<co-label optional>Label</co-label>`);
    expect(defaultEl.querySelector('.co-label__optional')?.textContent).to.equal('(optional)');

    const customEl = await fixture<CoLabel>(
      html`<co-label optional optional-label="Not required">Label</co-label>`,
    );
    expect(customEl.querySelector('.co-label__optional')?.textContent).to.equal('Not required');
  });

  it('suppresses optional text when required is present', async () => {
    const el = await fixture<CoLabel>(html`
      <co-label required optional optional-label="Not required">Label</co-label>
    `);

    expect(el.querySelector('.co-label__required')).to.exist;
    expect(el.querySelector('.co-label__optional')).to.not.exist;
  });

  it('keeps a single native label across property updates', async () => {
    const el = await fixture<CoLabel>(html`<co-label>Label</co-label>`);

    el.required = true;
    await el.updateComplete;
    el.required = false;
    el.optional = true;
    await el.updateComplete;

    expect(el.querySelectorAll('label')).to.have.length(1);
  });

  it('focuses a native input when the label is clicked', async () => {
    const container = await fixture<HTMLElement>(html`
      <div>
        <co-label for="native-email">Email address</co-label>
        <input id="native-email" type="email" />
      </div>
    `);
    const label = container.querySelector('co-label label') as HTMLLabelElement;
    const input = container.querySelector('input') as HTMLInputElement;

    label.click();
    await aTimeout(0);

    expect(container.ownerDocument.activeElement).to.equal(input);
  });

  it('works with an externally labelled co-input', async () => {
    const container = await fixture<HTMLElement>(html`
      <div>
        <co-label for="project-name">Project name</co-label>
        <co-input id="project-name"></co-input>
      </div>
    `);
    const label = container.querySelector('co-label label') as HTMLLabelElement;
    const input = container.querySelector('co-input') as HTMLElement & {
      updateComplete: Promise<unknown>;
    };

    await input.updateComplete;
    label.click();
    await aTimeout(0);

    expect(input.matches(':focus-within') || container.ownerDocument.activeElement === input).to.be
      .true;
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
