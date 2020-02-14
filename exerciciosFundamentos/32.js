function media(vetor) {
  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma = soma + vetor[i];
  }
  return soma / vetor.length;
}

let vetor = [6, 6, 8, 10, 10];
console.log(media(vetor));
