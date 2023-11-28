/** ex 46 
 * construindo uma tabuada utilizando o comando "for"
 */

const { networkInterfaces } = require("os");
const criarInterface = require(`readline`);

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function tabuada() {
    let ciclo = 0, numero = 0, multiplicador = 0

    const inserirnum = await pergunta("Insira o número para tabuada: ")
    numero = parseInt(inserirnum)

    for (ciclo = 1; ciclo <= 10; ciclo++) {
        multiplicador = ciclo * numero
        await aguarde(400)
        console.log(`${numero} X ${ciclo} = ${multiplicador}`)
    }
    interface.close()
}

function pergunta(pergunta) {
    return new Promise((resolve) => {
        interface.question(pergunta, resolve);
    })
}

function aguarde(milisegundos) {
    return new Promise(resolve => setTimeout(resolve, milisegundos))
}

tabuada();