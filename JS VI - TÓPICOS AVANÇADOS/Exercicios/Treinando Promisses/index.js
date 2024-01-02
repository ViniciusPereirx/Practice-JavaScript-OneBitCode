function IMC(peso, altura) {
  return new Promise((resolve, reject) => {
    console.log("Calculo do IMC executado\n");

    if (typeof peso !== "number" || typeof altura !== "number") {
      reject(new Error("Não foi possível calcular o IMC!"));
    } else {
      resolve(peso / (altura * altura));
    }
  });
}

function showIMC(peso, altura) {
  IMC(peso, altura)
    .then((result) => {
      console.log(`O resultado do IMC foi: ${result.toFixed(2)}`);

      if (result < 18.5) console.log("Situação: Magreza!");
      else if (result < 25) console.log("Situação: Normal!");
      else if (result < 30) console.log("Situação: Sobrepeso!");
      else if (result < 40) console.log("Situação: Obesidade!");
      else console.log("Situação: Obesidade grave!");
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("\nCalculo finalizado!");
    });
}

showIMC(71, 1.74);
