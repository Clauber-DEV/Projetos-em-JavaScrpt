/**Programa deve apresentar as funções aritiméticas basicas do JavaScript. */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Entrada de dados e pergunta ao usuário.
rl.question(`Digite um valor: `, function (valor1) {
    rl.question(`Digite outro valor: `, function (valor2) {

        // Nesessaria a converção de string para numberint.
        const v1 = parseInt(valor1);
        const v2 = parseInt(valor2);

        // Operações aritimeéticas.
        const n1 = v1 + v2;
        const n2 = v1 - v2;
        const n3 = v1 * v2;
        const n4 = v1 / v2;
        const n5 = Math.floor(v1 / v2);
        const n6 = v1 % v2;

        // Saída de dados e resultdos.
        console.log("Soma = " + n1)
        console.log("Subtração " + n2)
        console.log("Multiplicação " + n3)
        console.log("Divisão inteira" + n4)
        console.log("Divisão real" + n5)
        console.log("Resto da divisão" + n6)

        rl.close();// Fechamento da interface de leitura.
    })
})
