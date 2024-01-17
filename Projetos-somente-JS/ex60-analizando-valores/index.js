/** O programa deve analizar números 
 * sorteados dentro de um vetor*/

async function analizandoValores() {

    const totalIndices = 10;
    const vetor = new Array(totalIndices);

    let maiorNum = 0, maiorTotal = 0

    console.log(" Sorteando números:")

    for (let ind = 0; ind < vetor.length; ind++) {
        vetor[ind] = Math.floor(Math.random() * 8)
        process.stdout.write(` [${vetor[ind]}] `)
        await aguarde(300)

        if (ind === 0) {
            maiorNum = vetor[ind]
        } else {
            if (vetor[ind] > maiorNum) {
                maiorNum = vetor[ind]
            }
        }
    }

    console.log("\n           Pronto!")
    console.log("_________________________________")
    console.log("       Analiando os valores:")
    await aguarde(500)
    console.log("_________________________________")
    console.log("O maior valor sorteado foi: ", maiorNum, "")
    process.stdout.write("O maior valor ocorreu nas posições: ")

    for (let ind = 0; ind < vetor.length; ind++) {
        if (vetor[ind] === maiorNum) {
            process.stdout.write(`{${ind}} `)
            maiorTotal++
            await aguarde(300)
        }
    }
    console.log(`\nO maior valor apareceu ${maiorTotal} vezes.`)

    let somaPar = 0, somaImpar = 0
    console.log("_________________________________")
    process.stdout.write("Valores pares nas posições:")
    for (let ind = 0; ind < vetor.length; ind++) {
        if (vetor[ind] % 2 === 0) {
            process.stdout.write(`{${ind}} `)
            somaPar += vetor[ind]
            await aguarde(300)
        }
    }
    console.log(`\nA soma dos valores pares é: ${somaPar}.`)


    console.log("_________________________________")
    process.stdout.write("Valores impares nas posições:")
    for (let ind = 0; ind < vetor.length; ind++) {
        if (vetor[ind] % 2 !== 0) {
            process.stdout.write(`{${ind}} `)
            somaImpar += vetor[ind]
            await aguarde(300)
        }
    }
    console.log(`\nA soma dos valores impares é: ${somaImpar}.`)
}

function aguarde(milisegundos) {
    return new Promise(resolve => setTimeout(resolve, milisegundos))
}

analizandoValores()