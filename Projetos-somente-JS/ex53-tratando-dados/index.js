/** ex 53
 * Validação de dados aninhados
 */

const criarInterface = require('readline');

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function validarDados() {
    let numero = 0, ciclo = 1, acumulador = 0;
    let continuar = "";

    while (continuar === "S") {
        while (true) {
            console.log("    ", ciclo, "° VALOR.");
            const entrada = await perguntas(`Digite um valor de 01 a 10: `);

            if (!isNaN(entrada)) {
                numero = parseInt(entrada, 10);

                if (numero >= 1 && numero <= 10) {
                    break;
                } else {
                    console.log("ERRO! Insira um número entre 01 e 10.\n");
                }
            } else {
                console.log("ERRO! Insira um número válido.\n");
            }
        }

        const querContinuar = await perguntas("Quer continuar? [S/N]: ");
        continuar = querContinuar.toUpperCase();

        while (!["S", "N"].includes(continuar)) {
            console.log("[ERRO!] Digite S para continuar ou N para encerrar!");
            const querContinuar = await perguntas("Quer continuar? [S/N]: ");
            continuar = querContinuar.toUpperCase();
        }

        if (continuar === "N") {
            interface.close();
            break;
        }

        acumulador += numero;
        ciclo++;
    }

    console.log("Ao todo você digitou, ", ciclo, " valores.");
    console.log("A soma de todos eles é ", acumulador);
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        interface.question(perguntar, resolve);
    });
}

validarDados();
