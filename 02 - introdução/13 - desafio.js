// desafio 01 switch case
let diaSemana = math.floor(Math.random() * 7) + 1; // Gerando um número aleatório entre 1 e 7
let nomeDia;
switch (diaSemana) {
  case 0:
    nomeDia = "hoje é Domingo";
    break;
  case 1:
    nomeDia = "hoje é Segunda-feira";
    break;
  case 2:
    nomeDia = "hoje é Terça-feira";
    break;
  case 3:
    nomeDia = "hoje é Quarta-feira";
    break;
  case 4:
    nomeDia = "hoje é Quinta-feira";
    break;
  case 5:
    nomeDia = "hoje é Sexta-feira";
    break;
  case 6:
    nomeDia = "hoje é Sábado";
    break;
  default:
    nomeDia = "Número inválido para o dia da semana.";
}
console.log(nomeDia);
