const precoetanal = 5.0;
const precoGasolina = 6.0;
const tipoCombustivel = "gasolina";
const gastomedio = 10;
const distancia = 100;

if (tipoCombustivel === "etanol") {
  valorGasto = (distancia / gastomedio) * precoetanal;
} else {
  valorGasto = (distancia / gastomedio) * precoGasolina;
}

console.log("O valor gasto para a viagem é: R$ " + valorGasto.toFixed(2));
