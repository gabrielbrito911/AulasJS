let valorkwh = 0.5;
let consumoMensal = 200; // kWh
let taxaAdicional = 0.1; // 10%

// Calculando o valor total da conta de luz
let valorTotal = valorkwh * consumoMensal;
let valorComTaxa = valorTotal + valorTotal * taxaAdicional;
console.log("O valor total da conta de luz é: R$ " + valorTotal.toFixed(2));
console.log("O valor com taxa adicional é: R$ " + valorComTaxa.toFixed(2));
