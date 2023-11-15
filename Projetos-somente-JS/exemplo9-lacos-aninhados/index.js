/** Exemplo de um programa que trata um dado da seguinte forma:
 * pra validar a entrada o nome do usuário deve ter 3 letras ou mais.
 */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciar() {
    while (true) {
        let seuNome = await pergunta("Digite sua nome: ")
        if (seuNome.length >= 3) {
            rl.close();
            break;
        } else {
            console.log("Erro!! O nome deve ter pelo menos 3 letras.\n");
        };
    };
};

function pergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
};

iniciar();