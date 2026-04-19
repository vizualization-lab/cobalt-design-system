import '@cobalt/components/radio-group';
import type { CoRadioGroup as CoRadioGroupElement } from '@cobalt/components/radio-group';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoRadioGroup = createCobaltComponent<CoRadioGroupElement>({
  tagName: 'co-radio-group',
  events: {
    onCoChange: 'co-change',
  },
});
