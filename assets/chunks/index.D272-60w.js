import{L as le}from"./co-input-pill.DqvrJcgo.js";import{C as Zt,a as Jt,b as eo}from"./co-input-pill.DqvrJcgo.js";import{CoNavRailItem as oo}from"./co-nav-rail-item.PByI-J5X.js";import{CoAppShell as so}from"./co-app-shell.DKFtCD7E.js";import{CoBanner as ao}from"./co-banner.Cw4GFGw-.js";import{CoCard as lo}from"./co-card.C7FhZiL1.js";import{CoButton as uo}from"./co-button.4iy9IKSV.js";import{b as c,a as M,i as m,n as l,t as b,A as E}from"./property.D__PRo2x.js";import{CoIcon as po}from"./co-icon.Dguq9XEu.js";import{a as ce}from"./co-option.CtglW7tJ.js";import{C as mo}from"./co-option.CtglW7tJ.js";import{V as _,C as I,e as C,c as D,a as Ce,h as ke}from"./validation.C91nxckB.js";import{E as bo,F as vo,I as go,g as yo,j as xo,M as Co,k as ko,l as Eo,P as wo,R as Vo}from"./validation.C91nxckB.js";import{F as Ee,a as we,C as X,O as Ve,L as de,b as Fe,w as Me}from"./co-select.B7BOEoXG.js";import{c as Mo,d as Oo}from"./co-select.B7BOEoXG.js";import{F as Oe,V as Ne,S as Ae,g as Te,U as j,L as ze}from"./FormatMixin.ClJHuFpt.js";import{b as Ao,a as To,d as zo}from"./FormatMixin.ClJHuFpt.js";import{d as ue,D as Le}from"./DisabledMixin.DvWrDoIe.js";import{a as Se}from"./tokens.DaM6lqEM.js";import{_ as f}from"./framework.DW6FvQZQ.js";import{d as ae,e as Ie,r as De,s as qe}from"./theme.HAux1D5H.js";import{CoNavHeaderBar as So}from"./co-nav-header-bar.DeyPRWTm.js";import{CoNavDrawer as Do}from"./co-nav-drawer.9G7mxjMl.js";import{CoNavDrawerGroup as Ro}from"./co-nav-drawer-group.DmpqbdAe.js";import{CoNavDrawerItem as Go}from"./co-nav-drawer-item.Dk-zVMPc.js";import{CoNavRailBar as Uo}from"./co-nav-rail-bar.BRM2i4Gb.js";import{CoTextarea as Ho}from"./co-textarea.CJD92wvH.js";import{L as Ko,N as Wo}from"./NativeTextFieldMixin.BjIyOwUF.js";import"./LionButton.B5pyDaFb.js";import"./query.BApjzB0v.js";import"./directive.CJw_OlP2.js";import"./state.iQkvzBch.js";function x(r){return new Date(r.getFullYear(),r.getMonth(),r.getDate())}class Re extends _{executeOnResults({regularValidationResult:e,prevValidationResult:t,prevShownValidationResult:o,validators:i}){return!0}}const q=r=>r===r&&typeof r=="number";class Ft extends _{static get validatorName(){return"IsNumber"}execute(e){let t=!1;return q(e)||(t=!0),t}}class Mt extends _{static get validatorName(){return"MinNumber"}execute(e,t=this.param){let o=!1;return(!q(e)||e<t)&&(o=!0),o}}class Ot extends _{static get validatorName(){return"MaxNumber"}execute(e,t=this.param){let o=!1;return(!q(e)||e>t)&&(o=!0),o}}class Nt extends _{static get validatorName(){return"MinMaxNumber"}execute(e,{min:t=0,max:o=0}=this.param){let i=!1;return(!q(e)||e<t||e>o)&&(i=!0),i}}function N(r){return Object.prototype.toString.call(r)==="[object Date]"&&!Number.isNaN(r.getTime())}class At extends _{static get validatorName(){return"IsDate"}execute(e){let t=!1;return N(e)||(t=!0),t}}class Tt extends _{static get validatorName(){return"MinDate"}execute(e,t=this.param){let o=!1;return(!N(e)||x(e)<x(t))&&(o=!0),o}}class zt extends _{static get validatorName(){return"MaxDate"}execute(e,t=this.param){let o=!1;return(!N(e)||x(e)>x(t))&&(o=!0),o}}class Lt extends _{static get validatorName(){return"MinMaxDate"}execute(e,{min:t=0,max:o=0}=this.param){let i=!1;return(!N(e)||x(e)<x(t)||x(e)>x(o))&&(i=!0),i}}class St extends _{static get validatorName(){return"IsDateDisabled"}execute(e,t=this.param){let o=!1;return(!N(e)||t(e))&&(o=!0),o}}class It extends Re{constructor(...e){super(...e),this.type="success"}executeOnResults({regularValidationResult:e,prevShownValidationResult:t}){const o=a=>a.type==="error"||a.type==="warning",i=!!e.filter(o).length,s=!!t.filter(o).length;return!i&&s}}class Be extends _{static get validatorName(){return"FormElementsHaveNoError"}execute(e,t,o){return o==null?void 0:o.node._anyFormElementHasFeedbackFor("error")}static async getMessage(){return""}}const Ge=r=>class extends Ee(Oe(Ne(Le(Ae(r))))){static get properties(){return{submitted:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},touched:{type:Boolean,reflect:!0},prefilled:{type:Boolean,reflect:!0}}}get _inputNode(){return this}get modelValue(){return this._getFromAllFormElements("modelValue")}set modelValue(t){this.__isInitialModelValue?(this.__isInitialModelValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("modelValue",t)})):this._setValueMapForAllFormElements("modelValue",t)}get serializedValue(){return this._getFromAllFormElements("serializedValue")}set serializedValue(t){this.__isInitialSerializedValue?(this.__isInitialSerializedValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("serializedValue",t)})):this._setValueMapForAllFormElements("serializedValue",t)}get formattedValue(){return this._getFromAllFormElements("formattedValue")}set formattedValue(t){this._setValueMapForAllFormElements("formattedValue",t)}get prefilled(){return this._everyFormElementHas("prefilled")}constructor(){super(),this.value="",this.disabled=!1,this.submitted=!1,this.dirty=!1,this.touched=!1,this.focused=!1,this.__addedSubValidators=!1,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this._checkForOutsideClick=this._checkForOutsideClick.bind(this),this.addEventListener("focusin",this._syncFocused),this.addEventListener("focusout",this._onFocusOut),this.addEventListener("dirty-changed",this._syncDirty),this.addEventListener("validate-performed",this.__onChildValidatePerformed),this.defaultValidators=[new Be],this.__descriptionElementsInParentChain=new Set,this.__pendingValues={modelValue:{},serializedValue:{}}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group"),this.initComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__initInteractionStates()})}disconnectedCallback(){super.disconnectedCallback(),this.__hasActiveOutsideClickHandling&&(document.removeEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!1),this.__descriptionElementsInParentChain.clear()}__initInteractionStates(){this.formElements.forEach(t=>{typeof t.initInteractionState=="function"&&t.initInteractionState()})}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.__requestChildrenToBeDisabled():this.__retractRequestChildrenToBeDisabled()),t.has("focused")&&this.focused===!0&&this.__setupOutsideClickHandling()}__setupOutsideClickHandling(){this.__hasActiveOutsideClickHandling||(document.addEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!0)}_checkForOutsideClick(t){!this.contains(t.target)&&(this.touched=!0)}__requestChildrenToBeDisabled(){this.formElements.forEach(t=>{t.makeRequestToBeDisabled&&t.makeRequestToBeDisabled()})}__retractRequestChildrenToBeDisabled(){this.formElements.forEach(t=>{t.retractRequestToBeDisabled&&t.retractRequestToBeDisabled()})}_inputGroupTemplate(){return c`
        <div class="input-group">
          <slot></slot>
        </div>
      `}submitGroup(){this.submitted=!0,this.formElements.forEach(t=>{typeof t.submitGroup=="function"?t.submitGroup():t.submitted=!0})}resetGroup(){this.formElements.forEach(t=>{typeof t.resetGroup=="function"?t.resetGroup():typeof t.reset=="function"&&t.reset()}),this.resetInteractionState()}clearGroup(){this.formElements.forEach(t=>{typeof t.clearGroup=="function"?t.clearGroup():typeof t.clear=="function"&&t.clear()}),this.resetInteractionState()}resetInteractionState(){this.submitted=!1,this.touched=!1,this.dirty=!1,this.formElements.forEach(t=>{typeof t.resetInteractionState=="function"&&t.resetInteractionState()})}_getFromAllFormElementsFilter(t,o){return!t.disabled}_getFromAllFormElements(t,o){const i={},s=o||this._getFromAllFormElementsFilter;return this.formElements._keys().forEach(a=>{const n=this.formElements[a];n instanceof we?i[a]=n.filter(y=>s(y,t)).map(y=>y[t]):s(n,t)&&(typeof n._getFromAllFormElements=="function"?i[a]=n._getFromAllFormElements(t):i[a]=n[t])}),i}_setValueForAllFormElements(t,o){this.formElements.forEach(i=>{i[t]=o})}_setValueMapForAllFormElements(t,o){o&&typeof o=="object"&&Object.keys(o).forEach(i=>{Array.isArray(this.formElements[i])&&this.formElements[i].forEach((s,a)=>{s[t]=o[i][a]}),this.formElements[i]?this.formElements[i][t]=o[i]:this.__pendingValues[t][i]=o[i]})}_anyFormElementHas(t){return Object.keys(this.formElements).some(o=>Array.isArray(this.formElements[o])?this.formElements[o].some(i=>!!i[t]):!!this.formElements[o][t])}_anyFormElementHasFeedbackFor(t){return Object.keys(this.formElements).some(o=>Array.isArray(this.formElements[o])?this.formElements[o].some(i=>!!(i.hasFeedbackFor&&i.hasFeedbackFor.includes(t))):!!(this.formElements[o].hasFeedbackFor&&this.formElements[o].hasFeedbackFor.includes(t)))}_everyFormElementHas(t){return Object.keys(this.formElements).every(o=>Array.isArray(this.formElements[o])?this.formElements[o].every(i=>!!i[t]):!!this.formElements[o][t])}__onChildValidatePerformed(t){t&&this.isRegisteredFormElement(t.target)&&this.validate()}_syncFocused(){this.focused=this._anyFormElementHas("focused")}_onFocusOut(t){const o=this.formElements[this.formElements.length-1];t.target===o&&(this.touched=!0),this.focused=!1}_syncDirty(){this.dirty=this._anyFormElementHas("dirty")}__storeAllDescriptionElementsInParentChain(){let o=this;for(;o;){const i=o._getAriaDescriptionElements();Te(i,{reverse:!0}).forEach(a=>{a.getAttribute("slot")==="feedback"&&this.__descriptionElementsInParentChain.add(a)}),o=o._parentFormGroup}}__linkParentMessages(t){this.__descriptionElementsInParentChain.forEach(o=>{typeof t.addToAriaDescribedBy=="function"&&t.addToAriaDescribedBy(o,{reorder:!1})})}__unlinkParentMessages(t){this.__descriptionElementsInParentChain.forEach(o=>{typeof t.removeFromAriaDescribedBy=="function"&&t.removeFromAriaDescribedBy(o)})}addFormElement(t,o){if(super.addFormElement(t,o),this.disabled&&t.makeRequestToBeDisabled(),this.__descriptionElementsInParentChain.size||this.__storeAllDescriptionElementsInParentChain(),this.__linkParentMessages(t),this.validate({clearCurrentResult:!0}),!t.modelValue){const i=this.__pendingValues;i.modelValue&&i.modelValue[t.name]?t.modelValue=i.modelValue[t.name]:i.serializedValue&&i.serializedValue[t.name]&&(t.serializedValue=i.serializedValue[t.name])}}get _initialModelValue(){return this._getFromAllFormElements("_initialModelValue")}removeFormElement(t){super.removeFormElement(t),this.validate({clearCurrentResult:!0}),typeof t.removeFromAriaLabelledBy=="function"&&this._labelNode&&t.removeFromAriaLabelledBy(this._labelNode,{reorder:!1}),this.__unlinkParentMessages(t)}_isEmpty(){return this.formElements.every(t=>{var o;return(o=t._isEmpty)==null?void 0:o.call(t)})}},Z=ue(Ge);class $e extends X(Z(M)){constructor(){super(),this.multipleChoice=!0}}class he extends ce(le){connectedCallback(){super.connectedCallback(),this.type="checkbox"}}class Ue extends he{static get styles(){return[...super.styles||[],m`
        :host .choice-field__nested-checkboxes {
          display: block;
        }
        ::slotted(*) {
          padding-left: 8px;
        }
      `]}static get properties(){return{indeterminate:{type:Boolean,reflect:!0},mixedState:{type:Boolean,reflect:!0,attribute:"mixed-state"}}}get _checkboxGroupNode(){return this._parentFormGroup}get _subCheckboxes(){return this.__subCheckboxes}_storeIndeterminateState(){this._indeterminateSubStates=this._subCheckboxes.map(e=>e.checked)}_setOldState(){this.indeterminate?this._oldState="indeterminate":this._oldState=this.checked?"checked":"unchecked"}_setOwnCheckedState(){const e=this._subCheckboxes;if(!e.length)return;this.__settingOwnChecked=!0;const t=e.filter(o=>o.checked);switch(e.length-t.length){case 0:this.indeterminate=!1,this.checked=!0;break;case e.length:this.indeterminate=!1,this.checked=!1;break;default:{this.indeterminate=!0;const o=e.filter(i=>i.disabled&&i.checked===!1);this.checked=e.length-t.length-o.length===0}}this.updateComplete.then(()=>{this.__settingOwnChecked=!1})}_setBasedOnMixedState(){switch(this._oldState){case"checked":this.checked=!1,this.indeterminate=!1;break;case"unchecked":this.checked=!1,this.indeterminate=!0;break;case"indeterminate":this.checked=!0,this.indeterminate=!1;break}}__onModelValueChanged(e){if(this.disabled)return;if(e.detail.formPath[0]===this&&!this.__settingOwnChecked){const o=p=>p.every(F=>F===p[0]);this.mixedState&&!o(this._indeterminateSubStates)&&this._setBasedOnMixedState(),this.__settingOwnSubs=!0;const i=this._subCheckboxes,s=i.filter(p=>p.checked),a=i.filter(p=>p.disabled),n=i.length>0&&i.length===s.length;i.length>0&&i.length===a.length&&(this.checked=n),this.indeterminate&&this.mixedState?this._subCheckboxes.forEach((p,F)=>{p.checked=this._indeterminateSubStates[F]}):this._subCheckboxes.filter(p=>!p.disabled).forEach(p=>{p.checked=this._inputNode.checked}),this.updateComplete.then(()=>{this.__settingOwnSubs=!1})}else this._setOwnCheckedState(),this.updateComplete.then(()=>{!this.__settingOwnSubs&&!this.__settingOwnChecked&&this.mixedState&&this._storeIndeterminateState()});this.mixedState&&this._setOldState()}_afterTemplate(){return c`
      <div class="choice-field__nested-checkboxes" role="list">
        <slot></slot>
      </div>
    `}_onRequestToAddFormElement(e){var t;e.target.hasAttribute("role")||(t=e.target)==null||t.setAttribute("role","listitem"),this.__addToSubCheckboxes(e.detail.element),this._setOwnCheckedState()}_onRequestToRemoveFormElement(e){var t;e.target.getAttribute("role")==="listitem"&&((t=e.target)==null||t.removeAttribute("role")),this.__removeFromSubCheckboxes(e.detail.element)}__addToSubCheckboxes(e){e!==this&&this.contains(e)&&this.__subCheckboxes.push(e)}__removeFromSubCheckboxes(e){const t=this.__subCheckboxes.indexOf(e);t!==-1&&this.__subCheckboxes.splice(t,1)}constructor(){super(),this.indeterminate=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this.__onModelValueChanged=this.__onModelValueChanged.bind(this),this.__subCheckboxes=[],this._indeterminateSubStates=[],this.mixedState=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this.__onModelValueChanged),this.addEventListener("form-element-register",this._onRequestToAddFormElement)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this.__onModelValueChanged),this.removeEventListener("form-element-register",this._onRequestToAddFormElement)}firstUpdated(e){super.firstUpdated(e),this._setOldState(),this.indeterminate&&this._storeIndeterminateState()}updated(e){super.updated(e),(e.has("indeterminate")||e.has("checked"))&&(this._inputNode.indeterminate=this.indeterminate)}}const je=m`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    color: var(--co-color-text-default);
    cursor: pointer;
  }

  :host([disabled]) {
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-1) 0;
  }

  /* Visually hide the native checkbox input (sr-only pattern) */
  slot[name='input']::slotted(*) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .checkbox__icon {
    flex: 0 0 auto;
    color: var(--co-color-text-secondary);
    transition: color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .checkbox__icon {
    color: var(--co-color-surface-interactive-primary-default);
  }

  :host([checked]) .checkbox__icon {
    color: var(--co-color-surface-interactive-primary-default);
  }

  :host([_keyboard-focus]) .checkbox__icon {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-control-radius-interactive);
  }

  .checkbox__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    line-height: var(--co-font-line-height-normal);
  }
