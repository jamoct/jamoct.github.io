function sorter (arr, order = 'ascending') {

    if (order === 'ascending') {

        for (var i=0; i<arr.length - 1; i++) {
            var swap = false;

            for (var j=0; j<arr.length - (i+1); j++) {
                if (arr[j] > arr[j+1]) {
                    swap = true;
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                }
            }

            if (!swap) {
                break;
            }
        }

        return arr;
    } 

    if (order === 'descending') {
        for (var i = 1; i < arr.length; i++) {
            var tmp = arr[i];

            for (var j = i - 1; j >= 0 && (arr[j] < tmp); j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = tmp;
        }
        return arr;
    } else {
        return (`wrong order provided ${order} please provide us with ascending or descending order instructions`);
    }
}
