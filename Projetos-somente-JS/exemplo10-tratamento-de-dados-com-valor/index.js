/**Exemplo de validação de dados em que o programa solicita a idade ao usuário
 * e so aceita se for número em 1 a 130.
 */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciar() {

    while (true) {

        let teclado = await pergunta("Qual sua idade: ");

        if (isNaN(teclado)) {
            console.log("ERRO!! A idade deve ser um número!");
        } else {

            let idade = parseInt(teclado);

            if (idade > 0 && idade <= 130) {
                console.log("Entrada válida, encerrando o programa.");
                rl.close();
                break;
            } else {
                console.log("ERRO!! A idade deve estar entre 1 a 130 anos");
            };
        };
    };
};

function pergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
};

iniciar();