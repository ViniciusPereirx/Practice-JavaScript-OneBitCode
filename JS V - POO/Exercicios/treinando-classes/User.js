class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  verifyLogin(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizado com sucesso!");
    } else {
      console.log("Falha no login. Email ou senha incorretos!");
    }
  }
}

const fullname = "Vinicius Pereira";
const email = "vinicius@gmail.com";
const password = 123;

const userVinicius = new User(fullname, email, password);

userVinicius.verifyLogin("vinicius@gmail.com", 1234);

console.log(userVinicius);
