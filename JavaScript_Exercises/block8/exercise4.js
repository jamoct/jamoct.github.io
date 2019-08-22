function tally (arr, type = 'obj') {

    if (type === 'arr') {
        var newObj = {};

        arr.forEach (function (item, index) {
            newObj[item] = (newObj[item] || 0) + 1;
        })

        return Object.entries(newObj);
    }

    if (type === 'obj' || type !== undefined) {
        var newObj = {};

        arr.forEach (function (item, index) {
            newObj[item] = (newObj[item] || 0) + 1;
        })

        return newObj;
    } 
}
