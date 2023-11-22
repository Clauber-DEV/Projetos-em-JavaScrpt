/* ex37
* coletar os dados nome e idade avaliar e
* mostrar a pessoa mais velha e a mais nva dentre os cadastados
* utilisando repetição com teste lógico no início 
*/

const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function cadastroDePessoas() {
    let quant = 0, ciclo = 1, idade = 0, maior = 0, menor = 0;
    let nome = "", maiorn = "", menorn = "";

    console.log("Cadastro de Pessoas.");

    let quantidadepes = await perguntas("Quantas pessoas irão se cadastrar?: ");
    quant = parseInt(quantidadepes);

    console.log("Insira nome e idade de pessoas.");

    while (ciclo <= quant) {
        nome = await perguntas(`${ciclo}º pessoa: `);

        // Validar o nome
        while (!/^[a-zA-Z\s]+$/.test(nome.trim())) { // condição para permitir somente letras
            console.log("Por favor, insira um nome válido.");
            nome = await perguntas(`${ciclo}º pessoa: `);
        }

        let recebIdade = await perguntas("Idade: ");
        idade = parseInt(recebIdade);

        // Validar a idade
        while (isNaN(idade) || idade < 0 || idade > 130) {
            console.log("Por favor, insira uma idade válida.");
            recebIdade = await perguntas("Idade: ");
            idade = parseInt(recebIdade);
        }

        if (ciclo === 1) {
            maior = idade;
            menor = idade;
            maiorn = nome;
            menorn = nome;
        } else {
            if (maior < idade) { // condição para maior idade
                maior = idade;
                maiorn = nome;
            }
            if (menor > idade) { // condição para menor idade
                menor = idade;
                menorn = nome;
            }
        }
        ciclo++;
    }

    // saída de dados
    console.log("A pessoa mais velha é " + maiorn + " e tem ", maior, " de idade.");
    console.log("A pessoa mais nova é " + menorn + " e tem " + menor + " de idade.");
    lerL.close();
}

function perguntas(pergunta) {
    return new Promise((resolve) => {
        lerL.question(pergunta, resolve);
    });
}

cadastroDePessoas();
