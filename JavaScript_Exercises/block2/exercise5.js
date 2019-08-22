var arr = ['car','soap','banana','tv','toothbrush'];

function removeFirstAndLast (arr) {
	arr.shift(); 
	arr.pop();
	return String (arr);
}
