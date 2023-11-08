const readline = require('readline'); // modulo para entrada de dados

const rl = readline.createInterface({
    input: process.stdin, // entrada padrão
    output: process.stdout // saída padrão
});

async function lerNotas(total) { // função assíncrona "async"
    let somaNotas = 0;
    let c = 1;

    while (c <= total) { // estrutura de controle "while" == enquanto
        const resposta = await pergunta("Digite suas notas: ");  // função com comando "await" == aguarde irá pausar a execução do programa até que o usuário forneça as informações.

        let notas = parseFloat(resposta); // convesor dos dados da função resposta
        somaNotas += notas; // somaNotas no caso é um acumulador.
        console.log(`Ciclo ${c} nota ${notas}`);
        console.log(`Ciclo ${c} soma ${somaNotas}`);
        c++;

        if (c > total) { // estrutura condicional
            let media = somaNotas / total;
            console.log(`A soma foi ${somaNotas.toFixed(2)}`);
            console.log(`E a média foi de ${media.toFixed(2)}`);
            rl.close();
        }
    }
}

function pergunta(pergunta) { // função aguardando retorno de uma promessa "promise"
    return new Promise((resolve) => { // promessa com parametro resolve. Esse resolve irá receber os dados fornecidos pela rl.question
        rl.question(pergunta, resolve); // tudo que será entregue ao parametro "resolve" etá sendo tratado nas linhas 13 a 26.
    });
}

rl.question("Quantos números deseja?: ", function (total) {
    let tot = parseInt(total);
    lerNotas(tot);
});
