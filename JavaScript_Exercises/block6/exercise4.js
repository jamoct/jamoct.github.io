function addToList (arr) {

	var movieList = [];

	for (var i=0; i<arr.length; i++) {
		movieList.push({'title' : arr[i], 'id' : i});
	}

	return movieList;
}
