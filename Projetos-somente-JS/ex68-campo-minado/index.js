const readline = require('readline');

// Criando uma interface de leitura para interagir com o usuário no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Mensagem de boas-vindas ao usuário
console.log("==============================");
console.log("       CAMPO MINADO v1.0      ");
console.log("==============================");

// Matriz para representar o campo minado
const jogo = [];

// Preenchendo inicialmente o campo com '_'
for (let indL = 0; indL < 5; indL++) {
  jogo[indL] = [];
  for (let indC = 0; indC < 5; indC++) {
    jogo[indL][indC] = '_';
  }
}

// Sorteando aleatoriamente a posição das bombas 'O' na matriz
let bombas = 0;
while (bombas < 7) {
  let lin = sorteia(0, 4);
  let col = sorteia(0, 4);
  if (jogo[lin][col] === '_') {
    jogo[lin][col] = 'O';
    bombas++;
  }
}

// Inicialização do jogo
let tentativas = 1;
let pontos = 0;
let gameOver = false;
jogada();

// Função para o jogador fazer uma jogada
function jogada() {
  // Exibindo o campo minado atual
  exibirCampo(jogo);
  // Pedindo ao jogador para fornecer uma linha e uma coluna
  rl.question(`\nFaça sua jogada! (Tentativas: ${tentativas})\nLinha: `, (lin) => {
    rl.question(`Coluna: `, (col) => {
      lin = parseInt(lin);
      col = parseInt(col);
      // Verificando se a entrada do jogador é válida
      if (isNaN(lin) || isNaN(col) || lin < 0 || lin > 4 || col < 0 || col > 4) {
        console.log("Jogada inválida. Por favor, insira valores válidos.");
        setTimeout(jogada, 1000); // Aguardando 1 segundo antes da próxima jogada
      } else {
        // Verificando se a jogada atingiu uma bomba ou um espaço vazio
        if (jogo[lin][col] === 'O') {
          console.log("--> TIRO ERRADO! Você acertou uma bomba!");
          gameOver = true;
        } else if (jogo[lin][col] === '_') {
          console.log("TIRO CERTO! Parabéns!");
          tentativas++;
          pontos += 2;
        } else {
          console.log("--> Você já atirou nesta posição! Tente novamente.");
        }
        // Verificando se o jogo terminou
        if (!gameOver && tentativas <= 3 && pontos < 6) {
          setTimeout(jogada, 1000); // Aguardando 1 segundo antes da próxima jogada
        } else {
          // Encerrando o jogo
          gameOver = true;
          gameOver();
        }
      }
    });
  });
}

// Função para exibir o campo minado
function exibirCampo(jogo) {
  console.log("\n______________________________\n");
  console.log("\t  0 1 2 3 4");
  console.log("\t  v v v v v\n");
  jogo.forEach((linha, indL) => {
    console.log(`   ${indL}->  ${linha.join(' ')}`);
  });
  console.log("\n______________________________\n");
}

// Função para encerrar o jogo
function gameOver() {
  exibirCampo(jogo);
  console.log("==============================");
  console.log("         GAME OVER");
  console.log("==============================\n");
  console.log(`Você ${pontos === 6 ? "ganhou" : "perdeu"}!`);
  console.log(`Você fez ${pontos} pontos em ${tentativas - 1} tentativas.`);
  rl.close();
}

// Função para gerar números aleatórios dentro de um intervalo
function sorteia(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
