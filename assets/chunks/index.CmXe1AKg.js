const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/bg-BG.DvcqJcRT.js","assets/chunks/bg.DjRhbvP8.js","assets/chunks/cs-CZ.C4M3ss0M.js","assets/chunks/cs.BpAIInFi.js","assets/chunks/de-DE.B6cLQS-C.js","assets/chunks/de.tu_ZC0by.js","assets/chunks/en-AU.BLLSR6ul.js","assets/chunks/en.BRtJWocA.js","assets/chunks/en-GB.BLLSR6ul.js","assets/chunks/en-US.BLLSR6ul.js","assets/chunks/es-ES.C-k5kUnm.js","assets/chunks/es.CmCcTLNg.js","assets/chunks/fr-FR.DC-XO9HF.js","assets/chunks/fr.z99AZYvu.js","assets/chunks/fr-BE.DC-XO9HF.js","assets/chunks/hu-HU.BeTGSB1R.js","assets/chunks/hu.DlqOkKS-.js","assets/chunks/it-IT.BfrsYHtj.js","assets/chunks/it.dhe0n6ro.js","assets/chunks/nl-BE.CtPSVrK-.js","assets/chunks/nl.CsOjjg4q.js","assets/chunks/nl-NL.CtPSVrK-.js","assets/chunks/pl-PL.BO_uoCo3.js","assets/chunks/pl.CYht5iOc.js","assets/chunks/ro-RO.BzszQasy.js","assets/chunks/ro.DwBEW5po.js","assets/chunks/ru-RU.DYdB6zKs.js","assets/chunks/ru.BWO2zRrD.js","assets/chunks/sk-SK.t6DAVN22.js","assets/chunks/sk.BCmB7Wtj.js","assets/chunks/tr-TR.Cbm2kwTy.js","assets/chunks/tr.C7VWmvp5.js","assets/chunks/uk-UA.DRKx0L1R.js","assets/chunks/uk.L9q5i_B2.js"])))=>i.map(i=>d[i]);
var bs=Object.defineProperty;var gs=Object.getPrototypeOf;var ys=Reflect.get;var Ji=o=>{throw TypeError(o)};var xs=(o,e,t)=>e in o?bs(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var K=(o,e,t)=>xs(o,typeof e!="symbol"?e+"":e,t),Ut=(o,e,t)=>e.has(o)||Ji("Cannot "+t);var H=(o,e,t)=>(Ut(o,e,"read from private field"),t?t.call(o):e.get(o)),ie=(o,e,t)=>e.has(o)?Ji("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t),re=(o,e,t,i)=>(Ut(o,e,"write to private field"),i?i.call(o,t):e.set(o,t),t),le=(o,e,t)=>(Ut(o,e,"access private method"),t);var Me=(o,e,t)=>ys(gs(o),t,e);import{B as w}from"./framework.DP1yFSuu.js";import{g as ws,a as ks,b as Cs,o as Es}from"./theme.DNikZ0c0.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=globalThis,Ni=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Si=Symbol(),Xi=new WeakMap;let Vo=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Si)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ni&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Xi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Xi.set(t,e))}return e}toString(){return this.cssText}};const Ns=o=>new Vo(typeof o=="string"?o:o+"",void 0,Si),T=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new Vo(t,o,Si)},Oi=(o,e)=>{if(Ni)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=St.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},Qi=Ni?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ns(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ss,defineProperty:Os,getOwnPropertyDescriptor:As,getOwnPropertyNames:Ts,getOwnPropertySymbols:Ls,getPrototypeOf:Fs}=Object,be=globalThis,eo=be.trustedTypes,Vs=eo?eo.emptyScript:"",Ht=be.reactiveElementPolyfillSupport,ot=(o,e)=>o,Ot={toAttribute(o,e){switch(e){case Boolean:o=o?Vs:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Ai=(o,e)=>!Ss(o,e),to={attribute:!0,type:String,converter:Ot,reflect:!1,useDefault:!1,hasChanged:Ai};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),be.litPropertyMetadata??(be.litPropertyMetadata=new WeakMap);let Re=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=to){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Os(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=As(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){const a=s==null?void 0:s.call(this);r==null||r.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??to}static _$Ei(){if(this.hasOwnProperty(ot("elementProperties")))return;const e=Fs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ot("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ot("properties"))){const t=this.properties,i=[...Ts(t),...Ls(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Qi(s))}else e!==void 0&&t.push(Qi(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oi(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Ot).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var r,n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:Ot;this._$Em=s;const h=c.fromAttribute(t,a.type);this[s]=h??((n=this._$Ej)==null?void 0:n.get(s))??h,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){var n;if(e!==void 0){const a=this.constructor;if(s===!1&&(r=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??Ai)(r,t)||i.useDefault&&i.reflect&&r===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s){const{wrapped:a}=n,c=this[r];a!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,n,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Re.elementStyles=[],Re.shadowRootOptions={mode:"open"},Re[ot("elementProperties")]=new Map,Re[ot("finalized")]=new Map,Ht==null||Ht({ReactiveElement:Re}),(be.reactiveElementVersions??(be.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=globalThis,io=o=>o,At=st.trustedTypes,oo=At?At.createPolicy("lit-html",{createHTML:o=>o}):void 0,Io="$lit$",me=`lit$${Math.random().toFixed(9).slice(2)}$`,zo="?"+me,Is=`<${zo}>`,Ae=document,dt=()=>Ae.createComment(""),ht=o=>o===null||typeof o!="object"&&typeof o!="function",Ti=Array.isArray,zs=o=>Ti(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",qt=`[ 	
\f\r]`,et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,so=/-->/g,ro=/>/g,Ce=RegExp(`>|${qt}(?:([^\\s"'>=/]+)(${qt}*=${qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),no=/'/g,ao=/"/g,Mo=/^(?:script|style|textarea|title)$/i,Ms=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),u=Ms(1),ae=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),lo=new WeakMap,Ne=Ae.createTreeWalker(Ae,129);function $o(o,e){if(!Ti(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return oo!==void 0?oo.createHTML(e):e}const $s=(o,e)=>{const t=o.length-1,i=[];let s,r=e===2?"<svg>":e===3?"<math>":"",n=et;for(let a=0;a<t;a++){const c=o[a];let h,_,b=-1,p=0;for(;p<c.length&&(n.lastIndex=p,_=n.exec(c),_!==null);)p=n.lastIndex,n===et?_[1]==="!--"?n=so:_[1]!==void 0?n=ro:_[2]!==void 0?(Mo.test(_[2])&&(s=RegExp("</"+_[2],"g")),n=Ce):_[3]!==void 0&&(n=Ce):n===Ce?_[0]===">"?(n=s??et,b=-1):_[1]===void 0?b=-2:(b=n.lastIndex-_[2].length,h=_[1],n=_[3]===void 0?Ce:_[3]==='"'?ao:no):n===ao||n===no?n=Ce:n===so||n===ro?n=et:(n=Ce,s=void 0);const f=n===Ce&&o[a+1].startsWith("/>")?" ":"";r+=n===et?c+Is:b>=0?(i.push(h),c.slice(0,b)+Io+c.slice(b)+me+f):c+me+(b===-2?a:f)}return[$o(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class ut{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0;const a=e.length-1,c=this.parts,[h,_]=$s(e,t);if(this.el=ut.createElement(h,i),Ne.currentNode=this.el.content,t===2||t===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(s=Ne.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const b of s.getAttributeNames())if(b.endsWith(Io)){const p=_[n++],f=s.getAttribute(b).split(me),g=/([.?@])?(.*)/.exec(p);c.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?Ds:g[1]==="?"?Ps:g[1]==="@"?Bs:zt}),s.removeAttribute(b)}else b.startsWith(me)&&(c.push({type:6,index:r}),s.removeAttribute(b));if(Mo.test(s.tagName)){const b=s.textContent.split(me),p=b.length-1;if(p>0){s.textContent=At?At.emptyScript:"";for(let f=0;f<p;f++)s.append(b[f],dt()),Ne.nextNode(),c.push({type:2,index:++r});s.append(b[p],dt())}}}else if(s.nodeType===8)if(s.data===zo)c.push({type:2,index:r});else{let b=-1;for(;(b=s.data.indexOf(me,b+1))!==-1;)c.push({type:7,index:r}),b+=me.length-1}r++}}static createElement(e,t){const i=Ae.createElement("template");return i.innerHTML=e,i}}function He(o,e,t=o,i){var n,a;if(e===ae)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const r=ht(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=He(o,s._$AS(o,e.values),s,i)),e}class Rs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Ae).importNode(t,!0);Ne.currentNode=s;let r=Ne.nextNode(),n=0,a=0,c=i[0];for(;c!==void 0;){if(n===c.index){let h;c.type===2?h=new yt(r,r.nextSibling,this,e):c.type===1?h=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(h=new Us(r,this,e)),this._$AV.push(h),c=i[++a]}n!==(c==null?void 0:c.index)&&(r=Ne.nextNode(),n++)}return Ne.currentNode=Ae,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class yt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=He(this,e,t),ht(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==ae&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&ht(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ae.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ut.createElement($o(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(t);else{const n=new Rs(s,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=lo.get(e.strings);return t===void 0&&lo.set(e.strings,t=new ut(e)),t}k(e){Ti(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new yt(this.O(dt()),this.O(dt()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const s=io(e).nextSibling;io(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class zt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(e,t=this,i,s){const r=this.strings;let n=!1;if(r===void 0)e=He(this,e,t,0),n=!ht(e)||e!==this._$AH&&e!==ae,n&&(this._$AH=e);else{const a=e;let c,h;for(e=r[0],c=0;c<r.length-1;c++)h=He(this,a[i+c],t,c),h===ae&&(h=this._$AH[c]),n||(n=!ht(h)||h!==this._$AH[c]),h===y?e=y:e!==y&&(e+=(h??"")+r[c+1]),this._$AH[c]=h}n&&!s&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ds extends zt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}}class Ps extends zt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}}class Bs extends zt{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=He(this,e,t,0)??y)===ae)return;const i=this._$AH,s=e===y&&i!==y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==y&&(i===y||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Us{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){He(this,e)}}const jt=st.litHtmlPolyfillSupport;jt==null||jt(ut,yt),(st.litHtmlVersions??(st.litHtmlVersions=[])).push("3.3.2");const oi=(o,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new yt(e.insertBefore(dt(),r),r,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=globalThis;let D=class extends Re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ae}};var xo;D._$litElement$=!0,D.finalized=!0,(xo=Oe.litElementHydrateSupport)==null||xo.call(Oe,{LitElement:D});const Wt=Oe.litElementPolyfillSupport;Wt==null||Wt({LitElement:D});(Oe.litElementVersions??(Oe.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs={attribute:!0,type:String,converter:Ot,reflect:!1,hasChanged:Ai},qs=(o=Hs,e,t)=>{const{kind:i,metadata:s}=t;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(t.name,o),i==="accessor"){const{name:n}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,c,o,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,o,a),a}}}if(i==="setter"){const{name:n}=t;return function(a){const c=this[n];e.call(this,a),this.requestUpdate(n,c,o,!0,a)}}throw Error("Unsupported decorator location: "+i)};function m(o){return(e,t)=>typeof t=="object"?qs(o,e,t):((i,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,i),n?Object.getOwnPropertyDescriptor(s,r):void 0})(o,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ye(o){return m({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js=(o,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(o,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Li(o,e){return(t,i,s)=>{const r=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(o))??null};return js(t,i,{get(){return r(this)}})}}const Ro=new WeakMap;function Ws(o,e){let t=e;for(;t;){if(Ro.get(t)===o)return!0;t=Object.getPrototypeOf(t)}return!1}function B(o){return e=>{if(Ws(o,e))return e;const t=o(e);return Ro.set(t,o),t}}const si=window,co=new WeakMap;function Gs(o){si.applyFocusVisiblePolyfill&&!co.has(o)&&(si.applyFocusVisiblePolyfill(o),co.set(o,void 0))}const Ks=o=>class extends o{static get properties(){return{focused:{type:Boolean,reflect:!0},focusedVisible:{type:Boolean,reflect:!0,attribute:"focused-visible"},autofocus:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1,this.focusedVisible=!1,this.autofocus=!1}firstUpdated(t){super.firstUpdated(t),this.__registerEventsForFocusMixin(),this.__syncAutofocusToFocusableElement()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForFocusMixin()}updated(t){super.updated(t),t.has("autofocus")&&this.__syncAutofocusToFocusableElement()}__syncAutofocusToFocusableElement(){this._focusableNode&&(this.hasAttribute("autofocus")?this._focusableNode.setAttribute("autofocus",""):this._focusableNode.removeAttribute("autofocus"))}focus(){var t;(t=this._focusableNode)==null||t.focus()}blur(){var t;(t=this._focusableNode)==null||t.blur()}get _focusableNode(){return this._inputNode||document.createElement("input")}__onFocus(){if(this.focused=!0,typeof si.applyFocusVisiblePolyfill=="function")this.focusedVisible=this._focusableNode.hasAttribute("data-focus-visible-added");else try{this.focusedVisible=this._focusableNode.matches(":focus-visible")}catch{this.focusedVisible=!1}}__onBlur(){this.focused=!1,this.focusedVisible=!1}__registerEventsForFocusMixin(){Gs(this.getRootNode()),this.__redispatchFocus=t=>{t.stopPropagation(),this.dispatchEvent(new Event("focus"))},this._focusableNode.addEventListener("focus",this.__redispatchFocus),this.__redispatchBlur=t=>{t.stopPropagation(),this.dispatchEvent(new Event("blur"))},this._focusableNode.addEventListener("blur",this.__redispatchBlur),this.__redispatchFocusin=t=>{t.stopPropagation(),this.__onFocus(),this.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusin",this.__redispatchFocusin),this.__redispatchFocusout=t=>{t.stopPropagation(),this.__onBlur(),this.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusout",this.__redispatchFocusout)}__teardownEventsForFocusMixin(){var t,i,s,r;this._focusableNode&&((t=this._focusableNode)==null||t.removeEventListener("focus",this.__redispatchFocus),(i=this._focusableNode)==null||i.removeEventListener("blur",this.__redispatchBlur),(s=this._focusableNode)==null||s.removeEventListener("focusin",this.__redispatchFocusin),(r=this._focusableNode)==null||r.removeEventListener("focusout",this.__redispatchFocusout))}},Fi=B(Ks),Ys=o=>class extends o{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){this._requestedToBeDisabled===!1&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){this._requestedToBeDisabled===!0&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="disabled"&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),this.disabled===!1&&this._requestedToBeDisabled===!0&&this.__internalSetDisabled(!0))}click(){this.disabled||super.click()}},xt=B(Ys),Zs=o=>{var e,t;return t=class extends xt(o){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),this._requestedToBeDisabled===!1&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}__internalSetTabIndex(s){this.__isUserSettingTabIndex=!1,this.tabIndex=s,this.__isUserSettingTabIndex=!0}requestUpdate(s,r,n){super.requestUpdate(s,r,n),s==="disabled"&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),s==="tabIndex"&&(this.__isUserSettingTabIndex&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex),this.tabIndex!==-1&&this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(-1))}firstUpdated(s){super.firstUpdated(s),this.disabled&&this.__internalSetTabIndex(-1)}},K(t,"enabledWarnings",((e=Me(t,t,"enabledWarnings"))==null?void 0:e.filter(s=>s!=="change-in-update"))||[]),t},Js=B(Zs);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xs=o=>o===null||typeof o!="object"&&typeof o!="function",Qs=(o,e)=>(o==null?void 0:o._$litType$)!==void 0,er=o=>o.strings===void 0;function ho(o,e){let t=!1;Array.from(o.childNodes).forEach(i=>{const s=i.hasAttribute&&i.hasAttribute("slot");if(i.nodeType===Node.COMMENT_NODE&&!t&&(t=i.textContent.includes("_start_slot_")),t){i.textContent.includes("_end_slot_")&&(t=!1);return}s||e.appendChild(i)})}function tr(o){return o instanceof Node?"node":Qs(o)?"template-result":!Array.isArray(o)&&typeof o=="object"&&"template"in o?"slot-rerender-object":null}const ir=o=>class extends o{get slots(){return{}}constructor(){super(),this.__renderMetaPerSlot=new Map,this.__slotsThatNeedRerender=new Set,this.__slotsProvidedByUserOnFirstConnected=new Set,this.__privateSlots=new Set}connectedCallback(){super.connectedCallback(),this._connectSlotMixin()}__rerenderSlot(t){var s;const i=this.slots[t]();this.__renderTemplateInScopedContext({renderAsDirectHostChild:i.renderAsDirectHostChild,template:i.template,slotName:t}),(s=i.afterRender)==null||s.call(i)}update(t){super.update(t);for(const i of this.__slotsThatNeedRerender)this.__rerenderSlot(i)}__renderTemplateInScopedContext({template:t,slotName:i,renderAsDirectHostChild:s}){if(!this.__renderMetaPerSlot.has(i)){const p=!!ShadowRoot.prototype.createElement;!!this.shadowRoot||console.error("[SlotMixin] No shadowRoot was found");const v=(p?this.shadowRoot:document).createElement("div"),k=document.createComment(`_start_slot_${i}_`),O=document.createComment(`_end_slot_${i}_`);v.appendChild(k),v.appendChild(O);const{creationScope:I,host:R}=this.renderOptions;if(oi(t,v,{renderBefore:O,creationScope:I,host:R}),s){const A=Array.from(v.childNodes);this.__appendNodes({nodes:A,renderParent:this,slotName:i})}else v.slot=i,this.appendChild(v);this.__renderMetaPerSlot.set(i,{renderTargetThatRespectsShadowRootScoping:v,renderBefore:O});return}const{renderBefore:n,renderTargetThatRespectsShadowRootScoping:a}=this.__renderMetaPerSlot.get(i),c=s?this:a,{creationScope:h,host:_}=this.renderOptions;oi(t,c,{creationScope:h,host:_,renderBefore:n}),s&&n.previousElementSibling&&!n.previousElementSibling.slot&&(n.previousElementSibling.slot=i)}__appendNodes({nodes:t,renderParent:i=this,slotName:s}){for(const r of t)r instanceof Element&&s&&s!==""&&r.setAttribute("slot",s),i.appendChild(r)}__initSlots(t){for(const i of t){if(this.__slotsProvidedByUserOnFirstConnected.has(i))continue;const s=this.slots[i]();if(s===void 0)continue;switch(this.__isConnectedSlotMixin||this.__privateSlots.add(i),tr(s)){case"template-result":this.__renderTemplateInScopedContext({template:s,renderAsDirectHostChild:!0,slotName:i});break;case"node":this.__appendNodes({nodes:[s],renderParent:this,slotName:i});break;case"slot-rerender-object":this.__slotsThatNeedRerender.add(i),s.firstRenderOnConnected&&this.__rerenderSlot(i);break;default:throw new Error(`Slot "${i}" configured inside "get slots()" (in prototype) of ${this.constructor.name} may return these types: TemplateResult | Node | {template:TemplateResult, afterRender?:function} | undefined.
              You provided: ${s}`)}}}_connectSlotMixin(){if(this.__isConnectedSlotMixin)return;const t=Object.keys(this.slots);for(const i of t)(i===""?Array.from(this.children).find(r=>!r.hasAttribute("slot")):Array.from(this.children).find(r=>r.slot===i))&&this.__slotsProvidedByUserOnFirstConnected.add(i);this.__initSlots(t),this.__isConnectedSlotMixin=!0}_isPrivateSlot(t){return this.__privateSlots.has(t)}},ke=B(ir);function Gt(o="google-chrome"){var c,h;const e=globalThis.navigator,t=!!e.userAgentData&&e.userAgentData.brands.some(_=>_.brand==="Chromium");if(o==="chromium")return t;const i=globalThis.navigator,s=i==null?void 0:i.vendor,r=typeof globalThis.opr<"u",n=((c=globalThis.userAgent)==null?void 0:c.indexOf("Edge"))>-1,a=(h=globalThis.userAgent)==null?void 0:h.match("CriOS");if(o==="ios")return a;if(o==="google-chrome")return t!==null&&typeof t<"u"&&s==="Google Inc."&&r===!1&&n===!1}var wo,ko,Co,Eo,No,So,Oo,Ao,To,Lo;const pt={isChrome:Gt(),isIOSChrome:Gt("ios"),isChromium:Gt("chromium"),isFirefox:((wo=globalThis.navigator)==null?void 0:wo.userAgent.toLowerCase().indexOf("firefox"))>-1,isMac:((Co=(ko=globalThis.navigator)==null?void 0:ko.appVersion)==null?void 0:Co.indexOf("Mac"))!==-1,isIOS:/iPhone|iPad|iPod/i.test((Eo=globalThis.navigator)==null?void 0:Eo.userAgent),isMacSafari:((No=globalThis.navigator)==null?void 0:No.vendor)&&((So=globalThis.navigator)==null?void 0:So.vendor.indexOf("Apple"))>-1&&((Oo=globalThis.navigator)==null?void 0:Oo.userAgent)&&((Ao=globalThis.navigator)==null?void 0:Ao.userAgent.indexOf("CriOS"))===-1&&((To=globalThis.navigator)==null?void 0:To.userAgent.indexOf("FxiOS"))===-1&&((Lo=globalThis.navigator)==null?void 0:Lo.appVersion.indexOf("Mac"))!==-1};function Do(o=""){return`${o.length>0?`${o}-`:""}${Math.random().toString(36).substr(2,10)}`}function Po(o,e){return e={exports:{}},o(e,e.exports),e.exports}var Ee="long",he="short",Kt="narrow",V="numeric",ue="2-digit",pe={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:V,day:V,year:ue},medium:{month:he,day:V,year:V},long:{month:Ee,day:V,year:V},full:{month:Ee,day:V,year:V,weekday:Ee},default:{month:he,day:V,year:V}},time:{short:{hour:V,minute:V},medium:{hour:V,minute:V,second:V},long:{hour:V,minute:V,second:V,timeZoneName:he},full:{hour:V,minute:V,second:V,timeZoneName:he},default:{hour:V,minute:V,second:V}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(o){if(o){var e={},t=o.match(/\b[A-Z]{3}\b/i),i=o.replace(/[^¤]/g,"").length;if(!i&&t&&(i=1),i?(e.style="currency",e.currencyDisplay=i===1?"symbol":i===2?"code":"name",e.currency=t?t[0].toUpperCase():"USD"):o.indexOf("%")>=0&&(e.style="percent"),!/[@#0]/.test(o))return e.style?e:void 0;if(e.useGrouping=o.indexOf(",")>=0,/E\+?[@#0]+/i.test(o)||o.indexOf("@")>=0){var s=o.replace(/E\+?[@#0]+|[^@#0]/gi,"");e.minimumSignificantDigits=Math.min(Math.max(s.replace(/[^@0]/g,"").length,1),21),e.maximumSignificantDigits=Math.min(Math.max(s.length,1),21)}else{for(var r=o.replace(/[^#0.]/g,"").split("."),n=r[0],a=n.length-1;n[a]==="0";)--a;e.minimumIntegerDigits=Math.min(Math.max(n.length-1-a,1),21);var c=r[1]||"";for(a=0;c[a]==="0";)++a;for(e.minimumFractionDigits=Math.min(Math.max(a,0),20);c[a]==="#";)++a;e.maximumFractionDigits=Math.min(Math.max(a,0),20)}return e}},parseDatePattern:function(o){if(o){for(var e={},t=0;t<o.length;){for(var i=o[t],s=1;o[++t]===i;)++s;switch(i){case"G":e.era=s===5?Kt:s===4?Ee:he;break;case"y":case"Y":e.year=s===2?ue:V;break;case"M":case"L":s=Math.min(Math.max(s-1,0),4),e.month=[V,ue,he,Ee,Kt][s];break;case"E":case"e":case"c":e.weekday=s===5?Kt:s===4?Ee:he;break;case"d":case"D":e.day=s===2?ue:V;break;case"h":case"K":e.hour12=!0,e.hour=s===2?ue:V;break;case"H":case"k":e.hour12=!1,e.hour=s===2?ue:V;break;case"m":e.minute=s===2?ue:V;break;case"s":case"S":e.second=s===2?ue:V;break;case"z":case"Z":case"v":case"V":e.timeZoneName=s===1?he:Ee;break}}return Object.keys(e).length?e:void 0}}},or=function(e,t){if(typeof e=="string"&&t[e])return e;for(var i=[].concat(e||[]),s=0,r=i.length;s<r;++s)for(var n=i[s].split("-");n.length;){var a=n.join("-");if(t[a])return a;n.pop()}},$e="zero",S="one",q="two",M="few",U="many",x="other",d=[function(o){var e=+o;return e===1?S:x},function(o){var e=+o;return 0<=e&&e<=1?S:x},function(o){var e=Math.floor(Math.abs(+o)),t=+o;return e===0||t===1?S:x},function(o){var e=+o;return e===0?$e:e===1?S:e===2?q:3<=e%100&&e%100<=10?M:11<=e%100&&e%100<=99?U:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return e===1&&t===0?S:x},function(o){var e=+o;return e%10===1&&e%100!==11?S:2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?M:e%10===0||5<=e%10&&e%10<=9||11<=e%100&&e%100<=14?U:x},function(o){var e=+o;return e%10===1&&e%100!==11&&e%100!==71&&e%100!==91?S:e%10===2&&e%100!==12&&e%100!==72&&e%100!==92?q:(3<=e%10&&e%10<=4||e%10===9)&&(e%100<10||19<e%100)&&(e%100<70||79<e%100)&&(e%100<90||99<e%100)?M:e!==0&&e%1e6===0?U:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+(o+".").split(".")[1];return t===0&&e%10===1&&e%100!==11||i%10===1&&i%100!==11?S:t===0&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)||2<=i%10&&i%10<=4&&(i%100<12||14<i%100)?M:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return e===1&&t===0?S:2<=e&&e<=4&&t===0?M:t!==0?U:x},function(o){var e=+o;return e===0?$e:e===1?S:e===2?q:e===3?M:e===6?U:x},function(o){var e=Math.floor(Math.abs(+o)),t=+(""+o).replace(/^[^.]*.?|0+$/g,""),i=+o;return i===1||t!==0&&(e===0||e===1)?S:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+(o+".").split(".")[1];return t===0&&e%100===1||i%100===1?S:t===0&&e%100===2||i%100===2?q:t===0&&3<=e%100&&e%100<=4||3<=i%100&&i%100<=4?M:x},function(o){var e=Math.floor(Math.abs(+o));return e===0||e===1?S:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+(o+".").split(".")[1];return t===0&&(e===1||e===2||e===3)||t===0&&e%10!==4&&e%10!==6&&e%10!==9||t!==0&&i%10!==4&&i%10!==6&&i%10!==9?S:x},function(o){var e=+o;return e===1?S:e===2?q:3<=e&&e<=6?M:7<=e&&e<=10?U:x},function(o){var e=+o;return e===1||e===11?S:e===2||e===12?q:3<=e&&e<=10||13<=e&&e<=19?M:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return t===0&&e%10===1?S:t===0&&e%10===2?q:t===0&&(e%100===0||e%100===20||e%100===40||e%100===60||e%100===80)?M:t!==0?U:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+o;return e===1&&t===0?S:e===2&&t===0?q:t===0&&(i<0||10<i)&&i%10===0?U:x},function(o){var e=Math.floor(Math.abs(+o)),t=+(""+o).replace(/^[^.]*.?|0+$/g,"");return t===0&&e%10===1&&e%100!==11||t!==0?S:x},function(o){var e=+o;return e===1?S:e===2?q:x},function(o){var e=+o;return e===0?$e:e===1?S:x},function(o){var e=Math.floor(Math.abs(+o)),t=+o;return t===0?$e:(e===0||e===1)&&t!==0?S:x},function(o){var e=+(o+".").split(".")[1],t=+o;return t%10===1&&(t%100<11||19<t%100)?S:2<=t%10&&t%10<=9&&(t%100<11||19<t%100)?M:e!==0?U:x},function(o){var e=(o+".").split(".")[1].length,t=+(o+".").split(".")[1],i=+o;return i%10===0||11<=i%100&&i%100<=19||e===2&&11<=t%100&&t%100<=19?$e:i%10===1&&i%100!==11||e===2&&t%10===1&&t%100!==11||e!==2&&t%10===1?S:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+(o+".").split(".")[1];return t===0&&e%10===1&&e%100!==11||i%10===1&&i%100!==11?S:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length,i=+o;return e===1&&t===0?S:t!==0||i===0||i!==1&&1<=i%100&&i%100<=19?M:x},function(o){var e=+o;return e===1?S:e===0||2<=e%100&&e%100<=10?M:11<=e%100&&e%100<=19?U:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return e===1&&t===0?S:t===0&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?M:t===0&&e!==1&&0<=e%10&&e%10<=1||t===0&&5<=e%10&&e%10<=9||t===0&&12<=e%100&&e%100<=14?U:x},function(o){var e=Math.floor(Math.abs(+o));return 0<=e&&e<=1?S:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return t===0&&e%10===1&&e%100!==11?S:t===0&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?M:t===0&&e%10===0||t===0&&5<=e%10&&e%10<=9||t===0&&11<=e%100&&e%100<=14?U:x},function(o){var e=Math.floor(Math.abs(+o)),t=+o;return e===0||t===1?S:2<=t&&t<=10?M:x},function(o){var e=Math.floor(Math.abs(+o)),t=+(o+".").split(".")[1],i=+o;return i===0||i===1||e===0&&t===1?S:x},function(o){var e=Math.floor(Math.abs(+o)),t=(o+".").split(".")[1].length;return t===0&&e%100===1?S:t===0&&e%100===2?q:t===0&&3<=e%100&&e%100<=4||t!==0?M:x},function(o){var e=+o;return 0<=e&&e<=1||11<=e&&e<=99?S:x},function(o){var e=+o;return e===1||e===5||e===7||e===8||e===9||e===10?S:e===2||e===3?q:e===4?M:e===6?U:x},function(o){var e=Math.floor(Math.abs(+o));return e%10===1||e%10===2||e%10===5||e%10===7||e%10===8||e%100===20||e%100===50||e%100===70||e%100===80?S:e%10===3||e%10===4||e%1e3===100||e%1e3===200||e%1e3===300||e%1e3===400||e%1e3===500||e%1e3===600||e%1e3===700||e%1e3===800||e%1e3===900?M:e===0||e%10===6||e%100===40||e%100===60||e%100===90?U:x},function(o){var e=+o;return(e%10===2||e%10===3)&&e%100!==12&&e%100!==13?M:x},function(o){var e=+o;return e===1||e===3?S:e===2?q:e===4?M:x},function(o){var e=+o;return e===0||e===7||e===8||e===9?$e:e===1?S:e===2?q:e===3||e===4?M:e===5||e===6?U:x},function(o){var e=+o;return e%10===1&&e%100!==11?S:e%10===2&&e%100!==12?q:e%10===3&&e%100!==13?M:x},function(o){var e=+o;return e===1||e===11?S:e===2||e===12?q:e===3||e===13?M:x},function(o){var e=+o;return e===1?S:e===2||e===3?q:e===4?M:e===6?U:x},function(o){var e=+o;return e===1||e===5?S:x},function(o){var e=+o;return e===11||e===8||e===80||e===800?U:x},function(o){var e=Math.floor(Math.abs(+o));return e===1?S:e===0||2<=e%100&&e%100<=20||e%100===40||e%100===60||e%100===80?U:x},function(o){var e=+o;return e%10===6||e%10===9||e%10===0&&e!==0?U:x},function(o){var e=Math.floor(Math.abs(+o));return e%10===1&&e%100!==11?S:e%10===2&&e%100!==12?q:(e%10===7||e%10===8)&&e%100!==17&&e%100!==18?U:x},function(o){var e=+o;return e===1?S:e===2||e===3?q:e===4?M:x},function(o){var e=+o;return 1<=e&&e<=4?S:x},function(o){var e=+o;return e===1||e===5||7<=e&&e<=9?S:e===2||e===3?q:e===4?M:e===6?U:x},function(o){var e=+o;return e===1?S:e%10===4&&e%100!==14?U:x},function(o){var e=+o;return(e%10===1||e%10===2)&&e%100!==11&&e%100!==12?S:x},function(o){var e=+o;return e%10===6||e%10===9||e===10?M:x},function(o){var e=+o;return e%10===3&&e%100!==13?M:x}],ri={af:{cardinal:d[0]},ak:{cardinal:d[1]},am:{cardinal:d[2]},ar:{cardinal:d[3]},ars:{cardinal:d[3]},as:{cardinal:d[2],ordinal:d[34]},asa:{cardinal:d[0]},ast:{cardinal:d[4]},az:{cardinal:d[0],ordinal:d[35]},be:{cardinal:d[5],ordinal:d[36]},bem:{cardinal:d[0]},bez:{cardinal:d[0]},bg:{cardinal:d[0]},bh:{cardinal:d[1]},bn:{cardinal:d[2],ordinal:d[34]},br:{cardinal:d[6]},brx:{cardinal:d[0]},bs:{cardinal:d[7]},ca:{cardinal:d[4],ordinal:d[37]},ce:{cardinal:d[0]},cgg:{cardinal:d[0]},chr:{cardinal:d[0]},ckb:{cardinal:d[0]},cs:{cardinal:d[8]},cy:{cardinal:d[9],ordinal:d[38]},da:{cardinal:d[10]},de:{cardinal:d[4]},dsb:{cardinal:d[11]},dv:{cardinal:d[0]},ee:{cardinal:d[0]},el:{cardinal:d[0]},en:{cardinal:d[4],ordinal:d[39]},eo:{cardinal:d[0]},es:{cardinal:d[0]},et:{cardinal:d[4]},eu:{cardinal:d[0]},fa:{cardinal:d[2]},ff:{cardinal:d[12]},fi:{cardinal:d[4]},fil:{cardinal:d[13],ordinal:d[0]},fo:{cardinal:d[0]},fr:{cardinal:d[12],ordinal:d[0]},fur:{cardinal:d[0]},fy:{cardinal:d[4]},ga:{cardinal:d[14],ordinal:d[0]},gd:{cardinal:d[15],ordinal:d[40]},gl:{cardinal:d[4]},gsw:{cardinal:d[0]},gu:{cardinal:d[2],ordinal:d[41]},guw:{cardinal:d[1]},gv:{cardinal:d[16]},ha:{cardinal:d[0]},haw:{cardinal:d[0]},he:{cardinal:d[17]},hi:{cardinal:d[2],ordinal:d[41]},hr:{cardinal:d[7]},hsb:{cardinal:d[11]},hu:{cardinal:d[0],ordinal:d[42]},hy:{cardinal:d[12],ordinal:d[0]},ia:{cardinal:d[4]},io:{cardinal:d[4]},is:{cardinal:d[18]},it:{cardinal:d[4],ordinal:d[43]},iu:{cardinal:d[19]},iw:{cardinal:d[17]},jgo:{cardinal:d[0]},ji:{cardinal:d[4]},jmc:{cardinal:d[0]},ka:{cardinal:d[0],ordinal:d[44]},kab:{cardinal:d[12]},kaj:{cardinal:d[0]},kcg:{cardinal:d[0]},kk:{cardinal:d[0],ordinal:d[45]},kkj:{cardinal:d[0]},kl:{cardinal:d[0]},kn:{cardinal:d[2]},ks:{cardinal:d[0]},ksb:{cardinal:d[0]},ksh:{cardinal:d[20]},ku:{cardinal:d[0]},kw:{cardinal:d[19]},ky:{cardinal:d[0]},lag:{cardinal:d[21]},lb:{cardinal:d[0]},lg:{cardinal:d[0]},ln:{cardinal:d[1]},lt:{cardinal:d[22]},lv:{cardinal:d[23]},mas:{cardinal:d[0]},mg:{cardinal:d[1]},mgo:{cardinal:d[0]},mk:{cardinal:d[24],ordinal:d[46]},ml:{cardinal:d[0]},mn:{cardinal:d[0]},mo:{cardinal:d[25],ordinal:d[0]},mr:{cardinal:d[2],ordinal:d[47]},mt:{cardinal:d[26]},nah:{cardinal:d[0]},naq:{cardinal:d[19]},nb:{cardinal:d[0]},nd:{cardinal:d[0]},ne:{cardinal:d[0],ordinal:d[48]},nl:{cardinal:d[4]},nn:{cardinal:d[0]},nnh:{cardinal:d[0]},no:{cardinal:d[0]},nr:{cardinal:d[0]},nso:{cardinal:d[1]},ny:{cardinal:d[0]},nyn:{cardinal:d[0]},om:{cardinal:d[0]},or:{cardinal:d[0],ordinal:d[49]},os:{cardinal:d[0]},pa:{cardinal:d[1]},pap:{cardinal:d[0]},pl:{cardinal:d[27]},prg:{cardinal:d[23]},ps:{cardinal:d[0]},pt:{cardinal:d[28]},"pt-PT":{cardinal:d[4]},rm:{cardinal:d[0]},ro:{cardinal:d[25],ordinal:d[0]},rof:{cardinal:d[0]},ru:{cardinal:d[29]},rwk:{cardinal:d[0]},saq:{cardinal:d[0]},sc:{cardinal:d[4],ordinal:d[43]},scn:{cardinal:d[4],ordinal:d[43]},sd:{cardinal:d[0]},sdh:{cardinal:d[0]},se:{cardinal:d[19]},seh:{cardinal:d[0]},sh:{cardinal:d[7]},shi:{cardinal:d[30]},si:{cardinal:d[31]},sk:{cardinal:d[8]},sl:{cardinal:d[32]},sma:{cardinal:d[19]},smi:{cardinal:d[19]},smj:{cardinal:d[19]},smn:{cardinal:d[19]},sms:{cardinal:d[19]},sn:{cardinal:d[0]},so:{cardinal:d[0]},sq:{cardinal:d[0],ordinal:d[50]},sr:{cardinal:d[7]},ss:{cardinal:d[0]},ssy:{cardinal:d[0]},st:{cardinal:d[0]},sv:{cardinal:d[4],ordinal:d[51]},sw:{cardinal:d[4]},syr:{cardinal:d[0]},ta:{cardinal:d[0]},te:{cardinal:d[0]},teo:{cardinal:d[0]},ti:{cardinal:d[1]},tig:{cardinal:d[0]},tk:{cardinal:d[0],ordinal:d[52]},tl:{cardinal:d[13],ordinal:d[0]},tn:{cardinal:d[0]},tr:{cardinal:d[0]},ts:{cardinal:d[0]},tzm:{cardinal:d[33]},ug:{cardinal:d[0]},uk:{cardinal:d[29],ordinal:d[53]},ur:{cardinal:d[4]},uz:{cardinal:d[0]},ve:{cardinal:d[0]},vo:{cardinal:d[0]},vun:{cardinal:d[0]},wa:{cardinal:d[1]},wae:{cardinal:d[0]},xh:{cardinal:d[0]},xog:{cardinal:d[0]},yi:{cardinal:d[4]},zu:{cardinal:d[2]},lo:{ordinal:d[0]},ms:{ordinal:d[0]},vi:{ordinal:d[0]}},Mt=Po(function(o,e){e=o.exports=function(f,g,v){return t(f,null,g||"en",v||{},!0)},e.toParts=function(f,g,v){return t(f,null,g||"en",v||{},!1)};function t(p,f,g,v,k){var O=p.map(function(I){return i(I,f,g,v,k)});return k?O.length===1?O[0]:function(R){for(var A="",j=0;j<O.length;++j)A+=O[j](R);return A}:function(R){return O.reduce(function(A,j){return A.concat(j(R))},[])}}function i(p,f,g,v,k){if(typeof p=="string"){var O=p;return function(){return O}}var I=p[0],R=p[1];if(f&&p[0]==="#"){I=f[0];var A=f[2],j=(v.number||b.number)([I,"number"],g);return function(z){return j(s(I,z)-A,z)}}var G;R==="plural"||R==="selectordinal"?(G={},Object.keys(p[3]).forEach(function(Q){G[Q]=t(p[3][Q],p,g,v,k)}),p=[p[0],p[1],p[2],G]):p[2]&&typeof p[2]=="object"&&(G={},Object.keys(p[2]).forEach(function(Q){G[Q]=t(p[2][Q],p,g,v,k)}),p=[p[0],p[1],G]);var X=R&&(v[R]||b[R]);if(X){var se=X(p,g);return function(z){return se(s(I,z),z)}}return k?function(z){return String(s(I,z))}:function(z){return s(I,z)}}function s(p,f){if(f&&p in f)return f[p];for(var g=p.split("."),v=f,k=0,O=g.length;v&&k<O;++k)v=v[g[k]];return v}function r(p,f){var g=p[2],v=pe.number[g]||pe.parseNumberPattern(g)||pe.number.default;return new Intl.NumberFormat(f,v).format}function n(p,f){var g=p[2],v=pe.duration[g]||pe.duration.default,k=new Intl.NumberFormat(f,v.seconds).format,O=new Intl.NumberFormat(f,v.minutes).format,I=new Intl.NumberFormat(f,v.hours).format,R=/^fi$|^fi-|^da/.test(String(f))?".":":";return function(A,j){if(A=+A,!isFinite(A))return k(A);var G=~~(A/60/60),X=~~(A/60%60),se=(G?I(Math.abs(G))+R:"")+O(Math.abs(X))+R+k(Math.abs(A%60));return A<0?I(-1).replace(I(1),se):se}}function a(p,f){var g=p[1],v=p[2],k=pe[g][v]||pe.parseDatePattern(v)||pe[g].default;return new Intl.DateTimeFormat(f,k).format}function c(p,f){var g=p[1],v=g==="selectordinal"?"ordinal":"cardinal",k=p[2],O=p[3],I;if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(f).length>0)I=new Intl.PluralRules(f,{type:v});else{var R=or(f,ri),A=R&&ri[R][v]||h;I={select:A}}return function(j,G){var X=O["="+ +j]||O[I.select(j-k)]||O.other;return X(G)}}function h(){return"other"}function _(p,f){var g=p[2];return function(v,k){var O=g[v]||g.other;return O(k)}}var b={number:r,ordinal:r,spellout:r,duration:n,date:a,time:a,plural:c,selectordinal:c,select:_};e.types=b});Mt.toParts;Mt.types;var Bo=Po(function(o,e){var t="{",i="}",s=",",r="#",n="<",a=">",c="</",h="/>",_="'",b="offset:",p=["number","date","time","ordinal","duration","spellout"],f=["plural","select","selectordinal"];e=o.exports=function(E,N){return g({pattern:String(E),index:0,tagsType:N&&N.tagsType||null,tokens:N&&N.tokens||null},"")};function g(l,E){var N=l.pattern,F=N.length,L=[],C=l.index,W=v(l,E);for(W&&L.push(W),W&&l.tokens&&l.tokens.push(["text",N.slice(C,l.index)]);l.index<F;){if(N[l.index]===i){if(!E)throw z(l);break}if(E&&l.tagsType&&N.slice(l.index,l.index+c.length)===c)break;L.push(I(l)),C=l.index,W=v(l,E),W&&L.push(W),W&&l.tokens&&l.tokens.push(["text",N.slice(C,l.index)])}return L}function v(l,E){for(var N=l.pattern,F=N.length,L=E==="plural"||E==="selectordinal",C=!!l.tagsType,W=E==="{style}",te="";l.index<F;){var P=N[l.index];if(P===t||P===i||L&&P===r||C&&P===n||W&&k(P.charCodeAt(0)))break;if(P===_)if(P=N[++l.index],P===_)te+=P,++l.index;else if(P===t||P===i||L&&P===r||C&&P===n||W)for(te+=P;++l.index<F;)if(P=N[l.index],P===_&&N[l.index+1]===_)te+=_,++l.index;else if(P===_){++l.index;break}else te+=P;else te+=_;else te+=P,++l.index}return te}function k(l){return l>=9&&l<=13||l===32||l===133||l===160||l===6158||l>=8192&&l<=8205||l===8232||l===8233||l===8239||l===8287||l===8288||l===12288||l===65279}function O(l){for(var E=l.pattern,N=E.length,F=l.index;l.index<N&&k(E.charCodeAt(l.index));)++l.index;F<l.index&&l.tokens&&l.tokens.push(["space",l.pattern.slice(F,l.index)])}function I(l){var E=l.pattern;if(E[l.index]===r)return l.tokens&&l.tokens.push(["syntax",r]),++l.index,[r];var N=R(l);if(N)return N;if(E[l.index]!==t)throw z(l,t);l.tokens&&l.tokens.push(["syntax",t]),++l.index,O(l);var F=A(l);if(!F)throw z(l,"placeholder id");l.tokens&&l.tokens.push(["id",F]),O(l);var L=E[l.index];if(L===i)return l.tokens&&l.tokens.push(["syntax",i]),++l.index,[F];if(L!==s)throw z(l,s+" or "+i);l.tokens&&l.tokens.push(["syntax",s]),++l.index,O(l);var C=A(l);if(!C)throw z(l,"placeholder type");if(l.tokens&&l.tokens.push(["type",C]),O(l),L=E[l.index],L===i){if(l.tokens&&l.tokens.push(["syntax",i]),C==="plural"||C==="selectordinal"||C==="select")throw z(l,C+" sub-messages");return++l.index,[F,C]}if(L!==s)throw z(l,s+" or "+i);l.tokens&&l.tokens.push(["syntax",s]),++l.index,O(l);var W;if(C==="plural"||C==="selectordinal"){var te=G(l);O(l),W=[F,C,te,se(l,C)]}else if(C==="select")W=[F,C,se(l,C)];else if(p.indexOf(C)>=0)W=[F,C,j(l)];else{var P=l.index,Zi=j(l);O(l),E[l.index]===t&&(l.index=P,Zi=se(l,C)),W=[F,C,Zi]}if(O(l),E[l.index]!==i)throw z(l,i);return l.tokens&&l.tokens.push(["syntax",i]),++l.index,W}function R(l){var E=l.tagsType;if(!(!E||l.pattern[l.index]!==n)){if(l.pattern.slice(l.index,l.index+c.length)===c)throw z(l,null,"closing tag without matching opening tag");l.tokens&&l.tokens.push(["syntax",n]),++l.index;var N=A(l,!0);if(!N)throw z(l,"placeholder id");if(l.tokens&&l.tokens.push(["id",N]),O(l),l.pattern.slice(l.index,l.index+h.length)===h)return l.tokens&&l.tokens.push(["syntax",h]),l.index+=h.length,[N,E];if(l.pattern[l.index]!==a)throw z(l,a);l.tokens&&l.tokens.push(["syntax",a]),++l.index;var F=g(l,E),L=l.index;if(l.pattern.slice(l.index,l.index+c.length)!==c)throw z(l,c+N+a);l.tokens&&l.tokens.push(["syntax",c]),l.index+=c.length;var C=A(l,!0);if(C&&l.tokens&&l.tokens.push(["id",C]),N!==C)throw l.index=L,z(l,c+N+a,c+C+a);if(O(l),l.pattern[l.index]!==a)throw z(l,a);return l.tokens&&l.tokens.push(["syntax",a]),++l.index,[N,E,{children:F}]}}function A(l,E){for(var N=l.pattern,F=N.length,L="";l.index<F;){var C=N[l.index];if(C===t||C===i||C===s||C===r||C===_||k(C.charCodeAt(0))||E&&(C===n||C===a||C==="/"))break;L+=C,++l.index}return L}function j(l){var E=l.index,N=v(l,"{style}");if(!N)throw z(l,"placeholder style name");return l.tokens&&l.tokens.push(["style",l.pattern.slice(E,l.index)]),N}function G(l){var E=l.pattern,N=E.length,F=0;if(E.slice(l.index,l.index+b.length)===b){l.tokens&&l.tokens.push(["offset","offset"],["syntax",":"]),l.index+=b.length,O(l);for(var L=l.index;l.index<N&&X(E.charCodeAt(l.index));)++l.index;if(L===l.index)throw z(l,"offset number");l.tokens&&l.tokens.push(["number",E.slice(L,l.index)]),F=+E.slice(L,l.index)}return F}function X(l){return l>=48&&l<=57}function se(l,E){for(var N=l.pattern,F=N.length,L={};l.index<F&&N[l.index]!==i;){var C=A(l);if(!C)throw z(l,"sub-message selector");l.tokens&&l.tokens.push(["selector",C]),O(l),L[C]=Q(l,E),O(l)}if(!L.other&&f.indexOf(E)>=0)throw z(l,null,null,'"other" sub-message must be specified in '+E);return L}function Q(l,E){if(l.pattern[l.index]!==t)throw z(l,t+" to start sub-message");l.tokens&&l.tokens.push(["syntax",t]),++l.index;var N=g(l,E);if(l.pattern[l.index]!==i)throw z(l,i+" to end sub-message");return l.tokens&&l.tokens.push(["syntax",i]),++l.index,N}function z(l,E,N,F){var L=l.pattern,C=L.slice(0,l.index).split(/\r?\n/),W=l.index,te=C.length,P=C.slice(-1)[0].length;return N=N||(l.index>=L.length?"end of message pattern":A(l)||L[l.index]),F||(F=vs(E,N)),F+=" in "+L.replace(/\r?\n/g,`
`),new Bt(F,E,N,W,te,P)}function vs(l,E){return l?"Expected "+l+" but found "+E:"Unexpected "+E+" found"}function Bt(l,E,N,F,L,C){Error.call(this,l),this.name="SyntaxError",this.message=l,this.expected=E,this.found=N,this.offset=F,this.line=L,this.column=C}Bt.prototype=Object.create(Error.prototype),e.SyntaxError=Bt});Bo.SyntaxError;var sr=new RegExp("^("+Object.keys(ri).join("|")+")\\b"),rt=new WeakMap;/*!
 * Intl.MessageFormat prollyfill
 * Copyright(c) 2015 Andy VanWagoner
 * MIT licensed
 **/function qe(o,e,t){if(!(this instanceof qe)||rt.has(this))throw new TypeError("calling MessageFormat constructor without new is invalid");var i=Bo(o);rt.set(this,{ast:i,format:Mt(i,e,t&&t.types),locale:qe.supportedLocalesOf(e)[0]||"en",locales:e,options:t})}var rr=qe;Object.defineProperties(qe.prototype,{format:{configurable:!0,get:function(){var e=rt.get(this);if(!e)throw new TypeError("MessageFormat.prototype.format called on value that's not an object initialized as a MessageFormat");return e.format}},formatToParts:{configurable:!0,writable:!0,value:function(e){var t=rt.get(this);if(!t)throw new TypeError("MessageFormat.prototype.formatToParts called on value that's not an object initialized as a MessageFormat");var i=t.toParts||(t.toParts=Mt.toParts(t.ast,t.locales,t.options&&t.options.types));return i(e)}},resolvedOptions:{configurable:!0,writable:!0,value:function(){var e=rt.get(this);if(!e)throw new TypeError("MessageFormat.prototype.resolvedOptions called on value that's not an object initialized as a MessageFormat");return{locale:e.locale}}}});typeof Symbol<"u"&&Object.defineProperty(qe.prototype,Symbol.toStringTag,{value:"Object"});Object.defineProperties(qe,{supportedLocalesOf:{configurable:!0,writable:!0,value:function(e){return[].concat(Intl.NumberFormat.supportedLocalesOf(e),Intl.DateTimeFormat.supportedLocalesOf(e),Intl.PluralRules?Intl.PluralRules.supportedLocalesOf(e):[],[].concat(e||[]).filter(function(t){return sr.test(t)})).filter(function(t,i,s){return s.indexOf(t)===i})}}});function nr(o){return!!(o&&o.default&&typeof o.default=="object"&&Object.keys(o).length===1)}var Fo;const fe=(Fo=globalThis.document)==null?void 0:Fo.documentElement;var ne,ve,Se,It,Uo;class ar extends EventTarget{constructor({allowOverridesForExistingNamespaces:t=!1,autoLoadOnLocaleChange:i=!1,showKeyAsFallback:s=!1,fallbackLocale:r=""}={}){super();ie(this,It);K(this,"formatNumberOptions",{returnIfNaN:"",postProcessors:new Map});K(this,"formatDateOptions",{postProcessors:new Map});ie(this,ne,!1);ie(this,ve,"");ie(this,Se,null);K(this,"__storage",{});K(this,"__namespacePatternsMap",new Map);K(this,"__namespaceLoadersCache",{});K(this,"__namespaceLoaderPromisesCache",{});this.__allowOverridesForExistingNamespaces=t,this._autoLoadOnLocaleChange=!!i,this._showKeyAsFallback=s,this._fallbackLocale=r;const n=fe.getAttribute("data-localize-lang");re(this,ne,!!n),H(this,ne)&&(this.locale=n,this._setupTranslationToolSupport()),fe.lang||(fe.lang=this.locale||"en-GB"),this._setupHtmlLangAttributeObserver()}get locale(){return H(this,ne)?H(this,ve)||"":fe.lang||""}set locale(t){if(le(this,It,Uo).call(this,t),!H(this,ne)){const r=fe.lang;this._setHtmlLangAttribute(t),this._onLocaleChanged(t,r);return}const i=H(this,ve);re(this,ve,t),H(this,Se)===null&&this._setHtmlLangAttribute(t),this._onLocaleChanged(t,i)}get loadingComplete(){return typeof this.__namespaceLoaderPromisesCache[this.locale]=="object"?Promise.all(Object.values(this.__namespaceLoaderPromisesCache[this.locale])):Promise.resolve()}addData(t,i,s){if(!this.__allowOverridesForExistingNamespaces&&this._isNamespaceInCache(t,i))throw new Error(`Namespace "${i}" has been already added for the locale "${t}".`);this.__storage[t]=this.__storage[t]||{},this.__allowOverridesForExistingNamespaces?this.__storage[t][i]={...this.__storage[t][i],...s}:this.__storage[t][i]=s}setupNamespaceLoader(t,i){this.__namespacePatternsMap.set(t,i)}loadNamespaces(t,{locale:i}={}){return Promise.all(t.map(s=>this.loadNamespace(s,{locale:i})))}loadNamespace(t,{locale:i=this.locale}={locale:this.locale}){const s=typeof t=="object",r=s?Object.keys(t)[0]:t;if(this._isNamespaceInCache(i,r))return Promise.resolve();const n=this._getCachedNamespaceLoaderPromise(i,r);return n||this._loadNamespaceData(i,t,s,r)}msg(t,i,s={}){const r=s.locale?s.locale:this.locale,n=this._getMessageForKeys(t,r);return n?new rr(n,r).format(i):""}teardown(){this._teardownHtmlLangAttributeObserver()}reset(){this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={}}setDatePostProcessorForLocale({locale:t,postProcessor:i}){var s;(s=this.formatDateOptions)==null||s.postProcessors.set(t,i)}setNumberPostProcessorForLocale({locale:t,postProcessor:i}){var s;(s=this.formatNumberOptions)==null||s.postProcessors.set(t,i)}_setupTranslationToolSupport(){re(this,Se,fe.lang||null)}_setHtmlLangAttribute(t){this._teardownHtmlLangAttributeObserver(),fe.lang=t,this._setupHtmlLangAttributeObserver()}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||(this._htmlLangAttributeObserver=new MutationObserver(t=>{t.forEach(i=>{H(this,ne)?fe.lang==="auto"?(re(this,Se,null),this._setHtmlLangAttribute(this.locale)):re(this,Se,document.documentElement.lang):this._onLocaleChanged(document.documentElement.lang,i.oldValue||"")})})),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver&&this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(t,i){return!!(this.__storage[t]&&this.__storage[t][i])}_getCachedNamespaceLoaderPromise(t,i){return this.__namespaceLoaderPromisesCache[t]?this.__namespaceLoaderPromisesCache[t][i]:null}_loadNamespaceData(t,i,s,r){const n=this._getNamespaceLoader(i,s,r),a=this._getNamespaceLoaderPromise(n,t,r);return this._cacheNamespaceLoaderPromise(t,r,a),a.then(c=>{if(this.__namespaceLoaderPromisesCache[t]&&this.__namespaceLoaderPromisesCache[t][r]===a){const h=nr(c)?c.default:c;this.addData(t,r,h)}})}_getNamespaceLoader(t,i,s){let r=this.__namespaceLoadersCache[s];if(r||(i?(r=t[s],this.__namespaceLoadersCache[s]=r):(r=this._lookupNamespaceLoader(s),this.__namespaceLoadersCache[s]=r)),!r)throw new Error(`Namespace "${s}" was not properly setup.`);return this.__namespaceLoadersCache[s]=r,r}_getNamespaceLoaderPromise(t,i,s,r=this._fallbackLocale){return t(i,s).catch(()=>{const n=this._getLangFromLocale(i);return t(n,s).catch(()=>{if(r)return this._getNamespaceLoaderPromise(t,r,s,"").catch(()=>{const a=this._getLangFromLocale(r);throw new Error(`Data for namespace "${s}" and current locale "${i}" or fallback locale "${r}" could not be loaded. Make sure you have data either for locale "${i}" (and/or generic language "${n}") or for fallback "${r}" (and/or "${a}").`)});throw new Error(`Data for namespace "${s}" and locale "${i}" could not be loaded. Make sure you have data for locale "${i}" (and/or generic language "${n}").`)})})}_cacheNamespaceLoaderPromise(t,i,s){this.__namespaceLoaderPromisesCache[t]||(this.__namespaceLoaderPromisesCache[t]={}),this.__namespaceLoaderPromisesCache[t][i]=s}_lookupNamespaceLoader(t){for(const[i,s]of this.__namespacePatternsMap){const r=typeof i=="string"&&i===t,n=typeof i=="object"&&i.constructor.name==="RegExp"&&i.test(t);if(r||n)return s}return null}_getLangFromLocale(t){return t.substring(0,2)}_onLocaleChanged(t,i){this.dispatchEvent(new CustomEvent("__localeChanging")),t!==i&&(this._autoLoadOnLocaleChange?(this._loadAllMissing(t,i),this.loadingComplete.then(()=>{this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:t,oldLocale:i}}))})):this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:t,oldLocale:i}})))}_loadAllMissing(t,i){const s=this.__storage[i]||{},r=this.__storage[t]||{};Object.keys(s).forEach(n=>{r[n]||this.loadNamespace(n,{locale:t})})}_getMessageForKeys(t,i){if(typeof t=="string")return this._getMessageForKey(t,i);const s=Array.from(t).reverse();let r,n;for(;s.length;)if(r=s.pop(),n=this._getMessageForKey(r,i),n)return n}_getMessageForKey(t,i){if(!t||t.indexOf(":")===-1)throw new Error(`Namespace is missing in the key "${t}". The format for keys is "namespace:name".`);const[s,r]=t.split(":"),n=this.__storage[i],a=n?n[s]:{},h=r.split(".").reduce((_,b)=>typeof _=="object"?_[b]:_,a);return String(h||(this._showKeyAsFallback?t:""))}get _supportExternalTranslationTools(){return H(this,ne)}set _supportExternalTranslationTools(t){re(this,ne,t)}get _langAttrSetByTranslationTool(){return H(this,ve)}set _langAttrSetByTranslationTool(t){re(this,ve,t)}}ne=new WeakMap,ve=new WeakMap,Se=new WeakMap,It=new WeakSet,Uo=function(t){if(!t.includes("-"))throw new Error(`
      Locale was set to ${t}.
      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.
      See https://github.com/ing-bank/lion/issues/187 for more information.
    `)};const Yt=Symbol.for("lion::SingletonManagerClassStorage"),Zt=globalThis||window;class lr{constructor(){this._map=Zt[Yt]?Zt[Yt]:Zt[Yt]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}}const Ho=o=>{let e=null;const t=()=>(e===null&&(e=o()),e);return new Proxy({},{get(s,r){const n=t();return r==="addEventListener"||r==="removeEventListener"?Reflect.get(n,r).bind(n):r==="__instance_for_testing"?n:Reflect.get(n,r,n)},set(s,r,n){return Reflect.set(t(),r,n)},getOwnPropertyDescriptor(s,r){return Reflect.getOwnPropertyDescriptor(t(),r)},getPrototypeOf(){return Reflect.getPrototypeOf(t())}})},Pe=new lr;function cr(){if(!Pe.has("@lion/ui::localize::0.x")){const o=new ar({autoLoadOnLocaleChange:!0,fallbackLocale:"en-GB"});Pe.set("@lion/ui::localize::0.x",o)}return Pe.get("@lion/ui::localize::0.x")}function ni(){return Ho(cr)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi={ATTRIBUTE:1,CHILD:2},Ii=o=>(...e)=>({_$litDirective$:o,values:e});let zi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=(o,e)=>{var i;const t=o._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),nt(s,e);return!0},Tt=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while((t==null?void 0:t.size)===0)},qo=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),ur(e)}};function dr(o){this._$AN!==void 0?(Tt(this),this._$AM=o,qo(this)):this._$AM=o}function hr(o,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)nt(i[r],!1),Tt(i[r]);else i!=null&&(nt(i,!1),Tt(i));else nt(this,o)}const ur=o=>{o.type==Vi.CHILD&&(o._$AP??(o._$AP=hr),o._$AQ??(o._$AQ=dr))};class pr extends zi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),qo(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(nt(this,e),Tt(this))}setValue(e){if(er(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fr{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let _r=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uo=o=>!Xs(o)&&typeof o.then=="function",po=1073741823;class mr extends pr{constructor(){super(...arguments),this._$Cwt=po,this._$Cbt=[],this._$CK=new fr(this),this._$CX=new _r}render(...e){return e.find(t=>!uo(t))??ae}update(e,t){const i=this._$Cbt;let s=i.length;this._$Cbt=t;const r=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const c=t[a];if(!uo(c))return this._$Cwt=a,c;a<s&&c===i[a]||(this._$Cwt=po,s=0,Promise.resolve(c).then(async h=>{for(;n.get();)await n.get();const _=r.deref();if(_!==void 0){const b=_._$Cbt.indexOf(c);b>-1&&b<_._$Cwt&&(_._$Cwt=b,_.setValue(h))}}))}return ae}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const vr=Ii(mr),br=o=>class extends o{static get localizeNamespaces(){return[]}static get waitForLocalizeNamespaces(){return!0}constructor(){super(),this._localizeManager=ni(),this.__boundLocalizeOnLocaleChanged=(...t)=>{const i=Array.from(t)[0];this.__localizeOnLocaleChanged(i)},this.__boundLocalizeOnLocaleChanging=()=>{this.__localizeOnLocaleChanging()},this.__localizeStartLoadingNamespaces(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>{this.__localizeMessageSync=!0})}async scheduleUpdate(){Object.getPrototypeOf(this).constructor.waitForLocalizeNamespaces&&await this.localizeNamespacesLoaded,super.scheduleUpdate()}connectedCallback(){super.connectedCallback(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>this.onLocaleReady()),this._localizeManager.addEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.addEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}disconnectedCallback(){super.disconnectedCallback(),this._localizeManager.removeEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.removeEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}msgLit(t,i,s){return this.__localizeMessageSync?this._localizeManager.msg(t,i,s):this.localizeNamespacesLoaded?vr(this.localizeNamespacesLoaded.then(()=>this._localizeManager.msg(t,i,s)),y):""}__getUniqueNamespaces(){const t=[],i=new Set;return Object.getPrototypeOf(this).constructor.localizeNamespaces.forEach(i.add.bind(i)),i.forEach(s=>{t.push(s)}),t}__localizeStartLoadingNamespaces(){this.localizeNamespacesLoaded=this._localizeManager.loadNamespaces(this.__getUniqueNamespaces())}__localizeOnLocaleChanging(){this.__localizeStartLoadingNamespaces()}__localizeOnLocaleChanged(t){this.onLocaleChanged(t.detail.newLocale,t.detail.oldLocale)}onLocaleReady(){this.onLocaleUpdated()}onLocaleChanged(t,i){this.onLocaleUpdated(),this.requestUpdate()}onLocaleUpdated(){}},jo=B(br),ai="3.0.0",fo=window.scopedElementsVersions||(window.scopedElementsVersions=[]);fo.includes(ai)||fo.push(ai);const gr=o=>{var e;return e=class extends o{static get scopedElementsVersion(){return ai}get registry(){return this.constructor.__registry}set registry(i){this.constructor.__registry=i}attachShadow(i){const{scopedElements:s}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=new CustomElementRegistry;for(const[n,a]of Object.entries(s??{}))this.registry.define(n,a)}return super.attachShadow({...i,customElements:this.registry,registry:this.registry})}},K(e,"scopedElements"),K(e,"__registry"),e},yr=B(gr),xr=o=>class extends yr(o){createRenderRoot(){var r;const{shadowRootOptions:t,elementStyles:i}=this.constructor,s=this.attachShadow(t);return this.renderOptions.creationScope=s,Oi(s,i),(r=this.renderOptions).renderBefore??(r.renderBefore=s.firstChild),s}},wr=B(xr);function Et(){var o,e;return!!((o=globalThis.ShadowRoot)!=null&&o.prototype.createElement&&((e=globalThis.ShadowRoot)!=null&&e.prototype.importNode))}const kr=o=>class extends wr(o){constructor(){super()}createScopedElement(t){return(Et()?this.shadowRoot:document).createElement(t)}defineScopedElement(t,i){const s=this.registry.get(t),r=s&&s!==i;return!Et()&&r&&console.error([`You are trying to re-register the "${t}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),s?this.registry.get(t):this.registry.define(t,i)}attachShadow(t){const{scopedElements:i}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=Et()?new CustomElementRegistry:customElements;for(const[r,n]of Object.entries(i??{}))this.defineScopedElement(r,n)}return Element.prototype.attachShadow.call(this,{...t,customElements:this.registry,registry:this.registry})}createRenderRoot(){const{shadowRootOptions:t,elementStyles:i}=this.constructor,s=this.attachShadow(t);return Et()&&(this.renderOptions.creationScope=s),s instanceof ShadowRoot&&(Oi(s,i),this.renderOptions.renderBefore=this.renderOptions.renderBefore||s.firstChild),s}},Mi=B(kr),Cr=[Node.DOCUMENT_POSITION_PRECEDING,Node.DOCUMENT_POSITION_CONTAINS,Node.DOCUMENT_POSITION_CONTAINS|Node.DOCUMENT_POSITION_PRECEDING];function Wo(o,{reverse:e}={}){const t=(s,r)=>{const n=s.compareDocumentPosition(r);return Cr.includes(n)?1:-1},i=o.filter(s=>s);return i.sort(t),e&&i.reverse(),i}class Te{constructor(e){this.type="unparseable",this.viewValue=e}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}}const Er=o=>class extends o{constructor(){super(),this.name="",this._parentFormGroup=void 0,this.allowCrossRootRegistration=!1}get name(){return this.__name||""}set name(e){const t=this.name;this.__name=e.toString(),this.requestUpdate("name",t)}static get properties(){return{name:{type:String,reflect:!0},allowCrossRootRegistration:{type:Boolean,attribute:"allow-cross-root-registration"}}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:this},bubbles:!0,composed:!!this.allowCrossRootRegistration}))}disconnectedCallback(){super.disconnectedCallback(),this.__unregisterFormElement()}__unregisterFormElement(){this._parentFormGroup&&this._parentFormGroup.removeFormElement(this)}},$i=B(Er),Nr=o=>{var e,t;return t=class extends $i(xt(ke(o))){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},label:String,labelSrOnly:{type:Boolean,attribute:"label-sr-only",reflect:!0},helpText:{type:String,attribute:"help-text"},modelValue:{attribute:!1},_ariaLabelledNodes:{attribute:!1},_ariaDescribedNodes:{attribute:!1},_repropagationRole:{attribute:!1},_isRepropagationEndpoint:{attribute:!1}}}get label(){var s;return this.__label??(((s=this._labelNode)==null?void 0:s.textContent)||"")}set label(s){const r=this.label;this.__label=s,this.requestUpdate("label",r)}get helpText(){var s;return this.__helpText??(((s=this._helpTextNode)==null?void 0:s.textContent)||"")}set helpText(s){const r=this.helpText;this.__helpText=s,this.requestUpdate("helpText",r)}get fieldName(){return this.__fieldName||this.label||this.name||""}set fieldName(s){this.__fieldName=s}get slots(){return{...super.slots,label:()=>{const s=document.createElement("label");return s.textContent=this.label,s},"help-text":()=>{const s=document.createElement("div");return s.textContent=this.helpText,s}}}get _inputNode(){return this.__getDirectSlotChild("input")}get _labelNode(){return this.__getDirectSlotChild("label")}get _helpTextNode(){return this.__getDirectSlotChild("help-text")}get _feedbackNode(){return this.__getDirectSlotChild("feedback")}constructor(){super(),this.readOnly=!1,this.labelSrOnly=!1,this._inputId=Do(this.localName),this._ariaLabelledNodes=[],this._ariaDescribedNodes=[],this._repropagationRole="child",this._isRepropagationEndpoint=!1,this.addEventListener("model-value-changed",this.__repropagateChildrenValues),this._onLabelClick=this._onLabelClick.bind(this)}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y(),this._triggerInitialModelValueChangedEvent(),this._labelNode&&this._labelNode.addEventListener("click",this._onLabelClick)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._onLabelClick)}updated(s){var r;super.updated(s),s.has("disabled")&&((r=this._inputNode)==null||r.setAttribute("aria-disabled",`${!!this.disabled}`)),s.has("_ariaLabelledNodes")&&this.__reflectAriaAttr("aria-labelledby",this._ariaLabelledNodes,this.__reorderAriaLabelledNodes),s.has("_ariaDescribedNodes")&&this.__reflectAriaAttr("aria-describedby",this._ariaDescribedNodes,this.__reorderAriaDescribedNodes),s.has("label")&&this.__label!==void 0&&this._labelNode&&(this._labelNode.textContent=this.label),s.has("helpText")&&this.__helpText!==void 0&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),s.has("name")&&this.dispatchEvent(new CustomEvent("form-element-name-changed",{detail:{oldName:s.get("name"),newName:this.name},bubbles:!0}))}_triggerInitialModelValueChangedEvent(){this._dispatchInitialModelValueChangedEvent()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add("form-control")}_enhanceLightDomA11y(){const{_inputNode:s,_labelNode:r,_helpTextNode:n,_feedbackNode:a}=this;s&&(s.id=s.id||this._inputId),r&&(r.setAttribute("for",this._inputId),this.addToAriaLabelledBy(r,{idPrefix:"label"})),n&&this.addToAriaDescribedBy(n,{idPrefix:"help-text"}),a&&(this.addEventListener("focusin",()=>{a.setAttribute("aria-live","polite")}),this.addEventListener("focusout",()=>{a.setAttribute("aria-live","assertive")}),this.addToAriaDescribedBy(a,{idPrefix:"feedback"})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(s=["prefix","suffix","before","after"]){s.forEach(r=>{const n=this.__getDirectSlotChild(r);n&&(n.hasAttribute("data-label")&&this.addToAriaLabelledBy(n,{idPrefix:r}),n.hasAttribute("data-description")&&this.addToAriaDescribedBy(n,{idPrefix:r}))})}__reflectAriaAttr(s,r,n){if(this._inputNode){if(n){const c=r.filter(f=>this.contains(f)),h=r.filter(f=>!this.contains(f)),_=c.map(f=>f.assignedSlot||f),b=[...Wo(_)],p=[];b.forEach(f=>{c.forEach(g=>{f.name===g.slot&&p.push(g)})}),r=[...p,...h]}const a=r.map(c=>c.id).join(" ");this._inputNode.setAttribute(s,a)}}render(){return u`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return u` ${this._labelTemplate()} ${this._helpTextTemplate()} `}_groupTwoTemplate(){return u` ${this._inputGroupTemplate()} ${this._feedbackTemplate()} `}_labelTemplate(){return u`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `}_helpTextTemplate(){return u`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `}_inputGroupTemplate(){return u`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return u`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(s=>s.slot==="prefix")?u`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:y}_inputGroupInputTemplate(){return u`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(s=>s.slot==="suffix")?u`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:y}_inputGroupAfterTemplate(){return u`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return u`
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_isEmpty(s=this.modelValue){let r=s;if(this.modelValue instanceof Te&&(r=this.modelValue.viewValue),typeof r=="object"&&r!==null&&!(r instanceof Date))return!Object.keys(r).length;const n=typeof r=="number"&&(r===0||Number.isNaN(r));return!r&&!n&&!(typeof r=="boolean"&&r===!1)}static get styles(){return[T`
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
        `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(s,{idPrefix:r="",reorder:n=!0}={}){s.id=s.id||`${r}-${this._inputId}`,this._ariaLabelledNodes.includes(s)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,s],this.__reorderAriaLabelledNodes=!!n)}removeFromAriaLabelledBy(s){this._ariaLabelledNodes.includes(s)&&(this._ariaLabelledNodes.splice(this._ariaLabelledNodes.indexOf(s),1),this._ariaLabelledNodes=[...this._ariaLabelledNodes],this.__reorderAriaLabelledNodes=!1)}addToAriaDescribedBy(s,{idPrefix:r="",reorder:n=!0}={}){s.id=s.id||`${r}-${this._inputId}`,this._ariaDescribedNodes.includes(s)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,s],this.__reorderAriaDescribedNodes=!!n)}removeFromAriaDescribedBy(s){this._ariaDescribedNodes.includes(s)&&(this._ariaDescribedNodes.splice(this._ariaDescribedNodes.indexOf(s),1),this._ariaDescribedNodes=[...this._ariaDescribedNodes],this.__reorderAriaLabelledNodes=!1)}__getDirectSlotChild(s){return Array.from(this.children).find(r=>r.slot===s)}_dispatchInitialModelValueChangedEvent(){this._repropagationRole!=="child"&&(this.__repropagateChildrenInitialized=!0,this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],initialize:!0,isTriggeredByUser:!1}})))}_onBeforeRepropagateChildrenValues(s){}__repropagateChildrenValues(s){var p;this._onBeforeRepropagateChildrenValues(s);const r=s.detail&&s.detail.element||s.target,n=this._isRepropagationEndpoint||this._repropagationRole==="choice-group";if(r===this)return;s.stopImmediatePropagation();const c=this._repropagationRole!=="child"&&!this.__repropagateChildrenInitialized,h=s.detail&&s.detail.initialize;if(c||h||!this._repropagationCondition(r))return;let _=[];n||(_=s.detail&&s.detail.formPath||[r]);const b=[..._,this];this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:b,isTriggeredByUser:!!((p=s.detail)!=null&&p.isTriggeredByUser)}}))}_repropagationCondition(s){return!!s}_onLabelClick(){}},K(t,"enabledWarnings",((e=Me(t,t,"enabledWarnings"))==null?void 0:e.filter(s=>s!=="change-in-update"))||[]),t},Ve=B(Nr);class Sr{constructor(){this.__running=!1,this.__queue=[]}add(e){this.__queue.push(e),this.__running||(this.complete=new Promise(t=>{this.__callComplete=t}),this.__run())}async __run(){this.__running=!0,await this.__queue[0](),this.__queue.shift(),this.__queue.length>0?this.__run():(this.__running=!1,this.__callComplete&&this.__callComplete())}}function Or(o){return o.charAt(0).toUpperCase()+o.slice(1)}const Ar=o=>{var e,t;return t=class extends o{constructor(){super(),this.__SyncUpdatableNamespace={}}firstUpdated(s){super.firstUpdated(s),this.__syncUpdatableInitialize()}connectedCallback(){super.connectedCallback(),this.__SyncUpdatableNamespace.connected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__SyncUpdatableNamespace.connected=!1}static __syncUpdatableHasChanged(s,r,n){const a=this.elementProperties;return a.get(s)&&a.get(s).hasChanged?a.get(s).hasChanged(r,n):r!==n}__syncUpdatableInitialize(){const s=this.__SyncUpdatableNamespace,r=this.constructor;s.initialized=!0,s.queue&&Array.from(s.queue).forEach(n=>{r.__syncUpdatableHasChanged(n,this[n],void 0)&&this.updateSync(n,void 0)})}requestUpdate(s,r,n){if(super.requestUpdate(s,r,n),s===void 0)return;this.__SyncUpdatableNamespace=this.__SyncUpdatableNamespace||{};const a=this.__SyncUpdatableNamespace,c=this.constructor;a.initialized?c.__syncUpdatableHasChanged(s,this[s],r)&&this.updateSync(s,r):(a.queue=a.queue||new Set,a.queue.add(s))}updateSync(s,r){}},K(t,"enabledWarnings",((e=Me(t,t,"enabledWarnings"))==null?void 0:e.filter(s=>s!=="change-in-update"))||[]),t},Tr=B(Ar),Lr=o=>{switch(o){case"bg-BG":return w(()=>import("./bg-BG.DvcqJcRT.js"),__vite__mapDeps([0,1]));case"bg":return w(()=>import("./bg.DjRhbvP8.js"),[]);case"cs-CZ":return w(()=>import("./cs-CZ.C4M3ss0M.js"),__vite__mapDeps([2,3]));case"cs":return w(()=>import("./cs.BpAIInFi.js"),[]);case"de-DE":return w(()=>import("./de-DE.B6cLQS-C.js"),__vite__mapDeps([4,5]));case"de":return w(()=>import("./de.tu_ZC0by.js"),[]);case"en-AU":return w(()=>import("./en-AU.BLLSR6ul.js"),__vite__mapDeps([6,7]));case"en-GB":return w(()=>import("./en-GB.BLLSR6ul.js"),__vite__mapDeps([8,7]));case"en-US":return w(()=>import("./en-US.BLLSR6ul.js"),__vite__mapDeps([9,7]));case"en-PH":case"en":return w(()=>import("./en.BRtJWocA.js"),[]);case"es-ES":return w(()=>import("./es-ES.C-k5kUnm.js"),__vite__mapDeps([10,11]));case"es":return w(()=>import("./es.CmCcTLNg.js"),[]);case"fr-FR":return w(()=>import("./fr-FR.DC-XO9HF.js"),__vite__mapDeps([12,13]));case"fr-BE":return w(()=>import("./fr-BE.DC-XO9HF.js"),__vite__mapDeps([14,13]));case"fr":return w(()=>import("./fr.z99AZYvu.js"),[]);case"hu-HU":return w(()=>import("./hu-HU.BeTGSB1R.js"),__vite__mapDeps([15,16]));case"hu":return w(()=>import("./hu.DlqOkKS-.js"),[]);case"it-IT":return w(()=>import("./it-IT.BfrsYHtj.js"),__vite__mapDeps([17,18]));case"it":return w(()=>import("./it.dhe0n6ro.js"),[]);case"nl-BE":return w(()=>import("./nl-BE.CtPSVrK-.js"),__vite__mapDeps([19,20]));case"nl-NL":return w(()=>import("./nl-NL.CtPSVrK-.js"),__vite__mapDeps([21,20]));case"nl":return w(()=>import("./nl.CsOjjg4q.js"),[]);case"pl-PL":return w(()=>import("./pl-PL.BO_uoCo3.js"),__vite__mapDeps([22,23]));case"pl":return w(()=>import("./pl.CYht5iOc.js"),[]);case"ro-RO":return w(()=>import("./ro-RO.BzszQasy.js"),__vite__mapDeps([24,25]));case"ro":return w(()=>import("./ro.DwBEW5po.js"),[]);case"ru-RU":return w(()=>import("./ru-RU.DYdB6zKs.js"),__vite__mapDeps([26,27]));case"ru":return w(()=>import("./ru.BWO2zRrD.js"),[]);case"sk-SK":return w(()=>import("./sk-SK.t6DAVN22.js"),__vite__mapDeps([28,29]));case"sk":return w(()=>import("./sk.BCmB7Wtj.js"),[]);case"tr-TR":return w(()=>import("./tr-TR.Cbm2kwTy.js"),__vite__mapDeps([30,31]));case"tr":return w(()=>import("./tr.C7VWmvp5.js"),[]);case"uk-UA":return w(()=>import("./uk-UA.DRKx0L1R.js"),__vite__mapDeps([32,33]));case"uk":return w(()=>import("./uk.L9q5i_B2.js"),[]);case"zh-CN":case"zh":return w(()=>import("./zh.BuGHQNaT.js"),[]);default:return w(()=>import("./en.BRtJWocA.js"),[])}},Fr=o=>`${o[0].toUpperCase()}${o.slice(1)}`,ct=class ct extends jo(D){static get properties(){return{feedbackData:{attribute:!1}}}static get styles(){return[T`
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
      `]}constructor(){super(),this.feedbackData=void 0}_messageTemplate({message:e}){return e}updated(e){super.updated(e),this.feedbackData&&this.feedbackData[0]?(this.setAttribute("type",this.feedbackData[0].type),this.currentType=this.feedbackData[0].type):this.currentType!=="success"&&this.removeAttribute("type")}render(){return u`
      ${this.feedbackData&&this.feedbackData.map(({message:e,type:t,validator:i})=>u`
          <span class="validation-feedback__type">
            ${e&&t?this._localizeManager.msg(`lion-form-core:validation${Fr(t)}`):y}
          </span>
          ${this._messageTemplate({message:e,type:t,validator:i})}
        `)}
    `}};K(ct,"localizeNamespaces",[{"lion-form-core":Lr},...Me(ct,ct,"localizeNamespaces")]);let li=ct;class Be extends EventTarget{constructor(e,t){super(),this.__param=e,this.__config=t||{},this.type=(t==null?void 0:t.type)||"error"}execute(e,t,i){if(!this.constructor.validatorName)throw new Error(`A validator needs to have a name! Please set it via "static get validatorName() { return 'IsCat'; }"`);return!0}set param(e){this.__param=e,this.dispatchEvent(new Event("param-changed"))}get param(){return this.__param}set config(e){this.__config=e,this.dispatchEvent(new Event("config-changed"))}get config(){return this.__config}async _getMessage(e){const t=this.constructor,i={name:t.validatorName,type:this.type,params:this.param,config:this.config,...e};if(this.config.getMessage){if(typeof this.config.getMessage=="function")return this.config.getMessage(i);throw new Error(`You must provide a value for getMessage of type 'function', you provided a value of type: ${typeof this.config.getMessage}`)}return t.getMessage(i)}static async getMessage(e){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(e){}onFormControlDisconnect(e){}abortExecution(){}}K(Be,"_$isValidator$",!0),K(Be,"validatorName",""),K(Be,"async",!1);function _o(o=[],e=[]){return o.filter(t=>!e.includes(t)).concat(e.filter(t=>!o.includes(t)))}function Vr(o){return o instanceof Te?o.viewValue:o}const Ir=o=>{var e,Go,i;return i=class extends Ve(Tr(xt(ke(Mi(o))))){constructor(){super();ie(this,e);this.hasFeedbackFor=[],this.showsFeedbackFor=[],this.shouldShowFeedbackFor=[],this.validationStates={},this.isPending=!1,this.validators=[],this.defaultValidators=[],this._visibleMessagesAmount=1,this.__syncValidationResult=[],this.__asyncValidationResult=[],this.__validationResult=[],this.__prevValidationResult=[],this.__prevShownValidationResult=[],this.__childModelValueChanged=!1,this._onValidatorUpdated=this._onValidatorUpdated.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":li}}static get properties(){return{validators:{attribute:!1},hasFeedbackFor:{attribute:!1},shouldShowFeedbackFor:{attribute:!1},showsFeedbackFor:{type:Array,attribute:"shows-feedback-for",reflect:!0,converter:{fromAttribute:r=>r.split(","),toAttribute:r=>r.join(",")}},validationStates:{attribute:!1},isPending:{type:Boolean,attribute:"is-pending",reflect:!0},defaultValidators:{attribute:!1},_visibleMessagesAmount:{attribute:!1},__childModelValueChanged:{attribute:!1}}}static get validationTypes(){return["error"]}get operationMode(){return"enter"}get slots(){return{...super.slots,feedback:()=>{const r=this.createScopedElement("lion-validation-feedback");return r.setAttribute("data-tag-name","lion-validation-feedback"),r}}}get _allValidators(){return[...this.validators,...this.defaultValidators]}connectedCallback(){super.connectedCallback(),ni().addEventListener("localeChanged",this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),ni().removeEventListener("localeChanged",this._updateFeedbackComponent)}firstUpdated(r){super.firstUpdated(r),this.__isValidateInitialized=!0,this.validate(),this._repropagationRole!=="child"&&this.addEventListener("model-value-changed",()=>{this.__childModelValueChanged=!0})}updateSync(r,n){if(super.updateSync(r,n),r==="validators"?(this.__setupValidators(),this.validate({clearCurrentResult:!0})):r==="modelValue"&&this.validate({clearCurrentResult:!0}),["touched","dirty","prefilled","focused","submitted","hasFeedbackFor","filled"].includes(r)&&this._updateShouldShowFeedbackFor(),r==="showsFeedbackFor"){this._inputNode&&this._inputNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`);const a=_o(this.showsFeedbackFor,n);a.length>0&&this.dispatchEvent(new Event("showsFeedbackForChanged",{bubbles:!0})),a.forEach(c=>{this.dispatchEvent(new Event(`showsFeedbackFor${Or(c)}Changed`,{bubbles:!0}))})}r==="shouldShowFeedbackFor"&&_o(this.shouldShowFeedbackFor,n).length>0&&this.dispatchEvent(new Event("shouldShowFeedbackForChanged",{bubbles:!0}))}async validate({clearCurrentResult:r=!1}={}){if(this.validateComplete=new Promise(n=>{this.__validateCompleteResolve=n}),this.disabled||this.readOnly){this.__clearValidationResults(),this.__finishValidationPass(),this._updateFeedbackComponent();return}this.__isValidateInitialized&&(this.__prevValidationResult=this.__validationResult,r&&this.__clearValidationResults(),await this.__executeValidators())}async __executeValidators(){var b,p;const r=Vr(this.modelValue),n=this.__isEmpty(r);if(this.__syncValidationResult=[],n){const f=!this._isFormOrFieldset,g=this._allValidators.find(v=>{var k;return((k=v.constructor)==null?void 0:k.validatorName)==="Required"});if(g&&(this.__syncValidationResult=[{validator:g,outcome:!0}]),f){this.__finishValidationPass({syncValidationResult:this.__syncValidationResult});return}}const a=[],c=[],h=[];for(const f of this._allValidators)f!=null&&f.executeOnResults?a.push(f):le(this,e,Go).call(this,f)||(f.constructor.async?h.push(f):c.push(f));const _=!!h.length;this.__syncValidationResult=[...this.__syncValidationResult,...this.__executeSyncValidators(c,r)],this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,metaValidators:a}),_?(this.isPending=!0,this.__asyncValidationResult=await this.__executeAsyncValidators(h,r),this.isPending=!1,this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,asyncValidationResult:this.__asyncValidationResult,metaValidators:a}),(b=this.__validateCompleteResolve)==null||b.call(this,!0)):(p=this.__validateCompleteResolve)==null||p.call(this,!0)}__executeSyncValidators(r,n){return r.map(a=>({validator:a,outcome:a.execute(n,a.param,{node:this})})).filter(a=>!!a.outcome)}async __executeAsyncValidators(r,n){const a=r.map(h=>h.execute(n,h.param,{node:this})),c=await Promise.all(a);return c.map((h,_)=>({validator:r[_],outcome:c[_]})).filter(h=>!!h.outcome)}__executeMetaValidators(r,n){return n.length?this._isEmpty(this.modelValue)?(this.__prevShownValidationResult=[],[]):n.map(a=>({validator:a,outcome:a.executeOnResults({regularValidationResult:r.map(c=>c.validator),prevValidationResult:this.__prevValidationResult.map(c=>c.validator),prevShownValidationResult:this.__prevShownValidationResult.map(c=>c.validator)})})).filter(a=>!!a.outcome):[]}__finishValidationPass({syncValidationResult:r=[],asyncValidationResult:n=[],metaValidators:a=[]}={}){const c=[...r,...n],h=this.__executeMetaValidators(c,a);this.__validationResult=[...h,...c];const b=this.constructor.validationTypes.reduce((p,f)=>({...p,[f]:{}}),{});for(const{validator:p,outcome:f}of this.__validationResult){b[p.type]||(b[p.type]={});const g=p.constructor;b[p.type][g.validatorName]=f}this.validationStates=b,this.hasFeedbackFor=[...new Set(this.__validationResult.map(({validator:p})=>p.type))],this.dispatchEvent(new Event("validate-performed",{bubbles:!0}))}__clearValidationResults(){this.__syncValidationResult=[],this.__asyncValidationResult=[]}_onValidatorUpdated(r){(r.type==="param-changed"||r.type==="config-changed")&&this.validate()}__setupValidators(){var n,a;const r=["param-changed","config-changed"];for(const c of this.__prevValidators||[]){for(const h of r)(n=c.removeEventListener)==null||n.call(c,h,this._onValidatorUpdated);c.onFormControlDisconnect(this)}for(const c of this._allValidators){if(c.constructor._$isValidator$===void 0){const f=`Validators array only accepts class instances of Validator. Type "${Array.isArray(c)?"array":typeof c}" found. This may be caused by having multiple installations of "@lion/ui/form-core.js".`;throw console.error(f,this),new Error(f)}const _=this.constructor,b=c.constructor;if(_.validationTypes.indexOf(c.type)===-1){const p=`This component does not support the validator type "${c.type}" used in "${b.validatorName}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(p,this),new Error(p)}for(const p of r)(a=c.addEventListener)==null||a.call(c,p,f=>{this._onValidatorUpdated(f,{validator:c})});c.onFormControlConnect(this)}this.__prevValidators=this._allValidators}__isEmpty(r){return typeof this._isEmpty=="function"?this._isEmpty(r):this.modelValue===null||typeof this.modelValue>"u"||this.modelValue===""}async __getFeedbackMessages(r){let n=await this.fieldName;return Promise.all(r.map(async({validator:a,outcome:c})=>{var _;return a.config.fieldName&&(n=await a.config.fieldName),{message:await a._getMessage({modelValue:this.modelValue,formControl:this,fieldName:n,outcome:c}),type:a.type,validator:a,visibilityDuration:((_=a.config)==null?void 0:_.visibilityDuration)||3e3}}))}_updateFeedbackComponent(){window.clearTimeout(this.removeMessage);const{_feedbackNode:r}=this;r&&(this.__feedbackQueue||(this.__feedbackQueue=new Sr),this.showsFeedbackFor.length>0?this.__feedbackQueue.add(async()=>{const n=this._prioritizeAndFilterFeedback({validationResult:this.__validationResult.map(c=>c.validator)});this.__prioritizedResult=n.map(c=>this.__validationResult.find(_=>c===_.validator)).filter(Boolean),this.__prioritizedResult.length>0&&(this.__prevShownValidationResult=this.__prioritizedResult);const a=await this.__getFeedbackMessages(this.__prioritizedResult);r.feedbackData=a||[],a!=null&&a[0]&&a[0].type==="success"&&a[0].visibilityDuration!==1/0&&(this.removeMessage=window.setTimeout(()=>{r.removeAttribute("type"),r.feedbackData=[]},a[0].visibilityDuration))}):this.__feedbackQueue.add(async()=>{r.feedbackData=[]}),this.feedbackComplete=this.__feedbackQueue.complete)}_showFeedbackConditionFor(r,n){return!0}get _feedbackConditionMeta(){return{modelValue:this.modelValue,el:this}}feedbackCondition(r,n=this._feedbackConditionMeta,a=this._showFeedbackConditionFor.bind(this)){return a(r,n)}_hasFeedbackVisibleFor(r){var n,a;return((n=this.hasFeedbackFor)==null?void 0:n.includes(r))&&((a=this.shouldShowFeedbackFor)==null?void 0:a.includes(r))}updated(r){if(super.updated(r),r.has("shouldShowFeedbackFor")||r.has("hasFeedbackFor")){const n=this.constructor;this.showsFeedbackFor=n.validationTypes.map(a=>this._hasFeedbackVisibleFor(a)?a:void 0).filter(Boolean),this._updateFeedbackComponent()}if(r.has("__childModelValueChanged")&&this.__childModelValueChanged&&(this.validate({clearCurrentResult:!0}),this.__childModelValueChanged=!1),r.has("validationStates")){const n=r.get("validationStates");n&&Object.entries(this.validationStates).forEach(([a,c])=>{n[a]&&JSON.stringify(c)!==JSON.stringify(n[a])&&this.dispatchEvent(new CustomEvent(`${a}StateChanged`,{detail:c}))})}}_updateShouldShowFeedbackFor(){const n=this.constructor.validationTypes.map(a=>this.feedbackCondition(a,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))?a:void 0).filter(Boolean);JSON.stringify(this.shouldShowFeedbackFor)!==JSON.stringify(n)&&(this.shouldShowFeedbackFor=n)}_prioritizeAndFilterFeedback({validationResult:r}){const a=this.constructor.validationTypes;return r.filter(h=>this.feedbackCondition(h.type,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))).sort((h,_)=>a.indexOf(h.type)-a.indexOf(_.type)).slice(0,this._visibleMessagesAmount)}},e=new WeakSet,Go=function(r){let n=r;for(;n;){if(n.constructor.validatorName==="Required")return!0;n=Object.getPrototypeOf(n)}return!1},i},wt=B(Ir),zr=o=>{var e,t,ci,di,r;return r=class extends wt(Ve(o)){constructor(){super();ie(this,t);ie(this,e,{didFormatterOutputSyncToView:!1,didFormatterRun:!1});this.formatOn="change",this.formatOptions={mode:"auto"},this.formattedValue=void 0,this.serializedValue=void 0,this._isPasting=!1,this._isHandlingUserInput=!1,this.__prevViewValue="",this.__onCompositionEvent=this.__onCompositionEvent.bind(this),this.addEventListener("user-input-changed",this._onUserInputChanged),this.addEventListener("paste",this.__onPaste),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)}}static get properties(){return{formattedValue:{attribute:!1},serializedValue:{attribute:!1},formatOptions:{attribute:!1}}}requestUpdate(c,h,_){super.requestUpdate(c,h,_),c==="modelValue"&&this.modelValue!==h&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:h}),c==="serializedValue"&&this.serializedValue!==h&&this._calculateValues({source:"serialized"}),c==="formattedValue"&&this.formattedValue!==h&&this._calculateValues({source:"formatted"})}get value(){var c;return((c=this._inputNode)==null?void 0:c.value)||this.__value||""}set value(c){this._inputNode?(this._inputNode.value=c,this.__value=void 0):this.__value=c}preprocessor(c,h){}parser(c,h){return c}formatter(c,h){return c}serializer(c){return c!==void 0?c:""}deserializer(c){return c===void 0?"":c}_calculateValues({source:c}={source:null}){this.__preventRecursiveTrigger||(this.__preventRecursiveTrigger=!0,c!=="model"&&(c==="serialized"?this.modelValue=this.deserializer(this.serializedValue):c==="formatted"&&(this.modelValue=this._callParser())),c!=="formatted"&&(this.formattedValue=this._callFormatter()),c!=="serialized"&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.__preventRecursiveTrigger=!1,this.__prevViewValue=this.value)}_callParser(c=this.formattedValue){if(c==="")return"";if(typeof c!="string")return;const h=this.parser(c,{...this.formatOptions,mode:le(this,t,ci).call(this),viewValueStates:le(this,t,di).call(this)});return h!==void 0?h:new Te(c)}_callFormatter(){var c;return H(this,e).didFormatterRun=!1,this._isHandlingUserInput&&((c=this.hasFeedbackFor)!=null&&c.includes("error"))&&this._inputNode?this.value:this.modelValue instanceof Te?this.modelValue.viewValue:(H(this,e).didFormatterRun=!0,this.formatter(this.modelValue,{...this.formatOptions,mode:le(this,t,ci).call(this),viewValueStates:le(this,t,di).call(this)}))}_onModelValueChanged(...c){this._calculateValues({source:"model"}),this._dispatchModelValueChangedEvent(...c)}_dispatchModelValueChangedEvent(...c){this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:!!this._isHandlingUserInput}}))}_syncValueUpwards(){this.__isHandlingComposition||this.__handlePreprocessor();const c=this.formattedValue;this.modelValue=this._callParser(this.value),c===this.formattedValue&&this.__prevViewValue!==this.value&&this._calculateValues()}__handlePreprocessor(){var _;let c=this.value.length;this._inputNode&&"selectionStart"in this._inputNode&&((_=this._inputNode)==null?void 0:_.type)!=="range"&&(c=this._inputNode.selectionStart);const h=this.preprocessor(this.value,{...this.formatOptions,currentCaretIndex:c,prevViewValue:this.__prevViewValue});if(h!==void 0){if(typeof h=="string")this.value=h;else if(typeof h=="object"){const{viewValue:b,caretIndex:p}=h;this.value=b,p&&this._inputNode&&"selectionStart"in this._inputNode&&(this._inputNode.selectionStart=p,this._inputNode.selectionEnd=p)}}}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=typeof this.formattedValue<"u"?this.formattedValue:"",H(this,e).didFormatterOutputSyncToView=!!this.formattedValue&&H(this,e).didFormatterRun)}_reflectBackOn(){return!this._isHandlingUserInput}_proxyInputEvent(){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}_onUserInputChanged(){this._isHandlingUserInput=!0,this._syncValueUpwards(),this._isHandlingUserInput=!1}__onCompositionEvent({type:c}){c==="compositionstart"?this.__isHandlingComposition=!0:c==="compositionend"&&(this.__isHandlingComposition=!1,this._syncValueUpwards())}__onPaste(){this._isPasting=!0,setTimeout(()=>{this._isPasting=!1})}connectedCallback(){super.connectedCallback(),typeof this.modelValue>"u"&&this._syncValueUpwards(),this.__prevViewValue=this.value,this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener("input",this._proxyInputEvent),this._inputNode.addEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.addEventListener("compositionend",this.__onCompositionEvent))}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&(this._inputNode.removeEventListener("input",this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.removeEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.removeEventListener("compositionend",this.__onCompositionEvent))}},e=new WeakMap,t=new WeakSet,ci=function(){return this._isPasting?"pasted":this._isHandlingUserInput&&this.__prevViewValue?"user-edited":"auto"},di=function(){const c=[];return H(this,e).didFormatterOutputSyncToView&&c.push("formatted"),c},r},Ri=B(zr),Mr=o=>class extends Ve(o){static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},filled:{type:Boolean,reflect:!0},prefilled:{attribute:!1},submitted:{attribute:!1}}}requestUpdate(t,i,s){super.requestUpdate(t,i,s),t==="touched"&&this.touched!==i&&this._onTouchedChanged(),t==="modelValue"&&(this.filled=!this._isEmpty()),t==="dirty"&&this.dirty!==i&&this._onDirtyChanged()}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this.filled=!1,this._leaveEvent="blur",this._valueChangedEvent="model-value-changed",this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=!this._isEmpty()}_iStateOnLeave(){this.touched=!0,this.prefilled=!this._isEmpty()}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.submitted=!1,this.dirty=!1,this.prefilled=!this._isEmpty()}_onTouchedChanged(){this.dispatchEvent(new Event("touched-changed",{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new Event("dirty-changed",{bubbles:!0,composed:!0}))}_showFeedbackConditionFor(t,i){return i.touched&&i.dirty||i.prefilled||i.submitted}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,submitted:this.submitted,touched:this.touched,dirty:this.dirty,filled:this.filled,prefilled:this.prefilled}}},Di=B(Mr);class Ko extends Ve(Di(Fi(Ri(wt(ke(D)))))){firstUpdated(e){super.firstUpdated(e),this._initialModelValue=this.modelValue}connectedCallback(){super.connectedCallback(),this._onChange=this._onChange.bind(this),this._inputNode.addEventListener("change",this._onChange),this.classList.add("form-field")}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._inputNode)==null||e.removeEventListener("change",this._onChange)}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.resetInteractionState()}clear(){this.modelValue=""}_onChange(e){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}class hi extends Array{_keys(){return Object.keys(this).filter(e=>Number.isNaN(Number(e)))}}const $r=o=>class extends $i(o){static get properties(){return{_isFormOrFieldset:{type:Boolean}}}constructor(){super(),this.formElements=new hi,this._isFormOrFieldset=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this._onRequestToChangeFormElementName=this._onRequestToChangeFormElementName.bind(this),this.addEventListener("form-element-register",this._onRequestToAddFormElement),this.addEventListener("form-element-name-changed",this._onRequestToChangeFormElementName),this.initComplete=new Promise((e,t)=>{this.__resolveInitComplete=e,this.__rejectInitComplete=t}),this.registrationComplete=new Promise((e,t)=>{this.__resolveRegistrationComplete=e,this.__rejectRegistrationComplete=t}),this.registrationComplete.done=!1,this.registrationComplete.then(()=>{this.registrationComplete.done=!0,this.__resolveInitComplete(void 0)},()=>{throw this.registrationComplete.done=!0,this.__rejectInitComplete(void 0),new Error("Registration could not finish. Please use await el.registrationComplete;")})}connectedCallback(){super.connectedCallback(),this._completeRegistration()}_completeRegistration(){Promise.resolve().then(()=>this.__resolveRegistrationComplete(void 0))}disconnectedCallback(){super.disconnectedCallback(),this.registrationComplete.done===!1&&Promise.resolve().then(()=>{Promise.resolve().then(()=>{this.__rejectRegistrationComplete()})})}isRegisteredFormElement(e){return this.formElements.some(t=>t===e)}addFormElement(e,t){if(e._parentFormGroup=this,t>=0?this.formElements.splice(t,0,e):this.formElements.push(e),this._isFormOrFieldset){const{name:i}=e;if(i===this.name)throw console.info("Error Node:",e),new TypeError(`You can not have the same name "${i}" as your parent`);if(i.substr(-2)==="[]")Array.isArray(this.formElements[i])||(this.formElements[i]=new hi),t>0?this.formElements[i].splice(t,0,e):this.formElements[i].push(e);else if(!this.formElements[i])this.formElements[i]=e;else throw console.info("Error Node:",e),new TypeError(`Name "${i}" is already registered - if you want an array add [] to the end`)}}removeFormElement(e){const t=this.formElements.indexOf(e);if(t>-1&&this.formElements.splice(t,1),this._isFormOrFieldset){const{name:i}=e;if(i.substr(-2)==="[]"&&this.formElements[i]){const s=this.formElements[i].indexOf(e);s>-1&&this.formElements[i].splice(s,1)}else this.formElements[i]&&delete this.formElements[i]}}_onRequestToAddFormElement(e){const t=e.detail.element;if(t===this||this.isRegisteredFormElement(t))return;e.stopPropagation();let i=-1;if(this.formElements&&Array.isArray(this.formElements)){for(const[s,r]of this.formElements.entries())if(!(r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)){i=s;break}}this.addFormElement(t,i)}_onRequestToChangeFormElementName(e){const t=this.formElements[e.detail.oldName];t&&(this.formElements[e.detail.newName]=t,delete this.formElements[e.detail.oldName])}_onRequestToRemoveFormElement(e){const t=e.detail.element;t!==this&&this.isRegisteredFormElement(t)&&(e.stopPropagation(),this.removeFormElement(t))}},Pi=B($r),Rr=o=>class extends o{constructor(){super(),this.registrationTarget=void 0,this.__redispatchEventForFormRegistrarPortalMixin=this.__redispatchEventForFormRegistrarPortalMixin.bind(this),this.addEventListener("form-element-register",this.__redispatchEventForFormRegistrarPortalMixin)}__redispatchEventForFormRegistrarPortalMixin(e){if(e.stopPropagation(),!this.registrationTarget)throw new Error("A FormRegistrarPortal element requires a .registrationTarget");this.registrationTarget.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:e.detail.element},bubbles:!0}))}},Dr=B(Rr),Pr=o=>class extends Ri(Fi(Ve(o))){static get properties(){return{autocomplete:{type:String,reflect:!0}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return super._inputNode}get selectionStart(){const t=this._inputNode;return t&&t.selectionStart?t.selectionStart:0}set selectionStart(t){const i=this._inputNode;i&&i.selectionStart&&(i.selectionStart=t)}get selectionEnd(){const t=this._inputNode;return t&&t.selectionEnd?t.selectionEnd:0}set selectionEnd(t){const i=this._inputNode;i&&i.selectionEnd&&(i.selectionEnd=t)}get value(){return this._inputNode&&this._inputNode.value||this.__value||""}set value(t){this._inputNode?(this._inputNode.value!==t&&this._setValueAndPreserveCaret(t),this.__value=void 0):this.__value=t}_setValueAndPreserveCaret(t){if(this.focused)try{if(!(this._inputNode instanceof HTMLSelectElement)){const i=this._inputNode.selectionStart;this._inputNode.value=t,this._inputNode.selectionStart=i,this._inputNode.selectionEnd=i}}catch{this._inputNode.value=t}else this._inputNode.value=t}_reflectBackFormattedValueToUser(){if(super._reflectBackFormattedValueToUser(),this._reflectBackOn()&&this.focused)try{this._inputNode.selectionStart=this._inputNode.value.length}catch{}}get _focusableNode(){return this._inputNode}},Yo=B(Pr);class kt extends Be{static get validatorName(){return"Required"}static get _compatibleRoles(){return["combobox","gridcell","input","listbox","radiogroup","select","spinbutton","textarea","textbox","tree"]}static get _compatibleTags(){return["input","select","textarea"]}onFormControlConnect({_inputNode:e}){if(e){const t=e.getAttribute("role")||"",i=e.tagName.toLowerCase(),s=this.constructor;(s._compatibleRoles.includes(t)||s._compatibleTags.includes(i))&&e.setAttribute("aria-required","true")}}onFormControlDisconnect({_inputNode:e}){e&&e.removeAttribute("aria-required")}}const Br=o=>class extends Pi(wt(Di(o))){static get properties(){return{multipleChoice:{type:Boolean,attribute:"multiple-choice"}}}get modelValue(){const t=this._getCheckedElements();return this.multipleChoice?t.map(i=>i.choiceValue):t[0]?t[0].choiceValue:""}set modelValue(t){const i=(s,r)=>typeof s.choiceValue=="object"?JSON.stringify(s.choiceValue)===JSON.stringify(t):s.choiceValue===r;this.__isInitialModelValue?this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this._setCheckedElements(t,i),this.requestUpdate("modelValue",this._oldModelValue)}):(this._setCheckedElements(t,i),this.requestUpdate("modelValue",this._oldModelValue)),this._oldModelValue=this.modelValue}get serializedValue(){const t=this._getCheckedElements();return this.multipleChoice?t.map(i=>i.serializedValue.value):t[0]?t[0].serializedValue.value:""}set serializedValue(t){const i=(s,r)=>s.serializedValue.value===r;this.__isInitialSerializedValue?this.registrationComplete.then(()=>{this.__isInitialSerializedValue=!1,this._setCheckedElements(t,i),this.requestUpdate("serializedValue")}):(this._setCheckedElements(t,i),this.requestUpdate("serializedValue"))}get formattedValue(){const t=this._getCheckedElements();return this.multipleChoice?t.map(i=>i.formattedValue):t[0]?t[0].formattedValue:""}set formattedValue(t){const i=(s,r)=>s.formattedValue===r;this.__isInitialFormattedValue?this.registrationComplete.then(()=>{this.__isInitialFormattedValue=!1,this._setCheckedElements(t,i)}):this._setCheckedElements(t,i)}get operationMode(){return this._repropagationRole==="choice-group"?"select":"enter"}constructor(){super(),this.multipleChoice=!1,this._repropagationRole="choice-group",this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this.__isInitialFormattedValue=!0}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__isInitialFormattedValue=!1})}_completeRegistration(){Promise.resolve().then(()=>super._completeRegistration())}updated(t){super.updated(t),t.has("name")&&this.name!==t.get("name")&&this.formElements.forEach(i=>{i.name=this.name})}addFormElement(t,i){this._throwWhenInvalidChildModelValue(t),t.name=this.name,super.addFormElement(t,i)}clear(){this.multipleChoice?this.modelValue=[]:this.modelValue=""}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}_getFromAllFormElementsFilter(t,i){return!0}_getFromAllFormElements(t,i){var n;const s=i||this._getFromAllFormElementsFilter;if(t==="modelValue"||t==="serializedValue"||t==="formattedValue")return this[t];const r=this.formElements.filter(a=>s(a,t));return t==="_initialModelValue"?this.multipleChoice?r.filter(a=>a[t].checked).map(a=>a[t].value):(n=r.find(a=>a[t].checked))==null?void 0:n.value:r.map(a=>a[t])}_throwWhenInvalidChildModelValue(t){if(typeof t.modelValue.checked!="boolean"||!Object.prototype.hasOwnProperty.call(t.modelValue,"value"))throw new Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${t.tagName.toLowerCase()} with .modelValue="${t.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){return this.multipleChoice?this.modelValue.length===0:typeof this.modelValue=="string"&&this.modelValue===""||this.modelValue===void 0||this.modelValue===null}_checkSingleChoiceElements(t){const{target:i}=t;if(i.checked===!1)return;const s=i.name;this.formElements.filter(r=>r.name===s).forEach(r=>{r!==i&&(r.checked=!1)})}_getCheckedElements(){return this.formElements.filter(t=>t.checked&&!t.disabled)}_setCheckedElements(t,i){if(t==null){this.formElements.forEach(s=>s.checked=!1);return}for(let s=0;s<this.formElements.length;s+=1)if(this.multipleChoice){let r=t.includes(this.formElements[s].modelValue.value);typeof this.formElements[s].modelValue.value=="object"&&(r=t.map(n=>JSON.stringify(n)).includes(JSON.stringify(this.formElements[s].modelValue.value))),this.formElements[s].checked=r}else i(this.formElements[s],t)?this.formElements[s].checked=!0:this.formElements[s].checked=!1}__setChoiceGroupTouched(){const t=this.modelValue;t!=null&&t!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=t)}_onBeforeRepropagateChildrenValues(t){const i=t.detail&&t.detail.element||t.target;this.multipleChoice||!i.checked||(this.formElements.forEach(s=>{i.choiceValue!==s.choiceValue&&(s.checked=!1)}),this.__setChoiceGroupTouched(),this.requestUpdate("modelValue",this._oldModelValue),this._oldModelValue=this.modelValue)}_repropagationCondition(t){return!(this._repropagationRole==="choice-group"&&!this.multipleChoice&&!t.checked)}},$t=B(Br),Ur=(o,e={})=>o.value!==e.value||o.checked!==e.checked,Hr=o=>class extends Ri(o){static get properties(){return{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},modelValue:{type:Object,hasChanged:Ur},choiceValue:{type:Object}}}get choiceValue(){return this.modelValue.value}set choiceValue(t){this.requestUpdate("choiceValue",this.choiceValue),this.modelValue.value!==t&&(this.modelValue={value:t,checked:this.modelValue.checked})}requestUpdate(t,i,s){super.requestUpdate(t,i,s),t==="modelValue"?this.modelValue.checked!==this.checked&&this.__syncModelCheckedToChecked(this.modelValue.checked):t==="checked"&&this.modelValue.checked!==this.checked&&this.__syncCheckedToModel(this.checked)}firstUpdated(t){super.firstUpdated(t),t.has("checked")&&this.__syncCheckedToInputElement()}updated(t){super.updated(t),t.has("modelValue")&&this.__syncCheckedToInputElement(),t.has("name")&&this._parentFormGroup&&this._parentFormGroup.name!==this.name&&this._syncNameToParentFormGroup()}constructor(){super(),this.modelValue={value:"",checked:!1},this.disabled=!1,this._preventDuplicateLabelClick=this._preventDuplicateLabelClick.bind(this),this._toggleChecked=this._toggleChecked.bind(this)}static get styles(){return[...super.styles||[],T`
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
        `]}render(){return u`
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
      `}_choiceGraphicTemplate(){return y}_afterTemplate(){return y}connectedCallback(){super.connectedCallback(),this._labelNode&&this._labelNode.addEventListener("click",this._preventDuplicateLabelClick),this.addEventListener("user-input-changed",this._toggleChecked)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._preventDuplicateLabelClick),this.removeEventListener("user-input-changed",this._toggleChecked)}_preventDuplicateLabelClick(t){const i=s=>{s.stopImmediatePropagation(),this._inputNode.removeEventListener("click",i)};this._inputNode.addEventListener("click",i)}_toggleChecked(t){this.disabled||(this._isHandlingUserInput=!0,this.checked=!this.checked,this._isHandlingUserInput=!1)}_syncNameToParentFormGroup(){var t;this._parentFormGroup.tagName.includes(this.tagName)&&(this.name=((t=this._parentFormGroup)==null?void 0:t.name)||"")}__syncModelCheckedToChecked(t){this.checked=t}__syncCheckedToModel(t){this.modelValue={value:this.choiceValue,checked:t}}__syncCheckedToInputElement(){this._inputNode&&(this._inputNode.checked=this.checked)}_proxyInputEvent(){}_onModelValueChanged({modelValue:t},i){let s;i&&i.modelValue&&(s=i.modelValue),this.constructor.elementProperties.get("modelValue").hasChanged(t,s)&&super._onModelValueChanged({modelValue:t})}parser(){return this.modelValue}formatter(t){return t&&t.value!==void 0?t.value:t}clear(){this.checked=!1}_isEmpty(){return!this.checked}_syncValueUpwards(){}},Bi=B(Hr);class qr extends Be{static get validatorName(){return"FormElementsHaveNoError"}execute(e,t,i){return i==null?void 0:i.node._anyFormElementHasFeedbackFor("error")}static async getMessage(){return""}}const jr=o=>class extends Pi(Ve(wt(xt(ke(o))))){static get properties(){return{submitted:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},touched:{type:Boolean,reflect:!0},prefilled:{type:Boolean,reflect:!0}}}get _inputNode(){return this}get modelValue(){return this._getFromAllFormElements("modelValue")}set modelValue(t){this.__isInitialModelValue?(this.__isInitialModelValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("modelValue",t)})):this._setValueMapForAllFormElements("modelValue",t)}get serializedValue(){return this._getFromAllFormElements("serializedValue")}set serializedValue(t){this.__isInitialSerializedValue?(this.__isInitialSerializedValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("serializedValue",t)})):this._setValueMapForAllFormElements("serializedValue",t)}get formattedValue(){return this._getFromAllFormElements("formattedValue")}set formattedValue(t){this._setValueMapForAllFormElements("formattedValue",t)}get prefilled(){return this._everyFormElementHas("prefilled")}constructor(){super(),this.value="",this.disabled=!1,this.submitted=!1,this.dirty=!1,this.touched=!1,this.focused=!1,this.__addedSubValidators=!1,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this._checkForOutsideClick=this._checkForOutsideClick.bind(this),this.addEventListener("focusin",this._syncFocused),this.addEventListener("focusout",this._onFocusOut),this.addEventListener("dirty-changed",this._syncDirty),this.addEventListener("validate-performed",this.__onChildValidatePerformed),this.defaultValidators=[new qr],this.__descriptionElementsInParentChain=new Set,this.__pendingValues={modelValue:{},serializedValue:{}}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group"),this.initComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__initInteractionStates()})}disconnectedCallback(){super.disconnectedCallback(),this.__hasActiveOutsideClickHandling&&(document.removeEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!1),this.__descriptionElementsInParentChain.clear()}__initInteractionStates(){this.formElements.forEach(t=>{typeof t.initInteractionState=="function"&&t.initInteractionState()})}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.__requestChildrenToBeDisabled():this.__retractRequestChildrenToBeDisabled()),t.has("focused")&&this.focused===!0&&this.__setupOutsideClickHandling()}__setupOutsideClickHandling(){this.__hasActiveOutsideClickHandling||(document.addEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!0)}_checkForOutsideClick(t){!this.contains(t.target)&&(this.touched=!0)}__requestChildrenToBeDisabled(){this.formElements.forEach(t=>{t.makeRequestToBeDisabled&&t.makeRequestToBeDisabled()})}__retractRequestChildrenToBeDisabled(){this.formElements.forEach(t=>{t.retractRequestToBeDisabled&&t.retractRequestToBeDisabled()})}_inputGroupTemplate(){return u`
        <div class="input-group">
          <slot></slot>
        </div>
      `}submitGroup(){this.submitted=!0,this.formElements.forEach(t=>{typeof t.submitGroup=="function"?t.submitGroup():t.submitted=!0})}resetGroup(){this.formElements.forEach(t=>{typeof t.resetGroup=="function"?t.resetGroup():typeof t.reset=="function"&&t.reset()}),this.resetInteractionState()}clearGroup(){this.formElements.forEach(t=>{typeof t.clearGroup=="function"?t.clearGroup():typeof t.clear=="function"&&t.clear()}),this.resetInteractionState()}resetInteractionState(){this.submitted=!1,this.touched=!1,this.dirty=!1,this.formElements.forEach(t=>{typeof t.resetInteractionState=="function"&&t.resetInteractionState()})}_getFromAllFormElementsFilter(t,i){return!t.disabled}_getFromAllFormElements(t,i){const s={},r=i||this._getFromAllFormElementsFilter;return this.formElements._keys().forEach(n=>{const a=this.formElements[n];a instanceof hi?s[n]=a.filter(c=>r(c,t)).map(c=>c[t]):r(a,t)&&(typeof a._getFromAllFormElements=="function"?s[n]=a._getFromAllFormElements(t):s[n]=a[t])}),s}_setValueForAllFormElements(t,i){this.formElements.forEach(s=>{s[t]=i})}_setValueMapForAllFormElements(t,i){i&&typeof i=="object"&&Object.keys(i).forEach(s=>{Array.isArray(this.formElements[s])&&this.formElements[s].forEach((r,n)=>{r[t]=i[s][n]}),this.formElements[s]?this.formElements[s][t]=i[s]:this.__pendingValues[t][s]=i[s]})}_anyFormElementHas(t){return Object.keys(this.formElements).some(i=>Array.isArray(this.formElements[i])?this.formElements[i].some(s=>!!s[t]):!!this.formElements[i][t])}_anyFormElementHasFeedbackFor(t){return Object.keys(this.formElements).some(i=>Array.isArray(this.formElements[i])?this.formElements[i].some(s=>!!(s.hasFeedbackFor&&s.hasFeedbackFor.includes(t))):!!(this.formElements[i].hasFeedbackFor&&this.formElements[i].hasFeedbackFor.includes(t)))}_everyFormElementHas(t){return Object.keys(this.formElements).every(i=>Array.isArray(this.formElements[i])?this.formElements[i].every(s=>!!s[t]):!!this.formElements[i][t])}__onChildValidatePerformed(t){t&&this.isRegisteredFormElement(t.target)&&this.validate()}_syncFocused(){this.focused=this._anyFormElementHas("focused")}_onFocusOut(t){const i=this.formElements[this.formElements.length-1];t.target===i&&(this.touched=!0),this.focused=!1}_syncDirty(){this.dirty=this._anyFormElementHas("dirty")}__storeAllDescriptionElementsInParentChain(){let i=this;for(;i;){const s=i._getAriaDescriptionElements();Wo(s,{reverse:!0}).forEach(n=>{n.getAttribute("slot")==="feedback"&&this.__descriptionElementsInParentChain.add(n)}),i=i._parentFormGroup}}__linkParentMessages(t){this.__descriptionElementsInParentChain.forEach(i=>{typeof t.addToAriaDescribedBy=="function"&&t.addToAriaDescribedBy(i,{reorder:!1})})}__unlinkParentMessages(t){this.__descriptionElementsInParentChain.forEach(i=>{typeof t.removeFromAriaDescribedBy=="function"&&t.removeFromAriaDescribedBy(i)})}addFormElement(t,i){if(super.addFormElement(t,i),this.disabled&&t.makeRequestToBeDisabled(),this.__descriptionElementsInParentChain.size||this.__storeAllDescriptionElementsInParentChain(),this.__linkParentMessages(t),this.validate({clearCurrentResult:!0}),!t.modelValue){const s=this.__pendingValues;s.modelValue&&s.modelValue[t.name]?t.modelValue=s.modelValue[t.name]:s.serializedValue&&s.serializedValue[t.name]&&(t.serializedValue=s.serializedValue[t.name])}}get _initialModelValue(){return this._getFromAllFormElements("_initialModelValue")}removeFormElement(t){super.removeFormElement(t),this.validate({clearCurrentResult:!0}),typeof t.removeFromAriaLabelledBy=="function"&&this._labelNode&&t.removeFromAriaLabelledBy(this._labelNode,{reorder:!1}),this.__unlinkParentMessages(t)}_isEmpty(){return this.formElements.every(t=>{var i;return(i=t._isEmpty)==null?void 0:i.call(t)})}},Ui=B(jr);class Hi extends Yo(Ko){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("input"),t=this.getAttribute("value");return t&&e.setAttribute("value",t),e}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type="text",this.placeholder=""}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="readOnly"&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has("type")&&(this._inputNode.type=this.type),e.has("placeholder")&&(this._inputNode.placeholder=this.placeholder),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}}const Wr=T`
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
    opacity: var(--co-opacity-disabled);
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
`;var qi=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let ft=class extends Hi{constructor(){super(...arguments),this.size="md",this.danger=!1,this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-input")},this._handleNativeChange=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,Wr]}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}_labelTemplate(){return u`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return u`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return u`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?u`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:y}_inputGroupInputTemplate(){return u`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot==="suffix")?u`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:y}_feedbackTemplate(){return u`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_dispatchValueEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}};qi([m({reflect:!0})],ft.prototype,"size",void 0);qi([m({type:Boolean,reflect:!0})],ft.prototype,"danger",void 0);ft=qi([$("co-input")],ft);const Gr=T`
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
 */let ui=class extends zi{constructor(e){if(super(e),this.it=y,e.type!==Vi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===y||e==null)return this._t=void 0,this.it=e;if(e===ae)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ui.directiveName="unsafeHTML",ui.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pi=class extends ui{};pi.directiveName="unsafeSVG",pi.resultType=2;const Kr=Ii(pi),Yr=T`
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
`;var Ze=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let ge=class extends D{constructor(){super(...arguments),this.name="",this.size="md",this.fill=!1,this.animated=!1}async replay(){if(!this.animated){this.animated=!0,await this.updateComplete;return}this.animated=!1,await this.updateComplete,this.getBoundingClientRect(),this.animated=!0,await this.updateComplete}render(){const e=this.animated&&ws(this.name,"rounded",this.fill)||ks(this.name,"rounded",this.fill);if(!e)return y;const t=!this.label,i=Cs.has(this.name)||Es.has(this.name)?"0 0 24 24":"0 -960 960 960";return u`
      <svg
        part="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox=${i}
        fill="currentColor"
        role=${t?"presentation":"img"}
        aria-hidden=${t?"true":"false"}
        aria-label=${this.label??y}
      >
        ${Kr(e)}
      </svg>
    `}};ge.styles=[Yr];Ze([m({reflect:!0})],ge.prototype,"name",void 0);Ze([m({reflect:!0})],ge.prototype,"size",void 0);Ze([m({type:Boolean,reflect:!0})],ge.prototype,"fill",void 0);Ze([m({type:Boolean,reflect:!0})],ge.prototype,"animated",void 0);Ze([m()],ge.prototype,"label",void 0);ge=Ze([$("co-icon")],ge);const Jt=o=>o.key===" "||o.key==="Enter",mo=o=>o.key===" ";class Zo extends Js(D){static get properties(){return{active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return u` <div class="button-content"><slot></slot></div> `}static get styles(){return[T`
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
      `]}constructor(){super(),this.type="button",this.active=!1,this.__setupEvents()}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","button")}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.getAttribute("aria-disabled")!==null&&this.removeAttribute("aria-disabled"))}__setupEvents(){this.addEventListener("mousedown",this.__mousedownHandler),this.addEventListener("keydown",this.__keydownHandler),this.addEventListener("keyup",this.__keyupHandler)}__mousedownHandler(){this.active=!0;const e=()=>{this.active=!1,document.removeEventListener("mouseup",e),this.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e),this.addEventListener("mouseup",e)}__keydownHandler(e){if(this.active||!Jt(e)){mo(e)&&e.preventDefault();return}mo(e)&&e.preventDefault(),this.active=!0;const t=i=>{Jt(i)&&(this.active=!1,document.removeEventListener("keyup",t,!0))};document.addEventListener("keyup",t,!0)}__keyupHandler(e){if(Jt(e)){if(e.target&&e.target!==this)return;this.click()}}}class Zr extends Zo{constructor(){super(),this.type="reset",this.__setupDelegationInConstructor(),this.__submitAndResetHelperButton=document.createElement("button"),this.__preventEventLeakage=this.__preventEventLeakage.bind(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setupSubmitAndResetHelperOnConnected()})}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubmitAndResetHelperOnDisconnected()}__preventEventLeakage(e){e.target===this.__submitAndResetHelperButton&&e.stopImmediatePropagation()}_setupSubmitAndResetHelperOnConnected(){this.appendChild(this.__submitAndResetHelperButton),this._form=this.__submitAndResetHelperButton.form,this.removeChild(this.__submitAndResetHelperButton),this._form&&this._form.addEventListener("click",this.__preventEventLeakage)}_teardownSubmitAndResetHelperOnDisconnected(){this._form&&this._form.removeEventListener("click",this.__preventEventLeakage)}async __clickDelegationHandler(e){this._form||await this.updateComplete,(this.type==="submit"||this.type==="reset")&&e.target===this&&this._form&&(this.__submitAndResetHelperButton.type=this.type,this._form.appendChild(this.__submitAndResetHelperButton),this.__submitAndResetHelperButton.click(),this._form.removeChild(this.__submitAndResetHelperButton))}__setupDelegationInConstructor(){this.addEventListener("click",this.__clickDelegationHandler,!0)}}const _e=new WeakMap;function Jr(){const o=document.createElement("button");return o.tabIndex=-1,o.type="submit",o.setAttribute("aria-hidden","true"),o.style.cssText=`
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
  `,o}class Jo extends Zr{get _nativeButtonNode(){var e;return((e=_e.get(this._form))==null?void 0:e.helper)||null}constructor(){super(),this.type="submit",this.__implicitSubmitHelperButton=null}_setupSubmitAndResetHelperOnConnected(){var i,s;if(super._setupSubmitAndResetHelperOnConnected(),!this._form||this.type!=="submit")return;const e=this._form;if(!_e.get(this._form)){const r=Jr(),n=document.createElement("div");n.appendChild(r),_e.set(this._form,{lionButtons:new Set,helper:r,observer:new MutationObserver(()=>{e.appendChild(n)})}),e.appendChild(n),(i=_e.get(e))==null||i.observer.observe(n,{childList:!0})}(s=_e.get(e))==null||s.lionButtons.add(this)}_teardownSubmitAndResetHelperOnDisconnected(){var e;if(super._teardownSubmitAndResetHelperOnDisconnected(),this._form){const t=_e.get(this._form);t&&(t.lionButtons.delete(this),t.lionButtons.size||(this._form.contains(t.helper)&&t.helper.remove(),(e=_e.get(this._form))==null||e.observer.disconnect(),_e.delete(this._form)))}}}const Xr=T`
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
    color: var(--co-color-text-on-danger);
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
    color: var(--co-color-text-on-success);
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
`;var Ie=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Qr={sm:"xs",md:"sm",lg:"md",xl:"lg"};let ye=class extends Jo{constructor(){super(...arguments),this.name="",this.variant="primary",this.size="md",this.labelPosition="bottom",this.circle=!1,this._handleFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,Xr]}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}render(){const e=Qr[this.size],t=!!this.label&&!this.circle,i=t?u`<span part="label" class="label">${this.label}</span>`:y;return u`
      <div part="base" class="button-icon ${t?"has-label":""}">
        ${this.labelPosition==="top"?i:y}
        <co-icon part="icon" name=${this.name} size=${e} aria-hidden="true"></co-icon>
        ${this.labelPosition==="bottom"?i:y}
      </div>
    `}};Ie([m({reflect:!0})],ye.prototype,"name",void 0);Ie([m({reflect:!0})],ye.prototype,"variant",void 0);Ie([m({reflect:!0})],ye.prototype,"size",void 0);Ie([m()],ye.prototype,"label",void 0);Ie([m({reflect:!0,attribute:"label-position"})],ye.prototype,"labelPosition",void 0);Ie([m({type:Boolean,reflect:!0})],ye.prototype,"circle",void 0);ye=Ie([$("co-button-icon")],ye);var Rt=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Xt={default:{},search:{prefixIcon:"search",placeholder:"Search"},chat:{actionIcon:"arrow-forward"}};let _t=class extends ft{constructor(){super(...arguments),this.variant="default"}static get styles(){return[...super.styles,Gr]}get _resolvedPrefixIcon(){var e;return this.prefixIcon??((e=Xt[this.variant])==null?void 0:e.prefixIcon)}get _resolvedActionIcon(){var e;return this.actionIcon??((e=Xt[this.variant])==null?void 0:e.actionIcon)}connectedCallback(){var e;if(super.connectedCallback(),!this.hasAttribute("placeholder")){const t=(e=Xt[this.variant])==null?void 0:e.placeholder;t&&this.setAttribute("placeholder",t)}}get _iconSize(){return{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"}_inputGroupPrefixTemplate(){const e=this._resolvedPrefixIcon;return e?u`
      <div part="prefix" class="input-group__prefix">
        <slot name="prefix">
          <co-icon name=${e} size=${this._iconSize} aria-hidden="true"></co-icon>
        </slot>
      </div>
    `:y}_inputGroupSuffixTemplate(){const e=this._resolvedActionIcon;return e?u`
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
    `:y}_labelTemplate(){return u``}_helpTextTemplate(){return u``}_feedbackTemplate(){return u``}_onActionClick(){var t;if(this.disabled)return;const e=((t=this._inputNode)==null?void 0:t.value)??"";this.dispatchEvent(new CustomEvent("co-action",{detail:{value:e},bubbles:!0,composed:!0}))}};Rt([m({reflect:!0})],_t.prototype,"variant",void 0);Rt([m({attribute:"action-icon"})],_t.prototype,"actionIcon",void 0);Rt([m({attribute:"prefix-icon"})],_t.prototype,"prefixIcon",void 0);_t=Rt([$("co-input-pill")],_t);const en=T`
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
    padding: var(--co-component-nav-rail-item-padding-y, var(--co-space-2))
      var(--co-component-nav-rail-item-padding-x, var(--co-space-2));
    gap: var(--co-component-nav-rail-item-gap, var(--co-space-3));
    border: none;
    border-radius: var(--co-component-nav-rail-item-radius, var(--co-shape-radius-2xl));
    background: var(
      --co-component-nav-rail-item-background-default,
      var(--co-color-interactive-subtle-default)
    );
    appearance: none;
    -webkit-appearance: none;
    color: var(--co-component-nav-rail-item-foreground-default, var(--co-color-text-secondary));
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
    inline-size: var(--co-component-nav-rail-item-icon-size, 22px);
    block-size: var(--co-component-nav-rail-item-icon-size, 22px);
  }

  .nav-item__label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-inline-size: 100%;
    inline-size: 100%;
    color: currentColor;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-xsmall);
    font-weight: var(--co-typography-body-sm-weight);
    letter-spacing: var(--co-typography-body-sm-tracking);
    line-height: var(--co-typography-body-sm-line-height);
    text-wrap: balance;
    overflow-wrap: anywhere;
  }

  :host(:not([selected]):not([disabled])) .nav-item:active {
    background: var(
      --co-component-nav-rail-item-background-active,
      var(--co-color-interactive-subtle-active)
    );
  }

  :host(:not([selected])) .nav-item:hover {
    background: var(
      --co-component-nav-rail-item-background-hover,
      var(--co-color-interactive-subtle-hover)
    );
    color: var(--co-color-interactive-primary-default);
  }

  :host([selected]) .nav-item {
    background: var(
      --co-component-nav-rail-item-background-selected,
      var(--co-color-interactive-subtle-selected)
    );
    color: var(--co-color-interactive-primary-default);
  }

  .nav-item:focus-visible {
    outline: var(--co-focus-ring-width) solid
      var(--co-component-nav-rail-item-focus-ring, var(--co-color-border-focus));
    outline-offset: var(--co-focus-ring-offset);
  }

  :host([disabled]) .nav-item {
    background: transparent;
    opacity: var(--co-opacity-disabled);
    cursor: not-allowed;
  }
