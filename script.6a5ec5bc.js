parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g4tf":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function o(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=document.querySelector(".logo"),l=document.querySelector(".calc-container"),a=document.querySelector(".calc-answer-box"),i=document.querySelector(".calc-process"),d=document.querySelector(".calc-answer"),s=document.querySelector(".theme-options"),m=Array.from(document.getElementsByClassName("theme-option")),f=document.querySelector(".calc-keyboard"),y=Array.from(document.getElementsByClassName("button-norm")),v=document.getElementById("reset"),S=document.getElementById("delete"),g=document.getElementById("equal"),h=Array.from(document.querySelectorAll('[data-theme="1"]')),p=document.querySelector("[data-theme-value='1']"),T=document.querySelector("[data-theme-value='2']"),b=document.querySelector("[data-theme-value='3']"),E=null,x=null,q="",A="",L=0,k=function(e){var t=e.className.includes("button-number"),n=e.className.includes("button-operator"),r=e.className.includes("button-submit");!x&&t?d.innerText=e.value:x&&t&&(d.innerText+=e.value),x=parseFloat(d.innerText),!E&&x&&n?(E=x,x=null,A=e.value,i.innerText=E.toString()+A):E&&x&&n?(q=A,A=e.value,D(q),i.innerText=L.toString()+A,d.innerText=L.toString(),E=L,x=null):E&&!x&&n&&(i.innerText=E.toString()+e.value,d.innerText=E.toString()),x&&A&&r&&(D(A),i.innerHTML=(null==E?void 0:E.toString())+A+x.toString()+e.value,d.innerText=L.toString(),E=L,q=A,A="")},D=function(e){if(E&&x)switch(e){case"+":return L=E+x;case"-":return L=E-x;case"/":return L=E/x;case"*":return L=E*x;default:return L}},w=function(){if(d.innerText.length<=1)d.innerText="0",x=null;else{var e=d.innerText.slice(0,d.innerText.length-1);x=parseFloat(e),d.innerHTML=x.toString()}},I=function(){E=null,x=null,q="",A="",L=0,d.innerText=L.toString(),i.innerText=""},B=function(e){h.forEach(function(t){t.dataset.theme=e})},N=function(t){e(document.querySelector(".theme-options").children).forEach(function(e){e==t.target?e.classList.add("checked"):e!==t.target&&e.classList.remove("checked")})};y.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),k(e)})}),v.addEventListener("click",function(e){e.preventDefault,I()}),S.addEventListener("click",function(e){e.preventDefault,w()}),m.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault;var n=e.dataset.themeValue;B(n)})}),null==p||p.addEventListener("click",function(e){e.preventDefault(),N(e)}),null==T||T.addEventListener("click",function(e){e.preventDefault(),N(e)}),null==b||b.addEventListener("click",function(e){e.preventDefault(),N(e)});
},{}]},{},["g4tf"], null)
//# sourceMappingURL=script.6a5ec5bc.js.map