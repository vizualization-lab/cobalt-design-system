import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  CoButton,
  CoButtonIcon,
  CoCombobox,
  CoForm,
  CoIcon,
  CoInput,
  CoListbox,
  CoOption,
  CoSelect,
  CoTextarea,
} from '@cobalt/angular';
import {
  getEventProps,
  getOptionItems,
  getPlaygroundArgs,
  getPlaygroundArgTypes,
  getSelectedValues,
  type CobaltComponentId,
  type CobaltStoryArgs,
} from '@cobalt/storybook-fixtures';

const moduleMetadata = {
  imports: [
    CoButton,
    CoButtonIcon,
    CoCombobox,
    CoForm,
    CoIcon,
    CoInput,
    CoListbox,
    CoOption,
    CoSelect,
    CoTextarea,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export function createAngularPlaygroundStory(componentId: CobaltComponentId) {
  return {
    args: getPlaygroundArgs(componentId),
    argTypes: getPlaygroundArgTypes(componentId),
    render: (args: CobaltStoryArgs) => renderAngularPlayground(componentId, args),
  };
}

export function renderAngularPlayground(componentId: CobaltComponentId, args: CobaltStoryArgs) {
  return {
    moduleMetadata,
    props: {
      ...args,
      ...getEventProps(componentId, args),
      optionItems: getOptionItems(componentId, args),
      selectedValues: getSelectedValues(args),
    },
    template: getTemplate(componentId),
  };
}

function getTemplate(componentId: CobaltComponentId): string {
  switch (componentId) {
    case 'button':
      return frame(
        'cobalt-row',
        `
          <co-button
            [variant]="variant"
            [size]="size"
            [disabled]="disabled"
            [loading]="loading"
            [type]="type"
            [href]="href"
            [target]="target"
            (coFocus)="onCoFocus($event)"
            (coBlur)="onCoBlur($event)"
          >
            @if (slotPrefix) {
              <co-icon slot="prefix" [name]="slotPrefix" size="sm"></co-icon>
            }
            {{ slotDefault }}
            @if (slotSuffix) {
              <co-icon slot="suffix" [name]="slotSuffix" size="sm"></co-icon>
            }
          </co-button>
        `,
      );
    case 'buttonIcon':
      return frame(
        'cobalt-grid',
        `
          <co-button-icon
            [name]="name"
            [variant]="variant"
            [size]="size"
            [label]="label"
            [labelPosition]="labelPosition"
            [circle]="circle"
            [disabled]="disabled"
            (coFocus)="onCoFocus($event)"
            (coBlur)="onCoBlur($event)"
          ></co-button-icon>
        `,
      );
    case 'icon':
      return frame(
        'cobalt-row',
        `
          <co-icon
            [name]="name"
            [size]="size"
            [fill]="fill"
            [animated]="animated"
            [label]="label"
          ></co-icon>
        `,
      );
    case 'input':
      return frame(
        'cobalt-grid',
        `
          <co-input
            [size]="size"
            [danger]="danger"
            [disabled]="disabled"
            [readOnly]="readOnly"
            [required]="required"
            [label]="label"
            [helpText]="helpText"
            [name]="name"
            [type]="type"
            [placeholder]="placeholder"
            [value]="value"
            [modelValue]="modelValue"
            (coFocus)="onCoFocus($event)"
            (coBlur)="onCoBlur($event)"
            (coInput)="onCoInput($event)"
            (coChange)="onCoChange($event)"
          >
            @if (slotPrefix) {
              <co-icon slot="prefix" [name]="slotPrefix" size="sm"></co-icon>
            }
            @if (slotSuffix) {
              <co-icon slot="suffix" [name]="slotSuffix" size="sm"></co-icon>
            }
            @if (slotFeedback) {
              <span slot="feedback">{{ slotFeedback }}</span>
            }
          </co-input>
        `,
      );
    case 'textarea':
      return frame(
        'cobalt-grid',
        `
          <co-textarea
            [size]="size"
            [resize]="resize"
            [danger]="danger"
            [disabled]="disabled"
            [readOnly]="readOnly"
            [required]="required"
            [label]="label"
            [helpText]="helpText"
            [name]="name"
            [placeholder]="placeholder"
            [value]="value"
            [modelValue]="modelValue"
            [rows]="rows"
            [maxRows]="maxRows"
            [maxLength]="maxLength"
            [minLength]="minLength"
            (coFocus)="onCoFocus($event)"
            (coBlur)="onCoBlur($event)"
            (coInput)="onCoInput($event)"
            (coChange)="onCoChange($event)"
          >
            @if (slotPrefix) {
              <co-icon slot="prefix" [name]="slotPrefix" size="sm"></co-icon>
            }
            @if (slotSuffix) {
              <co-icon slot="suffix" [name]="slotSuffix" size="sm"></co-icon>
            }
            @if (slotFeedback) {
              <span slot="feedback">{{ slotFeedback }}</span>
            }
          </co-textarea>
        `,
      );
    case 'option':
      return frame(
        'cobalt-grid',
        `
          <co-listbox label="Option preview" name="option-preview">
            <co-option
              [value]="value"
              [choiceValue]="choiceValue"
              [checked]="checked"
              [disabled]="disabled"
              [active]="active"
            >
              @if (slotIndicatorIcon) {
                <co-icon slot="indicator-icon" [name]="slotIndicatorIcon" size="sm"></co-icon>
              }
              @if (slotIndicator) {
                <span slot="indicator">{{ slotIndicator }}</span>
              }
              {{ slotDefault }}
            </co-option>
          </co-listbox>
        `,
      );
    case 'listbox':
      return frame(
        'cobalt-grid',
        `
          <co-listbox
            [label]="label"
            [helpText]="helpText"
            [name]="name"
            [disabled]="disabled"
            [required]="required"
            [multipleChoice]="multipleChoice"
            [orientation]="orientation"
            [selectionFollowsFocus]="selectionFollowsFocus"
            [rotateKeyboardNavigation]="rotateKeyboardNavigation"
            [hasNoDefaultSelected]="hasNoDefaultSelected"
            [modelValue]="modelValue"
            (coChange)="onCoChange($event)"
          >
            @if (slotFeedback) {
              <span slot="feedback">{{ slotFeedback }}</span>
            }
            @for (item of optionItems; track item.value) {
              <co-option
                [value]="item.value"
                [checked]="selectedValues.includes(item.value)"
                [disabled]="item.disabled"
              >
                {{ item.label }}
              </co-option>
            }
          </co-listbox>
        `,
      );
    case 'combobox':
      return frame(
        'cobalt-grid',
        `
          <co-combobox
            [size]="size"
            [danger]="danger"
            [disabled]="disabled"
            [readOnly]="readOnly"
            [required]="required"
            [label]="label"
            [helpText]="helpText"
            [name]="name"
            [value]="value"
            [modelValue]="modelValue"
            [autocomplete]="autocomplete"
            [matchMode]="matchMode"
            [showAllOnEmpty]="showAllOnEmpty"
            [selectionFollowsFocus]="selectionFollowsFocus"
            [rotateKeyboardNavigation]="rotateKeyboardNavigation"
            [hasNoDefaultSelected]="hasNoDefaultSelected"
            [multiple]="multiple"
            [multipleChoice]="multipleChoice"
            [allowCustomChoice]="allowCustomChoice"
            [matchError]="matchError"
            [requireOptionMatch]="requireOptionMatch"
            (coFocus)="onCoFocus($event)"
            (coBlur)="onCoBlur($event)"
            (coInput)="onCoInput($event)"
            (coChange)="onCoChange($event)"
          >
            @if (slotPrefix) {
              <co-icon slot="prefix" [name]="slotPrefix" size="sm"></co-icon>
            }
            @if (slotSuffix) {
              <co-icon slot="suffix" [name]="slotSuffix" size="sm"></co-icon>
            }
            @if (slotFeedback) {
              <span slot="feedback">{{ slotFeedback }}</span>
            }
            @for (item of optionItems; track item.value) {
              <co-option
                [value]="item.value"
                [checked]="selectedValues.includes(item.value)"
                [disabled]="item.disabled"
              >
                {{ item.label }}
              </co-option>
            }
          </co-combobox>
        `,
      );
    case 'select':
      return frame(
        'cobalt-grid',
        `
          <co-select
            [size]="size"
            [danger]="danger"
            [disabled]="disabled"
            [readOnly]="readOnly"
            [required]="required"
            [hasNoDefaultSelected]="hasNoDefaultSelected"
            (coFocus)="onCoFocus($event)"
            (coBlur)="onCoBlur($event)"
            (coChange)="onCoChange($event)"
          >
            @if (slotLabel) {
              <span slot="label">{{ slotLabel }}</span>
            }
            @if (slotHelpText) {
              <span slot="help-text">{{ slotHelpText }}</span>
            }
            @if (slotFeedback) {
              <span slot="feedback">{{ slotFeedback }}</span>
            }
            @for (item of optionItems; track item.value) {
              <co-option
                [value]="item.value"
                [checked]="selectedValues.includes(item.value)"
                [disabled]="item.disabled"
              >
                {{ item.label }}
              </co-option>
            }
          </co-select>
        `,
      );
    case 'form':
      return frame(
        'cobalt-grid',
        `
          <co-form
            class="cobalt-panel"
            [disabled]="disabled"
            [label]="label"
            [helpText]="helpText"
            [name]="name"
            (coSubmit)="onCoSubmit($event)"
            (coReset)="onCoReset($event)"
          >
            @if (slotFeedback) {
              <span slot="feedback">{{ slotFeedback }}</span>
            }
            <div class="cobalt-stack">
              <co-input label="Name" name="name" required placeholder="Ada Lovelace"></co-input>
              <co-textarea label="Message" name="message" [rows]="4" placeholder="Write a message">
              </co-textarea>
              <div class="cobalt-form-row">
                <co-button type="submit" variant="primary">Submit</co-button>
                <co-button type="reset" variant="secondary">Reset</co-button>
              </div>
            </div>
          </co-form>
        `,
      );
  }
}

function frame(layoutClass: string, content: string) {
  return `
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <div class="${layoutClass}">
          ${content}
        </div>
      </section>
    </div>
  `;
}