`;var de=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let oe=class extends D{constructor(){super(...arguments),this.value="",this.icon="",this.selected=!1,this.disabled=!1,this._controlTabIndex=-1}setFocusable(e){this._controlTabIndex=!this.disabled&&e?0:-1,this._control&&(this._control.tabIndex=this._controlTabIndex)}focus(e){var t;(t=this._control)==null||t.focus(e)}get _iconSize(){return"sm"}_handleDisabledLinkClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}updated(){this._control&&(this._control.tabIndex=this.disabled?-1:this._controlTabIndex)}render(){const e=u`
      <span part="label" class="nav-item__label">
        <slot>${this.label??y}</slot>
      </span>
    `,t=u`
      <span part="icon" class="nav-item__icon" aria-hidden="true">
        <slot name="icon">
          ${this.icon?u`<co-icon
                name=${this.icon}
                size=${this._iconSize}
                ?fill=${this.selected}
              ></co-icon>`:y}
        </slot>
      </span>
    `;return this.href?u`
        <a
          part="control"
          class="nav-item"
          href=${this.href}
          target=${this.target??y}
          aria-disabled=${this.disabled?"true":y}
          aria-current=${this.selected?"page":y}
          tabindex=${this.disabled?-1:this._controlTabIndex}
          @click=${this._handleDisabledLinkClick}
        >
          ${t} ${e}
        </a>
      `:u`
      <button
        part="control"
        class="nav-item"
        type="button"
        ?disabled=${this.disabled}
        aria-current=${this.selected&&!this.href?"page":y}
        tabindex=${this.disabled?-1:this._controlTabIndex}
      >
        ${t} ${e}
      </button>
    `}};oe.styles=[en];de([m({reflect:!0})],oe.prototype,"value",void 0);de([m({reflect:!0})],oe.prototype,"icon",void 0);de([m()],oe.prototype,"href",void 0);de([m()],oe.prototype,"target",void 0);de([m()],oe.prototype,"label",void 0);de([m({type:Boolean,reflect:!0})],oe.prototype,"selected",void 0);de([m({type:Boolean,reflect:!0})],oe.prototype,"disabled",void 0);de([Li(".nav-item")],oe.prototype,"_control",void 0);oe=de([$("co-nav-rail-item")],oe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xo="important",tn=" !"+Xo,Qt=Ii(class extends zi{constructor(o){var e;if(super(o),o.type!==Vi.ATTRIBUTE||o.name!=="style"||((e=o.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{const i=o[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[e]){const{style:t}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(const i in e){const s=e[i];if(s!=null){this.ft.add(i);const r=typeof s=="string"&&s.endsWith(tn);i.includes("-")||r?t.setProperty(i,r?s.slice(0,-11):s,r?Xo:""):t[i]=s}}return ae}}),Qo="4px",on="768px",sn="116px",rn=T`
  :host {
    display: block;
    block-size: 100dvh;
    --_co-app-shell-backdrop: rgb(0 0 0 / 0.4);
  }

  .app-shell {
    position: relative;
    display: grid;
    grid-template-rows: auto auto minmax(0, 1fr) auto;
    block-size: 100%;
    min-block-size: 0;
    background: var(--co-color-surface-page);
  }

  .app-shell__banner,
  .app-shell__topnav,
  .app-shell__footer {
    background: var(--co-color-surface-default);
  }

  .app-shell__banner {
    border-bottom: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
  }

  .app-shell__footer-inner {
    padding: var(--co-space-3) var(--co-space-4);
  }

  .app-shell__topnav {
    border-bottom: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
  }

  .app-shell__topnav-inner {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-md);
    min-block-size: calc(var(--co-control-height-lg) + var(--co-space-3));
  }

  .app-shell__topnav-slot {
    flex: 1 1 auto;
    min-inline-size: 0;
  }

  .app-shell__toggle {
    flex: 0 0 auto;
    min-block-size: var(--co-control-height-md);
    padding: var(--co-space-2) var(--co-space-3);
    border: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    border-radius: var(--co-control-radius);
    background: var(--co-color-surface-default);
    color: var(--co-color-text-default);
    font: inherit;
    cursor: pointer;
  }

  .app-shell__toggle:focus-visible {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: var(--co-focus-ring-offset);
  }

  .app-shell__content-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: stretch;
    column-gap: var(--co-space-gap-sm);
    row-gap: var(--co-space-4);
    min-block-size: 0;
    padding: var(--co-space-4);
  }

  .app-shell__rail,
  .app-shell__drawer {
    align-self: stretch;
    min-block-size: 0;
    block-size: 100%;
    overflow: visible;
  }

  .app-shell__body {
    min-inline-size: 0;
    min-block-size: 0;
    block-size: 100%;
    overflow: auto;
  }

  .app-shell__body--offset {
    margin-inline-start: var(--co-space-5);
  }

  .app-shell__footer {
    border-top: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
  }

  .app-shell__overlay {
    position: fixed;
    inset-block: 0;
    inset-inline-start: 0;
    block-size: 100dvh;
    inline-size: min(var(--_co-app-shell-overlay-width), calc(100vw - var(--co-space-6)));
    max-inline-size: calc(100vw - var(--co-space-6));
    visibility: hidden;
    pointer-events: none;
    z-index: 50;
  }

  .app-shell__overlay--open {
    visibility: visible;
    pointer-events: auto;
  }

  .app-shell__overlay-panel {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 1fr;
    align-content: stretch;
    box-sizing: border-box;
    inline-size: min(var(--_co-app-shell-overlay-width), calc(100vw - var(--co-space-6)));
    max-inline-size: calc(100vw - var(--co-space-6));
    block-size: 100dvh;
    overflow: auto;
    background: var(--co-color-surface-default);
    border-inline-end: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    box-shadow: var(--co-elevation-shadow-lg);
    outline: none;
    transform: translateX(calc(-100% - var(--co-space-3)));
    transition: transform var(--co-motion-duration-fast, 0.2s) var(--co-motion-easing-default, ease);
    will-change: transform;
  }

  .app-shell__overlay--open .app-shell__overlay-panel {
    transform: translateX(0);
  }

  .app-shell__overlay-section {
    min-inline-size: 0;
    min-block-size: 0;
    overflow: auto;
  }

  .app-shell__overlay-section + .app-shell__overlay-section {
    border-block-start: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
  }

  .app-shell__overlay-panel[data-overlay-layout='split']
    .app-shell__overlay-section
    + .app-shell__overlay-section {
    border-block-start: 0;
    border-inline-start: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
  }

  .app-shell__backdrop {
    position: fixed;
    inset: 0;
    z-index: 45;
    border: 0;
    padding: 0;
    background: var(--_co-app-shell-backdrop);
    cursor: pointer;
  }

  .app-shell__banner-slot::slotted(*),
  .app-shell__topnav-slot-inner::slotted(*),
  .app-shell__footer-slot::slotted(*),
  .app-shell__rail-slot::slotted(*),
  .app-shell__drawer-slot::slotted(*),
  .app-shell__body-slot::slotted(*),
  .app-shell__overlay-rail-slot::slotted(*),
  .app-shell__overlay-drawer-slot::slotted(*) {
    box-sizing: border-box;
    display: block;
    inline-size: 100%;
    max-inline-size: 100%;
    min-inline-size: 0;
  }

  @media (min-width: 768px) {
    .app-shell__footer-inner {
      padding-inline: var(--co-space-6);
    }

    .app-shell__content-row {
      padding: var(--co-space-6);
    }
  }
