var arr = ['cheese','salame','bread','water','pizza'];
var position = 1;

function splicer (arr, position) {
	arr.splice(position, 1);
	return String(arr);
}
