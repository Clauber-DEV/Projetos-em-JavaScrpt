/** Reloginho besta */

cronometro();
async function cronometro() {
    let ciclo3 = 0, segundo = 0, minuto = 0, hora = 0

    for (ciclo3 = 1; ciclo3 <= 24; ciclo3++) {

        let ciclo2 = 0
        for (ciclo2 = 1; ciclo2 <= 60; ciclo2++) {

            let ciclo1 = 0
            for (ciclo1 = 1; ciclo1 <= 60; ciclo1++) {

                console.log(`${hora}:${minuto}:${segundo}`)

                segundo++
                await aguarde(1000)
                console.clear()
            }
            minuto++
            segundo -= segundo
        }
        hora++
        minuto -= minuto
    }
}


function aguarde(milisegundos) {
    return new Promise(resolve => setTimeout(resolve, milisegundos))
};
