var str = 'hello, how, are you today? I am not bad and you?';

function checker (str) {
        var commas = 0;
        var questionmarks = 0;
        var commaword = '';
        var qmword = '';

        str = str.split('');

        for (var i=0; i<str.length; i++) {
                if (str[i] == ',') {
                        commas++;
                } else if (str[i] == '?') {
                        questionmarks++;
                };

                if (commas > 1) {
                        commaword = 'commas';
                } else {
                        commaword = 'comma';
                };

                if (questionmarks > 1) {
                        qmword = 'question marks';
                } else {
                        qmword = 'question mark';
                };              

        }

        return (`${commas} ${commaword}, ${questionmarks} ${qmword}`);
}



