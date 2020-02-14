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
