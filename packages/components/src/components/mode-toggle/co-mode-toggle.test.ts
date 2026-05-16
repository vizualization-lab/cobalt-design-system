import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-mode-toggle.js';
import type { CoModeToggle, ModeToggleChangeDetail } from './co-mode-toggle.js';

type MatchMediaListener = (event: MediaQueryListEvent) => void;

function stubMatchMedia(matches = false) {
  const listeners = new Set<MatchMediaListener>();
  const query = {
    matches,
    media: '(prefers-color-scheme: dark)',
    onchange: null,
    addEventListener: (_event: string, listener: MatchMediaListener) => listeners.add(listener),
    removeEventListener: (_event: string, listener: MatchMediaListener) =>
      listeners.delete(listener),
    addListener: (listener: MatchMediaListener) => listeners.add(listener),
    removeListener: (listener: MatchMediaListener) => listeners.delete(listener),
    dispatchEvent: () => true,
  } as MediaQueryList;

  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: () => query,
  });

  return {
    setMatches(nextMatches: boolean) {
      (query as { matches: boolean }).matches = nextMatches;
      const event = { matches: nextMatches, media: query.media } as MediaQueryListEvent;
      for (const listener of listeners) listener(event);
    },
  };
}

describe('co-mode-toggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.removeAttribute('data-mode');
    stubMatchMedia(false);
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.removeAttribute('data-mode');
  });

  it('defaults to auto and resolves from system preference', async () => {
    stubMatchMedia(true);
    const el = await fixture<CoModeToggle>(html`<co-mode-toggle></co-mode-toggle>`);

    expect(el.mode).to.equal('auto');
    expect(document.documentElement.getAttribute('data-theme')).to.equal('default');
    expect(document.documentElement.getAttribute('data-mode')).to.equal('dark');
  });

  it('renders the next action icon in compact mode', async () => {
    const el = await fixture<CoModeToggle>(html`<co-mode-toggle mode="light"></co-mode-toggle>`);
    const icon = el.shadowRoot!.querySelector('co-icon');

    expect(icon?.getAttribute('name')).to.equal('dark-mode');
  });

  it('passes icon size to internal co-icon elements', async () => {
    const el = await fixture<CoModeToggle>(html`<co-mode-toggle size="lg"></co-mode-toggle>`);
    const icons = Array.from(el.shadowRoot!.querySelectorAll('co-icon'));

    expect(icons.map((icon) => icon.getAttribute('size'))).to.deep.equal(['lg']);
  });

  it('toggles compact mode and emits co-change', async () => {
    const el = await fixture<CoModeToggle>(html`<co-mode-toggle mode="light"></co-mode-toggle>`);
    const eventPromise = oneEvent(el, 'co-change') as Promise<CustomEvent<ModeToggleChangeDetail>>;

    el.shadowRoot!.querySelector('button')!.click();
    const event = await eventPromise;

    expect(el.mode).to.equal('dark');
    expect(document.documentElement.getAttribute('data-mode')).to.equal('dark');
    expect(event.detail).to.deep.equal({
      mode: 'dark',
      resolvedMode: 'dark',
      persisted: true,
      storageNamespace: 'cobalt',
    });
  });

  it('persists mode by default', async () => {
    const el = await fixture<CoModeToggle>(html`<co-mode-toggle mode="light"></co-mode-toggle>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(localStorage.getItem('cobalt-mode')).to.equal('dark');
  });

  it('does not persist when persist is false', async () => {
    const el = await fixture<CoModeToggle>(html`<co-mode-toggle mode="light"></co-mode-toggle>`);
    el.persist = false;
    await el.updateComplete;

    el.shadowRoot!.querySelector('button')!.click();

    expect(localStorage.getItem('cobalt-mode')).to.equal(null);
  });

  it('persists mode to the configured namespace', async () => {
    const el = await fixture<CoModeToggle>(
      html`<co-mode-toggle mode="light" storage-namespace="docs"></co-mode-toggle>`,
    );

    el.shadowRoot!.querySelector('button')!.click();

    expect(localStorage.getItem('docs-mode')).to.equal('dark');
    expect(localStorage.getItem('cobalt-mode')).to.equal(null);
  });

  it('reads a persisted mode for its namespace', async () => {
    localStorage.setItem('docs-mode', 'dark');
    const el = await fixture<CoModeToggle>(
      html`<co-mode-toggle storage-namespace="docs"></co-mode-toggle>`,
    );

    expect(el.mode).to.equal('dark');
    expect(document.documentElement.getAttribute('data-mode')).to.equal('dark');
  });

  it('reads a persisted mode when storage namespace is set after connection', async () => {
    localStorage.setItem('docs-mode', 'dark');
    const el = await fixture<CoModeToggle>(html`<co-mode-toggle></co-mode-toggle>`);

    el.storageNamespace = 'docs';
    await el.updateComplete;

    expect(el.mode).to.equal('dark');
    expect(document.documentElement.getAttribute('data-mode')).to.equal('dark');
  });

  it('does not override an explicit mode with stored mode', async () => {
    localStorage.setItem('docs-mode', 'light');
    const el = await fixture<CoModeToggle>(
      html`<co-mode-toggle mode="dark" storage-namespace="docs"></co-mode-toggle>`,
    );

    expect(el.mode).to.equal('dark');
    expect(document.documentElement.getAttribute('data-mode')).to.equal('dark');
  });

  it('updates auto mode when the system preference changes', async () => {
    const media = stubMatchMedia(false);
    await fixture<CoModeToggle>(html`<co-mode-toggle mode="auto"></co-mode-toggle>`);

    expect(document.documentElement.getAttribute('data-mode')).to.equal('light');
    media.setMatches(true);
    expect(document.documentElement.getAttribute('data-mode')).to.equal('dark');
  });

  it('syncs matching namespace instances after user interaction', async () => {
    const container = await fixture<HTMLElement>(html`
      <div>
        <co-mode-toggle mode="light" storage-namespace="docs"></co-mode-toggle>
        <co-mode-toggle mode="light" storage-namespace="docs"></co-mode-toggle>
      </div>
    `);
    const [first, second] = Array.from(
      container.querySelectorAll('co-mode-toggle'),
    ) as CoModeToggle[];

    first.shadowRoot!.querySelector('button')!.click();
    await second.updateComplete;

    expect(second.mode).to.equal('dark');
  });

  it('passes accessibility audit in compact mode', async () => {
    const el = await fixture<CoModeToggle>(html`<co-mode-toggle></co-mode-toggle>`);
    await runA11yAudit(el, { component: 'co-mode-toggle', state: 'compact' });
  });
});
