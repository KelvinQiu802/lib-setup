/*!
* clone 1.0.0
* Licensed under MIT
*/
"use strict";function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(t)}exports.deepClone=function t(r){if("object"!==o(r))return r;var e;if(Array.isArray(r)){e=[];for(var n=0;n<r.length;n++)e[n]=t(r[n])}else for(var y in e={},r)Object.prototype.hasOwnProperty.call(r,y)&&(e[y]=t(r[y]));return e};
