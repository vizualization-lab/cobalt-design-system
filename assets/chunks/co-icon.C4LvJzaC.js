import{A as m,E as p,i as g,a as u,b as v,t as y}from"./custom-element.CPWKJEuj.js";import{n as l}from"./property.C8dt_fM1.js";import{i as b,t as w,e as x}from"./directive.CJw_OlP2.js";import{g as z,b as C}from"./theme.CUdCMniI.js";import"./framework.CyQWWwrP.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d extends b{constructor(t){if(super(t),this.it=m,t.type!==w.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===m||t==null)return this._t=void 0,this.it=t;if(t===p)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}d.directiveName="unsafeHTML",d.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends d{}f.directiveName="unsafeSVG",f.resultType=2;const $=x(f),S=g`
  /* ── Base ── */
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    line-height: 0;
    flex-shrink: 0;
    color: inherit;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  /* ── Sizes ── */
  :host,
  :host([size='md']) {
    width: var(--co-sizing-icon-md);
    height: var(--co-sizing-icon-md);
  }

  :host([size='xs']) {
    width: var(--co-sizing-icon-xs);
    height: var(--co-sizing-icon-xs);
  }

  :host([size='sm']) {
    width: var(--co-sizing-icon-sm);
    height: var(--co-sizing-icon-sm);
  }

  :host([size='lg']) {
    width: var(--co-sizing-icon-lg);
    height: var(--co-sizing-icon-lg);
  }

  :host([size='xl']) {
    width: var(--co-sizing-icon-xl);
    height: var(--co-sizing-icon-xl);
  }

  /* ── Animations ──
     Per-part CSS animations target SVG <g> elements inside the shadow DOM.
     These work in Chrome and Firefox. Safari does not support CSS transforms
     on SVG child elements, so the component detects this at runtime and
     falls back to the Web Animations API on the :host element. */

  /* Respect user preference for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    :host([animated]),
    :host([animated]) svg * {
      animation: none !important;
      transition: none !important;
    }
  }

  /* Bell ring (notifications) — swings the bell body from the top pivot */
  :host([animated]) .co-anim-bell-body {
    transform-box: fill-box;
    transform-origin: center top;
    animation: co-bell-ring 400ms var(--co-motion-easing-in-out) 2;
  }
  @keyframes co-bell-ring {
    0%,
    100% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    45% {
      transform: rotate(6deg);
    }
    60% {
      transform: rotate(-4deg);
    }
    75% {
      transform: rotate(2deg);
    }
  }

  /* Spin (refresh, sync, etc.) — rotates the entire icon path */
  :host([animated]) .co-anim-rotate {
    transform-box: fill-box;
    transform-origin: center;
    animation: co-spin 1200ms linear infinite;
  }
  @keyframes co-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Check scale-in — pops in the checkmark */
  :host([animated]) .co-anim-check {
    transform-box: fill-box;
    transform-origin: center;
    animation: co-check-in 300ms var(--co-motion-easing-out) forwards;
  }
  @keyframes co-check-in {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;var r=function(s,t,e,a){var n=arguments.length,i=n<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,e):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,t,e,a);else for(var h=s.length-1;h>=0;h--)(c=s[h])&&(i=(n<3?c(i):n>3?c(t,e,i):c(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i};const _="0 -960 960 960";let o=class extends u{constructor(){super(...arguments),this.name="",this.size="md",this.fill=!1,this.animated=!1}async replay(){if(!this.animated){this.animated=!0,await this.updateComplete;return}this.animated=!1,await this.updateComplete,this.getBoundingClientRect(),this.animated=!0,await this.updateComplete}render(){const t=this.icon,e=this.animated&&this.name?z(this.name,{fill:this.fill}):void 0,a=t??(this.name?C(this.name,{fill:this.fill}):void 0),n=e??a;if(!n)return m;const i=!this.label,c=n.viewBox||_;return v`
      <svg
        part="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox=${c}
        fill="currentColor"
        role=${i?"presentation":"img"}
        aria-hidden=${i?"true":"false"}
        aria-label=${this.label??m}
      >
        ${$(n.content)}
      </svg>
    `}};o.styles=[S];r([l({reflect:!0})],o.prototype,"name",void 0);r([l({attribute:!1})],o.prototype,"icon",void 0);r([l({reflect:!0})],o.prototype,"size",void 0);r([l({type:Boolean,reflect:!0})],o.prototype,"fill",void 0);r([l({type:Boolean,reflect:!0})],o.prototype,"animated",void 0);r([l()],o.prototype,"label",void 0);o=r([y("co-icon")],o);export{o as CoIcon};
