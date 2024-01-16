/** O programa deve preencher o vetor com valores aleatórios
 * e apresentalos na ordem em que foram preenchidos e seu inverso.
 */

const totalIndices = 10
let vetor = new Array(totalIndices);

for (let indice = 0; indice < vetor.length; indice++) {
    vetor[indice] = Math.floor(Math.random() * 15)
}
console.log("Ordem cresente.")
for (let indice = 0; indice < vetor.length; indice++) {
    process.stdout.write(`${indice}-[${vetor[indice]}]  `)
}

console.log("\n\nOrdem decresente.")
for (let indice = vetor.length - 1; indice >= 0; indice--) {
    process.stdout.write(`${indice}-[${vetor[indice]}]  `)
}
