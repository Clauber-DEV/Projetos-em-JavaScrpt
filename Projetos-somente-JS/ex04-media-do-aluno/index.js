const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`1º Nota: `, function (nota1) {
    rl.question(`2º Nota: `, function (nota2) {

        let n1 = parseInt(nota1);
        let n2 = parseInt(nota2);

        let media = (n1 + n2) / 2;

        console.log("As notas do aluno foram, " + n1 + " e " + n2 + ".");
        console.log("A média final é, " + media);

        rl.close();
    });
});