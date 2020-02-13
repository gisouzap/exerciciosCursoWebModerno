const lanchonete = (pedido, qtd) => {
  switch (pedido) {
    case 100:
      return `${qtd} Cachorro Quente = R$: ${qtd * 3}.`;
    case 200:
      return `${qtd} Hambúrguer Simples = R$: ${qtd * 4}.`;
    case 300:
      return `${qtd} Cheeseburguer = R$: ${qtd * 5.5}.`;
    case 400:
      return `${qtd} Bauru = R$: ${qtd * 7.5}.`;
    case 500:
      return `${qtd} Refrigerante= R$: ${qtd * 3.5}.`;
    case 600:
      return `${qtd} Suco = R$: ${qtd * 2.8}.`;
    default:
      return "Produto não existe.";
  }
};

console.log(lanchonete(100, 3));
console.log(lanchonete(500, 1));
console.log(lanchonete(605, 3));
