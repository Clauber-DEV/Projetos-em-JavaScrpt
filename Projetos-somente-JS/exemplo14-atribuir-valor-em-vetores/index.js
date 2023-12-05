/* exemplo14
 * variaveis compostas ou VETORES
 * exemplos de como atribuir valores aos VETORES
 */

function inicio() {
    let valores = [2, 45, 89, 6]; // Forma básica de atribuir valores aos VETORES

    /* Não se deve atribuir um valor a um índice inexistente ex: */
    // valores[4] = 44; // Índice [4] não existe

    /* Os valores de um índice podem ser substituídos ex: */
    valores[3] = 34; // O valor do índice [3] será substituído de 6 para 34

    for (let pos = 0; pos < 4; pos++) {
        // Função para exibir os valores atribuídos ao VETOR
        console.log(valores[pos] + "-");
    }
    console.log("FIM");

    let valores2 = [3, 5, 6]; // Forma compacta de atribuir valores a VETORES
    // No formato compacto, todos os índices declarados devem ser preenchidos, caso contrário, dará erro
    for (let pos = 0; pos < 3; pos++) {
        // Função para exibir os valores atribuídos ao VETOR
        console.log(valores2[pos] + "-");
    }
    console.log("FIN");

    /* Exemplo de como atribuir valores iguais a um vetor de forma automática */
    let valores3 = [];
    for (let pos = 0; pos < 5; pos++) {
        // Nesse caso, a variável pos indica o índice que mudará em cada ciclo
        valores3[pos] = 10;
    }
    for (let pos = 0; pos < 5; pos++) {
        // Função para exibir os valores atribuídos ao VETOR
        console.log(valores3[pos] + "-");
    }
    console.log("FIN");

    /* Exemplo de como atribuir valores diferentes ao VETOR utilizando a função sorteia */
    let valores4 = [];
    for (let pos = 0; pos < 6; pos++) {
        // Nesse caso, a variável pos indica o índice que mudará em cada ciclo
        valores4[pos] = sorteia(1, 50);
    }
    for (let pos = 0; pos < 6; pos++) {
        // Função para exibir os valores atribuídos ao VETOR
        console.log(valores4[pos] + "-");
    }
    console.log("FIN");

    /* Exemplo de como atribuir valores diferentes ao VETOR utilizando a função leia */
    let valores5 = [];
    for (let pos = 0; pos < 8; pos++) {
        // Nesse caso, a variável pos indica o índice que mudará em cada ciclo
        valores5[pos] = parseInt(prompt("Digite um valor:"));
    }
    for (let pos = 0; pos < 8; pos++) {
        // Função para exibir os valores atribuídos ao VETOR
        console.log(valores5[pos] + "-");
    }
    console.log("FIN");
}

inicio();
