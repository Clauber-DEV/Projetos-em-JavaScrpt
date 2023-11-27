/* ex 041 cadastro com FLAG
 * O programa deve fazer uma lista de cadastro 
 * recebedo os seguintes dados, nome e idade
 * o mesmo deve te um comando para encerrar o cadastro
 * analizalos e aprsentar os seguintes dados,
 * - quantos individuos foram cadastrados
 * - qual individuo mais velho
 * - qual individuo mais novo
 * - A média de idade de todos.
 */

const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function cadastroPessoas() {
    let ciclo = 1, media = 0,
        totalIdade = 0, totalPessoas = 0,
        maiorIdade = 0, menorIdade = 0, idade = 0;

    let nome = "", maiorNome = "", menorNome = "";

    console.log("\t Cadastro de pessoas:");
    console.log("Digite -> encerrar <- na alternativa NOME caso queira finalizar.");

    while (true) {
        nome = await perguntas(`${ciclo}º cadastro:\nNome:`);

        if (nome === "encerrar") {
            lerL.close();
            break;
        }
        let id = await perguntas("Idade: ");
        idade = parseInt(id);

        ciclo++			        // ordem de cadastro
        totalIdade += idade	    // media de idade
        totalPessoas++			   // soma de pessoas

        if (totalPessoas === 1) {    // condição para maior e menor idade
            maiorIdade = idade
            maiorNome = nome
            menorIdade = idade
            menorNome = nome
        } else {
            if (idade > maiorIdade) {
                maiorIdade = idade
                maiorNome = nome
            }
            if (idade < menorIdade) {
                menorIdade = idade
                menorNome = nome
            }
        }
    }
    media = totalIdade / totalPessoas;
    console.log("         **CADASTRO ENCERRADO**");
    console.log("Total de passoas cadastradas: ", ciclo - 1);
    console.log("Pessoa mais velha é ", maiorNome, " com ", maiorIdade, " anos de idade.");
    console.log("Pessoa mais nova é ", menorNome, " com ", menorIdade, " anos de idade.");
    console.log("A média de idade entre os cadastrados é ", media.toFixed(2), " anos.");
}

function perguntas(perguntas) {
    return new Promise((resolve) => {
        lerL.question(perguntas, resolve)
    });
}

cadastroPessoas();