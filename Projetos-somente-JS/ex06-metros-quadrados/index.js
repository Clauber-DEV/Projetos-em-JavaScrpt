/**Calculando metros quadrados.
 * Calculo para saber quantas latas de tinta serão necessarias para pintar umma parede
 * sabendo que a cada lata de tinta pinta 2m².
 */

// criação de interface de linha de comando interativa da linha 7 a linha 15.
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual a altura da parede?: ", function (altura) {
    rl.question("Qual a largura da parede?: ", function (largura) {

        // Converção de strng para numberint.
        let alt = parseInt(altura);
        let larg = parseInt(largura);

        // Calculo.
        let metroq = alt * larg
        let latatinta = metroq / 2

        // Saída de dados
        console.log(`Orçamento:`)
        console.log(`Uma parede de ${alt} X ${larg} tem uma area de ${metroq}m².`)
        console.log(`Precisamos de ${latatinta} latas de tinta.`)

        rl.close();
    });
});