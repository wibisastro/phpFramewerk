!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1);Vue.component(r.a.name,r.a)},function(e,n,t){"use strict";var r=t(8),o=t.n(r),a=t(9),s=!1,i=t(7)(o.a,a.a,!1,function(e){s||t(2)},null,null);i.options.__file="src/Breadcrumb.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.a=i.exports},function(e,n,t){var r=t(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(5)("24e9ae85",r,!1)},function(e,n,t){(e.exports=t(4)(!0)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"Breadcrumb.vue",sourceRoot:""}])},function(e,n){function t(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var a=r(o),s=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[t].concat(s).concat([a]).join("\n")}return[t].join("\n")}function r(e){return"/*# "+("sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e)))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},function(e,n,t){function r(e){for(var n=0;n<e.length;n++){var t=e[n],r=f[t.id];if(r){r.refs++;for(s=0;s<r.parts.length;s++)r.parts[s](t.parts[s]);for(;s<t.parts.length;s++)r.parts.push(a(t.parts[s]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var o=[],s=0;s<t.parts.length;s++)o.push(a(t.parts[s]));f[t.id]={id:t.id,refs:1,parts:o}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var n,t,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var a=p++;r=l||(l=o()),n=s.bind(null,r,a,!1),t=s.bind(null,r,a,!0)}else r=o(),n=i.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}function s(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(n,o);else{var a=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(a,s[n]):e.appendChild(a)}}function i(e,n){var t=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=t(6),f={},d=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){v=t;var o=c(e,n);return r(o),function(n){for(var t=[],a=0;a<o.length;a++){var s=o[a];(i=f[s.id]).refs--,t.push(i)}n?r(o=c(e,n)):o=[];for(a=0;a<t.length;a++){var i=t[a];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete f[i.id]}}}};var _=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n){e.exports=function(e,n){for(var t=[],r={},o=0;o<n.length;o++){var a=n[o],s=a[0],i={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(i):t.push(r[s]={id:s,parts:[i]})}return t}},function(e,n){e.exports=function(e,n,t,r,o,a){var s,i=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,i=e.default);var c="function"==typeof i?i.options:i;n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns,c._compiled=!0),t&&(c.functional=!0),o&&(c._scopeId=o);var f;if(a?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=f):r&&(f=r),f){var d=c.functional,l=d?c.render:c.beforeCreate;d?(c._injectStyles=f,c.render=function(e,n){return f.call(n),l(e,n)}):c.beforeCreate=l?[].concat(l,f):[f]}return{esModule:s,exports:i,options:c}}},function(e,n){e.exports={name:"breadcrumb",data:()=>({breadcrumb:"Bulma"})}},function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav",{staticClass:"breadcrumb has-arrow-separator",attrs:{"aria-label":"breadcrumbs"}},[t("ul",[t("li",[t("a",{attrs:{href:"#"}},[e._v("Bulma")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#"}},[e._v("Documentation")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#"}},[e._v("Components")])]),e._v(" "),t("li",{staticClass:"is-active"},[t("a",{attrs:{href:"#","aria-current":"page"}},[e._v("Breadcrumb")])])])])])}]};n.a=o}]);