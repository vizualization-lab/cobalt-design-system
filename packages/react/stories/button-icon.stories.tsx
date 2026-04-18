import { CoButtonIcon } from '@cobalt/react';
import {
  buttonIconSizes,
  buttonVariants,
  labelPositions,
  titleCase,
} from '@cobalt/storybook-fixtures';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Button Icon',
};

const componentId = 'buttonIcon' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Variants</h2>
        <div className="cobalt-row">
          {buttonVariants.map((variant) => (
            <CoButtonIcon
              key={variant}
              name="star"
              variant={variant}
              aria-label={titleCase(variant)}
            />
          ))}
        </div>
      </section>

      <section className="cobalt-section">
        <h2>Sizes</h2>
        <div className="cobalt-row">
          {buttonIconSizes.map((size) => (
            <CoButtonIcon key={size} name="settings" size={size} label={titleCase(size)} />
          ))}
        </div>
      </section>

      <section className="cobalt-section">
        <h2>Labels and shapes</h2>
        <div className="cobalt-row">
          {labelPositions.map((position) => (
            <CoButtonIcon
              key={position}
              name="favorite"
              label={titleCase(position)}
              labelPosition={position}
              variant="primary"
            />
          ))}
          <CoButtonIcon name="add" circle variant="success" aria-label="Add" />
          <CoButtonIcon name="delete" disabled aria-label="Disabled delete" />
        </div>
      </section>
    </div>
  ),
};
