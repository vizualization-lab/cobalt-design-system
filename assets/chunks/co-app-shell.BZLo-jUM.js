import{E as b,i as f,a as m,A as p,b as l,t as y}from"./custom-element.CPWKJEuj.js";import{e as k,i as D,t as $}from"./directive.CJw_OlP2.js";import{n as v}from"./property.C8dt_fM1.js";import{r as d}from"./state.DiIG59Fj.js";import{e as u}from"./query.BApjzB0v.js";import{a as w,c as z}from"./theme.BBDvIaTN.js";import"./co-icon.Bu1iKhCD.js";import"./framework.CyQWWwrP.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g="important",x=" !"+g,_=k(class extends D{constructor(r){var e;if(super(r),r.type!==$.ATTRIBUTE||r.name!=="style"||((e=r.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{const a=r[t];return a==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(r,[e]){const{style:t}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const a of this.ft)e[a]==null&&(this.ft.delete(a),a.includes("-")?t.removeProperty(a):t[a]=null);for(const a in e){const n=e[a];if(n!=null){this.ft.add(a);const o=typeof n=="string"&&n.endsWith(x);a.includes("-")||o?t.setProperty(a,o?n.slice(0,-11):n,o?g:""):t[a]=n}}return b}}),O=f`
  :host {
    display: block;
    block-size: 100dvh;
    --_co-app-shell-backdrop: rgb(0 0 0 / 0.4);
  }

  .app-shell {
    position: relative;
    display: grid;
    grid-template-rows: auto auto minmax(0, 1fr) auto;
    block-size: 100%;
    min-block-size: 0;
    background: var(--co-color-surface-static-page);
  }

  .app-shell__banner,
  .app-shell__topnav,
  .app-shell__footer {
    background: var(--co-color-surface-static-default);
  }

  .app-shell__banner {
    border-bottom: var(--co-border-width-divider) solid var(--co-color-border-default);
  }

  .app-shell__footer-inner {
    padding: var(--co-space-3) var(--co-space-inset-sm);
  }

  .app-shell__topnav {
    border-bottom: var(--co-border-width-divider) solid var(--co-color-border-default);
  }

  .app-shell__topnav-inner {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-md);
    min-block-size: calc(var(--co-control-height-lg) + var(--co-space-3));
    padding-inline: var(--co-space-inset-md);
  }

  .app-shell__topnav-slot {
    flex: 1 1 auto;
    min-inline-size: 0;
  }

  .app-shell__toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    inline-size: var(--co-control-height-md);
    block-size: var(--co-control-height-md);
    padding: 0;
    border: var(--co-border-width-action) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius-interactive);
    background: var(--co-color-surface-static-default);
    color: var(--co-color-text-default);
    font: inherit;
    cursor: pointer;
  }

  .app-shell__toggle:focus-visible {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: var(--co-focus-ring-offset);
  }

  .app-shell__content-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: stretch;
    column-gap: var(--co-space-gap-sm);
    row-gap: var(--co-space-inset-sm);
    min-block-size: 0;
    padding: var(--co-space-inset-sm);
  }

  .app-shell__rail,
  .app-shell__drawer {
    align-self: stretch;
    min-block-size: 0;
    block-size: 100%;
    overflow: visible;
  }

  .app-shell__body {
    min-inline-size: 0;
    min-block-size: 0;
    block-size: 100%;
    overflow: auto;
  }

  .app-shell__body--offset {
    margin-inline-start: var(--co-space-5);
  }

  .app-shell__footer {
    border-top: var(--co-border-width-divider) solid var(--co-color-border-default);
  }

  .app-shell__overlay {
    position: fixed;
    inset-block: 0;
    inset-inline-start: 0;
    block-size: 100dvh;
    inline-size: min(var(--_co-app-shell-overlay-width), calc(100vw - var(--co-space-inset-lg)));
    max-inline-size: calc(100vw - var(--co-inset-lg));
    visibility: hidden;
    pointer-events: none;
    z-index: 50;
  }

  .app-shell__overlay--open {
    visibility: visible;
    pointer-events: auto;
  }

  .app-shell__overlay-panel {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 1fr;
    align-content: stretch;
    box-sizing: border-box;
    inline-size: min(var(--_co-app-shell-overlay-width), calc(100vw - var(--co-space-inset-lg)));
    max-inline-size: calc(100vw - var(--co-space-inset-lg));
    block-size: 100dvh;
    overflow: auto;
    background: var(--co-color-surface-static-default);
    border-inline-end: var(--co-border-width-panel) solid var(--co-color-border-default);
    box-shadow: var(--co-elevation-shadow-lg);
    outline: none;
    transform: translateX(calc(-100% - var(--co-space-3)));
    transition: transform var(--co-motion-duration-fast) var(--co-motion-easing-default);
    will-change: transform;
  }

  .app-shell__overlay--open .app-shell__overlay-panel {
    transform: translateX(0);
  }

  .app-shell__overlay-section {
    min-inline-size: 0;
    min-block-size: 0;
    overflow: auto;
  }

  .app-shell__overlay-section + .app-shell__overlay-section {
    border-block-start: var(--co-border-width-divider) solid var(--co-color-border-default);
  }

  .app-shell__overlay-panel[data-overlay-layout='split']
    .app-shell__overlay-section
    + .app-shell__overlay-section {
    border-block-start: 0;
    border-inline-start: var(--co-border-width-divider) solid var(--co-color-border-default);
  }

  .app-shell__backdrop {
    position: fixed;
    inset: 0;
    z-index: 45;
    border: 0;
    padding: 0;
    background: var(--_co-app-shell-backdrop);
    cursor: pointer;
  }

  /* All shell slots should fill their grid/flex column width without causing horizontal overflow. */
  .app-shell__banner-slot::slotted(*),
  .app-shell__topnav-slot-inner::slotted(*),
  .app-shell__footer-slot::slotted(*),
  .app-shell__rail-slot::slotted(*),
  .app-shell__drawer-slot::slotted(*),
  .app-shell__body-slot::slotted(*),
  .app-shell__overlay-rail-slot::slotted(*),
  .app-shell__overlay-drawer-slot::slotted(*) {
    box-sizing: border-box;
    display: block;
    inline-size: 100%;
    max-inline-size: 100%;
    min-inline-size: 0;
  }

  /* Side navigation slots also need to fill the available shell height; their internals own scrolling. */
  .app-shell__rail-slot::slotted(*),
  .app-shell__drawer-slot::slotted(*),
  .app-shell__overlay-rail-slot::slotted(*),
  .app-shell__overlay-drawer-slot::slotted(*) {
    block-size: 100%;
    max-block-size: 100%;
    min-block-size: 0;
  }

  @media (min-width: 768px) {
    .app-shell__footer-inner {
      padding-inline: var(--co-space-inset-lg);
    }

    .app-shell__content-row {
      padding: var(--co-space-inset-lg);
    }
  }
