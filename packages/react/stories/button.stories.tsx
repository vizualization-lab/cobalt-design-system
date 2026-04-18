import { CoButton, CoIcon } from '@cobalt/react';
import { buttonSizes, buttonVariants, titleCase } from '@cobalt/storybook-fixtures';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Button',
};

const componentId = 'button' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Variants</h2>
        <div className="cobalt-row">
          {buttonVariants.map((variant) => (
            <CoButton key={variant} variant={variant}>
              {titleCase(variant)}
            </CoButton>
          ))}
        </div>
      </section>

      <section className="cobalt-section">
        <h2>Sizes</h2>
        <div className="cobalt-row">
          {buttonSizes.map((size) => (
            <CoButton key={size} size={size}>
              {titleCase(size)}
            </CoButton>
          ))}
        </div>
      </section>

      <section className="cobalt-section">
        <h2>States and slots</h2>
        <div className="cobalt-row">
          <CoButton>Default</CoButton>
          <CoButton disabled>Disabled</CoButton>
          <CoButton loading>Loading</CoButton>
          <CoButton variant="primary">
            <CoIcon slot="prefix" name="add" size="sm" />
            Add item
          </CoButton>
          <CoButton href="https://example.com" target="_blank">
            Open link
            <CoIcon slot="suffix" name="open-in-new" size="sm" />
          </CoButton>
        </div>
      </section>
    </div>
  ),
};
