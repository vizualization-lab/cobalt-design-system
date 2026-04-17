const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/bg-BG.DvcqJcRT.js","assets/chunks/bg.DjRhbvP8.js","assets/chunks/cs-CZ.C4M3ss0M.js","assets/chunks/cs.BpAIInFi.js","assets/chunks/de-DE.B6cLQS-C.js","assets/chunks/de.tu_ZC0by.js","assets/chunks/en-AU.BLLSR6ul.js","assets/chunks/en.BRtJWocA.js","assets/chunks/en-GB.BLLSR6ul.js","assets/chunks/en-US.BLLSR6ul.js","assets/chunks/es-ES.C-k5kUnm.js","assets/chunks/es.CmCcTLNg.js","assets/chunks/fr-FR.DC-XO9HF.js","assets/chunks/fr.z99AZYvu.js","assets/chunks/fr-BE.DC-XO9HF.js","assets/chunks/hu-HU.BeTGSB1R.js","assets/chunks/hu.DlqOkKS-.js","assets/chunks/it-IT.BfrsYHtj.js","assets/chunks/it.dhe0n6ro.js","assets/chunks/nl-BE.CtPSVrK-.js","assets/chunks/nl.CsOjjg4q.js","assets/chunks/nl-NL.CtPSVrK-.js","assets/chunks/pl-PL.BO_uoCo3.js","assets/chunks/pl.CYht5iOc.js","assets/chunks/ro-RO.BzszQasy.js","assets/chunks/ro.DwBEW5po.js","assets/chunks/ru-RU.DYdB6zKs.js","assets/chunks/ru.BWO2zRrD.js","assets/chunks/sk-SK.t6DAVN22.js","assets/chunks/sk.BCmB7Wtj.js","assets/chunks/tr-TR.Cbm2kwTy.js","assets/chunks/tr.C7VWmvp5.js","assets/chunks/uk-UA.DRKx0L1R.js","assets/chunks/uk.L9q5i_B2.js"])))=>i.map(i=>d[i]);
var ki=Object.defineProperty;var Ni=Object.getPrototypeOf;var Ai=Reflect.get;var Rt=s=>{throw TypeError(s)};var Ti=(s,e,t)=>e in s?ki(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var q=(s,e,t)=>Ti(s,typeof e!="symbol"?e+"":e,t),rt=(s,e,t)=>e.has(s)||Rt("Cannot "+t);var j=(s,e,t)=>(rt(s,e,"read from private field"),t?t.call(s):e.get(s)),te=(s,e,t)=>e.has(s)?Rt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),ie=(s,e,t,i)=>(rt(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t),ue=(s,e,t)=>(rt(s,e,"access private method"),t);var $e=(s,e,t)=>Ai(Ni(s),t,e);import{g as Si,a as $i,c as Li,o as Vi}from"./theme.DNordNVZ.js";import{z as k}from"./framework.DSnR1BhL.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=globalThis,Nt=Ge.ShadowRoot&&(Ge.ShadyCSS===void 0||Ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),It=new WeakMap;let ri=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Nt&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=It.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&It.set(t,e))}return e}toString(){return this.cssText}};const Oi=s=>new ri(typeof s=="string"?s:s+"",void 0,At),G=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,o,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new ri(t,s,At)},Tt=(s,e)=>{if(Nt)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),o=Ge.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,s.appendChild(i)}},Dt=Nt?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Oi(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fi,defineProperty:Mi,getOwnPropertyDescriptor:zi,getOwnPropertyNames:Ri,getOwnPropertySymbols:Ii,getPrototypeOf:Di}=Object,de=globalThis,Pt=de.trustedTypes,Pi=Pt?Pt.emptyScript:"",at=de.reactiveElementPolyfillSupport,Oe=(s,e)=>s,Ke={toAttribute(s,e){switch(e){case Boolean:s=s?Pi:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},St=(s,e)=>!Fi(s,e),Ut={attribute:!0,type:String,converter:Ke,reflect:!1,useDefault:!1,hasChanged:St};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),de.litPropertyMetadata??(de.litPropertyMetadata=new WeakMap);let Ee=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ut){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Mi(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=zi(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:o,set(a){const d=o==null?void 0:o.call(this);r==null||r.call(this,a),this.requestUpdate(e,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ut}static _$Ei(){if(this.hasOwnProperty(Oe("elementProperties")))return;const e=Di(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oe("properties"))){const t=this.properties,i=[...Ri(t),...Ii(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(Dt(o))}else e!==void 0&&t.push(Dt(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const a=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Ke).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){var r,a;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const d=i.getPropertyOptions(o),c=typeof d.converter=="function"?{fromAttribute:d.converter}:((r=d.converter)==null?void 0:r.fromAttribute)!==void 0?d.converter:Ke;this._$Em=o;const u=c.fromAttribute(t,d.type);this[o]=u??((a=this._$Ej)==null?void 0:a.get(o))??u,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){var a;if(e!==void 0){const d=this.constructor;if(o===!1&&(r=this[e]),i??(i=d.getPropertyOptions(e)),!((i.hasChanged??St)(r,t)||i.useDefault&&i.reflect&&r===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(d._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,a]of o){const{wrapped:d}=a,c=this[r];d!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,a,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Ee.elementStyles=[],Ee.shadowRootOptions={mode:"open"},Ee[Oe("elementProperties")]=new Map,Ee[Oe("finalized")]=new Map,at==null||at({ReactiveElement:Ee}),(de.reactiveElementVersions??(de.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=globalThis,Bt=s=>s,Ye=Fe.trustedTypes,Ht=Ye?Ye.createPolicy("lit-html",{createHTML:s=>s}):void 0,ai="$lit$",ne=`lit$${Math.random().toFixed(9).slice(2)}$`,ni="?"+ne,Ui=`<${ni}>`,ve=document,Pe=()=>ve.createComment(""),Ue=s=>s===null||typeof s!="object"&&typeof s!="function",$t=Array.isArray,Bi=s=>$t(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",nt=`[ 	
\f\r]`,Le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qt=/-->/g,jt=/>/g,pe=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gt=/'/g,Wt=/"/g,li=/^(?:script|style|textarea|title)$/i,Hi=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),C=Hi(1),Q=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Kt=new WeakMap,_e=ve.createTreeWalker(ve,129);function di(s,e){if(!$t(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(e):e}const qi=(s,e)=>{const t=s.length-1,i=[];let o,r=e===2?"<svg>":e===3?"<math>":"",a=Le;for(let d=0;d<t;d++){const c=s[d];let u,f,_=-1,h=0;for(;h<c.length&&(a.lastIndex=h,f=a.exec(c),f!==null);)h=a.lastIndex,a===Le?f[1]==="!--"?a=qt:f[1]!==void 0?a=jt:f[2]!==void 0?(li.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=pe):f[3]!==void 0&&(a=pe):a===pe?f[0]===">"?(a=o??Le,_=-1):f[1]===void 0?_=-2:(_=a.lastIndex-f[2].length,u=f[1],a=f[3]===void 0?pe:f[3]==='"'?Wt:Gt):a===Wt||a===Gt?a=pe:a===qt||a===jt?a=Le:(a=pe,o=void 0);const p=a===pe&&s[d+1].startsWith("/>")?" ":"";r+=a===Le?c+Ui:_>=0?(i.push(u),c.slice(0,_)+ai+c.slice(_)+ne+p):c+ne+(_===-2?d:p)}return[di(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Be{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,a=0;const d=e.length-1,c=this.parts,[u,f]=qi(e,t);if(this.el=Be.createElement(u,i),_e.currentNode=this.el.content,t===2||t===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(o=_e.nextNode())!==null&&c.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const _ of o.getAttributeNames())if(_.endsWith(ai)){const h=f[a++],p=o.getAttribute(_).split(ne),x=/([.?@])?(.*)/.exec(h);c.push({type:1,index:r,name:x[2],strings:p,ctor:x[1]==="."?Gi:x[1]==="?"?Wi:x[1]==="@"?Ki:et}),o.removeAttribute(_)}else _.startsWith(ne)&&(c.push({type:6,index:r}),o.removeAttribute(_));if(li.test(o.tagName)){const _=o.textContent.split(ne),h=_.length-1;if(h>0){o.textContent=Ye?Ye.emptyScript:"";for(let p=0;p<h;p++)o.append(_[p],Pe()),_e.nextNode(),c.push({type:2,index:++r});o.append(_[h],Pe())}}}else if(o.nodeType===8)if(o.data===ni)c.push({type:2,index:r});else{let _=-1;for(;(_=o.data.indexOf(ne,_+1))!==-1;)c.push({type:7,index:r}),_+=ne.length-1}r++}}static createElement(e,t){const i=ve.createElement("template");return i.innerHTML=e,i}}function Ce(s,e,t=s,i){var a,d;if(e===Q)return e;let o=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const r=Ue(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((d=o==null?void 0:o._$AO)==null||d.call(o,!1),r===void 0?o=void 0:(o=new r(s),o._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=Ce(s,o._$AS(s,e.values),o,i)),e}class ji{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??ve).importNode(t,!0);_e.currentNode=o;let r=_e.nextNode(),a=0,d=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new He(r,r.nextSibling,this,e):c.type===1?u=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(u=new Yi(r,this,e)),this._$AV.push(u),c=i[++d]}a!==(c==null?void 0:c.index)&&(r=_e.nextNode(),a++)}return _e.currentNode=ve,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class He{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ce(this,e,t),Ue(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==Q&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Bi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&Ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(ve.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Be.createElement(di(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(t);else{const a=new ji(o,this),d=a.u(this.options);a.p(t),this.T(d),this._$AH=a}}_$AC(e){let t=Kt.get(e.strings);return t===void 0&&Kt.set(e.strings,t=new Be(e)),t}k(e){$t(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new He(this.O(Pe()),this.O(Pe()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const o=Bt(e).nextSibling;Bt(e).remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}_$AI(e,t=this,i,o){const r=this.strings;let a=!1;if(r===void 0)e=Ce(this,e,t,0),a=!Ue(e)||e!==this._$AH&&e!==Q,a&&(this._$AH=e);else{const d=e;let c,u;for(e=r[0],c=0;c<r.length-1;c++)u=Ce(this,d[i+c],t,c),u===Q&&(u=this._$AH[c]),a||(a=!Ue(u)||u!==this._$AH[c]),u===A?e=A:e!==A&&(e+=(u??"")+r[c+1]),this._$AH[c]=u}a&&!o&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Gi extends et{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class Wi extends et{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class Ki extends et{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=Ce(this,e,t,0)??A)===Q)return;const i=this._$AH,o=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==A&&(i===A||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Yi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ce(this,e)}}const lt=Fe.litHtmlPolyfillSupport;lt==null||lt(Be,He),(Fe.litHtmlVersions??(Fe.litHtmlVersions=[])).push("3.3.2");const _t=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=o=new He(e.insertBefore(Pe(),r),r,void 0,t??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=globalThis;let Z=class extends Ee{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_t(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Q}};var si;Z._$litElement$=!0,Z.finalized=!0,(si=ge.litElementHydrateSupport)==null||si.call(ge,{LitElement:Z});const dt=ge.litElementPolyfillSupport;dt==null||dt({LitElement:Z});(ge.litElementVersions??(ge.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:St},Ji=(s=Zi,e,t)=>{const{kind:i,metadata:o}=t;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),i==="accessor"){const{name:a}=t;return{set(d){const c=e.get.call(this);e.set.call(this,d),this.requestUpdate(a,c,s,!0,d)},init(d){return d!==void 0&&this.C(a,void 0,s,d),d}}}if(i==="setter"){const{name:a}=t;return function(d){const c=this[a];e.call(this,d),this.requestUpdate(a,c,s,!0,d)}}throw Error("Unsupported decorator location: "+i)};function M(s){return(e,t)=>typeof t=="object"?Ji(s,e,t):((i,o,r)=>{const a=o.hasOwnProperty(r);return o.constructor.createProperty(r,i),a?Object.getOwnPropertyDescriptor(o,r):void 0})(s,e,t)}const ci=new WeakMap;function Xi(s,e){let t=e;for(;t;){if(ci.get(t)===s)return!0;t=Object.getPrototypeOf(t)}return!1}function D(s){return e=>{if(Xi(s,e))return e;const t=s(e);return ci.set(t,s),t}}const Qi=s=>class extends s{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){this._requestedToBeDisabled===!1&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){this._requestedToBeDisabled===!0&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="disabled"&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),this.disabled===!1&&this._requestedToBeDisabled===!0&&this.__internalSetDisabled(!0))}click(){this.disabled||super.click()}},tt=D(Qi),es=s=>{var e,t;return t=class extends tt(s){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),this._requestedToBeDisabled===!1&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}__internalSetTabIndex(o){this.__isUserSettingTabIndex=!1,this.tabIndex=o,this.__isUserSettingTabIndex=!0}requestUpdate(o,r,a){super.requestUpdate(o,r,a),o==="disabled"&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),o==="tabIndex"&&(this.__isUserSettingTabIndex&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex),this.tabIndex!==-1&&this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(-1))}firstUpdated(o){super.firstUpdated(o),this.disabled&&this.__internalSetTabIndex(-1)}},q(t,"enabledWarnings",((e=$e(t,t,"enabledWarnings"))==null?void 0:e.filter(o=>o!=="change-in-update"))||[]),t},ts=D(es);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=s=>s===null||typeof s!="object"&&typeof s!="function",ss=(s,e)=>(s==null?void 0:s._$litType$)!==void 0,os=s=>s.strings===void 0;function Yt(s,e){let t=!1;Array.from(s.childNodes).forEach(i=>{const o=i.hasAttribute&&i.hasAttribute("slot");if(i.nodeType===Node.COMMENT_NODE&&!t&&(t=i.textContent.includes("_start_slot_")),t){i.textContent.includes("_end_slot_")&&(t=!1);return}o||e.appendChild(i)})}function rs(s){return s instanceof Node?"node":ss(s)?"template-result":!Array.isArray(s)&&typeof s=="object"&&"template"in s?"slot-rerender-object":null}const as=s=>class extends s{get slots(){return{}}constructor(){super(),this.__renderMetaPerSlot=new Map,this.__slotsThatNeedRerender=new Set,this.__slotsProvidedByUserOnFirstConnected=new Set,this.__privateSlots=new Set}connectedCallback(){super.connectedCallback(),this._connectSlotMixin()}__rerenderSlot(t){var o;const i=this.slots[t]();this.__renderTemplateInScopedContext({renderAsDirectHostChild:i.renderAsDirectHostChild,template:i.template,slotName:t}),(o=i.afterRender)==null||o.call(i)}update(t){super.update(t);for(const i of this.__slotsThatNeedRerender)this.__rerenderSlot(i)}__renderTemplateInScopedContext({template:t,slotName:i,renderAsDirectHostChild:o}){if(!this.__renderMetaPerSlot.has(i)){const h=!!ShadowRoot.prototype.createElement;!!this.shadowRoot||console.error("[SlotMixin] No shadowRoot was found");const E=(h?this.shadowRoot:document).createElement("div"),$=document.createComment(`_start_slot_${i}_`),w=document.createComment(`_end_slot_${i}_`);E.appendChild($),E.appendChild(w);const{creationScope:F,host:R}=this.renderOptions;if(_t(t,E,{renderBefore:w,creationScope:F,host:R}),o){const N=Array.from(E.childNodes);this.__appendNodes({nodes:N,renderParent:this,slotName:i})}else E.slot=i,this.appendChild(E);this.__renderMetaPerSlot.set(i,{renderTargetThatRespectsShadowRootScoping:E,renderBefore:w});return}const{renderBefore:a,renderTargetThatRespectsShadowRootScoping:d}=this.__renderMetaPerSlot.get(i),c=o?this:d,{creationScope:u,host:f}=this.renderOptions;_t(t,c,{creationScope:u,host:f,renderBefore:a}),o&&a.previousElementSibling&&!a.previousElementSibling.slot&&(a.previousElementSibling.slot=i)}__appendNodes({nodes:t,renderParent:i=this,slotName:o}){for(const r of t)r instanceof Element&&o&&o!==""&&r.setAttribute("slot",o),i.appendChild(r)}__initSlots(t){for(const i of t){if(this.__slotsProvidedByUserOnFirstConnected.has(i))continue;const o=this.slots[i]();if(o===void 0)continue;switch(this.__isConnectedSlotMixin||this.__privateSlots.add(i),rs(o)){case"template-result":this.__renderTemplateInScopedContext({template:o,renderAsDirectHostChild:!0,slotName:i});break;case"node":this.__appendNodes({nodes:[o],renderParent:this,slotName:i});break;case"slot-rerender-object":this.__slotsThatNeedRerender.add(i),o.firstRenderOnConnected&&this.__rerenderSlot(i);break;default:throw new Error(`Slot "${i}" configured inside "get slots()" (in prototype) of ${this.constructor.name} may return these types: TemplateResult | Node | {template:TemplateResult, afterRender?:function} | undefined.
              You provided: ${o}`)}}}_connectSlotMixin(){if(this.__isConnectedSlotMixin)return;const t=Object.keys(this.slots);for(const i of t)(i===""?Array.from(this.children).find(r=>!r.hasAttribute("slot")):Array.from(this.children).find(r=>r.slot===i))&&this.__slotsProvidedByUserOnFirstConnected.add(i);this.__initSlots(t),this.__isConnectedSlotMixin=!0}_isPrivateSlot(t){return this.__privateSlots.has(t)}},qe=D(as);function hi(s=""){return`${s.length>0?`${s}-`:""}${Math.random().toString(36).substr(2,10)}`}const ct=s=>s.key===" "||s.key==="Enter",Zt=s=>s.key===" ";class ns extends ts(Z){static get properties(){return{active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return C` <div class="button-content"><slot></slot></div> `}static get styles(){return[G`
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
      `]}constructor(){super(),this.type="button",this.active=!1,this.__setupEvents()}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","button")}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.getAttribute("aria-disabled")!==null&&this.removeAttribute("aria-disabled"))}__setupEvents(){this.addEventListener("mousedown",this.__mousedownHandler),this.addEventListener("keydown",this.__keydownHandler),this.addEventListener("keyup",this.__keyupHandler)}__mousedownHandler(){this.active=!0;const e=()=>{this.active=!1,document.removeEventListener("mouseup",e),this.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e),this.addEventListener("mouseup",e)}__keydownHandler(e){if(this.active||!ct(e)){Zt(e)&&e.preventDefault();return}Zt(e)&&e.preventDefault(),this.active=!0;const t=i=>{ct(i)&&(this.active=!1,document.removeEventListener("keyup",t,!0))};document.addEventListener("keyup",t,!0)}__keyupHandler(e){if(ct(e)){if(e.target&&e.target!==this)return;this.click()}}}const ls=G`
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
 */const ui={CHILD:2},pi=s=>(...e)=>({_$litDirective$:s,values:e});let fi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mt=class extends fi{constructor(e){if(super(e),this.it=A,e.type!==ui.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===A||e==null)return this._t=void 0,this.it=e;if(e===Q)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};mt.directiveName="unsafeHTML",mt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gt=class extends mt{};gt.directiveName="unsafeSVG",gt.resultType=2;const ds=pi(gt),cs=G`
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
`;var Ne=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(a=s[d])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ce=class extends Z{constructor(){super(...arguments),this.name="",this.size="md",this.fill=!1,this.animated=!1}async replay(){if(!this.animated){this.animated=!0,await this.updateComplete;return}this.animated=!1,await this.updateComplete,this.getBoundingClientRect(),this.animated=!0,await this.updateComplete}render(){const e=this.animated&&Si(this.name,"rounded",this.fill)||$i(this.name,"rounded",this.fill);if(!e)return A;const t=!this.label,i=Li.has(this.name)||Vi.has(this.name)?"0 0 24 24":"0 -960 960 960";return C`
      <svg
        part="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox=${i}
        fill="currentColor"
        role=${t?"presentation":"img"}
        aria-hidden=${t?"true":"false"}
        aria-label=${this.label??A}
      >
        ${ds(e)}
      </svg>
    `}};ce.styles=[cs];Ne([M({reflect:!0})],ce.prototype,"name",void 0);Ne([M({reflect:!0})],ce.prototype,"size",void 0);Ne([M({type:Boolean,reflect:!0})],ce.prototype,"fill",void 0);Ne([M({type:Boolean,reflect:!0})],ce.prototype,"animated",void 0);Ne([M()],ce.prototype,"label",void 0);ce=Ne([ke("co-icon")],ce);var Ae=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(a=s[d])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let be=class extends ns{constructor(){super(...arguments),this.variant="primary",this.size="md",this.loading=!1,this._handleFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleClick=()=>{this.disabled||!this.href||(this.target&&this.target!=="_self"?window.open(this.href,this.target,this.target==="_blank"?"noopener,noreferrer":""):window.location.href=this.href)}}static get styles(){return[...super.styles,ls]}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur),this.removeEventListener("click",this._handleClick)}render(){return this.href?C`
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
      `:C`
      <div part="base" class="button">
        <slot name="prefix" part="prefix"></slot>
        <slot part="label"></slot>
        <slot name="suffix" part="suffix"></slot>
        ${this.loading?C`<co-icon
              part="spinner"
              name="progress-activity"
              size=${{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]}
              animated
              aria-hidden="true"
            ></co-icon>`:""}
      </div>
    `}};Ae([M({reflect:!0})],be.prototype,"variant",void 0);Ae([M({reflect:!0})],be.prototype,"size",void 0);Ae([M({type:Boolean,reflect:!0})],be.prototype,"loading",void 0);Ae([M({reflect:!0})],be.prototype,"href",void 0);Ae([M({reflect:!0})],be.prototype,"target",void 0);be=Ae([ke("co-button")],be);const vt=window,Jt=new WeakMap;function hs(s){vt.applyFocusVisiblePolyfill&&!Jt.has(s)&&(vt.applyFocusVisiblePolyfill(s),Jt.set(s,void 0))}const us=s=>class extends s{static get properties(){return{focused:{type:Boolean,reflect:!0},focusedVisible:{type:Boolean,reflect:!0,attribute:"focused-visible"},autofocus:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1,this.focusedVisible=!1,this.autofocus=!1}firstUpdated(t){super.firstUpdated(t),this.__registerEventsForFocusMixin(),this.__syncAutofocusToFocusableElement()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForFocusMixin()}updated(t){super.updated(t),t.has("autofocus")&&this.__syncAutofocusToFocusableElement()}__syncAutofocusToFocusableElement(){this._focusableNode&&(this.hasAttribute("autofocus")?this._focusableNode.setAttribute("autofocus",""):this._focusableNode.removeAttribute("autofocus"))}focus(){var t;(t=this._focusableNode)==null||t.focus()}blur(){var t;(t=this._focusableNode)==null||t.blur()}get _focusableNode(){return this._inputNode||document.createElement("input")}__onFocus(){if(this.focused=!0,typeof vt.applyFocusVisiblePolyfill=="function")this.focusedVisible=this._focusableNode.hasAttribute("data-focus-visible-added");else try{this.focusedVisible=this._focusableNode.matches(":focus-visible")}catch{this.focusedVisible=!1}}__onBlur(){this.focused=!1,this.focusedVisible=!1}__registerEventsForFocusMixin(){hs(this.getRootNode()),this.__redispatchFocus=t=>{t.stopPropagation(),this.dispatchEvent(new Event("focus"))},this._focusableNode.addEventListener("focus",this.__redispatchFocus),this.__redispatchBlur=t=>{t.stopPropagation(),this.dispatchEvent(new Event("blur"))},this._focusableNode.addEventListener("blur",this.__redispatchBlur),this.__redispatchFocusin=t=>{t.stopPropagation(),this.__onFocus(),this.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusin",this.__redispatchFocusin),this.__redispatchFocusout=t=>{t.stopPropagation(),this.__onBlur(),this.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusout",this.__redispatchFocusout)}__teardownEventsForFocusMixin(){var t,i,o,r;this._focusableNode&&((t=this._focusableNode)==null||t.removeEventListener("focus",this.__redispatchFocus),(i=this._focusableNode)==null||i.removeEventListener("blur",this.__redispatchBlur),(o=this._focusableNode)==null||o.removeEventListener("focusin",this.__redispatchFocusin),(r=this._focusableNode)==null||r.removeEventListener("focusout",this.__redispatchFocusout))}},Lt=D(us);function _i(s,e){return e={exports:{}},s(e,e.exports),e.exports}var fe="long",se="short",ht="narrow",L="numeric",oe="2-digit",re={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:L,day:L,year:oe},medium:{month:se,day:L,year:L},long:{month:fe,day:L,year:L},full:{month:fe,day:L,year:L,weekday:fe},default:{month:se,day:L,year:L}},time:{short:{hour:L,minute:L},medium:{hour:L,minute:L,second:L},long:{hour:L,minute:L,second:L,timeZoneName:se},full:{hour:L,minute:L,second:L,timeZoneName:se},default:{hour:L,minute:L,second:L}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(s){if(s){var e={},t=s.match(/\b[A-Z]{3}\b/i),i=s.replace(/[^¤]/g,"").length;if(!i&&t&&(i=1),i?(e.style="currency",e.currencyDisplay=i===1?"symbol":i===2?"code":"name",e.currency=t?t[0].toUpperCase():"USD"):s.indexOf("%")>=0&&(e.style="percent"),!/[@#0]/.test(s))return e.style?e:void 0;if(e.useGrouping=s.indexOf(",")>=0,/E\+?[@#0]+/i.test(s)||s.indexOf("@")>=0){var o=s.replace(/E\+?[@#0]+|[^@#0]/gi,"");e.minimumSignificantDigits=Math.min(Math.max(o.replace(/[^@0]/g,"").length,1),21),e.maximumSignificantDigits=Math.min(Math.max(o.length,1),21)}else{for(var r=s.replace(/[^#0.]/g,"").split("."),a=r[0],d=a.length-1;a[d]==="0";)--d;e.minimumIntegerDigits=Math.min(Math.max(a.length-1-d,1),21);var c=r[1]||"";for(d=0;c[d]==="0";)++d;for(e.minimumFractionDigits=Math.min(Math.max(d,0),20);c[d]==="#";)++d;e.maximumFractionDigits=Math.min(Math.max(d,0),20)}return e}},parseDatePattern:function(s){if(s){for(var e={},t=0;t<s.length;){for(var i=s[t],o=1;s[++t]===i;)++o;switch(i){case"G":e.era=o===5?ht:o===4?fe:se;break;case"y":case"Y":e.year=o===2?oe:L;break;case"M":case"L":o=Math.min(Math.max(o-1,0),4),e.month=[L,oe,se,fe,ht][o];break;case"E":case"e":case"c":e.weekday=o===5?ht:o===4?fe:se;break;case"d":case"D":e.day=o===2?oe:L;break;case"h":case"K":e.hour12=!0,e.hour=o===2?oe:L;break;case"H":case"k":e.hour12=!1,e.hour=o===2?oe:L;break;case"m":e.minute=o===2?oe:L;break;case"s":case"S":e.second=o===2?oe:L;break;case"z":case"Z":case"v":case"V":e.timeZoneName=o===1?se:fe;break}}return Object.keys(e).length?e:void 0}}},ps=function(e,t){if(typeof e=="string"&&t[e])return e;for(var i=[].concat(e||[]),o=0,r=i.length;o<r;++o)for(var a=i[o].split("-");a.length;){var d=a.join("-");if(t[d])return d;a.pop()}},xe="zero",y="one",P="two",O="few",I="many",m="other",l=[function(s){var e=+s;return e===1?y:m},function(s){var e=+s;return 0<=e&&e<=1?y:m},function(s){var e=Math.floor(Math.abs(+s)),t=+s;return e===0||t===1?y:m},function(s){var e=+s;return e===0?xe:e===1?y:e===2?P:3<=e%100&&e%100<=10?O:11<=e%100&&e%100<=99?I:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length;return e===1&&t===0?y:m},function(s){var e=+s;return e%10===1&&e%100!==11?y:2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?O:e%10===0||5<=e%10&&e%10<=9||11<=e%100&&e%100<=14?I:m},function(s){var e=+s;return e%10===1&&e%100!==11&&e%100!==71&&e%100!==91?y:e%10===2&&e%100!==12&&e%100!==72&&e%100!==92?P:(3<=e%10&&e%10<=4||e%10===9)&&(e%100<10||19<e%100)&&(e%100<70||79<e%100)&&(e%100<90||99<e%100)?O:e!==0&&e%1e6===0?I:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length,i=+(s+".").split(".")[1];return t===0&&e%10===1&&e%100!==11||i%10===1&&i%100!==11?y:t===0&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)||2<=i%10&&i%10<=4&&(i%100<12||14<i%100)?O:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length;return e===1&&t===0?y:2<=e&&e<=4&&t===0?O:t!==0?I:m},function(s){var e=+s;return e===0?xe:e===1?y:e===2?P:e===3?O:e===6?I:m},function(s){var e=Math.floor(Math.abs(+s)),t=+(""+s).replace(/^[^.]*.?|0+$/g,""),i=+s;return i===1||t!==0&&(e===0||e===1)?y:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length,i=+(s+".").split(".")[1];return t===0&&e%100===1||i%100===1?y:t===0&&e%100===2||i%100===2?P:t===0&&3<=e%100&&e%100<=4||3<=i%100&&i%100<=4?O:m},function(s){var e=Math.floor(Math.abs(+s));return e===0||e===1?y:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length,i=+(s+".").split(".")[1];return t===0&&(e===1||e===2||e===3)||t===0&&e%10!==4&&e%10!==6&&e%10!==9||t!==0&&i%10!==4&&i%10!==6&&i%10!==9?y:m},function(s){var e=+s;return e===1?y:e===2?P:3<=e&&e<=6?O:7<=e&&e<=10?I:m},function(s){var e=+s;return e===1||e===11?y:e===2||e===12?P:3<=e&&e<=10||13<=e&&e<=19?O:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length;return t===0&&e%10===1?y:t===0&&e%10===2?P:t===0&&(e%100===0||e%100===20||e%100===40||e%100===60||e%100===80)?O:t!==0?I:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length,i=+s;return e===1&&t===0?y:e===2&&t===0?P:t===0&&(i<0||10<i)&&i%10===0?I:m},function(s){var e=Math.floor(Math.abs(+s)),t=+(""+s).replace(/^[^.]*.?|0+$/g,"");return t===0&&e%10===1&&e%100!==11||t!==0?y:m},function(s){var e=+s;return e===1?y:e===2?P:m},function(s){var e=+s;return e===0?xe:e===1?y:m},function(s){var e=Math.floor(Math.abs(+s)),t=+s;return t===0?xe:(e===0||e===1)&&t!==0?y:m},function(s){var e=+(s+".").split(".")[1],t=+s;return t%10===1&&(t%100<11||19<t%100)?y:2<=t%10&&t%10<=9&&(t%100<11||19<t%100)?O:e!==0?I:m},function(s){var e=(s+".").split(".")[1].length,t=+(s+".").split(".")[1],i=+s;return i%10===0||11<=i%100&&i%100<=19||e===2&&11<=t%100&&t%100<=19?xe:i%10===1&&i%100!==11||e===2&&t%10===1&&t%100!==11||e!==2&&t%10===1?y:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length,i=+(s+".").split(".")[1];return t===0&&e%10===1&&e%100!==11||i%10===1&&i%100!==11?y:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length,i=+s;return e===1&&t===0?y:t!==0||i===0||i!==1&&1<=i%100&&i%100<=19?O:m},function(s){var e=+s;return e===1?y:e===0||2<=e%100&&e%100<=10?O:11<=e%100&&e%100<=19?I:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length;return e===1&&t===0?y:t===0&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?O:t===0&&e!==1&&0<=e%10&&e%10<=1||t===0&&5<=e%10&&e%10<=9||t===0&&12<=e%100&&e%100<=14?I:m},function(s){var e=Math.floor(Math.abs(+s));return 0<=e&&e<=1?y:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length;return t===0&&e%10===1&&e%100!==11?y:t===0&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?O:t===0&&e%10===0||t===0&&5<=e%10&&e%10<=9||t===0&&11<=e%100&&e%100<=14?I:m},function(s){var e=Math.floor(Math.abs(+s)),t=+s;return e===0||t===1?y:2<=t&&t<=10?O:m},function(s){var e=Math.floor(Math.abs(+s)),t=+(s+".").split(".")[1],i=+s;return i===0||i===1||e===0&&t===1?y:m},function(s){var e=Math.floor(Math.abs(+s)),t=(s+".").split(".")[1].length;return t===0&&e%100===1?y:t===0&&e%100===2?P:t===0&&3<=e%100&&e%100<=4||t!==0?O:m},function(s){var e=+s;return 0<=e&&e<=1||11<=e&&e<=99?y:m},function(s){var e=+s;return e===1||e===5||e===7||e===8||e===9||e===10?y:e===2||e===3?P:e===4?O:e===6?I:m},function(s){var e=Math.floor(Math.abs(+s));return e%10===1||e%10===2||e%10===5||e%10===7||e%10===8||e%100===20||e%100===50||e%100===70||e%100===80?y:e%10===3||e%10===4||e%1e3===100||e%1e3===200||e%1e3===300||e%1e3===400||e%1e3===500||e%1e3===600||e%1e3===700||e%1e3===800||e%1e3===900?O:e===0||e%10===6||e%100===40||e%100===60||e%100===90?I:m},function(s){var e=+s;return(e%10===2||e%10===3)&&e%100!==12&&e%100!==13?O:m},function(s){var e=+s;return e===1||e===3?y:e===2?P:e===4?O:m},function(s){var e=+s;return e===0||e===7||e===8||e===9?xe:e===1?y:e===2?P:e===3||e===4?O:e===5||e===6?I:m},function(s){var e=+s;return e%10===1&&e%100!==11?y:e%10===2&&e%100!==12?P:e%10===3&&e%100!==13?O:m},function(s){var e=+s;return e===1||e===11?y:e===2||e===12?P:e===3||e===13?O:m},function(s){var e=+s;return e===1?y:e===2||e===3?P:e===4?O:e===6?I:m},function(s){var e=+s;return e===1||e===5?y:m},function(s){var e=+s;return e===11||e===8||e===80||e===800?I:m},function(s){var e=Math.floor(Math.abs(+s));return e===1?y:e===0||2<=e%100&&e%100<=20||e%100===40||e%100===60||e%100===80?I:m},function(s){var e=+s;return e%10===6||e%10===9||e%10===0&&e!==0?I:m},function(s){var e=Math.floor(Math.abs(+s));return e%10===1&&e%100!==11?y:e%10===2&&e%100!==12?P:(e%10===7||e%10===8)&&e%100!==17&&e%100!==18?I:m},function(s){var e=+s;return e===1?y:e===2||e===3?P:e===4?O:m},function(s){var e=+s;return 1<=e&&e<=4?y:m},function(s){var e=+s;return e===1||e===5||7<=e&&e<=9?y:e===2||e===3?P:e===4?O:e===6?I:m},function(s){var e=+s;return e===1?y:e%10===4&&e%100!==14?I:m},function(s){var e=+s;return(e%10===1||e%10===2)&&e%100!==11&&e%100!==12?y:m},function(s){var e=+s;return e%10===6||e%10===9||e===10?O:m},function(s){var e=+s;return e%10===3&&e%100!==13?O:m}],bt={af:{cardinal:l[0]},ak:{cardinal:l[1]},am:{cardinal:l[2]},ar:{cardinal:l[3]},ars:{cardinal:l[3]},as:{cardinal:l[2],ordinal:l[34]},asa:{cardinal:l[0]},ast:{cardinal:l[4]},az:{cardinal:l[0],ordinal:l[35]},be:{cardinal:l[5],ordinal:l[36]},bem:{cardinal:l[0]},bez:{cardinal:l[0]},bg:{cardinal:l[0]},bh:{cardinal:l[1]},bn:{cardinal:l[2],ordinal:l[34]},br:{cardinal:l[6]},brx:{cardinal:l[0]},bs:{cardinal:l[7]},ca:{cardinal:l[4],ordinal:l[37]},ce:{cardinal:l[0]},cgg:{cardinal:l[0]},chr:{cardinal:l[0]},ckb:{cardinal:l[0]},cs:{cardinal:l[8]},cy:{cardinal:l[9],ordinal:l[38]},da:{cardinal:l[10]},de:{cardinal:l[4]},dsb:{cardinal:l[11]},dv:{cardinal:l[0]},ee:{cardinal:l[0]},el:{cardinal:l[0]},en:{cardinal:l[4],ordinal:l[39]},eo:{cardinal:l[0]},es:{cardinal:l[0]},et:{cardinal:l[4]},eu:{cardinal:l[0]},fa:{cardinal:l[2]},ff:{cardinal:l[12]},fi:{cardinal:l[4]},fil:{cardinal:l[13],ordinal:l[0]},fo:{cardinal:l[0]},fr:{cardinal:l[12],ordinal:l[0]},fur:{cardinal:l[0]},fy:{cardinal:l[4]},ga:{cardinal:l[14],ordinal:l[0]},gd:{cardinal:l[15],ordinal:l[40]},gl:{cardinal:l[4]},gsw:{cardinal:l[0]},gu:{cardinal:l[2],ordinal:l[41]},guw:{cardinal:l[1]},gv:{cardinal:l[16]},ha:{cardinal:l[0]},haw:{cardinal:l[0]},he:{cardinal:l[17]},hi:{cardinal:l[2],ordinal:l[41]},hr:{cardinal:l[7]},hsb:{cardinal:l[11]},hu:{cardinal:l[0],ordinal:l[42]},hy:{cardinal:l[12],ordinal:l[0]},ia:{cardinal:l[4]},io:{cardinal:l[4]},is:{cardinal:l[18]},it:{cardinal:l[4],ordinal:l[43]},iu:{cardinal:l[19]},iw:{cardinal:l[17]},jgo:{cardinal:l[0]},ji:{cardinal:l[4]},jmc:{cardinal:l[0]},ka:{cardinal:l[0],ordinal:l[44]},kab:{cardinal:l[12]},kaj:{cardinal:l[0]},kcg:{cardinal:l[0]},kk:{cardinal:l[0],ordinal:l[45]},kkj:{cardinal:l[0]},kl:{cardinal:l[0]},kn:{cardinal:l[2]},ks:{cardinal:l[0]},ksb:{cardinal:l[0]},ksh:{cardinal:l[20]},ku:{cardinal:l[0]},kw:{cardinal:l[19]},ky:{cardinal:l[0]},lag:{cardinal:l[21]},lb:{cardinal:l[0]},lg:{cardinal:l[0]},ln:{cardinal:l[1]},lt:{cardinal:l[22]},lv:{cardinal:l[23]},mas:{cardinal:l[0]},mg:{cardinal:l[1]},mgo:{cardinal:l[0]},mk:{cardinal:l[24],ordinal:l[46]},ml:{cardinal:l[0]},mn:{cardinal:l[0]},mo:{cardinal:l[25],ordinal:l[0]},mr:{cardinal:l[2],ordinal:l[47]},mt:{cardinal:l[26]},nah:{cardinal:l[0]},naq:{cardinal:l[19]},nb:{cardinal:l[0]},nd:{cardinal:l[0]},ne:{cardinal:l[0],ordinal:l[48]},nl:{cardinal:l[4]},nn:{cardinal:l[0]},nnh:{cardinal:l[0]},no:{cardinal:l[0]},nr:{cardinal:l[0]},nso:{cardinal:l[1]},ny:{cardinal:l[0]},nyn:{cardinal:l[0]},om:{cardinal:l[0]},or:{cardinal:l[0],ordinal:l[49]},os:{cardinal:l[0]},pa:{cardinal:l[1]},pap:{cardinal:l[0]},pl:{cardinal:l[27]},prg:{cardinal:l[23]},ps:{cardinal:l[0]},pt:{cardinal:l[28]},"pt-PT":{cardinal:l[4]},rm:{cardinal:l[0]},ro:{cardinal:l[25],ordinal:l[0]},rof:{cardinal:l[0]},ru:{cardinal:l[29]},rwk:{cardinal:l[0]},saq:{cardinal:l[0]},sc:{cardinal:l[4],ordinal:l[43]},scn:{cardinal:l[4],ordinal:l[43]},sd:{cardinal:l[0]},sdh:{cardinal:l[0]},se:{cardinal:l[19]},seh:{cardinal:l[0]},sh:{cardinal:l[7]},shi:{cardinal:l[30]},si:{cardinal:l[31]},sk:{cardinal:l[8]},sl:{cardinal:l[32]},sma:{cardinal:l[19]},smi:{cardinal:l[19]},smj:{cardinal:l[19]},smn:{cardinal:l[19]},sms:{cardinal:l[19]},sn:{cardinal:l[0]},so:{cardinal:l[0]},sq:{cardinal:l[0],ordinal:l[50]},sr:{cardinal:l[7]},ss:{cardinal:l[0]},ssy:{cardinal:l[0]},st:{cardinal:l[0]},sv:{cardinal:l[4],ordinal:l[51]},sw:{cardinal:l[4]},syr:{cardinal:l[0]},ta:{cardinal:l[0]},te:{cardinal:l[0]},teo:{cardinal:l[0]},ti:{cardinal:l[1]},tig:{cardinal:l[0]},tk:{cardinal:l[0],ordinal:l[52]},tl:{cardinal:l[13],ordinal:l[0]},tn:{cardinal:l[0]},tr:{cardinal:l[0]},ts:{cardinal:l[0]},tzm:{cardinal:l[33]},ug:{cardinal:l[0]},uk:{cardinal:l[29],ordinal:l[53]},ur:{cardinal:l[4]},uz:{cardinal:l[0]},ve:{cardinal:l[0]},vo:{cardinal:l[0]},vun:{cardinal:l[0]},wa:{cardinal:l[1]},wae:{cardinal:l[0]},xh:{cardinal:l[0]},xog:{cardinal:l[0]},yi:{cardinal:l[4]},zu:{cardinal:l[2]},lo:{ordinal:l[0]},ms:{ordinal:l[0]},vi:{ordinal:l[0]}},it=_i(function(s,e){e=s.exports=function(p,x,E){return t(p,null,x||"en",E||{},!0)},e.toParts=function(p,x,E){return t(p,null,x||"en",E||{},!1)};function t(h,p,x,E,$){var w=h.map(function(F){return i(F,p,x,E,$)});return $?w.length===1?w[0]:function(R){for(var N="",B=0;B<w.length;++B)N+=w[B](R);return N}:function(R){return w.reduce(function(N,B){return N.concat(B(R))},[])}}function i(h,p,x,E,$){if(typeof h=="string"){var w=h;return function(){return w}}var F=h[0],R=h[1];if(p&&h[0]==="#"){F=p[0];var N=p[2],B=(E.number||_.number)([F,"number"],x);return function(V){return B(o(F,V)-N,V)}}var H;R==="plural"||R==="selectordinal"?(H={},Object.keys(h[3]).forEach(function(K){H[K]=t(h[3][K],h,x,E,$)}),h=[h[0],h[1],h[2],H]):h[2]&&typeof h[2]=="object"&&(H={},Object.keys(h[2]).forEach(function(K){H[K]=t(h[2][K],h,x,E,$)}),h=[h[0],h[1],H]);var W=R&&(E[R]||_[R]);if(W){var J=W(h,x);return function(V){return J(o(F,V),V)}}return $?function(V){return String(o(F,V))}:function(V){return o(F,V)}}function o(h,p){if(p&&h in p)return p[h];for(var x=h.split("."),E=p,$=0,w=x.length;E&&$<w;++$)E=E[x[$]];return E}function r(h,p){var x=h[2],E=re.number[x]||re.parseNumberPattern(x)||re.number.default;return new Intl.NumberFormat(p,E).format}function a(h,p){var x=h[2],E=re.duration[x]||re.duration.default,$=new Intl.NumberFormat(p,E.seconds).format,w=new Intl.NumberFormat(p,E.minutes).format,F=new Intl.NumberFormat(p,E.hours).format,R=/^fi$|^fi-|^da/.test(String(p))?".":":";return function(N,B){if(N=+N,!isFinite(N))return $(N);var H=~~(N/60/60),W=~~(N/60%60),J=(H?F(Math.abs(H))+R:"")+w(Math.abs(W))+R+$(Math.abs(N%60));return N<0?F(-1).replace(F(1),J):J}}function d(h,p){var x=h[1],E=h[2],$=re[x][E]||re.parseDatePattern(E)||re[x].default;return new Intl.DateTimeFormat(p,$).format}function c(h,p){var x=h[1],E=x==="selectordinal"?"ordinal":"cardinal",$=h[2],w=h[3],F;if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(p).length>0)F=new Intl.PluralRules(p,{type:E});else{var R=ps(p,bt),N=R&&bt[R][E]||u;F={select:N}}return function(B,H){var W=w["="+ +B]||w[F.select(B-$)]||w.other;return W(H)}}function u(){return"other"}function f(h,p){var x=h[2];return function(E,$){var w=x[E]||x.other;return w($)}}var _={number:r,ordinal:r,spellout:r,duration:a,date:d,time:d,plural:c,selectordinal:c,select:f};e.types=_});it.toParts;it.types;var mi=_i(function(s,e){var t="{",i="}",o=",",r="#",a="<",d=">",c="</",u="/>",f="'",_="offset:",h=["number","date","time","ordinal","duration","spellout"],p=["plural","select","selectordinal"];e=s.exports=function(v,b){return x({pattern:String(v),index:0,tagsType:b&&b.tagsType||null,tokens:b&&b.tokens||null},"")};function x(n,v){var b=n.pattern,S=b.length,T=[],g=n.index,U=E(n,v);for(U&&T.push(U),U&&n.tokens&&n.tokens.push(["text",b.slice(g,n.index)]);n.index<S;){if(b[n.index]===i){if(!v)throw V(n);break}if(v&&n.tagsType&&b.slice(n.index,n.index+c.length)===c)break;T.push(F(n)),g=n.index,U=E(n,v),U&&T.push(U),U&&n.tokens&&n.tokens.push(["text",b.slice(g,n.index)])}return T}function E(n,v){for(var b=n.pattern,S=b.length,T=v==="plural"||v==="selectordinal",g=!!n.tagsType,U=v==="{style}",Y="";n.index<S;){var z=b[n.index];if(z===t||z===i||T&&z===r||g&&z===a||U&&$(z.charCodeAt(0)))break;if(z===f)if(z=b[++n.index],z===f)Y+=z,++n.index;else if(z===t||z===i||T&&z===r||g&&z===a||U)for(Y+=z;++n.index<S;)if(z=b[n.index],z===f&&b[n.index+1]===f)Y+=f,++n.index;else if(z===f){++n.index;break}else Y+=z;else Y+=f;else Y+=z,++n.index}return Y}function $(n){return n>=9&&n<=13||n===32||n===133||n===160||n===6158||n>=8192&&n<=8205||n===8232||n===8233||n===8239||n===8287||n===8288||n===12288||n===65279}function w(n){for(var v=n.pattern,b=v.length,S=n.index;n.index<b&&$(v.charCodeAt(n.index));)++n.index;S<n.index&&n.tokens&&n.tokens.push(["space",n.pattern.slice(S,n.index)])}function F(n){var v=n.pattern;if(v[n.index]===r)return n.tokens&&n.tokens.push(["syntax",r]),++n.index,[r];var b=R(n);if(b)return b;if(v[n.index]!==t)throw V(n,t);n.tokens&&n.tokens.push(["syntax",t]),++n.index,w(n);var S=N(n);if(!S)throw V(n,"placeholder id");n.tokens&&n.tokens.push(["id",S]),w(n);var T=v[n.index];if(T===i)return n.tokens&&n.tokens.push(["syntax",i]),++n.index,[S];if(T!==o)throw V(n,o+" or "+i);n.tokens&&n.tokens.push(["syntax",o]),++n.index,w(n);var g=N(n);if(!g)throw V(n,"placeholder type");if(n.tokens&&n.tokens.push(["type",g]),w(n),T=v[n.index],T===i){if(n.tokens&&n.tokens.push(["syntax",i]),g==="plural"||g==="selectordinal"||g==="select")throw V(n,g+" sub-messages");return++n.index,[S,g]}if(T!==o)throw V(n,o+" or "+i);n.tokens&&n.tokens.push(["syntax",o]),++n.index,w(n);var U;if(g==="plural"||g==="selectordinal"){var Y=H(n);w(n),U=[S,g,Y,J(n,g)]}else if(g==="select")U=[S,g,J(n,g)];else if(h.indexOf(g)>=0)U=[S,g,B(n)];else{var z=n.index,zt=B(n);w(n),v[n.index]===t&&(n.index=z,zt=J(n,g)),U=[S,g,zt]}if(w(n),v[n.index]!==i)throw V(n,i);return n.tokens&&n.tokens.push(["syntax",i]),++n.index,U}function R(n){var v=n.tagsType;if(!(!v||n.pattern[n.index]!==a)){if(n.pattern.slice(n.index,n.index+c.length)===c)throw V(n,null,"closing tag without matching opening tag");n.tokens&&n.tokens.push(["syntax",a]),++n.index;var b=N(n,!0);if(!b)throw V(n,"placeholder id");if(n.tokens&&n.tokens.push(["id",b]),w(n),n.pattern.slice(n.index,n.index+u.length)===u)return n.tokens&&n.tokens.push(["syntax",u]),n.index+=u.length,[b,v];if(n.pattern[n.index]!==d)throw V(n,d);n.tokens&&n.tokens.push(["syntax",d]),++n.index;var S=x(n,v),T=n.index;if(n.pattern.slice(n.index,n.index+c.length)!==c)throw V(n,c+b+d);n.tokens&&n.tokens.push(["syntax",c]),n.index+=c.length;var g=N(n,!0);if(g&&n.tokens&&n.tokens.push(["id",g]),b!==g)throw n.index=T,V(n,c+b+d,c+g+d);if(w(n),n.pattern[n.index]!==d)throw V(n,d);return n.tokens&&n.tokens.push(["syntax",d]),++n.index,[b,v,{children:S}]}}function N(n,v){for(var b=n.pattern,S=b.length,T="";n.index<S;){var g=b[n.index];if(g===t||g===i||g===o||g===r||g===f||$(g.charCodeAt(0))||v&&(g===a||g===d||g==="/"))break;T+=g,++n.index}return T}function B(n){var v=n.index,b=E(n,"{style}");if(!b)throw V(n,"placeholder style name");return n.tokens&&n.tokens.push(["style",n.pattern.slice(v,n.index)]),b}function H(n){var v=n.pattern,b=v.length,S=0;if(v.slice(n.index,n.index+_.length)===_){n.tokens&&n.tokens.push(["offset","offset"],["syntax",":"]),n.index+=_.length,w(n);for(var T=n.index;n.index<b&&W(v.charCodeAt(n.index));)++n.index;if(T===n.index)throw V(n,"offset number");n.tokens&&n.tokens.push(["number",v.slice(T,n.index)]),S=+v.slice(T,n.index)}return S}function W(n){return n>=48&&n<=57}function J(n,v){for(var b=n.pattern,S=b.length,T={};n.index<S&&b[n.index]!==i;){var g=N(n);if(!g)throw V(n,"sub-message selector");n.tokens&&n.tokens.push(["selector",g]),w(n),T[g]=K(n,v),w(n)}if(!T.other&&p.indexOf(v)>=0)throw V(n,null,null,'"other" sub-message must be specified in '+v);return T}function K(n,v){if(n.pattern[n.index]!==t)throw V(n,t+" to start sub-message");n.tokens&&n.tokens.push(["syntax",t]),++n.index;var b=x(n,v);if(n.pattern[n.index]!==i)throw V(n,i+" to end sub-message");return n.tokens&&n.tokens.push(["syntax",i]),++n.index,b}function V(n,v,b,S){var T=n.pattern,g=T.slice(0,n.index).split(/\r?\n/),U=n.index,Y=g.length,z=g.slice(-1)[0].length;return b=b||(n.index>=T.length?"end of message pattern":N(n)||T[n.index]),S||(S=wi(v,b)),S+=" in "+T.replace(/\r?\n/g,`
`),new ot(S,v,b,U,Y,z)}function wi(n,v){return n?"Expected "+n+" but found "+v:"Unexpected "+v+" found"}function ot(n,v,b,S,T,g){Error.call(this,n),this.name="SyntaxError",this.message=n,this.expected=v,this.found=b,this.offset=S,this.line=T,this.column=g}ot.prototype=Object.create(Error.prototype),e.SyntaxError=ot});mi.SyntaxError;var fs=new RegExp("^("+Object.keys(bt).join("|")+")\\b"),Me=new WeakMap;/*!
 * Intl.MessageFormat prollyfill
 * Copyright(c) 2015 Andy VanWagoner
 * MIT licensed
 **/function we(s,e,t){if(!(this instanceof we)||Me.has(this))throw new TypeError("calling MessageFormat constructor without new is invalid");var i=mi(s);Me.set(this,{ast:i,format:it(i,e,t&&t.types),locale:we.supportedLocalesOf(e)[0]||"en",locales:e,options:t})}var _s=we;Object.defineProperties(we.prototype,{format:{configurable:!0,get:function(){var e=Me.get(this);if(!e)throw new TypeError("MessageFormat.prototype.format called on value that's not an object initialized as a MessageFormat");return e.format}},formatToParts:{configurable:!0,writable:!0,value:function(e){var t=Me.get(this);if(!t)throw new TypeError("MessageFormat.prototype.formatToParts called on value that's not an object initialized as a MessageFormat");var i=t.toParts||(t.toParts=it.toParts(t.ast,t.locales,t.options&&t.options.types));return i(e)}},resolvedOptions:{configurable:!0,writable:!0,value:function(){var e=Me.get(this);if(!e)throw new TypeError("MessageFormat.prototype.resolvedOptions called on value that's not an object initialized as a MessageFormat");return{locale:e.locale}}}});typeof Symbol<"u"&&Object.defineProperty(we.prototype,Symbol.toStringTag,{value:"Object"});Object.defineProperties(we,{supportedLocalesOf:{configurable:!0,writable:!0,value:function(e){return[].concat(Intl.NumberFormat.supportedLocalesOf(e),Intl.DateTimeFormat.supportedLocalesOf(e),Intl.PluralRules?Intl.PluralRules.supportedLocalesOf(e):[],[].concat(e||[]).filter(function(t){return fs.test(t)})).filter(function(t,i,o){return o.indexOf(t)===i})}}});function ms(s){return!!(s&&s.default&&typeof s.default=="object"&&Object.keys(s).length===1)}var oi;const ae=(oi=globalThis.document)==null?void 0:oi.documentElement;var X,le,me,Qe,gi;class gs extends EventTarget{constructor({allowOverridesForExistingNamespaces:t=!1,autoLoadOnLocaleChange:i=!1,showKeyAsFallback:o=!1,fallbackLocale:r=""}={}){super();te(this,Qe);q(this,"formatNumberOptions",{returnIfNaN:"",postProcessors:new Map});q(this,"formatDateOptions",{postProcessors:new Map});te(this,X,!1);te(this,le,"");te(this,me,null);q(this,"__storage",{});q(this,"__namespacePatternsMap",new Map);q(this,"__namespaceLoadersCache",{});q(this,"__namespaceLoaderPromisesCache",{});this.__allowOverridesForExistingNamespaces=t,this._autoLoadOnLocaleChange=!!i,this._showKeyAsFallback=o,this._fallbackLocale=r;const a=ae.getAttribute("data-localize-lang");ie(this,X,!!a),j(this,X)&&(this.locale=a,this._setupTranslationToolSupport()),ae.lang||(ae.lang=this.locale||"en-GB"),this._setupHtmlLangAttributeObserver()}get locale(){return j(this,X)?j(this,le)||"":ae.lang||""}set locale(t){if(ue(this,Qe,gi).call(this,t),!j(this,X)){const r=ae.lang;this._setHtmlLangAttribute(t),this._onLocaleChanged(t,r);return}const i=j(this,le);ie(this,le,t),j(this,me)===null&&this._setHtmlLangAttribute(t),this._onLocaleChanged(t,i)}get loadingComplete(){return typeof this.__namespaceLoaderPromisesCache[this.locale]=="object"?Promise.all(Object.values(this.__namespaceLoaderPromisesCache[this.locale])):Promise.resolve()}addData(t,i,o){if(!this.__allowOverridesForExistingNamespaces&&this._isNamespaceInCache(t,i))throw new Error(`Namespace "${i}" has been already added for the locale "${t}".`);this.__storage[t]=this.__storage[t]||{},this.__allowOverridesForExistingNamespaces?this.__storage[t][i]={...this.__storage[t][i],...o}:this.__storage[t][i]=o}setupNamespaceLoader(t,i){this.__namespacePatternsMap.set(t,i)}loadNamespaces(t,{locale:i}={}){return Promise.all(t.map(o=>this.loadNamespace(o,{locale:i})))}loadNamespace(t,{locale:i=this.locale}={locale:this.locale}){const o=typeof t=="object",r=o?Object.keys(t)[0]:t;if(this._isNamespaceInCache(i,r))return Promise.resolve();const a=this._getCachedNamespaceLoaderPromise(i,r);return a||this._loadNamespaceData(i,t,o,r)}msg(t,i,o={}){const r=o.locale?o.locale:this.locale,a=this._getMessageForKeys(t,r);return a?new _s(a,r).format(i):""}teardown(){this._teardownHtmlLangAttributeObserver()}reset(){this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={}}setDatePostProcessorForLocale({locale:t,postProcessor:i}){var o;(o=this.formatDateOptions)==null||o.postProcessors.set(t,i)}setNumberPostProcessorForLocale({locale:t,postProcessor:i}){var o;(o=this.formatNumberOptions)==null||o.postProcessors.set(t,i)}_setupTranslationToolSupport(){ie(this,me,ae.lang||null)}_setHtmlLangAttribute(t){this._teardownHtmlLangAttributeObserver(),ae.lang=t,this._setupHtmlLangAttributeObserver()}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||(this._htmlLangAttributeObserver=new MutationObserver(t=>{t.forEach(i=>{j(this,X)?ae.lang==="auto"?(ie(this,me,null),this._setHtmlLangAttribute(this.locale)):ie(this,me,document.documentElement.lang):this._onLocaleChanged(document.documentElement.lang,i.oldValue||"")})})),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver&&this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(t,i){return!!(this.__storage[t]&&this.__storage[t][i])}_getCachedNamespaceLoaderPromise(t,i){return this.__namespaceLoaderPromisesCache[t]?this.__namespaceLoaderPromisesCache[t][i]:null}_loadNamespaceData(t,i,o,r){const a=this._getNamespaceLoader(i,o,r),d=this._getNamespaceLoaderPromise(a,t,r);return this._cacheNamespaceLoaderPromise(t,r,d),d.then(c=>{if(this.__namespaceLoaderPromisesCache[t]&&this.__namespaceLoaderPromisesCache[t][r]===d){const u=ms(c)?c.default:c;this.addData(t,r,u)}})}_getNamespaceLoader(t,i,o){let r=this.__namespaceLoadersCache[o];if(r||(i?(r=t[o],this.__namespaceLoadersCache[o]=r):(r=this._lookupNamespaceLoader(o),this.__namespaceLoadersCache[o]=r)),!r)throw new Error(`Namespace "${o}" was not properly setup.`);return this.__namespaceLoadersCache[o]=r,r}_getNamespaceLoaderPromise(t,i,o,r=this._fallbackLocale){return t(i,o).catch(()=>{const a=this._getLangFromLocale(i);return t(a,o).catch(()=>{if(r)return this._getNamespaceLoaderPromise(t,r,o,"").catch(()=>{const d=this._getLangFromLocale(r);throw new Error(`Data for namespace "${o}" and current locale "${i}" or fallback locale "${r}" could not be loaded. Make sure you have data either for locale "${i}" (and/or generic language "${a}") or for fallback "${r}" (and/or "${d}").`)});throw new Error(`Data for namespace "${o}" and locale "${i}" could not be loaded. Make sure you have data for locale "${i}" (and/or generic language "${a}").`)})})}_cacheNamespaceLoaderPromise(t,i,o){this.__namespaceLoaderPromisesCache[t]||(this.__namespaceLoaderPromisesCache[t]={}),this.__namespaceLoaderPromisesCache[t][i]=o}_lookupNamespaceLoader(t){for(const[i,o]of this.__namespacePatternsMap){const r=typeof i=="string"&&i===t,a=typeof i=="object"&&i.constructor.name==="RegExp"&&i.test(t);if(r||a)return o}return null}_getLangFromLocale(t){return t.substring(0,2)}_onLocaleChanged(t,i){this.dispatchEvent(new CustomEvent("__localeChanging")),t!==i&&(this._autoLoadOnLocaleChange?(this._loadAllMissing(t,i),this.loadingComplete.then(()=>{this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:t,oldLocale:i}}))})):this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:t,oldLocale:i}})))}_loadAllMissing(t,i){const o=this.__storage[i]||{},r=this.__storage[t]||{};Object.keys(o).forEach(a=>{r[a]||this.loadNamespace(a,{locale:t})})}_getMessageForKeys(t,i){if(typeof t=="string")return this._getMessageForKey(t,i);const o=Array.from(t).reverse();let r,a;for(;o.length;)if(r=o.pop(),a=this._getMessageForKey(r,i),a)return a}_getMessageForKey(t,i){if(!t||t.indexOf(":")===-1)throw new Error(`Namespace is missing in the key "${t}". The format for keys is "namespace:name".`);const[o,r]=t.split(":"),a=this.__storage[i],d=a?a[o]:{},u=r.split(".").reduce((f,_)=>typeof f=="object"?f[_]:f,d);return String(u||(this._showKeyAsFallback?t:""))}get _supportExternalTranslationTools(){return j(this,X)}set _supportExternalTranslationTools(t){ie(this,X,t)}get _langAttrSetByTranslationTool(){return j(this,le)}set _langAttrSetByTranslationTool(t){ie(this,le,t)}}X=new WeakMap,le=new WeakMap,me=new WeakMap,Qe=new WeakSet,gi=function(t){if(!t.includes("-"))throw new Error(`
      Locale was set to ${t}.
      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.
      See https://github.com/ing-bank/lion/issues/187 for more information.
    `)};const ut=Symbol.for("lion::SingletonManagerClassStorage"),pt=globalThis||window;class vs{constructor(){this._map=pt[ut]?pt[ut]:pt[ut]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}}const bs=s=>{let e=null;const t=()=>(e===null&&(e=s()),e);return new Proxy({},{get(o,r){const a=t();return r==="addEventListener"||r==="removeEventListener"?Reflect.get(a,r).bind(a):r==="__instance_for_testing"?a:Reflect.get(a,r,a)},set(o,r,a){return Reflect.set(t(),r,a)},getOwnPropertyDescriptor(o,r){return Reflect.getOwnPropertyDescriptor(t(),r)},getPrototypeOf(){return Reflect.getPrototypeOf(t())}})},ft=new vs;function ys(){if(!ft.has("@lion/ui::localize::0.x")){const s=new gs({autoLoadOnLocaleChange:!0,fallbackLocale:"en-GB"});ft.set("@lion/ui::localize::0.x",s)}return ft.get("@lion/ui::localize::0.x")}function yt(){return bs(ys)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=(s,e)=>{var i;const t=s._$AN;if(t===void 0)return!1;for(const o of t)(i=o._$AO)==null||i.call(o,e,!1),ze(o,e);return!0},Ze=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},vi=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),Cs(e)}};function xs(s){this._$AN!==void 0?(Ze(this),this._$AM=s,vi(this)):this._$AM=s}function Es(s,e=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)ze(i[r],!1),Ze(i[r]);else i!=null&&(ze(i,!1),Ze(i));else ze(this,s)}const Cs=s=>{s.type==ui.CHILD&&(s._$AP??(s._$AP=Es),s._$AQ??(s._$AQ=xs))};class ws extends fi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),vi(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),t&&(ze(this,e),Ze(this))}setValue(e){if(os(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ks{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Ns{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=s=>!is(s)&&typeof s.then=="function",Qt=1073741823;class As extends ws{constructor(){super(...arguments),this._$Cwt=Qt,this._$Cbt=[],this._$CK=new ks(this),this._$CX=new Ns}render(...e){return e.find(t=>!Xt(t))??Q}update(e,t){const i=this._$Cbt;let o=i.length;this._$Cbt=t;const r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let d=0;d<t.length&&!(d>this._$Cwt);d++){const c=t[d];if(!Xt(c))return this._$Cwt=d,c;d<o&&c===i[d]||(this._$Cwt=Qt,o=0,Promise.resolve(c).then(async u=>{for(;a.get();)await a.get();const f=r.deref();if(f!==void 0){const _=f._$Cbt.indexOf(c);_>-1&&_<f._$Cwt&&(f._$Cwt=_,f.setValue(u))}}))}return Q}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Ts=pi(As),Ss=s=>class extends s{static get localizeNamespaces(){return[]}static get waitForLocalizeNamespaces(){return!0}constructor(){super(),this._localizeManager=yt(),this.__boundLocalizeOnLocaleChanged=(...t)=>{const i=Array.from(t)[0];this.__localizeOnLocaleChanged(i)},this.__boundLocalizeOnLocaleChanging=()=>{this.__localizeOnLocaleChanging()},this.__localizeStartLoadingNamespaces(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>{this.__localizeMessageSync=!0})}async scheduleUpdate(){Object.getPrototypeOf(this).constructor.waitForLocalizeNamespaces&&await this.localizeNamespacesLoaded,super.scheduleUpdate()}connectedCallback(){super.connectedCallback(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>this.onLocaleReady()),this._localizeManager.addEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.addEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}disconnectedCallback(){super.disconnectedCallback(),this._localizeManager.removeEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.removeEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}msgLit(t,i,o){return this.__localizeMessageSync?this._localizeManager.msg(t,i,o):this.localizeNamespacesLoaded?Ts(this.localizeNamespacesLoaded.then(()=>this._localizeManager.msg(t,i,o)),A):""}__getUniqueNamespaces(){const t=[],i=new Set;return Object.getPrototypeOf(this).constructor.localizeNamespaces.forEach(i.add.bind(i)),i.forEach(o=>{t.push(o)}),t}__localizeStartLoadingNamespaces(){this.localizeNamespacesLoaded=this._localizeManager.loadNamespaces(this.__getUniqueNamespaces())}__localizeOnLocaleChanging(){this.__localizeStartLoadingNamespaces()}__localizeOnLocaleChanged(t){this.onLocaleChanged(t.detail.newLocale,t.detail.oldLocale)}onLocaleReady(){this.onLocaleUpdated()}onLocaleChanged(t,i){this.onLocaleUpdated(),this.requestUpdate()}onLocaleUpdated(){}},$s=D(Ss),xt="3.0.0",ei=window.scopedElementsVersions||(window.scopedElementsVersions=[]);ei.includes(xt)||ei.push(xt);const Ls=s=>{var e;return e=class extends s{static get scopedElementsVersion(){return xt}get registry(){return this.constructor.__registry}set registry(i){this.constructor.__registry=i}attachShadow(i){const{scopedElements:o}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=new CustomElementRegistry;for(const[a,d]of Object.entries(o??{}))this.registry.define(a,d)}return super.attachShadow({...i,customElements:this.registry,registry:this.registry})}},q(e,"scopedElements"),q(e,"__registry"),e},Vs=D(Ls),Os=s=>class extends Vs(s){createRenderRoot(){var r;const{shadowRootOptions:t,elementStyles:i}=this.constructor,o=this.attachShadow(t);return this.renderOptions.creationScope=o,Tt(o,i),(r=this.renderOptions).renderBefore??(r.renderBefore=o.firstChild),o}},Fs=D(Os);function je(){var s,e;return!!((s=globalThis.ShadowRoot)!=null&&s.prototype.createElement&&((e=globalThis.ShadowRoot)!=null&&e.prototype.importNode))}const Ms=s=>class extends Fs(s){constructor(){super()}createScopedElement(t){return(je()?this.shadowRoot:document).createElement(t)}defineScopedElement(t,i){const o=this.registry.get(t),r=o&&o!==i;return!je()&&r&&console.error([`You are trying to re-register the "${t}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),o?this.registry.get(t):this.registry.define(t,i)}attachShadow(t){const{scopedElements:i}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=je()?new CustomElementRegistry:customElements;for(const[r,a]of Object.entries(i??{}))this.defineScopedElement(r,a)}return Element.prototype.attachShadow.call(this,{...t,customElements:this.registry,registry:this.registry})}createRenderRoot(){const{shadowRootOptions:t,elementStyles:i}=this.constructor,o=this.attachShadow(t);return je()&&(this.renderOptions.creationScope=o),o instanceof ShadowRoot&&(Tt(o,i),this.renderOptions.renderBefore=this.renderOptions.renderBefore||o.firstChild),o}},bi=D(Ms),zs=[Node.DOCUMENT_POSITION_PRECEDING,Node.DOCUMENT_POSITION_CONTAINS,Node.DOCUMENT_POSITION_CONTAINS|Node.DOCUMENT_POSITION_PRECEDING];function Rs(s,{reverse:e}={}){const t=(o,r)=>{const a=o.compareDocumentPosition(r);return zs.includes(a)?1:-1},i=s.filter(o=>o);return i.sort(t),e&&i.reverse(),i}class Je{constructor(e){this.type="unparseable",this.viewValue=e}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}}const Is=s=>class extends s{constructor(){super(),this.name="",this._parentFormGroup=void 0,this.allowCrossRootRegistration=!1}get name(){return this.__name||""}set name(e){const t=this.name;this.__name=e.toString(),this.requestUpdate("name",t)}static get properties(){return{name:{type:String,reflect:!0},allowCrossRootRegistration:{type:Boolean,attribute:"allow-cross-root-registration"}}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:this},bubbles:!0,composed:!!this.allowCrossRootRegistration}))}disconnectedCallback(){super.disconnectedCallback(),this.__unregisterFormElement()}__unregisterFormElement(){this._parentFormGroup&&this._parentFormGroup.removeFormElement(this)}},Vt=D(Is),Ds=s=>{var e,t;return t=class extends Vt(tt(qe(s))){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},label:String,labelSrOnly:{type:Boolean,attribute:"label-sr-only",reflect:!0},helpText:{type:String,attribute:"help-text"},modelValue:{attribute:!1},_ariaLabelledNodes:{attribute:!1},_ariaDescribedNodes:{attribute:!1},_repropagationRole:{attribute:!1},_isRepropagationEndpoint:{attribute:!1}}}get label(){var o;return this.__label??(((o=this._labelNode)==null?void 0:o.textContent)||"")}set label(o){const r=this.label;this.__label=o,this.requestUpdate("label",r)}get helpText(){var o;return this.__helpText??(((o=this._helpTextNode)==null?void 0:o.textContent)||"")}set helpText(o){const r=this.helpText;this.__helpText=o,this.requestUpdate("helpText",r)}get fieldName(){return this.__fieldName||this.label||this.name||""}set fieldName(o){this.__fieldName=o}get slots(){return{...super.slots,label:()=>{const o=document.createElement("label");return o.textContent=this.label,o},"help-text":()=>{const o=document.createElement("div");return o.textContent=this.helpText,o}}}get _inputNode(){return this.__getDirectSlotChild("input")}get _labelNode(){return this.__getDirectSlotChild("label")}get _helpTextNode(){return this.__getDirectSlotChild("help-text")}get _feedbackNode(){return this.__getDirectSlotChild("feedback")}constructor(){super(),this.readOnly=!1,this.labelSrOnly=!1,this._inputId=hi(this.localName),this._ariaLabelledNodes=[],this._ariaDescribedNodes=[],this._repropagationRole="child",this._isRepropagationEndpoint=!1,this.addEventListener("model-value-changed",this.__repropagateChildrenValues),this._onLabelClick=this._onLabelClick.bind(this)}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y(),this._triggerInitialModelValueChangedEvent(),this._labelNode&&this._labelNode.addEventListener("click",this._onLabelClick)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._onLabelClick)}updated(o){var r;super.updated(o),o.has("disabled")&&((r=this._inputNode)==null||r.setAttribute("aria-disabled",`${!!this.disabled}`)),o.has("_ariaLabelledNodes")&&this.__reflectAriaAttr("aria-labelledby",this._ariaLabelledNodes,this.__reorderAriaLabelledNodes),o.has("_ariaDescribedNodes")&&this.__reflectAriaAttr("aria-describedby",this._ariaDescribedNodes,this.__reorderAriaDescribedNodes),o.has("label")&&this.__label!==void 0&&this._labelNode&&(this._labelNode.textContent=this.label),o.has("helpText")&&this.__helpText!==void 0&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),o.has("name")&&this.dispatchEvent(new CustomEvent("form-element-name-changed",{detail:{oldName:o.get("name"),newName:this.name},bubbles:!0}))}_triggerInitialModelValueChangedEvent(){this._dispatchInitialModelValueChangedEvent()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add("form-control")}_enhanceLightDomA11y(){const{_inputNode:o,_labelNode:r,_helpTextNode:a,_feedbackNode:d}=this;o&&(o.id=o.id||this._inputId),r&&(r.setAttribute("for",this._inputId),this.addToAriaLabelledBy(r,{idPrefix:"label"})),a&&this.addToAriaDescribedBy(a,{idPrefix:"help-text"}),d&&(this.addEventListener("focusin",()=>{d.setAttribute("aria-live","polite")}),this.addEventListener("focusout",()=>{d.setAttribute("aria-live","assertive")}),this.addToAriaDescribedBy(d,{idPrefix:"feedback"})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(o=["prefix","suffix","before","after"]){o.forEach(r=>{const a=this.__getDirectSlotChild(r);a&&(a.hasAttribute("data-label")&&this.addToAriaLabelledBy(a,{idPrefix:r}),a.hasAttribute("data-description")&&this.addToAriaDescribedBy(a,{idPrefix:r}))})}__reflectAriaAttr(o,r,a){if(this._inputNode){if(a){const c=r.filter(p=>this.contains(p)),u=r.filter(p=>!this.contains(p)),f=c.map(p=>p.assignedSlot||p),_=[...Rs(f)],h=[];_.forEach(p=>{c.forEach(x=>{p.name===x.slot&&h.push(x)})}),r=[...h,...u]}const d=r.map(c=>c.id).join(" ");this._inputNode.setAttribute(o,d)}}render(){return C`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return C` ${this._labelTemplate()} ${this._helpTextTemplate()} `}_groupTwoTemplate(){return C` ${this._inputGroupTemplate()} ${this._feedbackTemplate()} `}_labelTemplate(){return C`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `}_helpTextTemplate(){return C`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `}_inputGroupTemplate(){return C`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return C`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(o=>o.slot==="prefix")?C`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:A}_inputGroupInputTemplate(){return C`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(o=>o.slot==="suffix")?C`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:A}_inputGroupAfterTemplate(){return C`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return C`
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_isEmpty(o=this.modelValue){let r=o;if(this.modelValue instanceof Je&&(r=this.modelValue.viewValue),typeof r=="object"&&r!==null&&!(r instanceof Date))return!Object.keys(r).length;const a=typeof r=="number"&&(r===0||Number.isNaN(r));return!r&&!a&&!(typeof r=="boolean"&&r===!1)}static get styles(){return[G`
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
        `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(o,{idPrefix:r="",reorder:a=!0}={}){o.id=o.id||`${r}-${this._inputId}`,this._ariaLabelledNodes.includes(o)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,o],this.__reorderAriaLabelledNodes=!!a)}removeFromAriaLabelledBy(o){this._ariaLabelledNodes.includes(o)&&(this._ariaLabelledNodes.splice(this._ariaLabelledNodes.indexOf(o),1),this._ariaLabelledNodes=[...this._ariaLabelledNodes],this.__reorderAriaLabelledNodes=!1)}addToAriaDescribedBy(o,{idPrefix:r="",reorder:a=!0}={}){o.id=o.id||`${r}-${this._inputId}`,this._ariaDescribedNodes.includes(o)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,o],this.__reorderAriaDescribedNodes=!!a)}removeFromAriaDescribedBy(o){this._ariaDescribedNodes.includes(o)&&(this._ariaDescribedNodes.splice(this._ariaDescribedNodes.indexOf(o),1),this._ariaDescribedNodes=[...this._ariaDescribedNodes],this.__reorderAriaLabelledNodes=!1)}__getDirectSlotChild(o){return Array.from(this.children).find(r=>r.slot===o)}_dispatchInitialModelValueChangedEvent(){this._repropagationRole!=="child"&&(this.__repropagateChildrenInitialized=!0,this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],initialize:!0,isTriggeredByUser:!1}})))}_onBeforeRepropagateChildrenValues(o){}__repropagateChildrenValues(o){var h;this._onBeforeRepropagateChildrenValues(o);const r=o.detail&&o.detail.element||o.target,a=this._isRepropagationEndpoint||this._repropagationRole==="choice-group";if(r===this)return;o.stopImmediatePropagation();const c=this._repropagationRole!=="child"&&!this.__repropagateChildrenInitialized,u=o.detail&&o.detail.initialize;if(c||u||!this._repropagationCondition(r))return;let f=[];a||(f=o.detail&&o.detail.formPath||[r]);const _=[...f,this];this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:_,isTriggeredByUser:!!((h=o.detail)!=null&&h.isTriggeredByUser)}}))}_repropagationCondition(o){return!!o}_onLabelClick(){}},q(t,"enabledWarnings",((e=$e(t,t,"enabledWarnings"))==null?void 0:e.filter(o=>o!=="change-in-update"))||[]),t},Te=D(Ds);class Ps{constructor(){this.__running=!1,this.__queue=[]}add(e){this.__queue.push(e),this.__running||(this.complete=new Promise(t=>{this.__callComplete=t}),this.__run())}async __run(){this.__running=!0,await this.__queue[0](),this.__queue.shift(),this.__queue.length>0?this.__run():(this.__running=!1,this.__callComplete&&this.__callComplete())}}function Us(s){return s.charAt(0).toUpperCase()+s.slice(1)}const Bs=s=>{var e,t;return t=class extends s{constructor(){super(),this.__SyncUpdatableNamespace={}}firstUpdated(o){super.firstUpdated(o),this.__syncUpdatableInitialize()}connectedCallback(){super.connectedCallback(),this.__SyncUpdatableNamespace.connected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__SyncUpdatableNamespace.connected=!1}static __syncUpdatableHasChanged(o,r,a){const d=this.elementProperties;return d.get(o)&&d.get(o).hasChanged?d.get(o).hasChanged(r,a):r!==a}__syncUpdatableInitialize(){const o=this.__SyncUpdatableNamespace,r=this.constructor;o.initialized=!0,o.queue&&Array.from(o.queue).forEach(a=>{r.__syncUpdatableHasChanged(a,this[a],void 0)&&this.updateSync(a,void 0)})}requestUpdate(o,r,a){if(super.requestUpdate(o,r,a),o===void 0)return;this.__SyncUpdatableNamespace=this.__SyncUpdatableNamespace||{};const d=this.__SyncUpdatableNamespace,c=this.constructor;d.initialized?c.__syncUpdatableHasChanged(o,this[o],r)&&this.updateSync(o,r):(d.queue=d.queue||new Set,d.queue.add(o))}updateSync(o,r){}},q(t,"enabledWarnings",((e=$e(t,t,"enabledWarnings"))==null?void 0:e.filter(o=>o!=="change-in-update"))||[]),t},Hs=D(Bs),qs=s=>{switch(s){case"bg-BG":return k(()=>import("./bg-BG.DvcqJcRT.js"),__vite__mapDeps([0,1]));case"bg":return k(()=>import("./bg.DjRhbvP8.js"),[]);case"cs-CZ":return k(()=>import("./cs-CZ.C4M3ss0M.js"),__vite__mapDeps([2,3]));case"cs":return k(()=>import("./cs.BpAIInFi.js"),[]);case"de-DE":return k(()=>import("./de-DE.B6cLQS-C.js"),__vite__mapDeps([4,5]));case"de":return k(()=>import("./de.tu_ZC0by.js"),[]);case"en-AU":return k(()=>import("./en-AU.BLLSR6ul.js"),__vite__mapDeps([6,7]));case"en-GB":return k(()=>import("./en-GB.BLLSR6ul.js"),__vite__mapDeps([8,7]));case"en-US":return k(()=>import("./en-US.BLLSR6ul.js"),__vite__mapDeps([9,7]));case"en-PH":case"en":return k(()=>import("./en.BRtJWocA.js"),[]);case"es-ES":return k(()=>import("./es-ES.C-k5kUnm.js"),__vite__mapDeps([10,11]));case"es":return k(()=>import("./es.CmCcTLNg.js"),[]);case"fr-FR":return k(()=>import("./fr-FR.DC-XO9HF.js"),__vite__mapDeps([12,13]));case"fr-BE":return k(()=>import("./fr-BE.DC-XO9HF.js"),__vite__mapDeps([14,13]));case"fr":return k(()=>import("./fr.z99AZYvu.js"),[]);case"hu-HU":return k(()=>import("./hu-HU.BeTGSB1R.js"),__vite__mapDeps([15,16]));case"hu":return k(()=>import("./hu.DlqOkKS-.js"),[]);case"it-IT":return k(()=>import("./it-IT.BfrsYHtj.js"),__vite__mapDeps([17,18]));case"it":return k(()=>import("./it.dhe0n6ro.js"),[]);case"nl-BE":return k(()=>import("./nl-BE.CtPSVrK-.js"),__vite__mapDeps([19,20]));case"nl-NL":return k(()=>import("./nl-NL.CtPSVrK-.js"),__vite__mapDeps([21,20]));case"nl":return k(()=>import("./nl.CsOjjg4q.js"),[]);case"pl-PL":return k(()=>import("./pl-PL.BO_uoCo3.js"),__vite__mapDeps([22,23]));case"pl":return k(()=>import("./pl.CYht5iOc.js"),[]);case"ro-RO":return k(()=>import("./ro-RO.BzszQasy.js"),__vite__mapDeps([24,25]));case"ro":return k(()=>import("./ro.DwBEW5po.js"),[]);case"ru-RU":return k(()=>import("./ru-RU.DYdB6zKs.js"),__vite__mapDeps([26,27]));case"ru":return k(()=>import("./ru.BWO2zRrD.js"),[]);case"sk-SK":return k(()=>import("./sk-SK.t6DAVN22.js"),__vite__mapDeps([28,29]));case"sk":return k(()=>import("./sk.BCmB7Wtj.js"),[]);case"tr-TR":return k(()=>import("./tr-TR.Cbm2kwTy.js"),__vite__mapDeps([30,31]));case"tr":return k(()=>import("./tr.C7VWmvp5.js"),[]);case"uk-UA":return k(()=>import("./uk-UA.DRKx0L1R.js"),__vite__mapDeps([32,33]));case"uk":return k(()=>import("./uk.L9q5i_B2.js"),[]);case"zh-CN":case"zh":return k(()=>import("./zh.BuGHQNaT.js"),[]);default:return k(()=>import("./en.BRtJWocA.js"),[])}},js=s=>`${s[0].toUpperCase()}${s.slice(1)}`,De=class De extends $s(Z){static get properties(){return{feedbackData:{attribute:!1}}}static get styles(){return[G`
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
      `]}constructor(){super(),this.feedbackData=void 0}_messageTemplate({message:e}){return e}updated(e){super.updated(e),this.feedbackData&&this.feedbackData[0]?(this.setAttribute("type",this.feedbackData[0].type),this.currentType=this.feedbackData[0].type):this.currentType!=="success"&&this.removeAttribute("type")}render(){return C`
      ${this.feedbackData&&this.feedbackData.map(({message:e,type:t,validator:i})=>C`
          <span class="validation-feedback__type">
            ${e&&t?this._localizeManager.msg(`lion-form-core:validation${js(t)}`):A}
          </span>
          ${this._messageTemplate({message:e,type:t,validator:i})}
        `)}
    `}};q(De,"localizeNamespaces",[{"lion-form-core":qs},...$e(De,De,"localizeNamespaces")]);let Et=De;class We extends EventTarget{constructor(e,t){super(),this.__param=e,this.__config=t||{},this.type=(t==null?void 0:t.type)||"error"}execute(e,t,i){if(!this.constructor.validatorName)throw new Error(`A validator needs to have a name! Please set it via "static get validatorName() { return 'IsCat'; }"`);return!0}set param(e){this.__param=e,this.dispatchEvent(new Event("param-changed"))}get param(){return this.__param}set config(e){this.__config=e,this.dispatchEvent(new Event("config-changed"))}get config(){return this.__config}async _getMessage(e){const t=this.constructor,i={name:t.validatorName,type:this.type,params:this.param,config:this.config,...e};if(this.config.getMessage){if(typeof this.config.getMessage=="function")return this.config.getMessage(i);throw new Error(`You must provide a value for getMessage of type 'function', you provided a value of type: ${typeof this.config.getMessage}`)}return t.getMessage(i)}static async getMessage(e){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(e){}onFormControlDisconnect(e){}abortExecution(){}}q(We,"_$isValidator$",!0),q(We,"validatorName",""),q(We,"async",!1);function ti(s=[],e=[]){return s.filter(t=>!e.includes(t)).concat(e.filter(t=>!s.includes(t)))}function Gs(s){return s instanceof Je?s.viewValue:s}const Ws=s=>{var e,yi,i;return i=class extends Te(Hs(tt(qe(bi(s))))){constructor(){super();te(this,e);this.hasFeedbackFor=[],this.showsFeedbackFor=[],this.shouldShowFeedbackFor=[],this.validationStates={},this.isPending=!1,this.validators=[],this.defaultValidators=[],this._visibleMessagesAmount=1,this.__syncValidationResult=[],this.__asyncValidationResult=[],this.__validationResult=[],this.__prevValidationResult=[],this.__prevShownValidationResult=[],this.__childModelValueChanged=!1,this._onValidatorUpdated=this._onValidatorUpdated.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":Et}}static get properties(){return{validators:{attribute:!1},hasFeedbackFor:{attribute:!1},shouldShowFeedbackFor:{attribute:!1},showsFeedbackFor:{type:Array,attribute:"shows-feedback-for",reflect:!0,converter:{fromAttribute:r=>r.split(","),toAttribute:r=>r.join(",")}},validationStates:{attribute:!1},isPending:{type:Boolean,attribute:"is-pending",reflect:!0},defaultValidators:{attribute:!1},_visibleMessagesAmount:{attribute:!1},__childModelValueChanged:{attribute:!1}}}static get validationTypes(){return["error"]}get operationMode(){return"enter"}get slots(){return{...super.slots,feedback:()=>{const r=this.createScopedElement("lion-validation-feedback");return r.setAttribute("data-tag-name","lion-validation-feedback"),r}}}get _allValidators(){return[...this.validators,...this.defaultValidators]}connectedCallback(){super.connectedCallback(),yt().addEventListener("localeChanged",this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),yt().removeEventListener("localeChanged",this._updateFeedbackComponent)}firstUpdated(r){super.firstUpdated(r),this.__isValidateInitialized=!0,this.validate(),this._repropagationRole!=="child"&&this.addEventListener("model-value-changed",()=>{this.__childModelValueChanged=!0})}updateSync(r,a){if(super.updateSync(r,a),r==="validators"?(this.__setupValidators(),this.validate({clearCurrentResult:!0})):r==="modelValue"&&this.validate({clearCurrentResult:!0}),["touched","dirty","prefilled","focused","submitted","hasFeedbackFor","filled"].includes(r)&&this._updateShouldShowFeedbackFor(),r==="showsFeedbackFor"){this._inputNode&&this._inputNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`);const d=ti(this.showsFeedbackFor,a);d.length>0&&this.dispatchEvent(new Event("showsFeedbackForChanged",{bubbles:!0})),d.forEach(c=>{this.dispatchEvent(new Event(`showsFeedbackFor${Us(c)}Changed`,{bubbles:!0}))})}r==="shouldShowFeedbackFor"&&ti(this.shouldShowFeedbackFor,a).length>0&&this.dispatchEvent(new Event("shouldShowFeedbackForChanged",{bubbles:!0}))}async validate({clearCurrentResult:r=!1}={}){if(this.validateComplete=new Promise(a=>{this.__validateCompleteResolve=a}),this.disabled||this.readOnly){this.__clearValidationResults(),this.__finishValidationPass(),this._updateFeedbackComponent();return}this.__isValidateInitialized&&(this.__prevValidationResult=this.__validationResult,r&&this.__clearValidationResults(),await this.__executeValidators())}async __executeValidators(){var _,h;const r=Gs(this.modelValue),a=this.__isEmpty(r);if(this.__syncValidationResult=[],a){const p=!this._isFormOrFieldset,x=this._allValidators.find(E=>{var $;return(($=E.constructor)==null?void 0:$.validatorName)==="Required"});if(x&&(this.__syncValidationResult=[{validator:x,outcome:!0}]),p){this.__finishValidationPass({syncValidationResult:this.__syncValidationResult});return}}const d=[],c=[],u=[];for(const p of this._allValidators)p!=null&&p.executeOnResults?d.push(p):ue(this,e,yi).call(this,p)||(p.constructor.async?u.push(p):c.push(p));const f=!!u.length;this.__syncValidationResult=[...this.__syncValidationResult,...this.__executeSyncValidators(c,r)],this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,metaValidators:d}),f?(this.isPending=!0,this.__asyncValidationResult=await this.__executeAsyncValidators(u,r),this.isPending=!1,this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,asyncValidationResult:this.__asyncValidationResult,metaValidators:d}),(_=this.__validateCompleteResolve)==null||_.call(this,!0)):(h=this.__validateCompleteResolve)==null||h.call(this,!0)}__executeSyncValidators(r,a){return r.map(d=>({validator:d,outcome:d.execute(a,d.param,{node:this})})).filter(d=>!!d.outcome)}async __executeAsyncValidators(r,a){const d=r.map(u=>u.execute(a,u.param,{node:this})),c=await Promise.all(d);return c.map((u,f)=>({validator:r[f],outcome:c[f]})).filter(u=>!!u.outcome)}__executeMetaValidators(r,a){return a.length?this._isEmpty(this.modelValue)?(this.__prevShownValidationResult=[],[]):a.map(d=>({validator:d,outcome:d.executeOnResults({regularValidationResult:r.map(c=>c.validator),prevValidationResult:this.__prevValidationResult.map(c=>c.validator),prevShownValidationResult:this.__prevShownValidationResult.map(c=>c.validator)})})).filter(d=>!!d.outcome):[]}__finishValidationPass({syncValidationResult:r=[],asyncValidationResult:a=[],metaValidators:d=[]}={}){const c=[...r,...a],u=this.__executeMetaValidators(c,d);this.__validationResult=[...u,...c];const _=this.constructor.validationTypes.reduce((h,p)=>({...h,[p]:{}}),{});for(const{validator:h,outcome:p}of this.__validationResult){_[h.type]||(_[h.type]={});const x=h.constructor;_[h.type][x.validatorName]=p}this.validationStates=_,this.hasFeedbackFor=[...new Set(this.__validationResult.map(({validator:h})=>h.type))],this.dispatchEvent(new Event("validate-performed",{bubbles:!0}))}__clearValidationResults(){this.__syncValidationResult=[],this.__asyncValidationResult=[]}_onValidatorUpdated(r){(r.type==="param-changed"||r.type==="config-changed")&&this.validate()}__setupValidators(){var a,d;const r=["param-changed","config-changed"];for(const c of this.__prevValidators||[]){for(const u of r)(a=c.removeEventListener)==null||a.call(c,u,this._onValidatorUpdated);c.onFormControlDisconnect(this)}for(const c of this._allValidators){if(c.constructor._$isValidator$===void 0){const p=`Validators array only accepts class instances of Validator. Type "${Array.isArray(c)?"array":typeof c}" found. This may be caused by having multiple installations of "@lion/ui/form-core.js".`;throw console.error(p,this),new Error(p)}const f=this.constructor,_=c.constructor;if(f.validationTypes.indexOf(c.type)===-1){const h=`This component does not support the validator type "${c.type}" used in "${_.validatorName}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(h,this),new Error(h)}for(const h of r)(d=c.addEventListener)==null||d.call(c,h,p=>{this._onValidatorUpdated(p,{validator:c})});c.onFormControlConnect(this)}this.__prevValidators=this._allValidators}__isEmpty(r){return typeof this._isEmpty=="function"?this._isEmpty(r):this.modelValue===null||typeof this.modelValue>"u"||this.modelValue===""}async __getFeedbackMessages(r){let a=await this.fieldName;return Promise.all(r.map(async({validator:d,outcome:c})=>{var f;return d.config.fieldName&&(a=await d.config.fieldName),{message:await d._getMessage({modelValue:this.modelValue,formControl:this,fieldName:a,outcome:c}),type:d.type,validator:d,visibilityDuration:((f=d.config)==null?void 0:f.visibilityDuration)||3e3}}))}_updateFeedbackComponent(){window.clearTimeout(this.removeMessage);const{_feedbackNode:r}=this;r&&(this.__feedbackQueue||(this.__feedbackQueue=new Ps),this.showsFeedbackFor.length>0?this.__feedbackQueue.add(async()=>{const a=this._prioritizeAndFilterFeedback({validationResult:this.__validationResult.map(c=>c.validator)});this.__prioritizedResult=a.map(c=>this.__validationResult.find(f=>c===f.validator)).filter(Boolean),this.__prioritizedResult.length>0&&(this.__prevShownValidationResult=this.__prioritizedResult);const d=await this.__getFeedbackMessages(this.__prioritizedResult);r.feedbackData=d||[],d!=null&&d[0]&&d[0].type==="success"&&d[0].visibilityDuration!==1/0&&(this.removeMessage=window.setTimeout(()=>{r.removeAttribute("type"),r.feedbackData=[]},d[0].visibilityDuration))}):this.__feedbackQueue.add(async()=>{r.feedbackData=[]}),this.feedbackComplete=this.__feedbackQueue.complete)}_showFeedbackConditionFor(r,a){return!0}get _feedbackConditionMeta(){return{modelValue:this.modelValue,el:this}}feedbackCondition(r,a=this._feedbackConditionMeta,d=this._showFeedbackConditionFor.bind(this)){return d(r,a)}_hasFeedbackVisibleFor(r){var a,d;return((a=this.hasFeedbackFor)==null?void 0:a.includes(r))&&((d=this.shouldShowFeedbackFor)==null?void 0:d.includes(r))}updated(r){if(super.updated(r),r.has("shouldShowFeedbackFor")||r.has("hasFeedbackFor")){const a=this.constructor;this.showsFeedbackFor=a.validationTypes.map(d=>this._hasFeedbackVisibleFor(d)?d:void 0).filter(Boolean),this._updateFeedbackComponent()}if(r.has("__childModelValueChanged")&&this.__childModelValueChanged&&(this.validate({clearCurrentResult:!0}),this.__childModelValueChanged=!1),r.has("validationStates")){const a=r.get("validationStates");a&&Object.entries(this.validationStates).forEach(([d,c])=>{a[d]&&JSON.stringify(c)!==JSON.stringify(a[d])&&this.dispatchEvent(new CustomEvent(`${d}StateChanged`,{detail:c}))})}}_updateShouldShowFeedbackFor(){const a=this.constructor.validationTypes.map(d=>this.feedbackCondition(d,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))?d:void 0).filter(Boolean);JSON.stringify(this.shouldShowFeedbackFor)!==JSON.stringify(a)&&(this.shouldShowFeedbackFor=a)}_prioritizeAndFilterFeedback({validationResult:r}){const d=this.constructor.validationTypes;return r.filter(u=>this.feedbackCondition(u.type,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))).sort((u,f)=>d.indexOf(u.type)-d.indexOf(f.type)).slice(0,this._visibleMessagesAmount)}},e=new WeakSet,yi=function(r){let a=r;for(;a;){if(a.constructor.validatorName==="Required")return!0;a=Object.getPrototypeOf(a)}return!1},i},st=D(Ws),Ks=s=>{var e,t,Ct,wt,r;return r=class extends st(Te(s)){constructor(){super();te(this,t);te(this,e,{didFormatterOutputSyncToView:!1,didFormatterRun:!1});this.formatOn="change",this.formatOptions={mode:"auto"},this.formattedValue=void 0,this.serializedValue=void 0,this._isPasting=!1,this._isHandlingUserInput=!1,this.__prevViewValue="",this.__onCompositionEvent=this.__onCompositionEvent.bind(this),this.addEventListener("user-input-changed",this._onUserInputChanged),this.addEventListener("paste",this.__onPaste),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)}}static get properties(){return{formattedValue:{attribute:!1},serializedValue:{attribute:!1},formatOptions:{attribute:!1}}}requestUpdate(c,u,f){super.requestUpdate(c,u,f),c==="modelValue"&&this.modelValue!==u&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:u}),c==="serializedValue"&&this.serializedValue!==u&&this._calculateValues({source:"serialized"}),c==="formattedValue"&&this.formattedValue!==u&&this._calculateValues({source:"formatted"})}get value(){var c;return((c=this._inputNode)==null?void 0:c.value)||this.__value||""}set value(c){this._inputNode?(this._inputNode.value=c,this.__value=void 0):this.__value=c}preprocessor(c,u){}parser(c,u){return c}formatter(c,u){return c}serializer(c){return c!==void 0?c:""}deserializer(c){return c===void 0?"":c}_calculateValues({source:c}={source:null}){this.__preventRecursiveTrigger||(this.__preventRecursiveTrigger=!0,c!=="model"&&(c==="serialized"?this.modelValue=this.deserializer(this.serializedValue):c==="formatted"&&(this.modelValue=this._callParser())),c!=="formatted"&&(this.formattedValue=this._callFormatter()),c!=="serialized"&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.__preventRecursiveTrigger=!1,this.__prevViewValue=this.value)}_callParser(c=this.formattedValue){if(c==="")return"";if(typeof c!="string")return;const u=this.parser(c,{...this.formatOptions,mode:ue(this,t,Ct).call(this),viewValueStates:ue(this,t,wt).call(this)});return u!==void 0?u:new Je(c)}_callFormatter(){var c;return j(this,e).didFormatterRun=!1,this._isHandlingUserInput&&((c=this.hasFeedbackFor)!=null&&c.includes("error"))&&this._inputNode?this.value:this.modelValue instanceof Je?this.modelValue.viewValue:(j(this,e).didFormatterRun=!0,this.formatter(this.modelValue,{...this.formatOptions,mode:ue(this,t,Ct).call(this),viewValueStates:ue(this,t,wt).call(this)}))}_onModelValueChanged(...c){this._calculateValues({source:"model"}),this._dispatchModelValueChangedEvent(...c)}_dispatchModelValueChangedEvent(...c){this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:!!this._isHandlingUserInput}}))}_syncValueUpwards(){this.__isHandlingComposition||this.__handlePreprocessor();const c=this.formattedValue;this.modelValue=this._callParser(this.value),c===this.formattedValue&&this.__prevViewValue!==this.value&&this._calculateValues()}__handlePreprocessor(){var f;let c=this.value.length;this._inputNode&&"selectionStart"in this._inputNode&&((f=this._inputNode)==null?void 0:f.type)!=="range"&&(c=this._inputNode.selectionStart);const u=this.preprocessor(this.value,{...this.formatOptions,currentCaretIndex:c,prevViewValue:this.__prevViewValue});if(u!==void 0){if(typeof u=="string")this.value=u;else if(typeof u=="object"){const{viewValue:_,caretIndex:h}=u;this.value=_,h&&this._inputNode&&"selectionStart"in this._inputNode&&(this._inputNode.selectionStart=h,this._inputNode.selectionEnd=h)}}}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=typeof this.formattedValue<"u"?this.formattedValue:"",j(this,e).didFormatterOutputSyncToView=!!this.formattedValue&&j(this,e).didFormatterRun)}_reflectBackOn(){return!this._isHandlingUserInput}_proxyInputEvent(){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}_onUserInputChanged(){this._isHandlingUserInput=!0,this._syncValueUpwards(),this._isHandlingUserInput=!1}__onCompositionEvent({type:c}){c==="compositionstart"?this.__isHandlingComposition=!0:c==="compositionend"&&(this.__isHandlingComposition=!1,this._syncValueUpwards())}__onPaste(){this._isPasting=!0,setTimeout(()=>{this._isPasting=!1})}connectedCallback(){super.connectedCallback(),typeof this.modelValue>"u"&&this._syncValueUpwards(),this.__prevViewValue=this.value,this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener("input",this._proxyInputEvent),this._inputNode.addEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.addEventListener("compositionend",this.__onCompositionEvent))}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&(this._inputNode.removeEventListener("input",this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.removeEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.removeEventListener("compositionend",this.__onCompositionEvent))}},e=new WeakMap,t=new WeakSet,Ct=function(){return this._isPasting?"pasted":this._isHandlingUserInput&&this.__prevViewValue?"user-edited":"auto"},wt=function(){const c=[];return j(this,e).didFormatterOutputSyncToView&&c.push("formatted"),c},r},Ot=D(Ks),Ys=s=>class extends Te(s){static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},filled:{type:Boolean,reflect:!0},prefilled:{attribute:!1},submitted:{attribute:!1}}}requestUpdate(t,i,o){super.requestUpdate(t,i,o),t==="touched"&&this.touched!==i&&this._onTouchedChanged(),t==="modelValue"&&(this.filled=!this._isEmpty()),t==="dirty"&&this.dirty!==i&&this._onDirtyChanged()}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this.filled=!1,this._leaveEvent="blur",this._valueChangedEvent="model-value-changed",this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=!this._isEmpty()}_iStateOnLeave(){this.touched=!0,this.prefilled=!this._isEmpty()}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.submitted=!1,this.dirty=!1,this.prefilled=!this._isEmpty()}_onTouchedChanged(){this.dispatchEvent(new Event("touched-changed",{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new Event("dirty-changed",{bubbles:!0,composed:!0}))}_showFeedbackConditionFor(t,i){return i.touched&&i.dirty||i.prefilled||i.submitted}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,submitted:this.submitted,touched:this.touched,dirty:this.dirty,filled:this.filled,prefilled:this.prefilled}}},Ft=D(Ys);class xi extends Te(Ft(Lt(Ot(st(qe(Z)))))){firstUpdated(e){super.firstUpdated(e),this._initialModelValue=this.modelValue}connectedCallback(){super.connectedCallback(),this._onChange=this._onChange.bind(this),this._inputNode.addEventListener("change",this._onChange),this.classList.add("form-field")}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._inputNode)==null||e.removeEventListener("change",this._onChange)}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.resetInteractionState()}clear(){this.modelValue=""}_onChange(e){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}class ii extends Array{_keys(){return Object.keys(this).filter(e=>Number.isNaN(Number(e)))}}const Zs=s=>class extends Vt(s){static get properties(){return{_isFormOrFieldset:{type:Boolean}}}constructor(){super(),this.formElements=new ii,this._isFormOrFieldset=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this._onRequestToChangeFormElementName=this._onRequestToChangeFormElementName.bind(this),this.addEventListener("form-element-register",this._onRequestToAddFormElement),this.addEventListener("form-element-name-changed",this._onRequestToChangeFormElementName),this.initComplete=new Promise((e,t)=>{this.__resolveInitComplete=e,this.__rejectInitComplete=t}),this.registrationComplete=new Promise((e,t)=>{this.__resolveRegistrationComplete=e,this.__rejectRegistrationComplete=t}),this.registrationComplete.done=!1,this.registrationComplete.then(()=>{this.registrationComplete.done=!0,this.__resolveInitComplete(void 0)},()=>{throw this.registrationComplete.done=!0,this.__rejectInitComplete(void 0),new Error("Registration could not finish. Please use await el.registrationComplete;")})}connectedCallback(){super.connectedCallback(),this._completeRegistration()}_completeRegistration(){Promise.resolve().then(()=>this.__resolveRegistrationComplete(void 0))}disconnectedCallback(){super.disconnectedCallback(),this.registrationComplete.done===!1&&Promise.resolve().then(()=>{Promise.resolve().then(()=>{this.__rejectRegistrationComplete()})})}isRegisteredFormElement(e){return this.formElements.some(t=>t===e)}addFormElement(e,t){if(e._parentFormGroup=this,t>=0?this.formElements.splice(t,0,e):this.formElements.push(e),this._isFormOrFieldset){const{name:i}=e;if(i===this.name)throw console.info("Error Node:",e),new TypeError(`You can not have the same name "${i}" as your parent`);if(i.substr(-2)==="[]")Array.isArray(this.formElements[i])||(this.formElements[i]=new ii),t>0?this.formElements[i].splice(t,0,e):this.formElements[i].push(e);else if(!this.formElements[i])this.formElements[i]=e;else throw console.info("Error Node:",e),new TypeError(`Name "${i}" is already registered - if you want an array add [] to the end`)}}removeFormElement(e){const t=this.formElements.indexOf(e);if(t>-1&&this.formElements.splice(t,1),this._isFormOrFieldset){const{name:i}=e;if(i.substr(-2)==="[]"&&this.formElements[i]){const o=this.formElements[i].indexOf(e);o>-1&&this.formElements[i].splice(o,1)}else this.formElements[i]&&delete this.formElements[i]}}_onRequestToAddFormElement(e){const t=e.detail.element;if(t===this||this.isRegisteredFormElement(t))return;e.stopPropagation();let i=-1;if(this.formElements&&Array.isArray(this.formElements)){for(const[o,r]of this.formElements.entries())if(!(r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)){i=o;break}}this.addFormElement(t,i)}_onRequestToChangeFormElementName(e){const t=this.formElements[e.detail.oldName];t&&(this.formElements[e.detail.newName]=t,delete this.formElements[e.detail.oldName])}_onRequestToRemoveFormElement(e){const t=e.detail.element;t!==this&&this.isRegisteredFormElement(t)&&(e.stopPropagation(),this.removeFormElement(t))}},Ei=D(Zs),Js=s=>class extends s{constructor(){super(),this.registrationTarget=void 0,this.__redispatchEventForFormRegistrarPortalMixin=this.__redispatchEventForFormRegistrarPortalMixin.bind(this),this.addEventListener("form-element-register",this.__redispatchEventForFormRegistrarPortalMixin)}__redispatchEventForFormRegistrarPortalMixin(e){if(e.stopPropagation(),!this.registrationTarget)throw new Error("A FormRegistrarPortal element requires a .registrationTarget");this.registrationTarget.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:e.detail.element},bubbles:!0}))}},Xs=D(Js),Qs=s=>class extends Ot(Lt(Te(s))){static get properties(){return{autocomplete:{type:String,reflect:!0}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return super._inputNode}get selectionStart(){const t=this._inputNode;return t&&t.selectionStart?t.selectionStart:0}set selectionStart(t){const i=this._inputNode;i&&i.selectionStart&&(i.selectionStart=t)}get selectionEnd(){const t=this._inputNode;return t&&t.selectionEnd?t.selectionEnd:0}set selectionEnd(t){const i=this._inputNode;i&&i.selectionEnd&&(i.selectionEnd=t)}get value(){return this._inputNode&&this._inputNode.value||this.__value||""}set value(t){this._inputNode?(this._inputNode.value!==t&&this._setValueAndPreserveCaret(t),this.__value=void 0):this.__value=t}_setValueAndPreserveCaret(t){if(this.focused)try{if(!(this._inputNode instanceof HTMLSelectElement)){const i=this._inputNode.selectionStart;this._inputNode.value=t,this._inputNode.selectionStart=i,this._inputNode.selectionEnd=i}}catch{this._inputNode.value=t}else this._inputNode.value=t}_reflectBackFormattedValueToUser(){if(super._reflectBackFormattedValueToUser(),this._reflectBackOn()&&this.focused)try{this._inputNode.selectionStart=this._inputNode.value.length}catch{}}get _focusableNode(){return this._inputNode}},Ci=D(Qs);class eo extends We{static get validatorName(){return"Required"}static get _compatibleRoles(){return["combobox","gridcell","input","listbox","radiogroup","select","spinbutton","textarea","textbox","tree"]}static get _compatibleTags(){return["input","select","textarea"]}onFormControlConnect({_inputNode:e}){if(e){const t=e.getAttribute("role")||"",i=e.tagName.toLowerCase(),o=this.constructor;(o._compatibleRoles.includes(t)||o._compatibleTags.includes(i))&&e.setAttribute("aria-required","true")}}onFormControlDisconnect({_inputNode:e}){e&&e.removeAttribute("aria-required")}}const to=s=>class extends Ei(st(Ft(s))){static get properties(){return{multipleChoice:{type:Boolean,attribute:"multiple-choice"}}}get modelValue(){const t=this._getCheckedElements();return this.multipleChoice?t.map(i=>i.choiceValue):t[0]?t[0].choiceValue:""}set modelValue(t){const i=(o,r)=>typeof o.choiceValue=="object"?JSON.stringify(o.choiceValue)===JSON.stringify(t):o.choiceValue===r;this.__isInitialModelValue?this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this._setCheckedElements(t,i),this.requestUpdate("modelValue",this._oldModelValue)}):(this._setCheckedElements(t,i),this.requestUpdate("modelValue",this._oldModelValue)),this._oldModelValue=this.modelValue}get serializedValue(){const t=this._getCheckedElements();return this.multipleChoice?t.map(i=>i.serializedValue.value):t[0]?t[0].serializedValue.value:""}set serializedValue(t){const i=(o,r)=>o.serializedValue.value===r;this.__isInitialSerializedValue?this.registrationComplete.then(()=>{this.__isInitialSerializedValue=!1,this._setCheckedElements(t,i),this.requestUpdate("serializedValue")}):(this._setCheckedElements(t,i),this.requestUpdate("serializedValue"))}get formattedValue(){const t=this._getCheckedElements();return this.multipleChoice?t.map(i=>i.formattedValue):t[0]?t[0].formattedValue:""}set formattedValue(t){const i=(o,r)=>o.formattedValue===r;this.__isInitialFormattedValue?this.registrationComplete.then(()=>{this.__isInitialFormattedValue=!1,this._setCheckedElements(t,i)}):this._setCheckedElements(t,i)}get operationMode(){return this._repropagationRole==="choice-group"?"select":"enter"}constructor(){super(),this.multipleChoice=!1,this._repropagationRole="choice-group",this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this.__isInitialFormattedValue=!0}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__isInitialFormattedValue=!1})}_completeRegistration(){Promise.resolve().then(()=>super._completeRegistration())}updated(t){super.updated(t),t.has("name")&&this.name!==t.get("name")&&this.formElements.forEach(i=>{i.name=this.name})}addFormElement(t,i){this._throwWhenInvalidChildModelValue(t),t.name=this.name,super.addFormElement(t,i)}clear(){this.multipleChoice?this.modelValue=[]:this.modelValue=""}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}_getFromAllFormElementsFilter(t,i){return!0}_getFromAllFormElements(t,i){var a;const o=i||this._getFromAllFormElementsFilter;if(t==="modelValue"||t==="serializedValue"||t==="formattedValue")return this[t];const r=this.formElements.filter(d=>o(d,t));return t==="_initialModelValue"?this.multipleChoice?r.filter(d=>d[t].checked).map(d=>d[t].value):(a=r.find(d=>d[t].checked))==null?void 0:a.value:r.map(d=>d[t])}_throwWhenInvalidChildModelValue(t){if(typeof t.modelValue.checked!="boolean"||!Object.prototype.hasOwnProperty.call(t.modelValue,"value"))throw new Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${t.tagName.toLowerCase()} with .modelValue="${t.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){return this.multipleChoice?this.modelValue.length===0:typeof this.modelValue=="string"&&this.modelValue===""||this.modelValue===void 0||this.modelValue===null}_checkSingleChoiceElements(t){const{target:i}=t;if(i.checked===!1)return;const o=i.name;this.formElements.filter(r=>r.name===o).forEach(r=>{r!==i&&(r.checked=!1)})}_getCheckedElements(){return this.formElements.filter(t=>t.checked&&!t.disabled)}_setCheckedElements(t,i){if(t==null){this.formElements.forEach(o=>o.checked=!1);return}for(let o=0;o<this.formElements.length;o+=1)if(this.multipleChoice){let r=t.includes(this.formElements[o].modelValue.value);typeof this.formElements[o].modelValue.value=="object"&&(r=t.map(a=>JSON.stringify(a)).includes(JSON.stringify(this.formElements[o].modelValue.value))),this.formElements[o].checked=r}else i(this.formElements[o],t)?this.formElements[o].checked=!0:this.formElements[o].checked=!1}__setChoiceGroupTouched(){const t=this.modelValue;t!=null&&t!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=t)}_onBeforeRepropagateChildrenValues(t){const i=t.detail&&t.detail.element||t.target;this.multipleChoice||!i.checked||(this.formElements.forEach(o=>{i.choiceValue!==o.choiceValue&&(o.checked=!1)}),this.__setChoiceGroupTouched(),this.requestUpdate("modelValue",this._oldModelValue),this._oldModelValue=this.modelValue)}_repropagationCondition(t){return!(this._repropagationRole==="choice-group"&&!this.multipleChoice&&!t.checked)}},io=D(to),so=(s,e={})=>s.value!==e.value||s.checked!==e.checked,oo=s=>class extends Ot(s){static get properties(){return{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},modelValue:{type:Object,hasChanged:so},choiceValue:{type:Object}}}get choiceValue(){return this.modelValue.value}set choiceValue(t){this.requestUpdate("choiceValue",this.choiceValue),this.modelValue.value!==t&&(this.modelValue={value:t,checked:this.modelValue.checked})}requestUpdate(t,i,o){super.requestUpdate(t,i,o),t==="modelValue"?this.modelValue.checked!==this.checked&&this.__syncModelCheckedToChecked(this.modelValue.checked):t==="checked"&&this.modelValue.checked!==this.checked&&this.__syncCheckedToModel(this.checked)}firstUpdated(t){super.firstUpdated(t),t.has("checked")&&this.__syncCheckedToInputElement()}updated(t){super.updated(t),t.has("modelValue")&&this.__syncCheckedToInputElement(),t.has("name")&&this._parentFormGroup&&this._parentFormGroup.name!==this.name&&this._syncNameToParentFormGroup()}constructor(){super(),this.modelValue={value:"",checked:!1},this.disabled=!1,this._preventDuplicateLabelClick=this._preventDuplicateLabelClick.bind(this),this._toggleChecked=this._toggleChecked.bind(this)}static get styles(){return[...super.styles||[],G`
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
        `]}render(){return C`
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
      `}_choiceGraphicTemplate(){return A}_afterTemplate(){return A}connectedCallback(){super.connectedCallback(),this._labelNode&&this._labelNode.addEventListener("click",this._preventDuplicateLabelClick),this.addEventListener("user-input-changed",this._toggleChecked)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._preventDuplicateLabelClick),this.removeEventListener("user-input-changed",this._toggleChecked)}_preventDuplicateLabelClick(t){const i=o=>{o.stopImmediatePropagation(),this._inputNode.removeEventListener("click",i)};this._inputNode.addEventListener("click",i)}_toggleChecked(t){this.disabled||(this._isHandlingUserInput=!0,this.checked=!this.checked,this._isHandlingUserInput=!1)}_syncNameToParentFormGroup(){var t;this._parentFormGroup.tagName.includes(this.tagName)&&(this.name=((t=this._parentFormGroup)==null?void 0:t.name)||"")}__syncModelCheckedToChecked(t){this.checked=t}__syncCheckedToModel(t){this.modelValue={value:this.choiceValue,checked:t}}__syncCheckedToInputElement(){this._inputNode&&(this._inputNode.checked=this.checked)}_proxyInputEvent(){}_onModelValueChanged({modelValue:t},i){let o;i&&i.modelValue&&(o=i.modelValue),this.constructor.elementProperties.get("modelValue").hasChanged(t,o)&&super._onModelValueChanged({modelValue:t})}parser(){return this.modelValue}formatter(t){return t&&t.value!==void 0?t.value:t}clear(){this.checked=!1}_isEmpty(){return!this.checked}_syncValueUpwards(){}},ro=D(oo);class ao extends Ci(xi){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("input"),t=this.getAttribute("value");return t&&e.setAttribute("value",t),e}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type="text",this.placeholder=""}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="readOnly"&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has("type")&&(this._inputNode.type=this.type),e.has("placeholder")&&(this._inputNode.placeholder=this.placeholder),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}}const no=G`
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
`;var Mt=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(a=s[d])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Xe=class extends ao{constructor(){super(...arguments),this.size="md",this.danger=!1,this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-input")},this._handleNativeChange=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,no]}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}_labelTemplate(){return C`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return C`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return C`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?C`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:A}_inputGroupInputTemplate(){return C`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot==="suffix")?C`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:A}_feedbackTemplate(){return C`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_dispatchValueEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}};Mt([M({reflect:!0})],Xe.prototype,"size",void 0);Mt([M({type:Boolean,reflect:!0})],Xe.prototype,"danger",void 0);Xe=Mt([ke("co-input")],Xe);class lo extends Xs(Z){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox")}createRenderRoot(){return this}}const co=s=>class extends Te(bi(io(qe(Ei(s))))){static get properties(){return{orientation:String,selectionFollowsFocus:{type:Boolean,attribute:"selection-follows-focus"},rotateKeyboardNavigation:{type:Boolean,attribute:"rotate-keyboard-navigation"},hasNoDefaultSelected:{type:Boolean,reflect:!0,attribute:"has-no-default-selected"},_noTypeAhead:{type:Boolean}}}static get styles(){return[...super.styles||[],G`
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
        `]}_inputGroupInputTemplate(){return C`
        <div class="input-group__input">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      `}static get scopedElements(){return{...super.scopedElements,"lion-options":lo}}get slots(){return{...super.slots,input:()=>{const t=this.createScopedElement("lion-options");return t.setAttribute("data-tag-name","lion-options"),t.registrationTarget=this,t}}}get _inputNode(){return this.querySelector('[slot="input"]')}get _listboxNode(){return this._inputNode}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get _listboxSlot(){return this.shadowRoot.querySelector("slot[name=input]")}get _scrollTargetNode(){return this._listboxNode}get _activeDescendantOwnerNode(){return this._listboxNode}get activeIndex(){return this.formElements.findIndex(t=>t.active===!0)}set activeIndex(t){if(this.formElements[t]){const i=this.formElements[t];this.__setChildActive(i)}else this.__setChildActive(null)}get checkedIndex(){const t=this.formElements;return this.multipleChoice?t.filter(i=>i.checked).map(i=>t.indexOf(i)):t.indexOf(t.find(i=>i.checked))}set checkedIndex(t){this.setCheckedIndex(t)}constructor(){super(),this.hasNoDefaultSelected=!1,this.orientation="vertical",this.rotateKeyboardNavigation=!1,this.selectionFollowsFocus=!1,this._noTypeAhead=!1,this._typeAheadTimeout=1e3,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this._repropagationRole="choice-group",this._listboxReceivesNoFocus=!1,this._oldModelValue=void 0,this._listboxOnKeyDown=this._listboxOnKeyDown.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this),this._listboxOnKeyUp=this._listboxOnKeyUp.bind(this),this._onChildActiveChanged=this._onChildActiveChanged.bind(this),this.__proxyChildModelValueChanged=this.__proxyChildModelValueChanged.bind(this),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.__typedChars=[]}connectedCallback(){this._listboxNode&&(this._listboxNode.registrationTarget=this),super.connectedCallback(),this._setupListboxNode(),this.__setupEventListeners(),this.registrationComplete.then(()=>{this.__initInteractionStates()})}firstUpdated(t){super.firstUpdated(t),this.__moveOptionsToListboxNode(),this.registrationComplete.then(()=>{this._initialModelValue=this.modelValue}),new MutationObserver(()=>{this._onListboxContentChanged()}).observe(this._listboxNode,{childList:!0})}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.__requestOptionsToBeDisabled():this.__retractRequestOptionsToBeDisabled())}disconnectedCallback(){super.disconnectedCallback(),this._teardownListboxNode(),this.__teardownEventListeners()}setCheckedIndex(t){if(this.multipleChoice&&Array.isArray(t)){this._uncheckChildren(this.formElements.filter(i=>i===t)),t.forEach(i=>{this.formElements[i]&&(this.formElements[i].checked=!this.formElements[i].checked)});return}typeof t=="number"&&(t===-1&&this._uncheckChildren(),this.formElements[t]&&(this.formElements[t].disabled?this._uncheckChildren():this.multipleChoice?this.formElements[t].checked=!this.formElements[t].checked:this.formElements[t].checked=!0))}addFormElement(t,i){super.addFormElement(t,i),t.id=t.id||`${this.localName}-option-${hi()}`,this.disabled&&t.makeRequestToBeDisabled(),this.__setAttributeForAllFormElements("aria-setsize",this.formElements.length),this.formElements.forEach((o,r)=>{o.setAttribute("aria-posinset",r+1)}),this.__proxyChildModelValueChanged({target:t}),this.resetInteractionState()}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.activeIndex=-1,this.resetInteractionState()}clear(){super.clear(),this.setCheckedIndex(-1)}_handleTypeAhead(t,{setAsChecked:i}){const{key:o,code:r}=t;if(r.startsWith("Key")||r.startsWith("Digit")||r.startsWith("Numpad")){t.preventDefault(),this.__typedChars.push(o);const a=this.__typedChars.join(""),d=this.formElements.findIndex(c=>c.modelValue.value.toLowerCase().startsWith(a));d>=0&&(i&&this.setCheckedIndex(d),this.activeIndex=d),this.__pendingTypeAheadTimeout&&window.clearTimeout(this.__pendingTypeAheadTimeout),this.__pendingTypeAheadTimeout=setTimeout(()=>{this.__typedChars=[]},this._typeAheadTimeout)}}_getCheckedElements(){return this.formElements.filter(t=>t.checked)}_setupListboxNode(){this._listboxNode?this.__setupListboxNodeInteractions():this._listboxSlot&&this._listboxSlot.addEventListener("slotchange",()=>{this.__setupListboxNodeInteractions()})}_onListboxContentChanged(){}_teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener("keydown",this._listboxOnKeyDown),this._listboxNode.removeEventListener("click",this._listboxOnClick),this._listboxNode.removeEventListener("keyup",this._listboxOnKeyUp))}_getNextEnabledOption(t,i=1){return this.__getEnabledOption(t,i)}_getPreviousEnabledOption(t,i=-1){return this.__getEnabledOption(t,i)}_onChildActiveChanged({target:t}){t.active===!0&&this.__setChildActive(t)}_listboxOnKeyDown(t){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:i}=t;switch(i){case" ":case"Enter":{if(i===" "&&this._listboxReceivesNoFocus||(i===" "&&t.preventDefault(),!this.formElements[this.activeIndex])||this.formElements[this.activeIndex].disabled)return;this.formElements[this.activeIndex].href&&this.formElements[this.activeIndex].click(),this.setCheckedIndex(this.activeIndex);break}case"ArrowUp":t.preventDefault(),this.orientation==="vertical"&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowLeft":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.orientation==="horizontal"&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowDown":t.preventDefault(),this.orientation==="vertical"&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"ArrowRight":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.orientation==="horizontal"&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"Home":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.activeIndex=this._getNextEnabledOption(0,0);break;case"End":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.activeIndex=this._getPreviousEnabledOption(this.formElements.length-1,0);break;default:this._noTypeAhead||this._handleTypeAhead(t,{setAsChecked:this.selectionFollowsFocus&&!this.multipleChoice})}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(i)&&this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex)}_listboxOnClick(t){}_listboxOnKeyUp(t){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:i}=t;switch(i){case"ArrowUp":case"ArrowDown":case"Home":case"End":case"Enter":t.preventDefault()}}_onLabelClick(){this._listboxNode.focus()}_scrollIntoView(t,i){t.scrollIntoView({behavior:"smooth",block:"nearest"})}__setupEventListeners(){this._listboxNode.addEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.addEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__teardownEventListeners(){this._listboxNode.removeEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.removeEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__setChildActive(t){if(this.formElements.forEach(i=>{i.active=t===i}),!t){this._activeDescendantOwnerNode.removeAttribute("aria-activedescendant");return}this._activeDescendantOwnerNode.setAttribute("aria-activedescendant",t.id),this._scrollIntoView(t,this._scrollTargetNode)}_uncheckChildren(t=[]){const i=Array.isArray(t)?t:[t];this.formElements.forEach(o=>{i.includes(o)||(o.checked=!1)})}__onChildCheckedChanged(t){const{target:i}=t;t.stopPropagation&&t.stopPropagation(),i.checked&&!this.multipleChoice&&this._uncheckChildren(i)}__setAttributeForAllFormElements(t,i){this.formElements.forEach(o=>{o.setAttribute(t,i)})}__proxyChildModelValueChanged(t){t.stopPropagation&&t.stopPropagation(),this.__onChildCheckedChanged(t),this.requestUpdate("modelValue",this._oldModelValue),t.detail&&t.detail.formPath&&this.dispatchEvent(new CustomEvent("model-value-changed",{detail:{formPath:t.detail.formPath,isTriggeredByUser:t.detail.isTriggeredByUser||this._isHandlingUserInput,element:t.target}})),this._oldModelValue=this.modelValue}__getEnabledOption(t,i){const o=r=>i===1?r<this.formElements.length:r>=0;for(let r=t+i;o(r);r+=i)if(this.formElements[r]&&!this.formElements[r].hasAttribute("aria-hidden"))return r;if(this.rotateKeyboardNavigation){const r=i===-1?this.formElements.length-1:0;for(let a=r;o(a);a+=i)if(this.formElements[a]&&!this.formElements[a].hasAttribute("aria-hidden"))return a}return t}__moveOptionsToListboxNode(){const t=this.shadowRoot.getElementById("options-outlet");t&&(Yt(this,this._listboxNode),t.addEventListener("slotchange",()=>{Yt(this,this._listboxNode)}))}__preventScrollingWithArrowKeys(t){if(this.disabled)return;const{key:i}=t;switch(i){case"ArrowUp":case"ArrowDown":case"Home":case"End":t.preventDefault()}}__setupListboxNodeInteractions(){this._listboxNode.setAttribute("role","listbox"),this._listboxNode.setAttribute("aria-orientation",this.orientation),this._listboxNode.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this._listboxNode.setAttribute("tabindex","0"),this._listboxNode.addEventListener("click",this._listboxOnClick),this._listboxNode.addEventListener("keyup",this._listboxOnKeyUp),this._listboxNode.addEventListener("keydown",this._listboxOnKeyDown),this._scrollTargetNode.addEventListener("keydown",this.__preventScrollingWithArrowKeys)}__requestOptionsToBeDisabled(){this.formElements.forEach(t=>{t.makeRequestToBeDisabled&&t.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(t=>{t.retractRequestToBeDisabled&&t.retractRequestToBeDisabled()})}__initInteractionStates(){this.initInteractionState()}},ho=D(co);class uo extends ho(Lt(Ft(st(Z)))){get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}class po extends tt(ro(Vt(qe(Z)))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[G`
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
      `]}get slots(){return{}}constructor(){super(),this.active=!1,this.__onClick=this.__onClick.bind(this),this.__registerEventListeners()}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="active"&&this.active!==t&&this.dispatchEvent(new Event("active-changed",{bubbles:!0}))}updated(e){super.updated(e),e.has("checked")&&this.setAttribute("aria-selected",`${this.checked}`),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}render(){return C`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}__registerEventListeners(){this.addEventListener("click",this.__onClick)}__unRegisterEventListeners(){this.removeEventListener("click",this.__onClick)}__onClick(){if(this.disabled)return;const e=this._parentFormGroup;this._isHandlingUserInput=!0,e&&e.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}}const fo=G`
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
`,_o=G`
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
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
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

  .option__indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    inline-size: 0.75em;
    block-size: 0.75em;
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-strong);
    border-radius: 999px;
  }

  :host([checked]) .option__indicator {
    border-color: var(--co-color-border-active);
    background: var(--co-color-border-active);
    box-shadow: inset 0 0 0 2px var(--co-color-surface-default);
  }

  :host([disabled]) .option__indicator {
    border-color: var(--co-color-border-subtle);
    background: transparent;
    box-shadow: none;
  }

  .option__label {
    min-inline-size: 0;
  }
`;var ee=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(a=s[d])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let kt=class extends po{static get styles(){return[_o]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}render(){return C`
      <div part="base" class="option">
        <span part="indicator" class="option__indicator" aria-hidden="true"></span>
        <span part="label" class="option__label">
          <slot></slot>
        </span>
      </div>
    `}};ee([M({reflect:!0})],kt.prototype,"value",null);kt=ee([ke("co-option")],kt);let he=class extends uo{constructor(){super(...arguments),this.orientation="vertical",this.selectionFollowsFocus=!1,this.rotateKeyboardNavigation=!1,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.required=!1,this._requiredValidator=new eo,this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,fo]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){super.firstUpdated(e),this._syncRequiredValidator()}updated(e){super.updated(e),e.has("required")&&this._syncRequiredValidator()}_labelTemplate(){return C`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return C`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return C`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">${this._inputGroupInputTemplate()}</div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return A}_inputGroupInputTemplate(){return C`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
        <slot id="options-outlet"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return A}_feedbackTemplate(){return C`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}};ee([M({reflect:!0})],he.prototype,"orientation",void 0);ee([M({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],he.prototype,"selectionFollowsFocus",void 0);ee([M({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],he.prototype,"rotateKeyboardNavigation",void 0);ee([M({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],he.prototype,"hasNoDefaultSelected",void 0);ee([M({type:Boolean,attribute:"multiple-choice",reflect:!0})],he.prototype,"multipleChoice",void 0);ee([M({type:Boolean,reflect:!0})],he.prototype,"required",void 0);he=ee([ke("co-listbox")],he);var Re=new Map;function mo(s){var e=Re.get(s);e&&e.destroy()}function go(s){var e=Re.get(s);e&&e.update()}var Ve=null;typeof window>"u"?((Ve=function(s){return s}).destroy=function(s){return s},Ve.update=function(s){return s}):((Ve=function(s,e){return s&&Array.prototype.forEach.call(s.length?s:[s],function(t){return function(i){if(i&&i.nodeName&&i.nodeName==="TEXTAREA"&&!Re.has(i)){var o,r=null,a=window.getComputedStyle(i),d=(o=i.value,function(){u({testForHeightReduction:o===""||!i.value.startsWith(o),restoreTextAlign:null}),o=i.value}),c=(function(_){i.removeEventListener("autosize:destroy",c),i.removeEventListener("autosize:update",f),i.removeEventListener("input",d),window.removeEventListener("resize",f),Object.keys(_).forEach(function(h){return i.style[h]=_[h]}),Re.delete(i)}).bind(i,{height:i.style.height,resize:i.style.resize,textAlign:i.style.textAlign,overflowY:i.style.overflowY,overflowX:i.style.overflowX,wordWrap:i.style.wordWrap});i.addEventListener("autosize:destroy",c),i.addEventListener("autosize:update",f),i.addEventListener("input",d),window.addEventListener("resize",f),i.style.overflowX="hidden",i.style.wordWrap="break-word",Re.set(i,{destroy:c,update:f}),f()}function u(_){var h,p,x=_.restoreTextAlign,E=x===void 0?null:x,$=_.testForHeightReduction,w=$===void 0||$,F=a.overflowY;if(i.scrollHeight!==0&&(a.resize==="vertical"?i.style.resize="none":a.resize==="both"&&(i.style.resize="horizontal"),w&&(h=function(N){for(var B=[];N&&N.parentNode&&N.parentNode instanceof Element;)N.parentNode.scrollTop&&B.push([N.parentNode,N.parentNode.scrollTop]),N=N.parentNode;return function(){return B.forEach(function(H){var W=H[0],J=H[1];W.style.scrollBehavior="auto",W.scrollTop=J,W.style.scrollBehavior=null})}}(i),i.style.height=""),p=a.boxSizing==="content-box"?i.scrollHeight-(parseFloat(a.paddingTop)+parseFloat(a.paddingBottom)):i.scrollHeight+parseFloat(a.borderTopWidth)+parseFloat(a.borderBottomWidth),a.maxHeight!=="none"&&p>parseFloat(a.maxHeight)?(a.overflowY==="hidden"&&(i.style.overflow="scroll"),p=parseFloat(a.maxHeight)):a.overflowY!=="hidden"&&(i.style.overflow="hidden"),i.style.height=p+"px",E&&(i.style.textAlign=E),h&&h(),r!==p&&(i.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),r=p),F!==a.overflow&&!E)){var R=a.textAlign;a.overflow==="hidden"&&(i.style.textAlign=R==="start"?"end":"start"),u({restoreTextAlign:R,testForHeightReduction:!0})}}function f(){u({testForHeightReduction:!0,restoreTextAlign:null})}}(t)}),s}).destroy=function(s){return s&&Array.prototype.forEach.call(s.length?s:[s],mo),s},Ve.update=function(s){return s&&Array.prototype.forEach.call(s.length?s:[s],go),s});var Ie=Ve;class vo extends xi{get _inputNode(){return Array.from(this.children).find(e=>e.slot==="input")}}class bo extends Ci(vo){static get properties(){return{maxRows:{type:Number,attribute:"max-rows"},rows:{type:Number,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("textarea");return e.style.resize!==void 0&&(e.style.resize="none"),e}}}constructor(){super(),this.rows=2,this.maxRows=6,this.readOnly=!1,this.placeholder=""}connectedCallback(){super.connectedCallback(),this.__initializeAutoresize(),this.__intersectionObserver=new IntersectionObserver(()=>this.resizeTextarea()),this.__intersectionObserver.observe(this)}updated(e){if(super.updated(e),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("rows")){const t=this._inputNode;t&&(t.rows=this.rows)}if(e.has("readOnly")){const t=this._inputNode;t&&(t.readOnly=this.readOnly)}if(e.has("placeholder")){const t=this._inputNode;t&&(t.placeholder=this.placeholder)}e.has("modelValue")&&this.resizeTextarea(),(e.has("maxRows")||e.has("rows"))&&this.setTextareaMaxHeight()}disconnectedCallback(){super.disconnectedCallback(),Ie.destroy(this._inputNode)}setTextareaMaxHeight(){const{value:e}=this._inputNode;this._inputNode.value="",this.resizeTextarea();const t=window.getComputedStyle(this._inputNode,null),i=parseFloat(t.lineHeight)||parseFloat(t.height)/this.rows,o=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),r=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),a=t.boxSizing==="border-box"?o+r:0;this._inputNode.style.maxHeight=`${i*this.maxRows+a}px`,this._inputNode.value=e,this.resizeTextarea()}static get styles(){return[...super.styles,G`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          box-sizing: content-box;
          overflow-x: hidden; /* for FF adds height to the TextArea to reserve place for scroll-bars */
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }
      `]}get updateComplete(){return this.__textareaUpdateComplete?Promise.all([this.__textareaUpdateComplete,super.updateComplete]):super.updateComplete}resizeTextarea(){Ie.update(this._inputNode)}__initializeAutoresize(){this.__shady_native_contains?this.__textareaUpdateComplete=this.__waitForTextareaRenderedInRealDOM().then(()=>{this.__startAutoresize(),this.__textareaUpdateComplete=null}):this.__startAutoresize()}async __waitForTextareaRenderedInRealDOM(){let e=3;for(;e!==0&&!this.__shady_native_contains(this._inputNode);)await new Promise(t=>setTimeout(t)),e-=1}__startAutoresize(){Ie(this._inputNode),this.setTextareaMaxHeight()}}const yo=G`
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
`;var Se=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(a=s[d])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ye=class extends bo{constructor(){super(...arguments),this.size="md",this.danger=!1,this.resize="auto",this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&(this.requestUpdate("value"),this._dispatchValueEvent("co-input"))},this._handleNativeChange=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,yo]}get slots(){const e=super.slots;return{...e,input:()=>{const t=e.input(),i=this.getAttribute("value");return i!==null&&(t.value=i),t}}}get value(){return super.value}set value(e){const t=this.value;super.value=e,this.requestUpdate("value",t),this._resizeForCurrentMode()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}firstUpdated(e){super.firstUpdated(e),this._syncNativeLengthAttributes(),this._applyResizeMode(),this._syncCounterDescription()}updated(e){super.updated(e),(e.has("maxLength")||e.has("minLength"))&&this._syncNativeLengthAttributes(),(e.has("resize")||e.has("rows")||e.has("maxRows"))&&this._applyResizeMode(),e.has("maxLength")&&this._syncCounterDescription()}resizeTextarea(){this.resize==="auto"&&super.resizeTextarea()}_groupTwoTemplate(){return C`
      ${this._inputGroupTemplate()}
      <div part="meta" class="form-field__meta">
        ${this._feedbackTemplate()} ${this._counterTemplate()}
      </div>
    `}_labelTemplate(){return C`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return C`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return C`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?C`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:A}_inputGroupInputTemplate(){return C`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot==="suffix")?C`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:A}_feedbackTemplate(){return C`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_counterTemplate(){return this._hasMaxLength()?C`
      <output
        part="counter"
        class="form-field__counter ${this._currentLength()>=this.maxLength?"form-field__counter--danger":""}"
      >
        ${this._currentLength()} / ${this.maxLength}
      </output>
    `:A}_dispatchValueEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}_hasMaxLength(){return typeof this.maxLength=="number"&&Number.isFinite(this.maxLength)&&this.maxLength>=0}_currentLength(){return this.value.length}_syncNativeLengthAttributes(){const e=this._inputNode;e&&(this._hasMaxLength()?e.maxLength=this.maxLength:e.removeAttribute("maxlength"),typeof this.minLength=="number"&&Number.isFinite(this.minLength)&&this.minLength>=0?e.minLength=this.minLength:e.removeAttribute("minlength"))}_applyResizeMode(){const e=this._inputNode;if(e){if(this.resize==="auto"){Ie(e),this.setTextareaMaxHeight(),e.style.resize="none";return}Ie.destroy(e),e.style.height="",e.style.maxHeight="",e.style.overflowY="",e.style.resize=this.resize==="vertical"?"vertical":"none"}}_resizeForCurrentMode(){!this._inputNode||this.resize!=="auto"||this.resizeTextarea()}_syncCounterDescription(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector('[part="counter"]');if(this._counterNode&&this._counterNode!==e&&(this.removeFromAriaDescribedBy(this._counterNode),this._counterNode=void 0),!this._hasMaxLength()){this._counterNode&&(this.removeFromAriaDescribedBy(this._counterNode),this._counterNode=void 0);return}e&&this._counterNode!==e&&(this.addToAriaDescribedBy(e,{idPrefix:"counter",reorder:!0}),this._counterNode=e)}};Se([M({reflect:!0})],ye.prototype,"size",void 0);Se([M({type:Boolean,reflect:!0})],ye.prototype,"danger",void 0);Se([M({reflect:!0})],ye.prototype,"resize",void 0);Se([M({type:Number,attribute:"maxlength",reflect:!0})],ye.prototype,"maxLength",void 0);Se([M({type:Number,attribute:"minlength",reflect:!0})],ye.prototype,"minLength",void 0);ye=Se([ke("co-textarea")],ye);export{be as CoButton,ce as CoIcon,Xe as CoInput,he as CoListbox,kt as CoOption,ye as CoTextarea};
