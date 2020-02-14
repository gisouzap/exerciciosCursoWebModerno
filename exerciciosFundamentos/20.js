function saque(dinheiro) {
  let valorSaque = dinheiro;
  let cd100 = 0,
    cd50 = 0,
    cd10 = 0,
    cd5 = 0,
    cd1 = 0;
  while (valorSaque >= 100) {
    valorSaque -= 100;
    cd100++;
  }
  while (valorSaque >= 50) {
    valorSaque -= 50;
    cd50++;
  }
  while (valorSaque >= 10) {
    valorSaque -= 10;
    cd10++;
  }
  while (valorSaque >= 5) {
    valorSaque -= 5;
    cd5++;
  }
  while (valorSaque >= 1) {
    valorSaque -= 1;
    cd1++;
  }
  cedulas(cd100, cd50, cd10, cd5, cd1);
}

function cedulas(cd100, cd50, cd10, cd5, cd1) {
  if (cd100 > 0) {
    console.log(`${cd100} nota(s) de R$ 100.`);
  }
  if (cd50 > 0) {
    console.log(`${cd50} nota(s) de R$ 50.`);
  }
  if (cd10 > 0) {
    console.log(`${cd10} nota(s) de R$ 10.`);
  }
  if (cd5 > 0) {
    console.log(`${cd5} nota(s) de R$ 5.`);
  }
  if (cd1 > 0) {
    console.log(`${cd1} nota(s) de R$ 1.`);
  }
}

saque(250);
saque(443);
saque(22);
