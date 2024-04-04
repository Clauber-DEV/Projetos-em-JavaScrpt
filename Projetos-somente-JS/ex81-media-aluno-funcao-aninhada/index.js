/* Programa para calcular a média de um aluno e determinar sua situação (reprovado, recuperação ou aprovado). */

function media(num, num2) {
    let totalm = (num + num2) / 2;
    return totalm; // retorno para a função situacao
}

function situacao(mediatot) {
    let resultado = "";
    if (mediatot > 0.0 && mediatot < 3.0) {
        resultado = "REPROVADO";
    } else if (mediatot >= 3.0 && mediatot < 6.0) {
        resultado = "RECUPERAÇÃO";
    } else if (mediatot >= 6.0) {
        resultado = "APROVADO";
    }
    return resultado; // retorno para a função inicio
}

function inicio() {
    let nota1 = 10.0,
        nota2 = 5.5;
    console.log("Com as notas", nota1, "e", nota2);
    console.log("o aluno está", situacao(media(nota1, nota2)));
}

inicio();
