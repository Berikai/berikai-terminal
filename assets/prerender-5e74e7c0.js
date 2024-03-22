import{l as h,y as Y,g as S,E as ne}from"./index-ed0a3da9.js";var V=/[\s\n\\/='"\0<>]/,W=/^(xlink|xmlns|xml)([A-Z])/,ae=/^accessK|^auto[A-Z]|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|readO|rowS|spellC|src[A-Z]|tabI|item[A-Z]/,oe=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,ie=/["&<]/;function U(e){if(e.length===0||ie.test(e)===!1)return e;for(var r=0,t=0,n="",i="";t<e.length;t++){switch(e.charCodeAt(t)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;default:continue}t!==r&&(n+=e.slice(r,t)),n+=i,r=t+1}return t!==r&&(n+=e.slice(r,t)),n}var q={},se=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),le=/[A-Z]/g;function ce(e){var r="";for(var t in e){var n=e[t];if(n!=null&&n!==""){var i=t[0]=="-"?t:q[t]||(q[t]=t.replace(le,"-$&").toLowerCase()),p=";";typeof n!="number"||i.startsWith("--")||se.has(i)||(p="px;"),r=r+i+":"+n+p}}return r||void 0}var z,b,L,k,B=[],J=Array.isArray,I=Object.assign;function ue(e,r){var t=h.__s;h.__s=!0,z=h.__b,b=h.diffed,L=h.__r,k=h.unmount;var n=Y(S,null);n.__k=[e];try{return x(e,r||G,!1,void 0,n,!1)}catch(i){throw i.then?new Error('Use "renderToStringAsync" for suspenseful rendering.'):i}finally{h.__c&&h.__c(e,B),h.__s=t,B.length=0}}function Q(){this.__d=!0}var G={};function M(e,r){var t,n=e.type,i=!0;return e.__c?(i=!1,(t=e.__c).state=t.__s):t=new n(e.props,r),e.__c=t,t.__v=e,t.props=e.props,t.context=r,t.__d=!0,t.state==null&&(t.state=G),t.__s==null&&(t.__s=t.state),n.getDerivedStateFromProps?t.state=I({},t.state,n.getDerivedStateFromProps(t.props,t.state)):i&&t.componentWillMount?(t.componentWillMount(),t.state=t.__s!==t.state?t.__s:t.state):!i&&t.componentWillUpdate&&t.componentWillUpdate(),L&&L(e),t.render(t.props,t.state,r)}function x(e,r,t,n,i,p){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":U(e+"");if(J(e)){var _,s="";i.__k=e;for(var m=0;m<e.length;m++){var F=e[m];if(F!=null&&typeof F!="boolean"){var N,C=x(F,r,t,n,i,p);typeof C=="string"?s+=C:(_=_||[],s&&_.push(s),s="",Array.isArray(C)?(N=_).push.apply(N,C):_.push(C))}}return _?(s&&_.push(s),_):s}if(e.constructor!==void 0)return"";e.__=i,z&&z(e);var j,a,f,l=e.type,u=e.props,D=r;if(typeof l=="function"){if(l===S){if(u.tpl){for(var E="",A=0;A<u.tpl.length;A++)if(E+=u.tpl[A],u.exprs&&A<u.exprs.length){var w=u.exprs[A];if(w==null)continue;typeof w!="object"||w.constructor!==void 0&&!J(w)?E+=w:E+=x(w,r,t,n,e,p)}return E}if(u.UNSTABLE_comment)return"<!--"+U(u.UNSTABLE_comment||"")+"-->";a=u.children}else{if((j=l.contextType)!=null){var R=r[j.__c];D=R?R.props.value:j.__}if(l.prototype&&typeof l.prototype.render=="function")a=M(e,D),f=e.__c;else{e.__c=f={__v:e,props:u,context:D,setState:Q,forceUpdate:Q,__d:!0,__h:[]};for(var K=0;f.__d&&K++<25;)f.__d=!1,L&&L(e),a=l.call(f,u,D);f.__d=!0}if(f.getChildContext!=null&&(r=I({},r,f.getChildContext())),(l.getDerivedStateFromError||f.componentDidCatch)&&h.errorBoundaries){var H="";a=a!=null&&a.type===S&&a.key==null?a.props.children:a;try{return H=x(a,r,t,n,e,p)}catch(g){return l.getDerivedStateFromError&&(f.__s=l.getDerivedStateFromError(g)),f.componentDidCatch&&f.componentDidCatch(g,{}),f.__d&&(a=M(e,r),(f=e.__c).getChildContext!=null&&(r=I({},r,f.getChildContext())),H=x(a=a!=null&&a.type===S&&a.key==null?a.props.children:a,r,t,n,e,p)),H}finally{b&&b(e),e.__=null,k&&k(e)}}}a=a!=null&&a.type===S&&a.key==null?a.props.children:a;var $=function(){return x(a,r,t,n,e,p)};try{var ee=$();return b&&b(e),e.__=null,k&&k(e),ee}catch(g){if(!p||!g||typeof g.then!="function")throw g;var te=function re(){try{return $()}catch(T){if(!T||typeof T.then!="function")throw T;return T.then(function(){return $()},function(){return re()})}};return g.then(function(){return te()})}}var y,v="<"+l,d="";for(var o in u){var c=u[o];switch(o){case"children":y=c;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in u)continue;o="for";break;case"className":if("class"in u)continue;o="class";break;case"defaultChecked":o="checked";break;case"defaultSelected":o="selected";break;case"defaultValue":case"value":switch(o="value",l){case"textarea":y=c;continue;case"select":n=c;continue;case"option":n!=c||"selected"in u||(v+=" selected")}break;case"dangerouslySetInnerHTML":d=c&&c.__html;continue;case"style":typeof c=="object"&&(c=ce(c));break;case"acceptCharset":o="accept-charset";break;case"httpEquiv":o="http-equiv";break;default:if(W.test(o))o=o.replace(W,"$1:$2").toLowerCase();else{if(V.test(o))continue;o[4]!=="-"&&o!=="draggable"||c==null?t?oe.test(o)&&(o=o==="panose1"?"panose-1":o.replace(/([A-Z])/g,"-$1").toLowerCase()):ae.test(o)&&(o=o.toLowerCase()):c+=""}}c!=null&&c!==!1&&typeof c!="function"&&(v=c===!0||c===""?v+" "+o:v+" "+o+'="'+U(c+"")+'"')}if(V.test(l))throw new Error(l+" is not a valid HTML tag name in "+v+">");if(d||(typeof y=="string"?d=U(y):y!=null&&y!==!1&&y!==!0&&(d=x(y,r,l==="svg"||l!=="foreignObject"&&t,n,e,p))),b&&b(e),e.__=null,k&&k(e),!d&&fe.has(l))return v+"/>";var O="</"+l+">",P=v+">";return Array.isArray(d)?[P].concat(d,[O]):typeof d!="string"?[P,d,O]:P+d+O}var fe=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);let Z;const X=h.vnode;h.vnode=e=>{X&&X(e),Z&&Z(e)};async function he(e,r){r=r||{};const t=r.maxDepth||10,n=r.props;let i=0;typeof e=="function"?e=Y(e,n):n&&(e=ne(e,n));const p=()=>{if(!(++i>t))try{return ue(e)}catch(s){if(s&&s.then)return s.then(p);throw s}};let _=new Set;Z=({type:s,props:m})=>{s==="a"&&m&&m.href&&(!m.target||m.target==="_self")&&_.add(m.href)};try{let s=await p();return s+='<script type="isodata"><\/script>',{html:s,links:_}}finally{Z=null}}export{he as default};
//# sourceMappingURL=prerender-5e74e7c0.js.map
