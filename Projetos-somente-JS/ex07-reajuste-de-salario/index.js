/**Reajuste salarial com percentual variavel. */

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Nome do funcionário:", function (nome) {
    rl.question("Salário atual: ", function (salario) {
        rl.question("Reajuste: ", function (reajuste) {

            const sal = parseFloat(salario)
            const reaj = parseFloat(reajuste)

            const calculo = (reaj * sal) / 100
            const sal2 = sal + calculo

            console.log(`O funcionario(a) ${nome} ganhava ${sal}.`)
            console.log(`Depois do reajuste de ${reaj}% que dará uma acrescimo de ${calculo}.`)
            console.log(`Ficará um total de R$${sal2}.`)

            rl.close()
        });
    });
});