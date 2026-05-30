import{i as u,b as d,t as _}from"./custom-element.CPWKJEuj.js";import{n as b}from"./property.C8dt_fM1.js";import{t as p}from"./keyboard-focus.Dc94gR5a.js";import"./co-icon.DieU1rUj.js";import{L as f}from"./LionCheckbox.D_FFRCXW.js";import"./directive.CJw_OlP2.js";import"./theme.DH_6kWw5.js";import"./framework.NLW_VnUw.js";import"./ChoiceInputMixin.DqTAPs8j.js";import"./FormatMixin.Bm6YBGN8.js";import"./ValidateMixin.ByFz6SJU.js";import"./DisabledMixin.DvWrDoIe.js";import"./LionInput.BUEXLhCS.js";import"./NativeTextFieldMixin.DYzniwoD.js";import"./InteractionStateMixin.C-kGim9-.js";class k extends f{static get styles(){return[...super.styles||[],u`
        :host .choice-field__nested-checkboxes {
          display: block;
        }
        ::slotted(*) {
          padding-left: 8px;
        }
      `]}static get properties(){return{indeterminate:{type:Boolean,reflect:!0},mixedState:{type:Boolean,reflect:!0,attribute:"mixed-state"}}}get _checkboxGroupNode(){return this._parentFormGroup}get _subCheckboxes(){return this.__subCheckboxes}_storeIndeterminateState(){this._indeterminateSubStates=this._subCheckboxes.map(e=>e.checked)}_setOldState(){this.indeterminate?this._oldState="indeterminate":this._oldState=this.checked?"checked":"unchecked"}_setOwnCheckedState(){const e=this._subCheckboxes;if(!e.length)return;this.__settingOwnChecked=!0;const t=e.filter(o=>o.checked);switch(e.length-t.length){case 0:this.indeterminate=!1,this.checked=!0;break;case e.length:this.indeterminate=!1,this.checked=!1;break;default:{this.indeterminate=!0;const o=e.filter(i=>i.disabled&&i.checked===!1);this.checked=e.length-t.length-o.length===0}}this.updateComplete.then(()=>{this.__settingOwnChecked=!1})}_setBasedOnMixedState(){switch(this._oldState){case"checked":this.checked=!1,this.indeterminate=!1;break;case"unchecked":this.checked=!1,this.indeterminate=!0;break;case"indeterminate":this.checked=!0,this.indeterminate=!1;break}}__onModelValueChanged(e){if(this.disabled)return;if(e.detail.formPath[0]===this&&!this.__settingOwnChecked){const o=c=>c.every(h=>h===c[0]);this.mixedState&&!o(this._indeterminateSubStates)&&this._setBasedOnMixedState(),this.__settingOwnSubs=!0;const i=this._subCheckboxes,s=i.filter(c=>c.checked),n=i.filter(c=>c.disabled),r=i.length>0&&i.length===s.length;i.length>0&&i.length===n.length&&(this.checked=r),this.indeterminate&&this.mixedState?this._subCheckboxes.forEach((c,h)=>{c.checked=this._indeterminateSubStates[h]}):this._subCheckboxes.filter(c=>!c.disabled).forEach(c=>{c.checked=this._inputNode.checked}),this.updateComplete.then(()=>{this.__settingOwnSubs=!1})}else this._setOwnCheckedState(),this.updateComplete.then(()=>{!this.__settingOwnSubs&&!this.__settingOwnChecked&&this.mixedState&&this._storeIndeterminateState()});this.mixedState&&this._setOldState()}_afterTemplate(){return d`
      <div class="choice-field__nested-checkboxes" role="list">
        <slot></slot>
      </div>
    `}_onRequestToAddFormElement(e){var t;e.target.hasAttribute("role")||(t=e.target)==null||t.setAttribute("role","listitem"),this.__addToSubCheckboxes(e.detail.element),this._setOwnCheckedState()}_onRequestToRemoveFormElement(e){var t;e.target.getAttribute("role")==="listitem"&&((t=e.target)==null||t.removeAttribute("role")),this.__removeFromSubCheckboxes(e.detail.element)}__addToSubCheckboxes(e){e!==this&&this.contains(e)&&this.__subCheckboxes.push(e)}__removeFromSubCheckboxes(e){const t=this.__subCheckboxes.indexOf(e);t!==-1&&this.__subCheckboxes.splice(t,1)}constructor(){super(),this.indeterminate=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this.__onModelValueChanged=this.__onModelValueChanged.bind(this),this.__subCheckboxes=[],this._indeterminateSubStates=[],this.mixedState=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this.__onModelValueChanged),this.addEventListener("form-element-register",this._onRequestToAddFormElement)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this.__onModelValueChanged),this.removeEventListener("form-element-register",this._onRequestToAddFormElement)}firstUpdated(e){super.firstUpdated(e),this._setOldState(),this.indeterminate&&this._storeIndeterminateState()}updated(e){super.updated(e),(e.has("indeterminate")||e.has("checked"))&&(this._inputNode.indeterminate=this.indeterminate)}}const x=u`
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
    color: var(--co-color-surface-interactive-theme-default);
  }

  :host([checked]) .checkbox__icon,
  :host([indeterminate]) .checkbox__icon {
    color: var(--co-color-surface-interactive-theme-default);
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
`;var m=function(a,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,o);else for(var r=a.length-1;r>=0;r--)(n=a[r])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let l=class extends k{static get styles(){return[...super.styles,x]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),p(this)}get _indicatorIconName(){return this.indeterminate?"indeterminate-check-box":this.checked?"check-box":"check-box-outline-blank"}render(){return d`
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
    `}_afterTemplate(){return d`
      <div part="children" class="checkbox__nested" role="list">
        <slot></slot>
      </div>
    `}_onMousedown(e){var t;((t=e.target)==null?void 0:t.slot)!=="input"&&e.preventDefault()}_onCheckboxClick(e){const t=this._inputNode;if(!t||this.disabled||e.target===t)return;const o=this._subCheckboxes??[],s=!(o.length>0&&o.every(n=>n.checked));this.__settingOwnSubs=!0,o.filter(n=>!n.disabled).forEach(n=>{n.checked=s,n._inputNode&&(n._inputNode.checked=s)}),this.checked=s,this.indeterminate=!1,t.checked=s,this.updateComplete.then(()=>{this.__settingOwnSubs=!1,t.focus()})}};m([b({reflect:!0})],l.prototype,"value",null);l=m([_("co-checkbox-indeterminate")],l);export{l as CoCheckboxIndeterminate};
