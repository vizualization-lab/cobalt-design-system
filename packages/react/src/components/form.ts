import React from 'react';
import { createComponent } from '@lit/react';
import { CoForm as CoFormElement } from '@cobalt/components/form';

export const CoForm = createComponent({
  tagName: 'co-form',
  elementClass: CoFormElement,
  react: React,
  events: {
    onCoSubmit: 'co-submit',
    onCoReset: 'co-reset',
  },
});
