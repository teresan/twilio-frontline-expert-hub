!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="/Users/tnascimento/repo/plugin-transfer-conversations/public",__webpack_require__(__webpack_require__.s=11)}([function(e,t){e.exports=React},function(e,t){let r=window.Twilio.Flex;window.Twilio&&window.Twilio.FlexProxy&&window.Twilio.FlexProxy["plugin-transfer-conversations"]&&(r=window.Twilio.FlexProxy["plugin-transfer-conversations"]),e.exports=r},function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"flush",(function(){return a})),r.d(t,"hydrate",(function(){return s})),r.d(t,"cx",(function(){return c})),r.d(t,"merge",(function(){return l})),r.d(t,"getRegisteredStyles",(function(){return u})),r.d(t,"injectGlobal",(function(){return f})),r.d(t,"keyframes",(function(){return d})),r.d(t,"css",(function(){return p})),r.d(t,"sheet",(function(){return h})),r.d(t,"caches",(function(){return g}));var n=r(10),i="undefined"!==typeof e?e:{},o=Object(n.a)(i),a=o.flush,s=o.hydrate,c=o.cx,l=o.merge,u=o.getRegisteredStyles,f=o.injectGlobal,d=o.keyframes,p=o.css,h=o.sheet,g=o.caches}.call(this,r(16))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadCSS=t.loadJS=t.getRuntimeUrl=t.getAssetsUrl=t.FlexPlugin=t.loadPlugin=void 0;var n=r(12);Object.defineProperty(t,"loadPlugin",{enumerable:!0,get:function(){return n.loadPlugin}}),Object.defineProperty(t,"FlexPlugin",{enumerable:!0,get:function(){return n.FlexPlugin}});var i=r(13);Object.defineProperty(t,"getAssetsUrl",{enumerable:!0,get:function(){return i.getAssetsUrl}}),Object.defineProperty(t,"getRuntimeUrl",{enumerable:!0,get:function(){return i.getRuntimeUrl}});var o=r(14);Object.defineProperty(t,"loadJS",{enumerable:!0,get:function(){return o.loadJS}});var a=r(15);Object.defineProperty(t,"loadCSS",{enumerable:!0,get:function(){return a.loadCSS}})},function(e,t,r){"use strict";t.a=function memoize(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return Math.random().toString(26).slice(2)}},function(e,t,r){"use strict";var n=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},function(e,t){e.exports=Redux},function(e,t,r){e.exports=function(){"use strict";return function(e){function toSheet(t){if(t)try{e(t+"}")}catch(r){}}return function ruleSheet(t,r,n,i,o,a,s,c,l,u){switch(t){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(n[0]+r),"";default:return r+(0===u?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(toSheet)}}}}()},function(e,t,r){e.exports=r(17)()},function(e,t,r){"use strict";var n=r(4),i={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var o=function murmurhash2_32_gc(e){for(var t,r=e.length,n=r^r,i=0;r>=4;)t=1540483477*(65535&(t=255&e.charCodeAt(i)|(255&e.charCodeAt(++i))<<8|(255&e.charCodeAt(++i))<<16|(255&e.charCodeAt(++i))<<24))+((1540483477*(t>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),r-=4,++i;switch(r){case 3:n^=(255&e.charCodeAt(i+2))<<16;case 2:n^=(255&e.charCodeAt(i+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(i)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),((n^=n>>>15)>>>0).toString(36)};var a=function stylis_min(e){function X(e,t,r){var n=t.trim().split(a);t=n;var i=n.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<i;++s)t[s]=Z(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<i;++s)for(var l=0;l<o;++l)t[c++]=Z(e[l]+" ",n[s],r).trim()}return t}function Z(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(s,"$1"+e.trim());case 58:return e.trim()+t.replace(s,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(s,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function P(e,t,r,a){var s=e+";",c=2*t+3*r+4*a;if(944===c){e=s.indexOf(":",9)+1;var l=s.substring(e,s.length-1).trim();return l=s.substring(0,e).trim()+l+";",1===k||2===k&&L(l,1)?"-webkit-"+l+l:l}if(0===k||2===k&&!L(s,1))return s;switch(c){case 1015:return 97===s.charCodeAt(10)?"-webkit-"+s+s:s;case 951:return 116===s.charCodeAt(3)?"-webkit-"+s+s:s;case 963:return 110===s.charCodeAt(5)?"-webkit-"+s+s:s;case 1009:if(100!==s.charCodeAt(4))break;case 969:case 942:return"-webkit-"+s+s;case 978:return"-webkit-"+s+"-moz-"+s+s;case 1019:case 983:return"-webkit-"+s+"-moz-"+s+"-ms-"+s+s;case 883:if(45===s.charCodeAt(8))return"-webkit-"+s+s;if(0<s.indexOf("image-set(",11))return s.replace(b,"$1-webkit-$2")+s;break;case 932:if(45===s.charCodeAt(4))switch(s.charCodeAt(5)){case 103:return"-webkit-box-"+s.replace("-grow","")+"-webkit-"+s+"-ms-"+s.replace("grow","positive")+s;case 115:return"-webkit-"+s+"-ms-"+s.replace("shrink","negative")+s;case 98:return"-webkit-"+s+"-ms-"+s.replace("basis","preferred-size")+s}return"-webkit-"+s+"-ms-"+s+s;case 964:return"-webkit-"+s+"-ms-flex-"+s+s;case 1023:if(99!==s.charCodeAt(8))break;return"-webkit-box-pack"+(l=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+s+"-ms-flex-pack"+l+s;case 1005:return i.test(s)?s.replace(n,":-webkit-")+s.replace(n,":-moz-")+s:s;case 1e3:switch(t=(l=s.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=s.replace(f,"tb");break;case 232:l=s.replace(f,"tb-rl");break;case 220:l=s.replace(f,"lr");break;default:return s}return"-webkit-"+s+"-ms-"+l+s;case 1017:if(-1===s.indexOf("sticky",9))break;case 975:switch(t=(s=e).length-10,c=(l=(33===s.charCodeAt(t)?s.substring(0,t):s).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:s=s.replace(l,"-webkit-"+l)+";"+s;break;case 207:case 102:s=s.replace(l,"-webkit-"+(102<c?"inline-":"")+"box")+";"+s.replace(l,"-webkit-"+l)+";"+s.replace(l,"-ms-"+l+"box")+";"+s}return s+";";case 938:if(45===s.charCodeAt(5))switch(s.charCodeAt(6)){case 105:return l=s.replace("-items",""),"-webkit-"+s+"-webkit-box-"+l+"-ms-flex-"+l+s;case 115:return"-webkit-"+s+"-ms-flex-item-"+s.replace(h,"")+s;default:return"-webkit-"+s+"-ms-flex-line-pack"+s.replace("align-content","").replace(h,"")+s}break;case 973:case 989:if(45!==s.charCodeAt(3)||122===s.charCodeAt(4))break;case 931:case 953:if(!0===m.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?P(e.replace("stretch","fill-available"),t,r,a).replace(":fill-available",":stretch"):s.replace(l,"-webkit-"+l)+s.replace(l,"-moz-"+l.replace("fill-",""))+s;break;case 962:if(s="-webkit-"+s+(102===s.charCodeAt(5)?"-ms-"+s:"")+s,211===r+a&&105===s.charCodeAt(13)&&0<s.indexOf("transform",10))return s.substring(0,s.indexOf(";",27)+1).replace(o,"$1-webkit-$2")+s}return s}function L(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),C(2!==t?n:n.replace(g,"$1"),r,t)}function ea(e,t){var r=P(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(p," or ($1)").substring(4):"("+t+")"}function H(e,t,r,n,i,o,a,s,c,l){for(var u,f=0,d=t;f<S;++f)switch(u=x[f].call(B,e,d,r,n,i,o,a,s,c,l)){case void 0:case!1:case!0:case null:break;default:d=u}if(d!==t)return d}function U(e){return void 0!==(e=e.prefix)&&(C=null,e?"function"!==typeof e?k=1:(k=2,C=e):k=0),U}function B(e,n){var i=e;if(33>i.charCodeAt(0)&&(i=i.trim()),i=[i],0<S){var o=H(-1,n,i,i,v,y,0,0,0,0);void 0!==o&&"string"===typeof o&&(n=o)}var a=function M(e,n,i,o,a){for(var s,f,p,h,g,m=0,b=0,x=0,C=0,A=0,j=0,R=p=s=0,E=0,F=0,I=0,N=0,q=i.length,z=q-1,D="",W="",$="",G="";E<q;){if(f=i.charCodeAt(E),E===z&&0!==b+C+x+m&&(0!==b&&(f=47===b?10:47),C=x=m=0,q++,z++),0===b+C+x+m){if(E===z&&(0<F&&(D=D.replace(r,"")),0<D.trim().length)){switch(f){case 32:case 9:case 59:case 13:case 10:break;default:D+=i.charAt(E)}f=59}switch(f){case 123:for(s=(D=D.trim()).charCodeAt(0),p=1,N=++E;E<q;){switch(f=i.charCodeAt(E)){case 123:p++;break;case 125:p--;break;case 47:switch(f=i.charCodeAt(E+1)){case 42:case 47:e:{for(R=E+1;R<z;++R)switch(i.charCodeAt(R)){case 47:if(42===f&&42===i.charCodeAt(R-1)&&E+2!==R){E=R+1;break e}break;case 10:if(47===f){E=R+1;break e}}E=R}}break;case 91:f++;case 40:f++;case 34:case 39:for(;E++<z&&i.charCodeAt(E)!==f;);}if(0===p)break;E++}switch(p=i.substring(N,E),0===s&&(s=(D=D.replace(t,"").trim()).charCodeAt(0)),s){case 64:switch(0<F&&(D=D.replace(r,"")),f=D.charCodeAt(1)){case 100:case 109:case 115:case 45:F=n;break;default:F=w}if(N=(p=M(n,F,p,f,a+1)).length,0<S&&(g=H(3,p,F=X(w,D,I),n,v,y,N,f,a,o),D=F.join(""),void 0!==g&&0===(N=(p=g.trim()).length)&&(f=0,p="")),0<N)switch(f){case 115:D=D.replace(d,ea);case 100:case 109:case 45:p=D+"{"+p+"}";break;case 107:p=(D=D.replace(c,"$1 $2"))+"{"+p+"}",p=1===k||2===k&&L("@"+p,3)?"@-webkit-"+p+"@"+p:"@"+p;break;default:p=D+p,112===o&&(W+=p,p="")}else p="";break;default:p=M(n,X(n,D,I),p,o,a+1)}$+=p,p=I=F=R=s=0,D="",f=i.charCodeAt(++E);break;case 125:case 59:if(1<(N=(D=(0<F?D.replace(r,""):D).trim()).length))switch(0===R&&(s=D.charCodeAt(0),45===s||96<s&&123>s)&&(N=(D=D.replace(" ",":")).length),0<S&&void 0!==(g=H(1,D,n,e,v,y,W.length,o,a,o))&&0===(N=(D=g.trim()).length)&&(D="\0\0"),s=D.charCodeAt(0),f=D.charCodeAt(1),s){case 0:break;case 64:if(105===f||99===f){G+=D+i.charAt(E);break}default:58!==D.charCodeAt(N-1)&&(W+=P(D,s,f,D.charCodeAt(2)))}I=F=R=s=0,D="",f=i.charCodeAt(++E)}}switch(f){case 13:case 10:47===b?b=0:0===1+s&&107!==o&&0<D.length&&(F=1,D+="\0"),0<S*O&&H(0,D,n,e,v,y,W.length,o,a,o),y=1,v++;break;case 59:case 125:if(0===b+C+x+m){y++;break}default:switch(y++,h=i.charAt(E),f){case 9:case 32:if(0===C+m+b)switch(A){case 44:case 58:case 9:case 32:h="";break;default:32!==f&&(h=" ")}break;case 0:h="\\0";break;case 12:h="\\f";break;case 11:h="\\v";break;case 38:0===C+b+m&&(F=I=1,h="\f"+h);break;case 108:if(0===C+b+m+_&&0<R)switch(E-R){case 2:112===A&&58===i.charCodeAt(E-3)&&(_=A);case 8:111===j&&(_=j)}break;case 58:0===C+b+m&&(R=E);break;case 44:0===b+x+C+m&&(F=1,h+="\r");break;case 34:case 39:0===b&&(C=C===f?0:0===C?f:C);break;case 91:0===C+b+x&&m++;break;case 93:0===C+b+x&&m--;break;case 41:0===C+b+m&&x--;break;case 40:if(0===C+b+m){if(0===s)switch(2*A+3*j){case 533:break;default:s=1}x++}break;case 64:0===b+x+C+m+R+p&&(p=1);break;case 42:case 47:if(!(0<C+m+x))switch(b){case 0:switch(2*f+3*i.charCodeAt(E+1)){case 235:b=47;break;case 220:N=E,b=42}break;case 42:47===f&&42===A&&N+2!==E&&(33===i.charCodeAt(N+2)&&(W+=i.substring(N,E+1)),h="",b=0)}}0===b&&(D+=h)}j=A,A=f,E++}if(0<(N=W.length)){if(F=n,0<S&&(void 0!==(g=H(2,W,F,e,v,y,N,o,a,o))&&0===(W=g).length))return G+W+$;if(W=F.join(",")+"{"+W+"}",0!==k*_){switch(2!==k||L(W,2)||(_=0),_){case 111:W=W.replace(u,":-moz-$1")+W;break;case 112:W=W.replace(l,"::-webkit-input-$1")+W.replace(l,"::-moz-$1")+W.replace(l,":-ms-input-$1")+W}_=0}}return G+W+$}(w,i,n,0,0);return 0<S&&(void 0!==(o=H(-2,a,i,i,v,y,a.length,0,0,0))&&(a=o)),"",_=0,y=v=1,a}var t=/^\0+/g,r=/[\0\r\f]/g,n=/: */g,i=/zoo|gra/,o=/([,: ])(transform)/g,a=/,\r+?/g,s=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,l=/::(place)/g,u=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,d=/\(\s*(.*)\s*\)/g,p=/([\s\S]*?);/g,h=/-self|flex-/g,g=/[^]*?(:[rp][el]a[\w-]+)[^]*/,m=/stretch|:\s*\w+\-(?:conte|avail)/,b=/([^-])(image-set\()/,y=1,v=1,_=0,k=1,w=[],x=[],S=0,C=null,O=0;return B.use=function T(e){switch(e){case void 0:case null:S=x.length=0;break;default:switch(e.constructor){case Array:for(var t=0,r=e.length;t<r;++t)T(e[t]);break;case Function:x[S++]=e;break;case Boolean:O=0|!!e}}return T},B.set=U,void 0!==e&&U(e),B},s=r(8),c=r.n(s),l=/[A-Z]|^ms/g,u=Object(n.a)((function(e){return e.replace(l,"-$&").toLowerCase()})),f=function processStyleValue(e,t){return null==t||"boolean"===typeof t?"":1===i[e]||45===e.charCodeAt(1)||isNaN(t)||0===t?t:t+"px"},d=function classnames(e){for(var t=e.length,r=0,n="";r<t;r++){var i=e[r];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"function":0,o=classnames([i()]);break;case"object":if(Array.isArray(i))o=classnames(i);else for(var a in o="",i)i[a]&&a&&(o&&(o+=" "),o+=a);break;default:o=i}o&&(n&&(n+=" "),n+=o)}}return n},p="undefined"!==typeof document;function makeStyleTag(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key||""),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),(void 0!==e.container?e.container:document.head).appendChild(t),t}var h=function(){function StyleSheet(e){this.isSpeedy=!0,this.tags=[],this.ctr=0,this.opts=e}var e=StyleSheet.prototype;return e.inject=function inject(){if(this.injected)throw new Error("already injected!");this.tags[0]=makeStyleTag(this.opts),this.injected=!0},e.speedy=function speedy(e){if(0!==this.ctr)throw new Error("cannot change speedy now");this.isSpeedy=!!e},e.insert=function insert(e,t){if(this.isSpeedy){var r=function sheetForTag(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(this.tags[this.tags.length-1]);try{r.insertRule(e,r.cssRules.length)}catch(i){0}}else{var n=makeStyleTag(this.opts);this.tags.push(n),n.appendChild(document.createTextNode(e+(t||"")))}this.ctr++,this.ctr%65e3===0&&this.tags.push(makeStyleTag(this.opts))},e.flush=function flush(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0,this.injected=!1},StyleSheet}();t.a=function createEmotion(e,t){if(void 0!==e.__SECRET_EMOTION__)return e.__SECRET_EMOTION__;void 0===t&&(t={});var r,n,i=t.key||"css",s=c()((function insertRule(e){r+=e,p&&g.insert(e,b)}));void 0!==t.prefix&&(n={prefix:t.prefix});var l={registered:{},inserted:{},nonce:t.nonce,key:i},g=new h(t);p&&g.inject();var m=new a(n);m.use(t.stylisPlugins)(s);var b="";function handleInterpolation(e,t){if(null==e)return"";switch(typeof e){case"boolean":return"";case"function":if(void 0!==e.__emotion_styles){var r=e.toString();return r}return handleInterpolation.call(this,void 0===this?e():e(this.mergedProps,this.context),t);case"object":return createStringFromObject.call(this,e);default:var n=l.registered[e];return!1===t&&void 0!==n?n:e}}var y,v,_=new WeakMap;function createStringFromObject(e){if(_.has(e))return _.get(e);var t="";return Array.isArray(e)?e.forEach((function(e){t+=handleInterpolation.call(this,e,!1)}),this):Object.keys(e).forEach((function(r){"object"!==typeof e[r]?void 0!==l.registered[e[r]]?t+=r+"{"+l.registered[e[r]]+"}":t+=u(r)+":"+f(r,e[r])+";":Array.isArray(e[r])&&"string"===typeof e[r][0]&&void 0===l.registered[e[r][0]]?e[r].forEach((function(e){t+=u(r)+":"+f(r,e)+";"})):t+=r+"{"+handleInterpolation.call(this,e[r],!1)+"}"}),this),_.set(e,t),t}var k=/label:\s*([^\s;\n{]+)\s*;/g,w=function createClassName(e,t){return o(e+t)+t},x=function createStyles(e){var t=!0,r="",n="";null==e||void 0===e.raw?(t=!1,r+=handleInterpolation.call(this,e,!1)):r+=e[0];for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return o.forEach((function(n,i){r+=handleInterpolation.call(this,n,46===r.charCodeAt(r.length-1)),!0===t&&void 0!==e[i+1]&&(r+=e[i+1])}),this),v=r,r=r.replace(k,(function(e,t){return n+="-"+t,""})),y=w(r,n),r};function insert(e,t){void 0===l.inserted[y]&&(r="",m(e,t),l.inserted[y]=r)}var S=function css(){var e=x.apply(this,arguments),t=i+"-"+y;return void 0===l.registered[t]&&(l.registered[t]=v),insert("."+t,e),t};function getRegisteredStyles(e,t){var r="";return t.split(" ").forEach((function(t){void 0!==l.registered[t]?e.push(t):r+=t+" "})),r}function merge(e,t){var r=[],n=getRegisteredStyles(r,e);return r.length<2?e:n+S(r,t)}function hydrateSingleId(e){l.inserted[e]=!0}if(p){var C=document.querySelectorAll("[data-emotion-"+i+"]");Array.prototype.forEach.call(C,(function(e){g.tags[0].parentNode.insertBefore(e,g.tags[0]),e.getAttribute("data-emotion-"+i).split(" ").forEach(hydrateSingleId)}))}var O={flush:function flush(){p&&(g.flush(),g.inject()),l.inserted={},l.registered={}},hydrate:function hydrate(e){e.forEach(hydrateSingleId)},cx:function cx(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return merge(d(t))},merge:merge,getRegisteredStyles:getRegisteredStyles,injectGlobal:function injectGlobal(){var e=x.apply(this,arguments);insert("",e)},keyframes:function keyframes(){var e=x.apply(this,arguments),t="animation-"+y;return insert("","@keyframes "+t+"{"+e+"}"),t},css:S,sheet:g,caches:l};return e.__SECRET_EMOTION__=O,O}},function(e,t,r){e.exports=r(19)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadPlugin=t.FlexPlugin=void 0;var n=function n(e){this.uniqueName="plugin-transfer-conversations",this.version="0.0.1",this.dependencies={"flex-plugin-scripts":"4.1.0","flex-plugin":"4.1.0","flex-ui":"1.27.0",react:"16.13.1","react-dom":"16.5.2"},this.name=e,console.log("loading "+this.name+"@"+this.version+" plugin")};t.FlexPlugin=n;t.loadPlugin=function(e){Twilio&&Twilio.Flex&&Twilio.Flex.Plugins?Twilio.Flex.Plugins.init(e):console.warn("This version of Flex does not appear to support plugins.")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAssetsUrl=t.getRuntimeUrl=void 0;t.getRuntimeUrl=function(){if(document&&document.currentScript){var e=document.currentScript;if("string"===typeof e.src){var t=e.src;return t.substr(0,t.lastIndexOf("/"))}}return""};t.getAssetsUrl=function(){return t.getRuntimeUrl()+"/assets"}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadJS=void 0;var i=n(r(5));t.loadJS=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){var t=document.createElement("script");t.id="external-js-"+i.default(),t.type="text/javascript",t.src=e,document.body.appendChild(t)}))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadCSS=void 0;var i=n(r(5));t.loadCSS=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){var t=document.createElement("link");t.id="external-css-"+i.default(),t.rel="stylesheet",t.type="text/css",t.media="all",t.href=e,document.head.appendChild(t)}))}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";var n=r(18);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,r,i,o,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(3);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _typeof(e){return(_typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!==typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}var i=r(0),o=r.n(i),a=r(1),s=r(6),c=r.n(s),l=r(7);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={isOpen:!0};var f=Object(l.combineReducers)({customTaskList:function reduce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISMISS_BAR":return _objectSpread2(_objectSpread2({},e),{},{isOpen:!1});default:return e}}});var d=r(2),p=r(9),h=r.n(p),g=r(4),m=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,b=Object(g.a)(m.test.bind(m));function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var y,v="__EMOTION_THEMING__",_=((y={})[v]=h.a.object,y);function setTheme(e){this.setState({theme:e})}var k=b,w=function testPickPropsOnComponent(e){return"theme"!==e&&"innerRef"!==e},x=function testAlwaysTrue(){return!0},S=function pickAssign(e,t){for(var r=2,n=arguments.length;r<n;r++){var i=arguments[r],o=void 0;for(o in i)e(o)&&(t[o]=i[o])}return t};var C,O=function createEmotionStyled(e,t){var r=function createStyled(n,i){var o,a,s,c;void 0!==i&&(o=i.e,a=i.label,s=i.target,c=n.__emotion_forwardProp&&i.shouldForwardProp?function(e){return n.__emotion_forwardProp(e)&&i.shouldForwardProp(e)}:i.shouldForwardProp);var l=n.__emotion_real===n,u=void 0===o&&l&&n.__emotion_base||n;return"function"!==typeof c&&(c="string"===typeof u&&u.charAt(0)===u.charAt(0).toLowerCase()?k:w),function(){var f=arguments,d=l&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==a&&d.push("label:"+a+";"),void 0===o)if(null==f[0]||void 0===f[0].raw)d.push.apply(d,f);else{d.push(f[0][0]);for(var p=f.length,h=1;h<p;h++)d.push(f[h],f[0][h])}else 0;var g=function(r){function Styled(){return r.apply(this,arguments)||this}_inheritsLoose(Styled,r);var n=Styled.prototype;return n.componentWillMount=function componentWillMount(){void 0!==this.context[v]&&(this.unsubscribe=this.context[v].subscribe(setTheme.bind(this)))},n.componentWillUnmount=function componentWillUnmount(){void 0!==this.unsubscribe&&this.context[v].unsubscribe(this.unsubscribe)},n.render=function render(){var r=this.props,n=this.state;this.mergedProps=S(x,{},r,{theme:null!==n&&n.theme||r.theme||{}});var i="",a=[];return r.className&&(i+=void 0===o?e.getRegisteredStyles(a,r.className):r.className+" "),i+=void 0===o?e.css.apply(this,d.concat(a)):o,void 0!==s&&(i+=" "+s),t.createElement(u,S(c,{},r,{className:i,ref:r.innerRef}))},Styled}(t.Component);return g.displayName=void 0!==a?a:"Styled("+("string"===typeof u?u:u.displayName||u.name||"Component")+")",void 0!==n.defaultProps&&(g.defaultProps=n.defaultProps),g.contextTypes=_,g.__emotion_styles=d,g.__emotion_base=u,g.__emotion_real=g,g.__emotion_forwardProp=c,Object.defineProperty(g,"toString",{value:function value(){return"."+s}}),g.withComponent=function(e,t){return r(e,void 0!==t?S(x,{},i,t):i).apply(void 0,d)},g}};return r}(d,o.a),A=function(e){_inherits(TransferButton,e);var t=_createSuper(TransferButton);function TransferButton(){return _classCallCheck(this,TransferButton),t.apply(this,arguments)}return _createClass(TransferButton,[{key:"render",value:function render(){var e=this,t=O("button")(C||(C=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n\t\tbackground: '#ccc';\n\t\tletter-spacing: 2px;\n\t\ttext-transform: uppercase;\n\t\tfont-weight: bold;\n\t\tmargin-right: 1em;\n\t\tpadding: 0px 16px;\n\t\theight: 28px;\n\t\tfont-size: 10px;\n\t\tborder-radius: 100px;\n\t\talign-self: center;\n\t\tborder-style: none;\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t}\n\t  "])));return o.a.createElement(t,{onClick:function onClick(){return a.Actions.invokeAction("TransferOnsite",e.props)}},"Transfer to onsite")}}]),TransferButton}(o.a.PureComponent),j=(Object(a.withTheme)(A),function(e){_inherits(TransferConversationsPlugin,e);var t=_createSuper(TransferConversationsPlugin);function TransferConversationsPlugin(){return _classCallCheck(this,TransferConversationsPlugin),t.call(this,"TransferConversationsPlugin")}return _createClass(TransferConversationsPlugin,[{key:"init",value:function init(e,t){this.registerReducers(t),e.Actions.registerAction("TransferOnsite",(function(e){return c()("".concat("https://frontline-service-4342-dev.twil.io","/receive-flex-transfer"),{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",mode:"no-cors",body:new URLSearchParams({attendeeNumber:"".concat(e.task.attributes.name)})}).catch((function(e){throw console.error(e),e}))})),e.Actions.addListener("afterTransferOnsite",(function(e){a.Actions.invokeAction("CompleteTask",e)})),e.TaskCanvasHeader.Content.add(o.a.createElement(A,{key:"transfer-onsite"}),{sortOrder:1})}},{key:"registerReducers",value:function registerReducers(e){e.store.addReducer?e.store.addReducer("transfer-conversations",f):console.error("You need FlexUI > 1.9.0 to use built-in redux; you are currently on ".concat(a.VERSION))}}]),TransferConversationsPlugin}(n.FlexPlugin));n.loadPlugin(j)}]);
//# sourceMappingURL=bundle.js.map