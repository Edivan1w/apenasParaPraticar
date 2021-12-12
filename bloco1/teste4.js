//conversão implícita
const numero = 50;
const numeroString = "50";
const numeroString2 = "t50"
console.log(numero == numeroString);
console.log(numero === numeroString);
console.log(numero + numeroString);
//conversão explícita
console.log(numero + Number(numeroString));
console.log(numero + Number(numeroString2));
