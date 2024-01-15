/**exemplo de como gerar números aleatórios 
 * sem repetir em um vetor.
 */

let valores = 15
let vetor = new Array(valores);

let ind = 0, ind2 = 0

let igual = false

while (ind < vetor.length) {
    vetor[ind] = Math.floor(Math.random() * 19)
    igual = false

    for (ind2 = 0; ind2 < ind; ind2++) {
        if (vetor[ind2] == vetor[ind]) {
            igual = true
            break
        }
    }
    if (igual == false) {
        ind++
    }
}

for (ind = 0; ind < vetor.length; ind++) {
    process.stdout.write(`${vetor[ind]}\t`)
}