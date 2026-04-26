import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-card.js';
import type { CoCard } from './co-card.js';

describe('co-card', () => {
  it('renders default slot content', async () => {
    const el = await fixture<CoCard>(html` <co-card>Hello world</co-card> `);

    expect(el.textContent?.trim()).to.equal('Hello world');
  });

  it('renders header slot content', async () => {
    const el = await fixture<CoCard>(html`
      <co-card>
        <h2 slot="header">Title</h2>
        Body content
      </co-card>
    `);

    const header = el.querySelector('[slot="header"]');
    expect(header).to.exist;
    expect(header!.textContent).to.equal('Title');
  });

  it('renders footer slot content', async () => {
    const el = await fixture<CoCard>(html`
      <co-card>
        Body
        <div slot="footer">Footer actions</div>
      </co-card>
    `);

    const footer = el.querySelector('[slot="footer"]');
    expect(footer).to.exist;
    expect(footer!.textContent).to.equal('Footer actions');
  });

  it('sets role="region" and aria-label when label is provided', async () => {
    const el = await fixture<CoCard>(html` <co-card label="Dashboard summary">Content</co-card> `);

    const card = el.shadowRoot!.querySelector('.card');
    expect(card!.getAttribute('role')).to.equal('region');
    expect(card!.getAttribute('aria-label')).to.equal('Dashboard summary');
  });

  it('does not set role when label is empty', async () => {
    const el = await fixture<CoCard>(html` <co-card>Content</co-card> `);

    const card = el.shadowRoot!.querySelector('.card');
    expect(card!.hasAttribute('role')).to.be.false;
  });

  it('has correct flex layout', async () => {
    const el = await fixture<CoCard>(html` <co-card>Content</co-card> `);

    const card = el.shadowRoot!.querySelector('.card') as HTMLElement;
    const styles = getComputedStyle(card);
    expect(styles.flexDirection).to.equal('column');
    expect(styles.alignItems).to.equal('center');
  });

  it('passes accessibility audit', async () => {
    const el = await fixture<CoCard>(html`
      <co-card label="Info card">
        <h2 slot="header">Card Title</h2>
        <p>Card body content</p>
        <button slot="footer">Action</button>
      </co-card>
    `);

    await runA11yAudit(el, { component: 'co-card', state: 'default' });
  });
});
