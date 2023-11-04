/** O programa deve receber dois valores e realizar uma média entre eles e retornar:
 * abaixo de 5 == reprovado
 * entre 5 e 7 == recupração
 * acima de 7 == aprovado
 * não aceitar valores abaixo de 0 e cima de 10
 */
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Entrada de dados perguntas ao usuário.
rl.question("Primeira nota: ", function (notaprima) {
    rl.question("Segunda nota: ", function (notasecunda) {
        // converção de string para number int
        let nota1 = parseInt(notaprima)
        let nota2 = parseInt(notasecunda)

        // Calculo
        let media = (nota1 + nota2) / 2

        // teste lógico.
        console.log(`A média do aluno é ${media.toFixed(2)}`)
        if (media <= 5) {
            console.log(`O aluno foi REPROVADO!`)
        } else if (media > 5 && media <= 7) {
            console.log(`O aluno está em RECUPERAÇÂO!`)
        } else if (media > 7 && media <= 10) {
            console.log(`O aluno está APROVADO!`)
        } else if (media < 0 || media > 10) {
            console.log("Média não ACEITA! As notas devem ser entre 0 a 10!")
        }

        rl.close()
    });
});