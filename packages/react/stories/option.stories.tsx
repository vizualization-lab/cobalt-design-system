import { CoIcon, CoListbox, CoOption } from '@cobalt/react';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Option',
};

const componentId = 'option' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Selection indicators</h2>
        <div className="cobalt-grid">
          <CoListbox label="Default indicators" name="option-default">
            <CoOption value="apple" checked>
              Apple
            </CoOption>
            <CoOption value="banana">Banana</CoOption>
            <CoOption value="carrot" disabled>
              Carrot
            </CoOption>
          </CoListbox>

          <CoListbox label="Custom indicators" name="option-custom">
            <CoOption value="design" checked>
              <CoIcon slot="indicator-icon" name="star" size="sm" />
              Design review
            </CoOption>
            <CoOption value="code">
              <CoIcon slot="indicator-icon" name="check-circle" size="sm" />
              Code review
            </CoOption>
            <CoOption value="qa">
              <CoIcon slot="indicator-icon" name="favorite" size="sm" />
              QA review
            </CoOption>
          </CoListbox>
        </div>
      </section>
    </div>
  ),
};
