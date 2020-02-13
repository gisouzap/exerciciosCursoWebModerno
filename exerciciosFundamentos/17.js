const novoSalario = (plano, salarioAtual) => {
  switch (plano) {
    case "A":
      return salarioAtual + salarioAtual * (10 / 100);
    case "B":
      return salarioAtual + salarioAtual * (15 / 100);
    case "C":
      return salarioAtual + salarioAtual * (20 / 100);
    default:
      return "Plano inválido";
  }
};

console.log(novoSalario("A", 1000));
console.log(novoSalario("B", 1000));
console.log(novoSalario("C", 1000));
