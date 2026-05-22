import{i as m,a as f,b as u,t as v}from"./custom-element.CPWKJEuj.js";import{n as d}from"./property.C8dt_fM1.js";import"./co-nav-rail-item.DFdlHDvo.js";import"./query.BApjzB0v.js";import"./co-icon.CG-2Ob7T.js";import"./directive.CJw_OlP2.js";import"./theme.x3s2NdXP.js";import"./framework.DW6FvQZQ.js";const b=m`
  :host {
    display: block;
    inline-size: min(100%, var(--co-component-nav-rail-bar-width));
    max-inline-size: var(--co-component-nav-rail-bar-width-max);
    block-size: auto;
    min-block-size: 0;
    box-sizing: border-box;
  }

  .nav-rail-bar {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
    min-block-size: 100%;
    max-block-size: 100%;
    padding: var(--co-component-nav-rail-bar-padding-y) var(--co-component-nav-rail-bar-padding-x);
    border-radius: var(--co-control-radius-container);
    background: var(--co-color-surface-static-contrast);
    box-shadow: var(--co-elevation-shadow-md);
    overflow: hidden;
  }

  .nav-rail-bar__items {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: var(--co-component-nav-rail-bar-gap);
    min-block-size: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }

  slot {
    display: contents;
  }

  .nav-rail-bar__footer {
    flex: 0 0 auto;
    min-block-size: 0;
  }
`;var c=function(r,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,e,t,n);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let l=class extends f{constructor(){super(...arguments),this.value="",this.label="Side navigation",this._syncingSelection=!1,this._handleSlotChange=()=>{this._syncSelection()},this._handleClick=e=>{const t=this._findItemFromEvent(e);!t||t.disabled||this._selectItem(t,!0)},this._handleKeydown=e=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(e.key))return;const t=this._enabledItems;if(t.length===0)return;const n=this._findItemFromEvent(e)??t.find(s=>s.selected)??t[0],o=Math.max(0,t.indexOf(n));let i=n;e.key==="Home"&&(i=t[0]),e.key==="End"&&(i=t[t.length-1]),e.key==="ArrowUp"&&(i=t[Math.max(0,o-1)]),e.key==="ArrowDown"&&(i=t[Math.min(t.length-1,o+1)]),e.preventDefault(),this._selectItem(i,!0,!0)}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","navigation"),this.addEventListener("click",this._handleClick),this.addEventListener("keydown",this._handleKeydown),this._syncSelection()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick),this.removeEventListener("keydown",this._handleKeydown)}updated(e){e.has("value")&&!this._syncingSelection&&this._syncSelection()}get _items(){return Array.from(this.children).filter(e=>e.tagName.toLowerCase()==="co-nav-rail-item")}get _enabledItems(){return this._items.filter(e=>!e.disabled)}render(){return u`
      <nav part="base" class="nav-rail-bar" aria-label=${this.label}>
        <div part="items" class="nav-rail-bar__items">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div part="footer" class="nav-rail-bar__footer">
          <slot name="footer"></slot>
        </div>
      </nav>
    `}_findItemFromEvent(e){return e.composedPath().find(t=>t instanceof HTMLElement&&t.tagName.toLowerCase()==="co-nav-rail-item")}_syncSelection(e=!1){const t=this._items,n=this._enabledItems;if(t.length===0||n.length===0)return;const o=this.value?n.find(a=>a.value===this.value):void 0,i=n.find(a=>a.selected),s=o??i??n[0];this._selectItem(s,e)}_selectItem(e,t=!1,n=!1){if(e.disabled)return;const o=this._items;this._syncingSelection=!0;for(const a of o){const h=a===e;a.selected=h,a.setFocusable(!a.disabled)}const i=e.value,s=this.value!==i;this.value=i,this._syncingSelection=!1,n&&e.focus(),t&&s&&this.dispatchEvent(new CustomEvent("co-change",{detail:{value:i},bubbles:!0,composed:!0}))}};l.styles=[b];c([d({reflect:!0})],l.prototype,"value",void 0);c([d()],l.prototype,"label",void 0);l=c([v("co-nav-rail-bar")],l);export{l as CoNavRailBar};
