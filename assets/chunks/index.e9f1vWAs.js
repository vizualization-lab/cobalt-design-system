const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/bg-BG.DvcqJcRT.js","assets/chunks/bg.DjRhbvP8.js","assets/chunks/cs-CZ.C4M3ss0M.js","assets/chunks/cs.BpAIInFi.js","assets/chunks/de-DE.B6cLQS-C.js","assets/chunks/de.tu_ZC0by.js","assets/chunks/en-AU.BLLSR6ul.js","assets/chunks/en.BRtJWocA.js","assets/chunks/en-GB.BLLSR6ul.js","assets/chunks/en-US.BLLSR6ul.js","assets/chunks/es-ES.C-k5kUnm.js","assets/chunks/es.CmCcTLNg.js","assets/chunks/fr-FR.DC-XO9HF.js","assets/chunks/fr.z99AZYvu.js","assets/chunks/fr-BE.DC-XO9HF.js","assets/chunks/hu-HU.BeTGSB1R.js","assets/chunks/hu.DlqOkKS-.js","assets/chunks/it-IT.BfrsYHtj.js","assets/chunks/it.dhe0n6ro.js","assets/chunks/nl-BE.CtPSVrK-.js","assets/chunks/nl.CsOjjg4q.js","assets/chunks/nl-NL.CtPSVrK-.js","assets/chunks/pl-PL.BO_uoCo3.js","assets/chunks/pl.CYht5iOc.js","assets/chunks/ro-RO.BzszQasy.js","assets/chunks/ro.DwBEW5po.js","assets/chunks/ru-RU.DYdB6zKs.js","assets/chunks/ru.BWO2zRrD.js","assets/chunks/sk-SK.t6DAVN22.js","assets/chunks/sk.BCmB7Wtj.js","assets/chunks/tr-TR.Cbm2kwTy.js","assets/chunks/tr.C7VWmvp5.js","assets/chunks/uk-UA.DRKx0L1R.js","assets/chunks/uk.L9q5i_B2.js"])))=>i.map(i=>d[i]);
var Jo=Object.defineProperty;var Xo=Object.getPrototypeOf;var Qo=Reflect.get;var Ti=o=>{throw TypeError(o)};var es=(o,e,t)=>e in o?Jo(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var W=(o,e,t)=>es(o,typeof e!="symbol"?e+"":e,t),Tt=(o,e,t)=>e.has(o)||Ti("Cannot "+t);var B=(o,e,t)=>(Tt(o,e,"read from private field"),t?t.call(o):e.get(o)),ee=(o,e,t)=>e.has(o)?Ti("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t),oe=(o,e,t,i)=>(Tt(o,e,"write to private field"),i?i.call(o,t):e.set(o,t),t),ne=(o,e,t)=>(Tt(o,e,"access private method"),t);var Ie=(o,e,t)=>Qo(Xo(o),t,e);import{B as x}from"./framework.2KsE0g5C.js";import{g as ts,a as is,b as os,o as ss}from"./theme.uWtX6V46.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=globalThis,hi=vt.ShadowRoot&&(vt.ShadyCSS===void 0||vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ui=Symbol(),Vi=new WeakMap;let uo=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ui)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(hi&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Vi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Vi.set(t,e))}return e}toString(){return this.cssText}};const ns=o=>new uo(typeof o=="string"?o:o+"",void 0,ui),M=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new uo(t,o,ui)},pi=(o,e)=>{if(hi)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=vt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},Fi=hi?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ns(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:rs,defineProperty:as,getOwnPropertyDescriptor:ls,getOwnPropertyNames:ds,getOwnPropertySymbols:cs,getPrototypeOf:hs}=Object,me=globalThis,Ii=me.trustedTypes,us=Ii?Ii.emptyScript:"",Vt=me.reactiveElementPolyfillSupport,Ze=(o,e)=>o,gt={toAttribute(o,e){switch(e){case Boolean:o=o?us:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},fi=(o,e)=>!rs(o,e),Li={attribute:!0,type:String,converter:gt,reflect:!1,useDefault:!1,hasChanged:fi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),me.litPropertyMetadata??(me.litPropertyMetadata=new WeakMap);let Me=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Li){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&as(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=ls(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){const a=s==null?void 0:s.call(this);n==null||n.call(this,r),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Li}static _$Ei(){if(this.hasOwnProperty(Ze("elementProperties")))return;const e=hs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ze("properties"))){const t=this.properties,i=[...ds(t),...cs(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Fi(s))}else e!==void 0&&t.push(Fi(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pi(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:gt).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){var n,r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:gt;this._$Em=s;const h=d.fromAttribute(t,a.type);this[s]=h??((r=this._$Ej)==null?void 0:r.get(s))??h,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){var r;if(e!==void 0){const a=this.constructor;if(s===!1&&(n=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??fi)(n,t)||i.useDefault&&i.reflect&&n===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??t??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,r]of s){const{wrapped:a}=r,d=this[n];a!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,r,d)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Me.elementStyles=[],Me.shadowRootOptions={mode:"open"},Me[Ze("elementProperties")]=new Map,Me[Ze("finalized")]=new Map,Vt==null||Vt({ReactiveElement:Me}),(me.reactiveElementVersions??(me.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=globalThis,Mi=o=>o,yt=Je.trustedTypes,zi=yt?yt.createPolicy("lit-html",{createHTML:o=>o}):void 0,po="$lit$",fe=`lit$${Math.random().toFixed(9).slice(2)}$`,fo="?"+fe,ps=`<${fo}>`,Ne=document,ot=()=>Ne.createComment(""),st=o=>o===null||typeof o!="object"&&typeof o!="function",_i=Array.isArray,fs=o=>_i(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Ft=`[ 	
\f\r]`,We=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ri=/-->/g,$i=/>/g,xe=RegExp(`>|${Ft}(?:([^\\s"'>=/]+)(${Ft}*=${Ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Di=/'/g,Pi=/"/g,_o=/^(?:script|style|textarea|title)$/i,_s=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),f=_s(1),ae=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Bi=new WeakMap,ke=Ne.createTreeWalker(Ne,129);function mo(o,e){if(!_i(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return zi!==void 0?zi.createHTML(e):e}const ms=(o,e)=>{const t=o.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",r=We;for(let a=0;a<t;a++){const d=o[a];let h,_,b=-1,u=0;for(;u<d.length&&(r.lastIndex=u,_=r.exec(d),_!==null);)u=r.lastIndex,r===We?_[1]==="!--"?r=Ri:_[1]!==void 0?r=$i:_[2]!==void 0?(_o.test(_[2])&&(s=RegExp("</"+_[2],"g")),r=xe):_[3]!==void 0&&(r=xe):r===xe?_[0]===">"?(r=s??We,b=-1):_[1]===void 0?b=-2:(b=r.lastIndex-_[2].length,h=_[1],r=_[3]===void 0?xe:_[3]==='"'?Pi:Di):r===Pi||r===Di?r=xe:r===Ri||r===$i?r=We:(r=xe,s=void 0);const p=r===xe&&o[a+1].startsWith("/>")?" ":"";n+=r===We?d+ps:b>=0?(i.push(h),d.slice(0,b)+po+d.slice(b)+fe+p):d+fe+(b===-2?a:p)}return[mo(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class nt{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0;const a=e.length-1,d=this.parts,[h,_]=ms(e,t);if(this.el=nt.createElement(h,i),ke.currentNode=this.el.content,t===2||t===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(s=ke.nextNode())!==null&&d.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const b of s.getAttributeNames())if(b.endsWith(po)){const u=_[r++],p=s.getAttribute(b).split(fe),v=/([.?@])?(.*)/.exec(u);d.push({type:1,index:n,name:v[2],strings:p,ctor:v[1]==="."?vs:v[1]==="?"?gs:v[1]==="@"?ys:wt}),s.removeAttribute(b)}else b.startsWith(fe)&&(d.push({type:6,index:n}),s.removeAttribute(b));if(_o.test(s.tagName)){const b=s.textContent.split(fe),u=b.length-1;if(u>0){s.textContent=yt?yt.emptyScript:"";for(let p=0;p<u;p++)s.append(b[p],ot()),ke.nextNode(),d.push({type:2,index:++n});s.append(b[u],ot())}}}else if(s.nodeType===8)if(s.data===fo)d.push({type:2,index:n});else{let b=-1;for(;(b=s.data.indexOf(fe,b+1))!==-1;)d.push({type:7,index:n}),b+=fe.length-1}n++}}static createElement(e,t){const i=Ne.createElement("template");return i.innerHTML=e,i}}function Pe(o,e,t=o,i){var r,a;if(e===ae)return e;let s=i!==void 0?(r=t._$Co)==null?void 0:r[i]:t._$Cl;const n=st(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=Pe(o,s._$AS(o,e.values),s,i)),e}class bs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Ne).importNode(t,!0);ke.currentNode=s;let n=ke.nextNode(),r=0,a=0,d=i[0];for(;d!==void 0;){if(r===d.index){let h;d.type===2?h=new ut(n,n.nextSibling,this,e):d.type===1?h=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(h=new xs(n,this,e)),this._$AV.push(h),d=i[++a]}r!==(d==null?void 0:d.index)&&(n=ke.nextNode(),r++)}return ke.currentNode=Ne,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ut{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pe(this,e,t),st(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==ae&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&st(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ne.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=nt.createElement(mo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const r=new bs(s,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=Bi.get(e.strings);return t===void 0&&Bi.set(e.strings,t=new nt(e)),t}k(e){_i(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new ut(this.O(ot()),this.O(ot()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const s=Mi(e).nextSibling;Mi(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class wt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(e,t=this,i,s){const n=this.strings;let r=!1;if(n===void 0)e=Pe(this,e,t,0),r=!st(e)||e!==this._$AH&&e!==ae,r&&(this._$AH=e);else{const a=e;let d,h;for(e=n[0],d=0;d<n.length-1;d++)h=Pe(this,a[i+d],t,d),h===ae&&(h=this._$AH[d]),r||(r=!st(h)||h!==this._$AH[d]),h===S?e=S:e!==S&&(e+=(h??"")+n[d+1]),this._$AH[d]=h}r&&!s&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class vs extends wt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class gs extends wt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class ys extends wt{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Pe(this,e,t,0)??S)===ae)return;const i=this._$AH,s=e===S&&i!==S||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==S&&(i===S||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class xs{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Pe(this,e)}}const It=Je.litHtmlPolyfillSupport;It==null||It(nt,ut),(Je.litHtmlVersions??(Je.litHtmlVersions=[])).push("3.3.2");const qt=(o,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new ut(e.insertBefore(ot(),n),n,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=globalThis;let K=class extends Me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ae}};var Qi;K._$litElement$=!0,K.finalized=!0,(Qi=Ee.litElementHydrateSupport)==null||Qi.call(Ee,{LitElement:K});const Lt=Ee.litElementPolyfillSupport;Lt==null||Lt({LitElement:K});(Ee.litElementVersions??(Ee.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:fi},ks=(o=Cs,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(t.name,o),i==="accessor"){const{name:r}=t;return{set(a){const d=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,d,o,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,o,a),a}}}if(i==="setter"){const{name:r}=t;return function(a){const d=this[r];e.call(this,a),this.requestUpdate(r,d,o,!0,a)}}throw Error("Unsupported decorator location: "+i)};function g(o){return(e,t)=>typeof t=="object"?ks(o,e,t):((i,s,n)=>{const r=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),r?Object.getOwnPropertyDescriptor(s,n):void 0})(o,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws=(o,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(o,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Es(o,e){return(t,i,s)=>{const n=r=>{var a;return((a=r.renderRoot)==null?void 0:a.querySelector(o))??null};return ws(t,i,{get(){return n(this)}})}}const bo=new WeakMap;function Ns(o,e){let t=e;for(;t;){if(bo.get(t)===o)return!0;t=Object.getPrototypeOf(t)}return!1}function D(o){return e=>{if(Ns(o,e))return e;const t=o(e);return bo.set(t,o),t}}const jt=window,Ui=new WeakMap;function Ss(o){jt.applyFocusVisiblePolyfill&&!Ui.has(o)&&(jt.applyFocusVisiblePolyfill(o),Ui.set(o,void 0))}const As=o=>class extends o{static get properties(){return{focused:{type:Boolean,reflect:!0},focusedVisible:{type:Boolean,reflect:!0,attribute:"focused-visible"},autofocus:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1,this.focusedVisible=!1,this.autofocus=!1}firstUpdated(t){super.firstUpdated(t),this.__registerEventsForFocusMixin(),this.__syncAutofocusToFocusableElement()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForFocusMixin()}updated(t){super.updated(t),t.has("autofocus")&&this.__syncAutofocusToFocusableElement()}__syncAutofocusToFocusableElement(){this._focusableNode&&(this.hasAttribute("autofocus")?this._focusableNode.setAttribute("autofocus",""):this._focusableNode.removeAttribute("autofocus"))}focus(){var t;(t=this._focusableNode)==null||t.focus()}blur(){var t;(t=this._focusableNode)==null||t.blur()}get _focusableNode(){return this._inputNode||document.createElement("input")}__onFocus(){if(this.focused=!0,typeof jt.applyFocusVisiblePolyfill=="function")this.focusedVisible=this._focusableNode.hasAttribute("data-focus-visible-added");else try{this.focusedVisible=this._focusableNode.matches(":focus-visible")}catch{this.focusedVisible=!1}}__onBlur(){this.focused=!1,this.focusedVisible=!1}__registerEventsForFocusMixin(){Ss(this.getRootNode()),this.__redispatchFocus=t=>{t.stopPropagation(),this.dispatchEvent(new Event("focus"))},this._focusableNode.addEventListener("focus",this.__redispatchFocus),this.__redispatchBlur=t=>{t.stopPropagation(),this.dispatchEvent(new Event("blur"))},this._focusableNode.addEventListener("blur",this.__redispatchBlur),this.__redispatchFocusin=t=>{t.stopPropagation(),this.__onFocus(),this.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusin",this.__redispatchFocusin),this.__redispatchFocusout=t=>{t.stopPropagation(),this.__onBlur(),this.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusout",this.__redispatchFocusout)}__teardownEventsForFocusMixin(){var t,i,s,n;this._focusableNode&&((t=this._focusableNode)==null||t.removeEventListener("focus",this.__redispatchFocus),(i=this._focusableNode)==null||i.removeEventListener("blur",this.__redispatchBlur),(s=this._focusableNode)==null||s.removeEventListener("focusin",this.__redispatchFocusin),(n=this._focusableNode)==null||n.removeEventListener("focusout",this.__redispatchFocusout))}},mi=D(As),Os=o=>class extends o{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){this._requestedToBeDisabled===!1&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){this._requestedToBeDisabled===!0&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="disabled"&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),this.disabled===!1&&this._requestedToBeDisabled===!0&&this.__internalSetDisabled(!0))}click(){this.disabled||super.click()}},pt=D(Os),Ts=o=>{var e,t;return t=class extends pt(o){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),this._requestedToBeDisabled===!1&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}__internalSetTabIndex(s){this.__isUserSettingTabIndex=!1,this.tabIndex=s,this.__isUserSettingTabIndex=!0}requestUpdate(s,n,r){super.requestUpdate(s,n,r),s==="disabled"&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),s==="tabIndex"&&(this.__isUserSettingTabIndex&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex),this.tabIndex!==-1&&this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(-1))}firstUpdated(s){super.firstUpdated(s),this.disabled&&this.__internalSetTabIndex(-1)}},W(t,"enabledWarnings",((e=Ie(t,t,"enabledWarnings"))==null?void 0:e.filter(s=>s!=="change-in-update"))||[]),t},Vs=D(Ts);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=o=>o===null||typeof o!="object"&&typeof o!="function",Is=(o,e)=>(o==null?void 0:o._$litType$)!==void 0,Ls=o=>o.strings===void 0;function Hi(o,e){let t=!1;Array.from(o.childNodes).forEach(i=>{const s=i.hasAttribute&&i.hasAttribute("slot");if(i.nodeType===Node.COMMENT_NODE&&!t&&(t=i.textContent.includes("_start_slot_")),t){i.textContent.includes("_end_slot_")&&(t=!1);return}s||e.appendChild(i)})}function Ms(o){return o instanceof Node?"node":Is(o)?"template-result":!Array.isArray(o)&&typeof o=="object"&&"template"in o?"slot-rerender-object":null}const zs=o=>class extends o{get slots(){return{}}constructor(){super(),this.__renderMetaPerSlot=new Map,this.__slotsThatNeedRerender=new Set,this.__slotsProvidedByUserOnFirstConnected=new Set,this.__privateSlots=new Set}connectedCallback(){super.connectedCallback(),this._connectSlotMixin()}__rerenderSlot(t){var s;const i=this.slots[t]();this.__renderTemplateInScopedContext({renderAsDirectHostChild:i.renderAsDirectHostChild,template:i.template,slotName:t}),(s=i.afterRender)==null||s.call(i)}update(t){super.update(t);for(const i of this.__slotsThatNeedRerender)this.__rerenderSlot(i)}__renderTemplateInScopedContext({template:t,slotName:i,renderAsDirectHostChild:s}){if(!this.__renderMetaPerSlot.has(i)){const u=!!ShadowRoot.prototype.createElement;!!this.shadowRoot||console.error("[SlotMixin] No shadowRoot was found");const m=(u?this.shadowRoot:document).createElement("div"),C=document.createComment(`_start_slot_${i}_`),A=document.createComment(`_end_slot_${i}_`);m.appendChild(C),m.appendChild(A);const{creationScope:I,host:R}=this.renderOptions;if(qt(t,m,{renderBefore:A,creationScope:I,host:R}),s){const O=Array.from(m.childNodes);this.__appendNodes({nodes:O,renderParent:this,slotName:i})}else m.slot=i,this.appendChild(m);this.__renderMetaPerSlot.set(i,{renderTargetThatRespectsShadowRootScoping:m,renderBefore:A});return}const{renderBefore:r,renderTargetThatRespectsShadowRootScoping:a}=this.__renderMetaPerSlot.get(i),d=s?this:a,{creationScope:h,host:_}=this.renderOptions;qt(t,d,{creationScope:h,host:_,renderBefore:r}),s&&r.previousElementSibling&&!r.previousElementSibling.slot&&(r.previousElementSibling.slot=i)}__appendNodes({nodes:t,renderParent:i=this,slotName:s}){for(const n of t)n instanceof Element&&s&&s!==""&&n.setAttribute("slot",s),i.appendChild(n)}__initSlots(t){for(const i of t){if(this.__slotsProvidedByUserOnFirstConnected.has(i))continue;const s=this.slots[i]();if(s===void 0)continue;switch(this.__isConnectedSlotMixin||this.__privateSlots.add(i),Ms(s)){case"template-result":this.__renderTemplateInScopedContext({template:s,renderAsDirectHostChild:!0,slotName:i});break;case"node":this.__appendNodes({nodes:[s],renderParent:this,slotName:i});break;case"slot-rerender-object":this.__slotsThatNeedRerender.add(i),s.firstRenderOnConnected&&this.__rerenderSlot(i);break;default:throw new Error(`Slot "${i}" configured inside "get slots()" (in prototype) of ${this.constructor.name} may return these types: TemplateResult | Node | {template:TemplateResult, afterRender?:function} | undefined.
              You provided: ${s}`)}}}_connectSlotMixin(){if(this.__isConnectedSlotMixin)return;const t=Object.keys(this.slots);for(const i of t)(i===""?Array.from(this.children).find(n=>!n.hasAttribute("slot")):Array.from(this.children).find(n=>n.slot===i))&&this.__slotsProvidedByUserOnFirstConnected.add(i);this.__initSlots(t),this.__isConnectedSlotMixin=!0}_isPrivateSlot(t){return this.__privateSlots.has(t)}},ye=D(zs);function Mt(o="google-chrome"){var d,h;const e=globalThis.navigator,t=!!e.userAgentData&&e.userAgentData.brands.some(_=>_.brand==="Chromium");if(o==="chromium")return t;const i=globalThis.navigator,s=i==null?void 0:i.vendor,n=typeof globalThis.opr<"u",r=((d=globalThis.userAgent)==null?void 0:d.indexOf("Edge"))>-1,a=(h=globalThis.userAgent)==null?void 0:h.match("CriOS");if(o==="ios")return a;if(o==="google-chrome")return t!==null&&typeof t<"u"&&s==="Google Inc."&&n===!1&&r===!1}var eo,to,io,oo,so,no,ro,ao,lo,co;const rt={isChrome:Mt(),isIOSChrome:Mt("ios"),isChromium:Mt("chromium"),isFirefox:((eo=globalThis.navigator)==null?void 0:eo.userAgent.toLowerCase().indexOf("firefox"))>-1,isMac:((io=(to=globalThis.navigator)==null?void 0:to.appVersion)==null?void 0:io.indexOf("Mac"))!==-1,isIOS:/iPhone|iPad|iPod/i.test((oo=globalThis.navigator)==null?void 0:oo.userAgent),isMacSafari:((so=globalThis.navigator)==null?void 0:so.vendor)&&((no=globalThis.navigator)==null?void 0:no.vendor.indexOf("Apple"))>-1&&((ro=globalThis.navigator)==null?void 0:ro.userAgent)&&((ao=globalThis.navigator)==null?void 0:ao.userAgent.indexOf("CriOS"))===-1&&((lo=globalThis.navigator)==null?void 0:lo.userAgent.indexOf("FxiOS"))===-1&&((co=globalThis.navigator)==null?void 0:co.appVersion.indexOf("Mac"))!==-1};function vo(o=""){return`${o.length>0?`${o}-`:""}${Math.random().toString(36).substr(2,10)}`}function go(o,e){return e={exports:{}},o(e,e.exports),e.exports}var Ce="long",de="short",zt="narrow",F="numeric",ce="2-digit",he={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:F,day:F,year:ce},medium:{month:de,day:F,year:F},long:{month:Ce,day:F,year:F},full:{month:Ce,day:F,year:F,weekday:Ce},default:{month:de,day:F,year:F}},time:{short:{hour:F,minute:F},medium:{hour:F,minute:F,second:F},long:{hour:F,minute:F,second:F,timeZoneName:de},full:{hour:F,minute:F,second:F,timeZoneName:de},default:{hour:F,minute:F,second:F}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(o){if(o){var e={},t=o.match(/\b[A-Z]{3}\b/i),i=o.replace(/[^¤]/g,"").length;if(!i&&t&&(i=1),i?(e.style="currency",e.currencyDisplay=i===1?"symbol":i===2?"code":"name",e.currency=t?t[0].toUpperCase():"USD"):o.indexOf("%")>=0&&(e.style="percent"),!/[@#0]/.test(o))return e.style?e:void 0;if(e.useGrouping=o.indexOf(",")>=0,/E\+?[@#0]+/i.test(o)||o.indexOf("@")>=0){var s=o.replace(/E\+?[@#0]+|[^@#0]/gi,"");e.minimumSignificantDigits=Math.min(Math.max(s.replace(/[^@0]/g,"").length,1),21),e.maximumSignificantDigits=Math.min(Math.max(s.length,1),21)}else{for(var n=o.replace(/[^#0.]/g,"").split("."),r=n[0],a=r.length-1;r[a]==="0";)--a;e.minimumIntegerDigits=Math.min(Math.max(r.length-1-a,1),21);var d=n[1]||"";for(a=0;d[a]==="0";)++a;for(e.minimumFractionDigits=Math.min(Math.max(a,0),20);d[a]==="#";)++a;e.maximumFractionDigits=Math.min(Math.max(a,0),20)}return e}},parseDatePattern:function(o){if(o){for(var e={},t=0;t<o.length;){for(var i=o[t],s=1;o[++t]===i;)++s;switch(i){case"G":e.era=s===5?zt:s===4?Ce:de;break;case"y":case"Y":e.year=s===2?ce:F;break;case"M":case"L":s=Math.min(Math.max(s-1,0),4),e.month=[F,ce,de,Ce,zt][s];break;case"E":case"e":case"c":e.weekday=s===5?zt:s===4?Ce:de;break;case"d":case"D":e.day=s===2?ce:F;break;case"h":case"K":e.hour12=!0,e.hour=s===2?ce:F;break;case"H":case"k":e.hour12=!1,e.hour=s===2?ce:F;break;case"m":e.minute=s===2?ce:F;break;case"s":case"S":e.second=s===2?ce:F;break;case"z":case"Z":case"v":case"V":e.timeZoneName=s===1?de:Ce;break}}return Object.keys(e).length?e:void 0}}},Rs=function(e,t){if(typeof e=="string"&&t[e])return e;for(var i=[].concat(e||[]),s=0,n=i.length;s<n;++s)for(var r=i[s].split("-");r.length;){var a=r.join("-");if(t[a])return a;r.pop()}},Le="zero",N="one",U="two",z="few",P="many",y="other",c=[function(o){var e=+o;return e===1?N:y},function(o){var e=+o;return 0<=e&&e<=1?N:y},function(o){var e=Math.floor(Math.abs(+o)),t=+o;return e===0||t===1?N:y},function(o){var e=+o;return e===0?Le:e===1?N:e===2?U:3<=e%100&&e%100<=10?z:11<=e%100&&e%100<=99?P:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return e===1&&t===0?N:y},function(o){var e=+o;return e%10===1&&e%100!==11?N:2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?z:e%10===0||5<=e%10&&e%10<=9||11<=e%100&&e%100<=14?P:y},function(o){var e=+o;return e%10===1&&e%100!==11&&e%100!==71&&e%100!==91?N:e%10===2&&e%100!==12&&e%100!==72&&e%100!==92?U:(3<=e%10&&e%10<=4||e%10===9)&&(e%100<10||19<e%100)&&(e%100<70||79<e%100)&&(e%100<90||99<e%100)?z:e!==0&&e%1e6===0?P:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+(o+".").split(".")[1];return t===0&&e%10===1&&e%100!==11||i%10===1&&i%100!==11?N:t===0&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)||2<=i%10&&i%10<=4&&(i%100<12||14<i%100)?z:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return e===1&&t===0?N:2<=e&&e<=4&&t===0?z:t!==0?P:y},function(o){var e=+o;return e===0?Le:e===1?N:e===2?U:e===3?z:e===6?P:y},function(o){var e=Math.floor(Math.abs(+o)),t=+(""+o).replace(/^[^.]*.?|0+$/g,""),i=+o;return i===1||t!==0&&(e===0||e===1)?N:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+(o+".").split(".")[1];return t===0&&e%100===1||i%100===1?N:t===0&&e%100===2||i%100===2?U:t===0&&3<=e%100&&e%100<=4||3<=i%100&&i%100<=4?z:y},function(o){var e=Math.floor(Math.abs(+o));return e===0||e===1?N:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+(o+".").split(".")[1];return t===0&&(e===1||e===2||e===3)||t===0&&e%10!==4&&e%10!==6&&e%10!==9||t!==0&&i%10!==4&&i%10!==6&&i%10!==9?N:y},function(o){var e=+o;return e===1?N:e===2?U:3<=e&&e<=6?z:7<=e&&e<=10?P:y},function(o){var e=+o;return e===1||e===11?N:e===2||e===12?U:3<=e&&e<=10||13<=e&&e<=19?z:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return t===0&&e%10===1?N:t===0&&e%10===2?U:t===0&&(e%100===0||e%100===20||e%100===40||e%100===60||e%100===80)?z:t!==0?P:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+o;return e===1&&t===0?N:e===2&&t===0?U:t===0&&(i<0||10<i)&&i%10===0?P:y},function(o){var e=Math.floor(Math.abs(+o)),t=+(""+o).replace(/^[^.]*.?|0+$/g,"");return t===0&&e%10===1&&e%100!==11||t!==0?N:y},function(o){var e=+o;return e===1?N:e===2?U:y},function(o){var e=+o;return e===0?Le:e===1?N:y},function(o){var e=Math.floor(Math.abs(+o)),t=+o;return t===0?Le:(e===0||e===1)&&t!==0?N:y},function(o){var e=+(o+".").split(".")[1],t=+o;return t%10===1&&(t%100<11||19<t%100)?N:2<=t%10&&t%10<=9&&(t%100<11||19<t%100)?z:e!==0?P:y},function(o){var e=(o+".").split(".")[1].length,t=+(o+".").split(".")[1],i=+o;return i%10===0||11<=i%100&&i%100<=19||e===2&&11<=t%100&&t%100<=19?Le:i%10===1&&i%100!==11||e===2&&t%10===1&&t%100!==11||e!==2&&t%10===1?N:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+(o+".").split(".")[1];return t===0&&e%10===1&&e%100!==11||i%10===1&&i%100!==11?N:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+o;return e===1&&t===0?N:t!==0||i===0||i!==1&&1<=i%100&&i%100<=19?z:y},function(o){var e=+o;return e===1?N:e===0||2<=e%100&&e%100<=10?z:11<=e%100&&e%100<=19?P:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return e===1&&t===0?N:t===0&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?z:t===0&&e!==1&&0<=e%10&&e%10<=1||t===0&&5<=e%10&&e%10<=9||t===0&&12<=e%100&&e%100<=14?P:y},function(o){var e=Math.floor(Math.abs(+o));return 0<=e&&e<=1?N:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return t===0&&e%10===1&&e%100!==11?N:t===0&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?z:t===0&&e%10===0||t===0&&5<=e%10&&e%10<=9||t===0&&11<=e%100&&e%100<=14?P:y},function(o){var e=Math.floor(Math.abs(+o)),t=+o;return e===0||t===1?N:2<=t&&t<=10?z:y},function(o){var e=Math.floor(Math.abs(+o)),t=+(o+".").split(".")[1],i=+o;return i===0||i===1||e===0&&t===1?N:y},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return t===0&&e%100===1?N:t===0&&e%100===2?U:t===0&&3<=e%100&&e%100<=4||t!==0?z:y},function(o){var e=+o;return 0<=e&&e<=1||11<=e&&e<=99?N:y},function(o){var e=+o;return e===1||e===5||e===7||e===8||e===9||e===10?N:e===2||e===3?U:e===4?z:e===6?P:y},function(o){var e=Math.floor(Math.abs(+o));return e%10===1||e%10===2||e%10===5||e%10===7||e%10===8||e%100===20||e%100===50||e%100===70||e%100===80?N:e%10===3||e%10===4||e%1e3===100||e%1e3===200||e%1e3===300||e%1e3===400||e%1e3===500||e%1e3===600||e%1e3===700||e%1e3===800||e%1e3===900?z:e===0||e%10===6||e%100===40||e%100===60||e%100===90?P:y},function(o){var e=+o;return(e%10===2||e%10===3)&&e%100!==12&&e%100!==13?z:y},function(o){var e=+o;return e===1||e===3?N:e===2?U:e===4?z:y},function(o){var e=+o;return e===0||e===7||e===8||e===9?Le:e===1?N:e===2?U:e===3||e===4?z:e===5||e===6?P:y},function(o){var e=+o;return e%10===1&&e%100!==11?N:e%10===2&&e%100!==12?U:e%10===3&&e%100!==13?z:y},function(o){var e=+o;return e===1||e===11?N:e===2||e===12?U:e===3||e===13?z:y},function(o){var e=+o;return e===1?N:e===2||e===3?U:e===4?z:e===6?P:y},function(o){var e=+o;return e===1||e===5?N:y},function(o){var e=+o;return e===11||e===8||e===80||e===800?P:y},function(o){var e=Math.floor(Math.abs(+o));return e===1?N:e===0||2<=e%100&&e%100<=20||e%100===40||e%100===60||e%100===80?P:y},function(o){var e=+o;return e%10===6||e%10===9||e%10===0&&e!==0?P:y},function(o){var e=Math.floor(Math.abs(+o));return e%10===1&&e%100!==11?N:e%10===2&&e%100!==12?U:(e%10===7||e%10===8)&&e%100!==17&&e%100!==18?P:y},function(o){var e=+o;return e===1?N:e===2||e===3?U:e===4?z:y},function(o){var e=+o;return 1<=e&&e<=4?N:y},function(o){var e=+o;return e===1||e===5||7<=e&&e<=9?N:e===2||e===3?U:e===4?z:e===6?P:y},function(o){var e=+o;return e===1?N:e%10===4&&e%100!==14?P:y},function(o){var e=+o;return(e%10===1||e%10===2)&&e%100!==11&&e%100!==12?N:y},function(o){var e=+o;return e%10===6||e%10===9||e===10?z:y},function(o){var e=+o;return e%10===3&&e%100!==13?z:y}],Gt={af:{cardinal:c[0]},ak:{cardinal:c[1]},am:{cardinal:c[2]},ar:{cardinal:c[3]},ars:{cardinal:c[3]},as:{cardinal:c[2],ordinal:c[34]},asa:{cardinal:c[0]},ast:{cardinal:c[4]},az:{cardinal:c[0],ordinal:c[35]},be:{cardinal:c[5],ordinal:c[36]},bem:{cardinal:c[0]},bez:{cardinal:c[0]},bg:{cardinal:c[0]},bh:{cardinal:c[1]},bn:{cardinal:c[2],ordinal:c[34]},br:{cardinal:c[6]},brx:{cardinal:c[0]},bs:{cardinal:c[7]},ca:{cardinal:c[4],ordinal:c[37]},ce:{cardinal:c[0]},cgg:{cardinal:c[0]},chr:{cardinal:c[0]},ckb:{cardinal:c[0]},cs:{cardinal:c[8]},cy:{cardinal:c[9],ordinal:c[38]},da:{cardinal:c[10]},de:{cardinal:c[4]},dsb:{cardinal:c[11]},dv:{cardinal:c[0]},ee:{cardinal:c[0]},el:{cardinal:c[0]},en:{cardinal:c[4],ordinal:c[39]},eo:{cardinal:c[0]},es:{cardinal:c[0]},et:{cardinal:c[4]},eu:{cardinal:c[0]},fa:{cardinal:c[2]},ff:{cardinal:c[12]},fi:{cardinal:c[4]},fil:{cardinal:c[13],ordinal:c[0]},fo:{cardinal:c[0]},fr:{cardinal:c[12],ordinal:c[0]},fur:{cardinal:c[0]},fy:{cardinal:c[4]},ga:{cardinal:c[14],ordinal:c[0]},gd:{cardinal:c[15],ordinal:c[40]},gl:{cardinal:c[4]},gsw:{cardinal:c[0]},gu:{cardinal:c[2],ordinal:c[41]},guw:{cardinal:c[1]},gv:{cardinal:c[16]},ha:{cardinal:c[0]},haw:{cardinal:c[0]},he:{cardinal:c[17]},hi:{cardinal:c[2],ordinal:c[41]},hr:{cardinal:c[7]},hsb:{cardinal:c[11]},hu:{cardinal:c[0],ordinal:c[42]},hy:{cardinal:c[12],ordinal:c[0]},ia:{cardinal:c[4]},io:{cardinal:c[4]},is:{cardinal:c[18]},it:{cardinal:c[4],ordinal:c[43]},iu:{cardinal:c[19]},iw:{cardinal:c[17]},jgo:{cardinal:c[0]},ji:{cardinal:c[4]},jmc:{cardinal:c[0]},ka:{cardinal:c[0],ordinal:c[44]},kab:{cardinal:c[12]},kaj:{cardinal:c[0]},kcg:{cardinal:c[0]},kk:{cardinal:c[0],ordinal:c[45]},kkj:{cardinal:c[0]},kl:{cardinal:c[0]},kn:{cardinal:c[2]},ks:{cardinal:c[0]},ksb:{cardinal:c[0]},ksh:{cardinal:c[20]},ku:{cardinal:c[0]},kw:{cardinal:c[19]},ky:{cardinal:c[0]},lag:{cardinal:c[21]},lb:{cardinal:c[0]},lg:{cardinal:c[0]},ln:{cardinal:c[1]},lt:{cardinal:c[22]},lv:{cardinal:c[23]},mas:{cardinal:c[0]},mg:{cardinal:c[1]},mgo:{cardinal:c[0]},mk:{cardinal:c[24],ordinal:c[46]},ml:{cardinal:c[0]},mn:{cardinal:c[0]},mo:{cardinal:c[25],ordinal:c[0]},mr:{cardinal:c[2],ordinal:c[47]},mt:{cardinal:c[26]},nah:{cardinal:c[0]},naq:{cardinal:c[19]},nb:{cardinal:c[0]},nd:{cardinal:c[0]},ne:{cardinal:c[0],ordinal:c[48]},nl:{cardinal:c[4]},nn:{cardinal:c[0]},nnh:{cardinal:c[0]},no:{cardinal:c[0]},nr:{cardinal:c[0]},nso:{cardinal:c[1]},ny:{cardinal:c[0]},nyn:{cardinal:c[0]},om:{cardinal:c[0]},or:{cardinal:c[0],ordinal:c[49]},os:{cardinal:c[0]},pa:{cardinal:c[1]},pap:{cardinal:c[0]},pl:{cardinal:c[27]},prg:{cardinal:c[23]},ps:{cardinal:c[0]},pt:{cardinal:c[28]},"pt-PT":{cardinal:c[4]},rm:{cardinal:c[0]},ro:{cardinal:c[25],ordinal:c[0]},rof:{cardinal:c[0]},ru:{cardinal:c[29]},rwk:{cardinal:c[0]},saq:{cardinal:c[0]},sc:{cardinal:c[4],ordinal:c[43]},scn:{cardinal:c[4],ordinal:c[43]},sd:{cardinal:c[0]},sdh:{cardinal:c[0]},se:{cardinal:c[19]},seh:{cardinal:c[0]},sh:{cardinal:c[7]},shi:{cardinal:c[30]},si:{cardinal:c[31]},sk:{cardinal:c[8]},sl:{cardinal:c[32]},sma:{cardinal:c[19]},smi:{cardinal:c[19]},smj:{cardinal:c[19]},smn:{cardinal:c[19]},sms:{cardinal:c[19]},sn:{cardinal:c[0]},so:{cardinal:c[0]},sq:{cardinal:c[0],ordinal:c[50]},sr:{cardinal:c[7]},ss:{cardinal:c[0]},ssy:{cardinal:c[0]},st:{cardinal:c[0]},sv:{cardinal:c[4],ordinal:c[51]},sw:{cardinal:c[4]},syr:{cardinal:c[0]},ta:{cardinal:c[0]},te:{cardinal:c[0]},teo:{cardinal:c[0]},ti:{cardinal:c[1]},tig:{cardinal:c[0]},tk:{cardinal:c[0],ordinal:c[52]},tl:{cardinal:c[13],ordinal:c[0]},tn:{cardinal:c[0]},tr:{cardinal:c[0]},ts:{cardinal:c[0]},tzm:{cardinal:c[33]},ug:{cardinal:c[0]},uk:{cardinal:c[29],ordinal:c[53]},ur:{cardinal:c[4]},uz:{cardinal:c[0]},ve:{cardinal:c[0]},vo:{cardinal:c[0]},vun:{cardinal:c[0]},wa:{cardinal:c[1]},wae:{cardinal:c[0]},xh:{cardinal:c[0]},xog:{cardinal:c[0]},yi:{cardinal:c[4]},zu:{cardinal:c[2]},lo:{ordinal:c[0]},ms:{ordinal:c[0]},vi:{ordinal:c[0]}},Et=go(function(o,e){e=o.exports=function(p,v,m){return t(p,null,v||"en",m||{},!0)},e.toParts=function(p,v,m){return t(p,null,v||"en",m||{},!1)};function t(u,p,v,m,C){var A=u.map(function(I){return i(I,p,v,m,C)});return C?A.length===1?A[0]:function(R){for(var O="",H=0;H<A.length;++H)O+=A[H](R);return O}:function(R){return A.reduce(function(O,H){return O.concat(H(R))},[])}}function i(u,p,v,m,C){if(typeof u=="string"){var A=u;return function(){return A}}var I=u[0],R=u[1];if(p&&u[0]==="#"){I=p[0];var O=p[2],H=(m.number||b.number)([I,"number"],v);return function(L){return H(s(I,L)-O,L)}}var G;R==="plural"||R==="selectordinal"?(G={},Object.keys(u[3]).forEach(function(X){G[X]=t(u[3][X],u,v,m,C)}),u=[u[0],u[1],u[2],G]):u[2]&&typeof u[2]=="object"&&(G={},Object.keys(u[2]).forEach(function(X){G[X]=t(u[2][X],u,v,m,C)}),u=[u[0],u[1],G]);var J=R&&(m[R]||b[R]);if(J){var ie=J(u,v);return function(L){return ie(s(I,L),L)}}return C?function(L){return String(s(I,L))}:function(L){return s(I,L)}}function s(u,p){if(p&&u in p)return p[u];for(var v=u.split("."),m=p,C=0,A=v.length;m&&C<A;++C)m=m[v[C]];return m}function n(u,p){var v=u[2],m=he.number[v]||he.parseNumberPattern(v)||he.number.default;return new Intl.NumberFormat(p,m).format}function r(u,p){var v=u[2],m=he.duration[v]||he.duration.default,C=new Intl.NumberFormat(p,m.seconds).format,A=new Intl.NumberFormat(p,m.minutes).format,I=new Intl.NumberFormat(p,m.hours).format,R=/^fi$|^fi-|^da/.test(String(p))?".":":";return function(O,H){if(O=+O,!isFinite(O))return C(O);var G=~~(O/60/60),J=~~(O/60%60),ie=(G?I(Math.abs(G))+R:"")+A(Math.abs(J))+R+C(Math.abs(O%60));return O<0?I(-1).replace(I(1),ie):ie}}function a(u,p){var v=u[1],m=u[2],C=he[v][m]||he.parseDatePattern(m)||he[v].default;return new Intl.DateTimeFormat(p,C).format}function d(u,p){var v=u[1],m=v==="selectordinal"?"ordinal":"cardinal",C=u[2],A=u[3],I;if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(p).length>0)I=new Intl.PluralRules(p,{type:m});else{var R=Rs(p,Gt),O=R&&Gt[R][m]||h;I={select:O}}return function(H,G){var J=A["="+ +H]||A[I.select(H-C)]||A.other;return J(G)}}function h(){return"other"}function _(u,p){var v=u[2];return function(m,C){var A=v[m]||v.other;return A(C)}}var b={number:n,ordinal:n,spellout:n,duration:r,date:a,time:a,plural:d,selectordinal:d,select:_};e.types=b});Et.toParts;Et.types;var yo=go(function(o,e){var t="{",i="}",s=",",n="#",r="<",a=">",d="</",h="/>",_="'",b="offset:",u=["number","date","time","ordinal","duration","spellout"],p=["plural","select","selectordinal"];e=o.exports=function(w,E){return v({pattern:String(w),index:0,tagsType:E&&E.tagsType||null,tokens:E&&E.tokens||null},"")};function v(l,w){var E=l.pattern,V=E.length,T=[],k=l.index,q=m(l,w);for(q&&T.push(q),q&&l.tokens&&l.tokens.push(["text",E.slice(k,l.index)]);l.index<V;){if(E[l.index]===i){if(!w)throw L(l);break}if(w&&l.tagsType&&E.slice(l.index,l.index+d.length)===d)break;T.push(I(l)),k=l.index,q=m(l,w),q&&T.push(q),q&&l.tokens&&l.tokens.push(["text",E.slice(k,l.index)])}return T}function m(l,w){for(var E=l.pattern,V=E.length,T=w==="plural"||w==="selectordinal",k=!!l.tagsType,q=w==="{style}",Q="";l.index<V;){var $=E[l.index];if($===t||$===i||T&&$===n||k&&$===r||q&&C($.charCodeAt(0)))break;if($===_)if($=E[++l.index],$===_)Q+=$,++l.index;else if($===t||$===i||T&&$===n||k&&$===r||q)for(Q+=$;++l.index<V;)if($=E[l.index],$===_&&E[l.index+1]===_)Q+=_,++l.index;else if($===_){++l.index;break}else Q+=$;else Q+=_;else Q+=$,++l.index}return Q}function C(l){return l>=9&&l<=13||l===32||l===133||l===160||l===6158||l>=8192&&l<=8205||l===8232||l===8233||l===8239||l===8287||l===8288||l===12288||l===65279}function A(l){for(var w=l.pattern,E=w.length,V=l.index;l.index<E&&C(w.charCodeAt(l.index));)++l.index;V<l.index&&l.tokens&&l.tokens.push(["space",l.pattern.slice(V,l.index)])}function I(l){var w=l.pattern;if(w[l.index]===n)return l.tokens&&l.tokens.push(["syntax",n]),++l.index,[n];var E=R(l);if(E)return E;if(w[l.index]!==t)throw L(l,t);l.tokens&&l.tokens.push(["syntax",t]),++l.index,A(l);var V=O(l);if(!V)throw L(l,"placeholder id");l.tokens&&l.tokens.push(["id",V]),A(l);var T=w[l.index];if(T===i)return l.tokens&&l.tokens.push(["syntax",i]),++l.index,[V];if(T!==s)throw L(l,s+" or "+i);l.tokens&&l.tokens.push(["syntax",s]),++l.index,A(l);var k=O(l);if(!k)throw L(l,"placeholder type");if(l.tokens&&l.tokens.push(["type",k]),A(l),T=w[l.index],T===i){if(l.tokens&&l.tokens.push(["syntax",i]),k==="plural"||k==="selectordinal"||k==="select")throw L(l,k+" sub-messages");return++l.index,[V,k]}if(T!==s)throw L(l,s+" or "+i);l.tokens&&l.tokens.push(["syntax",s]),++l.index,A(l);var q;if(k==="plural"||k==="selectordinal"){var Q=G(l);A(l),q=[V,k,Q,ie(l,k)]}else if(k==="select")q=[V,k,ie(l,k)];else if(u.indexOf(k)>=0)q=[V,k,H(l)];else{var $=l.index,Oi=H(l);A(l),w[l.index]===t&&(l.index=$,Oi=ie(l,k)),q=[V,k,Oi]}if(A(l),w[l.index]!==i)throw L(l,i);return l.tokens&&l.tokens.push(["syntax",i]),++l.index,q}function R(l){var w=l.tagsType;if(!(!w||l.pattern[l.index]!==r)){if(l.pattern.slice(l.index,l.index+d.length)===d)throw L(l,null,"closing tag without matching opening tag");l.tokens&&l.tokens.push(["syntax",r]),++l.index;var E=O(l,!0);if(!E)throw L(l,"placeholder id");if(l.tokens&&l.tokens.push(["id",E]),A(l),l.pattern.slice(l.index,l.index+h.length)===h)return l.tokens&&l.tokens.push(["syntax",h]),l.index+=h.length,[E,w];if(l.pattern[l.index]!==a)throw L(l,a);l.tokens&&l.tokens.push(["syntax",a]),++l.index;var V=v(l,w),T=l.index;if(l.pattern.slice(l.index,l.index+d.length)!==d)throw L(l,d+E+a);l.tokens&&l.tokens.push(["syntax",d]),l.index+=d.length;var k=O(l,!0);if(k&&l.tokens&&l.tokens.push(["id",k]),E!==k)throw l.index=T,L(l,d+E+a,d+k+a);if(A(l),l.pattern[l.index]!==a)throw L(l,a);return l.tokens&&l.tokens.push(["syntax",a]),++l.index,[E,w,{children:V}]}}function O(l,w){for(var E=l.pattern,V=E.length,T="";l.index<V;){var k=E[l.index];if(k===t||k===i||k===s||k===n||k===_||C(k.charCodeAt(0))||w&&(k===r||k===a||k==="/"))break;T+=k,++l.index}return T}function H(l){var w=l.index,E=m(l,"{style}");if(!E)throw L(l,"placeholder style name");return l.tokens&&l.tokens.push(["style",l.pattern.slice(w,l.index)]),E}function G(l){var w=l.pattern,E=w.length,V=0;if(w.slice(l.index,l.index+b.length)===b){l.tokens&&l.tokens.push(["offset","offset"],["syntax",":"]),l.index+=b.length,A(l);for(var T=l.index;l.index<E&&J(w.charCodeAt(l.index));)++l.index;if(T===l.index)throw L(l,"offset number");l.tokens&&l.tokens.push(["number",w.slice(T,l.index)]),V=+w.slice(T,l.index)}return V}function J(l){return l>=48&&l<=57}function ie(l,w){for(var E=l.pattern,V=E.length,T={};l.index<V&&E[l.index]!==i;){var k=O(l);if(!k)throw L(l,"sub-message selector");l.tokens&&l.tokens.push(["selector",k]),A(l),T[k]=X(l,w),A(l)}if(!T.other&&p.indexOf(w)>=0)throw L(l,null,null,'"other" sub-message must be specified in '+w);return T}function X(l,w){if(l.pattern[l.index]!==t)throw L(l,t+" to start sub-message");l.tokens&&l.tokens.push(["syntax",t]),++l.index;var E=v(l,w);if(l.pattern[l.index]!==i)throw L(l,i+" to end sub-message");return l.tokens&&l.tokens.push(["syntax",i]),++l.index,E}function L(l,w,E,V){var T=l.pattern,k=T.slice(0,l.index).split(/\r?\n/),q=l.index,Q=k.length,$=k.slice(-1)[0].length;return E=E||(l.index>=T.length?"end of message pattern":O(l)||T[l.index]),V||(V=Zo(w,E)),V+=" in "+T.replace(/\r?\n/g,`
`),new Ot(V,w,E,q,Q,$)}function Zo(l,w){return l?"Expected "+l+" but found "+w:"Unexpected "+w+" found"}function Ot(l,w,E,V,T,k){Error.call(this,l),this.name="SyntaxError",this.message=l,this.expected=w,this.found=E,this.offset=V,this.line=T,this.column=k}Ot.prototype=Object.create(Error.prototype),e.SyntaxError=Ot});yo.SyntaxError;var $s=new RegExp("^("+Object.keys(Gt).join("|")+")\\b"),Xe=new WeakMap;/*!
 * Intl.MessageFormat prollyfill
 * Copyright(c) 2015 Andy VanWagoner
 * MIT licensed
 **/function Be(o,e,t){if(!(this instanceof Be)||Xe.has(this))throw new TypeError("calling MessageFormat constructor without new is invalid");var i=yo(o);Xe.set(this,{ast:i,format:Et(i,e,t&&t.types),locale:Be.supportedLocalesOf(e)[0]||"en",locales:e,options:t})}var Ds=Be;Object.defineProperties(Be.prototype,{format:{configurable:!0,get:function(){var e=Xe.get(this);if(!e)throw new TypeError("MessageFormat.prototype.format called on value that's not an object initialized as a MessageFormat");return e.format}},formatToParts:{configurable:!0,writable:!0,value:function(e){var t=Xe.get(this);if(!t)throw new TypeError("MessageFormat.prototype.formatToParts called on value that's not an object initialized as a MessageFormat");var i=t.toParts||(t.toParts=Et.toParts(t.ast,t.locales,t.options&&t.options.types));return i(e)}},resolvedOptions:{configurable:!0,writable:!0,value:function(){var e=Xe.get(this);if(!e)throw new TypeError("MessageFormat.prototype.resolvedOptions called on value that's not an object initialized as a MessageFormat");return{locale:e.locale}}}});typeof Symbol<"u"&&Object.defineProperty(Be.prototype,Symbol.toStringTag,{value:"Object"});Object.defineProperties(Be,{supportedLocalesOf:{configurable:!0,writable:!0,value:function(e){return[].concat(Intl.NumberFormat.supportedLocalesOf(e),Intl.DateTimeFormat.supportedLocalesOf(e),Intl.PluralRules?Intl.PluralRules.supportedLocalesOf(e):[],[].concat(e||[]).filter(function(t){return $s.test(t)})).filter(function(t,i,s){return s.indexOf(t)===i})}}});function Ps(o){return!!(o&&o.default&&typeof o.default=="object"&&Object.keys(o).length===1)}var ho;const ue=(ho=globalThis.document)==null?void 0:ho.documentElement;var se,_e,we,kt,xo;class Bs extends EventTarget{constructor({allowOverridesForExistingNamespaces:t=!1,autoLoadOnLocaleChange:i=!1,showKeyAsFallback:s=!1,fallbackLocale:n=""}={}){super();ee(this,kt);W(this,"formatNumberOptions",{returnIfNaN:"",postProcessors:new Map});W(this,"formatDateOptions",{postProcessors:new Map});ee(this,se,!1);ee(this,_e,"");ee(this,we,null);W(this,"__storage",{});W(this,"__namespacePatternsMap",new Map);W(this,"__namespaceLoadersCache",{});W(this,"__namespaceLoaderPromisesCache",{});this.__allowOverridesForExistingNamespaces=t,this._autoLoadOnLocaleChange=!!i,this._showKeyAsFallback=s,this._fallbackLocale=n;const r=ue.getAttribute("data-localize-lang");oe(this,se,!!r),B(this,se)&&(this.locale=r,this._setupTranslationToolSupport()),ue.lang||(ue.lang=this.locale||"en-GB"),this._setupHtmlLangAttributeObserver()}get locale(){return B(this,se)?B(this,_e)||"":ue.lang||""}set locale(t){if(ne(this,kt,xo).call(this,t),!B(this,se)){const n=ue.lang;this._setHtmlLangAttribute(t),this._onLocaleChanged(t,n);return}const i=B(this,_e);oe(this,_e,t),B(this,we)===null&&this._setHtmlLangAttribute(t),this._onLocaleChanged(t,i)}get loadingComplete(){return typeof this.__namespaceLoaderPromisesCache[this.locale]=="object"?Promise.all(Object.values(this.__namespaceLoaderPromisesCache[this.locale])):Promise.resolve()}addData(t,i,s){if(!this.__allowOverridesForExistingNamespaces&&this._isNamespaceInCache(t,i))throw new Error(`Namespace "${i}" has been already added for the locale "${t}".`);this.__storage[t]=this.__storage[t]||{},this.__allowOverridesForExistingNamespaces?this.__storage[t][i]={...this.__storage[t][i],...s}:this.__storage[t][i]=s}setupNamespaceLoader(t,i){this.__namespacePatternsMap.set(t,i)}loadNamespaces(t,{locale:i}={}){return Promise.all(t.map(s=>this.loadNamespace(s,{locale:i})))}loadNamespace(t,{locale:i=this.locale}={locale:this.locale}){const s=typeof t=="object",n=s?Object.keys(t)[0]:t;if(this._isNamespaceInCache(i,n))return Promise.resolve();const r=this._getCachedNamespaceLoaderPromise(i,n);return r||this._loadNamespaceData(i,t,s,n)}msg(t,i,s={}){const n=s.locale?s.locale:this.locale,r=this._getMessageForKeys(t,n);return r?new Ds(r,n).format(i):""}teardown(){this._teardownHtmlLangAttributeObserver()}reset(){this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={}}setDatePostProcessorForLocale({locale:t,postProcessor:i}){var s;(s=this.formatDateOptions)==null||s.postProcessors.set(t,i)}setNumberPostProcessorForLocale({locale:t,postProcessor:i}){var s;(s=this.formatNumberOptions)==null||s.postProcessors.set(t,i)}_setupTranslationToolSupport(){oe(this,we,ue.lang||null)}_setHtmlLangAttribute(t){this._teardownHtmlLangAttributeObserver(),ue.lang=t,this._setupHtmlLangAttributeObserver()}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||(this._htmlLangAttributeObserver=new MutationObserver(t=>{t.forEach(i=>{B(this,se)?ue.lang==="auto"?(oe(this,we,null),this._setHtmlLangAttribute(this.locale)):oe(this,we,document.documentElement.lang):this._onLocaleChanged(document.documentElement.lang,i.oldValue||"")})})),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver&&this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(t,i){return!!(this.__storage[t]&&this.__storage[t][i])}_getCachedNamespaceLoaderPromise(t,i){return this.__namespaceLoaderPromisesCache[t]?this.__namespaceLoaderPromisesCache[t][i]:null}_loadNamespaceData(t,i,s,n){const r=this._getNamespaceLoader(i,s,n),a=this._getNamespaceLoaderPromise(r,t,n);return this._cacheNamespaceLoaderPromise(t,n,a),a.then(d=>{if(this.__namespaceLoaderPromisesCache[t]&&this.__namespaceLoaderPromisesCache[t][n]===a){const h=Ps(d)?d.default:d;this.addData(t,n,h)}})}_getNamespaceLoader(t,i,s){let n=this.__namespaceLoadersCache[s];if(n||(i?(n=t[s],this.__namespaceLoadersCache[s]=n):(n=this._lookupNamespaceLoader(s),this.__namespaceLoadersCache[s]=n)),!n)throw new Error(`Namespace "${s}" was not properly setup.`);return this.__namespaceLoadersCache[s]=n,n}_getNamespaceLoaderPromise(t,i,s,n=this._fallbackLocale){return t(i,s).catch(()=>{const r=this._getLangFromLocale(i);return t(r,s).catch(()=>{if(n)return this._getNamespaceLoaderPromise(t,n,s,"").catch(()=>{const a=this._getLangFromLocale(n);throw new Error(`Data for namespace "${s}" and current locale "${i}" or fallback locale "${n}" could not be loaded. Make sure you have data either for locale "${i}" (and/or generic language "${r}") or for fallback "${n}" (and/or "${a}").`)});throw new Error(`Data for namespace "${s}" and locale "${i}" could not be loaded. Make sure you have data for locale "${i}" (and/or generic language "${r}").`)})})}_cacheNamespaceLoaderPromise(t,i,s){this.__namespaceLoaderPromisesCache[t]||(this.__namespaceLoaderPromisesCache[t]={}),this.__namespaceLoaderPromisesCache[t][i]=s}_lookupNamespaceLoader(t){for(const[i,s]of this.__namespacePatternsMap){const n=typeof i=="string"&&i===t,r=typeof i=="object"&&i.constructor.name==="RegExp"&&i.test(t);if(n||r)return s}return null}_getLangFromLocale(t){return t.substring(0,2)}_onLocaleChanged(t,i){this.dispatchEvent(new CustomEvent("__localeChanging")),t!==i&&(this._autoLoadOnLocaleChange?(this._loadAllMissing(t,i),this.loadingComplete.then(()=>{this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:t,oldLocale:i}}))})):this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:t,oldLocale:i}})))}_loadAllMissing(t,i){const s=this.__storage[i]||{},n=this.__storage[t]||{};Object.keys(s).forEach(r=>{n[r]||this.loadNamespace(r,{locale:t})})}_getMessageForKeys(t,i){if(typeof t=="string")return this._getMessageForKey(t,i);const s=Array.from(t).reverse();let n,r;for(;s.length;)if(n=s.pop(),r=this._getMessageForKey(n,i),r)return r}_getMessageForKey(t,i){if(!t||t.indexOf(":")===-1)throw new Error(`Namespace is missing in the key "${t}". The format for keys is "namespace:name".`);const[s,n]=t.split(":"),r=this.__storage[i],a=r?r[s]:{},h=n.split(".").reduce((_,b)=>typeof _=="object"?_[b]:_,a);return String(h||(this._showKeyAsFallback?t:""))}get _supportExternalTranslationTools(){return B(this,se)}set _supportExternalTranslationTools(t){oe(this,se,t)}get _langAttrSetByTranslationTool(){return B(this,_e)}set _langAttrSetByTranslationTool(t){oe(this,_e,t)}}se=new WeakMap,_e=new WeakMap,we=new WeakMap,kt=new WeakSet,xo=function(t){if(!t.includes("-"))throw new Error(`
      Locale was set to ${t}.
      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.
      See https://github.com/ing-bank/lion/issues/187 for more information.
    `)};const Rt=Symbol.for("lion::SingletonManagerClassStorage"),$t=globalThis||window;class Us{constructor(){this._map=$t[Rt]?$t[Rt]:$t[Rt]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}}const Co=o=>{let e=null;const t=()=>(e===null&&(e=o()),e);return new Proxy({},{get(s,n){const r=t();return n==="addEventListener"||n==="removeEventListener"?Reflect.get(r,n).bind(r):n==="__instance_for_testing"?r:Reflect.get(r,n,r)},set(s,n,r){return Reflect.set(t(),n,r)},getOwnPropertyDescriptor(s,n){return Reflect.getOwnPropertyDescriptor(t(),n)},getPrototypeOf(){return Reflect.getPrototypeOf(t())}})},Re=new Us;function Hs(){if(!Re.has("@lion/ui::localize::0.x")){const o=new Bs({autoLoadOnLocaleChange:!0,fallbackLocale:"en-GB"});Re.set("@lion/ui::localize::0.x",o)}return Re.get("@lion/ui::localize::0.x")}function Wt(){return Co(Hs)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko={CHILD:2},wo=o=>(...e)=>({_$litDirective$:o,values:e});let Eo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=(o,e)=>{var i;const t=o._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Qe(s,e);return!0},xt=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while((t==null?void 0:t.size)===0)},No=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),Gs(e)}};function qs(o){this._$AN!==void 0?(xt(this),this._$AM=o,No(this)):this._$AM=o}function js(o,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Qe(i[n],!1),xt(i[n]);else i!=null&&(Qe(i,!1),xt(i));else Qe(this,o)}const Gs=o=>{o.type==ko.CHILD&&(o._$AP??(o._$AP=js),o._$AQ??(o._$AQ=qs))};class Ws extends Eo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),No(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Qe(this,e),xt(this))}setValue(e){if(Ls(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ks{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Ys{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qi=o=>!Fs(o)&&typeof o.then=="function",ji=1073741823;class Zs extends Ws{constructor(){super(...arguments),this._$Cwt=ji,this._$Cbt=[],this._$CK=new Ks(this),this._$CX=new Ys}render(...e){return e.find(t=>!qi(t))??ae}update(e,t){const i=this._$Cbt;let s=i.length;this._$Cbt=t;const n=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const d=t[a];if(!qi(d))return this._$Cwt=a,d;a<s&&d===i[a]||(this._$Cwt=ji,s=0,Promise.resolve(d).then(async h=>{for(;r.get();)await r.get();const _=n.deref();if(_!==void 0){const b=_._$Cbt.indexOf(d);b>-1&&b<_._$Cwt&&(_._$Cwt=b,_.setValue(h))}}))}return ae}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Js=wo(Zs),Xs=o=>class extends o{static get localizeNamespaces(){return[]}static get waitForLocalizeNamespaces(){return!0}constructor(){super(),this._localizeManager=Wt(),this.__boundLocalizeOnLocaleChanged=(...t)=>{const i=Array.from(t)[0];this.__localizeOnLocaleChanged(i)},this.__boundLocalizeOnLocaleChanging=()=>{this.__localizeOnLocaleChanging()},this.__localizeStartLoadingNamespaces(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>{this.__localizeMessageSync=!0})}async scheduleUpdate(){Object.getPrototypeOf(this).constructor.waitForLocalizeNamespaces&&await this.localizeNamespacesLoaded,super.scheduleUpdate()}connectedCallback(){super.connectedCallback(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>this.onLocaleReady()),this._localizeManager.addEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.addEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}disconnectedCallback(){super.disconnectedCallback(),this._localizeManager.removeEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.removeEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}msgLit(t,i,s){return this.__localizeMessageSync?this._localizeManager.msg(t,i,s):this.localizeNamespacesLoaded?Js(this.localizeNamespacesLoaded.then(()=>this._localizeManager.msg(t,i,s)),S):""}__getUniqueNamespaces(){const t=[],i=new Set;return Object.getPrototypeOf(this).constructor.localizeNamespaces.forEach(i.add.bind(i)),i.forEach(s=>{t.push(s)}),t}__localizeStartLoadingNamespaces(){this.localizeNamespacesLoaded=this._localizeManager.loadNamespaces(this.__getUniqueNamespaces())}__localizeOnLocaleChanging(){this.__localizeStartLoadingNamespaces()}__localizeOnLocaleChanged(t){this.onLocaleChanged(t.detail.newLocale,t.detail.oldLocale)}onLocaleReady(){this.onLocaleUpdated()}onLocaleChanged(t,i){this.onLocaleUpdated(),this.requestUpdate()}onLocaleUpdated(){}},So=D(Xs),Kt="3.0.0",Gi=window.scopedElementsVersions||(window.scopedElementsVersions=[]);Gi.includes(Kt)||Gi.push(Kt);const Qs=o=>{var e;return e=class extends o{static get scopedElementsVersion(){return Kt}get registry(){return this.constructor.__registry}set registry(i){this.constructor.__registry=i}attachShadow(i){const{scopedElements:s}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=new CustomElementRegistry;for(const[r,a]of Object.entries(s??{}))this.registry.define(r,a)}return super.attachShadow({...i,customElements:this.registry,registry:this.registry})}},W(e,"scopedElements"),W(e,"__registry"),e},en=D(Qs),tn=o=>class extends en(o){createRenderRoot(){var n;const{shadowRootOptions:t,elementStyles:i}=this.constructor,s=this.attachShadow(t);return this.renderOptions.creationScope=s,pi(s,i),(n=this.renderOptions).renderBefore??(n.renderBefore=s.firstChild),s}},on=D(tn);function mt(){var o,e;return!!((o=globalThis.ShadowRoot)!=null&&o.prototype.createElement&&((e=globalThis.ShadowRoot)!=null&&e.prototype.importNode))}const sn=o=>class extends on(o){constructor(){super()}createScopedElement(t){return(mt()?this.shadowRoot:document).createElement(t)}defineScopedElement(t,i){const s=this.registry.get(t),n=s&&s!==i;return!mt()&&n&&console.error([`You are trying to re-register the "${t}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),s?this.registry.get(t):this.registry.define(t,i)}attachShadow(t){const{scopedElements:i}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=mt()?new CustomElementRegistry:customElements;for(const[n,r]of Object.entries(i??{}))this.defineScopedElement(n,r)}return Element.prototype.attachShadow.call(this,{...t,customElements:this.registry,registry:this.registry})}createRenderRoot(){const{shadowRootOptions:t,elementStyles:i}=this.constructor,s=this.attachShadow(t);return mt()&&(this.renderOptions.creationScope=s),s instanceof ShadowRoot&&(pi(s,i),this.renderOptions.renderBefore=this.renderOptions.renderBefore||s.firstChild),s}},bi=D(sn),nn=[Node.DOCUMENT_POSITION_PRECEDING,Node.DOCUMENT_POSITION_CONTAINS,Node.DOCUMENT_POSITION_CONTAINS|Node.DOCUMENT_POSITION_PRECEDING];function Ao(o,{reverse:e}={}){const t=(s,n)=>{const r=s.compareDocumentPosition(n);return nn.includes(r)?1:-1},i=o.filter(s=>s);return i.sort(t),e&&i.reverse(),i}class Se{constructor(e){this.type="unparseable",this.viewValue=e}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}}const rn=o=>class extends o{constructor(){super(),this.name="",this._parentFormGroup=void 0,this.allowCrossRootRegistration=!1}get name(){return this.__name||""}set name(e){const t=this.name;this.__name=e.toString(),this.requestUpdate("name",t)}static get properties(){return{name:{type:String,reflect:!0},allowCrossRootRegistration:{type:Boolean,attribute:"allow-cross-root-registration"}}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:this},bubbles:!0,composed:!!this.allowCrossRootRegistration}))}disconnectedCallback(){super.disconnectedCallback(),this.__unregisterFormElement()}__unregisterFormElement(){this._parentFormGroup&&this._parentFormGroup.removeFormElement(this)}},vi=D(rn),an=o=>{var e,t;return t=class extends vi(pt(ye(o))){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},label:String,labelSrOnly:{type:Boolean,attribute:"label-sr-only",reflect:!0},helpText:{type:String,attribute:"help-text"},modelValue:{attribute:!1},_ariaLabelledNodes:{attribute:!1},_ariaDescribedNodes:{attribute:!1},_repropagationRole:{attribute:!1},_isRepropagationEndpoint:{attribute:!1}}}get label(){var s;return this.__label??(((s=this._labelNode)==null?void 0:s.textContent)||"")}set label(s){const n=this.label;this.__label=s,this.requestUpdate("label",n)}get helpText(){var s;return this.__helpText??(((s=this._helpTextNode)==null?void 0:s.textContent)||"")}set helpText(s){const n=this.helpText;this.__helpText=s,this.requestUpdate("helpText",n)}get fieldName(){return this.__fieldName||this.label||this.name||""}set fieldName(s){this.__fieldName=s}get slots(){return{...super.slots,label:()=>{const s=document.createElement("label");return s.textContent=this.label,s},"help-text":()=>{const s=document.createElement("div");return s.textContent=this.helpText,s}}}get _inputNode(){return this.__getDirectSlotChild("input")}get _labelNode(){return this.__getDirectSlotChild("label")}get _helpTextNode(){return this.__getDirectSlotChild("help-text")}get _feedbackNode(){return this.__getDirectSlotChild("feedback")}constructor(){super(),this.readOnly=!1,this.labelSrOnly=!1,this._inputId=vo(this.localName),this._ariaLabelledNodes=[],this._ariaDescribedNodes=[],this._repropagationRole="child",this._isRepropagationEndpoint=!1,this.addEventListener("model-value-changed",this.__repropagateChildrenValues),this._onLabelClick=this._onLabelClick.bind(this)}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y(),this._triggerInitialModelValueChangedEvent(),this._labelNode&&this._labelNode.addEventListener("click",this._onLabelClick)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._onLabelClick)}updated(s){var n;super.updated(s),s.has("disabled")&&((n=this._inputNode)==null||n.setAttribute("aria-disabled",`${!!this.disabled}`)),s.has("_ariaLabelledNodes")&&this.__reflectAriaAttr("aria-labelledby",this._ariaLabelledNodes,this.__reorderAriaLabelledNodes),s.has("_ariaDescribedNodes")&&this.__reflectAriaAttr("aria-describedby",this._ariaDescribedNodes,this.__reorderAriaDescribedNodes),s.has("label")&&this.__label!==void 0&&this._labelNode&&(this._labelNode.textContent=this.label),s.has("helpText")&&this.__helpText!==void 0&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),s.has("name")&&this.dispatchEvent(new CustomEvent("form-element-name-changed",{detail:{oldName:s.get("name"),newName:this.name},bubbles:!0}))}_triggerInitialModelValueChangedEvent(){this._dispatchInitialModelValueChangedEvent()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add("form-control")}_enhanceLightDomA11y(){const{_inputNode:s,_labelNode:n,_helpTextNode:r,_feedbackNode:a}=this;s&&(s.id=s.id||this._inputId),n&&(n.setAttribute("for",this._inputId),this.addToAriaLabelledBy(n,{idPrefix:"label"})),r&&this.addToAriaDescribedBy(r,{idPrefix:"help-text"}),a&&(this.addEventListener("focusin",()=>{a.setAttribute("aria-live","polite")}),this.addEventListener("focusout",()=>{a.setAttribute("aria-live","assertive")}),this.addToAriaDescribedBy(a,{idPrefix:"feedback"})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(s=["prefix","suffix","before","after"]){s.forEach(n=>{const r=this.__getDirectSlotChild(n);r&&(r.hasAttribute("data-label")&&this.addToAriaLabelledBy(r,{idPrefix:n}),r.hasAttribute("data-description")&&this.addToAriaDescribedBy(r,{idPrefix:n}))})}__reflectAriaAttr(s,n,r){if(this._inputNode){if(r){const d=n.filter(p=>this.contains(p)),h=n.filter(p=>!this.contains(p)),_=d.map(p=>p.assignedSlot||p),b=[...Ao(_)],u=[];b.forEach(p=>{d.forEach(v=>{p.name===v.slot&&u.push(v)})}),n=[...u,...h]}const a=n.map(d=>d.id).join(" ");this._inputNode.setAttribute(s,a)}}render(){return f`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return f` ${this._labelTemplate()} ${this._helpTextTemplate()} `}_groupTwoTemplate(){return f` ${this._inputGroupTemplate()} ${this._feedbackTemplate()} `}_labelTemplate(){return f`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `}_helpTextTemplate(){return f`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `}_inputGroupTemplate(){return f`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return f`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(s=>s.slot==="prefix")?f`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:S}_inputGroupInputTemplate(){return f`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(s=>s.slot==="suffix")?f`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:S}_inputGroupAfterTemplate(){return f`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return f`
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_isEmpty(s=this.modelValue){let n=s;if(this.modelValue instanceof Se&&(n=this.modelValue.viewValue),typeof n=="object"&&n!==null&&!(n instanceof Date))return!Object.keys(n).length;const r=typeof n=="number"&&(n===0||Number.isNaN(n));return!n&&!r&&!(typeof n=="boolean"&&n===!1)}static get styles(){return[M`
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
        `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(s,{idPrefix:n="",reorder:r=!0}={}){s.id=s.id||`${n}-${this._inputId}`,this._ariaLabelledNodes.includes(s)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,s],this.__reorderAriaLabelledNodes=!!r)}removeFromAriaLabelledBy(s){this._ariaLabelledNodes.includes(s)&&(this._ariaLabelledNodes.splice(this._ariaLabelledNodes.indexOf(s),1),this._ariaLabelledNodes=[...this._ariaLabelledNodes],this.__reorderAriaLabelledNodes=!1)}addToAriaDescribedBy(s,{idPrefix:n="",reorder:r=!0}={}){s.id=s.id||`${n}-${this._inputId}`,this._ariaDescribedNodes.includes(s)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,s],this.__reorderAriaDescribedNodes=!!r)}removeFromAriaDescribedBy(s){this._ariaDescribedNodes.includes(s)&&(this._ariaDescribedNodes.splice(this._ariaDescribedNodes.indexOf(s),1),this._ariaDescribedNodes=[...this._ariaDescribedNodes],this.__reorderAriaLabelledNodes=!1)}__getDirectSlotChild(s){return Array.from(this.children).find(n=>n.slot===s)}_dispatchInitialModelValueChangedEvent(){this._repropagationRole!=="child"&&(this.__repropagateChildrenInitialized=!0,this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],initialize:!0,isTriggeredByUser:!1}})))}_onBeforeRepropagateChildrenValues(s){}__repropagateChildrenValues(s){var u;this._onBeforeRepropagateChildrenValues(s);const n=s.detail&&s.detail.element||s.target,r=this._isRepropagationEndpoint||this._repropagationRole==="choice-group";if(n===this)return;s.stopImmediatePropagation();const d=this._repropagationRole!=="child"&&!this.__repropagateChildrenInitialized,h=s.detail&&s.detail.initialize;if(d||h||!this._repropagationCondition(n))return;let _=[];r||(_=s.detail&&s.detail.formPath||[n]);const b=[..._,this];this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:b,isTriggeredByUser:!!((u=s.detail)!=null&&u.isTriggeredByUser)}}))}_repropagationCondition(s){return!!s}_onLabelClick(){}},W(t,"enabledWarnings",((e=Ie(t,t,"enabledWarnings"))==null?void 0:e.filter(s=>s!=="change-in-update"))||[]),t},Te=D(an);class ln{constructor(){this.__running=!1,this.__queue=[]}add(e){this.__queue.push(e),this.__running||(this.complete=new Promise(t=>{this.__callComplete=t}),this.__run())}async __run(){this.__running=!0,await this.__queue[0](),this.__queue.shift(),this.__queue.length>0?this.__run():(this.__running=!1,this.__callComplete&&this.__callComplete())}}function dn(o){return o.charAt(0).toUpperCase()+o.slice(1)}const cn=o=>{var e,t;return t=class extends o{constructor(){super(),this.__SyncUpdatableNamespace={}}firstUpdated(s){super.firstUpdated(s),this.__syncUpdatableInitialize()}connectedCallback(){super.connectedCallback(),this.__SyncUpdatableNamespace.connected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__SyncUpdatableNamespace.connected=!1}static __syncUpdatableHasChanged(s,n,r){const a=this.elementProperties;return a.get(s)&&a.get(s).hasChanged?a.get(s).hasChanged(n,r):n!==r}__syncUpdatableInitialize(){const s=this.__SyncUpdatableNamespace,n=this.constructor;s.initialized=!0,s.queue&&Array.from(s.queue).forEach(r=>{n.__syncUpdatableHasChanged(r,this[r],void 0)&&this.updateSync(r,void 0)})}requestUpdate(s,n,r){if(super.requestUpdate(s,n,r),s===void 0)return;this.__SyncUpdatableNamespace=this.__SyncUpdatableNamespace||{};const a=this.__SyncUpdatableNamespace,d=this.constructor;a.initialized?d.__syncUpdatableHasChanged(s,this[s],n)&&this.updateSync(s,n):(a.queue=a.queue||new Set,a.queue.add(s))}updateSync(s,n){}},W(t,"enabledWarnings",((e=Ie(t,t,"enabledWarnings"))==null?void 0:e.filter(s=>s!=="change-in-update"))||[]),t},hn=D(cn),un=o=>{switch(o){case"bg-BG":return x(()=>import("./bg-BG.DvcqJcRT.js"),__vite__mapDeps([0,1]));case"bg":return x(()=>import("./bg.DjRhbvP8.js"),[]);case"cs-CZ":return x(()=>import("./cs-CZ.C4M3ss0M.js"),__vite__mapDeps([2,3]));case"cs":return x(()=>import("./cs.BpAIInFi.js"),[]);case"de-DE":return x(()=>import("./de-DE.B6cLQS-C.js"),__vite__mapDeps([4,5]));case"de":return x(()=>import("./de.tu_ZC0by.js"),[]);case"en-AU":return x(()=>import("./en-AU.BLLSR6ul.js"),__vite__mapDeps([6,7]));case"en-GB":return x(()=>import("./en-GB.BLLSR6ul.js"),__vite__mapDeps([8,7]));case"en-US":return x(()=>import("./en-US.BLLSR6ul.js"),__vite__mapDeps([9,7]));case"en-PH":case"en":return x(()=>import("./en.BRtJWocA.js"),[]);case"es-ES":return x(()=>import("./es-ES.C-k5kUnm.js"),__vite__mapDeps([10,11]));case"es":return x(()=>import("./es.CmCcTLNg.js"),[]);case"fr-FR":return x(()=>import("./fr-FR.DC-XO9HF.js"),__vite__mapDeps([12,13]));case"fr-BE":return x(()=>import("./fr-BE.DC-XO9HF.js"),__vite__mapDeps([14,13]));case"fr":return x(()=>import("./fr.z99AZYvu.js"),[]);case"hu-HU":return x(()=>import("./hu-HU.BeTGSB1R.js"),__vite__mapDeps([15,16]));case"hu":return x(()=>import("./hu.DlqOkKS-.js"),[]);case"it-IT":return x(()=>import("./it-IT.BfrsYHtj.js"),__vite__mapDeps([17,18]));case"it":return x(()=>import("./it.dhe0n6ro.js"),[]);case"nl-BE":return x(()=>import("./nl-BE.CtPSVrK-.js"),__vite__mapDeps([19,20]));case"nl-NL":return x(()=>import("./nl-NL.CtPSVrK-.js"),__vite__mapDeps([21,20]));case"nl":return x(()=>import("./nl.CsOjjg4q.js"),[]);case"pl-PL":return x(()=>import("./pl-PL.BO_uoCo3.js"),__vite__mapDeps([22,23]));case"pl":return x(()=>import("./pl.CYht5iOc.js"),[]);case"ro-RO":return x(()=>import("./ro-RO.BzszQasy.js"),__vite__mapDeps([24,25]));case"ro":return x(()=>import("./ro.DwBEW5po.js"),[]);case"ru-RU":return x(()=>import("./ru-RU.DYdB6zKs.js"),__vite__mapDeps([26,27]));case"ru":return x(()=>import("./ru.BWO2zRrD.js"),[]);case"sk-SK":return x(()=>import("./sk-SK.t6DAVN22.js"),__vite__mapDeps([28,29]));case"sk":return x(()=>import("./sk.BCmB7Wtj.js"),[]);case"tr-TR":return x(()=>import("./tr-TR.Cbm2kwTy.js"),__vite__mapDeps([30,31]));case"tr":return x(()=>import("./tr.C7VWmvp5.js"),[]);case"uk-UA":return x(()=>import("./uk-UA.DRKx0L1R.js"),__vite__mapDeps([32,33]));case"uk":return x(()=>import("./uk.L9q5i_B2.js"),[]);case"zh-CN":case"zh":return x(()=>import("./zh.BuGHQNaT.js"),[]);default:return x(()=>import("./en.BRtJWocA.js"),[])}},pn=o=>`${o[0].toUpperCase()}${o.slice(1)}`,it=class it extends So(K){static get properties(){return{feedbackData:{attribute:!1}}}static get styles(){return[M`
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
      `]}constructor(){super(),this.feedbackData=void 0}_messageTemplate({message:e}){return e}updated(e){super.updated(e),this.feedbackData&&this.feedbackData[0]?(this.setAttribute("type",this.feedbackData[0].type),this.currentType=this.feedbackData[0].type):this.currentType!=="success"&&this.removeAttribute("type")}render(){return f`
      ${this.feedbackData&&this.feedbackData.map(({message:e,type:t,validator:i})=>f`
          <span class="validation-feedback__type">
            ${e&&t?this._localizeManager.msg(`lion-form-core:validation${pn(t)}`):S}
          </span>
          ${this._messageTemplate({message:e,type:t,validator:i})}
        `)}
    `}};W(it,"localizeNamespaces",[{"lion-form-core":un},...Ie(it,it,"localizeNamespaces")]);let Yt=it;class $e extends EventTarget{constructor(e,t){super(),this.__param=e,this.__config=t||{},this.type=(t==null?void 0:t.type)||"error"}execute(e,t,i){if(!this.constructor.validatorName)throw new Error(`A validator needs to have a name! Please set it via "static get validatorName() { return 'IsCat'; }"`);return!0}set param(e){this.__param=e,this.dispatchEvent(new Event("param-changed"))}get param(){return this.__param}set config(e){this.__config=e,this.dispatchEvent(new Event("config-changed"))}get config(){return this.__config}async _getMessage(e){const t=this.constructor,i={name:t.validatorName,type:this.type,params:this.param,config:this.config,...e};if(this.config.getMessage){if(typeof this.config.getMessage=="function")return this.config.getMessage(i);throw new Error(`You must provide a value for getMessage of type 'function', you provided a value of type: ${typeof this.config.getMessage}`)}return t.getMessage(i)}static async getMessage(e){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(e){}onFormControlDisconnect(e){}abortExecution(){}}W($e,"_$isValidator$",!0),W($e,"validatorName",""),W($e,"async",!1);function Wi(o=[],e=[]){return o.filter(t=>!e.includes(t)).concat(e.filter(t=>!o.includes(t)))}function fn(o){return o instanceof Se?o.viewValue:o}const _n=o=>{var e,Oo,i;return i=class extends Te(hn(pt(ye(bi(o))))){constructor(){super();ee(this,e);this.hasFeedbackFor=[],this.showsFeedbackFor=[],this.shouldShowFeedbackFor=[],this.validationStates={},this.isPending=!1,this.validators=[],this.defaultValidators=[],this._visibleMessagesAmount=1,this.__syncValidationResult=[],this.__asyncValidationResult=[],this.__validationResult=[],this.__prevValidationResult=[],this.__prevShownValidationResult=[],this.__childModelValueChanged=!1,this._onValidatorUpdated=this._onValidatorUpdated.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":Yt}}static get properties(){return{validators:{attribute:!1},hasFeedbackFor:{attribute:!1},shouldShowFeedbackFor:{attribute:!1},showsFeedbackFor:{type:Array,attribute:"shows-feedback-for",reflect:!0,converter:{fromAttribute:n=>n.split(","),toAttribute:n=>n.join(",")}},validationStates:{attribute:!1},isPending:{type:Boolean,attribute:"is-pending",reflect:!0},defaultValidators:{attribute:!1},_visibleMessagesAmount:{attribute:!1},__childModelValueChanged:{attribute:!1}}}static get validationTypes(){return["error"]}get operationMode(){return"enter"}get slots(){return{...super.slots,feedback:()=>{const n=this.createScopedElement("lion-validation-feedback");return n.setAttribute("data-tag-name","lion-validation-feedback"),n}}}get _allValidators(){return[...this.validators,...this.defaultValidators]}connectedCallback(){super.connectedCallback(),Wt().addEventListener("localeChanged",this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),Wt().removeEventListener("localeChanged",this._updateFeedbackComponent)}firstUpdated(n){super.firstUpdated(n),this.__isValidateInitialized=!0,this.validate(),this._repropagationRole!=="child"&&this.addEventListener("model-value-changed",()=>{this.__childModelValueChanged=!0})}updateSync(n,r){if(super.updateSync(n,r),n==="validators"?(this.__setupValidators(),this.validate({clearCurrentResult:!0})):n==="modelValue"&&this.validate({clearCurrentResult:!0}),["touched","dirty","prefilled","focused","submitted","hasFeedbackFor","filled"].includes(n)&&this._updateShouldShowFeedbackFor(),n==="showsFeedbackFor"){this._inputNode&&this._inputNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`);const a=Wi(this.showsFeedbackFor,r);a.length>0&&this.dispatchEvent(new Event("showsFeedbackForChanged",{bubbles:!0})),a.forEach(d=>{this.dispatchEvent(new Event(`showsFeedbackFor${dn(d)}Changed`,{bubbles:!0}))})}n==="shouldShowFeedbackFor"&&Wi(this.shouldShowFeedbackFor,r).length>0&&this.dispatchEvent(new Event("shouldShowFeedbackForChanged",{bubbles:!0}))}async validate({clearCurrentResult:n=!1}={}){if(this.validateComplete=new Promise(r=>{this.__validateCompleteResolve=r}),this.disabled||this.readOnly){this.__clearValidationResults(),this.__finishValidationPass(),this._updateFeedbackComponent();return}this.__isValidateInitialized&&(this.__prevValidationResult=this.__validationResult,n&&this.__clearValidationResults(),await this.__executeValidators())}async __executeValidators(){var b,u;const n=fn(this.modelValue),r=this.__isEmpty(n);if(this.__syncValidationResult=[],r){const p=!this._isFormOrFieldset,v=this._allValidators.find(m=>{var C;return((C=m.constructor)==null?void 0:C.validatorName)==="Required"});if(v&&(this.__syncValidationResult=[{validator:v,outcome:!0}]),p){this.__finishValidationPass({syncValidationResult:this.__syncValidationResult});return}}const a=[],d=[],h=[];for(const p of this._allValidators)p!=null&&p.executeOnResults?a.push(p):ne(this,e,Oo).call(this,p)||(p.constructor.async?h.push(p):d.push(p));const _=!!h.length;this.__syncValidationResult=[...this.__syncValidationResult,...this.__executeSyncValidators(d,n)],this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,metaValidators:a}),_?(this.isPending=!0,this.__asyncValidationResult=await this.__executeAsyncValidators(h,n),this.isPending=!1,this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,asyncValidationResult:this.__asyncValidationResult,metaValidators:a}),(b=this.__validateCompleteResolve)==null||b.call(this,!0)):(u=this.__validateCompleteResolve)==null||u.call(this,!0)}__executeSyncValidators(n,r){return n.map(a=>({validator:a,outcome:a.execute(r,a.param,{node:this})})).filter(a=>!!a.outcome)}async __executeAsyncValidators(n,r){const a=n.map(h=>h.execute(r,h.param,{node:this})),d=await Promise.all(a);return d.map((h,_)=>({validator:n[_],outcome:d[_]})).filter(h=>!!h.outcome)}__executeMetaValidators(n,r){return r.length?this._isEmpty(this.modelValue)?(this.__prevShownValidationResult=[],[]):r.map(a=>({validator:a,outcome:a.executeOnResults({regularValidationResult:n.map(d=>d.validator),prevValidationResult:this.__prevValidationResult.map(d=>d.validator),prevShownValidationResult:this.__prevShownValidationResult.map(d=>d.validator)})})).filter(a=>!!a.outcome):[]}__finishValidationPass({syncValidationResult:n=[],asyncValidationResult:r=[],metaValidators:a=[]}={}){const d=[...n,...r],h=this.__executeMetaValidators(d,a);this.__validationResult=[...h,...d];const b=this.constructor.validationTypes.reduce((u,p)=>({...u,[p]:{}}),{});for(const{validator:u,outcome:p}of this.__validationResult){b[u.type]||(b[u.type]={});const v=u.constructor;b[u.type][v.validatorName]=p}this.validationStates=b,this.hasFeedbackFor=[...new Set(this.__validationResult.map(({validator:u})=>u.type))],this.dispatchEvent(new Event("validate-performed",{bubbles:!0}))}__clearValidationResults(){this.__syncValidationResult=[],this.__asyncValidationResult=[]}_onValidatorUpdated(n){(n.type==="param-changed"||n.type==="config-changed")&&this.validate()}__setupValidators(){var r,a;const n=["param-changed","config-changed"];for(const d of this.__prevValidators||[]){for(const h of n)(r=d.removeEventListener)==null||r.call(d,h,this._onValidatorUpdated);d.onFormControlDisconnect(this)}for(const d of this._allValidators){if(d.constructor._$isValidator$===void 0){const p=`Validators array only accepts class instances of Validator. Type "${Array.isArray(d)?"array":typeof d}" found. This may be caused by having multiple installations of "@lion/ui/form-core.js".`;throw console.error(p,this),new Error(p)}const _=this.constructor,b=d.constructor;if(_.validationTypes.indexOf(d.type)===-1){const u=`This component does not support the validator type "${d.type}" used in "${b.validatorName}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(u,this),new Error(u)}for(const u of n)(a=d.addEventListener)==null||a.call(d,u,p=>{this._onValidatorUpdated(p,{validator:d})});d.onFormControlConnect(this)}this.__prevValidators=this._allValidators}__isEmpty(n){return typeof this._isEmpty=="function"?this._isEmpty(n):this.modelValue===null||typeof this.modelValue>"u"||this.modelValue===""}async __getFeedbackMessages(n){let r=await this.fieldName;return Promise.all(n.map(async({validator:a,outcome:d})=>{var _;return a.config.fieldName&&(r=await a.config.fieldName),{message:await a._getMessage({modelValue:this.modelValue,formControl:this,fieldName:r,outcome:d}),type:a.type,validator:a,visibilityDuration:((_=a.config)==null?void 0:_.visibilityDuration)||3e3}}))}_updateFeedbackComponent(){window.clearTimeout(this.removeMessage);const{_feedbackNode:n}=this;n&&(this.__feedbackQueue||(this.__feedbackQueue=new ln),this.showsFeedbackFor.length>0?this.__feedbackQueue.add(async()=>{const r=this._prioritizeAndFilterFeedback({validationResult:this.__validationResult.map(d=>d.validator)});this.__prioritizedResult=r.map(d=>this.__validationResult.find(_=>d===_.validator)).filter(Boolean),this.__prioritizedResult.length>0&&(this.__prevShownValidationResult=this.__prioritizedResult);const a=await this.__getFeedbackMessages(this.__prioritizedResult);n.feedbackData=a||[],a!=null&&a[0]&&a[0].type==="success"&&a[0].visibilityDuration!==1/0&&(this.removeMessage=window.setTimeout(()=>{n.removeAttribute("type"),n.feedbackData=[]},a[0].visibilityDuration))}):this.__feedbackQueue.add(async()=>{n.feedbackData=[]}),this.feedbackComplete=this.__feedbackQueue.complete)}_showFeedbackConditionFor(n,r){return!0}get _feedbackConditionMeta(){return{modelValue:this.modelValue,el:this}}feedbackCondition(n,r=this._feedbackConditionMeta,a=this._showFeedbackConditionFor.bind(this)){return a(n,r)}_hasFeedbackVisibleFor(n){var r,a;return((r=this.hasFeedbackFor)==null?void 0:r.includes(n))&&((a=this.shouldShowFeedbackFor)==null?void 0:a.includes(n))}updated(n){if(super.updated(n),n.has("shouldShowFeedbackFor")||n.has("hasFeedbackFor")){const r=this.constructor;this.showsFeedbackFor=r.validationTypes.map(a=>this._hasFeedbackVisibleFor(a)?a:void 0).filter(Boolean),this._updateFeedbackComponent()}if(n.has("__childModelValueChanged")&&this.__childModelValueChanged&&(this.validate({clearCurrentResult:!0}),this.__childModelValueChanged=!1),n.has("validationStates")){const r=n.get("validationStates");r&&Object.entries(this.validationStates).forEach(([a,d])=>{r[a]&&JSON.stringify(d)!==JSON.stringify(r[a])&&this.dispatchEvent(new CustomEvent(`${a}StateChanged`,{detail:d}))})}}_updateShouldShowFeedbackFor(){const r=this.constructor.validationTypes.map(a=>this.feedbackCondition(a,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))?a:void 0).filter(Boolean);JSON.stringify(this.shouldShowFeedbackFor)!==JSON.stringify(r)&&(this.shouldShowFeedbackFor=r)}_prioritizeAndFilterFeedback({validationResult:n}){const a=this.constructor.validationTypes;return n.filter(h=>this.feedbackCondition(h.type,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))).sort((h,_)=>a.indexOf(h.type)-a.indexOf(_.type)).slice(0,this._visibleMessagesAmount)}},e=new WeakSet,Oo=function(n){let r=n;for(;r;){if(r.constructor.validatorName==="Required")return!0;r=Object.getPrototypeOf(r)}return!1},i},ft=D(_n),mn=o=>{var e,t,Zt,Jt,n;return n=class extends ft(Te(o)){constructor(){super();ee(this,t);ee(this,e,{didFormatterOutputSyncToView:!1,didFormatterRun:!1});this.formatOn="change",this.formatOptions={mode:"auto"},this.formattedValue=void 0,this.serializedValue=void 0,this._isPasting=!1,this._isHandlingUserInput=!1,this.__prevViewValue="",this.__onCompositionEvent=this.__onCompositionEvent.bind(this),this.addEventListener("user-input-changed",this._onUserInputChanged),this.addEventListener("paste",this.__onPaste),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)}}static get properties(){return{formattedValue:{attribute:!1},serializedValue:{attribute:!1},formatOptions:{attribute:!1}}}requestUpdate(d,h,_){super.requestUpdate(d,h,_),d==="modelValue"&&this.modelValue!==h&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:h}),d==="serializedValue"&&this.serializedValue!==h&&this._calculateValues({source:"serialized"}),d==="formattedValue"&&this.formattedValue!==h&&this._calculateValues({source:"formatted"})}get value(){var d;return((d=this._inputNode)==null?void 0:d.value)||this.__value||""}set value(d){this._inputNode?(this._inputNode.value=d,this.__value=void 0):this.__value=d}preprocessor(d,h){}parser(d,h){return d}formatter(d,h){return d}serializer(d){return d!==void 0?d:""}deserializer(d){return d===void 0?"":d}_calculateValues({source:d}={source:null}){this.__preventRecursiveTrigger||(this.__preventRecursiveTrigger=!0,d!=="model"&&(d==="serialized"?this.modelValue=this.deserializer(this.serializedValue):d==="formatted"&&(this.modelValue=this._callParser())),d!=="formatted"&&(this.formattedValue=this._callFormatter()),d!=="serialized"&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.__preventRecursiveTrigger=!1,this.__prevViewValue=this.value)}_callParser(d=this.formattedValue){if(d==="")return"";if(typeof d!="string")return;const h=this.parser(d,{...this.formatOptions,mode:ne(this,t,Zt).call(this),viewValueStates:ne(this,t,Jt).call(this)});return h!==void 0?h:new Se(d)}_callFormatter(){var d;return B(this,e).didFormatterRun=!1,this._isHandlingUserInput&&((d=this.hasFeedbackFor)!=null&&d.includes("error"))&&this._inputNode?this.value:this.modelValue instanceof Se?this.modelValue.viewValue:(B(this,e).didFormatterRun=!0,this.formatter(this.modelValue,{...this.formatOptions,mode:ne(this,t,Zt).call(this),viewValueStates:ne(this,t,Jt).call(this)}))}_onModelValueChanged(...d){this._calculateValues({source:"model"}),this._dispatchModelValueChangedEvent(...d)}_dispatchModelValueChangedEvent(...d){this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:!!this._isHandlingUserInput}}))}_syncValueUpwards(){this.__isHandlingComposition||this.__handlePreprocessor();const d=this.formattedValue;this.modelValue=this._callParser(this.value),d===this.formattedValue&&this.__prevViewValue!==this.value&&this._calculateValues()}__handlePreprocessor(){var _;let d=this.value.length;this._inputNode&&"selectionStart"in this._inputNode&&((_=this._inputNode)==null?void 0:_.type)!=="range"&&(d=this._inputNode.selectionStart);const h=this.preprocessor(this.value,{...this.formatOptions,currentCaretIndex:d,prevViewValue:this.__prevViewValue});if(h!==void 0){if(typeof h=="string")this.value=h;else if(typeof h=="object"){const{viewValue:b,caretIndex:u}=h;this.value=b,u&&this._inputNode&&"selectionStart"in this._inputNode&&(this._inputNode.selectionStart=u,this._inputNode.selectionEnd=u)}}}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=typeof this.formattedValue<"u"?this.formattedValue:"",B(this,e).didFormatterOutputSyncToView=!!this.formattedValue&&B(this,e).didFormatterRun)}_reflectBackOn(){return!this._isHandlingUserInput}_proxyInputEvent(){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}_onUserInputChanged(){this._isHandlingUserInput=!0,this._syncValueUpwards(),this._isHandlingUserInput=!1}__onCompositionEvent({type:d}){d==="compositionstart"?this.__isHandlingComposition=!0:d==="compositionend"&&(this.__isHandlingComposition=!1,this._syncValueUpwards())}__onPaste(){this._isPasting=!0,setTimeout(()=>{this._isPasting=!1})}connectedCallback(){super.connectedCallback(),typeof this.modelValue>"u"&&this._syncValueUpwards(),this.__prevViewValue=this.value,this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener("input",this._proxyInputEvent),this._inputNode.addEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.addEventListener("compositionend",this.__onCompositionEvent))}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&(this._inputNode.removeEventListener("input",this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.removeEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.removeEventListener("compositionend",this.__onCompositionEvent))}},e=new WeakMap,t=new WeakSet,Zt=function(){return this._isPasting?"pasted":this._isHandlingUserInput&&this.__prevViewValue?"user-edited":"auto"},Jt=function(){const d=[];return B(this,e).didFormatterOutputSyncToView&&d.push("formatted"),d},n},gi=D(mn),bn=o=>class extends Te(o){static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},filled:{type:Boolean,reflect:!0},prefilled:{attribute:!1},submitted:{attribute:!1}}}requestUpdate(t,i,s){super.requestUpdate(t,i,s),t==="touched"&&this.touched!==i&&this._onTouchedChanged(),t==="modelValue"&&(this.filled=!this._isEmpty()),t==="dirty"&&this.dirty!==i&&this._onDirtyChanged()}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this.filled=!1,this._leaveEvent="blur",this._valueChangedEvent="model-value-changed",this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=!this._isEmpty()}_iStateOnLeave(){this.touched=!0,this.prefilled=!this._isEmpty()}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.submitted=!1,this.dirty=!1,this.prefilled=!this._isEmpty()}_onTouchedChanged(){this.dispatchEvent(new Event("touched-changed",{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new Event("dirty-changed",{bubbles:!0,composed:!0}))}_showFeedbackConditionFor(t,i){return i.touched&&i.dirty||i.prefilled||i.submitted}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,submitted:this.submitted,touched:this.touched,dirty:this.dirty,filled:this.filled,prefilled:this.prefilled}}},yi=D(bn);class To extends Te(yi(mi(gi(ft(ye(K)))))){firstUpdated(e){super.firstUpdated(e),this._initialModelValue=this.modelValue}connectedCallback(){super.connectedCallback(),this._onChange=this._onChange.bind(this),this._inputNode.addEventListener("change",this._onChange),this.classList.add("form-field")}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._inputNode)==null||e.removeEventListener("change",this._onChange)}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.resetInteractionState()}clear(){this.modelValue=""}_onChange(e){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}class Xt extends Array{_keys(){return Object.keys(this).filter(e=>Number.isNaN(Number(e)))}}const vn=o=>class extends vi(o){static get properties(){return{_isFormOrFieldset:{type:Boolean}}}constructor(){super(),this.formElements=new Xt,this._isFormOrFieldset=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this._onRequestToChangeFormElementName=this._onRequestToChangeFormElementName.bind(this),this.addEventListener("form-element-register",this._onRequestToAddFormElement),this.addEventListener("form-element-name-changed",this._onRequestToChangeFormElementName),this.initComplete=new Promise((e,t)=>{this.__resolveInitComplete=e,this.__rejectInitComplete=t}),this.registrationComplete=new Promise((e,t)=>{this.__resolveRegistrationComplete=e,this.__rejectRegistrationComplete=t}),this.registrationComplete.done=!1,this.registrationComplete.then(()=>{this.registrationComplete.done=!0,this.__resolveInitComplete(void 0)},()=>{throw this.registrationComplete.done=!0,this.__rejectInitComplete(void 0),new Error("Registration could not finish. Please use await el.registrationComplete;")})}connectedCallback(){super.connectedCallback(),this._completeRegistration()}_completeRegistration(){Promise.resolve().then(()=>this.__resolveRegistrationComplete(void 0))}disconnectedCallback(){super.disconnectedCallback(),this.registrationComplete.done===!1&&Promise.resolve().then(()=>{Promise.resolve().then(()=>{this.__rejectRegistrationComplete()})})}isRegisteredFormElement(e){return this.formElements.some(t=>t===e)}addFormElement(e,t){if(e._parentFormGroup=this,t>=0?this.formElements.splice(t,0,e):this.formElements.push(e),this._isFormOrFieldset){const{name:i}=e;if(i===this.name)throw console.info("Error Node:",e),new TypeError(`You can not have the same name "${i}" as your parent`);if(i.substr(-2)==="[]")Array.isArray(this.formElements[i])||(this.formElements[i]=new Xt),t>0?this.formElements[i].splice(t,0,e):this.formElements[i].push(e);else if(!this.formElements[i])this.formElements[i]=e;else throw console.info("Error Node:",e),new TypeError(`Name "${i}" is already registered - if you want an array add [] to the end`)}}removeFormElement(e){const t=this.formElements.indexOf(e);if(t>-1&&this.formElements.splice(t,1),this._isFormOrFieldset){const{name:i}=e;if(i.substr(-2)==="[]"&&this.formElements[i]){const s=this.formElements[i].indexOf(e);s>-1&&this.formElements[i].splice(s,1)}else this.formElements[i]&&delete this.formElements[i]}}_onRequestToAddFormElement(e){const t=e.detail.element;if(t===this||this.isRegisteredFormElement(t))return;e.stopPropagation();let i=-1;if(this.formElements&&Array.isArray(this.formElements)){for(const[s,n]of this.formElements.entries())if(!(n.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)){i=s;break}}this.addFormElement(t,i)}_onRequestToChangeFormElementName(e){const t=this.formElements[e.detail.oldName];t&&(this.formElements[e.detail.newName]=t,delete this.formElements[e.detail.oldName])}_onRequestToRemoveFormElement(e){const t=e.detail.element;t!==this&&this.isRegisteredFormElement(t)&&(e.stopPropagation(),this.removeFormElement(t))}},xi=D(vn),gn=o=>class extends o{constructor(){super(),this.registrationTarget=void 0,this.__redispatchEventForFormRegistrarPortalMixin=this.__redispatchEventForFormRegistrarPortalMixin.bind(this),this.addEventListener("form-element-register",this.__redispatchEventForFormRegistrarPortalMixin)}__redispatchEventForFormRegistrarPortalMixin(e){if(e.stopPropagation(),!this.registrationTarget)throw new Error("A FormRegistrarPortal element requires a .registrationTarget");this.registrationTarget.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:e.detail.element},bubbles:!0}))}},yn=D(gn),xn=o=>class extends gi(mi(Te(o))){static get properties(){return{autocomplete:{type:String,reflect:!0}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return super._inputNode}get selectionStart(){const t=this._inputNode;return t&&t.selectionStart?t.selectionStart:0}set selectionStart(t){const i=this._inputNode;i&&i.selectionStart&&(i.selectionStart=t)}get selectionEnd(){const t=this._inputNode;return t&&t.selectionEnd?t.selectionEnd:0}set selectionEnd(t){const i=this._inputNode;i&&i.selectionEnd&&(i.selectionEnd=t)}get value(){return this._inputNode&&this._inputNode.value||this.__value||""}set value(t){this._inputNode?(this._inputNode.value!==t&&this._setValueAndPreserveCaret(t),this.__value=void 0):this.__value=t}_setValueAndPreserveCaret(t){if(this.focused)try{if(!(this._inputNode instanceof HTMLSelectElement)){const i=this._inputNode.selectionStart;this._inputNode.value=t,this._inputNode.selectionStart=i,this._inputNode.selectionEnd=i}}catch{this._inputNode.value=t}else this._inputNode.value=t}_reflectBackFormattedValueToUser(){if(super._reflectBackFormattedValueToUser(),this._reflectBackOn()&&this.focused)try{this._inputNode.selectionStart=this._inputNode.value.length}catch{}}get _focusableNode(){return this._inputNode}},Vo=D(xn);class _t extends $e{static get validatorName(){return"Required"}static get _compatibleRoles(){return["combobox","gridcell","input","listbox","radiogroup","select","spinbutton","textarea","textbox","tree"]}static get _compatibleTags(){return["input","select","textarea"]}onFormControlConnect({_inputNode:e}){if(e){const t=e.getAttribute("role")||"",i=e.tagName.toLowerCase(),s=this.constructor;(s._compatibleRoles.includes(t)||s._compatibleTags.includes(i))&&e.setAttribute("aria-required","true")}}onFormControlDisconnect({_inputNode:e}){e&&e.removeAttribute("aria-required")}}const Cn=o=>class extends xi(ft(yi(o))){static get properties(){return{multipleChoice:{type:Boolean,attribute:"multiple-choice"}}}get modelValue(){const t=this._getCheckedElements();return this.multipleChoice?t.map(i=>i.choiceValue):t[0]?t[0].choiceValue:""}set modelValue(t){const i=(s,n)=>typeof s.choiceValue=="object"?JSON.stringify(s.choiceValue)===JSON.stringify(t):s.choiceValue===n;this.__isInitialModelValue?this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this._setCheckedElements(t,i),this.requestUpdate("modelValue",this._oldModelValue)}):(this._setCheckedElements(t,i),this.requestUpdate("modelValue",this._oldModelValue)),this._oldModelValue=this.modelValue}get serializedValue(){const t=this._getCheckedElements();return this.multipleChoice?t.map(i=>i.serializedValue.value):t[0]?t[0].serializedValue.value:""}set serializedValue(t){const i=(s,n)=>s.serializedValue.value===n;this.__isInitialSerializedValue?this.registrationComplete.then(()=>{this.__isInitialSerializedValue=!1,this._setCheckedElements(t,i),this.requestUpdate("serializedValue")}):(this._setCheckedElements(t,i),this.requestUpdate("serializedValue"))}get formattedValue(){const t=this._getCheckedElements();return this.multipleChoice?t.map(i=>i.formattedValue):t[0]?t[0].formattedValue:""}set formattedValue(t){const i=(s,n)=>s.formattedValue===n;this.__isInitialFormattedValue?this.registrationComplete.then(()=>{this.__isInitialFormattedValue=!1,this._setCheckedElements(t,i)}):this._setCheckedElements(t,i)}get operationMode(){return this._repropagationRole==="choice-group"?"select":"enter"}constructor(){super(),this.multipleChoice=!1,this._repropagationRole="choice-group",this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this.__isInitialFormattedValue=!0}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__isInitialFormattedValue=!1})}_completeRegistration(){Promise.resolve().then(()=>super._completeRegistration())}updated(t){super.updated(t),t.has("name")&&this.name!==t.get("name")&&this.formElements.forEach(i=>{i.name=this.name})}addFormElement(t,i){this._throwWhenInvalidChildModelValue(t),t.name=this.name,super.addFormElement(t,i)}clear(){this.multipleChoice?this.modelValue=[]:this.modelValue=""}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}_getFromAllFormElementsFilter(t,i){return!0}_getFromAllFormElements(t,i){var r;const s=i||this._getFromAllFormElementsFilter;if(t==="modelValue"||t==="serializedValue"||t==="formattedValue")return this[t];const n=this.formElements.filter(a=>s(a,t));return t==="_initialModelValue"?this.multipleChoice?n.filter(a=>a[t].checked).map(a=>a[t].value):(r=n.find(a=>a[t].checked))==null?void 0:r.value:n.map(a=>a[t])}_throwWhenInvalidChildModelValue(t){if(typeof t.modelValue.checked!="boolean"||!Object.prototype.hasOwnProperty.call(t.modelValue,"value"))throw new Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${t.tagName.toLowerCase()} with .modelValue="${t.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){return this.multipleChoice?this.modelValue.length===0:typeof this.modelValue=="string"&&this.modelValue===""||this.modelValue===void 0||this.modelValue===null}_checkSingleChoiceElements(t){const{target:i}=t;if(i.checked===!1)return;const s=i.name;this.formElements.filter(n=>n.name===s).forEach(n=>{n!==i&&(n.checked=!1)})}_getCheckedElements(){return this.formElements.filter(t=>t.checked&&!t.disabled)}_setCheckedElements(t,i){if(t==null){this.formElements.forEach(s=>s.checked=!1);return}for(let s=0;s<this.formElements.length;s+=1)if(this.multipleChoice){let n=t.includes(this.formElements[s].modelValue.value);typeof this.formElements[s].modelValue.value=="object"&&(n=t.map(r=>JSON.stringify(r)).includes(JSON.stringify(this.formElements[s].modelValue.value))),this.formElements[s].checked=n}else i(this.formElements[s],t)?this.formElements[s].checked=!0:this.formElements[s].checked=!1}__setChoiceGroupTouched(){const t=this.modelValue;t!=null&&t!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=t)}_onBeforeRepropagateChildrenValues(t){const i=t.detail&&t.detail.element||t.target;this.multipleChoice||!i.checked||(this.formElements.forEach(s=>{i.choiceValue!==s.choiceValue&&(s.checked=!1)}),this.__setChoiceGroupTouched(),this.requestUpdate("modelValue",this._oldModelValue),this._oldModelValue=this.modelValue)}_repropagationCondition(t){return!(this._repropagationRole==="choice-group"&&!this.multipleChoice&&!t.checked)}},Nt=D(Cn),kn=(o,e={})=>o.value!==e.value||o.checked!==e.checked,wn=o=>class extends gi(o){static get properties(){return{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},modelValue:{type:Object,hasChanged:kn},choiceValue:{type:Object}}}get choiceValue(){return this.modelValue.value}set choiceValue(t){this.requestUpdate("choiceValue",this.choiceValue),this.modelValue.value!==t&&(this.modelValue={value:t,checked:this.modelValue.checked})}requestUpdate(t,i,s){super.requestUpdate(t,i,s),t==="modelValue"?this.modelValue.checked!==this.checked&&this.__syncModelCheckedToChecked(this.modelValue.checked):t==="checked"&&this.modelValue.checked!==this.checked&&this.__syncCheckedToModel(this.checked)}firstUpdated(t){super.firstUpdated(t),t.has("checked")&&this.__syncCheckedToInputElement()}updated(t){super.updated(t),t.has("modelValue")&&this.__syncCheckedToInputElement(),t.has("name")&&this._parentFormGroup&&this._parentFormGroup.name!==this.name&&this._syncNameToParentFormGroup()}constructor(){super(),this.modelValue={value:"",checked:!1},this.disabled=!1,this._preventDuplicateLabelClick=this._preventDuplicateLabelClick.bind(this),this._toggleChecked=this._toggleChecked.bind(this)}static get styles(){return[...super.styles||[],M`
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
        `]}render(){return f`
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
      `}_choiceGraphicTemplate(){return S}_afterTemplate(){return S}connectedCallback(){super.connectedCallback(),this._labelNode&&this._labelNode.addEventListener("click",this._preventDuplicateLabelClick),this.addEventListener("user-input-changed",this._toggleChecked)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._preventDuplicateLabelClick),this.removeEventListener("user-input-changed",this._toggleChecked)}_preventDuplicateLabelClick(t){const i=s=>{s.stopImmediatePropagation(),this._inputNode.removeEventListener("click",i)};this._inputNode.addEventListener("click",i)}_toggleChecked(t){this.disabled||(this._isHandlingUserInput=!0,this.checked=!this.checked,this._isHandlingUserInput=!1)}_syncNameToParentFormGroup(){var t;this._parentFormGroup.tagName.includes(this.tagName)&&(this.name=((t=this._parentFormGroup)==null?void 0:t.name)||"")}__syncModelCheckedToChecked(t){this.checked=t}__syncCheckedToModel(t){this.modelValue={value:this.choiceValue,checked:t}}__syncCheckedToInputElement(){this._inputNode&&(this._inputNode.checked=this.checked)}_proxyInputEvent(){}_onModelValueChanged({modelValue:t},i){let s;i&&i.modelValue&&(s=i.modelValue),this.constructor.elementProperties.get("modelValue").hasChanged(t,s)&&super._onModelValueChanged({modelValue:t})}parser(){return this.modelValue}formatter(t){return t&&t.value!==void 0?t.value:t}clear(){this.checked=!1}_isEmpty(){return!this.checked}_syncValueUpwards(){}},Ci=D(wn);class En extends $e{static get validatorName(){return"FormElementsHaveNoError"}execute(e,t,i){return i==null?void 0:i.node._anyFormElementHasFeedbackFor("error")}static async getMessage(){return""}}const Nn=o=>class extends xi(Te(ft(pt(ye(o))))){static get properties(){return{submitted:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},touched:{type:Boolean,reflect:!0},prefilled:{type:Boolean,reflect:!0}}}get _inputNode(){return this}get modelValue(){return this._getFromAllFormElements("modelValue")}set modelValue(t){this.__isInitialModelValue?(this.__isInitialModelValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("modelValue",t)})):this._setValueMapForAllFormElements("modelValue",t)}get serializedValue(){return this._getFromAllFormElements("serializedValue")}set serializedValue(t){this.__isInitialSerializedValue?(this.__isInitialSerializedValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("serializedValue",t)})):this._setValueMapForAllFormElements("serializedValue",t)}get formattedValue(){return this._getFromAllFormElements("formattedValue")}set formattedValue(t){this._setValueMapForAllFormElements("formattedValue",t)}get prefilled(){return this._everyFormElementHas("prefilled")}constructor(){super(),this.value="",this.disabled=!1,this.submitted=!1,this.dirty=!1,this.touched=!1,this.focused=!1,this.__addedSubValidators=!1,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this._checkForOutsideClick=this._checkForOutsideClick.bind(this),this.addEventListener("focusin",this._syncFocused),this.addEventListener("focusout",this._onFocusOut),this.addEventListener("dirty-changed",this._syncDirty),this.addEventListener("validate-performed",this.__onChildValidatePerformed),this.defaultValidators=[new En],this.__descriptionElementsInParentChain=new Set,this.__pendingValues={modelValue:{},serializedValue:{}}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group"),this.initComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__initInteractionStates()})}disconnectedCallback(){super.disconnectedCallback(),this.__hasActiveOutsideClickHandling&&(document.removeEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!1),this.__descriptionElementsInParentChain.clear()}__initInteractionStates(){this.formElements.forEach(t=>{typeof t.initInteractionState=="function"&&t.initInteractionState()})}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.__requestChildrenToBeDisabled():this.__retractRequestChildrenToBeDisabled()),t.has("focused")&&this.focused===!0&&this.__setupOutsideClickHandling()}__setupOutsideClickHandling(){this.__hasActiveOutsideClickHandling||(document.addEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!0)}_checkForOutsideClick(t){!this.contains(t.target)&&(this.touched=!0)}__requestChildrenToBeDisabled(){this.formElements.forEach(t=>{t.makeRequestToBeDisabled&&t.makeRequestToBeDisabled()})}__retractRequestChildrenToBeDisabled(){this.formElements.forEach(t=>{t.retractRequestToBeDisabled&&t.retractRequestToBeDisabled()})}_inputGroupTemplate(){return f`
        <div class="input-group">
          <slot></slot>
        </div>
      `}submitGroup(){this.submitted=!0,this.formElements.forEach(t=>{typeof t.submitGroup=="function"?t.submitGroup():t.submitted=!0})}resetGroup(){this.formElements.forEach(t=>{typeof t.resetGroup=="function"?t.resetGroup():typeof t.reset=="function"&&t.reset()}),this.resetInteractionState()}clearGroup(){this.formElements.forEach(t=>{typeof t.clearGroup=="function"?t.clearGroup():typeof t.clear=="function"&&t.clear()}),this.resetInteractionState()}resetInteractionState(){this.submitted=!1,this.touched=!1,this.dirty=!1,this.formElements.forEach(t=>{typeof t.resetInteractionState=="function"&&t.resetInteractionState()})}_getFromAllFormElementsFilter(t,i){return!t.disabled}_getFromAllFormElements(t,i){const s={},n=i||this._getFromAllFormElementsFilter;return this.formElements._keys().forEach(r=>{const a=this.formElements[r];a instanceof Xt?s[r]=a.filter(d=>n(d,t)).map(d=>d[t]):n(a,t)&&(typeof a._getFromAllFormElements=="function"?s[r]=a._getFromAllFormElements(t):s[r]=a[t])}),s}_setValueForAllFormElements(t,i){this.formElements.forEach(s=>{s[t]=i})}_setValueMapForAllFormElements(t,i){i&&typeof i=="object"&&Object.keys(i).forEach(s=>{Array.isArray(this.formElements[s])&&this.formElements[s].forEach((n,r)=>{n[t]=i[s][r]}),this.formElements[s]?this.formElements[s][t]=i[s]:this.__pendingValues[t][s]=i[s]})}_anyFormElementHas(t){return Object.keys(this.formElements).some(i=>Array.isArray(this.formElements[i])?this.formElements[i].some(s=>!!s[t]):!!this.formElements[i][t])}_anyFormElementHasFeedbackFor(t){return Object.keys(this.formElements).some(i=>Array.isArray(this.formElements[i])?this.formElements[i].some(s=>!!(s.hasFeedbackFor&&s.hasFeedbackFor.includes(t))):!!(this.formElements[i].hasFeedbackFor&&this.formElements[i].hasFeedbackFor.includes(t)))}_everyFormElementHas(t){return Object.keys(this.formElements).every(i=>Array.isArray(this.formElements[i])?this.formElements[i].every(s=>!!s[t]):!!this.formElements[i][t])}__onChildValidatePerformed(t){t&&this.isRegisteredFormElement(t.target)&&this.validate()}_syncFocused(){this.focused=this._anyFormElementHas("focused")}_onFocusOut(t){const i=this.formElements[this.formElements.length-1];t.target===i&&(this.touched=!0),this.focused=!1}_syncDirty(){this.dirty=this._anyFormElementHas("dirty")}__storeAllDescriptionElementsInParentChain(){let i=this;for(;i;){const s=i._getAriaDescriptionElements();Ao(s,{reverse:!0}).forEach(r=>{r.getAttribute("slot")==="feedback"&&this.__descriptionElementsInParentChain.add(r)}),i=i._parentFormGroup}}__linkParentMessages(t){this.__descriptionElementsInParentChain.forEach(i=>{typeof t.addToAriaDescribedBy=="function"&&t.addToAriaDescribedBy(i,{reorder:!1})})}__unlinkParentMessages(t){this.__descriptionElementsInParentChain.forEach(i=>{typeof t.removeFromAriaDescribedBy=="function"&&t.removeFromAriaDescribedBy(i)})}addFormElement(t,i){if(super.addFormElement(t,i),this.disabled&&t.makeRequestToBeDisabled(),this.__descriptionElementsInParentChain.size||this.__storeAllDescriptionElementsInParentChain(),this.__linkParentMessages(t),this.validate({clearCurrentResult:!0}),!t.modelValue){const s=this.__pendingValues;s.modelValue&&s.modelValue[t.name]?t.modelValue=s.modelValue[t.name]:s.serializedValue&&s.serializedValue[t.name]&&(t.serializedValue=s.serializedValue[t.name])}}get _initialModelValue(){return this._getFromAllFormElements("_initialModelValue")}removeFormElement(t){super.removeFormElement(t),this.validate({clearCurrentResult:!0}),typeof t.removeFromAriaLabelledBy=="function"&&this._labelNode&&t.removeFromAriaLabelledBy(this._labelNode,{reorder:!1}),this.__unlinkParentMessages(t)}_isEmpty(){return this.formElements.every(t=>{var i;return(i=t._isEmpty)==null?void 0:i.call(t)})}},ki=D(Nn);class wi extends Vo(To){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("input"),t=this.getAttribute("value");return t&&e.setAttribute("value",t),e}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type="text",this.placeholder=""}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="readOnly"&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has("type")&&(this._inputNode.type=this.type),e.has("placeholder")&&(this._inputNode.placeholder=this.placeholder),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}}const Sn=M`
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
    padding-inline: var(--co-space-inset-lg);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
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
    min-block-size: var(--co-font-line-height-normal, 1.25em);
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
`;var Ei=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let at=class extends wi{constructor(){super(...arguments),this.size="md",this.danger=!1,this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-input")},this._handleNativeChange=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,Sn]}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}_labelTemplate(){return f`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return f`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return f`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?f`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:S}_inputGroupInputTemplate(){return f`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot==="suffix")?f`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:S}_feedbackTemplate(){return f`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_dispatchValueEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}};Ei([g({reflect:!0})],at.prototype,"size",void 0);Ei([g({type:Boolean,reflect:!0})],at.prototype,"danger",void 0);at=Ei([j("co-input")],at);const An=M`
  /* ── Input Pill — pill-shaped standalone input ── */

  /* Override co-input's border-radius and padding per Figma spec:
     border-radius: 9px, padding: 6px 6px 6px 16px, border: 1px */
  .input-group__container {
    border-radius: var(--co-shape-radius-full);
    padding: var(--co-space-1-5, 6px) var(--co-space-1-5, 6px) var(--co-space-1-5, 6px)
      var(--co-space-4);
    /* padding: var(--co-space-1-5, 6px) var(--co-space-4); */
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
    margin-inline-start: var(--co-space-1-5, 6px);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qt=class extends Eo{constructor(e){if(super(e),this.it=S,e.type!==ko.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===S||e==null)return this._t=void 0,this.it=e;if(e===ae)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Qt.directiveName="unsafeHTML",Qt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ei=class extends Qt{};ei.directiveName="unsafeSVG",ei.resultType=2;const On=wo(ei),Tn=M`
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
`;var qe=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let be=class extends K{constructor(){super(...arguments),this.name="",this.size="md",this.fill=!1,this.animated=!1}async replay(){if(!this.animated){this.animated=!0,await this.updateComplete;return}this.animated=!1,await this.updateComplete,this.getBoundingClientRect(),this.animated=!0,await this.updateComplete}render(){const e=this.animated&&ts(this.name,"rounded",this.fill)||is(this.name,"rounded",this.fill);if(!e)return S;const t=!this.label,i=os.has(this.name)||ss.has(this.name)?"0 0 24 24":"0 -960 960 960";return f`
      <svg
        part="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox=${i}
        fill="currentColor"
        role=${t?"presentation":"img"}
        aria-hidden=${t?"true":"false"}
        aria-label=${this.label??S}
      >
        ${On(e)}
      </svg>
    `}};be.styles=[Tn];qe([g({reflect:!0})],be.prototype,"name",void 0);qe([g({reflect:!0})],be.prototype,"size",void 0);qe([g({type:Boolean,reflect:!0})],be.prototype,"fill",void 0);qe([g({type:Boolean,reflect:!0})],be.prototype,"animated",void 0);qe([g()],be.prototype,"label",void 0);be=qe([j("co-icon")],be);const Dt=o=>o.key===" "||o.key==="Enter",Ki=o=>o.key===" ";class Fo extends Vs(K){static get properties(){return{active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return f` <div class="button-content"><slot></slot></div> `}static get styles(){return[M`
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
      `]}constructor(){super(),this.type="button",this.active=!1,this.__setupEvents()}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","button")}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.getAttribute("aria-disabled")!==null&&this.removeAttribute("aria-disabled"))}__setupEvents(){this.addEventListener("mousedown",this.__mousedownHandler),this.addEventListener("keydown",this.__keydownHandler),this.addEventListener("keyup",this.__keyupHandler)}__mousedownHandler(){this.active=!0;const e=()=>{this.active=!1,document.removeEventListener("mouseup",e),this.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e),this.addEventListener("mouseup",e)}__keydownHandler(e){if(this.active||!Dt(e)){Ki(e)&&e.preventDefault();return}Ki(e)&&e.preventDefault(),this.active=!0;const t=i=>{Dt(i)&&(this.active=!1,document.removeEventListener("keyup",t,!0))};document.addEventListener("keyup",t,!0)}__keyupHandler(e){if(Dt(e)){if(e.target&&e.target!==this)return;this.click()}}}class Vn extends Fo{constructor(){super(),this.type="reset",this.__setupDelegationInConstructor(),this.__submitAndResetHelperButton=document.createElement("button"),this.__preventEventLeakage=this.__preventEventLeakage.bind(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setupSubmitAndResetHelperOnConnected()})}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubmitAndResetHelperOnDisconnected()}__preventEventLeakage(e){e.target===this.__submitAndResetHelperButton&&e.stopImmediatePropagation()}_setupSubmitAndResetHelperOnConnected(){this.appendChild(this.__submitAndResetHelperButton),this._form=this.__submitAndResetHelperButton.form,this.removeChild(this.__submitAndResetHelperButton),this._form&&this._form.addEventListener("click",this.__preventEventLeakage)}_teardownSubmitAndResetHelperOnDisconnected(){this._form&&this._form.removeEventListener("click",this.__preventEventLeakage)}async __clickDelegationHandler(e){this._form||await this.updateComplete,(this.type==="submit"||this.type==="reset")&&e.target===this&&this._form&&(this.__submitAndResetHelperButton.type=this.type,this._form.appendChild(this.__submitAndResetHelperButton),this.__submitAndResetHelperButton.click(),this._form.removeChild(this.__submitAndResetHelperButton))}__setupDelegationInConstructor(){this.addEventListener("click",this.__clickDelegationHandler,!0)}}const pe=new WeakMap;function Fn(){const o=document.createElement("button");return o.tabIndex=-1,o.type="submit",o.setAttribute("aria-hidden","true"),o.style.cssText=`
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
  `,o}class Io extends Vn{get _nativeButtonNode(){var e;return((e=pe.get(this._form))==null?void 0:e.helper)||null}constructor(){super(),this.type="submit",this.__implicitSubmitHelperButton=null}_setupSubmitAndResetHelperOnConnected(){var i,s;if(super._setupSubmitAndResetHelperOnConnected(),!this._form||this.type!=="submit")return;const e=this._form;if(!pe.get(this._form)){const n=Fn(),r=document.createElement("div");r.appendChild(n),pe.set(this._form,{lionButtons:new Set,helper:n,observer:new MutationObserver(()=>{e.appendChild(r)})}),e.appendChild(r),(i=pe.get(e))==null||i.observer.observe(r,{childList:!0})}(s=pe.get(e))==null||s.lionButtons.add(this)}_teardownSubmitAndResetHelperOnDisconnected(){var e;if(super._teardownSubmitAndResetHelperOnDisconnected(),this._form){const t=pe.get(this._form);t&&(t.lionButtons.delete(this),t.lionButtons.size||(this._form.contains(t.helper)&&t.helper.remove(),(e=pe.get(this._form))==null||e.observer.disconnect(),pe.delete(this._form)))}}}const In=M`
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
    font-size: var(--co-font-size-xsmall);
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
`;var Ve=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const Ln={sm:"xs",md:"sm",lg:"md",xl:"lg"};let ve=class extends Io{constructor(){super(...arguments),this.name="",this.variant="primary",this.size="md",this.labelPosition="bottom",this.circle=!1,this._handleFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,In]}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}render(){const e=Ln[this.size],t=!!this.label&&!this.circle,i=t?f`<span part="label" class="label">${this.label}</span>`:S;return f`
      <div part="base" class="button-icon ${t?"has-label":""}">
        ${this.labelPosition==="top"?i:S}
        <co-icon part="icon" name=${this.name} size=${e} aria-hidden="true"></co-icon>
        ${this.labelPosition==="bottom"?i:S}
      </div>
    `}};Ve([g({reflect:!0})],ve.prototype,"name",void 0);Ve([g({reflect:!0})],ve.prototype,"variant",void 0);Ve([g({reflect:!0})],ve.prototype,"size",void 0);Ve([g()],ve.prototype,"label",void 0);Ve([g({reflect:!0,attribute:"label-position"})],ve.prototype,"labelPosition",void 0);Ve([g({type:Boolean,reflect:!0})],ve.prototype,"circle",void 0);ve=Ve([j("co-button-icon")],ve);var St=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const Pt={default:{},search:{prefixIcon:"search",placeholder:"Search"},chat:{actionIcon:"arrow-forward"}};let lt=class extends at{constructor(){super(...arguments),this.variant="default"}static get styles(){return[...super.styles,An]}get _resolvedPrefixIcon(){var e;return this.prefixIcon??((e=Pt[this.variant])==null?void 0:e.prefixIcon)}get _resolvedActionIcon(){var e;return this.actionIcon??((e=Pt[this.variant])==null?void 0:e.actionIcon)}connectedCallback(){var e;if(super.connectedCallback(),!this.hasAttribute("placeholder")){const t=(e=Pt[this.variant])==null?void 0:e.placeholder;t&&this.setAttribute("placeholder",t)}}get _iconSize(){return{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"}_inputGroupPrefixTemplate(){const e=this._resolvedPrefixIcon;return e?f`
      <div part="prefix" class="input-group__prefix">
        <slot name="prefix">
          <co-icon name=${e} size=${this._iconSize} aria-hidden="true"></co-icon>
        </slot>
      </div>
    `:S}_inputGroupSuffixTemplate(){const e=this._resolvedActionIcon;return e?f`
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
    `:S}_labelTemplate(){return f``}_helpTextTemplate(){return f``}_feedbackTemplate(){return f``}_onActionClick(){var t;if(this.disabled)return;const e=((t=this._inputNode)==null?void 0:t.value)??"";this.dispatchEvent(new CustomEvent("co-action",{detail:{value:e},bubbles:!0,composed:!0}))}};St([g({reflect:!0})],lt.prototype,"variant",void 0);St([g({attribute:"action-icon"})],lt.prototype,"actionIcon",void 0);St([g({attribute:"prefix-icon"})],lt.prototype,"prefixIcon",void 0);lt=St([j("co-input-pill")],lt);const Mn=M`
  :host {
    display: block;
    inline-size: 100%;
    box-sizing: border-box;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    inline-size: 100%;
    min-block-size: 0;
    margin: 0;
    padding: var(--co-space-2) var(--co-space-2);
    gap: var(--co-space-3);
    border: none;
    border-radius: var(--co-shape-radius-2xl);
    background: var(--co-color-interactive-subtle-default);
    appearance: none;
    -webkit-appearance: none;
    color: var(--co-color-text-secondary);
    text-decoration: none;
    font: inherit;
    text-align: center;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  .nav-item__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
  }

  .nav-item__label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-inline-size: 100%;
    inline-size: 100%;
    color: currentColor;
    font-family: var(--co-font-family-sans);
    font-size: min(var(--co-typography-subtitle-size), 1rem);
    font-weight: var(--co-typography-subtitle-weight);
    letter-spacing: var(--co-typography-subtitle-tracking);
    line-height: var(--co-typography-subtitle-line-height);
    text-wrap: balance;
    overflow-wrap: anywhere;
  }

  :host([selected]) .nav-item,
  :host(:not([selected]):not([disabled])) .nav-item:active {
    background: var(--co-color-interactive-subtle-active);
    color: var(--co-color-text-link);
  }

  :host([selected]) .nav-item {
    background: var(--co-color-interactive-subtle-selected);
  }

  :host(:not([selected])) .nav-item:hover {
    background: var(--co-color-interactive-subtle-hover);
    color: var(--co-color-text-link);
  }

  .nav-item:focus-visible {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: var(--co-focus-ring-offset);
  }

  :host([disabled]) .nav-item {
    background: var(--co-color-interactive-subtle-disabled);
    opacity: var(--co-opacity-disabled);
    cursor: not-allowed;
  }
