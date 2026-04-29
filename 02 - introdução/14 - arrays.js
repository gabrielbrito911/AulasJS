//arrays são objetos que armazenam lista de valores
// em uma unica variável.

// Declarando um arry
let frutas = ["maçã", "banana", "laranja"];

// Acessando elementos do array
console.log(frutas[2]);

//adicionando elementos ao array
frutas.push("uva");
console.log(frutas);

//removendo o ultimo elemento do array
let ultimaFruta = frutas.pop();
console.log(ultimaFruta);
console.log(frutas);
