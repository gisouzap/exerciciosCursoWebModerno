const bhaskara = (ax2, bx, c) => {
  let delta = bx ** 2 - 4 * ax2 * c;
  let vetor = [];
  if (delta < 0) return "delta é negativo";
  let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
  vetor.push(x1);
  let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
  vetor.push(x2);
  return vetor;
};

console.log(bhaskara(1, 8, -9));
