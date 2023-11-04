const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Primeira nota: ", function (notaprima) {
    rl.question("Segunda nota: ", function (notasecunda) {

        let nota1 = parseInt(notaprima)
        let nota2 = parseInt(notasecunda)

        let media = (nota1 + nota2) / 2
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