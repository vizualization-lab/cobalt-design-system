import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CoNavSeparator } from './nav-separator.js';

describe('React CoNavSeparator wrapper', () => {
  it('renders co-nav-separator element', () => {
    const { container } = render(<CoNavSeparator />);

    expect(container.querySelector('co-nav-separator')).not.toBeNull();
  });
});
