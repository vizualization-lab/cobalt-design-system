import{i as _,b as n,A as f,t as b}from"./custom-element.CPWKJEuj.js";import{n as a}from"./property.C8dt_fM1.js";import{C as x,e as v,c as y,f as L,a as z,i as h,b as I,d as w}from"./validation.BcqnsSST.js";import{N as M,L as k}from"./NativeTextFieldMixin.CPsQBL23.js";import"./co-icon.8VdRc8Ut.js";import"./co-button-icon.BzQrOe1E.js";class C extends M(k){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("input"),t=this.getAttribute("value");return t&&e.setAttribute("value",t),e}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type="text",this.placeholder=""}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="readOnly"&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has("type")&&(this._inputNode.type=this.type),e.has("placeholder")&&(this._inputNode.placeholder=this.placeholder),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}}const N=_`
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
`;var s=function(l,e,t,i){var u=arguments.length,o=u<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,t,i);else for(var c=l.length-1;c>=0;c--)(p=l[c])&&(o=(u<3?p(o):u>3?p(e,t,o):p(e,t))||o);return u>3&&o&&Object.defineProperty(e,t,o),o};let r=class extends C{constructor(){super(...arguments),this.size="md",this.danger=!1,this.required=!1,this.requiredMessage="",this.emailMessage="",this.pattern="",this.patternMessage="",this.minLengthMessage="",this.maxLengthMessage="",this._validation=new x(this),this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-input")},this._handleNativeChange=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,N]}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}firstUpdated(e){v(this),super.firstUpdated(e),this._syncNativeLengthAttributes(),this._syncValidation(!0,!0)}updated(e){v(this),super.updated(e),(e.has("maxLength")||e.has("minLength"))&&this._syncNativeLengthAttributes(),this._validationPropsChanged(e)&&this._syncValidation(e.has("validators"),this._validationRulesChanged(e))}_labelTemplate(){return n`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return n`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return n`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?n`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:f}_inputGroupInputTemplate(){return n`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot==="suffix")?n`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:f}_feedbackTemplate(){return n`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_dispatchValueEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}_syncValidation(e=!1,t=!1){this._validation.sync(()=>{const i=[];return this.required&&i.push(y(this.requiredMessage,"Enter a value.")),this.type==="email"&&i.push(L(this.emailMessage)),this.pattern&&i.push(z(this.pattern,this.patternMessage)),h(this.minLength)&&i.push(I(this.minLength,this.minLengthMessage)),h(this.maxLength)&&i.push(w(this.maxLength,this.maxLengthMessage)),i},e,t)}_validationPropsChanged(e){return["validators","required","requiredMessage","emailMessage","type","pattern","patternMessage","minLength","minLengthMessage","maxLength","maxLengthMessage"].some(i=>e.has(i))}_validationRulesChanged(e){return["required","requiredMessage","emailMessage","type","pattern","patternMessage","minLength","minLengthMessage","maxLength","maxLengthMessage"].some(i=>e.has(i))}_syncNativeLengthAttributes(){const e=this._inputNode;e&&(h(this.maxLength)?e.maxLength=this.maxLength:e.removeAttribute("maxlength"),h(this.minLength)?e.minLength=this.minLength:e.removeAttribute("minlength"))}};s([a({reflect:!0})],r.prototype,"size",void 0);s([a({type:Boolean,reflect:!0})],r.prototype,"danger",void 0);s([a({type:Boolean,reflect:!0})],r.prototype,"required",void 0);s([a({attribute:"required-message"})],r.prototype,"requiredMessage",void 0);s([a({attribute:"email-message"})],r.prototype,"emailMessage",void 0);s([a({reflect:!0})],r.prototype,"pattern",void 0);s([a({attribute:"pattern-message"})],r.prototype,"patternMessage",void 0);s([a({type:Number,attribute:"maxlength",reflect:!0})],r.prototype,"maxLength",void 0);s([a({type:Number,attribute:"minlength",reflect:!0})],r.prototype,"minLength",void 0);s([a({attribute:"minlength-message"})],r.prototype,"minLengthMessage",void 0);s([a({attribute:"maxlength-message"})],r.prototype,"maxLengthMessage",void 0);r=s([b("co-input")],r);const E=_`
  /* ── Input Pill — pill-shaped standalone input ── */

  /* Override co-input's border-radius and padding per Figma spec:
     border-radius: 9px, padding: 6px 6px 6px 16px, border: 1px */
  .input-group__container {
    border-radius: var(--co-shape-radius-full);
    padding: 6px 6px 6px var(--co-space-4);
    /* padding: 6px var(--co-space-4); */
  }

  :host(:focus-within) .input-group__container {
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-shape-radius-full);
  }

  /* Hide label, help-text, feedback — standalone component */
  .form-field__label,
  .form-field__help-text,
  .form-field__feedback {
    display: none;
  }

  /* ── Prefix icon ── */

  .input-group__prefix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    color: var(--co-color-text-default);
  }

  /* ── Suffix (action button container) ── */

  .input-group__suffix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    margin-inline-start: 6px;
  }
