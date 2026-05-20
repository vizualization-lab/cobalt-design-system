import{i as f,a as p,A as i,b,t as u}from"./custom-element.CPWKJEuj.js";import{n as v}from"./property.C8dt_fM1.js";const m=f`
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
`;var s=function(a,e,r,t){var c=arguments.length,o=c<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,r,t);else for(var l=a.length-1;l>=0;l--)(d=a[l])&&(o=(c<3?d(o):c>3?d(e,r,o):d(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o};let n=class extends p{constructor(){super(...arguments),this.label=""}render(){return b`
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
    `}};n.styles=[m];s([v({reflect:!0})],n.prototype,"label",void 0);n=s([u("co-card")],n);export{n as CoCard};
