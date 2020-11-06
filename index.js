// let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let bal = 0;
    this.transactions.forEach(num => bal += num);
    return bal;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    if (!this.isAllowed()) return false;

    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  }

}

class Deposit extends Transaction {

  get value() {
    //this.account.balance += this.amount;
    return this.amount
  }

  isAllowed() {
    return true;
  }
}

class Withdrawal extends Transaction {

  // commit() {
  //   this.account.balance -= this.amount;
  // }
  get value() {
    // this.account.balance -= this.amount;
    return -this.amount;
  }

  isAllowed() {
    if (this.account.balance - this.amount >= 0) {
      return true;
    } else {
      return false;
    }
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
console.log(myAccount);

t1 = new Deposit(60, myAccount);
t1.commit();
t2 = new Withdrawal(10, myAccount);
t2.commit();
console.log(myAccount);
myAccount.transactions;
