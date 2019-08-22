var arr = [ 10, 44, 55 ,66 , 77 , 55 , 44 , 3 , 3 , 3 , 4 , 5 , 6 , 54 , "antonello", "33", "£", "66"];
var max = 20;

function uniqueElements (arr, max) {

	var newarray = [];

    for (var i=0; i<arr.length; i++) {
        if (newarray.indexOf(arr[i]) === -1 && arr[i] !== '' && typeof arr[i] === 'number') {
        	newarray.push(arr[i]);
        }
    }

    var finalarray = [];

    for (var i=0; i<newarray.length; i++) {
    	if (newarray[i] >= max) {
    		finalarray.push(newarray[i]);
    	}
    }

	return (`old array ${arr} \n new array ${finalarray}`);
}
