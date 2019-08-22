var one   = {name:'antonello'};
var two   = ['name', 'antonello'];
var three = [[],[],{},"antonello",3,function(){}];


function isArrayFunc (arg) {
	if (Array.isArray(arg) == true) {
		return true;
	}
	return false;
}

