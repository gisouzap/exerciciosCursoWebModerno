function plano(idade) {
  if (idade <= 10) return 180;
  else if (idade < 30) return 150;
  else if (idade < 60) return 195;
  else if (idade > 60) return 230;
}

console.log(plano(34));
console.log(plano(65));
console.log(plano(15));
console.log(plano(9));
