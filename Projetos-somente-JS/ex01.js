const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu nome: ', function(nome) {
    console.log("Olá, " + nome + "! Bem-vindo ao nosso site.");
    rl.close();
});
