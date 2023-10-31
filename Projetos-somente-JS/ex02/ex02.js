const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite qualquer número inteiro: ', function(numero) {
    
    let n, nme, nma;
    
    n = parseInt(numero);

    // Cálculos
    nme = n - 1;
    nma = n + 1;

    // Resultados
    console.log("O antecessor de " + n + " é " + nme);
    console.log("O sucessor de " + n + " é " + nma);

    rl.close();
});