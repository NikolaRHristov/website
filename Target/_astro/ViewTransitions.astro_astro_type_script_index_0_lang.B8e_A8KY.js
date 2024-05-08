const Z="astro:before-preparation",ee="astro:after-preparation",te="astro:before-swap",ne="astro:after-swap",oe=e=>document.dispatchEvent(new Event(e));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,t,n,o,r,i,a,s,c,l){super(e,t),this.from=n,this.to=o,this.direction=r,this.navigationType=i,this.sourceElement=a,this.info=s,this.newDocument=c,this.signal=l,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class re extends U{formData;loader;constructor(e,t,n,o,r,i,a,s,c,l){super(Z,{cancelable:!0},e,t,n,o,r,i,a,s),this.formData=c,this.loader=l.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ie extends U{direction;viewTransition;swap;constructor(e,t,n){super(te,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=t,this.swap=n.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function se(e,t,n,o,r,i,a,s,c){const l=new re(e,t,n,o,r,i,window.document,a,s,c);return document.dispatchEvent(l)&&(await l.loader(),l.defaultPrevented||(oe(ee),"traverse"!==l.navigationType&&N({scrollX:scrollX,scrollY:scrollY}))),l}function ae(e,t,n){const o=new ie(e,t,n);return document.dispatchEvent(o),o.swap(),o}const ce=history.pushState.bind(history),R=history.replaceState.bind(history),N=e=>{history.state&&(history.scrollRestoration="manual",R({...history.state,...e},""))},M=!!document.startViewTransition,O=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),B=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let g,T,D;const V=e=>document.dispatchEvent(new Event(e)),W=()=>V("astro:page-load"),le=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout((()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t}),60)},v="data-astro-transition-persist",F="data-astro-transition",x="data-astro-transition-fallback";let C,S=0;async function ue(e,t){try{const n=await fetch(e,t),o=(n.headers.get("content-type")??"").split(";",1)[0].trim();return"text/html"!==o&&"application/xhtml+xml"!==o?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:o}}catch{return null}}function j(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function fe(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(""===t.dataset.astroExec)continue;const n=t.getAttribute("type");if(n&&"module"!==n&&"text/javascript"!==n)continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const n of t.attributes){if("src"===n.name){const t=new Promise((e=>{o.onload=o.onerror=e}));e=e.then((()=>t))}o.setAttribute(n.name,n.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}history.state?(S=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):O()&&(R({index:S,scrollX:scrollX,scrollY:scrollY},""),history.scrollRestoration="manual");const K=(e,t,n,o,r)=>{const i=B(t,e),a=document.title;document.title=o;let s=!1;if(e.href!==location.href&&!r)if("replace"===n.history){const t=history.state;R({...n.state,index:t.index,scrollX:t.scrollX,scrollY:t.scrollY},"",e.href)}else ce({...n.state,index:++S,scrollX:0,scrollY:0},"",e.href);if(document.title=a,D=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),s=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const t=history.state;location.href=e.href,history.state||(R(t,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else s||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function de(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${v}="${n.getAttribute(v)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const e=document.createElement("link");e.setAttribute("rel","preload"),e.setAttribute("as","style"),e.setAttribute("href",n.getAttribute("href")),t.push(new Promise((t=>{["load","error"].forEach((n=>e.addEventListener(n,t))),document.head.append(e)})))}return t}async function X(e,t,n,o,r){const i=(e,t)=>{const n=e.getAttribute(v),o=n&&t.head.querySelector(`[${v}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const n=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${n}"]`)}return null},a=e=>{const t=e.dataset.astroTransitionPersistProps;return null==t||"false"===t};async function s(e){const t=document.getAnimations();document.documentElement.setAttribute(x,e);const n=document.getAnimations().filter((e=>!t.includes(e)&&!function(e){const t=e.effect;return!!(t&&t instanceof KeyframeEffect&&t.target)&&"infinite"===window.getComputedStyle(t.target,t.pseudoElement).animationIterationCount}(e)));return Promise.allSettled(n.map((e=>e.finished)))}if("animate"===r&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const c=document.title,l=ae(e,n.viewTransition,(e=>{const t=document.documentElement,n=[...t.attributes].filter((({name:e})=>(t.removeAttribute(e),e.startsWith("data-astro-"))));[...e.newDocument.documentElement.attributes,...n].forEach((({name:e,value:n})=>t.setAttribute(e,n)));for(const t of document.scripts)for(const n of e.newDocument.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}for(const t of Array.from(document.head.children)){const n=i(t,e.newDocument);n?n.remove():t.remove()}document.head.append(...e.newDocument.head.children);const o=document.body,r=(()=>{const e=document.activeElement;if(e?.closest(`[${v}]`))return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?{activeElement:e,start:e.selectionStart,end:e.selectionEnd}:{activeElement:e};return{activeElement:null}})();document.body.replaceWith(e.newDocument.body);for(const e of o.querySelectorAll(`[${v}]`)){const t=e.getAttribute(v),n=document.querySelector(`[${v}="${t}"]`);n&&(n.replaceWith(e),"astro-island"===n.localName&&a(e)&&(e.setAttribute("ssr",""),e.setAttribute("props",n.getAttribute("props"))))}(({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&("number"==typeof t&&(e.selectionStart=t),"number"==typeof n&&(e.selectionEnd=n)))})(r)}));K(l.to,l.from,t,c,o),V(ne),"animate"===r&&(n.transitionSkipped||l.signal.aborted?n.viewTransitionFinished():s("new").finally((()=>n.viewTransitionFinished())))}function me(){return g?.controller.abort(),g={controller:new AbortController}}async function G(e,t,n,o,r){const i=me();if(!O()||location.origin!==n.origin)return i===g&&(g=void 0),void(location.href=n.href);const a=r?"traverse":"replace"===o.history?"replace":"push";if("traverse"!==a&&N({scrollX:scrollX,scrollY:scrollY}),B(t,n)&&("back"!==e&&n.hash||"back"===e&&t.hash))return K(n,t,o,document.title,r),void(i===g&&(g=void 0));const s=await se(t,n,e,a,o.sourceElement,o.info,i.controller.signal,o.formData,(async function(e){const t=e.to.href,n={signal:e.signal};if(e.formData){n.method="POST";const t=e.sourceElement instanceof HTMLFormElement?e.sourceElement:e.sourceElement instanceof HTMLElement&&"form"in e.sourceElement?e.sourceElement.form:e.sourceElement?.closest("form");n.body="application/x-www-form-urlencoded"===t?.attributes.getNamedItem("enctype")?.value?new URLSearchParams(e.formData):e.formData}const o=await ue(t,n);if(null===o)return void e.preventDefault();if(o.redirected&&(e.to=new URL(o.redirected)),C??=new DOMParser,e.newDocument=C.parseFromString(o.html,o.mediaType),e.newDocument.querySelectorAll("noscript").forEach((e=>e.remove())),!e.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!e.formData)return void e.preventDefault();const r=de(e.newDocument);r.length&&!e.signal.aborted&&await Promise.all(r)}));if(s.defaultPrevented||s.signal.aborted)return i===g&&(g=void 0),void(s.signal.aborted||(location.href=n.href));const c=await async function(){if(T&&T.viewTransition){try{T.viewTransition.skipTransition()}catch{}try{await T.viewTransition.updateCallbackDone}catch{}}return T={transitionSkipped:!1}}();if(s.signal.aborted)i===g&&(g=void 0);else{if(document.documentElement.setAttribute(F,s.direction),M)c.viewTransition=document.startViewTransition((async()=>await X(s,o,c,r)));else{const e=(async()=>{await Promise.resolve(),await X(s,o,c,r,j())})();c.viewTransition={updateCallbackDone:e,ready:e,finished:new Promise((e=>c.viewTransitionFinished=e)),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(x)}}}c.viewTransition.updateCallbackDone.finally((async()=>{await fe(),W(),le()})),c.viewTransition.finished.finally((()=>{c.viewTransition=void 0,c===T&&(T=void 0),i===g&&(g=void 0),document.documentElement.removeAttribute(F),document.documentElement.removeAttribute(x)}));try{await c.viewTransition.updateCallbackDone}catch(e){const t=e;console.log("[astro]",t.name,t.message,t.stack)}}}async function Y(e,t){await G("forward",D,new URL(e,location.href),t??{})}function he(e){if(!O()&&e.state)return void location.reload();if(null===e.state)return;const t=history.state,n=t.index,o=n>S?"forward":"back";S=n,G(o,D,new URL(location.href),{},t)}const $=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&N({scrollX:scrollX,scrollY:scrollY})};if(M||"none"!==j())if(D=new URL(location.href),addEventListener("popstate",he),addEventListener("load",W),"onscrollend"in window)addEventListener("scrollend",$);else{let e,t,n,o;const r=()=>o!==history.state?.index?(clearInterval(e),void(e=void 0)):t===scrollY&&n===scrollX?(clearInterval(e),e=void 0,void $()):(t=scrollY,void(n=scrollX));addEventListener("scroll",(()=>{void 0===e&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))}),{passive:!0})}for(const e of document.scripts)e.dataset.astroExec="";const z=new Set,k=new WeakSet;let I,J,_=!1;function we(e){_||(_=!0,I??=e?.prefetchAll??!1,J??=e?.defaultStrategy??"hover",pe(),ge(),ye(),ve())}function pe(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,(e=>{L(e.target,"tap")&&P(e.target.href,{with:"fetch",ignoreSlowConnection:!0})}),{passive:!0})}function ge(){let e;function t(t){const n=t.target.href;e&&clearTimeout(e),e=setTimeout((()=>{P(n,{with:"fetch"})}),80)}function n(){e&&(clearTimeout(e),e=0)}document.body.addEventListener("focusin",(e=>{L(e.target,"hover")&&t(e)}),{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),H((()=>{for(const e of document.getElementsByTagName("a"))k.has(e)||L(e,"hover")&&(k.add(e),e.addEventListener("mouseenter",t,{passive:!0}),e.addEventListener("mouseleave",n,{passive:!0}))}))}function ye(){let e;H((()=>{for(const t of document.getElementsByTagName("a"))k.has(t)||L(t,"viewport")&&(k.add(t),e??=be(),e.observe(t))}))}function be(){const e=new WeakMap;return new IntersectionObserver(((t,n)=>{for(const o of t){const t=o.target,r=e.get(t);o.isIntersecting?(r&&clearTimeout(r),e.set(t,setTimeout((()=>{n.unobserve(t),e.delete(t),P(t.href,{with:"link"})}),300))):r&&(clearTimeout(r),e.delete(t))}}))}function ve(){H((()=>{for(const e of document.getElementsByTagName("a"))L(e,"load")&&P(e.href,{with:"link"})}))}function P(e,t){if(Te(e,t?.ignoreSlowConnection??!1))if(z.add(e),"link"===(t?.with??"link")){const t=document.createElement("link");t.rel="prefetch",t.setAttribute("href",e),document.head.append(t)}else fetch(e).catch((t=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(t)}))}function Te(e,t){if(!navigator.onLine||!t&&Q())return!1;try{const t=new URL(e,location.href);return location.origin===t.origin&&(location.pathname!==t.pathname||location.search!==t.search)&&!z.has(e)}catch{}return!1}function L(e,t){if("A"!==e?.tagName)return!1;const n=e.dataset.astroPrefetch;return"false"!==n&&(!("tap"!==t||null==n&&!I||!Q())||(null==n&&I||""===n?t===J:n===t))}function Q(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function H(e){e();let t=!1;document.addEventListener("astro:page-load",(()=>{t?e():t=!0}))}function Ae(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function q(e){return void 0!==e.dataset.astroReload}(M||"none"!==Ae())&&(document.addEventListener("click",(e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement||t instanceof SVGAElement||t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;q(t)||t.hasAttribute("download")||!t.href||n&&"_self"!==n||r!==location.origin||0!==e.button||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),Y(o,{history:"replace"===t.dataset.astroHistory?"replace":"auto",sourceElement:t}))})),document.addEventListener("submit",(e=>{let t=e.target;if("FORM"!==t.tagName||e.defaultPrevented||q(t))return;const n=t,o=e.submitter,r=new FormData(n,o),i="string"==typeof n.action?n.action:n.getAttribute("action"),a="string"==typeof n.method?n.method:n.getAttribute("method");let s=o?.getAttribute("formaction")??i??location.pathname;const c=o?.getAttribute("formmethod")??a??"get";if("dialog"===c||location.origin!==new URL(s,location.href).origin)return;const l={sourceElement:o??n};if("get"===c){const e=new URLSearchParams(r),t=new URL(s);t.search=e.toString(),s=t.toString()}else l.formData=r;e.preventDefault(),Y(s,l)})),we({prefetchAll:!0}));