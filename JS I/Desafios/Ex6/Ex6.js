// const number = prompt("Informe um número para calcular: ");
// let result = "";

// for (let i = 1; i <= 20; i++) {
//   result += "-> " + number + " * " + i + " = " + number * i + "\n";
// }

// alert("Resultado: \n" + result);

const palavra = prompt("Informe uma palavra: ");
let palavraInvertida = "";
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(`${palavra} é um palíndromo!`);
} else {
  alert(
    `${palavra} não é um palímdromo!\n\n ${palavra} !== ${palavraInvertida}`
  );
}
