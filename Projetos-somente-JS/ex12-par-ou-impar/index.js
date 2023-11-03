/** O programa deve analizar se o número é par ou impar com condição if else. */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function (numero) {// Entrada de dados.
    let num = parseInt(numero)

    if (num % 2 == 0) { // condição boleana caso o resto da divisão seja igual a zero.
        console.log(`O número é par.`) // caso true == verdade
    } else {
        console.log(`O número é impar.`) // caso false == falso
    }
    rl.close()
})