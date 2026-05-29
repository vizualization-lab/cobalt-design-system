import{i as h,b as s,A as u,t as b}from"./custom-element.CPWKJEuj.js";import{n as l}from"./property.C8dt_fM1.js";import{C as m,e as f,c as v}from"./validation.Cw6SvbJ9.js";import{CoOption as O}from"./co-option.HChcrZW7.js";import{L as g}from"./LionListbox.WF5ysjUN.js";import"./co-icon.2cZI5jJK.js";import"./directive.CJw_OlP2.js";import"./theme.CR1UbzdT.js";import"./framework.NLW_VnUw.js";import"./DisabledMixin.DvWrDoIe.js";import"./ChoiceInputMixin.DqTAPs8j.js";import"./FormatMixin.Bm6YBGN8.js";import"./ValidateMixin.ByFz6SJU.js";import"./ChoiceGroupMixin.B1Ud5jMX.js";import"./InteractionStateMixin.C-kGim9-.js";import"./FormRegistrarMixin.DLhR_Dv0.js";const y=h`
  :host {
    display: block;
    box-sizing: border-box;
    inline-size: 100%;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    font-weight: var(--co-font-weight-regular);
    line-height: var(--co-font-line-height-normal);
    color: var(--co-color-text-default);
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  .form-field__group-one {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
    margin-block-end: var(--co-space-1);
  }

  .form-field__label {
    color: var(--co-color-text-default);
    font-size: var(--co-typography-label-size);
    font-weight: var(--co-typography-label-weight);
    line-height: var(--co-typography-label-line-height);
  }

  .form-field__help-text {
    color: var(--co-color-text-secondary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .form-field__group-two {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
  }

  .input-group {
    display: flex;
    align-items: stretch;
    inline-size: 100%;
  }

  .input-group__container {
    display: flex;
    inline-size: 100%;
  }

  .input-group__input {
    display: flex;
    inline-size: 100%;
    min-inline-size: 0;
  }

  :host([orientation='horizontal']) .input-group__input {
    inline-size: auto;
  }

  slot[name='input']::slotted([role='listbox']) {
    display: grid;
    inline-size: 100%;
    max-block-size: 18rem;
    overflow: auto;
    gap: var(--co-space-1);
    padding: var(--co-space-1);
    border: var(--co-border-width-default) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius-interactive);
    background: var(--co-color-surface-static-default);
    color: var(--co-color-text-default);
    outline: 0;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host([orientation='horizontal']) slot[name='input']::slotted([role='listbox']) {
    display: flex;
    inline-size: auto;
    flex-wrap: wrap;
  }

  :host(:hover:not([disabled])) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-static-raised);
  }

  :host(:focus-within) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-focus);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-focus);
  }

  :host([has-feedback-for~='error']) slot[name='input']::slotted([role='listbox']),
  :host([shows-feedback-for~='error']) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-danger);
  }

  :host([has-feedback-for~='error']:focus-within) slot[name='input']::slotted([role='listbox']),
  :host([shows-feedback-for~='error']:focus-within) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-danger);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-danger);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) slot[name='input']::slotted([role='listbox']) {
    opacity: var(--co-opacity-disabled);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal);
  }
`;var i=function(n,e,o,a){var c=arguments.length,r=c<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,o):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,o,a);else for(var p=n.length-1;p>=0;p--)(d=n[p])&&(r=(c<3?d(r):c>3?d(e,o,r):d(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};let t=class extends g{constructor(){super(...arguments),this.orientation="vertical",this.selectionFollowsFocus=!1,this.rotateKeyboardNavigation=!1,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.required=!1,this.requiredMessage="",this._validation=new m(this),this._handleModelValueChanged=e=>{var a;const o=e;o.target!==this||(a=o.detail)!=null&&a.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,y]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){f(this),super.firstUpdated(e),this._syncValidation(!0,!0)}updated(e){f(this),super.updated(e),(e.has("validators")||e.has("required")||e.has("requiredMessage"))&&this._syncValidation(e.has("validators"),e.has("required")||e.has("requiredMessage"))}_labelTemplate(){return s`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return s`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return s`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">${this._inputGroupInputTemplate()}</div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return u}_inputGroupInputTemplate(){return s`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
        <slot id="options-outlet"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return u}_feedbackTemplate(){return s`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_syncValidation(e=!1,o=!1){this._validation.sync(()=>this.required?[v(this.requiredMessage,"Select an option.")]:[],e,o)}};i([l({reflect:!0})],t.prototype,"orientation",void 0);i([l({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],t.prototype,"selectionFollowsFocus",void 0);i([l({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],t.prototype,"rotateKeyboardNavigation",void 0);i([l({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],t.prototype,"hasNoDefaultSelected",void 0);i([l({type:Boolean,attribute:"multiple-choice",reflect:!0})],t.prototype,"multipleChoice",void 0);i([l({type:Boolean,reflect:!0})],t.prototype,"required",void 0);i([l({attribute:"required-message"})],t.prototype,"requiredMessage",void 0);t=i([b("co-listbox")],t);export{t as CoListbox,O as CoOption};
