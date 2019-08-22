function splice (obj, position, num = 1) {
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    var newarray = [];

    for (var i=position; i<num+1; i++) {
        newarray.push('"' + keys[i] + '":' + values[i]);
    }

    return JSON.parse('{' + newarray.join(',') + '}');
}
