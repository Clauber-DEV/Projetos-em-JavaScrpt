const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function sexos(totalgente){
    const sx  = await pergunta("Sexo: ");
    let totmenina, totmenino
    while(c = 1 <= totalgente){
        if(sx == "F" || sx == "f"){
            totmenina++
            console.log("Menina");
        }
        if(sx == "M" || sx == "m"){
            totmenino++
            console.log("Menino");
        } else {
            console.log("opção invalida!");
        }
        c++
        if( c > 5){
            console.log(` total de meninos ${totmenino}./n total de meninas ${totmenina}.`);
        }
    }
}

function pergunta(pergunta){
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
        sexos (n = 5)
    })
}
