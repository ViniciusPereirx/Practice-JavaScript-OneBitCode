// const fila = [];
// let option = "";
// do {
//   let pacientes = "";
//   for (let i = 0; i < fila.length; i++) {
//     pacientes += `${i + 1} º - ${fila[i]} \n `;
//   }
//   option = prompt(
//     `Escolha uma opção:\n1 -> Novo paciente\n2 -> Consultar paciente`
//   );
//   switch (option) {
//     case "1":
//       alert("Opção: Novo Paciente!");
//       const nomePaciente = prompt("Informe o nome do paciente: ");
//       fila.push(nomePaciente);
//       break;
//     case "2":
//       alert("Opção: Consultar Paciente!");
//       const pacienteConsultado = fila.shift();
//       alert(pacienteConsultado + " foi removido da fila!");
//       break;
//     default:
//       alert("Encerrando!");
//       break;
//   }
// } while (option !== 3);

let option = "";
const qtdCard = ["carta 1", "carta 2"];

do {
  option = prompt(`Escolha uma opção:\n1 -> Adicionar Carta\n2 -> Puxar Carta`);

  switch (option) {
    case "1":
      alert("Adicionar Carta!");
      const nameCard = prompt("Informe o nome da carta para adicionar: ");
      qtdCard.unshift(nameCard);
      alert(qtdCard);
      break;
    case "2":
      alert("Puxar uma Carta");
      alert("A carta retirada foi " + qtdCard.pop());
      break;
    default:
      break;
  }
} while (option !== 3);
