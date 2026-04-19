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
    <h2 class="wb-heading">Custom Prefix (Star)</h2>
    <div style="max-width: 320px;">
      <co-listbox label="Rate your favorite" name="star-prefix">
        <co-option value="apple" checked>
          <co-icon slot="prefix" name="star" size="sm"></co-icon>
          Apple
        </co-option>
        <co-option value="banana">
          <co-icon slot="prefix" name="star" size="sm"></co-icon>
          Banana
        </co-option>
        <co-option value="carrot">
          <co-icon slot="prefix" name="star" size="sm"></co-icon>
          Carrot
        </co-option>
      </co-listbox>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">With Suffix</h2>
    <div style="max-width: 320px;">
      <co-listbox label="File actions" name="suffix-demo">
        <co-option value="download" checked>
          Download
          <co-icon slot="suffix" name="download" size="sm"></co-icon>
        </co-option>
        <co-option value="share">
          Share
          <co-icon slot="suffix" name="share" size="sm"></co-icon>
        </co-option>
        <co-option value="link">
          Copy link
          <co-icon slot="suffix" name="link" size="sm"></co-icon>
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
`;
