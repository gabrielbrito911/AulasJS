// Operadores Logicos de Comparação
// Em JavaScript, os operadores de comparação são usados para comparar valores e retornar um valor booleano (true ou false) com base na comparação. Aqui estão os principais operadores de comparação:

// 1.igualdade (==): Compara dois valores para igualdade, mas não compara os tipos. Ele realiza uma conversão de tipo se os tipos forem diferentes.
// 2.estritamente igual (===): Compara dois valores para igualdade, levando em consideração os tipos. Ele retorna true apenas se os valores e os tipos forem iguais.
// 3.desigualdade (!=): Compara dois valores para desigualdade, mas não compara os tipos. Ele realiza uma conversão de tipo se os tipos forem diferentes.
// 4.estritamente desigual (!==): Compara dois valores para desigualdade, levando em consideração os tipos. Ele retorna true apenas se os valores ou os tipos forem diferentes.
// 5.maior que (>): Compara se o valor à esquerda é maior que o valor à direita.
// 6.menor que (<): Compara se o valor à esquerda é menor que o valor à direita.
// 7.maior ou igual (>=): Compara se o valor à esquerda é maior ou igual ao valor à direita.
// 8.menor ou igual (<=): Compara se o valor à esquerda é menor ou igual ao valor à direita.

// igualdade (==)
console.log("Igualdade (==):");
console.log(5 == "5"); //true, porque realiza coerçao de tipo
console.log(5 == 5); //tree
console.log(5 == 10); //false

// estritamente igual (===)
console.log("Estritamente Igual (===):");
console.log(5 === "5");
console.log(5 === 5);
console.log(5 === 10);

// desigualdade (!=)
console.log("Desigualdade (!=):");
console.log(5 != "5");
console.log(5 != 5);
console.log(5 != 10);

// Estritamente Desigual (!==)
console.log("Estritamente Desigual (!==):");
console.log(5 !== "5");
console.log(5 !== 5);
console.log(5 !== 10);

//maior que (>)
console.log("Maior que (>):");
console.log(5 > "5");
console.log(5 > 5);
console.log(5 > 10);

//menor que (<)
console.log("Mior ou igual que (>=):");
console.log(5 >= "5");
console.log(5 >= 5);
console.log(5 >= 10);

// Maior ou igual (>=)
console.log("Menor que (<=):");
console.log(5 <= "5");
console.log(5 <= 5);
console.log(5 <= 10);
