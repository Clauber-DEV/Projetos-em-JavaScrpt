const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n==============================");
console.log("       CAMPO MINADO v1.0      ");
console.log("==============================");

const jogo = [];
const tamanho = 5;

for (let indL = 0; indL < tamanho; indL++) {
    jogo[indL] = [];
    for (let indC = 0; indC < tamanho; indC++) {
        jogo[indL][indC] = '_';
    }
}

let quant = 7;
let tentativas = 1;
let pontos = 0;

let pl, pc;
let bomba = 0;

while (bomba < quant) {
    pl = sorteia(0, tamanho - 1);
    pc = sorteia(0, tamanho - 1);
    if (jogo[pl][pc] === '_') {
        jogo[pl][pc] = 'O';
        bomba++;
    }
}

jogada();

function jogada() {
    console.log("\n______________________________\n");
    console.log("\t  0 1 2 3 4\n");
    console.log("\t  v v v v v\n");

    for (let indL = 0; indL < tamanho; indL++) {
        process.stdout.write(`     ${indL}->  `);
        for (let indC = 0; indC < tamanho; indC++) {
            if (jogo[indL][indC] === '_' || jogo[indL][indC] === 'O') {
                process.stdout.write("? ");
            } else {
                process.stdout.write(`${jogo[indL][indC]} `);
            }
        }
        console.log("");
    }

    console.log("\n______________________________\n");
    console.log(`Faça sua jogada! (Tentativas: ${tentativas})`);

    setTimeout(() => {
        rl.question("Linha = ", (answer1) => {
            let lin = parseInt(answer1);
            if (lin >= 0 && lin < jogo.length) {
                setTimeout(() => {
                    rl.question("COLUNA = ", (answer2) => {
                        let col = parseInt(answer2);
                        if (col >= 0 && col < jogo[0].length) {
                            if (jogo[lin][col] === 'O') {
                                console.log("--> TIRO ERRADO! Você acertou uma bomba!");
                                jogo[lin][col] = '*';
                                gameOver(false);
                            } else if (jogo[lin][col] === '_') {
                                console.log("TIRO CERTO! Parabéns!");
                                jogo[lin][col] = 'V';
                                tentativas++;
                                pontos += 2;
                                if (tentativas < quant || pontos < quant * 2) {
                                    jogada();
                                } else {
                                    gameOver(true);
                                }
                            } else if (jogo[lin][col] === 'V') {
                                console.log("--> Você já atirou nessa posição! Tente novamente!");
                                jogada();
                            }
                        } else {
                            console.log("Coluna inválida! Tente novamente.");
                            jogada();
                        }
                    });
                }, 1000);
            } else {
                console.log("Linha inválida! Tente novamente.");
                jogada();
            }
        });
    }, 1000);
}

function gameOver(vitoria) {
    console.log("\n==============================");
    console.log("           GAME OVER          ");
    console.log("==============================\n");

    for (let indL = 0; indL < tamanho; indL++) {
        for (let indC = 0; indC < tamanho; indC++) {
            process.stdout.write(`${jogo[indL][indC]} `);
        }
        console.log("");
    }

    console.log("\n______________________________");

    if (vitoria) {
        console.log("VITÓRIA! VOCÊ GANHOU! :)");
    } else {
        console.log("VOCÊ NÃO GANHOU!! :(");
    }
    console.log(`Você fez ${pontos} pontos em ${tentativas - 1} tentativas\n\n\n\n`);
    
    rl.close(); // Encerra a interface de leitura de entrada
}

function sorteia(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
