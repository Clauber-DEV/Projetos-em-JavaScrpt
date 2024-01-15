/**exemplo de como sortear valores aleatorios 
 * em um vetor sem repetir e ordena-los em ordem crescente
 */

let totalIndices = 10
let vetor = new Array(totalIndices)

let ind1 = 0, ind2 = 0, auxiliar = 0

let igual = false

// tecnica pra gerar valores aleatórios sem repetir
while (ind1 < vetor.length) {
    vetor[ind1] = Math.floor(Math.random() * 15)
    igual = false

    for (ind2 = 0; ind2 < ind1; ind2++) {
        if (vetor[ind2] === vetor[ind1]) {
            igual = true
            break
        }
    }
    if (igual === false) {
        ind1++
    }
}

// tecnica Bubble sort para ordenar valores

for (ind1 = 0; ind1 < vetor.length - 1; ind1++) {
    for (ind2 = ind1 + 1; ind2 < vetor.length; ind2++) {
        if (vetor[ind1] > vetor[ind2]) {
            auxiliar = vetor[ind1]
            vetor[ind1] = vetor[ind2]
            vetor[ind2] = auxiliar
        }
    }
}

// comando ara exibir vetor
for (ind1 = 0; ind1 < vetor.length; ind1++) {
    process.stdout.write(`${vetor[ind1]} `)
}