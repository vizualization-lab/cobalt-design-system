import '@cobalt/components/listbox';
import '@cobalt/components/option';
import '@cobalt/components/icon';

export const title = '<co-option>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Single Select (Radio)</h2>
    <div style="max-width: 320px;">
      <co-listbox label="Favorite fruit" name="single-fruit">
        <co-option value="apple" checked>Apple</co-option>
        <co-option value="banana">Banana</co-option>
        <co-option value="carrot">Carrot</co-option>
        <co-option value="date">Date</co-option>
      </co-listbox>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Multiple Select (Checkbox)</h2>
    <div style="max-width: 320px;">
      <co-listbox label="Select ingredients" name="multi-fruit" multiple-choice>
        <co-option value="apple" checked>Apple</co-option>
        <co-option value="banana" checked>Banana</co-option>
        <co-option value="carrot">Carrot</co-option>
        <co-option value="date">Date</co-option>
      </co-listbox>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Icon Indicator (Star)</h2>
    <div style="max-width: 320px;">
      <co-listbox label="Rate your favorite" name="star-indicator">
        <co-option value="apple" checked>
          <co-icon slot="indicator-icon" name="star" size="sm"></co-icon>
          Apple
        </co-option>
        <co-option value="banana">
          <co-icon slot="indicator-icon" name="star" size="sm"></co-icon>
          Banana
        </co-option>
        <co-option value="carrot">
          <co-icon slot="indicator-icon" name="star" size="sm"></co-icon>
          Carrot
        </co-option>
      </co-listbox>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Icon Indicator (Check Circle)</h2>
    <div style="max-width: 320px;">
      <co-listbox label="Completed tasks" name="check-indicator">
        <co-option value="task-1" checked>
          <co-icon slot="indicator-icon" name="check-circle" size="sm"></co-icon>
          Design review
        </co-option>
        <co-option value="task-2">
          <co-icon slot="indicator-icon" name="check-circle" size="sm"></co-icon>
          Code review
        </co-option>
        <co-option value="task-3">
          <co-icon slot="indicator-icon" name="check-circle" size="sm"></co-icon>
          QA testing
        </co-option>
      </co-listbox>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Disabled Options</h2>
    <div style="max-width: 320px;">
      <co-listbox label="Available items" name="disabled-options">
        <co-option value="apple" checked>Apple</co-option>
        <co-option value="banana" disabled>Banana (sold out)</co-option>
        <co-option value="carrot">Carrot</co-option>
        <co-option value="date" disabled>Date (sold out)</co-option>
      </co-listbox>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Mixed (Default + Custom Indicator)</h2>
    <div style="max-width: 320px;">
      <co-listbox label="Mixed indicators" name="mixed-indicators">
        <co-option value="apple" checked>Apple</co-option>
        <co-option value="banana">
          <co-icon slot="indicator-icon" name="star" size="sm"></co-icon>
          Banana (star)
        </co-option>
        <co-option value="carrot">Carrot</co-option>
        <co-option value="date">
          <co-icon slot="indicator-icon" name="favorite" size="sm"></co-icon>
          Date (heart)
        </co-option>
      </co-listbox>
    </div>
  </section>
`;
