import { html } from 'lit';
import '@cobalt/components/icon';
import { animatedIcons, commonIcons } from '@cobalt/storybook-fixtures';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Icon',
};

const componentId = 'icon' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Sizes</h2>
        <div class="cobalt-row">
          <co-icon name="home" size="xs"></co-icon>
          <co-icon name="home" size="sm"></co-icon>
          <co-icon name="home" size="md"></co-icon>
          <co-icon name="home" size="lg"></co-icon>
          <co-icon name="home" size="xl"></co-icon>
        </div>
      </section>

      <section class="cobalt-section">
        <h2>Common icons</h2>
        <div class="cobalt-row">
          ${commonIcons.map((name) => html`<co-icon name=${name} size="lg"></co-icon>`)}
        </div>
      </section>

      <section class="cobalt-section">
        <h2>Filled and animated</h2>
        <div class="cobalt-row">
          <co-icon name="star" size="lg"></co-icon>
          <co-icon name="star" size="lg" fill></co-icon>
          ${animatedIcons.map((name) => html`<co-icon name=${name} size="lg" animated></co-icon>`)}
        </div>
      </section>
    </div>
  `,
};
