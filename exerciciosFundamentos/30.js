let numeros = [2, 3, 5, 6, 4];

function maiorMenor(vetor) {
  let maior = vetor[0];
  let menor = vetor[0];
  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) maior = vetor[i];
    if (vetor[i] < menor) menor = vetor[i];
  }
  return [maior, menor];
}

console.log(maiorMenor(numeros));
