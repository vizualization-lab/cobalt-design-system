import '@cobalt/components/nav-separator';
import type { CoNavSeparator as CoNavSeparatorElement } from '@cobalt/components/nav-separator';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoNavSeparator = createCobaltComponent<CoNavSeparatorElement>({
  tagName: 'co-nav-separator',
});
