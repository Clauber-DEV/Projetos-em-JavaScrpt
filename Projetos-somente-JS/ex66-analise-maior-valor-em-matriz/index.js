const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para fazer uma pergunta ao usuário
function perguntar(pergunta) {
    return new Promise((resolve) => {
        interface.question(pergunta, resolve);
    });
}

// Função principal
async function principal() {
    const valores = [];
    let maior = 0;
    let posicoesMaior = [];

    console.log("Preencha a matriz:");
    for (let il = 0; il < 3; il++) {
        valores[il] = [];
        for (let ic = 0; ic < 3; ic++) {
            valores[il][ic] = parseInt(await perguntar(`Digite o valor da posição [${il}] [${ic}]: `));
            if (valores[il][ic] > maior) {
                maior = valores[il][ic];
                posicoesMaior = [`[${il}] [${ic}]`];
            } else if (valores[il][ic] === maior) {
                posicoesMaior.push(`[${il}] [${ic}]`);
            }
        }
    }

    console.log("\nMatriz preenchida:");
    console.log(valores.map(row => row.join('\t')).join('\n'));

    console.log(`\nMaior valor encontrado: ${maior}`);
    console.log(`Locais onde foi encontrado o maior valor: ${posicoesMaior.join(', ')}\n`);

    interface.close();
}

// Chamada da função principal
principal();
