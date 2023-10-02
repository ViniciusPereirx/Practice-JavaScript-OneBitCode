const Address = require("./Adress");
const Person = require("./Person");

const addr = new Address("João de Souza", 809, "Tio Nardo", "Brasópolis", "MG");
const vinicius = new Person("Vinicius", addr);

console.log(vinicius);
console.log(vinicius.address.fullAdress());
