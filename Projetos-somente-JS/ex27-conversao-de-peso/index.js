
console.log("Qual será seu peso em outros planetas?\n" +
    "--------------------------\n" +
    "    ESCOLA SEU PLANETA\n" +
    "--------------------------\n" +
    "1\tMercúrio\n" +
    "2\tVênus\n" +
    "3\tMarte\n" +
    "4\tJúpter\n" +
    "5\tSaturno\n" +
    "6\tUrano\n" +
    "==========================\n")
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o número corespondente ao planeta que deseja: ", function (numeroPlaneta) {
    rl.question("Qual seu peso aqui na Terra?: ", function (meuPeso) {

        let peso = parseFloat(meuPeso);

        switch (numeroPlaneta) {
            case "1":
                let mercurio = peso * 0.37
                console.log(`Seu peso na Terra é ${peso}kg. mas em Mercurio será ${mercurio}`);
                break
            case "2":
                let venus = peso * 0.88
                console.log(`Seu peso na Terra é ${peso}kg. mas em Venus será ${venus}`);
                break
            case "3":
                let marte = peso * 0.38
                console.log(`Seu peso na Terra é ${peso}kg. mas em Marte será ${marte}`);
                break
            case "4":
                let jupter = peso * 2.64
                console.log(`Seu peso na Terra é ${peso}kg. mas em Jupter será ${jupter}`);
                break
            case "5":
                let saturno = peso * 1.15
                console.log(`Seu peso na Terra é ${peso}kg. mas em Saturno será ${saturno}`);
                break
            case "6":
                let urano = peso * 1.17
                console.log(`Seu peso na Terra é ${peso}kg. mas em Urano será ${urano}`);
                break
            default:
                console.log("Estes dados não constam no sistema.")
                break
        }

        rl.close()
    });
});
