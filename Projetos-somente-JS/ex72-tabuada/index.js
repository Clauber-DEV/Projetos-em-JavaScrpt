/* M05 ex 072 Tabuada
 * O programa deve exibir uma tabuada elaborada em outra função 
 * cujo o multiplicador 
 * será determinado pelo usuário
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tabuada(tab) {
    let mult = [];
    for (let ind = 0; ind < 11; ind++) {
        let numero = ind * tab;
        setTimeout(() => {
            console.log(`${tab} X ${ind} = ${numero}`);
        }, 200 * ind);
    }
}

function inicio() {
    console.log("TABUADA X");
    rl.question("Qual tabuada quer que eu faça?: ", (num) => {
        tabuada(parseInt(num));
        rl.close();
    });
}

inicio();
