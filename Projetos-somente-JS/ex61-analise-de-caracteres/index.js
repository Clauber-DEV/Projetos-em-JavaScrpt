/* ex61 Análise de caracteres
*  Faça um programa que preencha um vetor com 6 nomes
*  inseridos pelo usuário em seguida mostre na tela os seguintes tópicos:
*  - Quais são os nomes com nenos de 5 letras
*  - Quais nomes começam com vogal
*  - Quantos nomes começam com vogal
*  - Quais nomes começam com a letra "s" (em qualquer posição)
*  - Quantos nomes possuem a letra "s"
*  - Mostrar a análise desses números no final
*/


const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function analiseCaracteres() {
    const totalIndices = 2;
    const vetorNomes = new Array(totalIndices);

    for (let ind = 0; ind < vetorNomes.length; ind++) {
        vetorNomes[ind] = await perguntas(`Nome para a posição ${ind}: `);
    }

    console.log(`========= ${vetorNomes.length} NOMES CADASTRADOS =========`);
    console.log("\t   ANALISANDO...");
    await aguarde(1000);

    console.log("Nomes com menos de cinco letras:");

    let total5Letras = 0;
    for (let ind = 0; ind < vetorNomes.length; ind++) {
        if (vetorNomes[ind].length <= 5) {
            console.log(` ${vetorNomes[ind]} `);
            await aguarde(300);
            total5Letras++;
        }
    }
    console.log(`Total de nomes com menos de 5 letras: ${total5Letras}`);
    console.log("_______________________________________");

    console.log("Nomes começando com vogal:");

    let totalVogais = 0;
    for (let ind = 0; ind < vetorNomes.length; ind++) {
        const priL = vetorNomes[ind].charAt(0).toUpperCase();
        if (priL == 'A' || priL == 'E' || priL == 'I' || priL == 'O' || priL == 'U') {
            console.log(vetorNomes[ind]);
            await aguarde(500);
            totalVogais++;
        }
    }
    console.log(`Total de nomes começando com vogal: ${totalVogais}`);
    console.log("_______________________________________");

    console.log("Nomes que possuem a letra 'S':");
    
    let totalS = 0;
    for (let ind = 0; ind < vetorNomes.length; ind++) {
        if (vetorNomes[ind].toUpperCase().includes('S')) {
            console.log(`[${ind}] = ${vetorNomes[ind]}`);
            await aguarde(400);
            totalS++;
        }
    }
    console.log(`Total de nomes com a letra 'S': ${totalS}`);
    console.log("_______________________________________");

    interface.close();
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        interface.question(perguntar, resolve);
    });
}

function aguarde(milisegundos) {
    return new Promise(resolve => setTimeout(resolve, milisegundos));
}

analiseCaracteres();