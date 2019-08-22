function sort (obj, str1, str2) {
    if (str1 === 'keys' && str2 === 'ascending') {

        var ordered = {};

        Object.keys(obj).sort().forEach(function (key) {
            ordered[key] = obj[key];
        });

        return ordered;
    }

    if (str1 === 'keys' && str2 === 'descending') {

        var ordered = {};

        Object.keys(obj).sort().reverse().forEach(function (key) {
            ordered[key] = obj[key];
        });

        return ordered;
    }

    if (str1 === 'values' && str2 === 'ascending') {

        var arr = Object.entries(obj).sort (function (a, b) {
            return a[1] - b[1];
        }); 

        // have to define Object.fromEntries because it doesn't work in the test
        Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, ([k, v]) => ({[k]: v}) ));

        obj = Object.fromEntries(arr);

        return obj;
    }

    if (str1 === 'values' && str2 === 'descending') {

        var arr = Object.entries(obj).sort (function (a, b) {
            return b[1] - a[1];
        }); 

        // have to define Object.fromEntries because it doesn't work in the test
        Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, ([k, v]) => ({[k]: v}) ));

        obj = Object.fromEntries(arr);

        return obj;
    }
        
}
