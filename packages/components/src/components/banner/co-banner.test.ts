import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-banner.js';
import type { CoBanner } from './co-banner.js';

describe('co-banner', () => {
  it('renders with role="banner" and default aria-label', async () => {
    const el = await fixture<CoBanner>(html`
      <co-banner><span slot="title">Notice</span></co-banner>
    `);

    const banner = el.shadowRoot!.querySelector('[role="banner"]');
    expect(banner).to.exist;
    expect(banner!.getAttribute('aria-label')).to.equal('Banner');
  });

  it('uses custom label for aria-label', async () => {
    const el = await fixture<CoBanner>(html`
      <co-banner label="System Alert"><span slot="title">Alert</span></co-banner>
    `);

    const banner = el.shadowRoot!.querySelector('[role="banner"]');
    expect(banner!.getAttribute('aria-label')).to.equal('System Alert');
  });

  it('renders title slot content', async () => {
    const el = await fixture<CoBanner>(html`
      <co-banner><span slot="title">Maintenance</span></co-banner>
    `);

    const title = el.querySelector('[slot="title"]');
    expect(title).to.exist;
    expect(title!.textContent).to.equal('Maintenance');
  });

  it('renders default slot content', async () => {
    const el = await fixture<CoBanner>(html`
      <co-banner>
        <span slot="title">Notice</span>
        <p>Additional details here</p>
      </co-banner>
    `);

    const content = el.querySelector('p');
    expect(content).to.exist;
    expect(content!.textContent).to.equal('Additional details here');
  });

  it('has a minimum height of 44px', async () => {
    const el = await fixture<CoBanner>(html`
      <co-banner><span slot="title">Test</span></co-banner>
    `);

    const banner = el.shadowRoot!.querySelector('.banner') as HTMLElement;
    expect(banner.offsetHeight).to.be.at.least(44);
  });

  it('centers content', async () => {
    const el = await fixture<CoBanner>(html`
      <co-banner><span slot="title">Centered</span></co-banner>
    `);

    const banner = el.shadowRoot!.querySelector('.banner') as HTMLElement;
    const styles = getComputedStyle(banner);
    expect(styles.justifyContent).to.equal('center');
    expect(styles.alignItems).to.equal('center');
  });

  it('passes accessibility audit', async () => {
    const el = await fixture<CoBanner>(html`
      <co-banner label="Announcement">
        <span slot="title">Scheduled Maintenance</span>
        <p>Systems will be unavailable Saturday 2-4 AM EST.</p>
      </co-banner>
    `);

    await runA11yAudit(el, { component: 'co-banner', state: 'default' });
  });
});
