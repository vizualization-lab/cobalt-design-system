import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoButtonIcon } from './button-icon.js';

afterEach(cleanup);

describe('React CoButtonIcon wrapper', () => {
  it('renders co-button-icon element', () => {
    const { container } = render(<CoButtonIcon name="star" aria-label="Star" />);
    expect(container.querySelector('co-button-icon')).toBeTruthy();
  });

  it('passes name and variant props', () => {
    const { container } = render(
      <CoButtonIcon name="delete" variant="danger" aria-label="Delete" />,
    );
    const el = container.querySelector('co-button-icon') as any;
    expect(el.name).toBe('delete');
    expect(el.variant).toBe('danger');
  });

  it('passes label prop', () => {
    const { container } = render(<CoButtonIcon name="star" label="Favorite" />);
    const el = container.querySelector('co-button-icon') as any;
    expect(el.label).toBe('Favorite');
  });
});
