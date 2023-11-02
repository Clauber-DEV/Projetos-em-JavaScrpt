/**Calculando metros quadrados.
 * Calculo para saber quantas latas de tinta serão necessarias para pintar umma parede
 * sabendo que a cada lata de tinta pinta 2m².
 */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual a altura da parede?: ", function (altura) {
    rl.question("Qual a largura da parede?: ", function (largura) {
        let alt = parseInt(altura);
        let larg = parseInt(largura);

        let metroq = alt * larg
        let latatinta = metroq / 2

        console.log(`Orçamento:`)
        console.log(`Uma parede de ${alt} X ${larg} tem uma area de ${metroq}m².`)
        console.log(`Precisamos de ${latatinta} latas de tinta.`)
        rl.close();
    });
});