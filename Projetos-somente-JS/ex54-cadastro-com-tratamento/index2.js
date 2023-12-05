const readline = require('readline');

async function cadastroDePessoas() {
    const Interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let quantidade = 1;
    let velhoIdade, velhoNome, novoIdade, novoNome;

    let continuar = 'S';

    while (continuar === 'S') {
        console.log(`   ${quantidade}º pessoa.`);

        // Obter e validar o nome
        let nome;
        while (true) {
            nome = await perguntas('Nome: ');

            if (!/^[a-zA-ZÀ-ú\s]+$/.test(nome.trim())) {
                console.log('\n      ERRO!!! O nome deve ter somente letras.\n');
            } else if (nome.length <= 3) {
                console.log('\n      ERRO!!! O nome deve ter mais de três letras.\n');
            } else {
                break;
            }
        }

        // Obter e validar a idade
        let idade;
        while (true) {
            const entradaIdade = await perguntas('Idade: ');
            idade = parseInt(entradaIdade, 10);

            if (isNaN(idade) || idade <= 0 || idade > 130) {
                console.log('[ERRO] Idade deve ser um número entre 1 e 130.');
            } else {
                break;
            }
        }

        // Atualizar as informações de idade mais velha e mais jovem
        if (!velhoIdade || idade > velhoIdade) {
            velhoIdade = idade;
            velhoNome = nome;
        }

        if (!novoIdade || idade < novoIdade) {
            novoIdade = idade;
            novoNome = nome;
        }

        // Verificar se o usuário deseja continuar
        while (!['S', 'N'].includes(continuar)) {
            const querContinuar = await perguntas('Quer continuar? [S/N]: ');
            continuar = querContinuar.toUpperCase();
            if (!['S', 'N'].includes(continuar)) {
                console.log('[ERRO!] Digite S para sim ou N para não.');
            }
        }

        // Encerrar o cadastro se o usuário não quiser continuar
        if (continuar === 'N') {
            Interface.close();
            break;
        }

        quantidade++;
    }

    console.log('Ao todo, foram cadastradas', quantidade, 'pessoas.');
    console.log(velhoNome, 'é a pessoa mais velha com', velhoIdade, 'anos de idade.');
    console.log(novoNome, 'é a pessoa mais jovem com', novoIdade, 'anos de idade.');
}

function perguntas(pergunta) {
    return new Promise((resolve) => {
        Interface.question(pergunta, resolve);
    });
}

cadastroDePessoas();
