class BankAccount{
    constructor(accountNumber, accountHolderName, balance) {
        this._accountNumber = accountNumber;
        this._accountHolderNamea = accountHolderName;
        this._balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited: $${amount}`);
        } 
        else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log("Withdrawal amount exceeds balance or is invalid.");
        }
    }

    getBalance() {
        return this._balance;
    }
}
//Demo
let myAccount = new BankAccount("123456789", "John Doe", 1000);
myAccount.deposit(500); 
myAccount.withdraw(200);