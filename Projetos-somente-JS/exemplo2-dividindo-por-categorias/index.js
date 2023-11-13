/**O Programa de receber  do usuário o sexo e fazer a seguinta analize:
 * se M ou m retornar Menino e somar q quantidade
 * se F ou f retornar Menina e somar q quantidade
 * para fazer esse proscedimento deve ser utilizado a estrutura de controle while e funções asincronas.
 */
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function sexos(totalgente) { // Função ascincrona.
    let totmenina = 0, totmenino = 0; // Total de integrantes.
    let c = 1;
    while (c <= totalgente) { // Estrutura de controle.
        const sx = await pergunta("Sexo: "); // função de pergunta que retorna a promessa

        if (sx == "F" || sx == "f") { // Estrutura de condição.
            totmenina++ // Acumulador.
            console.log("Menina"); // Saída de dados.
        }
        if (sx == "M" || sx == "m") {
            totmenino++
            console.log("Menino");
        } else {
            console.log("opção invalida!");
        }
        c++
        if (c > totalgente) { // saída de dados final
            console.log(` total de meninos ${totmenino}.\n total de meninas ${totmenina}.`);
            rl.close();
        }
    }
}

function pergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    })
}
sexos(n = 5) // Chama a função sexos
