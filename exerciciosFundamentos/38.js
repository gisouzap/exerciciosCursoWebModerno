function impares(inicio, fim) {
  if (fim > inicio) {
    for (let i = 1; i <= fim; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  } else {
    impares(fim, inicio);
  }
}

impares(0, 20);
impares(30, 0);
