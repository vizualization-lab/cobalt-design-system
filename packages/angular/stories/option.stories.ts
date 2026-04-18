import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoIcon, CoListbox, CoOption } from '@cobalt/angular';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Option',
};

const componentId = 'option' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoIcon, CoListbox, CoOption],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Selection indicators</h2>
          <div class="cobalt-grid">
            <co-listbox label="Default indicators" name="option-default">
              <co-option value="apple" [checked]="true">Apple</co-option>
              <co-option value="banana">Banana</co-option>
              <co-option value="carrot" [disabled]="true">Carrot</co-option>
            </co-listbox>

            <co-listbox label="Custom indicators" name="option-custom">
              <co-option value="design" [checked]="true">
                <co-icon slot="indicator-icon" name="star" size="sm"></co-icon>
                Design review
              </co-option>
              <co-option value="code">
                <co-icon slot="indicator-icon" name="check-circle" size="sm"></co-icon>
                Code review
              </co-option>
              <co-option value="qa">
                <co-icon slot="indicator-icon" name="favorite" size="sm"></co-icon>
                QA review
              </co-option>
            </co-listbox>
          </div>
        </section>
      </div>
    `,
  }),
};
