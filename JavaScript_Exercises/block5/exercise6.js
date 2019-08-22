var currenciesDB = []; 
var addeditems = '';

function dinamicConverter (op, arr, currency = null) {

    if (op === 'add') {
        
        for (var i=0; i<currenciesDB.length; i++) {
            if (arr[0] === currenciesDB[i]) {
                return 'invalid data provided!';
            }
        }

        currenciesDB.push(arr[0]); 
        console.log(currenciesDB);

        if (arr[1] < 1) {
            addeditems = Math.ceil(arr[1]);
            return addeditems;
        }

        addeditems = Math.floor(arr[1]);
        return addeditems;
    }

    if (op === 'convert') {

    	if (currency === 'gbp') {
            addeditems = Math.floor(arr[1] / 1.25);
            return addeditems;
        }

        if (currency === 'yen') {
            addeditems = Math.floor(arr[1] / 0.25);
            return addeditems;
        }

        if (currency === 'thb') {
            addeditems = Math.floor(arr[1] * 37.5);
            return addeditems;
        }

        for (var i=0; i<currenciesDB.length; i++) {
            
            if (currency === null || currenciesDB[i] !== currency) {
                return 'invalid data provided!';
            }
        }        
    }
}
