/** Exemplo de programa que pede inserir valores e pergunta se quer continuar a 
 * inserir valor e os soma, quando o usuário descide não continuar o programa imprime o 
 * resultado das soma dos valores.
 */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciar() {
    let somar = 0
    let resposta = "s"

    do {
        let entrada = await pergunta("Digite um número: ");
        let numEnter = parseInt(entrada)

        somar += numEnter

        resposta = await pergunta("Quer continuar? [s/n]: ")

        if (resposta !== "s") {
            console.log(`Total ${somar}.`);
            rl.close();
        }
    } while (resposta === "s")

}

function pergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve)
    })
}

iniciar();
