!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e,r){"use strict";r.d(e,"d",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return d}));var n=r(3),o=r(1);function i(t,e){var r=t;r.style.backgroundImage="url(".concat(e,")"),r.style.backgroundColor="#000",r.style.backgroundPosition="center center",r.style.backgroundRepeat="no-repeat"}function a(t){var e=function(t){var e=t&&t.parentNode&&t.parentNode.parentNode,r=e&&e.classList.contains("wp-has-aspect-ratio"),n=String(e.classList),o=n.substring(n.lastIndexOf("wp-embed-aspect-"),n.lastIndexOf(" ")).trim();if(r&&o){var i=o.replace("wp-embed-aspect-","").split("-"),a=Number(i[1])/Number(i[0]);return a.toString().split(".")[1].length>4?Math.round(1e4*a)/1e4:a}return.5625}(t);Object(o.a)("object, embed, iframe, .preview-lazyload, .lazy-load-div",t).forEach((function(t){var r=t,n=r.parentNode.clientWidth,o=Math.round(n*e);r.setAttribute("height","".concat(o,"px")),r.setAttribute("width","".concat(n,"px")),r.style.height="".concat(o,"px"),r.style.width="".concat(n,"px")}))}var c=function(t,e){for(var r=this,n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];var a=null;return function(){var n=!a,i=function(){return t.apply(r,o)};clearTimeout(a),a=setTimeout(i,e),n&&i()}}((function(){Object(o.a)(".container-lazyload").forEach(a)}),100);function u(){c()}function l(t){var e,r,o=t.load,i=t.pluginOptions;t.previewVideoSelector;o(),e=function(){o(),u()},(r=window.jQuery||window.$)&&r(document).ajaxStop((function(){e()})),Object(n.b)(u),window.addEventListener("resize",u),window.addEventListener("load",(function(){u()})),"function"==typeof i.callback&&i.callback()}function d(t,e){var r;function n(t){e(t),t.parentNode.classList.remove("js-lazyload--not-loaded"),a(t.parentNode)}if("IntersectionObserver"in window||"IntersectionObserverEntry"in window||"intersectionRatio"in window.IntersectionObserverEntry.prototype){r=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(r.unobserve(t.target),n(t.target))}))}),{root:null,rootMargin:"100px"}),t.forEach((function(t){r.observe(t)}))}else t.forEach(n)}},function(t,e,r){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(e.querySelectorAll(t))}},function(t,e,r){"use strict";function n(t){var e=document.createDocumentFragment(),r=document.createElement("div");for(r.innerHTML=t;r.childNodes[0];)e.appendChild(r.childNodes[0]);return e}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";function n(t){var e=window.jQuery||window.$;e&&e.fn&&e(window).bindFirst("load",t)}r.d(e,"b",(function(){return n})),e.a=function(){var t=window.jQuery||window.$;t&&t.fn&&(t.fn.bindFirst=function(e,r){var n=t(this);n.unbind(e,r),n.bind(e,r);var o=t._data(n[0]).events,i=o[e];i.unshift(i.pop()),o[e]=i})}},function(t,e,r){"use strict";function n(t){"complete"===document.readyState||"interactive"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";var n=r(0),o=r(2),i=r(1);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}window.showThumb=function(t){var e=t[0];lazyload_video_settings.vimeo.loadthumbnail&&Object(i.a)('[id="'.concat(e.id,'"]')).forEach((function(t){Object(n.d)(t,e.thumbnail_large)}))};var s,f={buttonstyle:"",playercolour:"",loadthumbnail:!0};function p(t){var e=t,r=l(e.getAttribute("id").match(/[\w]+/),1)[0];e.setAttribute("id",r),e.innerHTML="",function(t,e){var r=Object(o.a)('<div aria-hidden="true" class="lazy-load-div"></div>');if(t.appendChild(r),lazyload_video_settings.vimeo.loadthumbnail){var a=t.getAttribute("data-video-thumbnail");if(a)Object(n.a)(Object(i.a)('[id="'.concat(e,'"]')),(function(t){return Object(n.d)(t,a)}));else{var c=document.createElement("script");c.src="".concat("https://vimeo.com/api/v2/video/".concat(e,".json"),".json?callback=showThumb"),t.parentNode.insertBefore(c,t.firstChild)}}if(lazyload_video_settings.vimeo.show_title){var u=t.getAttribute("data-video-title"),l=Object(o.a)('<div aria-hidden="true" class="lazy-load-info"><span class="titletext vimeo">'.concat(u,"</span></div>"));t.appendChild(l)}s.buttonstyle&&t.classList.add(s.buttonstyle)}(e,r)}function b(){Object(i.a)(".".concat("preview-vimeo")).forEach((function(t){p(t),Object(n.c)(t.parentNode),t.addEventListener("click",(function(t){var e=t.currentTarget;if(t.preventDefault(),"a"===e.tagName.toLowerCase()){var r=e.getAttribute("id");e.classList.remove("preview-vimeo");var n="";s.playercolour!==n&&(s.playercolour=s.playercolour.toString().replace(/[.#]/g,""),n="&color=".concat(s.playercolour));var i,a=Object(o.a)('<iframe src="'.concat((i=r,"https://player.vimeo.com/video/".concat(i)),"?autoplay=1").concat(n,'" style="height:').concat(parseInt(e.clientHeight,10),'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen allow=autoplay></iframe>'));e.parentNode.replaceChild(a,e)}}))}))}e.a=function(t){s=c(c({},f),t),Object(n.b)({load:b,pluginOptions:s,previewVideoSelector:".".concat("preview-vimeo")})}},function(t,e,r){"use strict";var n=r(0),o=r(2),i=r(1);function a(t,e){return s(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||l(t,e)||u()}function c(t){return s(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||l(t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){if(Array.isArray(t))return t}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v,y={colour:"red",controls:!0,loadpolicy:!0,buttonstyle:"",preroll:"",postroll:"",thumbnailquality:"0",loadthumbnail:!0};function m(t){var e=t.pluginOptions,r=t.videoId,n=t.urlOptions,o=r,i={autoplay:1,modestbranding:1,rel:0};!1===e.controls&&(i.controls=0),e.loadpolicy&&(i.iv_load_policy=3),e.colour&&(i.color=e.colour);var a=e.preroll!==r&&e.preroll,c=e.postroll!==r&&e.postroll,u=[];a&&(o=a,u.push(r)),c&&u.push(c),u.length>0&&(i.playlist=u.join(","));var l,d=p(p({},i),n);return d.t&&(d.start=function(t){if(Number(t))return Number(t);var e=0,r=[3600,60,1],n=t.match(/(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(n)for(var o=1;o<n.length;o+=1)void 0!==n[o]&&(e+=Number(n[o])*r[o-1]);return e}(d.t)),"https://www.youtube-nocookie.com/embed/".concat(o,"?").concat((l=d,Object.keys(l).map((function(t){return"".concat(t,"=").concat(l[t])})).join("&")))}function h(t){var e=c(function(t){var e=new RegExp(["v=","/embed/","://youtu.be/"].join("|"),"i");return t.split(e)[1]}(t).split(/[&#?]/));return{videoId:e[0],queryParams:e.slice(1).reduce((function(t,e){var r=a(e.split("="),2),n=r[0],o=r[1];return t[n]=o,t}),{})}}function g(t){var e=h(t.getAttribute("href")).videoId,r="https://i2.ytimg.com/vi/".concat(e,"/").concat(v.thumbnailquality,".jpg"),i=Object(o.a)('<img style="display:none" src="'.concat(r,'">')).firstChild;i.addEventListener("load",(function(){120===i.clientWidth&&(r=r.replace("maxresdefault","0")),t.style.backgroundImage||Object(n.d)(t,r),i.parentNode.removeChild(i)})),document.body.appendChild(i)}function O(t){var e=t,r=h(e.getAttribute("href")),i=r.videoId,a=r.queryParams;e.innerHTML='<div aria-hidden="true" class="lazy-load-info"><span class="titletext youtube">'.concat(void 0!==e.getAttribute("data-video-title")?e.getAttribute("data-video-title"):e.innerHTML?e.innerHTML:"","</span></div>");var c=Object(o.a)('<div aria-hidden="true" class="lazy-load-div"></div>');e.insertBefore(c,e.firstChild),v.buttonstyle&&e.classList.add(v.buttonstyle),Object(n.c)(e.parentNode),e.addEventListener("click",(function(t){var r=t.currentTarget;if(t.preventDefault(),"a"===r.tagName.toLowerCase()){r.classList.remove("preview-youtube");var n=m({pluginOptions:v,videoId:i,urlOptions:a}),c=Object(o.a)('<iframe width="'.concat(parseInt(e.clientWidth,10),'" height="').concat(parseInt(e.clientHeight,10),'" style="vertical-align:top;" src="').concat(n,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'));r.parentNode.replaceChild(c,r)}}))}function w(){var t=Object(i.a)("a.lazy-load-youtube");t.forEach(O),v.loadthumbnail&&Object(n.a)(t,(function(t){return g(t)}))}e.a=function(t){v=p(p({},y),t),Object(n.b)({load:w,pluginOptions:v,previewVideoSelector:".".concat("preview-youtube")})}},,,,,function(t,e,r){"use strict";r.r(e);r(12);var n=r(3),o=r(4),i=r(5),a=r(6);Object(o.a)((function(){Object(n.a)(),Object(i.a)(lazyload_video_settings.vimeo),Object(a.a)(lazyload_video_settings.youtube)}))},function(t,e,r){}]);