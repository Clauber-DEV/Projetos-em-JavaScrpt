// criando uma matrix 3x3 com números aleatórios en 1 a 10

let matriz = [];

for (let indl = 0; indl < 3; indl++) {
    let linha = [];

    for (let indc = 0; indc < 3; indc++) {
        let valoraleatorio = Math.floor(Math.random() * 10) + 1;
        linha.push(valoraleatorio)
    }
    matriz.push(linha);
}

// Comando para mostrar a matriz em forma de tabela.
for (let indl = 0; indl < 3; indl++) {
    for (let indc = 0; indc < 3; indc++) {
        process.stdout.write(`${matriz[indl][indc]}\t`) // comando para concatenar dados em uma só linha.
    }
    console.log("\n")
}

