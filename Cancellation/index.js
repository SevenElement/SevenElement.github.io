!function(t){function n(n){for(var e,o,i=n[0],u=n[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);for(f&&f(n);s.length;)s.shift()()}var e={},r={0:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise((function(n,o){e=r[t]=[n,o]}));n.push(e[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(t){return o.p+""+t+".index.js"}(t);var f=new Error;u=function(n){c.onerror=c.onload=null,clearTimeout(s);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,e[1](f)}r[t]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(n)},o.m=t,o.c=e,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var f=u;o(o.s=57)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(27)("wks"),o=e(20),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(14)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(4),o=e(40),i=e(25),u=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(2),i=e(16),u=e(8),c=e(9),f=function(t,n,e){var s,a,l,p=t&f.F,v=t&f.G,d=t&f.S,h=t&f.P,y=t&f.B,m=t&f.W,g=v?o:o[n]||(o[n]={}),b=g.prototype,_=v?r:d?r[n]:(r[n]||{}).prototype;for(s in v&&(e=n),e)(a=!p&&_&&void 0!==_[s])&&c(g,s)||(l=a?_[s]:e[s],g[s]=v&&"function"!=typeof _[s]?e[s]:y&&a?i(l,r):m&&_[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[s]=l,t&f.R&&b&&!b[s]&&u(b,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(5),o=e(19);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(53),o=e(23);t.exports=function(t){return r(o(t))}},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(42),o=e(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(5).f,o=e(9),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(7),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(27)("keys"),o=e(20);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(2),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(12)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){"use strict";var r=e(18);function o(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new o(t)}},function(t,n,e){n.f=e(1)},function(t,n,e){var r=e(0),o=e(2),i=e(12),u=e(30),c=e(5).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,e){var r=e(23);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(61)(!0);e(39)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n,e){e(66);for(var r=e(0),o=e(8),i=e(11),u=e(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var s=c[f],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,n,e){var r=e(4),o=e(63),i=e(28),u=e(26)("IE_PROTO"),c=function(){},f=function(){var t,n=e(24)("iframe"),r=i.length;for(n.style.display="none",e(44).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(13),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){},function(t,n,e){"use strict";var r=e(12),o=e(6),i=e(41),u=e(8),c=e(11),f=e(62),s=e(21),a=e(54),l=e(1)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,d,h,y,m){f(e,n,d);var g,b,_,x=function(t){if(!p&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",S="values"==h,O=!1,P=t.prototype,j=P[l]||P["@@iterator"]||h&&P[h],T=j||x(h),E=h?S?x("entries"):T:void 0,M="Array"==n&&P.entries||j;if(M&&(_=a(M.call(new t)))!==Object.prototype&&_.next&&(s(_,w,!0),r||"function"==typeof _[l]||u(_,l,v)),S&&j&&"values"!==j.name&&(O=!0,T=function(){return j.call(this)}),r&&!m||!p&&!O&&P[l]||u(P,l,T),c[n]=T,c[w]=v,h)if(g={values:S?T:x("values"),keys:y?T:x("keys"),entries:E},m)for(b in g)b in P||i(P,b,g[b]);else o(o.P+o.F*(p||O),n,g);return g}},function(t,n,e){t.exports=!e(3)&&!e(14)((function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){t.exports=e(8)},function(t,n,e){var r=e(9),o=e(10),i=e(64)(!1),u=e(26)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(22),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(4),o=e(18),i=e(1)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(16),c=e(74),f=e(44),s=e(24),a=e(0),l=a.process,p=a.setImmediate,v=a.clearImmediate,d=a.MessageChannel,h=a.Dispatch,y=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},b=function(t){g.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),n)},r(y),y},v=function(t){delete m[t]},"process"==e(13)(l)?r=function(t){l.nextTick(u(g,t,1))}:h&&h.now?r=function(t){h.now(u(g,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=b,r=u(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(r=function(t){a.postMessage(t+"","*")},a.addEventListener("message",b,!1)):r="onreadystatechange"in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),g.call(t)}}:function(t){setTimeout(u(g,t,1),0)}),t.exports={set:p,clear:v}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(4),o=e(7),i=e(29);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(42),o=e(28).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){"use strict";n.__esModule=!0;var r=u(e(82)),o=u(e(84)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}n.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";n.__esModule=!0;var r,o=e(97),i=(r=o)&&r.__esModule?r:{default:r};n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){var r=e(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(9),o=e(32),i=e(26)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(36),o=e(1)("iterator"),i=e(11);t.exports=e(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(17),o=e(19),i=e(10),u=e(25),c=e(9),f=e(40),s=Object.getOwnPropertyDescriptor;n.f=e(3)?s:function(t,n){if(t=i(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){"use strict";var r,o=e(58);new((r=o)&&r.__esModule?r:{default:r}).default({gType:5,spriteMap:{0:{name:"cookie"},1:{name:"doughnut"},2:{name:"pizza"},3:{name:"strawberry"},4:{name:"macaron"}}}).on("onAllComplete",(function(){console.log("onAllComplete")}))},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=s(e(59)),o=s(e(50)),i=s(e(93)),u=s(e(51)),c=s(e(52));e(100);var f=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}(e(101));function s(t){return t&&t.__esModule?t:{default:t}}var a=function(){function t(n){var r=this;(0,u.default)(this,t),this.onLoad=function(){e.e(1).then(e.t.bind(null,102,7)).then((function(t){var n=t.default,e={showFPS:!1,referWidth:375,dpi:2,renderType:Tiny.RENDERER_TYPE.CANVAS,renderOptions:{backgroundColor:12303291}};r.options.canvasId&&(e.canvasId=r.options.canvasId),Tiny.app=new Tiny.Application(e),Tiny.resources=r.resources,Tiny.Loader.run({resources:(0,i.default)(r.resources),onProgress:function(t,n){r.run("onProgress",[t,n]),r.defaultProgress()},onAllComplete:function(){r.run("onAllComplete"),r.defaultComplete();var t=new n(r.options);Tiny.app.run(t),t.emit("transitionend")}}),document.addEventListener("pause",(function(t){Tiny.app.pause()}),!1),document.addEventListener("resume",(function(t){Tiny.app.resume()}),!1)}))},this.defaultProgress=function(t){var n=document.getElementById("progress"),e=document.getElementById("percent");n||((n=document.createElement("div")).className="bar",n.innerHTML='<i id="progress"></i>',document.body.appendChild(n)),e||((e=document.createElement("div")).id="percent",e.innerHTML="Loading..",document.body.appendChild(e));var r=~~t;e.innerHTML=r+"%",n.style&&(n.style.width=r+"%")},this.options=n,this.resources=n.resources||f,this.resources.effectPic||(this.options.effectPic=f.effectPic),this.resources.effectSound||(this.options.effectSound=f.effectSound),this.init(),this.handlers={}}return(0,c.default)(t,[{key:"init",value:function(){"object"===("undefined"==typeof Tiny?"undefined":(0,o.default)(Tiny))&&"object"===(0,o.default)(Tiny.audio)&&this.onLoad()}},{key:"loadScript",value:function(t){return new r.default((function(n){var e=document.createElement("script");e.onload=n,e.src=t,document.body.append(e)}))}},{key:"on",value:function(t,n){this.handlers[t]=(this.handlers[t]||[]).concat(n)}},{key:"off",value:function(t,n){this.handlers[t]=(this.handlers[t]||[]).filter((function(t){return t!==n}))}},{key:"run",value:function(t,n){this.handlers[t]}},{key:"defaultComplete",value:function(){var t=document.getElementById("progress"),n=document.getElementById("percent"),e=document.body;e.removeChild(n),e.removeChild(t.parentNode)}}]),t}();n.default=a},function(t,n,e){t.exports={default:e(60),__esModule:!0}},function(t,n,e){e(38),e(33),e(34),e(69),e(80),e(81),t.exports=e(2).Promise},function(t,n,e){var r=e(22),o=e(23);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),s=c.length;return f<0||f>=s?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(35),o=e(19),i=e(21),u={};e(8)(u,e(1)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(5),o=e(4),i=e(15);t.exports=e(3)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(10),o=e(43),i=e(65);t.exports=function(t){return function(n,e,u){var c,f=r(n),s=o(f.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if((c=f[a++])!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(22),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){"use strict";var r=e(67),o=e(68),i=e(11),u=e(10);t.exports=e(39)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r,o,i,u,c=e(12),f=e(0),s=e(16),a=e(36),l=e(6),p=e(7),v=e(18),d=e(70),h=e(71),y=e(45),m=e(46).set,g=e(75)(),b=e(29),_=e(47),x=e(76),w=e(48),S=f.TypeError,O=f.process,P=O&&O.versions,j=P&&P.v8||"",T=f.Promise,E="process"==a(O),M=function(){},L=o=b.f,k=!!function(){try{var t=T.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(M,M)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof n&&0!==j.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},A=function(t,n){if(!t._n){t._n=!0;var e=t._c;g((function(){for(var r=t._v,o=1==t._s,i=0,u=function(n){var e,i,u,c=o?n.ok:n.fail,f=n.resolve,s=n.reject,a=n.domain;try{c?(o||(2==t._h&&I(t),t._h=1),!0===c?e=r:(a&&a.enter(),e=c(r),a&&(a.exit(),u=!0)),e===n.promise?s(S("Promise-chain cycle")):(i=C(e))?i.call(e,f,s):f(e)):s(r)}catch(t){a&&!u&&a.exit(),s(t)}};e.length>i;)u(e[i++]);t._c=[],t._n=!1,n&&!t._h&&F(t)}))}},F=function(t){m.call(f,(function(){var n,e,r,o=t._v,i=X(t);if(i&&(n=_((function(){E?O.emit("unhandledRejection",o,t):(e=f.onunhandledrejection)?e({promise:t,reason:o}):(r=f.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=E||X(t)?2:1),t._a=void 0,i&&n.e)throw n.v}))},X=function(t){return 1!==t._h&&0===(t._a||t._c).length},I=function(t){m.call(f,(function(){var n;E?O.emit("rejectionHandled",t):(n=f.onrejectionhandled)&&n({promise:t,reason:t._v})}))},N=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),A(n,!0))},R=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw S("Promise can't be resolved itself");(n=C(t))?g((function(){var r={_w:e,_d:!1};try{n.call(t,s(R,r,1),s(N,r,1))}catch(t){N.call(r,t)}})):(e._v=t,e._s=1,A(e,!1))}catch(t){N.call({_w:e,_d:!1},t)}}};k||(T=function(t){d(this,T,"Promise","_h"),v(t),r.call(this);try{t(s(R,this,1),s(N,this,1))}catch(t){N.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(77)(T.prototype,{then:function(t,n){var e=L(y(this,T));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=E?O.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&A(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(R,t,1),this.reject=s(N,t,1)},b.f=L=function(t){return t===T||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!k,{Promise:T}),e(21)(T,"Promise"),e(78)("Promise"),u=e(2).Promise,l(l.S+l.F*!k,"Promise",{reject:function(t){var n=L(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!k),"Promise",{resolve:function(t){return w(c&&this===u?T:this,t)}}),l(l.S+l.F*!(k&&e(79)((function(t){T.all(t).catch(M)}))),"Promise",{all:function(t){var n=this,e=L(n),r=e.resolve,o=e.reject,i=_((function(){var e=[],i=0,u=1;h(t,!1,(function(t){var c=i++,f=!1;e.push(void 0),u++,n.resolve(t).then((function(t){f||(f=!0,e[c]=t,--u||r(e))}),o)})),--u||r(e)}));return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=L(n),r=e.reject,o=_((function(){h(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(16),o=e(72),i=e(73),u=e(4),c=e(43),f=e(55),s={},a={};(n=t.exports=function(t,n,e,l,p){var v,d,h,y,m=p?function(){return t}:f(t),g=r(e,l,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=c(t.length);v>b;b++)if((y=n?g(u(d=t[b])[0],d[1]):g(t[b]))===s||y===a)return y}else for(h=m.call(t);!(d=h.next()).done;)if((y=o(h,g,d.value,n))===s||y===a)return y}).BREAK=s,n.RETURN=a},function(t,n,e){var r=e(4);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(11),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(0),o=e(46).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,f="process"==e(13)(u);t.exports=function(){var t,n,e,s=function(){var r,o;for(f&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(f)e=function(){u.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var a=c.resolve(void 0);e=function(){a.then(s)}}else e=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(0).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){var r=e(8);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(0),o=e(2),i=e(5),u=e(3),c=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(6),o=e(2),i=e(0),u=e(45),c=e(48);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then((function(){return e}))}:t,e?function(e){return c(n,t()).then((function(){throw e}))}:t)}})},function(t,n,e){"use strict";var r=e(6),o=e(29),i=e(47);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){t.exports={default:e(83),__esModule:!0}},function(t,n,e){e(33),e(34),t.exports=e(30).f("iterator")},function(t,n,e){t.exports={default:e(85),__esModule:!0}},function(t,n,e){e(86),e(38),e(91),e(92),t.exports=e(2).Symbol},function(t,n,e){"use strict";var r=e(0),o=e(9),i=e(3),u=e(6),c=e(41),f=e(87).KEY,s=e(14),a=e(27),l=e(21),p=e(20),v=e(1),d=e(30),h=e(31),y=e(88),m=e(89),g=e(4),b=e(7),_=e(32),x=e(10),w=e(25),S=e(19),O=e(35),P=e(90),j=e(56),T=e(37),E=e(5),M=e(15),L=j.f,k=E.f,C=P.f,A=r.Symbol,F=r.JSON,X=F&&F.stringify,I=v("_hidden"),N=v("toPrimitive"),R={}.propertyIsEnumerable,B=a("symbol-registry"),D=a("symbols"),K=a("op-symbols"),G=Object.prototype,V="function"==typeof A&&!!T.f,W=r.QObject,H=!W||!W.prototype||!W.prototype.findChild,z=i&&s((function(){return 7!=O(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=L(G,n);r&&delete G[n],k(t,n,e),r&&t!==G&&k(G,n,r)}:k,J=function(t){var n=D[t]=O(A.prototype);return n._k=t,n},Z=V&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},U=function(t,n,e){return t===G&&U(K,n,e),g(t),n=w(n,!0),g(e),o(D,n)?(e.enumerable?(o(t,I)&&t[I][n]&&(t[I][n]=!1),e=O(e,{enumerable:S(0,!1)})):(o(t,I)||k(t,I,S(1,{})),t[I][n]=!0),z(t,n,e)):k(t,n,e)},Y=function(t,n){g(t);for(var e,r=y(n=x(n)),o=0,i=r.length;i>o;)U(t,e=r[o++],n[e]);return t},q=function(t){var n=R.call(this,t=w(t,!0));return!(this===G&&o(D,t)&&!o(K,t))&&(!(n||!o(this,t)||!o(D,t)||o(this,I)&&this[I][t])||n)},Q=function(t,n){if(t=x(t),n=w(n,!0),t!==G||!o(D,n)||o(K,n)){var e=L(t,n);return!e||!o(D,n)||o(t,I)&&t[I][n]||(e.enumerable=!0),e}},$=function(t){for(var n,e=C(x(t)),r=[],i=0;e.length>i;)o(D,n=e[i++])||n==I||n==f||r.push(n);return r},tt=function(t){for(var n,e=t===G,r=C(e?K:x(t)),i=[],u=0;r.length>u;)!o(D,n=r[u++])||e&&!o(G,n)||i.push(D[n]);return i};V||(c((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===G&&n.call(K,e),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),z(this,t,S(1,e))};return i&&H&&z(G,t,{configurable:!0,set:n}),J(t)}).prototype,"toString",(function(){return this._k})),j.f=Q,E.f=U,e(49).f=P.f=$,e(17).f=q,T.f=tt,i&&!e(12)&&c(G,"propertyIsEnumerable",q,!0),d.f=function(t){return J(v(t))}),u(u.G+u.W+u.F*!V,{Symbol:A});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)v(nt[et++]);for(var rt=M(v.store),ot=0;rt.length>ot;)h(rt[ot++]);u(u.S+u.F*!V,"Symbol",{for:function(t){return o(B,t+="")?B[t]:B[t]=A(t)},keyFor:function(t){if(!Z(t))throw TypeError(t+" is not a symbol!");for(var n in B)if(B[n]===t)return n},useSetter:function(){H=!0},useSimple:function(){H=!1}}),u(u.S+u.F*!V,"Object",{create:function(t,n){return void 0===n?O(t):Y(O(t),n)},defineProperty:U,defineProperties:Y,getOwnPropertyDescriptor:Q,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=s((function(){T.f(1)}));u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return T.f(_(t))}}),F&&u(u.S+u.F*(!V||s((function(){var t=A();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}))),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(b(n)||void 0!==t)&&!Z(t))return m(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!Z(n))return n}),r[1]=n,X.apply(F,r)}}),A.prototype[N]||e(8)(A.prototype,N,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(20)("meta"),o=e(7),i=e(9),u=e(5).f,c=0,f=Object.isExtensible||function(){return!0},s=!e(14)((function(){return f(Object.preventExtensions({}))})),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";a(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;a(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&f(t)&&!i(t,r)&&a(t),t}}},function(t,n,e){var r=e(15),o=e(37),i=e(17);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&n.push(u);return n}},function(t,n,e){var r=e(13);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(10),o=e(49).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,n,e){e(31)("asyncIterator")},function(t,n,e){e(31)("observable")},function(t,n,e){t.exports={default:e(94),__esModule:!0}},function(t,n,e){e(95),t.exports=e(2).Object.values},function(t,n,e){var r=e(6),o=e(96)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},function(t,n,e){var r=e(3),o=e(15),i=e(10),u=e(17).f;t.exports=function(t){return function(n){for(var e,c=i(n),f=o(c),s=f.length,a=0,l=[];s>a;)e=f[a++],r&&!u.call(c,e)||l.push(t?[e,c[e]]:c[e]);return l}}},function(t,n,e){t.exports={default:e(98),__esModule:!0}},function(t,n,e){e(99);var r=e(2).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(6);r(r.S+r.F*!e(3),"Object",{defineProperty:e(5).f})},function(t,n,e){},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.cookie="https://img.alicdn.com/tfs/TB1F1evX.T1gK0jSZFrXXcNCXXa-200-200.png",n.doughnut="https://img.alicdn.com/tfs/TB143ysXV67gK0jSZPfXXahhFXa-200-200.png",n.pizza="https://img.alicdn.com/tfs/TB1IP1vX4D1gK0jSZFyXXciOVXa-200-200.png",n.strawberry="https://img.alicdn.com/tfs/TB1ngKwX8v0gK0jSZKbXXbK2FXa-200-200.png",n.macaron="https://img.alicdn.com/tfs/TB14bCwX7L0gK0jSZFtXXXQCXXa-200-200.png",n.effectPic="https://img.alicdn.com/tfs/TB1pTSwX8r0gK0jSZFnXXbRRXXa-32-32.png",n.effectSound="https://nr-op.elemecdn.com/1562924552015589.mp3?response-content-disposition=attachment; filename=buck.mp3"}]);