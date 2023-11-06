/**O programa dee receber 3 valores e entraga-los em ordem decrescente  */
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o 1º valor: ", function (valor1) {
    rl.question("Digite o 2º valor: ", function (valor2) {
        rl.question("Digite o 3º valor: ", function (valor3) {

            let num1 = parseInt(valor1);
            let num2 = parseInt(valor2);
            let num3 = parseInt(valor3);

            if (num1 > num2 && num1 > num3 && num2 > num3){
                console.log(num1, num2, num3);
            }else if (num1 > num3 && num1 > num2 && num3 > num2){
                console.log(num1, num3, num2);
            }else if (num2 > num1 && num2 > num3 && num1 > num3){
                console.log(num2, num1, num3);
            }else if (num2 > num3 && num2 > num1 && num3 > num1){
                console.log(num2, num3, num1);
            }else if (num3 > num1 && num3 > num2 && num1 > num2){
                console.log(num3, num1, num2);
            }else if (num3 > num2 && num3 > num1 && num2 > num1){
                console.log(num3, num2, num1);
            }else if (num1 == num2 || num1 == num3 || num2 == num3){
                console.log(`Dois ou mais algarismos iguais.`);
            }else {
                console.log(`Valores não suportados.`);
            }
            rl.close()
        });
    });
});