`;let H=!1;typeof document<"u"&&(document.addEventListener("keydown",()=>{H=!0}),document.addEventListener("mousedown",()=>{H=!1}));function J(r){r.addEventListener("focusin",()=>{H&&r.setAttribute("_keyboard-focus","")}),r.addEventListener("focusout",()=>{r.removeAttribute("_keyboard-focus")})}var pe=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let P=class extends he{constructor(){super(...arguments),this.__forwardingClick=!1}static get styles(){return[...super.styles,je]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),J(this)}render(){return c`
      <div
        part="base"
        class="checkbox"
        @mousedown=${this._onMousedown}
        @click=${this._onCheckboxClick}
      >
        <slot name="input"></slot>
        <co-icon
          part="icon"
          class="checkbox__icon"
          name=${this.checked?"check-box":"check-box-outline-blank"}
          size="sm"
          ?fill=${this.checked}
          aria-hidden="true"
        ></co-icon>
        <span part="label" class="checkbox__label">
          <slot name="label"></slot>
        </span>
      </div>
    `}_onMousedown(e){var t;((t=e.target)==null?void 0:t.slot)!=="input"&&e.preventDefault()}_onCheckboxClick(e){if(this.__forwardingClick||this.disabled)return;const t=e.target,o=this._inputNode;!o||t===o||t instanceof HTMLLabelElement||(this.__forwardingClick=!0,o.click(),o.focus(),this.__forwardingClick=!1)}};pe([l({reflect:!0})],P.prototype,"value",null);P=pe([b("co-checkbox")],P);const He=m`
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
`,Pe=m`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    color: var(--co-color-text-default);
    cursor: pointer;
  }

  :host([disabled]) {
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-1) 0;
  }

  /* Visually hide the native checkbox input (sr-only pattern) */
  slot[name='input']::slotted(*) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .checkbox__icon {
    flex: 0 0 auto;
    color: var(--co-color-text-secondary);
    transition: color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .checkbox__icon {
    color: var(--co-color-surface-interactive-primary-default);
  }

  :host([checked]) .checkbox__icon,
  :host([indeterminate]) .checkbox__icon {
    color: var(--co-color-surface-interactive-primary-default);
  }

  :host([_keyboard-focus]) .checkbox__icon {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-control-radius-interactive);
  }

  .checkbox__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    line-height: var(--co-font-line-height-normal);
  }

  .checkbox__nested {
    padding-inline-start: var(--co-space-6);
  }
