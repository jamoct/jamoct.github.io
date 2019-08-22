function strCut (str, index1 = null, index2 = null) {
	var letters = str.split('');

	if (index2 !== null) {
		letters.splice(index2, 1);
	}

	if (index1 !== null) {
		letters.splice(index1, 1);;
	}
	
	return letters.join('');
}

/* 

strCut('Antonello', 0,8)
//"ntonell"
strCut('Antonello', 3,5)
//"Antnllo"
strCut('Antonello', 2,8)
//"Anonell"

*/