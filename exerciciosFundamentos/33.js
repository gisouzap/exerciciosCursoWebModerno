let vetorInteiro = [1, 2, 3];
let vetorString = ["A", "B", "C"];
let vetorDouble = [1.1, 2.4, 3.2];

function concatenar(...args) {
  resultados = [];
  for (let i = 0; i < arguments.length; i++) {
    resultados = resultados.concat(arguments[i]);
  }
  return resultados;
}

console.log(concatenar(vetorDouble, vetorInteiro));
console.log(concatenar(vetorInteiro, vetorString, vetorDouble));
