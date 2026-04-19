import '@cobalt/components/radio';
import type { CoRadio as CoRadioElement } from '@cobalt/components/radio';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoRadio = createCobaltComponent<CoRadioElement>({
  tagName: 'co-radio',
});
