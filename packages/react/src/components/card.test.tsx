import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoCard } from './card.js';

afterEach(cleanup);

describe('React CoCard wrapper', () => {
  it('renders co-card element', () => {
    const { container } = render(<CoCard>Content</CoCard>);
    expect(container.querySelector('co-card')).toBeTruthy();
  });

  it('passes label prop', () => {
    const { container } = render(<CoCard label="Info">Content</CoCard>);
    const el = container.querySelector('co-card');
    expect(el?.getAttribute('label')).toBe('Info');
  });
});
