const numero = 10;

const numeroPar = numero % 2 === 0;

console.log(numeroPar); //output: true

const numero = 10;

const numeroPar = numero % 2 === 0;

if (numeroPar) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}

//else if estrutura condicional

const idade = 25;
if (idade < 18) {
  console.log("Você é menor de idade.");
} else if (idade >= 18 && idade < 65) {
  console.log("Você é adulto.");
} else {
  console.log("Você é idoso.");
}
