var PRS$0 = (function(o,t){o["__proto__"]={"a":t};return o["a"]===t})({},{});var DP$0 = Object.defineProperty;var GOPD$0 = Object.getOwnPropertyDescriptor;var MIXIN$0 = function(t,s){for(var p in s){if(s.hasOwnProperty(p)){DP$0(t,p,GOPD$0(s,p));}}return t};var class1 = (function(){"use strict";function class1(opts){this.class1=1;this.op1=opts.op1}DP$0(class1,"prototype",{"configurable":false,"enumerable":false,"writable":false});;return class1;})();
var class2 = (function(super$0){"use strict";var SP$0 = Object.setPrototypeOf||function(o,p){o["__proto__"]=p;return o};var OC$0 = Object.create;function class2() {super$0.apply(this, arguments)}if(!PRS$0)MIXIN$0(class2, super$0);if(super$0!==null)SP$0(class2,super$0);class2.prototype = OC$0(super$0!==null?super$0.prototype:null,{"constructor":{"value":class2,"configurable":true,"writable":true}});DP$0(class2,"prototype",{"configurable":false,"enumerable":false,"writable":false});var proto$0={};proto$0.say = function(){return "class2"};MIXIN$0(class2.prototype,proto$0);proto$0=void 0;return class2;})(class1);

var a = new class2({op1: 99});

console.log(a.class1 === 1, a.op1 === 99, a.say() === "class2");
