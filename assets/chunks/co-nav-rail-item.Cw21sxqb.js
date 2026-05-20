import{i as b,a as f,A as r,b as c,t as h}from"./custom-element.CPWKJEuj.js";import{n as a}from"./property.C8dt_fM1.js";import{e as m}from"./query.BApjzB0v.js";import"./co-icon.KCalRvxX.js";import"./directive.CJw_OlP2.js";import"./theme.BiDaII0t.js";import"./framework.DW6FvQZQ.js";const u=b`
  :host {
    display: block;
    inline-size: 100%;
    box-sizing: border-box;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    inline-size: 100%;
    min-block-size: 0;
    margin: 0;
    padding: var(--co-component-nav-rail-item-padding-y) var(--co-component-nav-rail-item-padding-x);
    gap: var(--co-component-nav-rail-item-gap);
    border: none;
    border-radius: var(--co-control-radius-interactive);
    background: var(--co-color-surface-interactive-nav-default);
    appearance: none;
    -webkit-appearance: none;
    color: var(--co-color-text-secondary);
    text-decoration: none;
    font: inherit;
    text-align: center;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  .nav-item__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
    inline-size: var(--co-component-nav-rail-item-icon-size);
    block-size: var(--co-component-nav-rail-item-icon-size);
  }

  .nav-item__label {
    display: block;
    max-inline-size: 100%;
    inline-size: 100%;
    min-inline-size: 0;
    overflow: hidden;
    color: currentColor;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-xsmall);
    font-weight: var(--co-typography-body-sm-weight);
    letter-spacing: var(--co-typography-body-sm-tracking);
    line-height: var(--co-typography-body-sm-line-height);
    text-align: center;
    text-overflow: ellipsis;
    text-wrap: balance;
    overflow-wrap: normal;
    word-break: normal;
  }

  :host(:not([selected]):not([disabled])) .nav-item:active {
    background: var(--co-color-surface-interactive-nav-active);
    color: var(--co-color-text-link);
  }

  :host(:not([selected])) .nav-item:hover {
    background: var(--co-color-surface-interactive-nav-hover);
    color: var(--co-color-text-link);
  }

  :host([selected]) .nav-item {
    background: var(--co-color-surface-interactive-nav-selected);
    color: var(--co-color-text-link);
  }

  .nav-item:focus-visible {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-focus-ring-width));
  }

  :host([disabled]) .nav-item {
    background: transparent;
    opacity: var(--co-opacity-disabled);
    cursor: not-allowed;
  }
`;var i=function(l,e,t,s){var d=arguments.length,n=d<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,e,t,s);else for(var v=l.length-1;v>=0;v--)(p=l[v])&&(n=(d<3?p(n):d>3?p(e,t,n):p(e,t))||n);return d>3&&n&&Object.defineProperty(e,t,n),n};let o=class extends f{constructor(){super(...arguments),this.value="",this.icon="",this.selected=!1,this.disabled=!1,this._controlTabIndex=-1}setFocusable(e){this._controlTabIndex=!this.disabled&&e?0:-1,this._control&&(this._control.tabIndex=this._controlTabIndex)}focus(e){var t;(t=this._control)==null||t.focus(e)}get _iconSize(){return"sm"}_handleDisabledLinkClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}updated(){this._control&&(this._control.tabIndex=this.disabled?-1:this._controlTabIndex)}render(){const e=c`
      <span part="label" class="nav-item__label">
        <slot>${this.label??r}</slot>
      </span>
    `,t=c`
      <span part="icon" class="nav-item__icon" aria-hidden="true">
        <slot name="icon">
          ${this.icon?c`<co-icon
                name=${this.icon}
                size=${this._iconSize}
                ?fill=${this.selected}
              ></co-icon>`:r}
        </slot>
      </span>
    `;return this.href?c`
        <a
          part="control"
          class="nav-item"
          href=${this.href}
          target=${this.target??r}
          aria-disabled=${this.disabled?"true":r}
          aria-current=${this.selected?"page":r}
          tabindex=${this.disabled?-1:this._controlTabIndex}
          @click=${this._handleDisabledLinkClick}
        >
          ${t} ${e}
        </a>
      `:c`
      <button
        part="control"
        class="nav-item"
        type="button"
        ?disabled=${this.disabled}
        aria-current=${this.selected&&!this.href?"page":r}
        tabindex=${this.disabled?-1:this._controlTabIndex}
      >
        ${t} ${e}
      </button>
    `}};o.styles=[u];i([a({reflect:!0})],o.prototype,"value",void 0);i([a({reflect:!0})],o.prototype,"icon",void 0);i([a()],o.prototype,"href",void 0);i([a()],o.prototype,"target",void 0);i([a()],o.prototype,"label",void 0);i([a({type:Boolean,reflect:!0})],o.prototype,"selected",void 0);i([a({type:Boolean,reflect:!0})],o.prototype,"disabled",void 0);i([m(".nav-item")],o.prototype,"_control",void 0);o=i([h("co-nav-rail-item")],o);export{o as CoNavRailItem};
