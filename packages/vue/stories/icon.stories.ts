import { CoIcon } from '@cobalt/vue';
import { animatedIcons, commonIcons } from '@cobalt/storybook-fixtures';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Icon',
};

const componentId = 'icon' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoIcon },
    setup() {
      return { animatedIcons, commonIcons };
    },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-row">
            <CoIcon name="home" size="xs" />
            <CoIcon name="home" size="sm" />
            <CoIcon name="home" size="md" />
            <CoIcon name="home" size="lg" />
            <CoIcon name="home" size="xl" />
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Common icons</h2>
          <div class="cobalt-row">
            <CoIcon v-for="name in commonIcons" :key="name" :name="name" size="lg" />
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Filled and animated</h2>
          <div class="cobalt-row">
            <CoIcon name="star" size="lg" />
            <CoIcon name="star" size="lg" fill />
            <CoIcon v-for="name in animatedIcons" :key="name" :name="name" size="lg" animated />
          </div>
        </section>
      </div>
    `,
  }),
};
