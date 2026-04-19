const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/bg-BG.DvcqJcRT.js","assets/chunks/bg.DjRhbvP8.js","assets/chunks/cs-CZ.C4M3ss0M.js","assets/chunks/cs.BpAIInFi.js","assets/chunks/de-DE.B6cLQS-C.js","assets/chunks/de.tu_ZC0by.js","assets/chunks/en-AU.BLLSR6ul.js","assets/chunks/en.BRtJWocA.js","assets/chunks/en-GB.BLLSR6ul.js","assets/chunks/en-US.BLLSR6ul.js","assets/chunks/es-ES.C-k5kUnm.js","assets/chunks/es.CmCcTLNg.js","assets/chunks/fr-FR.DC-XO9HF.js","assets/chunks/fr.z99AZYvu.js","assets/chunks/fr-BE.DC-XO9HF.js","assets/chunks/hu-HU.BeTGSB1R.js","assets/chunks/hu.DlqOkKS-.js","assets/chunks/it-IT.BfrsYHtj.js","assets/chunks/it.dhe0n6ro.js","assets/chunks/nl-BE.CtPSVrK-.js","assets/chunks/nl.CsOjjg4q.js","assets/chunks/nl-NL.CtPSVrK-.js","assets/chunks/pl-PL.BO_uoCo3.js","assets/chunks/pl.CYht5iOc.js","assets/chunks/ro-RO.BzszQasy.js","assets/chunks/ro.DwBEW5po.js","assets/chunks/ru-RU.DYdB6zKs.js","assets/chunks/ru.BWO2zRrD.js","assets/chunks/sk-SK.t6DAVN22.js","assets/chunks/sk.BCmB7Wtj.js","assets/chunks/tr-TR.Cbm2kwTy.js","assets/chunks/tr.C7VWmvp5.js","assets/chunks/uk-UA.DRKx0L1R.js","assets/chunks/uk.L9q5i_B2.js"])))=>i.map(i=>d[i]);
var Es=Object.defineProperty;var ws=Object.getPrototypeOf;var ks=Reflect.get;var di=s=>{throw TypeError(s)};var Ns=(s,t,e)=>t in s?Es(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var j=(s,t,e)=>Ns(s,typeof t!="symbol"?t+"":t,e),xt=(s,t,e)=>t.has(s)||di("Cannot "+e);var P=(s,t,e)=>(xt(s,t,"read from private field"),e?e.call(s):t.get(s)),Q=(s,t,e)=>t.has(s)?di("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),te=(s,t,e,i)=>(xt(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e),se=(s,t,e)=>(xt(s,t,"access private method"),e);var Oe=(s,t,e)=>ks(ws(s),e,t);import{g as As,a as Ss,b as Ts,o as Os}from"./theme.DZ3gWocP.js";import{B as y}from"./framework.2KsE0g5C.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=globalThis,Zt=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jt=Symbol(),ci=new WeakMap;let qi=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Zt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ci.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ci.set(e,t))}return t}toString(){return this.cssText}};const Fs=s=>new qi(typeof s=="string"?s:s+"",void 0,Jt),U=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new qi(e,s,Jt)},Xt=(s,t)=>{if(Zt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),o=ct.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}},hi=Zt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Fs(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vs,defineProperty:Ls,getOwnPropertyDescriptor:Ms,getOwnPropertyNames:Is,getOwnPropertySymbols:zs,getPrototypeOf:Rs}=Object,fe=globalThis,ui=fe.trustedTypes,$s=ui?ui.emptyScript:"",Ct=fe.reactiveElementPolyfillSupport,Ke=(s,t)=>s,ht={toAttribute(s,t){switch(t){case Boolean:s=s?$s:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Qt=(s,t)=>!Vs(s,t),pi={attribute:!0,type:String,converter:ht,reflect:!1,useDefault:!1,hasChanged:Qt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),fe.litPropertyMetadata??(fe.litPropertyMetadata=new WeakMap);let Ve=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=pi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Ls(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=Ms(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){const a=o==null?void 0:o.call(this);r==null||r.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pi}static _$Ei(){if(this.hasOwnProperty(Ke("elementProperties")))return;const t=Rs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ke("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ke("properties"))){const e=this.properties,i=[...Is(e),...zs(e)];for(const o of i)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,o]of e)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const o=this._$Eu(e,i);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(hi(o))}else t!==void 0&&e.push(hi(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var r;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:ht).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){var r,n;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=i.getPropertyOptions(o),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:ht;this._$Em=o;const p=c.fromAttribute(e,a.type);this[o]=p??((n=this._$Ej)==null?void 0:n.get(o))??p,this._$Em=null}}requestUpdate(t,e,i,o=!1,r){var n;if(t!==void 0){const a=this.constructor;if(o===!1&&(r=this[t]),i??(i=a.getPropertyOptions(t)),!((i.hasChanged??Qt)(r,e)||i.useDefault&&i.reflect&&r===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,n]of o){const{wrapped:a}=n,c=this[r];a!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,n,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},Ve[Ke("elementProperties")]=new Map,Ve[Ke("finalized")]=new Map,Ct==null||Ct({ReactiveElement:Ve}),(fe.reactiveElementVersions??(fe.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=globalThis,fi=s=>s,ut=Ye.trustedTypes,_i=ut?ut.createPolicy("lit-html",{createHTML:s=>s}):void 0,Gi="$lit$",ue=`lit$${Math.random().toFixed(9).slice(2)}$`,ji="?"+ue,Ds=`<${ji}>`,Ee=document,tt=()=>Ee.createComment(""),it=s=>s===null||typeof s!="object"&&typeof s!="function",ei=Array.isArray,Ps=s=>ei(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Et=`[ 	
\f\r]`,Ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mi=/-->/g,bi=/>/g,ve=RegExp(`>|${Et}(?:([^\\s"'>=/]+)(${Et}*=${Et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vi=/'/g,gi=/"/g,Wi=/^(?:script|style|textarea|title)$/i,Bs=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),v=Bs(1),re=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),yi=new WeakMap,ye=Ee.createTreeWalker(Ee,129);function Ki(s,t){if(!ei(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return _i!==void 0?_i.createHTML(t):t}const Us=(s,t)=>{const e=s.length-1,i=[];let o,r=t===2?"<svg>":t===3?"<math>":"",n=Ge;for(let a=0;a<e;a++){const c=s[a];let p,_,m=-1,h=0;for(;h<c.length&&(n.lastIndex=h,_=n.exec(c),_!==null);)h=n.lastIndex,n===Ge?_[1]==="!--"?n=mi:_[1]!==void 0?n=bi:_[2]!==void 0?(Wi.test(_[2])&&(o=RegExp("</"+_[2],"g")),n=ve):_[3]!==void 0&&(n=ve):n===ve?_[0]===">"?(n=o??Ge,m=-1):_[1]===void 0?m=-2:(m=n.lastIndex-_[2].length,p=_[1],n=_[3]===void 0?ve:_[3]==='"'?gi:vi):n===gi||n===vi?n=ve:n===mi||n===bi?n=Ge:(n=ve,o=void 0);const u=n===ve&&s[a+1].startsWith("/>")?" ":"";r+=n===Ge?c+Ds:m>=0?(i.push(p),c.slice(0,m)+Gi+c.slice(m)+ue+u):c+ue+(m===-2?a:u)}return[Ki(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class st{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,n=0;const a=t.length-1,c=this.parts,[p,_]=Us(t,e);if(this.el=st.createElement(p,i),ye.currentNode=this.el.content,e===2||e===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=ye.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const m of o.getAttributeNames())if(m.endsWith(Gi)){const h=_[n++],u=o.getAttribute(m).split(ue),b=/([.?@])?(.*)/.exec(h);c.push({type:1,index:r,name:b[2],strings:u,ctor:b[1]==="."?qs:b[1]==="?"?Gs:b[1]==="@"?js:vt}),o.removeAttribute(m)}else m.startsWith(ue)&&(c.push({type:6,index:r}),o.removeAttribute(m));if(Wi.test(o.tagName)){const m=o.textContent.split(ue),h=m.length-1;if(h>0){o.textContent=ut?ut.emptyScript:"";for(let u=0;u<h;u++)o.append(m[u],tt()),ye.nextNode(),c.push({type:2,index:++r});o.append(m[h],tt())}}}else if(o.nodeType===8)if(o.data===ji)c.push({type:2,index:r});else{let m=-1;for(;(m=o.data.indexOf(ue,m+1))!==-1;)c.push({type:7,index:r}),m+=ue.length-1}r++}}static createElement(t,e){const i=Ee.createElement("template");return i.innerHTML=t,i}}function Re(s,t,e=s,i){var n,a;if(t===re)return t;let o=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const r=it(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),r===void 0?o=void 0:(o=new r(s),o._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=o:e._$Cl=o),o!==void 0&&(t=Re(s,o._$AS(s,t.values),o,i)),t}class Hs{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=((t==null?void 0:t.creationScope)??Ee).importNode(e,!0);ye.currentNode=o;let r=ye.nextNode(),n=0,a=0,c=i[0];for(;c!==void 0;){if(n===c.index){let p;c.type===2?p=new rt(r,r.nextSibling,this,t):c.type===1?p=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(p=new Ws(r,this,t)),this._$AV.push(p),c=i[++a]}n!==(c==null?void 0:c.index)&&(r=ye.nextNode(),n++)}return ye.currentNode=Ee,o}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class rt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Re(this,t,e),it(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==re&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ps(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==S&&it(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ee.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=st.createElement(Ki(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(e);else{const n=new Hs(o,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=yi.get(t.strings);return e===void 0&&yi.set(t.strings,e=new st(t)),e}k(t){ei(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new rt(this.O(tt()),this.O(tt()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const o=fi(t).nextSibling;fi(t).remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class vt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(t,e=this,i,o){const r=this.strings;let n=!1;if(r===void 0)t=Re(this,t,e,0),n=!it(t)||t!==this._$AH&&t!==re,n&&(this._$AH=t);else{const a=t;let c,p;for(t=r[0],c=0;c<r.length-1;c++)p=Re(this,a[i+c],e,c),p===re&&(p=this._$AH[c]),n||(n=!it(p)||p!==this._$AH[c]),p===S?t=S:t!==S&&(t+=(p??"")+r[c+1]),this._$AH[c]=p}n&&!o&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class qs extends vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}class Gs extends vt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}}class js extends vt{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=Re(this,t,e,0)??S)===re)return;const i=this._$AH,o=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==S&&(i===S||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ws{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Re(this,t)}}const wt=Ye.litHtmlPolyfillSupport;wt==null||wt(st,rt),(Ye.litHtmlVersions??(Ye.litHtmlVersions=[])).push("3.3.2");const Mt=(s,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let o=i._$litPart$;if(o===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=o=new rt(t.insertBefore(tt(),r),r,void 0,e??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=globalThis;let J=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return re}};var Vi;J._$litElement$=!0,J.finalized=!0,(Vi=Ce.litElementHydrateSupport)==null||Vi.call(Ce,{LitElement:J});const kt=Ce.litElementPolyfillSupport;kt==null||kt({LitElement:J});(Ce.litElementVersions??(Ce.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ks={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:Qt},Ys=(s=Ks,t,e)=>{const{kind:i,metadata:o}=e;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(e.name,s),i==="accessor"){const{name:n}=e;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,c,s,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,s,a),a}}}if(i==="setter"){const{name:n}=e;return function(a){const c=this[n];t.call(this,a),this.requestUpdate(n,c,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function A(s){return(t,e)=>typeof e=="object"?Ys(s,t,e):((i,o,r)=>{const n=o.hasOwnProperty(r);return o.constructor.createProperty(r,i),n?Object.getOwnPropertyDescriptor(o,r):void 0})(s,t,e)}const Yi=new WeakMap;function Zs(s,t){let e=t;for(;e;){if(Yi.get(e)===s)return!0;e=Object.getPrototypeOf(e)}return!1}function $(s){return t=>{if(Zs(s,t))return t;const e=s(t);return Yi.set(e,s),e}}const Js=s=>class extends s{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){this._requestedToBeDisabled===!1&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){this._requestedToBeDisabled===!0&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(t){this.__isUserSettingDisabled=!1,this.disabled=t,this.__isUserSettingDisabled=!0}requestUpdate(t,e,i){super.requestUpdate(t,e,i),t==="disabled"&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),this.disabled===!1&&this._requestedToBeDisabled===!0&&this.__internalSetDisabled(!0))}click(){this.disabled||super.click()}},nt=$(Js),Xs=s=>{var t,e;return e=class extends nt(s){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),this._requestedToBeDisabled===!1&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}__internalSetTabIndex(o){this.__isUserSettingTabIndex=!1,this.tabIndex=o,this.__isUserSettingTabIndex=!0}requestUpdate(o,r,n){super.requestUpdate(o,r,n),o==="disabled"&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),o==="tabIndex"&&(this.__isUserSettingTabIndex&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex),this.tabIndex!==-1&&this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(-1))}firstUpdated(o){super.firstUpdated(o),this.disabled&&this.__internalSetTabIndex(-1)}},j(e,"enabledWarnings",((t=Oe(e,e,"enabledWarnings"))==null?void 0:t.filter(o=>o!=="change-in-update"))||[]),e},Qs=$(Xs);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eo=s=>s===null||typeof s!="object"&&typeof s!="function",to=(s,t)=>(s==null?void 0:s._$litType$)!==void 0,io=s=>s.strings===void 0;function xi(s,t){let e=!1;Array.from(s.childNodes).forEach(i=>{const o=i.hasAttribute&&i.hasAttribute("slot");if(i.nodeType===Node.COMMENT_NODE&&!e&&(e=i.textContent.includes("_start_slot_")),e){i.textContent.includes("_end_slot_")&&(e=!1);return}o||t.appendChild(i)})}function so(s){return s instanceof Node?"node":to(s)?"template-result":!Array.isArray(s)&&typeof s=="object"&&"template"in s?"slot-rerender-object":null}const oo=s=>class extends s{get slots(){return{}}constructor(){super(),this.__renderMetaPerSlot=new Map,this.__slotsThatNeedRerender=new Set,this.__slotsProvidedByUserOnFirstConnected=new Set,this.__privateSlots=new Set}connectedCallback(){super.connectedCallback(),this._connectSlotMixin()}__rerenderSlot(e){var o;const i=this.slots[e]();this.__renderTemplateInScopedContext({renderAsDirectHostChild:i.renderAsDirectHostChild,template:i.template,slotName:e}),(o=i.afterRender)==null||o.call(i)}update(e){super.update(e);for(const i of this.__slotsThatNeedRerender)this.__rerenderSlot(i)}__renderTemplateInScopedContext({template:e,slotName:i,renderAsDirectHostChild:o}){if(!this.__renderMetaPerSlot.has(i)){const h=!!ShadowRoot.prototype.createElement;!!this.shadowRoot||console.error("[SlotMixin] No shadowRoot was found");const f=(h?this.shadowRoot:document).createElement("div"),x=document.createComment(`_start_slot_${i}_`),N=document.createComment(`_end_slot_${i}_`);f.appendChild(x),f.appendChild(N);const{creationScope:L,host:z}=this.renderOptions;if(Mt(e,f,{renderBefore:N,creationScope:L,host:z}),o){const T=Array.from(f.childNodes);this.__appendNodes({nodes:T,renderParent:this,slotName:i})}else f.slot=i,this.appendChild(f);this.__renderMetaPerSlot.set(i,{renderTargetThatRespectsShadowRootScoping:f,renderBefore:N});return}const{renderBefore:n,renderTargetThatRespectsShadowRootScoping:a}=this.__renderMetaPerSlot.get(i),c=o?this:a,{creationScope:p,host:_}=this.renderOptions;Mt(e,c,{creationScope:p,host:_,renderBefore:n}),o&&n.previousElementSibling&&!n.previousElementSibling.slot&&(n.previousElementSibling.slot=i)}__appendNodes({nodes:e,renderParent:i=this,slotName:o}){for(const r of e)r instanceof Element&&o&&o!==""&&r.setAttribute("slot",o),i.appendChild(r)}__initSlots(e){for(const i of e){if(this.__slotsProvidedByUserOnFirstConnected.has(i))continue;const o=this.slots[i]();if(o===void 0)continue;switch(this.__isConnectedSlotMixin||this.__privateSlots.add(i),so(o)){case"template-result":this.__renderTemplateInScopedContext({template:o,renderAsDirectHostChild:!0,slotName:i});break;case"node":this.__appendNodes({nodes:[o],renderParent:this,slotName:i});break;case"slot-rerender-object":this.__slotsThatNeedRerender.add(i),o.firstRenderOnConnected&&this.__rerenderSlot(i);break;default:throw new Error(`Slot "${i}" configured inside "get slots()" (in prototype) of ${this.constructor.name} may return these types: TemplateResult | Node | {template:TemplateResult, afterRender?:function} | undefined.
              You provided: ${o}`)}}}_connectSlotMixin(){if(this.__isConnectedSlotMixin)return;const e=Object.keys(this.slots);for(const i of e)(i===""?Array.from(this.children).find(r=>!r.hasAttribute("slot")):Array.from(this.children).find(r=>r.slot===i))&&this.__slotsProvidedByUserOnFirstConnected.add(i);this.__initSlots(e),this.__isConnectedSlotMixin=!0}_isPrivateSlot(e){return this.__privateSlots.has(e)}},Be=$(oo);function Nt(s="google-chrome"){var c,p;const t=globalThis.navigator,e=!!t.userAgentData&&t.userAgentData.brands.some(_=>_.brand==="Chromium");if(s==="chromium")return e;const i=globalThis.navigator,o=i==null?void 0:i.vendor,r=typeof globalThis.opr<"u",n=((c=globalThis.userAgent)==null?void 0:c.indexOf("Edge"))>-1,a=(p=globalThis.userAgent)==null?void 0:p.match("CriOS");if(s==="ios")return a;if(s==="google-chrome")return e!==null&&typeof e<"u"&&o==="Google Inc."&&r===!1&&n===!1}var Li,Mi,Ii,zi,Ri,$i,Di,Pi,Bi,Ui;const pt={isChrome:Nt(),isIOSChrome:Nt("ios"),isChromium:Nt("chromium"),isFirefox:((Li=globalThis.navigator)==null?void 0:Li.userAgent.toLowerCase().indexOf("firefox"))>-1,isMac:((Ii=(Mi=globalThis.navigator)==null?void 0:Mi.appVersion)==null?void 0:Ii.indexOf("Mac"))!==-1,isIOS:/iPhone|iPad|iPod/i.test((zi=globalThis.navigator)==null?void 0:zi.userAgent),isMacSafari:((Ri=globalThis.navigator)==null?void 0:Ri.vendor)&&(($i=globalThis.navigator)==null?void 0:$i.vendor.indexOf("Apple"))>-1&&((Di=globalThis.navigator)==null?void 0:Di.userAgent)&&((Pi=globalThis.navigator)==null?void 0:Pi.userAgent.indexOf("CriOS"))===-1&&((Bi=globalThis.navigator)==null?void 0:Bi.userAgent.indexOf("FxiOS"))===-1&&((Ui=globalThis.navigator)==null?void 0:Ui.appVersion.indexOf("Mac"))!==-1};function Zi(s=""){return`${s.length>0?`${s}-`:""}${Math.random().toString(36).substr(2,10)}`}const At=s=>s.key===" "||s.key==="Enter",Ci=s=>s.key===" ";class ro extends Qs(J){static get properties(){return{active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return v` <div class="button-content"><slot></slot></div> `}static get styles(){return[U`
        :host {
          position: relative;
          display: inline-flex;
          box-sizing: border-box;
          vertical-align: middle;
          line-height: 24px;
          background-color: #eee; /* minimal styling to make it recognizable as btn */
          padding: 8px; /* padding to fix with min-height */
          outline: none; /* focus style handled below */
          cursor: default; /* we should always see the default arrow, never a caret */
          /* TODO: remove, native button also allows selection. Could be usability concern... */
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        :host::before {
          content: '';

          /* center vertically and horizontally */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          /* Minimum click area to meet [WCAG Success Criterion 2.5.5 Target Size (Enhanced)](https://www.w3.org/TR/WCAG22/#target-size-enhanced) */
          min-height: 44px;
          min-width: 44px;
          width: 100%;
          height: 100%;
        }

        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Show focus styles on keyboard focus. */
        :host(:focus:not([disabled])),
        :host(:focus-visible) {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        /* Hide focus styles if they're not needed, for example,
        when an element receives focus via the mouse. */
        :host(:focus:not(:focus-visible)) {
          outline: 0;
        }

        :host(:hover) {
          /* if you extend, please overwrite */
          background: #f4f6f7;
        }

        :host(:active), /* keep native :active to render quickly where possible */
        :host([active]) /* use custom [active] to fix IE11 */ {
          /* if you extend, please overwrite */
          background: gray;
        }

        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          pointer-events: none;
          /* if you extend, please overwrite */
          background: lightgray;
          color: #adadad;
          fill: #adadad;
        }
      `]}constructor(){super(),this.type="button",this.active=!1,this.__setupEvents()}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","button")}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.getAttribute("aria-disabled")!==null&&this.removeAttribute("aria-disabled"))}__setupEvents(){this.addEventListener("mousedown",this.__mousedownHandler),this.addEventListener("keydown",this.__keydownHandler),this.addEventListener("keyup",this.__keyupHandler)}__mousedownHandler(){this.active=!0;const t=()=>{this.active=!1,document.removeEventListener("mouseup",t),this.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t),this.addEventListener("mouseup",t)}__keydownHandler(t){if(this.active||!At(t)){Ci(t)&&t.preventDefault();return}Ci(t)&&t.preventDefault(),this.active=!0;const e=i=>{At(i)&&(this.active=!1,document.removeEventListener("keyup",e,!0))};document.addEventListener("keyup",e,!0)}__keyupHandler(t){if(At(t)){if(t.target&&t.target!==this)return;this.click()}}}class no extends ro{constructor(){super(),this.type="reset",this.__setupDelegationInConstructor(),this.__submitAndResetHelperButton=document.createElement("button"),this.__preventEventLeakage=this.__preventEventLeakage.bind(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setupSubmitAndResetHelperOnConnected()})}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubmitAndResetHelperOnDisconnected()}__preventEventLeakage(t){t.target===this.__submitAndResetHelperButton&&t.stopImmediatePropagation()}_setupSubmitAndResetHelperOnConnected(){this.appendChild(this.__submitAndResetHelperButton),this._form=this.__submitAndResetHelperButton.form,this.removeChild(this.__submitAndResetHelperButton),this._form&&this._form.addEventListener("click",this.__preventEventLeakage)}_teardownSubmitAndResetHelperOnDisconnected(){this._form&&this._form.removeEventListener("click",this.__preventEventLeakage)}async __clickDelegationHandler(t){this._form||await this.updateComplete,(this.type==="submit"||this.type==="reset")&&t.target===this&&this._form&&(this.__submitAndResetHelperButton.type=this.type,this._form.appendChild(this.__submitAndResetHelperButton),this.__submitAndResetHelperButton.click(),this._form.removeChild(this.__submitAndResetHelperButton))}__setupDelegationInConstructor(){this.addEventListener("click",this.__clickDelegationHandler,!0)}}const ae=new WeakMap;function ao(){const s=document.createElement("button");return s.tabIndex=-1,s.type="submit",s.setAttribute("aria-hidden","true"),s.style.cssText=`
    position: absolute;
    top: 0;
    left: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    height: 1px;
    width: 1px;
    padding: 0; /* reset default agent styles */
    border: 0; /* reset default agent styles */
  `,s}class Ji extends no{get _nativeButtonNode(){var t;return((t=ae.get(this._form))==null?void 0:t.helper)||null}constructor(){super(),this.type="submit",this.__implicitSubmitHelperButton=null}_setupSubmitAndResetHelperOnConnected(){var i,o;if(super._setupSubmitAndResetHelperOnConnected(),!this._form||this.type!=="submit")return;const t=this._form;if(!ae.get(this._form)){const r=ao(),n=document.createElement("div");n.appendChild(r),ae.set(this._form,{lionButtons:new Set,helper:r,observer:new MutationObserver(()=>{t.appendChild(n)})}),t.appendChild(n),(i=ae.get(t))==null||i.observer.observe(n,{childList:!0})}(o=ae.get(t))==null||o.lionButtons.add(this)}_teardownSubmitAndResetHelperOnDisconnected(){var t;if(super._teardownSubmitAndResetHelperOnDisconnected(),this._form){const e=ae.get(this._form);e&&(e.lionButtons.delete(this),e.lionButtons.size||(this._form.contains(e.helper)&&e.helper.remove(),(t=ae.get(this._form))==null||t.observer.disconnect(),ae.delete(this._form)))}}}const lo=U`
  /* ── Base ── */
  :host {
    display: inline-flex;
    vertical-align: middle;
    box-sizing: border-box;
    min-block-size: var(--co-control-height-md);
    padding: 0;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-md);
    font-weight: var(--co-font-weight-medium);
    line-height: var(--co-font-line-height-tight);
    border-radius: var(--co-control-radius);
    border: none;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  /* Padding is on the inner element so external resets (e.g. * { padding: 0 })
     cannot override it — light DOM styles always beat :host rules. */
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-2) var(--co-space-4);
    /* Reset UA anchor defaults when rendered as a link (href variant) */
    color: inherit;
    text-decoration: none;
  }

  /* ── Sizes ── */
  :host([size='sm']) {
    font-size: var(--co-font-size-sm);
    min-block-size: var(--co-control-height-sm);
  }
  :host([size='sm']) .button {
    padding: var(--co-space-1) var(--co-space-3);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-lg);
    min-block-size: var(--co-control-height-lg);
  }
  :host([size='lg']) .button {
    padding: var(--co-space-3) var(--co-space-6);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-xl);
    min-block-size: var(--co-control-height-xl);
  }
  :host([size='xl']) .button {
    padding: var(--co-space-4) var(--co-space-8);
  }

  /* ── Primary variant (default) ── */
  :host,
  :host([variant='primary']) {
    background: var(--co-color-interactive-primary-default);
    color: var(--co-color-text-on-primary);
  }
  :host([variant='primary']:hover),
  :host(:not([variant]):hover) {
    background: var(--co-color-interactive-primary-hover);
  }
  :host([variant='primary']:active),
  :host(:not([variant]):active) {
    background: var(--co-color-interactive-primary-active);
  }

  /* ── Secondary variant ── */
  :host([variant='secondary']) {
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    box-shadow: inset 0 0 0 var(--co-shape-border-width-thin) var(--co-color-border-default);
  }
  :host([variant='secondary']:hover) {
    background: var(--co-color-surface-raised);
    box-shadow: inset 0 0 0 var(--co-shape-border-width-thin) var(--co-color-border-strong);
  }
  :host([variant='secondary']:active) {
    background: var(--co-color-surface-sunken);
  }

  /* ── Danger variant ── */
  :host([variant='danger']) {
    background: var(--co-color-interactive-danger-default);
    color: var(--co-color-text-on-primary);
  }
  :host([variant='danger']:hover) {
    background: var(--co-color-interactive-danger-hover);
  }
  :host([variant='danger']:active) {
    background: var(--co-color-interactive-danger-active);
  }

  /* ── Success variant ── */
  :host([variant='success']) {
    background: var(--co-color-interactive-success-default);
    color: var(--co-color-text-on-primary);
  }
  :host([variant='success']:hover) {
    background: var(--co-color-interactive-success-hover);
  }
  :host([variant='success']:active) {
    background: var(--co-color-interactive-success-active);
  }

  /* ── Ghost variant ── */
  :host([variant='ghost']) {
    background: transparent;
    color: var(--co-color-text-default);
  }
  :host([variant='ghost']:hover) {
    color: var(--co-color-text-secondary);
  }
  :host([variant='ghost']:active) {
    color: var(--co-color-text-default);
  }

  /* ── Focus ── */
  :host(:focus-visible) {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: var(--co-focus-ring-offset);
  }

  /* ── Disabled ── */
  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    cursor: not-allowed;
    pointer-events: none;
  }

  /* ── Loading ── */
  :host([loading]) {
    cursor: wait;
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi={CHILD:2},Qi=s=>(...t)=>({_$litDirective$:s,values:t});let es=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let It=class extends es{constructor(t){if(super(t),this.it=S,t.type!==Xi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S||t==null)return this._t=void 0,this.it=t;if(t===re)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};It.directiveName="unsafeHTML",It.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let zt=class extends It{};zt.directiveName="unsafeSVG",zt.resultType=2;const co=Qi(zt),ho=U`
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
    width: var(--co-sizing-icon-md, 24px);
    height: var(--co-sizing-icon-md, 24px);
  }

  :host([size='xs']) {
    width: var(--co-sizing-icon-xs, 16px);
    height: var(--co-sizing-icon-xs, 16px);
  }

  :host([size='sm']) {
    width: var(--co-sizing-icon-sm, 20px);
    height: var(--co-sizing-icon-sm, 20px);
  }

  :host([size='lg']) {
    width: var(--co-sizing-icon-lg, 32px);
    height: var(--co-sizing-icon-lg, 32px);
  }

  :host([size='xl']) {
    width: var(--co-sizing-icon-xl, 48px);
    height: var(--co-sizing-icon-xl, 48px);
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
    animation: co-bell-ring 400ms var(--co-motion-easing-in-out, ease-in-out) 2;
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
    animation: co-check-in 300ms var(--co-motion-easing-out, ease-out) forwards;
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
`;var Ue=function(s,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};let _e=class extends J{constructor(){super(...arguments),this.name="",this.size="md",this.fill=!1,this.animated=!1}async replay(){if(!this.animated){this.animated=!0,await this.updateComplete;return}this.animated=!1,await this.updateComplete,this.getBoundingClientRect(),this.animated=!0,await this.updateComplete}render(){const t=this.animated&&As(this.name,"rounded",this.fill)||Ss(this.name,"rounded",this.fill);if(!t)return S;const e=!this.label,i=Ts.has(this.name)||Os.has(this.name)?"0 0 24 24":"0 -960 960 960";return v`
      <svg
        part="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox=${i}
        fill="currentColor"
        role=${e?"presentation":"img"}
        aria-hidden=${e?"true":"false"}
        aria-label=${this.label??S}
      >
        ${co(t)}
      </svg>
    `}};_e.styles=[ho];Ue([A({reflect:!0})],_e.prototype,"name",void 0);Ue([A({reflect:!0})],_e.prototype,"size",void 0);Ue([A({type:Boolean,reflect:!0})],_e.prototype,"fill",void 0);Ue([A({type:Boolean,reflect:!0})],_e.prototype,"animated",void 0);Ue([A()],_e.prototype,"label",void 0);_e=Ue([ne("co-icon")],_e);var He=function(s,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};let we=class extends Ji{constructor(){super(...arguments),this.variant="primary",this.size="md",this.loading=!1,this._handleFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleClick=()=>{this.disabled||!this.href||(this.target&&this.target!=="_self"?window.open(this.href,this.target,this.target==="_blank"?"noopener,noreferrer":""):window.location.href=this.href)}}static get styles(){return[...super.styles,lo]}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur),this.removeEventListener("click",this._handleClick)}render(){return this.href?v`
        <a
          part="base"
          class="button"
          href=${this.href}
          target=${this.target??"_self"}
          rel=${this.target==="_blank"?"noopener noreferrer":""}
          tabindex=${this.disabled?-1:0}
          aria-disabled=${this.disabled}
        >
          <slot name="prefix" part="prefix"></slot>
          <slot part="label"></slot>
          <slot name="suffix" part="suffix"></slot>
        </a>
      `:v`
      <div part="base" class="button">
        <slot name="prefix" part="prefix"></slot>
        <slot part="label"></slot>
        <slot name="suffix" part="suffix"></slot>
        ${this.loading?v`<co-icon
              part="spinner"
              name="progress-activity"
              size=${{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]}
              animated
              aria-hidden="true"
            ></co-icon>`:""}
      </div>
    `}};He([A({reflect:!0})],we.prototype,"variant",void 0);He([A({reflect:!0})],we.prototype,"size",void 0);He([A({type:Boolean,reflect:!0})],we.prototype,"loading",void 0);He([A({reflect:!0})],we.prototype,"href",void 0);He([A({reflect:!0})],we.prototype,"target",void 0);we=He([ne("co-button")],we);const uo=U`
  /* ── Base ── */
  :host {
    display: inline-flex;
    vertical-align: middle;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    min-block-size: var(--co-control-height-md);
    min-inline-size: var(--co-control-height-md);
    padding: 0;
    font-family: var(--co-font-family-sans);
    font-weight: var(--co-font-weight-medium);
    line-height: var(--co-font-line-height-tight);
    border-radius: var(--co-control-radius);
    border: none;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  .button-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--co-space-1);
    padding: var(--co-space-2);
    color: inherit;
  }

  .button-icon.has-label {
    padding: var(--co-space-1) var(--co-space-3);
  }

  .label {
    font-size: var(--co-font-size-xs);
    line-height: var(--co-font-line-height-tight);
    white-space: nowrap;
  }

  /* ── Sizes ── */
  :host([size='sm']) {
    min-block-size: var(--co-control-height-sm);
    min-inline-size: var(--co-control-height-sm);
  }
  :host([size='sm']) .button-icon {
    padding: var(--co-space-1);
  }
  :host([size='sm']) .button-icon.has-label {
    padding: var(--co-space-1) var(--co-space-2);
  }

  :host([size='lg']) {
    min-block-size: var(--co-control-height-lg);
    min-inline-size: var(--co-control-height-lg);
  }
  :host([size='lg']) .button-icon {
    padding: var(--co-space-3);
  }
  :host([size='lg']) .button-icon.has-label {
    padding: var(--co-space-2) var(--co-space-4);
  }

  :host([size='xl']) {
    min-block-size: var(--co-control-height-xl);
    min-inline-size: var(--co-control-height-xl);
  }
  :host([size='xl']) .button-icon {
    padding: var(--co-space-4);
  }
  :host([size='xl']) .button-icon.has-label {
    padding: var(--co-space-3) var(--co-space-6);
  }

  /* ── Primary variant (default) ── */
  :host,
  :host([variant='primary']) {
    background: var(--co-color-interactive-primary-default);
    color: var(--co-color-text-on-primary);
  }
  :host([variant='primary']:hover),
  :host(:not([variant]):hover) {
    background: var(--co-color-interactive-primary-hover);
  }
  :host([variant='primary']:active),
  :host(:not([variant]):active) {
    background: var(--co-color-interactive-primary-active);
  }

  /* ── Secondary variant ── */
  :host([variant='secondary']) {
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    box-shadow: inset 0 0 0 var(--co-shape-border-width-thin) var(--co-color-border-default);
  }
  :host([variant='secondary']:hover) {
    background: var(--co-color-surface-raised);
    box-shadow: inset 0 0 0 var(--co-shape-border-width-thin) var(--co-color-border-strong);
  }
  :host([variant='secondary']:active) {
    background: var(--co-color-surface-sunken);
  }

  /* ── Danger variant ── */
  :host([variant='danger']) {
    background: var(--co-color-interactive-danger-default);
    color: var(--co-color-text-on-primary);
  }
  :host([variant='danger']:hover) {
    background: var(--co-color-interactive-danger-hover);
  }
  :host([variant='danger']:active) {
    background: var(--co-color-interactive-danger-active);
  }

  /* ── Success variant ── */
  :host([variant='success']) {
    background: var(--co-color-interactive-success-default);
    color: var(--co-color-text-on-primary);
  }
  :host([variant='success']:hover) {
    background: var(--co-color-interactive-success-hover);
  }
  :host([variant='success']:active) {
    background: var(--co-color-interactive-success-active);
  }

  /* ── Ghost variant ── */
  :host([variant='ghost']) {
    background: transparent;
    color: var(--co-color-text-default);
  }
  :host([variant='ghost']:hover) {
    color: var(--co-color-text-secondary);
  }
  :host([variant='ghost']:active) {
    color: var(--co-color-text-default);
  }

  /* ── Circle ── */
  :host([circle]) {
    border-radius: var(--co-shape-radius-full);
  }

  /* ── Focus ── */
  :host(:focus-visible) {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: var(--co-focus-ring-offset);
  }

  /* ── Disabled ── */
  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    cursor: not-allowed;
    pointer-events: none;
  }
`;var Ae=function(s,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};const po={sm:"xs",md:"sm",lg:"md",xl:"lg"};let me=class extends Ji{constructor(){super(...arguments),this.name="",this.variant="primary",this.size="md",this.labelPosition="bottom",this.circle=!1,this._handleFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,uo]}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}render(){const t=po[this.size],e=!!this.label&&!this.circle,i=e?v`<span part="label" class="label">${this.label}</span>`:S;return v`
      <div part="base" class="button-icon ${e?"has-label":""}">
        ${this.labelPosition==="top"?i:S}
        <co-icon part="icon" name=${this.name} size=${t} aria-hidden="true"></co-icon>
        ${this.labelPosition==="bottom"?i:S}
      </div>
    `}};Ae([A({reflect:!0})],me.prototype,"name",void 0);Ae([A({reflect:!0})],me.prototype,"variant",void 0);Ae([A({reflect:!0})],me.prototype,"size",void 0);Ae([A()],me.prototype,"label",void 0);Ae([A({reflect:!0,attribute:"label-position"})],me.prototype,"labelPosition",void 0);Ae([A({type:Boolean,reflect:!0})],me.prototype,"circle",void 0);me=Ae([ne("co-button-icon")],me);const Rt=window,Ei=new WeakMap;function fo(s){Rt.applyFocusVisiblePolyfill&&!Ei.has(s)&&(Rt.applyFocusVisiblePolyfill(s),Ei.set(s,void 0))}const _o=s=>class extends s{static get properties(){return{focused:{type:Boolean,reflect:!0},focusedVisible:{type:Boolean,reflect:!0,attribute:"focused-visible"},autofocus:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1,this.focusedVisible=!1,this.autofocus=!1}firstUpdated(e){super.firstUpdated(e),this.__registerEventsForFocusMixin(),this.__syncAutofocusToFocusableElement()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForFocusMixin()}updated(e){super.updated(e),e.has("autofocus")&&this.__syncAutofocusToFocusableElement()}__syncAutofocusToFocusableElement(){this._focusableNode&&(this.hasAttribute("autofocus")?this._focusableNode.setAttribute("autofocus",""):this._focusableNode.removeAttribute("autofocus"))}focus(){var e;(e=this._focusableNode)==null||e.focus()}blur(){var e;(e=this._focusableNode)==null||e.blur()}get _focusableNode(){return this._inputNode||document.createElement("input")}__onFocus(){if(this.focused=!0,typeof Rt.applyFocusVisiblePolyfill=="function")this.focusedVisible=this._focusableNode.hasAttribute("data-focus-visible-added");else try{this.focusedVisible=this._focusableNode.matches(":focus-visible")}catch{this.focusedVisible=!1}}__onBlur(){this.focused=!1,this.focusedVisible=!1}__registerEventsForFocusMixin(){fo(this.getRootNode()),this.__redispatchFocus=e=>{e.stopPropagation(),this.dispatchEvent(new Event("focus"))},this._focusableNode.addEventListener("focus",this.__redispatchFocus),this.__redispatchBlur=e=>{e.stopPropagation(),this.dispatchEvent(new Event("blur"))},this._focusableNode.addEventListener("blur",this.__redispatchBlur),this.__redispatchFocusin=e=>{e.stopPropagation(),this.__onFocus(),this.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusin",this.__redispatchFocusin),this.__redispatchFocusout=e=>{e.stopPropagation(),this.__onBlur(),this.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusout",this.__redispatchFocusout)}__teardownEventsForFocusMixin(){var e,i,o,r;this._focusableNode&&((e=this._focusableNode)==null||e.removeEventListener("focus",this.__redispatchFocus),(i=this._focusableNode)==null||i.removeEventListener("blur",this.__redispatchBlur),(o=this._focusableNode)==null||o.removeEventListener("focusin",this.__redispatchFocusin),(r=this._focusableNode)==null||r.removeEventListener("focusout",this.__redispatchFocusout))}},ti=$(_o);function ts(s,t){return t={exports:{}},s(t,t.exports),t.exports}var ge="long",le="short",St="narrow",V="numeric",de="2-digit",ce={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:V,day:V,year:de},medium:{month:le,day:V,year:V},long:{month:ge,day:V,year:V},full:{month:ge,day:V,year:V,weekday:ge},default:{month:le,day:V,year:V}},time:{short:{hour:V,minute:V},medium:{hour:V,minute:V,second:V},long:{hour:V,minute:V,second:V,timeZoneName:le},full:{hour:V,minute:V,second:V,timeZoneName:le},default:{hour:V,minute:V,second:V}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(s){if(s){var t={},e=s.match(/\b[A-Z]{3}\b/i),i=s.replace(/[^¤]/g,"").length;if(!i&&e&&(i=1),i?(t.style="currency",t.currencyDisplay=i===1?"symbol":i===2?"code":"name",t.currency=e?e[0].toUpperCase():"USD"):s.indexOf("%")>=0&&(t.style="percent"),!/[@#0]/.test(s))return t.style?t:void 0;if(t.useGrouping=s.indexOf(",")>=0,/E\+?[@#0]+/i.test(s)||s.indexOf("@")>=0){var o=s.replace(/E\+?[@#0]+|[^@#0]/gi,"");t.minimumSignificantDigits=Math.min(Math.max(o.replace(/[^@0]/g,"").length,1),21),t.maximumSignificantDigits=Math.min(Math.max(o.length,1),21)}else{for(var r=s.replace(/[^#0.]/g,"").split("."),n=r[0],a=n.length-1;n[a]==="0";)--a;t.minimumIntegerDigits=Math.min(Math.max(n.length-1-a,1),21);var c=r[1]||"";for(a=0;c[a]==="0";)++a;for(t.minimumFractionDigits=Math.min(Math.max(a,0),20);c[a]==="#";)++a;t.maximumFractionDigits=Math.min(Math.max(a,0),20)}return t}},parseDatePattern:function(s){if(s){for(var t={},e=0;e<s.length;){for(var i=s[e],o=1;s[++e]===i;)++o;switch(i){case"G":t.era=o===5?St:o===4?ge:le;break;case"y":case"Y":t.year=o===2?de:V;break;case"M":case"L":o=Math.min(Math.max(o-1,0),4),t.month=[V,de,le,ge,St][o];break;case"E":case"e":case"c":t.weekday=o===5?St:o===4?ge:le;break;case"d":case"D":t.day=o===2?de:V;break;case"h":case"K":t.hour12=!0,t.hour=o===2?de:V;break;case"H":case"k":t.hour12=!1,t.hour=o===2?de:V;break;case"m":t.minute=o===2?de:V;break;case"s":case"S":t.second=o===2?de:V;break;case"z":case"Z":case"v":case"V":t.timeZoneName=o===1?le:ge;break}}return Object.keys(t).length?t:void 0}}},mo=function(t,e){if(typeof t=="string"&&e[t])return t;for(var i=[].concat(t||[]),o=0,r=i.length;o<r;++o)for(var n=i[o].split("-");n.length;){var a=n.join("-");if(e[a])return a;n.pop()}},Fe="zero",k="one",B="two",I="few",D="many",g="other",d=[function(s){var t=+s;return t===1?k:g},function(s){var t=+s;return 0<=t&&t<=1?k:g},function(s){var t=Math.floor(Math.abs(+s)),e=+s;return t===0||e===1?k:g},function(s){var t=+s;return t===0?Fe:t===1?k:t===2?B:3<=t%100&&t%100<=10?I:11<=t%100&&t%100<=99?D:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length;return t===1&&e===0?k:g},function(s){var t=+s;return t%10===1&&t%100!==11?k:2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?I:t%10===0||5<=t%10&&t%10<=9||11<=t%100&&t%100<=14?D:g},function(s){var t=+s;return t%10===1&&t%100!==11&&t%100!==71&&t%100!==91?k:t%10===2&&t%100!==12&&t%100!==72&&t%100!==92?B:(3<=t%10&&t%10<=4||t%10===9)&&(t%100<10||19<t%100)&&(t%100<70||79<t%100)&&(t%100<90||99<t%100)?I:t!==0&&t%1e6===0?D:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length,i=+(s+".").split(".")[1];return e===0&&t%10===1&&t%100!==11||i%10===1&&i%100!==11?k:e===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)||2<=i%10&&i%10<=4&&(i%100<12||14<i%100)?I:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length;return t===1&&e===0?k:2<=t&&t<=4&&e===0?I:e!==0?D:g},function(s){var t=+s;return t===0?Fe:t===1?k:t===2?B:t===3?I:t===6?D:g},function(s){var t=Math.floor(Math.abs(+s)),e=+(""+s).replace(/^[^.]*.?|0+$/g,""),i=+s;return i===1||e!==0&&(t===0||t===1)?k:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length,i=+(s+".").split(".")[1];return e===0&&t%100===1||i%100===1?k:e===0&&t%100===2||i%100===2?B:e===0&&3<=t%100&&t%100<=4||3<=i%100&&i%100<=4?I:g},function(s){var t=Math.floor(Math.abs(+s));return t===0||t===1?k:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length,i=+(s+".").split(".")[1];return e===0&&(t===1||t===2||t===3)||e===0&&t%10!==4&&t%10!==6&&t%10!==9||e!==0&&i%10!==4&&i%10!==6&&i%10!==9?k:g},function(s){var t=+s;return t===1?k:t===2?B:3<=t&&t<=6?I:7<=t&&t<=10?D:g},function(s){var t=+s;return t===1||t===11?k:t===2||t===12?B:3<=t&&t<=10||13<=t&&t<=19?I:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length;return e===0&&t%10===1?k:e===0&&t%10===2?B:e===0&&(t%100===0||t%100===20||t%100===40||t%100===60||t%100===80)?I:e!==0?D:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length,i=+s;return t===1&&e===0?k:t===2&&e===0?B:e===0&&(i<0||10<i)&&i%10===0?D:g},function(s){var t=Math.floor(Math.abs(+s)),e=+(""+s).replace(/^[^.]*.?|0+$/g,"");return e===0&&t%10===1&&t%100!==11||e!==0?k:g},function(s){var t=+s;return t===1?k:t===2?B:g},function(s){var t=+s;return t===0?Fe:t===1?k:g},function(s){var t=Math.floor(Math.abs(+s)),e=+s;return e===0?Fe:(t===0||t===1)&&e!==0?k:g},function(s){var t=+(s+".").split(".")[1],e=+s;return e%10===1&&(e%100<11||19<e%100)?k:2<=e%10&&e%10<=9&&(e%100<11||19<e%100)?I:t!==0?D:g},function(s){var t=(s+".").split(".")[1].length,e=+(s+".").split(".")[1],i=+s;return i%10===0||11<=i%100&&i%100<=19||t===2&&11<=e%100&&e%100<=19?Fe:i%10===1&&i%100!==11||t===2&&e%10===1&&e%100!==11||t!==2&&e%10===1?k:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length,i=+(s+".").split(".")[1];return e===0&&t%10===1&&t%100!==11||i%10===1&&i%100!==11?k:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length,i=+s;return t===1&&e===0?k:e!==0||i===0||i!==1&&1<=i%100&&i%100<=19?I:g},function(s){var t=+s;return t===1?k:t===0||2<=t%100&&t%100<=10?I:11<=t%100&&t%100<=19?D:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length;return t===1&&e===0?k:e===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?I:e===0&&t!==1&&0<=t%10&&t%10<=1||e===0&&5<=t%10&&t%10<=9||e===0&&12<=t%100&&t%100<=14?D:g},function(s){var t=Math.floor(Math.abs(+s));return 0<=t&&t<=1?k:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length;return e===0&&t%10===1&&t%100!==11?k:e===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?I:e===0&&t%10===0||e===0&&5<=t%10&&t%10<=9||e===0&&11<=t%100&&t%100<=14?D:g},function(s){var t=Math.floor(Math.abs(+s)),e=+s;return t===0||e===1?k:2<=e&&e<=10?I:g},function(s){var t=Math.floor(Math.abs(+s)),e=+(s+".").split(".")[1],i=+s;return i===0||i===1||t===0&&e===1?k:g},function(s){var t=Math.floor(Math.abs(+s)),e=(s+".").split(".")[1].length;return e===0&&t%100===1?k:e===0&&t%100===2?B:e===0&&3<=t%100&&t%100<=4||e!==0?I:g},function(s){var t=+s;return 0<=t&&t<=1||11<=t&&t<=99?k:g},function(s){var t=+s;return t===1||t===5||t===7||t===8||t===9||t===10?k:t===2||t===3?B:t===4?I:t===6?D:g},function(s){var t=Math.floor(Math.abs(+s));return t%10===1||t%10===2||t%10===5||t%10===7||t%10===8||t%100===20||t%100===50||t%100===70||t%100===80?k:t%10===3||t%10===4||t%1e3===100||t%1e3===200||t%1e3===300||t%1e3===400||t%1e3===500||t%1e3===600||t%1e3===700||t%1e3===800||t%1e3===900?I:t===0||t%10===6||t%100===40||t%100===60||t%100===90?D:g},function(s){var t=+s;return(t%10===2||t%10===3)&&t%100!==12&&t%100!==13?I:g},function(s){var t=+s;return t===1||t===3?k:t===2?B:t===4?I:g},function(s){var t=+s;return t===0||t===7||t===8||t===9?Fe:t===1?k:t===2?B:t===3||t===4?I:t===5||t===6?D:g},function(s){var t=+s;return t%10===1&&t%100!==11?k:t%10===2&&t%100!==12?B:t%10===3&&t%100!==13?I:g},function(s){var t=+s;return t===1||t===11?k:t===2||t===12?B:t===3||t===13?I:g},function(s){var t=+s;return t===1?k:t===2||t===3?B:t===4?I:t===6?D:g},function(s){var t=+s;return t===1||t===5?k:g},function(s){var t=+s;return t===11||t===8||t===80||t===800?D:g},function(s){var t=Math.floor(Math.abs(+s));return t===1?k:t===0||2<=t%100&&t%100<=20||t%100===40||t%100===60||t%100===80?D:g},function(s){var t=+s;return t%10===6||t%10===9||t%10===0&&t!==0?D:g},function(s){var t=Math.floor(Math.abs(+s));return t%10===1&&t%100!==11?k:t%10===2&&t%100!==12?B:(t%10===7||t%10===8)&&t%100!==17&&t%100!==18?D:g},function(s){var t=+s;return t===1?k:t===2||t===3?B:t===4?I:g},function(s){var t=+s;return 1<=t&&t<=4?k:g},function(s){var t=+s;return t===1||t===5||7<=t&&t<=9?k:t===2||t===3?B:t===4?I:t===6?D:g},function(s){var t=+s;return t===1?k:t%10===4&&t%100!==14?D:g},function(s){var t=+s;return(t%10===1||t%10===2)&&t%100!==11&&t%100!==12?k:g},function(s){var t=+s;return t%10===6||t%10===9||t===10?I:g},function(s){var t=+s;return t%10===3&&t%100!==13?I:g}],$t={af:{cardinal:d[0]},ak:{cardinal:d[1]},am:{cardinal:d[2]},ar:{cardinal:d[3]},ars:{cardinal:d[3]},as:{cardinal:d[2],ordinal:d[34]},asa:{cardinal:d[0]},ast:{cardinal:d[4]},az:{cardinal:d[0],ordinal:d[35]},be:{cardinal:d[5],ordinal:d[36]},bem:{cardinal:d[0]},bez:{cardinal:d[0]},bg:{cardinal:d[0]},bh:{cardinal:d[1]},bn:{cardinal:d[2],ordinal:d[34]},br:{cardinal:d[6]},brx:{cardinal:d[0]},bs:{cardinal:d[7]},ca:{cardinal:d[4],ordinal:d[37]},ce:{cardinal:d[0]},cgg:{cardinal:d[0]},chr:{cardinal:d[0]},ckb:{cardinal:d[0]},cs:{cardinal:d[8]},cy:{cardinal:d[9],ordinal:d[38]},da:{cardinal:d[10]},de:{cardinal:d[4]},dsb:{cardinal:d[11]},dv:{cardinal:d[0]},ee:{cardinal:d[0]},el:{cardinal:d[0]},en:{cardinal:d[4],ordinal:d[39]},eo:{cardinal:d[0]},es:{cardinal:d[0]},et:{cardinal:d[4]},eu:{cardinal:d[0]},fa:{cardinal:d[2]},ff:{cardinal:d[12]},fi:{cardinal:d[4]},fil:{cardinal:d[13],ordinal:d[0]},fo:{cardinal:d[0]},fr:{cardinal:d[12],ordinal:d[0]},fur:{cardinal:d[0]},fy:{cardinal:d[4]},ga:{cardinal:d[14],ordinal:d[0]},gd:{cardinal:d[15],ordinal:d[40]},gl:{cardinal:d[4]},gsw:{cardinal:d[0]},gu:{cardinal:d[2],ordinal:d[41]},guw:{cardinal:d[1]},gv:{cardinal:d[16]},ha:{cardinal:d[0]},haw:{cardinal:d[0]},he:{cardinal:d[17]},hi:{cardinal:d[2],ordinal:d[41]},hr:{cardinal:d[7]},hsb:{cardinal:d[11]},hu:{cardinal:d[0],ordinal:d[42]},hy:{cardinal:d[12],ordinal:d[0]},ia:{cardinal:d[4]},io:{cardinal:d[4]},is:{cardinal:d[18]},it:{cardinal:d[4],ordinal:d[43]},iu:{cardinal:d[19]},iw:{cardinal:d[17]},jgo:{cardinal:d[0]},ji:{cardinal:d[4]},jmc:{cardinal:d[0]},ka:{cardinal:d[0],ordinal:d[44]},kab:{cardinal:d[12]},kaj:{cardinal:d[0]},kcg:{cardinal:d[0]},kk:{cardinal:d[0],ordinal:d[45]},kkj:{cardinal:d[0]},kl:{cardinal:d[0]},kn:{cardinal:d[2]},ks:{cardinal:d[0]},ksb:{cardinal:d[0]},ksh:{cardinal:d[20]},ku:{cardinal:d[0]},kw:{cardinal:d[19]},ky:{cardinal:d[0]},lag:{cardinal:d[21]},lb:{cardinal:d[0]},lg:{cardinal:d[0]},ln:{cardinal:d[1]},lt:{cardinal:d[22]},lv:{cardinal:d[23]},mas:{cardinal:d[0]},mg:{cardinal:d[1]},mgo:{cardinal:d[0]},mk:{cardinal:d[24],ordinal:d[46]},ml:{cardinal:d[0]},mn:{cardinal:d[0]},mo:{cardinal:d[25],ordinal:d[0]},mr:{cardinal:d[2],ordinal:d[47]},mt:{cardinal:d[26]},nah:{cardinal:d[0]},naq:{cardinal:d[19]},nb:{cardinal:d[0]},nd:{cardinal:d[0]},ne:{cardinal:d[0],ordinal:d[48]},nl:{cardinal:d[4]},nn:{cardinal:d[0]},nnh:{cardinal:d[0]},no:{cardinal:d[0]},nr:{cardinal:d[0]},nso:{cardinal:d[1]},ny:{cardinal:d[0]},nyn:{cardinal:d[0]},om:{cardinal:d[0]},or:{cardinal:d[0],ordinal:d[49]},os:{cardinal:d[0]},pa:{cardinal:d[1]},pap:{cardinal:d[0]},pl:{cardinal:d[27]},prg:{cardinal:d[23]},ps:{cardinal:d[0]},pt:{cardinal:d[28]},"pt-PT":{cardinal:d[4]},rm:{cardinal:d[0]},ro:{cardinal:d[25],ordinal:d[0]},rof:{cardinal:d[0]},ru:{cardinal:d[29]},rwk:{cardinal:d[0]},saq:{cardinal:d[0]},sc:{cardinal:d[4],ordinal:d[43]},scn:{cardinal:d[4],ordinal:d[43]},sd:{cardinal:d[0]},sdh:{cardinal:d[0]},se:{cardinal:d[19]},seh:{cardinal:d[0]},sh:{cardinal:d[7]},shi:{cardinal:d[30]},si:{cardinal:d[31]},sk:{cardinal:d[8]},sl:{cardinal:d[32]},sma:{cardinal:d[19]},smi:{cardinal:d[19]},smj:{cardinal:d[19]},smn:{cardinal:d[19]},sms:{cardinal:d[19]},sn:{cardinal:d[0]},so:{cardinal:d[0]},sq:{cardinal:d[0],ordinal:d[50]},sr:{cardinal:d[7]},ss:{cardinal:d[0]},ssy:{cardinal:d[0]},st:{cardinal:d[0]},sv:{cardinal:d[4],ordinal:d[51]},sw:{cardinal:d[4]},syr:{cardinal:d[0]},ta:{cardinal:d[0]},te:{cardinal:d[0]},teo:{cardinal:d[0]},ti:{cardinal:d[1]},tig:{cardinal:d[0]},tk:{cardinal:d[0],ordinal:d[52]},tl:{cardinal:d[13],ordinal:d[0]},tn:{cardinal:d[0]},tr:{cardinal:d[0]},ts:{cardinal:d[0]},tzm:{cardinal:d[33]},ug:{cardinal:d[0]},uk:{cardinal:d[29],ordinal:d[53]},ur:{cardinal:d[4]},uz:{cardinal:d[0]},ve:{cardinal:d[0]},vo:{cardinal:d[0]},vun:{cardinal:d[0]},wa:{cardinal:d[1]},wae:{cardinal:d[0]},xh:{cardinal:d[0]},xog:{cardinal:d[0]},yi:{cardinal:d[4]},zu:{cardinal:d[2]},lo:{ordinal:d[0]},ms:{ordinal:d[0]},vi:{ordinal:d[0]}},gt=ts(function(s,t){t=s.exports=function(u,b,f){return e(u,null,b||"en",f||{},!0)},t.toParts=function(u,b,f){return e(u,null,b||"en",f||{},!1)};function e(h,u,b,f,x){var N=h.map(function(L){return i(L,u,b,f,x)});return x?N.length===1?N[0]:function(z){for(var T="",H=0;H<N.length;++H)T+=N[H](z);return T}:function(z){return N.reduce(function(T,H){return T.concat(H(z))},[])}}function i(h,u,b,f,x){if(typeof h=="string"){var N=h;return function(){return N}}var L=h[0],z=h[1];if(u&&h[0]==="#"){L=u[0];var T=u[2],H=(f.number||m.number)([L,"number"],b);return function(M){return H(o(L,M)-T,M)}}var G;z==="plural"||z==="selectordinal"?(G={},Object.keys(h[3]).forEach(function(Z){G[Z]=e(h[3][Z],h,b,f,x)}),h=[h[0],h[1],h[2],G]):h[2]&&typeof h[2]=="object"&&(G={},Object.keys(h[2]).forEach(function(Z){G[Z]=e(h[2][Z],h,b,f,x)}),h=[h[0],h[1],G]);var Y=z&&(f[z]||m[z]);if(Y){var ee=Y(h,b);return function(M){return ee(o(L,M),M)}}return x?function(M){return String(o(L,M))}:function(M){return o(L,M)}}function o(h,u){if(u&&h in u)return u[h];for(var b=h.split("."),f=u,x=0,N=b.length;f&&x<N;++x)f=f[b[x]];return f}function r(h,u){var b=h[2],f=ce.number[b]||ce.parseNumberPattern(b)||ce.number.default;return new Intl.NumberFormat(u,f).format}function n(h,u){var b=h[2],f=ce.duration[b]||ce.duration.default,x=new Intl.NumberFormat(u,f.seconds).format,N=new Intl.NumberFormat(u,f.minutes).format,L=new Intl.NumberFormat(u,f.hours).format,z=/^fi$|^fi-|^da/.test(String(u))?".":":";return function(T,H){if(T=+T,!isFinite(T))return x(T);var G=~~(T/60/60),Y=~~(T/60%60),ee=(G?L(Math.abs(G))+z:"")+N(Math.abs(Y))+z+x(Math.abs(T%60));return T<0?L(-1).replace(L(1),ee):ee}}function a(h,u){var b=h[1],f=h[2],x=ce[b][f]||ce.parseDatePattern(f)||ce[b].default;return new Intl.DateTimeFormat(u,x).format}function c(h,u){var b=h[1],f=b==="selectordinal"?"ordinal":"cardinal",x=h[2],N=h[3],L;if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(u).length>0)L=new Intl.PluralRules(u,{type:f});else{var z=mo(u,$t),T=z&&$t[z][f]||p;L={select:T}}return function(H,G){var Y=N["="+ +H]||N[L.select(H-x)]||N.other;return Y(G)}}function p(){return"other"}function _(h,u){var b=h[2];return function(f,x){var N=b[f]||b.other;return N(x)}}var m={number:r,ordinal:r,spellout:r,duration:n,date:a,time:a,plural:c,selectordinal:c,select:_};t.types=m});gt.toParts;gt.types;var is=ts(function(s,t){var e="{",i="}",o=",",r="#",n="<",a=">",c="</",p="/>",_="'",m="offset:",h=["number","date","time","ordinal","duration","spellout"],u=["plural","select","selectordinal"];t=s.exports=function(E,w){return b({pattern:String(E),index:0,tagsType:w&&w.tagsType||null,tokens:w&&w.tokens||null},"")};function b(l,E){var w=l.pattern,F=w.length,O=[],C=l.index,q=f(l,E);for(q&&O.push(q),q&&l.tokens&&l.tokens.push(["text",w.slice(C,l.index)]);l.index<F;){if(w[l.index]===i){if(!E)throw M(l);break}if(E&&l.tagsType&&w.slice(l.index,l.index+c.length)===c)break;O.push(L(l)),C=l.index,q=f(l,E),q&&O.push(q),q&&l.tokens&&l.tokens.push(["text",w.slice(C,l.index)])}return O}function f(l,E){for(var w=l.pattern,F=w.length,O=E==="plural"||E==="selectordinal",C=!!l.tagsType,q=E==="{style}",X="";l.index<F;){var R=w[l.index];if(R===e||R===i||O&&R===r||C&&R===n||q&&x(R.charCodeAt(0)))break;if(R===_)if(R=w[++l.index],R===_)X+=R,++l.index;else if(R===e||R===i||O&&R===r||C&&R===n||q)for(X+=R;++l.index<F;)if(R=w[l.index],R===_&&w[l.index+1]===_)X+=_,++l.index;else if(R===_){++l.index;break}else X+=R;else X+=_;else X+=R,++l.index}return X}function x(l){return l>=9&&l<=13||l===32||l===133||l===160||l===6158||l>=8192&&l<=8205||l===8232||l===8233||l===8239||l===8287||l===8288||l===12288||l===65279}function N(l){for(var E=l.pattern,w=E.length,F=l.index;l.index<w&&x(E.charCodeAt(l.index));)++l.index;F<l.index&&l.tokens&&l.tokens.push(["space",l.pattern.slice(F,l.index)])}function L(l){var E=l.pattern;if(E[l.index]===r)return l.tokens&&l.tokens.push(["syntax",r]),++l.index,[r];var w=z(l);if(w)return w;if(E[l.index]!==e)throw M(l,e);l.tokens&&l.tokens.push(["syntax",e]),++l.index,N(l);var F=T(l);if(!F)throw M(l,"placeholder id");l.tokens&&l.tokens.push(["id",F]),N(l);var O=E[l.index];if(O===i)return l.tokens&&l.tokens.push(["syntax",i]),++l.index,[F];if(O!==o)throw M(l,o+" or "+i);l.tokens&&l.tokens.push(["syntax",o]),++l.index,N(l);var C=T(l);if(!C)throw M(l,"placeholder type");if(l.tokens&&l.tokens.push(["type",C]),N(l),O=E[l.index],O===i){if(l.tokens&&l.tokens.push(["syntax",i]),C==="plural"||C==="selectordinal"||C==="select")throw M(l,C+" sub-messages");return++l.index,[F,C]}if(O!==o)throw M(l,o+" or "+i);l.tokens&&l.tokens.push(["syntax",o]),++l.index,N(l);var q;if(C==="plural"||C==="selectordinal"){var X=G(l);N(l),q=[F,C,X,ee(l,C)]}else if(C==="select")q=[F,C,ee(l,C)];else if(h.indexOf(C)>=0)q=[F,C,H(l)];else{var R=l.index,li=H(l);N(l),E[l.index]===e&&(l.index=R,li=ee(l,C)),q=[F,C,li]}if(N(l),E[l.index]!==i)throw M(l,i);return l.tokens&&l.tokens.push(["syntax",i]),++l.index,q}function z(l){var E=l.tagsType;if(!(!E||l.pattern[l.index]!==n)){if(l.pattern.slice(l.index,l.index+c.length)===c)throw M(l,null,"closing tag without matching opening tag");l.tokens&&l.tokens.push(["syntax",n]),++l.index;var w=T(l,!0);if(!w)throw M(l,"placeholder id");if(l.tokens&&l.tokens.push(["id",w]),N(l),l.pattern.slice(l.index,l.index+p.length)===p)return l.tokens&&l.tokens.push(["syntax",p]),l.index+=p.length,[w,E];if(l.pattern[l.index]!==a)throw M(l,a);l.tokens&&l.tokens.push(["syntax",a]),++l.index;var F=b(l,E),O=l.index;if(l.pattern.slice(l.index,l.index+c.length)!==c)throw M(l,c+w+a);l.tokens&&l.tokens.push(["syntax",c]),l.index+=c.length;var C=T(l,!0);if(C&&l.tokens&&l.tokens.push(["id",C]),w!==C)throw l.index=O,M(l,c+w+a,c+C+a);if(N(l),l.pattern[l.index]!==a)throw M(l,a);return l.tokens&&l.tokens.push(["syntax",a]),++l.index,[w,E,{children:F}]}}function T(l,E){for(var w=l.pattern,F=w.length,O="";l.index<F;){var C=w[l.index];if(C===e||C===i||C===o||C===r||C===_||x(C.charCodeAt(0))||E&&(C===n||C===a||C==="/"))break;O+=C,++l.index}return O}function H(l){var E=l.index,w=f(l,"{style}");if(!w)throw M(l,"placeholder style name");return l.tokens&&l.tokens.push(["style",l.pattern.slice(E,l.index)]),w}function G(l){var E=l.pattern,w=E.length,F=0;if(E.slice(l.index,l.index+m.length)===m){l.tokens&&l.tokens.push(["offset","offset"],["syntax",":"]),l.index+=m.length,N(l);for(var O=l.index;l.index<w&&Y(E.charCodeAt(l.index));)++l.index;if(O===l.index)throw M(l,"offset number");l.tokens&&l.tokens.push(["number",E.slice(O,l.index)]),F=+E.slice(O,l.index)}return F}function Y(l){return l>=48&&l<=57}function ee(l,E){for(var w=l.pattern,F=w.length,O={};l.index<F&&w[l.index]!==i;){var C=T(l);if(!C)throw M(l,"sub-message selector");l.tokens&&l.tokens.push(["selector",C]),N(l),O[C]=Z(l,E),N(l)}if(!O.other&&u.indexOf(E)>=0)throw M(l,null,null,'"other" sub-message must be specified in '+E);return O}function Z(l,E){if(l.pattern[l.index]!==e)throw M(l,e+" to start sub-message");l.tokens&&l.tokens.push(["syntax",e]),++l.index;var w=b(l,E);if(l.pattern[l.index]!==i)throw M(l,i+" to end sub-message");return l.tokens&&l.tokens.push(["syntax",i]),++l.index,w}function M(l,E,w,F){var O=l.pattern,C=O.slice(0,l.index).split(/\r?\n/),q=l.index,X=C.length,R=C.slice(-1)[0].length;return w=w||(l.index>=O.length?"end of message pattern":T(l)||O[l.index]),F||(F=Cs(E,w)),F+=" in "+O.replace(/\r?\n/g,`
`),new yt(F,E,w,q,X,R)}function Cs(l,E){return l?"Expected "+l+" but found "+E:"Unexpected "+E+" found"}function yt(l,E,w,F,O,C){Error.call(this,l),this.name="SyntaxError",this.message=l,this.expected=E,this.found=w,this.offset=F,this.line=O,this.column=C}yt.prototype=Object.create(Error.prototype),t.SyntaxError=yt});is.SyntaxError;var bo=new RegExp("^("+Object.keys($t).join("|")+")\\b"),Ze=new WeakMap;/*!
 * Intl.MessageFormat prollyfill
 * Copyright(c) 2015 Andy VanWagoner
 * MIT licensed
 **/function $e(s,t,e){if(!(this instanceof $e)||Ze.has(this))throw new TypeError("calling MessageFormat constructor without new is invalid");var i=is(s);Ze.set(this,{ast:i,format:gt(i,t,e&&e.types),locale:$e.supportedLocalesOf(t)[0]||"en",locales:t,options:e})}var vo=$e;Object.defineProperties($e.prototype,{format:{configurable:!0,get:function(){var t=Ze.get(this);if(!t)throw new TypeError("MessageFormat.prototype.format called on value that's not an object initialized as a MessageFormat");return t.format}},formatToParts:{configurable:!0,writable:!0,value:function(t){var e=Ze.get(this);if(!e)throw new TypeError("MessageFormat.prototype.formatToParts called on value that's not an object initialized as a MessageFormat");var i=e.toParts||(e.toParts=gt.toParts(e.ast,e.locales,e.options&&e.options.types));return i(t)}},resolvedOptions:{configurable:!0,writable:!0,value:function(){var t=Ze.get(this);if(!t)throw new TypeError("MessageFormat.prototype.resolvedOptions called on value that's not an object initialized as a MessageFormat");return{locale:t.locale}}}});typeof Symbol<"u"&&Object.defineProperty($e.prototype,Symbol.toStringTag,{value:"Object"});Object.defineProperties($e,{supportedLocalesOf:{configurable:!0,writable:!0,value:function(t){return[].concat(Intl.NumberFormat.supportedLocalesOf(t),Intl.DateTimeFormat.supportedLocalesOf(t),Intl.PluralRules?Intl.PluralRules.supportedLocalesOf(t):[],[].concat(t||[]).filter(function(e){return bo.test(e)})).filter(function(e,i,o){return o.indexOf(e)===i})}}});function go(s){return!!(s&&s.default&&typeof s.default=="object"&&Object.keys(s).length===1)}var Hi;const he=(Hi=globalThis.document)==null?void 0:Hi.documentElement;var ie,pe,xe,bt,ss;class yo extends EventTarget{constructor({allowOverridesForExistingNamespaces:e=!1,autoLoadOnLocaleChange:i=!1,showKeyAsFallback:o=!1,fallbackLocale:r=""}={}){super();Q(this,bt);j(this,"formatNumberOptions",{returnIfNaN:"",postProcessors:new Map});j(this,"formatDateOptions",{postProcessors:new Map});Q(this,ie,!1);Q(this,pe,"");Q(this,xe,null);j(this,"__storage",{});j(this,"__namespacePatternsMap",new Map);j(this,"__namespaceLoadersCache",{});j(this,"__namespaceLoaderPromisesCache",{});this.__allowOverridesForExistingNamespaces=e,this._autoLoadOnLocaleChange=!!i,this._showKeyAsFallback=o,this._fallbackLocale=r;const n=he.getAttribute("data-localize-lang");te(this,ie,!!n),P(this,ie)&&(this.locale=n,this._setupTranslationToolSupport()),he.lang||(he.lang=this.locale||"en-GB"),this._setupHtmlLangAttributeObserver()}get locale(){return P(this,ie)?P(this,pe)||"":he.lang||""}set locale(e){if(se(this,bt,ss).call(this,e),!P(this,ie)){const r=he.lang;this._setHtmlLangAttribute(e),this._onLocaleChanged(e,r);return}const i=P(this,pe);te(this,pe,e),P(this,xe)===null&&this._setHtmlLangAttribute(e),this._onLocaleChanged(e,i)}get loadingComplete(){return typeof this.__namespaceLoaderPromisesCache[this.locale]=="object"?Promise.all(Object.values(this.__namespaceLoaderPromisesCache[this.locale])):Promise.resolve()}addData(e,i,o){if(!this.__allowOverridesForExistingNamespaces&&this._isNamespaceInCache(e,i))throw new Error(`Namespace "${i}" has been already added for the locale "${e}".`);this.__storage[e]=this.__storage[e]||{},this.__allowOverridesForExistingNamespaces?this.__storage[e][i]={...this.__storage[e][i],...o}:this.__storage[e][i]=o}setupNamespaceLoader(e,i){this.__namespacePatternsMap.set(e,i)}loadNamespaces(e,{locale:i}={}){return Promise.all(e.map(o=>this.loadNamespace(o,{locale:i})))}loadNamespace(e,{locale:i=this.locale}={locale:this.locale}){const o=typeof e=="object",r=o?Object.keys(e)[0]:e;if(this._isNamespaceInCache(i,r))return Promise.resolve();const n=this._getCachedNamespaceLoaderPromise(i,r);return n||this._loadNamespaceData(i,e,o,r)}msg(e,i,o={}){const r=o.locale?o.locale:this.locale,n=this._getMessageForKeys(e,r);return n?new vo(n,r).format(i):""}teardown(){this._teardownHtmlLangAttributeObserver()}reset(){this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={}}setDatePostProcessorForLocale({locale:e,postProcessor:i}){var o;(o=this.formatDateOptions)==null||o.postProcessors.set(e,i)}setNumberPostProcessorForLocale({locale:e,postProcessor:i}){var o;(o=this.formatNumberOptions)==null||o.postProcessors.set(e,i)}_setupTranslationToolSupport(){te(this,xe,he.lang||null)}_setHtmlLangAttribute(e){this._teardownHtmlLangAttributeObserver(),he.lang=e,this._setupHtmlLangAttributeObserver()}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||(this._htmlLangAttributeObserver=new MutationObserver(e=>{e.forEach(i=>{P(this,ie)?he.lang==="auto"?(te(this,xe,null),this._setHtmlLangAttribute(this.locale)):te(this,xe,document.documentElement.lang):this._onLocaleChanged(document.documentElement.lang,i.oldValue||"")})})),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver&&this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(e,i){return!!(this.__storage[e]&&this.__storage[e][i])}_getCachedNamespaceLoaderPromise(e,i){return this.__namespaceLoaderPromisesCache[e]?this.__namespaceLoaderPromisesCache[e][i]:null}_loadNamespaceData(e,i,o,r){const n=this._getNamespaceLoader(i,o,r),a=this._getNamespaceLoaderPromise(n,e,r);return this._cacheNamespaceLoaderPromise(e,r,a),a.then(c=>{if(this.__namespaceLoaderPromisesCache[e]&&this.__namespaceLoaderPromisesCache[e][r]===a){const p=go(c)?c.default:c;this.addData(e,r,p)}})}_getNamespaceLoader(e,i,o){let r=this.__namespaceLoadersCache[o];if(r||(i?(r=e[o],this.__namespaceLoadersCache[o]=r):(r=this._lookupNamespaceLoader(o),this.__namespaceLoadersCache[o]=r)),!r)throw new Error(`Namespace "${o}" was not properly setup.`);return this.__namespaceLoadersCache[o]=r,r}_getNamespaceLoaderPromise(e,i,o,r=this._fallbackLocale){return e(i,o).catch(()=>{const n=this._getLangFromLocale(i);return e(n,o).catch(()=>{if(r)return this._getNamespaceLoaderPromise(e,r,o,"").catch(()=>{const a=this._getLangFromLocale(r);throw new Error(`Data for namespace "${o}" and current locale "${i}" or fallback locale "${r}" could not be loaded. Make sure you have data either for locale "${i}" (and/or generic language "${n}") or for fallback "${r}" (and/or "${a}").`)});throw new Error(`Data for namespace "${o}" and locale "${i}" could not be loaded. Make sure you have data for locale "${i}" (and/or generic language "${n}").`)})})}_cacheNamespaceLoaderPromise(e,i,o){this.__namespaceLoaderPromisesCache[e]||(this.__namespaceLoaderPromisesCache[e]={}),this.__namespaceLoaderPromisesCache[e][i]=o}_lookupNamespaceLoader(e){for(const[i,o]of this.__namespacePatternsMap){const r=typeof i=="string"&&i===e,n=typeof i=="object"&&i.constructor.name==="RegExp"&&i.test(e);if(r||n)return o}return null}_getLangFromLocale(e){return e.substring(0,2)}_onLocaleChanged(e,i){this.dispatchEvent(new CustomEvent("__localeChanging")),e!==i&&(this._autoLoadOnLocaleChange?(this._loadAllMissing(e,i),this.loadingComplete.then(()=>{this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:e,oldLocale:i}}))})):this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:e,oldLocale:i}})))}_loadAllMissing(e,i){const o=this.__storage[i]||{},r=this.__storage[e]||{};Object.keys(o).forEach(n=>{r[n]||this.loadNamespace(n,{locale:e})})}_getMessageForKeys(e,i){if(typeof e=="string")return this._getMessageForKey(e,i);const o=Array.from(e).reverse();let r,n;for(;o.length;)if(r=o.pop(),n=this._getMessageForKey(r,i),n)return n}_getMessageForKey(e,i){if(!e||e.indexOf(":")===-1)throw new Error(`Namespace is missing in the key "${e}". The format for keys is "namespace:name".`);const[o,r]=e.split(":"),n=this.__storage[i],a=n?n[o]:{},p=r.split(".").reduce((_,m)=>typeof _=="object"?_[m]:_,a);return String(p||(this._showKeyAsFallback?e:""))}get _supportExternalTranslationTools(){return P(this,ie)}set _supportExternalTranslationTools(e){te(this,ie,e)}get _langAttrSetByTranslationTool(){return P(this,pe)}set _langAttrSetByTranslationTool(e){te(this,pe,e)}}ie=new WeakMap,pe=new WeakMap,xe=new WeakMap,bt=new WeakSet,ss=function(e){if(!e.includes("-"))throw new Error(`
      Locale was set to ${e}.
      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.
      See https://github.com/ing-bank/lion/issues/187 for more information.
    `)};const Tt=Symbol.for("lion::SingletonManagerClassStorage"),Ot=globalThis||window;class xo{constructor(){this._map=Ot[Tt]?Ot[Tt]:Ot[Tt]=new Map}set(t,e){this.has(t)||this._map.set(t,e)}get(t){return this._map.get(t)}has(t){return this._map.has(t)}}const os=s=>{let t=null;const e=()=>(t===null&&(t=s()),t);return new Proxy({},{get(o,r){const n=e();return r==="addEventListener"||r==="removeEventListener"?Reflect.get(n,r).bind(n):r==="__instance_for_testing"?n:Reflect.get(n,r,n)},set(o,r,n){return Reflect.set(e(),r,n)},getOwnPropertyDescriptor(o,r){return Reflect.getOwnPropertyDescriptor(e(),r)},getPrototypeOf(){return Reflect.getPrototypeOf(e())}})},Me=new xo;function Co(){if(!Me.has("@lion/ui::localize::0.x")){const s=new yo({autoLoadOnLocaleChange:!0,fallbackLocale:"en-GB"});Me.set("@lion/ui::localize::0.x",s)}return Me.get("@lion/ui::localize::0.x")}function Dt(){return os(Co)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=(s,t)=>{var i;const e=s._$AN;if(e===void 0)return!1;for(const o of e)(i=o._$AO)==null||i.call(o,t,!1),Je(o,t);return!0},ft=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},rs=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),ko(t)}};function Eo(s){this._$AN!==void 0?(ft(this),this._$AM=s,rs(this)):this._$AM=s}function wo(s,t=!1,e=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let r=e;r<i.length;r++)Je(i[r],!1),ft(i[r]);else i!=null&&(Je(i,!1),ft(i));else Je(this,s)}const ko=s=>{s.type==Xi.CHILD&&(s._$AP??(s._$AP=wo),s._$AQ??(s._$AQ=Eo))};class No extends es{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),rs(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),e&&(Je(this,t),ft(this))}setValue(t){if(io(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ao{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class So{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(t=>this.Z=t))}resume(){var t;(t=this.Z)==null||t.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=s=>!eo(s)&&typeof s.then=="function",ki=1073741823;class To extends No{constructor(){super(...arguments),this._$Cwt=ki,this._$Cbt=[],this._$CK=new Ao(this),this._$CX=new So}render(...t){return t.find(e=>!wi(e))??re}update(t,e){const i=this._$Cbt;let o=i.length;this._$Cbt=e;const r=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<e.length&&!(a>this._$Cwt);a++){const c=e[a];if(!wi(c))return this._$Cwt=a,c;a<o&&c===i[a]||(this._$Cwt=ki,o=0,Promise.resolve(c).then(async p=>{for(;n.get();)await n.get();const _=r.deref();if(_!==void 0){const m=_._$Cbt.indexOf(c);m>-1&&m<_._$Cwt&&(_._$Cwt=m,_.setValue(p))}}))}return re}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Oo=Qi(To),Fo=s=>class extends s{static get localizeNamespaces(){return[]}static get waitForLocalizeNamespaces(){return!0}constructor(){super(),this._localizeManager=Dt(),this.__boundLocalizeOnLocaleChanged=(...e)=>{const i=Array.from(e)[0];this.__localizeOnLocaleChanged(i)},this.__boundLocalizeOnLocaleChanging=()=>{this.__localizeOnLocaleChanging()},this.__localizeStartLoadingNamespaces(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>{this.__localizeMessageSync=!0})}async scheduleUpdate(){Object.getPrototypeOf(this).constructor.waitForLocalizeNamespaces&&await this.localizeNamespacesLoaded,super.scheduleUpdate()}connectedCallback(){super.connectedCallback(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>this.onLocaleReady()),this._localizeManager.addEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.addEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}disconnectedCallback(){super.disconnectedCallback(),this._localizeManager.removeEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.removeEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}msgLit(e,i,o){return this.__localizeMessageSync?this._localizeManager.msg(e,i,o):this.localizeNamespacesLoaded?Oo(this.localizeNamespacesLoaded.then(()=>this._localizeManager.msg(e,i,o)),S):""}__getUniqueNamespaces(){const e=[],i=new Set;return Object.getPrototypeOf(this).constructor.localizeNamespaces.forEach(i.add.bind(i)),i.forEach(o=>{e.push(o)}),e}__localizeStartLoadingNamespaces(){this.localizeNamespacesLoaded=this._localizeManager.loadNamespaces(this.__getUniqueNamespaces())}__localizeOnLocaleChanging(){this.__localizeStartLoadingNamespaces()}__localizeOnLocaleChanged(e){this.onLocaleChanged(e.detail.newLocale,e.detail.oldLocale)}onLocaleReady(){this.onLocaleUpdated()}onLocaleChanged(e,i){this.onLocaleUpdated(),this.requestUpdate()}onLocaleUpdated(){}},ns=$(Fo),Pt="3.0.0",Ni=window.scopedElementsVersions||(window.scopedElementsVersions=[]);Ni.includes(Pt)||Ni.push(Pt);const Vo=s=>{var t;return t=class extends s{static get scopedElementsVersion(){return Pt}get registry(){return this.constructor.__registry}set registry(i){this.constructor.__registry=i}attachShadow(i){const{scopedElements:o}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=new CustomElementRegistry;for(const[n,a]of Object.entries(o??{}))this.registry.define(n,a)}return super.attachShadow({...i,customElements:this.registry,registry:this.registry})}},j(t,"scopedElements"),j(t,"__registry"),t},Lo=$(Vo),Mo=s=>class extends Lo(s){createRenderRoot(){var r;const{shadowRootOptions:e,elementStyles:i}=this.constructor,o=this.attachShadow(e);return this.renderOptions.creationScope=o,Xt(o,i),(r=this.renderOptions).renderBefore??(r.renderBefore=o.firstChild),o}},Io=$(Mo);function lt(){var s,t;return!!((s=globalThis.ShadowRoot)!=null&&s.prototype.createElement&&((t=globalThis.ShadowRoot)!=null&&t.prototype.importNode))}const zo=s=>class extends Io(s){constructor(){super()}createScopedElement(e){return(lt()?this.shadowRoot:document).createElement(e)}defineScopedElement(e,i){const o=this.registry.get(e),r=o&&o!==i;return!lt()&&r&&console.error([`You are trying to re-register the "${e}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),o?this.registry.get(e):this.registry.define(e,i)}attachShadow(e){const{scopedElements:i}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=lt()?new CustomElementRegistry:customElements;for(const[r,n]of Object.entries(i??{}))this.defineScopedElement(r,n)}return Element.prototype.attachShadow.call(this,{...e,customElements:this.registry,registry:this.registry})}createRenderRoot(){const{shadowRootOptions:e,elementStyles:i}=this.constructor,o=this.attachShadow(e);return lt()&&(this.renderOptions.creationScope=o),o instanceof ShadowRoot&&(Xt(o,i),this.renderOptions.renderBefore=this.renderOptions.renderBefore||o.firstChild),o}},as=$(zo),Ro=[Node.DOCUMENT_POSITION_PRECEDING,Node.DOCUMENT_POSITION_CONTAINS,Node.DOCUMENT_POSITION_CONTAINS|Node.DOCUMENT_POSITION_PRECEDING];function ls(s,{reverse:t}={}){const e=(o,r)=>{const n=o.compareDocumentPosition(r);return Ro.includes(n)?1:-1},i=s.filter(o=>o);return i.sort(e),t&&i.reverse(),i}class ke{constructor(t){this.type="unparseable",this.viewValue=t}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}}const $o=s=>class extends s{constructor(){super(),this.name="",this._parentFormGroup=void 0,this.allowCrossRootRegistration=!1}get name(){return this.__name||""}set name(t){const e=this.name;this.__name=t.toString(),this.requestUpdate("name",e)}static get properties(){return{name:{type:String,reflect:!0},allowCrossRootRegistration:{type:Boolean,attribute:"allow-cross-root-registration"}}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:this},bubbles:!0,composed:!!this.allowCrossRootRegistration}))}disconnectedCallback(){super.disconnectedCallback(),this.__unregisterFormElement()}__unregisterFormElement(){this._parentFormGroup&&this._parentFormGroup.removeFormElement(this)}},ii=$($o),Do=s=>{var t,e;return e=class extends ii(nt(Be(s))){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},label:String,labelSrOnly:{type:Boolean,attribute:"label-sr-only",reflect:!0},helpText:{type:String,attribute:"help-text"},modelValue:{attribute:!1},_ariaLabelledNodes:{attribute:!1},_ariaDescribedNodes:{attribute:!1},_repropagationRole:{attribute:!1},_isRepropagationEndpoint:{attribute:!1}}}get label(){var o;return this.__label??(((o=this._labelNode)==null?void 0:o.textContent)||"")}set label(o){const r=this.label;this.__label=o,this.requestUpdate("label",r)}get helpText(){var o;return this.__helpText??(((o=this._helpTextNode)==null?void 0:o.textContent)||"")}set helpText(o){const r=this.helpText;this.__helpText=o,this.requestUpdate("helpText",r)}get fieldName(){return this.__fieldName||this.label||this.name||""}set fieldName(o){this.__fieldName=o}get slots(){return{...super.slots,label:()=>{const o=document.createElement("label");return o.textContent=this.label,o},"help-text":()=>{const o=document.createElement("div");return o.textContent=this.helpText,o}}}get _inputNode(){return this.__getDirectSlotChild("input")}get _labelNode(){return this.__getDirectSlotChild("label")}get _helpTextNode(){return this.__getDirectSlotChild("help-text")}get _feedbackNode(){return this.__getDirectSlotChild("feedback")}constructor(){super(),this.readOnly=!1,this.labelSrOnly=!1,this._inputId=Zi(this.localName),this._ariaLabelledNodes=[],this._ariaDescribedNodes=[],this._repropagationRole="child",this._isRepropagationEndpoint=!1,this.addEventListener("model-value-changed",this.__repropagateChildrenValues),this._onLabelClick=this._onLabelClick.bind(this)}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y(),this._triggerInitialModelValueChangedEvent(),this._labelNode&&this._labelNode.addEventListener("click",this._onLabelClick)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._onLabelClick)}updated(o){var r;super.updated(o),o.has("disabled")&&((r=this._inputNode)==null||r.setAttribute("aria-disabled",`${!!this.disabled}`)),o.has("_ariaLabelledNodes")&&this.__reflectAriaAttr("aria-labelledby",this._ariaLabelledNodes,this.__reorderAriaLabelledNodes),o.has("_ariaDescribedNodes")&&this.__reflectAriaAttr("aria-describedby",this._ariaDescribedNodes,this.__reorderAriaDescribedNodes),o.has("label")&&this.__label!==void 0&&this._labelNode&&(this._labelNode.textContent=this.label),o.has("helpText")&&this.__helpText!==void 0&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),o.has("name")&&this.dispatchEvent(new CustomEvent("form-element-name-changed",{detail:{oldName:o.get("name"),newName:this.name},bubbles:!0}))}_triggerInitialModelValueChangedEvent(){this._dispatchInitialModelValueChangedEvent()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add("form-control")}_enhanceLightDomA11y(){const{_inputNode:o,_labelNode:r,_helpTextNode:n,_feedbackNode:a}=this;o&&(o.id=o.id||this._inputId),r&&(r.setAttribute("for",this._inputId),this.addToAriaLabelledBy(r,{idPrefix:"label"})),n&&this.addToAriaDescribedBy(n,{idPrefix:"help-text"}),a&&(this.addEventListener("focusin",()=>{a.setAttribute("aria-live","polite")}),this.addEventListener("focusout",()=>{a.setAttribute("aria-live","assertive")}),this.addToAriaDescribedBy(a,{idPrefix:"feedback"})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(o=["prefix","suffix","before","after"]){o.forEach(r=>{const n=this.__getDirectSlotChild(r);n&&(n.hasAttribute("data-label")&&this.addToAriaLabelledBy(n,{idPrefix:r}),n.hasAttribute("data-description")&&this.addToAriaDescribedBy(n,{idPrefix:r}))})}__reflectAriaAttr(o,r,n){if(this._inputNode){if(n){const c=r.filter(u=>this.contains(u)),p=r.filter(u=>!this.contains(u)),_=c.map(u=>u.assignedSlot||u),m=[...ls(_)],h=[];m.forEach(u=>{c.forEach(b=>{u.name===b.slot&&h.push(b)})}),r=[...h,...p]}const a=r.map(c=>c.id).join(" ");this._inputNode.setAttribute(o,a)}}render(){return v`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return v` ${this._labelTemplate()} ${this._helpTextTemplate()} `}_groupTwoTemplate(){return v` ${this._inputGroupTemplate()} ${this._feedbackTemplate()} `}_labelTemplate(){return v`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `}_helpTextTemplate(){return v`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `}_inputGroupTemplate(){return v`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return v`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(o=>o.slot==="prefix")?v`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:S}_inputGroupInputTemplate(){return v`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(o=>o.slot==="suffix")?v`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:S}_inputGroupAfterTemplate(){return v`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return v`
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_isEmpty(o=this.modelValue){let r=o;if(this.modelValue instanceof ke&&(r=this.modelValue.viewValue),typeof r=="object"&&r!==null&&!(r instanceof Date))return!Object.keys(r).length;const n=typeof r=="number"&&(r===0||Number.isNaN(r));return!r&&!n&&!(typeof r=="boolean"&&r===!1)}static get styles(){return[U`
          /**********************
            {block} .form-field
           ********************/

          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }

          :host([disabled]) {
            pointer-events: none;
          }

          :host([disabled]) .form-field__label ::slotted(*),
          :host([disabled]) .form-field__help-text ::slotted(*) {
            color: var(--disabled-text-color, #767676);
          }

          :host([label-sr-only]) .form-field__label {
            position: absolute;
            top: 0;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip-path: inset(100%);
            clip: rect(1px, 1px, 1px, 1px);
            white-space: nowrap;
            border: 0;
            margin: 0;
            padding: 0;
          }

          /***********************
            {block} .input-group
           *********************/

          .input-group__container {
            display: flex;
          }

          .input-group__input {
            flex: 1;
            display: flex;
          }

          /***** {state} :disabled *****/
          :host([disabled]) .input-group ::slotted([slot='input']) {
            color: var(--disabled-text-color, #767676);
          }

          /***********************
            {block} .form-control
           **********************/

          .input-group__container > .input-group__input ::slotted(.form-control) {
            flex: 1 1 auto;
            margin: 0; /* remove input margin in Safari */
            font-size: 100%; /* normalize default input font-size */
          }
        `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(o,{idPrefix:r="",reorder:n=!0}={}){o.id=o.id||`${r}-${this._inputId}`,this._ariaLabelledNodes.includes(o)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,o],this.__reorderAriaLabelledNodes=!!n)}removeFromAriaLabelledBy(o){this._ariaLabelledNodes.includes(o)&&(this._ariaLabelledNodes.splice(this._ariaLabelledNodes.indexOf(o),1),this._ariaLabelledNodes=[...this._ariaLabelledNodes],this.__reorderAriaLabelledNodes=!1)}addToAriaDescribedBy(o,{idPrefix:r="",reorder:n=!0}={}){o.id=o.id||`${r}-${this._inputId}`,this._ariaDescribedNodes.includes(o)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,o],this.__reorderAriaDescribedNodes=!!n)}removeFromAriaDescribedBy(o){this._ariaDescribedNodes.includes(o)&&(this._ariaDescribedNodes.splice(this._ariaDescribedNodes.indexOf(o),1),this._ariaDescribedNodes=[...this._ariaDescribedNodes],this.__reorderAriaLabelledNodes=!1)}__getDirectSlotChild(o){return Array.from(this.children).find(r=>r.slot===o)}_dispatchInitialModelValueChangedEvent(){this._repropagationRole!=="child"&&(this.__repropagateChildrenInitialized=!0,this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],initialize:!0,isTriggeredByUser:!1}})))}_onBeforeRepropagateChildrenValues(o){}__repropagateChildrenValues(o){var h;this._onBeforeRepropagateChildrenValues(o);const r=o.detail&&o.detail.element||o.target,n=this._isRepropagationEndpoint||this._repropagationRole==="choice-group";if(r===this)return;o.stopImmediatePropagation();const c=this._repropagationRole!=="child"&&!this.__repropagateChildrenInitialized,p=o.detail&&o.detail.initialize;if(c||p||!this._repropagationCondition(r))return;let _=[];n||(_=o.detail&&o.detail.formPath||[r]);const m=[..._,this];this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:m,isTriggeredByUser:!!((h=o.detail)!=null&&h.isTriggeredByUser)}}))}_repropagationCondition(o){return!!o}_onLabelClick(){}},j(e,"enabledWarnings",((t=Oe(e,e,"enabledWarnings"))==null?void 0:t.filter(o=>o!=="change-in-update"))||[]),e},Se=$(Do);class Po{constructor(){this.__running=!1,this.__queue=[]}add(t){this.__queue.push(t),this.__running||(this.complete=new Promise(e=>{this.__callComplete=e}),this.__run())}async __run(){this.__running=!0,await this.__queue[0](),this.__queue.shift(),this.__queue.length>0?this.__run():(this.__running=!1,this.__callComplete&&this.__callComplete())}}function Bo(s){return s.charAt(0).toUpperCase()+s.slice(1)}const Uo=s=>{var t,e;return e=class extends s{constructor(){super(),this.__SyncUpdatableNamespace={}}firstUpdated(o){super.firstUpdated(o),this.__syncUpdatableInitialize()}connectedCallback(){super.connectedCallback(),this.__SyncUpdatableNamespace.connected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__SyncUpdatableNamespace.connected=!1}static __syncUpdatableHasChanged(o,r,n){const a=this.elementProperties;return a.get(o)&&a.get(o).hasChanged?a.get(o).hasChanged(r,n):r!==n}__syncUpdatableInitialize(){const o=this.__SyncUpdatableNamespace,r=this.constructor;o.initialized=!0,o.queue&&Array.from(o.queue).forEach(n=>{r.__syncUpdatableHasChanged(n,this[n],void 0)&&this.updateSync(n,void 0)})}requestUpdate(o,r,n){if(super.requestUpdate(o,r,n),o===void 0)return;this.__SyncUpdatableNamespace=this.__SyncUpdatableNamespace||{};const a=this.__SyncUpdatableNamespace,c=this.constructor;a.initialized?c.__syncUpdatableHasChanged(o,this[o],r)&&this.updateSync(o,r):(a.queue=a.queue||new Set,a.queue.add(o))}updateSync(o,r){}},j(e,"enabledWarnings",((t=Oe(e,e,"enabledWarnings"))==null?void 0:t.filter(o=>o!=="change-in-update"))||[]),e},Ho=$(Uo),qo=s=>{switch(s){case"bg-BG":return y(()=>import("./bg-BG.DvcqJcRT.js"),__vite__mapDeps([0,1]));case"bg":return y(()=>import("./bg.DjRhbvP8.js"),[]);case"cs-CZ":return y(()=>import("./cs-CZ.C4M3ss0M.js"),__vite__mapDeps([2,3]));case"cs":return y(()=>import("./cs.BpAIInFi.js"),[]);case"de-DE":return y(()=>import("./de-DE.B6cLQS-C.js"),__vite__mapDeps([4,5]));case"de":return y(()=>import("./de.tu_ZC0by.js"),[]);case"en-AU":return y(()=>import("./en-AU.BLLSR6ul.js"),__vite__mapDeps([6,7]));case"en-GB":return y(()=>import("./en-GB.BLLSR6ul.js"),__vite__mapDeps([8,7]));case"en-US":return y(()=>import("./en-US.BLLSR6ul.js"),__vite__mapDeps([9,7]));case"en-PH":case"en":return y(()=>import("./en.BRtJWocA.js"),[]);case"es-ES":return y(()=>import("./es-ES.C-k5kUnm.js"),__vite__mapDeps([10,11]));case"es":return y(()=>import("./es.CmCcTLNg.js"),[]);case"fr-FR":return y(()=>import("./fr-FR.DC-XO9HF.js"),__vite__mapDeps([12,13]));case"fr-BE":return y(()=>import("./fr-BE.DC-XO9HF.js"),__vite__mapDeps([14,13]));case"fr":return y(()=>import("./fr.z99AZYvu.js"),[]);case"hu-HU":return y(()=>import("./hu-HU.BeTGSB1R.js"),__vite__mapDeps([15,16]));case"hu":return y(()=>import("./hu.DlqOkKS-.js"),[]);case"it-IT":return y(()=>import("./it-IT.BfrsYHtj.js"),__vite__mapDeps([17,18]));case"it":return y(()=>import("./it.dhe0n6ro.js"),[]);case"nl-BE":return y(()=>import("./nl-BE.CtPSVrK-.js"),__vite__mapDeps([19,20]));case"nl-NL":return y(()=>import("./nl-NL.CtPSVrK-.js"),__vite__mapDeps([21,20]));case"nl":return y(()=>import("./nl.CsOjjg4q.js"),[]);case"pl-PL":return y(()=>import("./pl-PL.BO_uoCo3.js"),__vite__mapDeps([22,23]));case"pl":return y(()=>import("./pl.CYht5iOc.js"),[]);case"ro-RO":return y(()=>import("./ro-RO.BzszQasy.js"),__vite__mapDeps([24,25]));case"ro":return y(()=>import("./ro.DwBEW5po.js"),[]);case"ru-RU":return y(()=>import("./ru-RU.DYdB6zKs.js"),__vite__mapDeps([26,27]));case"ru":return y(()=>import("./ru.BWO2zRrD.js"),[]);case"sk-SK":return y(()=>import("./sk-SK.t6DAVN22.js"),__vite__mapDeps([28,29]));case"sk":return y(()=>import("./sk.BCmB7Wtj.js"),[]);case"tr-TR":return y(()=>import("./tr-TR.Cbm2kwTy.js"),__vite__mapDeps([30,31]));case"tr":return y(()=>import("./tr.C7VWmvp5.js"),[]);case"uk-UA":return y(()=>import("./uk-UA.DRKx0L1R.js"),__vite__mapDeps([32,33]));case"uk":return y(()=>import("./uk.L9q5i_B2.js"),[]);case"zh-CN":case"zh":return y(()=>import("./zh.BuGHQNaT.js"),[]);default:return y(()=>import("./en.BRtJWocA.js"),[])}},Go=s=>`${s[0].toUpperCase()}${s.slice(1)}`,et=class et extends ns(J){static get properties(){return{feedbackData:{attribute:!1}}}static get styles(){return[U`
        .validation-feedback__type {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}constructor(){super(),this.feedbackData=void 0}_messageTemplate({message:t}){return t}updated(t){super.updated(t),this.feedbackData&&this.feedbackData[0]?(this.setAttribute("type",this.feedbackData[0].type),this.currentType=this.feedbackData[0].type):this.currentType!=="success"&&this.removeAttribute("type")}render(){return v`
      ${this.feedbackData&&this.feedbackData.map(({message:t,type:e,validator:i})=>v`
          <span class="validation-feedback__type">
            ${t&&e?this._localizeManager.msg(`lion-form-core:validation${Go(e)}`):S}
          </span>
          ${this._messageTemplate({message:t,type:e,validator:i})}
        `)}
    `}};j(et,"localizeNamespaces",[{"lion-form-core":qo},...Oe(et,et,"localizeNamespaces")]);let Bt=et;class Ie extends EventTarget{constructor(t,e){super(),this.__param=t,this.__config=e||{},this.type=(e==null?void 0:e.type)||"error"}execute(t,e,i){if(!this.constructor.validatorName)throw new Error(`A validator needs to have a name! Please set it via "static get validatorName() { return 'IsCat'; }"`);return!0}set param(t){this.__param=t,this.dispatchEvent(new Event("param-changed"))}get param(){return this.__param}set config(t){this.__config=t,this.dispatchEvent(new Event("config-changed"))}get config(){return this.__config}async _getMessage(t){const e=this.constructor,i={name:e.validatorName,type:this.type,params:this.param,config:this.config,...t};if(this.config.getMessage){if(typeof this.config.getMessage=="function")return this.config.getMessage(i);throw new Error(`You must provide a value for getMessage of type 'function', you provided a value of type: ${typeof this.config.getMessage}`)}return e.getMessage(i)}static async getMessage(t){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(t){}onFormControlDisconnect(t){}abortExecution(){}}j(Ie,"_$isValidator$",!0),j(Ie,"validatorName",""),j(Ie,"async",!1);function Ai(s=[],t=[]){return s.filter(e=>!t.includes(e)).concat(t.filter(e=>!s.includes(e)))}function jo(s){return s instanceof ke?s.viewValue:s}const Wo=s=>{var t,ds,i;return i=class extends Se(Ho(nt(Be(as(s))))){constructor(){super();Q(this,t);this.hasFeedbackFor=[],this.showsFeedbackFor=[],this.shouldShowFeedbackFor=[],this.validationStates={},this.isPending=!1,this.validators=[],this.defaultValidators=[],this._visibleMessagesAmount=1,this.__syncValidationResult=[],this.__asyncValidationResult=[],this.__validationResult=[],this.__prevValidationResult=[],this.__prevShownValidationResult=[],this.__childModelValueChanged=!1,this._onValidatorUpdated=this._onValidatorUpdated.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":Bt}}static get properties(){return{validators:{attribute:!1},hasFeedbackFor:{attribute:!1},shouldShowFeedbackFor:{attribute:!1},showsFeedbackFor:{type:Array,attribute:"shows-feedback-for",reflect:!0,converter:{fromAttribute:r=>r.split(","),toAttribute:r=>r.join(",")}},validationStates:{attribute:!1},isPending:{type:Boolean,attribute:"is-pending",reflect:!0},defaultValidators:{attribute:!1},_visibleMessagesAmount:{attribute:!1},__childModelValueChanged:{attribute:!1}}}static get validationTypes(){return["error"]}get operationMode(){return"enter"}get slots(){return{...super.slots,feedback:()=>{const r=this.createScopedElement("lion-validation-feedback");return r.setAttribute("data-tag-name","lion-validation-feedback"),r}}}get _allValidators(){return[...this.validators,...this.defaultValidators]}connectedCallback(){super.connectedCallback(),Dt().addEventListener("localeChanged",this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),Dt().removeEventListener("localeChanged",this._updateFeedbackComponent)}firstUpdated(r){super.firstUpdated(r),this.__isValidateInitialized=!0,this.validate(),this._repropagationRole!=="child"&&this.addEventListener("model-value-changed",()=>{this.__childModelValueChanged=!0})}updateSync(r,n){if(super.updateSync(r,n),r==="validators"?(this.__setupValidators(),this.validate({clearCurrentResult:!0})):r==="modelValue"&&this.validate({clearCurrentResult:!0}),["touched","dirty","prefilled","focused","submitted","hasFeedbackFor","filled"].includes(r)&&this._updateShouldShowFeedbackFor(),r==="showsFeedbackFor"){this._inputNode&&this._inputNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`);const a=Ai(this.showsFeedbackFor,n);a.length>0&&this.dispatchEvent(new Event("showsFeedbackForChanged",{bubbles:!0})),a.forEach(c=>{this.dispatchEvent(new Event(`showsFeedbackFor${Bo(c)}Changed`,{bubbles:!0}))})}r==="shouldShowFeedbackFor"&&Ai(this.shouldShowFeedbackFor,n).length>0&&this.dispatchEvent(new Event("shouldShowFeedbackForChanged",{bubbles:!0}))}async validate({clearCurrentResult:r=!1}={}){if(this.validateComplete=new Promise(n=>{this.__validateCompleteResolve=n}),this.disabled||this.readOnly){this.__clearValidationResults(),this.__finishValidationPass(),this._updateFeedbackComponent();return}this.__isValidateInitialized&&(this.__prevValidationResult=this.__validationResult,r&&this.__clearValidationResults(),await this.__executeValidators())}async __executeValidators(){var m,h;const r=jo(this.modelValue),n=this.__isEmpty(r);if(this.__syncValidationResult=[],n){const u=!this._isFormOrFieldset,b=this._allValidators.find(f=>{var x;return((x=f.constructor)==null?void 0:x.validatorName)==="Required"});if(b&&(this.__syncValidationResult=[{validator:b,outcome:!0}]),u){this.__finishValidationPass({syncValidationResult:this.__syncValidationResult});return}}const a=[],c=[],p=[];for(const u of this._allValidators)u!=null&&u.executeOnResults?a.push(u):se(this,t,ds).call(this,u)||(u.constructor.async?p.push(u):c.push(u));const _=!!p.length;this.__syncValidationResult=[...this.__syncValidationResult,...this.__executeSyncValidators(c,r)],this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,metaValidators:a}),_?(this.isPending=!0,this.__asyncValidationResult=await this.__executeAsyncValidators(p,r),this.isPending=!1,this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,asyncValidationResult:this.__asyncValidationResult,metaValidators:a}),(m=this.__validateCompleteResolve)==null||m.call(this,!0)):(h=this.__validateCompleteResolve)==null||h.call(this,!0)}__executeSyncValidators(r,n){return r.map(a=>({validator:a,outcome:a.execute(n,a.param,{node:this})})).filter(a=>!!a.outcome)}async __executeAsyncValidators(r,n){const a=r.map(p=>p.execute(n,p.param,{node:this})),c=await Promise.all(a);return c.map((p,_)=>({validator:r[_],outcome:c[_]})).filter(p=>!!p.outcome)}__executeMetaValidators(r,n){return n.length?this._isEmpty(this.modelValue)?(this.__prevShownValidationResult=[],[]):n.map(a=>({validator:a,outcome:a.executeOnResults({regularValidationResult:r.map(c=>c.validator),prevValidationResult:this.__prevValidationResult.map(c=>c.validator),prevShownValidationResult:this.__prevShownValidationResult.map(c=>c.validator)})})).filter(a=>!!a.outcome):[]}__finishValidationPass({syncValidationResult:r=[],asyncValidationResult:n=[],metaValidators:a=[]}={}){const c=[...r,...n],p=this.__executeMetaValidators(c,a);this.__validationResult=[...p,...c];const m=this.constructor.validationTypes.reduce((h,u)=>({...h,[u]:{}}),{});for(const{validator:h,outcome:u}of this.__validationResult){m[h.type]||(m[h.type]={});const b=h.constructor;m[h.type][b.validatorName]=u}this.validationStates=m,this.hasFeedbackFor=[...new Set(this.__validationResult.map(({validator:h})=>h.type))],this.dispatchEvent(new Event("validate-performed",{bubbles:!0}))}__clearValidationResults(){this.__syncValidationResult=[],this.__asyncValidationResult=[]}_onValidatorUpdated(r){(r.type==="param-changed"||r.type==="config-changed")&&this.validate()}__setupValidators(){var n,a;const r=["param-changed","config-changed"];for(const c of this.__prevValidators||[]){for(const p of r)(n=c.removeEventListener)==null||n.call(c,p,this._onValidatorUpdated);c.onFormControlDisconnect(this)}for(const c of this._allValidators){if(c.constructor._$isValidator$===void 0){const u=`Validators array only accepts class instances of Validator. Type "${Array.isArray(c)?"array":typeof c}" found. This may be caused by having multiple installations of "@lion/ui/form-core.js".`;throw console.error(u,this),new Error(u)}const _=this.constructor,m=c.constructor;if(_.validationTypes.indexOf(c.type)===-1){const h=`This component does not support the validator type "${c.type}" used in "${m.validatorName}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(h,this),new Error(h)}for(const h of r)(a=c.addEventListener)==null||a.call(c,h,u=>{this._onValidatorUpdated(u,{validator:c})});c.onFormControlConnect(this)}this.__prevValidators=this._allValidators}__isEmpty(r){return typeof this._isEmpty=="function"?this._isEmpty(r):this.modelValue===null||typeof this.modelValue>"u"||this.modelValue===""}async __getFeedbackMessages(r){let n=await this.fieldName;return Promise.all(r.map(async({validator:a,outcome:c})=>{var _;return a.config.fieldName&&(n=await a.config.fieldName),{message:await a._getMessage({modelValue:this.modelValue,formControl:this,fieldName:n,outcome:c}),type:a.type,validator:a,visibilityDuration:((_=a.config)==null?void 0:_.visibilityDuration)||3e3}}))}_updateFeedbackComponent(){window.clearTimeout(this.removeMessage);const{_feedbackNode:r}=this;r&&(this.__feedbackQueue||(this.__feedbackQueue=new Po),this.showsFeedbackFor.length>0?this.__feedbackQueue.add(async()=>{const n=this._prioritizeAndFilterFeedback({validationResult:this.__validationResult.map(c=>c.validator)});this.__prioritizedResult=n.map(c=>this.__validationResult.find(_=>c===_.validator)).filter(Boolean),this.__prioritizedResult.length>0&&(this.__prevShownValidationResult=this.__prioritizedResult);const a=await this.__getFeedbackMessages(this.__prioritizedResult);r.feedbackData=a||[],a!=null&&a[0]&&a[0].type==="success"&&a[0].visibilityDuration!==1/0&&(this.removeMessage=window.setTimeout(()=>{r.removeAttribute("type"),r.feedbackData=[]},a[0].visibilityDuration))}):this.__feedbackQueue.add(async()=>{r.feedbackData=[]}),this.feedbackComplete=this.__feedbackQueue.complete)}_showFeedbackConditionFor(r,n){return!0}get _feedbackConditionMeta(){return{modelValue:this.modelValue,el:this}}feedbackCondition(r,n=this._feedbackConditionMeta,a=this._showFeedbackConditionFor.bind(this)){return a(r,n)}_hasFeedbackVisibleFor(r){var n,a;return((n=this.hasFeedbackFor)==null?void 0:n.includes(r))&&((a=this.shouldShowFeedbackFor)==null?void 0:a.includes(r))}updated(r){if(super.updated(r),r.has("shouldShowFeedbackFor")||r.has("hasFeedbackFor")){const n=this.constructor;this.showsFeedbackFor=n.validationTypes.map(a=>this._hasFeedbackVisibleFor(a)?a:void 0).filter(Boolean),this._updateFeedbackComponent()}if(r.has("__childModelValueChanged")&&this.__childModelValueChanged&&(this.validate({clearCurrentResult:!0}),this.__childModelValueChanged=!1),r.has("validationStates")){const n=r.get("validationStates");n&&Object.entries(this.validationStates).forEach(([a,c])=>{n[a]&&JSON.stringify(c)!==JSON.stringify(n[a])&&this.dispatchEvent(new CustomEvent(`${a}StateChanged`,{detail:c}))})}}_updateShouldShowFeedbackFor(){const n=this.constructor.validationTypes.map(a=>this.feedbackCondition(a,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))?a:void 0).filter(Boolean);JSON.stringify(this.shouldShowFeedbackFor)!==JSON.stringify(n)&&(this.shouldShowFeedbackFor=n)}_prioritizeAndFilterFeedback({validationResult:r}){const a=this.constructor.validationTypes;return r.filter(p=>this.feedbackCondition(p.type,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))).sort((p,_)=>a.indexOf(p.type)-a.indexOf(_.type)).slice(0,this._visibleMessagesAmount)}},t=new WeakSet,ds=function(r){let n=r;for(;n;){if(n.constructor.validatorName==="Required")return!0;n=Object.getPrototypeOf(n)}return!1},i},at=$(Wo),Ko=s=>{var t,e,Ut,Ht,r;return r=class extends at(Se(s)){constructor(){super();Q(this,e);Q(this,t,{didFormatterOutputSyncToView:!1,didFormatterRun:!1});this.formatOn="change",this.formatOptions={mode:"auto"},this.formattedValue=void 0,this.serializedValue=void 0,this._isPasting=!1,this._isHandlingUserInput=!1,this.__prevViewValue="",this.__onCompositionEvent=this.__onCompositionEvent.bind(this),this.addEventListener("user-input-changed",this._onUserInputChanged),this.addEventListener("paste",this.__onPaste),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)}}static get properties(){return{formattedValue:{attribute:!1},serializedValue:{attribute:!1},formatOptions:{attribute:!1}}}requestUpdate(c,p,_){super.requestUpdate(c,p,_),c==="modelValue"&&this.modelValue!==p&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:p}),c==="serializedValue"&&this.serializedValue!==p&&this._calculateValues({source:"serialized"}),c==="formattedValue"&&this.formattedValue!==p&&this._calculateValues({source:"formatted"})}get value(){var c;return((c=this._inputNode)==null?void 0:c.value)||this.__value||""}set value(c){this._inputNode?(this._inputNode.value=c,this.__value=void 0):this.__value=c}preprocessor(c,p){}parser(c,p){return c}formatter(c,p){return c}serializer(c){return c!==void 0?c:""}deserializer(c){return c===void 0?"":c}_calculateValues({source:c}={source:null}){this.__preventRecursiveTrigger||(this.__preventRecursiveTrigger=!0,c!=="model"&&(c==="serialized"?this.modelValue=this.deserializer(this.serializedValue):c==="formatted"&&(this.modelValue=this._callParser())),c!=="formatted"&&(this.formattedValue=this._callFormatter()),c!=="serialized"&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.__preventRecursiveTrigger=!1,this.__prevViewValue=this.value)}_callParser(c=this.formattedValue){if(c==="")return"";if(typeof c!="string")return;const p=this.parser(c,{...this.formatOptions,mode:se(this,e,Ut).call(this),viewValueStates:se(this,e,Ht).call(this)});return p!==void 0?p:new ke(c)}_callFormatter(){var c;return P(this,t).didFormatterRun=!1,this._isHandlingUserInput&&((c=this.hasFeedbackFor)!=null&&c.includes("error"))&&this._inputNode?this.value:this.modelValue instanceof ke?this.modelValue.viewValue:(P(this,t).didFormatterRun=!0,this.formatter(this.modelValue,{...this.formatOptions,mode:se(this,e,Ut).call(this),viewValueStates:se(this,e,Ht).call(this)}))}_onModelValueChanged(...c){this._calculateValues({source:"model"}),this._dispatchModelValueChangedEvent(...c)}_dispatchModelValueChangedEvent(...c){this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:!!this._isHandlingUserInput}}))}_syncValueUpwards(){this.__isHandlingComposition||this.__handlePreprocessor();const c=this.formattedValue;this.modelValue=this._callParser(this.value),c===this.formattedValue&&this.__prevViewValue!==this.value&&this._calculateValues()}__handlePreprocessor(){var _;let c=this.value.length;this._inputNode&&"selectionStart"in this._inputNode&&((_=this._inputNode)==null?void 0:_.type)!=="range"&&(c=this._inputNode.selectionStart);const p=this.preprocessor(this.value,{...this.formatOptions,currentCaretIndex:c,prevViewValue:this.__prevViewValue});if(p!==void 0){if(typeof p=="string")this.value=p;else if(typeof p=="object"){const{viewValue:m,caretIndex:h}=p;this.value=m,h&&this._inputNode&&"selectionStart"in this._inputNode&&(this._inputNode.selectionStart=h,this._inputNode.selectionEnd=h)}}}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=typeof this.formattedValue<"u"?this.formattedValue:"",P(this,t).didFormatterOutputSyncToView=!!this.formattedValue&&P(this,t).didFormatterRun)}_reflectBackOn(){return!this._isHandlingUserInput}_proxyInputEvent(){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}_onUserInputChanged(){this._isHandlingUserInput=!0,this._syncValueUpwards(),this._isHandlingUserInput=!1}__onCompositionEvent({type:c}){c==="compositionstart"?this.__isHandlingComposition=!0:c==="compositionend"&&(this.__isHandlingComposition=!1,this._syncValueUpwards())}__onPaste(){this._isPasting=!0,setTimeout(()=>{this._isPasting=!1})}connectedCallback(){super.connectedCallback(),typeof this.modelValue>"u"&&this._syncValueUpwards(),this.__prevViewValue=this.value,this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener("input",this._proxyInputEvent),this._inputNode.addEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.addEventListener("compositionend",this.__onCompositionEvent))}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&(this._inputNode.removeEventListener("input",this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.removeEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.removeEventListener("compositionend",this.__onCompositionEvent))}},t=new WeakMap,e=new WeakSet,Ut=function(){return this._isPasting?"pasted":this._isHandlingUserInput&&this.__prevViewValue?"user-edited":"auto"},Ht=function(){const c=[];return P(this,t).didFormatterOutputSyncToView&&c.push("formatted"),c},r},si=$(Ko),Yo=s=>class extends Se(s){static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},filled:{type:Boolean,reflect:!0},prefilled:{attribute:!1},submitted:{attribute:!1}}}requestUpdate(e,i,o){super.requestUpdate(e,i,o),e==="touched"&&this.touched!==i&&this._onTouchedChanged(),e==="modelValue"&&(this.filled=!this._isEmpty()),e==="dirty"&&this.dirty!==i&&this._onDirtyChanged()}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this.filled=!1,this._leaveEvent="blur",this._valueChangedEvent="model-value-changed",this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=!this._isEmpty()}_iStateOnLeave(){this.touched=!0,this.prefilled=!this._isEmpty()}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.submitted=!1,this.dirty=!1,this.prefilled=!this._isEmpty()}_onTouchedChanged(){this.dispatchEvent(new Event("touched-changed",{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new Event("dirty-changed",{bubbles:!0,composed:!0}))}_showFeedbackConditionFor(e,i){return i.touched&&i.dirty||i.prefilled||i.submitted}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,submitted:this.submitted,touched:this.touched,dirty:this.dirty,filled:this.filled,prefilled:this.prefilled}}},oi=$(Yo);class cs extends Se(oi(ti(si(at(Be(J)))))){firstUpdated(t){super.firstUpdated(t),this._initialModelValue=this.modelValue}connectedCallback(){super.connectedCallback(),this._onChange=this._onChange.bind(this),this._inputNode.addEventListener("change",this._onChange),this.classList.add("form-field")}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._inputNode)==null||t.removeEventListener("change",this._onChange)}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.resetInteractionState()}clear(){this.modelValue=""}_onChange(t){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}class qt extends Array{_keys(){return Object.keys(this).filter(t=>Number.isNaN(Number(t)))}}const Zo=s=>class extends ii(s){static get properties(){return{_isFormOrFieldset:{type:Boolean}}}constructor(){super(),this.formElements=new qt,this._isFormOrFieldset=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this._onRequestToChangeFormElementName=this._onRequestToChangeFormElementName.bind(this),this.addEventListener("form-element-register",this._onRequestToAddFormElement),this.addEventListener("form-element-name-changed",this._onRequestToChangeFormElementName),this.initComplete=new Promise((t,e)=>{this.__resolveInitComplete=t,this.__rejectInitComplete=e}),this.registrationComplete=new Promise((t,e)=>{this.__resolveRegistrationComplete=t,this.__rejectRegistrationComplete=e}),this.registrationComplete.done=!1,this.registrationComplete.then(()=>{this.registrationComplete.done=!0,this.__resolveInitComplete(void 0)},()=>{throw this.registrationComplete.done=!0,this.__rejectInitComplete(void 0),new Error("Registration could not finish. Please use await el.registrationComplete;")})}connectedCallback(){super.connectedCallback(),this._completeRegistration()}_completeRegistration(){Promise.resolve().then(()=>this.__resolveRegistrationComplete(void 0))}disconnectedCallback(){super.disconnectedCallback(),this.registrationComplete.done===!1&&Promise.resolve().then(()=>{Promise.resolve().then(()=>{this.__rejectRegistrationComplete()})})}isRegisteredFormElement(t){return this.formElements.some(e=>e===t)}addFormElement(t,e){if(t._parentFormGroup=this,e>=0?this.formElements.splice(e,0,t):this.formElements.push(t),this._isFormOrFieldset){const{name:i}=t;if(i===this.name)throw console.info("Error Node:",t),new TypeError(`You can not have the same name "${i}" as your parent`);if(i.substr(-2)==="[]")Array.isArray(this.formElements[i])||(this.formElements[i]=new qt),e>0?this.formElements[i].splice(e,0,t):this.formElements[i].push(t);else if(!this.formElements[i])this.formElements[i]=t;else throw console.info("Error Node:",t),new TypeError(`Name "${i}" is already registered - if you want an array add [] to the end`)}}removeFormElement(t){const e=this.formElements.indexOf(t);if(e>-1&&this.formElements.splice(e,1),this._isFormOrFieldset){const{name:i}=t;if(i.substr(-2)==="[]"&&this.formElements[i]){const o=this.formElements[i].indexOf(t);o>-1&&this.formElements[i].splice(o,1)}else this.formElements[i]&&delete this.formElements[i]}}_onRequestToAddFormElement(t){const e=t.detail.element;if(e===this||this.isRegisteredFormElement(e))return;t.stopPropagation();let i=-1;if(this.formElements&&Array.isArray(this.formElements)){for(const[o,r]of this.formElements.entries())if(!(r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)){i=o;break}}this.addFormElement(e,i)}_onRequestToChangeFormElementName(t){const e=this.formElements[t.detail.oldName];e&&(this.formElements[t.detail.newName]=e,delete this.formElements[t.detail.oldName])}_onRequestToRemoveFormElement(t){const e=t.detail.element;e!==this&&this.isRegisteredFormElement(e)&&(t.stopPropagation(),this.removeFormElement(e))}},ri=$(Zo),Jo=s=>class extends s{constructor(){super(),this.registrationTarget=void 0,this.__redispatchEventForFormRegistrarPortalMixin=this.__redispatchEventForFormRegistrarPortalMixin.bind(this),this.addEventListener("form-element-register",this.__redispatchEventForFormRegistrarPortalMixin)}__redispatchEventForFormRegistrarPortalMixin(t){if(t.stopPropagation(),!this.registrationTarget)throw new Error("A FormRegistrarPortal element requires a .registrationTarget");this.registrationTarget.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:t.detail.element},bubbles:!0}))}},Xo=$(Jo),Qo=s=>class extends si(ti(Se(s))){static get properties(){return{autocomplete:{type:String,reflect:!0}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return super._inputNode}get selectionStart(){const e=this._inputNode;return e&&e.selectionStart?e.selectionStart:0}set selectionStart(e){const i=this._inputNode;i&&i.selectionStart&&(i.selectionStart=e)}get selectionEnd(){const e=this._inputNode;return e&&e.selectionEnd?e.selectionEnd:0}set selectionEnd(e){const i=this._inputNode;i&&i.selectionEnd&&(i.selectionEnd=e)}get value(){return this._inputNode&&this._inputNode.value||this.__value||""}set value(e){this._inputNode?(this._inputNode.value!==e&&this._setValueAndPreserveCaret(e),this.__value=void 0):this.__value=e}_setValueAndPreserveCaret(e){if(this.focused)try{if(!(this._inputNode instanceof HTMLSelectElement)){const i=this._inputNode.selectionStart;this._inputNode.value=e,this._inputNode.selectionStart=i,this._inputNode.selectionEnd=i}}catch{this._inputNode.value=e}else this._inputNode.value=e}_reflectBackFormattedValueToUser(){if(super._reflectBackFormattedValueToUser(),this._reflectBackOn()&&this.focused)try{this._inputNode.selectionStart=this._inputNode.value.length}catch{}}get _focusableNode(){return this._inputNode}},hs=$(Qo);class us extends Ie{static get validatorName(){return"Required"}static get _compatibleRoles(){return["combobox","gridcell","input","listbox","radiogroup","select","spinbutton","textarea","textbox","tree"]}static get _compatibleTags(){return["input","select","textarea"]}onFormControlConnect({_inputNode:t}){if(t){const e=t.getAttribute("role")||"",i=t.tagName.toLowerCase(),o=this.constructor;(o._compatibleRoles.includes(e)||o._compatibleTags.includes(i))&&t.setAttribute("aria-required","true")}}onFormControlDisconnect({_inputNode:t}){t&&t.removeAttribute("aria-required")}}const er=s=>class extends ri(at(oi(s))){static get properties(){return{multipleChoice:{type:Boolean,attribute:"multiple-choice"}}}get modelValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(i=>i.choiceValue):e[0]?e[0].choiceValue:""}set modelValue(e){const i=(o,r)=>typeof o.choiceValue=="object"?JSON.stringify(o.choiceValue)===JSON.stringify(e):o.choiceValue===r;this.__isInitialModelValue?this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this._setCheckedElements(e,i),this.requestUpdate("modelValue",this._oldModelValue)}):(this._setCheckedElements(e,i),this.requestUpdate("modelValue",this._oldModelValue)),this._oldModelValue=this.modelValue}get serializedValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(i=>i.serializedValue.value):e[0]?e[0].serializedValue.value:""}set serializedValue(e){const i=(o,r)=>o.serializedValue.value===r;this.__isInitialSerializedValue?this.registrationComplete.then(()=>{this.__isInitialSerializedValue=!1,this._setCheckedElements(e,i),this.requestUpdate("serializedValue")}):(this._setCheckedElements(e,i),this.requestUpdate("serializedValue"))}get formattedValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(i=>i.formattedValue):e[0]?e[0].formattedValue:""}set formattedValue(e){const i=(o,r)=>o.formattedValue===r;this.__isInitialFormattedValue?this.registrationComplete.then(()=>{this.__isInitialFormattedValue=!1,this._setCheckedElements(e,i)}):this._setCheckedElements(e,i)}get operationMode(){return this._repropagationRole==="choice-group"?"select":"enter"}constructor(){super(),this.multipleChoice=!1,this._repropagationRole="choice-group",this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this.__isInitialFormattedValue=!0}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__isInitialFormattedValue=!1})}_completeRegistration(){Promise.resolve().then(()=>super._completeRegistration())}updated(e){super.updated(e),e.has("name")&&this.name!==e.get("name")&&this.formElements.forEach(i=>{i.name=this.name})}addFormElement(e,i){this._throwWhenInvalidChildModelValue(e),e.name=this.name,super.addFormElement(e,i)}clear(){this.multipleChoice?this.modelValue=[]:this.modelValue=""}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}_getFromAllFormElementsFilter(e,i){return!0}_getFromAllFormElements(e,i){var n;const o=i||this._getFromAllFormElementsFilter;if(e==="modelValue"||e==="serializedValue"||e==="formattedValue")return this[e];const r=this.formElements.filter(a=>o(a,e));return e==="_initialModelValue"?this.multipleChoice?r.filter(a=>a[e].checked).map(a=>a[e].value):(n=r.find(a=>a[e].checked))==null?void 0:n.value:r.map(a=>a[e])}_throwWhenInvalidChildModelValue(e){if(typeof e.modelValue.checked!="boolean"||!Object.prototype.hasOwnProperty.call(e.modelValue,"value"))throw new Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${e.tagName.toLowerCase()} with .modelValue="${e.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){return this.multipleChoice?this.modelValue.length===0:typeof this.modelValue=="string"&&this.modelValue===""||this.modelValue===void 0||this.modelValue===null}_checkSingleChoiceElements(e){const{target:i}=e;if(i.checked===!1)return;const o=i.name;this.formElements.filter(r=>r.name===o).forEach(r=>{r!==i&&(r.checked=!1)})}_getCheckedElements(){return this.formElements.filter(e=>e.checked&&!e.disabled)}_setCheckedElements(e,i){if(e==null){this.formElements.forEach(o=>o.checked=!1);return}for(let o=0;o<this.formElements.length;o+=1)if(this.multipleChoice){let r=e.includes(this.formElements[o].modelValue.value);typeof this.formElements[o].modelValue.value=="object"&&(r=e.map(n=>JSON.stringify(n)).includes(JSON.stringify(this.formElements[o].modelValue.value))),this.formElements[o].checked=r}else i(this.formElements[o],e)?this.formElements[o].checked=!0:this.formElements[o].checked=!1}__setChoiceGroupTouched(){const e=this.modelValue;e!=null&&e!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=e)}_onBeforeRepropagateChildrenValues(e){const i=e.detail&&e.detail.element||e.target;this.multipleChoice||!i.checked||(this.formElements.forEach(o=>{i.choiceValue!==o.choiceValue&&(o.checked=!1)}),this.__setChoiceGroupTouched(),this.requestUpdate("modelValue",this._oldModelValue),this._oldModelValue=this.modelValue)}_repropagationCondition(e){return!(this._repropagationRole==="choice-group"&&!this.multipleChoice&&!e.checked)}},ps=$(er),tr=(s,t={})=>s.value!==t.value||s.checked!==t.checked,ir=s=>class extends si(s){static get properties(){return{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},modelValue:{type:Object,hasChanged:tr},choiceValue:{type:Object}}}get choiceValue(){return this.modelValue.value}set choiceValue(e){this.requestUpdate("choiceValue",this.choiceValue),this.modelValue.value!==e&&(this.modelValue={value:e,checked:this.modelValue.checked})}requestUpdate(e,i,o){super.requestUpdate(e,i,o),e==="modelValue"?this.modelValue.checked!==this.checked&&this.__syncModelCheckedToChecked(this.modelValue.checked):e==="checked"&&this.modelValue.checked!==this.checked&&this.__syncCheckedToModel(this.checked)}firstUpdated(e){super.firstUpdated(e),e.has("checked")&&this.__syncCheckedToInputElement()}updated(e){super.updated(e),e.has("modelValue")&&this.__syncCheckedToInputElement(),e.has("name")&&this._parentFormGroup&&this._parentFormGroup.name!==this.name&&this._syncNameToParentFormGroup()}constructor(){super(),this.modelValue={value:"",checked:!1},this.disabled=!1,this._preventDuplicateLabelClick=this._preventDuplicateLabelClick.bind(this),this._toggleChecked=this._toggleChecked.bind(this)}static get styles(){return[...super.styles||[],U`
          :host {
            display: flex;
            flex-wrap: wrap;
          }

          :host([hidden]) {
            display: none;
          }

          .choice-field__graphic-container {
            display: none;
          }
          .choice-field__help-text {
            display: block;
            flex-basis: 100%;
          }
        `]}render(){return v`
        <slot name="input"></slot>
        <div class="choice-field__graphic-container" aria-hidden="true">
          ${this._choiceGraphicTemplate()}
        </div>
        <div class="choice-field__label">
          <slot name="label"></slot>
        </div>
        <small class="choice-field__help-text">
          <slot name="help-text"></slot>
        </small>
        ${this._afterTemplate()}
      `}_choiceGraphicTemplate(){return S}_afterTemplate(){return S}connectedCallback(){super.connectedCallback(),this._labelNode&&this._labelNode.addEventListener("click",this._preventDuplicateLabelClick),this.addEventListener("user-input-changed",this._toggleChecked)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._preventDuplicateLabelClick),this.removeEventListener("user-input-changed",this._toggleChecked)}_preventDuplicateLabelClick(e){const i=o=>{o.stopImmediatePropagation(),this._inputNode.removeEventListener("click",i)};this._inputNode.addEventListener("click",i)}_toggleChecked(e){this.disabled||(this._isHandlingUserInput=!0,this.checked=!this.checked,this._isHandlingUserInput=!1)}_syncNameToParentFormGroup(){var e;this._parentFormGroup.tagName.includes(this.tagName)&&(this.name=((e=this._parentFormGroup)==null?void 0:e.name)||"")}__syncModelCheckedToChecked(e){this.checked=e}__syncCheckedToModel(e){this.modelValue={value:this.choiceValue,checked:e}}__syncCheckedToInputElement(){this._inputNode&&(this._inputNode.checked=this.checked)}_proxyInputEvent(){}_onModelValueChanged({modelValue:e},i){let o;i&&i.modelValue&&(o=i.modelValue),this.constructor.elementProperties.get("modelValue").hasChanged(e,o)&&super._onModelValueChanged({modelValue:e})}parser(){return this.modelValue}formatter(e){return e&&e.value!==void 0?e.value:e}clear(){this.checked=!1}_isEmpty(){return!this.checked}_syncValueUpwards(){}},sr=$(ir);class or extends Ie{static get validatorName(){return"FormElementsHaveNoError"}execute(t,e,i){return i==null?void 0:i.node._anyFormElementHasFeedbackFor("error")}static async getMessage(){return""}}const rr=s=>class extends ri(Se(at(nt(Be(s))))){static get properties(){return{submitted:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},touched:{type:Boolean,reflect:!0},prefilled:{type:Boolean,reflect:!0}}}get _inputNode(){return this}get modelValue(){return this._getFromAllFormElements("modelValue")}set modelValue(e){this.__isInitialModelValue?(this.__isInitialModelValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("modelValue",e)})):this._setValueMapForAllFormElements("modelValue",e)}get serializedValue(){return this._getFromAllFormElements("serializedValue")}set serializedValue(e){this.__isInitialSerializedValue?(this.__isInitialSerializedValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("serializedValue",e)})):this._setValueMapForAllFormElements("serializedValue",e)}get formattedValue(){return this._getFromAllFormElements("formattedValue")}set formattedValue(e){this._setValueMapForAllFormElements("formattedValue",e)}get prefilled(){return this._everyFormElementHas("prefilled")}constructor(){super(),this.value="",this.disabled=!1,this.submitted=!1,this.dirty=!1,this.touched=!1,this.focused=!1,this.__addedSubValidators=!1,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this._checkForOutsideClick=this._checkForOutsideClick.bind(this),this.addEventListener("focusin",this._syncFocused),this.addEventListener("focusout",this._onFocusOut),this.addEventListener("dirty-changed",this._syncDirty),this.addEventListener("validate-performed",this.__onChildValidatePerformed),this.defaultValidators=[new or],this.__descriptionElementsInParentChain=new Set,this.__pendingValues={modelValue:{},serializedValue:{}}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group"),this.initComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__initInteractionStates()})}disconnectedCallback(){super.disconnectedCallback(),this.__hasActiveOutsideClickHandling&&(document.removeEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!1),this.__descriptionElementsInParentChain.clear()}__initInteractionStates(){this.formElements.forEach(e=>{typeof e.initInteractionState=="function"&&e.initInteractionState()})}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.__requestChildrenToBeDisabled():this.__retractRequestChildrenToBeDisabled()),e.has("focused")&&this.focused===!0&&this.__setupOutsideClickHandling()}__setupOutsideClickHandling(){this.__hasActiveOutsideClickHandling||(document.addEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!0)}_checkForOutsideClick(e){!this.contains(e.target)&&(this.touched=!0)}__requestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}_inputGroupTemplate(){return v`
        <div class="input-group">
          <slot></slot>
        </div>
      `}submitGroup(){this.submitted=!0,this.formElements.forEach(e=>{typeof e.submitGroup=="function"?e.submitGroup():e.submitted=!0})}resetGroup(){this.formElements.forEach(e=>{typeof e.resetGroup=="function"?e.resetGroup():typeof e.reset=="function"&&e.reset()}),this.resetInteractionState()}clearGroup(){this.formElements.forEach(e=>{typeof e.clearGroup=="function"?e.clearGroup():typeof e.clear=="function"&&e.clear()}),this.resetInteractionState()}resetInteractionState(){this.submitted=!1,this.touched=!1,this.dirty=!1,this.formElements.forEach(e=>{typeof e.resetInteractionState=="function"&&e.resetInteractionState()})}_getFromAllFormElementsFilter(e,i){return!e.disabled}_getFromAllFormElements(e,i){const o={},r=i||this._getFromAllFormElementsFilter;return this.formElements._keys().forEach(n=>{const a=this.formElements[n];a instanceof qt?o[n]=a.filter(c=>r(c,e)).map(c=>c[e]):r(a,e)&&(typeof a._getFromAllFormElements=="function"?o[n]=a._getFromAllFormElements(e):o[n]=a[e])}),o}_setValueForAllFormElements(e,i){this.formElements.forEach(o=>{o[e]=i})}_setValueMapForAllFormElements(e,i){i&&typeof i=="object"&&Object.keys(i).forEach(o=>{Array.isArray(this.formElements[o])&&this.formElements[o].forEach((r,n)=>{r[e]=i[o][n]}),this.formElements[o]?this.formElements[o][e]=i[o]:this.__pendingValues[e][o]=i[o]})}_anyFormElementHas(e){return Object.keys(this.formElements).some(i=>Array.isArray(this.formElements[i])?this.formElements[i].some(o=>!!o[e]):!!this.formElements[i][e])}_anyFormElementHasFeedbackFor(e){return Object.keys(this.formElements).some(i=>Array.isArray(this.formElements[i])?this.formElements[i].some(o=>!!(o.hasFeedbackFor&&o.hasFeedbackFor.includes(e))):!!(this.formElements[i].hasFeedbackFor&&this.formElements[i].hasFeedbackFor.includes(e)))}_everyFormElementHas(e){return Object.keys(this.formElements).every(i=>Array.isArray(this.formElements[i])?this.formElements[i].every(o=>!!o[e]):!!this.formElements[i][e])}__onChildValidatePerformed(e){e&&this.isRegisteredFormElement(e.target)&&this.validate()}_syncFocused(){this.focused=this._anyFormElementHas("focused")}_onFocusOut(e){const i=this.formElements[this.formElements.length-1];e.target===i&&(this.touched=!0),this.focused=!1}_syncDirty(){this.dirty=this._anyFormElementHas("dirty")}__storeAllDescriptionElementsInParentChain(){let i=this;for(;i;){const o=i._getAriaDescriptionElements();ls(o,{reverse:!0}).forEach(n=>{n.getAttribute("slot")==="feedback"&&this.__descriptionElementsInParentChain.add(n)}),i=i._parentFormGroup}}__linkParentMessages(e){this.__descriptionElementsInParentChain.forEach(i=>{typeof e.addToAriaDescribedBy=="function"&&e.addToAriaDescribedBy(i,{reorder:!1})})}__unlinkParentMessages(e){this.__descriptionElementsInParentChain.forEach(i=>{typeof e.removeFromAriaDescribedBy=="function"&&e.removeFromAriaDescribedBy(i)})}addFormElement(e,i){if(super.addFormElement(e,i),this.disabled&&e.makeRequestToBeDisabled(),this.__descriptionElementsInParentChain.size||this.__storeAllDescriptionElementsInParentChain(),this.__linkParentMessages(e),this.validate({clearCurrentResult:!0}),!e.modelValue){const o=this.__pendingValues;o.modelValue&&o.modelValue[e.name]?e.modelValue=o.modelValue[e.name]:o.serializedValue&&o.serializedValue[e.name]&&(e.serializedValue=o.serializedValue[e.name])}}get _initialModelValue(){return this._getFromAllFormElements("_initialModelValue")}removeFormElement(e){super.removeFormElement(e),this.validate({clearCurrentResult:!0}),typeof e.removeFromAriaLabelledBy=="function"&&this._labelNode&&e.removeFromAriaLabelledBy(this._labelNode,{reorder:!1}),this.__unlinkParentMessages(e)}_isEmpty(){return this.formElements.every(e=>{var i;return(i=e._isEmpty)==null?void 0:i.call(e)})}},nr=$(rr);class ar extends Xo(J){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox")}createRenderRoot(){return this}}const lr=s=>class extends Se(as(ps(Be(ri(s))))){static get properties(){return{orientation:String,selectionFollowsFocus:{type:Boolean,attribute:"selection-follows-focus"},rotateKeyboardNavigation:{type:Boolean,attribute:"rotate-keyboard-navigation"},hasNoDefaultSelected:{type:Boolean,reflect:!0,attribute:"has-no-default-selected"},_noTypeAhead:{type:Boolean}}}static get styles(){return[...super.styles||[],U`
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
        `]}_inputGroupInputTemplate(){return v`
        <div class="input-group__input">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      `}static get scopedElements(){return{...super.scopedElements,"lion-options":ar}}get slots(){return{...super.slots,input:()=>{const e=this.createScopedElement("lion-options");return e.setAttribute("data-tag-name","lion-options"),e.registrationTarget=this,e}}}get _inputNode(){return this.querySelector('[slot="input"]')}get _listboxNode(){return this._inputNode}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get _listboxSlot(){return this.shadowRoot.querySelector("slot[name=input]")}get _scrollTargetNode(){return this._listboxNode}get _activeDescendantOwnerNode(){return this._listboxNode}get activeIndex(){return this.formElements.findIndex(e=>e.active===!0)}set activeIndex(e){if(this.formElements[e]){const i=this.formElements[e];this.__setChildActive(i)}else this.__setChildActive(null)}get checkedIndex(){const e=this.formElements;return this.multipleChoice?e.filter(i=>i.checked).map(i=>e.indexOf(i)):e.indexOf(e.find(i=>i.checked))}set checkedIndex(e){this.setCheckedIndex(e)}constructor(){super(),this.hasNoDefaultSelected=!1,this.orientation="vertical",this.rotateKeyboardNavigation=!1,this.selectionFollowsFocus=!1,this._noTypeAhead=!1,this._typeAheadTimeout=1e3,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this._repropagationRole="choice-group",this._listboxReceivesNoFocus=!1,this._oldModelValue=void 0,this._listboxOnKeyDown=this._listboxOnKeyDown.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this),this._listboxOnKeyUp=this._listboxOnKeyUp.bind(this),this._onChildActiveChanged=this._onChildActiveChanged.bind(this),this.__proxyChildModelValueChanged=this.__proxyChildModelValueChanged.bind(this),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.__typedChars=[]}connectedCallback(){this._listboxNode&&(this._listboxNode.registrationTarget=this),super.connectedCallback(),this._setupListboxNode(),this.__setupEventListeners(),this.registrationComplete.then(()=>{this.__initInteractionStates()})}firstUpdated(e){super.firstUpdated(e),this.__moveOptionsToListboxNode(),this.registrationComplete.then(()=>{this._initialModelValue=this.modelValue}),new MutationObserver(()=>{this._onListboxContentChanged()}).observe(this._listboxNode,{childList:!0})}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.__requestOptionsToBeDisabled():this.__retractRequestOptionsToBeDisabled())}disconnectedCallback(){super.disconnectedCallback(),this._teardownListboxNode(),this.__teardownEventListeners()}setCheckedIndex(e){if(this.multipleChoice&&Array.isArray(e)){this._uncheckChildren(this.formElements.filter(i=>i===e)),e.forEach(i=>{this.formElements[i]&&(this.formElements[i].checked=!this.formElements[i].checked)});return}typeof e=="number"&&(e===-1&&this._uncheckChildren(),this.formElements[e]&&(this.formElements[e].disabled?this._uncheckChildren():this.multipleChoice?this.formElements[e].checked=!this.formElements[e].checked:this.formElements[e].checked=!0))}addFormElement(e,i){super.addFormElement(e,i),e.id=e.id||`${this.localName}-option-${Zi()}`,this.disabled&&e.makeRequestToBeDisabled(),this.__setAttributeForAllFormElements("aria-setsize",this.formElements.length),this.formElements.forEach((o,r)=>{o.setAttribute("aria-posinset",r+1)}),this.__proxyChildModelValueChanged({target:e}),this.resetInteractionState()}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.activeIndex=-1,this.resetInteractionState()}clear(){super.clear(),this.setCheckedIndex(-1)}_handleTypeAhead(e,{setAsChecked:i}){const{key:o,code:r}=e;if(r.startsWith("Key")||r.startsWith("Digit")||r.startsWith("Numpad")){e.preventDefault(),this.__typedChars.push(o);const n=this.__typedChars.join(""),a=this.formElements.findIndex(c=>c.modelValue.value.toLowerCase().startsWith(n));a>=0&&(i&&this.setCheckedIndex(a),this.activeIndex=a),this.__pendingTypeAheadTimeout&&window.clearTimeout(this.__pendingTypeAheadTimeout),this.__pendingTypeAheadTimeout=setTimeout(()=>{this.__typedChars=[]},this._typeAheadTimeout)}}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_setupListboxNode(){this._listboxNode?this.__setupListboxNodeInteractions():this._listboxSlot&&this._listboxSlot.addEventListener("slotchange",()=>{this.__setupListboxNodeInteractions()})}_onListboxContentChanged(){}_teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener("keydown",this._listboxOnKeyDown),this._listboxNode.removeEventListener("click",this._listboxOnClick),this._listboxNode.removeEventListener("keyup",this._listboxOnKeyUp))}_getNextEnabledOption(e,i=1){return this.__getEnabledOption(e,i)}_getPreviousEnabledOption(e,i=-1){return this.__getEnabledOption(e,i)}_onChildActiveChanged({target:e}){e.active===!0&&this.__setChildActive(e)}_listboxOnKeyDown(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:i}=e;switch(i){case" ":case"Enter":{if(i===" "&&this._listboxReceivesNoFocus||(i===" "&&e.preventDefault(),!this.formElements[this.activeIndex])||this.formElements[this.activeIndex].disabled)return;this.formElements[this.activeIndex].href&&this.formElements[this.activeIndex].click(),this.setCheckedIndex(this.activeIndex);break}case"ArrowUp":e.preventDefault(),this.orientation==="vertical"&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowLeft":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.orientation==="horizontal"&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowDown":e.preventDefault(),this.orientation==="vertical"&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"ArrowRight":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.orientation==="horizontal"&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"Home":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getNextEnabledOption(0,0);break;case"End":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getPreviousEnabledOption(this.formElements.length-1,0);break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:this.selectionFollowsFocus&&!this.multipleChoice})}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(i)&&this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex)}_listboxOnClick(e){}_listboxOnKeyUp(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:i}=e;switch(i){case"ArrowUp":case"ArrowDown":case"Home":case"End":case"Enter":e.preventDefault()}}_onLabelClick(){this._listboxNode.focus()}_scrollIntoView(e,i){e.scrollIntoView({behavior:"smooth",block:"nearest"})}__setupEventListeners(){this._listboxNode.addEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.addEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__teardownEventListeners(){this._listboxNode.removeEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.removeEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__setChildActive(e){if(this.formElements.forEach(i=>{i.active=e===i}),!e){this._activeDescendantOwnerNode.removeAttribute("aria-activedescendant");return}this._activeDescendantOwnerNode.setAttribute("aria-activedescendant",e.id),this._scrollIntoView(e,this._scrollTargetNode)}_uncheckChildren(e=[]){const i=Array.isArray(e)?e:[e];this.formElements.forEach(o=>{i.includes(o)||(o.checked=!1)})}__onChildCheckedChanged(e){const{target:i}=e;e.stopPropagation&&e.stopPropagation(),i.checked&&!this.multipleChoice&&this._uncheckChildren(i)}__setAttributeForAllFormElements(e,i){this.formElements.forEach(o=>{o.setAttribute(e,i)})}__proxyChildModelValueChanged(e){e.stopPropagation&&e.stopPropagation(),this.__onChildCheckedChanged(e),this.requestUpdate("modelValue",this._oldModelValue),e.detail&&e.detail.formPath&&this.dispatchEvent(new CustomEvent("model-value-changed",{detail:{formPath:e.detail.formPath,isTriggeredByUser:e.detail.isTriggeredByUser||this._isHandlingUserInput,element:e.target}})),this._oldModelValue=this.modelValue}__getEnabledOption(e,i){const o=r=>i===1?r<this.formElements.length:r>=0;for(let r=e+i;o(r);r+=i)if(this.formElements[r]&&!this.formElements[r].hasAttribute("aria-hidden"))return r;if(this.rotateKeyboardNavigation){const r=i===-1?this.formElements.length-1:0;for(let n=r;o(n);n+=i)if(this.formElements[n]&&!this.formElements[n].hasAttribute("aria-hidden"))return n}return e}__moveOptionsToListboxNode(){const e=this.shadowRoot.getElementById("options-outlet");e&&(xi(this,this._listboxNode),e.addEventListener("slotchange",()=>{xi(this,this._listboxNode)}))}__preventScrollingWithArrowKeys(e){if(this.disabled)return;const{key:i}=e;switch(i){case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault()}}__setupListboxNodeInteractions(){this._listboxNode.setAttribute("role","listbox"),this._listboxNode.setAttribute("aria-orientation",this.orientation),this._listboxNode.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this._listboxNode.setAttribute("tabindex","0"),this._listboxNode.addEventListener("click",this._listboxOnClick),this._listboxNode.addEventListener("keyup",this._listboxOnKeyUp),this._listboxNode.addEventListener("keydown",this._listboxOnKeyDown),this._scrollTargetNode.addEventListener("keydown",this.__preventScrollingWithArrowKeys)}__requestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}__initInteractionStates(){this.initInteractionState()}},dr=$(lr);class fs extends dr(ti(oi(at(J)))){get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}class cr extends nt(sr(ii(Be(J)))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[U`
        :host {
          display: block;
          background-color: white;
          padding: 4px;
          cursor: default;
        }

        :host([hidden]) {
          display: none;
        }

        :host(:hover) {
          background-color: #eee;
        }
        :host([active]) {
          background-color: #ddd;
        }

        :host([checked]) {
          background-color: #bde4ff;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}get slots(){return{}}constructor(){super(),this.active=!1,this.__onClick=this.__onClick.bind(this),this.__registerEventListeners()}requestUpdate(t,e,i){super.requestUpdate(t,e,i),t==="active"&&this.active!==e&&this.dispatchEvent(new Event("active-changed",{bubbles:!0}))}updated(t){super.updated(t),t.has("checked")&&this.setAttribute("aria-selected",`${this.checked}`),t.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}render(){return v`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}__registerEventListeners(){this.addEventListener("click",this.__onClick)}__unRegisterEventListeners(){this.removeEventListener("click",this.__onClick)}__onClick(){if(this.disabled)return;const t=this._parentFormGroup;this._isHandlingUserInput=!0,t&&t.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}}const hr=U`
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
`;class oe{static __createGlobalStyleNode(){const t=document.createElement("style");return t.setAttribute("data-overlays",""),t.textContent=hr.cssText,document.head.appendChild(t),t}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this.__siblingsInert=!1,this.__blockingMap=new WeakMap,oe.__globalStyleNode||(oe.__globalStyleNode=oe.__createGlobalStyleNode())}add(t){if(this.list.find(e=>t===e))throw new Error("controller instance is already added");return this.list.push(t),t}remove(t){if(!this.list.find(e=>t===e))throw new Error("could not find controller to remove");this.__list=this.list.filter(e=>e!==t),this.__shownList=this.shownList.filter(e=>e!==t)}show(t){this.list.find(e=>t===e)&&this.hide(t),this.__shownList.unshift(t),Array.from(this.__shownList).reverse().forEach((e,i)=>{e.elevation=i+1})}hide(t){if(!this.list.find(e=>t===e))throw new Error("could not find controller to hide");this.__shownList=this.shownList.filter(e=>e!==t)}teardown(){this.list.forEach(t=>{t.teardown()}),this.__list=[],this.__shownList=[],this.__siblingsInert=!1,oe.__globalStyleNode&&(document.head.removeChild(oe.__globalStyleNode),oe.__globalStyleNode=void 0)}get siblingsInert(){return this.__siblingsInert}disableTrapsKeyboardFocusForAll(){this.shownList.forEach(t=>{t.trapsKeyboardFocus===!0&&t.disableTrapsKeyboardFocus&&t.disableTrapsKeyboardFocus({findNewTrap:!1})})}informTrapsKeyboardFocusGotEnabled(t){this.siblingsInert===!1&&t==="global"&&(this.__siblingsInert=!0)}informTrapsKeyboardFocusGotDisabled({disabledCtrl:t,findNewTrap:e=!0}={}){const i=this.shownList.find(o=>o!==t&&o.trapsKeyboardFocus===!0);i?e&&i.enableTrapsKeyboardFocus():this.siblingsInert===!0&&(this.__siblingsInert=!1)}requestToPreventScroll(){const{isIOS:t,isMacSafari:e}=pt;document.body.classList.add("overlays-scroll-lock"),(t||e)&&document.body.classList.add("overlays-scroll-lock-ios-fix"),t&&document.documentElement.classList.add("overlays-scroll-lock-ios-fix")}requestToEnableScroll(t){if((t?this.shownList.filter(n=>n!==t):this.shownList).some(n=>n.preventsScroll===!0))return;const{isIOS:o,isMacSafari:r}=pt;document.body.classList.remove("overlays-scroll-lock"),(o||r)&&document.body.classList.remove("overlays-scroll-lock-ios-fix"),o&&document.documentElement.classList.remove("overlays-scroll-lock-ios-fix")}requestToShowOnly(t){const e=this.shownList.filter(i=>i!==t);e.forEach(i=>i.hide()),this.__blockingMap.set(t,e)}retractRequestToShowOnly(t){this.__blockingMap.has(t)&&this.__blockingMap.get(t).forEach(i=>i.show())}}oe.__globalStyleNode=void 0;function ur(){if(!Me.has("@lion/ui::overlays::0.x")){const s=new oe;Me.set("@lion/ui::overlays::0.x",s)}return Me.get("@lion/ui::overlays::0.x")}const pr=os(ur);function Gt(){let s=document.activeElement||document.body;for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}const Si=({visibility:s,display:t})=>s!=="hidden"&&t!=="none",fr=({display:s})=>s==="contents";function _r(s){if(!s||!s.isConnected||!Si(s.style))return!1;const t=window.getComputedStyle(s);return Si(t)?fr(t)?!0:!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length):!1}function mr(s,t){const e=Math.max(s.tabIndex,0),i=Math.max(t.tabIndex,0);return e===0||i===0?i>e:e>i}function br(s,t){const e=[];for(;s.length>0&&t.length>0;)mr(s[0],t[0])?e.push(t.shift()):e.push(s.shift());return[...e,...s,...t]}function jt(s){const t=s.length;if(t<2)return s;const e=Math.ceil(t/2),i=jt(s.slice(0,e)),o=jt(s.slice(e));return br(i,o)}const Ft="matches"in Element.prototype?"matches":"msMatchesSelector";function vr(s){return s[Ft]("input, select, textarea, button, object")?s[Ft](":not([disabled])"):s[Ft]("a[href], area[href], iframe, [tabindex], [contentEditable]")}function gr(s){return vr(s)?Number(s.getAttribute("tabindex")||0):-1}function yr(s){if(s.localName==="slot")return s.assignedNodes({flatten:!0});const{children:t}=s.shadowRoot||s;return t||[]}function xr(s){return s.nodeType!==Node.ELEMENT_NODE?!1:s.localName==="slot"?!0:_r(s)}function _s(s,t){if(!xr(s))return!1;const e=s,i=gr(e);let o=i>0;i>=0&&t.push(e);const r=yr(e);for(let n=0;n<r.length;n+=1)o=_s(r[n],t)||o;return o}function ms(s){const t=[];return _s(s,t)?jt(t):t}function De(s,t,e={}){function i(u){return"getAttribute"in u}function o(u){if(!i(u))return null;const b=u.getAttribute("slot");let f=null;if(b){const x=e[b];x&&(f=x.filter(N=>(N==null?void 0:N.element)===u)[0]||null)}return f}const r=o(s);if(r)return r.deepContains;function n(u){if(!i(s))return;const b=s.getAttribute("slot");b&&(e[b]=e[b]||[],e[b].push({element:s,deepContains:u}))}let a=s.contains(t);if(a)return n(!0),!0;function c(u){return u.tagName==="SLOT"}function p(u){return c(u)?u.assignedElements():[]}function _(u){return u.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function m(u){let b=!1;for(let f=0;f<u.length;f+=1){const x=u[f];if(x&&(i(x)||_(x))&&De(x,t,e)){b=!0;break}}return b}function h(u){for(let b=0;b<u.children.length;b+=1){const f=u.children[b],x=o(f);if(x){a=x.deepContains||a;break}const N=p(f),L=[f.shadowRoot,...N];if(m(L)){a=!0;break}f.children.length>0&&h(f)}}return s instanceof HTMLElement&&s.shadowRoot&&(a=De(s.shadowRoot,t,e),a)?(n(!0),!0):(h(s),n(a),a)}const Cr={tab:9};function Er(s,t){const e=ms(s);let i;e.length>=2?i=[e[0],e[e.length-1]]:e.length===1?i=[e[0],e[0]]:i=[s,s],t.shiftKey&&i.reverse();const[o,r]=i,n=Gt();n===s||e.includes(n)&&r!==n||(t.preventDefault(),o.focus())}function wr(s){const t=ms(s),e=t.find(h=>h.hasAttribute("autofocus"))||s;let i,o;e===s&&(s.tabIndex=-1,s.style.setProperty("outline","none")),e.focus();function r(h){h.keyCode===Cr.tab&&Er(s,h)}function n(){i=document.createElement("div"),i.style.display="none",i.setAttribute("data-is-tab-detection-element",""),s.insertBefore(i,s.children[0]),o=new MutationObserver(h=>{for(const u of h)if(u.type==="childList"){const b=!Array.from(s.children).find(x=>x.hasAttribute("data-is-tab-detection-element")),f=Array.from(u.addedNodes).find(x=>x instanceof HTMLElement&&x.hasAttribute("data-is-tab-detection-element"));b&&!f&&(o.disconnect(),n())}}),o.observe(s,{childList:!0})}function a(){return i.compareDocumentPosition(document.activeElement)===Node.DOCUMENT_POSITION_PRECEDING}function c({resetToRoot:h=!1}={}){if(De(s,Gt()))return;let u;h?u=s:u=t[a()?0:t.length-1],u&&u.focus()}function p(){window.removeEventListener("focusin",p),c()}function _(){setTimeout(()=>{De(s,Gt())||c({resetToRoot:!0})}),window.addEventListener("focusin",p)}function m(){window.removeEventListener("keydown",r),window.removeEventListener("focusin",p),window.removeEventListener("focusout",_),o.disconnect(),Array.from(s.children).includes(i)&&s.removeChild(i),s.style.removeProperty("outline")}return window.addEventListener("keydown",r),window.addEventListener("focusout",_),n(),{disconnect:m}}const Ti=U`
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
`,Pe={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},Vt=new WeakMap;function kr(s){return Array.from(s.cssRules).map(t=>t.cssText).join("")}function Nr(s,t,{teardown:e=!1}={}){const i=s===document?document.body:s,o=t.cssText||kr(t);if(e){const r=Array.from(i.querySelectorAll("style"));for(const n of r)if(n.textContent===o){n.remove();break}}else{const r=document.createElement("style"),n=window.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=o,i.appendChild(r)}}function Ar(s,t,{teardown:e=!1}={}){let i=!1;s&&!Vt.has(s)&&Vt.set(s,[]);const o=Vt.get(s)??[],r=o.find(n=>t===n);return r&&e?o.splice(o.indexOf(t),1):!r&&!e?o.push(t):(r&&!e||!r&&e)&&(i=!0),{haltFurtherExecution:i}}function Sr(s,t,{teardown:e=!1}={}){const{haltFurtherExecution:i}=Ar(s,t,{teardown:e});if(i)return;if(!Pe.supportsAdoptingStyleSheets||pt.isIOS){Nr(s,t,{teardown:e});return}const o=t instanceof CSSStyleSheet?t:t.styleSheet;if(!o)throw new Error("Please provide a CSSResultOrNative style");e?s.adoptedStyleSheets.includes(o)&&s.adoptedStyleSheets.splice(s.adoptedStyleSheets.indexOf(o),1):s.adoptedStyleSheets=[...s.adoptedStyleSheets,o]}function Tr(s,t,{teardown:e=!1}={}){for(const i of t)Pe.adoptStyle(s,i,{teardown:e})}Pe.adoptStyle=Sr;Pe.adoptStyles=Tr;function Or({wrappingDialogNodeL1:s,contentWrapperNodeL2:t,contentNodeL3:e}){if(!(t.isConnected||e.isConnected))throw new Error('[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.');let i;const o=document.createComment("tempMarker");t.isConnected?(i=t.parentElement||t.getRootNode(),i.insertBefore(o,t),s.appendChild(t)):e.assignedSlot?(i=e.assignedSlot.parentElement||e.assignedSlot.getRootNode(),i.insertBefore(o,e.assignedSlot),s.appendChild(t),t.appendChild(e.assignedSlot)):(i=e.parentElement||e.getRootNode(),i.insertBefore(o,e),s.appendChild(t),t.appendChild(e)),i.insertBefore(s,o),i==null||i.removeChild(o)}async function Fr(){return y(()=>import("./popper.CBQhmXeE.js"),[])}const Oi=new WeakMap;var ot,Wt,ze;const Le=class Le extends EventTarget{constructor(e={},i=pr){super();Q(this,ot);Q(this,ze,e=>{e.key!=="Escape"||e.composedPath().includes(this.contentNode)||De(this.contentNode,e.target)||this.hide()});this.manager=i,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:"none",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:"description",visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:"top",strategy:"fixed",modifiers:[{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:8}},{name:"flip",options:{boundariesElement:"viewport",padding:16}},{name:"offset",enabled:!0,options:{offset:[0,8]}},{name:"arrow",enabled:!1}]},viewportConfig:{placement:"center"},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveTrapsKeyboardFocus=!1,this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){var e;return(e=this.config)==null?void 0:e.placementMode}get invokerNode(){var e;return(e=this.config)==null?void 0:e.invokerNode}get referenceNode(){var e;return(e=this.config)==null?void 0:e.referenceNode}get contentNode(){var e;return(e=this.config)==null?void 0:e.contentNode}get contentWrapperNode(){var e;return this.__contentWrapperNode||((e=this.config)==null?void 0:e.contentWrapperNode)}get backdropNode(){var e;return this.__backdropNode||((e=this.config)==null?void 0:e.backdropNode)}get elementToFocusAfterHide(){var e;return this.__elementToFocusAfterHide||((e=this.config)==null?void 0:e.elementToFocusAfterHide)}get hasBackdrop(){var e;return!!this.backdropNode||((e=this.config)==null?void 0:e.hasBackdrop)}get isBlocking(){var e;return(e=this.config)==null?void 0:e.isBlocking}get preventsScroll(){var e;return(e=this.config)==null?void 0:e.preventsScroll}get trapsKeyboardFocus(){var e;return(e=this.config)==null?void 0:e.trapsKeyboardFocus}get hidesOnEsc(){var e;return(e=this.config)==null?void 0:e.hidesOnEsc}get hidesOnOutsideClick(){var e;return(e=this.config)==null?void 0:e.hidesOnOutsideClick}get hidesOnOutsideEsc(){var e;return(e=this.config)==null?void 0:e.hidesOnOutsideEsc}get inheritsReferenceWidth(){var e;return(e=this.config)==null?void 0:e.inheritsReferenceWidth}get handlesAccessibility(){var e;return(e=this.config)==null?void 0:e.handlesAccessibility}get isTooltip(){var e;return(e=this.config)==null?void 0:e.isTooltip}get isAlertDialog(){var e;return(e=this.config)==null?void 0:e.isAlertDialog}get invokerRelation(){var e;return(e=this.config)==null?void 0:e.invokerRelation}get popperConfig(){var e;return(e=this.config)==null?void 0:e.popperConfig}get viewportConfig(){var e;return(e=this.config)==null?void 0:e.viewportConfig}get visibilityTriggerFunction(){var e;return(e=this.config)==null?void 0:e.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){var e;return Number((e=this.contentWrapperNode)==null?void 0:e.style.zIndex)}updateConfig(e){var i,o,r;this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...((i=this._defaultConfig.popperConfig)==null?void 0:i.modifiers)||[],...((o=this.__sharedConfig.popperConfig)==null?void 0:o.modifiers)||[],...((r=e.popperConfig)==null?void 0:r.modifiers)||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,se(this,ot,Wt).call(this)||this.manager.add(this)}__validateConfiguration(e){if(!e.placementMode)throw new Error('[OverlayController] You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(e.placementMode))throw new Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw new Error("[OverlayController] You need to provide a .contentNode");if(e.isTooltip&&!e.handlesAccessibility)throw new Error("[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled")}_init(){this.__contentHasBeenInitialized||(this.__initContentDomStructure(),this.__contentHasBeenInitialized=!0),this.contentWrapperNode.removeAttribute("style"),this.contentWrapperNode.removeAttribute("class"),this.placementMode==="local"&&(Le.popperModule||(Le.popperModule=Fr())),this.__handleOverlayStyles({phase:"init"}),this._handleFeatures({phase:"init"})}__handleOverlayStyles({phase:e}){var o;const i=(o=this.contentWrapperNode)==null?void 0:o.getRootNode();e==="init"?Pe.adoptStyle(i,Ti):e==="teardown"&&Pe.adoptStyle(i,Ti,{teardown:!0})}__initContentDomStructure(){var o,r;const e=document.createElement((o=this.config)!=null&&o._noDialogEl?"div":"dialog");e.setAttribute("role","none"),e.setAttribute("data-overlay-outer-wrapper",""),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,(r=this.config)!=null&&r.contentWrapperNode||(this.__contentWrapperNode=document.createElement("div")),this.contentWrapperNode.setAttribute("data-id","content-wrapper"),Or({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute("tabindex","-1"),this.__wrappingDialogNode.style.display="none",this.contentWrapperNode.style.zIndex="1",getComputedStyle(this.contentNode).position==="absolute"&&(this.contentNode.style.position="static"),HTMLDialogElement&&"closedBy"in HTMLDialogElement.prototype?e.closedBy="none":(e.addEventListener("keydown",n=>{n.key==="Escape"&&n.preventDefault()}),e.addEventListener("keyup",n=>{n.key==="Escape"&&n.preventDefault()}),e.addEventListener("cancel",n=>{n.stopPropagation()}),e.addEventListener("close",n=>{n.stopPropagation()}))}_handleZIndex({phase:e}){if(this.placementMode==="local"&&e==="setup"){const i=Number(getComputedStyle(this.contentNode).zIndex);(i<1||Number.isNaN(i))&&(this.contentNode.style.zIndex="1")}}__setupTeardownAccessibility({phase:e}){if(e==="init"){this.__storeOriginalAttrs(this.contentNode,["role","id"]);const i=this.trapsKeyboardFocus;if(this.invokerNode){const o=["aria-labelledby","aria-describedby"];i||o.push("aria-expanded"),this.__storeOriginalAttrs(this.invokerNode,o)}this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation==="label"?"aria-labelledby":"aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&!i&&this.invokerNode.setAttribute("aria-expanded",`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute("role","alertdialog"):this.contentNode.getAttribute("role")||this.contentNode.setAttribute("role","dialog"))}else e==="teardown"&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,i){const o={};i.forEach(r=>{o[r]=e.getAttribute(r)}),this.__originalAttrs.set(e,o)}__restoreOriginalAttrs(){for(const[e,i]of this.__originalAttrs)Object.entries(i).forEach(([o,r])=>{r!==null?e.setAttribute(o,r):e.removeAttribute(o)});this.__originalAttrs.clear()}get isShown(){var e;return((e=this.__wrappingDialogNode)==null?void 0:e.style.display)!=="none"}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(o=>{this._showResolve=o}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}const i=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(i),i.defaultPrevented||("HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display="",this._keepBodySize({phase:"before-show"}),await this._handleFeatures({phase:"show"}),this._keepBodySize({phase:"show"}),await this._handlePosition({phase:"show"}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event("show")),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if(this.placementMode==="global"){const i=`overlays__overlay-container--${this.viewportConfig.placement}`;e==="show"?(this.contentWrapperNode.classList.add("overlays__overlay-container"),this.contentWrapperNode.classList.add(i),this.contentNode.classList.add("overlays__overlay")):e==="hide"&&(this.contentWrapperNode.classList.remove("overlays__overlay-container"),this.contentWrapperNode.classList.remove(i),this.contentNode.classList.remove("overlays__overlay"))}else this.placementMode==="local"&&e==="show"&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){var i,o;if(this.preventsScroll)switch(e){case"before-show":this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case"show":{if(window.getComputedStyle){const p=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(p.getPropertyValue("margin-right"),10),this.__bodyMarginBottom=parseInt(p.getPropertyValue("margin-bottom"),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;const r=document.body.clientWidth-this.__bodyClientWidth,n=document.body.clientHeight-this.__bodyClientHeight,a=this.__bodyMarginRight+r,c=this.__bodyMarginBottom+n;(i=window.CSS)!=null&&i.number&&((o=document.body.attributeStyleMap)!=null&&o.set)?(document.body.attributeStyleMap.set("margin-right",CSS.px(a)),document.body.attributeStyleMap.set("margin-bottom",CSS.px(c))):(document.body.style.marginRight=`${a}px`,document.body.style.marginBottom=`${c}px`);break}case"hide":document.body.style.marginRight=this.__bodyMarginRightInline||"",document.body.style.marginBottom=this.__bodyMarginBottomInline||"";break}}async hide(){if(this._hideComplete=new Promise(i=>{this._hideResolve=i}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.manager.hide(this),!this.isShown){this._hideResolve();return}const e=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),"HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display="none",this._handleFeatures({phase:"hide"}),this._keepBodySize({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:i}){await this.transitionHide({backdropNode:e,contentNode:i}),this._handlePosition({phase:"hide"}),e&&e.classList.remove("overlays__backdrop--animation-in")}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add("overlays__backdrop--animation-in")}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:"nearest"})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){typeof this.visibilityTriggerFunction=="function"&&(e==="init"&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll();break;case"teardown":this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:e}){switch(e){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){var i;switch(e){case"init":{this.__backdropInitialized||((i=this.config)!=null&&i.backdropNode||(this.__backdropNode=document.createElement("div"),this.__backdropNode.classList.add("overlays__backdrop")),this.__wrappingDialogNode.prepend(this.backdropNode),this.__backdropInitialized=!0);break}case"show":this.config.hasBackdrop&&this.backdropNode.classList.add("overlays__backdrop--visible"),this.__hasActiveBackdrop=!0;break;case"hide":case"teardown":this.backdropNode.classList.remove("overlays__backdrop--visible"),this.__hasActiveBackdrop=!1;break}}get hasActiveTrapsKeyboardFocus(){return this.__hasActiveTrapsKeyboardFocus}_handleTrapsKeyboardFocus({phase:e}){e==="show"?("showModal"in this.__wrappingDialogNode&&(this.__wrappingDialogNode.close(),this.__wrappingDialogNode.showModal()),this.enableTrapsKeyboardFocus()):(e==="hide"||e==="teardown")&&this.disableTrapsKeyboardFocus()}enableTrapsKeyboardFocus(){if(this.__hasActiveTrapsKeyboardFocus)return;this.manager&&this.manager.disableTrapsKeyboardFocusForAll(),!!this.contentNode.shadowRoot&&console.warn("[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root"),this._containFocusHandler=wr(this.contentNode),this.__hasActiveTrapsKeyboardFocus=!0,this.manager&&this.manager.informTrapsKeyboardFocusGotEnabled(this.placementMode)}disableTrapsKeyboardFocus({findNewTrap:e=!0}={}){this.__hasActiveTrapsKeyboardFocus&&(this._containFocusHandler&&(this._containFocusHandler.disconnect(),this._containFocusHandler=void 0),this.__hasActiveTrapsKeyboardFocus=!1,this.manager&&this.manager.informTrapsKeyboardFocusGotDisabled({disabledCtrl:this,findNewTrap:e}))}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){if(e.key!=="Escape"||Oi.has(e)||!this.isShown&&this.__escKeyHandlerCalled)return;(e.composedPath().includes(this.contentNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||De(this.contentNode,e.target))&&(this.__escKeyHandlerCalled=!0,this.hide(),Oi.set(e,this))}_handleHidesOnEsc({phase:e}){e==="init"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)),e==="show"&&(this.__escKeyHandlerCalled=!1),e==="teardown"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){e==="init"?(document.removeEventListener("keyup",P(this,ze)),document.addEventListener("keyup",P(this,ze))):e==="teardown"&&document.removeEventListener("keyup",P(this,ze))}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode==="global")return;const e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case"max":this.contentWrapperNode.style.maxWidth=e;break;case"full":this.contentWrapperNode.style.width=e;break;case"min":this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width="auto";break}}_handleHidesOnOutsideClick({phase:e}){const i=e==="show"?"addEventListener":"removeEventListener";if(e==="show"){let o=!1,r=!1;this.__onInsideMouseDown=()=>{o=!0},this.__onInsideMouseUp=()=>{r=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!o&&!r&&this.hide(),o=!1,r=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[i]("mousedown",this.__onInsideMouseDown,!0),this.contentWrapperNode[i]("mouseup",this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[i]("mousedown",this.__onInsideMouseDown,!0),this.invokerNode[i]("mouseup",this.__onInsideMouseUp,!0)),document.documentElement[i]("mouseup",this.__onDocumentMouseUp,!0),window[i]("blur",this.__onWindowBlur)}_handleAccessibility({phase:e}){(e==="init"||e==="teardown")&&this.__setupTeardownAccessibility({phase:e});const i=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!i&&this.invokerNode.setAttribute("aria-expanded",`${e==="show"}`)}teardown(){this.__handleOverlayStyles({phase:"teardown"}),this._handleFeatures({phase:"teardown"}),se(this,ot,Wt).call(this)&&this.manager.remove(this)}async __createPopperInstance(){var e;if(this._popper&&(this._popper.destroy(),this._popper=void 0),Le.popperModule!==void 0){const{createPopper:i}=await Le.popperModule;this._popper=i(this._referenceNode,this.contentWrapperNode,{...(e=this.config)==null?void 0:e.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute("aria-disabled")==="true":!1}};ot=new WeakSet,Wt=function(){return!!this.manager.list.find(e=>this===e)},ze=new WeakMap;let _t=Le;_t.popperModule=void 0;function bs(s,t){if(typeof s!="object"||typeof t!="object"||s===null||t===null)return s===t;const e=Object.keys(s),i=Object.keys(t);if(e.length!==i.length)return!1;const o=r=>bs(s[r],t[r]);return e.every(o)}const Vr=s=>{var t,e,i;return i=class extends s{constructor(){super();Q(this,e,!1);this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}static get properties(){return{opened:{type:Boolean,reflect:!0}}}get config(){return this.__config}set config(n){const a=!bs(this.config,n);this._overlayCtrl&&a&&this._overlayCtrl.updateConfig(n),this.__config=n,this._overlayCtrl&&a&&this.__syncToOverlayController()}requestUpdate(n,a,c){super.requestUpdate(n,a,c),n==="opened"&&this.opened!==a&&this.dispatchEvent(new CustomEvent("opened-changed",{detail:{opened:this.opened}}))}_defineOverlay({contentNode:n,invokerNode:a,referenceNode:c,backdropNode:p,contentWrapperNode:_}){var h,u,b,f;const m=this._defineOverlayConfig()||{};return new _t({contentNode:n,invokerNode:a,referenceNode:c,backdropNode:p,contentWrapperNode:_,...m,...this.config,popperConfig:{...m.popperConfig||{},...((h=this.config)==null?void 0:h.popperConfig)||{},modifiers:[...((u=m.popperConfig)==null?void 0:u.modifiers)||[],...((f=(b=this.config)==null?void 0:b.popperConfig)==null?void 0:f.modifiers)||[]]}})}_defineOverlayConfig(){return{placementMode:"local"}}updated(n){super.updated(n),n.has("opened")&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=n=>{n.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(P(this,e)||(this._setupOverlayCtrl(),te(this,e,!0)))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),te(this,e,!1))}get _overlayInvokerNode(){return Array.from(this.children).find(n=>n.slot==="invoker")}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||(this.__cachedOverlayBackdropNode=Array.from(this.children).find(n=>n.slot==="backdrop")),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||(this._cachedOverlayContentNode=Array.from(this.children).find(n=>n.slot==="content")||this.config.contentNode),this._cachedOverlayContentNode}get _overlayContentWrapperNode(){var n;return(n=this.shadowRoot)==null?void 0:n.querySelector("#overlay-content-node-wrapper")}_setupOverlayCtrl(){if(P(this,e))return;const n={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(n):this._overlayCtrl=this._defineOverlay(n),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(n){this.__blockSyncToOverlayCtrl=!0,this.opened=n,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=n=>{const a=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(a),a.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),n.preventDefault())},this.__onBeforeHide=n=>{const a=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(a),a.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),n.preventDefault())},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){const n=this._overlayCtrl;n.placementMode==="local"&&n._popper&&n._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}},e=new WeakMap,j(i,"enabledWarnings",((t=Oe(i,i,"enabledWarnings"))==null?void 0:t.filter(n=>n!=="change-in-update"))||[]),i},Lr=$(Vr);function Mr(){return{visibilityTriggerFunction:({controller:s})=>{function t(){s._hasDisabledInvoker()||s.toggle()}return{init:()=>{var e;(e=s.invokerNode)==null||e.addEventListener("click",t)},teardown:()=>{var e;(e=s.invokerNode)==null||e.removeEventListener("click",t)}}}}}const Ir=()=>({placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:"bottom-start",modifiers:[{name:"offset",enabled:!1}]},handlesAccessibility:!0,...Mr()}),je=new WeakMap;function vs(s,t){Array.from(s.childNodes).forEach(e=>{if(e.nodeName==="#text"){const i=new RegExp(`^(.*?)(${t})(.*)$`,"i"),o=e.nodeValue.match(i);if(o){const r=document.createTextNode(o[1]);s.appendChild(r);const n=document.createElement("b");n.textContent=o[2],s.appendChild(n);const a=document.createTextNode(o[3]);s.appendChild(a),s.removeChild(e),je.set(s,()=>{s.appendChild(e),s.contains(r)&&r.parentNode!==null&&r.parentNode.removeChild(r),s.contains(n)&&n.parentNode!==null&&n.parentNode.removeChild(n),s.contains(a)&&a.parentNode!==null&&a.parentNode.removeChild(a)})}}else vs(e,t)})}function gs(s){je.has(s)&&je.get(s)(),Array.from(s.childNodes).forEach(t=>{t.nodeName==="#text"?je.has(t)&&je.get(t)():gs(t)})}class ni extends Ie{static get validatorName(){return"MatchesOption"}execute(t,e,i){return(i==null?void 0:i.node.modelValue)instanceof ke}}function dt(s){return Array.isArray(s)?s:[s]}const zr=s=>class extends ps(s){static get properties(){return{allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},modelValue:{type:Object}}}get modelValue(){return this.__getChoicesFrom(super.modelValue)}set modelValue(e){if(super.modelValue=e,e==null||e==="")this._customChoices=new Set;else if(this.allowCustomChoice){const i=this.modelValue;this._customChoices=new Set(dt(e)),this.requestUpdate("modelValue",i)}}get formattedValue(){return this.__getChoicesFrom(super.formattedValue)}set formattedValue(e){if(super.formattedValue=e,e==null)this._customChoices=new Set;else if(this.allowCustomChoice){const i=this.modelValue;this._customChoices=new Set(dt(e).map(o=>{var r;return((r=this.formElements.find(n=>n.formattedValue===o))==null?void 0:r.modelValue)||o})),this.requestUpdate("modelValue",i)}}get serializedValue(){return this.__getChoicesFrom(super.serializedValue)}set serializedValue(e){if(super.serializedValue=e,e==null)this._customChoices=new Set;else if(this.allowCustomChoice){const i=this.modelValue;this._customChoices=new Set(dt(e).map(o=>{var r;return((r=this.formElements.find(n=>n.serializedValue===o))==null?void 0:r.modelValue)||o})),this.requestUpdate("modelValue",i)}}get customChoices(){if(!this.allowCustomChoice)return[];const e=this._getCheckedElements();return Array.from(this._customChoices).filter(i=>!e.some(o=>o.choiceValue===i))}constructor(){super(),this.allowCustomChoice=!1,this._customChoices=new Set}__getChoicesFrom(e){const i=e;return this.allowCustomChoice?this.multipleChoice?[...dt(i),...this.customChoices]:i===""?this._customChoices.values().next().value||"":i:i}_isEmpty(){return super._isEmpty()&&this._customChoices.size===0}clear(){this._customChoices=new Set,super.clear()}parser(e){return this.allowCustomChoice&&Array.isArray(e)?e.filter(i=>i.trim()!==""):e}},Rr=$(zr),Lt=new WeakMap;class $r extends ns(Lr(Rr(fs))){static get properties(){return{autocomplete:{type:String,reflect:!0},matchMode:{type:String,attribute:"match-mode"},showAllOnEmpty:{type:Boolean,attribute:"show-all-on-empty"},requireOptionMatch:{type:Boolean},allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},__shouldAutocompleteNextUpdate:Boolean}}static get styles(){return[...super.styles,U`
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
      `]}static get localizeNamespaces(){return[{"lion-combobox":t=>{switch(t){case"bg-BG":case"bg":return y(()=>import("./bg.CnMxkYth.js"),[]);case"cs-CZ":case"cs":return y(()=>import("./cs.wLKWYoEd.js"),[]);case"de-AT":case"de-DE":case"de":return y(()=>import("./de.BMTIiI_u.js"),[]);case"en-AU":case"en-GB":case"en-PH":case"en-US":case"en":return y(()=>import("./en.bt6AHwUY.js"),[]);case"es-ES":case"es":return y(()=>import("./es.DtqAq6rp.js"),[]);case"fr-FR":case"fr-BE":case"fr":return y(()=>import("./fr.TvxLRXi9.js"),[]);case"hu-HU":case"hu":return y(()=>import("./hu.LTktcuIp.js"),[]);case"it-IT":case"it":return y(()=>import("./it.CLQp6VRo.js"),[]);case"nl-BE":case"nl-NL":case"nl":return y(()=>import("./nl.BPWGiqq3.js"),[]);case"pl-PL":case"pl":return y(()=>import("./pl.C-Y5rsX-.js"),[]);case"ro-RO":case"ro":return y(()=>import("./ro.DQbjJcYj.js"),[]);case"ru-RU":case"ru":return y(()=>import("./ru.DWmtva8q.js"),[]);case"sk-SK":case"sk":return y(()=>import("./sk.b2xDu6DA.js"),[]);case"uk-UA":case"uk":return y(()=>import("./uk.CHbv7RzQ.js"),[]);case"zh-CN":case"zh":return y(()=>import("./zh.CKc3I4YQ.js"),[]);default:return y(()=>import("./en.bt6AHwUY.js"),[])}}},...super.localizeNamespaces]}get modelValue(){const t=super.modelValue;return t!==""?t:this.parser(this.value)}set modelValue(t){super.modelValue=t}get value(){var t;return((t=this._inputNode)==null?void 0:t.value)||this.__value||""}set value(t){this._inputNode?(this._inputNode.value=t,this.__value=void 0):this.__value=t}reset(){super.reset(),this.multipleChoice||(this.value=this._initialModelValue),this._resetListboxOptions()}_resetListboxOptions(){this.formElements.forEach((t,e)=>{this._unhighlightMatchedOption(t),!this.showAllOnEmpty||!this.opened?t.style.display="none":(t.style.display="",t.setAttribute("aria-posinset",`${e+1}`),t.setAttribute("aria-setsize",`${this.formElements.length}`),t.removeAttribute("aria-hidden"))})}_inputGroupInputTemplate(){return v`
      <div class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_overlayListboxTemplate(){return v`
      <div
        id="overlay-content-node-wrapper"
        role="dialog"
        aria-label="${this.msgLit("lion-combobox:optionsPopup")}"
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_groupTwoTemplate(){return v` ${super._groupTwoTemplate()} ${this._overlayListboxTemplate()}`}get slots(){return{...super.slots,input:()=>{if(this._ariaVersion==="1.1"){const t=document.createElement("div"),e=document.createElement("input");return e.style.cssText=`
          border: none;
          outline: none;
          width: 100%;
          height: 100%;
          font: inherit;
          background: inherit;
          color: inherit;
          border-radius: inherit;
          box-sizing: border-box;
          padding: 0;`,t.appendChild(e),t}return document.createElement("input")},listbox:super.slots.input}}get _comboboxNode(){return this.querySelector('[slot="input"]')}get _selectionDisplayNode(){return this.querySelector('[slot="selection-display"]')}get _inputNode(){return this._ariaVersion==="1.1"&&this._comboboxNode?this._comboboxNode.querySelector("input")||this._comboboxNode:this._comboboxNode}get _overlayContentNode(){return this._listboxNode}get _overlayReferenceNode(){return this.shadowRoot.querySelector(".input-group__container")}get _overlayInvokerNode(){return this._inputNode}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(t=>t.slot==="listbox")}get _activeDescendantOwnerNode(){return this._inputNode}get requireOptionMatch(){return!this.allowCustomChoice}set requireOptionMatch(t){this.allowCustomChoice=!t}constructor(){super(),this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.requireOptionMatch=!0,this.rotateKeyboardNavigation=!0,this.selectionFollowsFocus=!0,this.defaultValidators.push(new ni),this._ariaVersion=pt.isChromium?"1.1":"1.0",this._listboxReceivesNoFocus=!0,this._noTypeAhead=!0,this.__prevCboxValueNonSelected="",this.__prevCboxValue="",this.__hadUserIntendsInlineAutoFill=!1,this.__listboxContentChanged=!1,this._onKeyUp=this._onKeyUp.bind(this),this._textboxOnClick=this._textboxOnClick.bind(this),this._textboxOnInput=this._textboxOnInput.bind(this),this._textboxOnKeydown=this._textboxOnKeydown.bind(this)}connectedCallback(){super.connectedCallback(),this._selectionDisplayNode&&(this._selectionDisplayNode.comboboxElement=this),(this.disabled||this.readOnly)&&this.__setComboboxDisabledAndReadOnly()}requestUpdate(t,e,i){if(super.requestUpdate(t,e,i),(t==="disabled"||t==="readOnly")&&this.__setComboboxDisabledAndReadOnly(),t==="modelValue"&&this.modelValue&&this.modelValue!==e&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue))if(this.multipleChoice)this._syncToTextboxMultiple(this.modelValue,this._oldModelValue);else{const o=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]);this._setTextboxValue(o)}}parser(t){return this.requireOptionMatch&&this.checkedIndex===-1&&t!==""&&!Array.isArray(t)?new ke(t):super.parser(t)}__unsyncCheckedIndexOnInputChange(){const t=this._autoSelectCondition(),e=this.formElements[this.checkedIndex];if(!this.multipleChoice&&!t&&e){const i=this._getTextboxValueFromOption(e);this._inputNode.value.startsWith(i)||this.setCheckedIndex(-1)}}updated(t){var e;super.updated(t),t.has("__shouldAutocompleteNextUpdate")&&this.__unsyncCheckedIndexOnInputChange(),t.has("opened")&&(this.opened&&(this.activeIndex=-1),!this.opened&&t.get("opened")!==void 0&&(this.__onOverlayClose(),this.activeIndex=-1)),t.has("autocomplete")&&this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),t.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`),t.has("__shouldAutocompleteNextUpdate")&&this.__shouldAutocompleteNextUpdate&&(this._handleAutocompletion(),this.__shouldAutocompleteNextUpdate=!1,this.__listboxContentChanged=!1),typeof((e=this._selectionDisplayNode)==null?void 0:e.onComboboxElementUpdated)=="function"&&this._selectionDisplayNode.onComboboxElementUpdated(t)}matchCondition(t,e){let i=-1;const o=this._getTextboxValueFromOption(t);return typeof o=="string"&&typeof e=="string"&&(i=o.toLowerCase().indexOf(e.toLowerCase())),this.matchMode==="all"?i>-1:i===0}_showOverlayCondition({lastKey:t}){const e=["Tab","Escape"],i=["Enter"];return this.disabled||this.readOnly||t&&(e.includes(t)||!this.multipleChoice&&i.includes(t))?!1:this.filled||this.showAllOnEmpty||!this.filled&&this.multipleChoice&&this.__prevCboxValueNonSelected?!0:this.opened}_getTextboxValueFromOption(t){return t?t.choiceValue:this.modelValue instanceof ke?this.modelValue.viewValue:this.modelValue}_onListboxContentChanged(){super._onListboxContentChanged(),this.__shouldAutocompleteNextUpdate=!0,this.__listboxContentChanged=!0}_textboxOnInput(t){this.__shouldAutocompleteNextUpdate=!0,this.opened=this._showOverlayCondition({})}_textboxOnKeydown(t){t.key==="Tab"&&(this.opened=!1)}_listboxOnClick(t){super._listboxOnClick(t),this._inputNode.focus(),this.multipleChoice?(this._inputNode.value="",this._resetListboxOptions()):(this.activeIndex=-1,this.opened=!1)}_setTextboxValue(t){this._inputNode&&this._inputNode.value!==t&&(this._inputNode.value=t)}__onOverlayClose(){this.multipleChoice?this._syncToTextboxMultiple(this.modelValue,this._oldModelValue):this.checkedIndex!==-1&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue,{phase:"overlay-close"})&&(this._inputNode.value=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]))}_repropagationCondition(t){return super._repropagationCondition(t)||this.formElements.every(e=>!e.checked)}_onFilterMatch(t,e){this._highlightMatchedOption(t,e),t.style.display=""}_highlightMatchedOption(t,e){if(vs(t,e),t.textContent){const i=document.createElement("span");i.setAttribute("aria-label",t.textContent.replace(/\s+/g," ")),Array.from(t.childNodes).forEach(o=>{i.appendChild(o)}),t.appendChild(i),Lt.set(t,()=>{Array.from(i.childNodes).forEach(o=>{t.appendChild(o)}),t.contains(i)&&t.removeChild(i)})}}_onFilterUnmatch(t,e,i){this._unhighlightMatchedOption(t),t.style.display="none"}_unhighlightMatchedOption(t){gs(t),Lt.has(t)&&Lt.get(t)()}__computeUserIntendsAutoFill({prevValue:t,curValue:e}){const i=t.length<e.length,o=t.length&&e.length&&t[0].toLowerCase()!==e[0].toLowerCase();return i||o||this.__listboxContentChanged&&this.__hadUserIntendsInlineAutoFill}_handleAutocompletion(){const e=!(this._inputNode.selectionStart===this._inputNode.selectionEnd)&&this._inputNode.value.length!==this._inputNode.selectionStart,i=this._inputNode.value,o=this._inputNode.selectionStart,r=e&&o?i.slice(0,o):i,n=e||this.__hadSelectionLastAutofill?this.__prevCboxValueNonSelected:this.__prevCboxValue,a=!r,c=[];let p=!1;const _=this.__computeUserIntendsAutoFill({prevValue:n,curValue:r}),m=this.autocomplete==="both"||this.autocomplete==="inline",h=this._autoSelectCondition(),u=this.autocomplete==="inline"||this.autocomplete==="none";this.formElements.forEach((f,x)=>{const N=this.matchCondition(f,r);let L=!1;if(a?L=this.showAllOnEmpty:L=u||N,h&&!p&&N&&!f.disabled){const z=()=>{this.activeIndex=x,this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex),p=!0};if(_)if(m){const T=this._getTextboxValueFromOption(f);typeof T=="string"&&T!==""&&typeof r=="string"&&r!==""&&T.toLowerCase().indexOf(r.toLowerCase())===0&&(this.__textboxInlineComplete(f),z())}else z()}f.onFilterUnmatch?f.onFilterUnmatch(r,n):this._onFilterUnmatch(f,r,n),f.setAttribute("aria-hidden","true"),f.removeAttribute("aria-posinset"),f.removeAttribute("aria-setsize"),L&&(c.push(f),f.onFilterMatch?f.onFilterMatch(r):this._onFilterMatch(f,r))});const b=c.length;c.forEach((f,x)=>{f.setAttribute("aria-posinset",`${x+1}`),f.setAttribute("aria-setsize",`${b}`),f.removeAttribute("aria-hidden")}),h&&!p&&!this.multipleChoice&&(this.setCheckedIndex(-1),n!==r&&(this.activeIndex=-1),this.modelValue=this.parser(i)),this.__prevCboxValueNonSelected=r,this.__prevCboxValue=this._inputNode.value,this.__hadSelectionLastAutofill=this._inputNode.value.length!==this._inputNode.selectionStart,this.__hadUserIntendsInlineAutoFill=_,this._overlayCtrl&&this._overlayCtrl._popper&&this._overlayCtrl._popper.update()}__textboxInlineComplete(t=this.formElements[this.activeIndex]){const e=this._getTextboxValueFromOption(t);if(this._inputNode.value!==e){const i=this._inputNode.value.length;this._inputNode.value=e,this._inputNode.selectionStart=i,this._inputNode.selectionEnd=this._inputNode.value.length}}_autoSelectCondition(){return this.autocomplete==="both"||this.autocomplete==="inline"}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.removeAttribute("tabindex")}_defineOverlayConfig(){return{...Ir(),elementToFocusAfterHide:void 0,invokerNode:this._comboboxNode,visibilityTriggerFunction:void 0}}_setupOverlayCtrl(){super._setupOverlayCtrl(),this.__shouldAutocompleteNextUpdate=!0,this.__setupCombobox()}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this.__teardownCombobox()}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._inputNode.addEventListener("keyup",this._onKeyUp),this._inputNode.addEventListener("click",this._textboxOnClick)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._inputNode.removeEventListener("keyup",this._onKeyUp),this._inputNode.removeEventListener("click",this._textboxOnClick)}_listboxOnKeyDown(t){const{key:e}=t;switch(e){case"Escape":this.opened=!1,super._listboxOnKeyDown(t),this._setTextboxValue("");break;case"Backspace":case"Delete":this.requireOptionMatch?super._listboxOnKeyDown(t):this.opened=!1;break;case"Enter":this.opened&&t.preventDefault(),!this.requireOptionMatch&&this.multipleChoice&&(!this.formElements[this.activeIndex]||this.formElements[this.activeIndex].hasAttribute("aria-hidden")||!this.opened)?(this.modelValue=this.parser([...this.modelValue,this._inputNode.value]),this._inputNode.value="",this.opened=!1):(super._listboxOnKeyDown(t),this._resetListboxOptions()),this.multipleChoice?this._inputNode.value="":this.opened=!1;break;default:{super._listboxOnKeyDown(t);break}}}_syncToTextboxCondition(t,e,{phase:i}={}){return this.autocomplete==="both"||this.autocomplete==="inline"||!this.focused}_syncToTextboxMultiple(t,e=[]){if(this.requireOptionMatch){const i=t.filter(r=>!e.includes(r)),o=this.formElements.filter(r=>i.includes(r.choiceValue)).map(r=>this._getTextboxValueFromOption(r)).join(" ");this._setTextboxValue(o)}}_enhanceLightDomClasses(){const t=this.querySelector("[slot=input]");t&&t.classList.add("form-control")}__setComboboxDisabledAndReadOnly(){this._comboboxNode&&(this._comboboxNode.toggleAttribute("disabled",this.disabled),this._comboboxNode.setAttribute("aria-disabled",`${this.disabled}`),this._comboboxNode.toggleAttribute("readonly",this.readOnly),this._comboboxNode.setAttribute("aria-readonly",`${this.readOnly}`)),this._inputNode&&(this._inputNode.toggleAttribute("disabled",this.disabled),this._inputNode.toggleAttribute("readOnly",this.readOnly),this._inputNode.setAttribute("aria-readonly",`${this.readOnly}`),this._inputNode.tabIndex=this.disabled?-1:0)}__setupCombobox(){this._comboboxNode.setAttribute("role","combobox"),this._comboboxNode.setAttribute("aria-haspopup","listbox"),this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),this._comboboxNode.setAttribute("aria-controls",this._listboxNode.id),this._ariaVersion==="1.1"?this._comboboxNode.setAttribute("aria-owns",this._listboxNode.id):this._inputNode.setAttribute("aria-owns",this._listboxNode.id),this._listboxNode.setAttribute("aria-labelledby",this._labelNode.id),this._inputNode.addEventListener("keydown",this._listboxOnKeyDown),this._inputNode.addEventListener("input",this._textboxOnInput),this._inputNode.addEventListener("keydown",this._textboxOnKeydown)}__teardownCombobox(){this._inputNode.removeEventListener("keydown",this._listboxOnKeyDown),this._inputNode.removeEventListener("input",this._textboxOnInput),this._inputNode.removeEventListener("keydown",this._textboxOnKeydown)}_onKeyUp(t){const e=t&&t.key;this.opened=this._showOverlayCondition({lastKey:e,currentValue:this._inputNode.value})}_textboxOnClick(t){this.opened=this._showOverlayCondition({})}clear(){this.value="",super.clear(),this.__shouldAutocompleteNextUpdate=!0}}const Dr=U`
  :host {
    display: block;
    box-sizing: border-box;
    inline-size: 100%;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-md);
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
    color: var(--co-color-text-tertiary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .form-field__group-two {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
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
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .input-group__container {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-raised);
  }

  :host(:focus-within) .input-group__container {
    border-color: var(--co-color-border-focus);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-focus);
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
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-danger);
  }

  :host([readonly]) .input-group__container {
    background: var(--co-color-surface-sunken);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) .input-group__container {
    background: var(--co-color-surface-disabled);
    color: var(--co-color-text-disabled);
    opacity: var(--co-opacity-disabled);
  }

  :host([disabled]) .form-field__label,
  :host([disabled]) .form-field__help-text {
    color: var(--co-color-text-disabled);
  }

  :host([size='sm']) {
    font-size: var(--co-font-size-sm);
  }

  :host([size='sm']) .input-group__container {
    min-block-size: var(--co-control-height-sm);
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-lg);
  }

  :host([size='lg']) .input-group__container {
    min-block-size: var(--co-control-height-lg);
    padding-inline: var(--co-space-inset-lg);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-xl);
  }

  :host([size='xl']) .input-group__container {
    min-block-size: var(--co-control-height-xl);
    padding-inline: var(--co-space-inset-xl);
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
    color: var(--co-color-text-tertiary);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  [data-overlay-outer-wrapper] {
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
    margin-block-start: var(--co-space-1);
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    box-shadow: var(--co-shadow-lg, 0 12px 24px rgb(15 23 42 / 18%));
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
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    outline: 0;
  }
`,Pr=U`
  :host {
    display: block;
    color: var(--co-color-text-default);
    cursor: default;
    outline: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .option {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    min-block-size: var(--co-control-height-sm);
    padding-block: var(--co-space-1);
    padding-inline: var(--co-space-inset-sm);
    border-radius: var(--co-control-radius);
    color: inherit;
  }

  :host(:hover:not([disabled])) .option,
  :host([active]) .option {
    background: var(--co-color-surface-raised);
  }

  :host([checked]) .option {
    background: var(--co-color-interactive-subtle-selected);
    color: var(--co-color-text-default);
  }

  :host([active][checked]) .option {
    background: var(--co-color-interactive-subtle-selected);
  }

  :host([disabled]) {
    color: var(--co-color-text-disabled);
    cursor: not-allowed;
  }

  /* ── Indicator: shared ── */

  .option__indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }

  /* ── Default indicator (no custom content) ── */

  .option__indicator:empty {
    inline-size: 0.75em;
    block-size: 0.75em;
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-strong);
    border-radius: 999px;
    background-color: transparent;
  }

  :host([disabled]) .option__indicator:empty {
    border-color: var(--co-color-border-subtle);
    background: transparent;
    box-shadow: none;
  }

  /* ── Radio (single-select) ── */

  :host([checked]:not([multiple])) .option__indicator:empty {
    border-color: var(--co-color-border-active);
    box-shadow: inset 0 0 0 2px var(--co-color-surface-default);
  }

  /* ── Checkbox (multi-select) ── */

  :host([multiple]) .option__indicator:empty {
    border-radius: var(--co-shape-radius-sm, 3px);
  }

  :host([multiple][checked]) .option__indicator:empty {
    border-color: var(--co-color-border-active);
    background: var(--co-color-border-active);
    box-shadow: none;
  }

  :host([multiple][checked]) .option__indicator:empty::after {
    content: '';
    display: block;
    inline-size: 0.35em;
    block-size: 0.2em;
    border-left: 1.5px solid var(--co-color-surface-default);
    border-bottom: 1.5px solid var(--co-color-surface-default);
    transform: rotate(-45deg) translateY(-0.04em);
  }

  .option__label {
    min-inline-size: 0;
  }
