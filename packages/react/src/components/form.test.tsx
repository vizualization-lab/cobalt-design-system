import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CoForm } from './form.js';

describe('React CoForm wrapper', () => {
  it('registers co-invalid-submit handler', () => {
    const { container } = render(<CoForm onCoInvalidSubmit={() => undefined} />);
    const el = container.querySelector('co-form');
    expect(el).not.toBeNull();
  });
});
