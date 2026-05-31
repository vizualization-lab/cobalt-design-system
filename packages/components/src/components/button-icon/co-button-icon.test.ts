import { fixture, html, expect, aTimeout, oneEvent } from '@open-wc/testing';
import '@cobalt/icons/star';
import '@cobalt/icons/delete';
import '@cobalt/icons/check';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-button-icon.js';
import type { CoButtonIcon } from './co-button-icon.js';

describe('co-button-icon', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" aria-label="Star"></co-button-icon>`,
    );
    expect(el).to.exist;
    expect(el.name).to.equal('star');
    expect(el.variant).to.equal('primary');
    expect(el.size).to.equal('md');
    expect(el.label).to.be.undefined;
    expect(el.labelPosition).to.equal('bottom');
    expect(el.disabled).to.be.false;
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" variant="danger" aria-label="Star"></co-button-icon>`,
    );
    expect(el.variant).to.equal('danger');
    expect(el.getAttribute('variant')).to.equal('danger');
  });

  it('reflects warning variant attribute', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" variant="warning" aria-label="Review"></co-button-icon>`,
    );
    expect(el.variant).to.equal('warning');
    expect(el.getAttribute('variant')).to.equal('warning');
  });

  it('reflects size attribute', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" size="lg" aria-label="Star"></co-button-icon>`,
    );
    expect(el.size).to.equal('lg');
    expect(el.getAttribute('size')).to.equal('lg');
  });

  it('applies themed secondary colors on the host', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" variant="secondary" aria-label="Star"></co-button-icon>`,
    );
    el.style.setProperty('--co-color-surface-interactive-secondary-default', 'rgb(245 247 255)');
    el.style.setProperty('--co-color-surface-interactive-theme-default', 'rgb(33 55 77)');
    el.style.setProperty('--co-border-width-action', '2px');

    await el.updateComplete;

    const styles = getComputedStyle(el);
    expect(styles.backgroundColor).to.equal('rgb(245, 247, 255)');
    expect(styles.color).to.equal('rgb(33, 55, 77)');
    expect(styles.boxShadow).to.include('rgb(33, 55, 77)');
  });

  it('applies themed warning colors on the host', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" variant="warning" aria-label="Review"></co-button-icon>`,
    );
    el.style.setProperty('--co-color-surface-interactive-warning-default', 'rgb(255 193 7)');
    el.style.setProperty('--co-color-text-on-warning', 'rgb(33 37 41)');

    await el.updateComplete;

    const styles = getComputedStyle(el);
    expect(styles.backgroundColor).to.equal('rgb(255, 193, 7)');
    expect(styles.color).to.equal('rgb(33, 37, 41)');
  });

  it('renders co-icon in shadow DOM with correct name', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="delete" aria-label="Delete"></co-button-icon>`,
    );
    const icon = el.shadowRoot!.querySelector('co-icon');
    expect(icon).to.exist;
    expect(icon!.getAttribute('name')).to.equal('delete');
  });

  it('does not mutate host light DOM after connecting', async () => {
    const el = document.createElement('co-button-icon') as CoButtonIcon;
    el.setAttribute('name', 'star');
    el.setAttribute('aria-label', 'Star');
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
  });

  it('submits a containing native form without inserting helper nodes', async () => {
    const container = await fixture<HTMLElement>(html`
      <div>
        <form>
          <co-button-icon type="submit" name="check" aria-label="Submit"></co-button-icon>
        </form>
      </div>
    `);
    const form = container.querySelector('form')!;
    const button = container.querySelector('co-button-icon') as CoButtonIcon;
    const mutations: MutationRecord[] = [];
    const observer = new MutationObserver((records) => mutations.push(...records));
    observer.observe(button, { childList: true });
    form.addEventListener('submit', (event) => event.preventDefault());

    setTimeout(() => button.click());
    await oneEvent(form, 'submit');
    observer.disconnect();

    expect(mutations).to.have.length(0);
  });

  it('maps icon size down one step from button size', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" size="lg" aria-label="Star"></co-button-icon>`,
    );
    const icon = el.shadowRoot!.querySelector('co-icon');
    expect(icon!.getAttribute('size')).to.equal('md');
  });

  it('renders label when set', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" label="Favorite"></co-button-icon>`,
    );
    const label = el.shadowRoot!.querySelector('[part="label"]');
    expect(label).to.exist;
    expect(label!.textContent).to.equal('Favorite');
  });

  it('does not render label when not set', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" aria-label="Star"></co-button-icon>`,
    );
    const label = el.shadowRoot!.querySelector('[part="label"]');
    expect(label).to.not.exist;
  });

  it('renders label below icon by default', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" label="Favorite"></co-button-icon>`,
    );
    const base = el.shadowRoot!.querySelector('[part="base"]');
    const children = Array.from(base!.children);
    const iconIndex = children.findIndex((c) => c.tagName === 'CO-ICON');
    const labelIndex = children.findIndex((c) => c.classList.contains('label'));
    expect(iconIndex).to.be.lessThan(labelIndex);
  });

  it('renders label above icon when label-position is top', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" label="Favorite" label-position="top"></co-button-icon>`,
    );
    const base = el.shadowRoot!.querySelector('[part="base"]');
    const children = Array.from(base!.children);
    const iconIndex = children.findIndex((c) => c.tagName === 'CO-ICON');
    const labelIndex = children.findIndex((c) => c.classList.contains('label'));
    expect(labelIndex).to.be.lessThan(iconIndex);
  });

  it('applies disabled attribute', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" disabled aria-label="Star"></co-button-icon>`,
    );
    expect(el.hasAttribute('disabled')).to.be.true;
    expect(el.disabled).to.be.true;
  });

  it('renders as circle when circle attribute is set', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" circle aria-label="Star"></co-button-icon>`,
    );
    expect(el.circle).to.be.true;
    expect(el.hasAttribute('circle')).to.be.true;
  });

  it('suppresses label when circle is set', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" label="Favorite" circle aria-label="Star"></co-button-icon>`,
    );
    const label = el.shadowRoot!.querySelector('[part="label"]');
    expect(label).to.not.exist;
  });

  it('dispatches co-focus event', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" aria-label="Star"></co-button-icon>`,
    );
    let focusFired = false;
    el.addEventListener('co-focus', () => {
      focusFired = true;
    });
    el.dispatchEvent(new Event('focus'));
    expect(focusFired).to.be.true;
  });

  it('dispatches co-blur event', async () => {
    const el = await fixture<CoButtonIcon>(
      html`<co-button-icon name="star" aria-label="Star"></co-button-icon>`,
    );
    let blurFired = false;
    el.addEventListener('co-blur', () => {
      blurFired = true;
    });
    el.dispatchEvent(new Event('blur'));
    expect(blurFired).to.be.true;
  });

  describe('accessibility', () => {
    it('is accessible with aria-label', async () => {
      const el = await fixture(
        html`<co-button-icon name="star" aria-label="Favorite"></co-button-icon>`,
      );
      await runA11yAudit(el, { component: 'co-button-icon', state: 'icon-only' });
    });

    it('is accessible with visible label', async () => {
      const el = await fixture(
        html`<co-button-icon name="star" label="Favorite"></co-button-icon>`,
      );
      await runA11yAudit(el, { component: 'co-button-icon', state: 'with-label' });
    });

    it('is accessible when disabled', async () => {
      const el = await fixture(
        html`<co-button-icon name="star" aria-label="Star" disabled></co-button-icon>`,
      );
      await runA11yAudit(el, { component: 'co-button-icon', state: 'disabled' });
    });
  });
});