`;var ys=function(s,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};let Kt=class extends cr{constructor(){super(...arguments),this._iconElement=null}static get styles(){return[Pr]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(t){const e=this.value;this.choiceValue!==t&&(this.choiceValue=t),this.requestUpdate("value",e)}connectedCallback(){super.connectedCallback(),this._syncMultipleAttribute()}firstUpdated(t){super.firstUpdated(t),this._discoverIndicatorElements()}updated(t){super.updated(t),this._syncMultipleAttribute(),this._syncIconFill()}render(){return v`
      <div part="base" class="option">
        <span part="indicator" class="option__indicator" aria-hidden="true"></span>
        <span part="label" class="option__label">
          <slot></slot>
        </span>
      </div>
    `}_discoverIndicatorElements(){const t=this.querySelector('[slot="indicator-icon"]'),e=this.querySelector('[slot="indicator"]'),i=t??e,o=this.shadowRoot.querySelector(".option__indicator");!i||!o||(o.appendChild(i),t&&(this._iconElement=t,this._syncIconFill()))}_syncIconFill(){this._iconElement&&(this.checked?this._iconElement.setAttribute("fill",""):this._iconElement.removeAttribute("fill"))}_syncMultipleAttribute(){const t=this._parentFormGroup;t!=null&&t.multipleChoice?this.setAttribute("multiple",""):this.removeAttribute("multiple")}};ys([A({reflect:!0})],Kt.prototype,"value",null);Kt=ys([ne("co-option")],Kt);var K=function(s,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};class Br extends ni{static async getMessage(t){var e;return(e=t==null?void 0:t.config)!=null&&e.getMessage?t.config.getMessage():"Please select a valid option."}}let W=class extends $r{constructor(){super(...arguments),this.size="md",this.danger=!1,this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.selectionFollowsFocus=!0,this.rotateKeyboardNavigation=!0,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.multiple=!1,this.allowCustomChoice=!1,this.required=!1,this.matchError="",this._requiredValidator=new us,this._matchesOptionValidator=new Br,this._handleFocusIn=t=>{t.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=t=>{t.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=t=>{t.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-input",{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))},this._handleModelValueChanged=t=>{var i;const e=t;e.target!==this||(i=e.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.value,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,Dr]}get requireOptionMatch(){return super.requireOptionMatch}set requireOptionMatch(t){super.requireOptionMatch=t}connectedCallback(){super.connectedCallback(),this._replaceMatchesOptionValidator(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(t){super.firstUpdated(t),this._syncMultipleAlias(),this._syncRequiredValidator()}updated(t){this._syncMultipleAlias(t),super.updated(t),t.has("required")&&this._syncRequiredValidator(),t.has("allowCustomChoice")&&this.requestUpdate("requireOptionMatch",!this.allowCustomChoice),t.has("matchError")&&this._syncMatchErrorMessage(),(t.has("multiple")||t.has("multipleChoice")||t.has("required"))&&this._syncListboxAttributes()}_labelTemplate(){return v`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return v`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return v`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(t=>t.slot==="prefix")?v`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:S}_inputGroupInputTemplate(){return v`
      <div part="input" class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(t=>t.slot==="suffix")?v`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:S}_overlayListboxTemplate(){return v`
      <div id="overlay-content-node-wrapper" part="overlay" role="dialog" aria-label="Options">
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_feedbackTemplate(){return v`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_handleAutocompletion(){super._handleAutocompletion(),!this.formElements.some(e=>e.style.display!=="none")&&this.opened&&requestAnimationFrame(()=>{this.opened&&!this.formElements.some(e=>e.style.display!=="none")&&(this.opened=!1)})}_showOverlayCondition(t){var o;const e=super._showOverlayCondition(t),i=(o=this._inputNode)==null?void 0:o.value;return!e&&i&&this.formElements.length>0?this.formElements.some(r=>this.matchCondition(r,i)):e&&i&&this.formElements.length>0?this.formElements.some(r=>this.matchCondition(r,i)):e}_defineOverlayConfig(){return{...super._defineOverlayConfig(),_noDialogEl:!0}}_syncMultipleAlias(t){if(t!=null&&t.has("multiple")&&this.multipleChoice!==this.multiple){this.multipleChoice=this.multiple;return}if(t!=null&&t.has("multipleChoice")&&this.multiple!==this.multipleChoice){this.multiple=this.multipleChoice;return}!t&&this.multiple!==this.multipleChoice&&(this.multipleChoice=this.multiple||this.multipleChoice,this.multiple=this.multipleChoice)}_syncRequiredValidator(){const t=this.validators,e=t.includes(this._requiredValidator);if(this.required&&!e){this.validators=[...t,this._requiredValidator];return}!this.required&&e&&(this.validators=t.filter(i=>i!==this._requiredValidator))}_replaceMatchesOptionValidator(){this.defaultValidators=this.defaultValidators.map(t=>t instanceof ni?this._matchesOptionValidator:t),this._syncMatchErrorMessage()}_syncMatchErrorMessage(){this.matchError&&(this._matchesOptionValidator.config={...this._matchesOptionValidator.config,getMessage:()=>this.matchError})}_syncListboxAttributes(){const t=this.querySelector('[slot="listbox"]');t&&(t.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this.required?t.setAttribute("aria-required","true"):t.removeAttribute("aria-required"))}};K([A({reflect:!0})],W.prototype,"size",void 0);K([A({type:Boolean,reflect:!0})],W.prototype,"danger",void 0);K([A({reflect:!0})],W.prototype,"autocomplete",void 0);K([A({attribute:"match-mode",reflect:!0})],W.prototype,"matchMode",void 0);K([A({type:Boolean,attribute:"show-all-on-empty",reflect:!0})],W.prototype,"showAllOnEmpty",void 0);K([A({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],W.prototype,"selectionFollowsFocus",void 0);K([A({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],W.prototype,"rotateKeyboardNavigation",void 0);K([A({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],W.prototype,"hasNoDefaultSelected",void 0);K([A({type:Boolean,attribute:"multiple-choice",reflect:!0})],W.prototype,"multipleChoice",void 0);K([A({type:Boolean,reflect:!0})],W.prototype,"multiple",void 0);K([A({type:Boolean,attribute:"allow-custom-choice",reflect:!0})],W.prototype,"allowCustomChoice",void 0);K([A({type:Boolean,reflect:!0})],W.prototype,"required",void 0);K([A({attribute:"match-error"})],W.prototype,"matchError",void 0);K([A({type:Boolean,attribute:"require-option-match"})],W.prototype,"requireOptionMatch",null);W=K([ne("co-combobox")],W);class Ur extends nr(J){constructor(){super(),this._isFormOrFieldset=!0,this._repropagationRole="fieldset"}}const Fi=()=>{throw new Error("No form node found. Did you put a <form> element inside your custom-form element?")};class Hr extends Ur{constructor(){super(),this._submit=this._submit.bind(this),this._reset=this._reset.bind(this)}connectedCallback(){super.connectedCallback(),this.__registerEventsForLionForm(),this.removeAttribute("role")}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForLionForm()}get _formNode(){return this.querySelector("form")}submit(){this._formNode?this._formNode.dispatchEvent(new Event("submit",{cancelable:!0})):Fi()}_submit(t){var e;t.preventDefault(),t.stopPropagation(),this.submitGroup(),this.dispatchEvent(new Event("submit",{bubbles:!0})),(e=this.hasFeedbackFor)!=null&&e.includes("error")&&this._setFocusOnFirstErroneousFormElement(this)}reset(){this._formNode?this._formNode.reset():Fi()}_reset(t){t.preventDefault(),t.stopPropagation(),this.resetGroup(),this.dispatchEvent(new Event("reset",{bubbles:!0}))}_setFocusOnFirstErroneousFormElement(t){const e=t.formElements.find(i=>i.hasFeedbackFor.includes("error"))||t.formElements[0];e._focusableNode?e._focusableNode.focus():this._setFocusOnFirstErroneousFormElement(e)}__registerEventsForLionForm(){this._formNode.addEventListener("submit",this._submit),this._formNode.addEventListener("reset",this._reset)}__teardownEventsForLionForm(){this._formNode.removeEventListener("submit",this._submit),this._formNode.removeEventListener("reset",this._reset)}}const qr=U`
  :host {
    display: block;
    box-sizing: border-box;
    inline-size: 100%;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-md);
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
    margin-block-end: var(--co-space-2);
  }

  .form-field__label {
    color: var(--co-color-text-default);
    font-size: var(--co-typography-label-size);
    font-weight: var(--co-typography-label-weight);
    line-height: var(--co-typography-label-line-height);
  }

  .form-field__help-text {
    color: var(--co-color-text-tertiary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .form-field__group-two {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) .form-field__label,
  :host([disabled]) .form-field__help-text {
    color: var(--co-color-text-disabled);
  }

  ::slotted(form) {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-4);
  }
`;var xs=function(s,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};let Yt=class extends Hr{constructor(){super(...arguments),this.disabled=!1,this._createdInternalForm=!1}static get styles(){return[...super.styles,qr]}connectedCallback(){if(!this.querySelector("form")){const t=document.createElement("form");for(;this.firstChild;)t.appendChild(this.firstChild);this.appendChild(t),this._createdInternalForm=!0}super.connectedCallback()}disconnectedCallback(){if(super.disconnectedCallback(),this._createdInternalForm){const t=this.querySelector("form");if(t){for(;t.firstChild;)this.appendChild(t.firstChild);t.remove()}this._createdInternalForm=!1}}_labelTemplate(){return v`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return v`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_feedbackTemplate(){return v`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_submit(t){super._submit(t),this.dispatchEvent(new CustomEvent("co-submit",{detail:{modelValue:this.modelValue,serializedValue:this.serializedValue},bubbles:!0,composed:!0}))}_reset(t){super._reset(t);const e=this._formNode;if(e)for(const i of Array.from(e.elements))"resetGroup"in i||(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement?i.value=i.defaultValue:i instanceof HTMLSelectElement&&(i.selectedIndex=0));this.dispatchEvent(new CustomEvent("co-reset",{bubbles:!0,composed:!0}))}};xs([A({type:Boolean,reflect:!0})],Yt.prototype,"disabled",void 0);Yt=xs([ne("co-form")],Yt);class Gr extends hs(cs){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const t=document.createElement("input"),e=this.getAttribute("value");return e&&t.setAttribute("value",e),t}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type="text",this.placeholder=""}requestUpdate(t,e,i){super.requestUpdate(t,e,i),t==="readOnly"&&this.__delegateReadOnly()}firstUpdated(t){super.firstUpdated(t),this.__delegateReadOnly()}updated(t){super.updated(t),t.has("type")&&(this._inputNode.type=this.type),t.has("placeholder")&&(this._inputNode.placeholder=this.placeholder),t.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),t.has("name")&&(this._inputNode.name=this.name),t.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}}const jr=U`
  :host {
    display: block;
    box-sizing: border-box;
    inline-size: 100%;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-md);
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
    color: var(--co-color-text-tertiary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .form-field__group-two {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
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
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .input-group__container {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-raised);
  }

  :host(:focus-within) .input-group__container {
    border-color: var(--co-color-border-focus);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-focus);
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
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-danger);
  }

  :host([readonly]) .input-group__container {
    background: var(--co-color-surface-sunken);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) .input-group__container {
    background: var(--co-color-surface-disabled);
    color: var(--co-color-text-disabled);
    opacity: var(--co-opacity-disabled);
  }

  :host([disabled]) .form-field__label,
  :host([disabled]) .form-field__help-text {
    color: var(--co-color-text-disabled);
  }

  :host([size='sm']) {
    font-size: var(--co-font-size-sm);
  }

  :host([size='sm']) .input-group__container {
    min-block-size: var(--co-control-height-sm);
    padding-inline: var(--co-space-inset-sm);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-lg);
  }

  :host([size='lg']) .input-group__container {
    min-block-size: var(--co-control-height-lg);
    padding-inline: var(--co-space-inset-lg);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-xl);
  }

  :host([size='xl']) .input-group__container {
    min-block-size: var(--co-control-height-xl);
    padding-inline: var(--co-space-inset-xl);
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
    color: var(--co-color-text-tertiary);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  slot[name='input']::slotted(input) {
    display: block;
    inline-size: 100%;
    min-inline-size: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: inherit;
  }

  slot[name='input']::slotted(input:disabled) {
    cursor: not-allowed;
  }

  slot[name='input']::slotted(input:read-only) {
    cursor: default;
  }
`;var ai=function(s,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};let mt=class extends Gr{constructor(){super(...arguments),this.size="md",this.danger=!1,this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=t=>{t.target===this._inputNode&&this._dispatchValueEvent("co-input")},this._handleNativeChange=t=>{t.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,jr]}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}_labelTemplate(){return v`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return v`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return v`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(t=>t.slot==="prefix")?v`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:S}_inputGroupInputTemplate(){return v`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(t=>t.slot==="suffix")?v`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:S}_feedbackTemplate(){return v`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_dispatchValueEvent(t){this.dispatchEvent(new CustomEvent(t,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}};ai([A({reflect:!0})],mt.prototype,"size",void 0);ai([A({type:Boolean,reflect:!0})],mt.prototype,"danger",void 0);mt=ai([ne("co-input")],mt);const Wr=U`
  :host {
    display: block;
    box-sizing: border-box;
    inline-size: 100%;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-md);
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
    color: var(--co-color-text-tertiary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .form-field__group-two {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
  }

  .input-group {
    display: flex;
    align-items: stretch;
    inline-size: 100%;
  }

  .input-group__container {
    display: flex;
    inline-size: 100%;
  }

  .input-group__input {
    display: flex;
    inline-size: 100%;
    min-inline-size: 0;
  }

  :host([orientation='horizontal']) .input-group__input {
    inline-size: auto;
  }

  slot[name='input']::slotted([role='listbox']) {
    display: grid;
    inline-size: 100%;
    max-block-size: 18rem;
    overflow: auto;
    gap: var(--co-space-1);
    padding: var(--co-space-1);
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    outline: 0;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host([orientation='horizontal']) slot[name='input']::slotted([role='listbox']) {
    display: flex;
    inline-size: auto;
    flex-wrap: wrap;
  }

  :host(:hover:not([disabled])) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-raised);
  }

  :host(:focus-within) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-focus);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-focus);
  }

  :host([has-feedback-for~='error']) slot[name='input']::slotted([role='listbox']),
  :host([shows-feedback-for~='error']) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-danger);
  }

  :host([has-feedback-for~='error']:focus-within) slot[name='input']::slotted([role='listbox']),
  :host([shows-feedback-for~='error']:focus-within) slot[name='input']::slotted([role='listbox']) {
    border-color: var(--co-color-border-danger);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-danger);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) slot[name='input']::slotted([role='listbox']) {
    background: var(--co-color-surface-disabled);
    color: var(--co-color-text-disabled);
    opacity: var(--co-opacity-disabled);
  }

  :host([disabled]) .form-field__label,
  :host([disabled]) .form-field__help-text {
    color: var(--co-color-text-disabled);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }
