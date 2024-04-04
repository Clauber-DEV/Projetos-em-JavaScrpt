/* Programa para encontrar o maior número em um vetor.
 * O programa recebe um vetor de números e retorna o maior valor.
 */

function maiorNum(vetor) {
    let maior = vetor[0];
    for (let ind = 1; ind < vetor.length; ind++) {
        if (maior < vetor[ind]) {
            maior = vetor[ind];
        }
    }
    return maior;
}

function inicio() {
    const vet = [2, 3, 4, 5, 6, 8, 0];
    console.log("O maior número é:", maiorNum(vet));
}

inicio();
