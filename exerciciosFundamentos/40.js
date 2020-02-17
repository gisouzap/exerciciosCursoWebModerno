let notas = [3, 7, 8, 6, 11, 10];

function conceitos(arr) {
  let resultado = [];
  arr.forEach(element => {
    if (element >= 0 && element <= 4.9) resultado.push("D");
    else if (element >= 5 && element <= 6.9) resultado.push("C");
    else if (element >= 7 && element <= 8.9) resultado.push("B");
    else if (element >= 9 && element <= 10) resultado.push("A");
    else resultado.push("Nota inválida");
  });
  return resultado;
}

console.log(conceitos(notas));
