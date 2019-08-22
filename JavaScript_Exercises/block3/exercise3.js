function isEven (arr) {
	var count = 0;
	for (ele of arr) {
		if (ele % 2 == 0) {
			count++;
		}
	} 
	return count;
}
