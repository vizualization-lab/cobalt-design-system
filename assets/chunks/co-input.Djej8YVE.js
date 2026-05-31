import{i as f,b as s,A as d,t as m}from"./custom-element.CPWKJEuj.js";import{n as r}from"./property.C8dt_fM1.js";import{C as v,e as g,c as _,a as b,b as x,i as c,d as y,f as L}from"./validation.Cw6SvbJ9.js";import{L as z}from"./LionInput.Ctf-0h0T.js";import"./NativeTextFieldMixin.BGs3xKOY.js";import"./ValidateMixin.BgFZvP2E.js";import"./DisabledMixin.DvWrDoIe.js";import"./framework.CyQWWwrP.js";import"./directive.CJw_OlP2.js";import"./InteractionStateMixin.B0Oj5qlw.js";import"./FormatMixin.DzrVvmrI.js";const M=f`
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
    align-items: center;
    inline-size: 100%;
    min-block-size: var(--co-control-height-md);
    gap: var(--co-space-gap-sm);
    padding-inline: var(--co-space-inset-md);
    border: var(--co-border-width-default) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius-interactive);
    background: var(--co-color-surface-static-default);
    color: var(--co-color-text-default);
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .input-group__container {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-static-raised);
  }

  :host(:focus-within) .input-group__container {
    border-color: var(--co-color-border-focus);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-focus);
  }

  :host([danger]) .input-group__container,
  :host([has-feedback-for~='error']) .input-group__container,
  :host([shows-feedback-for~='error']) .input-group__container {
    border-color: var(--co-color-border-danger);
  }

  :host([danger]:focus-within) .input-group__container,
  :host([has-feedback-for~='error']:focus-within) .input-group__container,
  :host([shows-feedback-for~='error']:focus-within) .input-group__container {
    border-color: var(--co-color-border-danger);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-danger);
  }

  :host([readonly]) .input-group__container {
    background: var(--co-color-surface-static-sunken);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) .input-group__container {
    opacity: var(--co-opacity-disabled);
  }

  :host([size='sm']) {
    font-size: var(--co-font-size-small);
  }

  :host([size='sm']) .input-group__container {
    min-block-size: var(--co-control-height-sm);
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-h6);
  }

  :host([size='lg']) .input-group__container {
    min-block-size: var(--co-control-height-lg);
    padding-inline: var(--co-space-inset-lg);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
  }

  :host([size='xl']) .input-group__container {
    min-block-size: var(--co-control-height-xl);
    padding-inline: var(--co-space-inset-xl);
  }

  .input-group__input {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    min-inline-size: 0;
  }

  .input-group__prefix,
  .input-group__suffix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    color: var(--co-color-text-secondary);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal);
  }

  slot[name='input']::slotted(input) {
    display: block;
    inline-size: 100%;
    min-inline-size: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: inherit;
  }

  slot[name='input']::slotted(input:disabled) {
    cursor: not-allowed;
  }

  slot[name='input']::slotted(input:read-only) {
    cursor: default;
  }
`;var o=function(l,e,a,t){var p=arguments.length,n=p<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,a):t,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,e,a,t);else for(var h=l.length-1;h>=0;h--)(u=l[h])&&(n=(p<3?u(n):p>3?u(e,a,n):u(e,a))||n);return p>3&&n&&Object.defineProperty(e,a,n),n};let i=class extends z{constructor(){super(...arguments),this.size="md",this.danger=!1,this.required=!1,this.requiredMessage="",this.emailMessage="",this.pattern="",this.patternMessage="",this.minLengthMessage="",this.maxLengthMessage="",this._validation=new v(this),this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-input")},this._handleNativeChange=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,M]}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}firstUpdated(e){g(this),super.firstUpdated(e),this._syncNativeLengthAttributes(),this._syncValidation(!0,!0)}updated(e){g(this),super.updated(e),(e.has("maxLength")||e.has("minLength"))&&this._syncNativeLengthAttributes(),this._validationPropsChanged(e)&&this._syncValidation(e.has("validators"),this._validationRulesChanged(e))}_labelTemplate(){return s`
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
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?s`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:d}_inputGroupInputTemplate(){return s`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot==="suffix")?s`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:d}_feedbackTemplate(){return s`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_dispatchValueEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}_syncValidation(e=!1,a=!1){this._validation.sync(()=>{const t=[];return this.required&&t.push(_(this.requiredMessage,"Enter a value.")),this.type==="email"&&t.push(b(this.emailMessage)),this.pattern&&t.push(x(this.pattern,this.patternMessage)),c(this.minLength)&&t.push(y(this.minLength,this.minLengthMessage)),c(this.maxLength)&&t.push(L(this.maxLength,this.maxLengthMessage)),t},e,a)}_validationPropsChanged(e){return["validators","required","requiredMessage","emailMessage","type","pattern","patternMessage","minLength","minLengthMessage","maxLength","maxLengthMessage"].some(t=>e.has(t))}_validationRulesChanged(e){return["required","requiredMessage","emailMessage","type","pattern","patternMessage","minLength","minLengthMessage","maxLength","maxLengthMessage"].some(t=>e.has(t))}_syncNativeLengthAttributes(){const e=this._inputNode;e&&(c(this.maxLength)?e.maxLength=this.maxLength:e.removeAttribute("maxlength"),c(this.minLength)?e.minLength=this.minLength:e.removeAttribute("minlength"))}};o([r({reflect:!0})],i.prototype,"size",void 0);o([r({type:Boolean,reflect:!0})],i.prototype,"danger",void 0);o([r({type:Boolean,reflect:!0})],i.prototype,"required",void 0);o([r({attribute:"required-message"})],i.prototype,"requiredMessage",void 0);o([r({attribute:"email-message"})],i.prototype,"emailMessage",void 0);o([r({reflect:!0})],i.prototype,"pattern",void 0);o([r({attribute:"pattern-message"})],i.prototype,"patternMessage",void 0);o([r({type:Number,attribute:"maxlength",reflect:!0})],i.prototype,"maxLength",void 0);o([r({type:Number,attribute:"minlength",reflect:!0})],i.prototype,"minLength",void 0);o([r({attribute:"minlength-message"})],i.prototype,"minLengthMessage",void 0);o([r({attribute:"maxlength-message"})],i.prototype,"maxLengthMessage",void 0);i=o([m("co-input")],i);export{i as CoInput};
