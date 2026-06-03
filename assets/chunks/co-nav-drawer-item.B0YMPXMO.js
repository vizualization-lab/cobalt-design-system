import{i as f,a as v,A as n,b as p,t as m}from"./custom-element.CPWKJEuj.js";import{n as s}from"./property.C8dt_fM1.js";import{r as u}from"./state.DiIG59Fj.js";import"./co-icon.BrE-20iu.js";import"./directive.CJw_OlP2.js";import"./theme.BwmGm3Tr.js";import"./framework.CyQWWwrP.js";const b=f`
  :host {
    display: block;
  }

  .item {
    display: flex;
    align-items: center;
    gap: var(--co-component-nav-drawer-item-gap);
    box-sizing: border-box;
    padding-block: var(--co-component-nav-drawer-item-padding-y);
    padding-inline: var(--co-component-nav-drawer-item-padding-x);
    margin-block: var(--co-component-nav-drawer-item-margin-block);
    border-radius: var(--co-control-radius-container);
    color: var(--co-color-text-default);
    font-family: var(--co-font-family-sans);
    font-size: var(--co-typography-body-sm-size);
    font-weight: var(--co-typography-body-sm-weight);
    letter-spacing: var(--co-typography-body-sm-tracking);
    line-height: var(--co-typography-body-sm-line-height);
    text-decoration: none;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
    outline: none;
  }

  :host(:not([selected])) .item:hover {
    background: var(--co-color-surface-interactive-nav-hover);
    color: var(--co-color-text-link);
  }

  :host(:not([selected]):not([disabled])) .item:active {
    background: var(--co-color-surface-interactive-nav-active);
    color: var(--co-color-text-link);
  }

  :host([selected]) .item {
    background: var(--co-color-surface-interactive-nav-selected);
    color: var(--co-color-text-link);
    font-weight: var(--co-typography-label-weight);
  }

  :host([disabled]) .item {
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  :host([disabled]) .item:hover {
    background: transparent;
  }

  .item:focus-visible {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
  }

  .item__prefix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    color: inherit;
  }

  .item__prefix[hidden] {
    display: none;
  }

  .item__label {
    flex: 1 1 auto;
    min-inline-size: 0;
  }
`;var a=function(c,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,t,e,r);else for(var h=c.length-1;h>=0;h--)(d=c[h])&&(i=(l<3?d(i):l>3?d(t,e,i):d(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};let o=class extends v{constructor(){super(...arguments),this._hasPrefixSlot=!1,this.value="",this.icon="",this.selected=!1,this.disabled=!1,this._onPrefixSlotChange=t=>{const e=t.target;this._hasPrefixSlot=e.assignedNodes({flatten:!0}).length>0}}focus(t){var e,r;(r=(e=this.shadowRoot)==null?void 0:e.querySelector('[part="base"]'))==null||r.focus(t)}render(){const t=this.icon||this._hasPrefixSlot,e=p`
      <span part="prefix" class="item__prefix" ?hidden=${!t}>
        <slot name="prefix" @slotchange=${this._onPrefixSlotChange}>
          ${this.icon?p`<co-icon name=${this.icon} size="sm" aria-hidden="true"></co-icon>`:n}
        </slot>
      </span>
      <span part="label" class="item__label">
        <slot></slot>
      </span>
    `;return this.href&&!this.disabled?p`
        <a
          part="base"
          class="item"
          href=${this.href}
          tabindex=${this.disabled?-1:0}
          aria-current=${this.selected?"page":n}
          aria-disabled=${this.disabled?"true":n}
        >
          ${e}
        </a>
      `:p`
      <div
        part="base"
        class="item"
        role="link"
        tabindex=${this.disabled?-1:0}
        aria-current=${this.selected?"page":n}
        aria-disabled=${this.disabled?"true":n}
      >
        ${e}
      </div>
    `}};o.styles=[b];a([u()],o.prototype,"_hasPrefixSlot",void 0);a([s({reflect:!0})],o.prototype,"value",void 0);a([s()],o.prototype,"icon",void 0);a([s()],o.prototype,"href",void 0);a([s({type:Boolean,reflect:!0})],o.prototype,"selected",void 0);a([s({type:Boolean,reflect:!0})],o.prototype,"disabled",void 0);o=a([m("co-nav-drawer-item")],o);export{o as CoNavDrawerItem};
