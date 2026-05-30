import{i as m,A as f,b as r,t as h}from"./custom-element.CPWKJEuj.js";import{n as d}from"./property.C8dt_fM1.js";import{CoInput as x}from"./co-input.3deLoAdl.js";import"./co-icon.DieU1rUj.js";import"./co-button-icon.Dx3KxOZm.js";import"./validation.Cw6SvbJ9.js";import"./LionInput.BUEXLhCS.js";import"./NativeTextFieldMixin.DYzniwoD.js";import"./ValidateMixin.ByFz6SJU.js";import"./DisabledMixin.DvWrDoIe.js";import"./framework.NLW_VnUw.js";import"./directive.CJw_OlP2.js";import"./InteractionStateMixin.C-kGim9-.js";import"./FormatMixin.Bm6YBGN8.js";import"./theme.DH_6kWw5.js";import"./LionButton.v50-PCNC.js";const _=m`
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
`;var c=function(n,t,e,a){var l=arguments.length,i=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,e):a,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,a);else for(var s=n.length-1;s>=0;s--)(p=n[s])&&(i=(l<3?p(i):l>3?p(t,e,i):p(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};const u={default:{},search:{prefixIcon:"search",placeholder:"Search"},chat:{actionIcon:"arrow-forward"}};let o=class extends x{constructor(){super(...arguments),this.variant="default"}static get styles(){return[...super.styles,_]}get _resolvedPrefixIcon(){var t;return this.prefixIcon??((t=u[this.variant])==null?void 0:t.prefixIcon)}get _resolvedActionIcon(){var t;return this.actionIcon??((t=u[this.variant])==null?void 0:t.actionIcon)}connectedCallback(){var t;if(super.connectedCallback(),!this.hasAttribute("placeholder")){const e=(t=u[this.variant])==null?void 0:t.placeholder;e&&this.setAttribute("placeholder",e)}}get _iconSize(){return{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"}_inputGroupPrefixTemplate(){const t=this._resolvedPrefixIcon;return t?r`
      <div part="prefix" class="input-group__prefix">
        <slot name="prefix">
          <co-icon name=${t} size=${this._iconSize} aria-hidden="true"></co-icon>
        </slot>
      </div>
    `:f}_inputGroupSuffixTemplate(){const t=this._resolvedActionIcon;return t?r`
      <div part="suffix" class="input-group__suffix">
        <slot name="suffix">
          <co-button-icon
            part="action-button"
            name=${t}
            size=${{sm:"sm",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"}
            variant="primary"
            circle
            ?disabled=${this.disabled}
            aria-label="Submit"
            @click=${this._onActionClick}
          ></co-button-icon>
        </slot>
      </div>
    `:f}_labelTemplate(){return r``}_helpTextTemplate(){return r``}_feedbackTemplate(){return r``}_onActionClick(){var e;if(this.disabled)return;const t=((e=this._inputNode)==null?void 0:e.value)??"";this.dispatchEvent(new CustomEvent("co-action",{detail:{value:t},bubbles:!0,composed:!0}))}};c([d({reflect:!0})],o.prototype,"variant",void 0);c([d({attribute:"action-icon"})],o.prototype,"actionIcon",void 0);c([d({attribute:"prefix-icon"})],o.prototype,"prefixIcon",void 0);o=c([h("co-input-pill")],o);export{o as CoInputPill};
