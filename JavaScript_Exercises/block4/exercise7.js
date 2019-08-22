var arr  = ["12", "55",true,false,true,true,true];

function booleanChecker (arr, num) {

	var bool = [];
	
	for (var i=0; i<arr.length; i++) {
		if (typeof arr[i] === 'boolean') {
			bool.push(arr[i]);	// will push bools into the new array

			if (bool.length > num) { // ex. if 5 > 3 (index is 2), only get the first 3 bools and maxcapacity is 3
				bool.splice(bool.length - 1, 5);
			} 
		} 
	}

	return (`${bool.length} booleans were found ${bool}`);
}
