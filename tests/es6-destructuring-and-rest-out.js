/*
 Test note:
 ! completed test: do not edit it       !
 */

var arr = [{a: [1, 2, 3]}, {a: [4, 5, 6]}];
function test(first) {function ITER$0(v,f){var $Symbol_iterator=typeof Symbol!=='undefined'&&Symbol.iterator||'@@iterator';if(v){if(Array.isArray(v))return f?v.slice():v;var i,r;if(typeof v==='object'&&typeof (f=v[$Symbol_iterator])==='function'){i=f.call(v);r=[];while((f=i['next']()),f['done']!==true)r.push(f['value']);return r;}}throw new Error(v+' is not iterable')};
	if ( first ) {
		if ( first ) {
			for ( var i = 0, len = arr.length ; i < len ; i++ ) {
				var some = arr[i];
				var a = some.a, b = some.b;

				return this.method.apply(this, [b].concat(a));
			}
		}
	}
	else {
		for ( var i$0 = 0, len$0 = arr.length ; i$0 < len$0 ; i$0++ ) {
			var some$0 = arr[i$0];
			var a$0 = some$0.a, b$0 = some$0.b;

			return this.method.apply(this, [b$0].concat(ITER$0(a$0)));
		}
	}
}

var obj = {
	method: function(def) {
		var res = [].slice.call(arguments, 1);

		return def + "-" + res.join("|");
	}
};

console.log(test.call(obj, true) === 'undefined-1|2|3');
console.log(test.call(obj, false) === 'undefined-1|2|3');