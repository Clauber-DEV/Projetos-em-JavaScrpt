/* ex 035
 * programa que leia os dados inceridos de
 * peso, referencia de peso e se é homem ou mulher
 * faça a contegem de cada dado e deferencie entre,
 * quantidade de homens, mulheres, acima ou dentro do peso de referencia.
 * CADASTRO DE PESSOAS
 */

const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function cadastroPessoasPeso(){
    
    let quantidade = 0
    let ciclo = 0
    let sexo = ""
    
    //peso
    let peso = 0, pesoReferencia = 0, dentroDoPeso = 0, acimaDoPeso = 0
    
    //homens
    let somaHomens = 0, homensAcima = 0, homensDentro = 0

    //mulheres
    let somaMulheres = 0, mulheresAcima = 0, mulheresDentro = 0
    
    let quant = await perguntas(`Quantas pessoas serão cadastradas?: `)
    quantidade = parseInt(quant)

    let pesoref = await perguntas(`Qual o peso de referencia?: `)
    pesoReferencia = parseFloat(pesoref)

    while(ciclo <= quantidade){

        let inserindoPeso = await perguntas(`Peso: `)
        peso = parseFloat(inserindoPeso)
        let inserindoSexo = await perguntas(`Sexo: `)
        sexo = inserindoSexo.toUpperCase()

        // condição para o peso
        if(peso <= pesoReferencia){
            process.stdout.write(`Peso dentro do limite (${pesoReferencia}kg)\n`);
            dentroDoPeso ++
        }else if( peso > pesoReferencia){
            process.stdout.write(`Peso acima do limite (${pesoReferencia}kg)\n`);
            acimaDoPeso ++
        }
        
        // condição para sexo
        if( sexo === "M"){
            somaHomens ++
        }else if ( sexo === "F"){
            somaMulheres ++
        }

        // Condição homem acima do peso
        if (sexo === "M" || peso > pesoReferencia){
            homensAcima ++
        }
        
        // Condição homem abaixo ou dentro do peso
        if (sexo === "M" || peso <= pesoReferencia){
            homensDentro ++
        }

        
        // Condição mulher acima do peso
        if (sexo === "F" || peso > pesoReferencia){
            mulheresAcima ++
        }

        // Condição mulher abaixo ou dentro do peso
        if (sexo === "F" || peso <= pesoReferencia){
            mulheresDentro ++
        }
         ciclo++
    }

    lerL.close();

    // Impressão de dados.
    if (acimaDoPeso > dentroDoPeso){
        process.stdout.write(`Ao todo temos ${acimaDoPeso} de pessoas acima do peso limite de ${pesoReferencia}kg.`)
        process.stdout.write(`Dessas pessoas, ${homensAcima} são homens e ${mulheresAcima} são mulheres.`)
    }

    
    if (acimaDoPeso < dentroDoPeso){
        process.stdout.write(`Ao todo temos ${dentroDoPeso} de pessoas dentro ou abaixo do peso limite de ${pesoReferencia}kg.`)
        process.stdout.write(`Dessas pessoas, ${homensDentro} são homens e ${mulheresDentro} são mulheres.`)
    }

    if (acimaDoPeso === dentroDoPeso){
        process.stdout.write(`Ao todo temos ${acimaDoPeso + dentroDoPeso} de pessoas sendo que ${acimaDoPeso} acima do peso limite de ${pesoReferencia}kg.`)
        process.stdout.write(`Dessas pessoas, ${homensAcima} são homens e ${mulheresAcima} são mulheres.`)
        process.stdout.write(`E, ${dentroDoPeso} dentro do limite de ${pesoReferencia}kg e desses ${homensDentro} homens e ${mulheresDentro} mulheres.`)
    }


}

function perguntas(perguntas){
    return new Promise((resolve) => {
        lerL.question(perguntas,resolve)
    });
}

cadastroPessoasPeso();