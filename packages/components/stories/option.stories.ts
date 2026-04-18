import { html } from 'lit';
import '@cobalt/components/listbox';
import '@cobalt/components/option';
import '@cobalt/components/icon';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Option',
};

const componentId = 'option' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Selection indicators</h2>
        <div class="cobalt-grid">
          <co-listbox label="Default indicators" name="option-default">
            <co-option value="apple" checked>Apple</co-option>
            <co-option value="banana">Banana</co-option>
            <co-option value="carrot" disabled>Carrot</co-option>
          </co-listbox>

          <co-listbox label="Custom indicators" name="option-custom">
            <co-option value="design" checked>
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
};
