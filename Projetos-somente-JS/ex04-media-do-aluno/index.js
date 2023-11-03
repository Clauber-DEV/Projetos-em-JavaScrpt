/** O progrma deve apresentar uma média simples de dois valores. */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Entrada de dados, perguntas ao usuário.
rl.question(`1º Nota: `, function (nota1) {
    rl.question(`2º Nota: `, function (nota2) {

        // Converção de elementos.
        let n1 = parseInt(nota1);
        let n2 = parseInt(nota2);

        // Calculo.
        let media = (n1 + n2) / 2;

        // Saída de dados.
        console.log("As notas do aluno foram, " + n1 + " e " + n2 + ".");
        console.log("A média final é, " + media);

        rl.close();
    });
});