/* ex 038
 * O programa deve ler q quantidade de pessoas 
 * que o usuário irá cadastrar
 * coletar os seguintes dados, NOME, IDADE e SEXO
 * analizar e exibir mulher mais jovem e mais velha
 * e homem mais novo e mais velho
 * utilizando repetição com teste lógico no inicio e condições
 */

const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function cadastropessoas() {
    // Declaração de variáveis
    let quant = 0, ciclo = 1, idade = 0,

        maiorMasc = 0, maiorFem = 0,	// maior idade masculina e feminona

        quantMaiorMasc = 0, quantMaiorFem = 0, // quantidade de masculino e feminino mais velho

        menorMasc = 0, menorFem = 0,	// menor idade masculina e feminina

        quantMenorMasc = 0, quantMenorFem = 0, // quantidade de masculino e feminino mais novo

        totalMasc = 0, totalFem = 0    // total masc = masculico total fem = feminino

    let nome = "", sexo = "",

        maiorNomeMasc = "", maiorNomeFem = "",	// nome mais velho masculino e feminino 

        menorNomeMasc = "", menorNomeFem = ""	    // nome mais novo masculino e feminino


    console.log("\n\t Cadastro de pessoas.\n\nDigite [0] para sair.");

    let quantidadepessoas = await perguntas("Quantas pessoas irão se vadastrar?: ");
    quant = parseInt(quantidadepessoas);


    while (isNaN(quant) || quant < 0) {
        console.log("[Erro] Favor inserir uma quantidade válida");
        let quantidadepessoas = await perguntas("Quantas pessoas irão se vadastrar?: ");
        quant = parseInt(quantidadepessoas);
    }

    if (quant === 0) {
        console.log("Ecerrando Programa!");
        lerL.close()
    } else {

        while (ciclo <= quant) {

            nome = await perguntas(`${ciclo}º Pessoa: `);

            // Validar o nome
            while (!/^[a-zA-ZÀ-ú\s]+$/.test(nome.trim())) { // condição para permitir somente letras com u sem acentos.
                console.log("Por favor, insira um nome válido.");
                nome = await perguntas(`${ciclo}º pessoa: `);
            }

            let sexoMouF = await perguntas(`Sexo de ${nome} [M/F]: `);
            sexo = sexoMouF.toUpperCase()

            // Condição para validar sexo
            while (sexo !== "M" && sexo !== "F") {
                console.log("\t-ENTRADA INVALIDA!-\nFavor inserir [M] para Masculino ou [F] para Feminino.");
                let sexoMouF = await perguntas(`Sexo de ${nome} [M/F]: `);
                sexo = sexoMouF.toUpperCase()
            }

            let idadePessoas = await perguntas(`Idade de ${nome}: `)
            idade = parseInt(idadePessoas);

            // validar idade
            while (isNaN(idade) || idade < 0 || idade > 130) {
                console.log("Por favor, insira uma idade válida entre 1 a 130 anos.");
                let idadePessoas = await perguntas(`Idade de ${nome}: `);
                idade = parseInt(idadePessoas);
            }

            if (sexo === "M") {

                totalMasc++

                if (totalMasc === 1) {
                    maiorMasc = idade
                    maiorNomeMasc = nome
                    menorMasc = idade
                    menorNomeMasc = nome
                    quantMaiorMasc++
                    quantMenorMasc++
                } else {
                    if (idade > maiorMasc) {
                        maiorMasc = idade
                        maiorNomeMasc = nome
                        quantMaiorMasc++
                    }
                    if (idade < menorMasc) {
                        menorMasc = idade
                        menorNomeMasc = nome
                        quantMenorMasc++
                    }
                }
            } else if (sexo === "F") {

                totalFem++

                if (totalFem === 1) {
                    maiorFem = idade
                    maiorNomeFem = nome
                    menorFem = idade
                    menorNomeFem = nome
                    quantMaiorFem++
                    quantMenorFem++
                } else {
                    if (idade > maiorFem) {
                        maiorFem = idade
                        maiorNomeFem = nome
                        quantMaiorFem++
                    }
                    if (idade < menorFem) {
                        menorFem = idade
                        menorNomeFem = nome
                        quantMenorFem++
                    }
                }
            }

            ciclo++;
        }

        lerL.close();

        console.log("\n\tResultados")

        if (totalMasc > 0) {
            if (totalMasc === 1) {
                console.log("Apenas um homem se cadastrou.")
                console.log("Nome: " + maiorNomeMasc + " e tem " + maiorMasc + "de idade.")
            } else {

                if (quantMaiorMasc > 1 || totalMasc > 1) {
                    console.log("\nO homem mais velho é ", maiorNomeMasc, " que tem " + maiorMasc + " de idade.");
                } else {
                    console.log("\nSem homens mais velhos.");
                }
                if (quantMenorMasc > 1 || totalMasc > 1) {
                    console.log("\nO homem mais jovem é ", menorNomeMasc, " que tem " + menorMasc + " de idade.");
                } else {
                    console.log("\nSem homens mais jovens.");
                }
            }
        } else {
            console.log("\nNão há homens cadastrados.");
        }

        if (totalFem > 0) {
            if (totalFem === 1) {
                console.log("Apenas uma Mulher se cadastrou.")
                console.log("Nome: " + maiorNomeFem + " e tem " + maiorFem + " de idade.")
            } else {

                if (quantMaiorFem > 1 || totalFem > 1) {
                    console.log("\nA mulher mais velha é ", maiorNomeFem, " que tem " + maiorFem + " de idade.");
                } else {
                    console.log("\nSem mulheres mais velhas.");
                }
                if (quantMenorFem > 1 || totalFem > 1) {
                    console.log("\nA mulher mais jovem é ", menorNomeFem, " que tem " + menorFem + " de idade.");
                } else {
                    console.log("\nSem mulheres mais jovens.");
                }
            }
        } else {
            console.log("\nNão há mulheres cadastradas.");
        }
    }
}

function perguntas(perguntas) {
    return new Promise((resolve) => {
        lerL.question(perguntas, resolve);
    });
}

cadastropessoas();