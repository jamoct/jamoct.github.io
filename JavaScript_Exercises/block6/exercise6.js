var arr = [{'name':'Antonello', 'location':'Barcelona'}, {'email': 'george@barcelonacodeschool.com', 'name':'George'}, {'name':'Golda', 'coder': true}];
var keyname = 'name';
var value = 'Antonello';

function getIndex (arr, keyname, value) {

    for (var key in arr) {
        if (arr[key].hasOwnProperty(keyname) && arr[key][keyname] === value) {
            return key;
        } 
    }
    return -1;
}
