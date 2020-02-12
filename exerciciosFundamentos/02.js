const triangulo = (a, b, c) => {
  if (a == b && b == c) console.log("Equilátero");
  else if (a == b || b == c || c == a) console.log("Isosceles");
  else console.log("Escaleno");
};

triangulo(1, 1, 1);
