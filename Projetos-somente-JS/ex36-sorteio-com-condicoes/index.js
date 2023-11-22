/*ex 036 
 * O programa deve ler quantos valores ele deve sortear
 * analisar cada um deles e definir,
 * quantos são maiores que dez e quants são divisiveis por 3
 * sorteando com condições utilisando 
 * repetição aninhadas com teste lógico no início
 */

const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sorteioNumeros() {
    let ciclo = 1,
        quant = 0,
        sort = 0,
        maior10 = 0,
        div = 0,
        somam = 0

    lerL.question("Quantos numeros vou sortear?: ", function (quantiSorteio) {
        quant = parseInt(quantiSorteio);
        console.log(`Sorteando ${quant} números...`);

        while (ciclo <= quant) {
            sort = Math.floor(Math.random() * 30) + 1
            process.stdout.write(` .${sort}. `)

            if (sort > 10) {
                maior10++
            }
            if (sort % 3 === 0) {
                div++
            }
            somam += sort
            ciclo++
        }

        console.log(`\nNúmeros maiores que 10: ${maior10}`);
        console.log(`Números divisíveis por 3: ${div}`);
        console.log(`Soma dos números sorteados: ${somam}`);

        lerL.close()
    });
}

sorteioNumeros();
