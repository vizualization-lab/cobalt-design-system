import{i as p,a as f,b as m,t as g}from"./custom-element.CPWKJEuj.js";import{n as b}from"./property.C8dt_fM1.js";const h=p`
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
    min-block-size: var(--co-component-banner-min-height);
    padding: var(--co-component-banner-padding-block) var(--co-component-banner-padding-inline);
    gap: var(--co-component-banner-gap);
    box-sizing: border-box;
    background: var(--co-component-banner-background);
    color: var(--co-component-banner-content-color);
    font-family: var(--co-font-family-sans);
    font-size: var(--co-component-banner-content-font-size);
    font-weight: var(--co-component-banner-content-font-weight);
    letter-spacing: var(--co-component-banner-content-tracking);
    line-height: var(--co-component-banner-content-line-height);
    text-align: center;
  }

  .banner__title {
    color: var(--co-component-banner-title-color);
    font-size: var(--co-component-banner-title-font-size);
    font-weight: var(--co-component-banner-title-font-weight);
    letter-spacing: var(--co-component-banner-title-tracking);
    line-height: var(--co-component-banner-title-line-height);
    text-transform: uppercase;
  }

  .banner__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--co-component-banner-content-color);
    font-size: var(--co-component-banner-content-font-size);
    font-weight: var(--co-component-banner-content-font-weight);
    letter-spacing: var(--co-component-banner-content-tracking);
    line-height: var(--co-component-banner-content-line-height);
  }

  .banner__slot::slotted(*) {
    margin-block: 0;
  }
`;var s=function(r,n,t,i){var a=arguments.length,e=a<3?n:i===null?i=Object.getOwnPropertyDescriptor(n,t):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,n,t,i);else for(var l=r.length-1;l>=0;l--)(c=r[l])&&(e=(a<3?c(e):a>3?c(n,t,e):c(n,t))||e);return a>3&&e&&Object.defineProperty(n,t,e),e};let o=class extends f{constructor(){super(...arguments),this.label="Banner",this._title=""}set title(n){const t=this._title;this._title=n,this.requestUpdate("title",t)}get title(){return this._title}render(){return m`
      <div part="base" class="banner" role="banner" aria-label=${this.label}>
        <span part="title" class="banner__title">
          <slot name="title">${this._title}</slot>
        </span>
        <div part="content" class="banner__content">
          <slot class="banner__slot"></slot>
        </div>
      </div>
    `}};o.styles=[h];s([b({reflect:!0})],o.prototype,"label",void 0);s([b({reflect:!0})],o.prototype,"title",null);o=s([g("co-banner")],o);export{o as CoBanner};
