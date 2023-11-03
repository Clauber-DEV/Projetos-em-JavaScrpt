/**Programa para retirar a primeira palavra de uma fraze. */

//Criação de interfece de linha de comando interativa de 3 ao 10
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu nome completo: ", function (nomecompleto) { // Entrada de dados.

    // Comando para dividir a frase em palavras usando o espaço como separador.
    const nomedividido = nomecompleto.split(" ");

    // Irá pegar do primeiro elemento [0] até o primeiro espaço que será a primeira palavra.
    const primeironome = nomedividido[0]

    console.log(`Seu primeiro nome é ${primeironome}`) // Saída de dados.

    rl.close()// Fechamento da interface.
});