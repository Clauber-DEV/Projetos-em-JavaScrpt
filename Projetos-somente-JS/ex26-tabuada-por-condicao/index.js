/** Programa de fornecer as seguintes opções ao usuário:
 *  + para soma
 *  - para subtração
 *  * para multiplicação
 *  / para divisão
 * Realisar a operação escolhida e entregar o resultado da mesma.
 * utilizando a estrutura de controle "switch". 
 */

// Apresentação das opações ao usuário.
console.log(" Escolha uma das quatro operações básicas:");
console.log("   +   Adição");
console.log("   -   Subtração");
console.log("   *   Multiplicação");
console.log("   /   Divisão");

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o sinal da operação desejada: ", function (sinal) {
    // estrutura de controle switch
    switch (sinal) {
        case "+":
            console.log(" Você escolheu a opção [+]")
            break
        case "-":
            console.log(" Você escolheu a opção [-]")
            break
        case "*":
            console.log(" Você escolheu a opção [*]")
            break
        case "/":
            console.log(" Você escolheu a opção [/]")
            break
        default:
            console.log("Sinal INVALIDO")
            break
    }

    rl.question("Digite o Primeiro valor: ", function (valor1) {
        rl.question("Dgite o segundo valor: ", function (valor2) {

            let val1 = parseFloat(valor1)
            let val2 = parseFloat(valor2)
            switch (sinal) {
                case "+":
                    let soma = val1 + val2
                    console.log(`Calculando os valores ${val1} + ${val2} = ${soma}.`)
                    break
                case "-":
                    let subtracao = val1 - val2
                    console.log(`Calculando os valores ${val1} - ${val2} = ${subtracao}.`)
                    break
                case "*":
                    let multiplacacao = val1 * val2
                    console.log(`Calculando os valores ${val1} * ${val2} = ${multiplacacao}.`)
                    break
                case "/":
                    let divisao = val1 / val2
                    console.log(`Calculando os valores ${val1} / ${val2} = ${divisao}.`)
                    break
                default:

                    break
            }

            rl.close()
        });
    });
});
