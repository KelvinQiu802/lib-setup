/*!
* clone 1.0.0
* Licensed under MIT
*/
!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((o="undefined"!=typeof globalThis?globalThis:o||self).clone={})}(this,(function(o){"use strict";function e(o){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e(o)}o.deepClone=function o(t){if("object"!==e(t))return t;var n;if(Array.isArray(t)){n=[];for(var r=0;r<t.length;r++)n[r]=o(t[r])}else for(var f in n={},t)Object.prototype.hasOwnProperty.call(t,f)&&(n[f]=o(t[f]));return n}}));
