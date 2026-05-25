import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { CoInputStepper } from './input-stepper.js';

describe('React CoInputStepper wrapper', () => {
  it('renders a co-input-stepper element', () => {
    const { container } = render(<CoInputStepper label="Quantity" />);
    const el = container.querySelector('co-input-stepper');
    expect(el).not.toBeNull();
  });

  it('passes numeric attributes to the custom element', async () => {
    const { container } = render(<CoInputStepper label="Quantity" min={0} max={10} step={2} />);
    const el = container.querySelector('co-input-stepper') as any;
    await waitFor(() => {
      expect(el.min).toBe(0);
      expect(el.max).toBe(10);
      expect(el.step).toBe(2);
    });
  });

  it('forwards slotted leading content', () => {
    const { container } = render(
      <CoInputStepper label="Price">
        <span slot="leading">$</span>
      </CoInputStepper>,
    );
    const leading = container.querySelector('[slot="leading"]');
    expect(leading).not.toBeNull();
    expect(leading?.textContent).toBe('$');
  });
});
