import { CoOption, CoSelect } from '@cobalt/react';
import { fieldSizes, fruits, titleCase } from '@cobalt/storybook-fixtures';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Select',
};

const componentId = 'select' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Sizes</h2>
        <div className="cobalt-grid">
          {fieldSizes.map((size) => (
            <CoSelect key={size} name={`select-${size}`} size={size}>
              <span slot="label">{titleCase(size)}</span>
              {fruits.map((fruit, index) => (
                <CoOption key={fruit.value} value={fruit.value} checked={index === 0}>
                  {fruit.label}
                </CoOption>
              ))}
            </CoSelect>
          ))}
        </div>
      </section>

      <section className="cobalt-section">
        <h2>States</h2>
        <div className="cobalt-grid">
          <CoSelect name="select-default">
            <span slot="label">Default</span>
            <span slot="help-text">Choose one option.</span>
            {fruits.map((fruit, index) => (
              <CoOption key={fruit.value} value={fruit.value} checked={index === 0}>
                {fruit.label}
              </CoOption>
            ))}
          </CoSelect>

          <CoSelect name="select-placeholder" hasNoDefaultSelected>
            <span slot="label">No default selected</span>
            {fruits.map((fruit) => (
              <CoOption key={fruit.value} value={fruit.value}>
                {fruit.label}
              </CoOption>
            ))}
          </CoSelect>

          <CoSelect name="select-danger" danger required>
            <span slot="label">Danger</span>
            <span slot="feedback">Select a fruit.</span>
            {fruits.map((fruit, index) => (
              <CoOption key={fruit.value} value={fruit.value} checked={index === 0}>
                {fruit.label}
              </CoOption>
            ))}
          </CoSelect>

          <CoSelect name="select-disabled" disabled>
            <span slot="label">Disabled</span>
            {fruits.map((fruit, index) => (
              <CoOption key={fruit.value} value={fruit.value} checked={index === 0}>
                {fruit.label}
              </CoOption>
            ))}
          </CoSelect>
        </div>
      </section>
    </div>
  ),
};
