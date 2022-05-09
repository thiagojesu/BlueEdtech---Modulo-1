console.clear();
const prompt = require("prompt-sync")();

// VARIÁVEIS
let destino,
  escolha,
  jogada,
  jogador,
  maria = 0,
  espada = 0,
  drag = 0,
  escudo = 0;

// OBJETO
let tempo = {
  dia: 1,
  hora: 5,
  minuto: 0,
};
let personagem = {
  ataque: 3,
  defesa: 3,
  vida: 15,
  ataqueEspada: function () {
    this.energia--;
    return this.ataque * 20;
  },
  defesaEscudo: function () {
    return this.defesa * 10;
  },
};

let dragao = {
  ataque: 30,
  defesa: 30,
  vida: 150,
};

// FUNÇÕES

perdeVidaPers = (dano) => {
  return (personagem.vida -= dano);
};
perdeVidaDrag = (dano) => {
  return (dragao.vida -= dano);
};
passaHora = (addhora) => {
  return (tempo.hora += addhora);
};
passaMinuto = (addminuto) => {
  return (tempo.minuto += addminuto);
};
mostraVida = () => {
  console.log(`Vida: ${personagem.vida}`);
};
dado = () => {
  return Math.floor(Math.random() * 6 + 1);
};
continuar = () => {
  console.log();
  prompt(`Pressione ENTER para continuar...`);
};
gameOver = () => {
  console.log();
  personagem.vida = 0;
  mostraVida();
  console.log();
  console.log(`#GAME OVER#`);
  console.log();
};
statusPers = () => {
  console.clear();
  if (tempo.hora >= 24) {
    (tempo.hora -= 24), tempo.dia++;
  } else if (tempo.minuto >= 60) {
    (tempo.minuto -= 60), tempo.hora++;
  }
  console.log(`Dia ${tempo.dia} - ${tempo.hora}h:${tempo.minuto}m`);
  console.log(`Vida: ${personagem.vida}`);
};
statusDrag = () => {
  return console.log(`Vida Míssera: ${dragao.vida}`);
};
mostraTempo = () => {
  console.clear();
  if (tempo.hora >= 24) {
    (tempo.hora -= 24), tempo.dia++;
  } else if (tempo.minuto >= 60) {
    (tempo.minuto -= 60), tempo.hora++;
  }
  console.log(`Dia ${tempo.dia} - ${tempo.hora}h:${tempo.minuto}m`);
};
descanso = () => {
  if (personagem.vida < 15) {
    do {
      statusPers();
      console.log(`Você deseja descansar?`);
      escolha = prompt().toLowerCase();
      console.clear();
      if (escolha == `s` || escolha == `sim`) {
        passaHora(15 - personagem.vida);
        personagem.vida = 15;
        console.clear();
      }
    } while (escolha != `s` && escolha != `n` && escolha != `sim` && escolha != `nao`);
  }
};
escolhaDestino = () => {
  do {
    statusPers();
    console.log(`Por onde você deseja ir? `);
    let listaDestino = [
      ,
      `(1) Resgatar maria`,
      `(2) Comprar uma espada`,
      `(3) Comprar escudo`,
      `(4) Enfrentar o dragão`,
      `(5) encerrar a aventura e ficar com maria`,
      `(6) Dormir`,
      `(7) Desistir`,
    ];

    if (maria < 1) {
      console.log(listaDestino[1]);
    }
    if (espada < 1) {
      console.log(listaDestino[2]);
    }
    if (escudo < 1) {
      console.log(listaDestino[3]);
    }
    if (drag < 1) {
      console.log(listaDestino[4]);
    }
    if (espada > 0 && maria > 0 && escudo > 0) {
      console.log(listaDestino[5]);
    }
    if (tempo.hora >= 17 || tempo.hora < 5) {
      console.log(listaDestino[6]);
    }
    if (drag == 0) {
      console.log(listaDestino[7]);
    }
    destino = +prompt();
  } while (
    isNaN(destino) ||
    !Number.isInteger(destino) ||
    destino < 1 ||
    destino > 7
  );
};
// HISTÓRIA
console.log(`Você é um jovem campones, que treina todos os dias para se tonar um
 grande herói matando o terrivel dragão que atormenta sua vila a tempos,
durante um de seus treinos matinais com uma espada de madeira que você leva pra todo lado,
uma de suas vizinhas te avisa que sua grande amiga de infancia foi sequestrada por 
uma ceita que cultua esse grande dragão`);
continuar();
console.clear();
console.log(`A garota sequestrada é Maria, você nunca teve a oportunidade de dizer,
mas você é eternamente apaixonado por ela, ao saber que ela foi sequestrada e possivelmente
será sacrificada, você toma coragem, e resolve que irá resgata=la você
mesmo, e ainda, matar o grande drgão você mesmo!`);
continuar();
console.clear();

