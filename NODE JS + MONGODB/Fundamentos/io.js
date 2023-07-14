const process = require("process"); //Entrada e saídas do usuário

console.log("Informe seu nome: ");

process.stdin.on("data", (keyboard) => {
  process.stdout.write(`Nome do usuário: ${keyboard}`);
  process.exit();
});