`;var ee=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let J=class extends D{constructor(){super(...arguments),this.drawerOpen=!1,this.railWidth="",this.drawerWidth="",this._hasBanner=!1,this._hasTopnav=!1,this._hasRail=!1,this._hasDrawer=!1,this._hasFooter=!1,this._desktop=!1,this._drawerPanelId=`co-app-shell-drawer-${Math.random().toString(36).slice(2)}`,this._handleDesktopChange=e=>{this._desktop=e.matches},this._handleWindowKeydown=e=>{e.key!=="Escape"||!this._showBackdrop||this.closeDrawer()}}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._desktopQuery=window.matchMedia(`(min-width: ${on})`),this._desktop=this._desktopQuery.matches,this._desktopQuery.addEventListener("change",this._handleDesktopChange),window.addEventListener("keydown",this._handleWindowKeydown),this._lightDomObserver=new MutationObserver(()=>this._syncSlotPresence()),this._lightDomObserver.observe(this,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["slot"]})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this._desktopQuery)==null||e.removeEventListener("change",this._handleDesktopChange),window.removeEventListener("keydown",this._handleWindowKeydown),(t=this._lightDomObserver)==null||t.disconnect()}updated(e){queueMicrotask(()=>this._syncToggleAriaControls()),e.has("drawerOpen")&&this._showBackdrop&&this.drawerOpen&&queueMicrotask(()=>{var t;return(t=this._drawerPanel)==null?void 0:t.focus()})}openDrawer(){!this._canToggleDrawer||this.drawerOpen||(this.drawerOpen=!0,this._dispatchDrawerEvent("co-drawer-open",!0),this._dispatchDrawerEvent("co-drawer-toggle",!0))}closeDrawer(){!this._canToggleDrawer||!this.drawerOpen||(this.drawerOpen=!1,this._dispatchDrawerEvent("co-drawer-close",!1),this._dispatchDrawerEvent("co-drawer-toggle",!1),queueMicrotask(()=>{var e;return(e=this._drawerToggle)==null?void 0:e.focus()}))}toggleDrawer(){this._canToggleDrawer&&(this.drawerOpen?this.closeDrawer():this.openDrawer())}render(){const e=this._hasTopnav||this._showDrawerToggle,t=`app-shell__body${this._hasDesktopSideNav?" app-shell__body--offset":""}`;return u`
      <div part="base" class="app-shell">
        ${this._hasBanner?u`
              <div part="banner" class="app-shell__banner">
                <div class="app-shell__banner-inner">
                  <slot class="app-shell__banner-slot" name="banner"></slot>
                </div>
              </div>
            `:y}
        ${e?u`
              <div part="topnav" class="app-shell__topnav">
                <div class="app-shell__topnav-inner">
                  ${this._showDrawerToggle?u`
                        <button
                          id="drawer-toggle"
                          part="toggle"
                          type="button"
                          class="app-shell__toggle"
                          aria-expanded=${String(this.drawerOpen)}
                          aria-label=${this.drawerOpen?"Close navigation":"Open navigation"}
                          @click=${this.toggleDrawer}
                        >
                          Menu
                        </button>
                      `:y}
                  ${this._hasTopnav?u`
                        <div class="app-shell__topnav-slot">
                          <slot class="app-shell__topnav-slot-inner" name="topnav"></slot>
                        </div>
                      `:y}
                </div>
              </div>
            `:y}

        <div
          part="content"
          class="app-shell__content-row"
          style=${Qt({gridTemplateColumns:this._contentColumns})}
        >
          ${this._desktop&&this._hasRail?u`
                <aside part="rail" class="app-shell__rail">
                  <slot class="app-shell__rail-slot" name="rail"></slot>
                </aside>
              `:y}
          ${this._desktop&&this._hasDrawer?u`
                <aside part="drawer" class="app-shell__drawer">
                  <slot class="app-shell__drawer-slot" name="drawer"></slot>
                </aside>
              `:y}

          <main part="body" class=${t}>
            <slot class="app-shell__body-slot" name="body"></slot>
          </main>
        </div>

        ${this._hasFooter?u`
              <footer part="footer" class="app-shell__footer">
                <div class="app-shell__footer-inner">
                  <slot class="app-shell__footer-slot" name="footer"></slot>
                </div>
              </footer>
            `:y}
        ${!this._desktop&&this._hasOverlayContent?u`
              <div
                class=${`app-shell__overlay${this.drawerOpen?" app-shell__overlay--open":""}`}
                aria-hidden=${String(!this.drawerOpen)}
                style=${Qt({"--_co-app-shell-overlay-width":this._overlayWidth})}
              >
                <div
                  id=${this._drawerPanelId}
                  class="app-shell__overlay-panel"
                  data-overlay-layout=${this._hasSplitOverlayLayout?"split":"stack"}
                  tabindex="-1"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Navigation"
                  style=${Qt({"--_co-app-shell-overlay-width":this._overlayWidth,gridTemplateColumns:this._overlayColumns})}
                >
                  ${this._hasRail?u`
                        <section
                          part="rail"
                          class="app-shell__overlay-section app-shell__overlay-section--rail"
                        >
                          <slot class="app-shell__overlay-rail-slot" name="rail"></slot>
                        </section>
                      `:y}
                  ${this._hasDrawer?u`
                        <section
                          part="drawer"
                          class="app-shell__overlay-section app-shell__overlay-section--drawer"
                        >
                          <slot class="app-shell__overlay-drawer-slot" name="drawer"></slot>
                        </section>
                      `:y}
                </div>
              </div>
            `:y}
        ${this._showBackdrop?u`
              <button
                part="backdrop"
                type="button"
                class="app-shell__backdrop"
                aria-label="Close navigation"
                @click=${this.closeDrawer}
              ></button>
            `:y}
      </div>
    `}get _hasOverlayContent(){return this._hasRail||this._hasDrawer}get _canToggleDrawer(){return this._hasOverlayContent&&!this._desktop}get _showDrawerToggle(){return this._canToggleDrawer}get _showBackdrop(){return this._canToggleDrawer&&this.drawerOpen}get _hasDesktopSideNav(){return this._desktop&&(this._hasRail||this._hasDrawer)}get _resolvedRailWidth(){return this.railWidth||`var(--co-app-shell-rail-width, ${sn})`}get _resolvedDrawerWidth(){return this.drawerWidth||"var(--co-app-shell-drawer-width, 260px)"}get _contentColumns(){if(!this._desktop)return"minmax(0, 1fr)";const e=[];return this._hasRail&&e.push(this._resolvedRailWidth),this._hasDrawer&&e.push(this._resolvedDrawerWidth),e.push("minmax(0, 1fr)"),e.join(" ")}get _overlayWidth(){return this._hasRail&&this._hasDrawer?`calc(${this._resolvedRailWidth} + ${this._resolvedDrawerWidth})`:this._hasDrawer?this._resolvedDrawerWidth:this._resolvedRailWidth}get _overlayColumns(){return this._hasSplitOverlayLayout?`${this._resolvedRailWidth} minmax(0, 1fr)`:"minmax(0, 1fr)"}get _hasSplitOverlayLayout(){return this._hasRail&&this._hasDrawer}_dispatchDrawerEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{open:t},bubbles:!0,composed:!0}))}_syncSlotPresence(){const e=t=>Array.from(this.children).some(i=>i instanceof HTMLElement&&i.getAttribute("slot")===t);this._hasBanner=e("banner"),this._hasTopnav=e("topnav"),this._hasRail=e("rail"),this._hasDrawer=e("drawer"),this._hasFooter=e("footer")}_syncToggleAriaControls(){var t;if(!this._drawerToggle)return;const e=(t=this._drawerPanel)==null?void 0:t.id;e?this._drawerToggle.setAttribute("aria-controls",e):this._drawerToggle.removeAttribute("aria-controls")}};J.styles=[rn];ee([m({type:Boolean,attribute:"drawer-open",reflect:!0})],J.prototype,"drawerOpen",void 0);ee([m({attribute:"rail-width",reflect:!0})],J.prototype,"railWidth",void 0);ee([m({attribute:"drawer-width",reflect:!0})],J.prototype,"drawerWidth",void 0);ee([Ye()],J.prototype,"_hasBanner",void 0);ee([Ye()],J.prototype,"_hasTopnav",void 0);ee([Ye()],J.prototype,"_hasRail",void 0);ee([Ye()],J.prototype,"_hasDrawer",void 0);ee([Ye()],J.prototype,"_hasFooter",void 0);ee([Ye()],J.prototype,"_desktop",void 0);ee([Li(".app-shell__overlay-panel")],J.prototype,"_drawerPanel",void 0);ee([Li("#drawer-toggle")],J.prototype,"_drawerToggle",void 0);J=ee([$("co-app-shell")],J);const nn=T`
  :host {
    display: block;
    inline-size: 100%;
    box-sizing: border-box;
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    inline-size: 100%;
    min-block-size: var(--co-component-banner-height, 44px);
    padding: var(--co-component-banner-padding, var(--co-space-1));
    box-sizing: border-box;
    background: var(--co-component-banner-background, var(--co-color-surface-raised));
    color: var(--co-component-banner-foreground, var(--co-color-text-default));
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    line-height: var(--co-font-line-height-normal);
  }

  .banner__title {
    font-weight: var(--co-component-banner-title-weight, var(--co-font-weight-medium));
    text-transform: uppercase;
    letter-spacing: var(--co-font-tracking-wide, 0.04em);
  }

  .banner__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;var ji=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let mt=class extends D{constructor(){super(...arguments),this.label="Banner",this._title=""}set title(e){const t=this._title;this._title=e,this.requestUpdate("title",t)}get title(){return this._title}render(){return u`
      <div part="base" class="banner" role="banner" aria-label=${this.label}>
        <span part="title" class="banner__title">
          <slot name="title">${this._title}</slot>
        </span>
        <div part="content" class="banner__content">
          <slot></slot>
        </div>
      </div>
    `}};mt.styles=[nn];ji([m({reflect:!0})],mt.prototype,"label",void 0);ji([m({reflect:!0})],mt.prototype,"title",null);mt=ji([$("co-banner")],mt);const an=T`
  :host {
    display: block;
    box-sizing: border-box;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--co-component-card-gap, var(--co-space-gap-sm));
    padding: var(--co-component-card-padding, var(--co-space-inset-lg));
    border-radius: var(--co-component-card-radius, var(--co-shape-radius-lg));
    background: var(--co-component-card-background, var(--co-color-surface-raised));
    box-shadow: var(--co-component-card-shadow, var(--co-elevation-shadow-sm));
    font-family: var(--co-font-family-sans);
    color: var(--co-color-text-default);
  }

  .card__header,
  .card__body,
  .card__footer {
    inline-size: 100%;
  }
`;var es=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let Lt=class extends D{constructor(){super(...arguments),this.label=""}render(){return u`
      <div
        part="base"
        class="card"
        role=${this.label?"region":y}
        aria-label=${this.label||y}
      >
        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>
        <div part="body" class="card__body">
          <slot></slot>
        </div>
        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};Lt.styles=[an];es([m({reflect:!0})],Lt.prototype,"label",void 0);Lt=es([$("co-card")],Lt);const ln=T`
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
    inline-size: 100%;
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
    color: var(--co-color-text-on-danger);
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
    color: var(--co-color-text-on-success);
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
  /* Override Lion's base focus styles — match its specificity */
  :host(:focus),
  :host(:focus:not([disabled])),
  :host(:focus:not(:focus-visible)) {
    outline: none;
  }

  :host(:focus-visible:not([disabled])) {
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
`;var Je=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let Le=class extends Jo{constructor(){super(...arguments),this.variant="primary",this.size="md",this.loading=!1,this._handleFocus=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleBlur=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleClick=()=>{this.disabled||!this.href||(this.target&&this.target!=="_self"?window.open(this.href,this.target,this.target==="_blank"?"noopener,noreferrer":""):window.location.href=this.href)}}static get styles(){return[...super.styles,ln]}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||(this.tabIndex=0),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur),this.removeEventListener("click",this._handleClick)}render(){return this.href?u`
        <a
          part="base"
          class="button"
          href=${this.href}
          target=${this.target??"_self"}
          rel=${this.target==="_blank"?"noopener noreferrer":""}
          tabindex="-1"
          aria-disabled=${this.disabled}
        >
          <slot name="prefix" part="prefix"></slot>
          <slot part="label"></slot>
          <slot name="suffix" part="suffix"></slot>
        </a>
      `:u`
      <div part="base" class="button">
        <slot name="prefix" part="prefix"></slot>
        <slot part="label"></slot>
        <slot name="suffix" part="suffix"></slot>
        ${this.loading?u`<co-icon
              part="spinner"
              name="progress-activity"
              size=${{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]}
              animated
              aria-hidden="true"
            ></co-icon>`:""}
      </div>
    `}};Je([m({reflect:!0})],Le.prototype,"variant",void 0);Je([m({reflect:!0})],Le.prototype,"size",void 0);Je([m({type:Boolean,reflect:!0})],Le.prototype,"loading",void 0);Je([m({reflect:!0})],Le.prototype,"href",void 0);Je([m({reflect:!0})],Le.prototype,"target",void 0);Le=Je([$("co-button")],Le);class cn extends $t(Ui(D)){constructor(){super(),this.multipleChoice=!0}}class ts extends Bi(Hi){connectedCallback(){super.connectedCallback(),this.type="checkbox"}}class dn extends ts{static get styles(){return[...super.styles||[],T`
        :host .choice-field__nested-checkboxes {
          display: block;
        }
        ::slotted(*) {
          padding-left: 8px;
        }
      `]}static get properties(){return{indeterminate:{type:Boolean,reflect:!0},mixedState:{type:Boolean,reflect:!0,attribute:"mixed-state"}}}get _checkboxGroupNode(){return this._parentFormGroup}get _subCheckboxes(){return this.__subCheckboxes}_storeIndeterminateState(){this._indeterminateSubStates=this._subCheckboxes.map(e=>e.checked)}_setOldState(){this.indeterminate?this._oldState="indeterminate":this._oldState=this.checked?"checked":"unchecked"}_setOwnCheckedState(){const e=this._subCheckboxes;if(!e.length)return;this.__settingOwnChecked=!0;const t=e.filter(i=>i.checked);switch(e.length-t.length){case 0:this.indeterminate=!1,this.checked=!0;break;case e.length:this.indeterminate=!1,this.checked=!1;break;default:{this.indeterminate=!0;const i=e.filter(s=>s.disabled&&s.checked===!1);this.checked=e.length-t.length-i.length===0}}this.updateComplete.then(()=>{this.__settingOwnChecked=!1})}_setBasedOnMixedState(){switch(this._oldState){case"checked":this.checked=!1,this.indeterminate=!1;break;case"unchecked":this.checked=!1,this.indeterminate=!0;break;case"indeterminate":this.checked=!0,this.indeterminate=!1;break}}__onModelValueChanged(e){if(this.disabled)return;if(e.detail.formPath[0]===this&&!this.__settingOwnChecked){const i=h=>h.every(_=>_===h[0]);this.mixedState&&!i(this._indeterminateSubStates)&&this._setBasedOnMixedState(),this.__settingOwnSubs=!0;const s=this._subCheckboxes,r=s.filter(h=>h.checked),n=s.filter(h=>h.disabled),a=s.length>0&&s.length===r.length;s.length>0&&s.length===n.length&&(this.checked=a),this.indeterminate&&this.mixedState?this._subCheckboxes.forEach((h,_)=>{h.checked=this._indeterminateSubStates[_]}):this._subCheckboxes.filter(h=>!h.disabled).forEach(h=>{h.checked=this._inputNode.checked}),this.updateComplete.then(()=>{this.__settingOwnSubs=!1})}else this._setOwnCheckedState(),this.updateComplete.then(()=>{!this.__settingOwnSubs&&!this.__settingOwnChecked&&this.mixedState&&this._storeIndeterminateState()});this.mixedState&&this._setOldState()}_afterTemplate(){return u`
      <div class="choice-field__nested-checkboxes" role="list">
        <slot></slot>
      </div>
    `}_onRequestToAddFormElement(e){var t;e.target.hasAttribute("role")||(t=e.target)==null||t.setAttribute("role","listitem"),this.__addToSubCheckboxes(e.detail.element),this._setOwnCheckedState()}_onRequestToRemoveFormElement(e){var t;e.target.getAttribute("role")==="listitem"&&((t=e.target)==null||t.removeAttribute("role")),this.__removeFromSubCheckboxes(e.detail.element)}__addToSubCheckboxes(e){e!==this&&this.contains(e)&&this.__subCheckboxes.push(e)}__removeFromSubCheckboxes(e){const t=this.__subCheckboxes.indexOf(e);t!==-1&&this.__subCheckboxes.splice(t,1)}constructor(){super(),this.indeterminate=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this.__onModelValueChanged=this.__onModelValueChanged.bind(this),this.__subCheckboxes=[],this._indeterminateSubStates=[],this.mixedState=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this.__onModelValueChanged),this.addEventListener("form-element-register",this._onRequestToAddFormElement)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this.__onModelValueChanged),this.removeEventListener("form-element-register",this._onRequestToAddFormElement)}firstUpdated(e){super.firstUpdated(e),this._setOldState(),this.indeterminate&&this._storeIndeterminateState()}updated(e){super.updated(e),(e.has("indeterminate")||e.has("checked"))&&(this._inputNode.indeterminate=this.indeterminate)}}const hn=T`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    color: var(--co-color-text-default);
    cursor: pointer;
  }

  :host([disabled]) {
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

  :host([_keyboard-focus]) .checkbox__icon {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-shape-radius-sm);
  }

  .checkbox__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    line-height: var(--co-font-line-height-normal);
  }
`;let fi=!1;typeof document<"u"&&(document.addEventListener("keydown",()=>{fi=!0}),document.addEventListener("mousedown",()=>{fi=!1}));function Wi(o){o.addEventListener("focusin",()=>{fi&&o.setAttribute("_keyboard-focus","")}),o.addEventListener("focusout",()=>{o.removeAttribute("_keyboard-focus")})}var is=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let _i=class extends ts{constructor(){super(...arguments),this.__forwardingClick=!1}static get styles(){return[...super.styles,hn]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),Wi(this)}render(){return u`
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
    `}_onMousedown(e){var t;((t=e.target)==null?void 0:t.slot)!=="input"&&e.preventDefault()}_onCheckboxClick(e){if(this.__forwardingClick||this.disabled)return;const t=e.target,i=this._inputNode;!i||t===i||t instanceof HTMLLabelElement||(this.__forwardingClick=!0,i.click(),i.focus(),this.__forwardingClick=!1)}};is([m({reflect:!0})],_i.prototype,"value",null);_i=is([$("co-checkbox")],_i);const un=T`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
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
`,pn=T`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    color: var(--co-color-text-default);
    cursor: pointer;
  }

  :host([disabled]) {
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

  :host([_keyboard-focus]) .checkbox__icon {
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
`;var os=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let mi=class extends dn{static get styles(){return[...super.styles,pn]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),Wi(this)}get _indicatorIconName(){return this.indeterminate?"indeterminate-check-box":this.checked?"check-box":"check-box-outline-blank"}render(){return u`
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
    `}_afterTemplate(){return u`
      <div part="children" class="checkbox__nested" role="list">
        <slot></slot>
      </div>
    `}_onMousedown(e){var t;((t=e.target)==null?void 0:t.slot)!=="input"&&e.preventDefault()}_onCheckboxClick(e){const t=this._inputNode;if(!t||this.disabled||e.target===t)return;const i=this._subCheckboxes??[],r=!(i.length>0&&i.every(n=>n.checked));this.__settingOwnSubs=!0,i.filter(n=>!n.disabled).forEach(n=>{n.checked=r,n._inputNode&&(n._inputNode.checked=r)}),this.checked=r,this.indeterminate=!1,t.checked=r,this.updateComplete.then(()=>{this.__settingOwnSubs=!1,t.focus()})}};os([m({reflect:!0})],mi.prototype,"value",null);mi=os([$("co-checkbox-indeterminate")],mi);var ss=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let vi=class extends cn{constructor(){super(...arguments),this.required=!1,this._requiredValidator=new kt(void 0,{getMessage:async()=>"Please select at least one option."}),this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,un]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){super.firstUpdated(e),this._syncRequiredValidator()}updated(e){super.updated(e),e.has("required")&&this._syncRequiredValidator()}render(){return u`
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
    `}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}};ss([m({type:Boolean,reflect:!0})],vi.prototype,"required",void 0);vi=ss([$("co-checkbox-group")],vi);class fn extends Dr(D){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox")}createRenderRoot(){return this}}const _n=o=>class extends Ve(Mi($t(ke(Pi(o))))){static get properties(){return{orientation:String,selectionFollowsFocus:{type:Boolean,attribute:"selection-follows-focus"},rotateKeyboardNavigation:{type:Boolean,attribute:"rotate-keyboard-navigation"},hasNoDefaultSelected:{type:Boolean,reflect:!0,attribute:"has-no-default-selected"},_noTypeAhead:{type:Boolean}}}static get styles(){return[...super.styles||[],T`
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
        `]}_inputGroupInputTemplate(){return u`
        <div class="input-group__input">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      `}static get scopedElements(){return{...super.scopedElements,"lion-options":fn}}get slots(){return{...super.slots,input:()=>{const t=this.createScopedElement("lion-options");return t.setAttribute("data-tag-name","lion-options"),t.registrationTarget=this,t}}}get _inputNode(){return this.querySelector('[slot="input"]')}get _listboxNode(){return this._inputNode}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get _listboxSlot(){return this.shadowRoot.querySelector("slot[name=input]")}get _scrollTargetNode(){return this._listboxNode}get _activeDescendantOwnerNode(){return this._listboxNode}get activeIndex(){return this.formElements.findIndex(t=>t.active===!0)}set activeIndex(t){if(this.formElements[t]){const i=this.formElements[t];this.__setChildActive(i)}else this.__setChildActive(null)}get checkedIndex(){const t=this.formElements;return this.multipleChoice?t.filter(i=>i.checked).map(i=>t.indexOf(i)):t.indexOf(t.find(i=>i.checked))}set checkedIndex(t){this.setCheckedIndex(t)}constructor(){super(),this.hasNoDefaultSelected=!1,this.orientation="vertical",this.rotateKeyboardNavigation=!1,this.selectionFollowsFocus=!1,this._noTypeAhead=!1,this._typeAheadTimeout=1e3,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this._repropagationRole="choice-group",this._listboxReceivesNoFocus=!1,this._oldModelValue=void 0,this._listboxOnKeyDown=this._listboxOnKeyDown.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this),this._listboxOnKeyUp=this._listboxOnKeyUp.bind(this),this._onChildActiveChanged=this._onChildActiveChanged.bind(this),this.__proxyChildModelValueChanged=this.__proxyChildModelValueChanged.bind(this),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.__typedChars=[]}connectedCallback(){this._listboxNode&&(this._listboxNode.registrationTarget=this),super.connectedCallback(),this._setupListboxNode(),this.__setupEventListeners(),this.registrationComplete.then(()=>{this.__initInteractionStates()})}firstUpdated(t){super.firstUpdated(t),this.__moveOptionsToListboxNode(),this.registrationComplete.then(()=>{this._initialModelValue=this.modelValue}),new MutationObserver(()=>{this._onListboxContentChanged()}).observe(this._listboxNode,{childList:!0})}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.__requestOptionsToBeDisabled():this.__retractRequestOptionsToBeDisabled())}disconnectedCallback(){super.disconnectedCallback(),this._teardownListboxNode(),this.__teardownEventListeners()}setCheckedIndex(t){if(this.multipleChoice&&Array.isArray(t)){this._uncheckChildren(this.formElements.filter(i=>i===t)),t.forEach(i=>{this.formElements[i]&&(this.formElements[i].checked=!this.formElements[i].checked)});return}typeof t=="number"&&(t===-1&&this._uncheckChildren(),this.formElements[t]&&(this.formElements[t].disabled?this._uncheckChildren():this.multipleChoice?this.formElements[t].checked=!this.formElements[t].checked:this.formElements[t].checked=!0))}addFormElement(t,i){super.addFormElement(t,i),t.id=t.id||`${this.localName}-option-${Do()}`,this.disabled&&t.makeRequestToBeDisabled(),this.__setAttributeForAllFormElements("aria-setsize",this.formElements.length),this.formElements.forEach((s,r)=>{s.setAttribute("aria-posinset",r+1)}),this.__proxyChildModelValueChanged({target:t}),this.resetInteractionState()}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.activeIndex=-1,this.resetInteractionState()}clear(){super.clear(),this.setCheckedIndex(-1)}_handleTypeAhead(t,{setAsChecked:i}){const{key:s,code:r}=t;if(r.startsWith("Key")||r.startsWith("Digit")||r.startsWith("Numpad")){t.preventDefault(),this.__typedChars.push(s);const n=this.__typedChars.join(""),a=this.formElements.findIndex(c=>c.modelValue.value.toLowerCase().startsWith(n));a>=0&&(i&&this.setCheckedIndex(a),this.activeIndex=a),this.__pendingTypeAheadTimeout&&window.clearTimeout(this.__pendingTypeAheadTimeout),this.__pendingTypeAheadTimeout=setTimeout(()=>{this.__typedChars=[]},this._typeAheadTimeout)}}_getCheckedElements(){return this.formElements.filter(t=>t.checked)}_setupListboxNode(){this._listboxNode?this.__setupListboxNodeInteractions():this._listboxSlot&&this._listboxSlot.addEventListener("slotchange",()=>{this.__setupListboxNodeInteractions()})}_onListboxContentChanged(){}_teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener("keydown",this._listboxOnKeyDown),this._listboxNode.removeEventListener("click",this._listboxOnClick),this._listboxNode.removeEventListener("keyup",this._listboxOnKeyUp))}_getNextEnabledOption(t,i=1){return this.__getEnabledOption(t,i)}_getPreviousEnabledOption(t,i=-1){return this.__getEnabledOption(t,i)}_onChildActiveChanged({target:t}){t.active===!0&&this.__setChildActive(t)}_listboxOnKeyDown(t){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:i}=t;switch(i){case" ":case"Enter":{if(i===" "&&this._listboxReceivesNoFocus||(i===" "&&t.preventDefault(),!this.formElements[this.activeIndex])||this.formElements[this.activeIndex].disabled)return;this.formElements[this.activeIndex].href&&this.formElements[this.activeIndex].click(),this.setCheckedIndex(this.activeIndex);break}case"ArrowUp":t.preventDefault(),this.orientation==="vertical"&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowLeft":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.orientation==="horizontal"&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowDown":t.preventDefault(),this.orientation==="vertical"&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"ArrowRight":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.orientation==="horizontal"&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"Home":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.activeIndex=this._getNextEnabledOption(0,0);break;case"End":if(this._listboxReceivesNoFocus)return;t.preventDefault(),this.activeIndex=this._getPreviousEnabledOption(this.formElements.length-1,0);break;default:this._noTypeAhead||this._handleTypeAhead(t,{setAsChecked:this.selectionFollowsFocus&&!this.multipleChoice})}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(i)&&this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex)}_listboxOnClick(t){}_listboxOnKeyUp(t){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:i}=t;switch(i){case"ArrowUp":case"ArrowDown":case"Home":case"End":case"Enter":t.preventDefault()}}_onLabelClick(){this._listboxNode.focus()}_scrollIntoView(t,i){t.scrollIntoView({behavior:"smooth",block:"nearest"})}__setupEventListeners(){this._listboxNode.addEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.addEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__teardownEventListeners(){this._listboxNode.removeEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.removeEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__setChildActive(t){if(this.formElements.forEach(i=>{i.active=t===i}),!t){this._activeDescendantOwnerNode.removeAttribute("aria-activedescendant");return}this._activeDescendantOwnerNode.setAttribute("aria-activedescendant",t.id),this._scrollIntoView(t,this._scrollTargetNode)}_uncheckChildren(t=[]){const i=Array.isArray(t)?t:[t];this.formElements.forEach(s=>{i.includes(s)||(s.checked=!1)})}__onChildCheckedChanged(t){const{target:i}=t;t.stopPropagation&&t.stopPropagation(),i.checked&&!this.multipleChoice&&this._uncheckChildren(i)}__setAttributeForAllFormElements(t,i){this.formElements.forEach(s=>{s.setAttribute(t,i)})}__proxyChildModelValueChanged(t){t.stopPropagation&&t.stopPropagation(),this.__onChildCheckedChanged(t),this.requestUpdate("modelValue",this._oldModelValue),t.detail&&t.detail.formPath&&this.dispatchEvent(new CustomEvent("model-value-changed",{detail:{formPath:t.detail.formPath,isTriggeredByUser:t.detail.isTriggeredByUser||this._isHandlingUserInput,element:t.target}})),this._oldModelValue=this.modelValue}__getEnabledOption(t,i){const s=r=>i===1?r<this.formElements.length:r>=0;for(let r=t+i;s(r);r+=i)if(this.formElements[r]&&!this.formElements[r].hasAttribute("aria-hidden"))return r;if(this.rotateKeyboardNavigation){const r=i===-1?this.formElements.length-1:0;for(let n=r;s(n);n+=i)if(this.formElements[n]&&!this.formElements[n].hasAttribute("aria-hidden"))return n}return t}__moveOptionsToListboxNode(){const t=this.shadowRoot.getElementById("options-outlet");t&&(ho(this,this._listboxNode),t.addEventListener("slotchange",()=>{ho(this,this._listboxNode)}))}__preventScrollingWithArrowKeys(t){if(this.disabled)return;const{key:i}=t;switch(i){case"ArrowUp":case"ArrowDown":case"Home":case"End":t.preventDefault()}}__setupListboxNodeInteractions(){this._listboxNode.setAttribute("role","listbox"),this._listboxNode.setAttribute("aria-orientation",this.orientation),this._listboxNode.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this._listboxNode.setAttribute("tabindex","0"),this._listboxNode.addEventListener("click",this._listboxOnClick),this._listboxNode.addEventListener("keyup",this._listboxOnKeyUp),this._listboxNode.addEventListener("keydown",this._listboxOnKeyDown),this._scrollTargetNode.addEventListener("keydown",this.__preventScrollingWithArrowKeys)}__requestOptionsToBeDisabled(){this.formElements.forEach(t=>{t.makeRequestToBeDisabled&&t.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(t=>{t.retractRequestToBeDisabled&&t.retractRequestToBeDisabled()})}__initInteractionStates(){this.initInteractionState()}},mn=B(_n);class Gi extends mn(Fi(Di(wt(D)))){get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}class vn extends xt(Bi($i(ke(D)))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[T`
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
      `]}get slots(){return{}}constructor(){super(),this.active=!1,this.__onClick=this.__onClick.bind(this),this.__registerEventListeners()}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="active"&&this.active!==t&&this.dispatchEvent(new Event("active-changed",{bubbles:!0}))}updated(e){super.updated(e),e.has("checked")&&this.setAttribute("aria-selected",`${this.checked}`),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}render(){return u`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}__registerEventListeners(){this.addEventListener("click",this.__onClick)}__unRegisterEventListeners(){this.removeEventListener("click",this.__onClick)}__onClick(){if(this.disabled)return;const e=this._parentFormGroup;this._isHandlingUserInput=!0,e&&e.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}}const bn=T`
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
`;class ce{static __createGlobalStyleNode(){const e=document.createElement("style");return e.setAttribute("data-overlays",""),e.textContent=bn.cssText,document.head.appendChild(e),e}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this.__siblingsInert=!1,this.__blockingMap=new WeakMap,ce.__globalStyleNode||(ce.__globalStyleNode=ce.__createGlobalStyleNode())}add(e){if(this.list.find(t=>e===t))throw new Error("controller instance is already added");return this.list.push(e),e}remove(e){if(!this.list.find(t=>e===t))throw new Error("could not find controller to remove");this.__list=this.list.filter(t=>t!==e),this.__shownList=this.shownList.filter(t=>t!==e)}show(e){this.list.find(t=>e===t)&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach((t,i)=>{t.elevation=i+1})}hide(e){if(!this.list.find(t=>e===t))throw new Error("could not find controller to hide");this.__shownList=this.shownList.filter(t=>t!==e)}teardown(){this.list.forEach(e=>{e.teardown()}),this.__list=[],this.__shownList=[],this.__siblingsInert=!1,ce.__globalStyleNode&&(document.head.removeChild(ce.__globalStyleNode),ce.__globalStyleNode=void 0)}get siblingsInert(){return this.__siblingsInert}disableTrapsKeyboardFocusForAll(){this.shownList.forEach(e=>{e.trapsKeyboardFocus===!0&&e.disableTrapsKeyboardFocus&&e.disableTrapsKeyboardFocus({findNewTrap:!1})})}informTrapsKeyboardFocusGotEnabled(e){this.siblingsInert===!1&&e==="global"&&(this.__siblingsInert=!0)}informTrapsKeyboardFocusGotDisabled({disabledCtrl:e,findNewTrap:t=!0}={}){const i=this.shownList.find(s=>s!==e&&s.trapsKeyboardFocus===!0);i?t&&i.enableTrapsKeyboardFocus():this.siblingsInert===!0&&(this.__siblingsInert=!1)}requestToPreventScroll(){const{isIOS:e,isMacSafari:t}=pt;document.body.classList.add("overlays-scroll-lock"),(e||t)&&document.body.classList.add("overlays-scroll-lock-ios-fix"),e&&document.documentElement.classList.add("overlays-scroll-lock-ios-fix")}requestToEnableScroll(e){if((e?this.shownList.filter(n=>n!==e):this.shownList).some(n=>n.preventsScroll===!0))return;const{isIOS:s,isMacSafari:r}=pt;document.body.classList.remove("overlays-scroll-lock"),(s||r)&&document.body.classList.remove("overlays-scroll-lock-ios-fix"),s&&document.documentElement.classList.remove("overlays-scroll-lock-ios-fix")}requestToShowOnly(e){const t=this.shownList.filter(i=>i!==e);t.forEach(i=>i.hide()),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){this.__blockingMap.has(e)&&this.__blockingMap.get(e).forEach(i=>i.show())}}ce.__globalStyleNode=void 0;function gn(){if(!Pe.has("@lion/ui::overlays::0.x")){const o=new ce;Pe.set("@lion/ui::overlays::0.x",o)}return Pe.get("@lion/ui::overlays::0.x")}const yn=Ho(gn);function bi(){let o=document.activeElement||document.body;for(;o&&o.shadowRoot&&o.shadowRoot.activeElement;)o=o.shadowRoot.activeElement;return o}const vo=({visibility:o,display:e})=>o!=="hidden"&&e!=="none",xn=({display:o})=>o==="contents";function wn(o){if(!o||!o.isConnected||!vo(o.style))return!1;const e=window.getComputedStyle(o);return vo(e)?xn(e)?!0:!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length):!1}function kn(o,e){const t=Math.max(o.tabIndex,0),i=Math.max(e.tabIndex,0);return t===0||i===0?i>t:t>i}function Cn(o,e){const t=[];for(;o.length>0&&e.length>0;)kn(o[0],e[0])?t.push(e.shift()):t.push(o.shift());return[...t,...o,...e]}function gi(o){const e=o.length;if(e<2)return o;const t=Math.ceil(e/2),i=gi(o.slice(0,t)),s=gi(o.slice(t));return Cn(i,s)}const ei="matches"in Element.prototype?"matches":"msMatchesSelector";function En(o){return o[ei]("input, select, textarea, button, object")?o[ei](":not([disabled])"):o[ei]("a[href], area[href], iframe, [tabindex], [contentEditable]")}function Nn(o){return En(o)?Number(o.getAttribute("tabindex")||0):-1}function Sn(o){if(o.localName==="slot")return o.assignedNodes({flatten:!0});const{children:e}=o.shadowRoot||o;return e||[]}function On(o){return o.nodeType!==Node.ELEMENT_NODE?!1:o.localName==="slot"?!0:wn(o)}function rs(o,e){if(!On(o))return!1;const t=o,i=Nn(t);let s=i>0;i>=0&&e.push(t);const r=Sn(t);for(let n=0;n<r.length;n+=1)s=rs(r[n],e)||s;return s}function ns(o){const e=[];return rs(o,e)?gi(e):e}function je(o,e,t={}){function i(f){return"getAttribute"in f}function s(f){if(!i(f))return null;const g=f.getAttribute("slot");let v=null;if(g){const k=t[g];k&&(v=k.filter(O=>(O==null?void 0:O.element)===f)[0]||null)}return v}const r=s(o);if(r)return r.deepContains;function n(f){if(!i(o))return;const g=o.getAttribute("slot");g&&(t[g]=t[g]||[],t[g].push({element:o,deepContains:f}))}let a=o.contains(e);if(a)return n(!0),!0;function c(f){return f.tagName==="SLOT"}function h(f){return c(f)?f.assignedElements():[]}function _(f){return f.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function b(f){let g=!1;for(let v=0;v<f.length;v+=1){const k=f[v];if(k&&(i(k)||_(k))&&je(k,e,t)){g=!0;break}}return g}function p(f){for(let g=0;g<f.children.length;g+=1){const v=f.children[g],k=s(v);if(k){a=k.deepContains||a;break}const O=h(v),I=[v.shadowRoot,...O];if(b(I)){a=!0;break}v.children.length>0&&p(v)}}return o instanceof HTMLElement&&o.shadowRoot&&(a=je(o.shadowRoot,e,t),a)?(n(!0),!0):(p(o),n(a),a)}const An={tab:9};function Tn(o,e){const t=ns(o);let i;t.length>=2?i=[t[0],t[t.length-1]]:t.length===1?i=[t[0],t[0]]:i=[o,o],e.shiftKey&&i.reverse();const[s,r]=i,n=bi();n===o||t.includes(n)&&r!==n||(e.preventDefault(),s.focus())}function Ln(o){const e=ns(o),t=e.find(p=>p.hasAttribute("autofocus"))||o;let i,s;t===o&&(o.tabIndex=-1,o.style.setProperty("outline","none")),t.focus();function r(p){p.keyCode===An.tab&&Tn(o,p)}function n(){i=document.createElement("div"),i.style.display="none",i.setAttribute("data-is-tab-detection-element",""),o.insertBefore(i,o.children[0]),s=new MutationObserver(p=>{for(const f of p)if(f.type==="childList"){const g=!Array.from(o.children).find(k=>k.hasAttribute("data-is-tab-detection-element")),v=Array.from(f.addedNodes).find(k=>k instanceof HTMLElement&&k.hasAttribute("data-is-tab-detection-element"));g&&!v&&(s.disconnect(),n())}}),s.observe(o,{childList:!0})}function a(){return i.compareDocumentPosition(document.activeElement)===Node.DOCUMENT_POSITION_PRECEDING}function c({resetToRoot:p=!1}={}){if(je(o,bi()))return;let f;p?f=o:f=e[a()?0:e.length-1],f&&f.focus()}function h(){window.removeEventListener("focusin",h),c()}function _(){setTimeout(()=>{je(o,bi())||c({resetToRoot:!0})}),window.addEventListener("focusin",h)}function b(){window.removeEventListener("keydown",r),window.removeEventListener("focusin",h),window.removeEventListener("focusout",_),s.disconnect(),Array.from(o.children).includes(i)&&o.removeChild(i),o.style.removeProperty("outline")}return window.addEventListener("keydown",r),window.addEventListener("focusout",_),n(),{disconnect:b}}const bo=T`
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
`,We={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},ti=new WeakMap;function Fn(o){return Array.from(o.cssRules).map(e=>e.cssText).join("")}function Vn(o,e,{teardown:t=!1}={}){const i=o===document?document.body:o,s=e.cssText||Fn(e);if(t){const r=Array.from(i.querySelectorAll("style"));for(const n of r)if(n.textContent===s){n.remove();break}}else{const r=document.createElement("style"),n=window.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s,i.appendChild(r)}}function In(o,e,{teardown:t=!1}={}){let i=!1;o&&!ti.has(o)&&ti.set(o,[]);const s=ti.get(o)??[],r=s.find(n=>e===n);return r&&t?s.splice(s.indexOf(e),1):!r&&!t?s.push(e):(r&&!t||!r&&t)&&(i=!0),{haltFurtherExecution:i}}function zn(o,e,{teardown:t=!1}={}){const{haltFurtherExecution:i}=In(o,e,{teardown:t});if(i)return;if(!We.supportsAdoptingStyleSheets||pt.isIOS){Vn(o,e,{teardown:t});return}const s=e instanceof CSSStyleSheet?e:e.styleSheet;if(!s)throw new Error("Please provide a CSSResultOrNative style");t?o.adoptedStyleSheets.includes(s)&&o.adoptedStyleSheets.splice(o.adoptedStyleSheets.indexOf(s),1):o.adoptedStyleSheets=[...o.adoptedStyleSheets,s]}function Mn(o,e,{teardown:t=!1}={}){for(const i of e)We.adoptStyle(o,i,{teardown:t})}We.adoptStyle=zn;We.adoptStyles=Mn;function $n({wrappingDialogNodeL1:o,contentWrapperNodeL2:e,contentNodeL3:t}){if(!(e.isConnected||t.isConnected))throw new Error('[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.');let i;const s=document.createComment("tempMarker");e.isConnected?(i=e.parentElement||e.getRootNode(),i.insertBefore(s,e),o.appendChild(e)):t.assignedSlot?(i=t.assignedSlot.parentElement||t.assignedSlot.getRootNode(),i.insertBefore(s,t.assignedSlot),o.appendChild(e),e.appendChild(t.assignedSlot)):(i=t.parentElement||t.getRootNode(),i.insertBefore(s,t),o.appendChild(e),e.appendChild(t)),i.insertBefore(o,s),i==null||i.removeChild(s)}async function Rn(){return w(()=>import("./popper.CBQhmXeE.js"),[])}const go=new WeakMap;var gt,yi,Ue;const De=class De extends EventTarget{constructor(t={},i=yn){super();ie(this,gt);ie(this,Ue,t=>{t.key!=="Escape"||t.composedPath().includes(this.contentNode)||je(this.contentNode,t.target)||this.hide()});this.manager=i,this.__sharedConfig=t,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:t.contentNode,contentWrapperNode:t.contentWrapperNode,invokerNode:t.invokerNode,backdropNode:t.backdropNode,referenceNode:void 0,elementToFocusAfterHide:t.invokerNode,inheritsReferenceWidth:"none",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:"description",visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:"top",strategy:"fixed",modifiers:[{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:8}},{name:"flip",options:{boundariesElement:"viewport",padding:16}},{name:"offset",enabled:!0,options:{offset:[0,8]}},{name:"arrow",enabled:!1}]},viewportConfig:{placement:"center"},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(t),this.__hasActiveTrapsKeyboardFocus=!1,this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){var t;return(t=this.config)==null?void 0:t.placementMode}get invokerNode(){var t;return(t=this.config)==null?void 0:t.invokerNode}get referenceNode(){var t;return(t=this.config)==null?void 0:t.referenceNode}get contentNode(){var t;return(t=this.config)==null?void 0:t.contentNode}get contentWrapperNode(){var t;return this.__contentWrapperNode||((t=this.config)==null?void 0:t.contentWrapperNode)}get backdropNode(){var t;return this.__backdropNode||((t=this.config)==null?void 0:t.backdropNode)}get elementToFocusAfterHide(){var t;return this.__elementToFocusAfterHide||((t=this.config)==null?void 0:t.elementToFocusAfterHide)}get hasBackdrop(){var t;return!!this.backdropNode||((t=this.config)==null?void 0:t.hasBackdrop)}get isBlocking(){var t;return(t=this.config)==null?void 0:t.isBlocking}get preventsScroll(){var t;return(t=this.config)==null?void 0:t.preventsScroll}get trapsKeyboardFocus(){var t;return(t=this.config)==null?void 0:t.trapsKeyboardFocus}get hidesOnEsc(){var t;return(t=this.config)==null?void 0:t.hidesOnEsc}get hidesOnOutsideClick(){var t;return(t=this.config)==null?void 0:t.hidesOnOutsideClick}get hidesOnOutsideEsc(){var t;return(t=this.config)==null?void 0:t.hidesOnOutsideEsc}get inheritsReferenceWidth(){var t;return(t=this.config)==null?void 0:t.inheritsReferenceWidth}get handlesAccessibility(){var t;return(t=this.config)==null?void 0:t.handlesAccessibility}get isTooltip(){var t;return(t=this.config)==null?void 0:t.isTooltip}get isAlertDialog(){var t;return(t=this.config)==null?void 0:t.isAlertDialog}get invokerRelation(){var t;return(t=this.config)==null?void 0:t.invokerRelation}get popperConfig(){var t;return(t=this.config)==null?void 0:t.popperConfig}get viewportConfig(){var t;return(t=this.config)==null?void 0:t.viewportConfig}get visibilityTriggerFunction(){var t;return(t=this.config)==null?void 0:t.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(t){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+t}`}get elevation(){var t;return Number((t=this.contentWrapperNode)==null?void 0:t.style.zIndex)}updateConfig(t){var i,s,r;this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...t,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...t.popperConfig||{},modifiers:[...((i=this._defaultConfig.popperConfig)==null?void 0:i.modifiers)||[],...((s=this.__sharedConfig.popperConfig)==null?void 0:s.modifiers)||[],...((r=t.popperConfig)==null?void 0:r.modifiers)||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,le(this,gt,yi).call(this)||this.manager.add(this)}__validateConfiguration(t){if(!t.placementMode)throw new Error('[OverlayController] You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(t.placementMode))throw new Error(`[OverlayController] "${t.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!t.contentNode)throw new Error("[OverlayController] You need to provide a .contentNode");if(t.isTooltip&&!t.handlesAccessibility)throw new Error("[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled")}_init(){this.__contentHasBeenInitialized||(this.__initContentDomStructure(),this.__contentHasBeenInitialized=!0),this.contentWrapperNode.removeAttribute("style"),this.contentWrapperNode.removeAttribute("class"),this.placementMode==="local"&&(De.popperModule||(De.popperModule=Rn())),this.__handleOverlayStyles({phase:"init"}),this._handleFeatures({phase:"init"})}__handleOverlayStyles({phase:t}){var s;const i=(s=this.contentWrapperNode)==null?void 0:s.getRootNode();t==="init"?We.adoptStyle(i,bo):t==="teardown"&&We.adoptStyle(i,bo,{teardown:!0})}__initContentDomStructure(){var s,r;const t=document.createElement((s=this.config)!=null&&s._noDialogEl?"div":"dialog");t.setAttribute("role","none"),t.setAttribute("data-overlay-outer-wrapper",""),t.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=t,(r=this.config)!=null&&r.contentWrapperNode||(this.__contentWrapperNode=document.createElement("div")),this.contentWrapperNode.setAttribute("data-id","content-wrapper"),$n({wrappingDialogNodeL1:t,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),t.open=!0,this.isTooltip&&t.setAttribute("tabindex","-1"),this.__wrappingDialogNode.style.display="none",this.contentWrapperNode.style.zIndex="1",getComputedStyle(this.contentNode).position==="absolute"&&(this.contentNode.style.position="static"),HTMLDialogElement&&"closedBy"in HTMLDialogElement.prototype?t.closedBy="none":(t.addEventListener("keydown",n=>{n.key==="Escape"&&n.preventDefault()}),t.addEventListener("keyup",n=>{n.key==="Escape"&&n.preventDefault()}),t.addEventListener("cancel",n=>{n.stopPropagation()}),t.addEventListener("close",n=>{n.stopPropagation()}))}_handleZIndex({phase:t}){if(this.placementMode==="local"&&t==="setup"){const i=Number(getComputedStyle(this.contentNode).zIndex);(i<1||Number.isNaN(i))&&(this.contentNode.style.zIndex="1")}}__setupTeardownAccessibility({phase:t}){if(t==="init"){this.__storeOriginalAttrs(this.contentNode,["role","id"]);const i=this.trapsKeyboardFocus;if(this.invokerNode){const s=["aria-labelledby","aria-describedby"];i||s.push("aria-expanded"),this.__storeOriginalAttrs(this.invokerNode,s)}this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation==="label"?"aria-labelledby":"aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&!i&&this.invokerNode.setAttribute("aria-expanded",`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute("role","alertdialog"):this.contentNode.getAttribute("role")||this.contentNode.setAttribute("role","dialog"))}else t==="teardown"&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(t,i){const s={};i.forEach(r=>{s[r]=t.getAttribute(r)}),this.__originalAttrs.set(t,s)}__restoreOriginalAttrs(){for(const[t,i]of this.__originalAttrs)Object.entries(i).forEach(([s,r])=>{r!==null?t.setAttribute(s,r):t.removeAttribute(s)});this.__originalAttrs.clear()}get isShown(){var t;return((t=this.__wrappingDialogNode)==null?void 0:t.style.display)!=="none"}async show(t=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(s=>{this._showResolve=s}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}const i=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(i),i.defaultPrevented||("HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display="",this._keepBodySize({phase:"before-show"}),await this._handleFeatures({phase:"show"}),this._keepBodySize({phase:"show"}),await this._handlePosition({phase:"show"}),this.__elementToFocusAfterHide=t,this.dispatchEvent(new Event("show")),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:t}){if(this.placementMode==="global"){const i=`overlays__overlay-container--${this.viewportConfig.placement}`;t==="show"?(this.contentWrapperNode.classList.add("overlays__overlay-container"),this.contentWrapperNode.classList.add(i),this.contentNode.classList.add("overlays__overlay")):t==="hide"&&(this.contentWrapperNode.classList.remove("overlays__overlay-container"),this.contentWrapperNode.classList.remove(i),this.contentNode.classList.remove("overlays__overlay"))}else this.placementMode==="local"&&t==="show"&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:t}){var i,s;if(this.preventsScroll)switch(t){case"before-show":this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case"show":{if(window.getComputedStyle){const h=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(h.getPropertyValue("margin-right"),10),this.__bodyMarginBottom=parseInt(h.getPropertyValue("margin-bottom"),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;const r=document.body.clientWidth-this.__bodyClientWidth,n=document.body.clientHeight-this.__bodyClientHeight,a=this.__bodyMarginRight+r,c=this.__bodyMarginBottom+n;(i=window.CSS)!=null&&i.number&&((s=document.body.attributeStyleMap)!=null&&s.set)?(document.body.attributeStyleMap.set("margin-right",CSS.px(a)),document.body.attributeStyleMap.set("margin-bottom",CSS.px(c))):(document.body.style.marginRight=`${a}px`,document.body.style.marginBottom=`${c}px`);break}case"hide":document.body.style.marginRight=this.__bodyMarginRightInline||"",document.body.style.marginBottom=this.__bodyMarginBottomInline||"";break}}async hide(){if(this._hideComplete=new Promise(i=>{this._hideResolve=i}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.manager.hide(this),!this.isShown){this._hideResolve();return}const t=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),"HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display="none",this._handleFeatures({phase:"hide"}),this._keepBodySize({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus()),this._hideResolve()}async transitionHide(t){}async _transitionHide({backdropNode:t,contentNode:i}){await this.transitionHide({backdropNode:t,contentNode:i}),this._handlePosition({phase:"hide"}),t&&t.classList.remove("overlays__backdrop--animation-in")}async transitionShow(t){}async _transitionShow(t){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),t.backdropNode&&t.backdropNode.classList.add("overlays__backdrop--animation-in")}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:"nearest"})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:t}){this._handleZIndex({phase:t}),this.preventsScroll&&this._handlePreventsScroll({phase:t}),this.isBlocking&&this._handleBlocking({phase:t}),this.hasBackdrop&&this._handleBackdrop({phase:t}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:t}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:t}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:t}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:t}),this.handlesAccessibility&&this._handleAccessibility({phase:t}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:t})}_handleVisibilityTriggers({phase:t}){typeof this.visibilityTriggerFunction=="function"&&(t==="init"&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:t,controller:this})),this.__visibilityTriggerHandler[t]&&this.__visibilityTriggerHandler[t]())}_handlePreventsScroll({phase:t}){switch(t){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll();break;case"teardown":this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:t}){switch(t){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:t}){var i;switch(t){case"init":{this.__backdropInitialized||((i=this.config)!=null&&i.backdropNode||(this.__backdropNode=document.createElement("div"),this.__backdropNode.classList.add("overlays__backdrop")),this.__wrappingDialogNode.prepend(this.backdropNode),this.__backdropInitialized=!0);break}case"show":this.config.hasBackdrop&&this.backdropNode.classList.add("overlays__backdrop--visible"),this.__hasActiveBackdrop=!0;break;case"hide":case"teardown":this.backdropNode.classList.remove("overlays__backdrop--visible"),this.__hasActiveBackdrop=!1;break}}get hasActiveTrapsKeyboardFocus(){return this.__hasActiveTrapsKeyboardFocus}_handleTrapsKeyboardFocus({phase:t}){t==="show"?("showModal"in this.__wrappingDialogNode&&(this.__wrappingDialogNode.close(),this.__wrappingDialogNode.showModal()),this.enableTrapsKeyboardFocus()):(t==="hide"||t==="teardown")&&this.disableTrapsKeyboardFocus()}enableTrapsKeyboardFocus(){if(this.__hasActiveTrapsKeyboardFocus)return;this.manager&&this.manager.disableTrapsKeyboardFocusForAll(),!!this.contentNode.shadowRoot&&console.warn("[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root"),this._containFocusHandler=Ln(this.contentNode),this.__hasActiveTrapsKeyboardFocus=!0,this.manager&&this.manager.informTrapsKeyboardFocusGotEnabled(this.placementMode)}disableTrapsKeyboardFocus({findNewTrap:t=!0}={}){this.__hasActiveTrapsKeyboardFocus&&(this._containFocusHandler&&(this._containFocusHandler.disconnect(),this._containFocusHandler=void 0),this.__hasActiveTrapsKeyboardFocus=!1,this.manager&&this.manager.informTrapsKeyboardFocusGotDisabled({disabledCtrl:this,findNewTrap:t}))}__cancelHandler(t){t.preventDefault()}__escKeyHandler(t){if(t.key!=="Escape"||go.has(t)||!this.isShown&&this.__escKeyHandlerCalled)return;(t.composedPath().includes(this.contentNode)||this.invokerNode&&t.composedPath().includes(this.invokerNode)||je(this.contentNode,t.target))&&(this.__escKeyHandlerCalled=!0,this.hide(),go.set(t,this))}_handleHidesOnEsc({phase:t}){t==="init"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)),t==="show"&&(this.__escKeyHandlerCalled=!1),t==="teardown"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:t}){t==="init"?(document.removeEventListener("keyup",H(this,Ue)),document.addEventListener("keyup",H(this,Ue))):t==="teardown"&&document.removeEventListener("keyup",H(this,Ue))}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode==="global")return;const t=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case"max":this.contentWrapperNode.style.maxWidth=t;break;case"full":this.contentWrapperNode.style.width=t;break;case"min":this.contentWrapperNode.style.minWidth=t,this.contentWrapperNode.style.width="auto";break}}_handleHidesOnOutsideClick({phase:t}){const i=t==="show"?"addEventListener":"removeEventListener";if(t==="show"){let s=!1,r=!1;this.__onInsideMouseDown=()=>{s=!0},this.__onInsideMouseUp=()=>{r=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!s&&!r&&this.hide(),s=!1,r=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[i]("mousedown",this.__onInsideMouseDown,!0),this.contentWrapperNode[i]("mouseup",this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[i]("mousedown",this.__onInsideMouseDown,!0),this.invokerNode[i]("mouseup",this.__onInsideMouseUp,!0)),document.documentElement[i]("mouseup",this.__onDocumentMouseUp,!0),window[i]("blur",this.__onWindowBlur)}_handleAccessibility({phase:t}){(t==="init"||t==="teardown")&&this.__setupTeardownAccessibility({phase:t});const i=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!i&&this.invokerNode.setAttribute("aria-expanded",`${t==="show"}`)}teardown(){this.__handleOverlayStyles({phase:"teardown"}),this._handleFeatures({phase:"teardown"}),le(this,gt,yi).call(this)&&this.manager.remove(this)}async __createPopperInstance(){var t;if(this._popper&&(this._popper.destroy(),this._popper=void 0),De.popperModule!==void 0){const{createPopper:i}=await De.popperModule;this._popper=i(this._referenceNode,this.contentWrapperNode,{...(t=this.config)==null?void 0:t.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute("aria-disabled")==="true":!1}};gt=new WeakSet,yi=function(){return!!this.manager.list.find(t=>this===t)},Ue=new WeakMap;let Ft=De;Ft.popperModule=void 0;function as(o,e){if(typeof o!="object"||typeof e!="object"||o===null||e===null)return o===e;const t=Object.keys(o),i=Object.keys(e);if(t.length!==i.length)return!1;const s=r=>as(o[r],e[r]);return t.every(s)}const Dn=o=>{var e,t,i;return i=class extends o{constructor(){super();ie(this,t,!1);this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}static get properties(){return{opened:{type:Boolean,reflect:!0}}}get config(){return this.__config}set config(n){const a=!as(this.config,n);this._overlayCtrl&&a&&this._overlayCtrl.updateConfig(n),this.__config=n,this._overlayCtrl&&a&&this.__syncToOverlayController()}requestUpdate(n,a,c){super.requestUpdate(n,a,c),n==="opened"&&this.opened!==a&&this.dispatchEvent(new CustomEvent("opened-changed",{detail:{opened:this.opened}}))}_defineOverlay({contentNode:n,invokerNode:a,referenceNode:c,backdropNode:h,contentWrapperNode:_}){var p,f,g,v;const b=this._defineOverlayConfig()||{};return new Ft({contentNode:n,invokerNode:a,referenceNode:c,backdropNode:h,contentWrapperNode:_,...b,...this.config,popperConfig:{...b.popperConfig||{},...((p=this.config)==null?void 0:p.popperConfig)||{},modifiers:[...((f=b.popperConfig)==null?void 0:f.modifiers)||[],...((v=(g=this.config)==null?void 0:g.popperConfig)==null?void 0:v.modifiers)||[]]}})}_defineOverlayConfig(){return{placementMode:"local"}}updated(n){super.updated(n),n.has("opened")&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=n=>{n.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(H(this,t)||(this._setupOverlayCtrl(),re(this,t,!0)))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),re(this,t,!1))}get _overlayInvokerNode(){return Array.from(this.children).find(n=>n.slot==="invoker")}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||(this.__cachedOverlayBackdropNode=Array.from(this.children).find(n=>n.slot==="backdrop")),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||(this._cachedOverlayContentNode=Array.from(this.children).find(n=>n.slot==="content")||this.config.contentNode),this._cachedOverlayContentNode}get _overlayContentWrapperNode(){var n;return(n=this.shadowRoot)==null?void 0:n.querySelector("#overlay-content-node-wrapper")}_setupOverlayCtrl(){if(H(this,t))return;const n={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(n):this._overlayCtrl=this._defineOverlay(n),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(n){this.__blockSyncToOverlayCtrl=!0,this.opened=n,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=n=>{const a=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(a),a.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),n.preventDefault())},this.__onBeforeHide=n=>{const a=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(a),a.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),n.preventDefault())},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){const n=this._overlayCtrl;n.placementMode==="local"&&n._popper&&n._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}},t=new WeakMap,K(i,"enabledWarnings",((e=Me(i,i,"enabledWarnings"))==null?void 0:e.filter(n=>n!=="change-in-update"))||[]),i},ls=B(Dn);function Pn(){return{visibilityTriggerFunction:({controller:o})=>{function e(){o._hasDisabledInvoker()||o.toggle()}return{init:()=>{var t;(t=o.invokerNode)==null||t.addEventListener("click",e)},teardown:()=>{var t;(t=o.invokerNode)==null||t.removeEventListener("click",e)}}}}}const cs=()=>({placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:"bottom-start",modifiers:[{name:"offset",enabled:!1}]},handlesAccessibility:!0,...Pn()}),tt=new WeakMap;function ds(o,e){Array.from(o.childNodes).forEach(t=>{if(t.nodeName==="#text"){const i=new RegExp(`^(.*?)(${e})(.*)$`,"i"),s=t.nodeValue.match(i);if(s){const r=document.createTextNode(s[1]);o.appendChild(r);const n=document.createElement("b");n.textContent=s[2],o.appendChild(n);const a=document.createTextNode(s[3]);o.appendChild(a),o.removeChild(t),tt.set(o,()=>{o.appendChild(t),o.contains(r)&&r.parentNode!==null&&r.parentNode.removeChild(r),o.contains(n)&&n.parentNode!==null&&n.parentNode.removeChild(n),o.contains(a)&&a.parentNode!==null&&a.parentNode.removeChild(a)})}}else ds(t,e)})}function hs(o){tt.has(o)&&tt.get(o)(),Array.from(o.childNodes).forEach(e=>{e.nodeName==="#text"?tt.has(e)&&tt.get(e)():hs(e)})}class Ki extends Be{static get validatorName(){return"MatchesOption"}execute(e,t,i){return(i==null?void 0:i.node.modelValue)instanceof Te}}function Nt(o){return Array.isArray(o)?o:[o]}const Bn=o=>class extends $t(o){static get properties(){return{allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},modelValue:{type:Object}}}get modelValue(){return this.__getChoicesFrom(super.modelValue)}set modelValue(t){if(super.modelValue=t,t==null||t==="")this._customChoices=new Set;else if(this.allowCustomChoice){const i=this.modelValue;this._customChoices=new Set(Nt(t)),this.requestUpdate("modelValue",i)}}get formattedValue(){return this.__getChoicesFrom(super.formattedValue)}set formattedValue(t){if(super.formattedValue=t,t==null)this._customChoices=new Set;else if(this.allowCustomChoice){const i=this.modelValue;this._customChoices=new Set(Nt(t).map(s=>{var r;return((r=this.formElements.find(n=>n.formattedValue===s))==null?void 0:r.modelValue)||s})),this.requestUpdate("modelValue",i)}}get serializedValue(){return this.__getChoicesFrom(super.serializedValue)}set serializedValue(t){if(super.serializedValue=t,t==null)this._customChoices=new Set;else if(this.allowCustomChoice){const i=this.modelValue;this._customChoices=new Set(Nt(t).map(s=>{var r;return((r=this.formElements.find(n=>n.serializedValue===s))==null?void 0:r.modelValue)||s})),this.requestUpdate("modelValue",i)}}get customChoices(){if(!this.allowCustomChoice)return[];const t=this._getCheckedElements();return Array.from(this._customChoices).filter(i=>!t.some(s=>s.choiceValue===i))}constructor(){super(),this.allowCustomChoice=!1,this._customChoices=new Set}__getChoicesFrom(t){const i=t;return this.allowCustomChoice?this.multipleChoice?[...Nt(i),...this.customChoices]:i===""?this._customChoices.values().next().value||"":i:i}_isEmpty(){return super._isEmpty()&&this._customChoices.size===0}clear(){this._customChoices=new Set,super.clear()}parser(t){return this.allowCustomChoice&&Array.isArray(t)?t.filter(i=>i.trim()!==""):t}},Un=B(Bn),ii=new WeakMap;class Hn extends jo(ls(Un(Gi))){static get properties(){return{autocomplete:{type:String,reflect:!0},matchMode:{type:String,attribute:"match-mode"},showAllOnEmpty:{type:Boolean,attribute:"show-all-on-empty"},requireOptionMatch:{type:Boolean},allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},__shouldAutocompleteNextUpdate:Boolean}}static get styles(){return[...super.styles,T`
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
      `]}static get localizeNamespaces(){return[{"lion-combobox":e=>{switch(e){case"bg-BG":case"bg":return w(()=>import("./bg.CnMxkYth.js"),[]);case"cs-CZ":case"cs":return w(()=>import("./cs.wLKWYoEd.js"),[]);case"de-AT":case"de-DE":case"de":return w(()=>import("./de.BMTIiI_u.js"),[]);case"en-AU":case"en-GB":case"en-PH":case"en-US":case"en":return w(()=>import("./en.bt6AHwUY.js"),[]);case"es-ES":case"es":return w(()=>import("./es.DtqAq6rp.js"),[]);case"fr-FR":case"fr-BE":case"fr":return w(()=>import("./fr.TvxLRXi9.js"),[]);case"hu-HU":case"hu":return w(()=>import("./hu.LTktcuIp.js"),[]);case"it-IT":case"it":return w(()=>import("./it.CLQp6VRo.js"),[]);case"nl-BE":case"nl-NL":case"nl":return w(()=>import("./nl.BPWGiqq3.js"),[]);case"pl-PL":case"pl":return w(()=>import("./pl.C-Y5rsX-.js"),[]);case"ro-RO":case"ro":return w(()=>import("./ro.DQbjJcYj.js"),[]);case"ru-RU":case"ru":return w(()=>import("./ru.DWmtva8q.js"),[]);case"sk-SK":case"sk":return w(()=>import("./sk.b2xDu6DA.js"),[]);case"uk-UA":case"uk":return w(()=>import("./uk.CHbv7RzQ.js"),[]);case"zh-CN":case"zh":return w(()=>import("./zh.CKc3I4YQ.js"),[]);default:return w(()=>import("./en.bt6AHwUY.js"),[])}}},...super.localizeNamespaces]}get modelValue(){const e=super.modelValue;return e!==""?e:this.parser(this.value)}set modelValue(e){super.modelValue=e}get value(){var e;return((e=this._inputNode)==null?void 0:e.value)||this.__value||""}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}reset(){super.reset(),this.multipleChoice||(this.value=this._initialModelValue),this._resetListboxOptions()}_resetListboxOptions(){this.formElements.forEach((e,t)=>{this._unhighlightMatchedOption(e),!this.showAllOnEmpty||!this.opened?e.style.display="none":(e.style.display="",e.setAttribute("aria-posinset",`${t+1}`),e.setAttribute("aria-setsize",`${this.formElements.length}`),e.removeAttribute("aria-hidden"))})}_inputGroupInputTemplate(){return u`
      <div class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_overlayListboxTemplate(){return u`
      <div
        id="overlay-content-node-wrapper"
        role="dialog"
        aria-label="${this.msgLit("lion-combobox:optionsPopup")}"
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_groupTwoTemplate(){return u` ${super._groupTwoTemplate()} ${this._overlayListboxTemplate()}`}get slots(){return{...super.slots,input:()=>{if(this._ariaVersion==="1.1"){const e=document.createElement("div"),t=document.createElement("input");return t.style.cssText=`
          border: none;
          outline: none;
          width: 100%;
          height: 100%;
          font: inherit;
          background: inherit;
          color: inherit;
          border-radius: inherit;
          box-sizing: border-box;
          padding: 0;`,e.appendChild(t),e}return document.createElement("input")},listbox:super.slots.input}}get _comboboxNode(){return this.querySelector('[slot="input"]')}get _selectionDisplayNode(){return this.querySelector('[slot="selection-display"]')}get _inputNode(){return this._ariaVersion==="1.1"&&this._comboboxNode?this._comboboxNode.querySelector("input")||this._comboboxNode:this._comboboxNode}get _overlayContentNode(){return this._listboxNode}get _overlayReferenceNode(){return this.shadowRoot.querySelector(".input-group__container")}get _overlayInvokerNode(){return this._inputNode}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(e=>e.slot==="listbox")}get _activeDescendantOwnerNode(){return this._inputNode}get requireOptionMatch(){return!this.allowCustomChoice}set requireOptionMatch(e){this.allowCustomChoice=!e}constructor(){super(),this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.requireOptionMatch=!0,this.rotateKeyboardNavigation=!0,this.selectionFollowsFocus=!0,this.defaultValidators.push(new Ki),this._ariaVersion=pt.isChromium?"1.1":"1.0",this._listboxReceivesNoFocus=!0,this._noTypeAhead=!0,this.__prevCboxValueNonSelected="",this.__prevCboxValue="",this.__hadUserIntendsInlineAutoFill=!1,this.__listboxContentChanged=!1,this._onKeyUp=this._onKeyUp.bind(this),this._textboxOnClick=this._textboxOnClick.bind(this),this._textboxOnInput=this._textboxOnInput.bind(this),this._textboxOnKeydown=this._textboxOnKeydown.bind(this)}connectedCallback(){super.connectedCallback(),this._selectionDisplayNode&&(this._selectionDisplayNode.comboboxElement=this),(this.disabled||this.readOnly)&&this.__setComboboxDisabledAndReadOnly()}requestUpdate(e,t,i){if(super.requestUpdate(e,t,i),(e==="disabled"||e==="readOnly")&&this.__setComboboxDisabledAndReadOnly(),e==="modelValue"&&this.modelValue&&this.modelValue!==t&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue))if(this.multipleChoice)this._syncToTextboxMultiple(this.modelValue,this._oldModelValue);else{const s=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]);this._setTextboxValue(s)}}parser(e){return this.requireOptionMatch&&this.checkedIndex===-1&&e!==""&&!Array.isArray(e)?new Te(e):super.parser(e)}__unsyncCheckedIndexOnInputChange(){const e=this._autoSelectCondition(),t=this.formElements[this.checkedIndex];if(!this.multipleChoice&&!e&&t){const i=this._getTextboxValueFromOption(t);this._inputNode.value.startsWith(i)||this.setCheckedIndex(-1)}}updated(e){var t;super.updated(e),e.has("__shouldAutocompleteNextUpdate")&&this.__unsyncCheckedIndexOnInputChange(),e.has("opened")&&(this.opened&&(this.activeIndex=-1),!this.opened&&e.get("opened")!==void 0&&(this.__onOverlayClose(),this.activeIndex=-1)),e.has("autocomplete")&&this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`),e.has("__shouldAutocompleteNextUpdate")&&this.__shouldAutocompleteNextUpdate&&(this._handleAutocompletion(),this.__shouldAutocompleteNextUpdate=!1,this.__listboxContentChanged=!1),typeof((t=this._selectionDisplayNode)==null?void 0:t.onComboboxElementUpdated)=="function"&&this._selectionDisplayNode.onComboboxElementUpdated(e)}matchCondition(e,t){let i=-1;const s=this._getTextboxValueFromOption(e);return typeof s=="string"&&typeof t=="string"&&(i=s.toLowerCase().indexOf(t.toLowerCase())),this.matchMode==="all"?i>-1:i===0}_showOverlayCondition({lastKey:e}){const t=["Tab","Escape"],i=["Enter"];return this.disabled||this.readOnly||e&&(t.includes(e)||!this.multipleChoice&&i.includes(e))?!1:this.filled||this.showAllOnEmpty||!this.filled&&this.multipleChoice&&this.__prevCboxValueNonSelected?!0:this.opened}_getTextboxValueFromOption(e){return e?e.choiceValue:this.modelValue instanceof Te?this.modelValue.viewValue:this.modelValue}_onListboxContentChanged(){super._onListboxContentChanged(),this.__shouldAutocompleteNextUpdate=!0,this.__listboxContentChanged=!0}_textboxOnInput(e){this.__shouldAutocompleteNextUpdate=!0,this.opened=this._showOverlayCondition({})}_textboxOnKeydown(e){e.key==="Tab"&&(this.opened=!1)}_listboxOnClick(e){super._listboxOnClick(e),this._inputNode.focus(),this.multipleChoice?(this._inputNode.value="",this._resetListboxOptions()):(this.activeIndex=-1,this.opened=!1)}_setTextboxValue(e){this._inputNode&&this._inputNode.value!==e&&(this._inputNode.value=e)}__onOverlayClose(){this.multipleChoice?this._syncToTextboxMultiple(this.modelValue,this._oldModelValue):this.checkedIndex!==-1&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue,{phase:"overlay-close"})&&(this._inputNode.value=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]))}_repropagationCondition(e){return super._repropagationCondition(e)||this.formElements.every(t=>!t.checked)}_onFilterMatch(e,t){this._highlightMatchedOption(e,t),e.style.display=""}_highlightMatchedOption(e,t){if(ds(e,t),e.textContent){const i=document.createElement("span");i.setAttribute("aria-label",e.textContent.replace(/\s+/g," ")),Array.from(e.childNodes).forEach(s=>{i.appendChild(s)}),e.appendChild(i),ii.set(e,()=>{Array.from(i.childNodes).forEach(s=>{e.appendChild(s)}),e.contains(i)&&e.removeChild(i)})}}_onFilterUnmatch(e,t,i){this._unhighlightMatchedOption(e),e.style.display="none"}_unhighlightMatchedOption(e){hs(e),ii.has(e)&&ii.get(e)()}__computeUserIntendsAutoFill({prevValue:e,curValue:t}){const i=e.length<t.length,s=e.length&&t.length&&e[0].toLowerCase()!==t[0].toLowerCase();return i||s||this.__listboxContentChanged&&this.__hadUserIntendsInlineAutoFill}_handleAutocompletion(){const t=!(this._inputNode.selectionStart===this._inputNode.selectionEnd)&&this._inputNode.value.length!==this._inputNode.selectionStart,i=this._inputNode.value,s=this._inputNode.selectionStart,r=t&&s?i.slice(0,s):i,n=t||this.__hadSelectionLastAutofill?this.__prevCboxValueNonSelected:this.__prevCboxValue,a=!r,c=[];let h=!1;const _=this.__computeUserIntendsAutoFill({prevValue:n,curValue:r}),b=this.autocomplete==="both"||this.autocomplete==="inline",p=this._autoSelectCondition(),f=this.autocomplete==="inline"||this.autocomplete==="none";this.formElements.forEach((v,k)=>{const O=this.matchCondition(v,r);let I=!1;if(a?I=this.showAllOnEmpty:I=f||O,p&&!h&&O&&!v.disabled){const R=()=>{this.activeIndex=k,this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex),h=!0};if(_)if(b){const A=this._getTextboxValueFromOption(v);typeof A=="string"&&A!==""&&typeof r=="string"&&r!==""&&A.toLowerCase().indexOf(r.toLowerCase())===0&&(this.__textboxInlineComplete(v),R())}else R()}v.onFilterUnmatch?v.onFilterUnmatch(r,n):this._onFilterUnmatch(v,r,n),v.setAttribute("aria-hidden","true"),v.removeAttribute("aria-posinset"),v.removeAttribute("aria-setsize"),I&&(c.push(v),v.onFilterMatch?v.onFilterMatch(r):this._onFilterMatch(v,r))});const g=c.length;c.forEach((v,k)=>{v.setAttribute("aria-posinset",`${k+1}`),v.setAttribute("aria-setsize",`${g}`),v.removeAttribute("aria-hidden")}),p&&!h&&!this.multipleChoice&&(this.setCheckedIndex(-1),n!==r&&(this.activeIndex=-1),this.modelValue=this.parser(i)),this.__prevCboxValueNonSelected=r,this.__prevCboxValue=this._inputNode.value,this.__hadSelectionLastAutofill=this._inputNode.value.length!==this._inputNode.selectionStart,this.__hadUserIntendsInlineAutoFill=_,this._overlayCtrl&&this._overlayCtrl._popper&&this._overlayCtrl._popper.update()}__textboxInlineComplete(e=this.formElements[this.activeIndex]){const t=this._getTextboxValueFromOption(e);if(this._inputNode.value!==t){const i=this._inputNode.value.length;this._inputNode.value=t,this._inputNode.selectionStart=i,this._inputNode.selectionEnd=this._inputNode.value.length}}_autoSelectCondition(){return this.autocomplete==="both"||this.autocomplete==="inline"}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.removeAttribute("tabindex")}_defineOverlayConfig(){return{...cs(),elementToFocusAfterHide:void 0,invokerNode:this._comboboxNode,visibilityTriggerFunction:void 0}}_setupOverlayCtrl(){super._setupOverlayCtrl(),this.__shouldAutocompleteNextUpdate=!0,this.__setupCombobox()}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this.__teardownCombobox()}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._inputNode.addEventListener("keyup",this._onKeyUp),this._inputNode.addEventListener("click",this._textboxOnClick)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._inputNode.removeEventListener("keyup",this._onKeyUp),this._inputNode.removeEventListener("click",this._textboxOnClick)}_listboxOnKeyDown(e){const{key:t}=e;switch(t){case"Escape":this.opened=!1,super._listboxOnKeyDown(e),this._setTextboxValue("");break;case"Backspace":case"Delete":this.requireOptionMatch?super._listboxOnKeyDown(e):this.opened=!1;break;case"Enter":this.opened&&e.preventDefault(),!this.requireOptionMatch&&this.multipleChoice&&(!this.formElements[this.activeIndex]||this.formElements[this.activeIndex].hasAttribute("aria-hidden")||!this.opened)?(this.modelValue=this.parser([...this.modelValue,this._inputNode.value]),this._inputNode.value="",this.opened=!1):(super._listboxOnKeyDown(e),this._resetListboxOptions()),this.multipleChoice?this._inputNode.value="":this.opened=!1;break;default:{super._listboxOnKeyDown(e);break}}}_syncToTextboxCondition(e,t,{phase:i}={}){return this.autocomplete==="both"||this.autocomplete==="inline"||!this.focused}_syncToTextboxMultiple(e,t=[]){if(this.requireOptionMatch){const i=e.filter(r=>!t.includes(r)),s=this.formElements.filter(r=>i.includes(r.choiceValue)).map(r=>this._getTextboxValueFromOption(r)).join(" ");this._setTextboxValue(s)}}_enhanceLightDomClasses(){const e=this.querySelector("[slot=input]");e&&e.classList.add("form-control")}__setComboboxDisabledAndReadOnly(){this._comboboxNode&&(this._comboboxNode.toggleAttribute("disabled",this.disabled),this._comboboxNode.setAttribute("aria-disabled",`${this.disabled}`),this._comboboxNode.toggleAttribute("readonly",this.readOnly),this._comboboxNode.setAttribute("aria-readonly",`${this.readOnly}`)),this._inputNode&&(this._inputNode.toggleAttribute("disabled",this.disabled),this._inputNode.toggleAttribute("readOnly",this.readOnly),this._inputNode.setAttribute("aria-readonly",`${this.readOnly}`),this._inputNode.tabIndex=this.disabled?-1:0)}__setupCombobox(){this._comboboxNode.setAttribute("role","combobox"),this._comboboxNode.setAttribute("aria-haspopup","listbox"),this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),this._comboboxNode.setAttribute("aria-controls",this._listboxNode.id),this._ariaVersion==="1.1"?this._comboboxNode.setAttribute("aria-owns",this._listboxNode.id):this._inputNode.setAttribute("aria-owns",this._listboxNode.id),this._listboxNode.setAttribute("aria-labelledby",this._labelNode.id),this._inputNode.addEventListener("keydown",this._listboxOnKeyDown),this._inputNode.addEventListener("input",this._textboxOnInput),this._inputNode.addEventListener("keydown",this._textboxOnKeydown)}__teardownCombobox(){this._inputNode.removeEventListener("keydown",this._listboxOnKeyDown),this._inputNode.removeEventListener("input",this._textboxOnInput),this._inputNode.removeEventListener("keydown",this._textboxOnKeydown)}_onKeyUp(e){const t=e&&e.key;this.opened=this._showOverlayCondition({lastKey:t,currentValue:this._inputNode.value})}_textboxOnClick(e){this.opened=this._showOverlayCondition({})}clear(){this.value="",super.clear(),this.__shouldAutocompleteNextUpdate=!0}}const qn=T`
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
`,jn=T`
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

  :host(:hover:not([disabled]):not([checked]):not([active])) .option {
    background: var(--co-color-interactive-subtle-hover);
  }

  :host([active]:not([checked])) .option {
    background: var(--co-color-interactive-subtle-active);
  }

  :host([checked]) .option {
    background: var(--co-color-interactive-subtle-selected);
  }

  :host([active][checked]) .option {
    background: var(--co-color-interactive-subtle-selected);
  }

  :host([disabled]) {
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
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
`;var us=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let xi=class extends vn{static get styles(){return[jn]}attributeChangedCallback(e,t,i){if(e==="checked"&&i==="false"){this.removeAttribute("checked");return}super.attributeChangedCallback(e,t,i)}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),this._syncMultipleAttribute(),this.updateComplete.then(()=>this._syncMultipleAttribute())}updated(e){super.updated(e),this._syncMultipleAttribute()}get _indicatorIconName(){return this.hasAttribute("multiple")?this.checked?"check-box":"check-box-outline-blank":this.checked?"radio-button-checked":"radio-button-unchecked"}get _iconSize(){const e=this.closest("co-listbox, co-combobox"),t=(e==null?void 0:e.getAttribute("size"))??"md";return{sm:"xs",md:"sm",lg:"md",xl:"lg"}[t]??"sm"}render(){return u`
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
    `}_syncMultipleAttribute(){const e=this._parentFormGroup,t=this.hasAttribute("multiple");e!=null&&e.multipleChoice?this.setAttribute("multiple",""):this.removeAttribute("multiple"),t!==this.hasAttribute("multiple")&&this.requestUpdate()}};us([m({reflect:!0})],xi.prototype,"value",null);xi=us([$("co-option")],xi);var Z=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};class Wn extends Ki{static async getMessage(e){var t;return(t=e==null?void 0:e.config)!=null&&t.getMessage?e.config.getMessage():"Please select a valid option."}}let Y=class extends Hn{constructor(){super(...arguments),this.size="md",this.danger=!1,this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.selectionFollowsFocus=!0,this.rotateKeyboardNavigation=!0,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.multiple=!1,this.allowCustomChoice=!1,this.required=!1,this.matchError="",this._requiredValidator=new kt(void 0,{getMessage:async()=>"Please select an option."}),this._matchesOptionValidator=new Wn,this._handleFocusIn=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&this.dispatchEvent(new CustomEvent("co-input",{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))},this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.value,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,qn]}get requireOptionMatch(){return super.requireOptionMatch}set requireOptionMatch(e){super.requireOptionMatch=e}connectedCallback(){super.connectedCallback(),this._replaceMatchesOptionValidator(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){super.firstUpdated(e),this._syncMultipleAlias(),this._syncRequiredValidator()}updated(e){this._syncMultipleAlias(e),super.updated(e),e.has("required")&&this._syncRequiredValidator(),e.has("allowCustomChoice")&&this.requestUpdate("requireOptionMatch",!this.allowCustomChoice),e.has("matchError")&&this._syncMatchErrorMessage(),(e.has("multiple")||e.has("multipleChoice")||e.has("required"))&&this._syncListboxAttributes()}_labelTemplate(){return u`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return u`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return u`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?u`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:y}_inputGroupInputTemplate(){return u`
      <div part="input" class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){const e={sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm";return u`
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
    `}_preventFocusShift(e){e.preventDefault()}_onSuffixMousedown(e){this._preventFocusShift(e)}_onOverlayMousedown(e){this._preventFocusShift(e)}_onSuffixClick(){var e;this.disabled||this.readOnly||((e=this._inputNode)==null||e.focus(),this.opened?this.opened=!1:this._hasVisibleOptions()&&(this.opened=!0))}_hasVisibleOptions(){return(this.formElements??[]).some(t=>t.style.display!=="none")}_overlayListboxTemplate(){return u`
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
    `}_feedbackTemplate(){return u`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_handleAutocompletion(){super._handleAutocompletion(),!this.formElements.some(t=>t.style.display!=="none")&&this.opened&&requestAnimationFrame(()=>{this.opened&&!this.formElements.some(t=>t.style.display!=="none")&&(this.opened=!1)})}_showOverlayCondition(e){var r;if(!this._hasVisibleOptions())return!1;const t=super._showOverlayCondition(e),i=(r=this._inputNode)==null?void 0:r.value,s=["Enter","Escape","Tab"];return!t&&e.lastKey&&s.includes(e.lastKey)?!1:!t&&i&&this.formElements.length>0?this.formElements.some(n=>this.matchCondition(n,i)):t&&i&&this.formElements.length>0?this.formElements.some(n=>this.matchCondition(n,i)):t}_defineOverlayConfig(){var t;const e=super._defineOverlayConfig();return{...e,_noDialogEl:!0,popperConfig:{...e.popperConfig,modifiers:[...(((t=e.popperConfig)==null?void 0:t.modifiers)??[]).filter(i=>i.name!=="offset"),{name:"offset",enabled:!0,options:{offset:[0,parseInt(Qo,10)]}}]}}}_syncMultipleAlias(e){if(e!=null&&e.has("multiple")&&this.multipleChoice!==this.multiple){this.multipleChoice=this.multiple;return}if(e!=null&&e.has("multipleChoice")&&this.multiple!==this.multipleChoice){this.multiple=this.multipleChoice;return}!e&&this.multiple!==this.multipleChoice&&(this.multipleChoice=this.multiple||this.multipleChoice,this.multiple=this.multipleChoice)}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}_replaceMatchesOptionValidator(){this.defaultValidators=this.defaultValidators.map(e=>e instanceof Ki?this._matchesOptionValidator:e),this._syncMatchErrorMessage()}_syncMatchErrorMessage(){this.matchError&&(this._matchesOptionValidator.config={...this._matchesOptionValidator.config,getMessage:()=>this.matchError})}_syncListboxAttributes(){const e=this.querySelector('[slot="listbox"]');e&&(e.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this.required?e.setAttribute("aria-required","true"):e.removeAttribute("aria-required"))}};Z([m({reflect:!0})],Y.prototype,"size",void 0);Z([m({type:Boolean,reflect:!0})],Y.prototype,"danger",void 0);Z([m({reflect:!0})],Y.prototype,"autocomplete",void 0);Z([m({attribute:"match-mode",reflect:!0})],Y.prototype,"matchMode",void 0);Z([m({type:Boolean,attribute:"show-all-on-empty",reflect:!0})],Y.prototype,"showAllOnEmpty",void 0);Z([m({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],Y.prototype,"selectionFollowsFocus",void 0);Z([m({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],Y.prototype,"rotateKeyboardNavigation",void 0);Z([m({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],Y.prototype,"hasNoDefaultSelected",void 0);Z([m({type:Boolean,attribute:"multiple-choice",reflect:!0})],Y.prototype,"multipleChoice",void 0);Z([m({type:Boolean,reflect:!0})],Y.prototype,"multiple",void 0);Z([m({type:Boolean,attribute:"allow-custom-choice",reflect:!0})],Y.prototype,"allowCustomChoice",void 0);Z([m({type:Boolean,reflect:!0})],Y.prototype,"required",void 0);Z([m({attribute:"match-error"})],Y.prototype,"matchError",void 0);Z([m({type:Boolean,attribute:"require-option-match"})],Y.prototype,"requireOptionMatch",null);Y=Z([$("co-combobox")],Y);class Gn extends Ui(D){constructor(){super(),this._isFormOrFieldset=!0,this._repropagationRole="fieldset"}}const yo=()=>{throw new Error("No form node found. Did you put a <form> element inside your custom-form element?")};class Kn extends Gn{constructor(){super(),this._submit=this._submit.bind(this),this._reset=this._reset.bind(this)}connectedCallback(){super.connectedCallback(),this.__registerEventsForLionForm(),this.removeAttribute("role")}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForLionForm()}get _formNode(){return this.querySelector("form")}submit(){this._formNode?this._formNode.dispatchEvent(new Event("submit",{cancelable:!0})):yo()}_submit(e){var t;e.preventDefault(),e.stopPropagation(),this.submitGroup(),this.dispatchEvent(new Event("submit",{bubbles:!0})),(t=this.hasFeedbackFor)!=null&&t.includes("error")&&this._setFocusOnFirstErroneousFormElement(this)}reset(){this._formNode?this._formNode.reset():yo()}_reset(e){e.preventDefault(),e.stopPropagation(),this.resetGroup(),this.dispatchEvent(new Event("reset",{bubbles:!0}))}_setFocusOnFirstErroneousFormElement(e){const t=e.formElements.find(i=>i.hasFeedbackFor.includes("error"))||e.formElements[0];t._focusableNode?t._focusableNode.focus():this._setFocusOnFirstErroneousFormElement(t)}__registerEventsForLionForm(){this._formNode.addEventListener("submit",this._submit),this._formNode.addEventListener("reset",this._reset)}__teardownEventsForLionForm(){this._formNode.removeEventListener("submit",this._submit),this._formNode.removeEventListener("reset",this._reset)}}const Yn=T`
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
    opacity: var(--co-opacity-disabled);
  }

  ::slotted(form) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--co-space-4);
  }
`;var ps=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let wi=class extends Kn{constructor(){super(...arguments),this.disabled=!1,this._createdInternalForm=!1}static get styles(){return[...super.styles,Yn]}connectedCallback(){if(!this.querySelector("form")){const e=document.createElement("form");for(;this.firstChild;)e.appendChild(this.firstChild);this.appendChild(e),this._createdInternalForm=!0}super.connectedCallback()}disconnectedCallback(){if(super.disconnectedCallback(),this._createdInternalForm){const e=this.querySelector("form");if(e){for(;e.firstChild;)this.appendChild(e.firstChild);e.remove()}this._createdInternalForm=!1}}_labelTemplate(){return u`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return u`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_feedbackTemplate(){return u`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_submit(e){super._submit(e),this.dispatchEvent(new CustomEvent("co-submit",{detail:{modelValue:this.modelValue,serializedValue:this.serializedValue},bubbles:!0,composed:!0}))}_reset(e){super._reset(e);const t=this._formNode;if(t)for(const i of Array.from(t.elements))"resetGroup"in i||(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement?i.value=i.defaultValue:i instanceof HTMLSelectElement&&(i.selectedIndex=0));this.dispatchEvent(new CustomEvent("co-reset",{bubbles:!0,composed:!0}))}};ps([m({type:Boolean,reflect:!0})],wi.prototype,"disabled",void 0);wi=ps([$("co-form")],wi);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zn=o=>o??y;var Ct=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let Ge=class extends D{constructor(){super(...arguments),this.required=!1,this.optional=!1,this.optionalLabel="(optional)",this._contentNodes={prefix:[],default:[],suffix:[]},this._handleClick=()=>{var t;if(!this.htmlFor)return;const e=(t=this.ownerDocument)==null?void 0:t.getElementById(this.htmlFor);e instanceof HTMLElement&&queueMicrotask(()=>{var i;this._hasFocusWithin(e)||(e.focus(),!this._hasFocusWithin(e)&&((i=this._findFocusableDescendant(e))==null||i.focus()))})}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick),this._collectDirectChildren(),this._observer=new MutationObserver(e=>{e.some(({addedNodes:i})=>Array.from(i).some(s=>this._isExternalChild(s)))&&(this._collectDirectChildren(),this._attachContentNodes())}),this._observer.observe(this,{childList:!0})}disconnectedCallback(){var e;this.removeEventListener("click",this._handleClick),(e=this._observer)==null||e.disconnect(),super.disconnectedCallback()}firstUpdated(){this._attachContentNodes()}updated(){this._attachContentNodes()}render(){return u`
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
        for=${Zn(this.htmlFor||void 0)}
      >
        ${this.required?u`<span class="co-label__required" aria-hidden="true">*</span>`:y}
        <span
          data-co-label-internal="true"
          class="co-label__content co-label__content--prefix"
        ></span>
        <span data-co-label-internal="true" class="co-label__text-group">
          <span
            data-co-label-internal="true"
            class="co-label__content co-label__content--default"
          ></span>
          ${this._optionalTemplate()}
        </span>
        <span
          data-co-label-internal="true"
          class="co-label__content co-label__content--suffix"
        ></span>
      </label>
    `}_optionalTemplate(){return this.required||!this.optional||!this.optionalLabel?y:u`<span class="co-label__optional">${this.optionalLabel}</span>`}_collectDirectChildren(){for(const e of Array.from(this.childNodes)){if(!this._isExternalChild(e))continue;const t=this._bucketForNode(e);this._contentNodes[t].includes(e)||this._contentNodes[t].push(e)}}_attachContentNodes(){this._moveNodes(this.querySelector(".co-label__content--prefix"),this._contentNodes.prefix),this._moveNodes(this.querySelector(".co-label__content--default"),this._contentNodes.default),this._moveNodes(this.querySelector(".co-label__content--suffix"),this._contentNodes.suffix)}_moveNodes(e,t){if(e)for(const i of t)i.parentNode!==e&&e.appendChild(i)}_bucketForNode(e){if(e instanceof HTMLElement){const t=e.getAttribute("slot");if(t==="prefix")return"prefix";if(t==="suffix")return"suffix"}return"default"}_isExternalChild(e){var t;return e instanceof Text&&!((t=e.textContent)!=null&&t.trim())?!1:e instanceof HTMLElement?e.dataset.coLabelInternal!=="true":!0}_hasFocusWithin(e){var t;return e.matches(":focus-within")||((t=this.ownerDocument)==null?void 0:t.activeElement)===e}_findFocusableDescendant(e){var i;const t='[slot="input"], input, textarea, select, button, [tabindex]:not([tabindex="-1"])';return e.querySelector(t)??((i=e.shadowRoot)==null?void 0:i.querySelector(t))??null}};Ct([m({attribute:"for",reflect:!0})],Ge.prototype,"htmlFor",void 0);Ct([m({type:Boolean,reflect:!0})],Ge.prototype,"required",void 0);Ct([m({type:Boolean,reflect:!0})],Ge.prototype,"optional",void 0);Ct([m({attribute:"optional-label"})],Ge.prototype,"optionalLabel",void 0);Ge=Ct([$("co-label")],Ge);const Jn=T`
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
    opacity: var(--co-opacity-disabled);
  }

  .form-field__feedback {
    color: var(--co-color-feedback-danger-text);
    font-size: var(--co-typography-caption-size);
    line-height: var(--co-typography-caption-line-height);
    min-block-size: var(--co-font-line-height-normal, 1.25em);
  }
`;var ze=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let xe=class extends Gi{constructor(){super(...arguments),this.orientation="vertical",this.selectionFollowsFocus=!1,this.rotateKeyboardNavigation=!1,this.hasNoDefaultSelected=!1,this.multipleChoice=!1,this.required=!1,this._requiredValidator=new kt(void 0,{getMessage:async()=>"Please select an option."}),this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,Jn]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){super.firstUpdated(e),this._syncRequiredValidator()}updated(e){super.updated(e),e.has("required")&&this._syncRequiredValidator()}_labelTemplate(){return u`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return u`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return u`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">${this._inputGroupInputTemplate()}</div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return y}_inputGroupInputTemplate(){return u`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
        <slot id="options-outlet"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return y}_feedbackTemplate(){return u`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}};ze([m({reflect:!0})],xe.prototype,"orientation",void 0);ze([m({type:Boolean,attribute:"selection-follows-focus",reflect:!0})],xe.prototype,"selectionFollowsFocus",void 0);ze([m({type:Boolean,attribute:"rotate-keyboard-navigation",reflect:!0})],xe.prototype,"rotateKeyboardNavigation",void 0);ze([m({type:Boolean,attribute:"has-no-default-selected",reflect:!0})],xe.prototype,"hasNoDefaultSelected",void 0);ze([m({type:Boolean,attribute:"multiple-choice",reflect:!0})],xe.prototype,"multipleChoice",void 0);ze([m({type:Boolean,reflect:!0})],xe.prototype,"required",void 0);xe=ze([$("co-listbox")],xe);class Xn extends $t(Ui(D)){connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup")}resetGroup(){let e;this.formElements.forEach(t=>{typeof t.resetGroup=="function"?t.resetGroup():typeof t.reset=="function"&&(t.reset(),t.checked&&(e=t.choiceValue))}),this.modelValue=e,this.resetInteractionState()}}class Qn extends Bi(Hi){connectedCallback(){super.connectedCallback(),this.type="radio"}}const ea=T`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    color: var(--co-color-text-default);
    cursor: pointer;
  }

  :host([disabled]) {
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

  :host([_keyboard-focus]) .radio__icon {
    outline: var(--co-focus-ring-width) solid var(--co-color-border-focus);
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
    border-radius: var(--co-shape-radius-full);
  }

  .radio__label {
    flex: 1 1 auto;
    min-inline-size: 0;
    line-height: var(--co-font-line-height-normal);
  }
`;var fs=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let ki=class extends Qn{constructor(){super(...arguments),this.__forwardingClick=!1}static get styles(){return[...super.styles,ea]}get value(){return typeof this.choiceValue=="string"?this.choiceValue:""}set value(e){const t=this.value;this.choiceValue!==e&&(this.choiceValue=e),this.requestUpdate("value",t)}connectedCallback(){super.connectedCallback(),Wi(this)}render(){return u`
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
    `}_onMousedown(e){var t;((t=e.target)==null?void 0:t.slot)!=="input"&&e.preventDefault()}_onRadioClick(e){if(this.__forwardingClick||this.disabled)return;const t=e.target,i=this._inputNode;!i||t===i||t instanceof HTMLLabelElement||(this.__forwardingClick=!0,i.click(),i.focus(),this.__forwardingClick=!1)}};fs([m({reflect:!0})],ki.prototype,"value",null);ki=fs([$("co-radio")],ki);const ta=T`
  :host {
    display: block;
    font-family: var(--co-font-family-sans);
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
`;var _s=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let Ci=class extends Xn{constructor(){super(...arguments),this.required=!1,this._requiredValidator=new kt(void 0,{getMessage:async()=>"Please select an option."}),this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,ta]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged)}firstUpdated(e){super.firstUpdated(e),this._syncRequiredValidator()}updated(e){super.updated(e),e.has("required")&&this._syncRequiredValidator()}render(){return u`
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
    `}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}};_s([m({type:Boolean,reflect:!0})],Ci.prototype,"required",void 0);Ci=_s([$("co-radio-group")],Ci);const ia=T`
  :host {
    display: block;
    inline-size: 100%;
    box-sizing: border-box;
    padding: var(--co-space-inset-sm) var(--co-space-inset-md);
  }

  .nav-header-bar {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-md);
    inline-size: 100%;
    min-block-size: var(--co-component-nav-header-bar-height, 64px);
    box-sizing: border-box;
    background: var(--co-component-nav-header-bar-background, var(--co-color-surface-default));
    border-block-end: var(--co-shape-border-width-thin) solid
      var(--co-component-nav-header-bar-border-color, var(--co-color-border-subtle));
  }

  .nav-header-bar__logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .nav-header-bar__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 auto;
    min-inline-size: 0;
    gap: var(--co-space-gap-md);
  }

  .nav-header-bar__avatar {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
`;var ms=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let Vt=class extends D{constructor(){super(...arguments),this.label="Header"}render(){return u`
      <header part="base" class="nav-header-bar" aria-label=${this.label}>
        <div part="logo" class="nav-header-bar__logo">
          <slot name="logo"></slot>
        </div>
        <div part="content" class="nav-header-bar__content">
          <slot></slot>
        </div>
        <div part="avatar" class="nav-header-bar__avatar">
          <slot name="avatar"></slot>
        </div>
      </header>
    `}};Vt.styles=[ia];ms([m({reflect:!0})],Vt.prototype,"label",void 0);Vt=ms([$("co-nav-header-bar")],Vt);const oa=T`
  :host {
    display: block;
    max-inline-size: 280px;
    inline-size: 280px;
    block-size: 100%;
    font-family: var(--co-font-family-sans);
    background: var(--co-color-surface-default);
    border-radius: var(--co-shape-radius-md);
    box-shadow: var(--co-elevation-shadow-sm);
    overflow: hidden;
    transition: transform var(--co-motion-duration-normal) var(--co-motion-easing-default);
  }

  :host(:not([open])) {
    transform: translateX(-100%);
    pointer-events: none;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    block-size: 100%;
  }

  .drawer__content {
    flex: 1;
    overflow-y: auto;
    padding-block-start: var(--co-space-3);
    padding-inline: var(--co-space-3);
  }
`;var Dt=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let Ke=class extends D{constructor(){super(...arguments),this.open=!0,this.value="",this.label="Navigation",this._onItemClick=e=>{const t=e.target.closest("co-nav-drawer-item");if(!t||t.disabled)return;const i=t.value;i&&i!==this.value&&(this.value=i,this._syncSelection(i),this.dispatchEvent(new CustomEvent("co-change",{detail:{value:i},bubbles:!0,composed:!0})))},this._onKeyDown=e=>{const t=this._getItems();if(!t.length)return;const i=t.findIndex(r=>r===document.activeElement||r.contains(document.activeElement));let s=-1;switch(e.key){case"ArrowDown":e.preventDefault(),s=i<t.length-1?i+1:0;break;case"ArrowUp":e.preventDefault(),s=i>0?i-1:t.length-1;break;case"Home":e.preventDefault(),s=0;break;case"End":e.preventDefault(),s=t.length-1;break;default:return}s>=0&&t[s].focus()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._onItemClick),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._onItemClick),this.removeEventListener("keydown",this._onKeyDown)}render(){return u`
      <nav part="base" class="drawer" aria-label=${this.label}>
        <div part="content" class="drawer__content">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </nav>
    `}_getItems(){return Array.from(this.querySelectorAll("co-nav-drawer-item:not([disabled])"))}_onSlotChange(){this.value&&this._syncSelection(this.value)}_syncSelection(e){Array.from(this.querySelectorAll("co-nav-drawer-item")).forEach(i=>{i.selected=i.value===e})}};Ke.styles=[oa];Dt([m({type:Boolean,reflect:!0})],Ke.prototype,"open",void 0);Dt([m({reflect:!0})],Ke.prototype,"value",void 0);Dt([m()],Ke.prototype,"label",void 0);Ke=Dt([$("co-nav-drawer")],Ke);const sa=T`
  :host {
    display: block;
  }

  .item {
    display: flex;
    align-items: center;
    gap: var(--co-space-gap-sm);
    padding: var(--co-space-2);
    border-radius: var(--co-shape-radius-md);
    color: var(--co-color-text-default);
    font-family: var(--co-font-family-sans);
    font-size: var(--co-font-size-p);
    font-weight: var(--co-font-weight-regular);
    line-height: var(--co-font-line-height-tight);
    text-decoration: none;
    cursor: pointer;
    transition:
      background var(--co-motion-duration-fast) var(--co-motion-easing-default),
      color var(--co-motion-duration-fast) var(--co-motion-easing-default);
    outline: none;
  }

  :host(:not([selected])) .item:hover {
    background: var(
      --co-component-nav-drawer-item-background-hover,
      color-mix(in srgb, var(--co-color-interactive-primary-default) 8%, transparent)
    );
    color: var(--co-component-nav-drawer-item-foreground-hover, var(--co-color-text-link));
  }

  :host(:not([selected]):not([disabled])) .item:active {
    background: var(
      --co-component-nav-drawer-item-background-active,
      color-mix(in srgb, var(--co-color-interactive-primary-default) 20%, transparent)
    );
    color: var(--co-component-nav-drawer-item-foreground-active, var(--co-color-text-link));
  }

  :host([selected]) .item {
    background: var(
      --co-component-nav-drawer-item-background-selected,
      color-mix(in srgb, var(--co-color-interactive-primary-default) 12%, transparent)
    );
    color: var(--co-component-nav-drawer-item-foreground-selected, var(--co-color-text-link));
    font-weight: var(--co-font-weight-medium);
  }

  :host([disabled]) .item {
    cursor: not-allowed;
    opacity: var(--co-opacity-disabled);
  }

  :host([disabled]) .item:hover {
    background: transparent;
  }

  .item:focus-visible {
    outline: var(--co-focus-ring-width) solid
      var(--co-component-nav-drawer-item-focus-ring, var(--co-color-border-focus));
    outline-offset: calc(-1 * var(--co-shape-border-width-thin));
  }

  .item__prefix {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    color: inherit;
  }

  .item__label {
    flex: 1 1 auto;
    min-inline-size: 0;
  }
`;var Xe=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let we=class extends D{constructor(){super(...arguments),this.value="",this.icon="",this.selected=!1,this.disabled=!1}render(){const e=u`
      ${this.icon?u`
            <span part="prefix" class="item__prefix">
              <slot name="prefix">
                <co-icon name=${this.icon} size="sm" aria-hidden="true"></co-icon>
              </slot>
            </span>
          `:y}
      <span part="label" class="item__label">
        <slot></slot>
      </span>
    `;return this.href&&!this.disabled?u`
        <a
          part="base"
          class="item"
          href=${this.href}
          tabindex=${this.disabled?-1:0}
          aria-current=${this.selected?"page":y}
          aria-disabled=${this.disabled?"true":y}
        >
          ${e}
        </a>
      `:u`
      <div
        part="base"
        class="item"
        role="link"
        tabindex=${this.disabled?-1:0}
        aria-current=${this.selected?"page":y}
        aria-disabled=${this.disabled?"true":y}
      >
        ${e}
      </div>
    `}};we.styles=[sa];Xe([m({reflect:!0})],we.prototype,"value",void 0);Xe([m()],we.prototype,"icon",void 0);Xe([m()],we.prototype,"href",void 0);Xe([m({type:Boolean,reflect:!0})],we.prototype,"selected",void 0);Xe([m({type:Boolean,reflect:!0})],we.prototype,"disabled",void 0);we=Xe([$("co-nav-drawer-item")],we);const ra=T`
  :host {
    display: block;
  }

  .separator {
    border: none;
    border-top: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    margin: var(--co-space-2) 0;
  }
`;var na=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let Ei=class extends D{render(){return u`<hr part="separator" class="separator" aria-hidden="true" />`}};Ei.styles=[ra];Ei=na([$("co-nav-separator")],Ei);const aa=T`
  :host {
    display: block;
    inline-size: min(100%, var(--co-component-nav-rail-bar-width, 115px));
    max-inline-size: var(--co-component-nav-rail-bar-width-max, 200px);
    block-size: 100%;
    box-sizing: border-box;
  }

  .nav-rail-bar {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
    padding: var(--co-component-nav-rail-bar-padding-y) var(--co-component-nav-rail-bar-padding-x);
    border-radius: var(--co-component-nav-rail-bar-radius);
    background: var(--co-component-nav-rail-bar-background, var(--co-color-surface-sunken));
    box-shadow: var(--co-elevation-shadow-md);
  }

  .nav-rail-bar__items {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: var(--co-component-nav-rail-bar-gap, var(--co-space-2));
  }
`;var Yi=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let vt=class extends D{constructor(){super(...arguments),this.value="",this.label="Side navigation",this._syncingSelection=!1,this._handleSlotChange=()=>{this._syncSelection()},this._handleClick=e=>{const t=this._findItemFromEvent(e);!t||t.disabled||this._selectItem(t,!0)},this._handleKeydown=e=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(e.key))return;const t=this._enabledItems;if(t.length===0)return;const i=this._findItemFromEvent(e)??t.find(n=>n.selected)??t[0],s=Math.max(0,t.indexOf(i));let r=i;e.key==="Home"&&(r=t[0]),e.key==="End"&&(r=t[t.length-1]),e.key==="ArrowUp"&&(r=t[Math.max(0,s-1)]),e.key==="ArrowDown"&&(r=t[Math.min(t.length-1,s+1)]),e.preventDefault(),this._selectItem(r,!0,!0)}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","navigation"),this.addEventListener("click",this._handleClick),this.addEventListener("keydown",this._handleKeydown),this._syncSelection()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick),this.removeEventListener("keydown",this._handleKeydown)}updated(e){e.has("value")&&!this._syncingSelection&&this._syncSelection()}get _items(){return Array.from(this.children).filter(e=>e.tagName.toLowerCase()==="co-nav-rail-item")}get _enabledItems(){return this._items.filter(e=>!e.disabled)}render(){return u`
      <nav part="base" class="nav-rail-bar" aria-label=${this.label}>
        <div part="items" class="nav-rail-bar__items">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </nav>
    `}_findItemFromEvent(e){return e.composedPath().find(t=>t instanceof HTMLElement&&t.tagName.toLowerCase()==="co-nav-rail-item")}_syncSelection(e=!1){const t=this._items,i=this._enabledItems;if(t.length===0||i.length===0)return;const s=this.value?i.find(a=>a.value===this.value):void 0,r=i.find(a=>a.selected),n=s??r??i[0];this._selectItem(n,e)}_selectItem(e,t=!1,i=!1){if(e.disabled)return;const s=this._items;this._syncingSelection=!0;for(const a of s){const c=a===e;a.selected=c,a.setFocusable(!a.disabled)}const r=e.value,n=this.value!==r;this.value=r,this._syncingSelection=!1,i&&e.focus(),t&&n&&this.dispatchEvent(new CustomEvent("co-change",{detail:{value:r},bubbles:!0,composed:!0}))}};vt.styles=[aa];Yi([m({reflect:!0})],vt.prototype,"value",void 0);Yi([m()],vt.prototype,"label",void 0);vt=Yi([$("co-nav-rail-bar")],vt);class la extends ke(Zo){static get styles(){return[...super.styles,T`
        :host {
          justify-content: space-between;
          align-items: center;
        }

        #content-wrapper {
          position: relative;
          pointer-events: none;
        }
      `]}static get properties(){return{selectedElement:{type:Object},hostElement:{type:Object},readOnly:{type:Boolean,reflect:!0,attribute:"readonly"},singleOption:{type:Boolean,reflect:!0,attribute:"single-option"}}}get slots(){return{...super.slots,after:()=>{const e=document.createElement("span");return e.textContent="▼",e.setAttribute("role","img"),e.setAttribute("aria-hidden","true"),e}}}get _contentWrapperNode(){return this.shadowRoot.getElementById("content-wrapper")}constructor(){super(),this.readOnly=!1,this.selectedElement=null,this.hostElement=null,this.singleOption=!1,this.type="button"}__handleKeydown(e){switch(e.key){case"ArrowDown":case"ArrowUp":e.preventDefault()}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.__handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.__handleKeydown)}_contentTemplate(){if(this.selectedElement){const e=Array.from(this.selectedElement.childNodes);return e.length>0?e.map(t=>t.cloneNode(!0)):this.selectedElement.textContent}return this._noSelectionTemplate()}render(){return u` ${this._beforeTemplate()} ${super.render()} ${this._afterTemplate()} `}_noSelectionTemplate(){return u``}_beforeTemplate(){return u` <div id="content-wrapper">${this._contentTemplate()}</div> `}_afterTemplate(){return u`${this.singleOption?"":u`<slot name="after"></slot>`}`}}function ca(){return pt.isMac?"mac":"windows/linux"}class da extends ke(Mi(ls(Gi))){static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":la}}static get properties(){return{navigateWithinInvoker:{type:Boolean,attribute:"navigate-within-invoker"},interactionMode:{type:String,attribute:"interaction-mode"},singleOption:{type:Boolean,reflect:!0,attribute:"single-option"}}}_inputGroupInputTemplate(){return u`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,invoker:()=>u`<lion-select-invoker></lion-select-invoker>`}}get _invokerNode(){return Array.from(this.children).find(e=>e.slot==="invoker")}get _focusableNode(){return this._invokerNode}get _scrollTargetNode(){return this._overlayContentNode._scrollTargetNode||this._overlayContentNode}constructor(){super(),this.navigateWithinInvoker=!1,this.interactionMode="auto",this.singleOption=!1,this._arrowWidth=28,this.__onKeyUp=this.__onKeyUp.bind(this),this.__invokerOnBlur=this.__invokerOnBlur.bind(this),this.__overlayOnHide=this.__overlayOnHide.bind(this),this.__overlayOnShow=this.__overlayOnShow.bind(this),this.__invokerOnClick=this.__invokerOnClick.bind(this),this.__overlayBeforeShow=this.__overlayBeforeShow.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this)}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this._invokerNode.selectedElement=this.formElements[this.checkedIndex]}),this._invokerNode.hostElement=this,this.__setupInvokerNode(),this.__toggleInvokerDisabled(),this.addEventListener("keyup",this.__onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),this.__teardownInvokerNode(),this.removeEventListener("keyup",this.__onKeyUp)}requestUpdate(e,t,i){super.requestUpdate(e,t,i),e==="interactionMode"&&(this.interactionMode==="auto"?this.interactionMode=ca():(this.selectionFollowsFocus=this.interactionMode==="windows/linux",this.navigateWithinInvoker=this.interactionMode==="windows/linux")),(e==="disabled"||e==="readOnly")&&this.__toggleInvokerDisabled()}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this._invokerNode.makeRequestToBeDisabled():this._invokerNode.retractRequestToBeDisabled()),e.has("singleOption")&&(this.singleOption?(this._invokerNode.removeAttribute("role"),this._invokerNode.removeAttribute("aria-haspopup"),this._invokerNode.removeAttribute("aria-expanded")):(this._invokerNode.setAttribute("role","button"),this._invokerNode.setAttribute("aria-haspopup","listbox"),this._invokerNode.setAttribute("aria-expanded",`${this.opened}`))),this._inputNode&&this._invokerNode&&(e.has("_ariaLabelledNodes")&&this._invokerNode.setAttribute("aria-labelledby",`${this._inputNode.getAttribute("aria-labelledby")} ${this._invokerNode.id}`),e.has("_ariaDescribedNodes")&&this._invokerNode.setAttribute("aria-describedby",this._inputNode.getAttribute("aria-describedby")),e.has("showsFeedbackFor")&&this._invokerNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`)),e.has("modelValue")&&this.__syncInvokerElement()}addFormElement(e,t){super.addFormElement(e,t),!this.hasNoDefaultSelected&&!this.__hasInitialSelectedFormElement&&(!e.disabled||this.disabled)&&(e.active=!0,e.checked=!0,this.__hasInitialSelectedFormElement=!0),this._alignInvokerWidth(),this._onFormElementsChanged()}removeFormElement(e){super.removeFormElement(e),this._alignInvokerWidth(),this._onFormElementsChanged()}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_onFormElementsChanged(){this.singleOption=this.formElements.length===1&&!this.hasNoDefaultSelected,this._invokerNode.singleOption=this.singleOption}__initInteractionStates(){this.initInteractionState()}__toggleInvokerDisabled(){this._invokerNode&&(this._invokerNode.disabled=this.disabled,this._invokerNode.readOnly=this.readOnly)}__syncInvokerElement(){this._invokerNode&&(this._invokerNode.selectedElement=this.formElements[this.checkedIndex],this._invokerNode.requestUpdate("selectedElement"))}__setupInvokerNode(){this._invokerNode.id=`invoker-${this._inputId}`,this._invokerNode.setAttribute("aria-haspopup","listbox"),this.__setupInvokerNodeEventListener()}__invokerOnClick(){!this.disabled&&!this.readOnly&&!this.singleOption&&!this.__blockListShow&&this._overlayCtrl.toggle()}__invokerOnBlur(){this.dispatchEvent(new Event("blur"))}__setupInvokerNodeEventListener(){this._invokerNode.addEventListener("click",this.__invokerOnClick),this._invokerNode.addEventListener("blur",this.__invokerOnBlur)}__teardownInvokerNode(){this._invokerNode.removeEventListener("click",this.__invokerOnClick),this._invokerNode.removeEventListener("blur",this.__invokerOnBlur)}_defineOverlayConfig(){return{...cs(),visibilityTriggerFunction:void 0}}_noDefaultSelectedInheritsWidth(){this.checkedIndex===-1?this._overlayCtrl.updateConfig({inheritsReferenceWidth:"min"}):this._overlayCtrl.updateConfig({inheritsReferenceWidth:this._initialInheritsReferenceWidth})}__overlayBeforeShow(){this.hasNoDefaultSelected&&this._noDefaultSelectedInheritsWidth(),this._listboxNode.setAttribute("autofocus","")}__overlayOnShow(){this.checkedIndex!=null&&(this.activeIndex=this.checkedIndex),this._listboxNode.focus()}__overlayOnHide(){this._invokerNode.focus(),this._listboxNode.removeAttribute("autofocus")}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._initialInheritsReferenceWidth=this._overlayCtrl.inheritsReferenceWidth,this._alignInvokerWidth(),this._overlayCtrl.addEventListener("before-show",this.__overlayBeforeShow),this._overlayCtrl.addEventListener("show",this.__overlayOnShow),this._overlayCtrl.addEventListener("hide",this.__overlayOnHide)}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this._overlayCtrl.removeEventListener("show",this.__overlayOnShow),this._overlayCtrl.removeEventListener("before-show",this.__overlayBeforeShow),this._overlayCtrl.removeEventListener("hide",this.__overlayOnHide)}async _alignInvokerWidth(){var r;if(await this.updateComplete,!((r=this._overlayCtrl)!=null&&r.content))return;const e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,i=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display="",this._overlayCtrl.contentWrapperNode.style.minWidth="auto",this._overlayCtrl.contentWrapperNode.style.width="auto";const s=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;s>0&&(this._invokerNode.style.width=`${s+this._arrowWidth}px`),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=i}_onLabelClick(){this._invokerNode.focus()}get _overlayInvokerNode(){return this._invokerNode}get _overlayContentNode(){return this._listboxNode}__onKeyUp(e){if(this.disabled||this.readOnly||this.singleOption||this.opened)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:t}=e;switch(t){case"ArrowUp":e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex)):this.opened=!0;break;case"ArrowDown":e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex)):this.opened=!0;break;case"ArrowLeft":e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex));break;case"ArrowRight":e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex));break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:!0})}}_listboxOnKeyDown(e){if(super._listboxOnKeyDown(e),this.disabled)return;const{key:t}=e;switch(t){case"Tab":if(this._overlayCtrl.config.trapsKeyboardFocus===!0)return;this.opened=!1;break;case"Escape":this.opened=!1,this.__blockListShowDuringTransition();break;case"Enter":case" ":this.opened=!1,this.__blockListShowDuringTransition();break}}_listboxOnClick(){this.opened=!1}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.addEventListener("click",this._listboxOnClick)}_teardownListboxNode(){super._teardownListboxNode(),this._listboxNode&&this._listboxNode.removeEventListener("click",this._listboxOnClick)}__blockListShowDuringTransition(){this.__blockListShow=!0,setTimeout(()=>{this.__blockListShow=!1},200)}}const ha=T`
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

  /* Suppress Lion's default focus ring on the invoker — we draw our own on the container */
  slot[name='invoker']::slotted(lion-select-invoker) {
    outline: none !important;
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
`;var Pt=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let bt=class extends da{constructor(){super(...arguments),this.size="md",this.danger=!1,this.required=!1,this._requiredValidator=new kt(void 0,{getMessage:async()=>"Please select an option."}),this._syncChevronRotation=()=>{const e=this.querySelector(".select__chevron");e&&(e.style.transform=this.opened?"rotate(180deg)":"")},this._handleModelValueChanged=e=>{var i;const t=e;t.target!==this||(i=t.detail)!=null&&i.initialize||this.dispatchEvent(new CustomEvent("co-change",{detail:{value:this.modelValue,modelValue:this.modelValue,checkedIndex:this.checkedIndex},bubbles:!0,composed:!0}))}}static get styles(){return[...super.styles,ha]}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this._handleModelValueChanged),this.addEventListener("opened-changed",this._syncChevronRotation)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this._handleModelValueChanged),this.removeEventListener("opened-changed",this._syncChevronRotation)}firstUpdated(e){super.firstUpdated(e),this._syncRequiredValidator()}updated(e){super.updated(e),e.has("required")&&this._syncRequiredValidator(),this._syncChevronRotation()}_labelTemplate(){return u`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return u`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}get slots(){return{...super.slots,invoker:()=>{const e=document.createElement("lion-select-invoker"),t=document.createElement("co-icon");return t.setAttribute("slot","after"),t.setAttribute("name","keyboard-arrow-down"),t.setAttribute("size",{sm:"xs",md:"sm",lg:"md",xl:"lg"}[this.size]??"sm"),t.setAttribute("aria-hidden","true"),t.classList.add("select__chevron"),t.style.transition="transform var(--co-motion-duration-fast, 0.15s) var(--co-motion-easing-default, ease)",e.appendChild(t),e}}}_inputGroupTemplate(){return u`
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
    `}_setupOverlayCtrl(){var t;super._setupOverlayCtrl();const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".input-group__container");e&&this._overlayCtrl&&this._overlayCtrl.updateConfig({referenceNode:e})}_noDefaultSelectedInheritsWidth(){}async _alignInvokerWidth(){}_feedbackTemplate(){return u`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_defineOverlayConfig(){const e=super._defineOverlayConfig(),t=e.popperConfig??{};return{...e,inheritsReferenceWidth:"full",popperConfig:{...t,modifiers:[{name:"offset",enabled:!0,options:{offset:[0,parseInt(Qo,10)]}}]}}}_onOverlayMousedown(e){e.preventDefault()}_syncRequiredValidator(){const e=this.validators,t=e.includes(this._requiredValidator);if(this.required&&!t){this.validators=[...e,this._requiredValidator];return}!this.required&&t&&(this.validators=e.filter(i=>i!==this._requiredValidator))}};Pt([m({reflect:!0})],bt.prototype,"size",void 0);Pt([m({type:Boolean,reflect:!0})],bt.prototype,"danger",void 0);Pt([m({type:Boolean,reflect:!0})],bt.prototype,"required",void 0);bt=Pt([$("co-select")],bt);var at=new Map;function ua(o){var e=at.get(o);e&&e.destroy()}function pa(o){var e=at.get(o);e&&e.update()}var it=null;typeof window>"u"?((it=function(o){return o}).destroy=function(o){return o},it.update=function(o){return o}):((it=function(o,e){return o&&Array.prototype.forEach.call(o.length?o:[o],function(t){return function(i){if(i&&i.nodeName&&i.nodeName==="TEXTAREA"&&!at.has(i)){var s,r=null,n=window.getComputedStyle(i),a=(s=i.value,function(){h({testForHeightReduction:s===""||!i.value.startsWith(s),restoreTextAlign:null}),s=i.value}),c=(function(b){i.removeEventListener("autosize:destroy",c),i.removeEventListener("autosize:update",_),i.removeEventListener("input",a),window.removeEventListener("resize",_),Object.keys(b).forEach(function(p){return i.style[p]=b[p]}),at.delete(i)}).bind(i,{height:i.style.height,resize:i.style.resize,textAlign:i.style.textAlign,overflowY:i.style.overflowY,overflowX:i.style.overflowX,wordWrap:i.style.wordWrap});i.addEventListener("autosize:destroy",c),i.addEventListener("autosize:update",_),i.addEventListener("input",a),window.addEventListener("resize",_),i.style.overflowX="hidden",i.style.wordWrap="break-word",at.set(i,{destroy:c,update:_}),_()}function h(b){var p,f,g=b.restoreTextAlign,v=g===void 0?null:g,k=b.testForHeightReduction,O=k===void 0||k,I=n.overflowY;if(i.scrollHeight!==0&&(n.resize==="vertical"?i.style.resize="none":n.resize==="both"&&(i.style.resize="horizontal"),O&&(p=function(A){for(var j=[];A&&A.parentNode&&A.parentNode instanceof Element;)A.parentNode.scrollTop&&j.push([A.parentNode,A.parentNode.scrollTop]),A=A.parentNode;return function(){return j.forEach(function(G){var X=G[0],se=G[1];X.style.scrollBehavior="auto",X.scrollTop=se,X.style.scrollBehavior=null})}}(i),i.style.height=""),f=n.boxSizing==="content-box"?i.scrollHeight-(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)):i.scrollHeight+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),n.maxHeight!=="none"&&f>parseFloat(n.maxHeight)?(n.overflowY==="hidden"&&(i.style.overflow="scroll"),f=parseFloat(n.maxHeight)):n.overflowY!=="hidden"&&(i.style.overflow="hidden"),i.style.height=f+"px",v&&(i.style.textAlign=v),p&&p(),r!==f&&(i.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),r=f),I!==n.overflow&&!v)){var R=n.textAlign;n.overflow==="hidden"&&(i.style.textAlign=R==="start"?"end":"start"),h({restoreTextAlign:R,testForHeightReduction:!0})}}function _(){h({testForHeightReduction:!0,restoreTextAlign:null})}}(t)}),o}).destroy=function(o){return o&&Array.prototype.forEach.call(o.length?o:[o],ua),o},it.update=function(o){return o&&Array.prototype.forEach.call(o.length?o:[o],pa),o});var lt=it;class fa extends Ko{get _inputNode(){return Array.from(this.children).find(e=>e.slot==="input")}}class _a extends Yo(fa){static get properties(){return{maxRows:{type:Number,attribute:"max-rows"},rows:{type:Number,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("textarea");return e.style.resize!==void 0&&(e.style.resize="none"),e}}}constructor(){super(),this.rows=2,this.maxRows=6,this.readOnly=!1,this.placeholder=""}connectedCallback(){super.connectedCallback(),this.__initializeAutoresize(),this.__intersectionObserver=new IntersectionObserver(()=>this.resizeTextarea()),this.__intersectionObserver.observe(this)}updated(e){if(super.updated(e),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("rows")){const t=this._inputNode;t&&(t.rows=this.rows)}if(e.has("readOnly")){const t=this._inputNode;t&&(t.readOnly=this.readOnly)}if(e.has("placeholder")){const t=this._inputNode;t&&(t.placeholder=this.placeholder)}e.has("modelValue")&&this.resizeTextarea(),(e.has("maxRows")||e.has("rows"))&&this.setTextareaMaxHeight()}disconnectedCallback(){super.disconnectedCallback(),lt.destroy(this._inputNode)}setTextareaMaxHeight(){const{value:e}=this._inputNode;this._inputNode.value="",this.resizeTextarea();const t=window.getComputedStyle(this._inputNode,null),i=parseFloat(t.lineHeight)||parseFloat(t.height)/this.rows,s=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),r=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),n=t.boxSizing==="border-box"?s+r:0;this._inputNode.style.maxHeight=`${i*this.maxRows+n}px`,this._inputNode.value=e,this.resizeTextarea()}static get styles(){return[...super.styles,T`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          box-sizing: content-box;
          overflow-x: hidden; /* for FF adds height to the TextArea to reserve place for scroll-bars */
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }
      `]}get updateComplete(){return this.__textareaUpdateComplete?Promise.all([this.__textareaUpdateComplete,super.updateComplete]):super.updateComplete}resizeTextarea(){lt.update(this._inputNode)}__initializeAutoresize(){this.__shady_native_contains?this.__textareaUpdateComplete=this.__waitForTextareaRenderedInRealDOM().then(()=>{this.__startAutoresize(),this.__textareaUpdateComplete=null}):this.__startAutoresize()}async __waitForTextareaRenderedInRealDOM(){let e=3;for(;e!==0&&!this.__shady_native_contains(this._inputNode);)await new Promise(t=>setTimeout(t)),e-=1}__startAutoresize(){lt(this._inputNode),this.setTextareaMaxHeight()}}const ma=T`
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
    opacity: var(--co-opacity-disabled);
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
`;var Qe=function(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let Fe=class extends _a{constructor(){super(...arguments),this.size="md",this.danger=!1,this.resize="auto",this._handleFocusIn=()=>{this.dispatchEvent(new CustomEvent("co-focus",{bubbles:!0,composed:!0}))},this._handleFocusOut=()=>{this.dispatchEvent(new CustomEvent("co-blur",{bubbles:!0,composed:!0}))},this._handleNativeInput=e=>{e.target===this._inputNode&&(this.requestUpdate("value"),this._dispatchValueEvent("co-input"))},this._handleNativeChange=e=>{e.target===this._inputNode&&this._dispatchValueEvent("co-change")}}static get styles(){return[...super.styles,ma]}get slots(){const e=super.slots;return{...e,input:()=>{const t=e.input(),i=this.getAttribute("value");return i!==null&&(t.value=i),t}}}get value(){return super.value}set value(e){const t=this.value;super.value=e,this.requestUpdate("value",t),this._resizeForCurrentMode()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("input",this._handleNativeInput),this.addEventListener("change",this._handleNativeChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocusIn),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("input",this._handleNativeInput),this.removeEventListener("change",this._handleNativeChange)}firstUpdated(e){super.firstUpdated(e),this._syncNativeLengthAttributes(),this._applyResizeMode(),this._syncCounterDescription()}updated(e){super.updated(e),(e.has("maxLength")||e.has("minLength"))&&this._syncNativeLengthAttributes(),(e.has("resize")||e.has("rows")||e.has("maxRows"))&&this._applyResizeMode(),e.has("maxLength")&&this._syncCounterDescription()}resizeTextarea(){this.resize==="auto"&&super.resizeTextarea()}_groupTwoTemplate(){return u`
      ${this._inputGroupTemplate()}
      <div part="meta" class="form-field__meta">
        ${this._feedbackTemplate()} ${this._counterTemplate()}
      </div>
    `}_labelTemplate(){return u`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `}_helpTextTemplate(){return u`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `}_inputGroupTemplate(){return u`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot==="prefix")?u`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `:y}_inputGroupInputTemplate(){return u`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot==="suffix")?u`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `:y}_feedbackTemplate(){return u`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `}_counterTemplate(){return this._hasMaxLength()?u`
      <output
        part="counter"
        class="form-field__counter ${this._currentLength()>=this.maxLength?"form-field__counter--danger":""}"
      >
        ${this._currentLength()} / ${this.maxLength}
      </output>
    `:y}_dispatchValueEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this._inputNode.value,modelValue:this.modelValue},bubbles:!0,composed:!0}))}_hasMaxLength(){return typeof this.maxLength=="number"&&Number.isFinite(this.maxLength)&&this.maxLength>=0}_currentLength(){return this.value.length}_syncNativeLengthAttributes(){const e=this._inputNode;e&&(this._hasMaxLength()?e.maxLength=this.maxLength:e.removeAttribute("maxlength"),typeof this.minLength=="number"&&Number.isFinite(this.minLength)&&this.minLength>=0?e.minLength=this.minLength:e.removeAttribute("minlength"))}_applyResizeMode(){const e=this._inputNode;if(e){if(this.resize==="auto"){lt(e),this.setTextareaMaxHeight(),e.style.resize="none";return}lt.destroy(e),e.style.height="",e.style.maxHeight="",e.style.overflowY="",e.style.resize=this.resize==="vertical"?"vertical":"none"}}_resizeForCurrentMode(){!this._inputNode||this.resize!=="auto"||this.resizeTextarea()}_syncCounterDescription(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector('[part="counter"]');if(this._counterNode&&this._counterNode!==e&&(this.removeFromAriaDescribedBy(this._counterNode),this._counterNode=void 0),!this._hasMaxLength()){this._counterNode&&(this.removeFromAriaDescribedBy(this._counterNode),this._counterNode=void 0);return}e&&this._counterNode!==e&&(this.addToAriaDescribedBy(e,{idPrefix:"counter",reorder:!0}),this._counterNode=e)}};Qe([m({reflect:!0})],Fe.prototype,"size",void 0);Qe([m({type:Boolean,reflect:!0})],Fe.prototype,"danger",void 0);Qe([m({reflect:!0})],Fe.prototype,"resize",void 0);Qe([m({type:Number,attribute:"maxlength",reflect:!0})],Fe.prototype,"maxLength",void 0);Qe([m({type:Number,attribute:"minlength",reflect:!0})],Fe.prototype,"minLength",void 0);Fe=Qe([$("co-textarea")],Fe);export{J as CoAppShell,mt as CoBanner,Le as CoButton,ye as CoButtonIcon,Lt as CoCard,_i as CoCheckbox,vi as CoCheckboxGroup,mi as CoCheckboxIndeterminate,Y as CoCombobox,wi as CoForm,ge as CoIcon,ft as CoInput,_t as CoInputPill,Ge as CoLabel,xe as CoListbox,Ke as CoNavDrawer,we as CoNavDrawerItem,Vt as CoNavHeaderBar,vt as CoNavRailBar,oe as CoNavRailItem,Ei as CoNavSeparator,xi as CoOption,ki as CoRadio,Ci as CoRadioGroup,bt as CoSelect,Fe as CoTextarea};