// ESCOLHAS
while (true) {
  descanso();
  escolhaDestino();

  // DESTINOS
  if (destino == 1 && maria == 0) {
    if (maria > 0) {
      statusPers();
      console.log(`Você já resgatou a princesa. Siga nas outras missões!`);
      continuar();
    } else {
      statusPers();
      console.log(
        `Você decide que é hora de ir resgatar Maria!`
      );
      continuar();

      do {
        listaEscolha = [
          ,
          `(1) DEIXAR SER PRESO E PLANEJAR UMA FUGA COM MARIA NO CALABOUÇO`,
          `(2) ATACAR TODOS OS SEGUIDORES DO DRAGÃO`,
          `(3) TENTAR RESGATA=LA NO ESTILO STEALTH`,
        ];
        statusPers();
        console.log(
          `Você se dirigr até a ceita que sequestrou Maria, do lado de fora da ceita você ouve dezenas de homens lá dentro`
        );
        console.log();
        console.log(listaEscolha[1]);
        console.log(listaEscolha[2]);
        console.log(listaEscolha[3]);
        escolha = +prompt();
      } while (
        isNaN(escolha) ||
        !Number.isInteger(escolha) ||
        escolha < 1 ||
        escolha > 3
      );

      if (escolha == 1) {
        passaHora(4);
        statusPers();
        console.log(
          `Você se entregou e foi preso! No calabouço, maria te conta o plano de fuga dela.`
        );
        console.log(`Juntos, vocês conseguem fugir e voltar para a cidade!`);
        continuar();
        maria++;
      } else if (escolha == 2) {
        if (espada == 0) {
          console.clear();
          mostraTempo();
          console.log(
            `Você lutou bravamente, mas eles eram muitos e você acabou morto!`
          );
          gameOver();
          break;
        } else if (espada > 0) {
          passaHora(2);
          passaMinuto(30);
          statusPers();
          console.log(
            `Com a espada em mãos, os guardas não tiveram chance contra você, que derrotou todos eles`
          );
          console.log(
            `e salvou maria da prisão, voltando com ela para a cidade.`
          );
          continuar();
          maria++;
        }
      } else if (escolha == 3) {
        jogada = dado();
        if (jogada % 2 == 0) {
          passaHora(3);
          statusPers();
          console.log(
            `Você conseguiu resgatar-la sem que ninguém percebesse. Juntos, vocês voltaram para cidade.`
          );
          continuar();
          maria++;
        } else {
          do {
            listaEscolha = [
              ,
              `(1) FUGIR DE VOLTA PRA CIDADE`,
              `(2) SE ENTREGAR E DEIXAR SER PRESO`,
              `(3) LUTAR`,
            ];
            passaHora(1);
            statusPers();
            console.log(`VOCÊ FOI AVISTADO! O QUE FAZER?`);
            console.log();
            console.log(listaEscolha[1]);
            console.log(listaEscolha[2]);
            console.log(listaEscolha[3]);
            escolha = +prompt();
          } while (
            isNaN(escolha) ||
            !Number.isInteger(escolha) ||
            escolha < 1 ||
            escolha > 3
          );

          if (escolha == 1) {
            passaHora(2);
            statusPers();
            console.log(`Você conseguiu fugir de volta para a cidade!`);
            continuar();
          } else if (escolha == 2) {
            passaHora(4);
            statusPers();
            console.log(
              `Você se entregou e foi preso! Ao encontrar maria na prisão você descobre que ela já tinha um plano de fuga.`
            );
            console.log(`Juntos, vocês conseguem fugir e voltar a cidade.`);
            continuar();
            maria++;
          } else if (escolha == 3) {
            if (espada == 0) {
              passaHora(1);
              mostraTempo();
              console.log(
                `Você travou uma intensa batalha mas, eles eram muitos e você foi morto!`
              );
              gameOver();
              break;
            } else if (espada > 0) {
              passaMinuto(30);
              passaHora(2);
              statusPers();
              console.log(
                `Você acabou com todos os guardas e resgatou a princesa Arlim. Juntos, voltaram pra cidade.`
              );
              continuar();
              espada++;
            }
          }
        }
      }
    }
  } else if (destino == 2 && espada == 0) {
    if (espada > 0) {
      statusPers();
      console.log(`Você já comprou uma espada.`);
      passaMinuto(10);
      continuar();
    } else {
      statusPers();
      console.log(
        `Você usa quase todas as sua economias ára comprar a espada mais afiada e poderosa que você poderia encontrar.
        você perde uma hora procurando a espada mais poderosa que você poderia encontrar`
      );
      passaHora(1);
      espada++;
      continuar();
    }
  } else if (destino == 3 && escudo == 0) {
    if (escudo > 0) {
      statusPers();
      console.log(`Você já comprou um escudo.`);
      passaMinuto(10);
      continuar();
    } else {
      statusPers();
      console.log(
        `Você usa quase todas as sua economias para comprar um escudo,
         e perde uma hora escolhendo o melhor escudo possivel!`
      );
      passaHora(1);
      passaMinuto(30);
      escudo++;
      continuar();
    }
  } else if (destino == 4 && drag == 0) {
    if (
      (espada == 0 && escudo == 0) ||
      (espada > 0 && escudo == 0) ||
      (espada == 0 && escudo > 0)
    ) {
      statusPers();
      console.log(
        `Você não terá chance contra o dragão se não tiver uma espada e um escudo em mãos.`
      );
      continuar();
    } else if (espada > 0 && escudo > 0) {
      statusPers();
      console.log(
        `Você está pronto para enfrentar o dragão! Vá em frente`
      );
      continuar();
      passaHora(5);
      statusPers();
      console.log(
        `Depois de horas subindo a montanha, finalmente você chega na caverna do dragão.`
      );
      passaMinuto(20);
      continuar();
      statusPers();

      while (true) {
        drag = dado();
        jogador = dado();
        do {
          listaEscolha = [, `(1) ATACAR`, `(2) DEFENDER`];
          statusPers();
          statusDrag();
          console.log(`Como agir?`);
          escolha = +prompt(
            `Deseja ${listaEscolha[1]} ou ${listaEscolha[2]}: `
          );
        } while (
          isNaN(escolha) ||
          !Number.isInteger(escolha) ||
          escolha < 1 ||
          escolha > 2
        );

        if (escolha == 1) {
          if (jogador >= drag) {
            jogador += personagem.ataqueEspada();
            drag += dragao.defesa;
            perdeVidaDrag(jogador - drag);
            statusPers();
            console.log(`Você acertou o ataque!`);
            statusDrag();
            continuar();
          } else {
            perdeVidaPers(drag - jogador);
            statusPers();
            console.log(`O dragão defendeu o ataque e contra-atacou!`);
            statusDrag();
            continuar();
          }
          if (personagem.vida <= 0) {
            break;
          }
          if (dragao.vida <= 0) {
            break;
          }
        } else if (escolha == 2) {
          if (drag > jogador) {
            jogador += personagem.defesaEscudo();
            drag += dragao.ataque;
            perdeVidaPers(drag - jogador);
            statusPers();
            console.log(`Você recebeu um ataque!`);
            statusDrag();
            continuar();
          } else {
            statusPers();
            console.log(`Você defendeu o ataque!`);
            statusDrag();
            continuar();
          }
          if (personagem.vida <= 0) {
            break;
          }
          if (dragao.vida <= 0) {
            break;
          }
        }
      }
      if (dragao.vida <= 0) {
        statusPers();
        console.log(
          `VOCÊ VENCE O GRANDE DRAGÃO!! VOCÊ SE SENTE O SER MAIS PODEROSO DO MUNDO`
        );
        continuar();
      }
      if (personagem.vida <= 0) {
        mostraTempo();
        console.log(
          `Mesmo com toda sua bravura, o dragão demonstrou o quão forte é e matou você!`
        );
        gameOver();
        break;
      }
      passaHora(5);
    }
  } else if (destino == 5 && espada > 0 && maria > 0 && escudo > 0) {
    if (drag == 0) {
      do {
        statusPers();
        console.log(
          `Se você for agora, sem derrotar o dragão, você o mesmo pode acabar acontecendo com outras garotas`
        );
        escolha = prompt(
          `Deseja fugir mesmo assim? `
        ).toLowerCase();
      } while (
        escolha != `s` &&
        escolha != `sim` &&
        escolha != `n` &&
        escolha != `nao`
      );

      if (escolha == `s` || escolha == `sim`) {
        mostraTempo();
        console.log(
          `junto de maria, voceê foge para terras distantes, longe do dragão e sua ceita`
        );
        console.log();
        console.log(`FIM`);
        console.log();
        break;
      }
    } else {
      mostraTempo();
      console.log(
        `Todos de sua vila te recebem com uma festa! Você é eleito o novo heroi da vilas`
      );
      continuar();
      console.clear();
      console.log(
        `Você aproveita a grande festa, e declara seu amor para Maria, que lhe corresponde.`
      );
      console.log(
        `Vocês se casam, e passa o resto de sua vida defendendo as pessoas da vila ao lado de sua amada esposa!`
      );
      console.log();
      console.log(`FIM  :3  `);
      console.log();
      break;
    }
  } else if (destino == 6 && (tempo.hora >= 17 || tempo.hora < 5)) {
    (tempo.hora = 5),
      (tempo.minuto = Math.floor(Math.random() * 59 + 1)),
      tempo.dia++;
  } else if (destino == 7) {
    console.log(`Você pensa que talvez... essa aventura seja demais para você,
     e decide rezar para que algum heroi apareça... infelizmente... ninguem veio... e maria acabou morrendo...`)
    break;
  }
}
