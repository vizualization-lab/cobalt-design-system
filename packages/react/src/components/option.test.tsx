import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { CoOption } from './option.js';

describe('React CoOption wrapper', () => {
  it('renders a co-option element', async () => {
    const { container } = render(
      <CoOption value="apple" checked disabled>
        Apple
      </CoOption>,
    );
    const el = container.querySelector('co-option') as any;

    await waitFor(() => {
      expect(el.value).toBe('apple');
      expect(el.checked).toBe(true);
      expect(el.disabled).toBe(true);
    });
  });
});
