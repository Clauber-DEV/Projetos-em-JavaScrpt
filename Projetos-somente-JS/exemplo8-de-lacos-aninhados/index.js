/**
 * Exemplo de um programa que pergunta ao usuário sexo e idade de quatro integrantes, porem o 
 * mesmo executa dentro de uma laço com teste logico no final em que 
 * não segue para a proxima pergunta enquanto a entrada do usuário não for válida.
 */
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciar() {

    let sexo = "";
    let idade = "";
    let idd = 0;
    let ciclo = 1

    while (ciclo <= 4) {

        do {
            sexo = await pergunta("Digite a letra de seu sexo: ");
        } while (sexo != "m" && sexo != "f");

        do {
            idade = await pergunta("Sua idade: ");
            idd = parseInt(idade);
        } while (isNaN(idd) || idd <= 0 || idd > 130);

        if ((sexo === "m" || sexo === "f") && idd > 0 && idd <= 130) {
            console.log(` Sexo ${sexo}\n Idade ${idd}.`)
        };

        ciclo++
    };

    if (ciclo > 4) {
        rl.close();
    }
};

function pergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
};

iniciar();