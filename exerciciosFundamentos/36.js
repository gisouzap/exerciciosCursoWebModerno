function multiplica(valoresNumericos, elemento) {
  let total = [];
  for (i in valoresNumericos) {
    total.push(elemento * valoresNumericos[i]);
  }
  return total;
}

console.log(multiplica([1, 4, 3], 4));
console.log(multiplica([1, 4, 3], 6));
