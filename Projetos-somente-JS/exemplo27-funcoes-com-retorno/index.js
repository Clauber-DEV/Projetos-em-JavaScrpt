const lerLinha = require(`readline`);
const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ParImpar(numero) {
    let resposta = ""
    if (numero % 2 === 0) {
        resposta = "par"
    } else {
        resposta = "impar"
    }
    return resposta
}

async function inicio() {
    let numeros = await perguntas(`Digite um número:`)
    let num = parseInt(numeros)
    let resultado = ParImpar(num)

    console.log(`O número ${num} é ${resultado}.`)
    lerL.close()
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        lerL.question(perguntar, resolve)
    });
}

inicio()