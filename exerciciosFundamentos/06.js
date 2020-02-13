const jurosSimples = (capital, taxa, meses) => {
  return `R$: ${capital * (taxa / 100) * meses + capital}`;
};

const jurosCompostos = (capital, taxa, meses) => {
  return `R$: ${(capital * (1 + taxa / 100) ** meses).toFixed(2)}`;
};

console.log(jurosSimples(1200, 2, 15));
console.log(jurosCompostos(5000, 1, 6));
