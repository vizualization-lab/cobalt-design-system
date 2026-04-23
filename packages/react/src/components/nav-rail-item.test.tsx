import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CoNavRailItem } from './nav-rail-item.js';

describe('React CoNavRailItem wrapper', () => {
  it('renders a co-nav-rail-item element', () => {
    const { container } = render(<CoNavRailItem value="home">Home</CoNavRailItem>);
    expect(container.querySelector('co-nav-rail-item')).not.toBeNull();
  });

  it('passes href to the custom element', () => {
    const { container } = render(
      <CoNavRailItem value="home" href="/home">
        Home
      </CoNavRailItem>,
    );
    expect(container.querySelector('co-nav-rail-item')?.href).toContain('/home');
  });
});
