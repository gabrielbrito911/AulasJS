// desafio 01 Arrays
let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];
console.log(frutas.length);

//desafio 02 for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
//desafio 03 for...in
let usuario = {
  nome: "gabriel",
  email: "gabriel@gmail.com",
};
for (let porta in usuario) {
  console.log(porta + ":" + usuario[porta]);
}

// Desafio 04 for...of
for (let fruta of frutas) {
  console.log(fruta);
}

//desafio 05
