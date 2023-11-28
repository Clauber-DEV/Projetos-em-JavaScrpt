const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function aguardarTempo(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exibirMensagens(mensagens) {
    for (const { texto, espera } of mensagens) {
        await aguardarTempo(espera);
        console.log(texto);
    }
}

async function advinhacao() {
    const sorteio = () => Math.floor(Math.random() * 11);
    
    const mensagens = [
        { texto: "   !!!TENTE ADVINHAR JOGADOR!!!", espera: 300 },
        { texto: "\nEstou pensando em um número de 0 a 10", espera: 1000 },
        { texto: "Te dou 3 CHANCES para advinhar...", espera: 0 }
    ];

    const sort = sorteio();
    let num, total = 0;

    await exibirMensagens(mensagens);

    do {
        total++;
        await aguardarTempo(2000);
        console.log(`\n\nCHANCE ${total}/3.`);
        console.log("Em que número eu pensei?");

        const escolhaNum = await perguntar("Escolha um número e aperte [ENTER]: ");
        num = parseInt(escolhaNum);

        await exibirMensagens([
            { texto: "Humm...", espera: 600 }
        ]);

        if (num === sort) {
            await exibirMensagens([
                { texto: `\n  !!!PARABÉNS, VOCÊ ADVINHOU!!!`, espera: 1000 },
                { texto: "\n\n         PLAYER WINS!!!!\n\n", espera: 0 }
            ]);
        } else {
            const dica = num < sort ? "MAIOR" : "MENOR";
            await exibirMensagens([
                { texto: `\n     Você ERROU!`, espera: 1000 },
                { texto: `\n Mas ainda tem CHANCE!`, espera: 600 },
                { texto: `\n Vou te dar uma DICA, é um número ${dica} que ${num}.`, espera: 600 }
            ]);
        }

        if (total === 3 && num !== sort) {
            await exibirMensagens([
                { texto: "\n\n Suas chances ACABARAM.", espera: 1000 },
                { texto: `\n\n O número que pensei foi ${sort}.`, espera: 1000 }
            ]);
        }
    } while (num !== sort && total < 3);

    interface.close();
}

function perguntar(pergunta) {
    return new Promise(resolve => interface.question(pergunta, resolve));
}

advinhacao();
