import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { CoCheckboxGroup } from './checkbox-group.js';
import { CoCheckbox } from './checkbox.js';

afterEach(cleanup);

describe('React CoCheckboxGroup wrapper', () => {
  it('renders co-checkbox-group element', () => {
    const { container } = render(
      <CoCheckboxGroup label="Toppings" name="toppings">
        <CoCheckbox label="Cheese" value="cheese" />
      </CoCheckboxGroup>,
    );
    expect(container.querySelector('co-checkbox-group')).toBeTruthy();
  });
});
