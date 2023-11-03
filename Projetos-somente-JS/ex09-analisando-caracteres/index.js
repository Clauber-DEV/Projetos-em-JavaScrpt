/** O programa deve receber qual cidade e retornar a cidade toda maiúscula, a primeira letra e quantos caracteres as palavras tem. */
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Em qual cidade você mora?: ", function (cidade) {

    // Comando para não considerar espaços e caracteres speciais.
    const letrasjuntas = cidade.replace(/\s/g, '');

    // Sapida de dados.
    console.log(`Sua cidade é ${cidade.toUpperCase()}!`) // Comando para deixar tudo maiúsculo
    console.log(`A primeira letra da sua cidade é ${cidade.charAt(0)}.`) // Comando para pegar a primeira letra da primeira palavra.
    console.log(`E ela tem ${letrasjuntas.length} caracteres.`) // Comando para contar todos os caracteres.


    rl.close()
});