var obj = {'a' : 1, 'b'	: 2};
var newObje = swap(obj);

function swap(obj) {
    var new_obj = {};

    for(var key in obj) {
    	new_obj[ obj[key] ] = key;
    }

    return new_obj;
}
