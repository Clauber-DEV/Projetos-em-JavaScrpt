/*  ex 050
 *  repetição com laços aninhados
 *  utilisando o comando "para"
 */

const criarInterface = require(`readline`);

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function tabuada() {
    let ciclo1 = 0, ciclo2 = 0,
        inicio = 0, final = 0,
        resultado = 0

    const ini = await interacao("Inicio: ")
    inicio = parseInt(ini)

    const fim = await interacao("Final: ")
    final = parseInt(fim)

    for (ciclo1 = inicio; ciclo1 <= final; ciclo1++) {
        console.log(`Tabuada de ${ciclo1}`)
        for (ciclo2 = 1; ciclo2 <= 10; ciclo2++) {
            resultado = ciclo1 * ciclo2
            console.log(`${ciclo1} X ${ciclo2} = ${resultado}`);
            await aguarde(300)
        }
    }
    console.log("Fim da tabuada!")
    interface.close()
}

function aguarde(milissgundos) {
    return new Promise(resolve => setTimeout(resolve,milissgundos))
};

function interacao(perguntas) {
    return new Promise((resolve) => {
        interface.question(perguntas, resolve)
    })
}

tabuada();