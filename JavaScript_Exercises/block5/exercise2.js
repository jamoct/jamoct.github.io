function calc (num1, num2, operator = '') {

    if (isNaN(num2)) {
        operator = num2;

        if (operator === '+' || operator === '-') {
            num2 = 0;
        } else {
            num2 = 1;
        }

    }

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } 
}
