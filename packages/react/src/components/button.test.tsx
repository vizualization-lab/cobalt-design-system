import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CoButton } from './button.js';

describe('React CoButton wrapper', () => {
  it('renders a co-button element', () => {
    const { container } = render(<CoButton>Click me</CoButton>);
    const el = container.querySelector('co-button');
    expect(el).not.toBeNull();
  });

  it('passes aria-label to the custom element', () => {
    const { container } = render(<CoButton aria-label="Close dialog">X</CoButton>);
    const el = container.querySelector('co-button');
    expect(el?.getAttribute('aria-label')).toBe('Close dialog');
  });

  it('passes warning variant to the custom element', () => {
    const { container } = render(<CoButton variant="warning">Review</CoButton>);
    const el = container.querySelector('co-button') as any;
    expect(el?.variant).toBe('warning');
  });

  it('passes aria-describedby to the custom element', () => {
    const { container } = render(<CoButton aria-describedby="help-text">Save</CoButton>);
    const el = container.querySelector('co-button');
    expect(el?.getAttribute('aria-describedby')).toBe('help-text');
  });

  it('passes aria-expanded to the custom element', () => {
    const { container } = render(<CoButton aria-expanded="true">Menu</CoButton>);
    const el = container.querySelector('co-button');
    expect(el?.getAttribute('aria-expanded')).toBe('true');
  });

  it('forwards slot content as children', () => {
    const { container } = render(<CoButton>Hello world</CoButton>);
    const el = container.querySelector('co-button');
    expect(el?.textContent).toBe('Hello world');
  });

  it('renders slotted prefix content', () => {
    const { container } = render(
      <CoButton>
        <span slot="prefix">icon</span>
        Label
      </CoButton>,
    );
    const prefix = container.querySelector('[slot="prefix"]');
    expect(prefix).not.toBeNull();
    expect(prefix?.textContent).toBe('icon');
  });

  it('does not add spurious attributes to the custom element', () => {
    const { container } = render(<CoButton>Clean</CoButton>);
    const el = container.querySelector('co-button')!;
    // Verify no unexpected attributes leak onto the element
    const attrNames = Array.from(el.attributes).map((a) => a.name);
    // Only role (from LionButton) should be present
    for (const attr of attrNames) {
      expect(['role'].includes(attr) || attr.startsWith('aria-')).toBe(true);
    }
  });
});
