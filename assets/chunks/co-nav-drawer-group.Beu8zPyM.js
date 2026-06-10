import{i as g,a as d,b as u,t as v}from"./custom-element.CPWKJEuj.js";import{n as s}from"./property.C8dt_fM1.js";import"./co-icon.C4LvJzaC.js";import{a as h}from"./theme.CUdCMniI.js";import"./directive.CJw_OlP2.js";import"./framework.CyQWWwrP.js";const f=g`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: var(--co-component-nav-drawer-group-gap);
    margin-block-start: var(--co-component-nav-drawer-group-margin-block-start);
  }

  .group__trigger {
    display: flex;
    align-items: center;
    inline-size: 100%;
    gap: var(--co-component-nav-drawer-group-trigger-gap);
    box-sizing: border-box;
    padding-block: var(--co-component-nav-drawer-group-trigger-padding-y);
    padding-inline: var(--co-component-nav-drawer-group-trigger-padding-x);
    border: none;
    border-radius: var(--co-control-radius-container);
    background: transparent;
    color: var(--co-color-text-default);
    font: inherit;
    font-size: var(--co-typography-body-sm-size);
    font-weight: var(--co-typography-label-weight);
    letter-spacing: var(--co-typography-body-sm-tracking);
    line-height: var(--co-typography-body-sm-line-height);
    text-align: start;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  .group__trigger:hover {
    background: var(--co-color-surface-interactive-nav-hover);
    color: var(--co-color-text-link);
  }

  .group__trigger:active {
    background: var(--co-color-surface-interactive-nav-active);
    color: var(--co-color-text-link);
  }

  .group__trigger:focus-visible {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
  }

  .group__chevron {
    flex: 0 0 auto;
    transition: transform var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host([open]) .group__chevron {
    transform: rotate(90deg);
  }

  .group__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .group__content {
    display: flex;
    flex-direction: column;
    gap: var(--co-component-nav-drawer-group-content-gap);
    padding-inline-start: var(--co-component-nav-drawer-group-content-indent);
  }

  .group__content[hidden] {
    display: none;
  }
`,m=Object.freeze({name:"chevron-right",content:'<path d="M536.92-480.62 358.77-659.15q-7.08-6.7-6.77-15.81.31-9.12 7.39-16 7.07-6.89 16.3-6.89t16.31 7.08l189.92 189.92q4.62 4.62 6.81 9.43 2.19 4.8 2.19 10.61T588.73-470q-2.19 5-6.81 9.62L391.38-269.85q-6.69 6.7-15.8 6.58-9.12-.12-16.19-7.19-7.08-7.08-7.08-16.31 0-9.23 7.08-16.31l177.53-177.54Z"/>',viewBox:"0 -960 960 960",kind:"material"});h(m);var l=function(a,o,r,t){var i=arguments.length,e=i<3?o:t===null?t=Object.getOwnPropertyDescriptor(o,r):t,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(a,o,r,t);else for(var p=a.length-1;p>=0;p--)(c=a[p])&&(e=(i<3?c(e):i>3?c(o,r,e):c(o,r))||e);return i>3&&e&&Object.defineProperty(o,r,e),e};let b=0,n=class extends d{constructor(){super(...arguments),this._contentId=`co-nav-drawer-group-content-${b++}`,this.label="",this.value="",this.open=!1,this._onToggle=()=>{this.open=!this.open,this.dispatchEvent(new CustomEvent("co-toggle",{detail:{value:this.value,open:this.open},bubbles:!0,composed:!0}))},this._onKeyDown=o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),this._onToggle())}}focus(o){var r,t;(t=(r=this.shadowRoot)==null?void 0:r.querySelector('[part="trigger"]'))==null||t.focus(o)}render(){return u`
      <div part="base" class="group">
        <button
          part="trigger"
          class="group__trigger"
          type="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls=${this._contentId}
          @click=${this._onToggle}
          @keydown=${this._onKeyDown}
        >
          <co-icon
            part="chevron"
            class="group__chevron"
            name="chevron-right"
            size="xs"
            aria-hidden="true"
          ></co-icon>
          <span part="label" class="group__label">${this.label}</span>
        </button>
        <div part="content" id=${this._contentId} class="group__content" ?hidden=${!this.open}>
          <slot></slot>
        </div>
      </div>
    `}};n.styles=[f];l([s()],n.prototype,"label",void 0);l([s({reflect:!0})],n.prototype,"value",void 0);l([s({type:Boolean,reflect:!0})],n.prototype,"open",void 0);n=l([v("co-nav-drawer-group")],n);export{n as CoNavDrawerGroup};
