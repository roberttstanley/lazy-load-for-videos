!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}({7:function(t,e,n){"use strict";n.r(e);n(8),n(9);var r=window.jQuery||window.$,o=function(){r("#tabs").tabs(),r("#tabs").on("tabsactivate",(function(t,e){var n=e.newTab.children("li a").first().attr("href");window.history.pushState(null,null,n),window.history.pushState?window.history.pushState(null,null,n):window.location.hash=n}))},i=function(){o(),r(".ll_picker_player_colour").wpColorPicker(),r(".toggle").on("click",(function(t){r(t.target).siblings(".toggle-me").toggle()}))};r(document).ready((function(){i()}))},8:function(t,e,n){},9:function(t,e,n){}});