import React from 'react';
import { createComponent } from '@lit/react';
import { CoIcon as CoIconElement } from '@cobalt/components/icon';

export const CoIcon = createComponent({
  tagName: 'co-icon',
  elementClass: CoIconElement,
  react: React,
});
