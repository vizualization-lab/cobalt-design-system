import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  CoAppShell,
  CoBanner,
  CoButton,
  CoButtonIcon,
  CoCard,
  CoCheckbox,
  CoCheckboxGroup,
  CoCheckboxIndeterminate,
  CoCombobox,
  CoForm,
  CoIcon,
  CoInput,
  CoInputPill,
  CoLabel,
  CoListbox,
  CoNavDrawer,
  CoNavDrawerItem,
  CoNavHeaderBar,
  CoNavRailBar,
  CoNavRailItem,
  CoNavSeparator,
  CoOption,
  CoRadio,
  CoRadioGroup,
  CoSelect,
  CoTextarea,
} from '@cobalt/angular';
import {
  getWrapperStoryArgs,
  getWrapperStoryArgTypes,
  getWrapperStoryEventProps,
  getWrapperStoryOptionItems,
  getWrapperStoryScenarioArgs,
  getWrapperStorySelectedValues,
  type WrapperStoryArgs,
  type WrapperStoryComponentId,
} from '@cobalt/storybook-fixtures';

const moduleMetadata = {
  imports: [
    CoAppShell,
    CoBanner,
    CoButton,
    CoButtonIcon,
    CoCard,
    CoCheckbox,
    CoCheckboxGroup,
    CoCheckboxIndeterminate,
    CoCombobox,
    CoForm,
    CoIcon,
    CoInput,
    CoInputPill,
    CoLabel,
    CoListbox,
    CoNavDrawer,
    CoNavDrawerItem,
    CoNavHeaderBar,
    CoNavRailBar,
    CoNavRailItem,
    CoNavSeparator,
    CoOption,
    CoRadio,
    CoRadioGroup,
    CoSelect,
    CoTextarea,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export function createAngularPlaygroundStory(componentId: WrapperStoryComponentId) {
  return {
    args: getWrapperStoryArgs(componentId),
    argTypes: getWrapperStoryArgTypes(componentId),
    parameters: {
      cobaltSource: {
        componentId,
      },
    },
    render: (args: WrapperStoryArgs) => renderAngularPlayground(componentId, args),
  };
}

export function createAngularScenarioStory(
  componentId: WrapperStoryComponentId,
  scenarioId: string,
) {
  return {
    args: getWrapperStoryScenarioArgs(componentId, scenarioId),
    parameters: {
      controls: { disable: true },
      cobaltSource: {
        componentId,
        scenarioId,
      },
    },
    render: (args: WrapperStoryArgs) => renderAngularPlayground(componentId, args),
  };
}

export function renderAngularPlayground(
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
) {
  return {
    moduleMetadata,
    props: {
      ...args,
      ...getWrapperStoryEventProps(componentId, args),
      optionItems: getWrapperStoryOptionItems(componentId, args),
      selectedValues: getWrapperStorySelectedValues(args),
    },
    template: getTemplate(componentId),
  };
}

function getTemplate(componentId: WrapperStoryComponentId): string {
  switch (componentId) {
    case 'appShell':
      return frame(
        'cobalt-grid',
        `
          <co-app-shell
            style="block-size: 620px;"
            [drawerOpen]="drawerOpen"
            [railWidth]="railWidth"
            [drawerWidth]="drawerWidth"
            (coDrawerOpen)="onCoDrawerOpen($event)"
            (coDrawerClose)="onCoDrawerClose($event)"
            (coDrawerToggle)="onCoDrawerToggle($event)"
          >
            <co-banner slot="banner">
              @if (slotBanner) {
                <span slot="title">{{ slotBanner }}</span>
              }
              Previewing the responsive application frame.
            </co-banner>
            <co-nav-header-bar slot="topnav" label="Application header">
              @if (slotTopnav) {
                <span slot="logo">{{ slotTopnav }}</span>
              }
              <co-input-pill variant="search" placeholder="Search"></co-input-pill>
            </co-nav-header-bar>
            <co-nav-rail-bar slot="rail" [value]="selectedValues[0]" label="Primary navigation">
              @for (item of optionItems; track item.value) {
                <co-nav-rail-item
                  [value]="item.value"
                  [icon]="item.icon || 'home'"
                  [selected]="selectedValues.includes(item.value)"
                  [disabled]="item.disabled"
                >
                  {{ item.label }}
                </co-nav-rail-item>
              }
            </co-nav-rail-bar>
            <co-nav-drawer slot="drawer" [value]="selectedValues[0]" label="Primary navigation">
              @for (item of optionItems; track item.value) {
                <co-nav-drawer-item
                  [value]="item.value"
                  [icon]="item.icon || 'home'"
                  [selected]="selectedValues.includes(item.value)"
                  [disabled]="item.disabled"
                >
                  {{ item.label }}
                </co-nav-drawer-item>
              }
              <co-nav-separator></co-nav-separator>
              <co-nav-drawer-item value="help" icon="info">Help</co-nav-drawer-item>
            </co-nav-drawer>
            <co-card slot="body" label="Dashboard content">
              @if (slotBody) {
                <span slot="header">{{ slotBody }}</span>
              }
              <div class="cobalt-stack">
                Use the shell to compose persistent navigation, responsive drawer behavior, and page content.
              </div>
            </co-card>
            @if (slotFooter) {
              <span slot="footer">{{ slotFooter }}</span>
            }
          </co-app-shell>
        `,
      );
    case 'banner':
      return frame(
        'cobalt-grid',
        `
          <co-banner [label]="label">
            @if (slotTitle) {
              <span slot="title">{{ slotTitle }}</span>
            }
            {{ slotDefault }}
          </co-banner>
        `,
      );
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
    case 'card':
      return frame(
        'cobalt-grid',
        `
          <co-card class="cobalt-panel" [label]="label">
            @if (slotHeader) {
              <span slot="header">{{ slotHeader }}</span>
            }
            {{ slotDefault }}
            @if (slotFooter) {
              <span slot="footer">{{ slotFooter }}</span>
            }
          </co-card>
        `,
      );
    case 'checkbox':
      return frame(
        'cobalt-grid',
        `
          <co-checkbox [value]="value" [checked]="checked" [disabled]="disabled">
            {{ slotDefault }}
          </co-checkbox>
        `,
      );
    case 'checkboxGroup':
      return frame(
        'cobalt-grid',
        `
          <co-checkbox-group
            [name]="name"
            [disabled]="disabled"
            [required]="required"
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
              <co-checkbox
                [value]="item.value"
                [checked]="selectedValues.includes(item.value)"
                [disabled]="item.disabled"
              >
                {{ item.label }}
              </co-checkbox>
            }
          </co-checkbox-group>
        `,
      );
    case 'checkboxIndeterminate':
      return frame(
        'cobalt-grid',
        `
          <co-checkbox-indeterminate
            [value]="value"
            [checked]="checked"
            [indeterminate]="indeterminate"
            [mixedState]="mixedState"
            [disabled]="disabled"
          >
            @if (slotLabel) {
              <span slot="label">{{ slotLabel }}</span>
            }
            @for (item of optionItems; track item.value) {
              <co-checkbox
                [value]="item.value"
                [checked]="selectedValues.includes(item.value)"
                [disabled]="item.disabled"
              >
                {{ item.label }}
              </co-checkbox>
            }
          </co-checkbox-indeterminate>
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
    case 'inputPill':
      return frame(
        'cobalt-grid',
        `
          <co-input-pill
            [variant]="variant"
            [actionIcon]="actionIcon"
            [prefixIcon]="prefixIcon"
            [size]="size"
            [disabled]="disabled"
            [name]="name"
            [type]="type"
            [placeholder]="placeholder"
            [value]="value"
            [modelValue]="modelValue"
            (coAction)="onCoAction($event)"
            (coFocus)="onCoFocus($event)"
            (coBlur)="onCoBlur($event)"
          >
            @if (slotPrefix) {
              <co-icon slot="prefix" [name]="slotPrefix" size="sm"></co-icon>
            }
            @if (slotSuffix) {
              <co-icon slot="suffix" [name]="slotSuffix" size="sm"></co-icon>
            }
          </co-input-pill>
        `,
      );
    case 'label':
      return frame(
        'cobalt-grid',
        `
          <co-label
            [htmlFor]="htmlFor"
            [required]="required"
            [optional]="optional"
            [optionalLabel]="optionalLabel"
          >
            @if (slotPrefix) {
              <co-icon slot="prefix" [name]="slotPrefix" size="sm"></co-icon>
            }
            {{ slotDefault }}
            @if (slotSuffix) {
              <co-icon slot="suffix" [name]="slotSuffix" size="sm"></co-icon>
            }
          </co-label>
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
    case 'navDrawer':
      return frame(
        'cobalt-grid',
        `
          <co-nav-drawer
            [open]="open"
            [value]="value"
            [label]="label"
            (coChange)="onCoChange($event)"
          >
            @for (item of optionItems; track item.value) {
              <co-nav-drawer-item
                [value]="item.value"
                [icon]="item.icon || 'home'"
                [selected]="selectedValues.includes(item.value)"
                [disabled]="item.disabled"
              >
                {{ item.label }}
              </co-nav-drawer-item>
            }
            <co-nav-separator></co-nav-separator>
            <co-nav-drawer-item value="help" icon="info">Help</co-nav-drawer-item>
          </co-nav-drawer>
        `,
      );
    case 'navDrawerItem':
      return frame(
        'cobalt-grid',
        `
          <co-nav-drawer label="Drawer item preview">
            <co-nav-drawer-item
              [value]="value"
              [icon]="icon"
              [href]="href"
              [selected]="selected"
              [disabled]="disabled"
            >
              @if (slotPrefix) {
                <co-icon slot="prefix" [name]="slotPrefix" size="sm"></co-icon>
              }
              {{ slotDefault }}
            </co-nav-drawer-item>
          </co-nav-drawer>
        `,
      );
    case 'navHeaderBar':
      return frame(
        'cobalt-grid',
        `
          <co-nav-header-bar [label]="label">
            @if (slotLogo) {
              <span slot="logo">{{ slotLogo }}</span>
            }
            <div class="cobalt-form-row">
              <co-button variant="ghost" size="sm">Overview</co-button>
              <co-button variant="ghost" size="sm">Reports</co-button>
              <co-button variant="ghost" size="sm">Settings</co-button>
            </div>
            @if (slotAvatar) {
              <span slot="avatar">{{ slotAvatar }}</span>
            }
          </co-nav-header-bar>
        `,
      );
    case 'navRailBar':
      return frame(
        'cobalt-grid',
        `
          <co-nav-rail-bar [value]="value" [label]="label" (coChange)="onCoChange($event)">
            @for (item of optionItems; track item.value) {
              <co-nav-rail-item
                [value]="item.value"
                [icon]="item.icon || 'home'"
                [selected]="selectedValues.includes(item.value)"
                [disabled]="item.disabled"
              >
                {{ item.label }}
              </co-nav-rail-item>
            }
          </co-nav-rail-bar>
        `,
      );
    case 'navRailItem':
      return frame(
        'cobalt-grid',
        `
          <co-nav-rail-bar label="Rail item preview">
            <co-nav-rail-item
              [value]="value"
              [icon]="icon"
              [href]="href"
              [target]="target"
              [label]="label"
              [selected]="selected"
              [disabled]="disabled"
            >
              @if (slotIcon) {
                <co-icon slot="icon" [name]="slotIcon" size="sm"></co-icon>
              }
              {{ slotDefault }}
            </co-nav-rail-item>
          </co-nav-rail-bar>
        `,
      );
    case 'navSeparator':
      return frame(
        'cobalt-grid',
        `
          <co-nav-drawer label="Separator preview">
            <co-nav-drawer-item value="overview" icon="home" [selected]="true">Overview</co-nav-drawer-item>
            <co-nav-separator></co-nav-separator>
            <co-nav-drawer-item value="settings" icon="settings">Settings</co-nav-drawer-item>
          </co-nav-drawer>
        `,
      );
    case 'radio':
      return frame(
        'cobalt-grid',
        `
          <co-radio [value]="value" [checked]="checked" [disabled]="disabled">
            {{ slotDefault }}
          </co-radio>
        `,
      );
    case 'radioGroup':
      return frame(
        'cobalt-grid',
        `
          <co-radio-group
            [name]="name"
            [disabled]="disabled"
            [required]="required"
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
              <co-radio
                [value]="item.value"
                [checked]="selectedValues.includes(item.value)"
                [disabled]="item.disabled"
              >
                {{ item.label }}
              </co-radio>
            }
          </co-radio-group>
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
