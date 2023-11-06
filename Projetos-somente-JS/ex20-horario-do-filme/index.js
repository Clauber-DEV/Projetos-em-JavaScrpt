/** O programa deve receber os seguinte dados do usuário:
 * - horário do filme
 * - preço do ingresso
 * - quanto de dinheiro o usuário tem
 * relacionar o horário do filme com o horário atual, a quantidade de dinheiro com o 
 * preço do ingresso e retornar ao usuário se ainda pode ver o filme.
 */

const { stdout } = require("process");
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: stdout
});

rl.question("Horario do filme: ", function (hora) {
    rl.question("Preço do ingresso: ", function (ingresso) {
        rl.question("Quanto de dinheiro você tem?: ", function (dinheiro) {

            let dataAtual = new Date(); // Comando para pegar a data completa.
            let hratual = dataAtual.getHours(); // Comando para pegar a hora atual.

            // Converção de dados
            let hr = parseFloat(hora);
            let ingr = parseFloat(ingresso)
            let grana = parseFloat(dinheiro)

            if (hr > hratual && grana >= ingr) { // Teste lógico
                console.log("Você pode comprar o ingresso para assistir o filme.")
                console.log("      BOM FILME!!")
            } else {
                console.log("Horario exedido ou dinheiro insuficiente.")
            }

            rl.close()
        });
    });
});