import { CoIcon, CoInput } from '@cobalt/react';
import { fieldSizes, titleCase } from '@cobalt/storybook-fixtures';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Input',
};

const componentId = 'input' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Sizes</h2>
        <div className="cobalt-grid">
          {fieldSizes.map((size) => (
            <CoInput
              key={size}
              size={size}
              label={titleCase(size)}
              placeholder="name@example.com"
            />
          ))}
        </div>
      </section>

      <section className="cobalt-section">
        <h2>States</h2>
        <div className="cobalt-grid">
          <CoInput label="Default" placeholder="Search" />
          <CoInput label="Required" required placeholder="Required" />
          <CoInput label="Danger" danger value="Invalid value" />
          <CoInput label="Disabled" disabled value="Disabled value" />
          <CoInput label="Read only" readOnly value="Read only value" />
          <CoInput label="With icon" placeholder="Search">
            <CoIcon slot="prefix" name="search" size="sm" />
          </CoInput>
        </div>
      </section>
    </div>
  ),
};
