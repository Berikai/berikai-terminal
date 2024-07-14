const ct="modulepreload",lt=function(e){return"/"+e},ve={},ut=function(t,o,n){if(!o||o.length===0||typeof window>"u")return t();const r=document.getElementsByTagName("link");return Promise.all(o.map(s=>{if(s=lt(s),s in ve)return;ve[s]=!0;const l=s.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!n)for(let h=r.length-1;h>=0;h--){const c=r[h];if(c.href===s&&(!l||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${u}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":ct,l||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),l)return new Promise((h,c)=>{a.addEventListener("load",h),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};var R,m,Ue,D,ge,Be,se,Ne,F={},Me=[],_t=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_e=Array.isArray;function P(e,t){for(var o in t)e[o]=t[o];return e}function Fe(e){var t=e.parentNode;t&&t.removeChild(e)}function We(e,t,o){var n,r,s,l={};for(s in t)s=="key"?n=t[s]:s=="ref"?r=t[s]:l[s]=t[s];if(arguments.length>2&&(l.children=arguments.length>3?R.call(arguments,2):o),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)l[s]===void 0&&(l[s]=e.defaultProps[s]);return M(e,l,n,r,null)}function M(e,t,o,n,r){var s={type:e,props:t,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Ue,__i:-1,__u:0};return r==null&&m.vnode!=null&&m.vnode(s),s}function B(e){return e.children}function Y(e,t){this.props=e,this.context=t}function I(e,t){if(t==null)return e.__?I(e.__,e.__i+1):null;for(var o;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null)return o.__e;return typeof e.type=="function"?I(e):null}function Re(e){var t,o;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null){e.__e=e.__c.base=o.__e;break}return Re(e)}}function ie(e){(!e.__d&&(e.__d=!0)&&D.push(e)&&!X.__r++||ge!==m.debounceRendering)&&((ge=m.debounceRendering)||Be)(X)}function X(){var e,t,o,n,r,s,l,u,_;for(D.sort(se);e=D.shift();)e.__d&&(t=D.length,n=void 0,s=(r=(o=e).__v).__e,u=[],_=[],(l=o.__P)&&((n=P({},r)).__v=r.__v+1,m.vnode&&m.vnode(n),ae(l,n,r,o.__n,l.ownerSVGElement!==void 0,32&r.__u?[s]:null,u,s??I(r),!!(32&r.__u),_),n.__v=r.__v,n.__.__k[n.__i]=n,qe(u,n,_),n.__e!=s&&Re(n)),D.length>t&&D.sort(se));X.__r=0}function je(e,t,o,n,r,s,l,u,_,a,h){var c,p,d,w,E,b=n&&n.__k||Me,y=t.length;for(o.__d=_,at(o,t,b),_=o.__d,c=0;c<y;c++)(d=o.__k[c])!=null&&typeof d!="boolean"&&typeof d!="function"&&(p=d.__i===-1?F:b[d.__i]||F,d.__i=c,ae(e,d,p,r,s,l,u,_,a,h),w=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&de(p.ref,null,d),h.push(d.ref,d.__c||w,d)),E==null&&w!=null&&(E=w),65536&d.__u||p.__k===d.__k?(w||p.__e!=_||(_=I(p)),_=ze(d,_,e)):typeof d.type=="function"&&d.__d!==void 0?_=d.__d:w&&(_=w.nextSibling),d.__d=void 0,d.__u&=-196609);o.__d=_,o.__e=E}function at(e,t,o){var n,r,s,l,u,_=t.length,a=o.length,h=a,c=0;for(e.__k=[],n=0;n<_;n++)l=n+c,(r=e.__k[n]=(r=t[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?M(null,r,null,null,null):_e(r)?M(B,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?M(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,u=dt(r,o,l,h),r.__i=u,s=null,u!==-1&&(h--,(s=o[u])&&(s.__u|=131072)),s==null||s.__v===null?(u==-1&&c--,typeof r.type!="function"&&(r.__u|=65536)):u!==l&&(u===l+1?c++:u>l?h>_-l?c+=u-l:c--:u<l?u==l-1&&(c=u-l):c=0,u!==n+c&&(r.__u|=65536))):(s=o[l])&&s.key==null&&s.__e&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=I(s)),ce(s,s,!1),o[l]=null,h--);if(h)for(n=0;n<a;n++)(s=o[n])!=null&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=I(s)),ce(s,s))}function ze(e,t,o){var n,r;if(typeof e.type=="function"){for(n=e.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=e,t=ze(n[r],t,o));return t}e.__e!=t&&(o.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function dt(e,t,o,n){var r=e.key,s=e.type,l=o-1,u=o+1,_=t[o];if(_===null||_&&r==_.key&&s===_.type&&!(131072&_.__u))return o;if(n>(_!=null&&!(131072&_.__u)?1:0))for(;l>=0||u<t.length;){if(l>=0){if((_=t[l])&&!(131072&_.__u)&&r==_.key&&s===_.type)return l;l--}if(u<t.length){if((_=t[u])&&!(131072&_.__u)&&r==_.key&&s===_.type)return u;u++}}return-1}function xe(e,t,o){t[0]==="-"?e.setProperty(t,o??""):e[t]=o==null?"":typeof o!="number"||_t.test(t)?o:o+"px"}function K(e,t,o,n,r){var s;e:if(t==="style")if(typeof o=="string")e.style.cssText=o;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)o&&t in o||xe(e.style,t,"");if(o)for(t in o)n&&o[t]===n[t]||xe(e.style,t,o[t])}else if(t[0]==="o"&&t[1]==="n")s=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=o,o?n?o.u=n.u:(o.u=Date.now(),e.addEventListener(t,s?ke:be,s)):e.removeEventListener(t,s?ke:be,s);else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,o))}}function be(e){if(this.l){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(m.event?m.event(e):e)}}function ke(e){if(this.l)return this.l[e.type+!0](m.event?m.event(e):e)}function ae(e,t,o,n,r,s,l,u,_,a){var h,c,p,d,w,E,b,y,k,A,j,N,ye,z,oe,C=t.type;if(t.constructor!==void 0)return null;128&o.__u&&(_=!!(32&o.__u),s=[u=t.__e=o.__e]),(h=m.__b)&&h(t);e:if(typeof C=="function")try{if(y=t.props,k=(h=C.contextType)&&n[h.__c],A=h?k?k.props.value:h.__:n,o.__c?b=(c=t.__c=o.__c).__=c.__E:("prototype"in C&&C.prototype.render?t.__c=c=new C(y,A):(t.__c=c=new Y(y,A),c.constructor=C,c.render=ht),k&&k.sub(c),c.props=y,c.state||(c.state={}),c.context=A,c.__n=n,p=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),C.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=P({},c.__s)),P(c.__s,C.getDerivedStateFromProps(y,c.__s))),d=c.props,w=c.state,c.__v=t,p)C.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(C.getDerivedStateFromProps==null&&y!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,A),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,A)===!1||t.__v===o.__v)){for(t.__v!==o.__v&&(c.props=y,c.state=c.__s,c.__d=!1),t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(q){q&&(q.__=t)}),j=0;j<c._sb.length;j++)c.__h.push(c._sb[j]);c._sb=[],c.__h.length&&l.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,A),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,w,E)})}if(c.context=A,c.props=y,c.__P=e,c.__e=!1,N=m.__r,ye=0,"prototype"in C&&C.prototype.render){for(c.state=c.__s,c.__d=!1,N&&N(t),h=c.render(c.props,c.state,c.context),z=0;z<c._sb.length;z++)c.__h.push(c._sb[z]);c._sb=[]}else do c.__d=!1,N&&N(t),h=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++ye<25);c.state=c.__s,c.getChildContext!=null&&(n=P(P({},n),c.getChildContext())),p||c.getSnapshotBeforeUpdate==null||(E=c.getSnapshotBeforeUpdate(d,w)),je(e,_e(oe=h!=null&&h.type===B&&h.key==null?h.props.children:h)?oe:[oe],t,o,n,r,s,l,u,_,a),c.base=t.__e,t.__u&=-161,c.__h.length&&l.push(c),b&&(c.__E=c.__=null)}catch(q){t.__v=null,_||s!=null?(t.__e=u,t.__u|=_?160:32,s[s.indexOf(u)]=null):(t.__e=o.__e,t.__k=o.__k),m.__e(q,t,o)}else s==null&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=ft(o.__e,t,o,n,r,s,l,_,a);(h=m.diffed)&&h(t)}function qe(e,t,o){t.__d=void 0;for(var n=0;n<o.length;n++)de(o[n],o[++n],o[++n]);m.__c&&m.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(s){s.call(r)})}catch(s){m.__e(s,r.__v)}})}function ft(e,t,o,n,r,s,l,u,_){var a,h,c,p,d,w,E,b=o.props,y=t.props,k=t.type;if(k==="svg"&&(r=!0),s!=null){for(a=0;a<s.length;a++)if((d=s[a])&&"setAttribute"in d==!!k&&(k?d.localName===k:d.nodeType===3)){e=d,s[a]=null;break}}if(e==null){if(k===null)return document.createTextNode(y);e=r?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,y.is&&y),s=null,u=!1}if(k===null)b===y||u&&e.data===y||(e.data=y);else{if(s=s&&R.call(e.childNodes),b=o.props||F,!u&&s!=null)for(b={},a=0;a<e.attributes.length;a++)b[(d=e.attributes[a]).name]=d.value;for(a in b)d=b[a],a=="children"||(a=="dangerouslySetInnerHTML"?c=d:a==="key"||a in y||K(e,a,null,d,r));for(a in y)d=y[a],a=="children"?p=d:a=="dangerouslySetInnerHTML"?h=d:a=="value"?w=d:a=="checked"?E=d:a==="key"||u&&typeof d!="function"||b[a]===d||K(e,a,d,b[a],r);if(h)u||c&&(h.__html===c.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(c&&(e.innerHTML=""),je(e,_e(p)?p:[p],t,o,n,r&&k!=="foreignObject",s,l,s?s[0]:o.__k&&I(o,0),u,_),s!=null)for(a=s.length;a--;)s[a]!=null&&Fe(s[a]);u||(a="value",w!==void 0&&(w!==e[a]||k==="progress"&&!w||k==="option"&&w!==b[a])&&K(e,a,w,b[a],!1),a="checked",E!==void 0&&E!==e[a]&&K(e,a,E,b[a],!1))}return e}function de(e,t,o){try{typeof e=="function"?e(t):e.current=t}catch(n){m.__e(n,o)}}function ce(e,t,o){var n,r;if(m.unmount&&m.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||de(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){m.__e(s,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(r=0;r<n.length;r++)n[r]&&ce(n[r],t,o||typeof e.type!="function");o||e.__e==null||Fe(e.__e),e.__=e.__e=e.__d=void 0}function ht(e,t,o){return this.constructor(e,o)}function Ke(e,t,o){var n,r,s,l;m.__&&m.__(e,t),r=(n=typeof o=="function")?null:o&&o.__k||t.__k,s=[],l=[],ae(t,e=(!n&&o||t).__k=We(B,null,[e]),r||F,F,t.ownerSVGElement!==void 0,!n&&o?[o]:r?null:t.firstChild?R.call(t.childNodes):null,s,!n&&o?o:r?r.__e:t.firstChild,n,l),qe(s,e,l)}function Ge(e,t){Ke(e,t,Ge)}function eo(e,t,o){var n,r,s,l,u=P({},e.props);for(s in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)s=="key"?n=t[s]:s=="ref"?r=t[s]:u[s]=t[s]===void 0&&l!==void 0?l[s]:t[s];return arguments.length>2&&(u.children=arguments.length>3?R.call(arguments,2):o),M(e.type,u,n||e.key,r||e.ref,null)}function Ve(e,t){var o={__c:t="__cC"+Ne++,__:e,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,s;return this.getChildContext||(r=[],(s={})[t]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&r.some(function(u){u.__e=!0,ie(u)})},this.sub=function(l){r.push(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){r.splice(r.indexOf(l),1),u&&u.call(l)}}),n.children}};return o.Provider.__=o.Consumer.contextType=o}R=Me.slice,m={__e:function(e,t,o,n){for(var r,s,l;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(e)),l=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,n||{}),l=r.__d),l)return r.__E=r}catch(u){e=u}throw e}},Ue=0,Y.prototype.setState=function(e,t){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},o),this.props)),e&&P(o,e),e!=null&&this.__v&&(t&&this._sb.push(t),ie(this))},Y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ie(this))},Y.prototype.render=B,D=[],Be=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,se=function(e,t){return e.__v.__b-t.__v.__b},X.__r=0,Ne=0;var O,v,ne,Ce,W=0,Ye=[],J=[],g=m,Ee=g.__b,Te=g.__r,Se=g.diffed,$e=g.__c,Pe=g.unmount,Ae=g.__;function ee(e,t){g.__h&&g.__h(v,e,W||t),W=0;var o=v.__H||(v.__H={__:[],__h:[]});return e>=o.__.length&&o.__.push({__V:J}),o.__[e]}function T(e){return W=1,Je(Xe,e)}function Je(e,t,o){var n=ee(O++,2);if(n.t=e,!n.__c&&(n.__=[o?o(t):Xe(void 0,t),function(u){var _=n.__N?n.__N[0]:n.__[0],a=n.t(_,u);_!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=v,!v.u)){var r=function(u,_,a){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(p){return!!p.__c});if(h.every(function(p){return!p.__N}))return!s||s.call(this,u,_,a);var c=!1;return h.forEach(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(c=!0)}}),!(!c&&n.__c.props===u)&&(!s||s.call(this,u,_,a))};v.u=!0;var s=v.shouldComponentUpdate,l=v.componentWillUpdate;v.componentWillUpdate=function(u,_,a){if(this.__e){var h=s;s=void 0,r(u,_,a),s=h}l&&l.call(this,u,_,a)},v.shouldComponentUpdate=r}return n.__N||n.__}function fe(e,t){var o=ee(O++,3);!g.__s&&pe(o.__H,t)&&(o.__=e,o.i=t,v.__H.__h.push(o))}function pt(e,t){var o=ee(O++,4);!g.__s&&pe(o.__H,t)&&(o.__=e,o.i=t,v.__h.push(o))}function Qe(e){return W=5,he(function(){return{current:e}},[])}function he(e,t){var o=ee(O++,7);return pe(o.__H,t)?(o.__V=e(),o.i=t,o.__h=e,o.__V):o.__}function mt(e,t){return W=8,he(function(){return e},t)}function wt(){for(var e;e=Ye.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Q),e.__H.__h.forEach(le),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){v=null,Ee&&Ee(e)},g.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ae&&Ae(e,t)},g.__r=function(e){Te&&Te(e),O=0;var t=(v=e.__c).__H;t&&(ne===v?(t.__h=[],v.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=J,o.__N=o.i=void 0})):(t.__h.forEach(Q),t.__h.forEach(le),t.__h=[],O=0)),ne=v},g.diffed=function(e){Se&&Se(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ye.push(t)!==1&&Ce===g.requestAnimationFrame||((Ce=g.requestAnimationFrame)||yt)(wt)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==J&&(o.__=o.__V),o.i=void 0,o.__V=J})),ne=v=null},g.__c=function(e,t){t.some(function(o){try{o.__h.forEach(Q),o.__h=o.__h.filter(function(n){return!n.__||le(n)})}catch(n){t.some(function(r){r.__h&&(r.__h=[])}),t=[],g.__e(n,o.__v)}}),$e&&$e(e,t)},g.unmount=function(e){Pe&&Pe(e);var t,o=e.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{Q(n)}catch(r){t=r}}),o.__H=void 0,t&&g.__e(t,o.__v))};var He=typeof requestAnimationFrame=="function";function yt(e){var t,o=function(){clearTimeout(n),He&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(o,100);He&&(t=requestAnimationFrame(o))}function Q(e){var t=v,o=e.__c;typeof o=="function"&&(e.__c=void 0,o()),v=t}function le(e){var t=v;e.__c=e.__(),v=t}function pe(e,t){return!e||e.length!==t.length||t.some(function(o,n){return o!==e[n]})}function Xe(e,t){return typeof t=="function"?t(e):t}let H;const vt=(e,t)=>{if(H=void 0,t&&t.type==="click"){if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button!==0)return e;const o=t.target.closest("a[href]");if(!o||o.origin!=location.origin||/^#/.test(o.getAttribute("href"))||!/^(_?self)?$/i.test(o.target))return e;H=!0,t.preventDefault(),t=o.href.replace(location.origin,"")}else typeof t=="string"?H=!0:t&&t.url?(H=!t.replace,t=t.url):t=location.pathname+location.search;return H===!0?history.pushState(null,"",t):H===!1&&history.replaceState(null,"",t),t};function Ze(e){const[t,o]=Je(vt,e.url||location.pathname+location.search),n=H===!0,r=he(()=>{const s=new URL(t,location.origin),l=s.pathname.replace(/(.)\/$/g,"$1");return{url:t,path:l,query:Object.fromEntries(s.searchParams),route:(u,_)=>o({url:u,replace:_}),wasPush:n}},[t]);return pt(()=>(addEventListener("click",o),addEventListener("popstate",o),()=>{removeEventListener("click",o),removeEventListener("popstate",o)}),[]),We(Ze.ctx.Provider,{value:r},e.children)}Promise.resolve();Ze.ctx=Ve({});Ve({});const De=m.__e;m.__e=(e,t,o)=>{if(e&&e.then){let n=t;for(;n=n.__;)if(n.__c&&n.__c.__c)return t.__e==null&&(t.__e=o.__e,t.__k=o.__k),t.__k||(t.__k=[]),n.__c.__c(e,t)}De&&De(e,t,o)};let Ie;function gt(e,t){if(typeof window>"u")return;let o=document.querySelector("script[type=isodata]");t=t||o&&o.parentNode||document.body,!Ie&&o?Ge(e,t):Ke(e,t),Ie=!0}function xt(e,t){return ut(()=>import("./prerender-f11e9bee.js"),[]).then(o=>o.default(e,t))}var bt=0;function i(e,t,o,n,r,s){var l,u,_={};for(u in t)u=="ref"?l=t[u]:_[u]=t[u];var a={type:e,props:_,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--bt,__i:-1,__u:0,__source:r,__self:s};if(typeof e=="function"&&(l=e.defaultProps))for(u in l)_[u]===void 0&&(_[u]=l[u]);return m.vnode&&m.vnode(a),a}function Le({title:e,description:t}){const o=[];if(Array.isArray(t))for(let n=0;n<t.length;n++){const r=t[n];o.push(i("p",{className:"text-lg text-gray-600",children:r}))}else o.push(i("p",{className:"text-lg text-gray-600",children:t}));return i("div",{className:"flex flex-col items-center",children:[i("h1",{className:"mb-2 mt-4 text-4xl font-bold text-gray-800",children:e}),o]})}const et="root@berikai.dev",f=({text:e})=>i("p",{class:"text-gray-300 text-sm",children:e}),kt=({input:e})=>i(f,{text:i(B,{children:[i("strong",{class:"text-green-500",children:et}),":",i("span",{class:"text-blue-500",children:"~"}),i("span",{class:"pr-1",children:"$"}),e]})}),Ct=({input:e})=>i(f,{text:i("span",{class:"flex flex-row",children:[i("strong",{class:"text-green-500",children:et}),":",i("span",{class:"text-blue-500",children:"~"}),i("span",{class:"pr-1",children:"$"}),e]})});let Z=0;function me({onClose:e=()=>{},onClick:t=()=>{},children:o=null,weight:n=96,height:r=64,full:s=!1,id:l=null}){const _=(()=>{const w=Qe();return fe(()=>{w.current&&(w.current.scrollTop=w.current.scrollHeight)},[]),w})(),[a,h]=T(s),[c,p]=T(null),d=()=>{if(a){if(h(!1),_.current&&_.current.setAttribute("style",c),document.getElementsByClassName("absolute z-[1000]").length>1)return;document.body.style.overflow="",window.scrollTo(0,Z)}else Z=window.scrollY,_.current&&p(_.current.getAttribute("style")),_.current&&_.current.removeAttribute("style"),window.scrollTo(0,0),document.body.style.overflow="hidden",h(!0)};return i("div",{ref:_,class:`flex flex-col ${a?"absolute z-[1000] top-0 left-0 h-full w-full":"resize m-2 sm:m-10 max-w-fit md:max-w-full"} h-${r} w-${n} rounded-lg shadow-lg bg-gray-900 overflow-hidden min-h-64 min-w-96`,children:[i("div",{class:"flex items-center justify-between px-4 py-2 bg-gray-800",children:[i("div",{class:"flex items-center space-x-2",children:[i("div",{class:"w-3 h-3 rounded-full bg-red-500 hover:bg-red-600",onClick:e}),i("div",{class:`w-3 h-3 rounded-full ${a?"bg-gray-600":"bg-yellow-400 hover:bg-yellow-500"}`}),i("div",{class:"w-3 h-3 rounded-full bg-green-500 hover:bg-green-600",onClick:d})]}),i("span",{class:"font-bold text-sm text-gray-200 opacity-10",children:["build ",20240714]})]}),i("div",{id:l,class:"flex-1 overflow-y-auto",onClick:t,children:o})]})}function tt({terminal:e,weight:t=null,height:o=null,full:n=!1}){t==null&&(t=96),o==null&&(o=64);const[r,s]=T(e.console),[l,u]=T(e.continue);e.setContinueState(u);const _=p=>{if(p.key==="Enter"){const d=p.target,w=d.value;d.value="",e.log(i(kt,{input:w})),e.execute(w),s([...e.console]),setTimeout(()=>{a&&a.current&&a.current.focus()},0)}if(p.key==="ArrowUp"){const d=p.target;e.history.cursor=Math.max(0,e.history.cursor-1),d.value=e.history[e.history.cursor]}if(p.key==="ArrowDown"){const d=p.target;e.history.cursor=Math.min(e.history.length-1,e.history.cursor+1),d.value=e.history[e.history.cursor]}},a=Qe(null),h=()=>i("input",{ref:a,autoFocus:!0,type:"text",class:"text-gray-300 bg-transparent outline-none border-none w-full",onKeyDown:_}),c=()=>i(Ct,{input:i(h,{})});return i(me,{id:e.id,full:n,weight:t,height:o,onClose:()=>e.id==0?alert("Cannot exit main terminal window."):U(e.id),onClick:()=>a.current.focus(),children:i("div",{class:"p-3",children:[r,l?"":i(c,{})]})})}function Et({id:e,weight:t=null,height:o=null,full:n=!1}){return t==null&&(t=96),o==null&&(o=64),i(me,{full:n,weight:t,height:o,onClose:()=>U(e),children:i("div",{class:"flex flex-col items-center justify-content",children:[i("div",{class:"flex flex-row bg-slate-800 p-1 m-1 items-center space-x-2",children:[i("div",{class:"w-3 h-3 bg-orange-400"}),i("div",{class:"flex flex-row space-x-1",children:[i("div",{class:"w-0 h-0  border-t-[6.6px] border-t-transparent border-l-[10px] border-l-gray-400 border-b-[6.6px] border-b-transparent"}),i("div",{class:"w-3 h-3 bg-gray-400"}),i("div",{class:"w-3 h-3 rounded-full bg-gray-400"})]}),i("div",{class:"flex flex-row space-x-1",children:[i("div",{class:"w-3 h-3 bg-orange-400"}),i("div",{class:"w-3 h-3 bg-orange-400"})]})]}),i("div",{class:"flex flex-row bg-slate-800 p-1 m-1 items-center space-x-36",children:"In progress..."})]})})}const L=()=>Math.random().toString(36).substring(7),Tt=e=>({description:"Open Ableton Live",hidden:!0,execute:()=>{e.console.push(i(f,{text:"Opening Ableton Live..."}));const t=L(),o=i(Et,{id:t},t);e.newProcess(t,o)}}),re=({text:e,delay:t,init_delay:o=0,cursor:n=""})=>{const[r,s]=T(""),[l,u]=T(0),[_,a]=T(!0),[h,c]=T(!1);return setTimeout(()=>{c(!0)},o),fe(()=>{if(h)if(l<e.length){const p=setTimeout(()=>{s(d=>d+e[l]),u(d=>d+1)},r[l-1]==","?t*15:t);return()=>clearTimeout(p)}else{const p=setTimeout(()=>{a(d=>!d)},500);return()=>clearTimeout(p)}},[l,_,h]),i(B,{children:[r,_?n:""]})},St=e=>({description:"About me",hidden:!1,execute:()=>{e.setContinue(!0),e.continue=!0;const t=["Hello! I'm Berikai, also known as Verdant.","I'm a software enthusiast and a bass music producer.","Type 'socials' to reach me out!"],o=document.getElementById(e.id.toString());e.console.push(i(f,{text:i(re,{text:t[0],delay:25})})),setTimeout(()=>o.scrollTo(0,o.scrollHeight),75),e.console.push(i(f,{text:i(re,{text:t[1],delay:25,init_delay:t[0].length*25+1e3})})),setTimeout(()=>o.scrollTo(0,o.scrollHeight),t[0].length*25+1e3+75),e.console.push(i(f,{text:i(re,{text:t[2],delay:25,init_delay:t[0].length*25+1e3+(t[1].length*25+1e3)})})),setTimeout(()=>o.scrollTo(0,o.scrollHeight),t[0].length*25+1e3+(t[1].length*25+1e3)+75),setTimeout(()=>{e.setContinue(!1),e.continue=!1},t[0].length*25+1e3+(t[1].length*25+1e3)+(t[2].length*25+1e3)),setTimeout(()=>o.scrollTo(0,o.scrollHeight),t[0].length*25+1e3+(t[1].length*25+1e3)+(t[2].length*25+1e3)+75)}});let Oe=null;function ot(){const t=Math.floor(Math.random()*5);return Oe==t?ot():(Oe=t,t)}function $t(){switch(ot()){case 0:return"bg-violet-500";case 1:return"bg-cyan-500";case 2:return"bg-green-400";case 3:return"bg-orange-400";case 4:return"bg-gray-100"}}let $=null;const Pt=e=>{$=e},At=e=>{e=="blue"?$("bg-cyan-500"):e=="green"?$("bg-green-400"):e=="orange"?$("bg-orange-400"):e=="violet"?$("bg-violet-500"):e=="pink"?$("bg-pink-400"):e=="default"?$("bg-gray-100"):e=="random"?$($t()):$(e)},Ht=e=>({description:"Change background color",hidden:!0,execute:t=>{t.length===0?e.console.push(i(f,{text:"Available arguments: default, random, blue, green, orange, violet, pink"})):At(t[0])}});function te({id:e,children:t,weight:o=null,height:n=null,full:r=!1}){return o==null&&(o=96),n==null&&(n=64),i(me,{full:r,weight:o,height:n,onClose:()=>U(e),children:t})}const Dt=e=>({description:"View my card",hidden:!1,execute:()=>{e.console.push(i(f,{text:"Opening card.berikai.dev..."}));const t=L();i("div",{class:"h-[52rem] w-[28rem]"});const o=i(te,{height:"[52rem]",weight:"[28rem]",id:t,children:i("iframe",{src:"https://card.berikai.dev",width:"100%",height:"100%"})},t);e.newProcess(t,o)}}),It=e=>({description:"Clear the console",hidden:!0,execute:()=>{e.clear()}}),Lt=e=>({description:"Open this project in VS Code",hidden:!0,execute:()=>{e.console.push(i(f,{text:"Opening VS Code..."})),setTimeout(()=>{window.scrollTo(0,0),document.body.style.overflow="hidden"},10);const t=L();i("div",{class:"h-[36rem] w-[48rem]"});const o=i(te,{full:!0,height:"[36rem]",weight:"[48rem]",id:t,children:i("iframe",{src:"https://github1s.com/Berikai/terminal-emulator-sandbox",width:"100%",height:"100%"})},t);e.newProcess(t,o)}}),Ot=e=>({description:"Echo the given text",hidden:!0,execute:(...t)=>{e.console.push(i(f,{text:t.join("").replaceAll(","," ")==""?"\v":t.join("").replaceAll(","," ")}))}}),Ut=e=>({description:"Exit the terminal window",hidden:!0,execute:()=>{e.exit()}}),Bt=e=>({description:"List available commands",hidden:!0,execute:t=>{if(t[0]=="--all"||t[0]=="-A"||t[0]=="-a")for(const o in e.commands)e.console.push(i(f,{text:`- ${o}: ${e.commands[o].description}`}));else{for(const o in e.commands)e.commands[o].hidden||e.console.push(i(f,{text:`- ${o}: ${e.commands[o].description}`}));e.console.push(i(f,{text:"Type 'help --all' for all available commands."}))}}}),G=[];function nt(){const t=Math.floor(Math.random()*8);return G.length===8&&(G.length=0),G.includes(t)?nt():(G.push(t),t)}function Nt(){switch(nt()){case 0:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1775443374&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 1:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1696386714&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 2:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1781142783&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 3:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1582366063&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 4:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1516105180&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 5:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1354894228&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 6:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1338231268&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 7:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1534539682&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"})}}const Mt=e=>({description:"Listen to my music",hidden:!1,execute:()=>{e.console.push(i(f,{text:"Opening Soundcloud..."}));const t=L(),o=i(te,{id:t,children:i(Nt,{})},t);e.newProcess(t,o)}});function Ft(){if(typeof window<"u"){const e=!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,t=typeof InstallTrigger<"u",o=/constructor/i.test(window.HTMLElement)||function(_){return _.toString()==="[object SafariRemoteNotification]"}(!window.safari||typeof safari<"u"&&window.safari.pushNotification),n=!!document.documentMode,r=!n&&!!window.StyleMedia,s=!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime),l=s&&navigator.userAgent.indexOf("Edg")!=-1,u=(s||e)&&!!window.CSS;return e?"Opera":t?"Firefox":o?"Safari":n?"Internet Explorer":r?"Edge":l?"Edge Chromium":s?"Chrome":u?"Blink":"Unknown"}}const Wt=new Date().valueOf(),Rt=e=>({description:"Show system information",hidden:!0,execute:()=>{const t=new Date().valueOf(),o=Math.floor((t-Wt)/(60*1e3));e.console.push(i(f,{text:`OS: ${Ft()}`})),e.console.push(i(f,{text:`Host: ${window.location.hostname}`})),e.console.push(i(f,{text:`Uptime: ${o} minutes`})),e.console.push(i(f,{text:`Packages: ${Object.keys(rt(null)).length}`}))}}),jt=e=>({description:"Open the same site in a new window",hidden:!0,execute:()=>{e.console.push(i(f,{text:"Opening berikai.dev..."}));const t=L(),o=i(te,{id:t,children:i("iframe",{src:"https://berikai.dev",width:"100%",height:"100%"})},t);e.newProcess(t,o)}}),zt=e=>({description:"Shutdown the system",hidden:!0,execute:()=>{window.open("about:blank","_self"),window.close()}}),V=e=>({pick:{description:"Pick a process window to be the first in the stack",hidden:!0,execute:t=>{x.some((o,n)=>{let r=t[0];if((r===""||r===void 0)&&(r=e.id),o[0]==r)return n==0?(e.console.push(i(f,{text:"Process already at the top of the stack."})),!0):(x.splice(n,1),x.unshift(o),we([...x]),e.console.push(i(f,{text:"Process moved to the top of the stack."})),!0)})||e.console.push(i(f,{text:"Process not found."}))}},list:{description:"List all open processes by ID",hidden:!0,execute:()=>{x.forEach(([t,o],n)=>{e.console.push(i(f,{text:n+1+". "+t}))})}},"show-id":{description:"Shows the process ID of the current terminal window",hidden:!0,execute:()=>{e.console.push(i(f,{text:e.id}))}},"change-id":{description:"Change the process ID of the current terminal window (0 = main terminal)",hidden:!0,execute:t=>{if(t[0]===""||t[0]===void 0){e.console.push(i(f,{text:"Please provide a new ID."}));return}x.forEach(([o,n])=>{if(o===t[0]){e.console.push(i(f,{text:"ID already exists."}));return}}),x.forEach(([o,n],r)=>{o===e.id&&(x[r][0]=t[0])}),e.id=t[0],e.console.push(i(f,{text:"ID changed."}))}},kill:{description:"Kill the process with the given ID",execute:t=>{if(t[0]===""||t[0]===void 0){e.console.push(i(f,{text:"Please provide a process ID."}));return}if(t[0]==0){e.console.push(i(f,{text:"Cannot kill main terminal window."}));return}U(t[0])}},killall:{description:"Kill all processes",hidden:!0,execute:()=>{e.console.push(i(f,{text:"Killing all processes..."}));const t=x.slice(0);for(const[o,n]of t)o!=0?U(o):e.console.push(i(f,{text:"Cannot kill main terminal window."}))}}}),qt=e=>({description:"Manage all open processes",hidden:!0,execute:t=>{if(t.length==0||t[0]=="help"){e.console.push(i(f,{text:"Usage: process [command] [args]"})),e.console.push(i(f,{text:"Commands:"}));for(const o in V(e))e.console.push(i(f,{text:`- ${o}: ${V(e)[o].description}`}))}else{const o=t.shift();V(e)[o]?V(e)[o].execute(t):(e.console.push(i(f,{text:`Command not found: ${o}.`})),e.console.push(i(f,{text:"Type 'process help' to list available commands."})))}}}),Kt=e=>({description:"Reboot the system",hidden:!0,execute:()=>{window.location.reload()}}),Gt=e=>({description:"Remove files or directories",hidden:!0,execute:t=>{if(t[0]===""||t[0]===void 0){e.console.push(i(f,{text:"Please provide a file or directory."}));return}if(t[0]==="-rf"&&t[1]==="/"){e.console.push(i(f,{text:"Permission denied."}));return}if(t[0]==="-rf"&&t[1]==="."){e.console.push(i(f,{text:"Permission denied."}));return}if(t[0]==="-rf"&&t[1]==="/*"){e.console.push(i(f,{text:"Permission denied."}));return}if(t[0]==="-rf"&&t[1]==="*"){e.console.push(i(f,{text:"Permission denied."}));return}}}),Vt=e=>({description:"Social media links",hidden:!1,execute:()=>{e.console.push(i(f,{text:i("a",{href:"https://www.github.com/Berikai",target:"_blank",rel:"noopener noreferrer",children:["[",i("span",{class:"text-gray-300",children:" Github "}),"]"]})})),e.console.push(i(f,{text:i("a",{href:"https://www.linkedin.com/in/berkay-eren-konuk",target:"_blank",rel:"noopener noreferrer",children:["[",i("span",{class:"text-blue-500",children:" LinkedIn "}),"]"]})})),e.console.push(i(f,{text:i("a",{href:"https://soundcloud.com/verdantbass",target:"_blank",rel:"noopener noreferrer",children:["[",i("span",{class:"text-orange-300",children:" Soundcloud "}),"]"]})})),e.console.push(i(f,{text:i("a",{href:"https://discord.com/users/verdantbass",target:"_blank",rel:"noopener noreferrer",children:["[",i("span",{class:"text-blue-300",children:" Discord "}),"]"]})})),e.console.push(i(f,{text:i("a",{href:"https://www.instagram.com/verdantbass",target:"_blank",rel:"noopener noreferrer",children:["[",i("span",{class:"text-pink-300",children:" Instagram "}),"]"]})})),e.console.push(i(f,{text:i("a",{href:"https://www.twitter.com/verdantbass",target:"_blank",rel:"noopener noreferrer",children:["[",i("span",{class:"text-cyan-300",children:" Twitter "}),"]"]})}))}}),Yt=e=>({description:"Run commands as superuser",hidden:!0,execute:t=>{e.commands[t[0]].execute(t.slice(1))}}),Jt=e=>({description:"Open a new terminal window",hidden:!0,execute:()=>{e.new()}}),rt=e=>({help:Bt(e),about:St(e),card:Dt(e),music:Mt(e),socials:Vt(e),code:Lt(e),paradox:jt(e),ableton:Tt(e),clear:It(e),exit:Ut(e),terminal:Jt(e),process:qt(e),background:Ht(e),neofetch:Rt(e),sudo:Yt(e),echo:Ot(e),rm:Gt(e),reboot:Kt(),poweroff:zt()});function S(e,t=!1){this.console=t?[i(f,{text:"Type 'help' to get started."})]:[],this.history=[""],this.history.cursor=0,this.commands=rt(this),this.id=e,this.continue=!1,this.setContinue=()=>{},this.setContinueState=o=>this.setContinue=o}S.prototype.newProcess=function(e,t){Zt(e,t)};S.prototype.new=function(){this.console.push(i(f,{text:"Opening new terminal window..."}));const e=L();this.newProcess(e,i(tt,{terminal:new S(e)},e))};S.prototype.exit=function(){if(this.id==0){this.console.push(i(f,{text:"Cannot exit main terminal window."}));return}this.console.push(i(f,{text:"Exiting terminal..."})),this.console.push(this.id),U(this.id)};S.prototype.getConsole=function(){return this.console};S.prototype.log=function(e){this.console.push(e)};S.prototype.clear=function(){this.console=[]};S.prototype.execute=function(e){if(e=="")return;this.history.push(e),this.history.cursor=this.history.length;const[t,...o]=e.split(" ");this.commands[t]?this.commands[t].execute(o):this.console.push(i(f,{text:`Command not found: ${t}`}))};const ue=L(),Qt=new S(ue,!0);let x=[[ue,i(tt,{terminal:Qt},ue)]],st=null;function Xt(e){st=e}function we(e){st(e)}function Zt(e,t){x.push([e,t]),we([...x])}function U(e){x.forEach(([t,o],n)=>{t==e&&x.splice(n,1)}),document.body.style.overflow!=""&&(document.getElementsByClassName("absolute z-[1000]").length>1||(document.body.style.overflow="",window.scrollTo(0,Z))),we([...x])}console.log("%cHey, wussup!","color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");function it(){const[e,t]=T(1),[o,n]=T(x),[r,s]=T("bg-gray-100");Xt(n),Pt(s);const l=new S(0),u=mt(_=>{_.key==="+"&&l.new(),_.key==="Escape"&&o[0]&&o.length>(o[0][0]==0?1:0)&&(o[o.length-1][0]!=0?x.pop():x.splice(o.length-2,1),n([...x]),setTimeout(()=>{document.body.style.overflow!=""&&document.getElementsByClassName("absolute z-[1000]").length==0&&(document.body.style.overflow="",window.scrollTo(0,Z))},10)),_.key&&e&&t(0),_.type==="mouseup"&&_.target.className.includes("w-3 h-3 rounded-full bg-green-")&&t(0),o.length===1&&_.type==="mouseup"&&_.target.className.includes("w-3 h-3 rounded-full bg-red-")&&(t(2),o[0][0]==0&&t(0)),o.length===0&&t(2)},[]);return fe(()=>(document.addEventListener("keydown",u,!1),document.addEventListener("mouseup",u,!1),()=>{document.removeEventListener("keydown",u,!1),document.removeEventListener("mouseup",u,!1)}),[u,o]),i("div",{class:r+" min-h-screen",children:i("div",{class:"flex flex-col items-center justify-center min-h-screen",children:[i("div",{class:"absolute",style:"margin-bottom:26rem;",children:e&&e!=2?i(Le,{title:"Hi, I'm Berikai",description:"Welcome to my terminal emulator sandbox"}):null}),e==2?i(Le,{title:"",description:["Press + key to open a new terminal"]}):null,i("div",{class:"flex flex-col lg:flex-row flex-wrap items-center justify-center z-10",children:o.map(([_,a])=>a)})]})})}typeof window<"u"&&gt(i(it,{}),document.getElementById("app"));async function to(e){await xt(i(it,{...e}))}export{eo as B,B as g,m as l,to as prerender,We as y};
//# sourceMappingURL=index-76a5649d.js.map
