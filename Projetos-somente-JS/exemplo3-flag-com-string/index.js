/** Exemplo de um código que cria uma interface basica de entrada e saída padrão e questiona ao usuário
 * qual valor deseja inserir e se irá querer continuar atravez de uma função ascincrona
 * obs: nesse exemplo ao incerir a letra "n" irá disparar o comando "break" que irá fexhar o ciclo
 * e os valores da variavel "valor" não são tratados.
 */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciar() {
    while (true) {
        const valor = await pergunta("Valor: ");
        const resposta = await pergunta("Quer continuar?: ")

        if (resposta === "N" || resposta === "n") {
            console.log("Usuário mandou parar!");
            rl.close();
            break;
        }
    }
}

function pergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
};

iniciar();
