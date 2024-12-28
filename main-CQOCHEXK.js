var nS=Object.defineProperty,iS=Object.defineProperties;var rS=Object.getOwnPropertyDescriptors;var ug=Object.getOwnPropertySymbols;var sS=Object.prototype.hasOwnProperty,oS=Object.prototype.propertyIsEnumerable;var dg=(n,e,t)=>e in n?nS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,we=(n,e)=>{for(var t in e||={})sS.call(e,t)&&dg(n,t,e[t]);if(ug)for(var t of ug(e))oS.call(e,t)&&dg(n,t,e[t]);return n},St=(n,e)=>iS(n,rS(e));var rs=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function fg(n,e){return Object.is(n,e)}var Pt=null,fc=!1,$d=1,ss=Symbol("SIGNAL");function _t(n){let e=Pt;return Pt=n,e}function hg(){return Pt}var hc={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function pg(n){if(fc)throw new Error("");if(Pt===null)return;Pt.consumerOnSignalRead(n);let e=Pt.nextProducerIndex++;if(mc(Pt),e<Pt.producerNode.length&&Pt.producerNode[e]!==n&&wo(Pt)){let t=Pt.producerNode[e];pc(t,Pt.producerIndexOfThis[e])}Pt.producerNode[e]!==n&&(Pt.producerNode[e]=n,Pt.producerIndexOfThis[e]=wo(Pt)?yg(n,Pt,e):0),Pt.producerLastReadVersion[e]=n.version}function aS(){$d++}function mg(n){if(!(wo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===$d)){if(!n.producerMustRecompute(n)&&!Xd(n)){Wd(n);return}n.producerRecomputeValue(n),Wd(n)}}function gg(n){if(n.liveConsumerNode===void 0)return;let e=fc;fc=!0;try{for(let t of n.liveConsumerNode)t.dirty||lS(t)}finally{fc=e}}function cS(){return Pt?.consumerAllowSignalWrites!==!1}function lS(n){n.dirty=!0,gg(n),n.consumerMarkedDirty?.(n)}function Wd(n){n.dirty=!1,n.lastCleanEpoch=$d}function qd(n){return n&&(n.nextProducerIndex=0),_t(n)}function vg(n,e){if(_t(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(wo(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)pc(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Xd(n){mc(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(mg(t),i!==t.version))return!0}return!1}function Yd(n){if(mc(n),wo(n))for(let e=0;e<n.producerNode.length;e++)pc(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function yg(n,e,t){if(_g(n),n.liveConsumerNode.length===0&&xg(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=yg(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function pc(n,e){if(_g(n),n.liveConsumerNode.length===1&&xg(n))for(let i=0;i<n.producerNode.length;i++)pc(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];mc(r),r.producerIndexOfThis[i]=e}}function wo(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function mc(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function _g(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function xg(n){return n.producerNode!==void 0}function uS(){throw new Error}var Mg=uS;function dS(){Mg()}function Sg(n){Mg=n}var fS=null;function Eg(n,e){cS()||dS(),n.equal(n.value,e)||(n.value=e,hS(n))}var bg=St(we({},hc),{equal:fg,value:void 0});function hS(n){n.version++,aS(),gg(n),fS?.()}function Ve(n){return typeof n=="function"}function os(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var gc=os(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function To(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Rt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ve(i))try{i()}catch(s){e=s instanceof gc?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{wg(s)}catch(o){e=e??[],o instanceof gc?e=[...e,...o.errors]:e.push(o)}}if(e)throw new gc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)wg(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&To(t,e)}remove(e){let{_finalizers:t}=this;t&&To(t,e),e instanceof n&&e._removeParent(this)}};Rt.EMPTY=(()=>{let n=new Rt;return n.closed=!0,n})();var Zd=Rt.EMPTY;function vc(n){return n instanceof Rt||n&&"closed"in n&&Ve(n.remove)&&Ve(n.add)&&Ve(n.unsubscribe)}function wg(n){Ve(n)?n():n.unsubscribe()}var Un={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var as={setTimeout(n,e,...t){let{delegate:i}=as;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=as;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function yc(n){as.setTimeout(()=>{let{onUnhandledError:e}=Un;if(e)e(n);else throw n})}function Co(){}var Tg=Kd("C",void 0,void 0);function Cg(n){return Kd("E",void 0,n)}function Dg(n){return Kd("N",n,void 0)}function Kd(n,e,t){return{kind:n,value:e,error:t}}var hr=null;function cs(n){if(Un.useDeprecatedSynchronousErrorHandling){let e=!hr;if(e&&(hr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=hr;if(hr=null,t)throw i}}else n()}function Ag(n){Un.useDeprecatedSynchronousErrorHandling&&hr&&(hr.errorThrown=!0,hr.error=n)}var pr=class extends Rt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,vc(e)&&e.add(this)):this.destination=gS}static create(e,t,i){return new ls(e,t,i)}next(e){this.isStopped?Qd(Dg(e),this):this._next(e)}error(e){this.isStopped?Qd(Cg(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Qd(Tg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},pS=Function.prototype.bind;function Jd(n,e){return pS.call(n,e)}var ef=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){_c(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){_c(i)}else _c(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){_c(t)}}},ls=class extends pr{constructor(e,t,i){super();let r;if(Ve(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Un.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Jd(e.next,s),error:e.error&&Jd(e.error,s),complete:e.complete&&Jd(e.complete,s)}):r=e}this.destination=new ef(r)}};function _c(n){Un.useDeprecatedSynchronousErrorHandling?Ag(n):yc(n)}function mS(n){throw n}function Qd(n,e){let{onStoppedNotification:t}=Un;t&&as.setTimeout(()=>t(n,e))}var gS={closed:!0,next:Co,error:mS,complete:Co};var us=typeof Symbol=="function"&&Symbol.observable||"@@observable";function dn(n){return n}function tf(...n){return nf(n)}function nf(n){return n.length===0?dn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var gt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=yS(t)?t:new ls(t,i,r);return cs(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Ig(i),new i((r,s)=>{let o=new ls({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[us](){return this}pipe(...t){return nf(t)(this)}toPromise(t){return t=Ig(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Ig(n){var e;return(e=n??Un.Promise)!==null&&e!==void 0?e:Promise}function vS(n){return n&&Ve(n.next)&&Ve(n.error)&&Ve(n.complete)}function yS(n){return n&&n instanceof pr||vS(n)&&vc(n)}function rf(n){return Ve(n?.lift)}function it(n){return e=>{if(rf(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function rt(n,e,t,i,r){return new sf(n,e,t,i,r)}var sf=class extends pr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function ds(){return it((n,e)=>{let t=null;n._refCount++;let i=rt(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var fs=class extends gt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,rf(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Rt;let t=this.getSubject();e.add(this.source.subscribe(rt(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Rt.EMPTY)}return e}refCount(){return ds()(this)}};var Rg=os(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var qt=(()=>{class n extends gt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new xc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Rg}next(t){cs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){cs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){cs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Zd:(this.currentObservers=null,s.push(t),new Rt(()=>{this.currentObservers=null,To(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new gt;return t.source=this,t}}return n.create=(e,t)=>new xc(e,t),n})(),xc=class extends qt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Zd}};var Gt=class extends qt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var fn=new gt(n=>n.complete());function Ng(n){return n&&Ve(n.schedule)}function Pg(n){return n[n.length-1]}function Og(n){return Ve(Pg(n))?n.pop():void 0}function Pi(n){return Ng(Pg(n))?n.pop():void 0}function Fg(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Lg(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function mr(n){return this instanceof mr?(this.v=n,this):new mr(n)}function Ug(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(v){return new Promise(function(m,p){s.push([h,v,m,p])>1||c(h,v)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(v){f(s[0][3],v)}}function l(h){h.value instanceof mr?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function kg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Lg=="function"?Lg(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Mc=n=>n&&typeof n.length=="number"&&typeof n!="function";function Sc(n){return Ve(n?.then)}function Ec(n){return Ve(n[us])}function bc(n){return Symbol.asyncIterator&&Ve(n?.[Symbol.asyncIterator])}function wc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function _S(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Tc=_S();function Cc(n){return Ve(n?.[Tc])}function Dc(n){return Ug(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield mr(t.read());if(r)return yield mr(void 0);yield yield mr(i)}}finally{t.releaseLock()}})}function Ac(n){return Ve(n?.getReader)}function Vt(n){if(n instanceof gt)return n;if(n!=null){if(Ec(n))return xS(n);if(Mc(n))return MS(n);if(Sc(n))return SS(n);if(bc(n))return Bg(n);if(Cc(n))return ES(n);if(Ac(n))return bS(n)}throw wc(n)}function xS(n){return new gt(e=>{let t=n[us]();if(Ve(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function MS(n){return new gt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function SS(n){return new gt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,yc)})}function ES(n){return new gt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Bg(n){return new gt(e=>{wS(n,e).catch(t=>e.error(t))})}function bS(n){return Bg(Dc(n))}function wS(n,e){var t,i,r,s;return Fg(this,void 0,void 0,function*(){try{for(t=kg(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function cn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Ic(n,e=0){return it((t,i)=>{t.subscribe(rt(i,r=>cn(i,n,()=>i.next(r),e),()=>cn(i,n,()=>i.complete(),e),r=>cn(i,n,()=>i.error(r),e)))})}function Rc(n,e=0){return it((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Vg(n,e){return Vt(n).pipe(Rc(e),Ic(e))}function Hg(n,e){return Vt(n).pipe(Rc(e),Ic(e))}function zg(n,e){return new gt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Gg(n,e){return new gt(t=>{let i;return cn(t,e,()=>{i=n[Tc](),cn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ve(i?.return)&&i.return()})}function Nc(n,e){if(!n)throw new Error("Iterable cannot be null");return new gt(t=>{cn(t,e,()=>{let i=n[Symbol.asyncIterator]();cn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function jg(n,e){return Nc(Dc(n),e)}function Wg(n,e){if(n!=null){if(Ec(n))return Vg(n,e);if(Mc(n))return zg(n,e);if(Sc(n))return Hg(n,e);if(bc(n))return Nc(n,e);if(Cc(n))return Gg(n,e);if(Ac(n))return jg(n,e)}throw wc(n)}function Ot(n,e){return e?Wg(n,e):Vt(n)}function je(...n){let e=Pi(n);return Ot(n,e)}function hs(n,e){let t=Ve(n)?n:()=>n,i=r=>r.error(t());return new gt(e?r=>e.schedule(i,0,r):i)}function of(n){return!!n&&(n instanceof gt||Ve(n.lift)&&Ve(n.subscribe))}var fi=os(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function et(n,e){return it((t,i)=>{let r=0;t.subscribe(rt(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:TS}=Array;function CS(n,e){return TS(e)?n(...e):n(e)}function $g(n){return et(e=>CS(n,e))}var{isArray:DS}=Array,{getPrototypeOf:AS,prototype:IS,keys:RS}=Object;function qg(n){if(n.length===1){let e=n[0];if(DS(e))return{args:e,keys:null};if(NS(e)){let t=RS(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function NS(n){return n&&typeof n=="object"&&AS(n)===IS}function Xg(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Pc(...n){let e=Pi(n),t=Og(n),{args:i,keys:r}=qg(n);if(i.length===0)return Ot([],e);let s=new gt(PS(i,e,r?o=>Xg(r,o):dn));return t?s.pipe($g(t)):s}function PS(n,e,t=dn){return i=>{Yg(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Yg(e,()=>{let l=Ot(n[c],e),u=!1;l.subscribe(rt(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Yg(n,e,t){n?cn(t,n,e):e()}function Zg(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let m=!1;Vt(t(v,u++)).subscribe(rt(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?cn(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(rt(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Lt(n,e,t=1/0){return Ve(e)?Lt((i,r)=>et((s,o)=>e(i,s,r,o))(Vt(n(i,r))),t):(typeof e=="number"&&(t=e),it((i,r)=>Zg(i,r,n,t)))}function af(n=1/0){return Lt(dn,n)}function Kg(){return af(1)}function ps(...n){return Kg()(Ot(n,Pi(n)))}function Oc(n){return new gt(e=>{Vt(n()).subscribe(e)})}function kn(n,e){return it((t,i)=>{let r=0;t.subscribe(rt(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Oi(n){return it((e,t)=>{let i=null,r=!1,s;i=e.subscribe(rt(t,void 0,void 0,o=>{s=Vt(n(o,Oi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Jg(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(rt(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function ms(n,e){return Ve(e)?Lt(n,e,1):Lt(n,1)}function Li(n){return it((e,t)=>{let i=!1;e.subscribe(rt(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function hi(n){return n<=0?()=>fn:it((e,t)=>{let i=0;e.subscribe(rt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function cf(n){return et(()=>n)}function Lc(n=OS){return it((e,t)=>{let i=!1;e.subscribe(rt(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function OS(){return new fi}function Do(n){return it((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function pi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?kn((r,s)=>n(r,s,i)):dn,hi(1),t?Li(e):Lc(()=>new fi))}function gs(n){return n<=0?()=>fn:it((e,t)=>{let i=[];e.subscribe(rt(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function lf(n,e){let t=arguments.length>=2;return i=>i.pipe(n?kn((r,s)=>n(r,s,i)):dn,gs(1),t?Li(e):Lc(()=>new fi))}function uf(n,e){return it(Jg(n,e,arguments.length>=2,!0))}function df(...n){let e=Pi(n);return it((t,i)=>{(e?ps(n,t,e):ps(n,t)).subscribe(i)})}function Bn(n,e){return it((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(rt(i,c=>{r?.unsubscribe();let l=0,u=s++;Vt(n(c,u)).subscribe(r=rt(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function ff(n){return it((e,t)=>{Vt(n).subscribe(rt(t,()=>t.complete(),Co)),!t.closed&&e.subscribe(t)})}function jt(n,e,t){let i=Ve(n)||e||t?{next:n,error:e,complete:t}:n;return i?it((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(rt(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):dn}var Oe=class extends Error{code;constructor(e,t){super(sh(e,t)),this.code=e}};function sh(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var Lv=Symbol("InputSignalNode#UNSET"),LS=St(we({},bg),{transformFn:void 0,applyValueToInputSignal(n,e){Eg(n,e)}});function Fv(n,e){let t=Object.create(LS);t.value=n,t.transformFn=e?.transform;function i(){if(pg(t),t.value===Lv)throw new Oe(-950,!1);return t.value}return i[ss]=t,i}function oh(n){return{toString:n}.toString()}function xt(n){for(let e in n)if(n[e]===xt)return e;throw Error("Could not find renamed property on target object.")}function pn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(pn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Qg(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var FS=xt({__forward_ref__:xt});function Uv(n){return n.__forward_ref__=Uv,n.toString=function(){return pn(this())},n}function Qt(n){return kv(n)?n():n}function kv(n){return typeof n=="function"&&n.hasOwnProperty(FS)&&n.__forward_ref__===Uv}function ze(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function al(n){return ev(n,Vv)||ev(n,Hv)}function Bv(n){return al(n)!==null}function ev(n,e){return n.hasOwnProperty(e)?n[e]:null}function US(n){let e=n&&(n[Vv]||n[Hv]);return e||null}function tv(n){return n&&(n.hasOwnProperty(nv)||n.hasOwnProperty(kS))?n[nv]:null}var Vv=xt({\u0275prov:xt}),nv=xt({\u0275inj:xt}),Hv=xt({ngInjectableDef:xt}),kS=xt({ngInjectorDef:xt}),He=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=ze({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function zv(n){return n&&!!n.\u0275providers}var BS=xt({\u0275cmp:xt}),VS=xt({\u0275dir:xt}),HS=xt({\u0275pipe:xt}),zS=xt({\u0275mod:xt}),Hc=xt({\u0275fac:xt}),No=xt({__NG_ELEMENT_ID__:xt}),iv=xt({__NG_ENV_ID__:xt});function GS(n){return typeof n=="string"?n:n==null?"":String(n)}function jS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():GS(n)}function WS(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Oe(-200,n)}function ah(n,e){throw new Oe(-201,!1)}var Ke=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Ke||{}),Sf;function Gv(){return Sf}function bn(n){let e=Sf;return Sf=n,e}function jv(n,e,t){let i=al(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Ke.Optional)return null;if(e!==void 0)return e;ah(n,"Injector")}var $S={},Po=$S,qS="__NG_DI_FLAG__",zc="ngTempTokenPath",XS="ngTokenPath",YS=/\n/gm,ZS="\u0275",rv="__source",xs;function KS(){return xs}function Fi(n){let e=xs;return xs=n,e}function JS(n,e=Ke.Default){if(xs===void 0)throw new Oe(-203,!1);return xs===null?jv(n,void 0,e):xs.get(n,e&Ke.Optional?null:void 0,e)}function tt(n,e=Ke.Default){return(Gv()||JS)(Qt(n),e)}function fe(n,e=Ke.Default){return tt(n,cl(e))}function cl(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Ef(n){let e=[];for(let t=0;t<n.length;t++){let i=Qt(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Oe(900,!1);let r,s=Ke.Default;for(let o=0;o<i.length;o++){let a=i[o],c=QS(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(tt(r,s))}else e.push(tt(i))}return e}function QS(n){return n[qS]}function eE(n,e,t,i){let r=n[zc];throw e[rv]&&r.unshift(e[rv]),n.message=tE(`
`+n.message,r,t,i),n[XS]=r,n[zc]=null,n}function tE(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==ZS?n.slice(2):n;let r=pn(e);if(Array.isArray(e))r=e.map(pn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):pn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(YS,`
  `)}`}function Ss(n,e){let t=n.hasOwnProperty(Hc);return t?n[Hc]:null}function ch(n,e){n.forEach(t=>Array.isArray(t)?ch(t,e):e(t))}function Wv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Gc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var Oo={},Es=[],bs=new He(""),$v=new He("",-1),qv=new He(""),jc=class{get(e,t=Po){if(t===Po){let i=new Error(`NullInjectorError: No provider for ${pn(e)}!`);throw i.name="NullInjectorError",i}return t}};function Xv(n,e){let t=n[zS]||null;if(!t&&e===!0)throw new Error(`Type ${pn(n)} does not have '\u0275mod' property.`);return t}function yr(n){return n[BS]||null}function Yv(n){return n[VS]||null}function Zv(n){return n[HS]||null}function Kv(n){let e=yr(n)||Yv(n)||Zv(n);return e!==null?e.standalone:!1}function ll(n){return{\u0275providers:n}}function nE(...n){return{\u0275providers:Jv(!0,n),\u0275fromNgModule:!0}}function Jv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return ch(e,o=>{let a=o;bf(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Qv(r,s),t}function Qv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];lh(r,s=>{e(s,i)})}}function bf(n,e,t,i){if(n=Qt(n),!n)return!1;let r=null,s=tv(n),o=!s&&yr(n);if(!s&&!o){let c=n.ngModule;if(s=tv(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)bf(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{ch(s.imports,u=>{bf(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Qv(l,e)}if(!a){let l=Ss(r)||(()=>new r);e({provide:r,useFactory:l,deps:Es},r),e({provide:qv,useValue:r,multi:!0},r),e({provide:bs,useValue:()=>tt(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;lh(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function lh(n,e){for(let t of n)zv(t)&&(t=t.\u0275providers),Array.isArray(t)?lh(t,e):e(t)}var iE=xt({provide:String,useValue:xt});function ey(n){return n!==null&&typeof n=="object"&&iE in n}function rE(n){return!!(n&&n.useExisting)}function sE(n){return!!(n&&n.useFactory)}function ws(n){return typeof n=="function"}function oE(n){return!!n.useClass}var ul=new He(""),Fc={},aE={},hf;function uh(){return hf===void 0&&(hf=new jc),hf}var Tn=class{},Lo=class extends Tn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,Tf(e,o=>this.processProvider(o)),this.records.set($v,vs(void 0,this)),r.has("environment")&&this.records.set(Tn,vs(void 0,this));let s=this.records.get(ul);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(qv,Es,Ke.Self))}destroy(){Io(this),this._destroyed=!0;let e=_t(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),_t(e)}}onDestroy(e){return Io(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Io(this);let t=Fi(this),i=bn(void 0),r;try{return e()}finally{Fi(t),bn(i)}}get(e,t=Po,i=Ke.Default){if(Io(this),e.hasOwnProperty(iv))return e[iv](this);i=cl(i);let r,s=Fi(this),o=bn(void 0);try{if(!(i&Ke.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=fE(e)&&al(e);l&&this.injectableDefInScope(l)?c=vs(wf(e),Fc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Ke.Self?uh():this.parent;return t=i&Ke.Optional&&t===Po?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[zc]=a[zc]||[]).unshift(pn(e)),s)throw a;return eE(a,e,"R3InjectorError",this.source)}else throw a}finally{bn(o),Fi(s)}}resolveInjectorInitializers(){let e=_t(null),t=Fi(this),i=bn(void 0),r;try{let s=this.get(bs,Es,Ke.Self);for(let o of s)o()}finally{Fi(t),bn(i),_t(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(pn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Qt(e);let t=ws(e)?e:Qt(e&&e.provide),i=lE(e);if(!ws(e)&&e.multi===!0){let r=this.records.get(t);r||(r=vs(void 0,Fc,!0),r.factory=()=>Ef(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=_t(null);try{return t.value===Fc&&(t.value=aE,t.value=t.factory()),typeof t.value=="object"&&t.value&&dE(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{_t(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Qt(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function wf(n){let e=al(n),t=e!==null?e.factory:Ss(n);if(t!==null)return t;if(n instanceof He)throw new Oe(204,!1);if(n instanceof Function)return cE(n);throw new Oe(204,!1)}function cE(n){if(n.length>0)throw new Oe(204,!1);let t=US(n);return t!==null?()=>t.factory(n):()=>new n}function lE(n){if(ey(n))return vs(void 0,n.useValue);{let e=ty(n);return vs(e,Fc)}}function ty(n,e,t){let i;if(ws(n)){let r=Qt(n);return Ss(r)||wf(r)}else if(ey(n))i=()=>Qt(n.useValue);else if(sE(n))i=()=>n.useFactory(...Ef(n.deps||[]));else if(rE(n))i=()=>tt(Qt(n.useExisting));else{let r=Qt(n&&(n.useClass||n.provide));if(uE(n))i=()=>new r(...Ef(n.deps));else return Ss(r)||wf(r)}return i}function Io(n){if(n.destroyed)throw new Oe(205,!1)}function vs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function uE(n){return!!n.deps}function dE(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function fE(n){return typeof n=="function"||typeof n=="object"&&n instanceof He}function Tf(n,e){for(let t of n)Array.isArray(t)?Tf(t,e):t&&zv(t)?Tf(t.\u0275providers,e):e(t)}function Gn(n,e){n instanceof Lo&&Io(n);let t,i=Fi(n),r=bn(void 0);try{return e()}finally{Fi(i),bn(r)}}function hE(){return Gv()!==void 0||KS()!=null}function pE(n){return typeof n=="function"}var gi=0,Qe=1,Be=2,en=3,Hn=4,jn=5,Wc=6,sv=7,Bi=8,Ts=9,Vi=10,mi=11,Fo=12,ov=13,Ho=14,Jn=15,Uo=16,ys=17,dl=18,fl=19,ny=20,ki=21,pf=22,$c=23,mn=24,Cs=25,iy=1;var _r=7,qc=8,Xc=9,wn=10,Yc=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(Yc||{});function gr(n){return Array.isArray(n)&&typeof n[iy]=="object"}function vi(n){return Array.isArray(n)&&n[iy]===!0}function ry(n){return(n.flags&4)!==0}function dh(n){return n.componentOffset>-1}function mE(n){return(n.flags&1)===1}function Ps(n){return!!n.template}function Cf(n){return(n[Be]&512)!==0}var Df=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function sy(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var fh=(()=>{let n=()=>oy;return n.ngInherit=!0,n})();function oy(n){return n.type.prototype.ngOnChanges&&(n.setInput=vE),gE}function gE(){let n=cy(this),e=n?.current;if(e){let t=n.previous;if(t===Oo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function vE(n,e,t,i,r){let s=this.declaredInputs[i],o=cy(n)||yE(n,{previous:Oo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Df(l&&l.currentValue,t,c===Oo),sy(n,e,r,t)}var ay="__ngSimpleChanges__";function cy(n){return n[ay]||null}function yE(n,e){return n[ay]=e}var av=null;var Ui=function(n,e,t){av?.(n,e,t)},_E="svg",xE="math";function Hi(n){for(;Array.isArray(n);)n=n[gi];return n}function yi(n,e){return Hi(e[n.index])}function ME(n,e){return n.data[e]}function zo(n,e){let t=e[n];return gr(t)?t:t[gi]}function hh(n){return(n[Be]&128)===128}function SE(n){return vi(n[en])}function cv(n,e){return e==null?null:n[e]}function ly(n){n[ys]=0}function ph(n){n[Be]&1024||(n[Be]|=1024,hh(n)&&pl(n))}function hl(n){return!!(n[Be]&9216||n[mn]?.dirty)}function Af(n){n[Vi].changeDetectionScheduler?.notify(9),n[Be]&64&&(n[Be]|=1024),hl(n)&&pl(n)}function pl(n){n[Vi].changeDetectionScheduler?.notify(0);let e=xr(n);for(;e!==null&&!(e[Be]&8192||(e[Be]|=8192,!hh(e)));)e=xr(e)}function uy(n,e){if((n[Be]&256)===256)throw new Oe(911,!1);n[ki]===null&&(n[ki]=[]),n[ki].push(e)}function EE(n,e){if(n[ki]===null)return;let t=n[ki].indexOf(e);t!==-1&&n[ki].splice(t,1)}function xr(n){let e=n[en];return vi(e)?e[en]:e}var vt={lFrame:yy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var If=!1;function bE(){return vt.lFrame.elementDepthCount}function wE(){vt.lFrame.elementDepthCount++}function TE(){vt.lFrame.elementDepthCount--}function dy(){return vt.bindingsEnabled}function CE(){return vt.skipHydrationRootTNode!==null}function DE(n){return vt.skipHydrationRootTNode===n}function AE(){vt.skipHydrationRootTNode=null}function zn(){return vt.lFrame.lView}function ml(){return vt.lFrame.tView}function ei(){let n=fy();for(;n!==null&&n.type===64;)n=n.parent;return n}function fy(){return vt.lFrame.currentTNode}function IE(){let n=vt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function mh(n,e){let t=vt.lFrame;t.currentTNode=n,t.isParent=e}function hy(){return vt.lFrame.isParent}function RE(){vt.lFrame.isParent=!1}function py(){return If}function lv(n){let e=If;return If=n,e}function NE(n){return vt.lFrame.bindingIndex=n}function PE(){return vt.lFrame.inI18n}function OE(n,e){let t=vt.lFrame;t.bindingIndex=t.bindingRootIndex=n,Rf(e)}function LE(){return vt.lFrame.currentDirectiveIndex}function Rf(n){vt.lFrame.currentDirectiveIndex=n}function my(n){vt.lFrame.currentQueryIndex=n}function FE(n){let e=n[Qe];return e.type===2?e.declTNode:e.type===1?n[jn]:null}function gy(n,e,t){if(t&Ke.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Ke.Host);)if(r=FE(s),r===null||(s=s[Ho],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=vt.lFrame=vy();return i.currentTNode=e,i.lView=n,!0}function gh(n){let e=vy(),t=n[Qe];vt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function vy(){let n=vt.lFrame,e=n===null?null:n.child;return e===null?yy(n):e}function yy(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function _y(){let n=vt.lFrame;return vt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var xy=_y;function vh(){let n=_y();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function UE(){return vt.lFrame.selectedIndex}function Mr(n){vt.lFrame.selectedIndex=n}function kE(){return vt.lFrame.currentNamespace}var My=!0;function BE(){return My}function VE(n){My=n}function HE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=oy(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Sy(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Uc(n,e,t){Ey(n,e,3,t)}function kc(n,e,t,i){(n[Be]&3)===t&&Ey(n,e,t,i)}function mf(n,e){let t=n[Be];(t&3)===e&&(t&=16383,t+=1,n[Be]=t)}function Ey(n,e,t,i){let r=i!==void 0?n[ys]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[ys]+=65536),(a<s||s==-1)&&(zE(n,t,e,c),n[ys]=(n[ys]&4294901760)+c+2),c++}function uv(n,e){Ui(4,n,e);let t=_t(null);try{e.call(n)}finally{_t(t),Ui(5,n,e)}}function zE(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Be]>>14<n[ys]>>16&&(n[Be]&3)===e&&(n[Be]+=16384,uv(a,s)):uv(a,s)}var Ms=-1,Sr=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function GE(n){return n instanceof Sr}function jE(n){return(n.flags&8)!==0}function WE(n){return(n.flags&16)!==0}function Nf(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];qE(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function $E(n){return n===3||n===4||n===6}function qE(n){return n.charCodeAt(0)===64}function yh(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?dv(n,t,r,null,e[++i]):dv(n,t,r,null,null))}}return n}function dv(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var gf={},Pf=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=cl(i);let r=this.injector.get(e,gf,i);return r!==gf||t===gf?r:this.parentInjector.get(e,t,i)}};function by(n){return n!==Ms}function Zc(n){return n&32767}function XE(n){return n>>16}function Kc(n,e){let t=XE(n),i=e;for(;t>0;)i=i[Ho],t--;return i}var Of=!0;function fv(n){let e=Of;return Of=n,e}var YE=256,wy=YE-1,Ty=5,ZE=0,Kn={};function KE(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(No)&&(i=t[No]),i==null&&(i=t[No]=ZE++);let r=i&wy,s=1<<r;e.data[n+(r>>Ty)]|=s}function Jc(n,e){let t=Cy(n,e);if(t!==-1)return t;let i=e[Qe];i.firstCreatePass&&(n.injectorIndex=e.length,vf(i.data,n),vf(e,null),vf(i.blueprint,null));let r=_h(n,e),s=n.injectorIndex;if(by(r)){let o=Zc(r),a=Kc(r,e),c=a[Qe].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function vf(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Cy(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function _h(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Ny(r),i===null)return Ms;if(t++,r=r[Ho],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Ms}function Lf(n,e,t){KE(n,e,t)}function Dy(n,e,t){if(t&Ke.Optional||n!==void 0)return n;ah(e,"NodeInjector")}function Ay(n,e,t,i){if(t&Ke.Optional&&i===void 0&&(i=null),!(t&(Ke.Self|Ke.Host))){let r=n[Ts],s=bn(void 0);try{return r?r.get(e,i,t&Ke.Optional):jv(e,i,t&Ke.Optional)}finally{bn(s)}}return Dy(i,e,t)}function Iy(n,e,t,i=Ke.Default,r){if(n!==null){if(e[Be]&2048&&!(i&Ke.Self)){let o=nb(n,e,t,i,Kn);if(o!==Kn)return o}let s=Ry(n,e,t,i,Kn);if(s!==Kn)return s}return Ay(e,t,i,r)}function Ry(n,e,t,i,r){let s=eb(t);if(typeof s=="function"){if(!gy(e,n,i))return i&Ke.Host?Dy(r,t,i):Ay(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Ke.Optional))ah(t);else return o}finally{xy()}}else if(typeof s=="number"){let o=null,a=Cy(n,e),c=Ms,l=i&Ke.Host?e[Jn][jn]:null;for((a===-1||i&Ke.SkipSelf)&&(c=a===-1?_h(n,e):e[a+8],c===Ms||!pv(i,!1)?a=-1:(o=e[Qe],a=Zc(c),e=Kc(c,e)));a!==-1;){let u=e[Qe];if(hv(s,a,u.data)){let d=JE(a,e,t,o,i,l);if(d!==Kn)return d}c=e[a+8],c!==Ms&&pv(i,e[Qe].data[a+8]===l)&&hv(s,a,e)?(o=u,a=Zc(c),e=Kc(c,e)):a=-1}}return r}function JE(n,e,t,i,r,s){let o=e[Qe],a=o.data[n+8],c=i==null?dh(a)&&Of:i!=o&&(a.type&3)!==0,l=r&Ke.Host&&s===a,u=QE(a,o,t,c,l);return u!==null?Ds(e,o,u,a):Kn}function QE(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&Ps(h)&&h.type===t)return c}return null}function Ds(n,e,t,i){let r=n[t],s=e.data;if(GE(r)){let o=r;o.resolving&&WS(jS(s[t]));let a=fv(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?bn(o.injectImpl):null,u=gy(n,i,Ke.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&HE(t,s[t],e)}finally{l!==null&&bn(l),fv(a),o.resolving=!1,xy()}}return r}function eb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(No)?n[No]:void 0;return typeof e=="number"?e>=0?e&wy:tb:e}function hv(n,e,t){let i=1<<n;return!!(t[e+(n>>Ty)]&i)}function pv(n,e){return!(n&Ke.Self)&&!(n&Ke.Host&&e)}var vr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Iy(this._tNode,this._lView,e,cl(i),t)}};function tb(){return new vr(ei(),zn())}function xh(n){return oh(()=>{let e=n.prototype.constructor,t=e[Hc]||Ff(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Hc]||Ff(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Ff(n){return kv(n)?()=>{let e=Ff(Qt(n));return e&&e()}:Ss(n)}function nb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Be]&2048&&!(o[Be]&512);){let a=Ry(s,o,t,i|Ke.Self,Kn);if(a!==Kn)return a;let c=s.parent;if(!c){let l=o[ny];if(l){let u=l.get(t,Kn,i);if(u!==Kn)return u}c=Ny(o),o=o[Ho]}s=c}return r}function Ny(n){let e=n[Qe],t=e.type;return t===2?e.declTNode:t===1?n[jn]:null}function mv(n,e=null,t=null,i){let r=Py(n,e,t,i);return r.resolveInjectorInitializers(),r}function Py(n,e=null,t=null,i,r=new Set){let s=[t||Es,nE(n)];return i=i||(typeof n=="object"?void 0:pn(n)),new Lo(s,e||uh(),i||null,r)}var zi=class n{static THROW_IF_NOT_FOUND=Po;static NULL=new jc;static create(e,t){if(Array.isArray(e))return mv({name:""},t,e,"");{let i=e.name??"";return mv({name:i},e.parent,e.providers,i)}}static \u0275prov=ze({token:n,providedIn:"any",factory:()=>tt($v)});static __NG_ELEMENT_ID__=-1};var ib=new He("");ib.__NG_ELEMENT_ID__=n=>{let e=ei();if(e===null)throw new Oe(204,!1);if(e.type&2)return e.value;if(n&Ke.Optional)return null;throw new Oe(204,!1)};var Oy=!1,Ly=(()=>{class n{static __NG_ELEMENT_ID__=rb;static __NG_ENV_ID__=t=>t}return n})(),Uf=class extends Ly{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return uy(this._lView,e),()=>EE(this._lView,e)}};function rb(){return new Uf(zn())}var ko=class{},gl=new He("",{providedIn:"root",factory:()=>!1});var Fy=new He(""),Uy=new He(""),Os=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new Gt(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=ze({token:n,providedIn:"root",factory:()=>new n})}return n})();var kf=class extends qt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,hE()&&(this.destroyRef=fe(Ly,{optional:!0})??void 0,this.pendingTasks=fe(Os,{optional:!0})??void 0)}emit(e){let t=_t(null);try{super.next(e)}finally{_t(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Rt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},hn=kf;function Qc(...n){}function ky(n){let e,t;function i(){n=Qc;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function gv(n){return queueMicrotask(()=>n()),()=>{n=Qc}}var Mh="isAngularZone",el=Mh+"_ID",sb=0,Ft=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new hn(!1);onMicrotaskEmpty=new hn(!1);onStable=new hn(!1);onError=new hn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=Oy}=e;if(typeof Zone>"u")throw new Oe(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,cb(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Mh)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Oe(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Oe(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,ob,Qc,Qc);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},ob={};function Sh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function ab(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){ky(()=>{n.callbackScheduled=!1,Bf(n),n.isCheckStableRunning=!0,Sh(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Bf(n)}function cb(n){let e=()=>{ab(n)},t=sb++;n._inner=n._inner.fork({name:"angular",properties:{[Mh]:!0,[el]:t,[el+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(lb(c))return i.invokeTask(s,o,a,c);try{return vv(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),yv(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return vv(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!ub(c)&&e(),yv(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Bf(n),Sh(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Bf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function vv(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function yv(n){n._nesting--,Sh(n)}var Vf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new hn;onMicrotaskEmpty=new hn;onStable=new hn;onError=new hn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function lb(n){return By(n,"__ignore_ng_zone__")}function ub(n){return By(n,"__scheduler_tick__")}function By(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Gi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},db=new He("",{providedIn:"root",factory:()=>{let n=fe(Ft),e=fe(Gi);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function _v(n,e){return Fv(n,e)}function fb(n){return Fv(Lv,n)}var Vy=(_v.required=fb,_v);function hb(){return Eh(ei(),zn())}function Eh(n,e){return new vl(yi(n,e))}var vl=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=hb}return n})();function Hy(n){return(n.flags&128)===128}var zy=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(zy||{}),Gy=new Map,pb=0;function mb(){return pb++}function gb(n){Gy.set(n[fl],n)}function Hf(n){Gy.delete(n[fl])}var xv="__ngContext__";function As(n,e){gr(e)?(n[xv]=e[fl],gb(e)):n[xv]=e}function jy(n){return $y(n[Fo])}function Wy(n){return $y(n[Hn])}function $y(n){for(;n!==null&&!vi(n);)n=n[Hn];return n}var zf;function qy(n){zf=n}function vb(){if(zf!==void 0)return zf;if(typeof document<"u")return document;throw new Oe(210,!1)}var bh=new He("",{providedIn:"root",factory:()=>yb}),yb="ng",wh=new He(""),Ls=new He("",{providedIn:"platform",factory:()=>"unknown"});var Th=new He("",{providedIn:"root",factory:()=>vb().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var _b="h",xb="b";var Xy=!1,Mb=new He("",{providedIn:"root",factory:()=>Xy});var Yy=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(Yy||{}),Zy=new He(""),Mv=new Set;function Ch(n){Mv.has(n)||(Mv.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Sb=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=ze({token:n,providedIn:"root",factory:()=>new n})}return n})();var Eb=()=>null;function Dh(n,e,t=!1){return Eb(n,e,t)}var Qn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Qn||{});function Ky(n){return n instanceof Function?n():n}var ji=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(ji||{}),Er=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Er||{}),bb;function Ah(n,e){return bb(n,e)}function _s(n,e,t,i,r){if(i!=null){let s,o=!1;vi(i)?s=i:gr(i)&&(o=!0,i=i[gi]);let a=Hi(i);n===0&&t!==null?r==null?n_(e,t,a):tl(e,t,a,r||null,!0):n===1&&t!==null?tl(e,t,a,r||null,!0):n===2?kb(e,a,o):n===3&&e.destroyNode(a),s!=null&&Vb(e,n,s,t,r)}}function Jy(n,e,t){return n.createElement(e,t)}function wb(n,e){Qy(n,e),e[gi]=null,e[jn]=null}function Tb(n,e,t,i,r,s){i[gi]=r,i[jn]=e,yl(n,i,t,1,r,s)}function Qy(n,e){e[Vi].changeDetectionScheduler?.notify(10),yl(n,e,e[mi],2,null,null)}function Cb(n){let e=n[Fo];if(!e)return yf(n[Qe],n);for(;e;){let t=null;if(gr(e))t=e[Fo];else{let i=e[wn];i&&(t=i)}if(!t){for(;e&&!e[Hn]&&e!==n;)gr(e)&&yf(e[Qe],e),e=e[en];e===null&&(e=n),gr(e)&&yf(e[Qe],e),t=e&&e[Hn]}e=t}}function Db(n,e,t,i){let r=wn+i,s=t.length;i>0&&(t[r-1][Hn]=e),i<s-wn?(e[Hn]=t[r],Wv(t,wn+i,e)):(t.push(e),e[Hn]=null),e[en]=t;let o=e[Uo];o!==null&&t!==o&&e_(o,e);let a=e[dl];a!==null&&a.insertView(n),Af(e),e[Be]|=128}function e_(n,e){let t=n[Xc],i=e[en];if(gr(i))n[Be]|=Yc.HasTransplantedViews;else{let r=i[en][Jn];e[Jn]!==r&&(n[Be]|=Yc.HasTransplantedViews)}t===null?n[Xc]=[e]:t.push(e)}function Ih(n,e){let t=n[Xc],i=t.indexOf(e);t.splice(i,1)}function Gf(n,e){if(n.length<=wn)return;let t=wn+e,i=n[t];if(i){let r=i[Uo];r!==null&&r!==n&&Ih(r,i),e>0&&(n[t-1][Hn]=i[Hn]);let s=Gc(n,wn+e);wb(i[Qe],i);let o=s[dl];o!==null&&o.detachView(s[Qe]),i[en]=null,i[Hn]=null,i[Be]&=-129}return i}function t_(n,e){if(!(e[Be]&256)){let t=e[mi];t.destroyNode&&yl(n,e,t,3,null,null),Cb(e)}}function yf(n,e){if(e[Be]&256)return;let t=_t(null);try{e[Be]&=-129,e[Be]|=256,e[mn]&&Yd(e[mn]),Ib(n,e),Ab(n,e),e[Qe].type===1&&e[mi].destroy();let i=e[Uo];if(i!==null&&vi(e[en])){i!==e[en]&&Ih(i,e);let r=e[dl];r!==null&&r.detachView(n)}Hf(e)}finally{_t(t)}}function Ab(n,e){let t=n.cleanup,i=e[sv];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[sv]=null);let r=e[ki];if(r!==null){e[ki]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[$c];if(s!==null){e[$c]=null;for(let o of s)o.destroy()}}function Ib(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Sr)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Ui(4,a,c);try{c.call(a)}finally{Ui(5,a,c)}}else{Ui(4,r,s);try{s.call(r)}finally{Ui(5,r,s)}}}}}function Rb(n,e,t){return Nb(n,e.parent,t)}function Nb(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[gi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Qn.None||s===Qn.Emulated)return null}return yi(i,t)}}function tl(n,e,t,i,r){n.insertBefore(e,t,i,r)}function n_(n,e,t){n.appendChild(e,t)}function Sv(n,e,t,i,r){i!==null?tl(n,e,t,i,r):n_(n,e,t)}function i_(n,e){return n.parentNode(e)}function Pb(n,e){return n.nextSibling(e)}function Ob(n,e,t){return Fb(n,e,t)}function Lb(n,e,t){return n.type&40?yi(n,t):null}var Fb=Lb,Ev;function Ub(n,e,t,i){let r=Rb(n,i,e),s=e[mi],o=i.parent||e[jn],a=Ob(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Sv(s,r,t[c],a,!1);else Sv(s,r,t,a,!1);Ev!==void 0&&Ev(s,i,e,t,r)}function Ro(n,e){if(e!==null){let t=e.type;if(t&3)return yi(e,n);if(t&4)return jf(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Ro(n,i);{let r=n[e.index];return vi(r)?jf(-1,r):Hi(r)}}else{if(t&128)return Ro(n,e.next);if(t&32)return Ah(e,n)()||Hi(n[e.index]);{let i=r_(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=xr(n[Jn]);return Ro(r,i)}else return Ro(n,e.next)}}}return null}function r_(n,e){if(e!==null){let i=n[Jn][jn],r=e.projection;return i.projection[r]}return null}function jf(n,e){let t=wn+n+1;if(t<e.length){let i=e[t],r=i[Qe].firstChild;if(r!==null)return Ro(i,r)}return e[_r]}function kb(n,e,t){n.removeChild(null,e,t)}function Rh(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&As(Hi(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)Rh(n,e,t.child,i,r,s,!1),_s(e,n,r,a,s);else if(c&32){let l=Ah(t,i),u;for(;u=l();)_s(e,n,r,u,s);_s(e,n,r,a,s)}else c&16?Bb(n,e,i,t,r,s):_s(e,n,r,a,s);t=o?t.projectionNext:t.next}}function yl(n,e,t,i,r,s){Rh(t,i,n.firstChild,e,r,s,!1)}function Bb(n,e,t,i,r,s){let o=t[Jn],c=o[jn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];_s(e,n,r,u,s)}else{let l=c,u=o[en];Hy(i)&&(l.flags|=128),Rh(n,e,l,u,r,s,!0)}}function Vb(n,e,t,i,r){let s=t[_r],o=Hi(t);s!==o&&_s(e,n,i,s,r);for(let a=wn;a<t.length;a++){let c=t[a];yl(c[Qe],c,n,e,i,s)}}function Hb(n,e,t){n.setAttribute(e,"style",t)}function s_(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function o_(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Nf(n,e,i),r!==null&&s_(n,e,r),s!==null&&Hb(n,e,s)}function zb(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var a_="ng-template";function Gb(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&zb(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Nh(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Nh(n){return n.type===4&&n.value!==a_}function jb(n,e,t){let i=n.type===4&&!t?a_:n.value;return e===i}function Wb(n,e,t){let i=4,r=n.attrs,s=r!==null?Xb(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Vn(i)&&!Vn(c))return!1;if(o&&Vn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!jb(n,c,t)||c===""&&e.length===1){if(Vn(i))return!1;o=!0}}else if(i&8){if(r===null||!Gb(n,r,c,t)){if(Vn(i))return!1;o=!0}}else{let l=e[++a],u=$b(c,r,Nh(n),t);if(u===-1){if(Vn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Vn(i))return!1;o=!0}}}}return Vn(i)||o}function Vn(n){return(n&1)===0}function $b(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Yb(e,n)}function qb(n,e,t=!1){for(let i=0;i<e.length;i++)if(Wb(n,e[i],t))return!0;return!1}function Xb(n){for(let e=0;e<n.length;e++){let t=n[e];if($E(t))return e}return n.length}function Yb(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function bv(n,e){return n?":not("+e.trim()+")":e}function Zb(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Vn(o)&&(e+=bv(s,r),r=""),i=o,s=s||!Vn(i);t++}return r!==""&&(e+=bv(s,r)),e}function Kb(n){return n.map(Zb).join(",")}function Jb(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Vn(r))break;r=s}i++}return{attrs:e,classes:t}}var c_={};function Qb(n,e,t,i){if(!i)if((e[Be]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Uc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&kc(e,s,0,t)}Mr(t)}function br(n,e=Ke.Default){let t=zn();if(t===null)return tt(n,e);let i=ei();return Iy(i,t,Qt(n),e)}function l_(n,e,t,i,r,s){let o=_t(null);try{let a=null;r&ji.SignalBased&&(a=e[i][ss]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&ji.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):sy(e,a,i,s)}finally{_t(o)}}function ew(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Mr(~r);else{let s=r,o=t[++i],a=t[++i];OE(o,s);let c=e[s];a(2,c)}}}finally{Mr(-1)}}function Ph(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[gi]=r,d[Be]=i|4|128|8|64|1024,(l!==null||n&&n[Be]&2048)&&(d[Be]|=2048),ly(d),d[en]=d[Ho]=n,d[Bi]=t,d[Vi]=o||n&&n[Vi],d[mi]=a||n&&n[mi],d[Ts]=c||n&&n[Ts]||null,d[jn]=s,d[fl]=mb(),d[Wc]=u,d[ny]=l,d[Jn]=e.type==2?n[Jn]:d,d}function u_(n,e,t,i,r){let s=n.data[e];if(s===null)s=tw(n,e,t,i,r),PE()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=IE();s.injectorIndex=o===null?-1:o.injectorIndex}return mh(s,!0),s}function tw(n,e,t,i,r){let s=fy(),o=hy(),a=o?s:s&&s.parent,c=n.data[e]=cw(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function d_(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function f_(n,e,t,i,r){let s=UE(),o=i&2;try{Mr(-1),o&&e.length>Cs&&Qb(n,e,Cs,!1),Ui(o?2:0,r),t(i,r)}finally{Mr(s),Ui(o?3:1,r)}}function h_(n,e,t){if(ry(e)){let i=_t(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{_t(i)}}}function nw(n,e,t){dy()&&(hw(n,e,t,yi(t,e)),(t.flags&64)===64&&v_(n,e,t))}function iw(n,e,t=yi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function p_(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=m_(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function m_(n,e,t,i,r,s,o,a,c,l,u){let d=Cs+i,f=d+r,h=rw(d,f),g=typeof l=="function"?l():l;return h[Qe]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function rw(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:c_);return t}function sw(n,e,t,i){let s=i.get(Mb,Xy)||t===Qn.ShadowDom,o=n.selectRootElement(e,s);return ow(o),o}function ow(n){aw(n)}var aw=()=>null;function cw(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return CE()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function wv(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=ji.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Tv(i,t,l,a,c):Tv(i,t,l,a)}return i}function Tv(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function lw(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,h=f?f.inputs:null,g=f?f.outputs:null;c=wv(0,d.inputs,u,c,h),l=wv(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!Nh(e)?Sw(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function uw(n,e,t,i){if(dy()){let r=i===null?null:{"":-1},s=mw(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&g_(n,e,t,o,r,a),r&&gw(t,i,r)}t.mergedAttrs=yh(t.mergedAttrs,t.attrs)}function g_(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Lf(Jc(t,e),n,i[l].type);yw(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=d_(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=yh(t.mergedAttrs,u.hostAttrs),_w(n,t,e,c,u),vw(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}lw(n,t,s)}function dw(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;fw(o)!=a&&o.push(a),o.push(t,i,s)}}function fw(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function hw(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;dh(t)&&xw(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Jc(t,e),As(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=Ds(e,n,a,t);if(As(l,e),o!==null&&Mw(e,a-r,l,c,t,o),Ps(c)){let u=zo(t.index,e);u[Bi]=Ds(e,n,a,t)}}}function v_(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=LE();try{Mr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Rf(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&pw(c,l)}}finally{Mr(-1),Rf(o)}}function pw(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function mw(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(qb(e,o.selectors,!1))if(i||(i=[]),Ps(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Wf(n,e,c)}else i.unshift(o),Wf(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Wf(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function gw(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Oe(-301,!1);i.push(e[r],s)}}}function vw(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Ps(e)&&(t[""]=n)}}function yw(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function _w(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Ss(r.type,!0)),o=new Sr(s,Ps(r),br);n.blueprint[i]=o,t[i]=o,dw(n,e,i,d_(n,t,r.hostVars,c_),r)}function y_(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function xw(n,e,t){let i=yi(e,n),r=p_(t),s=n[Vi].rendererFactory,o=Oh(n,Ph(n,r,null,y_(t),i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=o}function Mw(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];l_(i,t,c,l,u,d)}}function Sw(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function Ew(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function __(n,e){let t=n.contentQueries;if(t!==null){let i=_t(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];my(s),a.contentQueries(2,e[o],o)}}}finally{_t(i)}}}function Oh(n,e){return n[Fo]?n[ov][Hn]=e:n[Fo]=e,n[ov]=e,e}function $f(n,e,t){my(0);let i=_t(null);try{e(n,t)}finally{_t(i)}}function bw(n,e){let t=n[Ts],i=t?t.get(Gi,null):null;i&&i.handleError(e)}function x_(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];l_(u,l,i,a,c,r)}}function ww(n,e){let t=zo(e,n),i=t[Qe];Tw(i,t);let r=t[gi];r!==null&&t[Wc]===null&&(t[Wc]=Dh(r,t[Ts])),M_(i,t,t[Bi])}function Tw(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function M_(n,e,t){gh(e);try{let i=n.viewQuery;i!==null&&$f(1,i,t);let r=n.template;r!==null&&f_(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[dl]?.finishViewCreation(n),n.staticContentQueries&&__(n,e),n.staticViewQueries&&$f(2,n.viewQuery,t);let s=n.components;s!==null&&Cw(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Be]&=-5,vh()}}function Cw(n,e){for(let t=0;t<e.length;t++)ww(n,e[t])}function Cv(n,e){return!e||e.firstChild===null||Hy(n)}function Dw(n,e,t,i=!0){let r=e[Qe];if(Db(r,e,n,t),i){let o=jf(t,n),a=e[mi],c=i_(a,n[_r]);c!==null&&Tb(r,n[jn],a,e,c,o)}let s=e[Wc];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function nl(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Hi(s)),vi(s)&&Aw(s,i);let o=t.type;if(o&8)nl(n,e,t.child,i);else if(o&32){let a=Ah(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=r_(e,t);if(Array.isArray(a))i.push(...a);else{let c=xr(e[Jn]);nl(c[Qe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function Aw(n,e){for(let t=wn;t<n.length;t++){let i=n[t],r=i[Qe].firstChild;r!==null&&nl(i[Qe],i,r,e)}n[_r]!==n[gi]&&e.push(n[_r])}var S_=[];function Iw(n){return n[mn]??Rw(n)}function Rw(n){let e=S_.pop()??Object.create(Pw);return e.lView=n,e}function Nw(n){n.lView[mn]!==n&&(n.lView=null,S_.push(n))}var Pw=St(we({},hc),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{pl(n.lView)},consumerOnSignalRead(){this.lView[mn]=this}});function Ow(n){let e=n[mn]??Object.create(Lw);return e.lView=n,e}var Lw=St(we({},hc),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{let e=xr(n.lView);for(;e&&!E_(e[Qe]);)e=xr(e);e&&ph(e)},consumerOnSignalRead(){this.lView[mn]=this}});function E_(n){return n.type!==2}function b_(n){if(n[$c]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[$c])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Be]&8192)}}var Fw=100;function w_(n,e=!0,t=0){let r=n[Vi].rendererFactory,s=!1;s||r.begin?.();try{Uw(n,t)}catch(o){throw e&&bw(n,o),o}finally{s||r.end?.()}}function Uw(n,e){let t=py();try{lv(!0),qf(n,e);let i=0;for(;hl(n);){if(i===Fw)throw new Oe(103,!1);i++,qf(n,1)}}finally{lv(t)}}function kw(n,e,t,i){let r=e[Be];if((r&256)===256)return;let s=!1,o=!1;gh(e);let a=!0,c=null,l=null;s||(E_(n)?(l=Iw(e),c=qd(l)):hg()===null?(a=!1,l=Ow(e),c=qd(l)):e[mn]&&(Yd(e[mn]),e[mn]=null));try{ly(e),NE(n.bindingStartIndex),t!==null&&f_(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&Uc(e,h,null)}else{let h=n.preOrderHooks;h!==null&&kc(e,h,0,null),mf(e,0)}if(o||Bw(e),b_(e),T_(e,0),n.contentQueries!==null&&__(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&Uc(e,h)}else{let h=n.contentHooks;h!==null&&kc(e,h,1),mf(e,1)}ew(n,e);let d=n.components;d!==null&&D_(e,d,0);let f=n.viewQuery;if(f!==null&&$f(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&Uc(e,h)}else{let h=n.viewHooks;h!==null&&kc(e,h,2),mf(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[pf]){for(let h of e[pf])h();e[pf]=null}s||(e[Be]&=-73)}catch(u){throw s||pl(e),u}finally{l!==null&&(vg(l,c),a&&Nw(l)),vh()}}function T_(n,e){for(let t=jy(n);t!==null;t=Wy(t))for(let i=wn;i<t.length;i++){let r=t[i];C_(r,e)}}function Bw(n){for(let e=jy(n);e!==null;e=Wy(e)){if(!(e[Be]&Yc.HasTransplantedViews))continue;let t=e[Xc];for(let i=0;i<t.length;i++){let r=t[i];ph(r)}}}function Vw(n,e,t){let i=zo(e,n);C_(i,t)}function C_(n,e){hh(n)&&qf(n,e)}function qf(n,e){let i=n[Qe],r=n[Be],s=n[mn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Xd(s)),o||=!1,s&&(s.dirty=!1),n[Be]&=-9217,o)kw(i,n,i.template,n[Bi]);else if(r&8192){b_(n),T_(n,1);let a=i.components;a!==null&&D_(n,a,1)}}function D_(n,e,t){for(let i=0;i<e.length;i++)Vw(n,e[i],t)}function A_(n,e){let t=py()?64:1088;for(n[Vi].changeDetectionScheduler?.notify(e);n;){n[Be]|=t;let i=xr(n);if(Cf(n)&&!i)return n;n=i}return null}var Is=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[Qe];return nl(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[Bi]}get dirty(){return!!(this._lView[Be]&9280)||!!this._lView[mn]?.dirty}set context(e){this._lView[Bi]=e}get destroyed(){return(this._lView[Be]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[en];if(vi(e)){let t=e[qc],i=t?t.indexOf(this):-1;i>-1&&(Gf(e,i),Gc(t,i))}this._attachedToViewContainer=!1}t_(this._lView[Qe],this._lView)}onDestroy(e){uy(this._lView,e)}markForCheck(){A_(this._cdRefInjectingView||this._lView,4)}markForRefresh(){ph(this._cdRefInjectingView||this._lView)}detach(){this._lView[Be]&=-129}reattach(){Af(this._lView),this._lView[Be]|=128}detectChanges(){this._lView[Be]|=1024,w_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Oe(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Cf(this._lView),t=this._lView[Uo];t!==null&&!e&&Ih(t,this._lView),Qy(this._lView[Qe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Oe(902,!1);this._appRef=e;let t=Cf(this._lView),i=this._lView[Uo];i!==null&&!t&&e_(i,this._lView),Af(this._lView)}};var $k=new RegExp(`^(\\d+)*(${xb}|${_b})*(.*)`);var Hw=()=>null;function Dv(n,e){return Hw(n,e)}var Xf=class{},il=class{},Yf=class{resolveComponentFactory(e){throw Error(`No component factory found for ${pn(e)}.`)}},Rs=class{static NULL=new Yf},Ns=class{};var zw=(()=>{class n{static \u0275prov=ze({token:n,providedIn:"root",factory:()=>null})}return n})();function Zf(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Qg(r,a);else if(s==2){let c=a,l=e[++o];i=Qg(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var rl=class extends Rs{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=yr(e);return new Bo(t,this.ngModule)}};function Av(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:ji.None;e?t.push({propName:o,templateName:i,isSignal:(a&ji.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function Gw(n){let e=n.toLowerCase();return e==="svg"?_E:e==="math"?xE:null}var Bo=class extends il{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Av(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Av(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Kb(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=_t(null);try{r=r||this.ngModule;let o=r instanceof Tn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new Pf(e,o):e,c=a.get(Ns,null);if(c===null)throw new Oe(407,!1);let l=a.get(zw,null),u=a.get(ko,null),d={rendererFactory:c,sanitizer:l,changeDetectionScheduler:u},f=c.createRenderer(null,this.componentDef),h=this.componentDef.selectors[0][0]||"div",g=i?sw(f,i,this.componentDef.encapsulation,a):Jy(f,h,Gw(h)),v=512;this.componentDef.signals?v|=4096:this.componentDef.onPush||(v|=16);let m=null;g!==null&&(m=Dh(g,a,!0));let p=m_(0,null,null,1,0,null,null,null,null,null,null),T=Ph(null,p,null,v,null,null,d,f,a,null,m);gh(T);let S,M,I=null;try{let D=this.componentDef,C,R=null;D.findHostDirectiveDefs?(C=[],R=new Map,D.findHostDirectiveDefs(D,C,R),C.push(D)):C=[D];let b=jw(T,g);I=Ww(b,g,D,C,T,d,f),M=ME(p,Cs),g&&Xw(f,D,g,i),t!==void 0&&Yw(M,this.ngContentSelectors,t),S=qw(I,D,C,R,T,[Zw]),M_(p,T,null)}catch(D){throw I!==null&&Hf(I),Hf(T),D}finally{vh()}return new Kf(this.componentType,S,Eh(M,T),T,M)}finally{_t(s)}}},Kf=class extends Xf{location;_rootLView;_tNode;instance;hostView;changeDetectorRef;componentType;previousInputValues=null;constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.instance=t,this.hostView=this.changeDetectorRef=new Is(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;x_(s[Qe],s,r,e,t),this.previousInputValues.set(e,t);let o=zo(this._tNode.index,s);A_(o,1)}}get injector(){return new vr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function jw(n,e){let t=n[Qe],i=Cs;return n[i]=e,u_(t,i,2,"#host",null)}function Ww(n,e,t,i,r,s,o){let a=r[Qe];$w(i,n,e,o);let c=null;e!==null&&(c=Dh(e,r[Ts]));let l=s.rendererFactory.createRenderer(e,t),u=Ph(r,p_(t),null,y_(t),r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Wf(a,n,i.length-1),Oh(r,u),r[n.index]=u}function $w(n,e,t,i){for(let r of n)e.mergedAttrs=yh(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Zf(e,e.mergedAttrs,!0),t!==null&&o_(i,t,e))}function qw(n,e,t,i,r,s){let o=ei(),a=r[Qe],c=yi(o,r);g_(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=Ds(r,a,d,o);As(f,r)}v_(a,r,o),c&&As(c,r);let l=Ds(r,a,o.directiveStart+o.componentOffset,o);if(n[Bi]=r[Bi]=l,s!==null)for(let u of s)u(l,e);return h_(a,o,r),l}function Xw(n,e,t,i){if(i)Nf(n,t,["ng-version","19.0.5"]);else{let{attrs:r,classes:s}=Jb(e.selectors[0]);r&&Nf(n,t,r),s&&s.length>0&&s_(n,t,s.join(" "))}}function Yw(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}function Zw(){let n=ei();Sy(zn()[Qe],n)}var _l=(()=>{class n{static __NG_ELEMENT_ID__=Kw}return n})();function Kw(){let n=ei();return Qw(n,zn())}var Jw=_l,I_=class extends Jw{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Eh(this._hostTNode,this._hostLView)}get injector(){return new vr(this._hostTNode,this._hostLView)}get parentInjector(){let e=_h(this._hostTNode,this._hostLView);if(by(e)){let t=Kc(e,this._hostLView),i=Zc(e),r=t[Qe].data[i+8];return new vr(r,t)}else return new vr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Iv(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-wn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Dv(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Cv(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!pE(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new Bo(yr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(Tn,null);v&&(s=v)}let u=yr(c.componentType??{}),d=Dv(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,Cv(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(SE(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[en],l=new I_(c,c[jn],c[en]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Dw(o,r,s,i),e.attachToViewContainerRef(),Wv(_f(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Iv(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Gf(this._lContainer,t);i&&(Gc(_f(this._lContainer),t),t_(i[Qe],i))}detach(e){let t=this._adjustIndex(e,-1),i=Gf(this._lContainer,t);return i&&Gc(_f(this._lContainer),t)!=null?new Is(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Iv(n){return n[qc]}function _f(n){return n[qc]||(n[qc]=[])}function Qw(n,e){let t,i=e[n.index];return vi(i)?t=i:(t=Ew(i,e,null,n),e[n.index]=t,Oh(e,t)),tT(t,e,n,i),new I_(t,n,e)}function eT(n,e){let t=n[mi],i=t.createComment(""),r=yi(e,n),s=i_(t,r);return tl(t,s,i,Pb(t,r),!1),i}var tT=nT;function nT(n,e,t,i){if(n[_r])return;let r;t.type&8?r=Hi(i):r=eT(e,t),n[_r]=r}var Wi=class{},Vo=class{};var Jf=class extends Wi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new rl(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Xv(e);this._bootstrapComponents=Ky(s.bootstrap),this._r3Injector=Py(e,t,[{provide:Wi,useValue:this},{provide:Rs,useValue:this.componentFactoryResolver},...i],pn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Qf=class extends Vo{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Jf(this.moduleType,e,[])}};var sl=class extends Wi{injector;componentFactoryResolver=new rl(this);instance=null;constructor(e){super();let t=new Lo([...e.providers,{provide:Wi,useValue:this},{provide:Rs,useValue:this.componentFactoryResolver}],e.parent||uh(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Lh(n,e,t=null){return new sl({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var iT=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Jv(!1,t.type),r=i.length>0?Lh([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=ze({token:n,providedIn:"environment",factory:()=>new n(tt(Tn))})}return n})();function xl(n){return oh(()=>{let e=R_(n),t=St(we({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===zy.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(iT).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Qn.Emulated,styles:n.styles||Es,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Ch("NgStandalone"),N_(t);let i=n.dependencies;return t.directiveDefs=Nv(i,!1),t.pipeDefs=Nv(i,!0),t.id=oT(t),t})}function rT(n){return yr(n)||Yv(n)}function sT(n){return n!==null}function Rv(n,e){if(n==null)return Oo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=ji.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==ji.None?[i,a]:i,e[s]=o):t[s]=i}return t}function Fh(n){return oh(()=>{let e=R_(n);return N_(e),e})}function R_(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Oo,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Es,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Rv(n.inputs,e),outputs:Rv(n.outputs),debugInfo:null}}function N_(n){n.features?.forEach(e=>e(n))}function Nv(n,e){if(!n)return null;let t=e?Zv:rT;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(sT)}function oT(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function aT(n){return(n.flags&32)===32}var Ml=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var P_=new He("");function Go(n){return!!n&&typeof n.then=="function"}function O_(n){return!!n&&typeof n.subscribe=="function"}var L_=new He("");var F_=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=fe(L_,{optional:!0})??[];injector=fe(zi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Gn(this.injector,r);if(Go(s))t.push(s);else if(O_(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),cT=(()=>{class n{static \u0275prov=ze({token:n,providedIn:"root",factory:()=>new eh})}return n})(),eh=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}},Uh=new He("");function lT(){Sg(()=>{throw new Oe(600,!1)})}function uT(n){return n.isBoundToModule}var dT=10;function fT(n,e,t){try{let i=t();return Go(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var $i=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=fe(db);afterRenderManager=fe(Sb);zonelessEnabled=fe(gl);rootEffectScheduler=fe(cT);dirtyFlags=0;deferredDirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new qt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=fe(Os).hasPendingTasks.pipe(et(t=>!t));constructor(){fe(Zy,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=fe(Tn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){let r=t instanceof il;if(!this._injector.get(F_).done){let f=!r&&Kv(t),h=!1;throw new Oe(405,h)}let o;r?o=t:o=this._injector.get(Rs).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=uT(o)?void 0:this._injector.get(Wi),c=i||o.selector,l=o.create(zi.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(P_,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),Bc(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick=()=>{if(this.tracingSnapshot!==null){let i=this.tracingSnapshot;this.tracingSnapshot=null,i.run(Yy.CHANGE_DETECTION,this._tick),i.dispose();return}if(this._runningTick)throw new Oe(101,!1);let t=_t(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,_t(t),this.afterTick.next()}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ns,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let t=0;for(;this.dirtyFlags!==0&&t++<dT;)this.synchronizeOnce()}synchronizeOnce(){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)hT(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>hl(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Bc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(Uh,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Bc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Oe(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Bc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function hT(n,e,t,i){if(!t&&!hl(n))return;w_(n,e,t&&!i?0:1)}function Pv(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";x_(n,t,s[o],o,i)}function pT(n,e,t,i,r,s){let o=e.consts,a=cv(o,r),c=u_(e,n,2,i,a);return uw(e,t,c,cv(o,s)),c.attrs!==null&&Zf(c,c.attrs,!1),c.mergedAttrs!==null&&Zf(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function U_(n,e,t,i){let r=zn(),s=ml(),o=Cs+n,a=r[mi],c=s.firstCreatePass?pT(o,s,r,e,t,i):s.data[o],l=mT(s,r,c,a,e,n);r[o]=l;let u=mE(c);return mh(c,!0),o_(a,l,c),!aT(c)&&BE()&&Ub(s,r,l,c),bE()===0&&As(l,r),wE(),u&&(nw(s,r,c),h_(s,c,r)),i!==null&&iw(r,c),U_}function k_(){let n=ei();hy()?RE():(n=n.parent,mh(n,!1));let e=n;DE(e)&&AE(),TE();let t=ml();return t.firstCreatePass&&(Sy(t,n),ry(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&jE(e)&&Pv(t,e,zn(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&WE(e)&&Pv(t,e,zn(),e.stylesWithoutHost,!1),k_}function jo(n,e,t,i){return U_(n,e,t,i),k_(),jo}var mT=(n,e,t,i,r,s)=>(VE(!0),Jy(i,r,kE()));var ol="en-US";var gT=ol;function vT(n){typeof n=="string"&&(gT=n.toLowerCase().replace(/_/g,"-"))}function yT(n,e,t){let i=ml();if(i.firstCreatePass){let r=Ps(n);th(t,i.data,i.blueprint,r,!0),th(e,i.data,i.blueprint,r,!1)}}function th(n,e,t,i,r){if(n=Qt(n),Array.isArray(n))for(let s=0;s<n.length;s++)th(n[s],e,t,i,r);else{let s=ml(),o=zn(),a=ei(),c=ws(n)?n:Qt(n.provide),l=ty(n),u=a.providerIndexes&1048575,d=a.directiveStart,f=a.providerIndexes>>20;if(ws(n)||!n.multi){let h=new Sr(l,r,br),g=Mf(c,e,r?u:u+f,d);g===-1?(Lf(Jc(a,o),s,c),xf(s,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(h),o.push(h)):(t[g]=h,o[g]=h)}else{let h=Mf(c,e,u+f,d),g=Mf(c,e,u,u+f),v=h>=0&&t[h],m=g>=0&&t[g];if(r&&!m||!r&&!v){Lf(Jc(a,o),s,c);let p=MT(r?xT:_T,t.length,r,i,l);!r&&m&&(t[g].providerFactory=p),xf(s,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(p),o.push(p)}else{let p=B_(t[r?g:h],l,!r&&i);xf(s,n,h>-1?h:g,p)}!r&&i&&m&&t[g].componentProviders++}}}function xf(n,e,t,i){let r=ws(e),s=oE(e);if(r||s){let c=(s?Qt(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function B_(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function Mf(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function _T(n,e,t,i){return nh(this.multi,[])}function xT(n,e,t,i){let r=this.multi,s;if(this.providerFactory){let o=this.providerFactory.componentProviders,a=Ds(t,t[Qe],this.providerFactory.index,i);s=a.slice(0,o),nh(r,s);for(let c=o;c<a.length;c++)s.push(a[c])}else s=[],nh(r,s);return s}function nh(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function MT(n,e,t,i,r){let s=new Sr(n,t,br);return s.multi=[],s.index=e,s.componentProviders=0,B_(s,r,i&&!t),s}function V_(n,e=[]){return t=>{t.providersResolver=(i,r)=>yT(i,r?r(n):n,e)}}var ih=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},kh=(()=>{class n{compileModuleSync(t){return new Qf(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Xv(t),s=Ky(r.declarations).reduce((o,a)=>{let c=yr(a);return c&&o.push(new Bo(c)),o},[]);return new ih(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ST=(()=>{class n{zone=fe(Ft);changeDetectionScheduler=fe(ko);applicationRef=fe($i);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ET=new He("",{factory:()=>!1});function H_({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Ft(St(we({},G_()),{scheduleInRootZone:t})),[{provide:Ft,useFactory:n},{provide:bs,multi:!0,useFactory:()=>{let i=fe(ST,{optional:!0});return()=>i.initialize()}},{provide:bs,multi:!0,useFactory:()=>{let i=fe(bT);return()=>{i.initialize()}}},e===!0?{provide:Fy,useValue:!0}:[],{provide:Uy,useValue:t??Oy}]}function z_(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=H_({ngZoneFactory:()=>{let r=G_(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&Ch("NgZone_CoalesceEvent"),new Ft(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return ll([{provide:ET,useValue:!0},{provide:gl,useValue:!1},i])}function G_(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var bT=(()=>{class n{subscription=new Rt;initialized=!1;zone=fe(Ft);pendingTasks=fe(Os);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Ft.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Ft.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wT=(()=>{class n{appRef=fe($i);taskService=fe(Os);ngZone=fe(Ft);zonelessEnabled=fe(gl);tracing=fe(Zy,{optional:!0});disableScheduling=fe(Fy,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Rt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(el):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(fe(Uy,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Vf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 8:{this.appRef.deferredDirtyFlags|=8;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 13:{this.appRef.dirtyFlags|=16,i=!0;break}case 14:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{i=!0;break}case 10:case 9:case 7:case 11:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?gv:ky;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(el+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,gv(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function TT(){return typeof $localize<"u"&&$localize.locale||ol}var Bh=new He("",{providedIn:"root",factory:()=>fe(Bh,Ke.Optional|Ke.SkipSelf)||TT()});var rh=new He(""),CT=new He("");function Ao(n){return!n.moduleRef}function DT(n){let e=Ao(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Ft);return t.run(()=>{Ao(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Gi,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),Ao(n)){let s=()=>e.destroy(),o=n.platformInjector.get(rh);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(rh);o.add(s),n.moduleRef.onDestroy(()=>{Bc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return fT(i,t,()=>{let s=e.get(F_);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(Bh,ol);if(vT(o||ol),!e.get(CT,!0))return Ao(n)?e.get($i):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Ao(n)){let c=e.get($i);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return AT(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function AT(n,e){let t=n.injector.get($i);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Oe(-403,!1);e.push(n)}var Vc=null;function IT(n=[],e){return zi.create({name:e,providers:[{provide:ul,useValue:"platform"},{provide:rh,useValue:new Set([()=>Vc=null])},...n]})}function RT(n=[]){if(Vc)return Vc;let e=IT(n);return Vc=e,lT(),NT(e),e}function NT(n){let e=n.get(wh,null);Gn(n,()=>{e?.forEach(t=>t())})}var Wo=(()=>{class n{static __NG_ELEMENT_ID__=PT}return n})();function PT(n){return OT(ei(),zn(),(n&16)===16)}function OT(n,e,t){if(dh(n)&&!t){let i=zo(n.index,e);return new Is(i,i)}else if(n.type&175){let i=e[Jn];return new Is(i,e)}return null}function j_(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=RT(i),s=[H_({}),{provide:ko,useExisting:wT},...t||[]],o=new sl({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return DT({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}}var Ov=class{[ss];constructor(e){this[ss]=e}destroy(){this[ss].destroy()}};var K_=null;function Fs(){return K_}function J_(n){K_??=n}var El=class{};var Cn=new He(""),Q_=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:()=>fe(BT),providedIn:"platform"})}return n})();var BT=(()=>{class n extends Q_{_location;_history;_doc=fe(Cn);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Fs().getBaseHref(this._doc)}onPopState(t){let i=Fs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Fs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function e0(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function W_(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function wr(n){return n&&n[0]!=="?"?"?"+n:n}var wl=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:()=>fe(t0),providedIn:"root"})}return n})(),VT=new He(""),t0=(()=>{class n extends wl{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??fe(Cn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return e0(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+wr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+wr(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+wr(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(tt(Q_),tt(VT,8))};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var $o=(()=>{class n{_subject=new qt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=GT(W_($_(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+wr(i))}normalize(t){return n.stripTrailingSlash(zT(this._basePath,$_(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+wr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+wr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=wr;static joinWithSlash=e0;static stripTrailingSlash=W_;static \u0275fac=function(i){return new(i||n)(tt(wl))};static \u0275prov=ze({token:n,factory:()=>HT(),providedIn:"root"})}return n})();function HT(){return new $o(tt(wl))}function zT(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function $_(n){return n.replace(/\/index.html$/,"")}function GT(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function n0(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var i0="browser",jT="server";function Vh(n){return n===jT}var bl=class{};var zh=class extends El{supportsDOMEvents=!0},Gh=class n extends zh{static makeCurrent(){J_(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=$T();return t==null?null:qT(t)}resetBaseElement(){qo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return n0(document.cookie,e)}},qo=null;function $T(){return qo=qo||document.querySelector("base"),qo?qo.getAttribute("href"):null}function qT(n){return new URL(n,document.baseURI).pathname}var XT=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac})}return n})(),jh=new He(""),l0=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Oe(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(tt(jh),tt(Ft))};static \u0275prov=ze({token:n,factory:n.\u0275fac})}return n})(),Cl=class{_doc;constructor(e){this._doc=e}manager},Tl="ng-app-id";function r0(n){for(let e of n)e.remove()}function s0(n,e){let t=e.createElement("style");return t.textContent=n,t}function YT(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Tl}="${e}"],link[${Tl}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Tl),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Wh(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var u0=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=Vh(s),YT(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,s0);i?.forEach(r=>this.addUsage(r,this.external,Wh))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(r0(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])r0(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,s0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Wh(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(Tl,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(tt(Cn),tt(bh),tt(Th,8),tt(Ls))};static \u0275prov=ze({token:n,factory:n.\u0275fac})}return n})(),Hh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},qh=/%COMP%/g,d0="%COMP%",ZT=`_nghost-${d0}`,KT=`_ngcontent-${d0}`,JT=!0,QT=new He("",{providedIn:"root",factory:()=>JT});function eC(n){return KT.replace(qh,n)}function tC(n){return ZT.replace(qh,n)}function f0(n,e){return e.map(t=>t.replace(qh,n))}var o0=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.platformIsServer=Vh(a),this.defaultRenderer=new Xo(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Qn.ShadowDom&&(i=St(we({},i),{encapsulation:Qn.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Dl?r.applyToHost(t):r instanceof Yo&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case Qn.Emulated:s=new Dl(c,l,i,this.appId,u,o,a,d);break;case Qn.ShadowDom:return new $h(c,l,t,i,o,a,this.nonce,d);default:s=new Yo(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(i){return new(i||n)(tt(l0),tt(u0),tt(bh),tt(QT),tt(Cn),tt(Ls),tt(Ft),tt(Th))};static \u0275prov=ze({token:n,factory:n.\u0275fac})}return n})(),Xo=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Hh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(a0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(a0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Oe(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Hh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Hh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Er.DashCase|Er.Important)?e.style.setProperty(t,i,r&Er.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Er.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Fs().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function a0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var $h=class extends Xo{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=f0(r.id,r.styles);for(let d of l){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=d,this.shadowRoot.appendChild(f)}let u=r.getExternalStyles?.();if(u)for(let d of u){let f=Wh(d,s);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Yo=class extends Xo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?f0(c,i.styles):i.styles,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Dl=class extends Yo{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=eC(l),this.hostAttr=tC(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},nC=(()=>{class n extends Cl{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static \u0275fac=function(i){return new(i||n)(tt(Cn))};static \u0275prov=ze({token:n,factory:n.\u0275fac})}return n})(),c0=["alt","control","meta","shift"],iC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},rC={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},sC=(()=>{class n extends Cl{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Fs().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),c0.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=iC[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),c0.forEach(o=>{if(o!==r){let a=rC[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(tt(Cn))};static \u0275prov=ze({token:n,factory:n.\u0275fac})}return n})();function h0(n,e){return j_(we({rootComponent:n},oC(e)))}function oC(n){return{appProviders:[...dC,...n?.providers??[]],platformProviders:uC}}function aC(){Gh.makeCurrent()}function cC(){return new Gi}function lC(){return qy(document),document}var uC=[{provide:Ls,useValue:i0},{provide:wh,useValue:aC,multi:!0},{provide:Cn,useFactory:lC,deps:[]}];var dC=[{provide:ul,useValue:"root"},{provide:Gi,useFactory:cC,deps:[]},{provide:jh,useClass:nC,multi:!0,deps:[Cn,Ft,Ls]},{provide:jh,useClass:sC,multi:!0,deps:[Cn]},o0,u0,l0,{provide:Ns,useExisting:o0},{provide:bl,useClass:XT,deps:[]},[]];var p0=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(tt(Cn))};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qe="primary",fa=Symbol("RouteTitle"),Jh=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function zs(n){return new Jh(n)}function hC(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function pC(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ti(n[t],e[t]))return!1;return!0}function ti(n,e){let t=n?Qh(n):void 0,i=e?Qh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!S0(n[r],e[r]))return!1;return!0}function Qh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function S0(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function E0(n){return n.length>0?n[n.length-1]:null}function qi(n){return of(n)?n:Go(n)?Ot(Promise.resolve(n)):je(n)}var mC={exact:w0,subset:T0},b0={exact:gC,subset:vC,ignored:()=>!0};function m0(n,e,t){return mC[t.paths](n.root,e.root,t.matrixParams)&&b0[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function gC(n,e){return ti(n,e)}function w0(n,e,t){if(!Cr(n.segments,e.segments)||!Rl(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!w0(n.children[i],e.children[i],t))return!1;return!0}function vC(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>S0(n[t],e[t]))}function T0(n,e,t){return C0(n,e,e.segments,t)}function C0(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Cr(r,t)||e.hasChildren()||!Rl(r,t,i))}else if(n.segments.length===t.length){if(!Cr(n.segments,t)||!Rl(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!T0(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Cr(n.segments,r)||!Rl(n.segments,r,i)||!n.children[qe]?!1:C0(n.children[qe],e,s,i)}}function Rl(n,e,t){return e.every((i,r)=>b0[t](n[r].parameters,i.parameters))}var xi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ht([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=zs(this.queryParams),this._queryParamMap}toString(){return xC.serialize(this)}},ht=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Nl(this)}},Tr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=zs(this.parameters),this._parameterMap}toString(){return A0(this)}};function yC(n,e){return Cr(n,e)&&n.every((t,i)=>ti(t.parameters,e[i].parameters))}function Cr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function _C(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===qe&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==qe&&(t=t.concat(e(r,i)))}),t}var wp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:()=>new na,providedIn:"root"})}return n})(),na=class{parse(e){let t=new tp(e);return new xi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Zo(e.root,!0)}`,i=EC(e.queryParams),r=typeof e.fragment=="string"?`#${MC(e.fragment)}`:"";return`${t}${i}${r}`}},xC=new na;function Nl(n){return n.segments.map(e=>A0(e)).join("/")}function Zo(n,e){if(!n.hasChildren())return Nl(n);if(e){let t=n.children[qe]?Zo(n.children[qe],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==qe&&i.push(`${r}:${Zo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=_C(n,(i,r)=>r===qe?[Zo(n.children[qe],!1)]:[`${r}:${Zo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[qe]!=null?`${Nl(n)}/${t[0]}`:`${Nl(n)}/(${t.join("//")})`}}function D0(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Al(n){return D0(n).replace(/%3B/gi,";")}function MC(n){return encodeURI(n)}function ep(n){return D0(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Pl(n){return decodeURIComponent(n)}function g0(n){return Pl(n.replace(/\+/g,"%20"))}function A0(n){return`${ep(n.path)}${SC(n.parameters)}`}function SC(n){return Object.entries(n).map(([e,t])=>`;${ep(e)}=${ep(t)}`).join("")}function EC(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Al(t)}=${Al(r)}`).join("&"):`${Al(t)}=${Al(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var bC=/^[^\/()?;#]+/;function Xh(n){let e=n.match(bC);return e?e[0]:""}var wC=/^[^\/()?;=#]+/;function TC(n){let e=n.match(wC);return e?e[0]:""}var CC=/^[^=?&#]+/;function DC(n){let e=n.match(CC);return e?e[0]:""}var AC=/^[^&#]+/;function IC(n){let e=n.match(AC);return e?e[0]:""}var tp=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ht([],{}):new ht([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[qe]=new ht(e,t)),i}parseSegment(){let e=Xh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Oe(4009,!1);return this.capture(e),new Tr(Pl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=TC(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Xh(this.remaining);r&&(i=r,this.capture(i))}e[Pl(t)]=Pl(i)}parseQueryParam(e){let t=DC(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=IC(this.remaining);o&&(i=o,this.capture(i))}let r=g0(t),s=g0(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Xh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Oe(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=qe);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[qe]:new ht([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Oe(4011,!1)}};function I0(n){return n.segments.length>0?new ht([],{[qe]:n}):n}function R0(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=R0(r);if(i===qe&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ht(n.segments,e);return RC(t)}function RC(n){if(n.numberOfChildren===1&&n.children[qe]){let e=n.children[qe];return new ht(n.segments.concat(e.segments),e.children)}return n}function ia(n){return n instanceof xi}function NC(n,e,t=null,i=null){let r=N0(n);return P0(r,e,t,i)}function N0(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ht(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=I0(i);return e??r}function P0(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Yh(r,r,r,t,i);let s=PC(e);if(s.toRoot())return Yh(r,r,new ht([],{}),t,i);let o=OC(s,r,n),a=o.processChildren?Qo(o.segmentGroup,o.index,s.commands):L0(o.segmentGroup,o.index,s.commands);return Yh(r,o.segmentGroup,a,t,i)}function Ol(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function ra(n){return typeof n=="object"&&n!=null&&n.outlets}function Yh(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=O0(n,e,t);let a=I0(R0(o));return new xi(a,s,r)}function O0(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=O0(s,e,t)}),new ht(n.segments,i)}var Ll=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Ol(i[0]))throw new Oe(4003,!1);let r=i.find(ra);if(r&&r!==E0(i))throw new Oe(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function PC(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Ll(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Ll(t,e,i)}var Bs=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function OC(n,e,t){if(n.isAbsolute)return new Bs(e,!0,0);if(!t)return new Bs(e,!1,NaN);if(t.parent===null)return new Bs(t,!0,0);let i=Ol(n.commands[0])?0:1,r=t.segments.length-1+i;return LC(t,r,n.numberOfDoubleDots)}function LC(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Oe(4005,!1);r=i.segments.length}return new Bs(i,!1,r-s)}function FC(n){return ra(n[0])?n[0].outlets:{[qe]:n}}function L0(n,e,t){if(n??=new ht([],{}),n.segments.length===0&&n.hasChildren())return Qo(n,e,t);let i=UC(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ht(n.segments.slice(0,i.pathIndex),{});return s.children[qe]=new ht(n.segments.slice(i.pathIndex),n.children),Qo(s,0,r)}else return i.match&&r.length===0?new ht(n.segments,{}):i.match&&!n.hasChildren()?np(n,e,t):i.match?Qo(n,0,r):np(n,e,t)}function Qo(n,e,t){if(t.length===0)return new ht(n.segments,{});{let i=FC(t),r={};if(Object.keys(i).some(s=>s!==qe)&&n.children[qe]&&n.numberOfChildren===1&&n.children[qe].segments.length===0){let s=Qo(n.children[qe],e,t);return new ht(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=L0(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ht(n.segments,r)}}function UC(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(ra(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!y0(c,l,o))return s;i+=2}else{if(!y0(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function np(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(ra(s)){let c=kC(s.outlets);return new ht(i,c)}if(r===0&&Ol(t[0])){let c=n.segments[e];i.push(new Tr(c.path,v0(t[0]))),r++;continue}let o=ra(s)?s.outlets[qe]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Ol(a)?(i.push(new Tr(o,v0(a))),r+=2):(i.push(new Tr(o,{})),r++)}return new ht(i,{})}function kC(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=np(new ht([],{}),0,i))}),e}function v0(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function y0(n,e,t){return n==t.path&&ti(e,t.parameters)}var ea="imperative",Wt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Wt||{}),Dn=class{id;url;constructor(e,t){this.id=e,this.url=t}},sa=class extends Dn{type=Wt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Dr=class extends Dn{urlAfterRedirects;type=Wt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},vn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(vn||{}),ip=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(ip||{}),_i=class extends Dn{reason;code;type=Wt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ar=class extends Dn{reason;code;type=Wt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},oa=class extends Dn{error;target;type=Wt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Fl=class extends Dn{urlAfterRedirects;state;type=Wt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},rp=class extends Dn{urlAfterRedirects;state;type=Wt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sp=class extends Dn{urlAfterRedirects;state;shouldActivate;type=Wt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},op=class extends Dn{urlAfterRedirects;state;type=Wt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ap=class extends Dn{urlAfterRedirects;state;type=Wt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cp=class{route;type=Wt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},lp=class{route;type=Wt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},up=class{snapshot;type=Wt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},dp=class{snapshot;type=Wt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fp=class{snapshot;type=Wt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hp=class{snapshot;type=Wt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var aa=class{},Gs=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function BC(n,e){return n.providers&&!n._injector&&(n._injector=Lh(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Wn(n){return n.outlet||qe}function VC(n,e){let t=n.filter(i=>Wn(i)===e);return t.push(...n.filter(i=>Wn(i)!==e)),t}function ha(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var pp=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return ha(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Gl(this.rootInjector)}},Gl=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new pp(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(tt(Tn))};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ul=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=mp(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=mp(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=gp(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return gp(e,this._root).map(t=>t.value)}};function mp(n,e){if(n===e.value)return e;for(let t of e.children){let i=mp(n,t);if(i)return i}return null}function gp(n,e){if(n===e.value)return[e];for(let t of e.children){let i=gp(n,t);if(i.length)return i.unshift(e),i}return[]}var gn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function ks(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var kl=class extends Ul{snapshot;constructor(e,t){super(e),this.snapshot=t,Tp(this,e)}toString(){return this.snapshot.toString()}};function F0(n){let e=HC(n),t=new Gt([new Tr("",{})]),i=new Gt({}),r=new Gt({}),s=new Gt({}),o=new Gt(""),a=new js(t,i,s,o,r,qe,n,e.root);return a.snapshot=e.root,new kl(new gn(a,[]),e)}function HC(n){let e={},t={},i={},r="",s=new Vs([],e,i,r,t,qe,n,null,{});return new Vl("",new gn(s,[]))}var js=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(et(l=>l[fa]))??je(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(et(e=>zs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(et(e=>zs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Bl(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:we(we({},e.params),n.params),data:we(we({},e.data),n.data),resolve:we(we(we(we({},n.data),e.data),r?.data),n._resolvedData)}:i={params:we({},n.params),data:we({},n.data),resolve:we(we({},n.data),n._resolvedData??{})},r&&k0(r)&&(i.resolve[fa]=r.title),i}var Vs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[fa]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=zs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=zs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Vl=class extends Ul{url;constructor(e,t){super(t),this.url=e,Tp(this,t)}toString(){return U0(this._root)}};function Tp(n,e){e.value._routerState=n,e.children.forEach(t=>Tp(n,t))}function U0(n){let e=n.children.length>0?` { ${n.children.map(U0).join(", ")} } `:"";return`${n.value}${e}`}function Zh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ti(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ti(e.params,t.params)||n.paramsSubject.next(t.params),pC(e.url,t.url)||n.urlSubject.next(t.url),ti(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function vp(n,e){let t=ti(n.params,e.params)&&yC(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||vp(n.parent,e.parent))}function k0(n){return typeof n.title=="string"||n.title===null}var zC=new He(""),GC=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=qe;activateEvents=new hn;deactivateEvents=new hn;attachEvents=new hn;detachEvents=new hn;routerOutletData=Vy(void 0);parentContexts=fe(Gl);location=fe(_l);changeDetector=fe(Wo);inputBinder=fe(Cp,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Oe(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Oe(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Oe(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Oe(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new yp(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Fh({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[fh]})}return n})(),yp=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===js?this.route:e===Gl?this.childContexts:e===zC?this.outletData:this.parent.get(e,t)}},Cp=new He("");function jC(n,e,t){let i=ca(n,e._root,t?t._root:void 0);return new kl(i,e)}function ca(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=WC(n,e,t);return new gn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>ca(n,a)),o}}let i=$C(e.value),r=e.children.map(s=>ca(n,s));return new gn(i,r)}}function WC(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return ca(n,i,r);return ca(n,i)})}function $C(n){return new js(new Gt(n.url),new Gt(n.params),new Gt(n.queryParams),new Gt(n.fragment),new Gt(n.data),n.outlet,n.component,n)}var la=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},B0="ngNavigationCancelingError";function Hl(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=ia(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=V0(!1,vn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function V0(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[B0]=!0,t.cancellationCode=e,t}function qC(n){return H0(n)&&ia(n.url)}function H0(n){return!!n&&n[B0]}var XC=(n,e,t,i)=>et(r=>(new _p(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),_p=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Zh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=ks(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ks(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ks(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=ks(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new hp(s.value.snapshot))}),e.children.length&&this.forwardEvent(new dp(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Zh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Zh(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},zl=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Hs=class{component;route;constructor(e,t){this.component=e,this.route=t}};function YC(n,e,t){let i=n._root,r=e?e._root:null;return Ko(i,r,t,[i.value])}function ZC(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function $s(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Bv(n)?n:e.get(n):i}function Ko(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=ks(e);return n.children.forEach(o=>{KC(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ta(a,t.getContext(o),r)),r}function KC(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=JC(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new zl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ko(n,e,a?a.children:null,i,r):Ko(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Hs(a.outlet.component,o))}else o&&ta(e,a,r),r.canActivateChecks.push(new zl(i)),s.component?Ko(n,null,a?a.children:null,i,r):Ko(n,null,t,i,r);return r}function JC(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Cr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Cr(n.url,e.url)||!ti(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!vp(n,e)||!ti(n.queryParams,e.queryParams);case"paramsChange":default:return!vp(n,e)}}function ta(n,e,t){let i=ks(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?ta(o,e.children.getContext(s),t):ta(o,null,t):ta(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Hs(e.outlet.component,r)):t.canDeactivateChecks.push(new Hs(null,r)):t.canDeactivateChecks.push(new Hs(null,r))}function pa(n){return typeof n=="function"}function QC(n){return typeof n=="boolean"}function eD(n){return n&&pa(n.canLoad)}function tD(n){return n&&pa(n.canActivate)}function nD(n){return n&&pa(n.canActivateChild)}function iD(n){return n&&pa(n.canDeactivate)}function rD(n){return n&&pa(n.canMatch)}function z0(n){return n instanceof fi||n?.name==="EmptyError"}var Il=Symbol("INITIAL_VALUE");function Ws(){return Bn(n=>Pc(n.map(e=>e.pipe(hi(1),df(Il)))).pipe(et(e=>{for(let t of e)if(t!==!0){if(t===Il)return Il;if(t===!1||sD(t))return t}return!0}),kn(e=>e!==Il),hi(1)))}function sD(n){return ia(n)||n instanceof la}function oD(n,e){return Lt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?je(St(we({},t),{guardsResult:!0})):aD(o,i,r,n).pipe(Lt(a=>a&&QC(a)?cD(i,s,n,e):je(a)),et(a=>St(we({},t),{guardsResult:a})))})}function aD(n,e,t,i){return Ot(n).pipe(Lt(r=>hD(r.component,r.route,t,e,i)),pi(r=>r!==!0,!0))}function cD(n,e,t,i){return Ot(e).pipe(ms(r=>ps(uD(r.route.parent,i),lD(r.route,i),fD(n,r.path,t),dD(n,r.route,t))),pi(r=>r!==!0,!0))}function lD(n,e){return n!==null&&e&&e(new fp(n)),je(!0)}function uD(n,e){return n!==null&&e&&e(new up(n)),je(!0)}function dD(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return je(!0);let r=i.map(s=>Oc(()=>{let o=ha(e)??t,a=$s(s,o),c=tD(a)?a.canActivate(e,n):Gn(o,()=>a(e,n));return qi(c).pipe(pi())}));return je(r).pipe(Ws())}function fD(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>ZC(o)).filter(o=>o!==null).map(o=>Oc(()=>{let a=o.guards.map(c=>{let l=ha(o.node)??t,u=$s(c,l),d=nD(u)?u.canActivateChild(i,n):Gn(l,()=>u(i,n));return qi(d).pipe(pi())});return je(a).pipe(Ws())}));return je(s).pipe(Ws())}function hD(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return je(!0);let o=s.map(a=>{let c=ha(e)??r,l=$s(a,c),u=iD(l)?l.canDeactivate(n,e,t,i):Gn(c,()=>l(n,e,t,i));return qi(u).pipe(pi())});return je(o).pipe(Ws())}function pD(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return je(!0);let s=r.map(o=>{let a=$s(o,n),c=eD(a)?a.canLoad(e,t):Gn(n,()=>a(e,t));return qi(c)});return je(s).pipe(Ws(),G0(i))}function G0(n){return tf(jt(e=>{if(typeof e!="boolean")throw Hl(n,e)}),et(e=>e===!0))}function mD(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return je(!0);let s=r.map(o=>{let a=$s(o,n),c=rD(a)?a.canMatch(e,t):Gn(n,()=>a(e,t));return qi(c)});return je(s).pipe(Ws(),G0(i))}var ua=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},da=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Us(n){return hs(new ua(n))}function gD(n){return hs(new Oe(4e3,!1))}function vD(n){return hs(V0(!1,vn.GuardRejected))}var xp=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return je(i);if(r.numberOfChildren>1||!r.children[qe])return gD(`${e.redirectTo}`);r=r.children[qe]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:h,data:g,title:v}=r,m=Gn(s,()=>a({params:h,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:v}));if(m instanceof xi)throw new da(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new da(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new xi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ht(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Oe(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Mp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function yD(n,e,t,i,r){let s=j0(n,e,t);return s.matched?(i=BC(e,i),mD(i,e,t,r).pipe(et(o=>o===!0?s:we({},Mp)))):je(s)}function j0(n,e,t){if(e.path==="**")return _D(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?we({},Mp):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||hC)(t,n,e);if(!r)return we({},Mp);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?we(we({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function _D(n){return{matched:!0,parameters:n.length>0?E0(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function _0(n,e,t,i){return t.length>0&&SD(n,t,i)?{segmentGroup:new ht(e,MD(i,new ht(t,n.children))),slicedSegments:[]}:t.length===0&&ED(n,t,i)?{segmentGroup:new ht(n.segments,xD(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ht(n.segments,n.children),slicedSegments:t}}function xD(n,e,t,i){let r={};for(let s of t)if(jl(n,e,s)&&!i[Wn(s)]){let o=new ht([],{});r[Wn(s)]=o}return we(we({},i),r)}function MD(n,e){let t={};t[qe]=e;for(let i of n)if(i.path===""&&Wn(i)!==qe){let r=new ht([],{});t[Wn(i)]=r}return t}function SD(n,e,t){return t.some(i=>jl(n,e,i)&&Wn(i)!==qe)}function ED(n,e,t){return t.some(i=>jl(n,e,i))}function jl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function bD(n,e,t){return e.length===0&&!n.children[t]}var Sp=class{};function wD(n,e,t,i,r,s,o="emptyOnly"){return new Ep(n,e,t,i,r,o,s).recognize()}var TD=31,Ep=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new xp(this.urlSerializer,this.urlTree)}noMatchError(e){return new Oe(4002,`'${e.segmentGroup}'`)}recognize(){let e=_0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(et(({children:t,rootSnapshot:i})=>{let r=new gn(i,t),s=new Vl("",r),o=NC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Vs([],Object.freeze({}),Object.freeze(we({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),qe,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,qe,t).pipe(et(i=>({children:i,rootSnapshot:t})),Oi(i=>{if(i instanceof da)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ua?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(et(o=>o instanceof gn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Ot(s).pipe(ms(o=>{let a=i.children[o],c=VC(t,o);return this.processSegmentGroup(e,c,a,o,r)}),uf((o,a)=>(o.push(...a),o)),Li(null),lf(),Lt(o=>{if(o===null)return Us(i);let a=W0(o);return CD(a),je(a)}))}processSegment(e,t,i,r,s,o,a){return Ot(t).pipe(ms(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Oi(l=>{if(l instanceof ua)return je(null);throw l}))),pi(c=>!!c),Oi(c=>{if(z0(c))return bD(i,r,s)?je(new Sp):Us(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return Wn(i)!==o&&(o===qe||!jl(r,s,i))?Us(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):Us(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=j0(t,r,s);if(!c)return Us(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>TD&&(this.allowRedirects=!1));let h=new Vs(s,l,Object.freeze(we({},this.urlTree.queryParams)),this.urlTree.fragment,x0(r),Wn(r),r.component??r._loadedComponent??null,r,M0(r)),g=Bl(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let v=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e);return this.applyRedirects.lineralizeSegments(r,v).pipe(Lt(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=yD(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Bn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Bn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new Vs(f,d,Object.freeze(we({},this.urlTree.queryParams)),this.urlTree.fragment,x0(i),Wn(i),i.component??i._loadedComponent??null,i,M0(i)),v=Bl(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(v.params),g.data=Object.freeze(v.data);let{segmentGroup:m,slicedSegments:p}=_0(t,f,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(et(S=>new gn(g,S)));if(l.length===0&&p.length===0)return je(new gn(g,[]));let T=Wn(i)===s;return this.processSegment(u,l,m,p,T?qe:s,!0,g).pipe(et(S=>new gn(g,S instanceof gn?[S]:[])))}))):Us(t)))}getChildConfig(e,t,i){return t.children?je({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?je({routes:t._loadedRoutes,injector:t._loadedInjector}):pD(e,t,i,this.urlSerializer).pipe(Lt(r=>r?this.configLoader.loadChildren(e,t).pipe(jt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):vD(t))):je({routes:[],injector:e})}};function CD(n){n.sort((e,t)=>e.value.outlet===qe?-1:t.value.outlet===qe?1:e.value.outlet.localeCompare(t.value.outlet))}function DD(n){let e=n.value.routeConfig;return e&&e.path===""}function W0(n){let e=[],t=new Set;for(let i of n){if(!DD(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=W0(i.children);e.push(new gn(i.value,r))}return e.filter(i=>!t.has(i))}function x0(n){return n.data||{}}function M0(n){return n.resolve||{}}function AD(n,e,t,i,r,s){return Lt(o=>wD(n,e,t,i,o.extractedUrl,r,s).pipe(et(({state:a,tree:c})=>St(we({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function ID(n,e){return Lt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return je(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of $0(c))o.add(l);let a=0;return Ot(o).pipe(ms(c=>s.has(c)?RD(c,i,n,e):(c.data=Bl(c,c.parent,n).resolve,je(void 0))),jt(()=>a++),gs(1),Lt(c=>a===o.size?je(t):fn))})}function $0(n){let e=n.children.map(t=>$0(t)).flat();return[n,...e]}function RD(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!k0(r)&&(s[fa]=r.title),ND(s,n,e,i).pipe(et(o=>(n._resolvedData=o,n.data=Bl(n,n.parent,t).resolve,null)))}function ND(n,e,t,i){let r=Qh(n);if(r.length===0)return je({});let s={};return Ot(r).pipe(Lt(o=>PD(n[o],e,t,i).pipe(pi(),jt(a=>{if(a instanceof la)throw Hl(new na,a);s[o]=a}))),gs(1),cf(s),Oi(o=>z0(o)?fn:hs(o)))}function PD(n,e,t,i){let r=ha(e)??i,s=$s(n,r),o=s.resolve?s.resolve(e,t):Gn(r,()=>s(e,t));return qi(o)}function Kh(n){return Bn(e=>{let t=n(e);return t?Ot(t).pipe(et(()=>e)):je(e)})}var q0=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===qe);return i}getResolvedTitleForRoute(t){return t.data[fa]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:()=>fe(OD),providedIn:"root"})}return n})(),OD=(()=>{class n extends q0{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(tt(p0))};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Dp=new He("",{providedIn:"root",factory:()=>({})}),LD=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=xl({type:n,selectors:[["ng-component"]],decls:1,vars:0,template:function(i,r){i&1&&jo(0,"router-outlet")},dependencies:[GC],encapsulation:2})}return n})();function Ap(n){let e=n.children&&n.children.map(Ap),t=e?St(we({},n),{children:e}):we({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==qe&&(t.component=LD),t}var Ip=new He(""),FD=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=fe(kh);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return je(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=qi(t.loadComponent()).pipe(et(X0),jt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),Do(()=>{this.componentLoaders.delete(t)})),r=new fs(i,()=>new qt).pipe(ds());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return je({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=UD(i,this.compiler,t,this.onLoadEndListener).pipe(Do(()=>{this.childrenLoaders.delete(i)})),o=new fs(s,()=>new qt).pipe(ds());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function UD(n,e,t,i){return qi(n.loadChildren()).pipe(et(X0),Lt(r=>r instanceof Vo||Array.isArray(r)?je(r):Ot(e.compileModuleAsync(r))),et(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Ip,[],{optional:!0,self:!0}).flat()),{routes:o.map(Ap),injector:s}}))}function kD(n){return n&&typeof n=="object"&&"default"in n}function X0(n){return kD(n)?n.default:n}var Rp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:()=>fe(BD),providedIn:"root"})}return n})(),BD=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),VD=new He("");var HD=new He(""),zD=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new qt;transitionAbortSubject=new qt;configLoader=fe(FD);environmentInjector=fe(Tn);urlSerializer=fe(wp);rootContexts=fe(Gl);location=fe($o);inputBindingEnabled=fe(Cp,{optional:!0})!==null;titleStrategy=fe(q0);options=fe(Dp,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=fe(Rp);createViewTransition=fe(VD,{optional:!0});navigationErrorHandler=fe(HD,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>je(void 0);rootComponentType=null;constructor(){let t=r=>this.events.next(new cp(r)),i=r=>this.events.next(new lp(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(St(we(we({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new Gt({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:ea,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(kn(s=>s.id!==0),et(s=>St(we({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Bn(s=>{let o=!1,a=!1;return je(s).pipe(Bn(c=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",vn.SupersededByNewNavigation),fn;this.currentTransition=s,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?St(we({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let d="";return this.events.next(new Ar(c.id,this.urlSerializer.serialize(c.rawUrl),d,ip.IgnoredSameUrlNavigation)),c.resolve(!1),fn}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return je(c).pipe(Bn(d=>{let f=this.transitions?.getValue();return this.events.next(new sa(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions?.getValue()?fn:Promise.resolve(d)}),AD(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),jt(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=St(we({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let f=new Fl(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:f,source:h,restoredState:g,extras:v}=c,m=new sa(d,this.urlSerializer.serialize(f),h,g);this.events.next(m);let p=F0(this.rootComponentType).snapshot;return this.currentTransition=s=St(we({},c),{targetSnapshot:p,urlAfterRedirects:f,extras:St(we({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,je(s)}else{let d="";return this.events.next(new Ar(c.id,this.urlSerializer.serialize(c.extractedUrl),d,ip.IgnoredByUrlHandlingStrategy)),c.resolve(!1),fn}}),jt(c=>{let l=new rp(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),et(c=>(this.currentTransition=s=St(we({},c),{guards:YC(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),oD(this.environmentInjector,c=>this.events.next(c)),jt(c=>{if(s.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Hl(this.urlSerializer,c.guardsResult);let l=new sp(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),kn(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",vn.GuardRejected),!1)),Kh(c=>{if(c.guards.canActivateChecks.length)return je(c).pipe(jt(l=>{let u=new op(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Bn(l=>{let u=!1;return je(l).pipe(ID(this.paramsInheritanceStrategy,this.environmentInjector),jt({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",vn.NoDataFromResolver)}}))}),jt(l=>{let u=new ap(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),Kh(c=>{let l=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(jt(f=>{u.component=f}),et(()=>{})));for(let f of u.children)d.push(...l(f));return d};return Pc(l(c.targetSnapshot.root)).pipe(Li(null),hi(1))}),Kh(()=>this.afterPreactivation()),Bn(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?Ot(u).pipe(et(()=>s)):je(s)}),et(c=>{let l=jC(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=St(we({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),jt(()=>{this.events.next(new aa)}),XC(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),hi(1),jt({next:c=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Dr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{o=!0}}),ff(this.transitionAbortSubject.pipe(jt(c=>{throw c}))),Do(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",vn.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),Oi(c=>{if(a=!0,H0(c))this.events.next(new _i(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),qC(c)?this.events.next(new Gs(c.url,c.navigationBehaviorOptions)):s.resolve(!1);else{let l=new oa(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0);try{let u=Gn(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof la){let{message:d,cancellationCode:f}=Hl(this.urlSerializer,u);this.events.next(new _i(s.id,this.urlSerializer.serialize(s.extractedUrl),d,f)),this.events.next(new Gs(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return fn}))}))}cancelNavigationTransition(t,i,r){let s=new _i(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function GD(n){return n!==ea}var jD=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:()=>fe(WD),providedIn:"root"})}return n})(),bp=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},WD=(()=>{class n extends bp{static \u0275fac=(()=>{let t;return function(r){return(t||(t=xh(n)))(r||n)}})();static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Y0=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:()=>fe($D),providedIn:"root"})}return n})(),$D=(()=>{class n extends Y0{location=fe($o);urlSerializer=fe(wp);options=fe(Dp,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=fe(Rp);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new xi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=F0(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof sa)this.stateMemento=this.createStateMemento();else if(t instanceof Ar)this.rawUrlTree=i.initialUrl;else if(t instanceof Fl){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof aa?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof _i&&(t.code===vn.GuardRejected||t.code===vn.NoDataFromResolver)?this.restoreHistory(i):t instanceof oa?this.restoreHistory(i,!0):t instanceof Dr&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof xi?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=we(we({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=we(we({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=xh(n)))(r||n)}})();static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Jo=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Jo||{});function qD(n,e){n.events.pipe(kn(t=>t instanceof Dr||t instanceof _i||t instanceof oa||t instanceof Ar),et(t=>t instanceof Dr||t instanceof Ar?Jo.COMPLETE:(t instanceof _i?t.code===vn.Redirect||t.code===vn.SupersededByNewNavigation:!1)?Jo.REDIRECTING:Jo.FAILED),kn(t=>t!==Jo.REDIRECTING),hi(1)).subscribe(()=>{e()})}var XD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},YD={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Z0=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=fe(Ml);stateManager=fe(Y0);options=fe(Dp,{optional:!0})||{};pendingTasks=fe(Os);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=fe(zD);urlSerializer=fe(wp);location=fe($o);urlHandlingStrategy=fe(Rp);_events=new qt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=fe(jD);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=fe(Ip,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!fe(Cp,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Rt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof _i&&i.code!==vn.Redirect&&i.code!==vn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Dr)this.navigated=!0;else if(i instanceof Gs){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=we({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||GD(r.source)},o);this.scheduleNavigation(a,ea,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}KD(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ea,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=we({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ap),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=we(we({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=N0(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return P0(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=ia(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,ea,null,i)}navigate(t,i={skipLocationChange:!1}){return ZD(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=we({},XD):i===!1?r=we({},YD):r=i,ia(t))return m0(this.currentUrlTree,t,r);let s=this.parseUrl(t);return m0(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return qD(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ZD(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Oe(4008,!1)}function KD(n){return!(n instanceof aa)&&!(n instanceof Gs)}var JD=new He("");function K0(n,...e){return ll([{provide:Ip,multi:!0,useValue:n},[],{provide:js,useFactory:QD,deps:[Z0]},{provide:Uh,multi:!0,useFactory:eA},e.map(t=>t.\u0275providers)])}function QD(n){return n.routerState.root}function eA(){let n=fe(zi);return e=>{let t=n.get($i);if(e!==t.components[0])return;let i=n.get(Z0),r=n.get(tA);n.get(nA)===1&&i.initialNavigation(),n.get(iA,null,Ke.Optional)?.setUpPreloading(),n.get(JD,null,Ke.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var tA=new He("",{factory:()=>new qt}),nA=new He("",{providedIn:"root",factory:()=>1});var iA=new He("");var J0=[];var Q0={providers:[z_({eventCoalescing:!0}),K0(J0)]};var zu="171",ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ex=0,fm=1,bx=2;var hm=1,wx=2,oi=3,Di=0,on=1,ai=2,Ai=0,kr=1,pm=2,mm=3,gm=4,Tx=5,nr=100,Cx=101,Dx=102,Ax=103,Ix=104,Rx=200,Nx=201,Px=202,Ox=203,hu=204,pu=205,Lx=206,Fx=207,Ux=208,kx=209,Bx=210,Vx=211,Hx=212,zx=213,Gx=214,Gu=0,ju=1,Wu=2,Br=3,$u=4,qu=5,Xu=6,Yu=7,vm=0,jx=1,Wx=2,Ii=0,$x=1,qx=2,Xx=3,Yx=4,Zx=5,Kx=6,Jx=7;var tm=300,$r=301,qr=302,Zu=303,Ku=304,tc=306,mu=1e3,tr=1001,gu=1002,Rn=1003,Qx=1004;var nc=1005;var Yn=1006,Ju=1007;var lr=1008;var ci=1009,ym=1010,_m=1011,vo=1012,Qu=1013,ur=1014,li=1015,yo=1016,ed=1017,td=1018,Xr=1020,xm=35902,Mm=1021,Sm=1022,On=1023,Em=1024,bm=1025,Lr=1026,Vr=1027,wm=1028,nd=1029,Tm=1030,id=1031;var rd=1033,ic=33776,rc=33777,sc=33778,oc=33779,sd=35840,od=35841,ad=35842,cd=35843,ld=36196,ud=37492,dd=37496,fd=37808,hd=37809,pd=37810,md=37811,gd=37812,vd=37813,yd=37814,_d=37815,xd=37816,Md=37817,Sd=37818,Ed=37819,bd=37820,wd=37821,ac=36492,Td=36494,Cd=36495,Cm=36283,Dd=36284,Ad=36285,Id=36286;var Ea=2300,vu=2301,fu=2302,nm=2400,im=2401,rm=2402;var eM=3200,tM=3201;var Dm=0,nM=1,Ri="",nn="srgb",Hr="srgb-linear",ba="linear",mt="srgb";var Or=7680;var sm=519,iM=512,rM=513,sM=514,Am=515,oM=516,aM=517,cM=518,lM=519,om=35044;var Im="300 es",ni=2e3,wa=2001,ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ex=1234567,_a=Math.PI/180,co=180/Math.PI;function Yr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function Rm(n,e){return(n%e+e)%e}function rA(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sA(n,e,t){return n!==e?(t-n)/(e-n):0}function xa(n,e,t){return(1-t)*n+t*e}function oA(n,e,t,i){return xa(n,e,1-Math.exp(-t*i))}function aA(n,e=1){return e-Math.abs(Rm(n,e*2)-e)}function cA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function lA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function uA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function dA(n,e){return n+Math.random()*(e-n)}function fA(n){return n*(.5-Math.random())}function hA(n){n!==void 0&&(ex=n);let e=ex+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pA(n){return n*_a}function mA(n){return n*co}function gA(n){return(n&n-1)===0&&n!==0}function vA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _A(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function so(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Nm={DEG2RAD:_a,RAD2DEG:co,generateUUID:Yr,clamp:Ye,euclideanModulo:Rm,mapLinear:rA,inverseLerp:sA,lerp:xa,damp:oA,pingpong:aA,smoothstep:cA,smootherstep:lA,randInt:uA,randFloat:dA,randFloatSpread:fA,seededRandom:hA,degToRad:pA,radToDeg:mA,isPowerOfTwo:gA,ceilPowerOfTwo:vA,floorPowerOfTwo:yA,setQuaternionFromProperEuler:_A,normalize:tn,denormalize:so},se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],T=r[1],S=r[4],M=r[7],I=r[2],D=r[5],C=r[8];return s[0]=o*v+a*T+c*I,s[3]=o*m+a*S+c*D,s[6]=o*p+a*M+c*C,s[1]=l*v+u*T+d*I,s[4]=l*m+u*S+d*D,s[7]=l*p+u*M+d*C,s[2]=f*v+h*T+g*I,s[5]=f*m+h*S+g*D,s[8]=f*p+h*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Np.makeScale(e,t)),this}rotate(e){return this.premultiply(Np.makeRotation(-e)),this}translate(e,t){return this.premultiply(Np.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Np=new We;function Pm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uM(){let n=lo("canvas");return n.style.display="block",n}var tx={};function Zr(n){n in tx||(tx[n]=!0,console.warn(n))}function dM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function fM(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hM(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var nx=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ix=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xA(){let n={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=ao(r.r),r.g=ao(r.g),r.b=ao(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ri?ba:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Hr]:{primaries:e,whitePoint:i,transfer:ba,toXYZ:nx,fromXYZ:ix,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:nx,fromXYZ:ix,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}var at=xA();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qs,yu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=lo("canvas")),qs.width=e.width,qs.height=e.height;let i=qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=lo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ci(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},MA=0,Ta=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pp(r[o].image)):s.push(Pp(r[o]))}else s=Pp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Pp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var SA=0,Ni=(()=>{class n extends ii{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=tr,s=tr,o=Yn,a=lr,c=On,l=ci,u=n.DEFAULT_ANISOTROPY,d=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=Yr(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mu:t.x=t.x-Math.floor(t.x);break;case tr:t.x=t.x<0?0:1;break;case gu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mu:t.y=t.y-Math.floor(t.y);break;case tr:t.y=t.y<0?0:1;break;case gu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=tm,n.DEFAULT_ANISOTROPY=1,n})(),Dt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,M=(h+1)/2,I=(p+1)/2,D=(u+f)/4,C=(d+v)/4,R=(g+m)/4;return S>M&&S>I?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=D/i,s=C/i):M>I?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=D/r,s=R/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=R/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(f-u)/T,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_u=class extends ii{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Ni(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ta(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends _u{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ca=class extends Ni{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xu=class extends Ni{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*v,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let I=Math.sqrt(S),D=Math.atan2(I,p*T);m=Math.sin(m*D)/I,a=Math.sin(a*D)/I}let M=a*T;if(c=c*m+f*M,l=l*m+h*M,u=u*m+g*M,d=d*m+v*M,m===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Op.copy(this).projectOnVector(e),this.sub(Op)}reflect(e){return this.sub(Op.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Op=new O,rx=new Nn,ir=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wl.copy(i.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),$l.subVectors(this.max,ma),Xs.subVectors(e.a,ma),Ys.subVectors(e.b,ma),Zs.subVectors(e.c,ma),Xi.subVectors(Ys,Xs),Yi.subVectors(Zs,Ys),Ir.subVectors(Xs,Zs);let t=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-Ir.z,Ir.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,Ir.z,0,-Ir.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-Ir.y,Ir.x,0];return!Lp(t,Xs,Ys,Zs,$l)||(t=[1,0,0,0,1,0,0,0,1],!Lp(t,Xs,Ys,Zs,$l))?!1:(ql.crossVectors(Xi,Yi),t=[ql.x,ql.y,ql.z],Lp(t,Xs,Ys,Zs,$l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new O,new O,new O,new O,new O,new O,new O,new O],$n=new O,Wl=new ir,Xs=new O,Ys=new O,Zs=new O,Xi=new O,Yi=new O,Ir=new O,ma=new O,$l=new O,ql=new O,Rr=new O;function Lp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Rr.fromArray(n,s);let a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),c=e.dot(Rr),l=t.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var EA=new ir,ga=new O,Fp=new O,uo=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):EA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Fp)),this.expandByPoint(ga.copy(e.center).sub(Fp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new O,Up=new O,Xl=new O,Zi=new O,kp=new O,Yl=new O,Bp=new O,fo=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Up.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Up);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Xl),a=Zi.dot(this.direction),c=-Zi.dot(Xl),l=Zi.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Up).addScaledVector(Xl,f),h}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){kp.subVectors(t,e),Yl.subVectors(i,e),Bp.crossVectors(kp,Yl);let o=this.direction.dot(Bp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);let c=a*this.direction.dot(Yl.crossVectors(Zi,Yl));if(c<0)return null;let l=a*this.direction.dot(kp.cross(Zi));if(l<0||c+l>o)return null;let u=-a*Zi.dot(Bp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ks.setFromMatrixColumn(e,0).length(),s=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f+v*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bA,e,wA)}lookAt(e,t,i){let r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ki.crossVectors(i,yn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ki.crossVectors(i,yn)),Ki.normalize(),Zl.crossVectors(yn,Ki),r[0]=Ki.x,r[4]=Zl.x,r[8]=yn.x,r[1]=Ki.y,r[5]=Zl.y,r[9]=yn.y,r[2]=Ki.z,r[6]=Zl.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],S=i[7],M=i[11],I=i[15],D=r[0],C=r[4],R=r[8],b=r[12],x=r[1],A=r[5],$=r[9],B=r[13],q=r[2],X=r[6],z=r[10],K=r[14],V=r[3],ae=r[7],ge=r[11],Se=r[15];return s[0]=o*D+a*x+c*q+l*V,s[4]=o*C+a*A+c*X+l*ae,s[8]=o*R+a*$+c*z+l*ge,s[12]=o*b+a*B+c*K+l*Se,s[1]=u*D+d*x+f*q+h*V,s[5]=u*C+d*A+f*X+h*ae,s[9]=u*R+d*$+f*z+h*ge,s[13]=u*b+d*B+f*K+h*Se,s[2]=g*D+v*x+m*q+p*V,s[6]=g*C+v*A+m*X+p*ae,s[10]=g*R+v*$+m*z+p*ge,s[14]=g*b+v*B+m*K+p*Se,s[3]=T*D+S*x+M*q+I*V,s[7]=T*C+S*A+M*X+I*ae,s[11]=T*R+S*$+M*z+I*ge,s[15]=T*b+S*B+M*K+I*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+v*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=d*m*l-v*f*l+v*c*h-a*m*h-d*c*p+a*f*p,S=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,M=u*v*l-g*d*l+g*a*h-o*v*h-u*a*p+o*d*p,I=g*d*c-u*v*c-g*a*f+o*v*f+u*a*m-o*d*m,D=t*T+i*S+r*M+s*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/D;return e[0]=T*C,e[1]=(v*f*s-d*m*s-v*r*h+i*m*h+d*r*p-i*f*p)*C,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*C,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*C,e[4]=S*C,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*C,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*C,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*C,e[8]=M*C,e[9]=(g*d*s-u*v*s-g*i*h+t*v*h+u*i*p-t*d*p)*C,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*C,e[12]=I*C,e[13]=(u*v*r-g*d*r+g*i*f-t*v*f-u*i*m+t*d*m)*C,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,v=o*u,m=o*d,p=a*d,T=c*l,S=c*u,M=c*d,I=i.x,D=i.y,C=i.z;return r[0]=(1-(v+p))*I,r[1]=(h+M)*I,r[2]=(g-S)*I,r[3]=0,r[4]=(h-M)*D,r[5]=(1-(f+p))*D,r[6]=(m+T)*D,r[7]=0,r[8]=(g+S)*C,r[9]=(m-T)*C,r[10]=(1-(f+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ks.set(r[0],r[1],r[2]).length(),o=Ks.set(r[4],r[5],r[6]).length(),a=Ks.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);let l=1/s,u=1/o,d=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ni){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===ni)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===wa)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ni){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,g,v;if(a===ni)g=(o+s)*d,v=-2*d;else if(a===wa)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ks=new O,qn=new At,bA=new O(0,0,0),wA=new O(1,1,1),Ki=new O,Zl=new O,yn=new O,sx=new At,ox=new Nn,zr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return sx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ox.setFromEuler(this),this.setFromQuaternion(ox,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Da=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},TA=0,ax=new O,Js=new Nn,Ei=new At,Kl=new O,va=new O,CA=new O,DA=new Nn,cx=new O(1,0,0),lx=new O(0,1,0),ux=new O(0,0,1),dx={type:"added"},AA={type:"removed"},Qs={type:"childadded",child:null},Vp={type:"childremoved",child:null},Kr=(()=>{class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,i=new zr,r=new Nn,s=new O(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new We}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Js.setFromAxisAngle(t,i),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,i){return Js.setFromAxisAngle(t,i),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(cx,t)}rotateY(t){return this.rotateOnAxis(lx,t)}rotateZ(t){return this.rotateOnAxis(ux,t)}translateOnAxis(t,i){return ax.copy(t).applyQuaternion(this.quaternion),this.position.add(ax.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(cx,t)}translateY(t){return this.translateOnAxis(lx,t)}translateZ(t){return this.translateOnAxis(ux,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Kl.copy(t):Kl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(va,Kl,this.up):Ei.lookAt(Kl,va,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Ei),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dx),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(AA),Vp.child=t,this.dispatchEvent(Vp),Vp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dx),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,t,CA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,DA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new O(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Xn=new O,bi=new O,Hp=new O,wi=new O,eo=new O,to=new O,fx=new O,zp=new O,Gp=new O,jp=new O,Wp=new Dt,$p=new Dt,qp=new Dt,er=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),bi.subVectors(i,t),Hp.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(bi),c=Xn.dot(Hp),l=bi.dot(bi),u=bi.dot(Hp),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(o,wi.y),c.addScaledVector(a,wi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Wp.setScalar(0),$p.setScalar(0),qp.setScalar(0),Wp.fromBufferAttribute(e,t),$p.fromBufferAttribute(e,i),qp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Wp,s.x),o.addScaledVector($p,s.y),o.addScaledVector(qp,s.z),o}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),bi.subVectors(e,t),Xn.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Xn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;eo.subVectors(r,i),to.subVectors(s,i),zp.subVectors(e,i);let c=eo.dot(zp),l=to.dot(zp);if(c<=0&&l<=0)return t.copy(i);Gp.subVectors(e,r);let u=eo.dot(Gp),d=to.dot(Gp);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(eo,o);jp.subVectors(e,s);let h=eo.dot(jp),g=to.dot(jp);if(g>=0&&h<=g)return t.copy(s);let v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(to,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return fx.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(fx,a);let p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(eo,o).addScaledVector(to,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Xp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ct=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Rm(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xp(o,s,e+1/3),this.g=Xp(o,s,e),this.b=Xp(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let i=pM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return at.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Ye(Yt.r*255,0,255))*65536+Math.round(Ye(Yt.g*255,0,255))*256+Math.round(Ye(Yt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Yt.copy(this),t);let i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=nn){at.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,r=Yt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Jl);let i=xa(Ji.h,Jl.h,t),r=xa(Ji.s,Jl.s,t),s=xa(Ji.l,Jl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new ct;ct.NAMES=pM;var IA=0,rr=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=kr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=pu,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hu&&(i.blendSrc=this.blendSrc),this.blendDst!==pu&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Aa=class extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new O,Ql=new se,xn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=om,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ql.fromBufferAttribute(this,t),Ql.applyMatrix3(e),this.setXY(t,Ql.x,Ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=so(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=so(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=so(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=so(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=so(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==om&&(e.usage=this.usage),e}};var Ia=class extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ra=class extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rn=class extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}},RA=0,An=new At,Yp=new Kr,no=new O,_n=new ir,ya=new ir,Ht=new O,si=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RA++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pm(e)?Ra:Ia)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Yp.lookAt(e),Yp.updateMatrix(),this.applyMatrix4(Yp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ya.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(_n.min,ya.min),_n.expandByPoint(Ht),Ht.addVectors(_n.max,ya.max),_n.expandByPoint(Ht)):(_n.expandByPoint(ya.min),_n.expandByPoint(ya.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(no.fromBufferAttribute(e,l),Ht.add(no)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new O,c[R]=new O;let l=new O,u=new O,d=new O,f=new se,h=new se,g=new se,v=new O,m=new O;function p(R,b,x){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,R),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(A),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(A),a[R].add(v),a[b].add(v),a[x].add(v),c[R].add(m),c[b].add(m),c[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,b=T.length;R<b;++R){let x=T[R],A=x.start,$=x.count;for(let B=A,q=A+$;B<q;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let S=new O,M=new O,I=new O,D=new O;function C(R){I.fromBufferAttribute(r,R),D.copy(I);let b=a[R];S.copy(b),S.sub(I.multiplyScalar(I.dot(b))).normalize(),M.crossVectors(D,b);let A=M.dot(c[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,A)}for(let R=0,b=T.length;R<b;++R){let x=T[R],A=x.start,$=x.count;for(let B=A,q=A+$;B<q;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new xn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hx=new At,Nr=new fo,eu=new uo,px=new O,tu=new O,nu=new O,iu=new O,Zp=new O,ru=new O,mx=new O,su=new O,sn=class extends Kr{constructor(e=new si,t=new Aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ru.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Zp.fromBufferAttribute(d,e),o?ru.addScaledVector(Zp,u):ru.addScaledVector(Zp.sub(t),u))}t.add(ru)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eu.copy(i.boundingSphere),eu.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(eu.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(eu,px)===null||Nr.origin.distanceToSquared(px)>(e.far-e.near)**2))&&(hx.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(hx),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Nr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],T=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=T,I=S;M<I;M+=3){let D=a.getX(M),C=a.getX(M+1),R=a.getX(M+2);r=ou(this,p,e,i,l,u,d,D,C,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let T=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);r=ou(this,o,e,i,l,u,d,T,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],T=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let M=T,I=S;M<I;M+=3){let D=M,C=M+1,R=M+2;r=ou(this,p,e,i,l,u,d,D,C,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let T=m,S=m+1,M=m+2;r=ou(this,o,e,i,l,u,d,T,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function NA(n,e,t,i,r,s,o,a){let c;if(e.side===on?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Di,a),c===null)return null;su.copy(a),su.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(su);return l<t.near||l>t.far?null:{distance:l,point:su.clone(),object:n}}function ou(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,tu),n.getVertexPosition(c,nu),n.getVertexPosition(l,iu);let u=NA(n,e,t,i,tu,nu,iu,mx);if(u){let d=new O;er.getBarycoord(mx,tu,nu,iu,d),r&&(u.uv=er.getInterpolatedAttribute(r,a,c,l,d,new se)),s&&(u.uv1=er.getInterpolatedAttribute(s,a,c,l,d,new se)),o&&(u.normal=er.getInterpolatedAttribute(o,a,c,l,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};er.getNormal(tu,nu,iu,f.normal),u.face=f,u.barycoord=d}return u}var ho=class n extends si{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(d,2));function g(v,m,p,T,S,M,I,D,C,R,b){let x=M/C,A=I/R,$=M/2,B=I/2,q=D/2,X=C+1,z=R+1,K=0,V=0,ae=new O;for(let ge=0;ge<z;ge++){let Se=ge*A-B;for(let Ge=0;Ge<X;Ge++){let ut=Ge*x-$;ae[v]=ut*T,ae[m]=Se*S,ae[p]=q,l.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[p]=D>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(Ge/C),d.push(1-ge/R),K+=1}}for(let ge=0;ge<R;ge++)for(let Se=0;Se<C;Se++){let Ge=f+Se+X*ge,ut=f+Se+X*(ge+1),W=f+(Se+1)+X*(ge+1),ie=f+(Se+1)+X*ge;c.push(Ge,ut,ie),c.push(ut,W,ie),V+=6}a.addGroup(h,V,b),h+=V,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Jr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kt(n){let e={};for(let t=0;t<n.length;t++){let i=Jr(n[t]);for(let r in i)e[r]=i[r]}return e}function PA(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Om(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var mM={clone:Jr,merge:Kt},OA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OA,this.fragmentShader=LA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=PA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Na=class extends Kr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new O,gx=new se,vx=new se,Zt=class extends Na{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,gx,vx),t.subVectors(vx,gx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},io=-90,ro=1,Mu=class extends Kr{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(io,ro,e,t);r.layers=this.layers,this.add(r);let s=new Zt(io,ro,e,t);s.layers=this.layers,this.add(s);let o=new Zt(io,ro,e,t);o.layers=this.layers,this.add(o);let a=new Zt(io,ro,e,t);a.layers=this.layers,this.add(a);let c=new Zt(io,ro,e,t);c.layers=this.layers,this.add(c);let l=new Zt(io,ro,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Pa=class extends Ni{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:$r,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Su=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ho(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ai});s.uniforms.tEquirect.value=t;let o=new sn(r,s),a=t.minFilter;return t.minFilter===lr&&(t.minFilter=Yn),new Mu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};var Oa=class extends Kr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Kp=new O,FA=new O,UA=new We,In=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Kp.subVectors(i,t).cross(FA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Kp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||UA.getNormalMatrix(e),r=this.coplanarPoint(Kp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pr=new uo,au=new O,La=class{constructor(e=new In,t=new In,i=new In,r=new In,s=new In,o=new In){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],v=r[10],m=r[11],p=r[12],T=r[13],S=r[14],M=r[15];if(i[0].setComponents(c-s,f-l,m-h,M-p).normalize(),i[1].setComponents(c+s,f+l,m+h,M+p).normalize(),i[2].setComponents(c+o,f+u,m+g,M+T).normalize(),i[3].setComponents(c-o,f-u,m-g,M-T).normalize(),i[4].setComponents(c-a,f-d,m-v,M-S).normalize(),t===ni)i[5].setComponents(c+a,f+d,m+v,M+S).normalize();else if(t===wa)i[5].setComponents(a,d,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(au.x=r.normal.x>0?e.max.x:e.min.x,au.y=r.normal.y>0?e.max.y:e.min.y,au.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gr=class extends Kr{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Fa=class extends Ni{constructor(e,t,i,r,s,o,a,c,l,u=Lr){if(u!==Lr&&u!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Lr&&(i=ur),i===void 0&&u===Vr&&(i=Xr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rn,this.minFilter=c!==void 0?c:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new se:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new O,r=[],s=[],o=[],a=new O,c=new At;for(let h=0;h<=e;h++){let g=h/e;r[h]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ye(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Ye(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},po=class extends Mn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new se){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Eu=class extends po{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lm(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,r(o,a,f,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var cu=new O,Jp=new Lm,Qp=new Lm,em=new Lm,bu=class extends Mn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new O){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(cu.subVectors(r[0],r[1]).add(r[0]),l=cu);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(cu.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=cu),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),h),v=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Jp.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,v,m),Qp.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,v,m),em.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Jp.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Qp.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),em.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(Jp.calc(c),Qp.calc(c),em.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function yx(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function kA(n,e){let t=1-n;return t*t*e}function BA(n,e){return 2*(1-n)*n*e}function VA(n,e){return n*n*e}function Ma(n,e,t,i){return kA(n,e)+BA(n,t)+VA(n,i)}function HA(n,e){let t=1-n;return t*t*t*e}function zA(n,e){let t=1-n;return 3*t*t*n*e}function GA(n,e){return 3*(1-n)*n*n*e}function jA(n,e){return n*n*n*e}function Sa(n,e,t,i,r){return HA(n,e)+zA(n,t)+GA(n,i)+jA(n,r)}var Ua=class extends Mn{constructor(e=new se,t=new se,i=new se,r=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new se){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Sa(e,r.x,s.x,o.x,a.x),Sa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wu=class extends Mn{constructor(e=new O,t=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new O){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Sa(e,r.x,s.x,o.x,a.x),Sa(e,r.y,s.y,o.y,a.y),Sa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends Mn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tu=class extends Mn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends Mn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ma(e,r.x,s.x,o.x),Ma(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cu=class extends Mn{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ma(e,r.x,s.x,o.x),Ma(e,r.y,s.y,o.y),Ma(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(yx(a,c.x,l.x,u.x,d.x),yx(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new se().fromArray(r))}return this}},am=Object.freeze({__proto__:null,ArcCurve:Eu,CatmullRomCurve3:bu,CubicBezierCurve:Ua,CubicBezierCurve3:wu,EllipseCurve:po,LineCurve:ka,LineCurve3:Tu,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:Cu,SplineCurve:Va}),Du=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new am[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new am[r.type]().fromJSON(r))}return this}},mo=class extends Du{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ka(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Ba(this.currentPoint.clone(),new se(e,t),new se(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Ua(this.currentPoint.clone(),new se(e,t),new se(i,r),new se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Va(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){let l=new po(e,t,i,r,s,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Fr=class extends mo{constructor(e){super(e),this.uuid=Yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new mo().fromJSON(r))}return this}},WA={triangulate:function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=gM(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,d,f,h;if(i&&(s=ZA(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let g=t;g<r;g+=t)d=n[g],f=n[g+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);h=Math.max(l-a,u-c),h=h!==0?32767/h:0}return Ha(s,o,t,a,c,h,0),o}};function gM(n,e,t,i,r){let s,o;if(r===aI(n,e,t,i)>0)for(s=e;s<t;s+=i)o=_x(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=_x(s,n[s],n[s+1],o);return o&&Rd(o,o.next)&&(Ga(o),o=o.next),o}function jr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Rd(t,t.next)||bt(t.prev,t,t.next)===0)){if(Ga(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ha(n,e,t,i,r,s,o){if(!n)return;!o&&s&&tI(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?qA(n,i,r,s):$A(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Ga(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=XA(jr(n),e,t),Ha(n,e,t,i,r,s,2)):o===2&&YA(n,e,t,i,r,s):Ha(jr(n),e,t,i,r,s,1);break}}}function $A(n){let e=n.prev,t=n,i=n.next;if(bt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,f=r>s?r>o?r:o:s>o?s:o,h=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=h&&oo(r,a,s,c,o,l,g.x,g.y)&&bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qA(n,e,t,i){let r=n.prev,s=n,o=n.next;if(bt(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,f=o.y,h=a<c?a<l?a:l:c<l?c:l,g=u<d?u<f?u:f:d<f?d:f,v=a>c?a>l?a:l:c>l?c:l,m=u>d?u>f?u:f:d>f?d:f,p=cm(h,g,e,t,i),T=cm(v,m,e,t,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=p&&M&&M.z<=T;){if(S.x>=h&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&oo(a,u,c,d,l,f,S.x,S.y)&&bt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=h&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&oo(a,u,c,d,l,f,M.x,M.y)&&bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=p;){if(S.x>=h&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&oo(a,u,c,d,l,f,S.x,S.y)&&bt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=T;){if(M.x>=h&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&oo(a,u,c,d,l,f,M.x,M.y)&&bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function XA(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!Rd(r,s)&&vM(r,i,i.next,s)&&za(r,s)&&za(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Ga(i),Ga(i.next),i=n=s),i=i.next}while(i!==n);return jr(i)}function YA(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rI(o,a)){let c=yM(o,a);o=jr(o,o.next),c=jr(c,c.next),Ha(o,e,t,i,r,s,0),Ha(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function ZA(n,e,t,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=gM(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(iI(l));for(r.sort(KA),s=0;s<r.length;s++)t=JA(r[s],t);return t}function KA(n,e){return n.x-e.x}function JA(n,e){let t=QA(n,e);if(!t)return e;let i=yM(t,n);return jr(i,i.next),jr(t,t.next)}function QA(n,e){let t=e,i=-1/0,r,s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,c=r.x,l=r.y,u=1/0,d;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&oo(o<l?s:i,o,c,l,o<l?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),za(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&eI(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function eI(n,e){return bt(n.prev,n,e.prev)<0&&bt(e.next,n,n.next)<0}function tI(n,e,t,i){let r=n;do r.z===0&&(r.z=cm(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,nI(r)}function nI(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function cm(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function iI(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function oo(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function rI(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sI(n,e)&&(za(n,e)&&za(e,n)&&oI(n,e)&&(bt(n.prev,n,e.prev)||bt(n,e.prev,e))||Rd(n,e)&&bt(n.prev,n,n.next)>0&&bt(e.prev,e,e.next)>0)}function bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Rd(n,e){return n.x===e.x&&n.y===e.y}function vM(n,e,t,i){let r=uu(bt(n,e,t)),s=uu(bt(n,e,i)),o=uu(bt(t,i,n)),a=uu(bt(t,i,e));return!!(r!==s&&o!==a||r===0&&lu(n,t,e)||s===0&&lu(n,i,e)||o===0&&lu(t,n,i)||a===0&&lu(t,e,i))}function lu(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function uu(n){return n>0?1:n<0?-1:0}function sI(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vM(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function za(n,e){return bt(n.prev,n,n.next)<0?bt(n,e,n.next)>=0&&bt(n,n.prev,e)>=0:bt(n,e,n.prev)<0||bt(n,n.next,e)<0}function oI(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function yM(n,e){let t=new lm(n.i,n.x,n.y),i=new lm(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function _x(n,e,t,i){let r=new lm(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ga(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function lm(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aI(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Ur=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];xx(e),Mx(i,e);let o=e.length;t.forEach(xx);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Mx(i,t[c]);let a=WA.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function xx(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Mx(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ja=class n extends si{constructor(e=new Fr([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new rn(r,3)),this.setAttribute("uv",new rn(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:h-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:cI,S,M=!1,I,D,C,R;p&&(S=p.getSpacedPoints(u),M=!0,f=!1,I=p.computeFrenetFrames(u,!1),D=new O,C=new O,R=new O),f||(m=0,h=0,g=0,v=0);let b=a.extractPoints(l),x=b.shape,A=b.holes;if(!Ur.isClockWise(x)){x=x.reverse();for(let Z=0,ne=A.length;Z<ne;Z++){let w=A[Z];Ur.isClockWise(w)&&(A[Z]=w.reverse())}}let B=Ur.triangulateShape(x,A),q=x;for(let Z=0,ne=A.length;Z<ne;Z++){let w=A[Z];x=x.concat(w)}function X(Z,ne,w){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ne,w)}let z=x.length,K=B.length;function V(Z,ne,w){let Ce,Q,ye,re=Z.x-ne.x,Ne=Z.y-ne.y,pe=w.x-Z.x,E=w.y-Z.y,y=re*re+Ne*Ne,F=re*E-Ne*pe;if(Math.abs(F)>Number.EPSILON){let G=Math.sqrt(y),J=Math.sqrt(pe*pe+E*E),j=ne.x-Ne/G,Te=ne.y+re/G,le=w.x-E/J,ve=w.y+pe/J,Je=((le-j)*E-(ve-Te)*pe)/(re*E-Ne*pe);Ce=j+re*Je-Z.x,Q=Te+Ne*Je-Z.y;let te=Ce*Ce+Q*Q;if(te<=2)return new se(Ce,Q);ye=Math.sqrt(te/2)}else{let G=!1;re>Number.EPSILON?pe>Number.EPSILON&&(G=!0):re<-Number.EPSILON?pe<-Number.EPSILON&&(G=!0):Math.sign(Ne)===Math.sign(E)&&(G=!0),G?(Ce=-Ne,Q=re,ye=Math.sqrt(y)):(Ce=re,Q=Ne,ye=Math.sqrt(y/2))}return new se(Ce/ye,Q/ye)}let ae=[];for(let Z=0,ne=q.length,w=ne-1,Ce=Z+1;Z<ne;Z++,w++,Ce++)w===ne&&(w=0),Ce===ne&&(Ce=0),ae[Z]=V(q[Z],q[w],q[Ce]);let ge=[],Se,Ge=ae.concat();for(let Z=0,ne=A.length;Z<ne;Z++){let w=A[Z];Se=[];for(let Ce=0,Q=w.length,ye=Q-1,re=Ce+1;Ce<Q;Ce++,ye++,re++)ye===Q&&(ye=0),re===Q&&(re=0),Se[Ce]=V(w[Ce],w[ye],w[re]);ge.push(Se),Ge=Ge.concat(Se)}for(let Z=0;Z<m;Z++){let ne=Z/m,w=h*Math.cos(ne*Math.PI/2),Ce=g*Math.sin(ne*Math.PI/2)+v;for(let Q=0,ye=q.length;Q<ye;Q++){let re=X(q[Q],ae[Q],Ce);oe(re.x,re.y,-w)}for(let Q=0,ye=A.length;Q<ye;Q++){let re=A[Q];Se=ge[Q];for(let Ne=0,pe=re.length;Ne<pe;Ne++){let E=X(re[Ne],Se[Ne],Ce);oe(E.x,E.y,-w)}}}let ut=g+v;for(let Z=0;Z<z;Z++){let ne=f?X(x[Z],Ge[Z],ut):x[Z];M?(C.copy(I.normals[0]).multiplyScalar(ne.x),D.copy(I.binormals[0]).multiplyScalar(ne.y),R.copy(S[0]).add(C).add(D),oe(R.x,R.y,R.z)):oe(ne.x,ne.y,0)}for(let Z=1;Z<=u;Z++)for(let ne=0;ne<z;ne++){let w=f?X(x[ne],Ge[ne],ut):x[ne];M?(C.copy(I.normals[Z]).multiplyScalar(w.x),D.copy(I.binormals[Z]).multiplyScalar(w.y),R.copy(S[Z]).add(C).add(D),oe(R.x,R.y,R.z)):oe(w.x,w.y,d/u*Z)}for(let Z=m-1;Z>=0;Z--){let ne=Z/m,w=h*Math.cos(ne*Math.PI/2),Ce=g*Math.sin(ne*Math.PI/2)+v;for(let Q=0,ye=q.length;Q<ye;Q++){let re=X(q[Q],ae[Q],Ce);oe(re.x,re.y,d+w)}for(let Q=0,ye=A.length;Q<ye;Q++){let re=A[Q];Se=ge[Q];for(let Ne=0,pe=re.length;Ne<pe;Ne++){let E=X(re[Ne],Se[Ne],Ce);M?oe(E.x,E.y+S[u-1].y,S[u-1].x+w):oe(E.x,E.y,d+w)}}}W(),ie();function W(){let Z=r.length/3;if(f){let ne=0,w=z*ne;for(let Ce=0;Ce<K;Ce++){let Q=B[Ce];De(Q[2]+w,Q[1]+w,Q[0]+w)}ne=u+m*2,w=z*ne;for(let Ce=0;Ce<K;Ce++){let Q=B[Ce];De(Q[0]+w,Q[1]+w,Q[2]+w)}}else{for(let ne=0;ne<K;ne++){let w=B[ne];De(w[2],w[1],w[0])}for(let ne=0;ne<K;ne++){let w=B[ne];De(w[0]+z*u,w[1]+z*u,w[2]+z*u)}}i.addGroup(Z,r.length/3-Z,0)}function ie(){let Z=r.length/3,ne=0;be(q,ne),ne+=q.length;for(let w=0,Ce=A.length;w<Ce;w++){let Q=A[w];be(Q,ne),ne+=Q.length}i.addGroup(Z,r.length/3-Z,1)}function be(Z,ne){let w=Z.length;for(;--w>=0;){let Ce=w,Q=w-1;Q<0&&(Q=Z.length-1);for(let ye=0,re=u+m*2;ye<re;ye++){let Ne=z*ye,pe=z*(ye+1),E=ne+Ce+Ne,y=ne+Q+Ne,F=ne+Q+pe,G=ne+Ce+pe;Ue(E,y,F,G)}}}function oe(Z,ne,w){c.push(Z),c.push(ne),c.push(w)}function De(Z,ne,w){Pe(Z),Pe(ne),Pe(w);let Ce=r.length/3,Q=T.generateTopUV(i,r,Ce-3,Ce-2,Ce-1);st(Q[0]),st(Q[1]),st(Q[2])}function Ue(Z,ne,w,Ce){Pe(Z),Pe(ne),Pe(Ce),Pe(ne),Pe(w),Pe(Ce);let Q=r.length/3,ye=T.generateSideWallUV(i,r,Q-6,Q-3,Q-2,Q-1);st(ye[0]),st(ye[1]),st(ye[3]),st(ye[1]),st(ye[2]),st(ye[3])}function Pe(Z){r.push(c[Z*3+0]),r.push(c[Z*3+1]),r.push(c[Z*3+2])}function st(Z){s.push(Z.x),s.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return lI(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new am[r.type]().fromJSON(r)),new n(i,e.options)}},cI={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new se(s,o),new se(a,c),new se(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new se(o,1-c),new se(l,1-d),new se(f,1-g),new se(v,1-p)]:[new se(a,1-c),new se(u,1-d),new se(h,1-g),new se(m,1-p)]}};function lI(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Wa=class n extends si{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let T=p*f-o;for(let S=0;S<l;S++){let M=S*d-s;g.push(M,-T,0),v.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){let S=T+l*p,M=T+l*(p+1),I=T+1+l*(p+1),D=T+1+l*p;h.push(S,M,D),h.push(M,I,D)}this.setIndex(h),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var $a=class n extends si{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],c=[],l=[],u=new O,d=new O,f=new O;for(let h=0;h<=i;h++)for(let g=0;g<=r;g++){let v=g/r*s,m=h/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(h/i)}for(let h=1;h<=i;h++)for(let g=1;g<=r;g++){let v=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,p=(r+1)*(h-1)+g,T=(r+1)*h+g;o.push(v,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new rn(a,3)),this.setAttribute("normal",new rn(c,3)),this.setAttribute("uv",new rn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Au=class extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Iu=class extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},qa=class extends rr{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ct(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dm,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}};function du(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function uI(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Wr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ru=class extends Wr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nm,endingEnd:nm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case im:s=e,a=2*t-i;break;case rm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case im:o=e,c=2*i-t;break;case rm:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,T=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,S=(-1-h)*m+(1.5+h)*v+.5*g,M=h*m-h*v;for(let I=0;I!==a;++I)s[I]=p*o[u+I]+T*o[l+I]+S*o[c+I]+M*o[d+I];return s}},Nu=class extends Wr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Pu=class extends Wr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Pn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=du(t,this.TimeBufferType),this.values=du(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:du(e.times,Array),values:du(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ru(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ea:t=this.InterpolantFactoryMethodDiscrete;break;case vu:t=this.InterpolantFactoryMethodLinear;break;case fu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return vu;case this.InterpolantFactoryMethodSmooth:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&uI(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===fu,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=vu;var sr=class extends Pn{constructor(e,t,i){super(e,t,i)}};sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Ea;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ou=class extends Pn{};Ou.prototype.ValueTypeName="color";var Lu=class extends Pn{};Lu.prototype.ValueTypeName="number";var Fu=class extends Wr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Nn.slerpFlat(s,0,o,l-a,o,l,c);return s}},Xa=class extends Pn{InterpolantFactoryMethodLinear(e){return new Fu(this.times,this.values,this.getValueSize(),e)}};Xa.prototype.ValueTypeName="quaternion";Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Pn{constructor(e,t,i){super(e,t,i)}};or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Ea;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var Uu=class extends Pn{};Uu.prototype.ValueTypeName="vector";var Ya={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ku=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}},_M=new ku,_o=(()=>{class n{constructor(t){this.manager=t!==void 0?t:_M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),Ti={},um=class extends Error{constructor(e,t){super(e),this.response=t}},Za=class extends _o{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ya.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:i,onError:r});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ti[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0,v=0,m=new ReadableStream({start(p){T();function T(){d.read().then(({done:S,value:M})=>{if(S)p.close();else{v+=M.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:h});for(let D=0,C=u.length;D<C;D++){let R=u[D];R.onProgress&&R.onProgress(I)}p.enqueue(M),T()}},S=>{p.error(S)})}}});return new Response(m)}else throw new um(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{Ya.add(e,l);let u=Ti[e];delete Ti[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{let u=Ti[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ti[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Bu=class extends _o{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Ya.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=lo("img");function c(){u(),Ya.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Ka=class extends _o{constructor(e){super(e)}load(e,t,i,r){let s=new Ni,o=new Bu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}};var Vu=class extends Na{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Hu=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ja=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Sx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Sx(){return performance.now()}var Fm="\\[\\]\\.:\\/",dI=new RegExp("["+Fm+"]","g"),Um="[^"+Fm+"]",fI="[^"+Fm.replace("\\.","")+"]",hI=/((?:WC+[\/:])*)/.source.replace("WC",Um),pI=/(WCOD+)?/.source.replace("WCOD",fI),mI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Um),gI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Um),vI=new RegExp("^"+hI+pI+mI+gI+"$"),yI=["material","materials","bones","map"],dm=class{constructor(e,t,i){let r=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dI,"")}static parseTrackName(t){let i=vI.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);yI.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=dm,n})();Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B3=new Float32Array(1);var go=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Qa=class{constructor(){this.type="ShapePath",this.color=new ct,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new mo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let T=[];for(let S=0,M=p.length;S<M;S++){let I=p[S],D=new Fr;D.curves=I.curves,T.push(D)}return T}function i(p,T){let S=T.length,M=!1;for(let I=S-1,D=0;D<S;I=D++){let C=T[I],R=T[D],b=R.x-C.x,x=R.y-C.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(C=T[D],b=-b,R=T[I],x=-x),p.y<C.y||p.y>R.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{let A=x*(p.x-C.x)-b*(p.y-C.y);if(A===0)return!0;if(A<0)continue;M=!M}}else{if(p.y!==C.y)continue;if(R.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=R.x)return!0}}return M}let r=Ur.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c,l=[];if(s.length===1)return a=s[0],c=new Fr,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;let d=[],f=[],h=[],g=0,v;f[g]=void 0,h[g]=[];for(let p=0,T=s.length;p<T;p++)a=s[p],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Fr,p:v},f[g].s.curves=a.curves,u&&g++,h[g]=[]):h[g].push({h:a,p:v[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,T=0;for(let S=0,M=f.length;S<M;S++)d[S]=[];for(let S=0,M=f.length;S<M;S++){let I=h[S];for(let D=0;D<I.length;D++){let C=I[D],R=!0;for(let b=0;b<f.length;b++)i(C.p,f[b].p)&&(S!==b&&T++,R?(R=!1,d[b].push(C)):p=!0);R&&d[S].push(C)}}T>0&&p===!1&&(h=d)}let m;for(let p=0,T=f.length;p<T;p++){c=f[p].s,l.push(c),m=h[p];for(let S=0,M=m.length;S<M;S++)c.holes.push(m[S].h)}return l}},ec=class extends ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function km(n,e,t,i){let r=_I(i);switch(t){case Mm:return n*e;case Em:return n*e;case bm:return n*e*2;case wm:return n*e/r.components*r.byteLength;case nd:return n*e/r.components*r.byteLength;case Tm:return n*e*2/r.components*r.byteLength;case id:return n*e*2/r.components*r.byteLength;case Sm:return n*e*3/r.components*r.byteLength;case On:return n*e*4/r.components*r.byteLength;case rd:return n*e*4/r.components*r.byteLength;case ic:case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case od:case cd:return Math.max(n,16)*Math.max(e,8)/4;case sd:case ad:return Math.max(n,8)*Math.max(e,8)/2;case ld:case ud:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case md:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Md:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ac:case Td:case Cd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cm:case Dd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ad:case Id:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _I(n){switch(n){case ci:case ym:return{byteLength:1,components:1};case vo:case _m:case yo:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case ur:case Qu:case li:return{byteLength:4,components:1};case xm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zu);function GM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xI(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let v=d[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var MI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SI=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CI=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AI=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,II=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PI=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OI=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LI=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FI=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$I=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KI="gl_FragColor = linearToOutputTexel( gl_FragColor );",JI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_R=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ER=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$R=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ZR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,W1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,J1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:MI,alphahash_pars_fragment:SI,alphamap_fragment:EI,alphamap_pars_fragment:bI,alphatest_fragment:wI,alphatest_pars_fragment:TI,aomap_fragment:CI,aomap_pars_fragment:DI,batching_pars_vertex:AI,batching_vertex:II,begin_vertex:RI,beginnormal_vertex:NI,bsdfs:PI,iridescence_fragment:OI,bumpmap_pars_fragment:LI,clipping_planes_fragment:FI,clipping_planes_pars_fragment:UI,clipping_planes_pars_vertex:kI,clipping_planes_vertex:BI,color_fragment:VI,color_pars_fragment:HI,color_pars_vertex:zI,color_vertex:GI,common:jI,cube_uv_reflection_fragment:WI,defaultnormal_vertex:$I,displacementmap_pars_vertex:qI,displacementmap_vertex:XI,emissivemap_fragment:YI,emissivemap_pars_fragment:ZI,colorspace_fragment:KI,colorspace_pars_fragment:JI,envmap_fragment:QI,envmap_common_pars_fragment:eR,envmap_pars_fragment:tR,envmap_pars_vertex:nR,envmap_physical_pars_fragment:hR,envmap_vertex:iR,fog_vertex:rR,fog_pars_vertex:sR,fog_fragment:oR,fog_pars_fragment:aR,gradientmap_pars_fragment:cR,lightmap_pars_fragment:lR,lights_lambert_fragment:uR,lights_lambert_pars_fragment:dR,lights_pars_begin:fR,lights_toon_fragment:pR,lights_toon_pars_fragment:mR,lights_phong_fragment:gR,lights_phong_pars_fragment:vR,lights_physical_fragment:yR,lights_physical_pars_fragment:_R,lights_fragment_begin:xR,lights_fragment_maps:MR,lights_fragment_end:SR,logdepthbuf_fragment:ER,logdepthbuf_pars_fragment:bR,logdepthbuf_pars_vertex:wR,logdepthbuf_vertex:TR,map_fragment:CR,map_pars_fragment:DR,map_particle_fragment:AR,map_particle_pars_fragment:IR,metalnessmap_fragment:RR,metalnessmap_pars_fragment:NR,morphinstance_vertex:PR,morphcolor_vertex:OR,morphnormal_vertex:LR,morphtarget_pars_vertex:FR,morphtarget_vertex:UR,normal_fragment_begin:kR,normal_fragment_maps:BR,normal_pars_fragment:VR,normal_pars_vertex:HR,normal_vertex:zR,normalmap_pars_fragment:GR,clearcoat_normal_fragment_begin:jR,clearcoat_normal_fragment_maps:WR,clearcoat_pars_fragment:$R,iridescence_pars_fragment:qR,opaque_fragment:XR,packing:YR,premultiplied_alpha_fragment:ZR,project_vertex:KR,dithering_fragment:JR,dithering_pars_fragment:QR,roughnessmap_fragment:e1,roughnessmap_pars_fragment:t1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:i1,shadowmap_vertex:r1,shadowmask_pars_fragment:s1,skinbase_vertex:o1,skinning_pars_vertex:a1,skinning_vertex:c1,skinnormal_vertex:l1,specularmap_fragment:u1,specularmap_pars_fragment:d1,tonemapping_fragment:f1,tonemapping_pars_fragment:h1,transmission_fragment:p1,transmission_pars_fragment:m1,uv_pars_fragment:g1,uv_pars_vertex:v1,uv_vertex:y1,worldpos_vertex:_1,background_vert:x1,background_frag:M1,backgroundCube_vert:S1,backgroundCube_frag:E1,cube_vert:b1,cube_frag:w1,depth_vert:T1,depth_frag:C1,distanceRGBA_vert:D1,distanceRGBA_frag:A1,equirect_vert:I1,equirect_frag:R1,linedashed_vert:N1,linedashed_frag:P1,meshbasic_vert:O1,meshbasic_frag:L1,meshlambert_vert:F1,meshlambert_frag:U1,meshmatcap_vert:k1,meshmatcap_frag:B1,meshnormal_vert:V1,meshnormal_frag:H1,meshphong_vert:z1,meshphong_frag:G1,meshphysical_vert:j1,meshphysical_frag:W1,meshtoon_vert:$1,meshtoon_frag:q1,points_vert:X1,points_frag:Y1,shadow_vert:Z1,shadow_frag:K1,sprite_vert:J1,sprite_frag:Q1},ce={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ui={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ui.physical={uniforms:Kt([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Nd={r:0,b:0,g:0},Qr=new zr,eN=new At;function tN(n,e,t,i,r,s,o){let a=new ct(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function v(S){let M=!1,I=g(S);I===null?p(a,c):I&&I.isColor&&(p(I,1),M=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){let I=g(M);I&&(I.isCubeTexture||I.mapping===tc)?(u===void 0&&(u=new sn(new ho(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Jr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qr.copy(M.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eN.makeRotationFromEuler(Qr)),u.material.toneMapped=at.getTransfer(I.colorSpace)!==mt,(d!==I||f!==I.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=I,f=I.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new sn(new Wa(2,2),new Zn({name:"BackgroundMaterial",uniforms:Jr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=at.getTransfer(I.colorSpace)!==mt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||f!==I.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=I,f=I.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,M){S.getRGB(Nd,Om(n)),i.buffers.color.setClear(Nd.r,Nd.g,Nd.b,M,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:v,addToRenderList:m,dispose:T}}function nN(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,A,$,B,q){let X=!1,z=d(B,$,A);s!==z&&(s=z,l(s.object)),X=h(x,B,$,q),X&&g(x,B,$,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(x,A,$,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,A,$){let B=$.wireframe===!0,q=i[x.id];q===void 0&&(q={},i[x.id]=q);let X=q[A.id];X===void 0&&(X={},q[A.id]=X);let z=X[B];return z===void 0&&(z=f(c()),X[B]=z),z}function f(x){let A=[],$=[],B=[];for(let q=0;q<t;q++)A[q]=0,$[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:$,attributeDivisors:B,object:x,attributes:{},index:null}}function h(x,A,$,B){let q=s.attributes,X=A.attributes,z=0,K=$.getAttributes();for(let V in K)if(K[V].location>=0){let ge=q[V],Se=X[V];if(Se===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor)),ge===void 0||ge.attribute!==Se||Se&&ge.data!==Se.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function g(x,A,$,B){let q={},X=A.attributes,z=0,K=$.getAttributes();for(let V in K)if(K[V].location>=0){let ge=X[V];ge===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor));let Se={};Se.attribute=ge,ge&&ge.data&&(Se.data=ge.data),q[V]=Se,z++}s.attributes=q,s.attributesNum=z,s.index=B}function v(){let x=s.newAttributes;for(let A=0,$=x.length;A<$;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){let $=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;$[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),q[x]!==A&&(n.vertexAttribDivisor(x,A),q[x]=A)}function T(){let x=s.newAttributes,A=s.enabledAttributes;for(let $=0,B=A.length;$<B;$++)A[$]!==x[$]&&(n.disableVertexAttribArray($),A[$]=0)}function S(x,A,$,B,q,X,z){z===!0?n.vertexAttribIPointer(x,A,$,q,X):n.vertexAttribPointer(x,A,$,B,q,X)}function M(x,A,$,B){v();let q=B.attributes,X=$.getAttributes(),z=A.defaultAttributeValues;for(let K in X){let V=X[K];if(V.location>=0){let ae=q[K];if(ae===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){let ge=ae.normalized,Se=ae.itemSize,Ge=e.get(ae);if(Ge===void 0)continue;let ut=Ge.buffer,W=Ge.type,ie=Ge.bytesPerElement,be=W===n.INT||W===n.UNSIGNED_INT||ae.gpuType===Qu;if(ae.isInterleavedBufferAttribute){let oe=ae.data,De=oe.stride,Ue=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<V.locationSize;Pe++)p(V.location+Pe,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)m(V.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let Pe=0;Pe<V.locationSize;Pe++)S(V.location+Pe,Se/V.locationSize,W,ge,De*ie,(Ue+Se/V.locationSize*Pe)*ie,be)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,ae.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let oe=0;oe<V.locationSize;oe++)S(V.location+oe,Se/V.locationSize,W,ge,Se*ie,Se/V.locationSize*oe*ie,be)}}else if(z!==void 0){let ge=z[K];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(V.location,ge);break;case 3:n.vertexAttrib3fv(V.location,ge);break;case 4:n.vertexAttrib4fv(V.location,ge);break;default:n.vertexAttrib1fv(V.location,ge)}}}}T()}function I(){R();for(let x in i){let A=i[x];for(let $ in A){let B=A[$];for(let q in B)u(B[q].object),delete B[q];delete A[$]}delete i[x]}}function D(x){if(i[x.id]===void 0)return;let A=i[x.id];for(let $ in A){let B=A[$];for(let q in B)u(B[q].object),delete B[q];delete A[$]}delete i[x.id]}function C(x){for(let A in i){let $=i[A];if($[x.id]===void 0)continue;let B=$[x.id];for(let q in B)u(B[q].object),delete B[q];delete $[x.id]}}function R(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function iN(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rN(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==On&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let R=C===yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ci&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==li&&!R)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:I,maxSamples:D}}function sN(n){let e=this,t=null,i=0,r=!1,s=!1,o=new In,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let T=s?0:i,S=T*4,M=p.clippingState||null;c.value=M,M=u(g,f,S,h);for(let I=0;I!==S;++I)M[I]=t[I];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=h+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=h;S!==v;++S,M+=4)o.copy(d[S]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function oN(n){let e=new WeakMap;function t(o,a){return a===Zu?o.mapping=$r:a===Ku&&(o.mapping=qr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Zu||a===Ku)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Su(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Mo=4,xM=[.125,.215,.35,.446,.526,.582],ns=20,Bm=new Vu,MM=new ct,Vm=null,Hm=0,zm=0,Gm=!1,ts=(1+Math.sqrt(5))/2,xo=1/ts,SM=[new O(-ts,xo,0),new O(ts,xo,0),new O(-xo,0,ts),new O(xo,0,ts),new O(0,ts,-xo),new O(0,ts,xo),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Ld=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vm=this._renderer.getRenderTarget(),Hm=this._renderer.getActiveCubeFace(),zm=this._renderer.getActiveMipmapLevel(),Gm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vm,Hm,zm),this._renderer.xr.enabled=Gm,e.scissorTest=!1,Pd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vm=this._renderer.getRenderTarget(),Hm=this._renderer.getActiveCubeFace(),zm=this._renderer.getActiveMipmapLevel(),Gm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:yo,format:On,colorSpace:Hr,depthBuffer:!1},r=EM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=EM(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aN(s)),this._blurMaterial=cN(s,e,t)}return r}_compileMaterial(e){let t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,Bm)}_sceneToCubeUV(e,t,i,r){let a=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(MM),u.toneMapping=Ii,u.autoClear=!1;let h=new Aa({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new sn(new ho,h),v=!1,m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(MM),v=!0);for(let p=0;p<6;p++){let T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let S=this._cubeSize;Pd(r,T*S,p>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===$r||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bM());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Pd(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Bm)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=SM[(r-s-1)%SM.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new sn(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ns-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):ns;m>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let p=[],T=0;for(let C=0;C<ns;++C){let R=C/v,b=Math.exp(-R*R/2);p.push(b),C===0?T+=b:C<m&&(T+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let M=this._sizeLods[r],I=3*M*(r>S-Mo?r-S+Mo:0),D=4*(this._cubeSize-M);Pd(t,I,D,3*M,2*M),c.setRenderTarget(t),c.render(d,Bm)}};function aN(n){let e=[],t=[],i=[],r=n,s=n-Mo+1+xM.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Mo?c=xM[o-n+Mo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*h),S=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let D=0;D<h;D++){let C=D%3*2/3-1,R=D>2?0:-1,b=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];T.set(b,v*g*D),S.set(f,m*g*D);let x=[D,D,D,D,D,D];M.set(x,p*g*D)}let I=new si;I.setAttribute("position",new xn(T,v)),I.setAttribute("uv",new xn(S,m)),I.setAttribute("faceIndex",new xn(M,p)),e.push(I),r>Mo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function EM(n,e,t){let i=new ri(n,e,t);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pd(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cN(n,e,t){let i=new Float32Array(ns),r=new O(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function bM(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function wM(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Qm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lN(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Zu||c===Ku,u=c===$r||c===qr;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ld(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Ld(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function uN(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dN(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,v=0;if(h!==null){let T=h.array;v=h.version;for(let S=0,M=T.length;S<M;S+=3){let I=T[S+0],D=T[S+1],C=T[S+2];f.push(I,D,D,C,C,I)}}else if(g!==void 0){let T=g.array;v=g.version;for(let S=0,M=T.length/3-1;S<M;S+=3){let I=S+0,D=S+1,C=S+2;f.push(I,D,D,C,C,I)}}else return;let m=new(Pm(f)?Ra:Ia)(f,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function fN(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=h[T]*v[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hN(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pN(n,e,t){let i=new WeakMap,r=new Dt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let I=a.attributes.position.count*M,D=1;I>e.maxTextureSize&&(D=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let C=new Float32Array(I*D*4*d),R=new Ca(C,I,D,d);R.type=li,R.needsUpdate=!0;let b=M*4;for(let A=0;A<d;A++){let $=p[A],B=T[A],q=S[A],X=I*D*4*A;for(let z=0;z<$.count;z++){let K=z*b;g===!0&&(r.fromBufferAttribute($,z),C[X+K+0]=r.x,C[X+K+1]=r.y,C[X+K+2]=r.z,C[X+K+3]=0),v===!0&&(r.fromBufferAttribute(B,z),C[X+K+4]=r.x,C[X+K+5]=r.y,C[X+K+6]=r.z,C[X+K+7]=0),m===!0&&(r.fromBufferAttribute(q,z),C[X+K+8]=r.x,C[X+K+9]=r.y,C[X+K+10]=r.z,C[X+K+11]=q.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new se(I,D)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function mN(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var jM=new Ni,TM=new Fa(1,1),WM=new Ca,$M=new xu,qM=new Pa,CM=[],DM=[],AM=new Float32Array(16),IM=new Float32Array(9),RM=new Float32Array(4);function Eo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=CM[r];if(s===void 0&&(s=new Float32Array(r),CM[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ud(n,e){let t=DM[e];t===void 0&&(t=new Int32Array(e),DM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function yN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function _N(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function xN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,i))return;RM.set(i),n.uniformMatrix2fv(this.addr,!1,RM),kt(t,i)}}function MN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,i))return;IM.set(i),n.uniformMatrix3fv(this.addr,!1,IM),kt(t,i)}}function SN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,i))return;AM.set(i),n.uniformMatrix4fv(this.addr,!1,AM),kt(t,i)}}function EN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function wN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function TN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function CN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function DN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function AN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function IN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function RN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(TM.compareFunction=Am,s=TM):s=jM,t.setTexture2D(e||s,r)}function NN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$M,r)}function PN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qM,r)}function ON(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||WM,r)}function LN(n){switch(n){case 5126:return gN;case 35664:return vN;case 35665:return yN;case 35666:return _N;case 35674:return xN;case 35675:return MN;case 35676:return SN;case 5124:case 35670:return EN;case 35667:case 35671:return bN;case 35668:case 35672:return wN;case 35669:case 35673:return TN;case 5125:return CN;case 36294:return DN;case 36295:return AN;case 36296:return IN;case 35678:case 36198:case 36298:case 36306:case 35682:return RN;case 35679:case 36299:case 36307:return NN;case 35680:case 36300:case 36308:case 36293:return PN;case 36289:case 36303:case 36311:case 36292:return ON}}function FN(n,e){n.uniform1fv(this.addr,e)}function UN(n,e){let t=Eo(e,this.size,2);n.uniform2fv(this.addr,t)}function kN(n,e){let t=Eo(e,this.size,3);n.uniform3fv(this.addr,t)}function BN(n,e){let t=Eo(e,this.size,4);n.uniform4fv(this.addr,t)}function VN(n,e){let t=Eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HN(n,e){let t=Eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zN(n,e){let t=Eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GN(n,e){n.uniform1iv(this.addr,e)}function jN(n,e){n.uniform2iv(this.addr,e)}function WN(n,e){n.uniform3iv(this.addr,e)}function $N(n,e){n.uniform4iv(this.addr,e)}function qN(n,e){n.uniform1uiv(this.addr,e)}function XN(n,e){n.uniform2uiv(this.addr,e)}function YN(n,e){n.uniform3uiv(this.addr,e)}function ZN(n,e){n.uniform4uiv(this.addr,e)}function KN(n,e,t){let i=this.cache,r=e.length,s=Ud(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||jM,s[o])}function JN(n,e,t){let i=this.cache,r=e.length,s=Ud(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$M,s[o])}function QN(n,e,t){let i=this.cache,r=e.length,s=Ud(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||qM,s[o])}function eP(n,e,t){let i=this.cache,r=e.length,s=Ud(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||WM,s[o])}function tP(n){switch(n){case 5126:return FN;case 35664:return UN;case 35665:return kN;case 35666:return BN;case 35674:return VN;case 35675:return HN;case 35676:return zN;case 5124:case 35670:return GN;case 35667:case 35671:return jN;case 35668:case 35672:return WN;case 35669:case 35673:return $N;case 5125:return qN;case 36294:return XN;case 36295:return YN;case 36296:return ZN;case 35678:case 36198:case 36298:case 36306:case 35682:return KN;case 35679:case 36299:case 36307:return JN;case 35680:case 36300:case 36308:case 36293:return QN;case 36289:case 36303:case 36311:case 36292:return eP}}var Wm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=LN(t.type)}},$m=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tP(t.type)}},qm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},jm=/(\w+)(\])?(\[|\.)?/g;function NM(n,e){n.seq.push(e),n.map[e.id]=e}function nP(n,e,t){let i=n.name,r=i.length;for(jm.lastIndex=0;;){let s=jm.exec(i),o=jm.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){NM(t,l===void 0?new Wm(a,n,e):new $m(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new qm(a),NM(t,d)),t=d}}}var So=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nP(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function PM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iP=37297,rP=0;function sP(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var OM=new We;function oP(n){at._getMatrix(OM,at.workingColorSpace,n);let e=`mat3( ${OM.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case ba:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function LM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sP(n.getShaderSource(e),o)}else return r}function aP(n,e){let t=oP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cP(n,e){let t;switch(e){case $x:t="Linear";break;case qx:t="Reinhard";break;case Xx:t="Cineon";break;case Yx:t="ACESFilmic";break;case Kx:t="AgX";break;case Jx:t="Neutral";break;case Zx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Od=new O;function lP(){at.getLuminanceCoefficients(Od);let n=Od.x.toFixed(4),e=Od.y.toFixed(4),t=Od.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cc).join(`
`)}function dP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function cc(n){return n!==""}function FM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function UM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xm(n){return n.replace(hP,mP)}var pP=new Map;function mP(n,e){let t=Ze[e];if(t===void 0){let i=pP.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xm(t)}var gP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kM(n){return n.replace(gP,vP)}function vP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function BM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function _P(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $r:case qr:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function MP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vm:e="ENVMAP_BLENDING_MULTIPLY";break;case jx:e="ENVMAP_BLENDING_MIX";break;case Wx:e="ENVMAP_BLENDING_ADD";break}return e}function SP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function EP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=yP(t),l=_P(t),u=xP(t),d=MP(t),f=SP(t),h=uP(t),g=dP(s),v=r.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cc).join(`
`),p.length>0&&(p+=`
`)):(m=[BM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cc).join(`
`),p=[BM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ii?cP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,aP("linearToOutputTexel",t.outputColorSpace),lP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cc).join(`
`)),o=Xm(o),o=FM(o,t),o=UM(o,t),a=Xm(a),a=FM(a,t),a=UM(a,t),o=kM(o),a=kM(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Im?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=T+m+o,M=T+p+a,I=PM(r,r.VERTEX_SHADER,S),D=PM(r,r.FRAGMENT_SHADER,M);r.attachShader(v,I),r.attachShader(v,D),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(A){if(n.debug.checkShaderErrors){let $=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(I).trim(),q=r.getShaderInfoLog(D).trim(),X=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,I,D);else{let K=LM(r,I,"vertex"),V=LM(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+$+`
`+K+`
`+V)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(B===""||q==="")&&(z=!1);z&&(A.diagnostics={runnable:X,programLog:$,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(I),r.deleteShader(D),R=new So(r,v),b=fP(r,v)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,iP)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rP++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=D,this}var bP=0,Ym=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Zm(e),t.set(e,i)),i}},Zm=class{constructor(e){this.id=bP++,this.code=e,this.usedTimes=0}};function wP(n,e,t,i,r,s,o){let a=new Da,c=new Ym,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,A,$,B){let q=$.fog,X=B.geometry,z=b.isMeshStandardMaterial?$.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),V=K&&K.mapping===tc?K.image.height:null,ae=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Se=ge!==void 0?ge.length:0,Ge=0;X.morphAttributes.position!==void 0&&(Ge=1),X.morphAttributes.normal!==void 0&&(Ge=2),X.morphAttributes.color!==void 0&&(Ge=3);let ut,W,ie,be;if(ae){let pt=ui[ae];ut=pt.vertexShader,W=pt.fragmentShader}else ut=b.vertexShader,W=b.fragmentShader,c.update(b),ie=c.getVertexShaderID(b),be=c.getFragmentShaderID(b);let oe=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),Ue=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,st=!!b.map,Z=!!b.matcap,ne=!!K,w=!!b.aoMap,Ce=!!b.lightMap,Q=!!b.bumpMap,ye=!!b.normalMap,re=!!b.displacementMap,Ne=!!b.emissiveMap,pe=!!b.metalnessMap,E=!!b.roughnessMap,y=b.anisotropy>0,F=b.clearcoat>0,G=b.dispersion>0,J=b.iridescence>0,j=b.sheen>0,Te=b.transmission>0,le=y&&!!b.anisotropyMap,ve=F&&!!b.clearcoatMap,Je=F&&!!b.clearcoatNormalMap,te=F&&!!b.clearcoatRoughnessMap,xe=J&&!!b.iridescenceMap,Re=J&&!!b.iridescenceThicknessMap,Le=j&&!!b.sheenColorMap,Me=j&&!!b.sheenRoughnessMap,nt=!!b.specularMap,Xe=!!b.specularColorMap,Mt=!!b.specularIntensityMap,N=Te&&!!b.transmissionMap,ue=Te&&!!b.thicknessMap,H=!!b.gradientMap,Y=!!b.alphaMap,me=b.alphaTest>0,he=!!b.alphaHash,$e=!!b.extensions,wt=Ii;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(wt=n.toneMapping);let $t={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:ut,fragmentShader:W,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Hr,alphaToCoverage:!!b.alphaToCoverage,map:st,matcap:Z,envMap:ne,envMapMode:ne&&K.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:Ce,bumpMap:Q,normalMap:ye,displacementMap:f&&re,emissiveMap:Ne,normalMapObjectSpace:ye&&b.normalMapType===nM,normalMapTangentSpace:ye&&b.normalMapType===Dm,metalnessMap:pe,roughnessMap:E,anisotropy:y,anisotropyMap:le,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:Je,clearcoatRoughnessMap:te,dispersion:G,iridescence:J,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:j,sheenColorMap:Le,sheenRoughnessMap:Me,specularMap:nt,specularColorMap:Xe,specularIntensityMap:Mt,transmission:Te,transmissionMap:N,thicknessMap:ue,gradientMap:H,opaque:b.transparent===!1&&b.blending===kr&&b.alphaToCoverage===!1,alphaMap:Y,alphaTest:me,alphaHash:he,combine:b.combine,mapUv:st&&v(b.map.channel),aoMapUv:w&&v(b.aoMap.channel),lightMapUv:Ce&&v(b.lightMap.channel),bumpMapUv:Q&&v(b.bumpMap.channel),normalMapUv:ye&&v(b.normalMap.channel),displacementMapUv:re&&v(b.displacementMap.channel),emissiveMapUv:Ne&&v(b.emissiveMap.channel),metalnessMapUv:pe&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:le&&v(b.anisotropyMap.channel),clearcoatMapUv:ve&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(b.sheenRoughnessMap.channel),specularMapUv:nt&&v(b.specularMap.channel),specularColorMapUv:Xe&&v(b.specularColorMap.channel),specularIntensityMapUv:Mt&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:ue&&v(b.thicknessMap.channel),alphaMapUv:Y&&v(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ye||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(st||Y),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:De,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:st&&b.map.isVideoTexture===!0&&at.getTransfer(b.map.colorSpace)===mt,decodeVideoTextureEmissive:Ne&&b.emissiveMap.isVideoTexture===!0&&at.getTransfer(b.emissiveMap.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ai,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$e&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&b.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function p(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)x.push(A),x.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(T(x,b),S(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function T(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){let x=g[b.type],A;if(x){let $=ui[x];A=mM.clone($.uniforms)}else A=b.uniforms;return A}function I(b,x){let A;for(let $=0,B=u.length;$<B;$++){let q=u[$];if(q.cacheKey===x){A=q,++A.usedTimes;break}}return A===void 0&&(A=new EP(n,x,b,s),u.push(A)),A}function D(b){if(--b.usedTimes===0){let x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function C(b){c.remove(b)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:I,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:R}}function TP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function CP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function VM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function HM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,f,h,g,v,m){let p=o(d,f,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,v,m){let p=o(d,f,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||CP),i.length>1&&i.sort(f||VM),r.length>1&&r.sort(f||VM)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function DP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new HM,n.set(i,[o])):r>=s.length?(o=new HM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function AP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ct};break;case"SpotLight":t={position:new O,direction:new O,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function IP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var RP=0;function NP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PP(n){let e=new AP,t=IP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,s=new At,o=new At;function a(l){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,T=0,S=0,M=0,I=0,D=0,C=0;l.sort(NP);for(let b=0,x=l.length;b<x;b++){let A=l[b],$=A.color,B=A.intensity,q=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=$.r*B,d+=$.g*B,f+=$.b*B;else if(A.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(A.sh.coefficients[z],B);C++}else if(A.isDirectionalLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,V=t.get(A);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=X,i.directionalShadowMatrix[h]=A.shadow.matrix,T++}i.directional[h]=z,h++}else if(A.isSpotLight){let z=e.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy($).multiplyScalar(B),z.distance=q,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,i.spot[v]=z;let K=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,K.updateMatrices(A),A.castShadow&&D++),i.spotLightMatrix[v]=K.matrix,A.castShadow){let V=t.get(A);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=X,M++}v++}else if(A.isRectAreaLight){let z=e.get(A);z.color.copy($).multiplyScalar(B),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=z,m++}else if(A.isPointLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){let K=A.shadow,V=t.get(A);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=A.shadow.matrix,S++}i.point[g]=z,g++}else if(A.isHemisphereLight){let z=e.get(A);z.skyColor.copy(A.color).multiplyScalar(B),z.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[p]=z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==T||R.numPointShadows!==S||R.numSpotShadows!==M||R.numSpotMaps!==I||R.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+I-D,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,R.directionalLength=h,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=T,R.numPointShadows=S,R.numSpotShadows=M,R.numSpotMaps=I,R.numLightProbes=C,i.version=RP++)}function c(l,u){let d=0,f=0,h=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let S=l[p];if(S.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(S.isSpotLight){let M=i.spot[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let M=i.hemi[v];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function zM(n){let e=new PP(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function OP(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new zM(n),e.set(r,[a])):s>=o.length?(a=new zM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var LP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UP(n,e,t){let i=new La,r=new se,s=new se,o=new Dt,a=new Au({depthPacking:tM}),c=new Iu,l={},u=t.maxTextureSize,d={[Di]:on,[on]:Di,[ai]:ai},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:LP,fragmentShader:FP}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new si;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new sn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hm;let p=this.type;this.render=function(D,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let b=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Ai),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let B=p!==oi&&this.type===oi,q=p===oi&&this.type!==oi;for(let X=0,z=D.length;X<z;X++){let K=D[X],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ae=V.getFrameExtents();if(r.multiply(ae),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,V.mapSize.y=s.y)),V.map===null||B===!0||q===!0){let Se=this.type!==oi?{minFilter:Rn,magFilter:Rn}:{};V.map!==null&&V.map.dispose(),V.map=new ri(r.x,r.y,Se),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let ge=V.getViewportCount();for(let Se=0;Se<ge;Se++){let Ge=V.getViewport(Se);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),$.viewport(o),V.updateMatrices(K,Se),i=V.getFrustum(),M(C,R,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===oi&&T(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,A)};function T(D,C){let R=e.update(v);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ri(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(C,null,R,f,v,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(C,null,R,h,v,null)}function S(D,C,R,b){let x=null,A=R.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(A!==void 0)x=A;else if(x=R.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let $=x.uuid,B=C.uuid,q=l[$];q===void 0&&(q={},l[$]=q);let X=q[B];X===void 0&&(X=x.clone(),q[B]=X,C.addEventListener("dispose",I)),x=X}if(x.visible=C.visible,x.wireframe=C.wireframe,b===oi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let $=n.properties.get(x);$.light=R}return x}function M(D,C,R,b,x){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===oi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,D.matrixWorld);let B=e.update(D),q=D.material;if(Array.isArray(q)){let X=B.groups;for(let z=0,K=X.length;z<K;z++){let V=X[z],ae=q[V.materialIndex];if(ae&&ae.visible){let ge=S(D,ae,b,x);D.onBeforeShadow(n,D,C,R,B,ge,V),n.renderBufferDirect(R,null,B,ge,D,V),D.onAfterShadow(n,D,C,R,B,ge,V)}}}else if(q.visible){let X=S(D,q,b,x);D.onBeforeShadow(n,D,C,R,B,X,null),n.renderBufferDirect(R,null,B,X,D,null),D.onAfterShadow(n,D,C,R,B,X,null)}}let $=D.children;for(let B=0,q=$.length;B<q;B++)M($[B],C,R,b,x)}function I(D){D.target.removeEventListener("dispose",I);for(let R in l){let b=l[R],x=D.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}var kP={[Gu]:ju,[Wu]:Xu,[$u]:Yu,[Br]:qu,[ju]:Gu,[Xu]:Wu,[Yu]:$u,[qu]:Br};function BP(n,e){function t(){let N=!1,ue=new Dt,H=null,Y=new Dt(0,0,0,0);return{setMask:function(me){H!==me&&!N&&(n.colorMask(me,me,me,me),H=me)},setLocked:function(me){N=me},setClear:function(me,he,$e,wt,$t){$t===!0&&(me*=wt,he*=wt,$e*=wt),ue.set(me,he,$e,wt),Y.equals(ue)===!1&&(n.clearColor(me,he,$e,wt),Y.copy(ue))},reset:function(){N=!1,H=null,Y.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,H=null,Y=null,me=null;return{setReversed:function(he){if(ue!==he){let $e=e.get("EXT_clip_control");ue?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);let wt=me;me=null,this.setClear(wt)}ue=he},getReversed:function(){return ue},setTest:function(he){he?oe(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(he){H!==he&&!N&&(n.depthMask(he),H=he)},setFunc:function(he){if(ue&&(he=kP[he]),Y!==he){switch(he){case Gu:n.depthFunc(n.NEVER);break;case ju:n.depthFunc(n.ALWAYS);break;case Wu:n.depthFunc(n.LESS);break;case Br:n.depthFunc(n.LEQUAL);break;case $u:n.depthFunc(n.EQUAL);break;case qu:n.depthFunc(n.GEQUAL);break;case Xu:n.depthFunc(n.GREATER);break;case Yu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=he}},setLocked:function(he){N=he},setClear:function(he){me!==he&&(ue&&(he=1-he),n.clearDepth(he),me=he)},reset:function(){N=!1,H=null,Y=null,me=null,ue=!1}}}function r(){let N=!1,ue=null,H=null,Y=null,me=null,he=null,$e=null,wt=null,$t=null;return{setTest:function(pt){N||(pt?oe(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(pt){ue!==pt&&!N&&(n.stencilMask(pt),ue=pt)},setFunc:function(pt,Ln,di){(H!==pt||Y!==Ln||me!==di)&&(n.stencilFunc(pt,Ln,di),H=pt,Y=Ln,me=di)},setOp:function(pt,Ln,di){(he!==pt||$e!==Ln||wt!==di)&&(n.stencilOp(pt,Ln,di),he=pt,$e=Ln,wt=di)},setLocked:function(pt){N=pt},setClear:function(pt){$t!==pt&&(n.clearStencil(pt),$t=pt)},reset:function(){N=!1,ue=null,H=null,Y=null,me=null,he=null,$e=null,wt=null,$t=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,T=null,S=null,M=null,I=null,D=null,C=new ct(0,0,0),R=0,b=!1,x=null,A=null,$=null,B=null,q=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=K>=2);let ae=null,ge={},Se=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),ut=new Dt().fromArray(Se),W=new Dt().fromArray(Ge);function ie(N,ue,H,Y){let me=new Uint8Array(4),he=n.createTexture();n.bindTexture(N,he),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<H;$e++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ue+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return he}let be={};be[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Br),Q(!1),ye(fm),oe(n.CULL_FACE),w(Ai);function oe(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function De(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ue(N,ue){return d[N]!==ue?(n.bindFramebuffer(N,ue),d[N]=ue,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Pe(N,ue){let H=h,Y=!1;if(N){H=f.get(ue),H===void 0&&(H=[],f.set(ue,H));let me=N.textures;if(H.length!==me.length||H[0]!==n.COLOR_ATTACHMENT0){for(let he=0,$e=me.length;he<$e;he++)H[he]=n.COLOR_ATTACHMENT0+he;H.length=me.length,Y=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,Y=!0);Y&&n.drawBuffers(H)}function st(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let Z={[nr]:n.FUNC_ADD,[Cx]:n.FUNC_SUBTRACT,[Dx]:n.FUNC_REVERSE_SUBTRACT};Z[Ax]=n.MIN,Z[Ix]=n.MAX;let ne={[Rx]:n.ZERO,[Nx]:n.ONE,[Px]:n.SRC_COLOR,[hu]:n.SRC_ALPHA,[Bx]:n.SRC_ALPHA_SATURATE,[Ux]:n.DST_COLOR,[Lx]:n.DST_ALPHA,[Ox]:n.ONE_MINUS_SRC_COLOR,[pu]:n.ONE_MINUS_SRC_ALPHA,[kx]:n.ONE_MINUS_DST_COLOR,[Fx]:n.ONE_MINUS_DST_ALPHA,[Vx]:n.CONSTANT_COLOR,[Hx]:n.ONE_MINUS_CONSTANT_COLOR,[zx]:n.CONSTANT_ALPHA,[Gx]:n.ONE_MINUS_CONSTANT_ALPHA};function w(N,ue,H,Y,me,he,$e,wt,$t,pt){if(N===Ai){v===!0&&(De(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),N!==Tx){if(N!==m||pt!==b){if((p!==nr||M!==nr)&&(n.blendEquation(n.FUNC_ADD),p=nr,M=nr),pt)switch(N){case kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pm:n.blendFunc(n.ONE,n.ONE);break;case mm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,S=null,I=null,D=null,C.set(0,0,0),R=0,m=N,b=pt}return}me=me||ue,he=he||H,$e=$e||Y,(ue!==p||me!==M)&&(n.blendEquationSeparate(Z[ue],Z[me]),p=ue,M=me),(H!==T||Y!==S||he!==I||$e!==D)&&(n.blendFuncSeparate(ne[H],ne[Y],ne[he],ne[$e]),T=H,S=Y,I=he,D=$e),(wt.equals(C)===!1||$t!==R)&&(n.blendColor(wt.r,wt.g,wt.b,$t),C.copy(wt),R=$t),m=N,b=!1}function Ce(N,ue){N.side===ai?De(n.CULL_FACE):oe(n.CULL_FACE);let H=N.side===on;ue&&(H=!H),Q(H),N.blending===kr&&N.transparent===!1?w(Ai):w(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let Y=N.stencilWrite;a.setTest(Y),Y&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){x!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),x=N)}function ye(N){N!==Ex?(oe(n.CULL_FACE),N!==A&&(N===fm?n.cullFace(n.BACK):N===bx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),A=N}function re(N){N!==$&&(z&&n.lineWidth(N),$=N)}function Ne(N,ue,H){N?(oe(n.POLYGON_OFFSET_FILL),(B!==ue||q!==H)&&(n.polygonOffset(ue,H),B=ue,q=H)):De(n.POLYGON_OFFSET_FILL)}function pe(N){N?oe(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function E(N){N===void 0&&(N=n.TEXTURE0+X-1),ae!==N&&(n.activeTexture(N),ae=N)}function y(N,ue,H){H===void 0&&(ae===null?H=n.TEXTURE0+X-1:H=ae);let Y=ge[H];Y===void 0&&(Y={type:void 0,texture:void 0},ge[H]=Y),(Y.type!==N||Y.texture!==ue)&&(ae!==H&&(n.activeTexture(H),ae=H),n.bindTexture(N,ue||be[N]),Y.type=N,Y.texture=ue)}function F(){let N=ge[ae];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(N){ut.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ut.copy(N))}function Me(N){W.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),W.copy(N))}function nt(N,ue){let H=l.get(ue);H===void 0&&(H=new WeakMap,l.set(ue,H));let Y=H.get(N);Y===void 0&&(Y=n.getUniformBlockIndex(ue,N.name),H.set(N,Y))}function Xe(N,ue){let Y=l.get(ue).get(N);c.get(ue)!==Y&&(n.uniformBlockBinding(ue,Y,N.__bindingPointIndex),c.set(ue,Y))}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,ge={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,T=null,S=null,M=null,I=null,D=null,C=new ct(0,0,0),R=0,b=!1,x=null,A=null,$=null,B=null,q=null,ut.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:De,bindFramebuffer:Ue,drawBuffers:Pe,useProgram:st,setBlending:w,setMaterial:Ce,setFlipSided:Q,setCullFace:ye,setLineWidth:re,setPolygonOffset:Ne,setScissorTest:pe,activeTexture:E,bindTexture:y,unbindTexture:F,compressedTexImage2D:G,compressedTexImage3D:J,texImage2D:xe,texImage3D:Re,updateUBOMapping:nt,uniformBlockBinding:Xe,texStorage2D:Je,texStorage3D:te,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:le,compressedTexSubImage3D:ve,scissor:Le,viewport:Me,reset:Mt}}function VP(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return h?new OffscreenCanvas(E,y):lo("canvas")}function v(E,y,F){let G=1,J=pe(E);if((J.width>F||J.height>F)&&(G=F/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let j=Math.floor(G*J.width),Te=Math.floor(G*J.height);d===void 0&&(d=g(j,Te));let le=y?g(j,Te):d;return le.width=j,le.height=Te,le.getContext("2d").drawImage(E,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Te+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,y,F,G,J=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=y;if(y===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),y===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),y===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){let Te=J?ba:at.getTransfer(G);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=Te===mt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(E,y){let F;return E?y===null||y===ur||y===Xr?F=n.DEPTH24_STENCIL8:y===li?F=n.DEPTH32F_STENCIL8:y===vo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ur||y===Xr?F=n.DEPTH_COMPONENT24:y===li?F=n.DEPTH_COMPONENT32F:y===vo&&(F=n.DEPTH_COMPONENT16),F}function I(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Rn&&E.minFilter!==Yn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function D(E){let y=E.target;y.removeEventListener("dispose",D),R(y),y.isVideoTexture&&u.delete(y)}function C(E){let y=E.target;y.removeEventListener("dispose",C),x(y)}function R(E){let y=i.get(E);if(y.__webglInit===void 0)return;let F=E.source,G=f.get(F);if(G){let J=G[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(E),Object.keys(G).length===0&&f.delete(F)}i.remove(E)}function b(E){let y=i.get(E);n.deleteTexture(y.__webglTexture);let F=E.source,G=f.get(F);delete G[y.__cacheKey],o.memory.textures--}function x(E){let y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let J=0;J<y.__webglFramebuffer[G].length;J++)n.deleteFramebuffer(y.__webglFramebuffer[G][J]);else n.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)n.deleteFramebuffer(y.__webglFramebuffer[G]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let F=E.textures;for(let G=0,J=F.length;G<J;G++){let j=i.get(F[G]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(F[G])}i.remove(E)}let A=0;function $(){A=0}function B(){let E=A;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),A+=1,E}function q(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function X(E,y){let F=i.get(E);if(E.isVideoTexture&&re(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,E,y);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function z(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){W(F,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function K(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){W(F,E,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function V(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){ie(F,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}let ae={[mu]:n.REPEAT,[tr]:n.CLAMP_TO_EDGE,[gu]:n.MIRRORED_REPEAT},ge={[Rn]:n.NEAREST,[Qx]:n.NEAREST_MIPMAP_NEAREST,[nc]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Ju]:n.LINEAR_MIPMAP_NEAREST,[lr]:n.LINEAR_MIPMAP_LINEAR},Se={[iM]:n.NEVER,[lM]:n.ALWAYS,[rM]:n.LESS,[Am]:n.LEQUAL,[sM]:n.EQUAL,[cM]:n.GEQUAL,[oM]:n.GREATER,[aM]:n.NOTEQUAL};function Ge(E,y){if(y.type===li&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Yn||y.magFilter===Ju||y.magFilter===nc||y.magFilter===lr||y.minFilter===Yn||y.minFilter===Ju||y.minFilter===nc||y.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ae[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ge[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rn||y.minFilter!==nc&&y.minFilter!==lr||y.type===li&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ut(E,y){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",D));let G=y.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let j=q(y);if(j!==E.__cacheKey){J[j]===void 0&&(J[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[j].usedTimes++;let Te=J[E.__cacheKey];Te!==void 0&&(J[E.__cacheKey].usedTimes--,Te.usedTimes===0&&b(y)),E.__cacheKey=j,E.__webglTexture=J[j].texture}return F}function W(E,y,F){let G=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=n.TEXTURE_3D);let J=ut(E,y),j=y.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+F);let Te=i.get(j);if(j.version!==Te.__version||J===!0){t.activeTexture(n.TEXTURE0+F);let le=at.getPrimaries(at.workingColorSpace),ve=y.colorSpace===Ri?null:at.getPrimaries(y.colorSpace),Je=y.colorSpace===Ri||le===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let te=v(y.image,!1,r.maxTextureSize);te=Ne(y,te);let xe=s.convert(y.format,y.colorSpace),Re=s.convert(y.type),Le=S(y.internalFormat,xe,Re,y.colorSpace,y.isVideoTexture);Ge(G,y);let Me,nt=y.mipmaps,Xe=y.isVideoTexture!==!0,Mt=Te.__version===void 0||J===!0,N=j.dataReady,ue=I(y,te);if(y.isDepthTexture)Le=M(y.format===Vr,y.type),Mt&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Le,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Le,te.width,te.height,0,xe,Re,null));else if(y.isDataTexture)if(nt.length>0){Xe&&Mt&&t.texStorage2D(n.TEXTURE_2D,ue,Le,nt[0].width,nt[0].height);for(let H=0,Y=nt.length;H<Y;H++)Me=nt[H],Xe?N&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,Me.width,Me.height,xe,Re,Me.data):t.texImage2D(n.TEXTURE_2D,H,Le,Me.width,Me.height,0,xe,Re,Me.data);y.generateMipmaps=!1}else Xe?(Mt&&t.texStorage2D(n.TEXTURE_2D,ue,Le,te.width,te.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,xe,Re,te.data)):t.texImage2D(n.TEXTURE_2D,0,Le,te.width,te.height,0,xe,Re,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xe&&Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Le,nt[0].width,nt[0].height,te.depth);for(let H=0,Y=nt.length;H<Y;H++)if(Me=nt[H],y.format!==On)if(xe!==null)if(Xe){if(N)if(y.layerUpdates.size>0){let me=km(Me.width,Me.height,y.format,y.type);for(let he of y.layerUpdates){let $e=Me.data.subarray(he*me/Me.data.BYTES_PER_ELEMENT,(he+1)*me/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,he,Me.width,Me.height,1,xe,$e)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,Me.width,Me.height,te.depth,xe,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Le,Me.width,Me.height,te.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,Me.width,Me.height,te.depth,xe,Re,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,Le,Me.width,Me.height,te.depth,0,xe,Re,Me.data)}else{Xe&&Mt&&t.texStorage2D(n.TEXTURE_2D,ue,Le,nt[0].width,nt[0].height);for(let H=0,Y=nt.length;H<Y;H++)Me=nt[H],y.format!==On?xe!==null?Xe?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,H,Le,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?N&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,Me.width,Me.height,xe,Re,Me.data):t.texImage2D(n.TEXTURE_2D,H,Le,Me.width,Me.height,0,xe,Re,Me.data)}else if(y.isDataArrayTexture)if(Xe){if(Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Le,te.width,te.height,te.depth),N)if(y.layerUpdates.size>0){let H=km(te.width,te.height,y.format,y.type);for(let Y of y.layerUpdates){let me=te.data.subarray(Y*H/te.data.BYTES_PER_ELEMENT,(Y+1)*H/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,xe,Re,me)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,xe,Re,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,xe,Re,te.data);else if(y.isData3DTexture)Xe?(Mt&&t.texStorage3D(n.TEXTURE_3D,ue,Le,te.width,te.height,te.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,xe,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,xe,Re,te.data);else if(y.isFramebufferTexture){if(Mt)if(Xe)t.texStorage2D(n.TEXTURE_2D,ue,Le,te.width,te.height);else{let H=te.width,Y=te.height;for(let me=0;me<ue;me++)t.texImage2D(n.TEXTURE_2D,me,Le,H,Y,0,xe,Re,null),H>>=1,Y>>=1}}else if(nt.length>0){if(Xe&&Mt){let H=pe(nt[0]);t.texStorage2D(n.TEXTURE_2D,ue,Le,H.width,H.height)}for(let H=0,Y=nt.length;H<Y;H++)Me=nt[H],Xe?N&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,xe,Re,Me):t.texImage2D(n.TEXTURE_2D,H,Le,xe,Re,Me);y.generateMipmaps=!1}else if(Xe){if(Mt){let H=pe(te);t.texStorage2D(n.TEXTURE_2D,ue,Le,H.width,H.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,Le,xe,Re,te);m(y)&&p(G),Te.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ie(E,y,F){if(y.image.length!==6)return;let G=ut(E,y),J=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);let j=i.get(J);if(J.version!==j.__version||G===!0){t.activeTexture(n.TEXTURE0+F);let Te=at.getPrimaries(at.workingColorSpace),le=y.colorSpace===Ri?null:at.getPrimaries(y.colorSpace),ve=y.colorSpace===Ri||Te===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Je=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let Y=0;Y<6;Y++)!Je&&!te?xe[Y]=v(y.image[Y],!0,r.maxCubemapSize):xe[Y]=te?y.image[Y].image:y.image[Y],xe[Y]=Ne(y,xe[Y]);let Re=xe[0],Le=s.convert(y.format,y.colorSpace),Me=s.convert(y.type),nt=S(y.internalFormat,Le,Me,y.colorSpace),Xe=y.isVideoTexture!==!0,Mt=j.__version===void 0||G===!0,N=J.dataReady,ue=I(y,Re);Ge(n.TEXTURE_CUBE_MAP,y);let H;if(Je){Xe&&Mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,nt,Re.width,Re.height);for(let Y=0;Y<6;Y++){H=xe[Y].mipmaps;for(let me=0;me<H.length;me++){let he=H[me];y.format!==On?Le!==null?Xe?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,he.width,he.height,Le,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,nt,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,he.width,he.height,Le,Me,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,nt,he.width,he.height,0,Le,Me,he.data)}}}else{if(H=y.mipmaps,Xe&&Mt){H.length>0&&ue++;let Y=pe(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,nt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){Xe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xe[Y].width,xe[Y].height,Le,Me,xe[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,nt,xe[Y].width,xe[Y].height,0,Le,Me,xe[Y].data);for(let me=0;me<H.length;me++){let $e=H[me].image[Y].image;Xe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,$e.width,$e.height,Le,Me,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,nt,$e.width,$e.height,0,Le,Me,$e.data)}}else{Xe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Le,Me,xe[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,nt,Le,Me,xe[Y]);for(let me=0;me<H.length;me++){let he=H[me];Xe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,Le,Me,he.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,nt,Le,Me,he.image[Y])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),j.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function be(E,y,F,G,J,j){let Te=s.convert(F.format,F.colorSpace),le=s.convert(F.type),ve=S(F.internalFormat,Te,le,F.colorSpace),Je=i.get(y),te=i.get(F);if(te.__renderTarget=y,!Je.__hasExternalTextures){let xe=Math.max(1,y.width>>j),Re=Math.max(1,y.height>>j);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,j,ve,xe,Re,y.depth,0,Te,le,null):t.texImage2D(J,j,ve,xe,Re,0,Te,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,J,te.__webglTexture,0,Q(y)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,J,te.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(E,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer){let G=y.depthTexture,J=G&&G.isDepthTexture?G.type:null,j=M(y.stencilBuffer,J),Te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Q(y);ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,j,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,E)}else{let G=y.textures;for(let J=0;J<G.length;J++){let j=G[J],Te=s.convert(j.format,j.colorSpace),le=s.convert(j.type),ve=S(j.internalFormat,Te,le,j.colorSpace),Je=Q(y);F&&ye(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,ve,y.width,y.height):ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je,ve,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ve,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=i.get(y.depthTexture);G.__renderTarget=y,(!G.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let J=G.__webglTexture,j=Q(y);if(y.depthTexture.format===Lr)ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(y.depthTexture.format===Vr)ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ue(E){let y=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=G}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");De(y.__webglFramebuffer,E)}else if(F){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=n.createRenderbuffer(),oe(y.__webglDepthbuffer[G],E,!1);else{let J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),oe(y.__webglDepthbuffer,E,!1);else{let G=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(E,y,F){let G=i.get(E);y!==void 0&&be(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ue(E)}function st(E){let y=E.texture,F=i.get(E),G=i.get(y);E.addEventListener("dispose",C);let J=E.textures,j=E.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=y.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let ve=0;ve<y.mipmaps.length;ve++)F.__webglFramebuffer[le][ve]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Te)for(let le=0,ve=J.length;le<ve;le++){let Je=i.get(J[le]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&ye(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){let ve=J[le];F.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[le]);let Je=s.convert(ve.format,ve.colorSpace),te=s.convert(ve.type),xe=S(ve.internalFormat,Je,te,ve.colorSpace,E.isXRRenderTarget===!0),Re=Q(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,xe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,F.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)be(F.__webglFramebuffer[le][ve],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve);else be(F.__webglFramebuffer[le],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let le=0,ve=J.length;le<ve;le++){let Je=J[le],te=i.get(Je);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),Ge(n.TEXTURE_2D,Je),be(F.__webglFramebuffer,E,Je,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(Je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,G.__webglTexture),Ge(le,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)be(F.__webglFramebuffer[ve],E,y,n.COLOR_ATTACHMENT0,le,ve);else be(F.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,le,0);m(y)&&p(le),t.unbindTexture()}E.depthBuffer&&Ue(E)}function Z(E){let y=E.textures;for(let F=0,G=y.length;F<G;F++){let J=y[F];if(m(J)){let j=T(E),Te=i.get(J).__webglTexture;t.bindTexture(j,Te),p(j),t.unbindTexture()}}}let ne=[],w=[];function Ce(E){if(E.samples>0){if(ye(E)===!1){let y=E.textures,F=E.width,G=E.height,J=n.COLOR_BUFFER_BIT,j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(E),le=y.length>1;if(le)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);let Je=i.get(y[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,J,n.NEAREST),c===!0&&(ne.length=0,w.length=0,ne.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ne.push(j),w.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);let Je=i.get(y[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Q(E){return Math.min(r.maxSamples,E.samples)}function ye(E){let y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function re(E){let y=o.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function Ne(E,y){let F=E.colorSpace,G=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Hr&&F!==Ri&&(at.getTransfer(F)===mt?(G!==On||J!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=$,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Pe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ye}function HP(n,e){function t(i,r=Ri){let s,o=at.getTransfer(r);if(i===ci)return n.UNSIGNED_BYTE;if(i===ed)return n.UNSIGNED_SHORT_4_4_4_4;if(i===td)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ym)return n.BYTE;if(i===_m)return n.SHORT;if(i===vo)return n.UNSIGNED_SHORT;if(i===Qu)return n.INT;if(i===ur)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===yo)return n.HALF_FLOAT;if(i===Mm)return n.ALPHA;if(i===Sm)return n.RGB;if(i===On)return n.RGBA;if(i===Em)return n.LUMINANCE;if(i===bm)return n.LUMINANCE_ALPHA;if(i===Lr)return n.DEPTH_COMPONENT;if(i===Vr)return n.DEPTH_STENCIL;if(i===wm)return n.RED;if(i===nd)return n.RED_INTEGER;if(i===Tm)return n.RG;if(i===id)return n.RG_INTEGER;if(i===rd)return n.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===oc)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sd||i===od||i===ad||i===cd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===od)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ad)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ld||i===ud||i===dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ld||i===ud)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fd||i===hd||i===pd||i===md||i===gd||i===vd||i===yd||i===_d||i===xd||i===Md||i===Sd||i===Ed||i===bd||i===wd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===md)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_d)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Md)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ed)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===Td||i===Cd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ac)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Td)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cm||i===Dd||i===Ad||i===Id)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ad)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Id)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var zP={type:"move"},lc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zP)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},GP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Km=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Ni,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zn({vertexShader:GP,fragmentShader:jP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new Wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jm=class extends ii{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,v=new Km,m=t.getContextAttributes(),p=null,T=null,S=[],M=[],I=new se,D=null,C=new Zt;C.viewport=new Dt;let R=new Zt;R.viewport=new Dt;let b=[C,R],x=new Hu,A=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=S[W];return ie===void 0&&(ie=new lc,S[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=S[W];return ie===void 0&&(ie=new lc,S[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=S[W];return ie===void 0&&(ie=new lc,S[W]=ie),ie.getHandSpace()};function B(W){let ie=M.indexOf(W.inputSource);if(ie===-1)return;let be=S[ie];be!==void 0&&(be.update(W.inputSource,W.frame,l||o),be.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",X);for(let W=0;W<S.length;W++){let ie=M[W];ie!==null&&(M[W]=null,S[W].disconnect(ie))}A=null,$=null,v.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,T=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return rs(this,null,function*(){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),D=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new ri(h.framebufferWidth,h.framebufferHeight,{format:On,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,be=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Vr:Lr,be=m.stencil?Xr:ur);let De={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new ri(f.textureWidth,f.textureHeight,{format:On,type:ci,depthTexture:new Fa(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(W){for(let ie=0;ie<W.removed.length;ie++){let be=W.removed[ie],oe=M.indexOf(be);oe>=0&&(M[oe]=null,S[oe].disconnect(be))}for(let ie=0;ie<W.added.length;ie++){let be=W.added[ie],oe=M.indexOf(be);if(oe===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=M.length){M.push(be),oe=Ue;break}else if(M[Ue]===null){M[Ue]=be,oe=Ue;break}if(oe===-1)break}let De=S[oe];De&&De.connect(be)}}let z=new O,K=new O;function V(W,ie,be){z.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(be.matrixWorld);let oe=z.distanceTo(K),De=ie.projectionMatrix.elements,Ue=be.projectionMatrix.elements,Pe=De[14]/(De[10]-1),st=De[14]/(De[10]+1),Z=(De[9]+1)/De[5],ne=(De[9]-1)/De[5],w=(De[8]-1)/De[0],Ce=(Ue[8]+1)/Ue[0],Q=Pe*w,ye=Pe*Ce,re=oe/(-w+Ce),Ne=re*-w;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ne),W.translateZ(re),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),De[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let pe=Pe+re,E=st+re,y=Q-Ne,F=ye+(oe-Ne),G=Z*st/E*pe,J=ne*st/E*pe;W.projectionMatrix.makePerspective(y,F,G,J,pe,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ae(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ie=W.near,be=W.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(be=v.depthFar)),x.near=R.near=C.near=ie,x.far=R.far=C.far=be,(A!==x.near||$!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,$=x.far),C.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,x.layers.mask=C.layers.mask|R.layers.mask;let oe=W.parent,De=x.cameras;ae(x,oe);for(let Ue=0;Ue<De.length;Ue++)ae(De[Ue],oe);De.length===2?V(x,C,R):x.projectionMatrix.copy(C.projectionMatrix),ge(W,x,oe)};function ge(W,ie,be){be===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(be.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=co*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Se=null;function Ge(W,ie){if(u=ie.getViewerPose(l||o),g=ie,u!==null){let be=u.views;h!==null&&(e.setRenderTargetFramebuffer(T,h.framebuffer),e.setRenderTarget(T));let oe=!1;be.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Ue=0;Ue<be.length;Ue++){let Pe=be[Ue],st=null;if(h!==null)st=h.getViewport(Pe);else{let ne=d.getViewSubImage(f,Pe);st=ne.viewport,Ue===0&&(e.setRenderTargetTextures(T,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(T))}let Z=b[Ue];Z===void 0&&(Z=new Zt,Z.layers.enable(Ue),Z.viewport=new Dt,b[Ue]=Z),Z.matrix.fromArray(Pe.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Pe.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(st.x,st.y,st.width,st.height),Ue===0&&(x.matrix.copy(Z.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Z)}let De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){let Ue=d.getDepthInformation(be[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,r.renderState)}}for(let be=0;be<S.length;be++){let oe=M[be],De=S[be];oe!==null&&De!==void 0&&De.update(oe,ie,l||o)}Se&&Se(W,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let ut=new GM;ut.setAnimationLoop(Ge),this.setAnimationLoop=function(W){Se=W},this.dispose=function(){}}},es=new zr,WP=new At;function $P(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Om(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),S=T.envMap,M=T.envMapRotation;S&&(m.envMap.value=S,es.copy(M),es.x*=-1,es.y*=-1,es.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(WP.makeRotationFromEuler(es)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qP(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){let M=S.program;i.uniformBlockBinding(T,M)}function l(T,S){let M=r[T.id];M===void 0&&(g(T),M=u(T),r[T.id]=M,T.addEventListener("dispose",m));let I=S.program;i.updateUBOMapping(T,I);let D=e.render.frame;s[T.id]!==D&&(f(T),s[T.id]=D)}function u(T){let S=d();T.__bindingPointIndex=S;let M=n.createBuffer(),I=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let S=r[T.id],M=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,C=M.length;D<C;D++){let R=Array.isArray(M[D])?M[D]:[M[D]];for(let b=0,x=R.length;b<x;b++){let A=R[b];if(h(A,D,b,I)===!0){let $=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],q=0;for(let X=0;X<B.length;X++){let z=B[X],K=v(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,$+q,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,S,M,I){let D=T.value,C=S+"_"+M;if(I[C]===void 0)return typeof D=="number"||typeof D=="boolean"?I[C]=D:I[C]=D.clone(),!0;{let R=I[C];if(typeof D=="number"||typeof D=="boolean"){if(R!==D)return I[C]=D,!0}else if(R.equals(D)===!1)return R.copy(D),!0}return!1}function g(T){let S=T.uniforms,M=0,I=16;for(let C=0,R=S.length;C<R;C++){let b=Array.isArray(S[C])?S[C]:[S[C]];for(let x=0,A=b.length;x<A;x++){let $=b[x],B=Array.isArray($.value)?$.value:[$.value];for(let q=0,X=B.length;q<X;q++){let z=B[q],K=v(z),V=M%I,ae=V%K.boundary,ge=V+ae;M+=ae,ge!==0&&I-ge<K.storage&&(M+=I-ge),$.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=K.storage}}}let D=M%I;return D>0&&(M+=I-D),T.__size=M,T.__cache={},this}function v(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){let S=T.target;S.removeEventListener("dispose",m);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Fd=class{constructor(e={}){let{canvas:t=uM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Ii,this.toneMappingExposure=1;let M=this,I=!1,D=0,C=0,R=null,b=-1,x=null,A=new Dt,$=new Dt,B=null,q=new ct(0),X=0,z=t.width,K=t.height,V=1,ae=null,ge=null,Se=new Dt(0,0,z,K),Ge=new Dt(0,0,z,K),ut=!1,W=new La,ie=!1,be=!1,oe=new At,De=new At,Ue=new O,Pe=new Dt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function ne(){return R===null?V:1}let w=i;function Ce(_,P){return t.getContext(_,P)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zu}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",he,!1),w===null){let P="webgl2";if(w=Ce(P,_),w===null)throw Ce(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Q,ye,re,Ne,pe,E,y,F,G,J,j,Te,le,ve,Je,te,xe,Re,Le,Me,nt,Xe,Mt,N;function ue(){Q=new uN(w),Q.init(),Xe=new HP(w,Q),ye=new rN(w,Q,e,Xe),re=new BP(w,Q),ye.reverseDepthBuffer&&f&&re.buffers.depth.setReversed(!0),Ne=new hN(w),pe=new TP,E=new VP(w,Q,re,pe,ye,Xe,Ne),y=new oN(M),F=new lN(M),G=new xI(w),Mt=new nN(w,G),J=new dN(w,G,Ne,Mt),j=new mN(w,J,G,Ne),Le=new pN(w,ye,E),te=new sN(pe),Te=new wP(M,y,F,Q,ye,Mt,te),le=new $P(M,pe),ve=new DP,Je=new OP(Q),Re=new tN(M,y,F,re,j,h,c),xe=new UP(M,j,ye),N=new qP(w,Ne,ye,re),Me=new iN(w,Q,Ne),nt=new fN(w,Q,Ne),Ne.programs=Te.programs,M.capabilities=ye,M.extensions=Q,M.properties=pe,M.renderLists=ve,M.shadowMap=xe,M.state=re,M.info=Ne}ue();let H=new Jm(M,w);this.xr=H,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let _=Q.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Q.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(_){_!==void 0&&(V=_,this.setSize(z,K,!1))},this.getSize=function(_){return _.set(z,K)},this.setSize=function(_,P,U=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=_,K=P,t.width=Math.floor(_*V),t.height=Math.floor(P*V),U===!0&&(t.style.width=_+"px",t.style.height=P+"px"),this.setViewport(0,0,_,P)},this.getDrawingBufferSize=function(_){return _.set(z*V,K*V).floor()},this.setDrawingBufferSize=function(_,P,U){z=_,K=P,V=U,t.width=Math.floor(_*U),t.height=Math.floor(P*U),this.setViewport(0,0,_,P)},this.getCurrentViewport=function(_){return _.copy(A)},this.getViewport=function(_){return _.copy(Se)},this.setViewport=function(_,P,U,k){_.isVector4?Se.set(_.x,_.y,_.z,_.w):Se.set(_,P,U,k),re.viewport(A.copy(Se).multiplyScalar(V).round())},this.getScissor=function(_){return _.copy(Ge)},this.setScissor=function(_,P,U,k){_.isVector4?Ge.set(_.x,_.y,_.z,_.w):Ge.set(_,P,U,k),re.scissor($.copy(Ge).multiplyScalar(V).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(_){re.setScissorTest(ut=_)},this.setOpaqueSort=function(_){ae=_},this.setTransparentSort=function(_){ge=_},this.getClearColor=function(_){return _.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(_=!0,P=!0,U=!0){let k=0;if(_){let L=!1;if(R!==null){let ee=R.texture.format;L=ee===rd||ee===id||ee===nd}if(L){let ee=R.texture.type,de=ee===ci||ee===ur||ee===vo||ee===Xr||ee===ed||ee===td,_e=Re.getClearColor(),Ee=Re.getClearAlpha(),Fe=_e.r,ke=_e.g,Ae=_e.b;de?(g[0]=Fe,g[1]=ke,g[2]=Ae,g[3]=Ee,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=Fe,v[1]=ke,v[2]=Ae,v[3]=Ee,w.clearBufferiv(w.COLOR,0,v))}else k|=w.COLOR_BUFFER_BIT}P&&(k|=w.DEPTH_BUFFER_BIT),U&&(k|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Re.dispose(),ve.dispose(),Je.dispose(),pe.dispose(),y.dispose(),F.dispose(),j.dispose(),Mt.dispose(),N.dispose(),Te.dispose(),H.dispose(),H.removeEventListener("sessionstart",ig),H.removeEventListener("sessionend",rg),dr.stop()};function Y(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let _=Ne.autoReset,P=xe.enabled,U=xe.autoUpdate,k=xe.needsUpdate,L=xe.type;ue(),Ne.autoReset=_,xe.enabled=P,xe.autoUpdate=U,xe.needsUpdate=k,xe.type=L}function he(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function $e(_){let P=_.target;P.removeEventListener("dispose",$e),wt(P)}function wt(_){$t(_),pe.remove(_)}function $t(_){let P=pe.get(_).programs;P!==void 0&&(P.forEach(function(U){Te.releaseProgram(U)}),_.isShaderMaterial&&Te.releaseShaderCache(_))}this.renderBufferDirect=function(_,P,U,k,L,ee){P===null&&(P=st);let de=L.isMesh&&L.matrixWorld.determinant()<0,_e=KM(_,P,U,k,L);re.setMaterial(k,de);let Ee=U.index,Fe=1;if(k.wireframe===!0){if(Ee=J.getWireframeAttribute(U),Ee===void 0)return;Fe=2}let ke=U.drawRange,Ae=U.attributes.position,ot=ke.start*Fe,dt=(ke.start+ke.count)*Fe;ee!==null&&(ot=Math.max(ot,ee.start*Fe),dt=Math.min(dt,(ee.start+ee.count)*Fe)),Ee!==null?(ot=Math.max(ot,0),dt=Math.min(dt,Ee.count)):Ae!=null&&(ot=Math.max(ot,0),dt=Math.min(dt,Ae.count));let It=dt-ot;if(It<0||It===1/0)return;Mt.setup(L,k,_e,U,Ee);let Tt,lt=Me;if(Ee!==null&&(Tt=G.get(Ee),lt=nt,lt.setIndex(Tt)),L.isMesh)k.wireframe===!0?(re.setLineWidth(k.wireframeLinewidth*ne()),lt.setMode(w.LINES)):lt.setMode(w.TRIANGLES);else if(L.isLine){let Ie=k.linewidth;Ie===void 0&&(Ie=1),re.setLineWidth(Ie*ne()),L.isLineSegments?lt.setMode(w.LINES):L.isLineLoop?lt.setMode(w.LINE_LOOP):lt.setMode(w.LINE_STRIP)}else L.isPoints?lt.setMode(w.POINTS):L.isSprite&&lt.setMode(w.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)lt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))lt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Ie=L._multiDrawStarts,zt=L._multiDrawCounts,ft=L._multiDrawCount,Fn=Ee?G.get(Ee).bytesPerElement:1,is=pe.get(k).currentProgram.getUniforms();for(let un=0;un<ft;un++)is.setValue(w,"_gl_DrawID",un),lt.render(Ie[un]/Fn,zt[un])}else if(L.isInstancedMesh)lt.renderInstances(ot,It,L.count);else if(U.isInstancedBufferGeometry){let Ie=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,zt=Math.min(U.instanceCount,Ie);lt.renderInstances(ot,It,zt)}else lt.render(ot,It)};function pt(_,P,U){_.transparent===!0&&_.side===ai&&_.forceSinglePass===!1?(_.side=on,_.needsUpdate=!0,dc(_,P,U),_.side=Di,_.needsUpdate=!0,dc(_,P,U),_.side=ai):dc(_,P,U)}this.compile=function(_,P,U=null){U===null&&(U=_),p=Je.get(U),p.init(P),S.push(p),U.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),_!==U&&_.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();let k=new Set;return _.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let ee=L.material;if(ee)if(Array.isArray(ee))for(let de=0;de<ee.length;de++){let _e=ee[de];pt(_e,U,L),k.add(_e)}else pt(ee,U,L),k.add(ee)}),S.pop(),p=null,k},this.compileAsync=function(_,P,U=null){let k=this.compile(_,P,U);return new Promise(L=>{function ee(){if(k.forEach(function(de){pe.get(de).currentProgram.isReady()&&k.delete(de)}),k.size===0){L(_);return}setTimeout(ee,10)}Q.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ln=null;function di(_){Ln&&Ln(_)}function ig(){dr.stop()}function rg(){dr.start()}let dr=new GM;dr.setAnimationLoop(di),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(_){Ln=_,H.setAnimationLoop(_),_===null?dr.stop():dr.start()},H.addEventListener("sessionstart",ig),H.addEventListener("sessionend",rg),this.render=function(_,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(P),P=H.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,P,R),p=Je.get(_,S.length),p.init(P),S.push(p),De.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),W.setFromProjectionMatrix(De),be=this.localClippingEnabled,ie=te.init(this.clippingPlanes,be),m=ve.get(_,T.length),m.init(),T.push(m),H.enabled===!0&&H.isPresenting===!0){let ee=M.xr.getDepthSensingMesh();ee!==null&&Gd(ee,P,-1/0,M.sortObjects)}Gd(_,P,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ae,ge),Z=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Z&&Re.addToRenderList(m,_),this.info.render.frame++,ie===!0&&te.beginShadows();let U=p.state.shadowsArray;xe.render(U,_,P),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,L=m.transmissive;if(p.setupLights(),P.isArrayCamera){let ee=P.cameras;if(L.length>0)for(let de=0,_e=ee.length;de<_e;de++){let Ee=ee[de];og(k,L,_,Ee)}Z&&Re.render(_);for(let de=0,_e=ee.length;de<_e;de++){let Ee=ee[de];sg(m,_,Ee,Ee.viewport)}}else L.length>0&&og(k,L,_,P),Z&&Re.render(_),sg(m,_,P);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),_.isScene===!0&&_.onAfterRender(M,_,P),Mt.resetDefaultState(),b=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],ie===!0&&te.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Gd(_,P,U,k){if(_.visible===!1)return;if(_.layers.test(P.layers)){if(_.isGroup)U=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(P);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||W.intersectsSprite(_)){k&&Pe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(De);let de=j.update(_),_e=_.material;_e.visible&&m.push(_,de,_e,U,Pe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||W.intersectsObject(_))){let de=j.update(_),_e=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Pe.copy(_.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Pe.copy(de.boundingSphere.center)),Pe.applyMatrix4(_.matrixWorld).applyMatrix4(De)),Array.isArray(_e)){let Ee=de.groups;for(let Fe=0,ke=Ee.length;Fe<ke;Fe++){let Ae=Ee[Fe],ot=_e[Ae.materialIndex];ot&&ot.visible&&m.push(_,de,ot,U,Pe.z,Ae)}}else _e.visible&&m.push(_,de,_e,U,Pe.z,null)}}let ee=_.children;for(let de=0,_e=ee.length;de<_e;de++)Gd(ee[de],P,U,k)}function sg(_,P,U,k){let L=_.opaque,ee=_.transmissive,de=_.transparent;p.setupLightsView(U),ie===!0&&te.setGlobalState(M.clippingPlanes,U),k&&re.viewport(A.copy(k)),L.length>0&&uc(L,P,U),ee.length>0&&uc(ee,P,U),de.length>0&&uc(de,P,U),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function og(_,P,U,k){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ri(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?yo:ci,minFilter:lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let ee=p.state.transmissionRenderTarget[k.id],de=k.viewport||A;ee.setSize(de.z,de.w);let _e=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(q),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Z&&Re.render(U);let Ee=M.toneMapping;M.toneMapping=Ii;let Fe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ie===!0&&te.setGlobalState(M.clippingPlanes,k),uc(_,U,k),E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee),Q.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ae=0,ot=P.length;Ae<ot;Ae++){let dt=P[Ae],It=dt.object,Tt=dt.geometry,lt=dt.material,Ie=dt.group;if(lt.side===ai&&It.layers.test(k.layers)){let zt=lt.side;lt.side=on,lt.needsUpdate=!0,ag(It,U,k,Tt,lt,Ie),lt.side=zt,lt.needsUpdate=!0,ke=!0}}ke===!0&&(E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee))}M.setRenderTarget(_e),M.setClearColor(q,X),Fe!==void 0&&(k.viewport=Fe),M.toneMapping=Ee}function uc(_,P,U){let k=P.isScene===!0?P.overrideMaterial:null;for(let L=0,ee=_.length;L<ee;L++){let de=_[L],_e=de.object,Ee=de.geometry,Fe=k===null?de.material:k,ke=de.group;_e.layers.test(U.layers)&&ag(_e,P,U,Ee,Fe,ke)}}function ag(_,P,U,k,L,ee){_.onBeforeRender(M,P,U,k,L,ee),_.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),L.onBeforeRender(M,P,U,k,_,ee),L.transparent===!0&&L.side===ai&&L.forceSinglePass===!1?(L.side=on,L.needsUpdate=!0,M.renderBufferDirect(U,P,k,L,_,ee),L.side=Di,L.needsUpdate=!0,M.renderBufferDirect(U,P,k,L,_,ee),L.side=ai):M.renderBufferDirect(U,P,k,L,_,ee),_.onAfterRender(M,P,U,k,L,ee)}function dc(_,P,U){P.isScene!==!0&&(P=st);let k=pe.get(_),L=p.state.lights,ee=p.state.shadowsArray,de=L.state.version,_e=Te.getParameters(_,L.state,ee,P,U),Ee=Te.getProgramCacheKey(_e),Fe=k.programs;k.environment=_.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(_.isMeshStandardMaterial?F:y).get(_.envMap||k.environment),k.envMapRotation=k.environment!==null&&_.envMap===null?P.environmentRotation:_.envMapRotation,Fe===void 0&&(_.addEventListener("dispose",$e),Fe=new Map,k.programs=Fe);let ke=Fe.get(Ee);if(ke!==void 0){if(k.currentProgram===ke&&k.lightsStateVersion===de)return lg(_,_e),ke}else _e.uniforms=Te.getUniforms(_),_.onBeforeCompile(_e,M),ke=Te.acquireProgram(_e,Ee),Fe.set(Ee,ke),k.uniforms=_e.uniforms;let Ae=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ae.clippingPlanes=te.uniform),lg(_,_e),k.needsLights=QM(_),k.lightsStateVersion=de,k.needsLights&&(Ae.ambientLightColor.value=L.state.ambient,Ae.lightProbe.value=L.state.probe,Ae.directionalLights.value=L.state.directional,Ae.directionalLightShadows.value=L.state.directionalShadow,Ae.spotLights.value=L.state.spot,Ae.spotLightShadows.value=L.state.spotShadow,Ae.rectAreaLights.value=L.state.rectArea,Ae.ltc_1.value=L.state.rectAreaLTC1,Ae.ltc_2.value=L.state.rectAreaLTC2,Ae.pointLights.value=L.state.point,Ae.pointLightShadows.value=L.state.pointShadow,Ae.hemisphereLights.value=L.state.hemi,Ae.directionalShadowMap.value=L.state.directionalShadowMap,Ae.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ae.spotShadowMap.value=L.state.spotShadowMap,Ae.spotLightMatrix.value=L.state.spotLightMatrix,Ae.spotLightMap.value=L.state.spotLightMap,Ae.pointShadowMap.value=L.state.pointShadowMap,Ae.pointShadowMatrix.value=L.state.pointShadowMatrix),k.currentProgram=ke,k.uniformsList=null,ke}function cg(_){if(_.uniformsList===null){let P=_.currentProgram.getUniforms();_.uniformsList=So.seqWithValue(P.seq,_.uniforms)}return _.uniformsList}function lg(_,P){let U=pe.get(_);U.outputColorSpace=P.outputColorSpace,U.batching=P.batching,U.batchingColor=P.batchingColor,U.instancing=P.instancing,U.instancingColor=P.instancingColor,U.instancingMorph=P.instancingMorph,U.skinning=P.skinning,U.morphTargets=P.morphTargets,U.morphNormals=P.morphNormals,U.morphColors=P.morphColors,U.morphTargetsCount=P.morphTargetsCount,U.numClippingPlanes=P.numClippingPlanes,U.numIntersection=P.numClipIntersection,U.vertexAlphas=P.vertexAlphas,U.vertexTangents=P.vertexTangents,U.toneMapping=P.toneMapping}function KM(_,P,U,k,L){P.isScene!==!0&&(P=st),E.resetTextureUnits();let ee=P.fog,de=k.isMeshStandardMaterial?P.environment:null,_e=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Hr,Ee=(k.isMeshStandardMaterial?F:y).get(k.envMap||de),Fe=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,ke=!!U.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!U.morphAttributes.position,ot=!!U.morphAttributes.normal,dt=!!U.morphAttributes.color,It=Ii;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(It=M.toneMapping);let Tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,lt=Tt!==void 0?Tt.length:0,Ie=pe.get(k),zt=p.state.lights;if(ie===!0&&(be===!0||_!==x)){let Jt=_===x&&k.id===b;te.setState(k,_,Jt)}let ft=!1;k.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==zt.state.version||Ie.outputColorSpace!==_e||L.isBatchedMesh&&Ie.batching===!1||!L.isBatchedMesh&&Ie.batching===!0||L.isBatchedMesh&&Ie.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ie.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ie.instancing===!1||!L.isInstancedMesh&&Ie.instancing===!0||L.isSkinnedMesh&&Ie.skinning===!1||!L.isSkinnedMesh&&Ie.skinning===!0||L.isInstancedMesh&&Ie.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ie.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ie.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ie.instancingMorph===!1&&L.morphTexture!==null||Ie.envMap!==Ee||k.fog===!0&&Ie.fog!==ee||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==te.numPlanes||Ie.numIntersection!==te.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==ke||Ie.morphTargets!==Ae||Ie.morphNormals!==ot||Ie.morphColors!==dt||Ie.toneMapping!==It||Ie.morphTargetsCount!==lt)&&(ft=!0):(ft=!0,Ie.__version=k.version);let Fn=Ie.currentProgram;ft===!0&&(Fn=dc(k,P,L));let is=!1,un=!1,bo=!1,Et=Fn.getUniforms(),Sn=Ie.uniforms;if(re.useProgram(Fn.program)&&(is=!0,un=!0,bo=!0),k.id!==b&&(b=k.id,un=!0),is||x!==_){re.buffers.depth.getReversed()?(oe.copy(_.projectionMatrix),fM(oe),hM(oe),Et.setValue(w,"projectionMatrix",oe)):Et.setValue(w,"projectionMatrix",_.projectionMatrix),Et.setValue(w,"viewMatrix",_.matrixWorldInverse);let an=Et.map.cameraPosition;an!==void 0&&an.setValue(w,Ue.setFromMatrixPosition(_.matrixWorld)),ye.logarithmicDepthBuffer&&Et.setValue(w,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(w,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,un=!0,bo=!0)}if(L.isSkinnedMesh){Et.setOptional(w,L,"bindMatrix"),Et.setOptional(w,L,"bindMatrixInverse");let Jt=L.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Et.setValue(w,"boneTexture",Jt.boneTexture,E))}L.isBatchedMesh&&(Et.setOptional(w,L,"batchingTexture"),Et.setValue(w,"batchingTexture",L._matricesTexture,E),Et.setOptional(w,L,"batchingIdTexture"),Et.setValue(w,"batchingIdTexture",L._indirectTexture,E),Et.setOptional(w,L,"batchingColorTexture"),L._colorsTexture!==null&&Et.setValue(w,"batchingColorTexture",L._colorsTexture,E));let En=U.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Le.update(L,U,Fn),(un||Ie.receiveShadow!==L.receiveShadow)&&(Ie.receiveShadow=L.receiveShadow,Et.setValue(w,"receiveShadow",L.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Sn.envMap.value=Ee,Sn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&P.environment!==null&&(Sn.envMapIntensity.value=P.environmentIntensity),un&&(Et.setValue(w,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&JM(Sn,bo),ee&&k.fog===!0&&le.refreshFogUniforms(Sn,ee),le.refreshMaterialUniforms(Sn,k,V,K,p.state.transmissionRenderTarget[_.id]),So.upload(w,cg(Ie),Sn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(So.upload(w,cg(Ie),Sn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(w,"center",L.center),Et.setValue(w,"modelViewMatrix",L.modelViewMatrix),Et.setValue(w,"normalMatrix",L.normalMatrix),Et.setValue(w,"modelMatrix",L.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Jt=k.uniformsGroups;for(let an=0,jd=Jt.length;an<jd;an++){let fr=Jt[an];N.update(fr,Fn),N.bind(fr,Fn)}}return Fn}function JM(_,P){_.ambientLightColor.needsUpdate=P,_.lightProbe.needsUpdate=P,_.directionalLights.needsUpdate=P,_.directionalLightShadows.needsUpdate=P,_.pointLights.needsUpdate=P,_.pointLightShadows.needsUpdate=P,_.spotLights.needsUpdate=P,_.spotLightShadows.needsUpdate=P,_.rectAreaLights.needsUpdate=P,_.hemisphereLights.needsUpdate=P}function QM(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(_,P,U){pe.get(_.texture).__webglTexture=P,pe.get(_.depthTexture).__webglTexture=U;let k=pe.get(_);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=U===void 0,k.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,P){let U=pe.get(_);U.__webglFramebuffer=P,U.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(_,P=0,U=0){R=_,D=P,C=U;let k=!0,L=null,ee=!1,de=!1;if(_){let Ee=pe.get(_);if(Ee.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(w.FRAMEBUFFER,null),k=!1;else if(Ee.__webglFramebuffer===void 0)E.setupRenderTarget(_);else if(Ee.__hasExternalTextures)E.rebindTextures(_,pe.get(_.texture).__webglTexture,pe.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ae=_.depthTexture;if(Ee.__boundDepthTexture!==Ae){if(Ae!==null&&pe.has(Ae)&&(_.width!==Ae.image.width||_.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(_)}}let Fe=_.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(de=!0);let ke=pe.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ke[P])?L=ke[P][U]:L=ke[P],ee=!0):_.samples>0&&E.useMultisampledRTT(_)===!1?L=pe.get(_).__webglMultisampledFramebuffer:Array.isArray(ke)?L=ke[U]:L=ke,A.copy(_.viewport),$.copy(_.scissor),B=_.scissorTest}else A.copy(Se).multiplyScalar(V).floor(),$.copy(Ge).multiplyScalar(V).floor(),B=ut;if(re.bindFramebuffer(w.FRAMEBUFFER,L)&&k&&re.drawBuffers(_,L),re.viewport(A),re.scissor($),re.setScissorTest(B),ee){let Ee=pe.get(_.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+P,Ee.__webglTexture,U)}else if(de){let Ee=pe.get(_.texture),Fe=P||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ee.__webglTexture,U||0,Fe)}b=-1},this.readRenderTargetPixels=function(_,P,U,k,L,ee,de){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=pe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){re.bindFramebuffer(w.FRAMEBUFFER,_e);try{let Ee=_.texture,Fe=Ee.format,ke=Ee.type;if(!ye.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=_.width-k&&U>=0&&U<=_.height-L&&w.readPixels(P,U,k,L,Xe.convert(Fe),Xe.convert(ke),ee)}finally{let Ee=R!==null?pe.get(R).__webglFramebuffer:null;re.bindFramebuffer(w.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=function(_,P,U,k,L,ee,de){return rs(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=pe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){let Ee=_.texture,Fe=Ee.format,ke=Ee.type;if(!ye.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=_.width-k&&U>=0&&U<=_.height-L){re.bindFramebuffer(w.FRAMEBUFFER,_e);let Ae=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ae),w.bufferData(w.PIXEL_PACK_BUFFER,ee.byteLength,w.STREAM_READ),w.readPixels(P,U,k,L,Xe.convert(Fe),Xe.convert(ke),0);let ot=R!==null?pe.get(R).__webglFramebuffer:null;re.bindFramebuffer(w.FRAMEBUFFER,ot);let dt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),yield dM(w,dt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ae),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ee),w.deleteBuffer(Ae),w.deleteSync(dt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(_,P=null,U=0){_.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,_=arguments[1]);let k=Math.pow(2,-U),L=Math.floor(_.image.width*k),ee=Math.floor(_.image.height*k),de=P!==null?P.x:0,_e=P!==null?P.y:0;E.setTexture2D(_,0),w.copyTexSubImage2D(w.TEXTURE_2D,U,0,0,de,_e,L,ee),re.unbindTexture()};let eS=w.createFramebuffer(),tS=w.createFramebuffer();this.copyTextureToTexture=function(_,P,U=null,k=null,L=0,ee=null){_.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,_=arguments[1],P=arguments[2],ee=arguments[3]||0,U=null),ee===null&&(L!==0?(Zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let de,_e,Ee,Fe,ke,Ae,ot,dt,It,Tt=_.isCompressedTexture?_.mipmaps[ee]:_.image;if(U!==null)de=U.max.x-U.min.x,_e=U.max.y-U.min.y,Ee=U.isBox3?U.max.z-U.min.z:1,Fe=U.min.x,ke=U.min.y,Ae=U.isBox3?U.min.z:0;else{let En=Math.pow(2,-L);de=Math.floor(Tt.width*En),_e=Math.floor(Tt.height*En),_.isDataArrayTexture?Ee=Tt.depth:_.isData3DTexture?Ee=Math.floor(Tt.depth*En):Ee=1,Fe=0,ke=0,Ae=0}k!==null?(ot=k.x,dt=k.y,It=k.z):(ot=0,dt=0,It=0);let lt=Xe.convert(P.format),Ie=Xe.convert(P.type),zt;P.isData3DTexture?(E.setTexture3D(P,0),zt=w.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(E.setTexture2DArray(P,0),zt=w.TEXTURE_2D_ARRAY):(E.setTexture2D(P,0),zt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,P.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,P.unpackAlignment);let ft=w.getParameter(w.UNPACK_ROW_LENGTH),Fn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),is=w.getParameter(w.UNPACK_SKIP_PIXELS),un=w.getParameter(w.UNPACK_SKIP_ROWS),bo=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Tt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Tt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Fe),w.pixelStorei(w.UNPACK_SKIP_ROWS,ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ae);let Et=_.isDataArrayTexture||_.isData3DTexture,Sn=P.isDataArrayTexture||P.isData3DTexture;if(_.isDepthTexture){let En=pe.get(_),Jt=pe.get(P),an=pe.get(En.__renderTarget),jd=pe.get(Jt.__renderTarget);re.bindFramebuffer(w.READ_FRAMEBUFFER,an.__webglFramebuffer),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,jd.__webglFramebuffer);for(let fr=0;fr<Ee;fr++)Et&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,pe.get(_).__webglTexture,L,Ae+fr),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,pe.get(P).__webglTexture,ee,It+fr)),w.blitFramebuffer(Fe,ke,de,_e,ot,dt,de,_e,w.DEPTH_BUFFER_BIT,w.NEAREST);re.bindFramebuffer(w.READ_FRAMEBUFFER,null),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(L!==0||_.isRenderTargetTexture||pe.has(_)){let En=pe.get(_),Jt=pe.get(P);re.bindFramebuffer(w.READ_FRAMEBUFFER,eS),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,tS);for(let an=0;an<Ee;an++)Et?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,En.__webglTexture,L,Ae+an):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,En.__webglTexture,L),Sn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Jt.__webglTexture,ee,It+an):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Jt.__webglTexture,ee),L!==0?w.blitFramebuffer(Fe,ke,de,_e,ot,dt,de,_e,w.COLOR_BUFFER_BIT,w.NEAREST):Sn?w.copyTexSubImage3D(zt,ee,ot,dt,It+an,Fe,ke,de,_e):w.copyTexSubImage2D(zt,ee,ot,dt,Fe,ke,de,_e);re.bindFramebuffer(w.READ_FRAMEBUFFER,null),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Sn?_.isDataTexture||_.isData3DTexture?w.texSubImage3D(zt,ee,ot,dt,It,de,_e,Ee,lt,Ie,Tt.data):P.isCompressedArrayTexture?w.compressedTexSubImage3D(zt,ee,ot,dt,It,de,_e,Ee,lt,Tt.data):w.texSubImage3D(zt,ee,ot,dt,It,de,_e,Ee,lt,Ie,Tt):_.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ee,ot,dt,de,_e,lt,Ie,Tt.data):_.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ee,ot,dt,Tt.width,Tt.height,lt,Tt.data):w.texSubImage2D(w.TEXTURE_2D,ee,ot,dt,de,_e,lt,Ie,Tt);w.pixelStorei(w.UNPACK_ROW_LENGTH,ft),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Fn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,is),w.pixelStorei(w.UNPACK_SKIP_ROWS,un),w.pixelStorei(w.UNPACK_SKIP_IMAGES,bo),ee===0&&P.generateMipmaps&&w.generateMipmap(zt),re.unbindTexture()},this.copyTextureToTexture3D=function(_,P,U=null,k=null,L=0){return _.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,k=arguments[1]||null,_=arguments[2],P=arguments[3],L=arguments[4]||0),Zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,P,U,k,L)},this.initRenderTarget=function(_){pe.get(_).__webglFramebuffer===void 0&&E.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?E.setTextureCube(_,0):_.isData3DTexture?E.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?E.setTexture2DArray(_,0):E.setTexture2D(_,0),re.unbindTexture()},this.resetState=function(){D=0,C=0,R=null,re.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var XM={type:"change"},tg={type:"start"},ZM={type:"end"},kd=new fo,YM=new In,YP=Math.cos(70*Nm.DEG2RAD),Bt=new O,ln=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},eg=1e-6,Bd=class extends ec{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ar.ROTATE,MIDDLE:ar.DOLLY,RIGHT:ar.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Nn,this._lastTargetPosition=new O,this._quat=new Nn().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new go,this._sphericalDelta=new go,this._scale=1,this._panOffset=new O,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new O,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KP.bind(this),this._onPointerDown=ZP.bind(this),this._onPointerUp=JP.bind(this),this._onContextMenu=sO.bind(this),this._onMouseWheel=tO.bind(this),this._onKeyDown=nO.bind(this),this._onTouchStart=iO.bind(this),this._onTouchMove=rO.bind(this),this._onMouseDown=QP.bind(this),this._onMouseMove=eO.bind(this),this._interceptControlDown=oO.bind(this),this._interceptControlUp=aO.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(XM),this.update(),this.state=yt.NONE}update(e=null){let t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),r<-Math.PI?r+=ln:r>Math.PI&&(r-=ln),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Bt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(kd.origin.copy(this.object.position),kd.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kd.direction))<YP?this.object.lookAt(this.target):(YM.setFromNormalAndCoplanarPoint(this.object.up,this.target),kd.intersectPlane(YM,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>eg||8*(1-this._lastQuaternion.dot(this.object.quaternion))>eg||this._lastTargetPosition.distanceToSquared(this.target)>eg?(this.dispatchEvent(XM),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Bt.copy(r).sub(this.target);let s=Bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function ZP(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function KP(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function JP(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ZM),this.state=yt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function QP(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=yt.DOLLY;break;case ar.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}break;case ar.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(tg)}function eO(n){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function tO(n){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(n.preventDefault(),this.dispatchEvent(tg),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ZM))}function nO(n){this.enabled!==!1&&this._handleKeyDown(n)}function iO(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=yt.TOUCH_ROTATE;break;case cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=yt.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(tg)}function rO(n){switch(this._trackPointer(n),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=yt.NONE}}function sO(n){this.enabled!==!1&&n.preventDefault()}function oO(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aO(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Vd=class extends _o{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new Za(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){let c=s.parse(JSON.parse(a));t&&t(c)},i,r)}parse(e){return new ng(e)}},ng=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){let i=[],r=cO(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}};function cO(n,e,t){let i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let u=i[l];if(u===`
`)a=0,c-=s;else{let d=lO(u,r,a,c,t);a+=d.offsetX,o.push(d.path)}}return o}function lO(n,e,t,i,r){let s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}let o=new Qa,a,c,l,u,d,f,h,g;if(s.o){let v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=v.length;m<p;)switch(v[m++]){case"m":a=v[m++]*e+t,c=v[m++]*e+i,o.moveTo(a,c);break;case"l":a=v[m++]*e+t,c=v[m++]*e+i,o.lineTo(a,c);break;case"q":l=v[m++]*e+t,u=v[m++]*e+i,d=v[m++]*e+t,f=v[m++]*e+i,o.quadraticCurveTo(d,f,l,u);break;case"b":l=v[m++]*e+t,u=v[m++]*e+i,d=v[m++]*e+t,f=v[m++]*e+i,h=v[m++]*e+t,g=v[m++]*e+i,o.bezierCurveTo(d,f,h,g,l,u);break}}return{offsetX:s.ha*e,path:o}}var Hd=class extends ja{constructor(e,t={}){let i=t.font;if(i===void 0)super();else{let r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}};var zd=class n{constructor(e){this.window=e}title="portgit";ngAfterViewInit(){let e=document.querySelector("canvas.webgl"),t=new Oa,r=new Ka().load("textures/matcaps/8.png");r.colorSpace=nn,new Vd().load("fonts/helvetiker_regular.typeface.json",f=>{let h=new qa({matcap:r}),g=new Hd(" HI I AM INDER LEARNING NEW THINGS",{font:f,size:.25,depth:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});g.center();let v=new sn(g,h);t.add(v);let m=new $a(.3,.2,32,64);for(let p=0;p<100;p++){let T=new sn(m,h);T.position.x=(Math.random()-.5)*10,T.position.y=(Math.random()-.5)*10,T.position.z=(Math.random()-.5)*10,T.rotation.x=Math.random()*Math.PI,T.rotation.y=Math.random()*Math.PI;let S=Math.random();T.scale.set(S,S,S),t.add(T)}});let o={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{o.width=window.innerWidth,o.height=window.innerHeight,a.aspect=o.width/o.height,a.updateProjectionMatrix(),l.setSize(o.width,o.height),l.setPixelRatio(Math.min(window.devicePixelRatio,2))});let a=new Zt(75,o.width/o.height,.1,100);a.position.x=1,a.position.y=1,a.position.z=2,t.add(a);let c=new Bd(a,e);c.enableDamping=!0;let l=new Fd({canvas:e});l.setSize(o.width,o.height),l.setPixelRatio(Math.min(window.devicePixelRatio,2));let u=new Ja,d=()=>{let f=u.getElapsedTime();c.update(),l.render(t,a),window.requestAnimationFrame(d)};d()}static \u0275fac=function(t){return new(t||n)(br(Window))};static \u0275cmp=xl({type:n,selectors:[["app-root"]],features:[V_([{provide:Window,useValue:window}])],decls:1,vars:0,consts:[[1,"webgl"]],template:function(t,i){t&1&&jo(0,"canvas",0)},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{overflow:hidden}.webgl[_ngcontent-%COMP%]{position:fixed;top:0;left:0;outline:none}"]})};h0(zd,Q0).catch(n=>console.error(n));
