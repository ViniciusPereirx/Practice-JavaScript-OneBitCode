/*## Menu Interativo

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 
O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica,
a última opção deve ser a opção “Encerrar”. 
Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções.
Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado. */

// let option = "";

// do {
//   option = prompt(
//     "Escolha uma opção:\n\n1 - Opção\n2 - Opção\n3 - Opção\n4 - Opção\n5 - Encerrar"
//   );
//   switch (option) {
//     case "1":
//       alert("Você escolheu a 1º opção");
//       break;
//     case "2":
//       alert("Você escolheu a 2º opção");
//       break;
//     case "3":
//       alert("Você escolheu a 3º opção");
//       break;
//     case "4":
//       alert("Você escolheu a 4º opção");
//       break;
//     case "5":
//       alert("Encerrando o programa!");
//       break;
//     default:
//       alert("Opção invalida!");
//       break;
//   }
// } while (option !== "5");

/*## Controle Financeiro

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. 
Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. 
A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. 
A opção de sair deve encerrar o programa. */

// let money = "";
// let option = "";

// do {
//   money = parseFloat(prompt("Informe a quantidade de dinheiro na conta: "));
//   option = prompt(
//     "Escolha uma opção:\n\n1º Adicionar dinheiro\n2º Retirar dinheiro\n3º Encerrar"
//   );

//   switch (option) {
//     case "1":
//       alert(`Opção escolhida: Adicionar Dinheiro!\n\n`);
//       let addMoney = parseFloat(
//         prompt("Qual valor você deseja adicionar na sua conta? ")
//       );
//       money += addMoney;
//       alert(
//         `Você adicionou ${addMoney}R$ reais na sua conta!\n\nSeu saldo é: ${money}R$ reais`
//       );
//       break;
//     case "2":
//       alert(`Opção escolhida: Retirar Dinheiro!\n\n`);
//       let remMoney = parseFloat(
//         prompt("Qual valor você deseja adicionar na sua conta? ")
//       );
//       money -= remMoney;
//       alert(
//         `Você sacou ${remMoney}R$ reais na sua conta!\n\nSeu saldo é: ${money}R$ reais`
//       );
//       break;
//     case "3":
//       alert("Encerrando o programa!");
//       break;
//     default:
//       alert("Opção invalida!");
//       break;
//   }
// } while (option !== "3");
