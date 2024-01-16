/** Exmplo de busca binéria em um vetor */

const criarInterface = require(`readline`)

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function buscaBinaria() {

    let totalndice = 10
    let vetor = new Array(totalndice)

    let ind1 = 0, ind2 = 0, auxiliar = 0

    let igual = false

    while (ind1 < vetor.length) {
        vetor[ind1] = Math.floor(Math.random() * 15)
        igual = false

        for (ind2 = 0; ind2 < ind1; ind2++) {
            if (vetor[ind2] === vetor[ind1]) {
                igual = true
                break
            }
        }

        if (igual === false) {
            ind1++
        }
    }

    console.log("Vetor desordenado:")

    for (ind1 = 0; ind1 < vetor.length; ind1++) {
        process.stdout.write(` ${vetor[ind1]} `)
    }

    for (ind1 = 0; ind1 < vetor.length - 1; ind1++) {
        for (ind2 = ind1 + 1; ind2 < vetor.length; ind2++) {
            if (vetor[ind1] > vetor[ind2]) {
                auxiliar = vetor[ind1]
                vetor[ind1] = vetor[ind2]
                vetor[ind2] = auxiliar
            }
        }
    }

    console.log(`\nVetor Ordenado:`)

    for (ind1 = 0; ind1 < vetor.length; ind1++) {
        process.stdout.write(` ${vetor[ind1]} `)
    }
    console.log("\n")

    // busca binária.

    let chave = 0, inicio = 0, fim = vetor.length - 1, meio = 0,
        encontrado = false

    const qualValor = await perguntas(`Quer encontrar qual valor?: `)
    chave = parseInt(qualValor);

    while (inicio <= fim) {
        meio = Math.floor((inicio + fim) / 2)
        if (vetor[meio] === chave) {
            encontrado = true
            break
        } else {
            if (chave > vetor[meio]) {
                inicio = meio + 1
            } else {
                fim = meio - 1
            }
        }
    }

    if (encontrado === true) {
        console.log(`O valor da chave ${chave} foi encontrado na posição ${meio}.`)
    } else {
        console.log(`Infelizmente a chave ${chave} não e encontra no vetor.`)
    }

    interface.close();
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        interface.question(perguntar, resolve)
    })
}

buscaBinaria();