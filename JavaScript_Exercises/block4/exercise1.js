var name = 'Shawn';
var age = 35;
var name2 = 'Alex';
var age2 = 34;

function check_who_is_older (name, age, name2, age2) {
        if (age > age2) {
                return (`${name} age ${age} is older than ${name2} age ${age2}`);
        } else if (age2 > age) {
                return (`${name2} age ${age2} is older than ${name} age ${age}`);
        } else if (age == age2) {
                return 'They are of the same age.'
        }
}