/**O programa deve receber um valor do usuário e somalo de 5 em 5 e apresentalo na tela. */

const criarInterface = require(`readline`);

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function deCincoEmCinco() {

    let totIndeces = 10
    let vetor = new Array(totIndeces)

    console.log(`Contagem de cinco em cinco.`)

    const qualValor = await perguntas("Digite o oprimeiro valor: ")
    let numero = parseInt(qualValor)

    for (let indice = 0; indice < vetor.length; indice++) {
        vetor[indice] = numero
        numero = numero + 5
    }

    for (let indice = 0; indice < vetor.length; indice++) {
        process.stdout.write(` [${vetor[indice]}] `)
    }

    interface.close();
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        interface.question(perguntar, resolve)
    });
};

deCincoEmCinco()