class BankAccount {
    constructor (initial = account) {
        this.total = initial;
    }
    deposit(num) {
        this.total += num;
    }
    withdraw(num) {
        this.total -= num;
    }
    balance() {
        return this.total;
    }
}

// var account = new bankAccount(10)

