import{i as _,b as c,A as h,n as r,t as y}from"./property.D__PRo2x.js";import{C as z,e as x,c as L,f as w,a as k,i as g,b as C,d as E}from"./validation.C91nxckB.js";import{N as I,L as M}from"./NativeTextFieldMixin.BjIyOwUF.js";import"./co-icon.BMkrvlZg.js";import{L as N}from"./LionButton.B5pyDaFb.js";class T extends I(M){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("input"),t=this.getAttribute("value");return t&&e.setAttribute("value",t),e}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type="text",this.placeholder=""}requestUpdate(e,t,o){super.requestUpdate(e,t,o),e==="readOnly"&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has("type")&&(this._inputNode.type=this.type),e.has("placeholder")&&(this._inputNode.placeholder=this.placeholder),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}}const O=_`
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
`;var u=function(a,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,o);else for(var d=a.length-1;d>=0;d--)(s=a[d])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let l=class extends T{constructor(){super(...arguments),this.size="md",this.danger=!1,this.required=!1,this.requiredMessage="",this.emailMessage="",this.pattern="",this.patternMessage="",this.minLengthMessage="",this.maxLengthMessage="",this._validation=new z(this),this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-input")},this._handleNativeChange=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,O]}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}firstUpdated(e){x(this),super.firstUpdated(e),this._syncNativeLengthAttributes(),this._syncValidation(!0,!0)}updated(e){x(this),super.updated(e),(e.has("maxLength")||e.has("minLength"))&&this._syncNativeLengthAttributes(),this._validationPropsChanged(e)&&this._syncValidation(e.has("validators"),this._validationRulesChanged(e))}_labelTemplate(){return c`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return c`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return c`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?c`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:h}_inputGroupInputTemplate(){return c`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot==="suffix")?c`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:h}_feedbackTemplate(){return c`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_dispatchValueEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}_syncValidation(e=!1,t=!1){this._validation.sync(()=>{const o=[];return this.required&&o.push(L(this.requiredMessage,"Enter a value.")),this.type==="email"&&o.push(w(this.emailMessage)),this.pattern&&o.push(k(this.pattern,this.patternMessage)),g(this.minLength)&&o.push(C(this.minLength,this.minLengthMessage)),g(this.maxLength)&&o.push(E(this.maxLength,this.maxLengthMessage)),o},e,t)}_validationPropsChanged(e){return["validators","required","requiredMessage","emailMessage","type","pattern","patternMessage","minLength","minLengthMessage","maxLength","maxLengthMessage"].some(o=>e.has(o))}_validationRulesChanged(e){return["required","requiredMessage","emailMessage","type","pattern","patternMessage","minLength","minLengthMessage","maxLength","maxLengthMessage"].some(o=>e.has(o))}_syncNativeLengthAttributes(){const e=this._inputNode;e&&(g(this.maxLength)?e.maxLength=this.maxLength:e.removeAttribute("maxlength"),g(this.minLength)?e.minLength=this.minLength:e.removeAttribute("minlength"))}};u([r({reflect:!0})],l.prototype,"size",void 0);u([r({type:Boolean,reflect:!0})],l.prototype,"danger",void 0);u([r({type:Boolean,reflect:!0})],l.prototype,"required",void 0);u([r({attribute:"required-message"})],l.prototype,"requiredMessage",void 0);u([r({attribute:"email-message"})],l.prototype,"emailMessage",void 0);u([r({reflect:!0})],l.prototype,"pattern",void 0);u([r({attribute:"pattern-message"})],l.prototype,"patternMessage",void 0);u([r({type:Number,attribute:"maxlength",reflect:!0})],l.prototype,"maxLength",void 0);u([r({type:Number,attribute:"minlength",reflect:!0})],l.prototype,"minLength",void 0);u([r({attribute:"minlength-message"})],l.prototype,"minLengthMessage",void 0);u([r({attribute:"maxlength-message"})],l.prototype,"maxLengthMessage",void 0);l=u([y("co-input")],l);const P=_`
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
`,S=_`
  /* ── Base ── */
  :host {
    display: inline-flex;
    vertical-align: middle;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    min-block-size: var(--co-control-height-md);
    min-inline-size: var(--co-control-height-md);
    padding: 0;
    font-family: var(--co-font-family-sans);
    font-weight: var(--co-font-weight-medium);
    line-height: var(--co-font-line-height-tight);
    border-radius: var(--co-control-radius-interactive);
    border: none;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  .button-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--co-space-1);
    padding: var(--co-space-2);
    color: inherit;
  }

  .button-icon.has-label {
    padding: var(--co-space-1) var(--co-space-3);
  }

  .label {
    font-size: var(--co-font-size-xsmall);
    line-height: var(--co-font-line-height-tight);
    white-space: nowrap;
  }

  /* ── Sizes ── */
  :host([size='sm']) {
    min-block-size: var(--co-control-height-sm);
    min-inline-size: var(--co-control-height-sm);
  }
  :host([size='sm']) .button-icon {
    padding: var(--co-space-1);
  }
  :host([size='sm']) .button-icon.has-label {
    padding: var(--co-space-1) var(--co-space-2);
  }

  :host([size='lg']) {
    min-block-size: var(--co-control-height-lg);
    min-inline-size: var(--co-control-height-lg);
  }
  :host([size='lg']) .button-icon {
    padding: var(--co-space-3);
  }
  :host([size='lg']) .button-icon.has-label {
    padding: var(--co-space-2) var(--co-space-4);
  }

  /* ── Primary variant (default) ── */
  :host,
  :host([variant='primary']) {
    background: var(--co-color-surface-interactive-primary-default);
    color: var(--co-color-text-on-primary);
  }
  :host([variant='primary']:hover),
  :host(:not([variant]):hover) {
    background: var(--co-color-surface-interactive-primary-hover);
  }
  :host([variant='primary']:active),
  :host(:not([variant]):active) {
    background: var(--co-color-surface-interactive-primary-active);
  }

  /* ── Secondary variant ── */
  :host([variant='secondary']) {
    background: var(--co-color-surface-interactive-secondary-default);
    color: var(--co-color-surface-interactive-primary-default);
    box-shadow: inset 0 0 0 var(--co-border-width-action)
      var(--co-color-surface-interactive-primary-default);
  }
  :host([variant='secondary']:hover) {
    background: var(--co-color-surface-interactive-secondary-hover);
    color: var(--co-color-surface-interactive-primary-hover);
    box-shadow: inset 0 0 0 var(--co-border-width-action)
      var(--co-color-surface-interactive-primary-hover);
  }
  :host([variant='secondary']:active) {
    background: var(--co-color-surface-interactive-secondary-active);
    color: var(--co-color-surface-interactive-primary-active);
    box-shadow: inset 0 0 0 var(--co-border-width-action)
      var(--co-color-surface-interactive-primary-active);
  }

  /* ── Danger variant ── */
  :host([variant='danger']) {
    background: var(--co-color-surface-interactive-danger-default);
    color: var(--co-color-text-on-danger);
  }
  :host([variant='danger']:hover) {
    background: var(--co-color-surface-interactive-danger-hover);
  }
  :host([variant='danger']:active) {
    background: var(--co-color-surface-interactive-danger-active);
  }

  /* ── Warning variant ── */
  :host([variant='warning']) {
    background: var(--co-color-surface-interactive-warning-default);
    color: var(--co-color-text-on-warning);
  }
  :host([variant='warning']:hover) {
    background: var(--co-color-surface-interactive-warning-hover);
  }
  :host([variant='warning']:active) {
    background: var(--co-color-surface-interactive-warning-active);
  }

  /* ── Success variant ── */
  :host([variant='success']) {
    background: var(--co-color-surface-interactive-success-default);
    color: var(--co-color-text-on-success);
  }
  :host([variant='success']:hover) {
    background: var(--co-color-surface-interactive-success-hover);
  }
  :host([variant='success']:active) {
    background: var(--co-color-surface-interactive-success-active);
  }

  /* ── Ghost variant ── */
  :host([variant='ghost']) {
    background: transparent;
    color: var(--co-color-text-default);
  }
  :host([variant='ghost']:hover) {
    color: var(--co-color-text-secondary);
  }
  :host([variant='ghost']:active) {
    color: var(--co-color-text-default);
  }

  /* ── Circle ── */
  :host([circle]) {
    border-radius: var(--co-shape-radius-full);
  }

  /* ── Focus ── */
  :host(:focus-visible) {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: var(--co-focus-ring-offset);
  }

  /* ── Disabled ── */
  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    cursor: not-allowed;
    pointer-events: none;
  }
