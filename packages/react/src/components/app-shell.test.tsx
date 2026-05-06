import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { CoAppShell } from './app-shell.js';

function stubMatchMedia(matches = true) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: () => ({
      matches,
      media: '',
      onchange: null,
      addEventListener() {},
      removeEventListener() {},
      addListener() {},
      removeListener() {},
      dispatchEvent() {
        return false;
      },
    }),
  });
}

describe('React CoAppShell wrapper', () => {
  it('renders a co-app-shell element with slotted children', () => {
    stubMatchMedia();
    const { container } = render(
      <CoAppShell railWidth="120px" drawerWidth="280px">
        <div slot="body">Body</div>
      </CoAppShell>,
    );

    const el = container.querySelector('co-app-shell') as any;
    expect(el).not.toBeNull();
    expect(el.railWidth).toBe('120px');
    expect(el.drawerWidth).toBe('280px');
    expect(container.querySelector('[slot="body"]')?.textContent).toBe('Body');
  });

  it('forwards drawer events', () => {
    stubMatchMedia();
    const onCoDrawerOpen = vi.fn();
    const onCoDrawerClose = vi.fn();
    const onCoDrawerToggle = vi.fn();
    const { container } = render(
      <CoAppShell
        onCoDrawerOpen={onCoDrawerOpen}
        onCoDrawerClose={onCoDrawerClose}
        onCoDrawerToggle={onCoDrawerToggle}
      />,
    );

    const el = container.querySelector('co-app-shell')!;
    el.dispatchEvent(new CustomEvent('co-drawer-open', { detail: { open: true } }));
    el.dispatchEvent(new CustomEvent('co-drawer-close', { detail: { open: false } }));
    el.dispatchEvent(new CustomEvent('co-drawer-toggle', { detail: { open: true } }));

    expect(onCoDrawerOpen).toHaveBeenCalledTimes(1);
    expect(onCoDrawerClose).toHaveBeenCalledTimes(1);
    expect(onCoDrawerToggle).toHaveBeenCalledTimes(1);
  });
});
