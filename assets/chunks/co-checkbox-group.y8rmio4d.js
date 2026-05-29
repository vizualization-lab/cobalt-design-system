import{a as h,i as u,b as f,t as m}from"./custom-element.CPWKJEuj.js";import{n as p}from"./property.C8dt_fM1.js";import{C as v,e as d,c as b}from"./validation.Cw6SvbJ9.js";import{CoCheckbox as J}from"./co-checkbox.DBt7sol5.js";import{CoCheckboxIndeterminate as N}from"./co-checkbox-indeterminate.98tA0jG-.js";import{C as g}from"./ChoiceGroupMixin.B1Ud5jMX.js";import{F as y}from"./FormGroupMixin.DrzIHXYW.js";import"./keyboard-focus.Dc94gR5a.js";import"./co-icon.2cZI5jJK.js";import"./directive.CJw_OlP2.js";import"./theme.CR1UbzdT.js";import"./framework.NLW_VnUw.js";import"./LionCheckbox.D_FFRCXW.js";import"./ChoiceInputMixin.DqTAPs8j.js";import"./FormatMixin.Bm6YBGN8.js";import"./ValidateMixin.ByFz6SJU.js";import"./DisabledMixin.DvWrDoIe.js";import"./LionInput.BUEXLhCS.js";import"./NativeTextFieldMixin.DYzniwoD.js";import"./InteractionStateMixin.C-kGim9-.js";import"./FormRegistrarMixin.DLhR_Dv0.js";class _ extends g(y(h)){constructor(){super(),this.multipleChoice=!0}}const x=u`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    color: var(--co-color-text-default);
  }

  .form-field__label {
    color: var(--co-color-text-default);
    font-size: var(--co-typography-label-size);
    font-weight: var(--co-typography-label-weight);
    line-height: var(--co-typography-label-line-height);
    margin-block-end: var(--co-space-1);
  }

  .form-field__help-text {
    color: var(--co-color-text-secondary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .checkbox-group__options {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
    padding-block: var(--co-space-2);
  }

  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    pointer-events: none;
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal);
  }
`;var n=function(r,e,o,a){var i=arguments.length,t=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,o):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,o,a);else for(var c=r.length-1;c>=0;c--)(l=r[c])&&(t=(i<3?l(t):i>3?l(e,o,t):l(e,o))||t);return i>3&&t&&Object.defineProperty(e,o,t),t};let s=class extends _{constructor(){super(...arguments),this.required=!1,this.requiredMessage="",this._validation=new v(this),this._handleModelValueChanged=e=>{var a;const o=e;o.target!==this||(a=o.detail)!=null&&a.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,x]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){d(this),super.firstUpdated(e),this._syncValidation(!0,!0)}updated(e){d(this),super.updated(e),(e.has("validators")||e.has("required")||e.has("requiredMessage"))&&this._syncValidation(e.has("validators"),e.has("required")||e.has("requiredMessage"))}render(){return f`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
      <div part="group" class="checkbox-group__options" role="group">
        <slot></slot>
      </div>
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_syncValidation(e=!1,o=!1){this._validation.sync(()=>this.required?[b(this.requiredMessage,"Select at least one option.")]:[],e,o)}};n([p({type:Boolean,reflect:!0})],s.prototype,"required",void 0);n([p({attribute:"required-message"})],s.prototype,"requiredMessage",void 0);s=n([m("co-checkbox-group")],s);export{J as CoCheckbox,s as CoCheckboxGroup,N as CoCheckboxIndeterminate};
