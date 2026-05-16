import{A as m,E as p,i as g,a as u,b as v,n as a,t as y}from"./property.D__PRo2x.js";import{i as b,t as w,e as x}from"./directive.CJw_OlP2.js";import{b as z,c as C,d as $,o as S}from"./theme.D0KAFMlB.js";import"./framework.DW6FvQZQ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d extends b{constructor(t){if(super(t),this.it=m,t.type!==w.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===m||t==null)return this._t=void 0,this.it=t;if(t===p)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}d.directiveName="unsafeHTML",d.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends d{}f.directiveName="unsafeSVG",f.resultType=2;const k=x(f),I=g`
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
`;var r=function(n,t,e,s){var c=arguments.length,i=c<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,s);else for(var h=n.length-1;h>=0;h--)(l=n[h])&&(i=(c<3?l(i):c>3?l(t,e,i):l(t,e))||i);return c>3&&i&&Object.defineProperty(t,e,i),i};let o=class extends u{constructor(){super(...arguments),this.name="",this.size="md",this.fill=!1,this.animated=!1}async replay(){if(!this.animated){this.animated=!0,await this.updateComplete;return}this.animated=!1,await this.updateComplete,this.getBoundingClientRect(),this.animated=!0,await this.updateComplete}render(){const t=this.animated&&z(this.name,"rounded",this.fill)||C(this.name,"rounded",this.fill);if(!t)return m;const e=!this.label,s=$.has(this.name)||S.has(this.name)?"0 0 24 24":"0 -960 960 960";return v`
      <svg
        part="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox=${s}
        fill="currentColor"
        role=${e?"presentation":"img"}
        aria-hidden=${e?"true":"false"}
        aria-label=${this.label??m}
      >
        ${k(t)}
      </svg>
    `}};o.styles=[I];r([a({reflect:!0})],o.prototype,"name",void 0);r([a({reflect:!0})],o.prototype,"size",void 0);r([a({type:Boolean,reflect:!0})],o.prototype,"fill",void 0);r([a({type:Boolean,reflect:!0})],o.prototype,"animated",void 0);r([a()],o.prototype,"label",void 0);o=r([y("co-icon")],o);export{o as CoIcon};
