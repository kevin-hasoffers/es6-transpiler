var a = 1;

function matchAttributes(attributes) {function GET_ITER$0(v){if(v){if(Array.isArray(v))return 0;if(typeof v==='object'&&typeof v['@@iterator']==='function')return v['@@iterator']();}throw new Error(v+' is not iterable')};var $D$0;var $D$1;var $D$2;
	$D$0 = GET_ITER$0(attributes);$D$1 = $D$0 === 0;$D$2 = ($D$1 ? attributes.length : void 0);for( var attrRule ; $D$1 ? ($D$0 < $D$2) : !($D$2 = $D$0["next"]())["done"]; ){attrRule = ($D$1 ? attributes[$D$0++] : $D$2["value"]);

	};$D$0 = $D$1 = $D$2 = void 0;
}

/*
 Test note:
 ! this test should be in a first line  !
 ! completed test: do not edit it       !
 */
