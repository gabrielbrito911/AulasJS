// escopo em jovascript
// o escopo determina a visibilidade e acessibilidade de variáveis
// e funções e objetos em diferentes partes do código.
//Existem dois tipos principais de escopo em JavaScript: escopo global e escopo local.

//escopo global
let escopoGlobal = "Eu sou uam variável global";

function motrarEscopoGlobal() {
  let escopoLocal = "Eu sou uma variável local";
  console.log(escopoGlobal);
}

motrarEscopoGlobal();
console.log(escopoLocal); // Isso causará um erro, pois escopoLocal não é acessível fora da função.
console.log(escopoGlobal); // Isso funcionará, pois escopoGlobal é acessível em todo o código.
