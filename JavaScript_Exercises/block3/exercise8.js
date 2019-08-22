function timesTwo (arr) {
	var newArray = [];
	arr.forEach(function(ele){
		ele = ele * 2;
		newArray.push(ele);
	});
	return String(newArray);
}
