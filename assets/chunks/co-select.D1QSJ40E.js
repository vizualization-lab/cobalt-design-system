var ye=Object.defineProperty;var ke=Object.getPrototypeOf;var Ce=Reflect.get;var j=o=>{throw TypeError(o)};var we=(o,t,e)=>t in o?ye(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var $=(o,t,e)=>we(o,typeof t!="symbol"?t+"":t,e),L=(o,t,e)=>t.has(o)||j("Cannot "+e);var y=(o,t,e)=>(L(o,t,"read from private field"),e?e.call(o):t.get(o)),A=(o,t,e)=>t.has(o)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),D=(o,t,e,i)=>(L(o,t,"write to private field"),i?i.call(o,e):t.set(o,e),e),R=(o,t,e)=>(L(o,t,"access private method"),e);var G=(o,t,e)=>Ce(ke(o),e,t);import{a as ce,i as S,b as _,n as M,t as Ee}from"./property.D__PRo2x.js";import{a as Ne}from"./tokens.DaM6lqEM.js";import"./co-icon.CklKU8-K.js";import{I as ue,F as xe,C as Se,e as J,c as Oe}from"./validation.C91nxckB.js";import{C as Ie}from"./co-option.CODVdNu5.js";import{_ as Ae}from"./framework.DW6FvQZQ.js";import{b as Te,V as pe,F as Fe,c as fe,S as U,u as Me,m as Y,l as Le,s as V}from"./FormatMixin.ClJHuFpt.js";import{d as O}from"./DisabledMixin.DvWrDoIe.js";import{L as De}from"./LionButton.B5pyDaFb.js";function B(o="google-chrome"){var c,f;const t=globalThis.navigator,e=!!t.userAgentData&&t.userAgentData.brands.some(v=>v.brand==="Chromium");if(o==="chromium")return e;const i=globalThis.navigator,s=i==null?void 0:i.vendor,n=typeof globalThis.opr<"u",r=((c=globalThis.userAgent)==null?void 0:c.indexOf("Edge"))>-1,a=(f=globalThis.userAgent)==null?void 0:f.match("CriOS");if(o==="ios")return a;if(o==="google-chrome")return e!==null&&typeof e<"u"&&s==="Google Inc."&&n===!1&&r===!1}var te,ie,oe,se,ne,re,ae,le,de,he;const T={isChrome:B(),isIOSChrome:B("ios"),isChromium:B("chromium"),isFirefox:((te=globalThis.navigator)==null?void 0:te.userAgent.toLowerCase().indexOf("firefox"))>-1,isMac:((oe=(ie=globalThis.navigator)==null?void 0:ie.appVersion)==null?void 0:oe.indexOf("Mac"))!==-1,isIOS:/iPhone|iPad|iPod/i.test((se=globalThis.navigator)==null?void 0:se.userAgent),isMacSafari:((ne=globalThis.navigator)==null?void 0:ne.vendor)&&((re=globalThis.navigator)==null?void 0:re.vendor.indexOf("Apple"))>-1&&((ae=globalThis.navigator)==null?void 0:ae.userAgent)&&((le=globalThis.navigator)==null?void 0:le.userAgent.indexOf("CriOS"))===-1&&((de=globalThis.navigator)==null?void 0:de.userAgent.indexOf("FxiOS"))===-1&&((he=globalThis.navigator)==null?void 0:he.appVersion.indexOf("Mac"))!==-1};class Z extends Array{_keys(){return Object.keys(this).filter(t=>Number.isNaN(Number(t)))}}const Re=o=>class extends Te(o){static get properties(){return{_isFormOrFieldset:{type:Boolean}}}constructor(){super(),this.formElements=new Z,this._isFormOrFieldset=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this._onRequestToChangeFormElementName=this._onRequestToChangeFormElementName.bind(this),this.addEventListener("form-element-register",this._onRequestToAddFormElement),this.addEventListener("form-element-name-changed",this._onRequestToChangeFormElementName),this.initComplete=new Promise((t,e)=>{this.__resolveInitComplete=t,this.__rejectInitComplete=e}),this.registrationComplete=new Promise((t,e)=>{this.__resolveRegistrationComplete=t,this.__rejectRegistrationComplete=e}),this.registrationComplete.done=!1,this.registrationComplete.then(()=>{this.registrationComplete.done=!0,this.__resolveInitComplete(void 0)},()=>{throw this.registrationComplete.done=!0,this.__rejectInitComplete(void 0),new Error("Registration could not finish. Please use await el.registrationComplete;")})}connectedCallback(){super.connectedCallback(),this._completeRegistration()}_completeRegistration(){Promise.resolve().then(()=>this.__resolveRegistrationComplete(void 0))}disconnectedCallback(){super.disconnectedCallback(),this.registrationComplete.done===!1&&Promise.resolve().then(()=>{Promise.resolve().then(()=>{this.__rejectRegistrationComplete()})})}isRegisteredFormElement(t){return this.formElements.some(e=>e===t)}addFormElement(t,e){if(t._parentFormGroup=this,e>=0?this.formElements.splice(e,0,t):this.formElements.push(t),this._isFormOrFieldset){const{name:i}=t;if(i===this.name)throw console.info("Error Node:",t),new TypeError(`You can not have the same name "${i}" as your parent`);if(i.substr(-2)==="[]")Array.isArray(this.formElements[i])||(this.formElements[i]=new Z),e>0?this.formElements[i].splice(e,0,t):this.formElements[i].push(t);else if(!this.formElements[i])this.formElements[i]=t;else throw console.info("Error Node:",t),new TypeError(`Name "${i}" is already registered - if you want an array add [] to the end`)}}removeFormElement(t){const e=this.formElements.indexOf(t);if(e>-1&&this.formElements.splice(e,1),this._isFormOrFieldset){const{name:i}=t;if(i.substr(-2)==="[]"&&this.formElements[i]){const s=this.formElements[i].indexOf(t);s>-1&&this.formElements[i].splice(s,1)}else this.formElements[i]&&delete this.formElements[i]}}_onRequestToAddFormElement(t){const e=t.detail.element;if(e===this||this.isRegisteredFormElement(e))return;t.stopPropagation();let i=-1;if(this.formElements&&Array.isArray(this.formElements)){for(const[s,n]of this.formElements.entries())if(!(n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)){i=s;break}}this.addFormElement(e,i)}_onRequestToChangeFormElementName(t){const e=this.formElements[t.detail.oldName];e&&(this.formElements[t.detail.newName]=e,delete this.formElements[t.detail.oldName])}_onRequestToRemoveFormElement(t){const e=t.detail.element;e!==this&&this.isRegisteredFormElement(e)&&(t.stopPropagation(),this.removeFormElement(e))}},_e=O(Re),Ve=o=>class extends o{constructor(){super(),this.registrationTarget=void 0,this.__redispatchEventForFormRegistrarPortalMixin=this.__redispatchEventForFormRegistrarPortalMixin.bind(this),this.addEventListener("form-element-register",this.__redispatchEventForFormRegistrarPortalMixin)}__redispatchEventForFormRegistrarPortalMixin(t){if(t.stopPropagation(),!this.registrationTarget)throw new Error("A FormRegistrarPortal element requires a .registrationTarget");this.registrationTarget.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:t.detail.element},bubbles:!0}))}},Be=O(Ve),We=o=>class extends _e(pe(ue(o))){static get properties(){return{multipleChoice:{type:Boolean,attribute:"multiple-choice"}}}get modelValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(i=>i.choiceValue):e[0]?e[0].choiceValue:""}set modelValue(e){const i=(s,n)=>typeof s.choiceValue=="object"?JSON.stringify(s.choiceValue)===JSON.stringify(e):s.choiceValue===n;this.__isInitialModelValue?this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this._setCheckedElements(e,i),this.requestUpdate("modelValue",this._oldModelValue)}):(this._setCheckedElements(e,i),this.requestUpdate("modelValue",this._oldModelValue)),this._oldModelValue=this.modelValue}get serializedValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(i=>i.serializedValue.value):e[0]?e[0].serializedValue.value:""}set serializedValue(e){const i=(s,n)=>s.serializedValue.value===n;this.__isInitialSerializedValue?this.registrationComplete.then(()=>{this.__isInitialSerializedValue=!1,this._setCheckedElements(e,i),this.requestUpdate("serializedValue")}):(this._setCheckedElements(e,i),this.requestUpdate("serializedValue"))}get formattedValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(i=>i.formattedValue):e[0]?e[0].formattedValue:""}set formattedValue(e){const i=(s,n)=>s.formattedValue===n;this.__isInitialFormattedValue?this.registrationComplete.then(()=>{this.__isInitialFormattedValue=!1,this._setCheckedElements(e,i)}):this._setCheckedElements(e,i)}get operationMode(){return this._repropagationRole==="choice-group"?"select":"enter"}constructor(){super(),this.multipleChoice=!1,this._repropagationRole="choice-group",this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this.__isInitialFormattedValue=!0}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__isInitialFormattedValue=!1})}_completeRegistration(){Promise.resolve().then(()=>super._completeRegistration())}updated(e){super.updated(e),e.has("name")&&this.name!==e.get("name")&&this.formElements.forEach(i=>{i.name=this.name})}addFormElement(e,i){this._throwWhenInvalidChildModelValue(e),e.name=this.name,super.addFormElement(e,i)}clear(){this.multipleChoice?this.modelValue=[]:this.modelValue=""}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}_getFromAllFormElementsFilter(e,i){return!0}_getFromAllFormElements(e,i){var r;const s=i||this._getFromAllFormElementsFilter;if(e==="modelValue"||e==="serializedValue"||e==="formattedValue")return this[e];const n=this.formElements.filter(a=>s(a,e));return e==="_initialModelValue"?this.multipleChoice?n.filter(a=>a[e].checked).map(a=>a[e].value):(r=n.find(a=>a[e].checked))==null?void 0:r.value:n.map(a=>a[e])}_throwWhenInvalidChildModelValue(e){if(typeof e.modelValue.checked!="boolean"||!Object.prototype.hasOwnProperty.call(e.modelValue,"value"))throw new Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${e.tagName.toLowerCase()} with .modelValue="${e.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){return this.multipleChoice?this.modelValue.length===0:typeof this.modelValue=="string"&&this.modelValue===""||this.modelValue===void 0||this.modelValue===null}_checkSingleChoiceElements(e){const{target:i}=e;if(i.checked===!1)return;const s=i.name;this.formElements.filter(n=>n.name===s).forEach(n=>{n!==i&&(n.checked=!1)})}_getCheckedElements(){return this.formElements.filter(e=>e.checked&&!e.disabled)}_setCheckedElements(e,i){if(e==null){this.formElements.forEach(s=>s.checked=!1);return}for(let s=0;s<this.formElements.length;s+=1)if(this.multipleChoice){let n=e.includes(this.formElements[s].modelValue.value);typeof this.formElements[s].modelValue.value=="object"&&(n=e.map(r=>JSON.stringify(r)).includes(JSON.stringify(this.formElements[s].modelValue.value))),this.formElements[s].checked=n}else i(this.formElements[s],e)?this.formElements[s].checked=!0:this.formElements[s].checked=!1}__setChoiceGroupTouched(){const e=this.modelValue;e!=null&&e!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=e)}_onBeforeRepropagateChildrenValues(e){const i=e.detail&&e.detail.element||e.target;this.multipleChoice||!i.checked||(this.formElements.forEach(s=>{i.choiceValue!==s.choiceValue&&(s.checked=!1)}),this.__setChoiceGroupTouched(),this.requestUpdate("modelValue",this._oldModelValue),this._oldModelValue=this.modelValue)}_repropagationCondition(e){return!(this._repropagationRole==="choice-group"&&!this.multipleChoice&&!e.checked)}},He=O(We);class ze extends Be(ce){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox")}createRenderRoot(){return this}}const Ke=o=>class extends Fe(fe(He(U(_e(o))))){static get properties(){return{orientation:String,selectionFollowsFocus:{type:Boolean,attribute:"selection-follows-focus"},rotateKeyboardNavigation:{type:Boolean,attribute:"rotate-keyboard-navigation"},hasNoDefaultSelected:{type:Boolean,reflect:!0,attribute:"has-no-default-selected"},_noTypeAhead:{type:Boolean}}}static get styles(){return[...super.styles||[],S`
          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }

          :host([disabled]) {
            color: #adadad;
          }

          :host([orientation='horizontal']) ::slotted([role='listbox']) {
            display: flex;
          }
        `]}_inputGroupInputTemplate(){return _`
        <div class="input-group__input">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      `}static get scopedElements(){return{...super.scopedElements,"lion-options":ze}}get slots(){return{...super.slots,input:()=>{const e=this.createScopedElement("lion-options");return e.setAttribute("data-tag-name","lion-options"),e.registrationTarget=this,e}}}get _inputNode(){return this.querySelector('[slot="input"]')}get _listboxNode(){return this._inputNode}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get _listboxSlot(){return this.shadowRoot.querySelector("slot[name=input]")}get _scrollTargetNode(){return this._listboxNode}get _activeDescendantOwnerNode(){return this._listboxNode}get activeIndex(){return this.formElements.findIndex(e=>e.active===!0)}set activeIndex(e){if(this.formElements[e]){const i=this.formElements[e];this.__setChildActive(i)}else this.__setChildActive(null)}get checkedIndex(){const e=this.formElements;return this.multipleChoice?e.filter(i=>i.checked).map(i=>e.indexOf(i)):e.indexOf(e.find(i=>i.checked))}set checkedIndex(e){this.setCheckedIndex(e)}constructor(){super(),this.hasNoDefaultSelected=!1,this.orientation="vertical",this.rotateKeyboardNavigation=!1,this.selectionFollowsFocus=!1,this._noTypeAhead=!1,this._typeAheadTimeout=1e3,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this._repropagationRole="choice-group",this._listboxReceivesNoFocus=!1,this._oldModelValue=void 0,this._listboxOnKeyDown=this._listboxOnKeyDown.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this),this._listboxOnKeyUp=this._listboxOnKeyUp.bind(this),this._onChildActiveChanged=this._onChildActiveChanged.bind(this),this.__proxyChildModelValueChanged=this.__proxyChildModelValueChanged.bind(this),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.__typedChars=[]}connectedCallback(){this._listboxNode&&(this._listboxNode.registrationTarget=this),super.connectedCallback(),this._setupListboxNode(),this.__setupEventListeners(),this.registrationComplete.then(()=>{this.__initInteractionStates()})}firstUpdated(e){super.firstUpdated(e),this.__moveOptionsToListboxNode(),this.registrationComplete.then(()=>{this._initialModelValue=this.modelValue}),new MutationObserver(()=>{this._onListboxContentChanged()}).observe(this._listboxNode,{childList:!0})}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.__requestOptionsToBeDisabled():this.__retractRequestOptionsToBeDisabled())}disconnectedCallback(){super.disconnectedCallback(),this._teardownListboxNode(),this.__teardownEventListeners()}setCheckedIndex(e){if(this.multipleChoice&&Array.isArray(e)){this._uncheckChildren(this.formElements.filter(i=>i===e)),e.forEach(i=>{this.formElements[i]&&(this.formElements[i].checked=!this.formElements[i].checked)});return}typeof e=="number"&&(e===-1&&this._uncheckChildren(),this.formElements[e]&&(this.formElements[e].disabled?this._uncheckChildren():this.multipleChoice?this.formElements[e].checked=!this.formElements[e].checked:this.formElements[e].checked=!0))}addFormElement(e,i){super.addFormElement(e,i),e.id=e.id||`${this.localName}-option-${Me()}`,this.disabled&&e.makeRequestToBeDisabled(),this.__setAttributeForAllFormElements("aria-setsize",this.formElements.length),this.formElements.forEach((s,n)=>{s.setAttribute("aria-posinset",n+1)}),this.__proxyChildModelValueChanged({target:e}),this.resetInteractionState()}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.activeIndex=-1,this.resetInteractionState()}clear(){super.clear(),this.setCheckedIndex(-1)}_handleTypeAhead(e,{setAsChecked:i}){const{key:s,code:n}=e;if(n.startsWith("Key")||n.startsWith("Digit")||n.startsWith("Numpad")){e.preventDefault(),this.__typedChars.push(s);const r=this.__typedChars.join(""),a=this.formElements.findIndex(c=>c.modelValue.value.toLowerCase().startsWith(r));a>=0&&(i&&this.setCheckedIndex(a),this.activeIndex=a),this.__pendingTypeAheadTimeout&&window.clearTimeout(this.__pendingTypeAheadTimeout),this.__pendingTypeAheadTimeout=setTimeout(()=>{this.__typedChars=[]},this._typeAheadTimeout)}}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_setupListboxNode(){this._listboxNode?this.__setupListboxNodeInteractions():this._listboxSlot&&this._listboxSlot.addEventListener("slotchange",()=>{this.__setupListboxNodeInteractions()})}_onListboxContentChanged(){}_teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener("keydown",this._listboxOnKeyDown),this._listboxNode.removeEventListener("click",this._listboxOnClick),this._listboxNode.removeEventListener("keyup",this._listboxOnKeyUp))}_getNextEnabledOption(e,i=1){return this.__getEnabledOption(e,i)}_getPreviousEnabledOption(e,i=-1){return this.__getEnabledOption(e,i)}_onChildActiveChanged({target:e}){e.active===!0&&this.__setChildActive(e)}_listboxOnKeyDown(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:i}=e;switch(i){case" ":case"Enter":{if(i===" "&&this._listboxReceivesNoFocus||(i===" "&&e.preventDefault(),!this.formElements[this.activeIndex])||this.formElements[this.activeIndex].disabled)return;this.formElements[this.activeIndex].href&&this.formElements[this.activeIndex].click(),this.setCheckedIndex(this.activeIndex);break}case"ArrowUp":e.preventDefault(),this.orientation==="vertical"&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowLeft":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.orientation==="horizontal"&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowDown":e.preventDefault(),this.orientation==="vertical"&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"ArrowRight":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.orientation==="horizontal"&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"Home":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getNextEnabledOption(0,0);break;case"End":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getPreviousEnabledOption(this.formElements.length-1,0);break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:this.selectionFollowsFocus&&!this.multipleChoice})}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(i)&&this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex)}_listboxOnClick(e){}_listboxOnKeyUp(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:i}=e;switch(i){case"ArrowUp":case"ArrowDown":case"Home":case"End":case"Enter":e.preventDefault()}}_onLabelClick(){this._listboxNode.focus()}_scrollIntoView(e,i){e.scrollIntoView({behavior:"smooth",block:"nearest"})}__setupEventListeners(){this._listboxNode.addEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.addEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__teardownEventListeners(){this._listboxNode.removeEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.removeEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__setChildActive(e){if(this.formElements.forEach(i=>{i.active=e===i}),!e){this._activeDescendantOwnerNode.removeAttribute("aria-activedescendant");return}this._activeDescendantOwnerNode.setAttribute("aria-activedescendant",e.id),this._scrollIntoView(e,this._scrollTargetNode)}_uncheckChildren(e=[]){const i=Array.isArray(e)?e:[e];this.formElements.forEach(s=>{i.includes(s)||(s.checked=!1)})}__onChildCheckedChanged(e){const{target:i}=e;e.stopPropagation&&e.stopPropagation(),i.checked&&!this.multipleChoice&&this._uncheckChildren(i)}__setAttributeForAllFormElements(e,i){this.formElements.forEach(s=>{s.setAttribute(e,i)})}__proxyChildModelValueChanged(e){e.stopPropagation&&e.stopPropagation(),this.__onChildCheckedChanged(e),this.requestUpdate("modelValue",this._oldModelValue),e.detail&&e.detail.formPath&&this.dispatchEvent(new CustomEvent("model-value-changed",{detail:{formPath:e.detail.formPath,isTriggeredByUser:e.detail.isTriggeredByUser||this._isHandlingUserInput,element:e.target}})),this._oldModelValue=this.modelValue}__getEnabledOption(e,i){const s=n=>i===1?n<this.formElements.length:n>=0;for(let n=e+i;s(n);n+=i)if(this.formElements[n]&&!this.formElements[n].hasAttribute("aria-hidden"))return n;if(this.rotateKeyboardNavigation){const n=i===-1?this.formElements.length-1:0;for(let r=n;s(r);r+=i)if(this.formElements[r]&&!this.formElements[r].hasAttribute("aria-hidden"))return r}return e}__moveOptionsToListboxNode(){const e=this.shadowRoot.getElementById("options-outlet");e&&(Y(this,this._listboxNode),e.addEventListener("slotchange",()=>{Y(this,this._listboxNode)}))}__preventScrollingWithArrowKeys(e){if(this.disabled)return;const{key:i}=e;switch(i){case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault()}}__setupListboxNodeInteractions(){this._listboxNode.setAttribute("role","listbox"),this._listboxNode.setAttribute("aria-orientation",this.orientation),this._listboxNode.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this._listboxNode.setAttribute("tabindex","0"),this._listboxNode.addEventListener("click",this._listboxOnClick),this._listboxNode.addEventListener("keyup",this._listboxOnKeyUp),this._listboxNode.addEventListener("keydown",this._listboxOnKeyDown),this._scrollTargetNode.addEventListener("keydown",this.__preventScrollingWithArrowKeys)}__requestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}__initInteractionStates(){this.initInteractionState()}},Pe=O(Ke);class qe extends Pe(xe(ue(pe(ce)))){get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}const Ue=S`
  body > *[inert] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  body.overlays-scroll-lock {
    overflow: hidden;
  }

  body.overlays-scroll-lock-ios-fix {
    position: fixed;
    width: 100%;
  }

  html.overlays-scroll-lock-ios-fix {
    height: 100vh;
  }
`;class m{static __createGlobalStyleNode(){const t=document.createElement("style");return t.setAttribute("data-overlays",""),t.textContent=Ue.cssText,document.head.appendChild(t),t}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this.__siblingsInert=!1,this.__blockingMap=new WeakMap,m.__globalStyleNode||(m.__globalStyleNode=m.__createGlobalStyleNode())}add(t){if(this.list.find(e=>t===e))throw new Error("controller instance is already added");return this.list.push(t),t}remove(t){if(!this.list.find(e=>t===e))throw new Error("could not find controller to remove");this.__list=this.list.filter(e=>e!==t),this.__shownList=this.shownList.filter(e=>e!==t)}show(t){this.list.find(e=>t===e)&&this.hide(t),this.__shownList.unshift(t),Array.from(this.__shownList).reverse().forEach((e,i)=>{e.elevation=i+1})}hide(t){if(!this.list.find(e=>t===e))throw new Error("could not find controller to hide");this.__shownList=this.shownList.filter(e=>e!==t)}teardown(){this.list.forEach(t=>{t.teardown()}),this.__list=[],this.__shownList=[],this.__siblingsInert=!1,m.__globalStyleNode&&(document.head.removeChild(m.__globalStyleNode),m.__globalStyleNode=void 0)}get siblingsInert(){return this.__siblingsInert}disableTrapsKeyboardFocusForAll(){this.shownList.forEach(t=>{t.trapsKeyboardFocus===!0&&t.disableTrapsKeyboardFocus&&t.disableTrapsKeyboardFocus({findNewTrap:!1})})}informTrapsKeyboardFocusGotEnabled(t){this.siblingsInert===!1&&t==="global"&&(this.__siblingsInert=!0)}informTrapsKeyboardFocusGotDisabled({disabledCtrl:t,findNewTrap:e=!0}={}){const i=this.shownList.find(s=>s!==t&&s.trapsKeyboardFocus===!0);i?e&&i.enableTrapsKeyboardFocus():this.siblingsInert===!0&&(this.__siblingsInert=!1)}requestToPreventScroll(){const{isIOS:t,isMacSafari:e}=T;document.body.classList.add("overlays-scroll-lock"),(t||e)&&document.body.classList.add("overlays-scroll-lock-ios-fix"),t&&document.documentElement.classList.add("overlays-scroll-lock-ios-fix")}requestToEnableScroll(t){if((t?this.shownList.filter(r=>r!==t):this.shownList).some(r=>r.preventsScroll===!0))return;const{isIOS:s,isMacSafari:n}=T;document.body.classList.remove("overlays-scroll-lock"),(s||n)&&document.body.classList.remove("overlays-scroll-lock-ios-fix"),s&&document.documentElement.classList.remove("overlays-scroll-lock-ios-fix")}requestToShowOnly(t){const e=this.shownList.filter(i=>i!==t);e.forEach(i=>i.hide()),this.__blockingMap.set(t,e)}retractRequestToShowOnly(t){this.__blockingMap.has(t)&&this.__blockingMap.get(t).forEach(i=>i.show())}}m.__globalStyleNode=void 0;function je(){if(!V.has("@lion/ui::overlays::0.x")){const o=new m;V.set("@lion/ui::overlays::0.x",o)}return V.get("@lion/ui::overlays::0.x")}const $e=Le(je);function z(){let o=document.activeElement||document.body;for(;o&&o.shadowRoot&&o.shadowRoot.activeElement;)o=o.shadowRoot.activeElement;return o}const X=({visibility:o,display:t})=>o!=="hidden"&&t!=="none",Ge=({display:o})=>o==="contents";function Je(o){if(!o||!o.isConnected||!X(o.style))return!1;const t=window.getComputedStyle(o);return X(t)?Ge(t)?!0:!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length):!1}function Ye(o,t){const e=Math.max(o.tabIndex,0),i=Math.max(t.tabIndex,0);return e===0||i===0?i>e:e>i}function Ze(o,t){const e=[];for(;o.length>0&&t.length>0;)Ye(o[0],t[0])?e.push(t.shift()):e.push(o.shift());return[...e,...o,...t]}function K(o){const t=o.length;if(t<2)return o;const e=Math.ceil(t/2),i=K(o.slice(0,e)),s=K(o.slice(e));return Ze(i,s)}const W="matches"in Element.prototype?"matches":"msMatchesSelector";function Xe(o){return o[W]("input, select, textarea, button, object")?o[W](":not([disabled])"):o[W]("a[href], area[href], iframe, [tabindex], [contentEditable]")}function Qe(o){return Xe(o)?Number(o.getAttribute("tabindex")||0):-1}function et(o){if(o.localName==="slot")return o.assignedNodes({flatten:!0});const{children:t}=o.shadowRoot||o;return t||[]}function tt(o){return o.nodeType!==Node.ELEMENT_NODE?!1:o.localName==="slot"?!0:Je(o)}function me(o,t){if(!tt(o))return!1;const e=o,i=Qe(e);let s=i>0;i>=0&&t.push(e);const n=et(e);for(let r=0;r<n.length;r+=1)s=me(n[r],t)||s;return s}function ve(o){const t=[];return me(o,t)?K(t):t}function w(o,t,e={}){function i(l){return"getAttribute"in l}function s(l){if(!i(l))return null;const d=l.getAttribute("slot");let h=null;if(d){const p=e[d];p&&(h=p.filter(N=>(N==null?void 0:N.element)===l)[0]||null)}return h}const n=s(o);if(n)return n.deepContains;function r(l){if(!i(o))return;const d=o.getAttribute("slot");d&&(e[d]=e[d]||[],e[d].push({element:o,deepContains:l}))}let a=o.contains(t);if(a)return r(!0),!0;function c(l){return l.tagName==="SLOT"}function f(l){return c(l)?l.assignedElements():[]}function v(l){return l.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function b(l){let d=!1;for(let h=0;h<l.length;h+=1){const p=l[h];if(p&&(i(p)||v(p))&&w(p,t,e)){d=!0;break}}return d}function u(l){for(let d=0;d<l.children.length;d+=1){const h=l.children[d],p=s(h);if(p){a=p.deepContains||a;break}const N=f(h),be=[h.shadowRoot,...N];if(b(be)){a=!0;break}h.children.length>0&&u(h)}}return o instanceof HTMLElement&&o.shadowRoot&&(a=w(o.shadowRoot,t,e),a)?(r(!0),!0):(u(o),r(a),a)}const it={tab:9};function ot(o,t){const e=ve(o);let i;e.length>=2?i=[e[0],e[e.length-1]]:e.length===1?i=[e[0],e[0]]:i=[o,o],t.shiftKey&&i.reverse();const[s,n]=i,r=z();r===o||e.includes(r)&&n!==r||(t.preventDefault(),s.focus())}function st(o){const t=ve(o),e=t.find(u=>u.hasAttribute("autofocus"))||o;let i,s;e===o&&(o.tabIndex=-1,o.style.setProperty("outline","none")),e.focus();function n(u){u.keyCode===it.tab&&ot(o,u)}function r(){i=document.createElement("div"),i.style.display="none",i.setAttribute("data-is-tab-detection-element",""),o.insertBefore(i,o.children[0]),s=new MutationObserver(u=>{for(const l of u)if(l.type==="childList"){const d=!Array.from(o.children).find(p=>p.hasAttribute("data-is-tab-detection-element")),h=Array.from(l.addedNodes).find(p=>p instanceof HTMLElement&&p.hasAttribute("data-is-tab-detection-element"));d&&!h&&(s.disconnect(),r())}}),s.observe(o,{childList:!0})}function a(){return i.compareDocumentPosition(document.activeElement)===Node.DOCUMENT_POSITION_PRECEDING}function c({resetToRoot:u=!1}={}){if(w(o,z()))return;let l;u?l=o:l=t[a()?0:t.length-1],l&&l.focus()}function f(){window.removeEventListener("focusin",f),c()}function v(){setTimeout(()=>{w(o,z())||c({resetToRoot:!0})}),window.addEventListener("focusin",f)}function b(){window.removeEventListener("keydown",n),window.removeEventListener("focusin",f),window.removeEventListener("focusout",v),s.disconnect(),Array.from(o.children).includes(i)&&o.removeChild(i),o.style.removeProperty("outline")}return window.addEventListener("keydown",n),window.addEventListener("focusout",v),r(),{disconnect:b}}const Q=S`
  .overlays {
    position: fixed;
    z-index: 200;
  }

  .overlays__overlay-container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .overlays__overlay-container::backdrop {
    display: none;
  }

  .overlays__overlay-container--top-left {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .overlays__overlay-container--top {
    justify-content: center;
    align-items: flex-start;
  }

  .overlays__overlay-container--top-right {
    justify-content: flex-end;
    align-items: flex-start;
  }

  .overlays__overlay-container--right {
    justify-content: flex-end;
    align-items: center;
  }

  .overlays__overlay-container--bottom-left {
    justify-content: flex-start;
    align-items: flex-end;
  }

  .overlays__overlay-container--bottom {
    justify-content: center;
    align-items: flex-end;
  }

  .overlays__overlay-container--bottom-right {
    justify-content: flex-end;
    align-items: flex-end;
  }

  .overlays__overlay-container--left {
    justify-content: flex-start;
    align-items: center;
  }

  .overlays__overlay-container--center {
    justify-content: center;
    align-items: center;
  }

  .overlays__overlay--bottom-sheet {
    width: 100%;
  }

  ::slotted(.overlays__overlay),
  .overlays__overlay {
    pointer-events: auto;
  }

  .overlays__backdrop {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #333333;
    display: none;
  }

  .overlays__backdrop--visible {
    display: block;
  }

  .overlays__backdrop--animation-in {
    animation: overlays-backdrop-fade-in 300ms;
    opacity: 0.3;
  }

  .overlays__backdrop--animation-out {
    animation: overlays-backdrop-fade-out 300ms;
    opacity: 0;
  }

  @keyframes overlays-backdrop-fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes overlays-backdrop-fade-out {
    from {
      opacity: 0.3;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .overlays .overlays__backdrop--animation-in {
      animation: overlays-backdrop-fade-in 1ms;
    }

    .overlays .overlays__backdrop--animation-out {
      animation: overlays-backdrop-fade-out 1ms;
    }
  }

  dialog[data-overlay-outer-wrapper] {
    background-image: none;
    border-style: none;
    padding: 0px;
  }

  /** 
   * We don't want to use pseudo el ::backdrop.  
   * We have our own, that creates more flexibility wrt scrolling etc.
   */
  dialog[data-overlay-outer-wrapper]::backdrop {
    display: none;
  }
`,E={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},H=new WeakMap;function nt(o){return Array.from(o.cssRules).map(t=>t.cssText).join("")}function rt(o,t,{teardown:e=!1}={}){const i=o===document?document.body:o,s=t.cssText||nt(t);if(e){const n=Array.from(i.querySelectorAll("style"));for(const r of n)if(r.textContent===s){r.remove();break}}else{const n=document.createElement("style"),r=window.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=s,i.appendChild(n)}}function at(o,t,{teardown:e=!1}={}){let i=!1;o&&!H.has(o)&&H.set(o,[]);const s=H.get(o)??[],n=s.find(r=>t===r);return n&&e?s.splice(s.indexOf(t),1):!n&&!e?s.push(t):(n&&!e||!n&&e)&&(i=!0),{haltFurtherExecution:i}}function lt(o,t,{teardown:e=!1}={}){const{haltFurtherExecution:i}=at(o,t,{teardown:e});if(i)return;if(!E.supportsAdoptingStyleSheets||T.isIOS){rt(o,t,{teardown:e});return}const s=t instanceof CSSStyleSheet?t:t.styleSheet;if(!s)throw new Error("Please provide a CSSResultOrNative style");e?o.adoptedStyleSheets.includes(s)&&o.adoptedStyleSheets.splice(o.adoptedStyleSheets.indexOf(s),1):o.adoptedStyleSheets=[...o.adoptedStyleSheets,s]}function dt(o,t,{teardown:e=!1}={}){for(const i of t)E.adoptStyle(o,i,{teardown:e})}E.adoptStyle=lt;E.adoptStyles=dt;function ht({wrappingDialogNodeL1:o,contentWrapperNodeL2:t,contentNodeL3:e}){if(!(t.isConnected||e.isConnected))throw new Error('[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.');let i;const s=document.createComment("tempMarker");t.isConnected?(i=t.parentElement||t.getRootNode(),i.insertBefore(s,t),o.appendChild(t)):e.assignedSlot?(i=e.assignedSlot.parentElement||e.assignedSlot.getRootNode(),i.insertBefore(s,e.assignedSlot),o.appendChild(t),t.appendChild(e.assignedSlot)):(i=e.parentElement||e.getRootNode(),i.insertBefore(s,e),o.appendChild(t),t.appendChild(e)),i.insertBefore(o,s),i==null||i.removeChild(s)}async function ct(){return Ae(()=>import("./popper.CBQhmXeE.js"),[])}const ee=new WeakMap;var x,P,C;const k=class k extends EventTarget{constructor(e={},i=$e){super();A(this,x);A(this,C,e=>{e.key!=="Escape"||e.composedPath().includes(this.contentNode)||w(this.contentNode,e.target)||this.hide()});this.manager=i,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:"none",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:"description",visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:"top",strategy:"fixed",modifiers:[{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:8}},{name:"flip",options:{boundariesElement:"viewport",padding:16}},{name:"offset",enabled:!0,options:{offset:[0,8]}},{name:"arrow",enabled:!1}]},viewportConfig:{placement:"center"},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveTrapsKeyboardFocus=!1,this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){var e;return(e=this.config)==null?void 0:e.placementMode}get invokerNode(){var e;return(e=this.config)==null?void 0:e.invokerNode}get referenceNode(){var e;return(e=this.config)==null?void 0:e.referenceNode}get contentNode(){var e;return(e=this.config)==null?void 0:e.contentNode}get contentWrapperNode(){var e;return this.__contentWrapperNode||((e=this.config)==null?void 0:e.contentWrapperNode)}get backdropNode(){var e;return this.__backdropNode||((e=this.config)==null?void 0:e.backdropNode)}get elementToFocusAfterHide(){var e;return this.__elementToFocusAfterHide||((e=this.config)==null?void 0:e.elementToFocusAfterHide)}get hasBackdrop(){var e;return!!this.backdropNode||((e=this.config)==null?void 0:e.hasBackdrop)}get isBlocking(){var e;return(e=this.config)==null?void 0:e.isBlocking}get preventsScroll(){var e;return(e=this.config)==null?void 0:e.preventsScroll}get trapsKeyboardFocus(){var e;return(e=this.config)==null?void 0:e.trapsKeyboardFocus}get hidesOnEsc(){var e;return(e=this.config)==null?void 0:e.hidesOnEsc}get hidesOnOutsideClick(){var e;return(e=this.config)==null?void 0:e.hidesOnOutsideClick}get hidesOnOutsideEsc(){var e;return(e=this.config)==null?void 0:e.hidesOnOutsideEsc}get inheritsReferenceWidth(){var e;return(e=this.config)==null?void 0:e.inheritsReferenceWidth}get handlesAccessibility(){var e;return(e=this.config)==null?void 0:e.handlesAccessibility}get isTooltip(){var e;return(e=this.config)==null?void 0:e.isTooltip}get isAlertDialog(){var e;return(e=this.config)==null?void 0:e.isAlertDialog}get invokerRelation(){var e;return(e=this.config)==null?void 0:e.invokerRelation}get popperConfig(){var e;return(e=this.config)==null?void 0:e.popperConfig}get viewportConfig(){var e;return(e=this.config)==null?void 0:e.viewportConfig}get visibilityTriggerFunction(){var e;return(e=this.config)==null?void 0:e.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){var e;return Number((e=this.contentWrapperNode)==null?void 0:e.style.zIndex)}updateConfig(e){var i,s,n;this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...((i=this._defaultConfig.popperConfig)==null?void 0:i.modifiers)||[],...((s=this.__sharedConfig.popperConfig)==null?void 0:s.modifiers)||[],...((n=e.popperConfig)==null?void 0:n.modifiers)||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,R(this,x,P).call(this)||this.manager.add(this)}__validateConfiguration(e){if(!e.placementMode)throw new Error('[OverlayController] You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(e.placementMode))throw new Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw new Error("[OverlayController] You need to provide a .contentNode");if(e.isTooltip&&!e.handlesAccessibility)throw new Error("[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled")}_init(){this.__contentHasBeenInitialized||(this.__initContentDomStructure(),this.__contentHasBeenInitialized=!0),this.contentWrapperNode.removeAttribute("style"),this.contentWrapperNode.removeAttribute("class"),this.placementMode==="local"&&(k.popperModule||(k.popperModule=ct())),this.__handleOverlayStyles({phase:"init"}),this._handleFeatures({phase:"init"})}__handleOverlayStyles({phase:e}){var s;const i=(s=this.contentWrapperNode)==null?void 0:s.getRootNode();e==="init"?E.adoptStyle(i,Q):e==="teardown"&&E.adoptStyle(i,Q,{teardown:!0})}__initContentDomStructure(){var s,n;const e=document.createElement((s=this.config)!=null&&s._noDialogEl?"div":"dialog");e.setAttribute("role","none"),e.setAttribute("data-overlay-outer-wrapper",""),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,(n=this.config)!=null&&n.contentWrapperNode||(this.__contentWrapperNode=document.createElement("div")),this.contentWrapperNode.setAttribute("data-id","content-wrapper"),ht({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute("tabindex","-1"),this.__wrappingDialogNode.style.display="none",this.contentWrapperNode.style.zIndex="1",getComputedStyle(this.contentNode).position==="absolute"&&(this.contentNode.style.position="static"),HTMLDialogElement&&"closedBy"in HTMLDialogElement.prototype?e.closedBy="none":(e.addEventListener("keydown",r=>{r.key==="Escape"&&r.preventDefault()}),e.addEventListener("keyup",r=>{r.key==="Escape"&&r.preventDefault()}),e.addEventListener("cancel",r=>{r.stopPropagation()}),e.addEventListener("close",r=>{r.stopPropagation()}))}_handleZIndex({phase:e}){if(this.placementMode==="local"&&e==="setup"){const i=Number(getComputedStyle(this.contentNode).zIndex);(i<1||Number.isNaN(i))&&(this.contentNode.style.zIndex="1")}}__setupTeardownAccessibility({phase:e}){if(e==="init"){this.__storeOriginalAttrs(this.contentNode,["role","id"]);const i=this.trapsKeyboardFocus;if(this.invokerNode){const s=["aria-labelledby","aria-describedby"];i||s.push("aria-expanded"),this.__storeOriginalAttrs(this.invokerNode,s)}this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation==="label"?"aria-labelledby":"aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&!i&&this.invokerNode.setAttribute("aria-expanded",`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute("role","alertdialog"):this.contentNode.getAttribute("role")||this.contentNode.setAttribute("role","dialog"))}else e==="teardown"&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,i){const s={};i.forEach(n=>{s[n]=e.getAttribute(n)}),this.__originalAttrs.set(e,s)}__restoreOriginalAttrs(){for(const[e,i]of this.__originalAttrs)Object.entries(i).forEach(([s,n])=>{n!==null?e.setAttribute(s,n):e.removeAttribute(s)});this.__originalAttrs.clear()}get isShown(){var e;return((e=this.__wrappingDialogNode)==null?void 0:e.style.display)!=="none"}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(s=>{this._showResolve=s}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}const i=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(i),i.defaultPrevented||("HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display="",this._keepBodySize({phase:"before-show"}),await this._handleFeatures({phase:"show"}),this._keepBodySize({phase:"show"}),await this._handlePosition({phase:"show"}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event("show")),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if(this.placementMode==="global"){const i=`overlays__overlay-container--${this.viewportConfig.placement}`;e==="show"?(this.contentWrapperNode.classList.add("overlays__overlay-container"),this.contentWrapperNode.classList.add(i),this.contentNode.classList.add("overlays__overlay")):e==="hide"&&(this.contentWrapperNode.classList.remove("overlays__overlay-container"),this.contentWrapperNode.classList.remove(i),this.contentNode.classList.remove("overlays__overlay"))}else this.placementMode==="local"&&e==="show"&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){var i,s;if(this.preventsScroll)switch(e){case"before-show":this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case"show":{if(window.getComputedStyle){const f=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(f.getPropertyValue("margin-right"),10),this.__bodyMarginBottom=parseInt(f.getPropertyValue("margin-bottom"),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;const n=document.body.clientWidth-this.__bodyClientWidth,r=document.body.clientHeight-this.__bodyClientHeight,a=this.__bodyMarginRight+n,c=this.__bodyMarginBottom+r;(i=window.CSS)!=null&&i.number&&((s=document.body.attributeStyleMap)!=null&&s.set)?(document.body.attributeStyleMap.set("margin-right",CSS.px(a)),document.body.attributeStyleMap.set("margin-bottom",CSS.px(c))):(document.body.style.marginRight=`${a}px`,document.body.style.marginBottom=`${c}px`);break}case"hide":document.body.style.marginRight=this.__bodyMarginRightInline||"",document.body.style.marginBottom=this.__bodyMarginBottomInline||"";break}}async hide(){if(this._hideComplete=new Promise(i=>{this._hideResolve=i}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.manager.hide(this),!this.isShown){this._hideResolve();return}const e=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),"HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display="none",this._handleFeatures({phase:"hide"}),this._keepBodySize({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:i}){await this.transitionHide({backdropNode:e,contentNode:i}),this._handlePosition({phase:"hide"}),e&&e.classList.remove("overlays__backdrop--animation-in")}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add("overlays__backdrop--animation-in")}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:"nearest"})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){typeof this.visibilityTriggerFunction=="function"&&(e==="init"&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll();break;case"teardown":this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:e}){switch(e){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){var i;switch(e){case"init":{this.__backdropInitialized||((i=this.config)!=null&&i.backdropNode||(this.__backdropNode=document.createElement("div"),this.__backdropNode.classList.add("overlays__backdrop")),this.__wrappingDialogNode.prepend(this.backdropNode),this.__backdropInitialized=!0);break}case"show":this.config.hasBackdrop&&this.backdropNode.classList.add("overlays__backdrop--visible"),this.__hasActiveBackdrop=!0;break;case"hide":case"teardown":this.backdropNode.classList.remove("overlays__backdrop--visible"),this.__hasActiveBackdrop=!1;break}}get hasActiveTrapsKeyboardFocus(){return this.__hasActiveTrapsKeyboardFocus}_handleTrapsKeyboardFocus({phase:e}){e==="show"?("showModal"in this.__wrappingDialogNode&&(this.__wrappingDialogNode.close(),this.__wrappingDialogNode.showModal()),this.enableTrapsKeyboardFocus()):(e==="hide"||e==="teardown")&&this.disableTrapsKeyboardFocus()}enableTrapsKeyboardFocus(){if(this.__hasActiveTrapsKeyboardFocus)return;this.manager&&this.manager.disableTrapsKeyboardFocusForAll(),!!this.contentNode.shadowRoot&&console.warn("[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root"),this._containFocusHandler=st(this.contentNode),this.__hasActiveTrapsKeyboardFocus=!0,this.manager&&this.manager.informTrapsKeyboardFocusGotEnabled(this.placementMode)}disableTrapsKeyboardFocus({findNewTrap:e=!0}={}){this.__hasActiveTrapsKeyboardFocus&&(this._containFocusHandler&&(this._containFocusHandler.disconnect(),this._containFocusHandler=void 0),this.__hasActiveTrapsKeyboardFocus=!1,this.manager&&this.manager.informTrapsKeyboardFocusGotDisabled({disabledCtrl:this,findNewTrap:e}))}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){if(e.key!=="Escape"||ee.has(e)||!this.isShown&&this.__escKeyHandlerCalled)return;(e.composedPath().includes(this.contentNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||w(this.contentNode,e.target))&&(this.__escKeyHandlerCalled=!0,this.hide(),ee.set(e,this))}_handleHidesOnEsc({phase:e}){e==="init"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)),e==="show"&&(this.__escKeyHandlerCalled=!1),e==="teardown"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){e==="init"?(document.removeEventListener("keyup",y(this,C)),document.addEventListener("keyup",y(this,C))):e==="teardown"&&document.removeEventListener("keyup",y(this,C))}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode==="global")return;const e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case"max":this.contentWrapperNode.style.maxWidth=e;break;case"full":this.contentWrapperNode.style.width=e;break;case"min":this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width="auto";break}}_handleHidesOnOutsideClick({phase:e}){const i=e==="show"?"addEventListener":"removeEventListener";if(e==="show"){let s=!1,n=!1;this.__onInsideMouseDown=()=>{s=!0},this.__onInsideMouseUp=()=>{n=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!s&&!n&&this.hide(),s=!1,n=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[i]("mousedown",this.__onInsideMouseDown,!0),this.contentWrapperNode[i]("mouseup",this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[i]("mousedown",this.__onInsideMouseDown,!0),this.invokerNode[i]("mouseup",this.__onInsideMouseUp,!0)),document.documentElement[i]("mouseup",this.__onDocumentMouseUp,!0),window[i]("blur",this.__onWindowBlur)}_handleAccessibility({phase:e}){(e==="init"||e==="teardown")&&this.__setupTeardownAccessibility({phase:e});const i=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!i&&this.invokerNode.setAttribute("aria-expanded",`${e==="show"}`)}teardown(){this.__handleOverlayStyles({phase:"teardown"}),this._handleFeatures({phase:"teardown"}),R(this,x,P).call(this)&&this.manager.remove(this)}async __createPopperInstance(){var e;if(this._popper&&(this._popper.destroy(),this._popper=void 0),k.popperModule!==void 0){const{createPopper:i}=await k.popperModule;this._popper=i(this._referenceNode,this.contentWrapperNode,{...(e=this.config)==null?void 0:e.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute("aria-disabled")==="true":!1}};x=new WeakSet,P=function(){return!!this.manager.list.find(e=>this===e)},C=new WeakMap;let F=k;F.popperModule=void 0;function ge(o,t){if(typeof o!="object"||typeof t!="object"||o===null||t===null)return o===t;const e=Object.keys(o),i=Object.keys(t);if(e.length!==i.length)return!1;const s=n=>ge(o[n],t[n]);return e.every(s)}const ut=o=>{var t,e,i;return i=class extends o{constructor(){super();A(this,e,!1);this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}static get properties(){return{opened:{type:Boolean,reflect:!0}}}get config(){return this.__config}set config(r){const a=!ge(this.config,r);this._overlayCtrl&&a&&this._overlayCtrl.updateConfig(r),this.__config=r,this._overlayCtrl&&a&&this.__syncToOverlayController()}requestUpdate(r,a,c){super.requestUpdate(r,a,c),r==="opened"&&this.opened!==a&&this.dispatchEvent(new CustomEvent("opened-changed",{detail:{opened:this.opened}}))}_defineOverlay({contentNode:r,invokerNode:a,referenceNode:c,backdropNode:f,contentWrapperNode:v}){var u,l,d,h;const b=this._defineOverlayConfig()||{};return new F({contentNode:r,invokerNode:a,referenceNode:c,backdropNode:f,contentWrapperNode:v,...b,...this.config,popperConfig:{...b.popperConfig||{},...((u=this.config)==null?void 0:u.popperConfig)||{},modifiers:[...((l=b.popperConfig)==null?void 0:l.modifiers)||[],...((h=(d=this.config)==null?void 0:d.popperConfig)==null?void 0:h.modifiers)||[]]}})}_defineOverlayConfig(){return{placementMode:"local"}}updated(r){super.updated(r),r.has("opened")&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=r=>{r.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(y(this,e)||(this._setupOverlayCtrl(),D(this,e,!0)))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),D(this,e,!1))}get _overlayInvokerNode(){return Array.from(this.children).find(r=>r.slot==="invoker")}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||(this.__cachedOverlayBackdropNode=Array.from(this.children).find(r=>r.slot==="backdrop")),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||(this._cachedOverlayContentNode=Array.from(this.children).find(r=>r.slot==="content")||this.config.contentNode),this._cachedOverlayContentNode}get _overlayContentWrapperNode(){var r;return(r=this.shadowRoot)==null?void 0:r.querySelector("#overlay-content-node-wrapper")}_setupOverlayCtrl(){if(y(this,e))return;const r={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(r):this._overlayCtrl=this._defineOverlay(r),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(r){this.__blockSyncToOverlayCtrl=!0,this.opened=r,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=r=>{const a=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(a),a.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),r.preventDefault())},this.__onBeforeHide=r=>{const a=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(a),a.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),r.preventDefault())},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){const r=this._overlayCtrl;r.placementMode==="local"&&r._popper&&r._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}},e=new WeakMap,$(i,"enabledWarnings",((t=G(i,i,"enabledWarnings"))==null?void 0:t.filter(r=>r!=="change-in-update"))||[]),i},pt=O(ut);function ft(){return{visibilityTriggerFunction:({controller:o})=>{function t(){o._hasDisabledInvoker()||o.toggle()}return{init:()=>{var e;(e=o.invokerNode)==null||e.addEventListener("click",t)},teardown:()=>{var e;(e=o.invokerNode)==null||e.removeEventListener("click",t)}}}}}const _t=()=>({placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:"bottom-start",modifiers:[{name:"offset",enabled:!1}]},handlesAccessibility:!0,...ft()});class mt extends U(De){static get styles(){return[...super.styles,S`
        :host {
          justify-content: space-between;
          align-items: center;
        }

        #content-wrapper {
          position: relative;
          pointer-events: none;
        }
      `]}static get properties(){return{selectedElement:{type:Object},hostElement:{type:Object},readOnly:{type:Boolean,reflect:!0,attribute:"readonly"},singleOption:{type:Boolean,reflect:!0,attribute:"single-option"}}}get slots(){return{...super.slots,after:()=>{const t=document.createElement("span");return t.textContent="▼",t.setAttribute("role","img"),t.setAttribute("aria-hidden","true"),t}}}get _contentWrapperNode(){return this.shadowRoot.getElementById("content-wrapper")}constructor(){super(),this.readOnly=!1,this.selectedElement=null,this.hostElement=null,this.singleOption=!1,this.type="button"}__handleKeydown(t){switch(t.key){case"ArrowDown":case"ArrowUp":t.preventDefault()}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.__handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.__handleKeydown)}_contentTemplate(){if(this.selectedElement){const t=Array.from(this.selectedElement.childNodes);return t.length>0?t.map(e=>e.cloneNode(!0)):this.selectedElement.textContent}return this._noSelectionTemplate()}render(){return _` ${this._beforeTemplate()} ${super.render()} ${this._afterTemplate()} `}_noSelectionTemplate(){return _``}_beforeTemplate(){return _` <div id="content-wrapper">${this._contentTemplate()}</div> `}_afterTemplate(){return _`${this.singleOption?"":_`<slot name="after"></slot>`}`}}function vt(){return T.isMac?"mac":"windows/linux"}class gt extends U(fe(pt(qe))){static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":mt}}static get properties(){return{navigateWithinInvoker:{type:Boolean,attribute:"navigate-within-invoker"},interactionMode:{type:String,attribute:"interaction-mode"},singleOption:{type:Boolean,reflect:!0,attribute:"single-option"}}}_inputGroupInputTemplate(){return _`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,invoker:()=>_`<lion-select-invoker></lion-select-invoker>`}}get _invokerNode(){return Array.from(this.children).find(t=>t.slot==="invoker")}get _focusableNode(){return this._invokerNode}get _scrollTargetNode(){return this._overlayContentNode._scrollTargetNode||this._overlayContentNode}constructor(){super(),this.navigateWithinInvoker=!1,this.interactionMode="auto",this.singleOption=!1,this._arrowWidth=28,this.__onKeyUp=this.__onKeyUp.bind(this),this.__invokerOnBlur=this.__invokerOnBlur.bind(this),this.__overlayOnHide=this.__overlayOnHide.bind(this),this.__overlayOnShow=this.__overlayOnShow.bind(this),this.__invokerOnClick=this.__invokerOnClick.bind(this),this.__overlayBeforeShow=this.__overlayBeforeShow.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this)}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this._invokerNode.selectedElement=this.formElements[this.checkedIndex]}),this._invokerNode.hostElement=this,this.__setupInvokerNode(),this.__toggleInvokerDisabled(),this.addEventListener("keyup",this.__onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),this.__teardownInvokerNode(),this.removeEventListener("keyup",this.__onKeyUp)}requestUpdate(t,e,i){super.requestUpdate(t,e,i),t==="interactionMode"&&(this.interactionMode==="auto"?this.interactionMode=vt():(this.selectionFollowsFocus=this.interactionMode==="windows/linux",this.navigateWithinInvoker=this.interactionMode==="windows/linux")),(t==="disabled"||t==="readOnly")&&this.__toggleInvokerDisabled()}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this._invokerNode.makeRequestToBeDisabled():this._invokerNode.retractRequestToBeDisabled()),t.has("singleOption")&&(this.singleOption?(this._invokerNode.removeAttribute("role"),this._invokerNode.removeAttribute("aria-haspopup"),this._invokerNode.removeAttribute("aria-expanded")):(this._invokerNode.setAttribute("role","button"),this._invokerNode.setAttribute("aria-haspopup","listbox"),this._invokerNode.setAttribute("aria-expanded",`${this.opened}`))),this._inputNode&&this._invokerNode&&(t.has("_ariaLabelledNodes")&&this._invokerNode.setAttribute("aria-labelledby",`${this._inputNode.getAttribute("aria-labelledby")} ${this._invokerNode.id}`),t.has("_ariaDescribedNodes")&&this._invokerNode.setAttribute("aria-describedby",this._inputNode.getAttribute("aria-describedby")),t.has("showsFeedbackFor")&&this._invokerNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`)),t.has("modelValue")&&this.__syncInvokerElement()}addFormElement(t,e){super.addFormElement(t,e),!this.hasNoDefaultSelected&&!this.__hasInitialSelectedFormElement&&(!t.disabled||this.disabled)&&(t.active=!0,t.checked=!0,this.__hasInitialSelectedFormElement=!0),this._alignInvokerWidth(),this._onFormElementsChanged()}removeFormElement(t){super.removeFormElement(t),this._alignInvokerWidth(),this._onFormElementsChanged()}_getCheckedElements(){return this.formElements.filter(t=>t.checked)}_onFormElementsChanged(){this.singleOption=this.formElements.length===1&&!this.hasNoDefaultSelected,this._invokerNode.singleOption=this.singleOption}__initInteractionStates(){this.initInteractionState()}__toggleInvokerDisabled(){this._invokerNode&&(this._invokerNode.disabled=this.disabled,this._invokerNode.readOnly=this.readOnly)}__syncInvokerElement(){this._invokerNode&&(this._invokerNode.selectedElement=this.formElements[this.checkedIndex],this._invokerNode.requestUpdate("selectedElement"))}__setupInvokerNode(){this._invokerNode.id=`invoker-${this._inputId}`,this._invokerNode.setAttribute("aria-haspopup","listbox"),this.__setupInvokerNodeEventListener()}__invokerOnClick(){!this.disabled&&!this.readOnly&&!this.singleOption&&!this.__blockListShow&&this._overlayCtrl.toggle()}__invokerOnBlur(){this.dispatchEvent(new Event("blur"))}__setupInvokerNodeEventListener(){this._invokerNode.addEventListener("click",this.__invokerOnClick),this._invokerNode.addEventListener("blur",this.__invokerOnBlur)}__teardownInvokerNode(){this._invokerNode.removeEventListener("click",this.__invokerOnClick),this._invokerNode.removeEventListener("blur",this.__invokerOnBlur)}_defineOverlayConfig(){return{..._t(),visibilityTriggerFunction:void 0}}_noDefaultSelectedInheritsWidth(){this.checkedIndex===-1?this._overlayCtrl.updateConfig({inheritsReferenceWidth:"min"}):this._overlayCtrl.updateConfig({inheritsReferenceWidth:this._initialInheritsReferenceWidth})}__overlayBeforeShow(){this.hasNoDefaultSelected&&this._noDefaultSelectedInheritsWidth(),this._listboxNode.setAttribute("autofocus","")}__overlayOnShow(){this.checkedIndex!=null&&(this.activeIndex=this.checkedIndex),this._listboxNode.focus()}__overlayOnHide(){this._invokerNode.focus(),this._listboxNode.removeAttribute("autofocus")}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._initialInheritsReferenceWidth=this._overlayCtrl.inheritsReferenceWidth,this._alignInvokerWidth(),this._overlayCtrl.addEventListener("before-show",this.__overlayBeforeShow),this._overlayCtrl.addEventListener("show",this.__overlayOnShow),this._overlayCtrl.addEventListener("hide",this.__overlayOnHide)}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this._overlayCtrl.removeEventListener("show",this.__overlayOnShow),this._overlayCtrl.removeEventListener("before-show",this.__overlayBeforeShow),this._overlayCtrl.removeEventListener("hide",this.__overlayOnHide)}async _alignInvokerWidth(){var n;if(await this.updateComplete,!((n=this._overlayCtrl)!=null&&n.content))return;const t=this._overlayCtrl.content.style.display,e=this._overlayCtrl.contentWrapperNode.style.minWidth,i=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display="",this._overlayCtrl.contentWrapperNode.style.minWidth="auto",this._overlayCtrl.contentWrapperNode.style.width="auto";const s=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;s>0&&(this._invokerNode.style.width=`${s+this._arrowWidth}px`),this._overlayCtrl.content.style.display=t,this._overlayCtrl.contentWrapperNode.style.minWidth=e,this._overlayCtrl.contentWrapperNode.style.width=i}_onLabelClick(){this._invokerNode.focus()}get _overlayInvokerNode(){return this._invokerNode}get _overlayContentNode(){return this._listboxNode}__onKeyUp(t){if(this.disabled||this.readOnly||this.singleOption||this.opened)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:e}=t;switch(e){case"ArrowUp":t.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex)):this.opened=!0;break;case"ArrowDown":t.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex)):this.opened=!0;break;case"ArrowLeft":t.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex));break;case"ArrowRight":t.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex));break;default:this._noTypeAhead||this._handleTypeAhead(t,{setAsChecked:!0})}}_listboxOnKeyDown(t){if(super._listboxOnKeyDown(t),this.disabled)return;const{key:e}=t;switch(e){case"Tab":if(this._overlayCtrl.config.trapsKeyboardFocus===!0)return;this.opened=!1;break;case"Escape":this.opened=!1,this.__blockListShowDuringTransition();break;case"Enter":case" ":this.opened=!1,this.__blockListShowDuringTransition();break}}_listboxOnClick(){this.opened=!1}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.addEventListener("click",this._listboxOnClick)}_teardownListboxNode(){super._teardownListboxNode(),this._listboxNode&&this._listboxNode.removeEventListener("click",this._listboxOnClick)}__blockListShowDuringTransition(){this.__blockListShow=!0,setTimeout(()=>{this.__blockListShow=!1},200)}}const bt=S`
  /* ── Base ── */
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    font-weight: var(--co-font-weight-regular);
    line-height: var(--co-font-line-height-normal);
    color: var(--co-color-text-default);
  }

  .form-field__label {
    color: var(--co-color-text-default);
    font-size: var(--co-typography-label-size);
    font-weight: var(--co-typography-label-weight);
    line-height: var(--co-typography-label-line-height);
    margin-block-end: var(--co-space-1);
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

  /* ── Input group (invoker container) ── */

  .input-group {
    display: flex;
    flex-direction: column;
    inline-size: 100%;
  }

  .input-group__container {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    inline-size: 100%;
    min-block-size: var(--co-control-height-md);
    gap: var(--co-space-gap-sm);
    padding-inline: var(--co-space-inset-md);
    border: var(--co-border-width-default) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius-interactive);
    background: var(--co-color-surface-static-default);
    color: var(--co-color-text-default);
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      outline var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .input-group__container {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-static-raised);
  }

  /* Suppress Lion's default focus ring on the invoker — we draw our own on the container */
  slot[name='invoker']::slotted(lion-select-invoker) {
    outline: none !important;
  }

  :host(:focus-within) .input-group__container {
    border-color: var(--co-color-border-focus);
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-border-width-default));
  }

  :host([danger]) .input-group__container,
  :host([shows-feedback-for~='error']) .input-group__container {
    border-color: var(--co-color-border-danger);
  }

  :host([danger]:focus-within) .input-group__container,
  :host([shows-feedback-for~='error']:focus-within) .input-group__container {
    border-color: var(--co-color-border-danger);
    outline: var(--co-focus-ring-width) solid var(--co-color-border-danger);
    outline-offset: calc(-1 * var(--co-border-width-default));
  }

  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    pointer-events: none;
  }

  :host([readonly]) .input-group__container {
    background: var(--co-color-surface-static-sunken);
    cursor: default;
  }

  /* ── Sizes ── */

  :host([size='sm']) {
    font-size: var(--co-font-size-small);
  }
  :host([size='sm']) .input-group__container {
    min-block-size: var(--co-control-height-sm);
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

  /* ── Invoker ── */

  slot[name='invoker']::slotted(*) {
    flex: 1 1 auto;
    min-inline-size: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    padding: 0;
    cursor: pointer;
    text-align: start;
    /* Keep selected text on a single line in narrow containers */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ── Chevron ── */

  /* Chevron rotation is managed via JS in _syncChevronRotation
     because the icon is in the invoker's light DOM, unreachable by shadow CSS. */
  .select__chevron {
    color: var(--co-color-text-default);
    flex: 0 0 auto;
    pointer-events: none;
    transition: transform var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  /* ── Overlay ── */

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

  [part='overlay'] {
    /* Width is set by Lion's inheritsReferenceWidth: 'full' (writes
       style="width: <invoker>px" inline). We don't constrain inline-size
       here — fighting Lion's value produces an overlay much wider than
       the trigger, which contradicts the standard select pattern (Radix,
       Material, Polaris, native <select>). Cap height so very long lists
       get a scrollbar instead of running off-screen. */
    max-block-size: min(60vh, 24rem);
    overflow-y: auto;
    border: var(--co-border-width-panel) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius-interactive);
    background: var(--co-color-surface-static-default);
    box-shadow: var(--co-elevation-shadow-lg);
  }

  /* ── Feedback ── */

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal);
  }
