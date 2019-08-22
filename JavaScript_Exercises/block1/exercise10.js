var dob = 1989;
var now = new Date().getFullYear();

var howManyDays = function (dob, now){
    return "you have lived for " + ((now - dob) * 365) + " days already!";
}
