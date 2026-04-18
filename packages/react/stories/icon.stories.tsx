import { CoIcon } from '@cobalt/react';
import { animatedIcons, commonIcons } from '@cobalt/storybook-fixtures';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Icon',
};

const componentId = 'icon' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Sizes</h2>
        <div className="cobalt-row">
          <CoIcon name="home" size="xs" />
          <CoIcon name="home" size="sm" />
          <CoIcon name="home" size="md" />
          <CoIcon name="home" size="lg" />
          <CoIcon name="home" size="xl" />
        </div>
      </section>

      <section className="cobalt-section">
        <h2>Common icons</h2>
        <div className="cobalt-row">
          {commonIcons.map((name) => (
            <CoIcon key={name} name={name} size="lg" />
          ))}
        </div>
      </section>

      <section className="cobalt-section">
        <h2>Filled and animated</h2>
        <div className="cobalt-row">
          <CoIcon name="star" size="lg" />
          <CoIcon name="star" size="lg" fill />
          {animatedIcons.map((name) => (
            <CoIcon key={name} name={name} size="lg" animated />
          ))}
        </div>
      </section>
    </div>
  ),
};
