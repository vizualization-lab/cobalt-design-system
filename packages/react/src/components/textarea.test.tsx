import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CoTextarea } from './textarea.js';

describe('React CoTextarea wrapper', () => {
  it('renders a co-textarea element', () => {
    const { container } = render(<CoTextarea label="Comment" />);
    const el = container.querySelector('co-textarea');
    expect(el).not.toBeNull();
  });

  it('passes aria-describedby to the custom element', () => {
    const { container } = render(<CoTextarea label="Comment" aria-describedby="comment-help" />);
    const el = container.querySelector('co-textarea');
    expect(el?.getAttribute('aria-describedby')).toBe('comment-help');
  });

  it('forwards slotted prefix content', () => {
    const { container } = render(
      <CoTextarea label="Comment">
        <span slot="prefix">icon</span>
      </CoTextarea>,
    );
    const prefix = container.querySelector('[slot="prefix"]');
    expect(prefix).not.toBeNull();
    expect(prefix?.textContent).toBe('icon');
  });
});
