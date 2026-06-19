import{i as p,b as h,t as u}from"./custom-element.CPWKJEuj.js";import{n as d}from"./property.C8dt_fM1.js";import{t as f}from"./keyboard-focus.Dc94gR5a.js";import"./co-icon.CpKvncD5.js";import"./check-box-outline-blank.BPaKLKgS.js";import{L as m}from"./LionCheckbox.DChVky8g.js";import"./directive.CJw_OlP2.js";import"./theme.DgBoT9Yi.js";import"./framework.CyQWWwrP.js";import"./ChoiceInputMixin.vzOX49Le.js";import"./FormatMixin.DzrVvmrI.js";import"./ValidateMixin.BgFZvP2E.js";import"./DisabledMixin.DvWrDoIe.js";import"./LionInput.Ctf-0h0T.js";import"./NativeTextFieldMixin.BGs3xKOY.js";import"./InteractionStateMixin.B0Oj5qlw.js";const b=p`
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

  :host([checked]) .checkbox__icon {
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
`;var s=function(c,o,t,e){var r=arguments.length,i=r<3?o:e===null?e=Object.getOwnPropertyDescriptor(o,t):e,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,o,t,e);else for(var n=c.length-1;n>=0;n--)(a=c[n])&&(i=(r<3?a(i):r>3?a(o,t,i):a(o,t))||i);return r>3&&i&&Object.defineProperty(o,t,i),i};let l=class extends m{constructor(){super(...arguments),this.__forwardingClick=!1}static get styles(){return[...super.styles,b]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(o){const t=this.value;this.choiceValue!==o&&(this.choiceValue=o),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),f(this)}render(){return h`
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
    `}_onMousedown(o){var t;((t=o.target)==null?void 0:t.slot)!=="input"&&o.preventDefault()}_onCheckboxClick(o){if(this.__forwardingClick||this.disabled)return;const t=o.target,e=this._inputNode;!e||t===e||t instanceof HTMLLabelElement||(this.__forwardingClick=!0,e.click(),e.focus(),this.__forwardingClick=!1)}};s([d({reflect:!0})],l.prototype,"value",null);l=s([u("co-checkbox")],l);export{l as CoCheckbox};
