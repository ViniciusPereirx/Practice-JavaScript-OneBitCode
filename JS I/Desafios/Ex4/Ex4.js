/* Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.*/

const nameTurist = prompt("Informe seu nome turista: ");
let citys = "";
let howManyCitys = 0;
let confirmation = confirm("Visitou mais cidades?");

while (confirmation === true) {
  let city = prompt("Qual cidade você visitou? ");
  citys += `- ${city}\n`;
  howManyCitys++;
  confirmation = confirm("Visitou mais cidades? ");
}

alert(
  `- Nome: ${nameTurist}\n- Quantidade de cidades: ${howManyCitys}\n- Cidades: \n${citys}`
);
