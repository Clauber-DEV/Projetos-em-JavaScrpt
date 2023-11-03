/** O programa deve apresentr as seguintes converções de medida:*/

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Distancia em Metros: `, function (distancia) { // Entrada de dados.

    // Conversor de string para numberint.
    const dist = parseInt(distancia)

    // Calculo.
    const m1 = dist / 1000;
    const m2 = dist / 100;
    const m3 = dist / 10;
    const m4 = dist * 10;
    const m5 = dist * 100;
    const m6 = dist * 1000;

    // Saída de dados.
    console.log(m1.toFixed(2) + "km");
    console.log(m2.toFixed(2) + "Hm");
    console.log(m3.toFixed(2) + "Dam");
    console.log(m4.toFixed(2) + "dm");
    console.log(m5.toFixed(2) + "cm");
    console.log(m6.toFixed(2) + "mm");

    rl.close();
});