/** Programa para interagir com o usuário. */

// Criação de interface de linha de comando interativa.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, // entrada padrão
    output: process.stdout // saída padrão
});

rl.question('Digite seu nome: ', function (nome) { // Entrada de dados.
    console.log("Olá, " + nome + "! Bem-vindo ao nosso site."); // Saída de dados.
    rl.close();
});
