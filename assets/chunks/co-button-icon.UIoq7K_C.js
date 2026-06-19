import{i as h,b as d,A as u,t as f}from"./custom-element.CPWKJEuj.js";import{n as c}from"./property.C8dt_fM1.js";import"./co-icon.Bu1iKhCD.js";import{L as b}from"./LionButton.v50-PCNC.js";import"./directive.CJw_OlP2.js";import"./theme.BBDvIaTN.js";import"./framework.CyQWWwrP.js";import"./DisabledMixin.DvWrDoIe.js";const p=h`
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
    background: var(--co-color-surface-interactive-theme-default);
    color: var(--co-color-text-on-primary);
  }
  :host([variant='primary']:hover),
  :host(:not([variant]):hover) {
    background: var(--co-color-surface-interactive-theme-hover);
  }
  :host([variant='primary']:active),
  :host(:not([variant]):active) {
    background: var(--co-color-surface-interactive-theme-active);
  }

  /* ── Secondary variant ── */
  :host([variant='secondary']) {
    background: var(--co-color-surface-interactive-secondary-default);
    color: var(--co-color-surface-interactive-theme-default);
    box-shadow: inset 0 0 0 var(--co-border-width-action)
      var(--co-color-surface-interactive-theme-default);
  }
  :host([variant='secondary']:hover) {
    background: var(--co-color-surface-interactive-secondary-hover);
    color: var(--co-color-surface-interactive-theme-hover);
    box-shadow: inset 0 0 0 var(--co-border-width-action)
      var(--co-color-surface-interactive-theme-hover);
  }
  :host([variant='secondary']:active) {
    background: var(--co-color-surface-interactive-secondary-active);
    color: var(--co-color-surface-interactive-theme-active);
    box-shadow: inset 0 0 0 var(--co-border-width-action)
      var(--co-color-surface-interactive-theme-active);
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
`;var i=function(n,o,e,t){var s=arguments.length,r=s<3?o:t===null?t=Object.getOwnPropertyDescriptor(o,e):t,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,o,e,t);else for(var v=n.length-1;v>=0;v--)(l=n[v])&&(r=(s<3?l(r):s>3?l(o,e,r):l(o,e))||r);return s>3&&r&&Object.defineProperty(o,e,r),r};const m={sm:"xs",md:"sm",lg:"md"};let a=class extends b{constructor(){super(...arguments),this.name="",this.variant="primary",this.size="md",this.labelPosition="bottom",this.circle=!1,this._handleFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleClick=o=>{if(o.defaultPrevented||this.disabled||this.type!=="submit"&&this.type!=="reset")return;const e=this.closest("form");if(!e)return;if(o.preventDefault(),this.type==="reset"){e.reset();return}const t=e.requestSubmit;if(typeof t=="function"){t.call(e);return}e.dispatchEvent(new Event("submit",{bubbles:!0,cancelable:!0}))}}static get styles(){return[...super.styles,p]}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur),this.removeEventListener("click",this._handleClick)}render(){const o=m[this.size],e=!!this.label&&!this.circle,t=e?d`<span part="label" class="label">${this.label}</span>`:u;return d`
      <div part="base" class="button-icon ${e?"has-label":""}">
        ${this.labelPosition==="top"?t:u}
        <co-icon part="icon" name=${this.name} size=${o} aria-hidden="true"></co-icon>
        ${this.labelPosition==="bottom"?t:u}
      </div>
    `}};i([c({reflect:!0})],a.prototype,"name",void 0);i([c({reflect:!0})],a.prototype,"variant",void 0);i([c({reflect:!0})],a.prototype,"size",void 0);i([c()],a.prototype,"label",void 0);i([c({reflect:!0,attribute:"label-position"})],a.prototype,"labelPosition",void 0);i([c({type:Boolean,reflect:!0})],a.prototype,"circle",void 0);a=i([f("co-button-icon")],a);export{a as CoButtonIcon};
