//estrutura de repetiçao - for in

//for in - lê os indices ou chave do objeto
const pessoa = {
  nome: "gabriel",
  idade: 16,
  profissao: "Estudante",
};

for (const stributo in pessoa) {
  console.log("o atributo" + atributo + "=" + pessoa[atributo]);
}
