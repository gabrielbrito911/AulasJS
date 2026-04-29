// funçães de seta (arrow functions) são uma forma mais concisa
//  de escrever funções em JavaScript. Elas foram introduzidas no
//  ECMAScript 6 (ES6) e são especialmente úteis para funções de
//  callback e funções anônimas.

//exemplo 1: Função de seta simples
const saudacao = () => {
  return "Olá Mundo!";
};

console.log(saudacao());

//exemplo 2:
const soma = (a, b) => {
  return a + b;
};
console.log(soma(89, 1));

//exemplo 3:
const multiplicacao = (a, b) => a * b;
console.log(multiplicacao(5, 6));
