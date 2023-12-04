/*  ex 054
 *  validação de dados aninhados
 *  velidando nome, idade, continuar ou não
 */

const criarInterface = require(`readline`);

const Interface = criarInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function cadastroDePessoas(){
    let quantidade = 1, numero = 0, velhoIdade = 0, novoIdade = 0

	let continuar = "S", idade, nome = "", velhoNome = "", novoNome = ""

    while(continuar == "S"){
        
        
        
        do {
            const querContinuar = await perguntas(`Quer continuar? [S/N]: `);
            continuar = querContinuar.toUpperCase();
            if(!["S", "N"].includes(continuar)){
                console.log("[ERRO!] Digite S para sim ou N para não.");
            }
        } while(!["S","N"].includes(continuar));

        if (continuar === "N"){
            Interface.close()
            break
        }
    }
}

function perguntas(perguntar){
    return new Promise((resolve) => {
        Interface.question(perguntar, resolve)
    })
}

cadastroDePessoas();