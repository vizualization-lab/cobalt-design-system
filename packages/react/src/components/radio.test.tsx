import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoRadio } from './radio.js';

afterEach(cleanup);

describe('React CoRadio wrapper', () => {
  it('renders co-radio element', () => {
    const { container } = render(<CoRadio label="Apple" value="apple" />);
    expect(container.querySelector('co-radio')).toBeTruthy();
  });
});
