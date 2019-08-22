var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I';

function reverser (str) {
	str = str.split(''); // split first into an array
	
	str.reverse();

	var newArray = [];
	
	str.forEach(function(ele){
		newArray.push(ele);
	});

	newArray = String(newArray);
	newArray = newArray.split(',').join('');

	return newArray;
}
