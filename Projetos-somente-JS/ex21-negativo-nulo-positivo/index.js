 /** O programa deve receber um número do usuário e retornar se é negativo, nulo ou positivo. */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Insira um número: ", function (numero) {

    let num = parseInt(numero);
    
    // Teste lógico.
    if (num > 0) {
        console.log("Positivo");
    } else if (num < 0) {
        console.log("Negativo");
    } else {
        console.log("Nulo");
    }

    rl.close()
});