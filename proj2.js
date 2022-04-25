console.clear();
const prompt = require("prompt-sync")();

const comandos = ["pedra", "papel", "tesoura"];
let numeroaleatorio = Math.floor(Math.random() * 3);

let qtdrodadas = 0;
let pontosU = 0;
let pontosM = 0;
let empates = 0;

console.log("Bem vindo! Este é um jogo de jokempo, então divirta-se!");

console.log();

do {
  console.clear();""
  console.log("quantas vezes você quer jogar?");
  qtdrodadas = +prompt();

  console.log();

  for (let i = 0; i < qtdrodadas; i++) {
    console.log('Digite "0" para pedra, "1" para papel e "2" para tesoura');
    let respostaU = +prompt();

    console.log();

    let respMaq = numeroaleatorio;

    while (respostaU != "0" && respostaU != "1" && respostaU != "2") {
      console.log('Responda com "0", "1" ou "2"');
      respostaU = +prompt();
    }
    if (
      (respostaU == 0 && respMaq == 2) ||
      (respostaU == 1 && respMaq == 0) ||
      (respostaU == 2 && respMaq == 1)
    ) {
      pontosU++;
    } else if (
      (respMaq == 0 && respostaU == 2) ||
      (respMaq == 1 && respostaU == 0) ||
      (respMaq == 2 && respostaU == 1)
    ) {
      pontosM++;
    } else {
      empates++;
    }

    console.log();
  }

  console.log(`Você ganhou ${pontosU} vezes`);
  console.log(`A maquina ganhou ${pontosM} vezes`);
  console.log(`o jogo empatou ${empates} vezes.`);

  console.log();

  if (pontosU > pontosM) {
    console.log("Você foi o vencedor! parabens!");
  } else if (pontosM > pontosU) {
    console.log("A maquina foi a vencedora, que pena.");
  } else {
    console.log("o jogo empatou!");
  }

  console.log();

  console.log('deseja jogar novamente?  digite "sim"');

  respF = 0;

  respF = prompt().toLowerCase();
} while (respF == "sim");

console.log();
