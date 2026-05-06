import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CoNavDrawerItem } from './nav-drawer-item.js';

describe('React CoNavDrawerItem wrapper', () => {
  it('renders co-nav-drawer-item element and passes properties', () => {
    const { container } = render(
      <CoNavDrawerItem value="home" icon="home" href="/home" selected disabled>
        Home
      </CoNavDrawerItem>,
    );

    const el = container.querySelector('co-nav-drawer-item') as any;
    expect(el).not.toBeNull();
    expect(el.value).toBe('home');
    expect(el.icon).toBe('home');
    expect(el.href).toBe('/home');
    expect(el.selected).toBe(true);
    expect(el.disabled).toBe(true);
  });
});
