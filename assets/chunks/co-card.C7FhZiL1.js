import{i as f,a as p,A as i,b,n as u,t as v}from"./property.D__PRo2x.js";const _=f`
  :host {
    display: block;
    box-sizing: border-box;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--co-component-card-gap);
    padding: var(--co-component-card-padding);
    border-radius: var(--co-component-card-radius);
    background: var(--co-component-card-background);
    box-shadow: var(--co-component-card-shadow);
    font-family: var(--co-font-family-sans);
    color: var(--co-color-text-default);
  }

  .card__header,
  .card__body,
  .card__footer {
    inline-size: 100%;
  }
`;var s=function(a,o,r,t){var c=arguments.length,e=c<3?o:t===null?t=Object.getOwnPropertyDescriptor(o,r):t,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(a,o,r,t);else for(var l=a.length-1;l>=0;l--)(d=a[l])&&(e=(c<3?d(e):c>3?d(o,r,e):d(o,r))||e);return c>3&&e&&Object.defineProperty(o,r,e),e};let n=class extends p{constructor(){super(...arguments),this.label=""}render(){return b`
      <div
        part="base"
        class="card"
        role=${this.label?"region":i}
        aria-label=${this.label||i}
      >
        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>
        <div part="body" class="card__body">
          <slot></slot>
        </div>
        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};n.styles=[_];s([u({reflect:!0})],n.prototype,"label",void 0);n=s([v("co-card")],n);export{n as CoCard};
