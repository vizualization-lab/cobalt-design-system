import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoNavHeaderBar } from './nav-header-bar.js';

afterEach(cleanup);

describe('React CoNavHeaderBar wrapper', () => {
  it('renders co-nav-header-bar element', () => {
    const { container } = render(<CoNavHeaderBar>Content</CoNavHeaderBar>);
    expect(container.querySelector('co-nav-header-bar')).toBeTruthy();
  });

  it('passes label prop', () => {
    const { container } = render(<CoNavHeaderBar label="App Header">Content</CoNavHeaderBar>);
    const el = container.querySelector('co-nav-header-bar');
    expect(el?.getAttribute('label')).toBe('App Header');
  });
});
