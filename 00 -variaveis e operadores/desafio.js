let precoCombustivel = 5.0;
let gastoMedio = 10; // km por litro
let distancia = 100; // km

// Calculando o total de combustível gasto necessário
let combustivelNecessario = distancia / gastoMedio;
let custoTotal = combustivelNecessario * precoCombustivel;

console.log("O custo total da viagem é: R$ " + custoTotal.toFixed(2)); //output: O custo total da viagem é: R$ 50.00
