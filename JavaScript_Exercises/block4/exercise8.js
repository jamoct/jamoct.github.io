var arr = ['mike','jason','peter','robert','mike','jason','jenny','jane'];

function uniqueElements (arr) {

	var newArray = [];

    for (var i=0; i<arr.length; i++) {
        if (newArray.indexOf(arr[i]) === -1 && arr[i] !== '') {
            newArray.push(arr[i]);
        }
    }

	return (`old array ${arr}, new array ${newArray}`);
}
