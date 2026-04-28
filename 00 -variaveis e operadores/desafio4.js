let precodeumProduto = 100;
let Quantidadecomprada = 3;
let Desconto = 0.2; // 20%

// Calculando o valor total da compra com desconto
let valorTotalSemDesconto = precodeumProduto * Quantidadecomprada;
let valorDesconto = valorTotalSemDesconto * Desconto;
let valorTotalComDesconto = valorTotalSemDesconto - valorDesconto;
console.log(
  "O valor total da compra sem desconto é: R$ " +
    valorTotalSemDesconto.toFixed(2),
);
console.log("O valor do desconto é: R$ " + valorDesconto.toFixed(2));
console.log(
  "O valor total da compra com desconto é: R$ " +
    valorTotalComDesconto.toFixed(2),
);
