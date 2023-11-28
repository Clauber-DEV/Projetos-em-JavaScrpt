/* ex044 teste lógico no final
 * O programa de sortear valores inteiros
 * peguntar a usuário se quer continuar
 * ao final anpresentar a seguinte analise de dados:
 * - Quantidade total de valores sorteads
 * - A soma de todps os valores
 * - mostrar o maior e o menor valor
 * - quantas vezes o número 5 apareei no sorteio
 */

const criarInterface = require(`readline`);

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function sorteiaNumeros() {


    let num,
        valor = 1,
        total = 0,
        somatotal = 0,
        maiorval = 0,
        menorval = 0,
        num5 = 0

    let seguir = ""

    console.log("ANÁLISE DO SORTEIO")

    // esntrada de dados e inplemento de condições
    do {
        num = Math.floor(Math.random() * 11);
        console.log("O ", valor, "° valor sorteado foi: ", num)
        valor += 1			// ordem de entrada dos valores

        total++			// total de valores que entram

        somatotal += num	// soma de todos os valores

        if (total === 1) {	// condição para > e < valor
            maiorval = num
            menorval = num
        } else {
            if (maiorval < num) {	// condição para o > valor
                maiorval = num
            }
            if (menorval > num) {	// condição para o < valor
                menorval = num
            }
        }

        if (num === 5) {			// condição para contabilisar o valor 5
            num5 += 1
        }

        const querSeguir = await pergunta("\nQuer que sorteie mais números? [S/N]: ")
        seguir = querSeguir.toUpperCase()
    } while (seguir === "S")

    // saída de dados
    console.log("Você me fez sortear: ", total, " valores.")
    console.log("A soma de todos os valores foi: ", somatotal, ".")
    console.log("O maior valor foi ", maiorval, " e o menor valor foi ", menorval, ".")
    console.log("O número 5 foi sorteado ", num5, " vezes.")
}

function pergunta(pergunta) {
    return new Promise((resolve) => {
        interface.question(pergunta, resolve)
    })
}

sorteiaNumeros();