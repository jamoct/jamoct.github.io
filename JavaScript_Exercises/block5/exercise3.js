function filter (arr, type, minLength) {
    var newArray = [];

    for (var i=0; i<arr.length; i++) {
        if (typeof arr[i] !== type && isNaN(arr[i])) {
            newArray.push(arr[i]);
        }
    }

    return String(newArray);
}
