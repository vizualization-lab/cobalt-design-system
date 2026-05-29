import{i as p,a as u,b as g,A as f,t as b}from"./custom-element.CPWKJEuj.js";import{n as d}from"./property.C8dt_fM1.js";import{g as m,a as v,r as _,s as y}from"./theme.CR1UbzdT.js";import"./co-icon.2cZI5jJK.js";import"./framework.NLW_VnUw.js";import"./directive.CJw_OlP2.js";const M=p`
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
    background: color-mix(in srgb, var(--co-color-state-theme-base) 8%, transparent);
  }

  .mode-toggle__button:active {
    color: var(--co-color-text-default);
    background: color-mix(in srgb, var(--co-color-state-theme-base) 12%, transparent);
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
`;var a=function(n,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,r);else for(var c=n.length-1;c>=0;c--)(l=n[c])&&(o=(i<3?l(o):i>3?l(e,t,o):l(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o};const x={light:"light-mode",auto:"brightness-auto",dark:"dark-mode"},h="co-mode-toggle-sync";let s=class extends u{constructor(){super(...arguments),this.mode="auto",this.size="md",this.persist=!0,this.storageNamespace="cobalt",this.label="Color mode",this.disabled=!1,this._resolvedMode="light",this._hasExplicitMode=!1,this._handleCompactClick=()=>{const e=this._resolvedMode==="dark"?"light":"dark";this._setModeFromUser(e)},this._handleSystemModeChange=()=>{this.mode==="auto"&&(this._applyMode(),this.requestUpdate())},this._handleModeSync=e=>{const t=e.detail;!t||t.storageNamespace!==this.storageNamespace||t.mode===this.mode||(this.mode=t.mode,this._resolvedMode=t.resolvedMode)}}connectedCallback(){var e;if(super.connectedCallback(),this._hasExplicitMode=this.hasAttribute("mode"),this._mediaQuery=this._getSystemModeQuery(),(e=this._mediaQuery)==null||e.addEventListener("change",this._handleSystemModeChange),window.addEventListener(h,this._handleModeSync),this.persist&&!this._hasExplicitMode){const t=m({storageNamespace:this.storageNamespace});t&&(this.mode=t)}this._applyMode()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._mediaQuery)==null||e.removeEventListener("change",this._handleSystemModeChange),window.removeEventListener(h,this._handleModeSync)}updated(e){if(e.has("mode")||e.has("persist")||e.has("storageNamespace")){if(!this._hasExplicitMode&&(e.has("persist")||e.has("storageNamespace"))){const t=this.persist?m({storageNamespace:this.storageNamespace}):null;if(t&&t!==this.mode){this.mode=t,this._applyMode();return}}this._applyMode()}}render(){const e=this._resolvedMode==="dark"?"light":"dark";return g`
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
            name=${x[e]}
            size=${this.size}
            aria-hidden="true"
          ></co-icon>
        </button>
      </div>
    `}_setModeFromUser(e){this.disabled||this.mode===e||(this.mode=e,this._applyMode({persist:this.persist,emit:!0,broadcast:!0}))}_applyMode(e={}){const t=this._normalizeMode(this.mode);if(t!==this.mode){this.mode=t;return}const r=v().theme,i=_(t);this._resolvedMode=i,y(r,t,{persist:e.persist??!1,storageNamespace:this.storageNamespace});const o={mode:t,resolvedMode:i,persisted:!!e.persist,storageNamespace:this.storageNamespace};e.emit&&this.dispatchEvent(new CustomEvent("co-change",{detail:o,bubbles:!0,composed:!0})),e.broadcast&&window.dispatchEvent(new CustomEvent(h,{detail:o}))}_getSystemModeQuery(){if(!(typeof window>"u"||typeof window.matchMedia!="function"))return window.matchMedia("(prefers-color-scheme: dark)")}_normalizeMode(e){return e==="light"||e==="dark"||e==="auto"?e:"auto"}_compactLabel(e){return this.label?e==="dark"?"Switch to dark mode":"Switch to light mode":f}};s.styles=[M];a([d({reflect:!0})],s.prototype,"mode",void 0);a([d({reflect:!0})],s.prototype,"size",void 0);a([d({type:Boolean,reflect:!0})],s.prototype,"persist",void 0);a([d({attribute:"storage-namespace",reflect:!0})],s.prototype,"storageNamespace",void 0);a([d()],s.prototype,"label",void 0);a([d({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0);s=a([b("co-mode-toggle")],s);export{s as CoModeToggle};