`;var le=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let te=class extends K{constructor(){super(...arguments),this.value="",this.icon="",this.selected=!1,this.disabled=!1,this._controlTabIndex=-1}setFocusable(e){this._controlTabIndex=!this.disabled&&e?0:-1,this._control&&(this._control.tabIndex=this._controlTabIndex)}focus(e){var t;(t=this._control)==null||t.focus(e)}get _iconSize(){return"md"}_handleDisabledLinkClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}updated(){this._control&&(this._control.tabIndex=this.disabled?-1:this._controlTabIndex)}render(){const e=f`
      <span part="label" class="nav-item__label">
        <slot>${this.label??S}</slot>
      </span>
    `,t=f`
      <span part="icon" class="nav-item__icon" aria-hidden="true">
        <slot name="icon">
          ${this.icon?f`<co-icon name=${this.icon} size=${this._iconSize}></co-icon>`:S}
        </slot>
      </span>
    `;return this.href?f`
        <a
          part="control"
          class="nav-item"
          href=${this.href}
          target=${this.target??S}
          aria-disabled=${this.disabled?"true":S}
          aria-current=${this.selected?"page":S}
          tabindex=${this.disabled?-1:this._controlTabIndex}
          @click=${this._handleDisabledLinkClick}
        >
          ${t} ${e}
        </a>
      `:f`
      <button
        part="control"
        class="nav-item"
        type="button"
        ?disabled=${this.disabled}
        aria-current=${this.selected&&!this.href?"page":S}
        tabindex=${this.disabled?-1:this._controlTabIndex}
      >
        ${t} ${e}
      </button>
    `}};te.styles=[Mn];le([g({reflect:!0})],te.prototype,"value",void 0);le([g({reflect:!0})],te.prototype,"icon",void 0);le([g()],te.prototype,"href",void 0);le([g()],te.prototype,"target",void 0);le([g()],te.prototype,"label",void 0);le([g({type:Boolean,reflect:!0})],te.prototype,"selected",void 0);le([g({type:Boolean,reflect:!0})],te.prototype,"disabled",void 0);le([Es(".nav-item")],te.prototype,"_control",void 0);te=le([j("co-nav-rail-item")],te);const zn=M`
  /* ── Base ── */
  :host {
    display: inline-flex;
    vertical-align: middle;
    box-sizing: border-box;
    min-block-size: var(--co-control-height-md);
    padding: 0;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
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
    font-size: var(--co-font-size-small);
    min-block-size: var(--co-control-height-sm);
  }
  :host([size='sm']) .button {
    padding: var(--co-space-1) var(--co-space-3);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-h6);
    min-block-size: var(--co-control-height-lg);
  }
  :host([size='lg']) .button {
    padding: var(--co-space-3) var(--co-space-6);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
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
`;var je=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let Ae=class extends Io{constructor(){super(...arguments),this.variant="primary",this.size="md",this.loading=!1,this._handleFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleClick=()=>{this.disabled||!this.href||(this.target&&this.target!=="_self"?window.open(this.href,this.target,this.target==="_blank"?"noopener,noreferrer":""):window.location.href=this.href)}}static get styles(){return[...super.styles,zn]}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur),this.removeEventListener("click",this._handleClick)}render(){return this.href?f`
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
      `:f`
      <div part="base" class="button">
        <slot name="prefix" part="prefix"></slot>
        <slot part="label"></slot>
        <slot name="suffix" part="suffix"></slot>
        ${this.loading?f`<co-icon
              part="spinner"
              name="progress-activity"
              size=${{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]}
              animated
              aria-hidden="true"
            ></co-icon>`:""}
      </div>
    `}};je([g({reflect:!0})],Ae.prototype,"variant",void 0);je([g({reflect:!0})],Ae.prototype,"size",void 0);je([g({type:Boolean,reflect:!0})],Ae.prototype,"loading",void 0);je([g({reflect:!0})],Ae.prototype,"href",void 0);je([g({reflect:!0})],Ae.prototype,"target",void 0);Ae=je([j("co-button")],Ae);class Rn extends Nt(ki(K)){constructor(){super(),this.multipleChoice=!0}}class Lo extends Ci(wi){connectedCallback(){super.connectedCallback(),this.type="checkbox"}}class $n extends Lo{static get styles(){return[...super.styles||[],M`
        :host .choice-field__nested-checkboxes {
          display: block;
        }
        ::slotted(*) {
          padding-left: 8px;
        }
      `]}static get properties(){return{indeterminate:{type:Boolean,reflect:!0},mixedState:{type:Boolean,reflect:!0,attribute:"mixed-state"}}}get _checkboxGroupNode(){return this._parentFormGroup}get _subCheckboxes(){return this.__subCheckboxes}_storeIndeterminateState(){this._indeterminateSubStates=this._subCheckboxes.map(e=>e.checked)}_setOldState(){this.indeterminate?this._oldState="indeterminate":this._oldState=this.checked?"checked":"unchecked"}_setOwnCheckedState(){const e=this._subCheckboxes;if(!e.length)return;this.__settingOwnChecked=!0;const t=e.filter(i=>i.checked);switch(e.length-t.length){case 0:this.indeterminate=!1,this.checked=!0;break;case e.length:this.indeterminate=!1,this.checked=!1;break;default:{this.indeterminate=!0;const i=e.filter(s=>s.disabled&&s.checked===!1);this.checked=e.length-t.length-i.length===0}}this.updateComplete.then(()=>{this.__settingOwnChecked=!1})}_setBasedOnMixedState(){switch(this._oldState){case"checked":this.checked=!1,this.indeterminate=!1;break;case"unchecked":this.checked=!1,this.indeterminate=!0;break;case"indeterminate":this.checked=!0,this.indeterminate=!1;break}}__onModelValueChanged(e){if(this.disabled)return;if(e.detail.formPath[0]===this&&!this.__settingOwnChecked){const i=h=>h.every(_=>_===h[0]);this.mixedState&&!i(this._indeterminateSubStates)&&this._setBasedOnMixedState(),this.__settingOwnSubs=!0;const s=this._subCheckboxes,n=s.filter(h=>h.checked),r=s.filter(h=>h.disabled),a=s.length>0&&s.length===n.length;s.length>0&&s.length===r.length&&(this.checked=a),this.indeterminate&&this.mixedState?this._subCheckboxes.forEach((h,_)=>{h.checked=this._indeterminateSubStates[_]}):this._subCheckboxes.filter(h=>!h.disabled).forEach(h=>{h.checked=this._inputNode.checked}),this.updateComplete.then(()=>{this.__settingOwnSubs=!1})}else this._setOwnCheckedState(),this.updateComplete.then(()=>{!this.__settingOwnSubs&&!this.__settingOwnChecked&&this.mixedState&&this._storeIndeterminateState()});this.mixedState&&this._setOldState()}_afterTemplate(){return f`
      <div class="choice-field__nested-checkboxes" role="list">
        <slot></slot>
      </div>
    `}_onRequestToAddFormElement(e){var t;e.target.hasAttribute("role")||(t=e.target)==null||t.setAttribute("role","listitem"),this.__addToSubCheckboxes(e.detail.element),this._setOwnCheckedState()}_onRequestToRemoveFormElement(e){var t;e.target.getAttribute("role")==="listitem"&&((t=e.target)==null||t.removeAttribute("role")),this.__removeFromSubCheckboxes(e.detail.element)}__addToSubCheckboxes(e){e!==this&&this.contains(e)&&this.__subCheckboxes.push(e)}__removeFromSubCheckboxes(e){const t=this.__subCheckboxes.indexOf(e);t!==-1&&this.__subCheckboxes.splice(t,1)}constructor(){super(),this.indeterminate=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this.__onModelValueChanged=this.__onModelValueChanged.bind(this),this.__subCheckboxes=[],this._indeterminateSubStates=[],this.mixedState=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this.__onModelValueChanged),this.addEventListener("form-element-register",this._onRequestToAddFormElement)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this.__onModelValueChanged),this.removeEventListener("form-element-register",this._onRequestToAddFormElement)}firstUpdated(e){super.firstUpdated(e),this._setOldState(),this.indeterminate&&this._storeIndeterminateState()}updated(e){super.updated(e),(e.has("indeterminate")||e.has("checked"))&&(this._inputNode.indeterminate=this.indeterminate)}}const Dn=M`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    color: var(--co-color-text-default);
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--co-color-text-disabled);
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-1) 0;
  }

  /* Visually hide the native checkbox input (sr-only pattern) */
  slot[name='input']::slotted(*) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .checkbox__icon {
    flex: 0 0 auto;
    color: var(--co-color-text-secondary);
    transition: color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .checkbox__icon {
    color: var(--co-color-interactive-primary-default);
  }

  :host([checked]) .checkbox__icon {
    color: var(--co-color-interactive-primary-default);
  }

  :host(:focus-within) .checkbox__icon {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-shape-radius-sm);
  }

  .checkbox__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    line-height: var(--co-font-line-height-normal);
  }
