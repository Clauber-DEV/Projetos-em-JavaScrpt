const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pessoaMaisVelha = { nome: '', idade: -1 };
let pessoaMaisNova = { nome: '', idade: Infinity };

function cadastrarPessoas() {
    rl.question("Quantas pessoas deseja cadastrar? ", function (quantidade) {
        const totalPessoas = parseInt(quantidade);

        if (totalPessoas <= 0) {
            console.log("Por favor, insira um número válido de pessoas.");
            rl.close();
            return;
        }

        let contador = 0;

        function coletarDados() {
            rl.question(`Nome da pessoa ${contador + 1}: `, function (nome) {
                rl.question(`Idade de ${nome}: `, function (idade) {
                    const idadeNum = parseInt(idade);

                    if (isNaN(idadeNum) || idadeNum < 0) {
                        console.log("Por favor, insira uma idade válida.");
                        coletarDados();
                        return;
                    }

                    if (idadeNum > pessoaMaisVelha.idade) {
                        pessoaMaisVelha = { nome, idade: idadeNum };
                    }

                    if (idadeNum < pessoaMaisNova.idade) {
                        pessoaMaisNova = { nome, idade: idadeNum };
                    }

                    contador++;

                    if (contador < totalPessoas) {
                        coletarDados();
                    } else {
                        mostrarResultados();
                    }
                });
            });
        }

        coletarDados();
    });
}

function mostrarResultados() {
    console.log(`\nPessoa mais velha: ${pessoaMaisVelha.nome}, Idade: ${pessoaMaisVelha.idade}`);
    console.log(`Pessoa mais nova: ${pessoaMaisNova.nome}, Idade: ${pessoaMaisNova.idade}`);
    rl.close();
}

cadastrarPessoas();
