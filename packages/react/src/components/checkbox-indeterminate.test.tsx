import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CoCheckboxIndeterminate } from './checkbox-indeterminate.js';

describe('React CoCheckboxIndeterminate wrapper', () => {
  it('renders co-checkbox-indeterminate element and passes properties', () => {
    const { container } = render(
      <CoCheckboxIndeterminate value="all" checked indeterminate mixedState disabled>
        Select all
      </CoCheckboxIndeterminate>,
    );

    const el = container.querySelector('co-checkbox-indeterminate') as any;
    expect(el).not.toBeNull();
    expect(el.value).toBe('all');
    expect(el.checked).toBe(true);
    expect(el.indeterminate).toBe(true);
    expect(el.mixedState).toBe(true);
    expect(el.disabled).toBe(true);
  });
});