`;var v=function(a,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,o);else for(var d=a.length-1;d>=0;d--)(s=a[d])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};const A={sm:"xs",md:"sm",lg:"md"};let p=class extends N{constructor(){super(...arguments),this.name="",this.variant="primary",this.size="md",this.labelPosition="bottom",this.circle=!1,this._handleFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleClick=e=>{if(e.defaultPrevented||this.disabled||this.type!=="submit"&&this.type!=="reset")return;const t=this.closest("form");if(!t)return;if(e.preventDefault(),this.type==="reset"){t.reset();return}const o=t.requestSubmit;if(typeof o=="function"){o.call(t);return}t.dispatchEvent(new Event("submit",{bubbles:!0,cancelable:!0}))}}static get styles(){return[...super.styles,S]}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur),this.removeEventListener("click",this._handleClick)}render(){const e=A[this.size],t=!!this.label&&!this.circle,o=t?c`<span part="label" class="label">${this.label}</span>`:h;return c`
      <div part="base" class="button-icon ${t?"has-label":""}">
        ${this.labelPosition==="top"?o:h}
        <co-icon part="icon" name=${this.name} size=${e} aria-hidden="true"></co-icon>
        ${this.labelPosition==="bottom"?o:h}
      </div>
    `}};v([r({reflect:!0})],p.prototype,"name",void 0);v([r({reflect:!0})],p.prototype,"variant",void 0);v([r({reflect:!0})],p.prototype,"size",void 0);v([r()],p.prototype,"label",void 0);v([r({reflect:!0,attribute:"label-position"})],p.prototype,"labelPosition",void 0);v([r({type:Boolean,reflect:!0})],p.prototype,"circle",void 0);p=v([y("co-button-icon")],p);var m=function(a,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,o);else for(var d=a.length-1;d>=0;d--)(s=a[d])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};const b={default:{},search:{prefixIcon:"search",placeholder:"Search"},chat:{actionIcon:"arrow-forward"}};let f=class extends l{constructor(){super(...arguments),this.variant="default"}static get styles(){return[...super.styles,P]}get _resolvedPrefixIcon(){var e;return this.prefixIcon??((e=b[this.variant])==null?void 0:e.prefixIcon)}get _resolvedActionIcon(){var e;return this.actionIcon??((e=b[this.variant])==null?void 0:e.actionIcon)}connectedCallback(){var e;if(super.connectedCallback(),!this.hasAttribute("placeholder")){const t=(e=b[this.variant])==null?void 0:e.placeholder;t&&this.setAttribute("placeholder",t)}}get _iconSize(){return{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"}_inputGroupPrefixTemplate(){const e=this._resolvedPrefixIcon;return e?c`
      <div part="prefix" class="input-group__prefix">
        <slot name="prefix">
          <co-icon name=${e} size=${this._iconSize} aria-hidden="true"></co-icon>
        </slot>
      </div>
    `:h}_inputGroupSuffixTemplate(){const e=this._resolvedActionIcon;return e?c`
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
    `:h}_labelTemplate(){return c``}_helpTextTemplate(){return c``}_feedbackTemplate(){return c``}_onActionClick(){var t;if(this.disabled)return;const e=((t=this._inputNode)==null?void 0:t.value)??"";this.dispatchEvent(new CustomEvent("co-action",{detail:{value:e},bubbles:!0,composed:!0}))}};m([r({reflect:!0})],f.prototype,"variant",void 0);m([r({attribute:"action-icon"})],f.prototype,"actionIcon",void 0);m([r({attribute:"prefix-icon"})],f.prototype,"prefixIcon",void 0);f=m([y("co-input-pill")],f);const U=Object.freeze(Object.defineProperty({__proto__:null,get CoInputPill(){return f}},Symbol.toStringTag,{value:"Module"}));export{p as C,T as L,l as a,f as b,U as c};
