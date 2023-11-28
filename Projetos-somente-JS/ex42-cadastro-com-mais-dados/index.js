/* M03 ex 042 Flag
 *  O programa dele receber os seguintes dados cadastrais:
 *  - nome
 *  - sexo
 *  - salário
 *  ter um comando para encerrar o cadastro
 *  analisar todos os dados e emitir os seguintes dados:
 *  - total de homens e mulheres cadastrados
 *  - média salarial dos homens
 *  - total de mulheres que ganham mais de 1000 reais
 *  - maior salario entre os homens.
 */

const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function cadastroPessoasMaisDados() {
    let salario = 0,
        maiorSalario = 0,
        salarioMasculino = 0,
        salarioFeminino = 0,
        totalPessoas = 0,
        sexoMaculino = 0,
        sexoFeminino = 0;

    let seguir = "",
        nome = "",
        sexo = "";

    console.log("           CADASTRO DE PESSOAS COM MAIS DADOS!!\n");
    console.log("Favor informar, NOME, SEXO e SALÀRIO.");
    console.log("Digite N para encerrar");

    while (true) {
        nome = await perguntas("Nome: ");

        let inserindoSexo = await perguntas("Sexo [M/F]: ");
        sexo = inserindoSexo.toUpperCase();

        let inserindoSalario = await perguntas("Salário: ");
        salario = parseFloat(inserindoSalario);

        let decisao = await perguntas("Quer continuar?[S/N]: ");
        seguir = decisao.toUpperCase();


        totalPessoas++

        if (sexo === "M") {
            sexoMaculino += 1
            salarioMasculino += salario
            if (salario > maiorSalario) {
                maiorSalario = salario
            }
        }

        if (sexo === "F") {
            sexoFeminino += 1
            if (salario > 1000) {
                salarioFeminino += 1
            }
        }

        if (seguir === "N") {
            lerL.close()
            break
        }
    }
    const mediaMasculino = (sexoMaculino > 0) ? (salarioMasculino / sexoMaculino) : 0; // implementação de condição terneria para sempre restornar um valor válido.

    console.log(`     CADASTRO ENCERRADO.`);
    console.log(`Total de pessoas cadastradas: ${totalPessoas}.`);
    console.log(`O total de HOMENS é: ${sexoMaculino}.`);
    console.log(`O total de Mulheres é: ${sexoFeminino}.`);
    console.log(`Média salarial dos HOMENS é de R$${mediaMasculino.toFixed(2)}.`);
    console.log(`O total de MULHERES que ganham mais de R$1000,00 reais é: ${salarioFeminino}.`);
    console.log(`O maior salário entre HOMENS é de R$${maiorSalario}.`);
    console.log(`FIM`);
}


function perguntas(perguntas) {
    return new Promise((resolve) => {
        lerL.question(perguntas, resolve)
    });
}

cadastroPessoasMaisDados();