// filter() - filtra os elementos de um array, retornando um novo
// array com os elementos que passaram no teste implementado
//  pela função fornecida.
const pessoas = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

const pessoasMaioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);
console.log(pessoasMaioresDeIdade);
