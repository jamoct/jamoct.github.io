function last (obj) {

    var keys = Object.keys(obj);
    var last = keys.slice(-1);

    return JSON.parse('{"' + last + '":"' + obj[last] + '"}');

}
