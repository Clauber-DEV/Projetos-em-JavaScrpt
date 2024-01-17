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


const criarInterface = require(`readline`);

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});
        //                                  FALTA TERMINAR
async function analiseCaracteres(){
    const totalIndices = 2
    const vetorNomes = new Array(totalIndices)

    for(let ind = 0; ind < vetorNomes.length; ind++){
        vetorNomes[ind] = await perguntas(`Nome para a prosição ${ind}: `)
    }

    console.log(`========= ${vetorNomes.length} NOMES CADASTRADOS =========`)
    console.log("\t   ANALISANDO...")
    await aguarde(1000)

    console.log("Nomes com menos de cinco letras:")

    let total5Letras = 0
    for(let ind = 0; ind < vetorNomes.length; ind++){
        if(vetorNomes[ind].length <= 5){
            console.log(` ${vetorNomes[ind]} `)
            await aguarde(300)
            total5Letras++
        }
    }
    console.log(`Total de nomes com menos de 5 letras ${total5Letras}`)
    console.log("_______________________________________")


    interface.close()
}

function perguntas(perguntar){
    return new Promise((resolve) => {
        interface.question(perguntar,resolve)
    })
}

function aguarde(milisegundos){
    return new Promise(resolve => setTimeout(resolve,milisegundos))
}

analiseCaracteres()