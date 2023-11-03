/** Programa deve receber dados do usuário em seguida deve entregar 
 * o número inserido e seu antecessor e o predecessor.
 */

// Criação de interface de linha de comando interativa.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite qualquer número inteiro: ', function (numero) { // Entraa de dados.

    // Conversor de string para numberint.
    let primeironum = parseInt(numero);

    // Cálculos.
    let numantes = primeironum - 1;
    let numdepois = primeironum + 1;

    // Resultados.
    console.log("O antecessor de " + primeironum + " é " + numantes);
    console.log("O sucessor de " + primeironum + " é " + numdepois);

    rl.close();
});
