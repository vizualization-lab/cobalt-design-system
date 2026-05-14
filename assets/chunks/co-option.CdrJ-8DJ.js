import{i as h,b as l,A as d,a as p,n as _,t as f}from"./property.D__PRo2x.js";import"./co-icon.ENJMvNTo.js";import{d as b,D as m}from"./DisabledMixin.DvWrDoIe.js";import{a as k,b as g,S as v}from"./FormatMixin.ClJHuFpt.js";const x=(o,t={})=>o.value!==t.value||o.checked!==t.checked,C=o=>class extends k(o){static get properties(){return{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},modelValue:{type:Object,hasChanged:x},choiceValue:{type:Object}}}get choiceValue(){return this.modelValue.value}set choiceValue(e){this.requestUpdate("choiceValue",this.choiceValue),this.modelValue.value!==e&&(this.modelValue={value:e,checked:this.modelValue.checked})}requestUpdate(e,i,s){super.requestUpdate(e,i,s),e==="modelValue"?this.modelValue.checked!==this.checked&&this.__syncModelCheckedToChecked(this.modelValue.checked):e==="checked"&&this.modelValue.checked!==this.checked&&this.__syncCheckedToModel(this.checked)}firstUpdated(e){super.firstUpdated(e),e.has("checked")&&this.__syncCheckedToInputElement()}updated(e){super.updated(e),e.has("modelValue")&&this.__syncCheckedToInputElement(),e.has("name")&&this._parentFormGroup&&this._parentFormGroup.name!==this.name&&this._syncNameToParentFormGroup()}constructor(){super(),this.modelValue={value:"",checked:!1},this.disabled=!1,this._preventDuplicateLabelClick=this._preventDuplicateLabelClick.bind(this),this._toggleChecked=this._toggleChecked.bind(this)}static get styles(){return[...super.styles||[],h`
          :host {
            display: flex;
            flex-wrap: wrap;
          }

          :host([hidden]) {
            display: none;
          }

          .choice-field__graphic-container {
            display: none;
          }
          .choice-field__help-text {
            display: block;
            flex-basis: 100%;
          }
        `]}render(){return l`
        <slot name="input"></slot>
        <div class="choice-field__graphic-container" aria-hidden="true">
          ${this._choiceGraphicTemplate()}
        </div>
        <div class="choice-field__label">
          <slot name="label"></slot>
        </div>
        <small class="choice-field__help-text">
          <slot name="help-text"></slot>
        </small>
        ${this._afterTemplate()}
      `}_choiceGraphicTemplate(){return d}_afterTemplate(){return d}connectedCallback(){super.connectedCallback(),this._labelNode&&this._labelNode.addEventListener("click",this._preventDuplicateLabelClick),this.addEventListener("user-input-changed",this._toggleChecked)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._preventDuplicateLabelClick),this.removeEventListener("user-input-changed",this._toggleChecked)}_preventDuplicateLabelClick(e){const i=s=>{s.stopImmediatePropagation(),this._inputNode.removeEventListener("click",i)};this._inputNode.addEventListener("click",i)}_toggleChecked(e){this.disabled||(this._isHandlingUserInput=!0,this.checked=!this.checked,this._isHandlingUserInput=!1)}_syncNameToParentFormGroup(){var e;this._parentFormGroup.tagName.includes(this.tagName)&&(this.name=((e=this._parentFormGroup)==null?void 0:e.name)||"")}__syncModelCheckedToChecked(e){this.checked=e}__syncCheckedToModel(e){this.modelValue={value:this.choiceValue,checked:e}}__syncCheckedToInputElement(){this._inputNode&&(this._inputNode.checked=this.checked)}_proxyInputEvent(){}_onModelValueChanged({modelValue:e},i){let s;i&&i.modelValue&&(s=i.modelValue),this.constructor.elementProperties.get("modelValue").hasChanged(e,s)&&super._onModelValueChanged({modelValue:e})}parser(){return this.modelValue}formatter(e){return e&&e.value!==void 0?e.value:e}clear(){this.checked=!1}_isEmpty(){return!this.checked}_syncValueUpwards(){}},y=b(C);class V extends m(y(g(v(p)))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[h`
        :host {
          display: block;
          background-color: white;
          padding: 4px;
          cursor: default;
        }

        :host([hidden]) {
          display: none;
        }

        :host(:hover) {
          background-color: #eee;
        }
        :host([active]) {
          background-color: #ddd;
        }

        :host([checked]) {
          background-color: #bde4ff;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}get slots(){return{}}constructor(){super(),this.active=!1,this.__onClick=this.__onClick.bind(this),this.__registerEventListeners()}requestUpdate(t,e,i){super.requestUpdate(t,e,i),t==="active"&&this.active!==e&&this.dispatchEvent(new Event("active-changed",{bubbles:!0}))}updated(t){super.updated(t),t.has("checked")&&this.setAttribute("aria-selected",`${this.checked}`),t.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}render(){return l`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}__registerEventListeners(){this.addEventListener("click",this.__onClick)}__unRegisterEventListeners(){this.removeEventListener("click",this.__onClick)}__onClick(){if(this.disabled)return;const t=this._parentFormGroup;this._isHandlingUserInput=!0,t&&t.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}}const M=h`
  :host {
    display: block;
    color: var(--co-color-text-default);
    cursor: default;
    outline: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .option {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    min-block-size: var(--co-control-height-sm);
    padding-block: var(--co-space-1);
    padding-inline: var(--co-space-inset-sm);
    border-radius: var(--co-control-radius-interactive);
    color: inherit;
  }

  :host(:hover:not([disabled]):not([checked]):not([active])) .option {
    background: var(--co-color-surface-interactive-subtle-hover);
  }

  :host([active]:not([checked])) .option {
    background: var(--co-color-surface-interactive-subtle-active);
  }

  :host([checked]) .option {
    background: var(--co-color-surface-interactive-subtle-selected);
  }

  :host([active][checked]) .option {
    background: var(--co-color-surface-interactive-subtle-selected);
  }

  :host([disabled]) {
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  /* ── Prefix (indicator) ── */

  .option__prefix {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }

  /* Collapse the prefix when there is neither a default indicator nor slotted
     content — keeps single-select dropdowns visually clean. */
  :host([data-no-indicator]:not([data-has-prefix-slot])) .option__prefix {
    display: none;
  }

  /* ── Label ── */

  .option__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    /* Long labels wrap rather than overflow the menu */
    overflow-wrap: anywhere;
    hyphens: auto;
  }

  /* ── Suffix ── */

  .option__suffix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    margin-inline-start: auto;
  }

  .option__suffix:empty {
    display: none;
  }
`;var u=function(o,t,e,i){var s=arguments.length,c=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(c=(s<3?a(c):s>3?a(t,e,c):a(t,e))||c);return s>3&&c&&Object.defineProperty(t,e,c),c};let n=class extends V{constructor(){super(...arguments),this._onPrefixSlotChange=t=>{const e=t.target;this.toggleAttribute("data-has-prefix-slot",e.assignedNodes({flatten:!0}).length>0)}}static get styles(){return[M]}attributeChangedCallback(t,e,i){if(t==="checked"&&i==="false"){this.removeAttribute("checked");return}super.attributeChangedCallback(t,e,i)}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(t){const e=this.value;this.choiceValue!==t&&(this.choiceValue=t),this.requestUpdate("value",e)}connectedCallback(){super.connectedCallback(),this._syncMultipleAttribute(),this.updateComplete.then(()=>this._syncMultipleAttribute())}updated(t){super.updated(t),this._syncMultipleAttribute(),this.toggleAttribute("data-no-indicator",!this._shouldRenderIndicator),this._syncPrefixSlotState()}_syncPrefixSlotState(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="prefix"]');if(!t)return;const e=t.assignedNodes({flatten:!0}).length>0;this.toggleAttribute("data-has-prefix-slot",e)}get _indicatorIconName(){return this.hasAttribute("multiple")?this.checked?"check-box":"check-box-outline-blank":this.checked?"radio-button-checked":"radio-button-unchecked"}get _parentTag(){const t=this.closest("co-select, co-listbox, co-combobox");return(t==null?void 0:t.localName)??null}get _shouldRenderIndicator(){const t=this._parentTag,e=this.hasAttribute("multiple");return!(t==="co-select"||t==="co-combobox"&&!e)}get _iconSize(){const t=this.closest("co-select, co-listbox, co-combobox"),e=(t==null?void 0:t.getAttribute("size"))??"md";return{sm:"xs",md:"sm",lg:"md",xl:"lg"}[e]??"sm"}render(){return l`
      <div part="base" class="option">
        <span part="prefix" class="option__prefix" aria-hidden="true">
          <slot name="prefix" @slotchange=${this._onPrefixSlotChange}>
            ${this._shouldRenderIndicator?l`<co-icon
                  name=${this._indicatorIconName}
                  size=${this._iconSize}
                  ?fill=${this.checked}
                ></co-icon>`:d}
          </slot>
        </span>
        <span part="label" class="option__label">
          <slot></slot>
        </span>
        <span part="suffix" class="option__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `}_syncMultipleAttribute(){const t=this._parentFormGroup,e=this.hasAttribute("multiple");t!=null&&t.multipleChoice?this.setAttribute("multiple",""):this.removeAttribute("multiple"),e!==this.hasAttribute("multiple")&&this.requestUpdate()}};u([_({reflect:!0})],n.prototype,"value",null);n=u([f("co-option")],n);const T=Object.freeze(Object.defineProperty({__proto__:null,get CoOption(){return n}},Symbol.toStringTag,{value:"Module"}));export{n as C,y as a,T as c};
