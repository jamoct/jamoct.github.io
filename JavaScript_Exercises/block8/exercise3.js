function tally (arr) {
    
    var newObj = {};

    arr.forEach (function (i) {
        newObj[i] = (newObj[i] || 0) + 1;
    })

    return newObj;
}
