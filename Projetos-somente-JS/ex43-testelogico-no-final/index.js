/* M03 ex 043 Teste logico no final
 * O programa receber os dados do usuário do tipo inteiro
 * perguntar se quer continuar
 * analizaro os seguintes criterios em todos dados inseridos:
 * - quantidade de valores inseridos
 * - menor valor IMPAR
 * - quantdade de números pares inseridos
 */

const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function analizadorDeNumeros() {
    let numero = 0, total = 0, par = 0, menor = 0, valor = 1
    let seguir = ""

    console.log("Analizador de números");

    do {
        let inserirNumero = await inserirNum(`Digite o ${valor}º valor: `)
        numero = parseInt(inserirNumero)
        valor++
        total++

        if (numero % 2 === 0) {
            par += 1
        } else if (total === 1) {
            menor = numero
        } else {
            if (numero < menor) {
                menor = numero
            }
        }

        let querSeguir = await inserirNum("Quer continuar? [S/N]: ");
        seguir = querSeguir.toUpperCase()
    } while (seguir === "S")

    lerL.close()

    console.log("Ao todo, você digitou ", total, " valores.")
    console.log("Você digitou ", par, " valores PARES.")
    console.log("O menor valor IMPAR digitado foi ", menor)

}

function inserirNum(inserirNum) {
    return new Promise((resolve) => {
        lerL.question(inserirNum, resolve);
    })
}

analizadorDeNumeros();