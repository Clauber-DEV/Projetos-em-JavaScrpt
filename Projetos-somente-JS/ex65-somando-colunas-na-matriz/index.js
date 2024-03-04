// função para gerar números aleatórios entre min e max (inclusive)
function sorteia(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// função para preencher uma matriz com números aleatórios
function preencherMatriz(matriz, linhas, colunas) {
    for (let indl = 0; indl < linhas; indl++) {
        for (let indc = 0; indc < colunas; indc++) {
            matriz[indl][indc] = sorteia(0, 5);
        }
    }
}

// Função para somar os elementos de uma coluna da matriz
function somarColuna(matriz, coluna) {
    let total = 0;
    for (let indl = 0; indl < matriz.length; indl++) {
        total += matriz[indl][coluna];
    }
    return total;
}

// Função para exibir a matriz e somar as colunas
function exibirMatrizESomarColunas(matriz) {
    for (let indl = 0; indl < matriz.length; indl++) {
        let linha = '';
        for (let indc = 0; indc < matriz[indl].length; indc++) {
            linha += matriz[indl][indc] + '\t';
        }
        console.log(linha);
    }

    console.log('\n');

    // Somando e exibindo as colunas
    for (let indc = 0; indc < matriz[0].length; indc++) {
        let totalcolunas = somarColuna(matriz, indc);
        console.log(`Soma coluna ${indc}: ${totalcolunas}`);
    }
}

// função principal
function principal() {
    // Declarando a matriz e definindo o números de linhas e colunas
    const linhas = 4;
    const colunas = 4;

    // implementação do método .fill() que preenche um array com dados estáticos, no caso com valor nulo "null"
    /* implementação do método .map(() =>) que irá mapear um array "linhas"  e repetir seus dados em outro array "colunas". */
    const valores = new Array(linhas).fill(null).map(() => new Array(colunas).fill(null));

    // Preenchendo a matriz com números aleatórios
    preencherMatriz(valores, linhas, colunas);

    // Exibindo a matriz
    console.log(`Matriz preenchida com números aleatórios:`);
    exibirMatrizESomarColunas(valores);
}

// chamada da função principal
principal();
