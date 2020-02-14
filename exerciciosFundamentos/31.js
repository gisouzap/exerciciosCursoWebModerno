function negativos(vetor) {
  let c = 0;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) c++;
  }
  return c;
}

let vetor = [-1, -2, -3, 4, 5, 4, 21, -21, -22];
console.log(negativos(vetor));
