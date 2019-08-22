var arr = [1,2,3,'4','5', {}, 33];

function numberConverter (arr) {

	var numbersconverted = [];
	var cannotbeconverted = 0;

	for (var i=0; i<arr.length; i++) {

		if (typeof arr[i] !== 'number') {
			
			converting = parseInt(arr[i]);

			if (typeof converting === 'number' && !isNaN(converting)) {
				numbersconverted.push(converting);
			} else {
				cannotbeconverted++;
			}
		}
	}

	if (numbersconverted.length == 0 && cannotbeconverted == 0) {
		return 'no need for conversion';
	}

	return (`${numbersconverted.length} were converted to numbers: ${numbersconverted}; ${cannotbeconverted} couldn't be converted`);
}    
