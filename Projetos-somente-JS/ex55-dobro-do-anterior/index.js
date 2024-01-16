/** O programa deve receber o valor do primeiro indice do vetor
 * e dobrar o vlor dos indices seguintes até o final do mesmo.
 */

const criarInterface = require(`readline`)

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function oDobro() {

    let indices = 20
    let vetor = new Array(indices)

    const qualValor = await perguntar("Indrodusa o primeiro valor: ");
    let numero = parseInt(qualValor)

    for (let indice = 0; indice < vetor.length; indice++) {
        vetor[indice] = numero
        numero = numero * 2
    }

    for (let indice = 0; indice < vetor.length; indice++) {
        process.stdout.write(` [${vetor[indice]}] `)
    }
    interface.close();
}

function perguntar(perguntas) {
    return new Promise((resolve) => {
        interface.question(perguntas, resolve)
    });
}

oDobro();