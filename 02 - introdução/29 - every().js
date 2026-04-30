// every() - verifica se todos os elementos do array satisfazem
// a condição dada
const alunos = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 8 },
  { nome: "Pedro", nota: 8 },
];

const todosAprovados = alunos.every((aluno) => aluno.nota >= 7);

console.log(todosAprovados);
