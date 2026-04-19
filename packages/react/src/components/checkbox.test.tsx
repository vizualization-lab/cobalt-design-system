import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoCheckbox } from './checkbox.js';

afterEach(cleanup);

describe('React CoCheckbox wrapper', () => {
  it('renders co-checkbox element', () => {
    const { container } = render(<CoCheckbox label="Accept" value="accept" />);
    expect(container.querySelector('co-checkbox')).toBeTruthy();
  });
});
