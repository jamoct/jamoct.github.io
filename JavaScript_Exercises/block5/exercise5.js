function checkAge (month, day) {

    var year = 2019;
    var month = month - 1;

    var birthdate = new Date(year, month, day);
    var currentdate = new Date();
    
    var birthday = birthdate.getDate();
    var birthmonth = birthdate.getMonth();
    var birthyear = birthdate.getFullYear();

    var currentday = currentdate.getDate();
    var currentmonth = currentdate.getMonth();
    var currentyear = currentdate.getFullYear(); 

    var diffTime = Math.abs(currentdate.getTime() - birthdate.getTime());
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    var correctedDiffDays = diffDays - 1;
    var diff = new Date(currentdate.getTime() - birthdate.getTime());

    if (day >= 31 || day <= 0 || month > 12 || month <= 0) {
        return 'Error invalid data provided';
    }

    if (birthdate.toDateString() === currentdate.toDateString()) {
        return 'Happy birthday!';
    }

    if (birthmonth <= currentmonth && birthday < currentday) {
        return 'Sorry your birthday is passed for this year';
    }

    if (birthmonth >= currentmonth) {
        console.log(`Total days: ${diffDays}`);
        if (diffDays === 1) {
            return (`There is ${correctedDiffDays} day until your birthday`);
        } else if (diffDays > 1 && diffDays < 30) {
            return (`There are ${correctedDiffDays} days until your birthday`);
        } else if (diffDays > 30) {
            var remaindays = diffDays % 30;
            var nummonths = Math.round(diffDays/30);
            console.log(`Number of months: ${nummonths}`);
            console.log(`Remainder days: ${remaindays}`);

            if (nummonths === 1 && remaindays > 1) {
                return (`There is ${nummonths} month and ${remaindays} days until your birthday`);
            } else if (nummonths === 1 && remaindays === 1) {
                return (`There is ${nummonths} month and ${remaindays} day until your birthday`);
            }

            if (remaindays === 1 && nummonths > 1) {
                return (`There are ${nummonths} months and ${remaindays} day until your birthday`);
            } else if (remaindays === 1 && nummonths > 1) {
                return (`There are ${nummonths} months and ${remaindays} day until your birthday`);
            } 

            if (remaindays > 1 && nummonths > 1) {
                return (`There are ${nummonths} months and ${remaindays} days until your birthday`);
            } 
        }
    }
}
