/**TIRANDO MÉDIA utulizando acumulador e contador 
    com repetição de inicio  */
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quantos números o deseja?: ", function (total) {

    while( c = 1 <= total){
        
        rl.question("Digite suas notas: ", function (notas) {
            
            let somaNotas = somaNotas + notas
            console.log(`Ciclo ${c -1} soma ${somaNotas}`)
            console.log(`Ciclo ${c -1} soma ${notas}`)
            rl.close()
        });
        c++
    }
    let media = somaNotas / total
    console.log(`A soma foi ${somaNotas}`)
    console.log(`E a média foi de ${media}`)
});
