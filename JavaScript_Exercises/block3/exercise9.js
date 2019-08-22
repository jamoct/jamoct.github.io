var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];

function twoArrays (arr1, arr2) {
	var count = 0;

	if (arr1.length == arr2.length) { //same length

		for (var i=0;i<arr1.length;i++){ // loop array 1

			if (typeof arr1[i] == typeof arr2[i]) { // checking type is array for every item
				if (arr1[i] == arr2[i]) { // checking value
					count++; // count more
				}
			}	
		}

	}
	return count;
}
