const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para criar uma matriz com valores inseridos pelo usuário
async function preencherMatriz() {
    const valores = [];
    for (let il = 0; il < 3; il++) {
        valores[il] = [];
        for (let ic = 0; ic < 3; ic++) {
            valores[il][ic] = await perguntas(`Digite o valor da posição [${il}] [${ic}]: `);
        }
    }
    return valores;
}

// Função para encontrar o maior valor na matriz
function encontrarMaiorValor(valores) {
    let maior = valores[0][0];
    for (let il = 0; il < 3; il++) {
        for (let ic = 0; ic < 3; ic++) {
            if (valores[il][ic] > maior) {
                maior = valores[il][ic];
            }
        }
    }
    return maior;
}

// Função para encontrar as posições do maior valor na matriz
function encontrarPosicoesDoMaior(valores, maior) {
    const posicoes = [];
    for (let il = 0; il < 3; il++) {
        for (let ic = 0; ic < 3; ic++) {
            if (valores[il][ic] === maior) {
                posicoes.push(`[${il}] [${ic}]`);
            }
        }
    }
    return posicoes;
}

// Função para fazer uma pergunta ao usuário
function perguntas(pergunta) {
    return new Promise((resolve) => {
        interface.question(pergunta, resolve);
    });
}

// Função principal
async function principal() {
    console.log("Preencha a matriz:");
    const matriz = await preencherMatriz();

    console.log("Procurando o maior valor...");
    await new Promise(resolve => setTimeout(resolve, 2000));

    const maior = encontrarMaiorValor(matriz);
    console.log(`\nMaior valor encontrado: ${maior}`);

    const posicoes = encontrarPosicoesDoMaior(matriz, maior);
    console.log(`Locais onde foi encontrado o maior valor: ${posicoes.join(', ')}\n`);

    interface.close();
}

// Chamada da função principal
principal();
