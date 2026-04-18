import { CoListbox, CoOption } from '@cobalt/react';
import { fruits } from '@cobalt/storybook-fixtures';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Listbox',
};

const componentId = 'listbox' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Selection modes</h2>
        <div className="cobalt-grid">
          <CoListbox label="Single selection" name="single-fruit">
            {fruits.map((fruit, index) => (
              <CoOption key={fruit.value} value={fruit.value} checked={index === 0}>
                {fruit.label}
              </CoOption>
            ))}
          </CoListbox>

          <CoListbox label="Multiple selection" name="multi-fruit" multipleChoice>
            {fruits.map((fruit, index) => (
              <CoOption key={fruit.value} value={fruit.value} checked={index < 2}>
                {fruit.label}
              </CoOption>
            ))}
          </CoListbox>
        </div>
      </section>

      <section className="cobalt-section">
        <h2>Layout and states</h2>
        <div className="cobalt-grid">
          <CoListbox label="Horizontal" name="horizontal-fruit" orientation="horizontal">
            {fruits.slice(0, 3).map((fruit, index) => (
              <CoOption key={fruit.value} value={fruit.value} checked={index === 1}>
                {fruit.label}
              </CoOption>
            ))}
          </CoListbox>

          <CoListbox label="Disabled" name="disabled-fruit" disabled>
            {fruits.slice(0, 3).map((fruit, index) => (
              <CoOption key={fruit.value} value={fruit.value} checked={index === 0}>
                {fruit.label}
              </CoOption>
            ))}
          </CoListbox>
        </div>
      </section>
    </div>
  ),
};
