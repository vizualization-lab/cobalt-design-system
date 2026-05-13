import{i as b,a as f,b as h,n as p,t as y}from"./property.D__PRo2x.js";const d=b`
  :host {
    display: block;
    inline-size: 100%;
    box-sizing: border-box;
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    inline-size: 100%;
    min-block-size: 44px;
    padding: var(--co-space-inset-sm);
    box-sizing: border-box;
    background: var(--co-color-surface-static-default);
    color: var(--co-color-text-secondary);
    font-family: var(--co-font-family-sans);
    font-size: var(--co-typography-body-sm-size);
    font-weight: var(--co-typography-body-sm-weight);
    letter-spacing: var(--co-typography-body-sm-tracking);
    line-height: var(--co-typography-body-sm-line-height);
  }

  .banner__title {
    font-size: var(--co-typography-subtitle-size);
    font-weight: var(--co-typography-subtitle-weight);
    letter-spacing: var(--co-typography-subtitle-tracking);
    line-height: var(--co-typography-subtitle-line-height);
    text-transform: uppercase;
  }

  .banner__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;var c=function(r,t,n,o){var l=arguments.length,e=l<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(l<3?a(e):l>3?a(t,n,e):a(t,n))||e);return l>3&&e&&Object.defineProperty(t,n,e),e};let i=class extends f{constructor(){super(...arguments),this.label="Banner",this._title=""}set title(t){const n=this._title;this._title=t,this.requestUpdate("title",n)}get title(){return this._title}render(){return h`
      <div part="base" class="banner" role="banner" aria-label=${this.label}>
        <span part="title" class="banner__title">
          <slot name="title">${this._title}</slot>
        </span>
        <div part="content" class="banner__content">
          <slot></slot>
        </div>
      </div>
    `}};i.styles=[d];c([p({reflect:!0})],i.prototype,"label",void 0);c([p({reflect:!0})],i.prototype,"title",null);i=c([y("co-banner")],i);export{i as CoBanner};
