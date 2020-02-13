let partidas = [10, 20, 20, 8, 25, 3, 0, 30, 4];

const temporada = partidas => {
  let pior = 1;
  let maiorpontuacao = partidas[0];
  let menorpontuacao = partidas[0];
  let recorde = 0;

  for (let i = 0; i <= partidas.length; i++) {
    if (partidas[i] > maiorpontuacao) {
      maiorpontuacao = partidas[i];
      recorde++;
    } else if (partidas[i] < menorpontuacao) {
      menorpontuacao = partidas[i];
      pior = i + 1;
    }
  }
  return [recorde, pior];
};

console.log(temporada(partidas));
