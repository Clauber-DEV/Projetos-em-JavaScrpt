// Função para preencher uma matriz com números aleatórios entre 0 e 10
function preencherMatriz(matriz, linhas, colunas) {
    for (let indl = 0; indl < linhas; indl++) {
        matriz[indl] = [];
        for (let indc = 0; indc < colunas; indc++) {
            matriz[indl][indc] = Math.floor(Math.random() * 11);
        }
    }
}

// Função para exibir a matriz
function exibirMatriz(matriz) {
    matriz.forEach(row => console.log(row.join('\t')));
}

// Função principal
function principal() {
    const linhas = 3;
    const colunas = 3;

    const matriz = new Array(linhas);
    preencherMatriz(matriz, linhas, colunas);

    console.log(`Matriz preenchida com números aleatórios:`);
    exibirMatriz(matriz);
}

// Chamada da função principal
principal();
// falta terminar..............