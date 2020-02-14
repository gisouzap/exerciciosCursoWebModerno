const notaFinal = (codigo, n1, n2, n3) => {
  let notas = [];
  notas.push(n1);
  notas.push(n2);
  notas.push(n3);
  //ordena do maior para o menor
  notas.sort((a, b) => (a < b ? 1 : -1));

  let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;
  console.log(
    `Código do aluno: ${codigo}. Notas: ${n1}, ${n2}, ${n3}. ${
      mediaFinal < 5 ? "Reprovado" : "Aprovado"
    }`
  );
};

notaFinal(233, 4, 3, 1);
notaFinal(233, 6, 5, 4);
