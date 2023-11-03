/** O programa deve avaliar dois valores e retornar qual o maior ou se são iguais utilizando condições aninhasdas. */
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Digite primeiro número: `, function (primeironumero) {
    rl.question(`Digite segundo número: `, function (segundonumero) {

        let num1 = parseInt(primeironumero)
        let num2 = parseInt(segundonumero)

        if (num1 > num2) {
            console.log(`O ${num1} é maior.`)
        } else if (num1 < num2) {
            console.log(`O ${num2} é maior.`)
        } else {
            console.log(`Os números são iguais.`)
        }
        rl.close()
    });
});