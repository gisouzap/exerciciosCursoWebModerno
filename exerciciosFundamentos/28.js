/*​ Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/
let vetor = [3, 2, 5, 4, 6, 7, 7, 9];

function parImpar(vetor) {
  let par = 0;
  let impar = 0;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) par++;
    else impar++;
  }
  return [par, impar];
}

console.log(parImpar(vetor));
