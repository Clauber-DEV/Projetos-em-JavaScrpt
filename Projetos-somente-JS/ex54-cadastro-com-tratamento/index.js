/*  ex 054
 *  validação de dados aninhados
 *  velidando nome, idade, continuar ou não
 */

const criarInterface = require(`readline`);

const Interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function cadastroDePessoas() {
    let quantidade = 1, velhoIdade = 0, novoIdade = 0

    let continuar = "S", idade, nome = "", velhoNome = "", novoNome = ""

    while (continuar == "S") {


        do {
            console.log(`   ${quantidade}º pessoa.`);
            nome = await perguntas("Nome: ");

            if (!/^[a-zA-ZÀ-ú\s]+$/.test(nome.trim())) {
                console.log("\n      ERRO!!! O nome deve ter somente letras.\n")
            } else {
                if (nome.length <= 3) {
                    console.log("\n      ERRO!!! O nome deve ter mais de três letras.\n")
                } else {
                    break
                } {

                }
            }
        } while (true);

        do {
            const entradaIdade = await perguntas("Idade: ")
            idade = parseInt(entradaIdade)

            if (isNaN(idade)) {
                console.log(" [ERRO] Idade deve ser somente números!")
            } else {

                if (idade <= 0 || idade > 130) {
                    console.log("[ERRO] a idade deve ser entre 1 a 130 anos.");
                } else {
                    break
                }
            }

        } while (true)

        if (quantidade === 1) {
            velhoIdade = idade
            velhoNome = nome

            novoIdade = idade
            novoNome = nome
        } else {
            if (idade > velhoIdade) {
                velhoIdade = idade
                velhoNome = nome
            }

            if (idade < novoIdade) {
                novoIdade = idade
                novoNome = nome
            }
        }

        do {
            const querContinuar = await perguntas(`Quer continuar? [S/N]: `);
            continuar = querContinuar.toUpperCase();
            if (!["S", "N"].includes(continuar)) {
                console.log("[ERRO!] Digite S para sim ou N para não.");
            }
        } while (!["S", "N"].includes(continuar));

        if (continuar === "N") {
            Interface.close()
            break
        }
        quantidade++
    }

    console.log("Ao todo de pessoas cadastradas: ", quantidade, ".")
    console.log(velhoNome, " é a pessoa mais velha com ", velhoIdade, " anos de idade.")
    console.log(novoNome, " é a pessoa mais jovem com ", novoIdade, " anos de idade.")
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        Interface.question(perguntar, resolve)
    })
}

cadastroDePessoas();