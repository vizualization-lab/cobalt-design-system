import{A as _,a as u,b as h,t as p}from"./custom-element.CPWKJEuj.js";import{n as d}from"./property.C8dt_fM1.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=i=>i??_;var r=function(i,e,t,l){var n=arguments.length,a=n<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,t):l,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,l);else for(var b=i.length-1;b>=0;b--)(s=i[b])&&(a=(n<3?s(a):n>3?s(e,t,a):s(e,t))||a);return n>3&&a&&Object.defineProperty(e,t,a),a},c;let o=c=class extends u{constructor(){super(...arguments),this.required=!1,this.optional=!1,this.optionalLabel="(optional)",this._addedLabelledByToken=!1,this._handleClick=()=>{var t;if(!this.htmlFor)return;const e=(t=this.ownerDocument)==null?void 0:t.getElementById(this.htmlFor);e instanceof HTMLElement&&queueMicrotask(()=>{var l;this._hasFocusWithin(e)||(e.focus(),!this._hasFocusWithin(e)&&((l=this._findFocusableDescendant(e))==null||l.focus()))})}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){this.removeEventListener("click",this._handleClick),this._clearTargetLabelling(),super.disconnectedCallback()}firstUpdated(){this._syncTargetLabelling()}updated(e){e.has("htmlFor")&&this._syncTargetLabelling()}render(){return h`
      <style data-co-label-internal="true">
        .co-label__root {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-gap-sm);
          color: var(--co-color-text-default);
          cursor: default;
          font-family: var(--co-font-family-sans);
          font-size: var(--co-typography-label-size);
          font-weight: var(--co-typography-label-weight);
          letter-spacing: var(--co-typography-label-tracking);
          line-height: var(--co-typography-label-line-height);
        }

        .co-label__root--interactive {
          cursor: pointer;
        }

        .co-label__required {
          color: var(--co-color-feedback-danger-text);
        }

        .co-label__text-group {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-1);
          min-inline-size: 0;
        }

        .co-label__content,
        .co-label__content > * {
          min-inline-size: 0;
        }

        .co-label__content {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-gap-sm);
          color: inherit;
        }

        .co-label__content:empty {
          display: none;
        }

        .co-label__optional {
          color: var(--co-color-text-secondary);
          font-weight: var(--co-font-weight-regular);
        }
      </style>
      <label
        data-co-label-internal="true"
        class=${`co-label__root${this.htmlFor?" co-label__root--interactive":""}`}
        for=${f(this.htmlFor||void 0)}
      >
        ${this.required?h`<span class="co-label__required" aria-hidden="true">*</span>`:_}
        <span data-co-label-internal="true" class="co-label__content co-label__content--prefix">
          <slot name="prefix"></slot>
        </span>
        <span data-co-label-internal="true" class="co-label__text-group">
          <span data-co-label-internal="true" class="co-label__content co-label__content--default">
            <slot></slot>
          </span>
          ${this._optionalTemplate()}
        </span>
        <span data-co-label-internal="true" class="co-label__content co-label__content--suffix">
          <slot name="suffix"></slot>
        </span>
      </label>
    `}_optionalTemplate(){return this.required||!this.optional||!this.optionalLabel?_:h`<span class="co-label__optional">${this.optionalLabel}</span>`}_syncTargetLabelling(){var a;if(this._clearTargetLabelling(),!this.htmlFor)return;const e=(a=this.ownerDocument)==null?void 0:a.getElementById(this.htmlFor);if(!(e instanceof HTMLElement))return;const t=this._labelId(),l=this._ariaLabelledByTokens(e),n=l.includes(t);n||e.setAttribute("aria-labelledby",[...l,t].join(" ")),this._labelledTarget=e,this._labelledTargetToken=t,this._addedLabelledByToken=!n}_clearTargetLabelling(){if(!this._labelledTarget||!this._labelledTargetToken||!this._addedLabelledByToken){this._labelledTarget=void 0,this._labelledTargetToken=void 0,this._addedLabelledByToken=!1;return}const e=this._ariaLabelledByTokens(this._labelledTarget).filter(t=>t!==this._labelledTargetToken);e.length>0?this._labelledTarget.setAttribute("aria-labelledby",e.join(" ")):this._labelledTarget.removeAttribute("aria-labelledby"),this._labelledTarget=void 0,this._labelledTargetToken=void 0,this._addedLabelledByToken=!1}_labelId(){return this.id||(c._nextGeneratedId+=1,this.id=`co-label-${c._nextGeneratedId}`),this.id}_ariaLabelledByTokens(e){return(e.getAttribute("aria-labelledby")??"").split(/\s+/).filter(Boolean)}_hasFocusWithin(e){var t;return e.matches(":focus-within")||((t=this.ownerDocument)==null?void 0:t.activeElement)===e}_findFocusableDescendant(e){var l;const t='[slot="input"], input, textarea, select, button, [tabindex]:not([tabindex="-1"])';return e.querySelector(t)??((l=e.shadowRoot)==null?void 0:l.querySelector(t))??null}};o._nextGeneratedId=0;r([d({attribute:"for",reflect:!0})],o.prototype,"htmlFor",void 0);r([d({type:Boolean,reflect:!0})],o.prototype,"required",void 0);r([d({type:Boolean,reflect:!0})],o.prototype,"optional",void 0);r([d({attribute:"optional-label"})],o.prototype,"optionalLabel",void 0);o=c=r([p("co-label")],o);export{o as CoLabel};
