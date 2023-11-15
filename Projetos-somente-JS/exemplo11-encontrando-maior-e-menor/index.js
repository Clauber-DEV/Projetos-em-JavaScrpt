/**Exemplo de programa recebe 4 números aleatórios do usuário
 * e irá imprimir o maior e o menor.
 */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciar() {
    let numero, ciclo = 1, maior = 0, menor = 0

    while (ciclo <= 4) {
        numero = await pergunta("Digita qualquer número: ")
        let num = parseInt(numero)

        if (ciclo === 1) {
            maior = num
            menor = num
        } else {
            if (maior > num) {
                maior = num
            };
            if (menor < num) {
                menor = num
            };
        };
        ciclo++
    }

    if (ciclo > 4) {
        console.log(`O maior número é ${maior}`)
        console.log(`O menor número é ${menor}`)
        rl.close();
    }
}

function pergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    })
};

iniciar();