import '@cobalt/components/select';
import '@cobalt/components/option';

export const title = '<co-select>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Basic</h2>
    <div style="max-width: 320px;">
      <co-select label="Favorite fruit" name="basic-fruit">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
        <co-option value="cherry">Cherry</co-option>
        <co-option value="date">Date</co-option>
      </co-select>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">No Default Selected</h2>
    <div style="max-width: 320px;">
      <co-select label="Choose a color" name="no-default" has-no-default-selected>
        <co-option value="red">Red</co-option>
        <co-option value="green">Green</co-option>
        <co-option value="blue">Blue</co-option>
      </co-select>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Sizes</h2>
    <div style="display: grid; gap: 16px; max-width: 320px;">
      <co-select label="Small" name="size-sm" size="sm">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
      <co-select label="Medium (default)" name="size-md" size="md">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
      <co-select label="Large" name="size-lg" size="lg">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
      <co-select label="Extra large" name="size-xl" size="xl">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">States</h2>
    <div style="display: grid; gap: 16px; max-width: 320px;">
      <co-select label="Disabled" name="disabled-select" disabled>
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
      <co-select label="Danger" name="danger-select" danger>
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
      <co-select label="Required" name="required-select" required>
        <co-option value="apple">Apple</co-option>
        <co-option value="banana">Banana</co-option>
      </co-select>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">With Disabled Options</h2>
    <div style="max-width: 320px;">
      <co-select label="Available items" name="disabled-options">
        <co-option value="apple">Apple</co-option>
        <co-option value="banana" disabled>Banana (sold out)</co-option>
        <co-option value="cherry">Cherry</co-option>
        <co-option value="date" disabled>Date (sold out)</co-option>
      </co-select>
    </div>
  </section>
`;
