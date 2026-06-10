import{i as k,b as p,A as S,t as F}from"./custom-element.CPWKJEuj.js";import{n as h}from"./property.C8dt_fM1.js";import{C as q}from"./theme.CUdCMniI.js";import"./co-icon.C4LvJzaC.js";import{O as D,b as U,w as R}from"./keyboard-arrow-down.ZHPN-zFA.js";import{V as B,C as K,e as A,c as $,b as G}from"./validation.Cw6SvbJ9.js";import{CoOption as Oe}from"./co-option.DCflX9zP.js";import{_ as d}from"./framework.CyQWWwrP.js";import{U as C,L as P}from"./ValidateMixin.BgFZvP2E.js";import{C as W}from"./ChoiceGroupMixin.DsvAEvIq.js";import{d as j}from"./DisabledMixin.DvWrDoIe.js";import{L as H}from"./LionListbox.-BolC3E6.js";import"./directive.CJw_OlP2.js";import"./check-box-outline-blank.D4HWJ-JU.js";import"./radio-button-unchecked.CP1dr5x2.js";import"./ChoiceInputMixin.vzOX49Le.js";import"./FormatMixin.DzrVvmrI.js";import"./InteractionStateMixin.B0Oj5qlw.js";import"./FormRegistrarMixin._jRku9_P.js";const m=new WeakMap;function M(n,e){Array.from(n.childNodes).forEach(t=>{if(t.nodeName==="#text"){const o=new RegExp(`^(.*?)(${e})(.*)$`,"i"),s=t.nodeValue.match(o);if(s){const i=document.createTextNode(s[1]);n.appendChild(i);const r=document.createElement("b");r.textContent=s[2],n.appendChild(r);const c=document.createTextNode(s[3]);n.appendChild(c),n.removeChild(t),m.set(n,()=>{n.appendChild(t),n.contains(i)&&i.parentNode!==null&&i.parentNode.removeChild(i),n.contains(r)&&r.parentNode!==null&&r.parentNode.removeChild(r),n.contains(c)&&c.parentNode!==null&&c.parentNode.removeChild(c)})}}else M(t,e)})}function T(n){m.has(n)&&m.get(n)(),Array.from(n.childNodes).forEach(e=>{e.nodeName==="#text"?m.has(e)&&m.get(e)():T(e)})}class w extends B{static get validatorName(){return"MatchesOption"}execute(e,t,o){return(o==null?void 0:o.node.modelValue)instanceof C}}function _(n){return Array.isArray(n)?n:[n]}const X=n=>class extends W(n){static get properties(){return{allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},modelValue:{type:Object}}}get modelValue(){return this.__getChoicesFrom(super.modelValue)}set modelValue(t){if(super.modelValue=t,t==null||t==="")this._customChoices=new Set;else if(this.allowCustomChoice){const o=this.modelValue;this._customChoices=new Set(_(t)),this.requestUpdate("modelValue",o)}}get formattedValue(){return this.__getChoicesFrom(super.formattedValue)}set formattedValue(t){if(super.formattedValue=t,t==null)this._customChoices=new Set;else if(this.allowCustomChoice){const o=this.modelValue;this._customChoices=new Set(_(t).map(s=>{var i;return((i=this.formElements.find(r=>r.formattedValue===s))==null?void 0:i.modelValue)||s})),this.requestUpdate("modelValue",o)}}get serializedValue(){return this.__getChoicesFrom(super.serializedValue)}set serializedValue(t){if(super.serializedValue=t,t==null)this._customChoices=new Set;else if(this.allowCustomChoice){const o=this.modelValue;this._customChoices=new Set(_(t).map(s=>{var i;return((i=this.formElements.find(r=>r.serializedValue===s))==null?void 0:i.modelValue)||s})),this.requestUpdate("modelValue",o)}}get customChoices(){if(!this.allowCustomChoice)return[];const t=this._getCheckedElements();return Array.from(this._customChoices).filter(o=>!t.some(s=>s.choiceValue===o))}constructor(){super(),this.allowCustomChoice=!1,this._customChoices=new Set}__getChoicesFrom(t){const o=t;return this.allowCustomChoice?this.multipleChoice?[..._(o),...this.customChoices]:o===""?this._customChoices.values().next().value||"":o:o}_isEmpty(){return super._isEmpty()&&this._customChoices.size===0}clear(){this._customChoices=new Set,super.clear()}parser(t){return this.allowCustomChoice&&Array.isArray(t)?t.filter(o=>o.trim()!==""):t}},Z=j(X),g=new WeakMap;class J extends P(D(Z(H))){static get properties(){return{autocomplete:{type:String,reflect:!0},matchMode:{type:String,attribute:"match-mode"},showAllOnEmpty:{type:Boolean,attribute:"show-all-on-empty"},requireOptionMatch:{type:Boolean},allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},__shouldAutocompleteNextUpdate:Boolean}}static get styles(){return[...super.styles,k`
        .input-group__input {
          display: flex;
          flex: 1;
        }

        .input-group__container {
          display: flex;
          border-bottom: 1px solid;
        }

        * > ::slotted([slot='input']) {
          outline: none;
          flex: 1;
          box-sizing: border-box;
          border: none;
          width: 100%;
          /* border-bottom: 1px solid; */
        }

        * > ::slotted([role='listbox']) {
          max-height: 200px;
          display: block;
          overflow: auto;
          z-index: 1;
          background: white;
        }
      `]}static get localizeNamespaces(){return[{"lion-combobox":e=>{switch(e){case"bg-BG":case"bg":return d(()=>import("./bg.CnMxkYth.js"),[]);case"cs-CZ":case"cs":return d(()=>import("./cs.wLKWYoEd.js"),[]);case"de-AT":case"de-DE":case"de":return d(()=>import("./de.BMTIiI_u.js"),[]);case"en-AU":case"en-GB":case"en-PH":case"en-US":case"en":return d(()=>import("./en.bt6AHwUY.js"),[]);case"es-ES":case"es":return d(()=>import("./es.DtqAq6rp.js"),[]);case"fr-FR":case"fr-BE":case"fr":return d(()=>import("./fr.TvxLRXi9.js"),[]);case"hu-HU":case"hu":return d(()=>import("./hu.LTktcuIp.js"),[]);case"it-IT":case"it":return d(()=>import("./it.CLQp6VRo.js"),[]);case"nl-BE":case"nl-NL":case"nl":return d(()=>import("./nl.BPWGiqq3.js"),[]);case"pl-PL":case"pl":return d(()=>import("./pl.C-Y5rsX-.js"),[]);case"ro-RO":case"ro":return d(()=>import("./ro.DQbjJcYj.js"),[]);case"ru-RU":case"ru":return d(()=>import("./ru.DWmtva8q.js"),[]);case"sk-SK":case"sk":return d(()=>import("./sk.b2xDu6DA.js"),[]);case"uk-UA":case"uk":return d(()=>import("./uk.CHbv7RzQ.js"),[]);case"zh-CN":case"zh":return d(()=>import("./zh.CKc3I4YQ.js"),[]);default:return d(()=>import("./en.bt6AHwUY.js"),[])}}},...super.localizeNamespaces]}get modelValue(){const e=super.modelValue;return e!==""?e:this.parser(this.value)}set modelValue(e){super.modelValue=e}get value(){var e;return((e=this._inputNode)==null?void 0:e.value)||this.__value||""}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}reset(){super.reset(),this.multipleChoice||(this.value=this._initialModelValue),this._resetListboxOptions()}_resetListboxOptions(){this.formElements.forEach((e,t)=>{this._unhighlightMatchedOption(e),!this.showAllOnEmpty||!this.opened?e.style.display="none":(e.style.display="",e.setAttribute("aria-posinset",`${t+1}`),e.setAttribute("aria-setsize",`${this.formElements.length}`),e.removeAttribute("aria-hidden"))})}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_overlayListboxTemplate(){return p`
      <div
        id="overlay-content-node-wrapper"
        role="dialog"
        aria-label="${this.msgLit("lion-combobox:optionsPopup")}"
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_groupTwoTemplate(){return p` ${super._groupTwoTemplate()} ${this._overlayListboxTemplate()}`}get slots(){return{...super.slots,input:()=>{if(this._ariaVersion==="1.1"){const e=document.createElement("div"),t=document.createElement("input");return t.style.cssText=`
          border: none;
          outline: none;
          width: 100%;
          height: 100%;
          font: inherit;
          background: inherit;
          color: inherit;
          border-radius: inherit;
          box-sizing: border-box;
          padding: 0;`,e.appendChild(t),e}return document.createElement("input")},listbox:super.slots.input}}get _comboboxNode(){return this.querySelector('[slot="input"]')}get _selectionDisplayNode(){return this.querySelector('[slot="selection-display"]')}get _inputNode(){return this._ariaVersion==="1.1"&&this._comboboxNode?this._comboboxNode.querySelector("input")||this._comboboxNode:this._comboboxNode}get _overlayContentNode(){return this._listboxNode}get _overlayReferenceNode(){return this.shadowRoot.querySelector(".input-group__container")}get _overlayInvokerNode(){return this._inputNode}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(e=>e.slot==="listbox")}get _activeDescendantOwnerNode(){return this._inputNode}get requireOptionMatch(){return!this.allowCustomChoice}set requireOptionMatch(e){this.allowCustomChoice=!e}constructor(){super(),this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.requireOptionMatch=!0,this.rotateKeyboardNavigation=!0,this.selectionFollowsFocus=!0,this.defaultValidators.push(new w),this._ariaVersion=U.isChromium?"1.1":"1.0",this._listboxReceivesNoFocus=!0,this._noTypeAhead=!0,this.__prevCboxValueNonSelected="",this.__prevCboxValue="",this.__hadUserIntendsInlineAutoFill=!1,this.__listboxContentChanged=!1,this._onKeyUp=this._onKeyUp.bind(this),this._textboxOnClick=this._textboxOnClick.bind(this),this._textboxOnInput=this._textboxOnInput.bind(this),this._textboxOnKeydown=this._textboxOnKeydown.bind(this)}connectedCallback(){super.connectedCallback(),this._selectionDisplayNode&&(this._selectionDisplayNode.comboboxElement=this),(this.disabled||this.readOnly)&&this.__setComboboxDisabledAndReadOnly()}requestUpdate(e,t,o){if(super.requestUpdate(e,t,o),(e==="disabled"||e==="readOnly")&&this.__setComboboxDisabledAndReadOnly(),e==="modelValue"&&this.modelValue&&this.modelValue!==t&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue))if(this.multipleChoice)this._syncToTextboxMultiple(this.modelValue,this._oldModelValue);else{const s=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]);this._setTextboxValue(s)}}parser(e){return this.requireOptionMatch&&this.checkedIndex===-1&&e!==""&&!Array.isArray(e)?new C(e):super.parser(e)}__unsyncCheckedIndexOnInputChange(){const e=this._autoSelectCondition(),t=this.formElements[this.checkedIndex];if(!this.multipleChoice&&!e&&t){const o=this._getTextboxValueFromOption(t);this._inputNode.value.startsWith(o)||this.setCheckedIndex(-1)}}updated(e){var t;super.updated(e),e.has("__shouldAutocompleteNextUpdate")&&this.__unsyncCheckedIndexOnInputChange(),e.has("opened")&&(this.opened&&(this.activeIndex=-1),!this.opened&&e.get("opened")!==void 0&&(this.__onOverlayClose(),this.activeIndex=-1)),e.has("autocomplete")&&this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`),e.has("__shouldAutocompleteNextUpdate")&&this.__shouldAutocompleteNextUpdate&&(this._handleAutocompletion(),this.__shouldAutocompleteNextUpdate=!1,this.__listboxContentChanged=!1),typeof((t=this._selectionDisplayNode)==null?void 0:t.onComboboxElementUpdated)=="function"&&this._selectionDisplayNode.onComboboxElementUpdated(e)}matchCondition(e,t){let o=-1;const s=this._getTextboxValueFromOption(e);return typeof s=="string"&&typeof t=="string"&&(o=s.toLowerCase().indexOf(t.toLowerCase())),this.matchMode==="all"?o>-1:o===0}_showOverlayCondition({lastKey:e}){const t=["Tab","Escape"],o=["Enter"];return this.disabled||this.readOnly||e&&(t.includes(e)||!this.multipleChoice&&o.includes(e))?!1:this.filled||this.showAllOnEmpty||!this.filled&&this.multipleChoice&&this.__prevCboxValueNonSelected?!0:this.opened}_getTextboxValueFromOption(e){return e?e.choiceValue:this.modelValue instanceof C?this.modelValue.viewValue:this.modelValue}_onListboxContentChanged(){super._onListboxContentChanged(),this.__shouldAutocompleteNextUpdate=!0,this.__listboxContentChanged=!0}_textboxOnInput(e){this.__shouldAutocompleteNextUpdate=!0,this.opened=this._showOverlayCondition({})}_textboxOnKeydown(e){e.key==="Tab"&&(this.opened=!1)}_listboxOnClick(e){super._listboxOnClick(e),this._inputNode.focus(),this.multipleChoice?(this._inputNode.value="",this._resetListboxOptions()):(this.activeIndex=-1,this.opened=!1)}_setTextboxValue(e){this._inputNode&&this._inputNode.value!==e&&(this._inputNode.value=e)}__onOverlayClose(){this.multipleChoice?this._syncToTextboxMultiple(this.modelValue,this._oldModelValue):this.checkedIndex!==-1&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue,{phase:"overlay-close"})&&(this._inputNode.value=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]))}_repropagationCondition(e){return super._repropagationCondition(e)||this.formElements.every(t=>!t.checked)}_onFilterMatch(e,t){this._highlightMatchedOption(e,t),e.style.display=""}_highlightMatchedOption(e,t){if(M(e,t),e.textContent){const o=document.createElement("span");o.setAttribute("aria-label",e.textContent.replace(/\s+/g," ")),Array.from(e.childNodes).forEach(s=>{o.appendChild(s)}),e.appendChild(o),g.set(e,()=>{Array.from(o.childNodes).forEach(s=>{e.appendChild(s)}),e.contains(o)&&e.removeChild(o)})}}_onFilterUnmatch(e,t,o){this._unhighlightMatchedOption(e),e.style.display="none"}_unhighlightMatchedOption(e){T(e),g.has(e)&&g.get(e)()}__computeUserIntendsAutoFill({prevValue:e,curValue:t}){const o=e.length<t.length,s=e.length&&t.length&&e[0].toLowerCase()!==t[0].toLowerCase();return o||s||this.__listboxContentChanged&&this.__hadUserIntendsInlineAutoFill}_handleAutocompletion(){const t=!(this._inputNode.selectionStart===this._inputNode.selectionEnd)&&this._inputNode.value.length!==this._inputNode.selectionStart,o=this._inputNode.value,s=this._inputNode.selectionStart,i=t&&s?o.slice(0,s):o,r=t||this.__hadSelectionLastAutofill?this.__prevCboxValueNonSelected:this.__prevCboxValue,c=!i,f=[];let b=!1;const O=this.__computeUserIntendsAutoFill({prevValue:r,curValue:i}),z=this.autocomplete==="both"||this.autocomplete==="inline",V=this._autoSelectCondition(),I=this.autocomplete==="inline"||this.autocomplete==="none";this.formElements.forEach((a,x)=>{const E=this.matchCondition(a,i);let v=!1;if(c?v=this.showAllOnEmpty:v=I||E,V&&!b&&E&&!a.disabled){const N=()=>{this.activeIndex=x,this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex),b=!0};if(O)if(z){const y=this._getTextboxValueFromOption(a);typeof y=="string"&&y!==""&&typeof i=="string"&&i!==""&&y.toLowerCase().indexOf(i.toLowerCase())===0&&(this.__textboxInlineComplete(a),N())}else N()}a.onFilterUnmatch?a.onFilterUnmatch(i,r):this._onFilterUnmatch(a,i,r),a.setAttribute("aria-hidden","true"),a.removeAttribute("aria-posinset"),a.removeAttribute("aria-setsize"),v&&(f.push(a),a.onFilterMatch?a.onFilterMatch(i):this._onFilterMatch(a,i))});const L=f.length;f.forEach((a,x)=>{a.setAttribute("aria-posinset",`${x+1}`),a.setAttribute("aria-setsize",`${L}`),a.removeAttribute("aria-hidden")}),V&&!b&&!this.multipleChoice&&(this.setCheckedIndex(-1),r!==i&&(this.activeIndex=-1),this.modelValue=this.parser(o)),this.__prevCboxValueNonSelected=i,this.__prevCboxValue=this._inputNode.value,this.__hadSelectionLastAutofill=this._inputNode.value.length!==this._inputNode.selectionStart,this.__hadUserIntendsInlineAutoFill=O,this._overlayCtrl&&this._overlayCtrl._popper&&this._overlayCtrl._popper.update()}__textboxInlineComplete(e=this.formElements[this.activeIndex]){const t=this._getTextboxValueFromOption(e);if(this._inputNode.value!==t){const o=this._inputNode.value.length;this._inputNode.value=t,this._inputNode.selectionStart=o,this._inputNode.selectionEnd=this._inputNode.value.length}}_autoSelectCondition(){return this.autocomplete==="both"||this.autocomplete==="inline"}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.removeAttribute("tabindex")}_defineOverlayConfig(){return{...R(),elementToFocusAfterHide:void 0,invokerNode:this._comboboxNode,visibilityTriggerFunction:void 0}}_setupOverlayCtrl(){super._setupOverlayCtrl(),this.__shouldAutocompleteNextUpdate=!0,this.__setupCombobox()}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this.__teardownCombobox()}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._inputNode.addEventListener("keyup",this._onKeyUp),this._inputNode.addEventListener("click",this._textboxOnClick)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._inputNode.removeEventListener("keyup",this._onKeyUp),this._inputNode.removeEventListener("click",this._textboxOnClick)}_listboxOnKeyDown(e){const{key:t}=e;switch(t){case"Escape":this.opened=!1,super._listboxOnKeyDown(e),this._setTextboxValue("");break;case"Backspace":case"Delete":this.requireOptionMatch?super._listboxOnKeyDown(e):this.opened=!1;break;case"Enter":this.opened&&e.preventDefault(),!this.requireOptionMatch&&this.multipleChoice&&(!this.formElements[this.activeIndex]||this.formElements[this.activeIndex].hasAttribute("aria-hidden")||!this.opened)?(this.modelValue=this.parser([...this.modelValue,this._inputNode.value]),this._inputNode.value="",this.opened=!1):(super._listboxOnKeyDown(e),this._resetListboxOptions()),this.multipleChoice?this._inputNode.value="":this.opened=!1;break;default:{super._listboxOnKeyDown(e);break}}}_syncToTextboxCondition(e,t,{phase:o}={}){return this.autocomplete==="both"||this.autocomplete==="inline"||!this.focused}_syncToTextboxMultiple(e,t=[]){if(this.requireOptionMatch){const o=e.filter(i=>!t.includes(i)),s=this.formElements.filter(i=>o.includes(i.choiceValue)).map(i=>this._getTextboxValueFromOption(i)).join(" ");this._setTextboxValue(s)}}_enhanceLightDomClasses(){const e=this.querySelector("[slot=input]");e&&e.classList.add("form-control")}__setComboboxDisabledAndReadOnly(){this._comboboxNode&&(this._comboboxNode.toggleAttribute("disabled",this.disabled),this._comboboxNode.setAttribute("aria-disabled",`${this.disabled}`),this._comboboxNode.toggleAttribute("readonly",this.readOnly),this._comboboxNode.setAttribute("aria-readonly",`${this.readOnly}`)),this._inputNode&&(this._inputNode.toggleAttribute("disabled",this.disabled),this._inputNode.toggleAttribute("readOnly",this.readOnly),this._inputNode.setAttribute("aria-readonly",`${this.readOnly}`),this._inputNode.tabIndex=this.disabled?-1:0)}__setupCombobox(){this._comboboxNode.setAttribute("role","combobox"),this._comboboxNode.setAttribute("aria-haspopup","listbox"),this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),this._comboboxNode.setAttribute("aria-controls",this._listboxNode.id),this._ariaVersion==="1.1"?this._comboboxNode.setAttribute("aria-owns",this._listboxNode.id):this._inputNode.setAttribute("aria-owns",this._listboxNode.id),this._listboxNode.setAttribute("aria-labelledby",this._labelNode.id),this._inputNode.addEventListener("keydown",this._listboxOnKeyDown),this._inputNode.addEventListener("input",this._textboxOnInput),this._inputNode.addEventListener("keydown",this._textboxOnKeydown)}__teardownCombobox(){this._inputNode.removeEventListener("keydown",this._listboxOnKeyDown),this._inputNode.removeEventListener("input",this._textboxOnInput),this._inputNode.removeEventListener("keydown",this._textboxOnKeydown)}_onKeyUp(e){const t=e&&e.key;this.opened=this._showOverlayCondition({lastKey:t,currentValue:this._inputNode.value})}_textboxOnClick(e){this.opened=this._showOverlayCondition({})}clear(){this.value="",super.clear(),this.__shouldAutocompleteNextUpdate=!0}}const Q=k`
  :host {
    display: block;
    box-sizing: border-box;
    inline-size: 100%;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    font-weight: var(--co-font-weight-regular);
    line-height: var(--co-font-line-height-normal);
    color: var(--co-color-text-default);
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  .form-field__group-one {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
    margin-block-end: var(--co-space-1);
  }

  .form-field__label {
    color: var(--co-color-text-default);
    font-size: var(--co-typography-label-size);
    font-weight: var(--co-typography-label-weight);
    line-height: var(--co-typography-label-line-height);
  }

  .form-field__help-text {
    color: var(--co-color-text-secondary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .form-field__group-two {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
    position: relative;
  }

  .input-group {
    display: flex;
    align-items: stretch;
    inline-size: 100%;
  }

  .input-group__container {
    display: flex;
    align-items: center;
    inline-size: 100%;
    min-block-size: var(--co-control-height-md);
    gap: var(--co-space-gap-sm);
    padding-inline: var(--co-space-inset-md);
    border: var(--co-border-width-default) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius-interactive);
    background: var(--co-color-surface-static-default);
    color: var(--co-color-text-default);
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .input-group__container {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-static-raised);
  }

  :host(:focus-within) .input-group__container {
    border-color: var(--co-color-border-focus);
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-border-width-default));
  }

  :host([danger]) .input-group__container,
  :host([has-feedback-for~='error']) .input-group__container,
  :host([shows-feedback-for~='error']) .input-group__container {
    border-color: var(--co-color-border-danger);
  }

  :host([danger]:focus-within) .input-group__container,
  :host([has-feedback-for~='error']:focus-within) .input-group__container,
  :host([shows-feedback-for~='error']:focus-within) .input-group__container {
    border-color: var(--co-color-border-danger);
    outline: var(--co-focus-ring-width) solid var(--co-color-border-danger);
    outline-offset: calc(-1 * var(--co-border-width-default));
  }

  :host([readonly]) .input-group__container {
    background: var(--co-color-surface-static-sunken);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) .input-group__container {
    opacity: var(--co-opacity-disabled);
  }

  :host([size='sm']) {
    font-size: var(--co-font-size-small);
  }

  :host([size='sm']) .input-group__container {
    min-block-size: var(--co-control-height-sm);
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='md']) {
    font-size: var(--co-font-size-p);
  }

  :host([size='sm']) .input-group__container {
    min-block-size: var(--co-control-height-md);
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-h6);
  }

  :host([size='lg']) .input-group__container {
    min-block-size: var(--co-control-height-lg);
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
  }

  :host([size='xl']) .input-group__container {
    min-block-size: var(--co-control-height-xl);
    padding-inline: var(--co-space-inset-sm);
  }

  .input-group__input {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    min-inline-size: 0;
  }

  .input-group__prefix,
  .input-group__suffix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    color: var(--co-color-text-secondary);
  }

  /* ── Chevron indicator ── */

  .combobox__chevron {
    color: var(--co-color-text-default);
    cursor: pointer;
    transition: transform var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host([opened]) .combobox__chevron {
    transform: rotate(180deg);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal);
  }

  [data-overlay-outer-wrapper] {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    inline-size: 0;
    block-size: 0;
    max-inline-size: none;
    max-block-size: none;
    margin: 0;
    border: 0;
    padding: 0;
    overflow: visible;
    background: transparent;
    color: inherit;
  }

  #overlay-content-node-wrapper {
    inline-size: 100%;
    min-inline-size: min(20rem, 100vw);
    /* Gap between input and dropdown is controlled by Popper offset in _defineOverlayConfig */
    border: var(--co-border-width-panel) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius-interactive);
    background: var(--co-color-surface-static-default);
    box-shadow: var(--co-elevation-shadow-lg);
    overflow: hidden;
  }

  slot[name='input']::slotted(input),
  slot[name='input']::slotted([role='combobox']) {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    inline-size: 100%;
    min-inline-size: 0;
    min-block-size: 100%;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: inherit;
  }

  slot[name='input']::slotted(input:disabled),
  slot[name='input']::slotted([disabled]) {
    cursor: not-allowed;
  }

  slot[name='input']::slotted(input:read-only),
  slot[name='input']::slotted([readonly]) {
    cursor: default;
  }

  slot[name='selection-display']::slotted(*) {
    display: inline-flex;
    align-items: center;
    min-inline-size: 0;
  }

  slot[name='listbox']::slotted([role='listbox']) {
    display: grid;
    inline-size: 100%;
    max-block-size: 18rem;
    overflow: auto;
    gap: var(--co-space-1);
    padding: var(--co-space-1);
    background: var(--co-color-surface-static-default);
    color: var(--co-color-text-default);
    outline: 0;
  }
`;var u=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};class Y extends w{static async getMessage(e){var t;return(t=e==null?void 0:e.config)!=null&&t.getMessage?e.config.getMessage():"Please select a valid option."}}let l=class extends J{constructor(){super(...arguments),this.size="md",this.danger=!1,this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.selectionFollowsFocus=!0,this.rotateKeyboardNavigation=!0,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.multiple=!1,this.allowCustomChoice=!1,this.required=!1,this.requiredMessage="",this.pattern="",this.patternMessage="",this.matchError="",this._validation=new K(this),this._matchesOptionValidator=new Y,this._handleFocusIn=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-input",{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))},this._handleModelValueChanged=e=>{var o;const t=e;t.target!==this||(o=t.detail)!=null&&o.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.value,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,Q]}get requireOptionMatch(){return super.requireOptionMatch}set requireOptionMatch(e){super.requireOptionMatch=e}connectedCallback(){super.connectedCallback(),this._replaceMatchesOptionValidator(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){A(this),super.firstUpdated(e),this._syncMultipleAlias(),this._syncValidation(!0,!0)}updated(e){this._syncMultipleAlias(e),A(this),super.updated(e),this._validationPropsChanged(e)&&this._syncValidation(e.has("validators"),this._validationRulesChanged(e)),e.has("allowCustomChoice")&&this.requestUpdate("requireOptionMatch",!this.allowCustomChoice),e.has("matchError")&&this._syncMatchErrorMessage(),(e.has("multiple")||e.has("multipleChoice")||e.has("required"))&&this._syncListboxAttributes()}_labelTemplate(){return p`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return p`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return p`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?p`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:S}_inputGroupInputTemplate(){return p`
      <div part="input" class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){const e={sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm";return p`
      <div
        part="suffix"
        class="input-group__suffix"
        @mousedown=${this._onSuffixMousedown}
        @click=${this._onSuffixClick}
      >
        <slot name="suffix">
          <co-icon
            class="combobox__chevron"
            name="keyboard-arrow-down"
            size=${e}
            aria-hidden="true"
          ></co-icon>
        </slot>
      </div>
    `}_preventFocusShift(e){e.preventDefault()}_onSuffixMousedown(e){this._preventFocusShift(e)}_onOverlayMousedown(e){this._preventFocusShift(e)}_onSuffixClick(){var e;this.disabled||this.readOnly||((e=this._inputNode)==null||e.focus(),this.opened?this.opened=!1:this._hasVisibleOptions()&&(this.opened=!0))}_hasVisibleOptions(){return(this.formElements??[]).some(t=>t.style.display!=="none")}_overlayListboxTemplate(){return p`
      <div
        id="overlay-content-node-wrapper"
        part="overlay"
        role="dialog"
        aria-label="Options"
        @mousedown=${this._onOverlayMousedown}
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_feedbackTemplate(){return p`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_handleAutocompletion(){super._handleAutocompletion(),!this.formElements.some(t=>t.style.display!=="none")&&this.opened&&requestAnimationFrame(()=>{this.opened&&!this.formElements.some(t=>t.style.display!=="none")&&(this.opened=!1)})}_showOverlayCondition(e){var i;if(!this._hasVisibleOptions())return!1;const t=super._showOverlayCondition(e),o=(i=this._inputNode)==null?void 0:i.value,s=["Enter","Escape","Tab"];return!t&&e.lastKey&&s.includes(e.lastKey)?!1:!t&&o&&this.formElements.length>0?this.formElements.some(r=>this.matchCondition(r,o)):t&&o&&this.formElements.length>0?this.formElements.some(r=>this.matchCondition(r,o)):t}_defineOverlayConfig(){var t;const e=super._defineOverlayConfig();return{...e,_noDialogEl:!0,popperConfig:{...e.popperConfig,modifiers:[...(((t=e.popperConfig)==null?void 0:t.modifiers)??[]).filter(o=>o.name!=="offset"),{name:"offset",enabled:!0,options:{offset:[0,parseInt(q,10)]}}]}}}_syncMultipleAlias(e){if(e!=null&&e.has("multiple")&&this.multipleChoice!==this.multiple){this.multipleChoice=this.multiple;return}if(e!=null&&e.has("multipleChoice")&&this.multiple!==this.multipleChoice){this.multiple=this.multipleChoice;return}!e&&this.multiple!==this.multipleChoice&&(this.multipleChoice=this.multiple||this.multipleChoice,this.multiple=this.multipleChoice)}_syncValidation(e=!1,t=!1){this._validation.sync(()=>{const o=[];return this.required&&o.push($(this.requiredMessage,"Select an option.")),this.pattern&&o.push(G(this.pattern,this.patternMessage)),o},e,t)}_replaceMatchesOptionValidator(){this.defaultValidators=this.defaultValidators.map(e=>e instanceof w?this._matchesOptionValidator:e),this._syncMatchErrorMessage()}_syncMatchErrorMessage(){this.matchError&&(this._matchesOptionValidator.config={...this._matchesOptionValidator.config,getMessage:()=>this.matchError})}_syncListboxAttributes(){const e=this.querySelector('[slot="listbox"]');e&&(e.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this.required?e.setAttribute("aria-required","true"):e.removeAttribute("aria-required"))}_validationPropsChanged(e){return["validators","required","requiredMessage","pattern","patternMessage"].some(o=>e.has(o))}_validationRulesChanged(e){return["required","requiredMessage","pattern","patternMessage"].some(o=>e.has(o))}};u([h({reflect:!0})],l.prototype,"size",void 0);u([h({type:Boolean,reflect:!0})],l.prototype,"danger",void 0);u([h({reflect:!0})],l.prototype,"autocomplete",void 0);u([h({attribute:"match-mode",reflect:!0})],l.prototype,"matchMode",void 0);u([h({type:Boolean,attribute:"show-all-on-empty",reflect:!0})],l.prototype,"showAllOnEmpty",void 0);u([h({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],l.prototype,"selectionFollowsFocus",void 0);u([h({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],l.prototype,"rotateKeyboardNavigation",void 0);u([h({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],l.prototype,"hasNoDefaultSelected",void 0);u([h({type:Boolean,attribute:"multiple-choice",reflect:!0})],l.prototype,"multipleChoice",void 0);u([h({type:Boolean,reflect:!0})],l.prototype,"multiple",void 0);u([h({type:Boolean,attribute:"allow-custom-choice",reflect:!0})],l.prototype,"allowCustomChoice",void 0);u([h({type:Boolean,reflect:!0})],l.prototype,"required",void 0);u([h({attribute:"required-message"})],l.prototype,"requiredMessage",void 0);u([h({reflect:!0})],l.prototype,"pattern",void 0);u([h({attribute:"pattern-message"})],l.prototype,"patternMessage",void 0);u([h({attribute:"match-error"})],l.prototype,"matchError",void 0);u([h({type:Boolean,attribute:"require-option-match"})],l.prototype,"requireOptionMatch",null);l=u([F("co-combobox")],l);export{l as CoCombobox,Oe as CoOption};
