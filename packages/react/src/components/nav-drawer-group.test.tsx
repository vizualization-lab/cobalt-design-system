import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { CoNavDrawerGroup } from './nav-drawer-group.js';
import { CoNavDrawerItem } from './nav-drawer-item.js';

afterEach(cleanup);

describe('React CoNavDrawerGroup wrapper', () => {
  it('renders co-nav-drawer-group element and passes properties', () => {
    const { container } = render(
      <CoNavDrawerGroup label="Navigation" value="navigation" open>
        <CoNavDrawerItem value="drawer">Drawer</CoNavDrawerItem>
      </CoNavDrawerGroup>,
    );

    const el = container.querySelector('co-nav-drawer-group') as any;
    expect(el).not.toBeNull();
    expect(el.label).toBe('Navigation');
    expect(el.value).toBe('navigation');
    expect(el.open).toBe(true);
  });

  it('wires onCoToggle to co-toggle', () => {
    const onCoToggle = vi.fn();
    const { container } = render(
      <CoNavDrawerGroup label="Navigation" value="navigation" onCoToggle={onCoToggle} />,
    );
    const el = container.querySelector('co-nav-drawer-group')!;

    fireEvent(el, new CustomEvent('co-toggle', { detail: { value: 'navigation', open: true } }));

    expect(onCoToggle).toHaveBeenCalledTimes(1);
  });
});
