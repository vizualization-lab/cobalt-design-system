import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoInputPill } from './input-pill.js';

afterEach(cleanup);

describe('React CoInputPill wrapper', () => {
  it('renders co-input-pill element', () => {
    const { container } = render(<CoInputPill placeholder="Search" />);
    expect(container.querySelector('co-input-pill')).toBeTruthy();
  });
});