`;var Mo=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let ti=class extends Lo{constructor(){super(...arguments),this.__forwardingClick=!1}static get styles(){return[...super.styles,Dn]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}render(){return f`
      <div
        part="base"
        class="checkbox"
        @mousedown=${this._onMousedown}
        @click=${this._onCheckboxClick}
      >
        <slot name="input"></slot>
        <co-icon
          part="icon"
          class="checkbox__icon"
          name=${this.checked?"check-box":"check-box-outline-blank"}
          size="sm"
          ?fill=${this.checked}
          aria-hidden="true"
        ></co-icon>
        <span part="label" class="checkbox__label">
          <slot name="label"></slot>
        </span>
      </div>
    `}_onMousedown(e){var t;((t=e.target)==null?void 0:t.slot)!=="input"&&e.preventDefault()}_onCheckboxClick(e){if(this.__forwardingClick||this.disabled)return;const t=e.target,i=this._inputNode;!i||t===i||t instanceof HTMLLabelElement||(this.__forwardingClick=!0,i.click(),i.focus(),this.__forwardingClick=!1)}};Mo([g({reflect:!0})],ti.prototype,"value",null);ti=Mo([j("co-checkbox")],ti);const Pn=M`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    color: var(--co-color-text-default);
  }

  .form-field__label {
    font-weight: var(--co-font-weight-medium);
    margin-block-end: var(--co-space-1);
  }

  .form-field__help-text {
    color: var(--co-color-text-tertiary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .checkbox-group__options {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
    padding-block: var(--co-space-2);
  }

  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    pointer-events: none;
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal, 1.25em);
  }
