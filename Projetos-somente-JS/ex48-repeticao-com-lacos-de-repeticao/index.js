/* ex 048 repetição com variaveis de controle
 * O programa deve receber um valor inteiro do usuário 
 * informar se o valor implemetado é um número primo
 * Autor: Clauber Cardoso Porto
 */

const readline = require('readline');
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numeroprimo() {
    let numero = 0, div = 0;

    entrada.question("Número: ", function (num) {
        numero = parseInt(num);

        for (let ciclo = 1; ciclo <= numero; ciclo++) {
            if (numero % ciclo === 0) {
                console.log("[", ciclo, "]");
                div = div + 1;
            } else {
                console.log(" ", ciclo, " ");
            }
        }

        entrada.close();

        if (div === 2) {
            console.log("O número ", numero, " foi divisível apenas por 1 e por ele mesmo.");
            console.log("Esse é um número PRIMO");
        } else {
            console.log("O número ", numero, " não é PRIMO.");
        }
    });
}

numeroprimo();
