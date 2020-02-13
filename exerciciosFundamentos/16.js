const calculadora = (a, op, b) => {
  switch (op) {
    case "+":
      return `${a} + ${b} = ${a + b}`;
    case "-":
      return `${a} - ${b} = ${a - b}`;
    case "*":
      return `${a} * ${b} = ${a * b}`;
    case "/":
      return `${a} / ${b} = ${a / b}`;
    default:
      return "Operação inválida.";
  }
};

console.log(calculadora(5, "+", 3));
console.log(calculadora(5, "-", 3));
console.log(calculadora(5, "*", 3));
console.log(calculadora(5, "/", 3));
console.log(calculadora(5, "a", 3));
