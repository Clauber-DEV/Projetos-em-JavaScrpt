const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function validarDados() {
    let numero = 0, ciclo = 1, acumulador = 0;
    let continuar = "S";

    while (continuar === "S") {
        console.log(`    ${ciclo}° VALOR.`);
        
        let entrada;
        do {
            entrada = await perguntas('Digite um valor de 01 a 10: ');

            if (isNaN(entrada)) {
                console.log('ERRO! Insira um número válido.\n');
            } else {
                numero = parseInt(entrada, 10);
                if (numero >= 1 && numero <= 10) {
                    break;
                } else {
                    console.log('ERRO! Insira um número entre 01 e 10.\n');
                }
            }
        } while (true);

        do {
            const querContinuar = await perguntas('Quer continuar? [S/N]: ')
            continuar = querContinuar.toUpperCase();
            if(!['S', 'N'].includes(continuar)){ // condição para, se for diferente de S e N retorne a variavel continuar.
                console.log("[ERRO!] Digite S para sim ou N para não.")
            }
        } while (!['S', 'N'].includes(continuar));

        if (continuar === 'N') {
            interface.close();
        }

        acumulador += numero;
        ciclo++;
    }

    console.log(`Ao todo você digitou ${ciclo} valores.`);
    console.log(`A soma de todos eles é ${acumulador}.`);
}

function perguntas(pergunta) {
    return new Promise((resolve) => {
        interface.question(pergunta, resolve);
    });
}

validarDados();

