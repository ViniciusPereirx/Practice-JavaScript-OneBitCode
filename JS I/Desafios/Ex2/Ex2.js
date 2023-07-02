/*Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos
 e exiba na tela uma mensagem dizendo qual dos dois é mais rápido
(ou que as velocidades são iguais se este for o caso) */

// const nameCarOne = prompt("Informe o nome do 1º carro?");
// const nameCarTwo = prompt("Informe o nome do 2º carro?");
// const velCarOne = parseFloat(
//   prompt(`Informe a velocidade do ${nameCarOne} carro?`)
// );
// const velCarTwo = parseFloat(
//   prompt(`Informe a velocidade do ${nameCarTwo} carro?`)
// );

// if (velCarOne === velCarTwo) {
//   prompt(`A velocidade do ${nameCarOne} e ${nameCarTwo} são iguais!`);
// }
// if (velCarOne > velCarTwo) {
//   prompt(`O ${nameCarOne} é mais rápido que o ${nameCarTwo}`);
// } else {
//   prompt(`O ${nameCarTwo} é mais rápido que o ${nameCarOne}`);
// }

/* 
## Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

*/

// const namePerson = prompt("Informe o nome do personagem: ");
// const nameDefense = prompt("Informe o nome do defensor: ");

// const powerPerson = parseFloat(
//   prompt(`Informe o pode de ataque do ${namePerson}: `)
// );
// const powerDefense = parseFloat(
//   prompt(`Informe o poder de defesa do ${nameDefense}: `)
// );

// let lifeDefense = parseFloat(
//   prompt(`Informe a quantidade de vida do ${nameDefense}`)
// );
// const confirmation = confirm(`O ${nameDefense} possui escudo?`);

// if (powerPerson > powerDefense && confirmation === false) {
//   alert(
//     `O ${nameDefense} recebeu ${
//       powerPerson - powerDefense
//     } de dano e está com ${lifeDefense - (powerPerson - powerDefense)} de vida!`
//   );
// } else if (powerPerson > powerDefense && confirmation === true) {
//   alert(
//     `O ${nameDefense} possui escudo e recebeu ${
//       (powerPerson - powerDefense) / 2
//     } de dano e está com ${
//       lifeDefense - (powerPerson - powerDefense) / 2
//     } de vida!`
//   );
// } else if (powerPerson < powerDefense) {
//   alert(
//     `O ${nameDefense} recebeu nenhum dano de ataque e está com ${lifeDefense} de vida!`
//   );
// }
