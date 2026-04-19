import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoSelect } from './select.js';

afterEach(cleanup);

describe('React CoSelect wrapper', () => {
  it('renders co-select element', () => {
    const { container } = render(<CoSelect label="Fruit" />);
    expect(container.querySelector('co-select')).toBeTruthy();
  });

  it('passes size prop', () => {
    const { container } = render(<CoSelect label="Fruit" size="lg" />);
    const el = container.querySelector('co-select') as any;
    expect(el.size).toBe('lg');
  });
});
