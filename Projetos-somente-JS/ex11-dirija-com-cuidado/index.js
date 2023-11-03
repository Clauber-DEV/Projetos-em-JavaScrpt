/** O programa deve avaliar a velocidade do veículo e aplicar multa caso passe de 80kmh
 * utilizando condição simples.
 */

const readline = require(`readline`);

const rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl1.question(`Velocidade do carro?: `, function (velocidade) {
    let vel = parseInt(velocidade);
    if (vel > 80) { // aplicação da condição simplies if == se.
    }
    console.log("Dirija com cuidado!")
    rl1.close()
});