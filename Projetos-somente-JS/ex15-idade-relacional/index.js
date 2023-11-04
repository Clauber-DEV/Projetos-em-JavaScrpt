/** O programa deve receber o ano de nasciento do usuário e subtrai-lo
 * pelo ano atual e fazer a seguinte avaliação:
 * se for maior de 65 anos será fia de prioridade caso contrario se fila normal.
 */

console.log("Bem vindo ao nosso Banco!")

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Entrada de dados 
rl.question("Qual ano nasceu?: ", function (meuano) {
    // conveção de valor
    let ano = parseInt(meuano)

    const dataatual = new Date() // Comando para extrair, ano, mes, dia e hora atual do sistema.
    const anoatual = dataatual.getFullYear() // Comando para extrair o ano atual apartir da data atual.

    // Calculo.
    let minhaidade = anoatual - ano

    // Teste lógico.
    if (minhaidade >= 65) {
        console.log(`Você tem ${minhaidade} anos.`)
        console.log("Por favor dirija-se a fila de prioridade.")
    } else {
        console.log(`Você tem ${minhaidade} anos.`)
        console.log("Dirija-se a fila para seu atendimento.")
    }

    rl.close()
});