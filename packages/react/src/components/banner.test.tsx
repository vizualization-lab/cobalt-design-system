import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoBanner } from './banner.js';

afterEach(cleanup);

describe('React CoBanner wrapper', () => {
  it('renders co-banner element', () => {
    const { container } = render(
      <CoBanner>
        <span slot="title">Notice</span>
      </CoBanner>,
    );
    expect(container.querySelector('co-banner')).toBeTruthy();
  });

  it('passes label prop', () => {
    const { container } = render(
      <CoBanner label="Alert">
        <span slot="title">Alert</span>
      </CoBanner>,
    );
    const el = container.querySelector('co-banner') as any;
    expect(el?.label).toBe('Alert');
  });
});
