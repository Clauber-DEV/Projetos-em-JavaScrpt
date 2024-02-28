/**
 * O programa deve receber nome, sexo e salario de 6 pessoas
 * em arrays e exibilos de forma tabular.
 */

const readline = require(`readline`);

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function listaDeCadastro() {

    const total = 6
    const nomes = new Array(total)
    const sexo = new Array(total)
    const salario = new Array(total)

    for (let ind = 0; ind < total; ind++) {
        console.log(`Pessoa ${ind + 1}:`)
        do {
            nomes[ind] = await perguntas(`Nome: `)
        } while (nomes[ind] == "")

        do {
            sexo[ind] = await perguntas(`Sexo: `)
        } while (sexo[ind] != 'm' && sexo[ind] != 'f')

        salario[ind] = await perguntas(`Salario: `)
    }

    console.clear()

    console.log("            LISTAGEM COMPLETA          ")
    console.log("_______________________________________")
    console.log("NOME\t\t\tSEXO\tSALÀRIO")
    console.log("_______________________________________")

    for (let ind = 0; ind < total; ind++) {
        await aguarde(1000)
        console.log(`${nomes[ind]}\t\t\t${sexo[ind]}\tR$${salario[ind]}`)
    }
    interface.close()
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        interface.question(perguntar, resolve);
    });
}

function aguarde(milisegundos) {
    return new Promise(resolve => setTimeout(resolve, milisegundos))
}

listaDeCadastro();

