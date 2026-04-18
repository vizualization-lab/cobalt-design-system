import { CoCombobox, CoOption } from '@cobalt/react';
import { autocompleteModes, fieldSizes, fruits, titleCase } from '@cobalt/storybook-fixtures';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Combobox',
};

const componentId = 'combobox' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Sizes</h2>
        <div className="cobalt-grid">
          {fieldSizes.map((size) => (
            <CoCombobox
              key={size}
              label={titleCase(size)}
              name={`combobox-${size}`}
              size={size}
              showAllOnEmpty
            >
              {fruits.map((fruit) => (
                <CoOption key={fruit.value} value={fruit.value}>
                  {fruit.label}
                </CoOption>
              ))}
            </CoCombobox>
          ))}
        </div>
      </section>

      <section className="cobalt-section">
        <h2>Modes and states</h2>
        <div className="cobalt-grid">
          <CoCombobox label="Multiple" name="combobox-multiple" multiple showAllOnEmpty>
            {fruits.map((fruit) => (
              <CoOption key={fruit.value} value={fruit.value}>
                {fruit.label}
              </CoOption>
            ))}
          </CoCombobox>
          {autocompleteModes.map((mode) => (
            <CoCombobox
              key={mode}
              label={`Autocomplete ${mode}`}
              name={`combobox-${mode}`}
              autocomplete={mode}
              showAllOnEmpty
            >
              {fruits.map((fruit) => (
                <CoOption key={fruit.value} value={fruit.value}>
                  {fruit.label}
                </CoOption>
              ))}
            </CoCombobox>
          ))}
          <CoCombobox label="Danger" name="combobox-danger" danger>
            {fruits.map((fruit) => (
              <CoOption key={fruit.value} value={fruit.value}>
                {fruit.label}
              </CoOption>
            ))}
          </CoCombobox>
          <CoCombobox label="Disabled" name="combobox-disabled" disabled>
            {fruits.map((fruit) => (
              <CoOption key={fruit.value} value={fruit.value}>
                {fruit.label}
              </CoOption>
            ))}
          </CoCombobox>
        </div>
      </section>
    </div>
  ),
};
