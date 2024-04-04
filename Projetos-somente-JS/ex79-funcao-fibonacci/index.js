/* Programa para gerar a sequência de Fibonacci com base no número fornecido pelo usuário.
 * A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois anteriores.
 */

function fibonacci(num) {
    let sequencia = "0 - 1 - ";
    let soma1 = 0, soma2 = 1, soma3 = 0;
    for (let ind = 1; ind <= num; ind++) {
        soma3 = soma1 + soma2;
        sequencia += soma3 + " - ";
        soma1 = soma2;
        soma2 = soma3;
    }
    return sequencia + "FIM!";
}

function inicio() {
    const quant = parseInt(prompt("Quantas sequências você deseja na sequência Fibonacci?"));
    console.log("Sequência Fibonacci:", fibonacci(quant));
}

inicio();