`,T=Object.freeze({name:"menu",content:'<path d="M162.69-254.62q-9.64 0-16.16-6.58-6.53-6.58-6.53-16.3 0-9.73 6.53-16.12 6.52-6.38 16.16-6.38h634.62q9.64 0 16.16 6.58 6.53 6.58 6.53 16.31 0 9.72-6.53 16.11-6.52 6.38-16.16 6.38H162.69Zm0-202.69q-9.64 0-16.16-6.58-6.53-6.58-6.53-16.31 0-9.72 6.53-16.11 6.52-6.38 16.16-6.38h634.62q9.64 0 16.16 6.58 6.53 6.58 6.53 16.31 0 9.72-6.53 16.11-6.52 6.38-16.16 6.38H162.69Zm0-202.69q-9.64 0-16.16-6.58-6.53-6.58-6.53-16.31 0-9.72 6.53-16.11 6.52-6.38 16.16-6.38h634.62q9.64 0 16.16 6.58 6.53 6.58 6.53 16.3 0 9.73-6.53 16.12-6.52 6.38-16.16 6.38H162.69Z"/>',viewBox:"0 -960 960 960",kind:"material"});w(T);const C=Object.freeze({name:"close",content:'<path d="M480-448 266.92-234.92q-6.69 6.69-15.8 6.88-9.12.19-16.2-6.88-7.07-7.08-7.07-16 0-8.93 7.07-16L448-480 234.92-693.08q-6.69-6.69-6.88-15.8-.19-9.12 6.88-16.2 7.08-7.07 16-7.07 8.93 0 16 7.07L480-512l213.08-213.08q6.69-6.69 15.8-6.88 9.12-.19 16.2 6.88 7.07 7.08 7.07 16 0 8.93-7.07 16L512-480l213.08 213.08q6.69 6.69 6.88 15.8.19 9.12-6.88 16.2-7.08 7.07-16 7.07-8.93 0-16-7.07L480-448Z"/>',viewBox:"0 -960 960 960",kind:"material"});w(C);var i=function(r,e,t,a){var n=arguments.length,o=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,a);else for(var c=r.length-1;c>=0;c--)(h=r[c])&&(o=(n<3?h(o):n>3?h(e,t,o):h(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let s=class extends m{constructor(){super(...arguments),this.drawerOpen=!1,this.railWidth="",this.drawerWidth="",this._hasBanner=!1,this._hasTopnav=!1,this._hasRail=!1,this._hasDrawer=!1,this._hasFooter=!1,this._desktop=!1,this._drawerPanelId=`co-app-shell-drawer-${Math.random().toString(36).slice(2)}`,this._handleDesktopChange=e=>{this._desktop=e.matches},this._handleWindowKeydown=e=>{e.key!=="Escape"||!this._showBackdrop||this.closeDrawer()}}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._desktopQuery=window.matchMedia(`(min-width: ${z})`),this._desktop=this._desktopQuery.matches,this._desktopQuery.addEventListener("change",this._handleDesktopChange),window.addEventListener("keydown",this._handleWindowKeydown),this._lightDomObserver=new MutationObserver(()=>this._syncSlotPresence()),this._lightDomObserver.observe(this,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["slot"]})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this._desktopQuery)==null||e.removeEventListener("change",this._handleDesktopChange),window.removeEventListener("keydown",this._handleWindowKeydown),(t=this._lightDomObserver)==null||t.disconnect()}updated(e){queueMicrotask(()=>this._syncToggleAriaControls()),e.has("drawerOpen")&&this._showBackdrop&&this.drawerOpen&&queueMicrotask(()=>{var t;return(t=this._drawerPanel)==null?void 0:t.focus()})}openDrawer(){!this._canToggleDrawer||this.drawerOpen||(this.drawerOpen=!0,this._dispatchDrawerEvent("co-drawer-open",!0),this._dispatchDrawerEvent("co-drawer-toggle",!0))}closeDrawer(){!this._canToggleDrawer||!this.drawerOpen||(this.drawerOpen=!1,this._dispatchDrawerEvent("co-drawer-close",!1),this._dispatchDrawerEvent("co-drawer-toggle",!1),queueMicrotask(()=>{var e;return(e=this._drawerToggle)==null?void 0:e.focus()}))}toggleDrawer(){this._canToggleDrawer&&(this.drawerOpen?this.closeDrawer():this.openDrawer())}render(){const e=this._hasTopnav||this._showDrawerToggle,t=`app-shell__body${this._hasDesktopSideNav?" app-shell__body--offset":""}`;return l`
      <div part="base" class="app-shell">
        ${this._hasBanner?l`
              <div part="banner" class="app-shell__banner">
                <div class="app-shell__banner-inner">
                  <slot class="app-shell__banner-slot" name="banner"></slot>
                </div>
              </div>
            `:p}
        ${e?l`
              <div part="topnav" class="app-shell__topnav">
                <div class="app-shell__topnav-inner">
                  ${this._showDrawerToggle?l`
                        <button
                          id="drawer-toggle"
                          part="toggle"
                          type="button"
                          class="app-shell__toggle"
                          aria-expanded=${String(this.drawerOpen)}
                          aria-label=${this.drawerOpen?"Close navigation":"Open navigation"}
                          @click=${this.toggleDrawer}
                        >
                          <co-icon
                            name=${this.drawerOpen?"close":"menu"}
                            size="md"
                            aria-hidden="true"
                          ></co-icon>
                        </button>
                      `:p}
                  ${this._hasTopnav?l`
                        <div class="app-shell__topnav-slot">
                          <slot class="app-shell__topnav-slot-inner" name="topnav"></slot>
                        </div>
                      `:p}
                </div>
              </div>
            `:p}

        <div
          part="content"
          class="app-shell__content-row"
          style=${_({gridTemplateColumns:this._contentColumns})}
        >
          ${this._desktop&&this._hasRail?l`
                <aside part="rail" class="app-shell__rail">
                  <slot class="app-shell__rail-slot" name="rail"></slot>
                </aside>
              `:p}
          ${this._desktop&&this._hasDrawer?l`
                <aside part="drawer" class="app-shell__drawer">
                  <slot class="app-shell__drawer-slot" name="drawer"></slot>
                </aside>
              `:p}

          <main part="body" class=${t}>
            <slot class="app-shell__body-slot" name="body"></slot>
          </main>
        </div>

        ${this._hasFooter?l`
              <footer part="footer" class="app-shell__footer">
                <div class="app-shell__footer-inner">
                  <slot class="app-shell__footer-slot" name="footer"></slot>
                </div>
              </footer>
            `:p}
        ${!this._desktop&&this._hasOverlayContent?l`
              <div
                class=${`app-shell__overlay${this.drawerOpen?" app-shell__overlay--open":""}`}
                aria-hidden=${String(!this.drawerOpen)}
                style=${_({"--_co-app-shell-overlay-width":this._overlayWidth})}
              >
                <div
                  id=${this._drawerPanelId}
                  class="app-shell__overlay-panel"
                  data-overlay-layout=${this._hasSplitOverlayLayout?"split":"stack"}
                  tabindex="-1"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Navigation"
                  style=${_({"--_co-app-shell-overlay-width":this._overlayWidth,gridTemplateColumns:this._overlayColumns})}
                >
                  ${this._hasRail?l`
                        <section
                          part="rail"
                          class="app-shell__overlay-section app-shell__overlay-section--rail"
                        >
                          <slot class="app-shell__overlay-rail-slot" name="rail"></slot>
                        </section>
                      `:p}
                  ${this._hasDrawer?l`
                        <section
                          part="drawer"
                          class="app-shell__overlay-section app-shell__overlay-section--drawer"
                        >
                          <slot class="app-shell__overlay-drawer-slot" name="drawer"></slot>
                        </section>
                      `:p}
                </div>
              </div>
            `:p}
        ${this._showBackdrop?l`
              <button
                part="backdrop"
                type="button"
                class="app-shell__backdrop"
                aria-label="Close navigation"
                @click=${this.closeDrawer}
              ></button>
            `:p}
      </div>
    `}get _hasOverlayContent(){return this._hasRail||this._hasDrawer}get _canToggleDrawer(){return this._hasOverlayContent&&!this._desktop}get _showDrawerToggle(){return this._canToggleDrawer}get _showBackdrop(){return this._canToggleDrawer&&this.drawerOpen}get _hasDesktopSideNav(){return this._desktop&&(this._hasRail||this._hasDrawer)}get _resolvedRailWidth(){return this.railWidth||"var(--co-component-nav-rail-bar-width)"}get _resolvedDrawerWidth(){return this.drawerWidth||"var(--co-component-nav-drawer-width)"}get _contentColumns(){if(!this._desktop)return"minmax(0, 1fr)";const e=[];return this._hasRail&&e.push(this._resolvedRailWidth),this._hasDrawer&&e.push(this._resolvedDrawerWidth),e.push("minmax(0, 1fr)"),e.join(" ")}get _overlayWidth(){return this._hasRail&&this._hasDrawer?`calc(${this._resolvedRailWidth} + ${this._resolvedDrawerWidth})`:this._hasDrawer?this._resolvedDrawerWidth:this._resolvedRailWidth}get _overlayColumns(){return this._hasSplitOverlayLayout?`${this._resolvedRailWidth} minmax(0, 1fr)`:"minmax(0, 1fr)"}get _hasSplitOverlayLayout(){return this._hasRail&&this._hasDrawer}_dispatchDrawerEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{open:t},bubbles:!0,composed:!0}))}_syncSlotPresence(){const e=t=>Array.from(this.children).some(a=>a instanceof HTMLElement&&a.getAttribute("slot")===t);this._hasBanner=e("banner"),this._hasTopnav=e("topnav"),this._hasRail=e("rail"),this._hasDrawer=e("drawer"),this._hasFooter=e("footer")}_syncToggleAriaControls(){var t;if(!this._drawerToggle)return;const e=(t=this._drawerPanel)==null?void 0:t.id;e?this._drawerToggle.setAttribute("aria-controls",e):this._drawerToggle.removeAttribute("aria-controls")}};s.styles=[O];i([v({type:Boolean,attribute:"drawer-open",reflect:!0})],s.prototype,"drawerOpen",void 0);i([v({attribute:"rail-width",reflect:!0})],s.prototype,"railWidth",void 0);i([v({attribute:"drawer-width",reflect:!0})],s.prototype,"drawerWidth",void 0);i([d()],s.prototype,"_hasBanner",void 0);i([d()],s.prototype,"_hasTopnav",void 0);i([d()],s.prototype,"_hasRail",void 0);i([d()],s.prototype,"_hasDrawer",void 0);i([d()],s.prototype,"_hasFooter",void 0);i([d()],s.prototype,"_desktop",void 0);i([u(".app-shell__overlay-panel")],s.prototype,"_drawerPanel",void 0);i([u("#drawer-toggle")],s.prototype,"_drawerToggle",void 0);s=i([y("co-app-shell")],s);export{s as CoAppShell};
