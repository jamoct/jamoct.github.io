var str = "An2323t2323one32llo123455Likes567323Play323ing567243G2323a3mes345";

function lowerCaseLetters (str) {
	str = str.split(''); // split first into an array

	var result = '';

	for (var i=0; i<str.length; i++) {
			if (isNaN(str[i])) { //removes numbers, retains letters only
				if (str[i] == str[i].toUpperCase()) {
					result = result + ' ' + str[i]; // gets all capital letters
				} else {
					result = result.toLowerCase() + str[i].toLowerCase(); // joins with lower letters
				}		
			} 
	}
	return result.trim();
}
