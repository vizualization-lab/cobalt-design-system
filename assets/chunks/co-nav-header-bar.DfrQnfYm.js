import{i as c,a as v,b,t as p}from"./custom-element.CPWKJEuj.js";import{n as f}from"./property.C8dt_fM1.js";const h=c`
  :host {
    display: block;
    inline-size: 100%;
    box-sizing: border-box;
  }

  .nav-header-bar {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-md);
    inline-size: 100%;
    min-block-size: var(--co-component-nav-header-bar-height);
    box-sizing: border-box;
    padding: var(--co-space-inset-md) var(--co-space-inset-md);
    background: var(--co-component-nav-header-bar-background);
    border-block-end: var(--co-border-width-divider) solid
      var(--co-component-nav-header-bar-border-color);
  }

  .nav-header-bar__logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .nav-header-bar__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 auto;
    min-inline-size: 0;
    gap: var(--co-space-gap-md);
  }

  .nav-header-bar__avatar {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
`;var s=function(n,a,r,o){var t=arguments.length,e=t<3?a:o===null?o=Object.getOwnPropertyDescriptor(a,r):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(n,a,r,o);else for(var d=n.length-1;d>=0;d--)(i=n[d])&&(e=(t<3?i(e):t>3?i(a,r,e):i(a,r))||e);return t>3&&e&&Object.defineProperty(a,r,e),e};let l=class extends v{constructor(){super(...arguments),this.label="Header"}render(){return b`
      <header part="base" class="nav-header-bar" aria-label=${this.label}>
        <div part="logo" class="nav-header-bar__logo">
          <slot name="logo"></slot>
        </div>
        <div part="content" class="nav-header-bar__content">
          <slot></slot>
        </div>
        <div part="avatar" class="nav-header-bar__avatar">
          <slot name="avatar"></slot>
        </div>
      </header>
    `}};l.styles=[h];s([f({reflect:!0})],l.prototype,"label",void 0);l=s([p("co-nav-header-bar")],l);export{l as CoNavHeaderBar};
