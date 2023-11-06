const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informa a distancia da percurso em Km: ", function (distancia) {

    let dist = parseFloat(distancia);

    if (dist < 200) {
        let preco1 = dist * 0.50
        console.log(`Sua viagem tem a distancia menor que 200Km.`);
        console.log(`Portanto terá uma tarifa de 0.50 por Km.`);
        console.log(`O percurso de ${dist}Km ficará no valor de R$${preco1.toFixed(2)}.`);
        console.log(`Boa viagem!`)
    } else {
        let preco2 = dist * 0.35
        console.log(`Sua viagem tem a distancia maior que 200Km.`);
        console.log(`Portanto terá uma tarifa de 0.35 por Km.`);
        console.log(`O percurso de ${dist}Km ficará no valor de R$${preco2.toFixed(2)}.`);
        console.log(`Boa viagem!`)
    }
    rl.close();
});