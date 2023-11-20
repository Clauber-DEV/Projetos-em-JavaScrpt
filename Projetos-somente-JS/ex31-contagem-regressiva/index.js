/*ex 031
    * Programa que leia do número determinado de forma decrescente e marque os multiplos 
    * determinados pelo o usuário. 
    * Operadores de controle do inicio
    * Sem a utilisação de "function async"
    */

const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

function marcaMultDecrs() {
    let iniCont, marcMult;

    lerL.question("De qual número comaçar?: ", function (inicioContagem) {
        iniCont = parseInt(inicioContagem);

        lerL.question("Quer marcar multiplos de quem?: ", function (marcaMultiplos) {
            marcMult = parseInt(marcaMultiplos)

            while (iniCont > 0) {
                if (iniCont % marcMult === 0) {
                    process.stdout.write(` -[${iniCont}]- `)
                } else {
                    process.stdout.write(` -${iniCont}- `)
                }
                iniCont--;
            }
            console.log(" -FIM!- ")
            lerL.close()
        });
    });
}

marcaMultDecrs();
