/* M05 ex 075 Analisando VETOR
 * O programa deve analisar o vetor  
 * através de um disparo com parâmetros 
 * para uma função e 
 * exibir os seguintes dados na tela:
 * número de índices
 * valores nos índices
 * quais são pares e ímpares
 */

function analisar(vetor) {
    console.log("O vetor possui " + vetor.length + " elementos...\n");
    for (let ind = 0; ind < vetor.length; ind++) {
        setTimeout(() => {
            process.stdout.write(`  [${ind}] -> ${vetor[ind]}`);
        }, 300 * ind);
    }
    console.log("\n");
    console.log("Valores pares nos índices: ");
    for (let ind = 0; ind < vetor.length; ind++) {
        if (vetor[ind] % 2 === 0) {
            setTimeout(() => {
                process.stdout.write(`${ind} `);
            }, 200 * ind);
        }
    }
    console.log("\nValores Ímpares nos índices: ");
    for (let ind = 0; ind < vetor.length; ind++) {
        if (vetor[ind] % 2 !== 0) {
            setTimeout(() => {
                process.stdout.write(`${ind} `);
            }, 200 * ind);
        }
    }
}

function inicio() {
    console.log("Analisando o seguinte VETOR...\n");
    setTimeout(() => {
        const vet = [2, 8, 7, 4, 3, 1];
        analisar(vet);
    }, 600);
}

inicio();
