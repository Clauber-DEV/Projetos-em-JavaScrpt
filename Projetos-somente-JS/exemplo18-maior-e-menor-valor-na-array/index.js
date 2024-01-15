/** exemplo 18 
 * exemplo de como mostrar e analizar o maior e menor valor dentro de uma array e
 * imprimir na tela.
 */

const CriarInterface = require(`readline`);

const Criar = CriarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function maiorMenor() {
    let quantidadeIndices = 9
    let valores = new Array(quantidadeIndices);

    let maiorValor = 0, menorValor = 0, indice = 0;

    for (indice = 0; indice < valores.length; indice++) {
        valores[indice] = Math.floor(Math.random() * 11);
    }

    for (indice = 0; indice < valores.length; indice++) {
        process.stdout.write(` ${valores[indice]}`);
        await aguarde(400);

        if (indice === 0) {
            maiorValor = valores[indice]
            menorValor = valores[indice]
        } else {
            if (valores[indice] > maiorValor) {
                maiorValor = valores[indice]
            }

            if (valores[indice] < menorValor) {
                menorValor = valores[indice]
            }
        }
    }
    console.log();

    await aguarde(300)
    console.log(`Maior valor encontrado: ${maiorValor}`);
    for (indice = 0; indice < valores.length; indice++) {
        if (valores[indice] === maiorValor) {
            console.log(`Maior valor encontrado no indice [${indice}]`)
        }
    }

    await aguarde(300)
    console.log(`Menor valor encontrado: ${menorValor}`);
    for (indice = 0; indice < valores.length; indice++) {
        if (valores[indice] === menorValor) {
            console.log(`Menor valor encontrado no indice [${indice}]`)
        }
    }

    Criar.close()

}

function aguarde(milissegundos) {
    return new Promise(resolve => setTimeout(resolve, milissegundos))
}
maiorMenor()