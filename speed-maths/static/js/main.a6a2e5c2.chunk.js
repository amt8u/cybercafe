(this["webpackJsonpspeed-maths"]=this["webpackJsonpspeed-maths"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(12),n(2)),u=n(1);n(13),n(14);var l=function(e){return r.a.createElement("div",{className:"option-wrapper"},r.a.createElement("div",{onClick:e.onClick,className:"option"},e.value))};var s=function(e){return e.options.map((function(t){return r.a.createElement(l,{value:t,id:t,name:t,onClick:e.onClick})}))};n(15);var m=function(e){return r.a.createElement("div",{className:"bottom-wrapper"},r.a.createElement(s,{options:e.options,onClick:e.onClick}))};n(16);var f=function(e){return r.a.createElement("div",{className:"center-wrapper"},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"token"},e.inputs[0]),r.a.createElement("div",{className:"token"},e.operator),r.a.createElement("div",{className:"token"},e.inputs[1])))};n(17);function v(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"result-wrapper"},r.a.createElement("div",{className:"play-again",onClick:e.onClick},"Play again"),r.a.createElement("div",{className:"result-header"},"Game Over"),r.a.createElement("div",{className:"result-score"},e.score),r.a.createElement("div",{className:"result-score subtitle"},"Score")))}n(18);function d(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"start-wrapper"},r.a.createElement("div",{className:"start-header"},"Ready for challenge?"),r.a.createElement("div",{className:"start-button",onClick:e.onClick},"Start")))}n(19);var p=function(e){return r.a.createElement("div",{className:"score-wrapper"},r.a.createElement("div",{className:"score"},e.value))};n(20);var E=function(e){var t="timer-value";return t+=e.time<=10?" timer-critical":" timer-low",r.a.createElement("div",{className:"timer-wrapper"},r.a.createElement("div",{className:"timer"},"Time : ",r.a.createElement("span",{className:t},e.time)))};n(21);var b=function(e){return r.a.createElement("div",{title:"Sound ".concat(e.enabled?"Off":"On"),className:"sound-wrapper"},r.a.createElement("div",{className:e.enabled?"on":"off",onClick:function(){return e.setSound(!e.enabled)}}))};n(22);var N=function(e){return r.a.createElement("div",{className:"timer-wrapper"},r.a.createElement("div",{className:"timer"},"Wrong : ",r.a.createElement("span",{className:"timer-value chance"},e.count," / 3")))};n(23);var O=function(e){return r.a.createElement("div",{className:"top-wrapper"},r.a.createElement(p,{value:e.score}),r.a.createElement(N,{count:e.inCorrectCount}),r.a.createElement(E,{time:e.timer}),r.a.createElement(b,Object.assign({enabled:e.sound},e)))},k={0:"+",1:"-",2:"*",3:"/"};function j(e,t){return Math.floor(Math.random()*(t-e+1))+e}function h(e,t,n){if("number"!==typeof t||"number"!==typeof n)return e;var a=j(t,n);return e.has(a)?h(e,t,n):e.add(a),e}function w(e,t){return e.add(t+j(t-5,t+5)),e}function C(e,t){var n=new Set([t]);for(n.add(t+10);n.size<e;)w(n,t);return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(Object(i.a)(n))}var S=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),l=Object(u.a)(o,2),s=l[0],p=l[1],E=Object(a.useState)(0),b=Object(u.a)(E,2),N=b[0],w=b[1],S=Object(a.useState)([]),g=Object(u.a)(S,2),y=g[0],M=g[1],F=Object(a.useState)(null),I=Object(u.a)(F,2),R=I[0],T=I[1],W=Object(a.useState)([]),z=Object(u.a)(W,2),A=z[0],B=z[1],J=Object(a.useState)(null),x=Object(u.a)(J,2),G=x[0],H=x[1],L=Object(a.useState)(!0),P=Object(u.a)(L,2),$=P[0],q=P[1],D=Object(a.useState)(30),K=Object(u.a)(D,2),Q=K[0],U=K[1],V=Object(a.useRef)(Q),X=Object(a.useRef)();function Y(e){V.current=e,U(e)}var Z=function(){var e=k[j(0,1)];T(e);var t=function(e,t,n){var a=new Set;if(n-t<=e)return a;for(;a.size!==e;)h(a,t,n);return a}(2,1,20);M(t);var n=function(e,t){var n,a=function(e,t){return e+t};switch(t){case"+":n=a;break;case"-":n=function(e,t){return e-t};break;case"*":n=function(e,t){return e*t};break;case"/":n=function(e,t){return e/t};break;default:n=a}var r=Object(i.a)(e);return n(r[0],r[1])}(t,e);H(n),B(C(4,n))},_=function(){clearInterval(X.current),c(2)},ee=function(){p(0),w(0),c(1),te(),function(){Y(30);var e=setInterval((function(){V.current<=1?(Y(V.current-1),_()):Y(V.current-1)}),1e3);X.current=e,Z()}()},te=function(){$&&new Audio("click.mp3").play()};return r.a.createElement("div",{className:"App"},1===n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{score:s,inCorrectCount:N,timer:Q,sound:$,setSound:q}),r.a.createElement(f,{inputs:Object(i.a)(y),operator:R}),r.a.createElement(m,{options:Object(i.a)(A),onClick:function(e){return function(e){var t=N+1;t>=3?(w(t),_()):Number(e.currentTarget.innerHTML)===G?p(s+1):w(t),te(),Z()}(e)}})),2===n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{score:s,inCorrectCount:N,timer:Q,sound:$,setSound:q}),r.a.createElement(v,{score:s,timer:Q,onClick:function(){return ee()}})),0===n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{score:s,inCorrectCount:N,timer:Q,sound:$,setSound:q}),r.a.createElement(d,{onClick:function(){return ee()}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a6a2e5c2.chunk.js.map