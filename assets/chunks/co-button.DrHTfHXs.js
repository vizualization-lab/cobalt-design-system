import{i as u,b as d,n,t as h}from"./property.D__PRo2x.js";import"./co-icon.B26Uw3yH.js";import{L as f}from"./LionButton.B5pyDaFb.js";import"./directive.CJw_OlP2.js";import"./theme.BzFcEtdM.js";import"./framework.DW6FvQZQ.js";import"./DisabledMixin.DvWrDoIe.js";const p=u`
  /* ── Base ── */
  :host {
    display: inline-flex;
    vertical-align: middle;
    box-sizing: border-box;
    min-block-size: var(--co-control-height-md);
    padding: 0;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
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

  /* Padding is on the inner element so external resets (e.g. * { padding: 0 })
     cannot override it — light DOM styles always beat :host rules. */
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    inline-size: 100%;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-2) var(--co-space-4);
    /* Reset UA anchor defaults when rendered as a link (href variant) */
    color: inherit;
    text-decoration: none;
  }

  /* ── Sizes ── */
  :host([size='sm']) {
    font-size: var(--co-font-size-small);
    min-block-size: var(--co-control-height-sm);
  }
  :host([size='sm']) .button {
    padding: var(--co-space-1) var(--co-space-3);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-h6);
    min-block-size: var(--co-control-height-lg);
  }
  :host([size='lg']) .button {
    padding: var(--co-space-3) var(--co-space-6);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
    min-block-size: var(--co-control-height-xl);
  }
  :host([size='xl']) .button {
    padding: var(--co-space-4) var(--co-space-8);
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

  /* ── Focus ── */
  /* Override Lion's base focus styles — match its specificity */
  :host(:focus),
  :host(:focus:not([disabled])),
  :host(:focus:not(:focus-visible)) {
    outline: none;
  }

  :host(:focus-visible:not([disabled])) {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: var(--co-focus-ring-offset);
  }

  /* ── Disabled ── */
  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    cursor: not-allowed;
    pointer-events: none;
  }

  /* ── Loading ── */
  :host([loading]) {
    cursor: wait;
    pointer-events: none;
  }
`;var i=function(s,t,e,o){var c=arguments.length,r=c<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,o);else for(var v=s.length-1;v>=0;v--)(l=s[v])&&(r=(c<3?l(r):c>3?l(t,e,r):l(t,e))||r);return c>3&&r&&Object.defineProperty(t,e,r),r};let a=class extends f{constructor(){super(...arguments),this.variant="primary",this.size="md",this.loading=!1,this._handleFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleClick=t=>{if(!t.defaultPrevented&&!this.disabled){if(!this.href){this._handleNativeFormClick(t);return}this.target&&this.target!=="_self"?window.open(this.href,this.target,this.target==="_blank"?"noopener,noreferrer":""):window.location.href=this.href}}}static get styles(){return[...super.styles,p]}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||(this.tabIndex=0),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur),this.removeEventListener("click",this._handleClick)}_handleNativeFormClick(t){if(this.type!=="submit"&&this.type!=="reset")return;const e=this.closest("form");if(!e)return;if(t.preventDefault(),this.type==="reset"){e.reset();return}const o=e.requestSubmit;if(typeof o=="function"){o.call(e);return}e.dispatchEvent(new Event("submit",{bubbles:!0,cancelable:!0}))}render(){return this.href?d`
        <a
          part="base"
          class="button"
          href=${this.href}
          target=${this.target??"_self"}
          rel=${this.target==="_blank"?"noopener noreferrer":""}
          tabindex="-1"
          aria-disabled=${this.disabled}
        >
          <slot name="prefix" part="prefix"></slot>
          <slot part="label"></slot>
          <slot name="suffix" part="suffix"></slot>
        </a>
      `:d`
      <div part="base" class="button">
        <slot name="prefix" part="prefix"></slot>
        <slot part="label"></slot>
        <slot name="suffix" part="suffix"></slot>
        ${this.loading?d`<co-icon
              part="spinner"
              name="progress-activity"
              size=${{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]}
              animated
              aria-hidden="true"
            ></co-icon>`:""}
      </div>
    `}};i([n({reflect:!0})],a.prototype,"variant",void 0);i([n({reflect:!0})],a.prototype,"size",void 0);i([n({type:Boolean,reflect:!0})],a.prototype,"loading",void 0);i([n({reflect:!0})],a.prototype,"href",void 0);i([n({reflect:!0})],a.prototype,"target",void 0);a=i([h("co-button")],a);export{a as CoButton};
