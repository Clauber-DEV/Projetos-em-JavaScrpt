const criarInterface = require(`readline`);

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function piramide() {
    const andares = await perguntas("Quantos andares?: ");
    const totalAndares = parseInt(andares);

    for (let i = 1; i <= totalAndares; i++) {
        let linha = '';

        for (let j = 1; j <= totalAndares - i; j++) {
            linha += ' ';
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            linha += '*';
        }

        console.log(linha);
    }

    interface.close();
}

function perguntas(pergunta) {
    return new Promise((resolve) => {
        interface.question(pergunta, resolve);
    });
}

piramide();
