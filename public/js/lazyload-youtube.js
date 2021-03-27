!function(){"use strict";var t,e={717:function(t,e,r){var n=r(71),o=r(345),i=r(525),a=r(580);function l(t,e){return f(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}(t,e)||d(t,e)||u()}function c(t){return f(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||d(t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t){if(Array.isArray(t))return t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b,h={colour:"red",controls:!0,loadpolicy:!0,buttonstyle:"",preroll:"",postroll:"",thumbnailquality:"0",loadthumbnail:!0,cookies:!1};function m(t){var e=t.pluginOptions,r=t.videoId,n=t.urlOptions,o=r,i={autoplay:1,modestbranding:1,rel:0};!1===e.controls&&(i.controls=0),e.loadpolicy&&(i.iv_load_policy=3),e.colour&&(i.color=e.colour);var a=e.preroll!==r&&e.preroll,l=e.postroll!==r&&e.postroll,c=[];a&&(o=a,c.push(r)),l&&c.push(l),c.length>0&&(i.playlist=c.join(","));var u=v(v({},i),n);u.t&&(u.start=function(t){if(Number(t))return Number(t);var e=0,r=[3600,60,1],n=t.match(/(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(n)for(var o=1;o<n.length;o+=1)void 0!==n[o]&&(e+=Number(n[o])*r[o-1]);return e}(u.t));var d,s="www.youtube".concat(e.cookies?"":"-nocookie",".com");return"https://".concat(s,"/embed/").concat(o,"?").concat((d=u,Object.keys(d).map((function(t){return"".concat(t,"=").concat(d[t])})).join("&")))}function g(t){var e=c(function(t){var e=new RegExp(["v=","/embed/","://youtu.be/"].join("|"),"i");return t.split(e)[1]}(t).split(/[&#?]/));return{videoId:e[0],queryParams:e.slice(1).reduce((function(t,e){var r=l(e.split("="),2),n=r[0],o=r[1];return t[n]=o,t}),{})}}function O(t){var e=g(t.getAttribute("href")).videoId,r="https://i2.ytimg.com/vi/".concat(e,"/").concat(b.thumbnailquality,".jpg"),n=(0,i.Z)('<img style="display:none" src="'.concat(r,'">')).firstChild;n.addEventListener("load",(function(){120===n.clientWidth&&(r=r.replace("maxresdefault","0")),t.style.backgroundImage||(0,o.X9)(t,r),n.parentNode.removeChild(n)})),document.body.appendChild(n)}function j(t){var e=t,r=g(e.getAttribute("href")),n=r.videoId,a=r.queryParams;var l=void 0!==e.getAttribute("data-video-title")?e.getAttribute("data-video-title"):e.innerHTML?e.innerHTML:"";e.innerHTML=l.length>0?'\n    <div aria-hidden="true" class="lazy-load-info">\n      <div class="titletext youtube">'.concat(l,"</div>\n    </div>"):"";var c=(0,i.Z)('<div aria-hidden="true" class="lazy-load-div"></div>');e.insertBefore(c,e.firstChild),b.buttonstyle&&e.classList.add(b.buttonstyle);var u=(0,i.Z)('<div aria-hidden="true" class="lazy-load-info-extra">\n      <div class="overlaytext">'.concat(b.overlaytext,"</div>\n    </div>"));b.overlaytext.length>0&&e.parentNode.insertBefore(u,null),(0,o.Ph)(e.parentNode),e.addEventListener("click",(function(t){var r=t.currentTarget;if(t.preventDefault(),"a"===r.tagName.toLowerCase()){r.classList.remove("preview-youtube");var o=m({pluginOptions:b,videoId:n,urlOptions:a}),l=(0,i.Z)('<iframe width="'.concat(parseInt(e.clientWidth,10),'" height="').concat(parseInt(e.clientHeight,10),'" style="vertical-align:top;" src="').concat(o,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')),c=r.parentNode;c&&c.replaceChild(l,r)}}),!0)}function w(t){var e=t.rootNode,r=t.loadthumbnail,n=(0,a.Z)("a.lazy-load-youtube",e);n.forEach(j),r&&(0,o.bE)(n,(function(t){return O(t)}))}var P=function(t){b=v(v({},h),t),(0,o.S1)({load:w,pluginOptions:b})};(0,n.Z)((function(){P(window.llvConfig.youtube)}))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=function(e,r,o,i){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],i=t[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(l=!1,i<a&&(a=i));l&&(t.splice(u--,1),e=o())}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={108:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],l=r[1],c=r[2],u=0;for(o in l)n.o(l,o)&&(n.m[o]=l[o]);for(c&&c(n),e&&e(r);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[a[u]]=0;n.O()},r=self.webpackChunklazy_load_for_videos=self.webpackChunklazy_load_for_videos||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var o=n.O(void 0,[358],(function(){return n(717)}));o=n.O(o)}();