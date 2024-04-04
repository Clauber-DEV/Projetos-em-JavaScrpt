/* M05 ex 076 retornando somas
 * O programa deve receber dois valores do usuário na função REAL
 * e somá-los na função FORMAL e retornar o resultado para função REAL
 */

function totalSoma(n1, n2) {
    return n1 + n2;
}

function inicio() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Somando valores em outra função!\nDigite o primeiro valor: ", (num1) => {
        rl.question("Digite o segundo valor: ", (num2) => {
            console.log("SOMANDO...");
            setTimeout(() => {
                console.log(`A soma de ${num1} e ${num2} é: ${totalSoma(parseInt(num1), parseInt(num2))}`);
                rl.close();
            }, 500);
        });
    });
}

inicio();
