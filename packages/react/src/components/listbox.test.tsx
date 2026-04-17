import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { CoListbox, CoOption } from './listbox.js';

describe('React CoListbox wrapper', () => {
  it('renders a co-listbox element', () => {
    const { container } = render(
      <CoListbox label="Fruit">
        <CoOption value="apple">Apple</CoOption>
      </CoListbox>,
    );
    expect(container.querySelector('co-listbox')).not.toBeNull();
    expect(container.querySelector('co-option')).not.toBeNull();
  });

  it('passes listbox props to the custom element', async () => {
    const { container } = render(
      <CoListbox label="Fruit" multipleChoice orientation="horizontal">
        <CoOption value="apple">Apple</CoOption>
      </CoListbox>,
    );
    const el = container.querySelector('co-listbox') as any;
    await waitFor(() => {
      expect(el.multipleChoice).toBe(true);
      expect(el.orientation).toBe('horizontal');
    });
  });

  it('passes option props to the custom element', async () => {
    const { container } = render(<CoOption value="apple" checked disabled />);
    const el = container.querySelector('co-option') as any;
    await waitFor(() => {
      expect(el.value).toBe('apple');
      expect(el.checked).toBe(true);
      expect(el.disabled).toBe(true);
    });
  });
});