`,Bn=M`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    color: var(--co-color-text-default);
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--co-color-text-disabled);
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-1) 0;
  }

  /* Visually hide the native checkbox input (sr-only pattern) */
  slot[name='input']::slotted(*) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .checkbox__icon {
    flex: 0 0 auto;
    color: var(--co-color-text-secondary);
    transition: color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .checkbox__icon {
    color: var(--co-color-interactive-primary-default);
  }

  :host([checked]) .checkbox__icon,
  :host([indeterminate]) .checkbox__icon {
    color: var(--co-color-interactive-primary-default);
  }

  :host([_own-focus]) .checkbox__icon {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-shape-radius-sm);
  }

  .checkbox__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    line-height: var(--co-font-line-height-normal);
  }

  .checkbox__nested {
    padding-inline-start: var(--co-space-6);
  }
`;var zo=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let ii=class extends $n{constructor(){super(...arguments),this._onFocusOut=()=>{this.removeAttribute("_own-focus")}}static get styles(){return[...super.styles,Bn]}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this._onFocusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusout",this._onFocusOut)}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}get _indicatorIconName(){return this.indeterminate?"indeterminate-check-box":this.checked?"check-box":"check-box-outline-blank"}render(){return f`
      <div
        part="base"
        class="checkbox"
        @mousedown=${this._onMousedown}
        @click=${this._onCheckboxClick}
      >
        <slot name="input"></slot>
        <co-icon
          part="icon"
          class="checkbox__icon"
          name=${this._indicatorIconName}
          size="sm"
          ?fill=${this.checked||this.indeterminate}
          aria-hidden="true"
        ></co-icon>
        <span part="label" class="checkbox__label">
          <slot name="label"></slot>
        </span>
      </div>
      ${this._afterTemplate()}
    `}_afterTemplate(){return f`
      <div part="children" class="checkbox__nested" role="list">
        <slot></slot>
      </div>
    `}_onMousedown(e){var t;((t=e.target)==null?void 0:t.slot)!=="input"&&e.preventDefault()}_onCheckboxClick(e){const t=this._inputNode;if(!t||this.disabled||e.target===t)return;const i=this._subCheckboxes??[],n=!(i.length>0&&i.every(r=>r.checked));this.__settingOwnSubs=!0,i.filter(r=>!r.disabled).forEach(r=>{r.checked=n,r._inputNode&&(r._inputNode.checked=n)}),this.checked=n,this.indeterminate=!1,t.checked=n,this.setAttribute("_own-focus",""),this.updateComplete.then(()=>{this.__settingOwnSubs=!1,t.focus()})}};zo([g({reflect:!0})],ii.prototype,"value",null);ii=zo([j("co-checkbox-indeterminate")],ii);var Ro=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let oi=class extends Rn{constructor(){super(...arguments),this.required=!1,this._requiredValidator=new _t(void 0,{getMessage:async()=>"Please select at least one option."}),this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,Pn]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){super.firstUpdated(e),this._syncRequiredValidator()}updated(e){super.updated(e),e.has("required")&&this._syncRequiredValidator()}render(){return f`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
      <div part="group" class="checkbox-group__options" role="group">
        <slot></slot>
      </div>
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}};Ro([g({type:Boolean,reflect:!0})],oi.prototype,"required",void 0);oi=Ro([j("co-checkbox-group")],oi);class Un extends yn(K){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox")}createRenderRoot(){return this}}const Hn=o=>class extends Te(bi(Nt(ye(xi(o))))){static get properties(){return{orientation:String,selectionFollowsFocus:{type:Boolean,attribute:"selection-follows-focus"},rotateKeyboardNavigation:{type:Boolean,attribute:"rotate-keyboard-navigation"},hasNoDefaultSelected:{type:Boolean,reflect:!0,attribute:"has-no-default-selected"},_noTypeAhead:{type:Boolean}}}static get styles(){return[...super.styles||[],M`
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
        `]}_inputGroupInputTemplate(){return f`
        <div class="input-group__input">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      `}static get scopedElements(){return{...super.scopedElements,"lion-options":Un}}get slots(){return{...super.slots,input:()=>{const t=this.createScopedElement("lion-options");return t.setAttribute("data-tag-name","lion-options"),t.registrationTarget=this,t}}}get _inputNode(){return this.querySelector('[slot="input"]')}get _listboxNode(){return this._inputNode}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get _listboxSlot(){return this.shadowRoot.querySelector("slot[name=input]")}get _scrollTargetNode(){return this._listboxNode}get _activeDescendantOwnerNode(){return this._listboxNode}get activeIndex(){return this.formElements.findIndex(t=>t.active===!0)}set activeIndex(t){if(this.formElements[t]){const i=this.formElements[t];this.__setChildActive(i)}else this.__setChildActive(null)}get checkedIndex(){const t=this.formElements;return this.multipleChoice?t.filter(i=>i.checked).map(i=>t.indexOf(i)):t.indexOf(t.find(i=>i.checked))}set checkedIndex(t){this.setCheckedIndex(t)}constructor(){super(),this.hasNoDefaultSelected=!1,this.orientation="vertical",this.rotateKeyboardNavigation=!1,this.selectionFollowsFocus=!1,this._noTypeAhead=!1,this._typeAheadTimeout=1e3,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this._repropagationRole="choice-group",this._listboxReceivesNoFocus=!1,this._oldModelValue=void 0,this._listboxOnKeyDown=this._listboxOnKeyDown.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this),this._listboxOnKeyUp=this._listboxOnKeyUp.bind(this),this._onChildActiveChanged=this._onChildActiveChanged.bind(this),this.__proxyChildModelValueChanged=this.__proxyChildModelValueChanged.bind(this),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.__typedChars=[]}connectedCallback(){this._listboxNode&&(this._listboxNode.registrationTarget=this),super.connectedCallback(),this._setupListboxNode(),this.__setupEventListeners(),this.registrationComplete.then(()=>{this.__initInteractionStates()})}firstUpdated(t){super.firstUpdated(t),this.__moveOptionsToListboxNode(),this.registrationComplete.then(()=>{this._initialModelValue=this.modelValue}),new MutationObserver(()=>{this._onListboxContentChanged()}).observe(this._listboxNode,{childList:!0})}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.__requestOptionsToBeDisabled():this.__retractRequestOptionsToBeDisabled())}disconnectedCallback(){super.disconnectedCallback(),this._teardownListboxNode(),this.__teardownEventListeners()}setCheckedIndex(t){if(this.multipleChoice&&Array.isArray(t)){this._uncheckChildren(this.formElements.filter(i=>i===t)),t.forEach(i=>{this.formElements[i]&&(this.formElements[i].checked=!this.formElements[i].checked)});return}typeof t=="number"&&(t===-1&&this._uncheckChildren(),this.formElements[t]&&(this.formElements[t].disabled?this._uncheckChildren():this.multipleChoice?this.formElements[t].checked=!this.formElements[t].checked:this.formElements[t].checked=!0))}addFormElement(t,i){super.addFormElement(t,i),t.id=t.id||`${this.localName}-option-${vo()}`,this.disabled&&t.makeRequestToBeDisabled(),this.__setAttributeForAllFormElements("aria-setsize",this.formElements.length),this.formElements.forEach((s,n)=>{s.setAttribute("aria-posinset",n+1)}),this.__proxyChildModelValueChanged({target:t}),this.resetInteractionState()}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.activeIndex=-1,this.resetInteractionState()}clear(){super.clear(),this.setCheckedIndex(-1)}_handleTypeAhead(t,{setAsChecked:i}){const{key:s,code:n}=t;if(n.startsWith("Key")||n.startsWith("Digit")||n.startsWith("Numpad")){t.preventDefault(),this.__typedChars.push(s);const r=this.__typedChars.join(""),a=this.formElements.findIndex(d=>d.modelValue.value.toLowerCase().startsWith(r));a>=0&&(i&&this.setCheckedIndex(a),this.activeIndex=a),this.__pendingTypeAheadTimeout&&window.clearTimeout(this.__pendingTypeAheadTimeout),this.__pendingTypeAheadTimeout=setTimeout(()=>{this.__typedChars=[]},this._typeAheadTimeout)}}_getCheckedElements(){return this.formElements.filter(t=>t.checked)}_setupListboxNode(){this._listboxNode?this.__setupListboxNodeInteractions():this._listboxSlot&&this._listboxSlot.addEventListener("slotchange",()=>{this.__setupListboxNodeInteractions()})}_onListboxContentChanged(){}_teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener("keydown",this._listboxOnKeyDown),this._listboxNode.removeEventListener("click",this._listboxOnClick),this._listboxNode.removeEventListener("keyup",this._listboxOnKeyUp))}_getNextEnabledOption(t,i=1){return this.__getEnabledOption(t,i)}_getPreviousEnabledOption(t,i=-1){return this.__getEnabledOption(t,i)}_onChildActiveChanged({target:t}){t.active===!0&&this.__setChildActive(t)}_listboxOnKeyDown(t){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:i}=t;switch(i){case" ":case"Enter":{if(i===" "&&this._listboxReceivesNoFocus||(i===" "&&t.preventDefault(),!this.formElements[this.activeIndex])||this.formElements[this.activeIndex].disabled)return;this.formElements[this.activeIndex].href&&this.formElements[this.activeIndex].click(),this.setCheckedIndex(this.activeIndex);break}case"ArrowUp":t.preventDefault(),this.orientation==="vertical"&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowLeft":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.orientation==="horizontal"&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowDown":t.preventDefault(),this.orientation==="vertical"&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"ArrowRight":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.orientation==="horizontal"&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"Home":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.activeIndex=this._getNextEnabledOption(0,0);break;case"End":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.activeIndex=this._getPreviousEnabledOption(this.formElements.length-1,0);break;default:this._noTypeAhead||this._handleTypeAhead(t,{setAsChecked:this.selectionFollowsFocus&&!this.multipleChoice})}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(i)&&this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex)}_listboxOnClick(t){}_listboxOnKeyUp(t){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:i}=t;switch(i){case"ArrowUp":case"ArrowDown":case"Home":case"End":case"Enter":t.preventDefault()}}_onLabelClick(){this._listboxNode.focus()}_scrollIntoView(t,i){t.scrollIntoView({behavior:"smooth",block:"nearest"})}__setupEventListeners(){this._listboxNode.addEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.addEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__teardownEventListeners(){this._listboxNode.removeEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.removeEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__setChildActive(t){if(this.formElements.forEach(i=>{i.active=t===i}),!t){this._activeDescendantOwnerNode.removeAttribute("aria-activedescendant");return}this._activeDescendantOwnerNode.setAttribute("aria-activedescendant",t.id),this._scrollIntoView(t,this._scrollTargetNode)}_uncheckChildren(t=[]){const i=Array.isArray(t)?t:[t];this.formElements.forEach(s=>{i.includes(s)||(s.checked=!1)})}__onChildCheckedChanged(t){const{target:i}=t;t.stopPropagation&&t.stopPropagation(),i.checked&&!this.multipleChoice&&this._uncheckChildren(i)}__setAttributeForAllFormElements(t,i){this.formElements.forEach(s=>{s.setAttribute(t,i)})}__proxyChildModelValueChanged(t){t.stopPropagation&&t.stopPropagation(),this.__onChildCheckedChanged(t),this.requestUpdate("modelValue",this._oldModelValue),t.detail&&t.detail.formPath&&this.dispatchEvent(new CustomEvent("model-value-changed",{detail:{formPath:t.detail.formPath,isTriggeredByUser:t.detail.isTriggeredByUser||this._isHandlingUserInput,element:t.target}})),this._oldModelValue=this.modelValue}__getEnabledOption(t,i){const s=n=>i===1?n<this.formElements.length:n>=0;for(let n=t+i;s(n);n+=i)if(this.formElements[n]&&!this.formElements[n].hasAttribute("aria-hidden"))return n;if(this.rotateKeyboardNavigation){const n=i===-1?this.formElements.length-1:0;for(let r=n;s(r);r+=i)if(this.formElements[r]&&!this.formElements[r].hasAttribute("aria-hidden"))return r}return t}__moveOptionsToListboxNode(){const t=this.shadowRoot.getElementById("options-outlet");t&&(Hi(this,this._listboxNode),t.addEventListener("slotchange",()=>{Hi(this,this._listboxNode)}))}__preventScrollingWithArrowKeys(t){if(this.disabled)return;const{key:i}=t;switch(i){case"ArrowUp":case"ArrowDown":case"Home":case"End":t.preventDefault()}}__setupListboxNodeInteractions(){this._listboxNode.setAttribute("role","listbox"),this._listboxNode.setAttribute("aria-orientation",this.orientation),this._listboxNode.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this._listboxNode.setAttribute("tabindex","0"),this._listboxNode.addEventListener("click",this._listboxOnClick),this._listboxNode.addEventListener("keyup",this._listboxOnKeyUp),this._listboxNode.addEventListener("keydown",this._listboxOnKeyDown),this._scrollTargetNode.addEventListener("keydown",this.__preventScrollingWithArrowKeys)}__requestOptionsToBeDisabled(){this.formElements.forEach(t=>{t.makeRequestToBeDisabled&&t.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(t=>{t.retractRequestToBeDisabled&&t.retractRequestToBeDisabled()})}__initInteractionStates(){this.initInteractionState()}},qn=D(Hn);class Ni extends qn(mi(yi(ft(K)))){get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}class jn extends pt(Ci(vi(ye(K)))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[M`
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
      `]}get slots(){return{}}constructor(){super(),this.active=!1,this.__onClick=this.__onClick.bind(this),this.__registerEventListeners()}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="active"&&this.active!==t&&this.dispatchEvent(new Event("active-changed",{bubbles:!0}))}updated(e){super.updated(e),e.has("checked")&&this.setAttribute("aria-selected",`${this.checked}`),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}render(){return f`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}__registerEventListeners(){this.addEventListener("click",this.__onClick)}__unRegisterEventListeners(){this.removeEventListener("click",this.__onClick)}__onClick(){if(this.disabled)return;const e=this._parentFormGroup;this._isHandlingUserInput=!0,e&&e.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}}const Gn=M`
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
`;class re{static __createGlobalStyleNode(){const e=document.createElement("style");return e.setAttribute("data-overlays",""),e.textContent=Gn.cssText,document.head.appendChild(e),e}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this.__siblingsInert=!1,this.__blockingMap=new WeakMap,re.__globalStyleNode||(re.__globalStyleNode=re.__createGlobalStyleNode())}add(e){if(this.list.find(t=>e===t))throw new Error("controller instance is already added");return this.list.push(e),e}remove(e){if(!this.list.find(t=>e===t))throw new Error("could not find controller to remove");this.__list=this.list.filter(t=>t!==e),this.__shownList=this.shownList.filter(t=>t!==e)}show(e){this.list.find(t=>e===t)&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach((t,i)=>{t.elevation=i+1})}hide(e){if(!this.list.find(t=>e===t))throw new Error("could not find controller to hide");this.__shownList=this.shownList.filter(t=>t!==e)}teardown(){this.list.forEach(e=>{e.teardown()}),this.__list=[],this.__shownList=[],this.__siblingsInert=!1,re.__globalStyleNode&&(document.head.removeChild(re.__globalStyleNode),re.__globalStyleNode=void 0)}get siblingsInert(){return this.__siblingsInert}disableTrapsKeyboardFocusForAll(){this.shownList.forEach(e=>{e.trapsKeyboardFocus===!0&&e.disableTrapsKeyboardFocus&&e.disableTrapsKeyboardFocus({findNewTrap:!1})})}informTrapsKeyboardFocusGotEnabled(e){this.siblingsInert===!1&&e==="global"&&(this.__siblingsInert=!0)}informTrapsKeyboardFocusGotDisabled({disabledCtrl:e,findNewTrap:t=!0}={}){const i=this.shownList.find(s=>s!==e&&s.trapsKeyboardFocus===!0);i?t&&i.enableTrapsKeyboardFocus():this.siblingsInert===!0&&(this.__siblingsInert=!1)}requestToPreventScroll(){const{isIOS:e,isMacSafari:t}=rt;document.body.classList.add("overlays-scroll-lock"),(e||t)&&document.body.classList.add("overlays-scroll-lock-ios-fix"),e&&document.documentElement.classList.add("overlays-scroll-lock-ios-fix")}requestToEnableScroll(e){if((e?this.shownList.filter(r=>r!==e):this.shownList).some(r=>r.preventsScroll===!0))return;const{isIOS:s,isMacSafari:n}=rt;document.body.classList.remove("overlays-scroll-lock"),(s||n)&&document.body.classList.remove("overlays-scroll-lock-ios-fix"),s&&document.documentElement.classList.remove("overlays-scroll-lock-ios-fix")}requestToShowOnly(e){const t=this.shownList.filter(i=>i!==e);t.forEach(i=>i.hide()),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){this.__blockingMap.has(e)&&this.__blockingMap.get(e).forEach(i=>i.show())}}re.__globalStyleNode=void 0;function Wn(){if(!Re.has("@lion/ui::overlays::0.x")){const o=new re;Re.set("@lion/ui::overlays::0.x",o)}return Re.get("@lion/ui::overlays::0.x")}const Kn=Co(Wn);function si(){let o=document.activeElement||document.body;for(;o&&o.shadowRoot&&o.shadowRoot.activeElement;)o=o.shadowRoot.activeElement;return o}const Yi=({visibility:o,display:e})=>o!=="hidden"&&e!=="none",Yn=({display:o})=>o==="contents";function Zn(o){if(!o||!o.isConnected||!Yi(o.style))return!1;const e=window.getComputedStyle(o);return Yi(e)?Yn(e)?!0:!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length):!1}function Jn(o,e){const t=Math.max(o.tabIndex,0),i=Math.max(e.tabIndex,0);return t===0||i===0?i>t:t>i}function Xn(o,e){const t=[];for(;o.length>0&&e.length>0;)Jn(o[0],e[0])?t.push(e.shift()):t.push(o.shift());return[...t,...o,...e]}function ni(o){const e=o.length;if(e<2)return o;const t=Math.ceil(e/2),i=ni(o.slice(0,t)),s=ni(o.slice(t));return Xn(i,s)}const Bt="matches"in Element.prototype?"matches":"msMatchesSelector";function Qn(o){return o[Bt]("input, select, textarea, button, object")?o[Bt](":not([disabled])"):o[Bt]("a[href], area[href], iframe, [tabindex], [contentEditable]")}function er(o){return Qn(o)?Number(o.getAttribute("tabindex")||0):-1}function tr(o){if(o.localName==="slot")return o.assignedNodes({flatten:!0});const{children:e}=o.shadowRoot||o;return e||[]}function ir(o){return o.nodeType!==Node.ELEMENT_NODE?!1:o.localName==="slot"?!0:Zn(o)}function $o(o,e){if(!ir(o))return!1;const t=o,i=er(t);let s=i>0;i>=0&&e.push(t);const n=tr(t);for(let r=0;r<n.length;r+=1)s=$o(n[r],e)||s;return s}function Do(o){const e=[];return $o(o,e)?ni(e):e}function Ue(o,e,t={}){function i(p){return"getAttribute"in p}function s(p){if(!i(p))return null;const v=p.getAttribute("slot");let m=null;if(v){const C=t[v];C&&(m=C.filter(A=>(A==null?void 0:A.element)===p)[0]||null)}return m}const n=s(o);if(n)return n.deepContains;function r(p){if(!i(o))return;const v=o.getAttribute("slot");v&&(t[v]=t[v]||[],t[v].push({element:o,deepContains:p}))}let a=o.contains(e);if(a)return r(!0),!0;function d(p){return p.tagName==="SLOT"}function h(p){return d(p)?p.assignedElements():[]}function _(p){return p.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function b(p){let v=!1;for(let m=0;m<p.length;m+=1){const C=p[m];if(C&&(i(C)||_(C))&&Ue(C,e,t)){v=!0;break}}return v}function u(p){for(let v=0;v<p.children.length;v+=1){const m=p.children[v],C=s(m);if(C){a=C.deepContains||a;break}const A=h(m),I=[m.shadowRoot,...A];if(b(I)){a=!0;break}m.children.length>0&&u(m)}}return o instanceof HTMLElement&&o.shadowRoot&&(a=Ue(o.shadowRoot,e,t),a)?(r(!0),!0):(u(o),r(a),a)}const or={tab:9};function sr(o,e){const t=Do(o);let i;t.length>=2?i=[t[0],t[t.length-1]]:t.length===1?i=[t[0],t[0]]:i=[o,o],e.shiftKey&&i.reverse();const[s,n]=i,r=si();r===o||t.includes(r)&&n!==r||(e.preventDefault(),s.focus())}function nr(o){const e=Do(o),t=e.find(u=>u.hasAttribute("autofocus"))||o;let i,s;t===o&&(o.tabIndex=-1,o.style.setProperty("outline","none")),t.focus();function n(u){u.keyCode===or.tab&&sr(o,u)}function r(){i=document.createElement("div"),i.style.display="none",i.setAttribute("data-is-tab-detection-element",""),o.insertBefore(i,o.children[0]),s=new MutationObserver(u=>{for(const p of u)if(p.type==="childList"){const v=!Array.from(o.children).find(C=>C.hasAttribute("data-is-tab-detection-element")),m=Array.from(p.addedNodes).find(C=>C instanceof HTMLElement&&C.hasAttribute("data-is-tab-detection-element"));v&&!m&&(s.disconnect(),r())}}),s.observe(o,{childList:!0})}function a(){return i.compareDocumentPosition(document.activeElement)===Node.DOCUMENT_POSITION_PRECEDING}function d({resetToRoot:u=!1}={}){if(Ue(o,si()))return;let p;u?p=o:p=e[a()?0:e.length-1],p&&p.focus()}function h(){window.removeEventListener("focusin",h),d()}function _(){setTimeout(()=>{Ue(o,si())||d({resetToRoot:!0})}),window.addEventListener("focusin",h)}function b(){window.removeEventListener("keydown",n),window.removeEventListener("focusin",h),window.removeEventListener("focusout",_),s.disconnect(),Array.from(o.children).includes(i)&&o.removeChild(i),o.style.removeProperty("outline")}return window.addEventListener("keydown",n),window.addEventListener("focusout",_),r(),{disconnect:b}}const Zi=M`
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
`,He={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},Ut=new WeakMap;function rr(o){return Array.from(o.cssRules).map(e=>e.cssText).join("")}function ar(o,e,{teardown:t=!1}={}){const i=o===document?document.body:o,s=e.cssText||rr(e);if(t){const n=Array.from(i.querySelectorAll("style"));for(const r of n)if(r.textContent===s){r.remove();break}}else{const n=document.createElement("style"),r=window.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=s,i.appendChild(n)}}function lr(o,e,{teardown:t=!1}={}){let i=!1;o&&!Ut.has(o)&&Ut.set(o,[]);const s=Ut.get(o)??[],n=s.find(r=>e===r);return n&&t?s.splice(s.indexOf(e),1):!n&&!t?s.push(e):(n&&!t||!n&&t)&&(i=!0),{haltFurtherExecution:i}}function dr(o,e,{teardown:t=!1}={}){const{haltFurtherExecution:i}=lr(o,e,{teardown:t});if(i)return;if(!He.supportsAdoptingStyleSheets||rt.isIOS){ar(o,e,{teardown:t});return}const s=e instanceof CSSStyleSheet?e:e.styleSheet;if(!s)throw new Error("Please provide a CSSResultOrNative style");t?o.adoptedStyleSheets.includes(s)&&o.adoptedStyleSheets.splice(o.adoptedStyleSheets.indexOf(s),1):o.adoptedStyleSheets=[...o.adoptedStyleSheets,s]}function cr(o,e,{teardown:t=!1}={}){for(const i of e)He.adoptStyle(o,i,{teardown:t})}He.adoptStyle=dr;He.adoptStyles=cr;function hr({wrappingDialogNodeL1:o,contentWrapperNodeL2:e,contentNodeL3:t}){if(!(e.isConnected||t.isConnected))throw new Error('[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.');let i;const s=document.createComment("tempMarker");e.isConnected?(i=e.parentElement||e.getRootNode(),i.insertBefore(s,e),o.appendChild(e)):t.assignedSlot?(i=t.assignedSlot.parentElement||t.assignedSlot.getRootNode(),i.insertBefore(s,t.assignedSlot),o.appendChild(e),e.appendChild(t.assignedSlot)):(i=t.parentElement||t.getRootNode(),i.insertBefore(s,t),o.appendChild(e),e.appendChild(t)),i.insertBefore(o,s),i==null||i.removeChild(s)}async function ur(){return x(()=>import("./popper.CBQhmXeE.js"),[])}const Ji=new WeakMap;var ht,ri,De;const ze=class ze extends EventTarget{constructor(t={},i=Kn){super();ee(this,ht);ee(this,De,t=>{t.key!=="Escape"||t.composedPath().includes(this.contentNode)||Ue(this.contentNode,t.target)||this.hide()});this.manager=i,this.__sharedConfig=t,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:t.contentNode,contentWrapperNode:t.contentWrapperNode,invokerNode:t.invokerNode,backdropNode:t.backdropNode,referenceNode:void 0,elementToFocusAfterHide:t.invokerNode,inheritsReferenceWidth:"none",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:"description",visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:"top",strategy:"fixed",modifiers:[{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:8}},{name:"flip",options:{boundariesElement:"viewport",padding:16}},{name:"offset",enabled:!0,options:{offset:[0,8]}},{name:"arrow",enabled:!1}]},viewportConfig:{placement:"center"},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(t),this.__hasActiveTrapsKeyboardFocus=!1,this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){var t;return(t=this.config)==null?void 0:t.placementMode}get invokerNode(){var t;return(t=this.config)==null?void 0:t.invokerNode}get referenceNode(){var t;return(t=this.config)==null?void 0:t.referenceNode}get contentNode(){var t;return(t=this.config)==null?void 0:t.contentNode}get contentWrapperNode(){var t;return this.__contentWrapperNode||((t=this.config)==null?void 0:t.contentWrapperNode)}get backdropNode(){var t;return this.__backdropNode||((t=this.config)==null?void 0:t.backdropNode)}get elementToFocusAfterHide(){var t;return this.__elementToFocusAfterHide||((t=this.config)==null?void 0:t.elementToFocusAfterHide)}get hasBackdrop(){var t;return!!this.backdropNode||((t=this.config)==null?void 0:t.hasBackdrop)}get isBlocking(){var t;return(t=this.config)==null?void 0:t.isBlocking}get preventsScroll(){var t;return(t=this.config)==null?void 0:t.preventsScroll}get trapsKeyboardFocus(){var t;return(t=this.config)==null?void 0:t.trapsKeyboardFocus}get hidesOnEsc(){var t;return(t=this.config)==null?void 0:t.hidesOnEsc}get hidesOnOutsideClick(){var t;return(t=this.config)==null?void 0:t.hidesOnOutsideClick}get hidesOnOutsideEsc(){var t;return(t=this.config)==null?void 0:t.hidesOnOutsideEsc}get inheritsReferenceWidth(){var t;return(t=this.config)==null?void 0:t.inheritsReferenceWidth}get handlesAccessibility(){var t;return(t=this.config)==null?void 0:t.handlesAccessibility}get isTooltip(){var t;return(t=this.config)==null?void 0:t.isTooltip}get isAlertDialog(){var t;return(t=this.config)==null?void 0:t.isAlertDialog}get invokerRelation(){var t;return(t=this.config)==null?void 0:t.invokerRelation}get popperConfig(){var t;return(t=this.config)==null?void 0:t.popperConfig}get viewportConfig(){var t;return(t=this.config)==null?void 0:t.viewportConfig}get visibilityTriggerFunction(){var t;return(t=this.config)==null?void 0:t.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(t){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+t}`}get elevation(){var t;return Number((t=this.contentWrapperNode)==null?void 0:t.style.zIndex)}updateConfig(t){var i,s,n;this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...t,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...t.popperConfig||{},modifiers:[...((i=this._defaultConfig.popperConfig)==null?void 0:i.modifiers)||[],...((s=this.__sharedConfig.popperConfig)==null?void 0:s.modifiers)||[],...((n=t.popperConfig)==null?void 0:n.modifiers)||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,ne(this,ht,ri).call(this)||this.manager.add(this)}__validateConfiguration(t){if(!t.placementMode)throw new Error('[OverlayController] You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(t.placementMode))throw new Error(`[OverlayController] "${t.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!t.contentNode)throw new Error("[OverlayController] You need to provide a .contentNode");if(t.isTooltip&&!t.handlesAccessibility)throw new Error("[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled")}_init(){this.__contentHasBeenInitialized||(this.__initContentDomStructure(),this.__contentHasBeenInitialized=!0),this.contentWrapperNode.removeAttribute("style"),this.contentWrapperNode.removeAttribute("class"),this.placementMode==="local"&&(ze.popperModule||(ze.popperModule=ur())),this.__handleOverlayStyles({phase:"init"}),this._handleFeatures({phase:"init"})}__handleOverlayStyles({phase:t}){var s;const i=(s=this.contentWrapperNode)==null?void 0:s.getRootNode();t==="init"?He.adoptStyle(i,Zi):t==="teardown"&&He.adoptStyle(i,Zi,{teardown:!0})}__initContentDomStructure(){var s,n;const t=document.createElement((s=this.config)!=null&&s._noDialogEl?"div":"dialog");t.setAttribute("role","none"),t.setAttribute("data-overlay-outer-wrapper",""),t.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=t,(n=this.config)!=null&&n.contentWrapperNode||(this.__contentWrapperNode=document.createElement("div")),this.contentWrapperNode.setAttribute("data-id","content-wrapper"),hr({wrappingDialogNodeL1:t,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),t.open=!0,this.isTooltip&&t.setAttribute("tabindex","-1"),this.__wrappingDialogNode.style.display="none",this.contentWrapperNode.style.zIndex="1",getComputedStyle(this.contentNode).position==="absolute"&&(this.contentNode.style.position="static"),HTMLDialogElement&&"closedBy"in HTMLDialogElement.prototype?t.closedBy="none":(t.addEventListener("keydown",r=>{r.key==="Escape"&&r.preventDefault()}),t.addEventListener("keyup",r=>{r.key==="Escape"&&r.preventDefault()}),t.addEventListener("cancel",r=>{r.stopPropagation()}),t.addEventListener("close",r=>{r.stopPropagation()}))}_handleZIndex({phase:t}){if(this.placementMode==="local"&&t==="setup"){const i=Number(getComputedStyle(this.contentNode).zIndex);(i<1||Number.isNaN(i))&&(this.contentNode.style.zIndex="1")}}__setupTeardownAccessibility({phase:t}){if(t==="init"){this.__storeOriginalAttrs(this.contentNode,["role","id"]);const i=this.trapsKeyboardFocus;if(this.invokerNode){const s=["aria-labelledby","aria-describedby"];i||s.push("aria-expanded"),this.__storeOriginalAttrs(this.invokerNode,s)}this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation==="label"?"aria-labelledby":"aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&!i&&this.invokerNode.setAttribute("aria-expanded",`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute("role","alertdialog"):this.contentNode.getAttribute("role")||this.contentNode.setAttribute("role","dialog"))}else t==="teardown"&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(t,i){const s={};i.forEach(n=>{s[n]=t.getAttribute(n)}),this.__originalAttrs.set(t,s)}__restoreOriginalAttrs(){for(const[t,i]of this.__originalAttrs)Object.entries(i).forEach(([s,n])=>{n!==null?t.setAttribute(s,n):t.removeAttribute(s)});this.__originalAttrs.clear()}get isShown(){var t;return((t=this.__wrappingDialogNode)==null?void 0:t.style.display)!=="none"}async show(t=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(s=>{this._showResolve=s}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}const i=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(i),i.defaultPrevented||("HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display="",this._keepBodySize({phase:"before-show"}),await this._handleFeatures({phase:"show"}),this._keepBodySize({phase:"show"}),await this._handlePosition({phase:"show"}),this.__elementToFocusAfterHide=t,this.dispatchEvent(new Event("show")),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:t}){if(this.placementMode==="global"){const i=`overlays__overlay-container--${this.viewportConfig.placement}`;t==="show"?(this.contentWrapperNode.classList.add("overlays__overlay-container"),this.contentWrapperNode.classList.add(i),this.contentNode.classList.add("overlays__overlay")):t==="hide"&&(this.contentWrapperNode.classList.remove("overlays__overlay-container"),this.contentWrapperNode.classList.remove(i),this.contentNode.classList.remove("overlays__overlay"))}else this.placementMode==="local"&&t==="show"&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:t}){var i,s;if(this.preventsScroll)switch(t){case"before-show":this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case"show":{if(window.getComputedStyle){const h=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(h.getPropertyValue("margin-right"),10),this.__bodyMarginBottom=parseInt(h.getPropertyValue("margin-bottom"),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;const n=document.body.clientWidth-this.__bodyClientWidth,r=document.body.clientHeight-this.__bodyClientHeight,a=this.__bodyMarginRight+n,d=this.__bodyMarginBottom+r;(i=window.CSS)!=null&&i.number&&((s=document.body.attributeStyleMap)!=null&&s.set)?(document.body.attributeStyleMap.set("margin-right",CSS.px(a)),document.body.attributeStyleMap.set("margin-bottom",CSS.px(d))):(document.body.style.marginRight=`${a}px`,document.body.style.marginBottom=`${d}px`);break}case"hide":document.body.style.marginRight=this.__bodyMarginRightInline||"",document.body.style.marginBottom=this.__bodyMarginBottomInline||"";break}}async hide(){if(this._hideComplete=new Promise(i=>{this._hideResolve=i}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.manager.hide(this),!this.isShown){this._hideResolve();return}const t=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),"HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display="none",this._handleFeatures({phase:"hide"}),this._keepBodySize({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus()),this._hideResolve()}async transitionHide(t){}async _transitionHide({backdropNode:t,contentNode:i}){await this.transitionHide({backdropNode:t,contentNode:i}),this._handlePosition({phase:"hide"}),t&&t.classList.remove("overlays__backdrop--animation-in")}async transitionShow(t){}async _transitionShow(t){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),t.backdropNode&&t.backdropNode.classList.add("overlays__backdrop--animation-in")}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:"nearest"})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:t}){this._handleZIndex({phase:t}),this.preventsScroll&&this._handlePreventsScroll({phase:t}),this.isBlocking&&this._handleBlocking({phase:t}),this.hasBackdrop&&this._handleBackdrop({phase:t}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:t}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:t}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:t}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:t}),this.handlesAccessibility&&this._handleAccessibility({phase:t}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:t})}_handleVisibilityTriggers({phase:t}){typeof this.visibilityTriggerFunction=="function"&&(t==="init"&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:t,controller:this})),this.__visibilityTriggerHandler[t]&&this.__visibilityTriggerHandler[t]())}_handlePreventsScroll({phase:t}){switch(t){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll();break;case"teardown":this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:t}){switch(t){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:t}){var i;switch(t){case"init":{this.__backdropInitialized||((i=this.config)!=null&&i.backdropNode||(this.__backdropNode=document.createElement("div"),this.__backdropNode.classList.add("overlays__backdrop")),this.__wrappingDialogNode.prepend(this.backdropNode),this.__backdropInitialized=!0);break}case"show":this.config.hasBackdrop&&this.backdropNode.classList.add("overlays__backdrop--visible"),this.__hasActiveBackdrop=!0;break;case"hide":case"teardown":this.backdropNode.classList.remove("overlays__backdrop--visible"),this.__hasActiveBackdrop=!1;break}}get hasActiveTrapsKeyboardFocus(){return this.__hasActiveTrapsKeyboardFocus}_handleTrapsKeyboardFocus({phase:t}){t==="show"?("showModal"in this.__wrappingDialogNode&&(this.__wrappingDialogNode.close(),this.__wrappingDialogNode.showModal()),this.enableTrapsKeyboardFocus()):(t==="hide"||t==="teardown")&&this.disableTrapsKeyboardFocus()}enableTrapsKeyboardFocus(){if(this.__hasActiveTrapsKeyboardFocus)return;this.manager&&this.manager.disableTrapsKeyboardFocusForAll(),!!this.contentNode.shadowRoot&&console.warn("[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root"),this._containFocusHandler=nr(this.contentNode),this.__hasActiveTrapsKeyboardFocus=!0,this.manager&&this.manager.informTrapsKeyboardFocusGotEnabled(this.placementMode)}disableTrapsKeyboardFocus({findNewTrap:t=!0}={}){this.__hasActiveTrapsKeyboardFocus&&(this._containFocusHandler&&(this._containFocusHandler.disconnect(),this._containFocusHandler=void 0),this.__hasActiveTrapsKeyboardFocus=!1,this.manager&&this.manager.informTrapsKeyboardFocusGotDisabled({disabledCtrl:this,findNewTrap:t}))}__cancelHandler(t){t.preventDefault()}__escKeyHandler(t){if(t.key!=="Escape"||Ji.has(t)||!this.isShown&&this.__escKeyHandlerCalled)return;(t.composedPath().includes(this.contentNode)||this.invokerNode&&t.composedPath().includes(this.invokerNode)||Ue(this.contentNode,t.target))&&(this.__escKeyHandlerCalled=!0,this.hide(),Ji.set(t,this))}_handleHidesOnEsc({phase:t}){t==="init"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)),t==="show"&&(this.__escKeyHandlerCalled=!1),t==="teardown"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:t}){t==="init"?(document.removeEventListener("keyup",B(this,De)),document.addEventListener("keyup",B(this,De))):t==="teardown"&&document.removeEventListener("keyup",B(this,De))}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode==="global")return;const t=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case"max":this.contentWrapperNode.style.maxWidth=t;break;case"full":this.contentWrapperNode.style.width=t;break;case"min":this.contentWrapperNode.style.minWidth=t,this.contentWrapperNode.style.width="auto";break}}_handleHidesOnOutsideClick({phase:t}){const i=t==="show"?"addEventListener":"removeEventListener";if(t==="show"){let s=!1,n=!1;this.__onInsideMouseDown=()=>{s=!0},this.__onInsideMouseUp=()=>{n=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!s&&!n&&this.hide(),s=!1,n=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[i]("mousedown",this.__onInsideMouseDown,!0),this.contentWrapperNode[i]("mouseup",this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[i]("mousedown",this.__onInsideMouseDown,!0),this.invokerNode[i]("mouseup",this.__onInsideMouseUp,!0)),document.documentElement[i]("mouseup",this.__onDocumentMouseUp,!0),window[i]("blur",this.__onWindowBlur)}_handleAccessibility({phase:t}){(t==="init"||t==="teardown")&&this.__setupTeardownAccessibility({phase:t});const i=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!i&&this.invokerNode.setAttribute("aria-expanded",`${t==="show"}`)}teardown(){this.__handleOverlayStyles({phase:"teardown"}),this._handleFeatures({phase:"teardown"}),ne(this,ht,ri).call(this)&&this.manager.remove(this)}async __createPopperInstance(){var t;if(this._popper&&(this._popper.destroy(),this._popper=void 0),ze.popperModule!==void 0){const{createPopper:i}=await ze.popperModule;this._popper=i(this._referenceNode,this.contentWrapperNode,{...(t=this.config)==null?void 0:t.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute("aria-disabled")==="true":!1}};ht=new WeakSet,ri=function(){return!!this.manager.list.find(t=>this===t)},De=new WeakMap;let Ct=ze;Ct.popperModule=void 0;function Po(o,e){if(typeof o!="object"||typeof e!="object"||o===null||e===null)return o===e;const t=Object.keys(o),i=Object.keys(e);if(t.length!==i.length)return!1;const s=n=>Po(o[n],e[n]);return t.every(s)}const pr=o=>{var e,t,i;return i=class extends o{constructor(){super();ee(this,t,!1);this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}static get properties(){return{opened:{type:Boolean,reflect:!0}}}get config(){return this.__config}set config(r){const a=!Po(this.config,r);this._overlayCtrl&&a&&this._overlayCtrl.updateConfig(r),this.__config=r,this._overlayCtrl&&a&&this.__syncToOverlayController()}requestUpdate(r,a,d){super.requestUpdate(r,a,d),r==="opened"&&this.opened!==a&&this.dispatchEvent(new CustomEvent("opened-changed",{detail:{opened:this.opened}}))}_defineOverlay({contentNode:r,invokerNode:a,referenceNode:d,backdropNode:h,contentWrapperNode:_}){var u,p,v,m;const b=this._defineOverlayConfig()||{};return new Ct({contentNode:r,invokerNode:a,referenceNode:d,backdropNode:h,contentWrapperNode:_,...b,...this.config,popperConfig:{...b.popperConfig||{},...((u=this.config)==null?void 0:u.popperConfig)||{},modifiers:[...((p=b.popperConfig)==null?void 0:p.modifiers)||[],...((m=(v=this.config)==null?void 0:v.popperConfig)==null?void 0:m.modifiers)||[]]}})}_defineOverlayConfig(){return{placementMode:"local"}}updated(r){super.updated(r),r.has("opened")&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=r=>{r.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(B(this,t)||(this._setupOverlayCtrl(),oe(this,t,!0)))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),oe(this,t,!1))}get _overlayInvokerNode(){return Array.from(this.children).find(r=>r.slot==="invoker")}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||(this.__cachedOverlayBackdropNode=Array.from(this.children).find(r=>r.slot==="backdrop")),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||(this._cachedOverlayContentNode=Array.from(this.children).find(r=>r.slot==="content")||this.config.contentNode),this._cachedOverlayContentNode}get _overlayContentWrapperNode(){var r;return(r=this.shadowRoot)==null?void 0:r.querySelector("#overlay-content-node-wrapper")}_setupOverlayCtrl(){if(B(this,t))return;const r={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(r):this._overlayCtrl=this._defineOverlay(r),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(r){this.__blockSyncToOverlayCtrl=!0,this.opened=r,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=r=>{const a=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(a),a.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),r.preventDefault())},this.__onBeforeHide=r=>{const a=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(a),a.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),r.preventDefault())},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){const r=this._overlayCtrl;r.placementMode==="local"&&r._popper&&r._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}},t=new WeakMap,W(i,"enabledWarnings",((e=Ie(i,i,"enabledWarnings"))==null?void 0:e.filter(r=>r!=="change-in-update"))||[]),i},Bo=D(pr);function fr(){return{visibilityTriggerFunction:({controller:o})=>{function e(){o._hasDisabledInvoker()||o.toggle()}return{init:()=>{var t;(t=o.invokerNode)==null||t.addEventListener("click",e)},teardown:()=>{var t;(t=o.invokerNode)==null||t.removeEventListener("click",e)}}}}}const Uo=()=>({placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:"bottom-start",modifiers:[{name:"offset",enabled:!1}]},handlesAccessibility:!0,...fr()}),Ke=new WeakMap;function Ho(o,e){Array.from(o.childNodes).forEach(t=>{if(t.nodeName==="#text"){const i=new RegExp(`^(.*?)(${e})(.*)$`,"i"),s=t.nodeValue.match(i);if(s){const n=document.createTextNode(s[1]);o.appendChild(n);const r=document.createElement("b");r.textContent=s[2],o.appendChild(r);const a=document.createTextNode(s[3]);o.appendChild(a),o.removeChild(t),Ke.set(o,()=>{o.appendChild(t),o.contains(n)&&n.parentNode!==null&&n.parentNode.removeChild(n),o.contains(r)&&r.parentNode!==null&&r.parentNode.removeChild(r),o.contains(a)&&a.parentNode!==null&&a.parentNode.removeChild(a)})}}else Ho(t,e)})}function qo(o){Ke.has(o)&&Ke.get(o)(),Array.from(o.childNodes).forEach(e=>{e.nodeName==="#text"?Ke.has(e)&&Ke.get(e)():qo(e)})}class Si extends $e{static get validatorName(){return"MatchesOption"}execute(e,t,i){return(i==null?void 0:i.node.modelValue)instanceof Se}}function bt(o){return Array.isArray(o)?o:[o]}const _r=o=>class extends Nt(o){static get properties(){return{allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},modelValue:{type:Object}}}get modelValue(){return this.__getChoicesFrom(super.modelValue)}set modelValue(t){if(super.modelValue=t,t==null||t==="")this._customChoices=new Set;else if(this.allowCustomChoice){const i=this.modelValue;this._customChoices=new Set(bt(t)),this.requestUpdate("modelValue",i)}}get formattedValue(){return this.__getChoicesFrom(super.formattedValue)}set formattedValue(t){if(super.formattedValue=t,t==null)this._customChoices=new Set;else if(this.allowCustomChoice){const i=this.modelValue;this._customChoices=new Set(bt(t).map(s=>{var n;return((n=this.formElements.find(r=>r.formattedValue===s))==null?void 0:n.modelValue)||s})),this.requestUpdate("modelValue",i)}}get serializedValue(){return this.__getChoicesFrom(super.serializedValue)}set serializedValue(t){if(super.serializedValue=t,t==null)this._customChoices=new Set;else if(this.allowCustomChoice){const i=this.modelValue;this._customChoices=new Set(bt(t).map(s=>{var n;return((n=this.formElements.find(r=>r.serializedValue===s))==null?void 0:n.modelValue)||s})),this.requestUpdate("modelValue",i)}}get customChoices(){if(!this.allowCustomChoice)return[];const t=this._getCheckedElements();return Array.from(this._customChoices).filter(i=>!t.some(s=>s.choiceValue===i))}constructor(){super(),this.allowCustomChoice=!1,this._customChoices=new Set}__getChoicesFrom(t){const i=t;return this.allowCustomChoice?this.multipleChoice?[...bt(i),...this.customChoices]:i===""?this._customChoices.values().next().value||"":i:i}_isEmpty(){return super._isEmpty()&&this._customChoices.size===0}clear(){this._customChoices=new Set,super.clear()}parser(t){return this.allowCustomChoice&&Array.isArray(t)?t.filter(i=>i.trim()!==""):t}},mr=D(_r),Ht=new WeakMap;class br extends So(Bo(mr(Ni))){static get properties(){return{autocomplete:{type:String,reflect:!0},matchMode:{type:String,attribute:"match-mode"},showAllOnEmpty:{type:Boolean,attribute:"show-all-on-empty"},requireOptionMatch:{type:Boolean},allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},__shouldAutocompleteNextUpdate:Boolean}}static get styles(){return[...super.styles,M`
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
      `]}static get localizeNamespaces(){return[{"lion-combobox":e=>{switch(e){case"bg-BG":case"bg":return x(()=>import("./bg.CnMxkYth.js"),[]);case"cs-CZ":case"cs":return x(()=>import("./cs.wLKWYoEd.js"),[]);case"de-AT":case"de-DE":case"de":return x(()=>import("./de.BMTIiI_u.js"),[]);case"en-AU":case"en-GB":case"en-PH":case"en-US":case"en":return x(()=>import("./en.bt6AHwUY.js"),[]);case"es-ES":case"es":return x(()=>import("./es.DtqAq6rp.js"),[]);case"fr-FR":case"fr-BE":case"fr":return x(()=>import("./fr.TvxLRXi9.js"),[]);case"hu-HU":case"hu":return x(()=>import("./hu.LTktcuIp.js"),[]);case"it-IT":case"it":return x(()=>import("./it.CLQp6VRo.js"),[]);case"nl-BE":case"nl-NL":case"nl":return x(()=>import("./nl.BPWGiqq3.js"),[]);case"pl-PL":case"pl":return x(()=>import("./pl.C-Y5rsX-.js"),[]);case"ro-RO":case"ro":return x(()=>import("./ro.DQbjJcYj.js"),[]);case"ru-RU":case"ru":return x(()=>import("./ru.DWmtva8q.js"),[]);case"sk-SK":case"sk":return x(()=>import("./sk.b2xDu6DA.js"),[]);case"uk-UA":case"uk":return x(()=>import("./uk.CHbv7RzQ.js"),[]);case"zh-CN":case"zh":return x(()=>import("./zh.CKc3I4YQ.js"),[]);default:return x(()=>import("./en.bt6AHwUY.js"),[])}}},...super.localizeNamespaces]}get modelValue(){const e=super.modelValue;return e!==""?e:this.parser(this.value)}set modelValue(e){super.modelValue=e}get value(){var e;return((e=this._inputNode)==null?void 0:e.value)||this.__value||""}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}reset(){super.reset(),this.multipleChoice||(this.value=this._initialModelValue),this._resetListboxOptions()}_resetListboxOptions(){this.formElements.forEach((e,t)=>{this._unhighlightMatchedOption(e),!this.showAllOnEmpty||!this.opened?e.style.display="none":(e.style.display="",e.setAttribute("aria-posinset",`${t+1}`),e.setAttribute("aria-setsize",`${this.formElements.length}`),e.removeAttribute("aria-hidden"))})}_inputGroupInputTemplate(){return f`
      <div class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_overlayListboxTemplate(){return f`
      <div
        id="overlay-content-node-wrapper"
        role="dialog"
        aria-label="${this.msgLit("lion-combobox:optionsPopup")}"
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_groupTwoTemplate(){return f` ${super._groupTwoTemplate()} ${this._overlayListboxTemplate()}`}get slots(){return{...super.slots,input:()=>{if(this._ariaVersion==="1.1"){const e=document.createElement("div"),t=document.createElement("input");return t.style.cssText=`
          border: none;
          outline: none;
          width: 100%;
          height: 100%;
          font: inherit;
          background: inherit;
          color: inherit;
          border-radius: inherit;
          box-sizing: border-box;
          padding: 0;`,e.appendChild(t),e}return document.createElement("input")},listbox:super.slots.input}}get _comboboxNode(){return this.querySelector('[slot="input"]')}get _selectionDisplayNode(){return this.querySelector('[slot="selection-display"]')}get _inputNode(){return this._ariaVersion==="1.1"&&this._comboboxNode?this._comboboxNode.querySelector("input")||this._comboboxNode:this._comboboxNode}get _overlayContentNode(){return this._listboxNode}get _overlayReferenceNode(){return this.shadowRoot.querySelector(".input-group__container")}get _overlayInvokerNode(){return this._inputNode}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(e=>e.slot==="listbox")}get _activeDescendantOwnerNode(){return this._inputNode}get requireOptionMatch(){return!this.allowCustomChoice}set requireOptionMatch(e){this.allowCustomChoice=!e}constructor(){super(),this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.requireOptionMatch=!0,this.rotateKeyboardNavigation=!0,this.selectionFollowsFocus=!0,this.defaultValidators.push(new Si),this._ariaVersion=rt.isChromium?"1.1":"1.0",this._listboxReceivesNoFocus=!0,this._noTypeAhead=!0,this.__prevCboxValueNonSelected="",this.__prevCboxValue="",this.__hadUserIntendsInlineAutoFill=!1,this.__listboxContentChanged=!1,this._onKeyUp=this._onKeyUp.bind(this),this._textboxOnClick=this._textboxOnClick.bind(this),this._textboxOnInput=this._textboxOnInput.bind(this),this._textboxOnKeydown=this._textboxOnKeydown.bind(this)}connectedCallback(){super.connectedCallback(),this._selectionDisplayNode&&(this._selectionDisplayNode.comboboxElement=this),(this.disabled||this.readOnly)&&this.__setComboboxDisabledAndReadOnly()}requestUpdate(e,t,i){if(super.requestUpdate(e,t,i),(e==="disabled"||e==="readOnly")&&this.__setComboboxDisabledAndReadOnly(),e==="modelValue"&&this.modelValue&&this.modelValue!==t&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue))if(this.multipleChoice)this._syncToTextboxMultiple(this.modelValue,this._oldModelValue);else{const s=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]);this._setTextboxValue(s)}}parser(e){return this.requireOptionMatch&&this.checkedIndex===-1&&e!==""&&!Array.isArray(e)?new Se(e):super.parser(e)}__unsyncCheckedIndexOnInputChange(){const e=this._autoSelectCondition(),t=this.formElements[this.checkedIndex];if(!this.multipleChoice&&!e&&t){const i=this._getTextboxValueFromOption(t);this._inputNode.value.startsWith(i)||this.setCheckedIndex(-1)}}updated(e){var t;super.updated(e),e.has("__shouldAutocompleteNextUpdate")&&this.__unsyncCheckedIndexOnInputChange(),e.has("opened")&&(this.opened&&(this.activeIndex=-1),!this.opened&&e.get("opened")!==void 0&&(this.__onOverlayClose(),this.activeIndex=-1)),e.has("autocomplete")&&this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`),e.has("__shouldAutocompleteNextUpdate")&&this.__shouldAutocompleteNextUpdate&&(this._handleAutocompletion(),this.__shouldAutocompleteNextUpdate=!1,this.__listboxContentChanged=!1),typeof((t=this._selectionDisplayNode)==null?void 0:t.onComboboxElementUpdated)=="function"&&this._selectionDisplayNode.onComboboxElementUpdated(e)}matchCondition(e,t){let i=-1;const s=this._getTextboxValueFromOption(e);return typeof s=="string"&&typeof t=="string"&&(i=s.toLowerCase().indexOf(t.toLowerCase())),this.matchMode==="all"?i>-1:i===0}_showOverlayCondition({lastKey:e}){const t=["Tab","Escape"],i=["Enter"];return this.disabled||this.readOnly||e&&(t.includes(e)||!this.multipleChoice&&i.includes(e))?!1:this.filled||this.showAllOnEmpty||!this.filled&&this.multipleChoice&&this.__prevCboxValueNonSelected?!0:this.opened}_getTextboxValueFromOption(e){return e?e.choiceValue:this.modelValue instanceof Se?this.modelValue.viewValue:this.modelValue}_onListboxContentChanged(){super._onListboxContentChanged(),this.__shouldAutocompleteNextUpdate=!0,this.__listboxContentChanged=!0}_textboxOnInput(e){this.__shouldAutocompleteNextUpdate=!0,this.opened=this._showOverlayCondition({})}_textboxOnKeydown(e){e.key==="Tab"&&(this.opened=!1)}_listboxOnClick(e){super._listboxOnClick(e),this._inputNode.focus(),this.multipleChoice?(this._inputNode.value="",this._resetListboxOptions()):(this.activeIndex=-1,this.opened=!1)}_setTextboxValue(e){this._inputNode&&this._inputNode.value!==e&&(this._inputNode.value=e)}__onOverlayClose(){this.multipleChoice?this._syncToTextboxMultiple(this.modelValue,this._oldModelValue):this.checkedIndex!==-1&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue,{phase:"overlay-close"})&&(this._inputNode.value=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]))}_repropagationCondition(e){return super._repropagationCondition(e)||this.formElements.every(t=>!t.checked)}_onFilterMatch(e,t){this._highlightMatchedOption(e,t),e.style.display=""}_highlightMatchedOption(e,t){if(Ho(e,t),e.textContent){const i=document.createElement("span");i.setAttribute("aria-label",e.textContent.replace(/\s+/g," ")),Array.from(e.childNodes).forEach(s=>{i.appendChild(s)}),e.appendChild(i),Ht.set(e,()=>{Array.from(i.childNodes).forEach(s=>{e.appendChild(s)}),e.contains(i)&&e.removeChild(i)})}}_onFilterUnmatch(e,t,i){this._unhighlightMatchedOption(e),e.style.display="none"}_unhighlightMatchedOption(e){qo(e),Ht.has(e)&&Ht.get(e)()}__computeUserIntendsAutoFill({prevValue:e,curValue:t}){const i=e.length<t.length,s=e.length&&t.length&&e[0].toLowerCase()!==t[0].toLowerCase();return i||s||this.__listboxContentChanged&&this.__hadUserIntendsInlineAutoFill}_handleAutocompletion(){const t=!(this._inputNode.selectionStart===this._inputNode.selectionEnd)&&this._inputNode.value.length!==this._inputNode.selectionStart,i=this._inputNode.value,s=this._inputNode.selectionStart,n=t&&s?i.slice(0,s):i,r=t||this.__hadSelectionLastAutofill?this.__prevCboxValueNonSelected:this.__prevCboxValue,a=!n,d=[];let h=!1;const _=this.__computeUserIntendsAutoFill({prevValue:r,curValue:n}),b=this.autocomplete==="both"||this.autocomplete==="inline",u=this._autoSelectCondition(),p=this.autocomplete==="inline"||this.autocomplete==="none";this.formElements.forEach((m,C)=>{const A=this.matchCondition(m,n);let I=!1;if(a?I=this.showAllOnEmpty:I=p||A,u&&!h&&A&&!m.disabled){const R=()=>{this.activeIndex=C,this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex),h=!0};if(_)if(b){const O=this._getTextboxValueFromOption(m);typeof O=="string"&&O!==""&&typeof n=="string"&&n!==""&&O.toLowerCase().indexOf(n.toLowerCase())===0&&(this.__textboxInlineComplete(m),R())}else R()}m.onFilterUnmatch?m.onFilterUnmatch(n,r):this._onFilterUnmatch(m,n,r),m.setAttribute("aria-hidden","true"),m.removeAttribute("aria-posinset"),m.removeAttribute("aria-setsize"),I&&(d.push(m),m.onFilterMatch?m.onFilterMatch(n):this._onFilterMatch(m,n))});const v=d.length;d.forEach((m,C)=>{m.setAttribute("aria-posinset",`${C+1}`),m.setAttribute("aria-setsize",`${v}`),m.removeAttribute("aria-hidden")}),u&&!h&&!this.multipleChoice&&(this.setCheckedIndex(-1),r!==n&&(this.activeIndex=-1),this.modelValue=this.parser(i)),this.__prevCboxValueNonSelected=n,this.__prevCboxValue=this._inputNode.value,this.__hadSelectionLastAutofill=this._inputNode.value.length!==this._inputNode.selectionStart,this.__hadUserIntendsInlineAutoFill=_,this._overlayCtrl&&this._overlayCtrl._popper&&this._overlayCtrl._popper.update()}__textboxInlineComplete(e=this.formElements[this.activeIndex]){const t=this._getTextboxValueFromOption(e);if(this._inputNode.value!==t){const i=this._inputNode.value.length;this._inputNode.value=t,this._inputNode.selectionStart=i,this._inputNode.selectionEnd=this._inputNode.value.length}}_autoSelectCondition(){return this.autocomplete==="both"||this.autocomplete==="inline"}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.removeAttribute("tabindex")}_defineOverlayConfig(){return{...Uo(),elementToFocusAfterHide:void 0,invokerNode:this._comboboxNode,visibilityTriggerFunction:void 0}}_setupOverlayCtrl(){super._setupOverlayCtrl(),this.__shouldAutocompleteNextUpdate=!0,this.__setupCombobox()}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this.__teardownCombobox()}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._inputNode.addEventListener("keyup",this._onKeyUp),this._inputNode.addEventListener("click",this._textboxOnClick)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._inputNode.removeEventListener("keyup",this._onKeyUp),this._inputNode.removeEventListener("click",this._textboxOnClick)}_listboxOnKeyDown(e){const{key:t}=e;switch(t){case"Escape":this.opened=!1,super._listboxOnKeyDown(e),this._setTextboxValue("");break;case"Backspace":case"Delete":this.requireOptionMatch?super._listboxOnKeyDown(e):this.opened=!1;break;case"Enter":this.opened&&e.preventDefault(),!this.requireOptionMatch&&this.multipleChoice&&(!this.formElements[this.activeIndex]||this.formElements[this.activeIndex].hasAttribute("aria-hidden")||!this.opened)?(this.modelValue=this.parser([...this.modelValue,this._inputNode.value]),this._inputNode.value="",this.opened=!1):(super._listboxOnKeyDown(e),this._resetListboxOptions()),this.multipleChoice?this._inputNode.value="":this.opened=!1;break;default:{super._listboxOnKeyDown(e);break}}}_syncToTextboxCondition(e,t,{phase:i}={}){return this.autocomplete==="both"||this.autocomplete==="inline"||!this.focused}_syncToTextboxMultiple(e,t=[]){if(this.requireOptionMatch){const i=e.filter(n=>!t.includes(n)),s=this.formElements.filter(n=>i.includes(n.choiceValue)).map(n=>this._getTextboxValueFromOption(n)).join(" ");this._setTextboxValue(s)}}_enhanceLightDomClasses(){const e=this.querySelector("[slot=input]");e&&e.classList.add("form-control")}__setComboboxDisabledAndReadOnly(){this._comboboxNode&&(this._comboboxNode.toggleAttribute("disabled",this.disabled),this._comboboxNode.setAttribute("aria-disabled",`${this.disabled}`),this._comboboxNode.toggleAttribute("readonly",this.readOnly),this._comboboxNode.setAttribute("aria-readonly",`${this.readOnly}`)),this._inputNode&&(this._inputNode.toggleAttribute("disabled",this.disabled),this._inputNode.toggleAttribute("readOnly",this.readOnly),this._inputNode.setAttribute("aria-readonly",`${this.readOnly}`),this._inputNode.tabIndex=this.disabled?-1:0)}__setupCombobox(){this._comboboxNode.setAttribute("role","combobox"),this._comboboxNode.setAttribute("aria-haspopup","listbox"),this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),this._comboboxNode.setAttribute("aria-controls",this._listboxNode.id),this._ariaVersion==="1.1"?this._comboboxNode.setAttribute("aria-owns",this._listboxNode.id):this._inputNode.setAttribute("aria-owns",this._listboxNode.id),this._listboxNode.setAttribute("aria-labelledby",this._labelNode.id),this._inputNode.addEventListener("keydown",this._listboxOnKeyDown),this._inputNode.addEventListener("input",this._textboxOnInput),this._inputNode.addEventListener("keydown",this._textboxOnKeydown)}__teardownCombobox(){this._inputNode.removeEventListener("keydown",this._listboxOnKeyDown),this._inputNode.removeEventListener("input",this._textboxOnInput),this._inputNode.removeEventListener("keydown",this._textboxOnKeydown)}_onKeyUp(e){const t=e&&e.key;this.opened=this._showOverlayCondition({lastKey:t,currentValue:this._inputNode.value})}_textboxOnClick(e){this.opened=this._showOverlayCondition({})}clear(){this.value="",super.clear(),this.__shouldAutocompleteNextUpdate=!0}}const jo="4px",vr=M`
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
    color: var(--co-color-text-tertiary);
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
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
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
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
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
    color: var(--co-color-text-tertiary);
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
    min-block-size: var(--co-font-line-height-normal, 1.25em);
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
`,gr=M`
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

  :host(:hover:not([disabled]):not([checked])) .option,
  :host([active]:not([checked])) .option {
    background: var(--co-color-primary-subtle);
  }

  :host([checked]) .option {
    background: var(--co-color-interactive-primary-default);
    color: var(--co-color-text-on-primary);
  }

  :host([active][checked]) .option {
    background: var(--co-color-interactive-primary-default);
    color: var(--co-color-text-on-primary);
  }

  :host([disabled]) {
    color: var(--co-color-text-disabled);
    cursor: not-allowed;
  }

  /* ── Prefix (indicator) ── */

  .option__prefix {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }

  /* ── Label ── */

  .option__label {
    flex: 1 1 auto;
    min-inline-size: 0;
  }

  /* ── Suffix ── */

  .option__suffix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    margin-inline-start: auto;
  }

  .option__suffix:empty {
    display: none;
  }
`;var Go=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let ai=class extends jn{static get styles(){return[gr]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),this._syncMultipleAttribute(),this.updateComplete.then(()=>this._syncMultipleAttribute())}updated(e){super.updated(e),this._syncMultipleAttribute()}get _indicatorIconName(){return this.hasAttribute("multiple")?this.checked?"check-box":"check-box-outline-blank":this.checked?"radio-button-checked":"radio-button-unchecked"}get _iconSize(){const e=this.closest("co-listbox, co-combobox"),t=(e==null?void 0:e.getAttribute("size"))??"md";return{sm:"xs",md:"sm",lg:"md",xl:"lg"}[t]??"sm"}render(){return f`
      <div part="base" class="option">
        <span part="prefix" class="option__prefix" aria-hidden="true">
          <slot name="prefix">
            <co-icon
              name=${this._indicatorIconName}
              size=${this._iconSize}
              ?fill=${this.checked}
            ></co-icon>
          </slot>
        </span>
        <span part="label" class="option__label">
          <slot></slot>
        </span>
        <span part="suffix" class="option__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `}_syncMultipleAttribute(){const e=this._parentFormGroup,t=this.hasAttribute("multiple");e!=null&&e.multipleChoice?this.setAttribute("multiple",""):this.removeAttribute("multiple"),t!==this.hasAttribute("multiple")&&this.requestUpdate()}};Go([g({reflect:!0})],ai.prototype,"value",null);ai=Go([j("co-option")],ai);var Z=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};class yr extends Si{static async getMessage(e){var t;return(t=e==null?void 0:e.config)!=null&&t.getMessage?e.config.getMessage():"Please select a valid option."}}let Y=class extends br{constructor(){super(...arguments),this.size="md",this.danger=!1,this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.selectionFollowsFocus=!0,this.rotateKeyboardNavigation=!0,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.multiple=!1,this.allowCustomChoice=!1,this.required=!1,this.matchError="",this._requiredValidator=new _t(void 0,{getMessage:async()=>"Please select an option."}),this._matchesOptionValidator=new yr,this._handleFocusIn=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-input",{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))},this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.value,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,vr]}get requireOptionMatch(){return super.requireOptionMatch}set requireOptionMatch(e){super.requireOptionMatch=e}connectedCallback(){super.connectedCallback(),this._replaceMatchesOptionValidator(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){super.firstUpdated(e),this._syncMultipleAlias(),this._syncRequiredValidator()}updated(e){this._syncMultipleAlias(e),super.updated(e),e.has("required")&&this._syncRequiredValidator(),e.has("allowCustomChoice")&&this.requestUpdate("requireOptionMatch",!this.allowCustomChoice),e.has("matchError")&&this._syncMatchErrorMessage(),(e.has("multiple")||e.has("multipleChoice")||e.has("required"))&&this._syncListboxAttributes()}_labelTemplate(){return f`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return f`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return f`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?f`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:S}_inputGroupInputTemplate(){return f`
      <div part="input" class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){const e={sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm";return f`
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
    `}_preventFocusShift(e){e.preventDefault()}_onSuffixMousedown(e){this._preventFocusShift(e)}_onOverlayMousedown(e){this._preventFocusShift(e)}_onSuffixClick(){var e;this.disabled||this.readOnly||((e=this._inputNode)==null||e.focus(),this.opened?this.opened=!1:this._hasVisibleOptions()&&(this.opened=!0))}_hasVisibleOptions(){return(this.formElements??[]).some(t=>t.style.display!=="none")}_overlayListboxTemplate(){return f`
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
    `}_feedbackTemplate(){return f`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_handleAutocompletion(){super._handleAutocompletion(),!this.formElements.some(t=>t.style.display!=="none")&&this.opened&&requestAnimationFrame(()=>{this.opened&&!this.formElements.some(t=>t.style.display!=="none")&&(this.opened=!1)})}_showOverlayCondition(e){var n;if(!this._hasVisibleOptions())return!1;const t=super._showOverlayCondition(e),i=(n=this._inputNode)==null?void 0:n.value,s=["Enter","Escape","Tab"];return!t&&e.lastKey&&s.includes(e.lastKey)?!1:!t&&i&&this.formElements.length>0?this.formElements.some(r=>this.matchCondition(r,i)):t&&i&&this.formElements.length>0?this.formElements.some(r=>this.matchCondition(r,i)):t}_defineOverlayConfig(){var t;const e=super._defineOverlayConfig();return{...e,_noDialogEl:!0,popperConfig:{...e.popperConfig,modifiers:[...(((t=e.popperConfig)==null?void 0:t.modifiers)??[]).filter(i=>i.name!=="offset"),{name:"offset",enabled:!0,options:{offset:[0,parseInt(jo,10)]}}]}}}_syncMultipleAlias(e){if(e!=null&&e.has("multiple")&&this.multipleChoice!==this.multiple){this.multipleChoice=this.multiple;return}if(e!=null&&e.has("multipleChoice")&&this.multiple!==this.multipleChoice){this.multiple=this.multipleChoice;return}!e&&this.multiple!==this.multipleChoice&&(this.multipleChoice=this.multiple||this.multipleChoice,this.multiple=this.multipleChoice)}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}_replaceMatchesOptionValidator(){this.defaultValidators=this.defaultValidators.map(e=>e instanceof Si?this._matchesOptionValidator:e),this._syncMatchErrorMessage()}_syncMatchErrorMessage(){this.matchError&&(this._matchesOptionValidator.config={...this._matchesOptionValidator.config,getMessage:()=>this.matchError})}_syncListboxAttributes(){const e=this.querySelector('[slot="listbox"]');e&&(e.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this.required?e.setAttribute("aria-required","true"):e.removeAttribute("aria-required"))}};Z([g({reflect:!0})],Y.prototype,"size",void 0);Z([g({type:Boolean,reflect:!0})],Y.prototype,"danger",void 0);Z([g({reflect:!0})],Y.prototype,"autocomplete",void 0);Z([g({attribute:"match-mode",reflect:!0})],Y.prototype,"matchMode",void 0);Z([g({type:Boolean,attribute:"show-all-on-empty",reflect:!0})],Y.prototype,"showAllOnEmpty",void 0);Z([g({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],Y.prototype,"selectionFollowsFocus",void 0);Z([g({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],Y.prototype,"rotateKeyboardNavigation",void 0);Z([g({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],Y.prototype,"hasNoDefaultSelected",void 0);Z([g({type:Boolean,attribute:"multiple-choice",reflect:!0})],Y.prototype,"multipleChoice",void 0);Z([g({type:Boolean,reflect:!0})],Y.prototype,"multiple",void 0);Z([g({type:Boolean,attribute:"allow-custom-choice",reflect:!0})],Y.prototype,"allowCustomChoice",void 0);Z([g({type:Boolean,reflect:!0})],Y.prototype,"required",void 0);Z([g({attribute:"match-error"})],Y.prototype,"matchError",void 0);Z([g({type:Boolean,attribute:"require-option-match"})],Y.prototype,"requireOptionMatch",null);Y=Z([j("co-combobox")],Y);class xr extends ki(K){constructor(){super(),this._isFormOrFieldset=!0,this._repropagationRole="fieldset"}}const Xi=()=>{throw new Error("No form node found. Did you put a <form> element inside your custom-form element?")};class Cr extends xr{constructor(){super(),this._submit=this._submit.bind(this),this._reset=this._reset.bind(this)}connectedCallback(){super.connectedCallback(),this.__registerEventsForLionForm(),this.removeAttribute("role")}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForLionForm()}get _formNode(){return this.querySelector("form")}submit(){this._formNode?this._formNode.dispatchEvent(new Event("submit",{cancelable:!0})):Xi()}_submit(e){var t;e.preventDefault(),e.stopPropagation(),this.submitGroup(),this.dispatchEvent(new Event("submit",{bubbles:!0})),(t=this.hasFeedbackFor)!=null&&t.includes("error")&&this._setFocusOnFirstErroneousFormElement(this)}reset(){this._formNode?this._formNode.reset():Xi()}_reset(e){e.preventDefault(),e.stopPropagation(),this.resetGroup(),this.dispatchEvent(new Event("reset",{bubbles:!0}))}_setFocusOnFirstErroneousFormElement(e){const t=e.formElements.find(i=>i.hasFeedbackFor.includes("error"))||e.formElements[0];t._focusableNode?t._focusableNode.focus():this._setFocusOnFirstErroneousFormElement(t)}__registerEventsForLionForm(){this._formNode.addEventListener("submit",this._submit),this._formNode.addEventListener("reset",this._reset)}__teardownEventsForLionForm(){this._formNode.removeEventListener("submit",this._submit),this._formNode.removeEventListener("reset",this._reset)}}const kr=M`
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
`;var Wo=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let li=class extends Cr{constructor(){super(...arguments),this.disabled=!1,this._createdInternalForm=!1}static get styles(){return[...super.styles,kr]}connectedCallback(){if(!this.querySelector("form")){const e=document.createElement("form");for(;this.firstChild;)e.appendChild(this.firstChild);this.appendChild(e),this._createdInternalForm=!0}super.connectedCallback()}disconnectedCallback(){if(super.disconnectedCallback(),this._createdInternalForm){const e=this.querySelector("form");if(e){for(;e.firstChild;)this.appendChild(e.firstChild);e.remove()}this._createdInternalForm=!1}}_labelTemplate(){return f`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return f`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_feedbackTemplate(){return f`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_submit(e){super._submit(e),this.dispatchEvent(new CustomEvent("co-submit",{detail:{modelValue:this.modelValue,serializedValue:this.serializedValue},bubbles:!0,composed:!0}))}_reset(e){super._reset(e);const t=this._formNode;if(t)for(const i of Array.from(t.elements))"resetGroup"in i||(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement?i.value=i.defaultValue:i instanceof HTMLSelectElement&&(i.selectedIndex=0));this.dispatchEvent(new CustomEvent("co-reset",{bubbles:!0,composed:!0}))}};Wo([g({type:Boolean,reflect:!0})],li.prototype,"disabled",void 0);li=Wo([j("co-form")],li);const wr=M`
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
    min-block-size: var(--co-font-line-height-normal, 1.25em);
  }
`;var Fe=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let ge=class extends Ni{constructor(){super(...arguments),this.orientation="vertical",this.selectionFollowsFocus=!1,this.rotateKeyboardNavigation=!1,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.required=!1,this._requiredValidator=new _t(void 0,{getMessage:async()=>"Please select an option."}),this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,wr]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){super.firstUpdated(e),this._syncRequiredValidator()}updated(e){super.updated(e),e.has("required")&&this._syncRequiredValidator()}_labelTemplate(){return f`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return f`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return f`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">${this._inputGroupInputTemplate()}</div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return S}_inputGroupInputTemplate(){return f`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
        <slot id="options-outlet"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return S}_feedbackTemplate(){return f`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}};Fe([g({reflect:!0})],ge.prototype,"orientation",void 0);Fe([g({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],ge.prototype,"selectionFollowsFocus",void 0);Fe([g({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],ge.prototype,"rotateKeyboardNavigation",void 0);Fe([g({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],ge.prototype,"hasNoDefaultSelected",void 0);Fe([g({type:Boolean,attribute:"multiple-choice",reflect:!0})],ge.prototype,"multipleChoice",void 0);Fe([g({type:Boolean,reflect:!0})],ge.prototype,"required",void 0);ge=Fe([j("co-listbox")],ge);class Er extends Nt(ki(K)){connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup")}resetGroup(){let e;this.formElements.forEach(t=>{typeof t.resetGroup=="function"?t.resetGroup():typeof t.reset=="function"&&(t.reset(),t.checked&&(e=t.choiceValue))}),this.modelValue=e,this.resetInteractionState()}}class Nr extends Ci(wi){connectedCallback(){super.connectedCallback(),this.type="radio"}}const Sr=M`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    color: var(--co-color-text-default);
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--co-color-text-disabled);
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  .radio {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-1) 0;
  }

  /* Visually hide the native radio input (sr-only pattern) */
  slot[name='input']::slotted(*) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .radio__icon {
    flex: 0 0 auto;
    color: var(--co-color-text-secondary);
    transition: color var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .radio__icon {
    color: var(--co-color-interactive-primary-default);
  }

  :host([checked]) .radio__icon {
    color: var(--co-color-interactive-primary-default);
  }

  :host(:focus-within) .radio__icon {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-shape-radius-full);
  }

  .radio__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    line-height: var(--co-font-line-height-normal);
  }
`;var Ko=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let di=class extends Nr{constructor(){super(...arguments),this.__forwardingClick=!1}static get styles(){return[...super.styles,Sr]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}render(){return f`
      <div part="base" class="radio" @mousedown=${this._onMousedown} @click=${this._onRadioClick}>
        <slot name="input"></slot>
        <co-icon
          part="icon"
          class="radio__icon"
          name=${this.checked?"radio-button-checked":"radio-button-unchecked"}
          size="sm"
          ?fill=${this.checked}
          aria-hidden="true"
        ></co-icon>
        <span part="label" class="radio__label">
          <slot name="label"></slot>
        </span>
      </div>
    `}_onMousedown(e){var t;((t=e.target)==null?void 0:t.slot)!=="input"&&e.preventDefault()}_onRadioClick(e){if(this.__forwardingClick||this.disabled)return;const t=e.target,i=this._inputNode;!i||t===i||t instanceof HTMLLabelElement||(this.__forwardingClick=!0,i.click(),i.focus(),this.__forwardingClick=!1)}};Ko([g({reflect:!0})],di.prototype,"value",null);di=Ko([j("co-radio")],di);const Ar=M`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    color: var(--co-color-text-default);
  }

  .form-field__label {
    font-weight: var(--co-font-weight-medium);
    margin-block-end: var(--co-space-1);
  }

  .form-field__help-text {
    color: var(--co-color-text-tertiary);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
  }

  .radio-group__options {
    display: flex;
    flex-direction: column;
    gap: var(--co-space-1);
    padding-block: var(--co-space-2);
  }

  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    pointer-events: none;
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal, 1.25em);
  }
`;var Yo=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let ci=class extends Er{constructor(){super(...arguments),this.required=!1,this._requiredValidator=new _t(void 0,{getMessage:async()=>"Please select an option."}),this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,Ar]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){super.firstUpdated(e),this._syncRequiredValidator()}updated(e){super.updated(e),e.has("required")&&this._syncRequiredValidator()}render(){return f`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
      <div part="group" class="radio-group__options" role="radiogroup">
        <slot></slot>
      </div>
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}};Yo([g({type:Boolean,reflect:!0})],ci.prototype,"required",void 0);ci=Yo([j("co-radio-group")],ci);const Or=M`
  :host {
    display: block;
    inline-size: min(100%, var(--co-nav-rail-bar-width, 115px));
    max-inline-size: 115px;
    block-size: 100%;
    box-sizing: border-box;
  }

  .nav-rail-bar {
    display: flex;
    flex-direction: column;
    inline-size: 100%;
    block-size: 100%;
    padding: var(--co-space-2);
    border-radius: var(--co-shape-radius-lg);
    background: var(--co-color-surface-sunken);
    box-shadow: var(--co-elevation-shadow-md);
  }

  .nav-rail-bar__items {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: var(--co-space-2);
  }
`;var Ai=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let dt=class extends K{constructor(){super(...arguments),this.value="",this.label="Side navigation",this._syncingSelection=!1,this._handleSlotChange=()=>{this._syncSelection()},this._handleClick=e=>{const t=this._findItemFromEvent(e);!t||t.disabled||this._selectItem(t,!0)},this._handleKeydown=e=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(e.key))return;const t=this._enabledItems;if(t.length===0)return;const i=this._findItemFromEvent(e)??t.find(r=>r.selected)??t[0],s=Math.max(0,t.indexOf(i));let n=i;e.key==="Home"&&(n=t[0]),e.key==="End"&&(n=t[t.length-1]),e.key==="ArrowUp"&&(n=t[Math.max(0,s-1)]),e.key==="ArrowDown"&&(n=t[Math.min(t.length-1,s+1)]),e.preventDefault(),this._selectItem(n,!0,!0)}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","navigation"),this.addEventListener("click",this._handleClick),this.addEventListener("keydown",this._handleKeydown),this._syncSelection()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick),this.removeEventListener("keydown",this._handleKeydown)}updated(e){e.has("value")&&!this._syncingSelection&&this._syncSelection()}get _items(){return Array.from(this.children).filter(e=>e.tagName.toLowerCase()==="co-nav-rail-item")}get _enabledItems(){return this._items.filter(e=>!e.disabled)}render(){return f`
      <nav part="base" class="nav-rail-bar" aria-label=${this.label}>
        <div part="items" class="nav-rail-bar__items">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </nav>
    `}_findItemFromEvent(e){return e.composedPath().find(t=>t instanceof HTMLElement&&t.tagName.toLowerCase()==="co-nav-rail-item")}_syncSelection(e=!1){const t=this._items,i=this._enabledItems;if(t.length===0||i.length===0)return;const s=this.value?i.find(a=>a.value===this.value):void 0,n=i.find(a=>a.selected),r=s??n??i[0];this._selectItem(r,e)}_selectItem(e,t=!1,i=!1){if(e.disabled)return;const s=this._items;this._syncingSelection=!0;for(const a of s){const d=a===e;a.selected=d,a.setFocusable(!a.disabled)}const n=e.value,r=this.value!==n;this.value=n,this._syncingSelection=!1,i&&e.focus(),t&&r&&this.dispatchEvent(new CustomEvent("co-change",{detail:{value:n},bubbles:!0,composed:!0}))}};dt.styles=[Or];Ai([g({reflect:!0})],dt.prototype,"value",void 0);Ai([g()],dt.prototype,"label",void 0);dt=Ai([j("co-nav-rail-bar")],dt);class Tr extends ye(Fo){static get styles(){return[...super.styles,M`
        :host {
          justify-content: space-between;
          align-items: center;
        }

        #content-wrapper {
          position: relative;
          pointer-events: none;
        }
      `]}static get properties(){return{selectedElement:{type:Object},hostElement:{type:Object},readOnly:{type:Boolean,reflect:!0,attribute:"readonly"},singleOption:{type:Boolean,reflect:!0,attribute:"single-option"}}}get slots(){return{...super.slots,after:()=>{const e=document.createElement("span");return e.textContent="▼",e.setAttribute("role","img"),e.setAttribute("aria-hidden","true"),e}}}get _contentWrapperNode(){return this.shadowRoot.getElementById("content-wrapper")}constructor(){super(),this.readOnly=!1,this.selectedElement=null,this.hostElement=null,this.singleOption=!1,this.type="button"}__handleKeydown(e){switch(e.key){case"ArrowDown":case"ArrowUp":e.preventDefault()}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.__handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.__handleKeydown)}_contentTemplate(){if(this.selectedElement){const e=Array.from(this.selectedElement.childNodes);return e.length>0?e.map(t=>t.cloneNode(!0)):this.selectedElement.textContent}return this._noSelectionTemplate()}render(){return f` ${this._beforeTemplate()} ${super.render()} ${this._afterTemplate()} `}_noSelectionTemplate(){return f``}_beforeTemplate(){return f` <div id="content-wrapper">${this._contentTemplate()}</div> `}_afterTemplate(){return f`${this.singleOption?"":f`<slot name="after"></slot>`}`}}function Vr(){return rt.isMac?"mac":"windows/linux"}class Fr extends ye(bi(Bo(Ni))){static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":Tr}}static get properties(){return{navigateWithinInvoker:{type:Boolean,attribute:"navigate-within-invoker"},interactionMode:{type:String,attribute:"interaction-mode"},singleOption:{type:Boolean,reflect:!0,attribute:"single-option"}}}_inputGroupInputTemplate(){return f`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,invoker:()=>f`<lion-select-invoker></lion-select-invoker>`}}get _invokerNode(){return Array.from(this.children).find(e=>e.slot==="invoker")}get _focusableNode(){return this._invokerNode}get _scrollTargetNode(){return this._overlayContentNode._scrollTargetNode||this._overlayContentNode}constructor(){super(),this.navigateWithinInvoker=!1,this.interactionMode="auto",this.singleOption=!1,this._arrowWidth=28,this.__onKeyUp=this.__onKeyUp.bind(this),this.__invokerOnBlur=this.__invokerOnBlur.bind(this),this.__overlayOnHide=this.__overlayOnHide.bind(this),this.__overlayOnShow=this.__overlayOnShow.bind(this),this.__invokerOnClick=this.__invokerOnClick.bind(this),this.__overlayBeforeShow=this.__overlayBeforeShow.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this)}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this._invokerNode.selectedElement=this.formElements[this.checkedIndex]}),this._invokerNode.hostElement=this,this.__setupInvokerNode(),this.__toggleInvokerDisabled(),this.addEventListener("keyup",this.__onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),this.__teardownInvokerNode(),this.removeEventListener("keyup",this.__onKeyUp)}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="interactionMode"&&(this.interactionMode==="auto"?this.interactionMode=Vr():(this.selectionFollowsFocus=this.interactionMode==="windows/linux",this.navigateWithinInvoker=this.interactionMode==="windows/linux")),(e==="disabled"||e==="readOnly")&&this.__toggleInvokerDisabled()}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this._invokerNode.makeRequestToBeDisabled():this._invokerNode.retractRequestToBeDisabled()),e.has("singleOption")&&(this.singleOption?(this._invokerNode.removeAttribute("role"),this._invokerNode.removeAttribute("aria-haspopup"),this._invokerNode.removeAttribute("aria-expanded")):(this._invokerNode.setAttribute("role","button"),this._invokerNode.setAttribute("aria-haspopup","listbox"),this._invokerNode.setAttribute("aria-expanded",`${this.opened}`))),this._inputNode&&this._invokerNode&&(e.has("_ariaLabelledNodes")&&this._invokerNode.setAttribute("aria-labelledby",`${this._inputNode.getAttribute("aria-labelledby")} ${this._invokerNode.id}`),e.has("_ariaDescribedNodes")&&this._invokerNode.setAttribute("aria-describedby",this._inputNode.getAttribute("aria-describedby")),e.has("showsFeedbackFor")&&this._invokerNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`)),e.has("modelValue")&&this.__syncInvokerElement()}addFormElement(e,t){super.addFormElement(e,t),!this.hasNoDefaultSelected&&!this.__hasInitialSelectedFormElement&&(!e.disabled||this.disabled)&&(e.active=!0,e.checked=!0,this.__hasInitialSelectedFormElement=!0),this._alignInvokerWidth(),this._onFormElementsChanged()}removeFormElement(e){super.removeFormElement(e),this._alignInvokerWidth(),this._onFormElementsChanged()}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_onFormElementsChanged(){this.singleOption=this.formElements.length===1&&!this.hasNoDefaultSelected,this._invokerNode.singleOption=this.singleOption}__initInteractionStates(){this.initInteractionState()}__toggleInvokerDisabled(){this._invokerNode&&(this._invokerNode.disabled=this.disabled,this._invokerNode.readOnly=this.readOnly)}__syncInvokerElement(){this._invokerNode&&(this._invokerNode.selectedElement=this.formElements[this.checkedIndex],this._invokerNode.requestUpdate("selectedElement"))}__setupInvokerNode(){this._invokerNode.id=`invoker-${this._inputId}`,this._invokerNode.setAttribute("aria-haspopup","listbox"),this.__setupInvokerNodeEventListener()}__invokerOnClick(){!this.disabled&&!this.readOnly&&!this.singleOption&&!this.__blockListShow&&this._overlayCtrl.toggle()}__invokerOnBlur(){this.dispatchEvent(new Event("blur"))}__setupInvokerNodeEventListener(){this._invokerNode.addEventListener("click",this.__invokerOnClick),this._invokerNode.addEventListener("blur",this.__invokerOnBlur)}__teardownInvokerNode(){this._invokerNode.removeEventListener("click",this.__invokerOnClick),this._invokerNode.removeEventListener("blur",this.__invokerOnBlur)}_defineOverlayConfig(){return{...Uo(),visibilityTriggerFunction:void 0}}_noDefaultSelectedInheritsWidth(){this.checkedIndex===-1?this._overlayCtrl.updateConfig({inheritsReferenceWidth:"min"}):this._overlayCtrl.updateConfig({inheritsReferenceWidth:this._initialInheritsReferenceWidth})}__overlayBeforeShow(){this.hasNoDefaultSelected&&this._noDefaultSelectedInheritsWidth(),this._listboxNode.setAttribute("autofocus","")}__overlayOnShow(){this.checkedIndex!=null&&(this.activeIndex=this.checkedIndex),this._listboxNode.focus()}__overlayOnHide(){this._invokerNode.focus(),this._listboxNode.removeAttribute("autofocus")}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._initialInheritsReferenceWidth=this._overlayCtrl.inheritsReferenceWidth,this._alignInvokerWidth(),this._overlayCtrl.addEventListener("before-show",this.__overlayBeforeShow),this._overlayCtrl.addEventListener("show",this.__overlayOnShow),this._overlayCtrl.addEventListener("hide",this.__overlayOnHide)}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this._overlayCtrl.removeEventListener("show",this.__overlayOnShow),this._overlayCtrl.removeEventListener("before-show",this.__overlayBeforeShow),this._overlayCtrl.removeEventListener("hide",this.__overlayOnHide)}async _alignInvokerWidth(){var n;if(await this.updateComplete,!((n=this._overlayCtrl)!=null&&n.content))return;const e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,i=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display="",this._overlayCtrl.contentWrapperNode.style.minWidth="auto",this._overlayCtrl.contentWrapperNode.style.width="auto";const s=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;s>0&&(this._invokerNode.style.width=`${s+this._arrowWidth}px`),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=i}_onLabelClick(){this._invokerNode.focus()}get _overlayInvokerNode(){return this._invokerNode}get _overlayContentNode(){return this._listboxNode}__onKeyUp(e){if(this.disabled||this.readOnly||this.singleOption||this.opened)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:t}=e;switch(t){case"ArrowUp":e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex)):this.opened=!0;break;case"ArrowDown":e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex)):this.opened=!0;break;case"ArrowLeft":e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex));break;case"ArrowRight":e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex));break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:!0})}}_listboxOnKeyDown(e){if(super._listboxOnKeyDown(e),this.disabled)return;const{key:t}=e;switch(t){case"Tab":if(this._overlayCtrl.config.trapsKeyboardFocus===!0)return;this.opened=!1;break;case"Escape":this.opened=!1,this.__blockListShowDuringTransition();break;case"Enter":case" ":this.opened=!1,this.__blockListShowDuringTransition();break}}_listboxOnClick(){this.opened=!1}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.addEventListener("click",this._listboxOnClick)}_teardownListboxNode(){super._teardownListboxNode(),this._listboxNode&&this._listboxNode.removeEventListener("click",this._listboxOnClick)}__blockListShowDuringTransition(){this.__blockListShow=!0,setTimeout(()=>{this.__blockListShow=!1},200)}}const Ir=M`
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
    font-weight: var(--co-font-weight-medium);
    margin-block-end: var(--co-space-1);
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
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      border-color var(--co-motion-duration-fast) var(--co-motion-easing-default),
      outline var(--co-motion-duration-fast) var(--co-motion-easing-default);
  }

  :host(:hover:not([disabled])) .input-group__container {
    border-color: var(--co-color-border-strong);
    background: var(--co-color-surface-raised);
  }

  :host(:focus-within) .input-group__container {
    border-color: var(--co-color-border-focus);
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
  }

  :host([danger]) .input-group__container,
  :host([shows-feedback-for~='error']) .input-group__container {
    border-color: var(--co-color-border-danger);
  }

  :host([danger]:focus-within) .input-group__container,
  :host([shows-feedback-for~='error']:focus-within) .input-group__container {
    border-color: var(--co-color-border-danger);
    outline: var(--co-focus-ring-width) solid var(--co-color-border-danger);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
  }

  :host([disabled]) {
    opacity: var(--co-opacity-disabled);
    pointer-events: none;
  }

  :host([readonly]) .input-group__container {
    background: var(--co-color-surface-sunken);
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

  #overlay-content-node-wrapper {
    inline-size: 100%;
    min-inline-size: min(20rem, 100vw);
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    box-shadow: var(--co-shadow-lg, 0 12px 24px rgb(15 23 42 / 18%));
    overflow: hidden;
  }

  /* ── Feedback ── */

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal, 1.25em);
  }
