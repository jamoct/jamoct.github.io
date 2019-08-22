var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];

function twoArrays (arr1, arr2) {
	var count = 0;

	for (var i=0;i<arr1.length;i++){
		if (arr1[i] == arr2[i]) {
			count++;
		}
	}
	
	return count;
}
