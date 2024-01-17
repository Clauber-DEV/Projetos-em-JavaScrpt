/* ex59 Média da turma
*  O programa deve preencher um vetor com notas dos alunos da turma
*  mostrar a média da turma e mostrar quais alunos estão acima dessa média
*/

const criarInterface = require(`readline`);

const interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function mediaTurma() {

    console.log("________________________________");
    console.log("         Média da Turma");
    console.log("________________________________");

    const totalIndices = 6;
    const vetor = new Array(totalIndices);

    let soma = 0, media = 0

    for (let ind = 0; ind < vetor.length; ind++) {
        const notaAluno = await perguntas(`Nota do ${ind + 1}º aluno:`)
        let nota = parseInt(notaAluno)
        vetor[ind] = nota

        soma += nota
    }

    media = soma / vetor.length;

    console.log(`______________________________________`);
    console.log(`A média da turma é ${media.toFixed(2)}`);
    console.log(`______________________________________`);
    console.log(`Ficaram acima da média da turma:`);

    for (let ind = 0; ind < vetor.length; ind++) {
        if (vetor[ind] > media) {
            console.log(`${ind}`)
        }
    }
    console.log(`______________________________________`);
    interface.close();
}

function perguntas(perguntar) {
    return new Promise((resolve) => {
        interface.question(perguntar, resolve)
    });
};

mediaTurma();
