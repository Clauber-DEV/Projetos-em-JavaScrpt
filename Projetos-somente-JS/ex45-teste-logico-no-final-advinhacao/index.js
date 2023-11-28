/* ex 045 teste logico no final
 * O programa deve sortear um número entre 1 a 10
 * ter uma condição caso a valor inserido seja menor
 * ter uma condição caso o valor inserido seja maior
 * ter uma condição caso o usuário não acrete dentro das chances oferecidas
 * Autor: Clauber Cardoso porto
 */

const criarInterface = require(`readline`);

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function advinhacao() {
    let num = 0, sort = 0, total = 0;

    // Cabeçalho ou apresentação
    await aguardar(300);
    console.log("   !!!TENTE ADVINHAR JOGADOR!!!");
    await aguardar(1000);
    console.log("\nEstou pensando em um numero de 0 a 10");
    console.log("Te dou 3 CHANCES para advinhar...");

    sort = Math.floor(Math.random() * 11);  // Sorteio

    do {
        total++;		// Contador ou marcador de chances

        // Entrada de dados
        await aguardar(2000);
        console.log(`\n\nCHANCE ${total}/3.`);
        console.log("Em que número eu pensei?");

        const escolhaNum = await perguntar("Escolha um número e aperte [ENTER]: ");
        num = parseInt(escolhaNum);

        await aguardar(1000);
        console.log("Humm...");


        // Implemento de condições
        if (num === sort) {		// Condição para entrada igual ao sorteado
            await aguardar(1000);
            console.log("\n  !!!PARABENS, VOCÉ ADVINHOU!!!!");
            console.log("\n\n         PLAYER WINS!!!!\n\n");
        } else {
            if (num < sort && total < 3) {		// Condição para entrada menor que o sorteado
                await aguardar(1000);
                console.log("\n     Você ERROU!");
                await aguardar(600);
                console.log("\n Mas ainda tem CHANCE!");
                await aguardar(600);
                console.log(`\n Vou te dar uma DICA, é um número MAIOR que ${num}.`);
            }
            if (num > sort && total < 3) {		// Condição para entrada maior que o sorteado
                await aguardar(1000);
                console.log("\n     Não foi dessa vez!");
                await aguardar(600);
                console.log("\n Mas ainda tem CHANCE!");
                await aguardar(600);
                console.log(`\n Se liga na DICA, é um número MENOR do que ${num}.`);
            }
        }
        if (total === 3 && num !== sort) {	// Condição caso esgote as chances do usuário
            await aguardar(1000);
            console.log("\n\n Suas chances ACABARAM.");
            await aguardar(1000);
            console.log(`\n\n O número que pensei foi ${sort}.`);
        }
    } while (num !== sort && total < 3);

    interface.close();
}

function perguntar(perguntar) {
    return new Promise((resolve) => {
        interface.question(perguntar, resolve);
    });
}

function aguardar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

advinhacao();
