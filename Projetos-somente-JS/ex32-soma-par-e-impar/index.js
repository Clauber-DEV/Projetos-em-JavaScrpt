/*ex 032
	 *Programa que leia 5 valores e faça a 
	 *soma de impares e pares separados
	 *utilizando operadores de ctrl do inicio
	 */
const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function somaParImpar() {
    let ciclo = 1, valor, somap = 0, somai = 0


    while (ciclo <= 5) {
        let primeiroValor = await pergunta(`Digite o ${ciclo}º valor: `)
        valor = parseInt(primeiroValor);

        if (valor % 2 === 0) {
            somap += valor
        } else {
            somai += valor
        }

        ciclo++
    }
    process.stdout.write(`Soma dos pares, ${somap}.`)
    process.stdout.write(`Soma dos impares, ${somai}.`)

    lerL.close();

}

function pergunta(pergunta) {
    return new Promise((resolve) => {
        lerL.question(pergunta,resolve)
    });
}

somaParImpar();