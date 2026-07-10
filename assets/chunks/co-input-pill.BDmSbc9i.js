import{i as h,A as f,b as r,t as x}from"./custom-element.CPWKJEuj.js";import{n as d}from"./property.C8dt_fM1.js";import{CoInput as b}from"./co-input.Djej8YVE.js";import"./co-icon.CtUVdGVW.js";import"./co-button-icon.qmugsu_9.js";import{a as m}from"./theme.B9LRkxUz.js";import"./validation.Cw6SvbJ9.js";import"./LionInput.Ctf-0h0T.js";import"./NativeTextFieldMixin.BGs3xKOY.js";import"./ValidateMixin.BgFZvP2E.js";import"./DisabledMixin.DvWrDoIe.js";import"./framework.CyQWWwrP.js";import"./directive.CJw_OlP2.js";import"./InteractionStateMixin.B0Oj5qlw.js";import"./FormatMixin.DzrVvmrI.js";import"./LionButton.v50-PCNC.js";const _=h`
  /* ── Input Pill — pill-shaped standalone input ── */

  /* Override co-input's border-radius and padding per Figma spec:
     border-radius: 9px, padding: 6px 6px 6px 16px, border: 1px */
  .input-group__container {
    border-radius: var(--co-shape-radius-full);
    padding: 6px 6px 6px var(--co-space-4);
    /* padding: 6px var(--co-space-4); */
  }

  :host(:focus-within) .input-group__container {
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-shape-radius-full);
  }

  /* Hide label, help-text, feedback — standalone component */
  .form-field__label,
  .form-field__help-text,
  .form-field__feedback {
    display: none;
  }

  /* ── Prefix icon ── */

  .input-group__prefix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    color: var(--co-color-text-default);
  }

  /* ── Suffix (action button container) ── */

  .input-group__suffix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    margin-inline-start: 6px;
  }
`,v=Object.freeze({name:"search",content:'<path d="M379.15-342.08q-101.78 0-172.39-70.57-70.6-70.58-70.6-171 0-100.43 70.57-171 70.58-70.58 171.22-70.58t171.19 70.58q70.55 70.57 70.55 171.01 0 42.02-14.38 81.83-14.39 39.81-41.62 72.12l243.54 241.92q6.69 6.25 6.88 16.39.2 10.15-6.88 17.03-7.08 6.89-17.03 6.89-9.95 0-16.58-7.08L531.08-397.08q-29.85 26.42-69.61 40.71t-82.32 14.29Zm-.61-45.38q81.95 0 138.86-57.12 56.91-57.11 56.91-139.07 0-81.97-56.91-139.08-56.91-57.12-138.86-57.12-82.47 0-139.74 57.12-57.26 57.11-57.26 139.08 0 81.96 57.26 139.07 57.27 57.12 139.74 57.12Z"/>',viewBox:"0 -960 960 960",kind:"material"});m(v);const g=Object.freeze({name:"arrow-forward",content:'<path d="M693.69-457.31h-491q-9.91 0-16.3-6.39-6.39-6.39-6.39-16.31 0-9.91 6.39-16.3 6.39-6.38 16.3-6.38h491L464-732q-6.31-6.76-6.69-15.84-.39-9.08 6.69-15.99 7.08-7.25 16-7.25t16 7.08l263.85 263.85q4.53 4.53 6.73 9.39 2.19 4.86 2.19 10.81t-2.19 10.76q-2.2 4.81-6.73 9.34L496-196q-6.69 6.69-15.73 6.88-9.04.2-16.27-6.88-7.08-7.23-7.08-16.08 0-8.84 7.08-15.54l229.69-229.69Z"/>',viewBox:"0 -960 960 960",kind:"material"});m(g);var p=function(n,e,t,a){var c=arguments.length,i=c<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,a);else for(var s=n.length-1;s>=0;s--)(l=n[s])&&(i=(c<3?l(i):c>3?l(e,t,i):l(e,t))||i);return c>3&&i&&Object.defineProperty(e,t,i),i};const u={default:{},search:{prefixIcon:"search",placeholder:"Search"},chat:{actionIcon:"arrow-forward"}};let o=class extends b{constructor(){super(...arguments),this.variant="default"}static get styles(){return[...super.styles,_]}get _resolvedPrefixIcon(){var e;return this.prefixIcon??((e=u[this.variant])==null?void 0:e.prefixIcon)}get _resolvedActionIcon(){var e;return this.actionIcon??((e=u[this.variant])==null?void 0:e.actionIcon)}connectedCallback(){var e;if(super.connectedCallback(),!this.hasAttribute("placeholder")){const t=(e=u[this.variant])==null?void 0:e.placeholder;t&&this.setAttribute("placeholder",t)}}get _iconSize(){return{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"}_inputGroupPrefixTemplate(){const e=this._resolvedPrefixIcon;return e?r`
      <div part="prefix" class="input-group__prefix">
        <slot name="prefix">
          <co-icon name=${e} size=${this._iconSize} aria-hidden="true"></co-icon>
        </slot>
      </div>
    `:f}_inputGroupSuffixTemplate(){const e=this._resolvedActionIcon;return e?r`
      <div part="suffix" class="input-group__suffix">
        <slot name="suffix">
          <co-button-icon
            part="action-button"
            name=${e}
            size=${{sm:"sm",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"}
            variant="primary"
            circle
            ?disabled=${this.disabled}
            aria-label="Submit"
            @click=${this._onActionClick}
          ></co-button-icon>
        </slot>
      </div>
    `:f}_labelTemplate(){return r``}_helpTextTemplate(){return r``}_feedbackTemplate(){return r``}_onActionClick(){var t;if(this.disabled)return;const e=((t=this._inputNode)==null?void 0:t.value)??"";this.dispatchEvent(new CustomEvent("co-action",{detail:{value:e},bubbles:!0,composed:!0}))}};p([d({reflect:!0})],o.prototype,"variant",void 0);p([d({attribute:"action-icon"})],o.prototype,"actionIcon",void 0);p([d({attribute:"prefix-icon"})],o.prototype,"prefixIcon",void 0);o=p([x("co-input-pill")],o);export{o as CoInputPill};
