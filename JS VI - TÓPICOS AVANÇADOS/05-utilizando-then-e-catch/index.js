function execute() {
  // faz alguma coisa
  return new Promise((resolve, reject) => {
    console.log("Promisse executada!\n");

    setTimeout(() => {
      if (true) {
        reject("A promisse foi rejeitada!");
      } else {
        console.log("Resolvendo a promisse...\n");
        resolve(50);
      }
    }, 2000);
  });
}

execute()
  .then((result) => {
    setTimeout(() => {
      console.log(`Promisse resolvida! \n\nO resultado foi: ${result}`);
    }, 2000);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("\nA promisse foi finalizada!");
  });
