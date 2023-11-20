/* ex034 
 * Programa que leia 4 valores 
 * diga a quantidade de pares e impares 
 * some os tipos e em seguida tire a média dessa soma.
 * utilizando variaveis de controle do início.
 */

const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function mediaParImpar() {
    let ciclo = 1
    let val = 0
    let somaP = 0,  somaI = 0
    let quantP = 0, quantI = 0
    let mediaP = 0, mediaI = 0

    while (ciclo <= 4) {
        let valor = await valorEntrada(`Digite o ${ciclo}º valor: `)
        val = parseFloat(valor)
        if (val % 2 === 0) {
            somaP += val
            quantP++
        } else {
            somaI += val
            quantI++
        }
        ciclo++
    }
    lerL.close()
    mediaP = somaP / quantP
    mediaI = somaI / quantI

    console.log(`Foram ${quantP} números par que somados dão: ${somaP} e a média deles será ${mediaP.toFixed(2)}.`)
    console.log(`Foram ${quantI} números impar que somados dão: ${somaI} e a média deles será ${mediaI.toFixed(2)}.`)
}

function valorEntrada(valorEntrada) {
    return new Promise((resolve) => {
        lerL.question(valorEntrada, resolve);
    });
}

mediaParImpar();