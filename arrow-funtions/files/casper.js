function managePostImages(){$(".post-content").find("img").each(function(){$(this).closest("figure").hasClass("kg-bookmark-card")||$(this).parent().is("a")||$(this).addClass("js-zoomable")})}!function(i){"use strict";i.fn.fitVids=function(e){var o={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("div");n.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(n.childNodes[1])}return e&&i.extend(o,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];o.customSelector&&e.push(o.customSelector);var n=".fitvidsignore";o.ignore&&(n=n+", "+o.ignore);var t=i(this).find(e.join(","));(t=(t=t.not("object object")).not(n)).each(function(){var e=i(this);if(!(0<e.parents(n).length||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var t=("object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10));if(!e.attr("name")){var o="fitvid"+i.fn.fitVids._count;e.attr("name",o),i.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*t+"%"),e.removeAttr("height").removeAttr("width")}})})},i.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).mediumZoom=t()}(this,function(){"use strict";function o(e){return"IMG"===e.tagName}function C(e){return e&&1===e.nodeType}function H(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()}function s(e){try{return Array.isArray(e)?e.filter(o):(t=e,NodeList.prototype.isPrototypeOf(t)?[].slice.call(e).filter(o):C(e)?[e].filter(o):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(o):[])}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}var t}function k(e,t){var o=S({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,o);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,o.bubbles,o.cancelable,o.detail),n}var S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};return function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),function t(e,o){function n(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var i=t.reduce(function(e,t){return[].concat(e,s(t))},[]);return i.filter(function(e){return-1===v.indexOf(e)}).forEach(function(e){v.push(e),e.classList.add("medium-zoom-image")}),l.forEach(function(e){var t=e.type,o=e.listener,n=e.options;i.forEach(function(e){e.addEventListener(t,o,n)})}),L}function i(e){function h(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,o=void 0;if(w.container)if(w.container instanceof Object)t=(e=S({},e,w.container)).width-e.left-e.right-2*w.margin,o=e.height-e.top-e.bottom-2*w.margin;else{var n=(C(w.container)?w.container:document.querySelector(w.container)).getBoundingClientRect(),i=n.width,r=n.height,d=n.left,a=n.top;e=S({},e,{width:i,height:r,left:d,top:a})}t=t||e.width-2*w.margin,o=o||e.height-2*w.margin;var l=b.zoomedHd||b.original,c=!H(l)&&l.naturalWidth||t,m=!H(l)&&l.naturalHeight||o,s=l.getBoundingClientRect(),u=s.top,f=s.left,h=s.width,p=s.height,g=Math.min(c,t)/h,v=Math.min(m,o)/p,y=Math.min(g,v),z="scale("+y+") translate3d("+((t-h)/2-f+w.margin+e.left)/y+"px, "+((o-p)/2-u+w.margin+e.top)/y+"px, 0)";b.zoomed.style.transform=z,b.zoomedHd&&(b.zoomedHd.style.transform=z)}var p=(0<arguments.length&&void 0!==e?e:{}).target;return new d(function(t){if(p&&-1===v.indexOf(p))t(L);else{if(b.zoomed)t(L);else{if(p)b.original=p;else{if(!(0<v.length))return void t(L);var e=v;b.original=e[0]}var o,n,i,r,d,a,l,c,m;if(b.original.dispatchEvent(k("medium-zoom:open",{detail:{zoom:L}})),z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,y=!0,b.zoomed=(o=b.original,n=o.getBoundingClientRect(),i=n.top,r=n.left,d=n.width,a=n.height,l=o.cloneNode(),c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,m=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,l.removeAttribute("id"),l.style.position="absolute",l.style.top=i+c+"px",l.style.left=r+m+"px",l.style.width=d+"px",l.style.height=a+"px",l.style.transform="",l),document.body.appendChild(E),w.template){var s=C(w.template)?w.template:document.querySelector(w.template);b.template=document.createElement("div"),b.template.appendChild(s.content.cloneNode(!0)),document.body.appendChild(b.template)}if(document.body.appendChild(b.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),b.original.classList.add("medium-zoom-image--hidden"),b.zoomed.classList.add("medium-zoom-image--opened"),b.zoomed.addEventListener("click",g),b.zoomed.addEventListener("transitionend",function e(){y=!1,b.zoomed.removeEventListener("transitionend",e),b.original.dispatchEvent(k("medium-zoom:opened",{detail:{zoom:L}})),t(L)}),b.original.getAttribute("data-zoom-src")){b.zoomedHd=b.zoomed.cloneNode(),b.zoomedHd.removeAttribute("srcset"),b.zoomedHd.removeAttribute("sizes"),b.zoomedHd.src=b.zoomed.getAttribute("data-zoom-src"),b.zoomedHd.onerror=function(){clearInterval(u),console.warn("Unable to reach the zoom image target "+b.zoomedHd.src),b.zoomedHd=null,h()};var u=setInterval(function(){b.zoomedHd.complete&&(clearInterval(u),b.zoomedHd.classList.add("medium-zoom-image--opened"),b.zoomedHd.addEventListener("click",g),document.body.appendChild(b.zoomedHd),h())},10)}else if(b.original.hasAttribute("srcset")){b.zoomedHd=b.zoomed.cloneNode(),b.zoomedHd.removeAttribute("sizes"),b.zoomedHd.removeAttribute("loading");var f=b.zoomedHd.addEventListener("load",function(){b.zoomedHd.removeEventListener("load",f),b.zoomedHd.classList.add("medium-zoom-image--opened"),b.zoomedHd.addEventListener("click",g),document.body.appendChild(b.zoomedHd),h()})}else h()}}})}var r=1<arguments.length&&void 0!==o?o:{},d=window.Promise||function(e){function t(){}e(t,t)},g=function(){return new d(function(t){if(!y&&b.original){y=!0,document.body.classList.remove("medium-zoom--opened"),b.zoomed.style.transform="",b.zoomedHd&&(b.zoomedHd.style.transform=""),b.template&&(b.template.style.transition="opacity 150ms",b.template.style.opacity=0),b.original.dispatchEvent(k("medium-zoom:close",{detail:{zoom:L}})),b.zoomed.addEventListener("transitionend",function e(){b.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(b.zoomed),b.zoomedHd&&document.body.removeChild(b.zoomedHd),document.body.removeChild(E),b.zoomed.classList.remove("medium-zoom-image--opened"),b.template&&document.body.removeChild(b.template),y=!1,b.zoomed.removeEventListener("transitionend",e),b.original.dispatchEvent(k("medium-zoom:closed",{detail:{zoom:L}})),b.original=null,b.zoomed=null,b.zoomedHd=null,b.template=null,t(L)})}else t(L)})},a=function(e){var t=(0<arguments.length&&void 0!==e?e:{}).target;return b.original?g():i({target:t})},v=[],l=[],y=!1,z=0,w=r,b={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(e)?w=e:!e&&"string"!=typeof e||n(e),w=S({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},w);var c,m,E=(c=w.background,(m=document.createElement("div")).classList.add("medium-zoom-overlay"),m.style.background=c,m);document.addEventListener("click",function(e){var t=e.target;t!==E?-1!==v.indexOf(t)&&a({target:t}):g()}),document.addEventListener("keyup",function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||g()}),document.addEventListener("scroll",function(){if(!y&&b.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(z-e)>w.scrollOffset&&setTimeout(g,150)}}),window.addEventListener("resize",g);var L={open:i,close:g,toggle:a,update:function(e){var t=0<arguments.length&&void 0!==e?e:{},o=t;if(t.background&&(E.style.background=t.background),t.container&&t.container instanceof Object&&(o.container=S({},w.container,t.container)),t.template){var n=C(t.template)?t.template:document.querySelector(t.template);o.template=n}return w=S({},w,o),v.forEach(function(e){e.dispatchEvent(k("medium-zoom:update",{detail:{zoom:L}}))}),L},clone:function(e){return t(S({},w,0<arguments.length&&void 0!==e?e:{}))},attach:n,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];b.zoomed&&g();var n=0<t.length?t.reduce(function(e,t){return[].concat(e,s(t))},[]):v;return n.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(k("medium-zoom:detach",{detail:{zoom:L}}))}),v=v.filter(function(e){return-1===n.indexOf(e)}),L},on:function(t,o,e){var n=2<arguments.length&&void 0!==e?e:{};return v.forEach(function(e){e.addEventListener("medium-zoom:"+t,o,n)}),l.push({type:"medium-zoom:"+t,listener:o,options:n}),L},off:function(t,o,e){var n=2<arguments.length&&void 0!==e?e:{};return v.forEach(function(e){e.removeEventListener("medium-zoom:"+t,o,n)}),l=l.filter(function(e){return!(e.type==="medium-zoom:"+t&&e.listener.toString()===o.toString())}),L},getOptions:function(){return w},getImages:function(){return v},getZoomedImage:function(){return b.original}};return L}}),managePostImages(),mediumZoom(".js-zoomable",{container:"#medium-zoom-container",background:"#111",scrollOffset:100});var currentTheme=window.localStorage.getItem("theme");function toggleTheme(e){var t=$("html"),o=$(".theme-toggle");$.each(o,function(e,t){t.removeAttribute("data-theme")}),t.removeClass("dark"),"dark"==e&&($.each(o,function(e,t){t.setAttribute("data-theme","dark")}),t.addClass("dark"))}currentTheme&&toggleTheme(currentTheme),$(".theme-toggle").on("click",function(e){var t;"function"==typeof window.navigator.vibrate&&window.navigator.vibrate(50),toggleTheme(t=e.currentTarget.getAttribute("data-theme")?"light":"dark"),window.localStorage.setItem("theme",t)}),$(".share").on("click",function(e){navigator.clipboard&&(navigator.clipboard.writeText(window.location.href),alert("Copied to clipboard"))}),function(e){e.addEventListener("DOMContentLoaded",function(){e.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),o=e.attributes.width.value/e.attributes.height.value;t.style.flex=o+" 1 0%"})})}((window,document)),function(t,o){var n=o.querySelector("link[rel=next]");if(n){var i=o.querySelector(".post-feed");if(i){var r=300,d=!1,a=!1,l=t.scrollY,c=t.innerHeight,m=o.documentElement.scrollHeight;t.addEventListener("scroll",f,{passive:!0}),t.addEventListener("resize",h),u()}}function s(){if(404===this.status)return t.removeEventListener("scroll",f),void t.removeEventListener("resize",h);this.response.querySelectorAll(".post-card").forEach(function(e){i.appendChild(o.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?n.href=e.href:(t.removeEventListener("scroll",f),t.removeEventListener("resize",h)),m=o.documentElement.scrollHeight,a=d=!1}function e(){if(!a)if(l+c<=m-r)d=!1;else{a=!0;var e=new t.XMLHttpRequest;e.responseType="document",e.addEventListener("load",s),e.open("GET",n.href),e.send(null)}}function u(){d||t.requestAnimationFrame(e),d=!0}function f(){l=t.scrollY,u()}function h(){c=t.innerHeight,m=o.documentElement.scrollHeight,u()}}(window,document),function(a,l){a.Casper||(a.Casper={}),a.Casper.stickyNavTitle=function(t){var o=l.querySelector(t.navSelector),n=l.querySelector(t.titleSelector),i=l.querySelector(t.progressSelector),r=a.scrollY,d=!1;function e(){n.getBoundingClientRect().top+a.scrollY+(n.offsetHeight+35)<=r?o.classList.add(t.activeClass):o.classList.remove(t.activeClass);var e=a.scrollY/(l.body.clientHeight-a.innerHeight)*100;i.style.width=e+"%",d=!1}a.addEventListener("scroll",function(){r=a.scrollY,function(){d||requestAnimationFrame(e);d=!0}()},{passive:!0}),e()}}(window,document);
//# sourceMappingURL=casper.js.map