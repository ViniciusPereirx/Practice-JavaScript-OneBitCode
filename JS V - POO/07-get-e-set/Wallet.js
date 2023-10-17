class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; //10099
    // console.log(this.#amount);
  }

  get amount() {
    return this.#amount / 100; //manipulando propriedade privada
  }

  set username(newUserName) {
    if (typeof newUserName === "string") {
      this.#username = newUserName;
    } else {
      console.log("username must be of type string");
    }
  }

  get username() {
    return this.#username;
  }

  //   amount() {
  //     return this.#amount / 100;
  //   }
}

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.username = "Vinicius";
console.log(myWallet.username);

myWallet.username += " Pereira";

console.log(myWallet.username);

myWallet.username = 1;

console.log(myWallet.username);