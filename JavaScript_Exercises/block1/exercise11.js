var celsius = 35;
var fahrenheit = 100;

var toCelsius = function (fahrenheit){
    return Math.round((fahrenheit - 32) * 5 / 9);
}
var toFahr = function (celsius){
    return Math.round((celsius * 9 / 5) + 32);
}
