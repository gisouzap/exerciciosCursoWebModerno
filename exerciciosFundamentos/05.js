const valorDecimal = dinheiro => {
  let valor = `R$: ${dinheiro
    .toFixed(2)
    .toString()
    .replace(".", ",")}`;
  console.log(valor);
};

valorDecimal(0.1 + 0.2);
