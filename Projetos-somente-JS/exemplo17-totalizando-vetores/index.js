/* exemplo17 VETORES
 * Busca Sequencial em VETOR
 * método para encontrar o valor e em qual indece se encontra
 * e tratar os dados revelando a soma dos valores, 
 * a media dos valores e quais valores são maiores doque a chave.
 */

const CriarInterface = require(`readline`);

const Criar = CriarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function buscaChave() {

    let incluirValores = 10
    let valores = new Array(incluirValores);

    indice = 0, chave = 0,
        soma = 0, somaTotal = 0,
        media = 0

    for (indice = 0; indice < valores.length; indice++) {
        valores[indice] = Math.floor(Math.random() * 11);
    }

    for (indice = 0; indice < valores.length; indice++) {
        console.log(`[${valores[indice]}] `);
    }

    for (indice = 0; indice < valores.length; indice++) {
        somaTotal += valores[indice]
    }

    const qualValor = await perguntas("Quer que some acima de qual valor?: ")
    chave = parseInt(qualValor);
    for (indice = 0; indice < valores.length; indice++) {
        if (valores[indice] >= chave) {
            soma += valores[indice]
        }
    }

    media = somaTotal / valores.length

    console.log("Resultado da soma é ", soma)
    console.log(`A média dos valores é ${media.toFixed(2)}`)
    for (indice = 0; indice < valores.length; indice++) {
        if (valores[indice] > media) {
            console.log(`Indice [${indice}] valor ${valores[indice]}.`)
        }
    }
    Criar.close()
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        Criar.question(perguntar, resolve)
    })
}

buscaChave();