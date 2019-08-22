function stringChop (str, num = 0) {
    var letters = str.split('');
    var new_array = [];
    var n = 0;

    if (num === 0) {
        return str;
    }

    for (var i=0; i<letters.length; i+=num) {
        new_array[n] = str.substring(i, num + i);
        n++;
    }
    return new_array;
}
