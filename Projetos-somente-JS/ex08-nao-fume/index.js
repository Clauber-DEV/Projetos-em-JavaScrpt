/**Não fume
 * quanto tempo de vida se perde ao fumar cigarros?
 */

console.log("Cada cigarro reduz em media dez minutos de vida.")
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("À quantos anos você fuma?: ", function (anos) {
    rl.question("E quantos por dia?: ", function (quanto) {

        const ano = parseInt(anos)
        const quant = parseInt(quanto)

        const totano = ano * 365 * quant
        const total = totano * 10 / 1440
        console.log(`Ao todo você fumou ${totano} cigarros em sua vida.`)
        console.log(`Estima-se que você perdeu ${total.toFixed(2)} dias de vida`)
        rl.close()
    })
})