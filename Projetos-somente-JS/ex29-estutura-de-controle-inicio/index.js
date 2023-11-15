/**
 * Programa que leia do inicio, fim e o
 * incremento de uma contagem, mostrando 
 * em seguida os velores na tela de forma gradativa.
 * estrutura de controle do inicio
 * calculadora personalizada.
 */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function contagem() {
    let inicio = await perguntas("Onde começar a contagem?: ");
    let ini = parseInt(inicio);

    let fimContagem = await perguntas("Onde termina a contagem?: ");
    let fim = parseInt(fimContagem);

    let incremento = await perguntas("Qual vai ser o incremento?: ");
    let incre = parseInt(incremento);

    while (ini <= fim) {
        console.log(`${ini} - `);
        ini += incre;
    };

    rl.close();
};

function perguntas(perguntas) {
    return new Promise((resolve) => {
        rl.question(perguntas, resolve);
    });
};

contagem();