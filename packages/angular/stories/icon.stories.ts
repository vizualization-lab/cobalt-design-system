import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoIcon } from '@cobalt/angular';
import { animatedIcons, commonIcons } from '@cobalt/storybook-fixtures';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Icon',
};

const componentId = 'icon' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    props: { animatedIcons, commonIcons },
    template: `
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
            @for (name of commonIcons; track name) {
              <co-icon [name]="name" size="lg"></co-icon>
            }
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Filled and animated</h2>
          <div class="cobalt-row">
            <co-icon name="star" size="lg"></co-icon>
            <co-icon name="star" size="lg" [fill]="true"></co-icon>
            @for (name of animatedIcons; track name) {
              <co-icon [name]="name" size="lg" animated></co-icon>
            }
          </div>
        </section>
      </div>
    `,
  }),
};
