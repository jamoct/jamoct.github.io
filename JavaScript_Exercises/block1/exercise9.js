var name = "Jason";
var birth_year = 1989;
var now = new Date().getFullYear();

var getAge  = function (birth_year, now, name) {
    return "Hello " + name + " you are " +  (now - birth_year) + " years old";
}
