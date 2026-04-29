//estruturas de repetição for...of
//O for...of é uma estrutura de repetição introduzida
// no ECMAScript 2015 (ES6) que permite iterar sobre
// elementos de uma coleção, como arrays, strings,
// mapas, conjuntos e outros objetos iteráveis.
// Ele é especialmente útil para percorrer os valores
//  de uma coleção sem se preocupar com os índices ou chaves.

//Exemplo de uso do for...of com um array
const listaDeEmails = [
  "bigbifbirl@gmail.com",
  "gaelamaasoso@gmail.com",
  "senac@gmail.com",
];

for (let email of listaDeEmails) {
  console.log(`Enviado email para: ${email}`);
}

//Exemplo de uso do for...of com uma string
const none = "Gabriel";
for (let char of nome) {
  console.log(char);
}
