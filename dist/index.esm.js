/*!
* clone 1.0.0
* Licensed under MIT
*/
function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(t)}function t(r){if("object"!==o(r))return r;var n;if(Array.isArray(r)){n=[];for(var e=0;e<r.length;e++)n[e]=t(r[e])}else for(var y in n={},r)Object.prototype.hasOwnProperty.call(r,y)&&(n[y]=t(r[y]));return n}export{t as deepClone};
