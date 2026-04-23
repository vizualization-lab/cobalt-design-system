import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoNavDrawer } from './nav-drawer.js';
import { CoNavDrawerItem } from './nav-drawer-item.js';

afterEach(cleanup);

describe('React CoNavDrawer wrapper', () => {
  it('renders co-nav-drawer element', () => {
    const { container } = render(
      <CoNavDrawer label="Menu">
        <CoNavDrawerItem value="home" icon="home">Home</CoNavDrawerItem>
      </CoNavDrawer>,
    );
    expect(container.querySelector('co-nav-drawer')).toBeTruthy();
  });
});
