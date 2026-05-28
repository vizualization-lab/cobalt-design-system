import{a as d,i as u,b as l,t as h}from"./custom-element.CPWKJEuj.js";import{n as p}from"./property.C8dt_fM1.js";import{h as b}from"./validation.Cw6SvbJ9.js";import{F as _}from"./FormGroupMixin.BidbapQZ.js";import"./ValidateMixin.HhPyzEJ4.js";import"./DisabledMixin.DvWrDoIe.js";import"./framework.BeCEba4t.js";import"./directive.CJw_OlP2.js";import"./FormRegistrarMixin.BodkdZoe.js";class v extends _(d){constructor(){super(),this._isFormOrFieldset=!0,this._repropagationRole="fieldset"}}const m=()=>{throw new Error("No form node found. Did you put a <form> element inside your custom-form element?")};class F extends v{constructor(){super(),this._submit=this._submit.bind(this),this._reset=this._reset.bind(this)}connectedCallback(){super.connectedCallback(),this.__registerEventsForLionForm(),this.removeAttribute("role")}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForLionForm()}get _formNode(){return this.querySelector("form")}submit(){this._formNode?this._formNode.dispatchEvent(new Event("submit",{cancelable:!0})):m()}_submit(e){var t;e.preventDefault(),e.stopPropagation(),this.submitGroup(),this.dispatchEvent(new Event("submit",{bubbles:!0})),(t=this.hasFeedbackFor)!=null&&t.includes("error")&&this._setFocusOnFirstErroneousFormElement(this)}reset(){this._formNode?this._formNode.reset():m()}_reset(e){e.preventDefault(),e.stopPropagation(),this.resetGroup(),this.dispatchEvent(new Event("reset",{bubbles:!0}))}_setFocusOnFirstErroneousFormElement(e){const t=e.formElements.find(o=>o.hasFeedbackFor.includes("error"))||e.formElements[0];t._focusableNode?t._focusableNode.focus():this._setFocusOnFirstErroneousFormElement(t)}__registerEventsForLionForm(){this._formNode.addEventListener("submit",this._submit),this._formNode.addEventListener("reset",this._reset)}__teardownEventsForLionForm(){this._formNode.removeEventListener("submit",this._submit),this._formNode.removeEventListener("reset",this._reset)}}const E=u`
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
    margin-block-end: var(--co-space-2);
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

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) .form-field__label,
  :host([disabled]) .form-field__help-text {
    opacity: var(--co-opacity-disabled);
  }

  ::slotted(form) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--co-space-4);
  }
`;var f=function(n,e,t,o){var r=arguments.length,s=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(s=(r<3?i(s):r>3?i(e,t,s):i(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};let c=class extends F{constructor(){super(...arguments),this.disabled=!1,this._internalForm=document.createElement("form"),this._handleFormButtonClick=e=>{const t=e.composedPath().find(r=>r instanceof HTMLElement&&(r.localName==="co-button"||r.localName==="co-button-icon"));if(!t||t.hasAttribute("href")||t.hasAttribute("disabled"))return;const o=t.getAttribute("type")??"submit";o!=="submit"&&o!=="reset"||t.closest("form")||(e.preventDefault(),o==="reset"?this.reset():this.submit())}}static get styles(){return[...super.styles,E]}get _formNode(){return this.querySelector("form")??this._internalForm}connectedCallback(){this._syncNoValidate(),super.connectedCallback(),this.addEventListener("click",this._handleFormButtonClick)}disconnectedCallback(){this.removeEventListener("click",this._handleFormButtonClick),super.disconnectedCallback()}addFormElement(e,t){const o=e;if(this._canUseLionFormRegistration(o)){super.addFormElement(e,t);return}this._addArrayOnlyFormElement(o,t??-1)}_labelTemplate(){return l`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return l`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_feedbackTemplate(){return l`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}async _submit(e){var o;super._submit(e);const t={modelValue:this.modelValue,serializedValue:this.serializedValue};if((o=this.hasFeedbackFor)!=null&&o.includes("error")){await this._waitForFeedback(),this.dispatchEvent(new CustomEvent("co-invalid-submit",{detail:{...t,errors:this._collectValidationErrors()},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("co-submit",{detail:t,bubbles:!0,composed:!0}))}_reset(e){if(super._reset(e),this._formNode)for(const o of this._nativeFormControls())"resetGroup"in o||(o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?o.value=o.defaultValue:o instanceof HTMLSelectElement&&(o.selectedIndex=0));this.dispatchEvent(new CustomEvent("co-reset",{bubbles:!0,composed:!0}))}_syncNoValidate(){const e=this._formNode;e.setAttribute("novalidate",""),e.noValidate=!0}_canUseLionFormRegistration(e){var o;const t=e.name??"";return!t||t===this.name?!1:t.endsWith("[]")?!0:!((o=this.formElements)!=null&&o[t])}_addArrayOnlyFormElement(e,t){var r,s,i;e._parentFormGroup=this,t>=0?this.formElements.splice(t,0,e):this.formElements.push(e),this.disabled&&((r=e.makeRequestToBeDisabled)==null||r.call(e));const o=this;(s=o.__storeAllDescriptionElementsInParentChain)==null||s.call(o),(i=o.__linkParentMessages)==null||i.call(o,e),this.validate({clearCurrentResult:!0})}_nativeFormControls(){const e=Array.from(this._formNode.elements);return this._formNode===this._internalForm&&e.push(...Array.from(this.querySelectorAll("input, textarea, select"))),e}async _waitForFeedback(){await Promise.all(this._collectFormControls().map(e=>e.feedbackComplete).filter(Boolean))}_collectValidationErrors(){return this._collectFormControls().filter(e=>{var t;return(t=e.hasFeedbackFor)==null?void 0:t.includes("error")}).filter(e=>b(e)).map(e=>({element:e,name:e.getAttribute("name")??"",fieldName:e.fieldName??e.getAttribute("label")??"",messages:this._getFeedbackMessages(e),validationStates:e.validationStates??{}}))}_collectFormControls(){const e=[],t=o=>{e.push(o);for(const r of Array.from(o.formElements??[]))t(r)};for(const o of Array.from(this.formElements??[]))t(o);return e}_getFeedbackMessages(e){var t,o;return((o=(t=e._feedbackNode)==null?void 0:t.feedbackData)==null?void 0:o.filter(r=>r.type==="error").map(r=>this._messageToText(r.message)).filter(r=>r.length>0))??[]}_messageToText(e){var t;return typeof e=="string"?e:((t=e==null?void 0:e.textContent)==null?void 0:t.trim())??""}};f([p({type:Boolean,reflect:!0})],c.prototype,"disabled",void 0);c=f([h("co-form")],c);export{c as CoForm};
