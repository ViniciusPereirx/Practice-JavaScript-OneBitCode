// // Pendente/pending = estado inicial
// // Resolvida = resolved
// // Rejeitada = rejected
// // Finalizada
// const p = new Promise((resolve, reject) => {
//   console.log("A promisse está sendo executada!");
//   setTimeout(() => {
//     if (true) {
//       reject(false);
//     }
//     console.log("Resolvendo a promisse...");
//     resolve(true);
//   }, 3000);
// });

// console.log(p);

// setTimeout(() => {
//   console.log(p);
//   console.log("Promisse finalizada!");
// }, 5000);

function execute() {
  // faz alguma coisa
  return new Promise((resolve, reject) => {
    console.log("Promisse executada!");
    setTimeout(() => {
      console.log("Resolvendo a promisse...");
      resolve("Resultado!");
    }, 1000);
  });
}

const p = execute();

console.log(p);

setTimeout(() => {
  console.log(p);
}, 3000);
