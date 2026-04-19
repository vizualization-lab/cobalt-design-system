import '@cobalt/components/checkbox-group';
import '@cobalt/components/checkbox';

export const title = '<co-checkbox-group>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Basic</h2>
    <div style="max-width: 320px;">
      <co-checkbox-group label="Toppings" name="basic-toppings">
        <co-checkbox label="Cheese" value="cheese"></co-checkbox>
        <co-checkbox label="Pepperoni" value="pepperoni"></co-checkbox>
        <co-checkbox label="Mushrooms" value="mushrooms"></co-checkbox>
      </co-checkbox-group>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Pre-selected</h2>
    <div style="max-width: 320px;">
      <co-checkbox-group label="Preferences" name="preselected">
        <co-checkbox label="Email notifications" value="email" checked></co-checkbox>
        <co-checkbox label="SMS notifications" value="sms"></co-checkbox>
        <co-checkbox label="Push notifications" value="push" checked></co-checkbox>
      </co-checkbox-group>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Disabled</h2>
    <div style="max-width: 320px;">
      <co-checkbox-group label="Disabled group" name="disabled-group" disabled>
        <co-checkbox label="Option A" value="a" checked></co-checkbox>
        <co-checkbox label="Option B" value="b"></co-checkbox>
      </co-checkbox-group>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Disabled Individual</h2>
    <div style="max-width: 320px;">
      <co-checkbox-group label="Mixed states" name="mixed-disabled">
        <co-checkbox label="Available" value="a"></co-checkbox>
        <co-checkbox label="Unavailable" value="b" disabled></co-checkbox>
        <co-checkbox label="Available" value="c"></co-checkbox>
      </co-checkbox-group>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Required</h2>
    <div style="max-width: 320px;">
      <co-checkbox-group label="Accept terms" name="required-group" required>
        <co-checkbox label="I agree to the terms" value="terms"></co-checkbox>
        <co-checkbox label="I agree to the privacy policy" value="privacy"></co-checkbox>
      </co-checkbox-group>
    </div>
  </section>
`;
