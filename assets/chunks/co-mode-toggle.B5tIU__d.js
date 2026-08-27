import{i as u,a as g,b as f,A as b,t as v}from"./custom-element.CPWKJEuj.js";import{n as d}from"./property.C8dt_fM1.js";import{a as m,e as p,f as _,h as q,s as M}from"./theme.BVZLpu4o.js";import"./co-icon.EC8tzyeE.js";import"./framework.CyQWWwrP.js";import"./directive.CJw_OlP2.js";const y=u`
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
`,k=Object.freeze({name:"light-mode",content:'<path d="M575.15-384.57q39.46-39.18 39.46-95.15 0-55.97-39.18-95.43-39.18-39.46-95.15-39.46-55.97 0-95.43 39.18-39.46 39.18-39.46 95.15 0 55.97 39.18 95.43 39.18 39.46 95.15 39.46 55.97 0 95.43-39.18Zm-222.61 32.03Q300-405.08 300-480q0-74.92 52.54-127.46Q405.08-660 480-660q74.92 0 127.46 52.54Q660-554.92 660-480q0 74.92-52.54 127.46Q554.92-300 480-300q-74.92 0-127.46-52.54ZM72.69-457.31q-9.66 0-16.18-6.56Q50-470.44 50-480.18q0-9.74 6.51-16.13 6.52-6.38 16.18-6.38h104.62q9.66 0 16.18 6.56 6.51 6.57 6.51 16.31 0 9.74-6.51 16.13-6.52 6.38-16.18 6.38H72.69Zm710 0q-9.66 0-16.18-6.56-6.51-6.57-6.51-16.31 0-9.74 6.51-16.13 6.52-6.38 16.18-6.38h104.62q9.66 0 16.17 6.56 6.52 6.57 6.52 16.31 0 9.74-6.52 16.13-6.51 6.38-16.17 6.38H782.69Zm-319-309.2q-6.38-6.52-6.38-16.18v-104.62q0-9.66 6.56-16.17 6.57-6.52 16.31-6.52 9.74 0 16.13 6.52 6.38 6.51 6.38 16.17v104.62q0 9.66-6.56 16.18-6.57 6.51-16.31 6.51-9.74 0-16.13-6.51Zm0 710q-6.38-6.52-6.38-16.18v-104.62q0-9.66 6.56-16.18 6.57-6.51 16.31-6.51 9.74 0 16.13 6.51 6.38 6.52 6.38 16.18v104.62q0 9.66-6.56 16.18Q489.56-50 479.82-50q-9.74 0-16.13-6.51Zm-213.3-621.87-60.47-59.08q-6.69-6.69-6.48-16.15.21-9.46 6.38-16.57 7.11-6.97 16.37-6.97 9.27 0 16.35 7.07L282-710q6.46 7.15 6.46 16.04 0 8.88-6.46 15.49-6.08 6.55-15.31 6.55t-16.3-6.46Zm487.07 488.46L678-250q-6.46-7.13-6.46-16.21 0-9.08 6.96-15.79 6.19-7.08 15.11-6.88 8.93.19 16 7.26l60.47 59.08q6.69 6.69 6.48 16.15-.21 9.46-6.38 16.57-7.11 6.97-16.37 6.97-9.27 0-16.35-7.07ZM678-678q-7.08-6.69-6.88-15.61.19-8.93 7.26-16l59.08-60.47q6.69-6.69 16.15-6.48 9.46.21 16.57 6.38 6.97 7.11 6.97 16.37 0 9.27-7.07 16.35L710-678q-6.46 6.46-15.57 6.46-9.12 0-16.43-6.46ZM189.82-189.82q-6.97-7.11-6.97-16.37 0-9.27 7.07-16.35L250-282q7.03-7.08 15.98-7.08 8.94 0 15.8 7.08 6.91 6.69 6.72 15.61-.19 8.93-6.88 16l-59.08 60.47q-7.08 7.07-16.35 6.86-9.26-.21-16.37-6.76ZM480-480Z"/>',viewBox:"0 -960 960 960",kind:"material"});m(k);const x=Object.freeze({name:"brightness-auto",content:'<path d="M402.77-419.77h157.08l35.84 97.62q1.62 6.84 7.19 9.88 5.58 3.04 11.89 3.04 11.02 0 17.24-8.77 6.22-8.77 1.99-19.08L501.15-682q-1.46-4.8-5.52-7.59t-8.74-2.79h-11.87q-4.57 0-8.46 2.79-3.89 2.79-5.71 7.59L328.77-336.69q-4.23 9.59 1.57 18.52 5.8 8.94 16.9 8.94 6.93 0 12.58-3.8 5.65-3.79 7.72-10.35l35.23-96.39Zm12.69-38.77 62.63-164.92h4.53l63.92 164.92H415.46ZM354.69-180h-117q-23.59 0-40.64-17.05T180-237.69v-116.43l-85.07-85.42q-9.16-8.63-12.89-19.05-3.73-10.42-3.73-21.15 0-10.72 3.81-21.41 3.81-10.7 12.81-19.31L180-605.88v-116.43q0-23.59 17.05-40.64T237.69-780h116.43l85.42-85.46q8.61-8.61 19.54-12.42 10.92-3.81 21.65-3.81 10.74 0 21.26 4.31 10.51 4.31 19.09 12.92L605.54-780h116.77q23.59 0 40.64 17.05T780-722.31v116.43l85.46 85.42q8.61 8.61 12.42 19.12 3.81 10.51 3.81 21.23 0 10.73-3.81 21.34-3.81 10.62-12.42 19.23L780-354.12v116.43q0 23.59-17.05 40.64T722.31-180H605.54l-84.46 83.84q-8.6 8.1-19.03 12.17-10.42 4.06-21.24 4.06-10.81 0-21.24-4.06-10.44-4.07-19.03-12.17L354.69-180Zm18-45.39 99.08 96.23q3.46 3.47 8.85 3.47 5.38 0 8.84-3.47l96.99-96.23h135.86q5.38 0 8.84-3.46t3.46-8.84v-135.55l97.85-97.91q3.46-3.46 3.46-8.85t-3.46-8.85l-97.91-97.91v-135.55q0-5.38-3.46-8.84t-8.85-3.46H586.69l-97.23-97.85q-3.46-3.46-8.84-3.46-5.39 0-8.85 3.46l-98.46 97.85H237.76q-5.39 0-8.85 3.46t-3.46 8.84v135.55l-97.91 97.91q-3.46 3.46-3.46 8.85t3.46 8.85l97.85 97.91v135.55q0 5.38 3.46 8.84t8.84 3.46h135Zm107.93-255.23Z"/>',viewBox:"0 -960 960 960",kind:"material"});m(x);const w=Object.freeze({name:"dark-mode",content:'<path d="M481.15-140q-141.53 0-240.76-99.23-99.23-99.23-99.23-240.77 0-116.15 65.65-202.84 65.65-86.7 179.27-120.62 18.07-5.38 30.53-2.73t20.08 11.73q7.23 8.46 7.69 21.35.46 12.88-5.61 29.8-6.69 20.31-10.16 40.95-3.46 20.63-3.46 42.36 0 98.33 68.84 167.17Q562.82-424 661.15-424q25 0 46.77-4.11 21.77-4.12 40.31-8.27 18.15-4.93 30.69-3.16 12.54 1.77 20.17 8.62 7.37 6.85 9.02 19.15 1.66 12.31-3.34 29.46-30.85 105.62-117.35 173.96Q600.92-140 481.15-140Zm0-45.39q103.23 0 181.35-62.49 78.11-62.5 101.19-149.66-23.46 9.46-49.65 14.19-26.19 4.74-52.89 4.74-117.23 0-199.31-82.08-82.07-82.07-82.07-199.31 0-23.23 4.42-48.62 4.42-25.38 15.5-56.15-92.61 28.16-152.88 107.47-60.27 79.31-60.27 177.3 0 122.77 85.92 208.69t208.69 85.92Zm-5.53-289.69Z"/>',viewBox:"0 -960 960 960",kind:"material"});m(w);var a=function(n,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,r);else for(var c=n.length-1;c>=0;c--)(l=n[c])&&(o=(i<3?l(o):i>3?l(e,t,o):l(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o};const Z={light:"light-mode",auto:"brightness-auto",dark:"dark-mode"},h="co-mode-toggle-sync";let s=class extends g{constructor(){super(...arguments),this.mode="auto",this.size="md",this.persist=!0,this.storageNamespace="cobalt",this.label="Color mode",this.disabled=!1,this._resolvedMode="light",this._hasExplicitMode=!1,this._handleCompactClick=()=>{const e=this._resolvedMode==="dark"?"light":"dark";this._setModeFromUser(e)},this._handleSystemModeChange=()=>{this.mode==="auto"&&(this._applyMode(),this.requestUpdate())},this._handleModeSync=e=>{const t=e.detail;!t||t.storageNamespace!==this.storageNamespace||t.mode===this.mode||(this.mode=t.mode,this._resolvedMode=t.resolvedMode)}}connectedCallback(){var e;if(super.connectedCallback(),this._hasExplicitMode=this.hasAttribute("mode"),this._mediaQuery=this._getSystemModeQuery(),(e=this._mediaQuery)==null||e.addEventListener("change",this._handleSystemModeChange),window.addEventListener(h,this._handleModeSync),this.persist&&!this._hasExplicitMode){const t=p({storageNamespace:this.storageNamespace});t&&(this.mode=t)}this._applyMode()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._mediaQuery)==null||e.removeEventListener("change",this._handleSystemModeChange),window.removeEventListener(h,this._handleModeSync)}updated(e){if(e.has("mode")||e.has("persist")||e.has("storageNamespace")){if(!this._hasExplicitMode&&(e.has("persist")||e.has("storageNamespace"))){const t=this.persist?p({storageNamespace:this.storageNamespace}):null;if(t&&t!==this.mode){this.mode=t,this._applyMode();return}}this._applyMode()}}render(){const e=this._resolvedMode==="dark"?"light":"dark";return f`
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
            name=${Z[e]}
            size=${this.size}
            aria-hidden="true"
          ></co-icon>
        </button>
      </div>
    `}_setModeFromUser(e){this.disabled||this.mode===e||(this.mode=e,this._applyMode({persist:this.persist,emit:!0,broadcast:!0}))}_applyMode(e={}){const t=this._normalizeMode(this.mode);if(t!==this.mode){this.mode=t;return}const r=_().theme,i=q(t);this._resolvedMode=i,M(r,t,{persist:e.persist??!1,storageNamespace:this.storageNamespace});const o={mode:t,resolvedMode:i,persisted:!!e.persist,storageNamespace:this.storageNamespace};e.emit&&this.dispatchEvent(new CustomEvent("co-change",{detail:o,bubbles:!0,composed:!0})),e.broadcast&&window.dispatchEvent(new CustomEvent(h,{detail:o}))}_getSystemModeQuery(){if(!(typeof window>"u"||typeof window.matchMedia!="function"))return window.matchMedia("(prefers-color-scheme: dark)")}_normalizeMode(e){return e==="light"||e==="dark"||e==="auto"?e:"auto"}_compactLabel(e){return this.label?e==="dark"?"Switch to dark mode":"Switch to light mode":b}};s.styles=[y];a([d({reflect:!0})],s.prototype,"mode",void 0);a([d({reflect:!0})],s.prototype,"size",void 0);a([d({type:Boolean,reflect:!0})],s.prototype,"persist",void 0);a([d({attribute:"storage-namespace",reflect:!0})],s.prototype,"storageNamespace",void 0);a([d()],s.prototype,"label",void 0);a([d({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0);s=a([v("co-mode-toggle")],s);export{s as CoModeToggle};
