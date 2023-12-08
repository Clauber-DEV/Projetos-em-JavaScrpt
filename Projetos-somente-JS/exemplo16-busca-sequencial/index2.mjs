/**código utilizando ECMAScript 
 * que cria uma interface utilizando o import ao em vez do require.
*/

import { createInterface } from 'readline';

const interfaceCriada = createInterface({
    input: process.stdin,
    output: process.stdout
});

async function buscaChave() {
    let incluirElementos = 10;
    let valores = new Array(incluirElementos);
    let chave = 0, indice = 0;
    let achei = false;

    for (indice = 0; indice < valores.length; indice++) {
        valores[indice] = Math.floor(Math.random() * 11);
    }

    const escolhaChave = await perguntas("Qual é a chave?: ");
    chave = parseInt(escolhaChave);

    for (indice = 0; indice < valores.length; indice++) {
        if (valores[indice] === chave) {
            console.log(`Encontrei a chave na posição: [${indice}].`);
            achei = true;
        }
    }

    if (!achei) {
        console.log(`\nInfelizmente a chave ${chave} não se encontra no VETOR.\n\n`);
    }

    interfaceCriada.close();
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        interfaceCriada.question(perguntar, resolve);
    });
}

buscaChave();
