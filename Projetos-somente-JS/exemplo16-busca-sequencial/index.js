/* exemplo16 VETORES
 * Busca Sequencial em VETOR
 * método para encontrar o valor e em qual indece se encontra
 */

const CriarInterface = require(`readline`);

const Criar = CriarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function buscaChave() {
    let inclurElementos = 10
    let valores = new Array(inclurElementos);
    let chave = 0, indice = 0
    let achei = false

    for (indice = 0; indice < valores.length; indice++) {
        valores[indice] = Math.floor(Math.random() * 11);
    }

    const escolhaChave = await perguntas("Qual é a chave?: ");
    chave = parseInt(escolhaChave)

    for (indice = 0; indice < valores.length; indice++) {
        if (valores[indice] === chave) {
            console.log(`Encontrei a chave na posição: [${indice}].`)
            achei = true
        }
    }

    if (!achei) {
        console.log("\nInfelizmente a chave ", chave, " não se encontra no VETOR.\n\n")
    }

    Criar.close()
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        Criar.question(perguntar, resolve)
    })
}

buscaChave();