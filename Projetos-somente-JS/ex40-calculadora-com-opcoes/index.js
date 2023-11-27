/*  ex 040 Flag
 *  O programa deve receber dois valores do usuário
 *  e com esses valores fazer as seguintes operações:
 *  Adição, subtração e multplicação
 *  também deve poder reseber novos valores 
 *  Calculadora multipla opções
 */

const lerNumeros = require(`readline`);

const lerN = lerNumeros.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function calculadora() {
    let escolha = 0, operando1 = 0, operando2 = 0,
        resSoma = 0, resSubtracao = 0, resMulti = 0

    console.log("Calculadora com três funções.");

    let num1 = await inserirnum("Escolha o primeiro número em seguida aperte [ENTER]: ");
    operando1 = parseInt(num1)
    let num2 = await inserirnum("Escolha o segundo número em seguida aperte [ENTER]: ");
    operando2 = parseInt(num2)

    while (escolha !== 5) {
        console.log("ESCOLHA UMA OPERAÇÂO: \n")
        console.log("[1] Adição")
        console.log("[2] Subtração")
        console.log("[3] Multiplicação")
        console.log("[4] Entrar com novos valores")
        console.log("[5] SAIR")

        console.log("\n   Escolha o número correspondente as opções e aperte [ENTER] ")
        let esc = await inserirnum("   >>>>>>> SUA OPÇÂO: ")
        escolha = parseInt(esc)

        if (escolha !== 1 && escolha !== 2 && escolha !== 3 && escolha !== 4 && escolha !== 5) {
            console.log("[ ERRO! ] Insira uma opção válida com o menu acima!")
        } else {

            if (escolha === 1) {           //condição para soma
                resSoma = operando1 + operando2
                console.log(`\nA soma de ${operando1} + ${operando2} = ${resSoma}`)
            }

            if (escolha === 2) {           //condição para subtração
                resSubtracao = operando1 - operando2
                console.log(`\nA subtração de ${operando1} - ${operando2} = ${resSubtracao}`)
            }

            if (escolha === 3) {           //condição para multiplicação
                resMulti = operando1 * operando2
                console.log(`\nA soma de ${operando1} * ${operando2} = ${resMulti}`)
            }

            if (escolha === 4) {         //entrada de novos valores
                operando1 = operando1 - operando1
                operando2 = operando2 - operando2

                let num1 = await inserirnum("Escolha o primeiro número em seguida aprte [ENTER]: ");
                operando1 = parseInt(num1)
                let num2 = await inserirnum("Escolha o segundo número em seguida aprte [ENTER]: ");
                operando2 = parseInt(num2)

            }
        }
    }
    lerN.close();
    console.log("Fim da operação.")
}


function inserirnum(inserirnum) {
    return new Promise((resolve) => {
        lerN.question(inserirnum, resolve);
    });
}

calculadora();