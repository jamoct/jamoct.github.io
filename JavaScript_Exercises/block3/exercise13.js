var str = 'antonello sanna';

function shortener (str) {
	var splitstr = str.split(' '); //convert str to arr ["antonello", "sanna"]

	return splitstr[0].charAt(0).toUpperCase() + splitstr[0].slice(1) + ' ' + splitstr[1].substring(0, 1).toUpperCase() + '.';

}
