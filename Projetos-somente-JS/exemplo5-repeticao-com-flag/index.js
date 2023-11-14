/** Exemplo de código utilisando flag na estrutura de controle "while"
 * que primeiro pergunta ao usuário qual valor e o soma como próximo valor e pergunta se o 
 * mesmo quer contitunar, se a resposta for diferente de "s" ele irá finalizar o 
 * programa apresentendo a soma dos valores.*/
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciar() {
    let resposta = "s"
    let somar = 0;
    while (resposta === "s") {
        const valor = await pergunta("Valor: ");
        const val = parseInt(valor)

        somar += val

        resposta = await pergunta("Quer continuar? [s/n]");

        if (resposta !== "s") {
            console.log(`Total de soma: ${somar}.`);
            rl.close();
            return;
        }
    }
}

function pergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
}

iniciar();