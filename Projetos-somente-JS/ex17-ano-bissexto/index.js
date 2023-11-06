/** O programa deve receber um ano qualquer do usuário e
 *  avaliar se é bissexto ou nao utilizando condições de avaliação boleanas.*/

console.log("Quer saber qual ano é bissexto?")

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Então digite ele aqui: ", function (anoQualquer) {

    let ano = parseInt(anoQualquer)

    // Avaliação boleana.
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        console.log(`O ano ${ano} é bissexto.`)
    } else {
        console.log(`O ano ${ano} não é bissexto.`)
    }
    rl.close()
})