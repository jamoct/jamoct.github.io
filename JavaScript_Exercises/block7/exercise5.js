function shuffle (arr) {
    var arrlength = arr.length;
    var tempvalue = '';
    var random = 0;

    while (arrlength > 0) {
        random = Math.floor(Math.random() * arr.length);
        arrlength -= 1;
        tempvalue = arr[arrlength];
        arr[arrlength] = arr[random];
        arr[random] = tempvalue;
    }

    return arr;
}
