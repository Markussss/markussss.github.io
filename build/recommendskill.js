!function(e){var t={};function r(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(l,i,function(t){return e[t]}.bind(null,i));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){window.recommendskill=function(){const e=(e,t)=>e+t,t=(e,t)=>Math.max(e,t),r=e=>(t,r)=>r[e]-t[e];fetch("https://www.duolingo.com/vocabulary/overview").then(e=>e.json()).then(l=>{l=l.vocab_overview.reduce((e,t)=>(e[t.skill]||(e[t.skill]=[]),e[t.skill].push(t),e),{});var i=Object.keys(l).map(r=>{let i=l[r].map(e=>e.strength).reduce(e,0)/l[r].length,n=l[r].map(e=>e.last_practiced_ms).reduce(t,-1/0);return{skill:r,skillStrength:i,lastPractice:new Date(n),lastPracticeMs:n}}).sort(r("lastPracticeMS")).map(({skill:e,skillStrength:t,lastPractice:r},l)=>({skill:e,skillStrength:t,lastPractice:r,timeWeight:l})).sort(r("skillStrength")).map(({skill:e,lastPractice:t,timeWeight:r},l)=>({skill:e,lastPractice:t,timeWeight:r,strengthWeight:l})).map(({skill:e,lastPractice:t,timeWeight:r,strengthWeight:l})=>({skill:e,lastPractice:t,weight:1*r+1*l})).sort(r("weight"));alert(i[0].skill)})},window.recommendskill()}]);