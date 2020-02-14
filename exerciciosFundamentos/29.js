/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function intervalo(vetor) {
  let dentro = 0;
  let fora = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) dentro++;
    else fora++;
  }
  return `Estão dentro do intervalo ${dentro} números. Estão fora do intervalo ${fora} números.`;
}
let arr = [10, 11, 13, 19, 3, 2, 4, 6, 7, 2];
console.log(intervalo(arr));