`;var At=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let ct=class extends Fr{constructor(){super(...arguments),this.size="md",this.danger=!1,this.required=!1,this._requiredValidator=new _t(void 0,{getMessage:async()=>"Please select an option."}),this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,Ir]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){super.firstUpdated(e),this._syncRequiredValidator()}updated(e){super.updated(e),e.has("required")&&this._syncRequiredValidator(),this._syncChevronRotation()}_syncChevronRotation(){const e=this.querySelector(".select__chevron");e&&(e.style.transform=this.opened?"rotate(180deg)":"")}_labelTemplate(){return f`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return f`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}get slots(){return{...super.slots,invoker:()=>{const e=document.createElement("lion-select-invoker"),t=document.createElement("co-icon");return t.setAttribute("slot","after"),t.setAttribute("name","keyboard-arrow-down"),t.setAttribute("size",{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"),t.setAttribute("aria-hidden","true"),t.classList.add("select__chevron"),e.appendChild(t),e}}}_inputGroupTemplate(){return f`
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
    `}_setupOverlayCtrl(){var t;super._setupOverlayCtrl();const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".input-group__container");e&&this._overlayCtrl&&this._overlayCtrl.updateConfig({referenceNode:e})}_noDefaultSelectedInheritsWidth(){}async _alignInvokerWidth(){}_feedbackTemplate(){return f`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_defineOverlayConfig(){const e=super._defineOverlayConfig(),t=e.popperConfig??{};return{...e,inheritsReferenceWidth:"full",popperConfig:{...t,modifiers:[{name:"offset",enabled:!0,options:{offset:[0,parseInt(jo,10)]}}]}}}_onOverlayMousedown(e){e.preventDefault()}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}};At([g({reflect:!0})],ct.prototype,"size",void 0);At([g({type:Boolean,reflect:!0})],ct.prototype,"danger",void 0);At([g({type:Boolean,reflect:!0})],ct.prototype,"required",void 0);ct=At([j("co-select")],ct);var et=new Map;function Lr(o){var e=et.get(o);e&&e.destroy()}function Mr(o){var e=et.get(o);e&&e.update()}var Ye=null;typeof window>"u"?((Ye=function(o){return o}).destroy=function(o){return o},Ye.update=function(o){return o}):((Ye=function(o,e){return o&&Array.prototype.forEach.call(o.length?o:[o],function(t){return function(i){if(i&&i.nodeName&&i.nodeName==="TEXTAREA"&&!et.has(i)){var s,n=null,r=window.getComputedStyle(i),a=(s=i.value,function(){h({testForHeightReduction:s===""||!i.value.startsWith(s),restoreTextAlign:null}),s=i.value}),d=(function(b){i.removeEventListener("autosize:destroy",d),i.removeEventListener("autosize:update",_),i.removeEventListener("input",a),window.removeEventListener("resize",_),Object.keys(b).forEach(function(u){return i.style[u]=b[u]}),et.delete(i)}).bind(i,{height:i.style.height,resize:i.style.resize,textAlign:i.style.textAlign,overflowY:i.style.overflowY,overflowX:i.style.overflowX,wordWrap:i.style.wordWrap});i.addEventListener("autosize:destroy",d),i.addEventListener("autosize:update",_),i.addEventListener("input",a),window.addEventListener("resize",_),i.style.overflowX="hidden",i.style.wordWrap="break-word",et.set(i,{destroy:d,update:_}),_()}function h(b){var u,p,v=b.restoreTextAlign,m=v===void 0?null:v,C=b.testForHeightReduction,A=C===void 0||C,I=r.overflowY;if(i.scrollHeight!==0&&(r.resize==="vertical"?i.style.resize="none":r.resize==="both"&&(i.style.resize="horizontal"),A&&(u=function(O){for(var H=[];O&&O.parentNode&&O.parentNode instanceof Element;)O.parentNode.scrollTop&&H.push([O.parentNode,O.parentNode.scrollTop]),O=O.parentNode;return function(){return H.forEach(function(G){var J=G[0],ie=G[1];J.style.scrollBehavior="auto",J.scrollTop=ie,J.style.scrollBehavior=null})}}(i),i.style.height=""),p=r.boxSizing==="content-box"?i.scrollHeight-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):i.scrollHeight+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),r.maxHeight!=="none"&&p>parseFloat(r.maxHeight)?(r.overflowY==="hidden"&&(i.style.overflow="scroll"),p=parseFloat(r.maxHeight)):r.overflowY!=="hidden"&&(i.style.overflow="hidden"),i.style.height=p+"px",m&&(i.style.textAlign=m),u&&u(),n!==p&&(i.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),n=p),I!==r.overflow&&!m)){var R=r.textAlign;r.overflow==="hidden"&&(i.style.textAlign=R==="start"?"end":"start"),h({restoreTextAlign:R,testForHeightReduction:!0})}}function _(){h({testForHeightReduction:!0,restoreTextAlign:null})}}(t)}),o}).destroy=function(o){return o&&Array.prototype.forEach.call(o.length?o:[o],Lr),o},Ye.update=function(o){return o&&Array.prototype.forEach.call(o.length?o:[o],Mr),o});var tt=Ye;class zr extends To{get _inputNode(){return Array.from(this.children).find(e=>e.slot==="input")}}class Rr extends Vo(zr){static get properties(){return{maxRows:{type:Number,attribute:"max-rows"},rows:{type:Number,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("textarea");return e.style.resize!==void 0&&(e.style.resize="none"),e}}}constructor(){super(),this.rows=2,this.maxRows=6,this.readOnly=!1,this.placeholder=""}connectedCallback(){super.connectedCallback(),this.__initializeAutoresize(),this.__intersectionObserver=new IntersectionObserver(()=>this.resizeTextarea()),this.__intersectionObserver.observe(this)}updated(e){if(super.updated(e),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("rows")){const t=this._inputNode;t&&(t.rows=this.rows)}if(e.has("readOnly")){const t=this._inputNode;t&&(t.readOnly=this.readOnly)}if(e.has("placeholder")){const t=this._inputNode;t&&(t.placeholder=this.placeholder)}e.has("modelValue")&&this.resizeTextarea(),(e.has("maxRows")||e.has("rows"))&&this.setTextareaMaxHeight()}disconnectedCallback(){super.disconnectedCallback(),tt.destroy(this._inputNode)}setTextareaMaxHeight(){const{value:e}=this._inputNode;this._inputNode.value="",this.resizeTextarea();const t=window.getComputedStyle(this._inputNode,null),i=parseFloat(t.lineHeight)||parseFloat(t.height)/this.rows,s=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),n=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),r=t.boxSizing==="border-box"?s+n:0;this._inputNode.style.maxHeight=`${i*this.maxRows+r}px`,this._inputNode.value=e,this.resizeTextarea()}static get styles(){return[...super.styles,M`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          box-sizing: content-box;
          overflow-x: hidden; /* for FF adds height to the TextArea to reserve place for scroll-bars */
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }
      `]}get updateComplete(){return this.__textareaUpdateComplete?Promise.all([this.__textareaUpdateComplete,super.updateComplete]):super.updateComplete}resizeTextarea(){tt.update(this._inputNode)}__initializeAutoresize(){this.__shady_native_contains?this.__textareaUpdateComplete=this.__waitForTextareaRenderedInRealDOM().then(()=>{this.__startAutoresize(),this.__textareaUpdateComplete=null}):this.__startAutoresize()}async __waitForTextareaRenderedInRealDOM(){let e=3;for(;e!==0&&!this.__shady_native_contains(this._inputNode);)await new Promise(t=>setTimeout(t)),e-=1}__startAutoresize(){tt(this._inputNode),this.setTextareaMaxHeight()}}const $r=M`
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
    font-size: var(--co-font-size-small);
  }

  :host([size='sm']) .input-group__container {
    min-block-size: calc(var(--co-control-height-sm) * 2);
    padding: var(--co-space-inset-sm);
  }

  :host([size='lg']) {
    font-size: var(--co-font-size-h6);
  }

  :host([size='lg']) .input-group__container {
    min-block-size: calc(var(--co-control-height-lg) * 2);
    padding: var(--co-space-inset-lg);
  }

  :host([size='xl']) {
    font-size: var(--co-font-size-h5);
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
    min-block-size: var(--co-font-line-height-normal, 1.25em);
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
`;var Ge=function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let Oe=class extends Rr{constructor(){super(...arguments),this.size="md",this.danger=!1,this.resize="auto",this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&(this.requestUpdate("value"),this._dispatchValueEvent("co-input"))},this._handleNativeChange=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,$r]}get slots(){const e=super.slots;return{...e,input:()=>{const t=e.input(),i=this.getAttribute("value");return i!==null&&(t.value=i),t}}}get value(){return super.value}set value(e){const t=this.value;super.value=e,this.requestUpdate("value",t),this._resizeForCurrentMode()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}firstUpdated(e){super.firstUpdated(e),this._syncNativeLengthAttributes(),this._applyResizeMode(),this._syncCounterDescription()}updated(e){super.updated(e),(e.has("maxLength")||e.has("minLength"))&&this._syncNativeLengthAttributes(),(e.has("resize")||e.has("rows")||e.has("maxRows"))&&this._applyResizeMode(),e.has("maxLength")&&this._syncCounterDescription()}resizeTextarea(){this.resize==="auto"&&super.resizeTextarea()}_groupTwoTemplate(){return f`
      ${this._inputGroupTemplate()}
      <div part="meta" class="form-field__meta">
        ${this._feedbackTemplate()} ${this._counterTemplate()}
      </div>
    `}_labelTemplate(){return f`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return f`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return f`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?f`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:S}_inputGroupInputTemplate(){return f`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot==="suffix")?f`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:S}_feedbackTemplate(){return f`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_counterTemplate(){return this._hasMaxLength()?f`
      <output
        part="counter"
        class="form-field__counter ${this._currentLength()>=this.maxLength?"form-field__counter--danger":""}"
      >
        ${this._currentLength()} / ${this.maxLength}
      </output>
    `:S}_dispatchValueEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}_hasMaxLength(){return typeof this.maxLength=="number"&&Number.isFinite(this.maxLength)&&this.maxLength>=0}_currentLength(){return this.value.length}_syncNativeLengthAttributes(){const e=this._inputNode;e&&(this._hasMaxLength()?e.maxLength=this.maxLength:e.removeAttribute("maxlength"),typeof this.minLength=="number"&&Number.isFinite(this.minLength)&&this.minLength>=0?e.minLength=this.minLength:e.removeAttribute("minlength"))}_applyResizeMode(){const e=this._inputNode;if(e){if(this.resize==="auto"){tt(e),this.setTextareaMaxHeight(),e.style.resize="none";return}tt.destroy(e),e.style.height="",e.style.maxHeight="",e.style.overflowY="",e.style.resize=this.resize==="vertical"?"vertical":"none"}}_resizeForCurrentMode(){!this._inputNode||this.resize!=="auto"||this.resizeTextarea()}_syncCounterDescription(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector('[part="counter"]');if(this._counterNode&&this._counterNode!==e&&(this.removeFromAriaDescribedBy(this._counterNode),this._counterNode=void 0),!this._hasMaxLength()){this._counterNode&&(this.removeFromAriaDescribedBy(this._counterNode),this._counterNode=void 0);return}e&&this._counterNode!==e&&(this.addToAriaDescribedBy(e,{idPrefix:"counter",reorder:!0}),this._counterNode=e)}};Ge([g({reflect:!0})],Oe.prototype,"size",void 0);Ge([g({type:Boolean,reflect:!0})],Oe.prototype,"danger",void 0);Ge([g({reflect:!0})],Oe.prototype,"resize",void 0);Ge([g({type:Number,attribute:"maxlength",reflect:!0})],Oe.prototype,"maxLength",void 0);Ge([g({type:Number,attribute:"minlength",reflect:!0})],Oe.prototype,"minLength",void 0);Oe=Ge([j("co-textarea")],Oe);export{Ae as CoButton,ve as CoButtonIcon,ti as CoCheckbox,oi as CoCheckboxGroup,ii as CoCheckboxIndeterminate,Y as CoCombobox,li as CoForm,be as CoIcon,at as CoInput,lt as CoInputPill,ge as CoListbox,dt as CoNavRailBar,te as CoNavRailItem,ai as CoOption,di as CoRadio,ci as CoRadioGroup,ct as CoSelect,Oe as CoTextarea};
