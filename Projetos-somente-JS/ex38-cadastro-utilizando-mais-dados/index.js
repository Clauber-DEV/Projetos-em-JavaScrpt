/* M03 ex 038
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

        maiormasc = 0, maiorfem = 0,	// maior idade masculina e feminona

        menormasc = 0, menorfem = 0,	// menor idade masculina e feminina

        totalmasc = 0, totalfem = 0     // total masc = masculico total fem = feminino

    let nome = "", sexo = "",

        maiornmasc = "", maiornfem = "",	// nome mais velho masculino e feminino 

        menornmasc = "", menornfem = ""	    // nome mais novo masculino e feminino


    console.log("\n\t Cadastro de pessoas.\nDigite [0] para sair na quantidade de pessoas.");

    let quantidadepessoas = await perguntas("Quantas pessoas irão se vadastrar?: ");
    quant = parseInt(quantidadepessoas);


    while (isNaN(quant) || quant < 0) {
        console.log("[Erro] Favor iserir uma quantidade válida");
        let quantidadepessoas = await perguntas("Quantas pessoas irão se vadastrar?: ");
        quant = parseInt(quantidadepessoas);
    }

    if (quant === 0) {
        console.log("Ecerrando Programa!");
        lerL.close()
    } else {

        while (ciclo <= quant){
            nome = await perguntas(`${ciclo}º Pessoa: `);

            // Validar o nome
            while (!/^[a-zA-Z\s]+$/.test(nome.trim())) { // condição para permitir somente letras
                console.log("Por favor, insira um nome válido.");
                nome = await perguntas(`${ciclo}º pessoa: `);
            }

  /////          // deixar em caixa alta e tratar sexo = await perguntas(`Sexo de ${nome} [M/F]: `);

            let idadePessoas = await perguntas(`Idade de ${nome}: `)
            idade = parseInt(idadePessoas);
            
            // validar idade
            while(isNaN(idade) || idade < 0 || idade > 130){
                console.log("Por favor, isira uma idade válida entre 1 a 130 anos.");
                let idadePessoas = await perguntas(`Idade de ${nome}: `);
                idade = parseInt(idadePessoas);
            }

            
            ciclo++
        }
    }
}

function perguntas(perguntas) {
    return new Promise((resolve) => {
        lerL.question(perguntas, resolve);
    });
}

cadastropessoas();