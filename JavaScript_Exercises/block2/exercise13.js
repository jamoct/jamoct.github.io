var str = 'I,Really,Like,Pizza';
var char = ',';

function characterRemover (str, char) {
	str = str.split(char).join(' ');
	return str;
}
