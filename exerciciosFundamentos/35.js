let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function adicionaVetor(vetorPilha, vetorAdiciona) {
  for (i in vetorAdiciona) {
    vetorPilha.push(vetorAdiciona[i]);
  }
  return vetorPilha;
}

console.log(adicionaVetor(vetorPilha, vetorAdiciona));