`;var g=function(l,e,t,i){var u=arguments.length,o=u<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,t,i);else for(var c=l.length-1;c>=0;c--)(p=l[c])&&(o=(u<3?p(o):u>3?p(e,t,o):p(e,t))||o);return u>3&&o&&Object.defineProperty(e,t,o),o};const m={default:{},search:{prefixIcon:"search",placeholder:"Search"},chat:{actionIcon:"arrow-forward"}};let d=class extends r{constructor(){super(...arguments),this.variant="default"}static get styles(){return[...super.styles,E]}get _resolvedPrefixIcon(){var e;return this.prefixIcon??((e=m[this.variant])==null?void 0:e.prefixIcon)}get _resolvedActionIcon(){var e;return this.actionIcon??((e=m[this.variant])==null?void 0:e.actionIcon)}connectedCallback(){var e;if(super.connectedCallback(),!this.hasAttribute("placeholder")){const t=(e=m[this.variant])==null?void 0:e.placeholder;t&&this.setAttribute("placeholder",t)}}get _iconSize(){return{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"}_inputGroupPrefixTemplate(){const e=this._resolvedPrefixIcon;return e?n`
      <div part="prefix" class="input-group__prefix">
        <slot name="prefix">
          <co-icon name=${e} size=${this._iconSize} aria-hidden="true"></co-icon>
        </slot>
      </div>
    `:f}_inputGroupSuffixTemplate(){const e=this._resolvedActionIcon;return e?n`
      <div part="suffix" class="input-group__suffix">
        <slot name="suffix">
          <co-button-icon
            part="action-button"
            name=${e}
            size=${{sm:"sm",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"}
            variant="primary"
            circle
            ?disabled=${this.disabled}
            aria-label="Submit"
            @click=${this._onActionClick}
          ></co-button-icon>
        </slot>
      </div>
    `:f}_labelTemplate(){return n``}_helpTextTemplate(){return n``}_feedbackTemplate(){return n``}_onActionClick(){var t;if(this.disabled)return;const e=((t=this._inputNode)==null?void 0:t.value)??"";this.dispatchEvent(new CustomEvent("co-action",{detail:{value:e},bubbles:!0,composed:!0}))}};g([a({reflect:!0})],d.prototype,"variant",void 0);g([a({attribute:"action-icon"})],d.prototype,"actionIcon",void 0);g([a({attribute:"prefix-icon"})],d.prototype,"prefixIcon",void 0);d=g([b("co-input-pill")],d);const $=Object.freeze(Object.defineProperty({__proto__:null,get CoInputPill(){return d}},Symbol.toStringTag,{value:"Module"}));export{r as C,C as L,d as a,$ as c};
