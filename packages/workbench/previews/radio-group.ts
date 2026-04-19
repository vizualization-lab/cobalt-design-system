import '@cobalt/components/radio-group';
import '@cobalt/components/radio';

export const title = '<co-radio-group>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Basic</h2>
    <div style="max-width: 320px;">
      <co-radio-group label="Favorite fruit" name="basic-fruit">
        <co-radio label="Apple" value="apple"></co-radio>
        <co-radio label="Banana" value="banana"></co-radio>
        <co-radio label="Cherry" value="cherry"></co-radio>
      </co-radio-group>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Pre-selected</h2>
    <div style="max-width: 320px;">
      <co-radio-group label="Default selection" name="preselected">
        <co-radio label="Option A" value="a" checked></co-radio>
        <co-radio label="Option B" value="b"></co-radio>
        <co-radio label="Option C" value="c"></co-radio>
      </co-radio-group>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Disabled</h2>
    <div style="max-width: 320px;">
      <co-radio-group label="Disabled group" name="disabled-group" disabled>
        <co-radio label="Option A" value="a" checked></co-radio>
        <co-radio label="Option B" value="b"></co-radio>
      </co-radio-group>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Disabled Individual</h2>
    <div style="max-width: 320px;">
      <co-radio-group label="Mixed states" name="mixed-disabled">
        <co-radio label="Available" value="a"></co-radio>
        <co-radio label="Sold out" value="b" disabled></co-radio>
        <co-radio label="Available" value="c"></co-radio>
      </co-radio-group>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Required</h2>
    <div style="max-width: 320px;">
      <co-radio-group label="Required selection" name="required-group" required>
        <co-radio label="Yes" value="yes"></co-radio>
        <co-radio label="No" value="no"></co-radio>
      </co-radio-group>
    </div>
  </section>
`;
