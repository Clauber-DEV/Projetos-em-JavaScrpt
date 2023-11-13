const readline = require('readline'); // Modulo para entrada de dados.

const rl = readline.createInterface({
    input: process.stdin, // Entrada padrão.
    output: process.stdout // Saída padrão.
});

async function lerNotas(total) { // Função assíncrona "async" que espera uma promessa.
    let somaNotas = 0; // O totalizador deve ser declarado fora da condição.
    let c = 1; // Contador dos ciclos.

    while (c <= total) { // Estrutura de controle "while" == enquanto.
        const resposta = await pergunta("Digite suas notas: ");  // Função com comando "await" == aguarde irá pausar a execução do programa até que o usuário forneça as informações.

        let notas = parseFloat(resposta); // Convesor dos dados da função resposta.
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

function pergunta(pergunta) { // Função aguardando retorno de uma promessa "promise".
    return new Promise((resolve) => { // Promessa com parametro resolve. Esse resolve irá receber os dados fornecidos pela rl.question.
        rl.question(pergunta, resolve); // Tudo que será entregue ao parametro "resolve" está sendo tratado nas linhas 13 a 26.
    });
};

rl.question("Quantos números deseja?: ", function (total) {
    let tot = parseInt(total);
    lerNotas(tot);
});
