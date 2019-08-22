var bankAccount = {total: 0};
var value = [];
value.push(bankAccount.total);

bankAccount.deposit = function (num) {
	value.push(num); 
	var total = 0;
	for (var i in value) {
		total += value[i];
	}
	bankAccount.total = total;
	return bankAccount.total;
}

bankAccount.withdraw = function (num) {
	bankAccount.total -= num;
    return bankAccount.total;
}

bankAccount.balance = function (num) {
	return bankAccount.total;
}
