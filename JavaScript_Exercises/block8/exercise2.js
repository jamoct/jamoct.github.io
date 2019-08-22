var newArr = [];

function recursive (arr) {

    if (arr.length > 0) {
        newArr.push(Object.values(arr[0]));
        arr.shift();
        return recursive(arr);
    } 

    if (arr.length === 0) {
        return newArr;
    }
}
