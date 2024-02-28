/*  ex 063
 *  Faça um programa que leia a idade de 6 pessoas
 *  e no final calcule e mostre:
 *  - A média de idade do grupo
 *  - Uma lista com todos que estão acima da lista de idade
 *  - A maior idade do grupo
 *  = Lista com pessas mais velhas, caso seja mais de um
 */

const readline = require(`readline`);

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function analiseDePessoas() {

    const total = 2
    let nomes = new Array(total)
    let idade = new Array(total)
    let somaIdades = 0
    let maiorIdade = 0
    let mediaIdade = 0.0

    for (let ind = 0; ind < total; ind++) {
        nomes[ind] = await perguntas(`Nome da ${ind + 1}º pessoa:`)

        let recebeIdade = await perguntas(`Idade:`)
        idade[ind] = parseInt(recebeIdade)
        somaIdades += idade[ind]
        if (ind === 0) {
            maiorIdade = idade[ind]
        } else {
            if (idade[ind] > maiorIdade) {
                maiorIdade = idade[ind]
            }
        }
    }
    mediaIdade = somaIdades / total
    console.clear()

    console.log("___________________________________________")
    console.log("Maior idade do grupo ,", maiorIdade, " anos.")
    console.log("Quem tem a maior idade: ")

    for (let ind = 0; ind < total; ind++) {
        if (idade[ind] === maiorIdade) {
            console.log(`${nomes[ind]}`)
        }
    }
    interface.close()
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        interface.question(perguntar, resolve)
    });
}

analiseDePessoas()