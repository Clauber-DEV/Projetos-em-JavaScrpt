/** Exemplo de programa que solicica a entrada de idade ao usuário repetidamente 
 * até que o flag seja disparado no caso 9999 que logo apos irá imprimir a 
 * soma dos valores na interface. */
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciar() {
    let idade = 0
    while (idade != 9999) { // Estrutura de controle utilizando flag == bandeira ou sinal.
        const qualIdade = await pergunta("Idade: ")
        const qId = parseInt(qualIdade)
        if (qId != 9999) {
            idade += qId
        } else {
            console.log(`A soma dos números é: ${idade}.`);
            rl.close();
            return; /* Comando de retorno para que não haja tentativa de 
                       interação com a interface depois de finalizada.*/
        }
    }
}

function pergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
};

iniciar();