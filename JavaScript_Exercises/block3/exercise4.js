var arr = ['one','two','three','four'];

function looper (arr) {
	var count = 0;
	arr.forEach(function(item, index){
		console.log(item);
		console.log(index);
		count++;
	});
	return count;
}
