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

  it('uses the tokenized Figma minimum height', async () => {
    const el = await fixture<CoBanner>(html`
      <co-banner><span slot="title">Test</span></co-banner>
    `);

    const banner = el.shadowRoot!.querySelector('.banner') as HTMLElement;
    const styles = getComputedStyle(banner);
    expect(styles.minBlockSize).to.equal('30px');
    expect(banner.offsetHeight).to.be.at.least(30);
  });

  it('uses tokenized 4px-grid banner spacing', async () => {
    const el = await fixture<CoBanner>(html`
      <co-banner><span slot="title">Test</span></co-banner>
    `);

    const banner = el.shadowRoot!.querySelector('.banner') as HTMLElement;
    const styles = getComputedStyle(banner);
    expect(styles.paddingBlockStart).to.equal('8px');
    expect(styles.paddingBlockEnd).to.equal('8px');
    expect(styles.paddingInlineStart).to.equal('8px');
    expect(styles.paddingInlineEnd).to.equal('8px');
  });

  it('uses tokenized banner typography', async () => {
    const el = await fixture<CoBanner>(html`
      <co-banner>
        <span slot="title">Alpha</span>
        Supporting content
      </co-banner>
    `);

    const title = el.shadowRoot!.querySelector('.banner__title') as HTMLElement;
    const content = el.shadowRoot!.querySelector('.banner__content') as HTMLElement;
    const titleStyles = getComputedStyle(title);
    const contentStyles = getComputedStyle(content);

    expect(titleStyles.fontSize).to.equal('12px');
    expect(titleStyles.fontWeight).to.equal('400');
    expect(titleStyles.lineHeight).to.equal('14px');
    expect(contentStyles.fontSize).to.equal('12px');
    expect(contentStyles.fontWeight).to.equal('400');
    expect(contentStyles.lineHeight).to.equal('14px');
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
