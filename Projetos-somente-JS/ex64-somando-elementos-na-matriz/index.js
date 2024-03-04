
// função para gerar números aleatórios entre min e max (inclusive)
function sorteia(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// função para preencher uma matriz com números aleatórios
function preencherMatriz(matriz, linhas, colunas) {
    for (let indl = 0; indl < linhas; indl++) {
        for (let indc = 0; indc < colunas; indc++) {
            matriz[indl][indc] = sorteia(0, 5);
        }
    }
}

// Função para somar os elementos de uma linha da matriz
function somarLinha(matriz, linha) {
    let total = 0;
    for (let ic = 0; ic < matriz[linha].length; ic++) {
        total += matriz[linha][ic];
    }
    return total;
}

// Função para exibir a matriz
function exibirMatriz(matriz) {
    for (let il = 0; il < matriz.length; il++) {
        for (let ic = 0; ic < matriz[il].length; ic++) {
            process.stdout.write(matriz[il][ic] + '\t');
        }
        process.stdout.write('\n\n');
    }
}

// função principal
function principal() {
    // Declarando a matriz e definindo o números de linhas e colunas
    const linhas = 4
    const colunas = 4

    // implementação do mmétodo .fill() que preenche um array com dados estáticos, no caso com valor nulo "null"
    /* implimentação do método .map(() =>) que irá mapear um array "linhas"  e repetir seus dados em outro array "colunas". */
    const valores = new Array(linhas).fill(null).map(() => new Array(colunas).fill(null));

    // Preenchendo a matriz com números aleatórios
    preencherMatriz(valores, linhas, colunas);

    // Exibindo a matriz
    console.log(`Matriz preenchida com números aleatórios:`)
    exibirMatriz(valores);

    // Somando a exibindo as linhas
    for (let indl = 0; indl < linhas; indl++) {
        let totallinha = somarLinha(valores, indl)
        console.log(`Somando linha ${indl}: ${valores[indl].join(` + `)} = ${totallinha}`);
    }
}

// chamada da função principal
principal();