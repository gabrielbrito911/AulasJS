// reduce() é um método de array que reduz uma coleção de valores
//  a um único valor, aplicando uma função a cada elemento do
//  array, acumulando o resultado. Ele é muito útil para
// operações como soma, multiplicação, contagem, etc.
const funcionarios = [
  { nome: "João", salario: 3000 },
  { nome: "Maria", salario: 4000 },
  { nome: "Pedro", salario: 5000 },
];

//exwmplo 1: Somar os salários dos funcionários
const totalSalarios = funcionarios.reduce((acumulador, funcionario) => {
  return acumulador + funcionario.salario;
}, 0);

console.log(`Total de salários: ${totalSalarios}`);