`;var fe=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let K=class extends Ue{static get styles(){return[...super.styles,Pe]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),J(this)}get _indicatorIconName(){return this.indeterminate?"indeterminate-check-box":this.checked?"check-box":"check-box-outline-blank"}render(){return c`
      <div
        part="base"
        class="checkbox"
        @mousedown=${this._onMousedown}
        @click=${this._onCheckboxClick}
      >
        <slot name="input"></slot>
        <co-icon
          part="icon"
          class="checkbox__icon"
          name=${this._indicatorIconName}
          size="sm"
          ?fill=${this.checked||this.indeterminate}
          aria-hidden="true"
        ></co-icon>
        <span part="label" class="checkbox__label">
          <slot name="label"></slot>
        </span>
      </div>
      ${this._afterTemplate()}
    `}_afterTemplate(){return c`
      <div part="children" class="checkbox__nested" role="list">
        <slot></slot>
      </div>
    `}_onMousedown(e){var t;((t=e.target)==null?void 0:t.slot)!=="input"&&e.preventDefault()}_onCheckboxClick(e){const t=this._inputNode;if(!t||this.disabled||e.target===t)return;const o=this._subCheckboxes??[],s=!(o.length>0&&o.every(a=>a.checked));this.__settingOwnSubs=!0,o.filter(a=>!a.disabled).forEach(a=>{a.checked=s,a._inputNode&&(a._inputNode.checked=s)}),this.checked=s,this.indeterminate=!1,t.checked=s,this.updateComplete.then(()=>{this.__settingOwnSubs=!1,t.focus()})}};fe([l({reflect:!0})],K.prototype,"value",null);K=fe([b("co-checkbox-indeterminate")],K);var ee=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let L=class extends $e{constructor(){super(...arguments),this.required=!1,this.requiredMessage="",this._validation=new I(this),this._handleModelValueChanged=e=>{var o;const t=e;t.target!==this||(o=t.detail)!=null&&o.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,He]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){C(this),super.firstUpdated(e),this._syncValidation(!0,!0)}updated(e){C(this),super.updated(e),(e.has("validators")||e.has("required")||e.has("requiredMessage"))&&this._syncValidation(e.has("validators"),e.has("required")||e.has("requiredMessage"))}render(){return c`
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
    `}_syncValidation(e=!1,t=!1){this._validation.sync(()=>this.required?[D(this.requiredMessage,"Select at least one option.")]:[],e,t)}};ee([l({type:Boolean,reflect:!0})],L.prototype,"required",void 0);ee([l({attribute:"required-message"})],L.prototype,"requiredMessage",void 0);L=ee([b("co-checkbox-group")],L);const O=new WeakMap;function me(r,e){Array.from(r.childNodes).forEach(t=>{if(t.nodeName==="#text"){const o=new RegExp(`^(.*?)(${e})(.*)$`,"i"),i=t.nodeValue.match(o);if(i){const s=document.createTextNode(i[1]);r.appendChild(s);const a=document.createElement("b");a.textContent=i[2],r.appendChild(a);const n=document.createTextNode(i[3]);r.appendChild(n),r.removeChild(t),O.set(r,()=>{r.appendChild(t),r.contains(s)&&s.parentNode!==null&&s.parentNode.removeChild(s),r.contains(a)&&a.parentNode!==null&&a.parentNode.removeChild(a),r.contains(n)&&n.parentNode!==null&&n.parentNode.removeChild(n)})}}else me(t,e)})}function _e(r){O.has(r)&&O.get(r)(),Array.from(r.childNodes).forEach(e=>{e.nodeName==="#text"?O.has(e)&&O.get(e)():_e(e)})}class te extends _{static get validatorName(){return"MatchesOption"}execute(e,t,o){return(o==null?void 0:o.node.modelValue)instanceof j}}function T(r){return Array.isArray(r)?r:[r]}const Ke=r=>class extends X(r){static get properties(){return{allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},modelValue:{type:Object}}}get modelValue(){return this.__getChoicesFrom(super.modelValue)}set modelValue(t){if(super.modelValue=t,t==null||t==="")this._customChoices=new Set;else if(this.allowCustomChoice){const o=this.modelValue;this._customChoices=new Set(T(t)),this.requestUpdate("modelValue",o)}}get formattedValue(){return this.__getChoicesFrom(super.formattedValue)}set formattedValue(t){if(super.formattedValue=t,t==null)this._customChoices=new Set;else if(this.allowCustomChoice){const o=this.modelValue;this._customChoices=new Set(T(t).map(i=>{var s;return((s=this.formElements.find(a=>a.formattedValue===i))==null?void 0:s.modelValue)||i})),this.requestUpdate("modelValue",o)}}get serializedValue(){return this.__getChoicesFrom(super.serializedValue)}set serializedValue(t){if(super.serializedValue=t,t==null)this._customChoices=new Set;else if(this.allowCustomChoice){const o=this.modelValue;this._customChoices=new Set(T(t).map(i=>{var s;return((s=this.formElements.find(a=>a.serializedValue===i))==null?void 0:s.modelValue)||i})),this.requestUpdate("modelValue",o)}}get customChoices(){if(!this.allowCustomChoice)return[];const t=this._getCheckedElements();return Array.from(this._customChoices).filter(o=>!t.some(i=>i.choiceValue===o))}constructor(){super(),this.allowCustomChoice=!1,this._customChoices=new Set}__getChoicesFrom(t){const o=t;return this.allowCustomChoice?this.multipleChoice?[...T(o),...this.customChoices]:o===""?this._customChoices.values().next().value||"":o:o}_isEmpty(){return super._isEmpty()&&this._customChoices.size===0}clear(){this._customChoices=new Set,super.clear()}parser(t){return this.allowCustomChoice&&Array.isArray(t)?t.filter(o=>o.trim()!==""):t}},We=ue(Ke),$=new WeakMap;class Qe extends ze(Ve(We(de))){static get properties(){return{autocomplete:{type:String,reflect:!0},matchMode:{type:String,attribute:"match-mode"},showAllOnEmpty:{type:Boolean,attribute:"show-all-on-empty"},requireOptionMatch:{type:Boolean},allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},__shouldAutocompleteNextUpdate:Boolean}}static get styles(){return[...super.styles,m`
        .input-group__input {
          display: flex;
          flex: 1;
        }

        .input-group__container {
          display: flex;
          border-bottom: 1px solid;
        }

        * > ::slotted([slot='input']) {
          outline: none;
          flex: 1;
          box-sizing: border-box;
          border: none;
          width: 100%;
          /* border-bottom: 1px solid; */
        }

        * > ::slotted([role='listbox']) {
          max-height: 200px;
          display: block;
          overflow: auto;
          z-index: 1;
          background: white;
        }
      `]}static get localizeNamespaces(){return[{"lion-combobox":e=>{switch(e){case"bg-BG":case"bg":return f(()=>import("./bg.CnMxkYth.js"),[]);case"cs-CZ":case"cs":return f(()=>import("./cs.wLKWYoEd.js"),[]);case"de-AT":case"de-DE":case"de":return f(()=>import("./de.BMTIiI_u.js"),[]);case"en-AU":case"en-GB":case"en-PH":case"en-US":case"en":return f(()=>import("./en.bt6AHwUY.js"),[]);case"es-ES":case"es":return f(()=>import("./es.DtqAq6rp.js"),[]);case"fr-FR":case"fr-BE":case"fr":return f(()=>import("./fr.TvxLRXi9.js"),[]);case"hu-HU":case"hu":return f(()=>import("./hu.LTktcuIp.js"),[]);case"it-IT":case"it":return f(()=>import("./it.CLQp6VRo.js"),[]);case"nl-BE":case"nl-NL":case"nl":return f(()=>import("./nl.BPWGiqq3.js"),[]);case"pl-PL":case"pl":return f(()=>import("./pl.C-Y5rsX-.js"),[]);case"ro-RO":case"ro":return f(()=>import("./ro.DQbjJcYj.js"),[]);case"ru-RU":case"ru":return f(()=>import("./ru.DWmtva8q.js"),[]);case"sk-SK":case"sk":return f(()=>import("./sk.b2xDu6DA.js"),[]);case"uk-UA":case"uk":return f(()=>import("./uk.CHbv7RzQ.js"),[]);case"zh-CN":case"zh":return f(()=>import("./zh.CKc3I4YQ.js"),[]);default:return f(()=>import("./en.bt6AHwUY.js"),[])}}},...super.localizeNamespaces]}get modelValue(){const e=super.modelValue;return e!==""?e:this.parser(this.value)}set modelValue(e){super.modelValue=e}get value(){var e;return((e=this._inputNode)==null?void 0:e.value)||this.__value||""}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}reset(){super.reset(),this.multipleChoice||(this.value=this._initialModelValue),this._resetListboxOptions()}_resetListboxOptions(){this.formElements.forEach((e,t)=>{this._unhighlightMatchedOption(e),!this.showAllOnEmpty||!this.opened?e.style.display="none":(e.style.display="",e.setAttribute("aria-posinset",`${t+1}`),e.setAttribute("aria-setsize",`${this.formElements.length}`),e.removeAttribute("aria-hidden"))})}_inputGroupInputTemplate(){return c`
      <div class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_overlayListboxTemplate(){return c`
      <div
        id="overlay-content-node-wrapper"
        role="dialog"
        aria-label="${this.msgLit("lion-combobox:optionsPopup")}"
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_groupTwoTemplate(){return c` ${super._groupTwoTemplate()} ${this._overlayListboxTemplate()}`}get slots(){return{...super.slots,input:()=>{if(this._ariaVersion==="1.1"){const e=document.createElement("div"),t=document.createElement("input");return t.style.cssText=`
          border: none;
          outline: none;
          width: 100%;
          height: 100%;
          font: inherit;
          background: inherit;
          color: inherit;
          border-radius: inherit;
          box-sizing: border-box;
          padding: 0;`,e.appendChild(t),e}return document.createElement("input")},listbox:super.slots.input}}get _comboboxNode(){return this.querySelector('[slot="input"]')}get _selectionDisplayNode(){return this.querySelector('[slot="selection-display"]')}get _inputNode(){return this._ariaVersion==="1.1"&&this._comboboxNode?this._comboboxNode.querySelector("input")||this._comboboxNode:this._comboboxNode}get _overlayContentNode(){return this._listboxNode}get _overlayReferenceNode(){return this.shadowRoot.querySelector(".input-group__container")}get _overlayInvokerNode(){return this._inputNode}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(e=>e.slot==="listbox")}get _activeDescendantOwnerNode(){return this._inputNode}get requireOptionMatch(){return!this.allowCustomChoice}set requireOptionMatch(e){this.allowCustomChoice=!e}constructor(){super(),this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.requireOptionMatch=!0,this.rotateKeyboardNavigation=!0,this.selectionFollowsFocus=!0,this.defaultValidators.push(new te),this._ariaVersion=Fe.isChromium?"1.1":"1.0",this._listboxReceivesNoFocus=!0,this._noTypeAhead=!0,this.__prevCboxValueNonSelected="",this.__prevCboxValue="",this.__hadUserIntendsInlineAutoFill=!1,this.__listboxContentChanged=!1,this._onKeyUp=this._onKeyUp.bind(this),this._textboxOnClick=this._textboxOnClick.bind(this),this._textboxOnInput=this._textboxOnInput.bind(this),this._textboxOnKeydown=this._textboxOnKeydown.bind(this)}connectedCallback(){super.connectedCallback(),this._selectionDisplayNode&&(this._selectionDisplayNode.comboboxElement=this),(this.disabled||this.readOnly)&&this.__setComboboxDisabledAndReadOnly()}requestUpdate(e,t,o){if(super.requestUpdate(e,t,o),(e==="disabled"||e==="readOnly")&&this.__setComboboxDisabledAndReadOnly(),e==="modelValue"&&this.modelValue&&this.modelValue!==t&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue))if(this.multipleChoice)this._syncToTextboxMultiple(this.modelValue,this._oldModelValue);else{const i=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]);this._setTextboxValue(i)}}parser(e){return this.requireOptionMatch&&this.checkedIndex===-1&&e!==""&&!Array.isArray(e)?new j(e):super.parser(e)}__unsyncCheckedIndexOnInputChange(){const e=this._autoSelectCondition(),t=this.formElements[this.checkedIndex];if(!this.multipleChoice&&!e&&t){const o=this._getTextboxValueFromOption(t);this._inputNode.value.startsWith(o)||this.setCheckedIndex(-1)}}updated(e){var t;super.updated(e),e.has("__shouldAutocompleteNextUpdate")&&this.__unsyncCheckedIndexOnInputChange(),e.has("opened")&&(this.opened&&(this.activeIndex=-1),!this.opened&&e.get("opened")!==void 0&&(this.__onOverlayClose(),this.activeIndex=-1)),e.has("autocomplete")&&this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`),e.has("__shouldAutocompleteNextUpdate")&&this.__shouldAutocompleteNextUpdate&&(this._handleAutocompletion(),this.__shouldAutocompleteNextUpdate=!1,this.__listboxContentChanged=!1),typeof((t=this._selectionDisplayNode)==null?void 0:t.onComboboxElementUpdated)=="function"&&this._selectionDisplayNode.onComboboxElementUpdated(e)}matchCondition(e,t){let o=-1;const i=this._getTextboxValueFromOption(e);return typeof i=="string"&&typeof t=="string"&&(o=i.toLowerCase().indexOf(t.toLowerCase())),this.matchMode==="all"?o>-1:o===0}_showOverlayCondition({lastKey:e}){const t=["Tab","Escape"],o=["Enter"];return this.disabled||this.readOnly||e&&(t.includes(e)||!this.multipleChoice&&o.includes(e))?!1:this.filled||this.showAllOnEmpty||!this.filled&&this.multipleChoice&&this.__prevCboxValueNonSelected?!0:this.opened}_getTextboxValueFromOption(e){return e?e.choiceValue:this.modelValue instanceof j?this.modelValue.viewValue:this.modelValue}_onListboxContentChanged(){super._onListboxContentChanged(),this.__shouldAutocompleteNextUpdate=!0,this.__listboxContentChanged=!0}_textboxOnInput(e){this.__shouldAutocompleteNextUpdate=!0,this.opened=this._showOverlayCondition({})}_textboxOnKeydown(e){e.key==="Tab"&&(this.opened=!1)}_listboxOnClick(e){super._listboxOnClick(e),this._inputNode.focus(),this.multipleChoice?(this._inputNode.value="",this._resetListboxOptions()):(this.activeIndex=-1,this.opened=!1)}_setTextboxValue(e){this._inputNode&&this._inputNode.value!==e&&(this._inputNode.value=e)}__onOverlayClose(){this.multipleChoice?this._syncToTextboxMultiple(this.modelValue,this._oldModelValue):this.checkedIndex!==-1&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue,{phase:"overlay-close"})&&(this._inputNode.value=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]))}_repropagationCondition(e){return super._repropagationCondition(e)||this.formElements.every(t=>!t.checked)}_onFilterMatch(e,t){this._highlightMatchedOption(e,t),e.style.display=""}_highlightMatchedOption(e,t){if(me(e,t),e.textContent){const o=document.createElement("span");o.setAttribute("aria-label",e.textContent.replace(/\s+/g," ")),Array.from(e.childNodes).forEach(i=>{o.appendChild(i)}),e.appendChild(o),$.set(e,()=>{Array.from(o.childNodes).forEach(i=>{e.appendChild(i)}),e.contains(o)&&e.removeChild(o)})}}_onFilterUnmatch(e,t,o){this._unhighlightMatchedOption(e),e.style.display="none"}_unhighlightMatchedOption(e){_e(e),$.has(e)&&$.get(e)()}__computeUserIntendsAutoFill({prevValue:e,curValue:t}){const o=e.length<t.length,i=e.length&&t.length&&e[0].toLowerCase()!==t[0].toLowerCase();return o||i||this.__listboxContentChanged&&this.__hadUserIntendsInlineAutoFill}_handleAutocompletion(){const t=!(this._inputNode.selectionStart===this._inputNode.selectionEnd)&&this._inputNode.value.length!==this._inputNode.selectionStart,o=this._inputNode.value,i=this._inputNode.selectionStart,s=t&&i?o.slice(0,i):o,a=t||this.__hadSelectionLastAutofill?this.__prevCboxValueNonSelected:this.__prevCboxValue,n=!s,y=[];let p=!1;const F=this.__computeUserIntendsAutoFill({prevValue:a,curValue:s}),ge=this.autocomplete==="both"||this.autocomplete==="inline",ie=this._autoSelectCondition(),ye=this.autocomplete==="inline"||this.autocomplete==="none";this.formElements.forEach((u,R)=>{const se=this.matchCondition(u,s);let B=!1;if(n?B=this.showAllOnEmpty:B=ye||se,ie&&!p&&se&&!u.disabled){const re=()=>{this.activeIndex=R,this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex),p=!0};if(F)if(ge){const G=this._getTextboxValueFromOption(u);typeof G=="string"&&G!==""&&typeof s=="string"&&s!==""&&G.toLowerCase().indexOf(s.toLowerCase())===0&&(this.__textboxInlineComplete(u),re())}else re()}u.onFilterUnmatch?u.onFilterUnmatch(s,a):this._onFilterUnmatch(u,s,a),u.setAttribute("aria-hidden","true"),u.removeAttribute("aria-posinset"),u.removeAttribute("aria-setsize"),B&&(y.push(u),u.onFilterMatch?u.onFilterMatch(s):this._onFilterMatch(u,s))});const xe=y.length;y.forEach((u,R)=>{u.setAttribute("aria-posinset",`${R+1}`),u.setAttribute("aria-setsize",`${xe}`),u.removeAttribute("aria-hidden")}),ie&&!p&&!this.multipleChoice&&(this.setCheckedIndex(-1),a!==s&&(this.activeIndex=-1),this.modelValue=this.parser(o)),this.__prevCboxValueNonSelected=s,this.__prevCboxValue=this._inputNode.value,this.__hadSelectionLastAutofill=this._inputNode.value.length!==this._inputNode.selectionStart,this.__hadUserIntendsInlineAutoFill=F,this._overlayCtrl&&this._overlayCtrl._popper&&this._overlayCtrl._popper.update()}__textboxInlineComplete(e=this.formElements[this.activeIndex]){const t=this._getTextboxValueFromOption(e);if(this._inputNode.value!==t){const o=this._inputNode.value.length;this._inputNode.value=t,this._inputNode.selectionStart=o,this._inputNode.selectionEnd=this._inputNode.value.length}}_autoSelectCondition(){return this.autocomplete==="both"||this.autocomplete==="inline"}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.removeAttribute("tabindex")}_defineOverlayConfig(){return{...Me(),elementToFocusAfterHide:void 0,invokerNode:this._comboboxNode,visibilityTriggerFunction:void 0}}_setupOverlayCtrl(){super._setupOverlayCtrl(),this.__shouldAutocompleteNextUpdate=!0,this.__setupCombobox()}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this.__teardownCombobox()}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._inputNode.addEventListener("keyup",this._onKeyUp),this._inputNode.addEventListener("click",this._textboxOnClick)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._inputNode.removeEventListener("keyup",this._onKeyUp),this._inputNode.removeEventListener("click",this._textboxOnClick)}_listboxOnKeyDown(e){const{key:t}=e;switch(t){case"Escape":this.opened=!1,super._listboxOnKeyDown(e),this._setTextboxValue("");break;case"Backspace":case"Delete":this.requireOptionMatch?super._listboxOnKeyDown(e):this.opened=!1;break;case"Enter":this.opened&&e.preventDefault(),!this.requireOptionMatch&&this.multipleChoice&&(!this.formElements[this.activeIndex]||this.formElements[this.activeIndex].hasAttribute("aria-hidden")||!this.opened)?(this.modelValue=this.parser([...this.modelValue,this._inputNode.value]),this._inputNode.value="",this.opened=!1):(super._listboxOnKeyDown(e),this._resetListboxOptions()),this.multipleChoice?this._inputNode.value="":this.opened=!1;break;default:{super._listboxOnKeyDown(e);break}}}_syncToTextboxCondition(e,t,{phase:o}={}){return this.autocomplete==="both"||this.autocomplete==="inline"||!this.focused}_syncToTextboxMultiple(e,t=[]){if(this.requireOptionMatch){const o=e.filter(s=>!t.includes(s)),i=this.formElements.filter(s=>o.includes(s.choiceValue)).map(s=>this._getTextboxValueFromOption(s)).join(" ");this._setTextboxValue(i)}}_enhanceLightDomClasses(){const e=this.querySelector("[slot=input]");e&&e.classList.add("form-control")}__setComboboxDisabledAndReadOnly(){this._comboboxNode&&(this._comboboxNode.toggleAttribute("disabled",this.disabled),this._comboboxNode.setAttribute("aria-disabled",`${this.disabled}`),this._comboboxNode.toggleAttribute("readonly",this.readOnly),this._comboboxNode.setAttribute("aria-readonly",`${this.readOnly}`)),this._inputNode&&(this._inputNode.toggleAttribute("disabled",this.disabled),this._inputNode.toggleAttribute("readOnly",this.readOnly),this._inputNode.setAttribute("aria-readonly",`${this.readOnly}`),this._inputNode.tabIndex=this.disabled?-1:0)}__setupCombobox(){this._comboboxNode.setAttribute("role","combobox"),this._comboboxNode.setAttribute("aria-haspopup","listbox"),this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),this._comboboxNode.setAttribute("aria-controls",this._listboxNode.id),this._ariaVersion==="1.1"?this._comboboxNode.setAttribute("aria-owns",this._listboxNode.id):this._inputNode.setAttribute("aria-owns",this._listboxNode.id),this._listboxNode.setAttribute("aria-labelledby",this._labelNode.id),this._inputNode.addEventListener("keydown",this._listboxOnKeyDown),this._inputNode.addEventListener("input",this._textboxOnInput),this._inputNode.addEventListener("keydown",this._textboxOnKeydown)}__teardownCombobox(){this._inputNode.removeEventListener("keydown",this._listboxOnKeyDown),this._inputNode.removeEventListener("input",this._textboxOnInput),this._inputNode.removeEventListener("keydown",this._textboxOnKeydown)}_onKeyUp(e){const t=e&&e.key;this.opened=this._showOverlayCondition({lastKey:t,currentValue:this._inputNode.value})}_textboxOnClick(e){this.opened=this._showOverlayCondition({})}clear(){this.value="",super.clear(),this.__shouldAutocompleteNextUpdate=!0}}const Ye=m`
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
    position: relative;
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
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-border-width-default));
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
    outline: var(--co-focus-ring-width) solid var(--co-color-border-danger);
    outline-offset: calc(-1 * var(--co-border-width-default));
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

  :host([size='md']) {
    font-size: var(--co-font-size-p);
  }

  :host([size='sm']) .input-group__container {
    min-block-size: var(--co-control-height-md);
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-h6);
  }

  :host([size='lg']) .input-group__container {
    min-block-size: var(--co-control-height-lg);
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
  }

  :host([size='xl']) .input-group__container {
    min-block-size: var(--co-control-height-xl);
    padding-inline: var(--co-space-inset-sm);
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

  /* ── Chevron indicator ── */

  .combobox__chevron {
    color: var(--co-color-text-default);
    cursor: pointer;
    transition: transform var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host([opened]) .combobox__chevron {
    transform: rotate(180deg);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal);
  }

  [data-overlay-outer-wrapper] {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    inline-size: 0;
    block-size: 0;
    max-inline-size: none;
    max-block-size: none;
    margin: 0;
    border: 0;
    padding: 0;
    overflow: visible;
    background: transparent;
    color: inherit;
  }

  #overlay-content-node-wrapper {
    inline-size: 100%;
    min-inline-size: min(20rem, 100vw);
    /* Gap between input and dropdown is controlled by Popper offset in _defineOverlayConfig */
    border: var(--co-border-width-panel) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius-interactive);
    background: var(--co-color-surface-static-default);
    box-shadow: var(--co-elevation-shadow-lg);
    overflow: hidden;
  }

  slot[name='input']::slotted(input),
  slot[name='input']::slotted([role='combobox']) {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    inline-size: 100%;
    min-inline-size: 0;
    min-block-size: 100%;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: inherit;
  }

  slot[name='input']::slotted(input:disabled),
  slot[name='input']::slotted([disabled]) {
    cursor: not-allowed;
  }

  slot[name='input']::slotted(input:read-only),
  slot[name='input']::slotted([readonly]) {
    cursor: default;
  }

  slot[name='selection-display']::slotted(*) {
    display: inline-flex;
    align-items: center;
    min-inline-size: 0;
  }

  slot[name='listbox']::slotted([role='listbox']) {
    display: grid;
    inline-size: 100%;
    max-block-size: 18rem;
    overflow: auto;
    gap: var(--co-space-1);
    padding: var(--co-space-1);
    background: var(--co-color-surface-static-default);
    color: var(--co-color-text-default);
    outline: 0;
  }
`;var h=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};class Xe extends te{static async getMessage(e){var t;return(t=e==null?void 0:e.config)!=null&&t.getMessage?e.config.getMessage():"Please select a valid option."}}let d=class extends Qe{constructor(){super(...arguments),this.size="md",this.danger=!1,this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.selectionFollowsFocus=!0,this.rotateKeyboardNavigation=!0,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.multiple=!1,this.allowCustomChoice=!1,this.required=!1,this.requiredMessage="",this.pattern="",this.patternMessage="",this.matchError="",this._validation=new I(this),this._matchesOptionValidator=new Xe,this._handleFocusIn=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-input",{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))},this._handleModelValueChanged=e=>{var o;const t=e;t.target!==this||(o=t.detail)!=null&&o.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.value,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,Ye]}get requireOptionMatch(){return super.requireOptionMatch}set requireOptionMatch(e){super.requireOptionMatch=e}connectedCallback(){super.connectedCallback(),this._replaceMatchesOptionValidator(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){C(this),super.firstUpdated(e),this._syncMultipleAlias(),this._syncValidation(!0,!0)}updated(e){this._syncMultipleAlias(e),C(this),super.updated(e),this._validationPropsChanged(e)&&this._syncValidation(e.has("validators"),this._validationRulesChanged(e)),e.has("allowCustomChoice")&&this.requestUpdate("requireOptionMatch",!this.allowCustomChoice),e.has("matchError")&&this._syncMatchErrorMessage(),(e.has("multiple")||e.has("multipleChoice")||e.has("required"))&&this._syncListboxAttributes()}_labelTemplate(){return c`
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
        `:E}_inputGroupInputTemplate(){return c`
      <div part="input" class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){const e={sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm";return c`
      <div
        part="suffix"
        class="input-group__suffix"
        @mousedown=${this._onSuffixMousedown}
        @click=${this._onSuffixClick}
      >
        <slot name="suffix">
          <co-icon
            class="combobox__chevron"
            name="keyboard-arrow-down"
            size=${e}
            aria-hidden="true"
          ></co-icon>
        </slot>
      </div>
    `}_preventFocusShift(e){e.preventDefault()}_onSuffixMousedown(e){this._preventFocusShift(e)}_onOverlayMousedown(e){this._preventFocusShift(e)}_onSuffixClick(){var e;this.disabled||this.readOnly||((e=this._inputNode)==null||e.focus(),this.opened?this.opened=!1:this._hasVisibleOptions()&&(this.opened=!0))}_hasVisibleOptions(){return(this.formElements??[]).some(t=>t.style.display!=="none")}_overlayListboxTemplate(){return c`
      <div
        id="overlay-content-node-wrapper"
        part="overlay"
        role="dialog"
        aria-label="Options"
        @mousedown=${this._onOverlayMousedown}
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_feedbackTemplate(){return c`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_handleAutocompletion(){super._handleAutocompletion(),!this.formElements.some(t=>t.style.display!=="none")&&this.opened&&requestAnimationFrame(()=>{this.opened&&!this.formElements.some(t=>t.style.display!=="none")&&(this.opened=!1)})}_showOverlayCondition(e){var s;if(!this._hasVisibleOptions())return!1;const t=super._showOverlayCondition(e),o=(s=this._inputNode)==null?void 0:s.value,i=["Enter","Escape","Tab"];return!t&&e.lastKey&&i.includes(e.lastKey)?!1:!t&&o&&this.formElements.length>0?this.formElements.some(a=>this.matchCondition(a,o)):t&&o&&this.formElements.length>0?this.formElements.some(a=>this.matchCondition(a,o)):t}_defineOverlayConfig(){var t;const e=super._defineOverlayConfig();return{...e,_noDialogEl:!0,popperConfig:{...e.popperConfig,modifiers:[...(((t=e.popperConfig)==null?void 0:t.modifiers)??[]).filter(o=>o.name!=="offset"),{name:"offset",enabled:!0,options:{offset:[0,parseInt(Se,10)]}}]}}}_syncMultipleAlias(e){if(e!=null&&e.has("multiple")&&this.multipleChoice!==this.multiple){this.multipleChoice=this.multiple;return}if(e!=null&&e.has("multipleChoice")&&this.multiple!==this.multipleChoice){this.multiple=this.multipleChoice;return}!e&&this.multiple!==this.multipleChoice&&(this.multipleChoice=this.multiple||this.multipleChoice,this.multiple=this.multipleChoice)}_syncValidation(e=!1,t=!1){this._validation.sync(()=>{const o=[];return this.required&&o.push(D(this.requiredMessage,"Select an option.")),this.pattern&&o.push(Ce(this.pattern,this.patternMessage)),o},e,t)}_replaceMatchesOptionValidator(){this.defaultValidators=this.defaultValidators.map(e=>e instanceof te?this._matchesOptionValidator:e),this._syncMatchErrorMessage()}_syncMatchErrorMessage(){this.matchError&&(this._matchesOptionValidator.config={...this._matchesOptionValidator.config,getMessage:()=>this.matchError})}_syncListboxAttributes(){const e=this.querySelector('[slot="listbox"]');e&&(e.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this.required?e.setAttribute("aria-required","true"):e.removeAttribute("aria-required"))}_validationPropsChanged(e){return["validators","required","requiredMessage","pattern","patternMessage"].some(o=>e.has(o))}_validationRulesChanged(e){return["required","requiredMessage","pattern","patternMessage"].some(o=>e.has(o))}};h([l({reflect:!0})],d.prototype,"size",void 0);h([l({type:Boolean,reflect:!0})],d.prototype,"danger",void 0);h([l({reflect:!0})],d.prototype,"autocomplete",void 0);h([l({attribute:"match-mode",reflect:!0})],d.prototype,"matchMode",void 0);h([l({type:Boolean,attribute:"show-all-on-empty",reflect:!0})],d.prototype,"showAllOnEmpty",void 0);h([l({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],d.prototype,"selectionFollowsFocus",void 0);h([l({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],d.prototype,"rotateKeyboardNavigation",void 0);h([l({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],d.prototype,"hasNoDefaultSelected",void 0);h([l({type:Boolean,attribute:"multiple-choice",reflect:!0})],d.prototype,"multipleChoice",void 0);h([l({type:Boolean,reflect:!0})],d.prototype,"multiple",void 0);h([l({type:Boolean,attribute:"allow-custom-choice",reflect:!0})],d.prototype,"allowCustomChoice",void 0);h([l({type:Boolean,reflect:!0})],d.prototype,"required",void 0);h([l({attribute:"required-message"})],d.prototype,"requiredMessage",void 0);h([l({reflect:!0})],d.prototype,"pattern",void 0);h([l({attribute:"pattern-message"})],d.prototype,"patternMessage",void 0);h([l({attribute:"match-error"})],d.prototype,"matchError",void 0);h([l({type:Boolean,attribute:"require-option-match"})],d.prototype,"requireOptionMatch",null);d=h([b("co-combobox")],d);class Ze extends Z(M){constructor(){super(),this._isFormOrFieldset=!0,this._repropagationRole="fieldset"}}const ne=()=>{throw new Error("No form node found. Did you put a <form> element inside your custom-form element?")};class Je extends Ze{constructor(){super(),this._submit=this._submit.bind(this),this._reset=this._reset.bind(this)}connectedCallback(){super.connectedCallback(),this.__registerEventsForLionForm(),this.removeAttribute("role")}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForLionForm()}get _formNode(){return this.querySelector("form")}submit(){this._formNode?this._formNode.dispatchEvent(new Event("submit",{cancelable:!0})):ne()}_submit(e){var t;e.preventDefault(),e.stopPropagation(),this.submitGroup(),this.dispatchEvent(new Event("submit",{bubbles:!0})),(t=this.hasFeedbackFor)!=null&&t.includes("error")&&this._setFocusOnFirstErroneousFormElement(this)}reset(){this._formNode?this._formNode.reset():ne()}_reset(e){e.preventDefault(),e.stopPropagation(),this.resetGroup(),this.dispatchEvent(new Event("reset",{bubbles:!0}))}_setFocusOnFirstErroneousFormElement(e){const t=e.formElements.find(o=>o.hasFeedbackFor.includes("error"))||e.formElements[0];t._focusableNode?t._focusableNode.focus():this._setFocusOnFirstErroneousFormElement(t)}__registerEventsForLionForm(){this._formNode.addEventListener("submit",this._submit),this._formNode.addEventListener("reset",this._reset)}__teardownEventsForLionForm(){this._formNode.removeEventListener("submit",this._submit),this._formNode.removeEventListener("reset",this._reset)}}const et=m`
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
`;var be=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let W=class extends Je{constructor(){super(...arguments),this.disabled=!1,this._internalForm=document.createElement("form"),this._handleFormButtonClick=e=>{const t=e.composedPath().find(i=>i instanceof HTMLElement&&(i.localName==="co-button"||i.localName==="co-button-icon"));if(!t||t.hasAttribute("href")||t.hasAttribute("disabled"))return;const o=t.getAttribute("type")??"submit";o!=="submit"&&o!=="reset"||t.closest("form")||(e.preventDefault(),o==="reset"?this.reset():this.submit())}}static get styles(){return[...super.styles,et]}get _formNode(){return this.querySelector("form")??this._internalForm}connectedCallback(){this._syncNoValidate(),super.connectedCallback(),this.addEventListener("click",this._handleFormButtonClick)}disconnectedCallback(){this.removeEventListener("click",this._handleFormButtonClick),super.disconnectedCallback()}addFormElement(e,t){const o=e;if(this._canUseLionFormRegistration(o)){super.addFormElement(e,t);return}this._addArrayOnlyFormElement(o,t??-1)}_labelTemplate(){return c`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return c`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_feedbackTemplate(){return c`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}async _submit(e){var o;super._submit(e);const t={modelValue:this.modelValue,serializedValue:this.serializedValue};if((o=this.hasFeedbackFor)!=null&&o.includes("error")){await this._waitForFeedback(),this.dispatchEvent(new CustomEvent("co-invalid-submit",{detail:{...t,errors:this._collectValidationErrors()},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("co-submit",{detail:t,bubbles:!0,composed:!0}))}_reset(e){if(super._reset(e),this._formNode)for(const o of this._nativeFormControls())"resetGroup"in o||(o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?o.value=o.defaultValue:o instanceof HTMLSelectElement&&(o.selectedIndex=0));this.dispatchEvent(new CustomEvent("co-reset",{bubbles:!0,composed:!0}))}_syncNoValidate(){const e=this._formNode;e.setAttribute("novalidate",""),e.noValidate=!0}_canUseLionFormRegistration(e){var o;const t=e.name??"";return!t||t===this.name?!1:t.endsWith("[]")?!0:!((o=this.formElements)!=null&&o[t])}_addArrayOnlyFormElement(e,t){var i,s,a;e._parentFormGroup=this,t>=0?this.formElements.splice(t,0,e):this.formElements.push(e),this.disabled&&((i=e.makeRequestToBeDisabled)==null||i.call(e));const o=this;(s=o.__storeAllDescriptionElementsInParentChain)==null||s.call(o),(a=o.__linkParentMessages)==null||a.call(o,e),this.validate({clearCurrentResult:!0})}_nativeFormControls(){const e=Array.from(this._formNode.elements);return this._formNode===this._internalForm&&e.push(...Array.from(this.querySelectorAll("input, textarea, select"))),e}async _waitForFeedback(){await Promise.all(this._collectFormControls().map(e=>e.feedbackComplete).filter(Boolean))}_collectValidationErrors(){return this._collectFormControls().filter(e=>{var t;return(t=e.hasFeedbackFor)==null?void 0:t.includes("error")}).filter(e=>ke(e)).map(e=>({element:e,name:e.getAttribute("name")??"",fieldName:e.fieldName??e.getAttribute("label")??"",messages:this._getFeedbackMessages(e),validationStates:e.validationStates??{}}))}_collectFormControls(){const e=[],t=o=>{e.push(o);for(const i of Array.from(o.formElements??[]))t(i)};for(const o of Array.from(this.formElements??[]))t(o);return e}_getFeedbackMessages(e){var t,o;return((o=(t=e._feedbackNode)==null?void 0:t.feedbackData)==null?void 0:o.filter(i=>i.type==="error").map(i=>this._messageToText(i.message)).filter(i=>i.length>0))??[]}_messageToText(e){var t;return typeof e=="string"?e:((t=e==null?void 0:e.textContent)==null?void 0:t.trim())??""}};be([l({type:Boolean,reflect:!0})],W.prototype,"disabled",void 0);W=be([b("co-form")],W);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=r=>r??E;var A=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},z;let w=z=class extends M{constructor(){super(...arguments),this.required=!1,this.optional=!1,this.optionalLabel="(optional)",this._addedLabelledByToken=!1,this._handleClick=()=>{var t;if(!this.htmlFor)return;const e=(t=this.ownerDocument)==null?void 0:t.getElementById(this.htmlFor);e instanceof HTMLElement&&queueMicrotask(()=>{var o;this._hasFocusWithin(e)||(e.focus(),!this._hasFocusWithin(e)&&((o=this._findFocusableDescendant(e))==null||o.focus()))})}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){this.removeEventListener("click",this._handleClick),this._clearTargetLabelling(),super.disconnectedCallback()}firstUpdated(){this._syncTargetLabelling()}updated(e){e.has("htmlFor")&&this._syncTargetLabelling()}render(){return c`
      <style data-co-label-internal="true">
        .co-label__root {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-gap-sm);
          color: var(--co-color-text-default);
          cursor: default;
          font-family: var(--co-font-family-sans);
          font-size: var(--co-typography-label-size);
          font-weight: var(--co-typography-label-weight);
          letter-spacing: var(--co-typography-label-tracking);
          line-height: var(--co-typography-label-line-height);
        }

        .co-label__root--interactive {
          cursor: pointer;
        }

        .co-label__required {
          color: var(--co-color-feedback-danger-text);
        }

        .co-label__text-group {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-1);
          min-inline-size: 0;
        }

        .co-label__content,
        .co-label__content > * {
          min-inline-size: 0;
        }

        .co-label__content {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-gap-sm);
          color: inherit;
        }

        .co-label__content:empty {
          display: none;
        }

        .co-label__optional {
          color: var(--co-color-text-secondary);
          font-weight: var(--co-font-weight-regular);
        }
      </style>
      <label
        data-co-label-internal="true"
        class=${`co-label__root${this.htmlFor?" co-label__root--interactive":""}`}
        for=${tt(this.htmlFor||void 0)}
      >
        ${this.required?c`<span class="co-label__required" aria-hidden="true">*</span>`:E}
        <span
          data-co-label-internal="true"
          class="co-label__content co-label__content--prefix"
        >
          <slot name="prefix"></slot>
        </span>
        <span data-co-label-internal="true" class="co-label__text-group">
          <span
            data-co-label-internal="true"
            class="co-label__content co-label__content--default"
          >
            <slot></slot>
          </span>
          ${this._optionalTemplate()}
        </span>
        <span
          data-co-label-internal="true"
          class="co-label__content co-label__content--suffix"
        >
          <slot name="suffix"></slot>
        </span>
      </label>
    `}_optionalTemplate(){return this.required||!this.optional||!this.optionalLabel?E:c`<span class="co-label__optional">${this.optionalLabel}</span>`}_syncTargetLabelling(){var s;if(this._clearTargetLabelling(),!this.htmlFor)return;const e=(s=this.ownerDocument)==null?void 0:s.getElementById(this.htmlFor);if(!(e instanceof HTMLElement))return;const t=this._labelId(),o=this._ariaLabelledByTokens(e),i=o.includes(t);i||e.setAttribute("aria-labelledby",[...o,t].join(" ")),this._labelledTarget=e,this._labelledTargetToken=t,this._addedLabelledByToken=!i}_clearTargetLabelling(){if(!this._labelledTarget||!this._labelledTargetToken||!this._addedLabelledByToken){this._labelledTarget=void 0,this._labelledTargetToken=void 0,this._addedLabelledByToken=!1;return}const e=this._ariaLabelledByTokens(this._labelledTarget).filter(t=>t!==this._labelledTargetToken);e.length>0?this._labelledTarget.setAttribute("aria-labelledby",e.join(" ")):this._labelledTarget.removeAttribute("aria-labelledby"),this._labelledTarget=void 0,this._labelledTargetToken=void 0,this._addedLabelledByToken=!1}_labelId(){return this.id||(z._nextGeneratedId+=1,this.id=`co-label-${z._nextGeneratedId}`),this.id}_ariaLabelledByTokens(e){return(e.getAttribute("aria-labelledby")??"").split(/\s+/).filter(Boolean)}_hasFocusWithin(e){var t;return e.matches(":focus-within")||((t=this.ownerDocument)==null?void 0:t.activeElement)===e}_findFocusableDescendant(e){var o;const t='[slot="input"], input, textarea, select, button, [tabindex]:not([tabindex="-1"])';return e.querySelector(t)??((o=e.shadowRoot)==null?void 0:o.querySelector(t))??null}};w._nextGeneratedId=0;A([l({attribute:"for",reflect:!0})],w.prototype,"htmlFor",void 0);A([l({type:Boolean,reflect:!0})],w.prototype,"required",void 0);A([l({type:Boolean,reflect:!0})],w.prototype,"optional",void 0);A([l({attribute:"optional-label"})],w.prototype,"optionalLabel",void 0);w=z=A([b("co-label")],w);const ot=m`
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
`;var k=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let v=class extends de{constructor(){super(...arguments),this.orientation="vertical",this.selectionFollowsFocus=!1,this.rotateKeyboardNavigation=!1,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.required=!1,this.requiredMessage="",this._validation=new I(this),this._handleModelValueChanged=e=>{var o;const t=e;t.target!==this||(o=t.detail)!=null&&o.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,ot]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){C(this),super.firstUpdated(e),this._syncValidation(!0,!0)}updated(e){C(this),super.updated(e),(e.has("validators")||e.has("required")||e.has("requiredMessage"))&&this._syncValidation(e.has("validators"),e.has("required")||e.has("requiredMessage"))}_labelTemplate(){return c`
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
        <div part="control" class="input-group__container">${this._inputGroupInputTemplate()}</div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return E}_inputGroupInputTemplate(){return c`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
        <slot id="options-outlet"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return E}_feedbackTemplate(){return c`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_syncValidation(e=!1,t=!1){this._validation.sync(()=>this.required?[D(this.requiredMessage,"Select an option.")]:[],e,t)}};k([l({reflect:!0})],v.prototype,"orientation",void 0);k([l({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],v.prototype,"selectionFollowsFocus",void 0);k([l({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],v.prototype,"rotateKeyboardNavigation",void 0);k([l({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],v.prototype,"hasNoDefaultSelected",void 0);k([l({type:Boolean,attribute:"multiple-choice",reflect:!0})],v.prototype,"multipleChoice",void 0);k([l({type:Boolean,reflect:!0})],v.prototype,"required",void 0);k([l({attribute:"required-message"})],v.prototype,"requiredMessage",void 0);v=k([b("co-listbox")],v);const it=m`
  /* ── Base ── */
  :host {
    display: inline-flex;
    box-sizing: border-box;
    vertical-align: middle;
    color: var(--co-color-text-secondary);
    font-family: var(--co-font-family-sans);
  }

  :host([hidden]) {
    display: none;
  }

  .mode-toggle {
    display: inline-flex;
    align-items: center;
  }

  .mode-toggle__button {
    box-sizing: border-box;
    border: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  /* ── Compact ── */
  .mode-toggle__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    inline-size: var(--co-control-height-md);
    block-size: var(--co-control-height-md);
    min-inline-size: var(--co-control-height-md);
    min-block-size: var(--co-control-height-md);
    padding: 0;
    border-radius: var(--co-control-radius-interactive);
    background: transparent;
  }

  .mode-toggle__button:hover {
    color: var(--co-color-text-default);
    background: color-mix(in srgb, var(--co-color-state-primary-base) 8%, transparent);
  }

  .mode-toggle__button:active {
    color: var(--co-color-text-default);
    background: color-mix(in srgb, var(--co-color-state-primary-base) 12%, transparent);
  }

  .mode-toggle__button:focus-visible {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: var(--co-focus-ring-offset);
  }

  /* ── Disabled ── */
  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
  }

  :host([disabled]) .mode-toggle__button {
    cursor: not-allowed;
    pointer-events: none;
  }
`;var V=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};const st={light:"light-mode",auto:"brightness-auto",dark:"dark-mode"},U="co-mode-toggle-sync";let g=class extends M{constructor(){super(...arguments),this.mode="auto",this.size="md",this.persist=!0,this.storageNamespace="cobalt",this.label="Color mode",this.disabled=!1,this._resolvedMode="light",this._hasExplicitMode=!1,this._handleCompactClick=()=>{const e=this._resolvedMode==="dark"?"light":"dark";this._setModeFromUser(e)},this._handleSystemModeChange=()=>{this.mode==="auto"&&(this._applyMode(),this.requestUpdate())},this._handleModeSync=e=>{const t=e.detail;!t||t.storageNamespace!==this.storageNamespace||t.mode===this.mode||(this.mode=t.mode,this._resolvedMode=t.resolvedMode)}}connectedCallback(){var e;if(super.connectedCallback(),this._hasExplicitMode=this.hasAttribute("mode"),this._mediaQuery=this._getSystemModeQuery(),(e=this._mediaQuery)==null||e.addEventListener("change",this._handleSystemModeChange),window.addEventListener(U,this._handleModeSync),this.persist&&!this._hasExplicitMode){const t=ae({storageNamespace:this.storageNamespace});t&&(this.mode=t)}this._applyMode()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._mediaQuery)==null||e.removeEventListener("change",this._handleSystemModeChange),window.removeEventListener(U,this._handleModeSync)}updated(e){if(e.has("mode")||e.has("persist")||e.has("storageNamespace")){if(!this._hasExplicitMode&&(e.has("persist")||e.has("storageNamespace"))){const t=this.persist?ae({storageNamespace:this.storageNamespace}):null;if(t&&t!==this.mode){this.mode=t,this._applyMode();return}}this._applyMode()}}render(){const e=this._resolvedMode==="dark"?"light":"dark";return c`
      <div part="base" class="mode-toggle">
        <button
          part="button"
          class="mode-toggle__button"
          type="button"
          aria-label=${this._compactLabel(e)}
          ?disabled=${this.disabled}
          @click=${this._handleCompactClick}
        >
          <co-icon
            part="icon"
            name=${st[e]}
            size=${this.size}
            aria-hidden="true"
          ></co-icon>
        </button>
      </div>
    `}_setModeFromUser(e){this.disabled||this.mode===e||(this.mode=e,this._applyMode({persist:this.persist,emit:!0,broadcast:!0}))}_applyMode(e={}){const t=this._normalizeMode(this.mode);if(t!==this.mode){this.mode=t;return}const o=Ie().theme,i=De(t);this._resolvedMode=i,qe(o,t,{persist:e.persist??!1,storageNamespace:this.storageNamespace});const s={mode:t,resolvedMode:i,persisted:!!e.persist,storageNamespace:this.storageNamespace};e.emit&&this.dispatchEvent(new CustomEvent("co-change",{detail:s,bubbles:!0,composed:!0})),e.broadcast&&window.dispatchEvent(new CustomEvent(U,{detail:s}))}_getSystemModeQuery(){if(!(typeof window>"u"||typeof window.matchMedia!="function"))return window.matchMedia("(prefers-color-scheme: dark)")}_normalizeMode(e){return e==="light"||e==="dark"||e==="auto"?e:"auto"}_compactLabel(e){return this.label?e==="dark"?"Switch to dark mode":"Switch to light mode":E}};g.styles=[it];V([l({reflect:!0})],g.prototype,"mode",void 0);V([l({reflect:!0})],g.prototype,"size",void 0);V([l({type:Boolean,reflect:!0})],g.prototype,"persist",void 0);V([l({attribute:"storage-namespace",reflect:!0})],g.prototype,"storageNamespace",void 0);V([l()],g.prototype,"label",void 0);V([l({type:Boolean,reflect:!0})],g.prototype,"disabled",void 0);g=V([b("co-mode-toggle")],g);class rt extends X(Z(M)){connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup")}resetGroup(){let e;this.formElements.forEach(t=>{typeof t.resetGroup=="function"?t.resetGroup():typeof t.reset=="function"&&(t.reset(),t.checked&&(e=t.choiceValue))}),this.modelValue=e,this.resetInteractionState()}}class at extends ce(le){connectedCallback(){super.connectedCallback(),this.type="radio"}}const nt=m`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    color: var(--co-color-text-default);
    cursor: pointer;
  }

  :host([disabled]) {
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  .radio {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-1) 0;
  }

  /* Visually hide the native radio input (sr-only pattern) */
  slot[name='input']::slotted(*) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .radio__icon {
    flex: 0 0 auto;
    color: var(--co-color-text-secondary);
    transition: color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .radio__icon {
    color: var(--co-color-surface-interactive-primary-default);
  }

  :host([checked]) .radio__icon {
    color: var(--co-color-surface-interactive-primary-default);
  }

  :host([_keyboard-focus]) .radio__icon {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-shape-radius-full);
  }

  .radio__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    line-height: var(--co-font-line-height-normal);
  }
`;var ve=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let Q=class extends at{constructor(){super(...arguments),this.__forwardingClick=!1}static get styles(){return[...super.styles,nt]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),J(this)}render(){return c`
      <div part="base" class="radio" @mousedown=${this._onMousedown} @click=${this._onRadioClick}>
        <slot name="input"></slot>
        <co-icon
          part="icon"
          class="radio__icon"
          name=${this.checked?"radio-button-checked":"radio-button-unchecked"}
          size="sm"
          ?fill=${this.checked}
          aria-hidden="true"
        ></co-icon>
        <span part="label" class="radio__label">
          <slot name="label"></slot>
        </span>
      </div>
    `}_onMousedown(e){var t;((t=e.target)==null?void 0:t.slot)!=="input"&&e.preventDefault()}_onRadioClick(e){if(this.__forwardingClick||this.disabled)return;const t=e.target,o=this._inputNode;!o||t===o||t instanceof HTMLLabelElement||(this.__forwardingClick=!0,o.click(),o.focus(),this.__forwardingClick=!1)}};ve([l({reflect:!0})],Q.prototype,"value",null);Q=ve([b("co-radio")],Q);const lt=m`
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
`;var oe=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let S=class extends rt{constructor(){super(...arguments),this.required=!1,this.requiredMessage="",this._validation=new I(this),this._handleModelValueChanged=e=>{var o;const t=e;t.target!==this||(o=t.detail)!=null&&o.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,lt]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){C(this),super.firstUpdated(e),this._syncValidation(!0,!0)}updated(e){C(this),super.updated(e),(e.has("validators")||e.has("required")||e.has("requiredMessage"))&&this._syncValidation(e.has("validators"),e.has("required")||e.has("requiredMessage"))}render(){return c`
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
    `}_syncValidation(e=!1,t=!1){this._validation.sync(()=>this.required?[D(this.requiredMessage,"Select an option.")]:[],e,t)}};oe([l({type:Boolean,reflect:!0})],S.prototype,"required",void 0);oe([l({attribute:"required-message"})],S.prototype,"requiredMessage",void 0);S=oe([b("co-radio-group")],S);const ct=m`
  :host {
    display: block;
  }

  .separator {
    border: none;
    border-top: var(--co-border-width-divider) solid var(--co-color-border-default);
    margin: var(--co-space-2) 0;
  }
`;var dt=function(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let Y=class extends M{render(){return c`<hr part="separator" class="separator" aria-hidden="true" />`}};Y.styles=[ct];Y=dt([b("co-nav-separator")],Y);export{X as ChoiceGroupMixin,so as CoAppShell,ao as CoBanner,uo as CoButton,Zt as CoButtonIcon,lo as CoCard,P as CoCheckbox,L as CoCheckboxGroup,K as CoCheckboxIndeterminate,d as CoCombobox,W as CoForm,po as CoIcon,Jt as CoInput,eo as CoInputPill,w as CoLabel,v as CoListbox,g as CoModeToggle,Do as CoNavDrawer,Ro as CoNavDrawerGroup,Go as CoNavDrawerItem,So as CoNavHeaderBar,Uo as CoNavRailBar,oo as CoNavRailItem,Y as CoNavSeparator,mo as CoOption,Q as CoRadio,S as CoRadioGroup,Mo as CoSelect,Ho as CoTextarea,It as DefaultSuccess,bo as EqualsLength,vo as FocusMixin,Oe as FormControlMixin,we as FormControlsCollection,Z as FormGroupMixin,Ao as FormRegisteringMixin,Ee as FormRegistrarMixin,Oo as FormRegistrarPortalMixin,To as FormatMixin,go as InteractionStateMixin,At as IsDate,St as IsDateDisabled,yo as IsEmail,Ft as IsNumber,xo as IsString,Ko as LionField,zo as LionValidationFeedback,zt as MaxDate,Co as MaxLength,Ot as MaxNumber,Tt as MinDate,ko as MinLength,Lt as MinMaxDate,Eo as MinMaxLength,Nt as MinMaxNumber,Mt as MinNumber,Wo as NativeTextFieldMixin,wo as Pattern,Vo as Required,Re as ResultValidator,j as Unparseable,Ne as ValidateMixin,_ as Validator};
