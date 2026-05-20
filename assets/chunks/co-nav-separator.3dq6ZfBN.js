import{i as p,a as i,b as s,t as f}from"./custom-element.CPWKJEuj.js";const v=p`
  :host {
    display: block;
  }

  .separator {
    border: none;
    border-top: var(--co-border-width-divider) solid var(--co-color-border-default);
    margin: var(--co-space-2) 0;
  }
`;var b=function(a,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,o,t);else for(var d=a.length-1;d>=0;d--)(c=a[d])&&(r=(n<3?c(r):n>3?c(e,o,r):c(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let l=class extends i{render(){return s`<hr part="separator" class="separator" aria-hidden="true" />`}};l.styles=[v];l=b([f("co-nav-separator")],l);export{l as CoNavSeparator};
