function isString (arr) {
	var newArray = [];
	arr.forEach(function(ele){
		if (typeof ele == "string"){
			newArray.push(ele);
		}
	});
	return newArray;
}
