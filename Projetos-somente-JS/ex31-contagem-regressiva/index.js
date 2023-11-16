
/** analizar depois */
const readline = require('readline');
const u = require('util'); // Se precisar da função u.aguarde(), substitua 'util' por 'u'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inicio() {
    let cont, marc;

    rl.question("De onde quer começar? : ", function (entradaCont) {
        cont = parseInt(entradaCont);

        rl.question("Os MULTIPLOS de quem você quer marcar? : ", function (entradaMarc) {
            marc = parseInt(entradaMarc);

            console.log("   CONTANDO...\n");

            while (cont > 0) {
                if (cont % marc === 0) {
                    process.stdout.write(` -[${cont}]- `);
                } else {
                    process.stdout.write(` -${cont}- `);
                }
                cont--;

                aguarde(500);
            }

            aguarde(800);
            console.log(" -FIM!- ");
            rl.close();
        });
    });
}

function aguarde(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

inicio();