const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Em qual cidade você mora?: ", function (cidade) {

    const letrasjuntas = cidade.replace(/\s/g, '');

    console.log(`Sua cidade é ${cidade.toUpperCase()}!`)
    console.log(`A primeira letra da sua cidade é ${cidade.charAt(0)}.`)
    console.log(`E ela tem ${letrasjuntas.length} caracteres.`)


    rl.close()
});