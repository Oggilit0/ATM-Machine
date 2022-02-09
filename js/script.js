const account = {
  accountName: "Oskar",
  balance: 100,

  /**
   * Returns the balance of the account
   * @returns Balance as a number
   */
  getBalance() {
    return `${this.balance}`;
  },
  /**
   * Add value to existing balance
   * @param {*} money Amount of balance to be added
   */
  deposit(money) {
    money > 0 ? (this.balance += money) : this.accountError();
  },
  /**
   * Remove value from existing balance
   * @param {*} money Amount of balance to be removed
   */
  withdrawal(money) {
    this.balance >= money && money > 0
      ? (this.balance -= money)
      : this.accountError();
  },
  /**
   * Returns the name of the account
   * @returns Name of account as a String
   */
  getAccountName() {
    return this.accountName;
  },
  /**
   * Output an alert window to notice the user that it didn't work
   */
  accountError() {
    alert(`I'm sorry, ${this.accountName}. I'm afraid I can't do that.`);
  },
  /**
   * Alerts the user and returns value false
   * @returns false value as a boolean
   */
  exitAccount() {
    alert(`Thank you ${this.accountName} for using our service!`);
    return false;
  },
};

/**
 * Main function. Uses a switch to decide the users choises.
 * Excellent when filtering wrongfully inputs
 */
function atm() {
  let menuLoop = true;
  do {
    // ParseFloat converts a string(or other type) into a floating point number
    let menuChoice = parseFloat(
      prompt(
        `Select a choice\n 1.) See balance\n 2.) Make a deposit\n 3.) Make a withdrawal\n 4) Get account name\n 5.) Exit`
      )
    );
    switch (menuChoice) {
      case 1:
        alert(`Balance : $${account.getBalance()}`);
        break;
      case 2:
        let deposit = parseFloat(prompt("How much would you like to deposit?"));
        account.deposit(deposit);
        break;
      case 3:
        let withdrawal = parseFloat(
          prompt("How much would you like to withdraw?")
        );
        account.withdrawal(withdrawal);
        break;
      case 4:
        alert(`The name of the account is : ${account.getAccountName()}`);
        break;
      case 5:
        menuLoop = account.exitAccount();
        break;
      default:
        account.accountError();
    }
  } while (menuLoop);
}
