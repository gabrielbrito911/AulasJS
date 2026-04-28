// Operadores Lógicos

// && -> AND -> E logico
// || -> OR -> OU logico
// ! -> NOT -> NÃO logico

//exemplo do operador E (&&)
let x = 5;
let y = 10;

if (x > 0 && y > 0) {
  console.log("ambos x e y são maiores que zero.");
} else {
  console.log("Pelo menos um dos valores é falso.");
}

//exemplo do operador OU logico (||)
let a = -3;
let b = 7;

if (a > 0 || b > 0) {
  console.log("pelo menos um dos valores é maior que zero.");
} else {
  console.log("Nenhum dos valores é maior que zero.");
}

//exemplo do operador NÃO logico (!)
let souDesenvolvedor = true;

if (!souDensenvolvedor) {
  console.log(" Eu não sou um desenvolvedor.");
} else {
  console.log("Eu sou um desenvolvedor.");
}
