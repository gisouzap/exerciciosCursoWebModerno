function pA(n, a1, r) {
  let termos = [];
  let soma = 0;
  for (let i = 0; i < n; i++) {
    termos.push(a1 + r * i);
  }
  soma = (n * (a1 + (a1 + (n - 1) * r))) / 2;
  return [termos, soma];
}

function pG(n, a1, r) {
  let termos = [];
  let soma = 0;
  for (let i = 0; i < n; i++) {
    termos.push(a1 * r ** i);
  }
  soma = (a1 * (r ** n - 1)) / (r - 1);
  return [termos, soma];
}

console.log(pA(10, 10, 15));
console.log(pG(10, 5, 3));
