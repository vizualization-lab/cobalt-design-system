import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { CoNavRailBar } from './nav-rail-bar.js';

describe('React CoNavRailBar wrapper', () => {
  it('renders a co-nav-rail-bar element with slotted children', () => {
    const { container } = render(
      <CoNavRailBar>
        <co-nav-rail-item value="home">Home</co-nav-rail-item>
      </CoNavRailBar>,
    );
    expect(container.querySelector('co-nav-rail-bar')).not.toBeNull();
    expect(container.querySelector('co-nav-rail-item')?.textContent).toBe('Home');
  });

  it('forwards co-change as onCoChange', () => {
    const onCoChange = vi.fn();
    const { container } = render(<CoNavRailBar onCoChange={onCoChange}></CoNavRailBar>);
    const el = container.querySelector('co-nav-rail-bar')!;
    el.dispatchEvent(new CustomEvent('co-change', { detail: { value: 'reports' } }));
    expect(onCoChange).toHaveBeenCalledTimes(1);
  });
});
