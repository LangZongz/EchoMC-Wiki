(()=>{"use strict";var e,t,r,o,n,a={},i={};function f(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=a,f.c=i,e=[],f.O=(t,r,o,n)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(f.O).every((e=>f.O[e](r[c])))?r.splice(c--,1):(i=!1,n<a&&(a=n));if(i){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);f.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,f.d(n,a),n},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({31:"f1081c31",53:"935f2afb",85:"1f391b9e",195:"c4f5d8e4",414:"393be207",514:"1be78505",671:"0e384e19",704:"13e7a1d5",905:"86382e45",918:"17896441",920:"1a4e3797"}[e]||e)+"."+{31:"11b9de28",53:"63439872",85:"5f8da591",195:"3d75e415",414:"72fe7a72",443:"468b6baf",514:"8ebb3f44",525:"4d173b6c",671:"ca217fe8",690:"9e7ce3e3",704:"2445ba6c",905:"89d480f4",918:"562ba184",920:"992ba408",972:"31e0d5ab"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="EchoMC-Wiki-Legacy:",f.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var i,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+r){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",n+r),i.src=e),o[e]=[t];var s=(t,r)=>{i.onerror=i.onload=null,clearTimeout(b);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),c&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/EchoMC-Wiki-Legacy/",f.gca=function(e){return e={17896441:"918",f1081c31:"31","935f2afb":"53","1f391b9e":"85",c4f5d8e4:"195","393be207":"414","1be78505":"514","0e384e19":"671","13e7a1d5":"704","86382e45":"905","1a4e3797":"920"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=f.p+f.u(t),i=new Error;f.l(a,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],i=r[1],c=r[2],d=0;if(a.some((t=>0!==e[t]))){for(o in i)f.o(i,o)&&(f.m[o]=i[o]);if(c)var u=c(f)}for(t&&t(r);d<a.length;d++)n=a[d],f.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return f.O(u)},r=self.webpackChunkEchoMC_Wiki_Legacy=self.webpackChunkEchoMC_Wiki_Legacy||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();