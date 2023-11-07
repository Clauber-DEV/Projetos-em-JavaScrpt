const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function lerNotas(total) {
    let somaNotas = 0;
    let c = 1;

    while (c <= total) {
        const resposta = await pergunta("Digite suas notas: ");
        let notas = parseFloat(resposta);
        somaNotas += notas;
        console.log(`Ciclo ${c} nota ${notas}`);
        console.log(`Ciclo ${c} soma ${somaNotas}`);
        c++;

        if (c > total) {
            let media = somaNotas / total;
            console.log(`A soma foi ${somaNotas.toFixed(2)}`);
            console.log(`E a média foi de ${media.toFixed(2)}`);
            rl.close();
        }
    }
}

function pergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
}

rl.question("Quantos números deseja?: ", function (total) {
    let tot = parseInt(total);
    lerNotas(tot);
});
