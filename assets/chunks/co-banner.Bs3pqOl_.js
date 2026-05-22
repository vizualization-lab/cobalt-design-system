import{i as b,a as f,b as m,t as d}from"./custom-element.CPWKJEuj.js";import{n as p}from"./property.C8dt_fM1.js";const h=b`
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
    max-inline-size: 100%;
    min-block-size: var(--co-component-banner-min-height);
    padding: var(--co-component-banner-padding-block) var(--co-component-banner-padding-inline);
    gap: var(--co-component-banner-gap);
    box-sizing: border-box;
    overflow: hidden;
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
    max-inline-size: 100%;
    overflow: hidden;
    color: var(--co-component-banner-title-color);
    font-size: var(--co-component-banner-title-font-size);
    font-weight: var(--co-component-banner-title-font-weight);
    letter-spacing: var(--co-component-banner-title-tracking);
    line-height: var(--co-component-banner-title-line-height);
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .banner__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-inline-size: 100%;
    overflow: hidden;
    color: var(--co-component-banner-content-color);
    font-size: var(--co-component-banner-content-font-size);
    font-weight: var(--co-component-banner-content-font-weight);
    letter-spacing: var(--co-component-banner-content-tracking);
    line-height: var(--co-component-banner-content-line-height);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .banner__slot::slotted(*) {
    max-inline-size: 100%;
    margin-block: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;var s=function(i,n,t,r){var a=arguments.length,e=a<3?n:r===null?r=Object.getOwnPropertyDescriptor(n,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(i,n,t,r);else for(var c=i.length-1;c>=0;c--)(l=i[c])&&(e=(a<3?l(e):a>3?l(n,t,e):l(n,t))||e);return a>3&&e&&Object.defineProperty(n,t,e),e};let o=class extends f{constructor(){super(...arguments),this.label="Banner",this._title=""}set title(n){const t=this._title;this._title=n,this.requestUpdate("title",t)}get title(){return this._title}render(){return m`
      <div part="base" class="banner" role="banner" aria-label=${this.label}>
        <span part="title" class="banner__title">
          <slot name="title">${this._title}</slot>
        </span>
        <div part="content" class="banner__content">
          <slot class="banner__slot"></slot>
        </div>
      </div>
    `}};o.styles=[h];s([p({reflect:!0})],o.prototype,"label",void 0);s([p({reflect:!0})],o.prototype,"title",null);o=s([d("co-banner")],o);export{o as CoBanner};
