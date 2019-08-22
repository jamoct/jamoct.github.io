function sort (obj) {

    var arr = Object.entries(obj).sort (function (a, b) {
        return a[1] - b[1];
    }); 

    // have to define Object.fromEntries because it doesn't work in the test
    Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, ([k, v]) => ({[k]: v}) ));

    obj = Object.fromEntries(arr);

    return obj;
    
}

