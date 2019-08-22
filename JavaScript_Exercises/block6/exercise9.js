function sumAll (obj = null) {

    if (obj === '' || obj === null) {
        return 0;
    }

    var values = Object.values(obj);
    var total = 0;

    for (var i=0; i<values.length; i++) {
        total += values[i];
    }

    return total;
}
