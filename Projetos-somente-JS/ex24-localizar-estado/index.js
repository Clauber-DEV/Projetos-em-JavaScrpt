/** o programa deve retornar se é fluminence se do Rio, paulista se de São Paulo, 
 * capichaba se do Espirito Santo ou desconhecido 
 * se for diferente de um desses três estados.
*/
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite as siglas do estado que nasceu: ", function (estado) {

    let st = estado.toUpperCase()

    if (st === "RJ") {
        console.log("Você é FLUMINENCE!");
    } else if (st === "SP") {
        console.log("Você é PAULISTA!");
    } else if (st === "ES") {
        console.log("Você é CAPICHABA!");
    } else {
        console.log("Desculpe, aida não tenho informações de onde você é.");
    }

    rl.close()
});