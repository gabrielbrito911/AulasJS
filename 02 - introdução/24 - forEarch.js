// for Each é um método de array que executa uma função para cada
// elemento do array. Ele é usado para iterar sobre os elementos do
// não retorna um novo array, ele apanas executa a função para cada
// elemento.

const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

pessoas.forEach((pessoa, indice) => {
  console.log(pessoa, indice);
});
