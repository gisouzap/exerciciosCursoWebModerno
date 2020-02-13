/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const jurosSimples = (capital, taxa, meses) => {
  return `R$: ${capital * (taxa / 100) * meses + capital}`;
};

const jurosCompostos = (capital, taxa, meses) => {
  return `R$: ${(capital * (1 + taxa / 100) ** meses).toFixed(2)}`;
};

console.log(jurosSimples(1200, 2, 15));
console.log(jurosCompostos(5000, 1, 6));
