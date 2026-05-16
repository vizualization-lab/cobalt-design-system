import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoModeToggle } from './mode-toggle.js';

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.removeAttribute('data-mode');
  document.documentElement.removeAttribute('data-theme');
});

describe('React CoModeToggle wrapper', () => {
  it('renders co-mode-toggle element', () => {
    const { container } = render(<CoModeToggle />);
    expect(container.querySelector('co-mode-toggle')).toBeTruthy();
  });

  it('passes mode and persist props', () => {
    const { container } = render(<CoModeToggle mode="dark" persist={false} />);
    const el = container.querySelector('co-mode-toggle') as any;
    expect(el.mode).toBe('dark');
    expect(el.persist).toBe(false);
  });

  it('does not mark mode as explicit when the prop is omitted', async () => {
    const { container } = render(<CoModeToggle />);
    const el = container.querySelector('co-mode-toggle') as any;
    await el.updateComplete;

    expect(el._hasExplicitMode).toBe(false);
  });

  it('hydrates persisted mode when mode is omitted', async () => {
    localStorage.setItem('docs-mode', 'dark');
    const { container } = render(<CoModeToggle storageNamespace="docs" />);
    const el = container.querySelector('co-mode-toggle') as any;
    await el.updateComplete;

    expect(el.mode).toBe('dark');
    expect(document.documentElement.getAttribute('data-mode')).toBe('dark');
  });

  it('forwards co-change as onCoChange', () => {
    let called = false;
    const { container } = render(<CoModeToggle onCoChange={() => (called = true)} />);
    const el = container.querySelector('co-mode-toggle')!;
    el.dispatchEvent(new CustomEvent('co-change', { bubbles: true }));
    expect(called).toBe(true);
  });
});
