/*
Cadastro de Recrutas

Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).*/

const registerVinicius = [
  {
    name: "Vinicius",
    lastname: "Pereira",
    study: "Developer JS",
    birthYear: 1998,
  },
];

const register = registerVinicius.map((item) => {
  return {
    name: item.name,
    lastname: item.lastname,
    study: item.study,
    birthYear: 2023 - item.birthYear + " anos",
  };
});

/*
Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.*/

const numberOne = 10;
const numberTwo = 5;

const soma = numberOne + numberTwo;
const subtracao = numberOne - numberTwo;
const multiplicacao = numberOne * numberTwo;
const divisao = numberOne / numberTwo;

console.log(
  `Soma: ${soma}\nSubtracao: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao}`
);
