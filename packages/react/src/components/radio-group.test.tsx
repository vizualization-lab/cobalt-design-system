import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoRadioGroup } from './radio-group.js';
import { CoRadio } from './radio.js';

afterEach(cleanup);

describe('React CoRadioGroup wrapper', () => {
  it('renders co-radio-group element', () => {
    const { container } = render(
      <CoRadioGroup label="Fruit" name="fruit">
        <CoRadio label="Apple" value="apple" />
      </CoRadioGroup>,
    );
    expect(container.querySelector('co-radio-group')).toBeTruthy();
  });
});
