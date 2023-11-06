/** O programa deve receber dois valores do usuário e informar se estão
 *  em ordem crescente, decrescente ou iguais. */
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function (numero1) {
    rl.question("Digite outro número: ", function (numero2) {

        let num1 = parseInt(numero1);
        let num2 = parseInt(numero2);

        if (num1 < num2) {
            console.log(`Seus valores estão ordem crescente ${num1} - ${num2}.`)
        } else if (num1 > num2) {
            console.log(`Seus valores estão em ordem decrescente ${num2} - ${num1}.`)
        } else {
            console.log(`Seus valores são iguais ${num2} = ${num1}.`)
        }

        rl.close()
    });
});