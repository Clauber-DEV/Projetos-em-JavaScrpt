// exemplo 19 como criar matrizes em java script

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// acessando elementos da matriz
console.log(matriz[0][0]); // Saída: 1 (linha 0 coluna 0)
console.log(matriz[1][2]); // Saída: 6 (linha 1 coluna 2)

// Iterando sobre elementos da matriz
for (let indl = 0; indl < matriz.length; indl++) {
    for (let indc = 0; indc < matriz.length; indc++) {
        console.log(matriz[1][3])
    }
}

// Modificando um valor na matriz

matriz[1][1] = 10;
console.log(matriz[1][1]); // saída == 10