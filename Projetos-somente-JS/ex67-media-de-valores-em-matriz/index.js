// Função para preencher uma matriz com números aleatórios entre 0 e 10
function preencherMatriz(matriz, linhas, colunas) {
    let somaTotal = 0;
    for (let indl = 0; indl < linhas; indl++) {
        matriz[indl] = [];
        for (let indc = 0; indc < colunas; indc++) {
            const valor = Math.floor(Math.random() * 11);
            matriz[indl][indc] = valor;
            somaTotal += valor;
        }
    }
    return somaTotal;
}

// Função para calcular a média dos valores na matriz
function calcularMedia(matriz, linhas, colunas) {
    let somaTotal = 0; // Inicializa a soma total
    let numeroTotalElementos = 0; // Inicializa o número total de elementos na matriz

    // Percorre a matriz para calcular a soma total e contar o número total de elementos
    for (let indl = 0; indl < linhas; indl++) {
        for (let indc = 0; indc < colunas; indc++) {
            somaTotal += matriz[indl][indc]; // Soma o valor atual
            numeroTotalElementos++; // Incrementa o contador de elementos
        }
    }

    // Calcula a média dividindo a soma total pelo número total de elementos
    const media = somaTotal / numeroTotalElementos;
    return media;
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
    const somaTotal = preencherMatriz(matriz, linhas, colunas);


    console.log(`Matriz preenchida com números aleatórios:`);
    exibirMatriz(matriz, somaTotal);
    console.log(`Soma total dos valores na matriz: ${somaTotal}`)

    const media = calcularMedia(matriz, linhas, colunas);
    console.log(`Média dos valores na matriz: ${media}`);
}

// Chamada da função principal
principal();
