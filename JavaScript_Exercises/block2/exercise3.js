var arr  =  ['banana','apple','orange'];
var arr2 =  ['tv','dvd-player','playstation']; 
var pos  =  2;

function swap (arr, arr2, pos) {
	var swappedarr = arr[pos]; //orange
	arr[pos] = arr2[pos]; //orange=playstation
	arr2[pos] = swappedarr; //playstation=orange
	return String([arr, arr2]);
}
