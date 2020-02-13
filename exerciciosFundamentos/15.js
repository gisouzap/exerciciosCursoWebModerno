const concessionaria = carro => {
  switch (carro) {
    case "hatch":
      return "Compra efetuada com sucesso!";
    case "sedan":
    case "motocicleta":
    case "caminhonete":
      return "Tem certeza que não prefere este modelo?";
    default:
      return "Não trabalhamos com este tipo de automóvel aqui.";
  }
};

console.log(concessionaria("hatch"));
console.log(concessionaria("avião"));
console.log(concessionaria("caminhonete"));
console.log(concessionaria("sedan"));
