import '@cobalt/components';
import type { CoBanner as CoBannerElement } from '@cobalt/components';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoBanner = createCobaltComponent<CoBannerElement>({
  tagName: 'co-banner',
  events: {},
});
