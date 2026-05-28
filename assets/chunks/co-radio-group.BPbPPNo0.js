import{a as u,i as f,b as h,t as m}from"./custom-element.CPWKJEuj.js";import{n as p}from"./property.C8dt_fM1.js";import{C as v,e as c,c as b}from"./validation.Cw6SvbJ9.js";import{CoRadio as H}from"./co-radio.D-MJNWLM.js";import{C as g}from"./ChoiceGroupMixin.E0JmJoiM.js";import{F as y}from"./FormGroupMixin.BidbapQZ.js";import"./keyboard-focus.Dc94gR5a.js";import"./co-icon.Datuo8b1.js";import"./directive.CJw_OlP2.js";import"./theme.BA-T5Vh7.js";import"./framework.BeCEba4t.js";import"./ChoiceInputMixin.CbUk4mvW.js";import"./FormatMixin.CHISbfed.js";import"./ValidateMixin.HhPyzEJ4.js";import"./DisabledMixin.DvWrDoIe.js";import"./LionInput.uwpCnjZk.js";import"./NativeTextFieldMixin.2fVFv6b8.js";import"./InteractionStateMixin.BYt4bZIt.js";import"./FormRegistrarMixin.BodkdZoe.js";class _ extends g(y(u)){connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup")}resetGroup(){let e;this.formElements.forEach(t=>{typeof t.resetGroup=="function"?t.resetGroup():typeof t.reset=="function"&&(t.reset(),t.checked&&(e=t.choiceValue))}),this.modelValue=e,this.resetInteractionState()}}const C=f`
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

  .radio-group__options {
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
`;var d=function(r,e,t,a){var i=arguments.length,o=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,a);else for(var n=r.length-1;n>=0;n--)(l=r[n])&&(o=(i<3?l(o):i>3?l(e,t,o):l(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o};let s=class extends _{constructor(){super(...arguments),this.required=!1,this.requiredMessage="",this._validation=new v(this),this._handleModelValueChanged=e=>{var a;const t=e;t.target!==this||(a=t.detail)!=null&&a.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,C]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){c(this),super.firstUpdated(e),this._syncValidation(!0,!0)}updated(e){c(this),super.updated(e),(e.has("validators")||e.has("required")||e.has("requiredMessage"))&&this._syncValidation(e.has("validators"),e.has("required")||e.has("requiredMessage"))}render(){return h`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
      <div part="group" class="radio-group__options" role="radiogroup">
        <slot></slot>
      </div>
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_syncValidation(e=!1,t=!1){this._validation.sync(()=>this.required?[b(this.requiredMessage,"Select an option.")]:[],e,t)}};d([p({type:Boolean,reflect:!0})],s.prototype,"required",void 0);d([p({attribute:"required-message"})],s.prototype,"requiredMessage",void 0);s=d([m("co-radio-group")],s);export{H as CoRadio,s as CoRadioGroup};
