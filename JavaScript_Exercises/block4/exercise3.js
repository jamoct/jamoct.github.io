var arr = [{},"hello", 55,22,333, "66"];

function check_types (arr) {
        var number = 0;
        var arrays = 0;
        var strings = 0;
        var objects = 0;

        for (var i=0; i<arr.length; i++) {
                if (typeof arr[i] == 'number') {
                        number++;
                        if (number >= 1) {
                                number = 1;
                        }
                } else if (Array.isArray(arr[i]) == true) {
                        arrays++;
                        if (arrays >= 1) {
                                arrays = 1;
                        }
                } else if (typeof arr[i] == 'string') {
                        strings++;
                        if (strings >= 1) {
                                strings = 1;
                        }
                } else if (typeof arr[i] == 'object') {
                        objects++;
                        if (objects >= 1) {
                                objects = 1;
                        }
                }
        }

        return number + arrays + strings + objects;
}

