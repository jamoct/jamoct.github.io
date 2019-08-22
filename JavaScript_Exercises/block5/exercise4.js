function tellAge (month, day, year) {
    monthIndex = month -1;
    var birthdate = new Date(year, monthIndex, day);
    var currentdate = new Date();

    var birthyear = birthdate.getFullYear();
    var currentyear = currentdate.getFullYear(); 

    var birthday = birthdate.getDate();
    var currentday = currentdate.getDate();
    
    if (currentyear > birthyear) {
        var ageyear = currentyear - birthyear;

        if (ageyear === 1) {
        	return (`You are ${ageyear} year old`);
        }
        return (`You are ${ageyear} years old`);
    } else if (currentyear = birthyear) {
        var ageday = currentday - birthday;
        if (ageday === 1) {
        	return (`You are ${ageday} day old`);
        } 
    	return (`You are ${ageday} days old`);
    }

}
