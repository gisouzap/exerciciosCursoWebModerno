const frutas = fruta => {
  switch (fruta) {
    case "maçã":
      console.log("Não vendemos essa fruta aqui.");
      break;
    case "kiwi":
      console.log("Estamos com escassez de kiwis");
      break;
    case "melancia":
      console.log("Aqui está, são 3 reais o quilo");
      break;
    default:
      console.log("Erro, fruta inválida ou não disponível no estoque");
  }
};

frutas("melancia");
frutas("kiwi");
frutas("maçã");
frutas("amora");
