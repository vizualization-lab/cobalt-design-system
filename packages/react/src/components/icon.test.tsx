import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CoIcon } from './icon.js';

describe('React CoIcon wrapper', () => {
  it('renders co-icon element and passes icon properties', () => {
    const { container } = render(<CoIcon name="home" size="lg" fill label="Home" />);

    const el = container.querySelector('co-icon') as any;
    expect(el).not.toBeNull();
    expect(el.name).toBe('home');
    expect(el.size).toBe('lg');
    expect(el.fill).toBe(true);
    expect(el.label).toBe('Home');
  });
});
