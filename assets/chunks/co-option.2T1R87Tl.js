import{a as h,i as u,b as c,A as p,t as f}from"./custom-element.CPWKJEuj.js";import{n as b}from"./property.C8dt_fM1.js";import"./co-icon.L5koFIPO.js";import"./check-box-outline-blank.D8FhX7cR.js";import"./radio-button-unchecked.DkZZ2yBM.js";import{D as m}from"./DisabledMixin.DvWrDoIe.js";import{C as g}from"./ChoiceInputMixin.vzOX49Le.js";import{a as _,S as v}from"./ValidateMixin.BgFZvP2E.js";import"./directive.CJw_OlP2.js";import"./theme.DAvB6UkL.js";import"./framework.CyQWWwrP.js";import"./FormatMixin.DzrVvmrI.js";class x extends m(g(_(v(h)))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[u`
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
      `]}get slots(){return{}}constructor(){super(),this.active=!1,this.__onClick=this.__onClick.bind(this),this.__registerEventListeners()}requestUpdate(t,e,i){super.requestUpdate(t,e,i),t==="active"&&this.active!==e&&this.dispatchEvent(new Event("active-changed",{bubbles:!0}))}updated(t){super.updated(t),t.has("checked")&&this.setAttribute("aria-selected",`${this.checked}`),t.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}render(){return c`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}__registerEventListeners(){this.addEventListener("click",this.__onClick)}__unRegisterEventListeners(){this.removeEventListener("click",this.__onClick)}__onClick(){if(this.disabled)return;const t=this._parentFormGroup;this._isHandlingUserInput=!0,t&&t.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}}const k=u`
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
`;var d=function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let l=class extends x{constructor(){super(...arguments),this._onPrefixSlotChange=t=>{const e=t.target;this.toggleAttribute("data-has-prefix-slot",e.assignedNodes({flatten:!0}).length>0)}}static get styles(){return[k]}attributeChangedCallback(t,e,i){if(t==="checked"&&i==="false"){this.removeAttribute("checked");return}super.attributeChangedCallback(t,e,i)}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(t){const e=this.value;this.choiceValue!==t&&(this.choiceValue=t),this.requestUpdate("value",e)}connectedCallback(){super.connectedCallback(),this._syncMultipleAttribute(),this.updateComplete.then(()=>this._syncMultipleAttribute())}updated(t){super.updated(t),this._syncMultipleAttribute(),this.toggleAttribute("data-no-indicator",!this._shouldRenderIndicator),this._syncPrefixSlotState()}_syncPrefixSlotState(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="prefix"]');if(!t)return;const e=t.assignedNodes({flatten:!0}).length>0;this.toggleAttribute("data-has-prefix-slot",e)}get _indicatorIconName(){return this.hasAttribute("multiple")?this.checked?"check-box":"check-box-outline-blank":this.checked?"radio-button-checked":"radio-button-unchecked"}get _parentTag(){const t=this.closest("co-select, co-listbox, co-combobox");return(t==null?void 0:t.localName)??null}get _shouldRenderIndicator(){const t=this._parentTag,e=this.hasAttribute("multiple");return!(t==="co-select"||t==="co-combobox"&&!e)}get _iconSize(){const t=this.closest("co-select, co-listbox, co-combobox"),e=(t==null?void 0:t.getAttribute("size"))??"md";return{sm:"xs",md:"sm",lg:"md",xl:"lg"}[e]??"sm"}render(){return c`
      <div part="base" class="option">
        <span part="prefix" class="option__prefix" aria-hidden="true">
          <slot name="prefix" @slotchange=${this._onPrefixSlotChange}>
            ${this._shouldRenderIndicator?c`<co-icon
                  name=${this._indicatorIconName}
                  size=${this._iconSize}
                  ?fill=${this.checked}
                ></co-icon>`:p}
          </slot>
        </span>
        <span part="label" class="option__label">
          <slot></slot>
        </span>
        <span part="suffix" class="option__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `}_syncMultipleAttribute(){const t=this._parentFormGroup,e=this.hasAttribute("multiple");t!=null&&t.multipleChoice?this.setAttribute("multiple",""):this.removeAttribute("multiple"),e!==this.hasAttribute("multiple")&&this.requestUpdate()}};d([b({reflect:!0})],l.prototype,"value",null);l=d([f("co-option")],l);export{l as CoOption};