`;var I=function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},q;let g=q=class extends gt{constructor(){super(...arguments),this.size="md",this.danger=!1,this.required=!1,this.requiredMessage="",this._overlayId=`co-select-overlay-${++q._instances}`,this._validation=new Se(this),this._hasLastChangeModelValue=!1,this._syncChevronRotation=()=>{const t=this.querySelector(".select__chevron");t&&(t.style.transform=this.opened?"rotate(180deg)":"")},this._handleInvokerFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleInvokerBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleModelValueChanged=t=>{var s;const e=t;if(e.target!==this)return;const i=this.modelValue;if((s=e.detail)!=null&&s.initialize){this._rememberModelValue(i);return}this._hasLastChangeModelValue&&Object.is(i,this._lastChangeModelValue)||(this._rememberModelValue(i),this.dispatchEvent(new CustomEvent("co-change",{detail:{value:i,modelValue:i,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0})))}}static get styles(){return[...super.styles,bt]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged),this.addEventListener("opened-changed",this._syncChevronRotation)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged),this.removeEventListener("opened-changed",this._syncChevronRotation);const t=this.querySelector('[slot="invoker"]');t&&(t.removeEventListener("focus",this._handleInvokerFocus),t.removeEventListener("blur",this._handleInvokerBlur))}firstUpdated(t){J(this),super.firstUpdated(t),this._rememberModelValue(),this._syncValidation(!0,!0),this._wireInvokerFocusEvents(),this._refreshInvokerIcons()}_refreshInvokerIcons(){const t=this.querySelector('[slot="invoker"]');t!=null&&t.shadowRoot&&requestAnimationFrame(()=>{var e;(e=t.shadowRoot)==null||e.querySelectorAll("co-icon").forEach(i=>{var s;(s=i.requestUpdate)==null||s.call(i)})})}_wireInvokerFocusEvents(){const t=this.querySelector('[slot="invoker"]');t&&(t.addEventListener("focus",this._handleInvokerFocus),t.addEventListener("blur",this._handleInvokerBlur))}updated(t){J(this),super.updated(t),(t.has("validators")||t.has("required")||t.has("requiredMessage"))&&this._syncValidation(t.has("validators"),t.has("required")||t.has("requiredMessage")),this._syncChevronRotation(),this._refreshInvokerIcons(),this._syncAriaControls()}_syncAriaControls(){const t=this.querySelector('[slot="invoker"]'),e=this.querySelector('[slot="input"]');!t||!e||(e.id||(e.id=this._overlayId),t.getAttribute("aria-controls")!==e.id&&t.setAttribute("aria-controls",e.id))}_labelTemplate(){return _`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return _`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}get slots(){return{...super.slots,invoker:()=>{const t=document.createElement("lion-select-invoker"),e=document.createElement("co-icon");return e.setAttribute("slot","after"),e.setAttribute("name","keyboard-arrow-down"),e.setAttribute("size",{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"),e.setAttribute("aria-hidden","true"),e.classList.add("select__chevron"),e.style.transition="transform var(--co-motion-duration-fast) var(--co-motion-easing-default)",t.appendChild(e),t}}}_inputGroupTemplate(){return _`
      <div part="input-group" class="input-group">
        <div part="invoker" class="input-group__container">
          <slot name="invoker"></slot>
        </div>
        <div
          id="overlay-content-node-wrapper"
          part="overlay"
          @mousedown=${this._onOverlayMousedown}
        >
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}_setupOverlayCtrl(){var e;super._setupOverlayCtrl();const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".input-group__container");t&&this._overlayCtrl&&this._overlayCtrl.updateConfig({referenceNode:t})}_noDefaultSelectedInheritsWidth(){}async _alignInvokerWidth(){}_feedbackTemplate(){return _`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_defineOverlayConfig(){const t=super._defineOverlayConfig(),e=t.popperConfig??{};return{...t,inheritsReferenceWidth:"full",popperConfig:{...e,modifiers:[{name:"offset",enabled:!0,options:{offset:[0,parseInt(Ne,10)]}}]}}}_onOverlayMousedown(t){t.preventDefault()}_rememberModelValue(t=this.modelValue){this._lastChangeModelValue=t,this._hasLastChangeModelValue=!0}_syncValidation(t=!1,e=!1){this._validation.sync(()=>this.required?[Oe(this.requiredMessage,"Select an option.")]:[],t,e)}};g._instances=0;I([M({reflect:!0})],g.prototype,"size",void 0);I([M({type:Boolean,reflect:!0})],g.prototype,"danger",void 0);I([M({type:Boolean,reflect:!0})],g.prototype,"required",void 0);I([M({attribute:"required-message"})],g.prototype,"requiredMessage",void 0);g=q=I([Ee("co-select")],g);const Mt=Object.freeze(Object.defineProperty({__proto__:null,get CoOption(){return Ie},get CoSelect(){return g}},Symbol.toStringTag,{value:"Module"}));export{He as C,_e as F,qe as L,pt as O,Z as a,T as b,g as c,Be as d,Mt as e,_t as w};
