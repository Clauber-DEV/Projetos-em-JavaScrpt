/* M05 ex 076 Número primo com função
 *  O programa deve receber um valor do usuário
 *  e verificar se o número é primo ou não, retornando o resultado.
 */

function numPrimo(n) {
    let ePrimo = true;
    for (let pos = 2; pos < n; pos++) {
        if (n % pos === 0) {
            ePrimo = false;
            break;
        }
    }
    if (ePrimo) {
        return " é número primo.";
    } else {
        return " não é número primo.";
    }
}

function inicio() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function continuar() {
        rl.question("Quer continuar? [s/n]: ", (resp) => {
            if (resp.toLowerCase() === 's') {
                rl.question("Digite qualquer número: ", (num) => {
                    console.log(`O valor ${num}${numPrimo(parseInt(num))}`);
                    continuar();
                });
            } else {
                console.log("FIM");
                rl.close();
            }
        });
    }

    rl.question("Esse número é PRIMO??\nDigite qualquer número: ", (num) => {
        console.log(`O valor ${num}${numPrimo(parseInt(num))}`);
        continuar();
    });
}

inicio();