`;var Te=function(s,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};let be=class extends fs{constructor(){super(...arguments),this.orientation="vertical",this.selectionFollowsFocus=!1,this.rotateKeyboardNavigation=!1,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.required=!1,this._requiredValidator=new us,this._handleModelValueChanged=t=>{var i;const e=t;e.target!==this||(i=e.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,Wr]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(t){super.firstUpdated(t),this._syncRequiredValidator()}updated(t){super.updated(t),t.has("required")&&this._syncRequiredValidator()}_labelTemplate(){return v`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return v`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return v`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">${this._inputGroupInputTemplate()}</div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return S}_inputGroupInputTemplate(){return v`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
        <slot id="options-outlet"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return S}_feedbackTemplate(){return v`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_syncRequiredValidator(){const t=this.validators,e=t.includes(this._requiredValidator);if(this.required&&!e){this.validators=[...t,this._requiredValidator];return}!this.required&&e&&(this.validators=t.filter(i=>i!==this._requiredValidator))}};Te([A({reflect:!0})],be.prototype,"orientation",void 0);Te([A({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],be.prototype,"selectionFollowsFocus",void 0);Te([A({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],be.prototype,"rotateKeyboardNavigation",void 0);Te([A({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],be.prototype,"hasNoDefaultSelected",void 0);Te([A({type:Boolean,attribute:"multiple-choice",reflect:!0})],be.prototype,"multipleChoice",void 0);Te([A({type:Boolean,reflect:!0})],be.prototype,"required",void 0);be=Te([ne("co-listbox")],be);var Xe=new Map;function Kr(s){var t=Xe.get(s);t&&t.destroy()}function Yr(s){var t=Xe.get(s);t&&t.update()}var We=null;typeof window>"u"?((We=function(s){return s}).destroy=function(s){return s},We.update=function(s){return s}):((We=function(s,t){return s&&Array.prototype.forEach.call(s.length?s:[s],function(e){return function(i){if(i&&i.nodeName&&i.nodeName==="TEXTAREA"&&!Xe.has(i)){var o,r=null,n=window.getComputedStyle(i),a=(o=i.value,function(){p({testForHeightReduction:o===""||!i.value.startsWith(o),restoreTextAlign:null}),o=i.value}),c=(function(m){i.removeEventListener("autosize:destroy",c),i.removeEventListener("autosize:update",_),i.removeEventListener("input",a),window.removeEventListener("resize",_),Object.keys(m).forEach(function(h){return i.style[h]=m[h]}),Xe.delete(i)}).bind(i,{height:i.style.height,resize:i.style.resize,textAlign:i.style.textAlign,overflowY:i.style.overflowY,overflowX:i.style.overflowX,wordWrap:i.style.wordWrap});i.addEventListener("autosize:destroy",c),i.addEventListener("autosize:update",_),i.addEventListener("input",a),window.addEventListener("resize",_),i.style.overflowX="hidden",i.style.wordWrap="break-word",Xe.set(i,{destroy:c,update:_}),_()}function p(m){var h,u,b=m.restoreTextAlign,f=b===void 0?null:b,x=m.testForHeightReduction,N=x===void 0||x,L=n.overflowY;if(i.scrollHeight!==0&&(n.resize==="vertical"?i.style.resize="none":n.resize==="both"&&(i.style.resize="horizontal"),N&&(h=function(T){for(var H=[];T&&T.parentNode&&T.parentNode instanceof Element;)T.parentNode.scrollTop&&H.push([T.parentNode,T.parentNode.scrollTop]),T=T.parentNode;return function(){return H.forEach(function(G){var Y=G[0],ee=G[1];Y.style.scrollBehavior="auto",Y.scrollTop=ee,Y.style.scrollBehavior=null})}}(i),i.style.height=""),u=n.boxSizing==="content-box"?i.scrollHeight-(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)):i.scrollHeight+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),n.maxHeight!=="none"&&u>parseFloat(n.maxHeight)?(n.overflowY==="hidden"&&(i.style.overflow="scroll"),u=parseFloat(n.maxHeight)):n.overflowY!=="hidden"&&(i.style.overflow="hidden"),i.style.height=u+"px",f&&(i.style.textAlign=f),h&&h(),r!==u&&(i.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),r=u),L!==n.overflow&&!f)){var z=n.textAlign;n.overflow==="hidden"&&(i.style.textAlign=z==="start"?"end":"start"),p({restoreTextAlign:z,testForHeightReduction:!0})}}function _(){p({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),s}).destroy=function(s){return s&&Array.prototype.forEach.call(s.length?s:[s],Kr),s},We.update=function(s){return s&&Array.prototype.forEach.call(s.length?s:[s],Yr),s});var Qe=We;class Zr extends cs{get _inputNode(){return Array.from(this.children).find(t=>t.slot==="input")}}class Jr extends hs(Zr){static get properties(){return{maxRows:{type:Number,attribute:"max-rows"},rows:{type:Number,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const t=document.createElement("textarea");return t.style.resize!==void 0&&(t.style.resize="none"),t}}}constructor(){super(),this.rows=2,this.maxRows=6,this.readOnly=!1,this.placeholder=""}connectedCallback(){super.connectedCallback(),this.__initializeAutoresize(),this.__intersectionObserver=new IntersectionObserver(()=>this.resizeTextarea()),this.__intersectionObserver.observe(this)}updated(t){if(super.updated(t),t.has("name")&&(this._inputNode.name=this.name),t.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete),t.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),t.has("rows")){const e=this._inputNode;e&&(e.rows=this.rows)}if(t.has("readOnly")){const e=this._inputNode;e&&(e.readOnly=this.readOnly)}if(t.has("placeholder")){const e=this._inputNode;e&&(e.placeholder=this.placeholder)}t.has("modelValue")&&this.resizeTextarea(),(t.has("maxRows")||t.has("rows"))&&this.setTextareaMaxHeight()}disconnectedCallback(){super.disconnectedCallback(),Qe.destroy(this._inputNode)}setTextareaMaxHeight(){const{value:t}=this._inputNode;this._inputNode.value="",this.resizeTextarea();const e=window.getComputedStyle(this._inputNode,null),i=parseFloat(e.lineHeight)||parseFloat(e.height)/this.rows,o=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),r=parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),n=e.boxSizing==="border-box"?o+r:0;this._inputNode.style.maxHeight=`${i*this.maxRows+n}px`,this._inputNode.value=t,this.resizeTextarea()}static get styles(){return[...super.styles,U`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          box-sizing: content-box;
          overflow-x: hidden; /* for FF adds height to the TextArea to reserve place for scroll-bars */
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }
      `]}get updateComplete(){return this.__textareaUpdateComplete?Promise.all([this.__textareaUpdateComplete,super.updateComplete]):super.updateComplete}resizeTextarea(){Qe.update(this._inputNode)}__initializeAutoresize(){this.__shady_native_contains?this.__textareaUpdateComplete=this.__waitForTextareaRenderedInRealDOM().then(()=>{this.__startAutoresize(),this.__textareaUpdateComplete=null}):this.__startAutoresize()}async __waitForTextareaRenderedInRealDOM(){let t=3;for(;t!==0&&!this.__shady_native_contains(this._inputNode);)await new Promise(e=>setTimeout(e)),t-=1}__startAutoresize(){Qe(this._inputNode),this.setTextareaMaxHeight()}}const Xr=U`
  :host {
    display: block;
    box-sizing: border-box;
    inline-size: 100%;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-md);
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
    color: var(--co-color-text-tertiary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .form-field__group-two {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
  }

  .input-group {
    display: flex;
    align-items: stretch;
    inline-size: 100%;
  }

  .input-group__container {
    display: flex;
    align-items: flex-start;
    inline-size: 100%;
    min-block-size: calc(var(--co-control-height-md) * 2);
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-inset-md);
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      box-shadow var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .input-group__container {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-raised);
  }

  :host(:focus-within) .input-group__container {
    border-color: var(--co-color-border-focus);
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-focus);
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
    box-shadow: 0 0 0 var(--co-focus-ring-width) var(--co-color-border-danger);
  }

  :host([readonly]) .input-group__container {
    background: var(--co-color-surface-sunken);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([disabled]) .input-group__container {
    background: var(--co-color-surface-disabled);
    color: var(--co-color-text-disabled);
    opacity: var(--co-opacity-disabled);
  }

  :host([disabled]) .form-field__label,
  :host([disabled]) .form-field__help-text,
  :host([disabled]) .form-field__counter {
    color: var(--co-color-text-disabled);
  }

  :host([size='sm']) {
    font-size: var(--co-font-size-sm);
  }

  :host([size='sm']) .input-group__container {
    min-block-size: calc(var(--co-control-height-sm) * 2);
    padding: var(--co-space-inset-sm);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-lg);
  }

  :host([size='lg']) .input-group__container {
    min-block-size: calc(var(--co-control-height-lg) * 2);
    padding: var(--co-space-inset-lg);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-xl);
  }

  :host([size='xl']) .input-group__container {
    min-block-size: calc(var(--co-control-height-xl) * 2);
    padding: var(--co-space-inset-xl);
  }

  .input-group__input {
    display: flex;
    align-items: stretch;
    flex: 1 1 auto;
    min-inline-size: 0;
  }

  .input-group__prefix,
  .input-group__suffix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    min-block-size: calc(1em * var(--co-font-line-height-normal));
    color: var(--co-color-text-tertiary);
  }

  .form-field__meta {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--co-space-gap-md);
  }

  .form-field__feedback {
    min-inline-size: 0;
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .form-field__counter {
    flex: 0 0 auto;
    color: var(--co-color-text-tertiary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    white-space: nowrap;
  }

  .form-field__counter--danger {
    color: var(--co-color-feedback-danger-text);
  }

  slot[name='input']::slotted(textarea) {
    display: block;
    inline-size: 100%;
    min-inline-size: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: inherit;
  }

  :host([resize='vertical']) slot[name='input']::slotted(textarea) {
    resize: vertical;
  }

  :host([resize='none']) slot[name='input']::slotted(textarea) {
    resize: none;
  }

  slot[name='input']::slotted(textarea:disabled) {
    cursor: not-allowed;
  }

  slot[name='input']::slotted(textarea:read-only) {
    cursor: default;
  }
`;var qe=function(s,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};let Ne=class extends Jr{constructor(){super(...arguments),this.size="md",this.danger=!1,this.resize="auto",this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=t=>{t.target===this._inputNode&&(this.requestUpdate("value"),this._dispatchValueEvent("co-input"))},this._handleNativeChange=t=>{t.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,Xr]}get slots(){const t=super.slots;return{...t,input:()=>{const e=t.input(),i=this.getAttribute("value");return i!==null&&(e.value=i),e}}}get value(){return super.value}set value(t){const e=this.value;super.value=t,this.requestUpdate("value",e),this._resizeForCurrentMode()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}firstUpdated(t){super.firstUpdated(t),this._syncNativeLengthAttributes(),this._applyResizeMode(),this._syncCounterDescription()}updated(t){super.updated(t),(t.has("maxLength")||t.has("minLength"))&&this._syncNativeLengthAttributes(),(t.has("resize")||t.has("rows")||t.has("maxRows"))&&this._applyResizeMode(),t.has("maxLength")&&this._syncCounterDescription()}resizeTextarea(){this.resize==="auto"&&super.resizeTextarea()}_groupTwoTemplate(){return v`
      ${this._inputGroupTemplate()}
      <div part="meta" class="form-field__meta">
        ${this._feedbackTemplate()} ${this._counterTemplate()}
      </div>
    `}_labelTemplate(){return v`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return v`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return v`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(t=>t.slot==="prefix")?v`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:S}_inputGroupInputTemplate(){return v`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(t=>t.slot==="suffix")?v`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:S}_feedbackTemplate(){return v`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_counterTemplate(){return this._hasMaxLength()?v`
      <output
        part="counter"
        class="form-field__counter ${this._currentLength()>=this.maxLength?"form-field__counter--danger":""}"
      >
        ${this._currentLength()} / ${this.maxLength}
      </output>
    `:S}_dispatchValueEvent(t){this.dispatchEvent(new CustomEvent(t,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}_hasMaxLength(){return typeof this.maxLength=="number"&&Number.isFinite(this.maxLength)&&this.maxLength>=0}_currentLength(){return this.value.length}_syncNativeLengthAttributes(){const t=this._inputNode;t&&(this._hasMaxLength()?t.maxLength=this.maxLength:t.removeAttribute("maxlength"),typeof this.minLength=="number"&&Number.isFinite(this.minLength)&&this.minLength>=0?t.minLength=this.minLength:t.removeAttribute("minlength"))}_applyResizeMode(){const t=this._inputNode;if(t){if(this.resize==="auto"){Qe(t),this.setTextareaMaxHeight(),t.style.resize="none";return}Qe.destroy(t),t.style.height="",t.style.maxHeight="",t.style.overflowY="",t.style.resize=this.resize==="vertical"?"vertical":"none"}}_resizeForCurrentMode(){!this._inputNode||this.resize!=="auto"||this.resizeTextarea()}_syncCounterDescription(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector('[part="counter"]');if(this._counterNode&&this._counterNode!==t&&(this.removeFromAriaDescribedBy(this._counterNode),this._counterNode=void 0),!this._hasMaxLength()){this._counterNode&&(this.removeFromAriaDescribedBy(this._counterNode),this._counterNode=void 0);return}t&&this._counterNode!==t&&(this.addToAriaDescribedBy(t,{idPrefix:"counter",reorder:!0}),this._counterNode=t)}};qe([A({reflect:!0})],Ne.prototype,"size",void 0);qe([A({type:Boolean,reflect:!0})],Ne.prototype,"danger",void 0);qe([A({reflect:!0})],Ne.prototype,"resize",void 0);qe([A({type:Number,attribute:"maxlength",reflect:!0})],Ne.prototype,"maxLength",void 0);qe([A({type:Number,attribute:"minlength",reflect:!0})],Ne.prototype,"minLength",void 0);Ne=qe([ne("co-textarea")],Ne);export{we as CoButton,me as CoButtonIcon,W as CoCombobox,Yt as CoForm,_e as CoIcon,mt as CoInput,be as CoListbox,Kt as CoOption,Ne as CoTextarea};
