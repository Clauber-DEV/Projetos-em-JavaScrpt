/** O programa de receber o ano de nascimento do usuário e retornar:
 * - quantos anos tem
 *  se expirou sua idade para se alistar ira retornar:
 *  quanto anos ja epirou e em que ano deveria ser seu alistamento
 *  se ainda não é a idade de se alistar irá retornar:
 * - o quanto falta para se alisatar e quando será o ano de seu alistamento e
 *  se ja é o ano de seu alistamento.
 */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual seu ano de nascimento: ", function (nascimento) {

    let nasc = parseInt(nascimento);

    let dataAtual = new Date();
    let idade = dataAtual.getFullYear() - nasc;
    let diferenca1 = idade - 18;
    let diferenca2 = 18 - idade;
    let diferenca3 = diferenca2 + dataAtual.getFullYear();
    let diferenca4 = nasc + 18;

    if (idade > 18) {
        console.log(`Você tem ${idade} anos.`);
        console.log(`Sua idade para se alistar expirou a ${diferenca1} anos em ${diferenca4}.`);
    } else if (idade < 18) {
        console.log(`Você ainda tem ${idade} anos.`);
        console.log(`Ainda faltam ${diferenca2} anos. Só em ${diferenca3}.`);
    } else {
        console.log(`Parabens!!\n Esse ano você é obrigado a se alistar pois ja tem 18 anos.`);
    }
    rl.close()
});
