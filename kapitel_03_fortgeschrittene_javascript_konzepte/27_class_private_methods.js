class BankAccount {
 #balance = 0;

  deposit(amount) {
    if (this#validateAmount(amount)) {
      this#balance += amount;
    }
  }

 #validateAmount(amount) {
    return amount > 0;
  }

  getBalance() {
    return this#balance;
  }
}

const account = new BankAccount();

account.deposit(100);
console.log(account.getBalance()); // 100