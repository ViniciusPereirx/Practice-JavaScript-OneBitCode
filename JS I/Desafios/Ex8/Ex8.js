let option = "";
let saveHomes = [];

do {
  option = prompt(
    `MENU DE IMÓVEIS!\n\n Imóveis cadastrados: ${saveHomes.length}\n\nEscolha uma opção:\n1- Cadastrar imóvel\n2- Exibir imóveis cadastrados\n3- Encerrar o programa`
  );

  switch (option) {
    case "1":
      const home = {};
      home.nameProprietario = prompt(
        "Cadastrar imóvel!\n\nInforme o nome do proprietário: "
      );
      home.qdtBedroom = prompt("Informe a quantidade de quarto(s): ");
      home.qdtBathroom = prompt("Informe a quantidade de banheiro(s): ");
      home.garage = confirm("Possui garagem?") ? "Sim" : "Não";

      const confirmHome = confirm(
        `Cadastrar este imóvel?\n\nProprietário: ${home.nameProprietario}\nQuarto(s): ${home.qdtBedroom}\nBanheiro(s): ${home.qdtBathroom}\nGaragem: ${home.garage}`
      );

      if (confirmHome) {
        saveHomes.push(home);
        alert("Imóvel cadastrado!");
      } else {
        alert("Voltando ao menu!");
      }
      break;
    case "2":
      for (let i = 0; i < saveHomes.length; i++) {
        alert(
          `Imóvel: ${i + 1}\nProprietário: ${
            saveHomes[i].nameProprietario
          }\nQuarto(s): ${saveHomes[i].qdtBedroom}\nBanheiro(s): ${
            saveHomes[i].qdtBathroom
          }\nPossui garagem: ${saveHomes[i].garage}`
        );
      }
      break;
    default:
      alert("Encerrando...");
      break;
  }
} while (option !== 3);
