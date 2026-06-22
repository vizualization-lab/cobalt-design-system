import{i as v,a as u,b as m,t as f}from"./custom-element.CPWKJEuj.js";import{n as d}from"./property.C8dt_fM1.js";const h=v`
  :host {
    display: block;
    max-inline-size: var(--co-component-nav-drawer-width);
    inline-size: var(--co-component-nav-drawer-width);
    block-size: auto;
    min-block-size: 0;
    box-sizing: border-box;
    font-family: var(--co-font-family-sans);
    background: var(--co-color-surface-static-default);
    border-radius: var(--co-control-radius-container);
    box-shadow: var(--co-elevation-shadow-sm);
    overflow: hidden;
    transition: transform var(--co-motion-duration-normal) var(--co-motion-easing-default);
  }

  :host(:not([open])) {
    transform: translateX(-100%);
    pointer-events: none;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    block-size: 100%;
    min-block-size: 100%;
    max-block-size: 100%;
  }

  .drawer__content {
    flex: 1;
    min-block-size: 0;
    overflow-y: auto;
    padding-block-start: var(--co-space-3);
    padding-inline: var(--co-space-3);
  }
`;var c=function(i,t,e,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,o);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(n=(r<3?s(n):r>3?s(t,e,n):s(t,e))||n);return r>3&&n&&Object.defineProperty(t,e,n),n};let a=class extends u{constructor(){super(...arguments),this.open=!0,this.value="",this.label="Navigation",this._onItemClick=t=>{const e=t.target.closest("co-nav-drawer-item");if(!e||e.disabled)return;const o=e.value;o&&o!==this.value&&(this.value=o,this._syncSelection(o),this.dispatchEvent(new CustomEvent("co-change",{detail:{value:o},bubbles:!0,composed:!0})))},this._onKeyDown=t=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(t.key))return;const e=this._getItems();if(!e.length)return;const o=this._getItemFromEvent(t)??e[0],r=Math.max(0,e.indexOf(o));let n=r;t.key==="Home"&&(n=0),t.key==="End"&&(n=e.length-1),t.key==="ArrowUp"&&(n=Math.max(0,r-1)),t.key==="ArrowDown"&&(n=Math.min(e.length-1,r+1)),t.preventDefault(),e[n].focus()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._onItemClick),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._onItemClick),this.removeEventListener("keydown",this._onKeyDown)}render(){return m`
      <nav part="base" class="drawer" aria-label=${this.label}>
        <div part="content" class="drawer__content">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </nav>
    `}_getItems(){return Array.from(this.querySelectorAll("co-nav-drawer-group, co-nav-drawer-item:not([disabled])")).filter(t=>{var e;return!((e=t.parentElement)!=null&&e.closest("co-nav-drawer-group:not([open])"))})}_getItemFromEvent(t){return t.composedPath().find(e=>{if(!(e instanceof HTMLElement))return!1;const o=e.tagName.toLowerCase();return o==="co-nav-drawer-group"||o==="co-nav-drawer-item"})}_onSlotChange(){this.value&&this._syncSelection(this.value)}_syncSelection(t){Array.from(this.querySelectorAll("co-nav-drawer-item")).forEach(o=>{o.selected=o.value===t})}};a.styles=[h];c([d({type:Boolean,reflect:!0})],a.prototype,"open",void 0);c([d({reflect:!0})],a.prototype,"value",void 0);c([d()],a.prototype,"label",void 0);a=c([f("co-nav-drawer")],a);export{a as CoNavDrawer};
