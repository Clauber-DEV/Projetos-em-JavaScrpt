/*ex 033
     * Programa que pergunta quantos valores serão sorteados em seguida soma todos eles
     * utilizando variaveis de controle do início.
     */

const lerlinha = require(`readline`);

const lerL = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sorteiaSoma() {
    let quant = 0, sort = 0, ciclo = 0, soma = 0

    lerL.question("Quantos números deseja sortear?: ", function (quantidade) {
        quant = parseInt(quantidade)

        while (ciclo < quant) {
            sort = Math.floor(Math.random() * 10) + 1
            process.stdout.write(`O Ciclo ${ciclo + 1}º sorteou: ${sort} \n`)
            soma += sort
            ciclo++
        }

        lerL.close()
        console.log(`A soma de todos os valores deu: ${soma}`)
    })
}

sorteiaSoma();