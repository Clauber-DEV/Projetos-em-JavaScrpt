/* O programa deve preencher os indices do VETOR
 * com a sequencia FIBONACCI
 */

const totalIndices = 15
const vetor = new Array(totalIndices)

let valor1 = 0, valor2 = 1, valor3 = 0

for (let indice = 1; indice < vetor.length; indice++) {
    vetor[0] = 0
    vetor[1] = 1
    vetor[indice] = valor3
    valor3 = valor1 + valor2
    valor1 = valor2
    valor2 = valor3
}

console.log("Sequencia FIBONACCI:")
for (let indice = 1; indice < vetor.length; indice++) {
    process.stdout.write(`[${vetor[indice]}] `)
}
