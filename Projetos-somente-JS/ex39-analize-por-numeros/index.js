/*  ex 039 FLAG
 *  O programa deve ler os dados inseridos 
 *  até que o usuário digite o FLAG que é 9999
 *  repetição com FLAG
 */

const lerLinha = require(`readline`);

const lerL = lerLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function analizeNum() {
    let numero = 0, soma = 0, quantitdade = 0, media = 0, maior = 0;

    while (numero !== 9999) {
        num = await perguntas("Digite um número: ");
        numero = parseInt(num);

        if (numero !== 9999) {
            quantitdade++;
            soma += numero;
        }

        if (quantitdade === 1) {
            maior = numero;
        } else {
            if (numero !== 9999 && maior < numero) {
                maior = numero;
            }
        }
    }
    lerL.close();
    media = soma / quantitdade;

    console.log(`Quantidade de valores : ${quantitdade}`);
    console.log(`Soma: ${soma}`);
    console.log(`A média dos valores será: ${media.toFixed(2)}`);
    console.log(`O maior número digitado é: ${maior}`);
    console.log(`Fim!`);
}

function perguntas(perguntas) {
    return new Promise((resolve) => {
        lerL.question(perguntas, resolve);
    });
}

analizeNum();