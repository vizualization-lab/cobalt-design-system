import{i as d,b as p,t as u}from"./custom-element.CPWKJEuj.js";import{n as f}from"./property.C8dt_fM1.js";import{t as h}from"./keyboard-focus.Dc94gR5a.js";import"./co-icon.BJfYO-2W.js";import"./radio-button-unchecked.D2CmlAUe.js";import{C as m}from"./ChoiceInputMixin.vzOX49Le.js";import{L as _}from"./LionInput.Ctf-0h0T.js";import"./directive.CJw_OlP2.js";import"./theme.BAS8kIie.js";import"./framework.CyQWWwrP.js";import"./FormatMixin.DzrVvmrI.js";import"./ValidateMixin.BgFZvP2E.js";import"./DisabledMixin.DvWrDoIe.js";import"./NativeTextFieldMixin.BGs3xKOY.js";import"./InteractionStateMixin.B0Oj5qlw.js";class v extends m(_){connectedCallback(){super.connectedCallback(),this.type="radio"}}const b=d`
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
    color: var(--co-color-surface-interactive-theme-default);
  }

  :host([checked]) .radio__icon {
    color: var(--co-color-surface-interactive-theme-default);
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
`;var s=function(r,o,t,e){var a=arguments.length,i=a<3?o:e===null?e=Object.getOwnPropertyDescriptor(o,t):e,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,o,t,e);else for(var c=r.length-1;c>=0;c--)(n=r[c])&&(i=(a<3?n(i):a>3?n(o,t,i):n(o,t))||i);return a>3&&i&&Object.defineProperty(o,t,i),i};let l=class extends v{constructor(){super(...arguments),this.__forwardingClick=!1}static get styles(){return[...super.styles,b]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(o){const t=this.value;this.choiceValue!==o&&(this.choiceValue=o),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),h(this)}render(){return p`
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
    `}_onMousedown(o){var t;((t=o.target)==null?void 0:t.slot)!=="input"&&o.preventDefault()}_onRadioClick(o){if(this.__forwardingClick||this.disabled)return;const t=o.target,e=this._inputNode;!e||t===e||t instanceof HTMLLabelElement||(this.__forwardingClick=!0,e.click(),e.focus(),this.__forwardingClick=!1)}};s([f({reflect:!0})],l.prototype,"value",null);l=s([u("co-radio")],l);export{l as CoRadio};
