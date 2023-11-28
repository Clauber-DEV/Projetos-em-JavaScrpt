/**ex 47 estrutura de repetição com valor de controle
 * O programa deve realizar somas e subtrações sequenciais
 * até um determinado valor de acordo com a inserção de dados do usuário.
 */

const { clear } = require("console");
const criarInterface = require(`readline`);

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function somarSubtrair() {
    let ciclo = 0,
        final = 0,
        passo = 0;

    let inicio = await perguntas("Inicio: ")
    ciclo = parseInt(inicio)
    let termina = await perguntas("Final: ")
    final = parseInt(termina)
    let pass = await perguntas("Passo: ")
    passo = parseInt(pass)

    if (passo <= 0) passo *= -1 // Condição para caso o valor do passo seja negativo.

    if (ciclo < final) {
        for (ciclo; ciclo <= final; ciclo += passo) {
            process.stdout.write(`${ciclo}...`)
            await aguarde(400)

            if (ciclo === final) {
                console.log("ACABOU")
                interface.close()
                break
            }
        }
    } else {
        for (ciclo; ciclo >= final; ciclo -= passo) {
            process.stdout.write(`${ciclo}...`)
            await aguarde(400)
            if (ciclo === final) {
                console.log("ACABOU")
                interface.close()
                break
            }
        }
    }
}

function perguntas(perguntas) {
    return new Promise((resolve) => {
        interface.question(perguntas, resolve)
    })
}

function aguarde(milissegundos) {
    return new Promise(resolve => setTimeout(resolve, milissegundos))
}

somarSubtrair();