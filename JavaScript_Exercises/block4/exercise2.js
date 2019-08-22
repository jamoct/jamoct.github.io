var arr = [1,5,9,33,65,122,66,['banana']];

function is_an_even_number (arr) {
        var count = 0;

        for (var i=0; i<arr.length; i++) {
                if (typeof arr[i] !== isNaN) {
                        if (arr[i] % 2 == 0) {
                                count++;
                        }
                }
        }
        return count;
}
