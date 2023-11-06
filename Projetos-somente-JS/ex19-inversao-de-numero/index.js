/** O programa deve receber um valor do usuário e retornar o seu respectivo valor invertido
 * utilizando condições. */

const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function (numero) {

    let num = parseFloat(numero)

    if (num > 0) {
        let invertido = 1 / num
        console.log(`Sue número invertido é ${invertido}.`)
    } else {
        let oposto = num * -1
        console.log(`Seu número invertido é ${oposto}.`)
    }
    rl.close()
});