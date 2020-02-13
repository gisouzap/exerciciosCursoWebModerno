/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

const verifica = numero => {
  return numero % 3 == 0 ? true : false;
};

console.log(verifica(3));
console.log(verifica(5));
console.log(verifica(10));
console.log(verifica(12));
