var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office'];
var index1 = 1;
var index2 = 3;

function take_and_push (arr, index1, index2) {
	var newArray = [];
	newArray.push(arr[index1]);
	newArray.push(arr[index2]);
	return String(newArray);
}
