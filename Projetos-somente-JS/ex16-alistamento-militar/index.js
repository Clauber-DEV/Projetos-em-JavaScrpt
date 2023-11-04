/** O programa deve receber a didade atual do usuário, relacinar com o ano atual e 
 * retornar os seguintes resultados:
 * - menos que 18 anos, não está na idade de se alistar.
 * - na idade de 18 anos está na idade de se alistar.
 * - maior que 18 anos ja passou da idade de se alistar.
*/

console.log("Alistamento militar obrigatório.")

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Em que ano nasceu?; ", function(anodeNascimento){
    
    let anonas = parseInt(anodeNascimento)

    const dataAtual = new Date
    const anoAtual = dataAtual.getFullYear()

    let minhaIdade = anoAtual - anonas

    if(minhaIdade < 18){
        console.log(`Sua idade é de ${minhaIdade} anos.`)
        console.log("Ainda não pode se alistar.")
    } else if(minhaIdade == 18 ){
        console.log(`Sua idade é de ${minhaIdade} anos.`)
        console.log("Procure a junta de serviço militar mais proximo para se alistar.")
    } else if(minhaIdade > 18 ){
        console.log(`Sua idade é de ${minhaIdade} anos.`)
        console.log("Sua idade para se alistar ja expirou.")
    }
    rl.close()
});