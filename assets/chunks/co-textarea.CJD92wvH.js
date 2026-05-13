import{i as F,b as d,A as T,n as u,t as V}from"./property.D__PRo2x.js";import{C as q,e as k,i as b,c as $,a as B,b as I,d as G}from"./validation.C91nxckB.js";import{N as W,L as D}from"./NativeTextFieldMixin.BjIyOwUF.js";import"./DisabledMixin.DvWrDoIe.js";import"./FormatMixin.ClJHuFpt.js";import"./framework.DW6FvQZQ.js";import"./directive.CJw_OlP2.js";var _=new Map;function S(o){var e=_.get(o);e&&e.destroy()}function U(o){var e=_.get(o);e&&e.update()}var m=null;typeof window>"u"?((m=function(o){return o}).destroy=function(o){return o},m.update=function(o){return o}):((m=function(o,e){return o&&Array.prototype.forEach.call(o.length?o:[o],function(i){return function(t){if(t&&t.nodeName&&t.nodeName==="TEXTAREA"&&!_.has(t)){var l,a=null,r=window.getComputedStyle(t),c=(l=t.value,function(){z({testForHeightReduction:l===""||!t.value.startsWith(l),restoreTextAlign:null}),l=t.value}),y=(function(v){t.removeEventListener("autosize:destroy",y),t.removeEventListener("autosize:update",p),t.removeEventListener("input",c),window.removeEventListener("resize",p),Object.keys(v).forEach(function(f){return t.style[f]=v[f]}),_.delete(t)}).bind(t,{height:t.style.height,resize:t.style.resize,textAlign:t.style.textAlign,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",y),t.addEventListener("autosize:update",p),t.addEventListener("input",c),window.addEventListener("resize",p),t.style.overflowX="hidden",t.style.wordWrap="break-word",_.set(t,{destroy:y,update:p}),p()}function z(v){var f,g,N=v.restoreTextAlign,w=N===void 0?null:N,M=v.testForHeightReduction,R=M===void 0||M,O=r.overflowY;if(t.scrollHeight!==0&&(r.resize==="vertical"?t.style.resize="none":r.resize==="both"&&(t.style.resize="horizontal"),R&&(f=function(h){for(var E=[];h&&h.parentNode&&h.parentNode instanceof Element;)h.parentNode.scrollTop&&E.push([h.parentNode,h.parentNode.scrollTop]),h=h.parentNode;return function(){return E.forEach(function(A){var L=A[0],H=A[1];L.style.scrollBehavior="auto",L.scrollTop=H,L.style.scrollBehavior=null})}}(t),t.style.height=""),g=r.boxSizing==="content-box"?t.scrollHeight-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):t.scrollHeight+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),r.maxHeight!=="none"&&g>parseFloat(r.maxHeight)?(r.overflowY==="hidden"&&(t.style.overflow="scroll"),g=parseFloat(r.maxHeight)):r.overflowY!=="hidden"&&(t.style.overflow="hidden"),t.style.height=g+"px",w&&(t.style.textAlign=w),f&&f(),a!==g&&(t.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),a=g),O!==r.overflow&&!w)){var C=r.textAlign;r.overflow==="hidden"&&(t.style.textAlign=C==="start"?"end":"start"),z({restoreTextAlign:C,testForHeightReduction:!0})}}function p(){z({testForHeightReduction:!0,restoreTextAlign:null})}}(i)}),o}).destroy=function(o){return o&&Array.prototype.forEach.call(o.length?o:[o],S),o},m.update=function(o){return o&&Array.prototype.forEach.call(o.length?o:[o],U),o});var x=m;class Y extends D{get _inputNode(){return Array.from(this.children).find(e=>e.slot==="input")}}class j extends W(Y){static get properties(){return{maxRows:{type:Number,attribute:"max-rows"},rows:{type:Number,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("textarea");return e.style.resize!==void 0&&(e.style.resize="none"),e}}}constructor(){super(),this.rows=2,this.maxRows=6,this.readOnly=!1,this.placeholder=""}connectedCallback(){super.connectedCallback(),this.__initializeAutoresize(),this.__intersectionObserver=new IntersectionObserver(()=>this.resizeTextarea()),this.__intersectionObserver.observe(this)}updated(e){if(super.updated(e),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("rows")){const i=this._inputNode;i&&(i.rows=this.rows)}if(e.has("readOnly")){const i=this._inputNode;i&&(i.readOnly=this.readOnly)}if(e.has("placeholder")){const i=this._inputNode;i&&(i.placeholder=this.placeholder)}e.has("modelValue")&&this.resizeTextarea(),(e.has("maxRows")||e.has("rows"))&&this.setTextareaMaxHeight()}disconnectedCallback(){super.disconnectedCallback(),x.destroy(this._inputNode)}setTextareaMaxHeight(){const{value:e}=this._inputNode;this._inputNode.value="",this.resizeTextarea();const i=window.getComputedStyle(this._inputNode,null),t=parseFloat(i.lineHeight)||parseFloat(i.height)/this.rows,l=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),a=parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),r=i.boxSizing==="border-box"?l+a:0;this._inputNode.style.maxHeight=`${t*this.maxRows+r}px`,this._inputNode.value=e,this.resizeTextarea()}static get styles(){return[...super.styles,F`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          box-sizing: content-box;
          overflow-x: hidden; /* for FF adds height to the TextArea to reserve place for scroll-bars */
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }
      `]}get updateComplete(){return this.__textareaUpdateComplete?Promise.all([this.__textareaUpdateComplete,super.updateComplete]):super.updateComplete}resizeTextarea(){x.update(this._inputNode)}__initializeAutoresize(){this.__shady_native_contains?this.__textareaUpdateComplete=this.__waitForTextareaRenderedInRealDOM().then(()=>{this.__startAutoresize(),this.__textareaUpdateComplete=null}):this.__startAutoresize()}async __waitForTextareaRenderedInRealDOM(){let e=3;for(;e!==0&&!this.__shady_native_contains(this._inputNode);)await new Promise(i=>setTimeout(i)),e-=1}__startAutoresize(){x(this._inputNode),this.setTextareaMaxHeight()}}const X=F`
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
    align-items: flex-start;
    inline-size: 100%;
    min-block-size: calc(var(--co-control-height-md) * 2);
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-inset-md);
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
    min-block-size: calc(var(--co-control-height-sm) * 2);
    padding: var(--co-space-inset-sm);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-h6);
  }

  :host([size='lg']) .input-group__container {
    min-block-size: calc(var(--co-control-height-lg) * 2);
    padding: var(--co-space-inset-lg);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
  }

  :host([size='xl']) .input-group__container {
    min-block-size: calc(var(--co-control-height-xl) * 2);
    padding: var(--co-space-inset-xl);
  }

  .input-group__input {
    display: flex;
    align-items: stretch;
    flex: 1 1 auto;
    min-inline-size: 0;
  }

  .input-group__prefix,
  .input-group__suffix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    min-block-size: calc(1em * var(--co-font-line-height-normal));
    color: var(--co-color-text-secondary);
  }

  .form-field__meta {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--co-space-gap-md);
  }

  .form-field__feedback {
    min-inline-size: 0;
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal);
  }

  .form-field__counter {
    flex: 0 0 auto;
    color: var(--co-color-text-secondary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    white-space: nowrap;
  }

  .form-field__counter--danger {
    color: var(--co-color-feedback-danger-text);
  }

  slot[name='input']::slotted(textarea) {
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

  :host([resize='vertical']) slot[name='input']::slotted(textarea) {
    resize: vertical;
  }

  :host([resize='none']) slot[name='input']::slotted(textarea) {
    resize: none;
  }

  slot[name='input']::slotted(textarea:disabled) {
    cursor: not-allowed;
  }

  slot[name='input']::slotted(textarea:read-only) {
    cursor: default;
  }
`;var n=function(o,e,i,t){var l=arguments.length,a=l<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,i,t);else for(var c=o.length-1;c>=0;c--)(r=o[c])&&(a=(l<3?r(a):l>3?r(e,i,a):r(e,i))||a);return l>3&&a&&Object.defineProperty(e,i,a),a};let s=class extends j{constructor(){super(...arguments),this.size="md",this.danger=!1,this.required=!1,this.requiredMessage="",this.resize="auto",this.pattern="",this.patternMessage="",this.minLengthMessage="",this.maxLengthMessage="",this._validation=new q(this),this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&(this.requestUpdate("value"),this._dispatchValueEvent("co-input"))},this._handleNativeChange=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,X]}get slots(){const e=super.slots;return{...e,input:()=>{const i=e.input(),t=this.getAttribute("value");return t!==null&&(i.value=t),i}}}get value(){return super.value}set value(e){const i=this.value;super.value=e,this.requestUpdate("value",i),this._resizeForCurrentMode()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}firstUpdated(e){k(this),super.firstUpdated(e),this._syncNativeLengthAttributes(),this._applyResizeMode(),this._syncCounterDescription(),this._syncValidation(!0,!0)}updated(e){k(this),super.updated(e),(e.has("maxLength")||e.has("minLength"))&&this._syncNativeLengthAttributes(),(e.has("resize")||e.has("rows")||e.has("maxRows"))&&this._applyResizeMode(),e.has("maxLength")&&this._syncCounterDescription(),this._validationPropsChanged(e)&&this._syncValidation(e.has("validators"),this._validationRulesChanged(e))}resizeTextarea(){this.resize==="auto"&&super.resizeTextarea()}_groupTwoTemplate(){return d`
      ${this._inputGroupTemplate()}
      <div part="meta" class="form-field__meta">
        ${this._feedbackTemplate()} ${this._counterTemplate()}
      </div>
    `}_labelTemplate(){return d`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return d`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return d`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?d`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:T}_inputGroupInputTemplate(){return d`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot==="suffix")?d`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:T}_feedbackTemplate(){return d`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_counterTemplate(){return this._hasMaxLength()?d`
      <output
        part="counter"
        class="form-field__counter ${this._currentLength()>=this.maxLength?"form-field__counter--danger":""}"
      >
        ${this._currentLength()} / ${this.maxLength}
      </output>
    `:T}_dispatchValueEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}_hasMaxLength(){return b(this.maxLength)}_currentLength(){return this.value.length}_syncNativeLengthAttributes(){const e=this._inputNode;e&&(this._hasMaxLength()?e.maxLength=this.maxLength:e.removeAttribute("maxlength"),b(this.minLength)?e.minLength=this.minLength:e.removeAttribute("minlength"))}_applyResizeMode(){const e=this._inputNode;if(e){if(this.resize==="auto"){x(e),this.setTextareaMaxHeight(),e.style.resize="none";return}x.destroy(e),e.style.height="",e.style.maxHeight="",e.style.overflowY="",e.style.resize=this.resize==="vertical"?"vertical":"none"}}_resizeForCurrentMode(){!this._inputNode||this.resize!=="auto"||this.resizeTextarea()}_syncCounterDescription(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector('[part="counter"]');if(this._counterNode&&this._counterNode!==e&&(this.removeFromAriaDescribedBy(this._counterNode),this._counterNode=void 0),!this._hasMaxLength()){this._counterNode&&(this.removeFromAriaDescribedBy(this._counterNode),this._counterNode=void 0);return}e&&this._counterNode!==e&&(this.addToAriaDescribedBy(e,{idPrefix:"counter",reorder:!0}),this._counterNode=e)}_syncValidation(e=!1,i=!1){this._validation.sync(()=>{const t=[];return this.required&&t.push($(this.requiredMessage,"Enter a value.")),this.pattern&&t.push(B(this.pattern,this.patternMessage)),b(this.minLength)&&t.push(I(this.minLength,this.minLengthMessage)),b(this.maxLength)&&t.push(G(this.maxLength,this.maxLengthMessage)),t},e,i)}_validationPropsChanged(e){return["validators","required","requiredMessage","pattern","patternMessage","minLength","minLengthMessage","maxLength","maxLengthMessage"].some(t=>e.has(t))}_validationRulesChanged(e){return["required","requiredMessage","pattern","patternMessage","minLength","minLengthMessage","maxLength","maxLengthMessage"].some(t=>e.has(t))}};n([u({reflect:!0})],s.prototype,"size",void 0);n([u({type:Boolean,reflect:!0})],s.prototype,"danger",void 0);n([u({type:Boolean,reflect:!0})],s.prototype,"required",void 0);n([u({attribute:"required-message"})],s.prototype,"requiredMessage",void 0);n([u({reflect:!0})],s.prototype,"resize",void 0);n([u({reflect:!0})],s.prototype,"pattern",void 0);n([u({attribute:"pattern-message"})],s.prototype,"patternMessage",void 0);n([u({type:Number,attribute:"maxlength",reflect:!0})],s.prototype,"maxLength",void 0);n([u({type:Number,attribute:"minlength",reflect:!0})],s.prototype,"minLength",void 0);n([u({attribute:"minlength-message"})],s.prototype,"minLengthMessage",void 0);n([u({attribute:"maxlength-message"})],s.prototype,"maxLengthMessage",void 0);s=n([V("co-textarea")],s);export{s as CoTextarea};
