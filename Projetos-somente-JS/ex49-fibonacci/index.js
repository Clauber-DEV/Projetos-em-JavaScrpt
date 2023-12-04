	/*  ex 049
	 *  rep com val de controle
	 *  sequencia FIBONACCI
	 */

const criarInterface = require(`readline`);

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function fibonacci() {
    let ciclo = 0, numero = 0, soma1 = 0, soma2 = 1

    let quantidade = await perguntas("Quantos elementos você quer exibir?: ")
    numero = parseInt(quantidade);

    for (ciclo = 1; ciclo <= numero; ciclo++) {
        await aguarde(400)
        console.log(`  ${soma1}`)
        await aguarde(400)
        console.log(`  ${soma2}`)

        soma1 += soma2
        soma2 += soma1
    }

    console.log("Fim da sequincia!")
    interface.close()
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        interface.question(perguntar, resolve)
    })
}

function aguarde(milisegundos) {
    return new Promise(resolve => setTimeout(resolve, milisegundos))
}

fibonacci();
