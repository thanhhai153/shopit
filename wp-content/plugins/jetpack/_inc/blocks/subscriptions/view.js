!function(){var e={63166:function(e,t,r){"use strict";r.d(t,{EJ:function(){return o}});let n="";function o(e){if("https://subscribe.wordpress.com"===e.origin&&e.data){const t=JSON.parse(e.data);t&&t.result&&t.result.jwt_token&&(n=t.result.jwt_token,s(n)),t&&"close"===t.action&&n?window.location.reload():t&&"close"===t.action&&(window.removeEventListener("message",o),tb_remove&&tb_remove())}}const s=function(e){const t=new Date;t.setTime(t.getTime()+31536e6),document.cookie="jp-premium-content-session="+e+"; expires="+t.toGMTString()+"; path=/"}},80425:function(e,t,r){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(r.p=window.Jetpack_Block_Assets_Base_Url.url)},47701:function(e){"use strict";e.exports=window.wp.domReady}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"}(),function(){"use strict";r(80425)}(),function(){"use strict";var e=r(47701),t=r.n(e),n=r(63166);function o(e){const t="https://subscribe.wordpress.com/memberships/?"+new URLSearchParams(e).toString();window.scrollTo(0,0),tb_show(null,t+"&TB_iframe=true",null),window.addEventListener("message",n.EJ,!1);document.querySelector("#TB_window").classList.add("jetpack-memberships-modal"),window.scrollTo(0,0)}t()((function(){const e=document.querySelector("#jp_retrieve_subscriptions_link");e&&e.addEventListener("click",(function(e){e.preventDefault(),function(){const e=document.querySelector(".wp-block-jetpack-subscriptions__container form");if(!e)return;if(!e.checkValidity())return void e.reportValidity();o({email:e.querySelector("input[type=email]").value,blog:e.dataset.blog,plan:"newsletter",source:"jetpack_retrieve_subscriptions",post_access_level:e.dataset.post_access_level,display:"alternate"})}()}));const t=document.querySelector(".wp-block-jetpack-subscriptions__container form");t&&(t.payments_attached||(t.payments_attached=!0,t.addEventListener("submit",(function(e){if(t.resubmitted)return;const r=t.querySelector("input[type=email]"),n=r?r.value:t.dataset.subscriber_email;if(!n)return;e.preventDefault();o({email:n,post_id:t.querySelector("input[name=post_id]")?.value??"",tier_id:t.querySelector("input[name=tier_id]")?.value??"",blog:t.dataset.blog,plan:"newsletter",source:"jetpack_subscribe",post_access_level:t.dataset.post_access_level,display:"alternate"})}))))}))}()}();