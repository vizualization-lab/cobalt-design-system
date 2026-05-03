import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CoLabel } from './label.js';

describe('React CoLabel wrapper', () => {
  it('renders a co-label element', () => {
    const { container } = render(<CoLabel>Email address</CoLabel>);
    expect(container.querySelector('co-label')).not.toBeNull();
  });

  it('passes htmlFor, required, optional, and optionalLabel to the element', () => {
    const { container } = render(
      <CoLabel htmlFor="email" required optional optionalLabel="Not required">
        Email address
      </CoLabel>,
    );
    const el = container.querySelector('co-label') as any;

    expect(el.htmlFor).toBe('email');
    expect(el.required).toBe(true);
    expect(el.optional).toBe(true);
    expect(el.optionalLabel).toBe('Not required');
  });

  it('forwards slotted prefix content', () => {
    const { container } = render(
      <CoLabel>
        <span slot="prefix">icon</span>
        Email address
      </CoLabel>,
    );

    expect(container.querySelector('[slot="prefix"]')?.textContent).toBe('icon');
  });
});
